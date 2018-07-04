import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import com.justep.system.context.ContextHelper;
import com.justep.appCommon.SysUtils;
import com.justep.model.ModelUtils;
import com.justep.system.opm.OrgUnit;
import com.justep.system.process.ProcessControl;
import com.justep.system.process.ProcessControlItem;
import com.justep.system.process.ProcessUtils;

public class SimplePublishKnowledgeProcess {

	public static void simplePublishKnowledgeProcessAfterAbort()
			throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			updateKWReleaseStatus(conn, 2);
		} finally {
			conn.close();
			conn = null;
		}
	}

	public static void simplePublishKnowledgeProcessAfterAdvance()
			throws Exception {
		boolean isFlowEnd = ProcessUtils.isFlowToEnd();
		if (isFlowEnd) {
			Connection conn = ModelUtils.getConnection("/OA");
			ContextHelper.getTransaction().begin(conn);
			try {
				updateKWReleaseStatus(conn, 1);
			} finally {
				conn.close();
				conn = null;
			}
		}
	}

	private static void updateKWReleaseStatus(Connection conn, int status)
			throws Exception {
		String currentDate = null;
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			currentDate = "current_date";
		} else {
			currentDate = "getDate()";
		}

		String fReleaseStatus = null;
		String fReleaseStatusName = null;

		if (status == 0) {
			fReleaseStatus = "0";
			fReleaseStatusName = "未发布";
		} else if (status == 1) {
			fReleaseStatus = "1";
			fReleaseStatusName = "已发布";
		} else if (status == 2) {
			fReleaseStatus = "2";
			fReleaseStatusName = "已取消";
		} else {
			throw new Exception("对不起,更新知识状态失败!");
		}
		String fReleaseOgnID = SysUtils.getCurrentOgnID();
		String fReleaseOgnName = SysUtils.getCurrentOgnName();
		String fReleaseDeptID = SysUtils.getCurrentDeptID() != null ? SysUtils.getCurrentDeptID() : SysUtils.getCurrentOgnID();
		String fReleaseDeptName = SysUtils.getCurrentDeptName() != null ? SysUtils.getCurrentDeptName() : SysUtils.getCurrentOgnName();
		String fReleasePsnID = SysUtils.getCurrentPersonID();
		String fReleasePsnName = SysUtils.getCurrentPersonName();
		String fReleasePsnFID = SysUtils.getCurrentPersonMemberFID();
		String fReleasePsnFName = SysUtils.getCurrentPersonMemberFName();

		String kwid = ProcessUtils.getProcessData1();
		String sql = String.format(
				"update OA_KM_Knowledge "
						+ " set fReleaseOgnID='%s',fReleaseOgnName='%s',"
						+ " fReleaseDeptID='%s',fReleaseDeptName='%s',"
						+ "	fReleasePsnID='%s',fReleasePsnName='%s',"
						+ " fReleasePsnFID='%s',fReleasePsnFName='%s',"
						+ " fReleaseTime=%s,fReleaseStatus = '%s',fReleaseStatusName = '%s' "
						+ " where fid = '%s'", fReleaseOgnID, fReleaseOgnName,
				fReleaseDeptID, fReleaseDeptName, fReleasePsnID,
				fReleasePsnName, fReleasePsnFID, fReleasePsnFName, currentDate,
				fReleaseStatus, fReleaseStatusName, kwid);
		Statement stmt = conn.createStatement();
		try {
			stmt.executeUpdate(sql);
		} finally {
			stmt.close();
			stmt = null;
		}
	}

	public static void chargeApvActivityAfterAdvance() throws Exception {
		String errorMsg = null;
		boolean canRelease = false;
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String folderID = getFolderID(conn);
			ProcessControl flowControl = (ProcessControl) ModelUtils.getRequestContext().getActionContext().getParameter(
					"control");
			for (ProcessControlItem to : flowControl.getFlowTos()) {
				for (OrgUnit ect : to.getExecutors()) {
					canRelease = canReleaseKW(conn, folderID, ect.getFID());
					if (!canRelease) {
						if (errorMsg == null) {
							errorMsg = ect.getFName();
						} else {
							errorMsg += "," + ect.getFName();
						}
					}
				}
			}
			if (errorMsg != null) {
				throw new Exception("所选人员没有权限发布知识：" + errorMsg);
			}
			// throw new Exception("可以发布知识!");
		} finally {
			conn.close();
			conn = null;
		}
	}

	public static void publishActivityAfterAdvance() throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			boolean canRelease = false;
			String psnFID = SysUtils.getCurrentPersonMemberFID();
			String folderID = getFolderID(conn);

			canRelease = canReleaseKW(conn, folderID, psnFID);
			if (!canRelease) {
				throw new Exception("对不起,您没发布该知识的权限!");
			}
		} finally {
			conn.close();
			conn = null;
		}
		// throw new Exception("不允许流转!");
	}

	public static boolean canReleaseKW(Connection conn, String folderID,
			String psnFID) throws Exception {
		boolean result = false;
		String operator = null;

		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			operator = "|| '%'";
		} else {
			operator = "+ '%'";
		}

		try {
			Statement stmt = conn.createStatement();
			try {
				if (psnFID != null) {
					String sql1 = "select 1 from oa_km_fdmanager m join v_sa_oporg v on v.spersonid = m.fmanagerid"
							+ " where m.ffolderid = '"
							+ folderID
							+ "' and v.SFID = '" + psnFID + "'";
					ResultSet rs1 = stmt.executeQuery(sql1);
					try {
						if (rs1.next()) {
							result = true;
						} else {
							String orgCondition = null;
							if (orgCondition == null) {
								orgCondition = String.format(
										"'%s' like fOrgFID %s", psnFID,
										operator);
							} else {
								orgCondition += String.format(
										" or '%s' like fOrgFID %s", psnFID,
										operator);
							}

							String sql = String.format(
									"select 1 from OA_KM_Rights r "
											+ " where r.fkwkind = 'Folder' and r.ffolderid='%s' "
											+ " and r.fCanReleaseKW = 1 and (%s)",
									folderID, orgCondition);
							ResultSet rs = stmt.executeQuery(sql);
							try {
								if (rs.next()) {
									result = true;
								}
							} finally {
								rs.close();
								rs = null;
							}
						}
					} finally {
						rs1.close();
						rs1 = null;
					}
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

	public static String[] getPsnMemberFullID(String psnID) throws Exception {
		String[] memberFullIDs = null;
		String temp = null;

		if ((psnID == null) || (psnID.equals("")))
			return null;

		String sql = String.format("select o.sfid from "
				+ " sa_oppersonmember m join sa_oporg o "
				+ " on m.sorgid = o.sid where m.spersonid = '%s'", psnID);

		Connection conn = ModelUtils.getConnection("/system/data");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stmt = conn.createStatement();
			try {
				ResultSet rs = stmt.executeQuery(sql);
				try {
					while (rs.next()) {
						String orgFullID = rs.getString("sfid");
						if (temp == null) {
							temp = orgFullID;
						} else {
							temp += "," + orgFullID;
						}
					}
					if (temp != null) {
						memberFullIDs = temp.split(",");
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

		return memberFullIDs;
	}

	private static String getFolderID(Connection conn) throws Exception {
		String folderID = null;
		String bizID = ProcessUtils.getProcessData1();
		String sql = String.format("select fFolderID from OA_KM_Knowledge "
				+ "where fID = '%s'", bizID);
		Statement stmt = conn.createStatement();
		try {
			ResultSet rs = stmt.executeQuery(sql);
			try {
				if (rs.next()) {
					folderID = rs.getString("fFolderID");
				} else {
					throw new Exception("没有指定知识发布的栏目!");
				}
			} finally {
				rs.close();
				rs = null;
			}
		} finally {
			stmt.close();
			stmt = null;
		}
		return folderID;
	}
}
