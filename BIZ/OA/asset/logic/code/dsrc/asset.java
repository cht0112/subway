import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import com.justep.model.ModelUtils;
import com.justep.system.context.ContextHelper;
import com.justep.system.data.KSQL;
import com.justep.system.data.Table;
import com.justep.system.util.BizUtils;
import com.justep.system.util.CommonUtils;

public class asset {

	private static class rAssetInfo {
		String fIDs;
		String fError;
	}

	private static rAssetInfo canAssetIn(Connection conn, String assetInIDs)
			throws Exception {
		rAssetInfo aIDs = new rAssetInfo();
		Statement dstmt = null;
		ResultSet rs = null;
		String IDs = "", errors = "", sql = null;
		try {
			String strDatabaseType = conn.getMetaData().getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("sybase")) {
				sql = "select coalesce(case when c.fid is not null then '资产编号已存在' else null end,'校验通过') as error,d.fid,d.fcode from"
						+ " (select * from oa_as_ind where fid in ("
						+ assetInIDs
						+ ")) d"
						+ " left join oa_as_card c  on c.fcode = d.fcode";
			} else {
				sql = "select coalesce(case when c.fid is not null then '资产编号已存在' else null end,'校验通过') as error,d.fid,d.fcode from"
						+ " (select * from oa_as_ind where fid in ("
						+ assetInIDs
						+ ")) d"
						+ " left join oa_as_card c  on c.fcode = d.fcode";
			}
			dstmt = conn.createStatement();
			rs = dstmt.executeQuery(sql);
			while (rs.next()) {
				if (rs.getString("error").equals("校验通过")) {
					if (IDs.equals("")) {
						IDs = "'" + rs.getString("fid") + "'";
					} else {
						IDs = IDs + ",'" + rs.getString("fid") + "'";
					}
				} else {
					errors = errors + rs.getString("fcode") + "  "
							+ rs.getString("error") + "\n";
				}
			}
			aIDs.fIDs = IDs;
			aIDs.fError = errors;
		} finally {
			if (rs != null) {
				rs.close();
				rs = null;
			}
			if (dstmt != null) {
				dstmt.close();
				dstmt = null;
			}
		}
		return aIDs;
	}

	public static String assetIn(String assetInDate, String assetInIDs)
			throws Exception {
		String sql = null, result = "资产入库数据信息修改失败！";
		Statement stmt = null;
		Connection conn = null;
		String strCurrentDate = null, updateSQL = null;
		try {
			conn = ModelUtils.getConnection("/OA");
			ContextHelper.getTransaction().begin(conn);
			String strDatabaseType = conn.getMetaData()
					.getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("sybase")) {
				strCurrentDate = "convert(date,'" + assetInDate + "')";
				updateSQL = "update oa_as_inm l"
						+ " set fstate = 1, fstatename = '已完成' where not exists (select  fID"
						+ " from oa_as_ind"
						+ " where fMasterID = l.fid and fisin <> 1)";
			} else {
				strCurrentDate = "'" + assetInDate + "'";
				updateSQL = "update oa_as_inm "
						+ " set fstate = 1, fstatename = '已完成'"
						+ " from oa_as_inm l"
						+ " where not exists (select  fID" + " from oa_as_ind"
						+ " where fMasterID = l.fid and fisin <> 1)";
			}

			rAssetInfo aIDs = canAssetIn(conn, assetInIDs);
			if (!aIDs.fIDs.equals("")) {
				sql = "update oa_as_ind set fisin = 1,fisinname = '已入库',fdate="
						+ strCurrentDate + " where fid in (" + aIDs.fIDs + ")";
				stmt = conn.createStatement();
				stmt.executeUpdate(sql);
				stmt.executeUpdate(updateSQL);
				insertAssetCard(conn, aIDs.fIDs);
				modifyBuyOrderInfo(conn, aIDs.fIDs);
			}
			if (aIDs.fError.equals("")) {
				result = "资产入库成功！";
			} else {
				result = aIDs.fError;
			}
		} finally {
			if (stmt != null) {
				stmt.close();
				stmt = null;
			}
			if (conn != null) {
				conn.close();
				conn = null;
			}
		}
		return result;
	}

	public static void insertAssetCard(Connection conn, String assetInIDs)
			throws Exception {
		Statement pstmt = null,qstmt=null,ustmt=null;
		String sql = null, strID = null,qsql=null,dateTime=null,usql=null,fCode=null;
		ResultSet rs = null;
		try {
			String strDatabaseType = conn.getMetaData()
					.getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				strID = "sys_guid()";
				dateTime = "sysdate";
			} else {
				strID = "newid()";
				dateTime = "getdate()";
			}
			String date  = CommonUtils.getCurrentDate().toString().replaceAll("-", "");
			qstmt = conn.createStatement();
			qsql = "select d.fID as subFID,d.fCode,d.fKindID,e.fcode as fKindCode,d.fKind,d.fName,d.fSpecType,d.fUnitID,d.fUnit,d.fCheckID,d.fCheckNO,0,'闲置',d.fAmount,d.fAmount,0,m.fModeID,m.fMode,m.fDutyOgnID,m.fDutyOgnName,m.fDutyOgnFID,m.fDutyDeptID,m.fDutyDeptName,m.fDutyPosID,m.fDutyPosName,m.fDutyPsnID,m.fDutyPsnName,m.fDutyPsnFID,m.fDutyPsnFName,m.fCreateOgnID,m.fCreateOgnName,m.fCreateDeptID,m.fCreateDeptName,m.fCreatePsnID,m.fCreatePsnName,m.fCreatePsnFID,m.fCreatePsnFName,m.fCreateTime,m.fUpdatePsnID,m.fUpdatePsnName,m.fUpdateTime,0,m.fid,m.fNO,d.fBuyApplyID,d.fBuyApplyNO,d.fServicTag,d.fESCode,d.fSHKSSJ,d.fSHJSSJ,'已续保'  from OA_AS_InM m join OA_AS_InD d on m.fid = d.fMasterID and d.fid in (" + assetInIDs + ") join oa_pub_basecode e on e.fid = d.fkindid";
			rs = qstmt.executeQuery(qsql);
			//System.out.println("qsql:"+qsql);
			
			String ognID = com.justep.appCommon.SysUtils.getCurrentOgnID();
			String ognName = com.justep.appCommon.SysUtils.getCurrentOgnName();
			String deptID = com.justep.appCommon.SysUtils.getCurrentDeptID();
			String deptName = com.justep.appCommon.SysUtils
					.getCurrentDeptName();
			String psnID = com.justep.appCommon.SysUtils.getCurrentPersonID();
			String psnName = com.justep.appCommon.SysUtils
					.getCurrentPersonName();
			String psnFID = com.justep.appCommon.SysUtils
					.getCurrentPersonMemberFID();
			String psnFName = com.justep.appCommon.SysUtils
					.getCurrentPersonMemberFName();
			if ((deptID == null) || (deptID.equals(""))
					|| (deptID.equals("null"))) {
				deptID = ognID;
				deptName = ognName;
			}
			
			while (rs.next()) {
				pstmt = conn.createStatement();
				fCode = BizUtils.createNextSequenceString(date+"-"+rs.getString("fKindCode")+"-", "000");
//				fCode = rs.getString("fKindCode");
				sql = "insert into OA_AS_Card(fid,"
					+ "fCode,fKindID,fKind,fName,fSpecType,fUnitID,fUnit,fCheckID,fCheckNO,"
					+ "fStatus,fStatusName,"
					+ "fOriginValue,fRemainValue,"
					+ "fAddDepreValue,fSource,fSourceName,"
					+ "fDutyOgnID,fDutyOgnName,fDutyOgnFID,"
					+ "fDutyDeptID,fDutyDeptName,"
					+ "fDutyPosID,fDutyPosName,"
					+ "fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,"
					+ "fCreateOgnID,fCreateOgnName,"
					+ "fCreateDeptID,fCreateDeptName,"
					+ "fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,"
					+ "fUpdatePsnID,fUpdatePsnName,fUpdateTime,version,fAssetInID," 
					+ "fAssetInNO,fBuyApplyID,fBuyApplyNO,fExtendStr1,fExtendStr2,fExtendDate1,fExtendDate2,fExtendStr4,fAssetConfirm)"
					+ " select '"
					+ CommonUtils.createGUID()
					+ "','"+fCode 
					+ "',fKindID,fKind,fName,fSpecType,fUnitID,fUnit,fCheckID,fCheckNO,"
					+ "'0','闲置',"
					+ "d.fAmount,d.fAmount,"
					+ "0,fModeID,fMode,"
					+ "fDutyOgnID,fDutyOgnName,fDutyOgnFID,"
					+ "fDutyDeptID,fDutyDeptName,"
					+ "fDutyPosID,fDutyPosName,"
					+ "fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,'"
					+ ognID
					+ "','"
					+ ognName
					+ "','"
					+ deptID
					+ "','"
					+ deptName
					+ "','"
					+ psnID
					+ "','"
					+ psnName
					+ "','"
					+ psnFID
					+ "','"
					+ psnFName
					+ "',"
					+ dateTime
					+ ",'"
					+ psnID
					+ "','"
					+ psnName
					+ "',"
					+ dateTime
					+ ",0,m.fid,m.fNO,d.fBuyApplyID,d.fBuyApplyNO,fServicTag,fESCode,fSHKSSJ,fSHJSSJ,'已续保','未确认' "
					+ "from OA_AS_InM m,OA_AS_InD d "
					+ "where m.fid = d.fMasterID and d.fid = '" + rs.getString("subFID") + "'";
				System.out.println(sql);
				pstmt.executeUpdate(sql);
				ustmt = conn.createStatement();
				usql = "update OA_AS_InD set fCode = '"+fCode+"' where fID ='"+rs.getString("subFID")+"'";
				ustmt.executeUpdate(usql);
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("资产入库失败!");
		} finally {
			if (pstmt != null) {
				pstmt.close();
				pstmt = null;
			}
			if (qstmt != null) {
				qstmt.close();
				qstmt = null;
			}
			if (ustmt != null) {
				ustmt.close();
				ustmt = null;
			}
			if (rs != null) {
				rs.close();
				rs = null;
			}
		}
	}

	private static void modifyBuyOrderInfo(Connection conn, String assetInIDs)
			throws Exception {
		Statement qstmt = null;
		ResultSet rs = null;
		String sql = null;

		try {
			qstmt = conn.createStatement();
			sql = "select count(fid) as ct,fbuydetailid from oa_as_ind  where fid in ("
					+ assetInIDs
					+ ") and fbuydetailid is not null group by fbuydetailid";
			rs = qstmt.executeQuery(sql);
			while (rs.next()) {
				sql = "update OA_AS_BuyApplyD set fInNum= fInNum + "
						+ rs.getInt("ct") + "where fid='"
						+ rs.getString("fbuydetailid") + "'";
				qstmt.addBatch(sql);
			}
			qstmt.executeBatch();
			sql = "update OA_AS_BuyApplyM set fstate = 1,fstatename = '已入库' where fid in (select fmasterid from OA_AS_BuyApplyD where fInNum < fBuyNum  group by fmasterid having count(fID) = 0)";
		} finally {
			if (rs != null) {
				rs.close();
				rs = null;
			}
			if (qstmt != null) {
				qstmt.close();
				qstmt = null;
			}
		}
	}

	/**
	 * 生成资产安排记录
	 * 
	 * @param assetID
	 * @param arrangeDate
	 * @throws Exception
	 */
	public static void assetArrangeRecord(String assetID, String arrangeDate)
			throws Exception {
		Statement stmt = null, qStmt = null;
		ResultSet rs = null;
		String sql = null;
		String strID = "";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String strDatabaseType = conn.getMetaData()
					.getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				strID = "sys_guid()";
				arrangeDate = "to_date('" + arrangeDate + "','yyyy-mm-dd')";
			} else {
				strID = "newid()";
				arrangeDate = "CAST('" + arrangeDate + "' as datetime)";
			}
			qStmt = conn.createStatement();
			try {
				sql = "update OA_AS_UseRecord set fEndDate=" + arrangeDate
						+ " where fAssetID='" + assetID
						+ "' and fEndDate is null";
				qStmt.execute(sql);
			} finally {
				if (qStmt != null) {
					qStmt.close();
					qStmt = null;
				}
			}
			stmt = conn.createStatement();
			try {
				sql = "insert into OA_AS_UseRecord"
						+ "(fid,fAssetID,fKindID,fKind,fCode,fName,fSpecType,"
						+ "fDutyOgnID,fDutyOgnName,"
						+ "fDutyDeptID,fDutyDeptName,"
						+ "fDutyPosID,fDutyPosName,"
						+ "fDutyPsnID,fDutyPsnName,fDutyPsnFID,fDutyPsnFName,"
						+ "fBeginDate,fRemark,version) "
						+ "select "
						+ strID
						+ ",c.fID,c.fKindID,c.fKind,c.fCode,c.fName,c.fSpecType,"
						+ "c.fDutyOgnID,c.fDutyOgnName,"
						+ "c.fDutyDeptID,c.fDutyDeptName,"
						+ "c.fDutyPosID,c.fDutyPosName,"
						+ "c.fDutyPsnID,c.fDutyPsnName,c.fDutyPsnFID,c.fDutyPsnFName,"
						+ arrangeDate + ",'',0 " + "from OA_AS_Card c "
						+ "where c.fid='" + assetID + "'";
				stmt.execute(sql);
			} finally {
				stmt.close();
				stmt = null;
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("生成资产安排记录失败!");
		} finally {
			conn.close();
			conn = null;
		}
	}

	/**
	 * 资产归还
	 * 
	 * @param assetID
	 * @param returnDate
	 * @throws Exception
	 */
	public static void assetReturn(String assetID, String returnDate)
			throws Exception {
		Statement stmt = null;
		ResultSet rs = null;
		String sql = null;
		String strID = "";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String strDatabaseType = conn.getMetaData()
					.getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				strID = "sys_guid()";
				returnDate = "to_date('" + returnDate + "','yyyy-mm-dd')";
			} else {
				strID = "newid()";
				returnDate = "CAST('" + returnDate + "' as datetime)";
			}
			stmt = conn.createStatement();
			try {
				sql = "update OA_AS_UseRecord set fEndDate=" + returnDate
						+ " where fAssetID='" + assetID
						+ "' and fEndDate is null";
				stmt.execute(sql);
			} finally {
				stmt.close();
				stmt = null;
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("更新资产安排记录失败!");
		} finally {
			conn.close();
			conn = null;
		}
	}

	/**
	 * 插入折旧数据
	 * 
	 * @param year
	 * @param month
	 * @return
	 * @throws Exception
	 */
	public static void insertDepreciation(Integer year, Integer month)
			throws Exception {
		Statement stmt = null;
		String sql = null;
		String guid = "";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			stmt = conn.createStatement();
			String strDatabaseType = conn.getMetaData()
					.getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				guid = "sys_guid()";
			} else {
				guid = "newid()";
			}
			try {
				sql = "insert into OA_AS_Deprecition"
						+ "(fDepreYear,fDepreMonth,fBgDepreYear,fBgDepreMonth"
						+ ",fID,fKindID,fKind,fName,fSpecType,fOriginValue"
						+ ",fAddDepreValue"
						+ ",fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fServiceYear"
						+ ",fCreateTime,fCode,version)"
						+ "select "
						+ year
						+ ","
						+ month
						+ ""
						+ ",fBgDepreYear,fBgDepreMonth,"
						+ guid
						+ ",fKindID,fKind,fName,fSpecType,fOriginValue"
						+ ",convert(varchar,fAddDepreValue) fAddDepreValue"
						+ ",fDutyDeptID,fDutyDeptName,fDutyPsnID,fDutyPsnName,fServiceYear"
						+ ",fCreateTime,fCode,version" + " from OA_AS_Card"
						+ " where  fcode not in (select d.fcode from OA_AS_Deprecition d  where d.fdepreyear="+ year
						+" and d.fdepremonth="+ month 
						+") and ((fBgDepreYear < " + year
						+ " and fBgDepreMonth is not null)"
						+ " or (fBgDepreYear =" + year
						+ " and fBgDepreMonth <" + month 
						+ ")) and (fBgDepreYear+fServiceYear > "+ year 
						+" or (fBgDepreYear+fServiceYear ="+ year 
						+" and fBgDepreMonth > "+ month 
						+"))";
				stmt.execute(sql);
			} finally {
				stmt.close();
				stmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	/**
	 * 更新资产折旧数据
	 * 
	 * @param year
	 * @param month
	 * @return
	 * @throws Exception
	 */
	public static void updateDepreciation(Integer year, Integer month)
			throws Exception {
		Statement stmt = null;
		String sql = null, nowYear = "", nowMonth = "";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			stmt = conn.createStatement();
			String strDatabaseType = conn.getMetaData()
					.getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				nowYear = "to_char(sysdate,'yyyy')";
				nowMonth = "to_char(sysdate,'mm')";
			} else {
				nowYear = "convert(char(4),getdate(),121)";
				nowMonth = "substring(convert(char(7),getdate(),121),6,2 )";
			}
			try {
				sql = "update OA_AS_Deprecition set fPercent='1',"
						+ " fYearDepre=" + "convert(varchar,case when "
						+ year
						+ "> fBgDepreYear"
						+ " 	then round((convert(Integer,foriginvalue))/(fServiceYear*12) * "
						+ month
						+ ",2) "
						+ "	else round((convert(Integer,foriginvalue))/(fServiceYear*12) * ("
						+ month
						+ "- fBgDepreMonth),2) "
						+ "end),"
						+ "fMonthDepre= convert(varchar,round((convert(Integer,foriginvalue))/(fServiceYear*12),2)),"
						+ "fAddDepreValue= convert(varchar,round((convert(Integer,foriginvalue))/(fServiceYear*12) * "
						+ "(("
						+ year
						+ "*12 + "
						+ month
						+ ")-(fBgDepreYear *12+ fBgDepreMonth)),2)),"
						+ "fEquity=convert(varchar,(convert(Integer,foriginvalue) - round((convert(Integer,foriginvalue))/(fServiceYear*12) * "
						+ "(("
						+ year
						+ "*12 + "
						+ month
						+ ")-(fBgDepreYear *12+ fBgDepreMonth)),2)))"
						+ " ,"
						+ "fUseMonth=("
						+ year
						+ "*12 + "
						+ month
						+ ")-(fBgDepreYear *12+ fBgDepreMonth)"
						+ " where fdepreyear="
						+ year
						+ " and fdepremonth="
						+ month;
				System.out.println(sql);
				stmt.execute(sql);
				updateCardAddDepreValue(year, month);
			} finally {
				stmt.close();
				stmt = null;
			}
		} finally {
			conn.close();
			conn = null;

		}
	}

	/**
	 * 删除资产使用申请安排信息
	 * 
	 * @param id
	 * @throws Exception
	 */
	public static void deleteAssetUseArrange(String id) throws Exception {
		Statement stmt = null;
		String sql = null;
		String strID = "";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String strDatabaseType = conn.getMetaData()
					.getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				strID = "sys_guid()";
			} else {
				strID = "newid()";
			}
			stmt = conn.createStatement();
			try {
				sql = "delete from OA_AS_UseArrange where fid='" + id + "'";
				stmt.execute(sql);
			} finally {
				stmt.close();
				stmt = null;
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("删除资产使用申请安排信息失败！");
		} finally {
			conn.close();
			conn = null;
		}
	}
	//更新资产卡片中资产确认字段的状态
	public static void updateAssetConfirmStatus() throws Exception{
		Statement stmt = null;
		String sql = null;
		String strID = "";
		Connection conn = null;
		conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try{
			stmt = conn.createStatement();
			sql = "update OA_AS_Card set fassetconfirm='未确认'";
			stmt.execute(sql);
		}catch(Exception e){
			e.printStackTrace();
			throw new Exception("资产清查更新失败!");
		}finally{
			if(stmt != null){
				stmt.close();
				stmt = null;
			}
			if(conn != null){
				conn.close();
				conn = null;
			}
		}
	}
	//当折旧后更新资产卡片中累计折旧字段的值
	public static void updateCardAddDepreValue(Integer year, Integer month) throws Exception{
		Statement stmt = null, ustmt = null;
		String sql = null;
		String strID = "";
		Connection conn = null;
		ResultSet rs = null;
		int ct = 0;
		conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try{
			stmt = conn.createStatement();
			ustmt = conn.createStatement();
			sql = "select dep.fCode,max(cast(dep.fAddDepreValue as decimal(15,2))) as fAddDepreValue from OA_AS_Deprecition dep where " +
					"dep.fCode in (select d.fCode from OA_AS_Deprecition d " +
					"where d.fDepreYear = "+ year +" and d.fDepreMonth = "+ month +") group by dep.fCode"; 
			try{
				rs = stmt.executeQuery(sql);
				while(rs.next()){
					sql = "update OA_AS_Card set fAddDepreValue = " 
						+ rs.getString("fAddDepreValue")+ " where fCode = '" + rs.getString("fCode") + "'";
					ustmt.addBatch(sql);
					ct++;
				}
			}finally{
				if(rs != null){
					rs.close();
					rs = null;
				}
			}
			if(ct > 0){
				ustmt.executeBatch();
			}
		}catch(Exception e){
			e.printStackTrace();
			throw new Exception("资产卡片中累计折旧数据更新失败!");
		}finally{
			if(stmt != null){
				stmt.close();
				stmt = null;
			}
			if(ustmt != null){
				ustmt.close();
				ustmt = null;
			}
			if(conn != null){
				conn.close();
				conn = null;
			}
		}
	}
	public static String checkCanDeleteAssetInData(String id){
		String result = "";
		String qsql = "select d from OA_AS_InD d where d.fMasterID = '"+id+"' and d.fIsIn = 1 ";
		Table table = KSQL.select(qsql, null, "/OA/asset/data", null);
		int cnt = table.size();
		if(cnt==0){
			result = "true";
		}else{
			result = "false";
		}
		return result;
	}
	public static void deleteAssetInData(String id){
		String sql = "delete from OA_AS_InM m where m = '"+id+"'";
		KSQL.executeUpdate(sql, null, "/OA/asset/data", null);
		String dsql = "delete from OA_AS_InD d where d.fMasterID = '"+id+"'";
		KSQL.executeUpdate(dsql, null, "/OA/asset/data", null);
	}
}