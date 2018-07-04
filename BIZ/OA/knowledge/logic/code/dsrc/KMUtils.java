import java.text.SimpleDateFormat;
import java.util.List;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import com.justep.appCommon.SysUtils;
import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.opm.OrgUtils;
import com.justep.system.opm.OrgUnit;
import com.justep.system.util.CommonUtils;
import com.justep.system.context.ContextHelper;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import java.sql.Timestamp;
public class KMUtils {
	/**
	 * 获取人员主机构name路径
	 * 
	 * @param psnID
	 * @return
	 * @throws Exception
	 */
	public static String getPsnMainOrgFullName(String psnID) throws Exception {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String sql = null;
		String result = "";

		try {
			conn = ModelUtils.getConnection("/system/data");
			ContextHelper.getTransaction().begin(conn);
			stmt = conn.createStatement();
			sql = "select o.sFName sFName from SA_OPOrg o "
					+ "where o.sID = (select p.sMainOrgID "
					+ "from SA_OPPerson p " + "where p.sID='" + psnID + "')";
			rs = stmt.executeQuery(sql);
			if (rs.next()) {
				result = rs.getString("sFName");
			}
		} finally {
			if (rs != null) {
				rs.close();
				rs = null;
			}
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

	/**
	 * 获取栏目权限设置
	 * 
	 * @param folderIDs
	 *            (如果是多个栏目,需要用逗号分割开)
	 * @return
	 * @throws Exception
	 */
	public static Table getFolderRightsSet(String folderIDs) throws Exception {
		String IDs = null;
		String[] arrIDs = folderIDs.split(",");
		for (int i = 0; i < arrIDs.length; i++) {
			if (IDs == null) {
				IDs = "'" + arrIDs[i] + "'";
			} else {
				IDs = IDs + ",'" + arrIDs[i] + "'";
			}
		}
		String ksqlSelect = "select OA_KM_Rights.fFolderID,OA_KM_Folder.fName as fFolderName,OA_KM_Folder.fFullID as fFolderFullID,"
				+ "OA_KM_Rights.fOrgKind,OA_KM_Rights.fOrgID,OA_KM_Rights.fOrgName,OA_KM_Rights.fOrgFID,OA_KM_Rights.fOrgFName,"
				+ "OA_KM_Rights.fCanCreateKW,OA_KM_Rights.fCanReadKW,OA_KM_Rights.fCanReleaseKW,OA_KM_Rights.fCanCreateComment,OA_KM_Rights.fCanReadComment,OA_KM_Rights.fCanReadRecord,OA_KM_Rights.fCanScore "
				+ "from OA_KM_Rights OA_KM_Rights join OA_KM_Folder OA_KM_Folder on OA_KM_Rights.fFolderID = OA_KM_Folder "
				+ "where OA_KM_Rights.fFolderID in("
				+ IDs
				+ ") and OA_KM_Rights.fKWKind = 'Folder'";
		Table result = KSQL
				.select(ksqlSelect, null, "/OA/knowledge/data", null);
		return result;
	}

	/**
	 * 获取栏目管理员
	 * 
	 * @param folderID
	 * @return 返回格式 id1:name1 | id2:name2 | id3:name3 ...
	 * @throws Exception
	 */
	public static String getFolderManagers(String folderID) throws Exception {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String sql = null;
		String result = "";

		try {
			conn = ModelUtils.getConnection("/OA");
			ContextHelper.getTransaction().begin(conn);
			stmt = conn.createStatement();
			sql = "select fManagerID,fManagerName from OA_KM_FDManager where fFolderID = '"
					+ folderID + "'";
			rs = stmt.executeQuery(sql);
			while (rs.next()) {
				String managerID = rs.getString("fManagerID");
				String managerName = rs.getString("fManagerName");
				if (result.equals("")) {
					result = managerID + ":" + managerName;
				} else {
					result = result + "|" + managerID + ":" + managerName;
				}
			}
		} finally {
			if (rs != null) {
				rs.close();
				rs = null;
			}
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

	/**
	 * 获取父栏目下的直属级子栏目(知识库)
	 * 
	 * @param folderID
	 * @return
	 * @throws Exception
	 */
	public static String getDirectSubFolders(String folderID) throws Exception {
		String result = "";
		Collection<String> memberFullIDs = com.justep.appCommon.SysUtils
				.getAllPersonMemberFIDs();

		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String strDatabaseType = conn.getMetaData()
					.getDatabaseProductName();
			String operator = "";
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				operator = "||";
			} else {
				operator = "+";
			}

			String urlCondition = "";
			for (String memberFullID : memberFullIDs) {
				String condition = String
						.format(" ('%s' like fOrgFID %s '%%') ", memberFullID,
								operator);
				if (urlCondition.equals(""))
					urlCondition = condition;
				else
					urlCondition += " or " + condition;
			}
			String sql = String
					.format(
							"select fID, fName, fFullID from OA_KM_Folder f "
									+ "	where f.fUseStatus = 1 and f.fparent = '%s' and exists( "
									+ "			select 1 from OA_KM_Rights r "
									+ "    		where (%s) "
									+ "				and (r.fFolderID is null or fKWFullID like f.fFullID %s '%%') "
									+ "	     		and (r.fCanReadKW = 1) and (r.fKWKind = 'Folder')) order by f.fName",
							folderID, urlCondition, operator);
			Statement stmt = conn.createStatement();
			try {
				ResultSet rs = stmt.executeQuery(sql);
				try {
					while (rs.next()) {
						String subFolderID = rs.getString("fID");
						String subFolderName = rs.getString("fName");
						String subFolderFullID = rs.getString("fFullID");
						if (result.equals("")) {
							result = subFolderID + ":" + subFolderName + ":"
									+ subFolderFullID;
						} else {
							result = result + "|" + subFolderID + ":"
									+ subFolderName + ":" + subFolderFullID;
						}
					}
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				stmt.close();
				stmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return result;
	}

	/**
	 * 获取父栏目下的直属级子栏目(知识库管理)
	 * 
	 * @param folderID
	 * @param psnID
	 * @return
	 * @throws Exception
	 */
	public static String getDirectSubFoldersMG(String folderID)
			throws Exception {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String sql = null;
		String operator = null;
		String result = "";

		try {
			conn = ModelUtils.getConnection("/OA");
			ContextHelper.getTransaction().begin(conn);
			String strDatabaseType = conn.getMetaData()
					.getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				operator = "||";
			} else {
				operator = "+";
			}
			stmt = conn.createStatement();
			String psnID = com.justep.appCommon.SysUtils.getCurrentPersonID();

			sql = "select fid,fName,fFullID "
					+ "from OA_KM_Folder f "
					+ "where f.fUseStatus = 1 and f.fparent = '"
					+ folderID
					+ "'"
					+ "	and exists("
					+ "		select 1 from OA_KM_FDManager m join OA_KM_Folder fd on m.fFolderID = fd.fID"
					+ "    	where" + "	     (m.fManagerID ='" + psnID + "')"
					+ "    	 and" + "	     (fd.fFullID like f.fFullid "
					+ operator + " '%' )" + "	)";
			rs = stmt.executeQuery(sql);
			while (rs.next()) {
				String subFolderID = rs.getString("fid");
				String subFolderName = rs.getString("fName");
				String subFolderFullID = rs.getString("fFullID");
				if (result.equals("")) {
					result = subFolderID + ":" + subFolderName + ":"
							+ subFolderFullID;
				} else {
					result = result + "|" + subFolderID + ":" + subFolderName
							+ ":" + subFolderFullID;
				}
			}
		} finally {
			if (rs != null) {
				rs.close();
				rs = null;
			}
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

	/**
	 * 获得portlet显示数据
	 * 
	 * @param folderFullID
	 *            栏目的路径
	 * @param count
	 *            数量
	 * @param includeChildren
	 *            是否包含下级栏目
	 * @param isPic
	 *            是否图片
	 * @return
	 */
	public static Table getPortletData(String folderFullID, String count,
			String includeChildren, String isPic) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String orgCondition = null;
			Collection<String> memberFullIDs = com.justep.appCommon.SysUtils
					.getAllPersonMemberFIDs();
			for (String memberFullID : memberFullIDs) {
				String psnFullID = memberFullID;
				String orgFullID = null;
				String[] arrOrgFullID = psnFullID.split("/");
				for (int i = 0; i < arrOrgFullID.length; i++) {
					if (orgFullID == null) {
						orgFullID = arrOrgFullID[i];
					} else {
						orgFullID = orgFullID + "/" + arrOrgFullID[i];
					}

					if (orgCondition == null) {
						orgCondition = " (OA_KM_Rights.fOrgFID = '" + orgFullID
								+ "') ";
					} else {
						orgCondition = orgCondition
								+ " or (OA_KM_Rights.fOrgFID = '" + orgFullID
								+ "') ";
					}
				}
			}
			/*
			 * for (String memberFullID : memberFullIDs) { String psnFullID =
			 * memberFullID + "/" + psnID + ".psn"; String orgFullID = null;
			 * String[] arrOrgFullID = psnFullID.split("/"); for (int i = 0; i <
			 * arrOrgFullID.length; i++) { if (orgFullID == null) { orgFullID =
			 * arrOrgFullID[i]; } else { orgFullID = orgFullID + "/" +
			 * arrOrgFullID[i]; }
			 * 
			 * if (orgCondition == null) { orgCondition =
			 * " (OA_KM_Rights.fOrgFID = '" + orgFullID + "') "; } else {
			 * orgCondition = orgCondition + " or (OA_KM_Rights.fOrgFID = '" +
			 * orgFullID + "') "; } } }
			 */
			if (null == includeChildren) {
				includeChildren = "1";

			}
			if (null == isPic) {
				isPic = "0";
			}
			if (null == folderFullID) {
				folderFullID = "public";
			}
			if (null == count) {
				count = "5";
			}
			String folderCondition = null;
			if (includeChildren.equals("1")) {
				folderCondition = String.format(
						" (OA_KM_KWFolder.fKWFullID like '%s%%') ",
						folderFullID);
			} else {
				folderCondition = String.format(
						" (OA_KM_KWFolder.fKWFullID = '%s') ", folderFullID);
			}
			//System.out.println(folderCondition);
			String picCondition = " (1=1) ";

			if (isPic.equalsIgnoreCase("1")) {
				picCondition = " (OA_KM_Knowledge.fSmallPic is not null) ";
			}

			GregorianCalendar  worldTour  =  new  GregorianCalendar(); 
			worldTour.add(GregorianCalendar.DATE, -4); 
			Date  d  =  worldTour.getTime(); 
			SimpleDateFormat  df=new SimpleDateFormat("yyyy-MM-dd "); 
			String newDate = df.format(d); 
			//System.out.println("dffff:"+ newDate);
			
			
			String sql = null;
			sql = String
					.format(
							"select OA_KM_Knowledge, OA_KM_Knowledge.fTitle, OA_KM_Knowledge.fFolderName, OA_KM_Knowledge.fReleasePsnName, OA_KM_Knowledge.fReleaseTime, OA_KM_Knowledge.fIsTop, OA_KM_Knowledge.fSmallPic, OA_KM_Knowledge.fBizID "
									+ ",case when dateTimeToDate(OA_KM_Knowledge.fReleaseTime) >= stringToDate('"+newDate+"') then 'new' else 'old' end as state,OA_KM_Knowledge.fReleaseDeptName,case when OA_KM_Knowledge.fOtherFolders is null then '无' else OA_KM_Knowledge.fOtherFolders end as fOtherFolders from OA_KM_Knowledge OA_KM_Knowledge"
									+ "	where OA_KM_Knowledge in (select OA_KM_Knowledge "
									+ "			from OA_KM_Knowledge OA_KM_Knowledge "
									+ "				join OA_KM_KWFolder OA_KM_KWFolder on OA_KM_Knowledge = OA_KM_KWFolder.fKWID "
									+ "				join OA_KM_Rights OA_KM_Rights on OA_KM_Knowledge = OA_KM_Rights.fKWID "
									+ "			where OA_KM_Knowledge.fReleaseStatus = 1 and OA_KM_Rights.fCanReadKW = 1 and (%s) and (%s) and (%s) "
									+ "			) "
									// 取消已阅隐藏的规则(wj)
									// +
									// "		and (OA_KM_Knowledge.fIsTop = 1 or not OA_KM_Knowledge in (select OA_KM_READERS.fKWID from OA_KM_READERS OA_KM_READERS where OA_KM_READERS.fReaderID = '%s')) "
									+ "	order by OA_KM_Knowledge.fIsTop desc, OA_KM_Knowledge.fCreateTime desc limit 0 ,"
									+ count, orgCondition, folderCondition,
							picCondition); // , psnID);
			Table result = KSQL.select(sql, null, "/OA/knowledge/data", null);
			//System.out.println(sql);
			return result;
		} finally {
			conn.close();
			conn = null;
		}
	}

	public static Document getFolderData(String folderFullID, String count,
			String includeChildren, String isPic) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Element root = DocumentHelper.createElement("root");
			Document doc = DocumentHelper.createDocument(root);
			String ksql = "select f.fName from OA_KM_Folder f where f.fFullID = '"+folderFullID+"'";
			Table rs = KSQL.select(ksql, null, "/OA/knowledge/data", null);
			if (rs.iterator().hasNext()){
				root.addElement("folderName").setText(rs.iterator().next().getString("fName"));
			}
			
			String orgCondition = null;
			Collection<String> memberFullIDs = com.justep.appCommon.SysUtils.getAllPersonMemberFIDs();
			for (String memberFullID : memberFullIDs) {
				String psnFullID = memberFullID;
				String orgFullID = null;
				String[] arrOrgFullID = psnFullID.split("/");
				for (int i = 0; i < arrOrgFullID.length; i++) {
					if (orgFullID == null) {
						orgFullID = arrOrgFullID[i];
					} else {
						orgFullID = orgFullID + "/" + arrOrgFullID[i];
					}

					if (orgCondition == null) {
						orgCondition = " (OA_KM_Rights.fOrgFID = '" + orgFullID
								+ "') ";
					} else {
						orgCondition = orgCondition
								+ " or (OA_KM_Rights.fOrgFID = '" + orgFullID
								+ "') ";
					}
				}
			}

			if (null == includeChildren) {
				includeChildren = "1";

			}
			if (null == isPic) {
				isPic = "0";
			}
			if (null == folderFullID) {
				folderFullID = "public";
			}
			if (null == count) {
				count = "5";
			}
			String folderCondition = null;
			
			//System.out.println(folderCondition);
			String picCondition = " (1=1) ";

			if (isPic.equalsIgnoreCase("1")) {
				picCondition = " (OA_KM_Knowledge.fSmallPic is not null) ";
			}

			GregorianCalendar  worldTour  =  new  GregorianCalendar(); 
			worldTour.add(GregorianCalendar.DATE, -4); 
			Date  d  =  worldTour.getTime(); 
			SimpleDateFormat  df=new SimpleDateFormat("yyyy-MM-dd "); 
			String newDate = df.format(d); 
			//String folderCountCondition =  String.format(" (OA_KM_KWFolder.fKWFullID like '%s%%')",folderFullID);
			String folderCountCondition =  String.format(" (OA_KM_KWFolder.fKWFullID like '%s%%') and (OA_KM_Knowledge.fFolderFullID <> '%s')",folderFullID,folderFullID);
			String qSql = String.format("select OA_KM_Knowledge.fFolderID,OA_KM_Knowledge.fFolderName,OA_KM_Knowledge.fFolderFullID from OA_KM_Knowledge OA_KM_Knowledge"
					+ "	where OA_KM_Knowledge in (select OA_KM_Knowledge "
					+ "			from OA_KM_Knowledge OA_KM_Knowledge "
					+ "				join OA_KM_KWFolder OA_KM_KWFolder on OA_KM_Knowledge = OA_KM_KWFolder.fKWID "
					+ "				join OA_KM_Rights OA_KM_Rights on OA_KM_Knowledge = OA_KM_Rights.fKWID "
					+ "			where OA_KM_Knowledge.fReleaseStatus = 1 and OA_KM_Rights.fCanReadKW = 1 and (%s) and (%s) "
					+ "			) group by  OA_KM_Knowledge.fFolderID,OA_KM_Knowledge.fFolderName,OA_KM_Knowledge.fFolderFullID"
					, orgCondition, folderCountCondition);
			Table table = KSQL.select(qSql, null, "/OA/knowledge/data", null);
			//System.out.println(qSql);
			int folderCount = table.size();
			String ct = ""+folderCount+"";
			String fFolderFullID="";
			Iterator<Row> rows = table.iterator();
			while (rows.hasNext()){
				Row row = rows.next();
				fFolderFullID = row.getString("fFolderFullID");
				if (includeChildren.equals("1")) {
					folderCondition = String.format(
							" (OA_KM_KWFolder.fKWFullID like '%s%%') ",
							fFolderFullID);
				} else {
						folderCondition = String.format(
								" (OA_KM_KWFolder.fKWFullID = '%s') ", fFolderFullID);
				}
				Element folder = root.addElement("folder");
				folder.addElement("folderName").setText(row.getString("fFolderName"));
				folder.addElement("folderFullID").setText(row.getString("fFolderFullID"));
				folder.addElement("num").setText(ct);
				
				
				String sql = String
				.format(
						"select OA_KM_Knowledge, OA_KM_Knowledge.fTitle, OA_KM_Knowledge.fFolderName, OA_KM_Knowledge.fReleasePsnName, OA_KM_Knowledge.fReleaseTime, OA_KM_Knowledge.fIsTop, OA_KM_Knowledge.fSmallPic, OA_KM_Knowledge.fBizID "
						+ ",case when dateTimeToDate(OA_KM_Knowledge.fReleaseTime) >= stringToDate('"+newDate+"') then 'new' else 'old' end as state,round("+folderCount+"*0.5,0) as ct,OA_KM_Knowledge.fReleaseDeptName,case when OA_KM_Knowledge.fOtherFolders is null then '无' else OA_KM_Knowledge.fOtherFolders end as fOtherFolders from OA_KM_Knowledge OA_KM_Knowledge"
						+ "	where OA_KM_Knowledge in (select OA_KM_Knowledge "
						+ "			from OA_KM_Knowledge OA_KM_Knowledge "
						+ "				join OA_KM_KWFolder OA_KM_KWFolder on OA_KM_Knowledge = OA_KM_KWFolder.fKWID "
						+ "				join OA_KM_Rights OA_KM_Rights on OA_KM_Knowledge = OA_KM_Rights.fKWID "
						+ "			where OA_KM_Knowledge.fReleaseStatus = 1 and OA_KM_Rights.fCanReadKW = 1 and (%s) and (%s) and (%s) "
						+ "			) "
						// 取消已阅隐藏的规则(wj)
						// +
						// "		and (OA_KM_Knowledge.fIsTop = 1 or not OA_KM_Knowledge in (select OA_KM_READERS.fKWID from OA_KM_READERS OA_KM_READERS where OA_KM_READERS.fReaderID = '%s')) "
						+ "	order by OA_KM_Knowledge.fIsTop desc, OA_KM_Knowledge.fCreateTime desc limit 0 ,"
						+ count, orgCondition, folderCondition,
						picCondition); // , psnID);
				Table result = KSQL.select(sql, null, "/OA/knowledge/data", null);
				//System.out.println("sql="+sql);
				Iterator<Row> grouprows = result.iterator();
				while (grouprows.hasNext()){
					Row grouprow = grouprows.next();
					Element folderRow = folder.addElement("row");
					folderRow.addElement("cell").setText(grouprow.getString("OA_KM_Knowledge"));
					folderRow.addElement("cell").setText(grouprow.getString("fTitle"));
					folderRow.addElement("cell").setText(grouprow.getString("fFolderName"));
					folderRow.addElement("cell").setText(grouprow.getString("fReleasePsnName"));
					folderRow.addElement("cell").setText(grouprow.getDateTime("fReleaseTime").toString());
					folderRow.addElement("cell").setText(grouprow.getInteger("fIsTop").toString());
					folderRow.addElement("cell").setText(grouprow.getString("state"));
					folderRow.addElement("cell").setText(grouprow.getDecimal("ct").toString());
					folderRow.addElement("cell").setText(grouprow.getString("fReleaseDeptName"));
					folderRow.addElement("cell").setText(grouprow.getString("fOtherFolders"));
				}
				
			}
			root.addElement("folder").setText("none");
			return doc;
		} finally {
			conn.close();
			conn = null;
		}
	}
	
	public static List<OrgUnit> getKWReleaseRange(String sData1) {
		List<String> fids = new ArrayList<String>();
		String sql = "select V_SA_OPOrg.sFID"
				+ "  from OA_KM_Knowledge OA_KM_Knowledge"
				+ "  join OA_KM_FDManager OA_KM_FDManager on OA_KM_FDManager.fFolderID = OA_KM_Knowledge.fFolderID"
				+ "  join V_SA_OPOrg V_SA_OPOrg on V_SA_OPOrg.sPersonID = OA_KM_FDManager.fManagerID"
				+ " where OA_KM_Knowledge = '" + sData1 + "'";
		Table result = KSQL.select(sql, null, "/OA/knowledge/data", null);
		for (Iterator<Row> it = result.iterator(); it.hasNext();) {
			Row row = it.next();
			fids.add(row.getString("sFID"));
		}
		return OrgUtils.findOrgUnitsByFID(fids);
	}

	public static Table executeSQL(String sql) {

		Table result = KSQL.select(sql, null, "/OA/knowledge/data", null);

		return result;
	}
	
	public static String addKnowledgeGZ (String kwid){
		String currentPersonID = ContextHelper.getPersonMember().getID().substring(0, ContextHelper.getPersonMember().getID().indexOf("@"));
		String currentPersonName = ContextHelper.getPersonMember().getName();
		String currentPersonMemberFID = ContextHelper.getPersonMember().getFID();
		String currentPersonMemberFName = ContextHelper.getPersonMember().getFName();
		String jg = queryGZPsn(kwid);
		String result = "";
		if(jg.equalsIgnoreCase("notexists")){
			String sql =String.format("INSERT INTO OA_KM_KnowledgeGZPsn p (p,p.fMasterID,p.fCreatePsnID,p.fCreatePsnName,p.fCreatePsnFID,p.fCreatePsnFName,p.fCreateTime,p.version)" 
					+ " VALUES(:p,:fMasterID,:currentPersonID,:currentPersonName,:currentPersonMemberFID,:currentPersonMemberFName,:currentDateTime,:version)");
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("p",java.util.UUID.randomUUID().toString().replace("-", "").toUpperCase());
			params.put("fMasterID",kwid);
			params.put("currentPersonID",currentPersonID);
			params.put("currentPersonName",currentPersonName);
			params.put("currentPersonMemberFID",currentPersonMemberFID);
			params.put("currentPersonMemberFName",currentPersonMemberFName);
			params.put("currentDateTime", CommonUtils.getCurrentDateTime());
			params.put("version", 0);
			KSQL.executeUpdate(sql, params, "/OA/knowledge/data", null);
			//System.out.println("sql:"+sql);
			String fGZPsnIDs = "";
			String usql = "";
			String qsql = "select k.fGZPsnIDs from OA_KM_Knowledge k where k ='"+kwid+"'";
			Table table = KSQL.select(qsql, null, "/OA/knowledge/data", null);
			//System.out.println("qsql:"+qsql);
			Iterator<Row> rows = table.iterator();
			if(!rows.hasNext()){
				fGZPsnIDs = currentPersonID;
			}
			while (rows.hasNext()) {
				Row row = rows.next();
				fGZPsnIDs = row.getString("fGZPsnIDs");
				fGZPsnIDs = fGZPsnIDs +","+currentPersonID;
			}
			usql = "update OA_KM_Knowledge k set k.fGZPsnIDs = '"+fGZPsnIDs+"' where k ='"+kwid+"'";
			KSQL.executeUpdate(usql, null, "/OA/knowledge/data", null);
			//System.out.println("usql:"+usql);
			result = "YES";
		}else if(jg.equalsIgnoreCase("exists")){
			result = "NO";
		}
		return result;
		
	}
	
	public static String queryGZPsn(String kwid){
		String result = "";
		String currentPersonID = ContextHelper.getPersonMember().getID().substring(0, ContextHelper.getPersonMember().getID().indexOf("@"));
		String sql = "select p from OA_KM_KnowledgeGZPsn p where p.fMasterID = '"+kwid+"' and p.fCreatePsnID ='"+currentPersonID+"'";
		Table table = KSQL.select(sql, null, "/OA/knowledge/data", null);
		Iterator<Row> rows = table.iterator();
		if(!rows.hasNext()){
			result = "notexists";
		}else{
			result = "exists";
		}
		return result;
	}
	public static String cancelKnowledgeGZ (String kwid){
		String result = "";
		String currentPersonID = ContextHelper.getPersonMember().getID().substring(0, ContextHelper.getPersonMember().getID().indexOf("@"));
		String jg = queryGZPsn(kwid);
		if(jg.equalsIgnoreCase("notexists")){
			result = "NO";
		}else if(jg.equalsIgnoreCase("exists")){
			String sql = "delete from OA_KM_KnowledgeGZPsn p where p.fMasterID = '"+kwid+"' and p.fCreatePsnID ='"+currentPersonID+"'";
			KSQL.executeUpdate(sql, null, "/OA/knowledge/data", null);
			//System.out.println("sql:"+sql);
			String fGZPsnIDs = "";
			String usql = "";
			String qsql = "select k.fGZPsnIDs from OA_KM_Knowledge k where k ='"+kwid+"' and k.fGZPsnIDs is not null";
			Table table = KSQL.select(qsql, null, "/OA/knowledge/data", null);
			//System.out.println("qsql:"+qsql);
			Iterator<Row> rows = table.iterator();
			if (rows.hasNext()) {
				Row row = rows.next();
				fGZPsnIDs = row.getString("fGZPsnIDs");
				if(fGZPsnIDs.indexOf(",")==-1){
					fGZPsnIDs = fGZPsnIDs.replace(currentPersonID, "");
				}else {
					fGZPsnIDs = fGZPsnIDs.replace(currentPersonID, "").trim().replace(",,",",");
					if(fGZPsnIDs.indexOf(",")==0){
						fGZPsnIDs = fGZPsnIDs.substring(1, fGZPsnIDs.length()-1);
					}
					if(fGZPsnIDs.lastIndexOf(",")==fGZPsnIDs.length()){
						fGZPsnIDs = fGZPsnIDs.substring(0, fGZPsnIDs.length()-1);
					}
				}
				usql = "update OA_KM_Knowledge k set k.fGZPsnIDs = '"+fGZPsnIDs+"' where k ='"+kwid+"'";
				KSQL.executeUpdate(usql, null, "/OA/knowledge/data", null);
				//System.out.println("usql:"+usql);
			}
			result = "YES";
		}
		return result;
	}
}
