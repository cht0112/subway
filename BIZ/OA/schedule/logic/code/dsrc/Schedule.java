import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.text.DateFormat;
import java.util.List;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import com.justep.model.ModelUtils;
import com.justep.system.context.ContextHelper;
import com.justep.util.Utils;

public class Schedule {
	public static String newSchedule(String fTitle, String fBeginTime,
			String fEndTime) throws Exception {
		String id = java.util.UUID.randomUUID().toString();
		String sqlNewSchedule = "insert into OA_SD_SCHEDULE "
				+ "	(version, fID, fTitle, fBeginDatePart, fBeginTimePart, fBeginTime, "
				+ "		fEndDatePart, fEndTimePart, fEndTime, fExecutors, "
				+ "		fCreatePsnID, fCreatePsnName, fCreateURL, fCreateTime, fIsShared) "
				+ "	values (0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1) ";
		String sqlNewExecutor = "insert into OA_SD_Executor "
				+ "	(version, fID, fMasterID, fExecutorID, fExecutorName, fExtendStr1) "
				+ "	values (0, ?, ?, ?, ?, ?) ";

		SimpleDateFormat s = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm");
		java.util.Date beginTime = s.parse(fBeginTime);
		java.util.Date endTime = s.parse(fEndTime);
		String beginTimePart = String.format("%tR", s.parse(fBeginTime));
		String endTimePart = String.format("%tR", s.parse(fEndTime));

		/*
		 * String currentPsnID1 = com.justep.appCommon.SysUtils
		 * .getCurrentPersonID();
		 */

		String currentPsnID = com.justep.appCommon.SysUtils
				.getCurrentPersonID();
		String currentPsnName = com.justep.appCommon.SysUtils
				.getCurrentPersonName();
		String currentPsnURL = com.justep.appCommon.SysUtils
				.getCurrentPersonMemberFID();
		String currentPsnFName = com.justep.appCommon.SysUtils
		.getCurrentPersonMemberFName();

		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			PreparedStatement pstat = conn.prepareStatement(sqlNewSchedule);
			try {
				pstat.setString(1, id);
				pstat.setString(2, fTitle);
				pstat.setDate(3, new java.sql.Date(beginTime.getTime()));
				pstat.setString(4, beginTimePart);
				pstat.setTimestamp(5,
						new java.sql.Timestamp(beginTime.getTime()));
				pstat.setDate(6, new java.sql.Date(endTime.getTime()));
				pstat.setString(7, endTimePart);
				pstat.setTimestamp(8, new java.sql.Timestamp(endTime.getTime()));
				pstat.setString(9, currentPsnName);
				pstat.setString(10, currentPsnID);
				pstat.setString(11, currentPsnName);
				pstat.setString(12, currentPsnURL);
				pstat.setTimestamp(13, new java.sql.Timestamp(
						new java.util.Date().getTime()));
				pstat.executeUpdate();
			} finally {
				pstat.close();
				pstat = null;
			}
			pstat = conn.prepareStatement(sqlNewExecutor);
			try {
				pstat.setString(1, java.util.UUID.randomUUID().toString());
				pstat.setString(2, id);
				pstat.setString(3, currentPsnID);
				pstat.setString(4, currentPsnName);
				pstat.setString(5, currentPsnFName);
				pstat.executeUpdate();
			} finally {
				pstat.close();
				pstat = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return id;
	}

	public static void deleteSchedule(String fID) throws Exception {
		String sqlDelSchedule = String.format(
				"delete from OA_SD_Schedule where fID = '%s' ", fID);
		String sqlDelExecutor = String.format(
				"delete from OA_SD_Executor where fMasterID = '%s' ", fID);
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stat = conn.createStatement();
			try {
				stat.executeUpdate(sqlDelSchedule);
				stat.executeUpdate(sqlDelExecutor);
			} finally {
				stat.close();
				stat = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	public static void deleteScheduleByBiz(String fBizID, String fBizType)
			throws Exception {
		String sqlDelSchedule = String
				.format("delete from OA_SD_Schedule where fBizID = '%s' and fBizType='%s'",
						fBizID, fBizType);
		String sqlDelExecutor = String
				.format("delete from OA_SD_Executor where fMasterID in (select fid from OA_SD_Schedule where fBizID = '%s' and fBizType='%s')",
						fBizID, fBizType);
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stat = conn.createStatement();
			try {
				stat.executeUpdate(sqlDelExecutor);
				stat.executeUpdate(sqlDelSchedule);
			} finally {
				stat.close();
				stat = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	public static void updateSchedule(String fID, String fTitle,
			String fBeginTime, String fEndTime) throws Exception {
		String sql = String
				.format("update OA_SD_Schedule "
						+ "	set fTitle = ?, fBeginDatePart = ?, fBeginTimePart = ?, fBeginTime=?, "
						+ "		fEndDatePart = ?, fEndTimePart = ?, fEndTime = ? "
						+ "	where fID = ? ");
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			PreparedStatement pstat = conn.prepareStatement(sql);
			try {
				SimpleDateFormat s = new java.text.SimpleDateFormat(
						"yyyy-MM-dd HH:mm");
				java.util.Date beginTime = s.parse(fBeginTime);
				java.util.Date endTime = s.parse(fEndTime);
				DateFormat formatTime = new SimpleDateFormat("HH:mm");
				pstat.setString(1, fTitle);
				pstat.setDate(2, new java.sql.Date(beginTime.getTime()));
				pstat.setString(3, formatTime.format(beginTime));
				pstat.setTimestamp(4,
						new java.sql.Timestamp(beginTime.getTime()));
				pstat.setDate(5, new java.sql.Date(endTime.getTime()));
				pstat.setString(6, formatTime.format(endTime));
				pstat.setTimestamp(7, new java.sql.Timestamp(endTime.getTime()));
				pstat.setString(8, fID);
				pstat.executeUpdate();
			} finally {
				pstat.close();
				pstat = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	public static boolean GetDatabaseType(Connection conn) throws SQLException {
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		return !strDatabaseType.equalsIgnoreCase("Oracle") ? true : false;
	}

	public static String getExecutorFullIDs(String executorIDs)
			throws Exception {
		String executorFullIDs = "";
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
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		if (GetDatabaseType(conn)) {
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
			executorFullIDs = executorFullIDs.substring(0,
					executorFullIDs.length() - 1);
		return executorFullIDs;
	}

	public static String getCurrentPersonID() {
		return com.justep.appCommon.SysUtils.getCurrentPersonID();
	}

	public static Document getPortletData(String dateStr, String count)
			throws Exception {
		Document result = DocumentHelper.createDocument();
		Element items = result.addElement("items");
		int fCount = 0;
		Element itemsCount = items.addElement("COUNT");
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String sql = "";
			String currentPsnID = getCurrentPersonID();
			if (GetDatabaseType(conn))
				sql = String
						.format("select s.FID, s.FTITLE, s.FBEGINTIME, s.FENDTIME, s.FCREATEPSNNAME, s.FCONTENT "
								+ "	FROM OA_SD_SCHEDULE s"
								+ "	where s.FID IN (select e.FMASTERID "
								+ "			FROM OA_SD_EXECUTOR e "
								+ "			WHERE e.fExecutorID = '%s') "
								+ "	AND (s.fBeginDatePart < '%s' OR s.fBeginDatePart = '%s') "
								+ " AND (s.fEndDatePart > '%s' OR s.fEndDatePart = '%s') "
								+ "	ORDER BY  s.fBeginTimePart ASC ",
								currentPsnID, dateStr, dateStr, dateStr,
								dateStr);
			else
				sql = String
						.format("select s.FID, s.FTITLE, s.FBEGINTIME, s.FENDTIME, s.FCREATEPSNNAME, s.FCONTENT "
								+ "	FROM OA_SD_SCHEDULE s"
								+ "	where s.FID IN (select e.FMASTERID "
								+ "			FROM OA_SD_EXECUTOR e "
								+ "			WHERE e.fExecutorID = '%s') "
								+ "	AND (s.fBeginDatePart < to_date('%s','yyyy-MM-dd') OR s.fBeginDatePart = to_date('%s','yyyy-MM-dd')) "
								+ " AND (s.fEndDatePart > to_date('%s','yyyy-MM-dd') OR s.fEndDatePart = to_date('%s','yyyy-MM-dd')) "
								+ "	ORDER BY  s.fBeginTimePart ASC ",
								currentPsnID, dateStr, dateStr, dateStr,
								dateStr);
			Statement stmt = conn.createStatement();
			try {
				stmt.setMaxRows(Integer.parseInt(count));
				ResultSet rs = stmt.executeQuery(sql);
				try {
					while (rs.next()) {
						Element item = items.addElement("items");
						Element key = item.addElement("FID");
						Element fTitle = item.addElement("FTITLE");
						Element fBeginTime = item.addElement("FBEGINTIME");
						Element fEndTime = item.addElement("FENDTIME");
						Element fCreatePsnName = item
								.addElement("FCREATEPSNNAME");
						Element fContent = item.addElement("FCONTENT");
						key.setText(rs.getString("FID"));
						fTitle.setText(rs.getString("FTITLE"));
						fBeginTime.setText(rs.getString("FBEGINTIME"));
						fEndTime.setText(rs.getString("FENDTIME"));
						fCreatePsnName.setText(rs.getString("FCREATEPSNNAME"));
						fContent.setText(rs.getString("FCONTENT")==null?"":rs.getString("FCONTENT"));
						fCount++;

					}
					itemsCount.setText(String.valueOf(fCount));
					/*
					 * return com.justep.biz.common.SysUtils
					 * .nativeResultSetToIterator(rs, edu.isi.stella.Stella.NIL,
					 * edu.isi.stella.Stella.NIL);
					 */
					return result;
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

	public static void deleteScheduleExecutorsByID(String fMasterID)
			throws Exception {
		PreparedStatement pstat = null;
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);

		String sql = "DELETE  FROM OA_SD_EXECUTOR WHERE FMASTERID='"
				+ fMasterID + "'";

		try {
			pstat = conn.prepareStatement(sql);
			pstat.executeUpdate();
		} finally {
			if (pstat != null) {
				pstat.close();
				pstat = null;
			}
			if (conn != null) {
				conn.close();
				conn = null;
			}
		}
	}

	static public String getManageOrgIDs(String manageCodes) {
		String condition = "";
		if (Utils.isNotEmptyString(manageCodes)) {
			List<String> FIds = ContextHelper.getRootManagementFIDs(manageCodes
					.split(","));
			for (String FId : FIds) {
				condition = Utils.isNotEmptyString(condition) ? condition + ","
						+ FId : FId;
			}
		}
		return condition;
	}

	public static String isValidate(String beginDate, String title,
			String name, String endDate) {
		String fTitle = "\n";
		String sql = "";
		Connection con = null;
		PreparedStatement pst = null;
		ResultSet rs = null;
		try {
			con = ModelUtils.getConnection("/OA");
			if (con != null) {
				if (con.getMetaData().getDatabaseProductName()
						.equalsIgnoreCase("Oracle")) {
					sql = "select * from OA_SD_Schedule where (fenddatepart>=to_date('"
							+ beginDate.substring(0, 10)
							+ "'"
							+ ",'yyyy-mm-dd')"
							+ "and fbegindatepart<=to_date('"
							+ beginDate.substring(0, 10)
							+ "'"
							+ ",'yyyy-mm-dd')"
							+ "or fenddatepart>=to_date('"
							+ endDate.substring(0, 10)
							+ "'"
							+ ",'yyyy-mm-dd')"
							+ "and fbegindatepart<=to_date('"
							+ endDate.substring(0, 10)
							+ "'"
							+ ",'yyyy-mm-dd'))"
							+ " and fexecutors like '%"
							+ name
							+ "%'"
							+ " and fTitle!='"
							+ title
							+ "'"
							+ "and fscope='领导日程'";
				} else if (con.getMetaData().getDatabaseProductName()
						.equalsIgnoreCase("Microsoft SQL Server")) {
					sql = "select * from OA_SD_Schedule where (fenddatepart>=convert(datetime,'"
							+ beginDate
							+ "')"
							+ " and fbegindatepart<=convert(datetime,'"
							+ beginDate
							+ "')"
							+ "or fenddatepart>=convert(datetime,'"
							+ endDate
							+ "')"
							+ " and fbegindatepart<=convert(datetime,'"
							+ endDate
							+ "')"
							+ ")"
							+ " and fexecutors like '%"
							+ name
							+ "%'"
							+ " and fTitle!='"
							+ title
							+ "'"
							+ " and fscope='领导日程'";
				}
			}
			pst = con.prepareStatement(sql);
			rs = pst.executeQuery();
			while (rs.next()) {
				fTitle += rs.getString("FTITLE") + "\n";
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				con.close();
				rs.close();
				pst.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return fTitle;
	}

	public static String isValidatePerson(String fID) {
		String fExecutorName = "";
		String sql = "select fexecutorname from OA_SD_especialSchedulePerson where fexecutorID='"
				+ fID + "'";
		Connection con = null;
		PreparedStatement pst = null;
		ResultSet rs = null;
		try {
			con = ModelUtils.getConnection("/OA");
			pst = con.prepareStatement(sql);
			rs = pst.executeQuery();
			while (rs.next()) {
				fExecutorName = rs.getString("FEXECUTORNAME");

			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				con.close();
				rs.close();
				pst.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return fExecutorName;
	}

	public static void deleteExecutorAndUpdateExecutor(String deleteId,
			String names) {
		String [] deleteIdAry = deleteId.split(",");
		String [] deleteNameAry = names.split(",");
		Connection con = null;
		PreparedStatement pst = null;
		ResultSet rs = null; 
		String sql = "";
		try {
			con = ModelUtils.getConnection("/OA");
			for (int i = 1; i < deleteIdAry.length; i++) {
                sql = "delete from OA_SD_Executor where fexecutorid='"+deleteIdAry[i]+"'";
				pst = con.prepareStatement(sql);
				pst.executeUpdate();
			}
			for(int j=1;j<deleteNameAry.length;j++){
				sql = "update OA_SD_Schedule  set fexecutors=replace(replace(replace(fexecutors,'"+deleteNameAry[j]+",',''),',"+deleteNameAry[j]+"',''),'"+deleteNameAry[j]+"','')";
				pst = con.prepareStatement(sql);
				pst.executeUpdate();
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				con.close();
				pst.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

	}
	public static int getScheduleCount(String dateStr)
	throws Exception {
	int fCount = 0;
	Connection conn = ModelUtils.getConnection("/OA");
	ContextHelper.getTransaction().begin(conn);
	try {
		String sql = "";
		String currentPsnID = getCurrentPersonID();
		if (GetDatabaseType(conn))
			sql = String
					.format(
							"select count(s.FID) count "
									+ "	FROM OA_SD_SCHEDULE s"
									+ "	where s.FID IN (select e.FMASTERID "
									+ "			FROM OA_SD_EXECUTOR e "
									+ "			WHERE e.fExecutorID = '%s') "
									+ "	AND (s.fBeginDatePart < '%s' OR s.fBeginDatePart = '%s') "
									+ " AND (s.fEndDatePart > '%s' OR s.fEndDatePart = '%s') ",
							currentPsnID, dateStr, dateStr, dateStr,
							dateStr);
		else
			sql = String
					.format(
							"select count(s.FID) count "
									+ "	FROM OA_SD_SCHEDULE s"
									+ "	where s.FID IN (select e.FMASTERID "
									+ "			FROM OA_SD_EXECUTOR e "
									+ "			WHERE e.fExecutorID = '%s') "
									+ "	AND (s.fBeginDatePart < to_date('%s','yyyy-MM-dd') OR s.fBeginDatePart = to_date('%s','yyyy-MM-dd')) "
									+ " AND (s.fEndDatePart > to_date('%s','yyyy-MM-dd') OR s.fEndDatePart = to_date('%s','yyyy-MM-dd')) ",
							currentPsnID, dateStr, dateStr, dateStr,
							dateStr);
		Statement stmt = conn.createStatement();
		try {
			ResultSet rs = stmt.executeQuery(sql);
			try {
				if (rs.next()) {
					fCount = rs.getInt("count");
				}
				
				return fCount;
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
}
