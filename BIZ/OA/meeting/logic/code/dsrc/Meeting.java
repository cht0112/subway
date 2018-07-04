import java.sql.*;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Iterator;

import javax.naming.NamingException;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import com.justep.appCommon.DataUtils;
import com.justep.model.Model;
import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.transform.SimpleTransform;
import com.justep.system.util.BizUtils;
import com.justep.system.context.ContextHelper;

public class Meeting {

	/**
	 * 检查会议室是否被占用
	 * 
	 * @param boardroomID:   会议室ID 
	 * 			fBeginTime ：开始时间 
	 * 			fEndTime ：	 结束时间 
	 * 			fArrangeID : 会议室安排ID
	 * @throws Exception
	 */
	public static String checkBoardroomUsed(String fBoardroomID,
			String fBeginTime, String fEndTime, String fArrangeID)
			throws Exception {
		String sql = "";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stmt = conn.createStatement();
			try {
				String strDatabaseType = conn.getMetaData()
						.getDatabaseProductName();
				fBeginTime = fBeginTime.replace("T", " ");
				fEndTime = fEndTime.replace("T", " ");
				fBeginTime = fBeginTime.substring(0, 19);
				fEndTime = fEndTime.substring(0, 19);
				if (strDatabaseType.equalsIgnoreCase("Oracle")) {
					sql = "select 1 from OA_MT_RoomArrange where fboardroomid = '"
							+ fBoardroomID
							+ "' and fEndTime > to_date('"
							+ fBeginTime
							+ "','yyyy-mm-dd hh24:mi:ss') and fBeginTime < to_date('"
							+ fEndTime
							+ "','yyyy-mm-dd hh24:mi:ss') and fEffect = 1";
				} else {
					sql = "select 1 from OA_MT_RoomArrange where fboardroomid = '"
							+ fBoardroomID
							+ "' and fEndTime > CAST('"
							+ fBeginTime
							+ "' as datetime) and fBeginTime < CAST('"
							+ fEndTime + "' as datetime) and fEffect = 1";
				}
				if (fArrangeID != null && (!"".equals(fArrangeID))) {
					sql += " and (fID !='" + fArrangeID + "')";
				}
				ResultSet rs = stmt.executeQuery(sql);
				try {
					if (rs.next()) {
						return "true";
					} else {
						return "false";
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
	}

	public static String getRoomID() throws Exception {
		String returnvalue = "";
		String sql = "select fid,fname from OA_MT_BoardRoom where fUseStatus ='1' and rownum = 1 ";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stat = conn.createStatement();
			try {
				ResultSet rs = stat.executeQuery(sql);
				try {
					if (rs.next())
						returnvalue = rs.getString("fid") + ","
								+ rs.getString("fname");
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				stat.close();
				stat = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return returnvalue;
	}

	public static String getConventioneerFullIDs(String executorIDs)
			throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		String executorFullIDs = "";
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		if (executorIDs == null || executorIDs == "")
			return executorFullIDs;
		String[] ids = executorIDs.split(",");
		if (ids == null || ids.length == 0)
			return "";
		StringBuffer condition = new StringBuffer();
		for (int i = 0; i < ids.length; i++) {
			condition.append(" or pm.sPersonID='" + ids[i] + "' ");
		}
		String sql = "select o.sFID ||'/' || pm.sPersonID || '.psn' fullid from SA_OPPersonMember pm join SA_OPOrg o on pm.sOrgID = o.sID where 1=0 "
				+ condition.toString();
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			sql = "select o.sFID +'/' + pm.sPersonID + '.psn' fullid from SA_OPPersonMember pm join SA_OPOrg o on pm.sOrgID = o.sID where 1=0 "
					+ condition.toString();
		}
		
		try {
			Statement stat = conn.createStatement();
			try {
				ResultSet rs = stat.executeQuery(sql);
				try {
					while (rs.next()) {
						executorFullIDs += rs.getString("fullid") + ",";
					}
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				stat.close();
				stat = null;
			}

		} finally {
			conn.close();
			conn = null;
		}
		if (executorFullIDs.length() > 0)
			executorFullIDs = executorFullIDs.substring(0, executorFullIDs
					.length() - 1);
		return executorFullIDs;
	}
	public static Document queryDom(String sql) {
		Document dom = DataUtils.table2XML(KSQL.select(sql, null, "/OA/meeting/data", null));
		return dom;
	}
	
	public static Document getDateQueryData(String beginDate,String endDate,String roomID){
		Element root = DocumentHelper.createElement("root");
		Document doc = DocumentHelper.createDocument(root);
		
		Element result = root.addElement("result");
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		Calendar calStart = Calendar.getInstance();
		try {
			calStart.setTime(df.parse(beginDate));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Calendar calEnd = Calendar.getInstance();
		try {
			calEnd.setTime(df.parse(endDate));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Calendar calTmp = (Calendar) calStart.clone();
		String strDate;
		while (!calEnd.equals(calTmp)) {
			strDate = df.format(calTmp.getTime());
			result.addElement("date").setText(strDate);
			calTmp.add(Calendar.DATE, 1);
		}
		strDate = df.format(calTmp.getTime());
		Element date = result.addElement("date");
		result.addElement("dateCount").setText("7");
		date.setText(strDate);

		
		Element query = root.addElement("query");
		Element arrange = root.addElement("arrange");
		String qsql = "select OA_MT_UseApply.fBoardroomID,OA_MT_UseApply.fBoardroom,OA_MT_UseApply.fBeginTime,OA_MT_UseApply.fEndTime,OA_MT_UseApply.fApplyPsnName,OA_MT_UseApply.fMeetName from OA_MT_UseApply OA_MT_UseApply where (OA_MT_UseApply.fBizState='bsExecuting') and (OA_MT_UseApply.fBeginTime <= stringToDateTime('"+endDate+" 23:59:59') and OA_MT_UseApply.fEndTime >= stringToDateTime('"+beginDate+" 00:00:00')) and OA_MT_UseApply.fBoardroomID='"+roomID+ "'";
		Table table = KSQL.select(qsql, null, "/OA/meeting/data", null);
		//System.out.println("qsql="+qsql);
		Iterator<Row> rows = table.iterator();
		Element data = query.addElement("root").addElement("data");
		Element arrs = data.addElement("rows");
		while (rows.hasNext()){
			Row row = rows.next();
			Element arr = arrs.addElement("row");
			arr.addElement("fBoardroomID").setText(row.getString("fBoardroomID"));
			arr.addElement("fBoardroom").setText(row.getString("fBoardroom"));
			arr.addElement("fBeginTime").setText(getValue(SimpleTransform.transToString(row.getDateTime("fBeginTime")), ""));
			arr.addElement("fEndTime").setText(getValue(SimpleTransform.transToString(row.getDateTime("fEndTime")), ""));
			arr.addElement("fApplyPsnName").setText(row.getString("fApplyPsnName"));
			arr.addElement("fMeetName").setText(row.getString("fMeetName"));

		}
		
		String asql = "select OA_MT_RoomArrange.fUseDeptName,OA_MT_RoomArrange.fUsePsnName,OA_MT_RoomArrange.fPhone,OA_MT_RoomArrange.fBoardroomID,OA_MT_RoomArrange.fBoardroom,OA_MT_RoomArrange.fBeginTime,OA_MT_RoomArrange.fEndTime,OA_MT_RoomArrange.fMeetName from OA_MT_RoomArrange OA_MT_RoomArrange where (OA_MT_RoomArrange.fEffect= 1 ) and (OA_MT_RoomArrange.fBeginTime <= stringToDateTime('"+endDate+" 23:59:59') and OA_MT_RoomArrange.fEndTime >= stringToDateTime('"+beginDate+" 00:00:00')) and OA_MT_RoomArrange.fBoardroomID='"+roomID+"'";
		Table tab = KSQL.select(asql, null, "/OA/meeting/data", null);
		//System.out.println("asql="+asql);
		Iterator<Row> its= tab.iterator();
		Element	dataA =	arrange.addElement("root").addElement("data");
		Element arrIts = dataA.addElement("rows");
		while (its.hasNext()){
			Row it = its.next();
			Element arrIt = arrIts.addElement("row");
			Element fUsePsnName = arrIts.addElement("fUsePsnName");
			if(it.getString("fUsePsnName")!=null){
				fUsePsnName.setText(it.getString("fUsePsnName"));
			}
			arrIt.addElement("fBoardroomID").setText(it.getString("fBoardroomID"));
			arrIt.addElement("fBoardroom").setText(it.getString("fBoardroom"));
			arrIt.addElement("fBeginTime").setText(getValue(SimpleTransform.transToString(it.getDateTime("fBeginTime")), ""));
			arrIt.addElement("fEndTime").setText(getValue(SimpleTransform.transToString(it.getDateTime("fEndTime")), ""));
			arrIt.addElement("fMeetName").setText(it.getString("fMeetName"));
			
		}
		//System.out.println("doc="+doc.asXML());
		return doc;
	}
	public static Document getRoomQueryData(String roomDate,String roomIDStr,String roomFilterStr){
		//System.out.println("getRoomQueryData roomDate="+roomDate+"---roomids="+roomIDStr+"--roomFilterStr="+roomFilterStr);
		Element root = DocumentHelper.createElement("root");
		Document doc = DocumentHelper.createDocument(root);
		
		
		
		Element queryBoardroom = root.addElement("queryBoardroom");
		String qsql = "select OA_MT_Boardroom,OA_MT_Boardroom.fName,OA_MT_Boardroom.fCode from OA_MT_Boardroom OA_MT_Boardroom where "+roomIDStr+"  order by OA_MT_Boardroom.fCode asc";
		Table table = KSQL.select(qsql, null, "/OA/meeting/data", null);
		//System.out.println("qsql="+qsql);
		Iterator<Row> rows = table.iterator();
		Element data = queryBoardroom.addElement("root").addElement("data");
		Element arrs = data.addElement("rows");
		while (rows.hasNext()){
			Row row = rows.next();
			Element arr = arrs.addElement("row");
			arr.addElement("OA_MT_Boardroom").setText(row.getString("OA_MT_Boardroom"));
			arr.addElement("fName").setText(row.getString("fName"));
			arr.addElement("fCode").setText(row.getString("fCode"));
		}
		
		Element applyQueryResult = root.addElement("applyQueryResult");
		String dataApplyQueryResultsSql = "select OA_MT_UseApply.fBoardroomID,OA_MT_UseApply.fBoardroom,OA_MT_UseApply.fBeginTime,OA_MT_UseApply.fEndTime,OA_MT_UseApply.fApplyPsnName,OA_MT_UseApply.fMeetName from OA_MT_UseApply OA_MT_UseApply where (OA_MT_UseApply.fBizState='bsExecuting') and (OA_MT_UseApply.fBeginTime <= stringToDateTime(concat('"+roomDate+"',' 23:59:59')) and OA_MT_UseApply.fEndTime >= stringToDateTime('"+roomDate+"')) and "+roomFilterStr;
		Table tabDataApplyQueryResults = KSQL.select(dataApplyQueryResultsSql, null, "/OA/meeting/data", null);
		//System.out.println("dataApplyQueryResultsSql="+dataApplyQueryResultsSql);
		Iterator<Row> rowApplyQueryResults = tabDataApplyQueryResults.iterator();
		Element dataApplyQueryResult = applyQueryResult.addElement("root").addElement("data");
		Element arrApplyQueryResults = dataApplyQueryResult.addElement("rows");
		while (rowApplyQueryResults.hasNext()){
			Row rowApplyQueryResult = rowApplyQueryResults.next();
			Element arrApplyQueryResult = arrApplyQueryResults.addElement("row");
			arrApplyQueryResult.addElement("fBoardroomID").setText(rowApplyQueryResult.getString("fBoardroomID"));
			arrApplyQueryResult.addElement("fBoardroom").setText(rowApplyQueryResult.getString("fBoardroom"));
			arrApplyQueryResult.addElement("fBeginTime").setText(getValue(SimpleTransform.transToString(rowApplyQueryResult.getDateTime("fBeginTime")), ""));
			arrApplyQueryResult.addElement("fEndTime").setText(getValue(SimpleTransform.transToString(rowApplyQueryResult.getDateTime("fEndTime")), ""));
			arrApplyQueryResult.addElement("fApplyPsnName").setText(rowApplyQueryResult.getString("fApplyPsnName"));
			arrApplyQueryResult.addElement("fMeetName").setText(rowApplyQueryResult.getString("fMeetName"));
		}
		
		Element arrangeQueryResult = root.addElement("arrangeQueryResult");
		String arrangeQueryResultSql = "select OA_MT_RoomArrange.fBoardroomID,OA_MT_RoomArrange.fBoardroom,OA_MT_RoomArrange.fBeginTime,OA_MT_RoomArrange.fEndTime,OA_MT_RoomArrange.fUsePsnName,OA_MT_RoomArrange.fMeetName from OA_MT_RoomArrange OA_MT_RoomArrange where (OA_MT_RoomArrange.fEffect=1) and (OA_MT_RoomArrange.fBeginTime <= stringToDateTime(concat('"+roomDate+"' ,' 23:59:59')) and OA_MT_RoomArrange.fEndTime >= stringToDateTime('"+roomDate+"')) and "+roomFilterStr;
		Table tabArrangeQueryResult = KSQL.select(arrangeQueryResultSql, null, "/OA/meeting/data", null);
		//System.out.println("arrangeQueryResultSql="+arrangeQueryResultSql);
		Iterator<Row> rowArrangeQueryResults = tabArrangeQueryResult.iterator();
		Element dataArrangeQueryResult = arrangeQueryResult.addElement("root").addElement("data");
		Element arrArrangeQueryResults = dataArrangeQueryResult.addElement("rows");
		while (rowArrangeQueryResults.hasNext()){
			Row rowArrangeQueryResult = rowArrangeQueryResults.next();
			Element arrDataApplyQueryResult = arrArrangeQueryResults.addElement("row");
			arrDataApplyQueryResult.addElement("fBoardroomID").setText(rowArrangeQueryResult.getString("fBoardroomID"));
			arrDataApplyQueryResult.addElement("fBoardroom").setText(rowArrangeQueryResult.getString("fBoardroom"));
			arrDataApplyQueryResult.addElement("fBeginTime").setText(getValue(SimpleTransform.transToString(rowArrangeQueryResult.getDateTime("fBeginTime")), ""));
			arrDataApplyQueryResult.addElement("fEndTime").setText(getValue(SimpleTransform.transToString(rowArrangeQueryResult.getDateTime("fEndTime")), ""));
			
			Element fUsePsnName = arrDataApplyQueryResult.addElement("fUsePsnName");
			if(rowArrangeQueryResult.getString("fUsePsnName")!=null){
				fUsePsnName.setText(rowArrangeQueryResult.getString("fUsePsnName"));
			}
			arrDataApplyQueryResult.addElement("fMeetName").setText(rowArrangeQueryResult.getString("fMeetName"));
		}
		
		//System.out.println("doc="+doc.asXML());
		return doc;
	}
	private static String getValue(String obj, String defaultValue){
		if (obj == null){
			return defaultValue;
		}else{
			return obj;
		}
	}
	
	//周会议安排报表显示
	public static Table weekMeetingArrageReport(String tempDateTimeOrcl){
		String sqlReportOrcl = "";
		sqlReportOrcl = "SELECT convert(varchar,T.FBEGINTIME) || '(' || convert(varchar,T.FBEGINTIME) || ')' AS WEEKDATE," +
				"T.FBOARDROOM,T.FMEETNAME,T.FUSEPSNNAME AS FAPPLYPSNNAME,T.FMEETPSNS || ',' || T.FOUTPSNS AS FMEETPSNS," +
				"convert(varchar,T.FBEGINTIME) AS FARRBEGINTIME, convert(varchar,T.FENDTIME) AS FARRENDTIME " +
				"FROM OA_MT_ROOMARRANGE T ";
		if(tempDateTimeOrcl != null&&!tempDateTimeOrcl.equals("")){
			sqlReportOrcl = sqlReportOrcl+"where "+tempDateTimeOrcl;
		}
		System.out.println("=====: "+sqlReportOrcl);
		Connection conn = null;
		Statement st = null;
		Table table = null;
		try {
			conn = ModelUtils.getConnectionInTransaction("/OA/meeting/data");
			st = conn.createStatement();
			ResultSet businessTypeResult = st.executeQuery(sqlReportOrcl);
		    table = BizUtils.resultSet2Table(businessTypeResult, (Model)null);
			return table;
		} catch (NamingException e) {
			throw new RuntimeException(e);
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}finally{
			if(st != null){
				try {
					st.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
}