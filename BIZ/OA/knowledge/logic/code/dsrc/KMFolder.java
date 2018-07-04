import java.sql.Connection;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.justep.appCommon.SysUtils;
import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Table;
import com.justep.system.context.ContextHelper;

public class KMFolder {

	/**
	 * 初始化栏目根节点(public,private,map)
	 * 
	 * @throws Exception
	 */
	public static void initFolderRoot() throws Exception {
		boolean hasPublicRoot = false, hasPrivateRoot = false, hasMapRoot = false;
		Connection conn = ModelUtils.getConnection("/OA");
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		String strCurrentDate = "";
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			strCurrentDate = "current_date";
		} else {
			strCurrentDate = "getDate()";
		}
		ContextHelper.getTransaction().begin(conn);
		try {
			String querySql = "select fid from OA_KM_Folder where fUseStatus = 1 and fParent is null";
			Statement stmt = conn.createStatement();
			try {
				ResultSet rs = stmt.executeQuery(querySql);
				try {
					while (rs.next()) {
						String fid = rs.getString("fid");
						if (fid.equals("public")) {
							hasPublicRoot = true;
						} else if (fid.equals("private")) {
							hasPrivateRoot = true;
						} else if (fid.equals("map")) {
							hasMapRoot = true;
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

			String sql = "insert into OA_KM_Folder(" + "fID,fName,fDescription,fFullID,fFullName,"
					+ "fUseStatus,fUseStatusName,FCREATEPSNID,FCREATEPSNNAME,FCREATETIME,version) "
					+ "values('{fID}','{fName}','{fDescription}','{fFullID}','{fFullName}',1,'启用','{FCREATEPSNID}','{FCREATEPSNNAME}',"
					+ strCurrentDate + ",0)";
			Statement stmtBatch = conn.createStatement();
			try {
				String insertSql = null;
				if (!hasPublicRoot) {
					insertSql = sql.replace("{fID}", "public").replace("{fName}", "知识中心").replace("{fDescription}", "知识中心")
							.replace("{fFullID}", "public").replace("{fFullName}", "知识中心").replace("{FCREATEPSNID}", SysUtils.getCurrentPersonID())
							.replace("{FCREATEPSNNAME}", SysUtils.getCurrentPersonNameWithAgent());
					stmtBatch.addBatch(insertSql);
				}
				if (!hasPrivateRoot) {
					insertSql = sql.replace("{fID}", "private").replace("{fName}", "个人知识").replace("{fDescription}", "个人知识")
							.replace("{fFullID}", "private").replace("{fFullName}", "个人知识").replace("{FCREATEPSNID}", SysUtils.getCurrentPersonID())
							.replace("{FCREATEPSNNAME}", SysUtils.getCurrentPersonNameWithAgent());
					stmtBatch.addBatch(insertSql);
				}
				if (!hasMapRoot) {
					insertSql = sql.replace("{fID}", "map").replace("{fName}", "知识地图").replace("{fDescription}", "知识地图").replace("{fFullID}", "map")
							.replace("{fFullName}", "知识地图").replace("{FCREATEPSNID}", SysUtils.getCurrentPersonID())
							.replace("{FCREATEPSNNAME}", SysUtils.getCurrentPersonNameWithAgent());
					stmtBatch.addBatch(insertSql);
				}
				stmtBatch.executeBatch();
			} finally {
				stmtBatch.close();
				stmtBatch = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	/**
	 * 新增栏目时赋初始值
	 * 
	 * @param folderID
	 * @param pid
	 * @throws Exception
	 */
	public static void setDefValueToFolderWhenNew(String folderID, String pid) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String updateSql = null;
			if (pid.equals("public") || pid.equals("private") || pid.equals("map")) {
				updateSql = "update OA_KM_Folder set " + "fIsNeedApprove=0,fIsInheritApprove=0,fIsInheritManager=0,fIsInheritRights=0 "
						+ "where fid = ?";

			} else {
				updateSql = "update OA_KM_Folder set " + "fIsNeedApprove=0,fIsInheritApprove=1,fIsInheritManager=1,fIsInheritRights=1 "
						+ "where fid = ?";
			}
			PreparedStatement pstmt = conn.prepareStatement(updateSql);
			pstmt.setString(1, folderID);
			try {
				pstmt.executeUpdate();
			} finally {
				pstmt.close();
				pstmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	/**
	 * 全部启用(栏目)
	 * 
	 * @throws Exception
	 */
	public static void allUse(String kind) throws Exception {
		Connection conn = null;
		Statement stmt = null;
		String sql = null;

		try {
			conn = ModelUtils.getConnection("/OA");
			ContextHelper.getTransaction().begin(conn);
			stmt = conn.createStatement();

			sql = "update OA_KM_Folder set fUseStatus = 1,fUseStatusName='启用' " + "where fUseStatus = 0 and fFullID like '" + kind + "%'";
			stmt.execute(sql);
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
	}

	/**
	 * 更新栏目fFullName路径
	 * 
	 * @throws Exception
	 */
	public static void updateAllSubNodeFullName(String oldFName, String newFName) throws Exception {
		String updateSql = String.format("update OA_KM_Folder " + "set fFullName = replace(fFullName, '%s', '%s') " + "where fFullName like '%s%%'",
				oldFName, newFName, oldFName);
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stmt = conn.createStatement();
			try {
				stmt.executeUpdate(updateSql);
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
	 * 继承父栏目审批设置
	 * 
	 * @param folderID
	 * @throws Exception
	 */
	public static void inheritApproveSet(String folderID) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stmt = conn.createStatement();
			try {
				String fIsNeedApprove = null;
				String querySql = String.format("select fIsNeedApprove from OA_KM_Folder where fid in("
						+ "select fParent from OA_KM_Folder where fid = '%s' and fParent " + "not in('public','map','private'))", folderID);
				ResultSet rs = stmt.executeQuery(querySql);
				try {
					if (rs.next()) {
						fIsNeedApprove = rs.getString("fIsNeedApprove");
					}
				} finally {
					rs.close();
					rs = null;
				}
				if (fIsNeedApprove != null) {
					String updateSql = String.format("update OA_KM_Folder set fIsNeedApprove = %s,fIsInheritApprove=1 " + "where fid = '%s'",
							fIsNeedApprove, folderID);
					stmt.executeUpdate(updateSql);
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

	/**
	 * 继承父栏目 管理员设置
	 * 
	 * @param folderID
	 * @param createPsnID
	 * @param createPsnName
	 * @return
	 * @throws Exception
	 */
	public static String inheritManagerSet(String folderID) throws Exception {
		Connection conn = null;
		Statement stmt = null, stmt2 = null;
		ResultSet rs = null;
		String sql = null;
		String result = "";
		String strID = null;
		String strCurrentDate = null;

		try {
			String createPsnID = com.justep.appCommon.SysUtils.getCurrentPersonID();
			String createPsnName = com.justep.appCommon.SysUtils.getCurrentPersonName();
			conn = ModelUtils.getConnection("/OA");
			ContextHelper.getTransaction().begin(conn);
			String strDatabaseType = conn.getMetaData().getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				strID = "sys_guid()";
				strCurrentDate = "current_date";
			} else {
				strID = "newid()";
				strCurrentDate = "getDate()";
			}
			stmt = conn.createStatement();
			stmt2 = conn.createStatement();

			sql = "select fParent from OA_KM_Folder where fid='" + folderID + "'";
			rs = stmt.executeQuery(sql);
			if (rs.next()) {
				String pid = rs.getString("fParent");
				if (pid.equals("public") || pid.equals("private") || pid.equals("map")) { // 是根节点
					result = "not need inherit";
					return result;
				} else {
					sql = "update OA_KM_Folder set fIsInheritManager = 1,fManagerNames=" + "(select fManagerNames from OA_KM_Folder where fid='"
							+ pid + "') " + "where fid='" + folderID + "'";
					stmt2.addBatch(sql);

					sql = "delete from OA_KM_FDManager " + "where (fFolderID = '" + folderID + "' and fIsInherit = 1) or " + "(fFolderID = '"
							+ folderID + "' and fManagerID in(select fManagerID from OA_KM_FDManager " + "where fFolderID='" + pid + "'))";
					stmt2.addBatch(sql);

					sql = "insert into OA_KM_FDManager(fID,version," + "fFolderID,fManagerID,fManagerName,fIsInherit,"
							+ "fCreatePsnID,fCreatePsnName,fCreateTime) " + "select " + strID + ",0," + "'" + folderID
							+ "',fManagerID,fManagerName,1," + "'" + createPsnID + "','" + createPsnName + "'," + strCurrentDate + " "
							+ "from OA_KM_FDManager " + "where fFolderID='" + pid + "'";
					stmt2.addBatch(sql);

					stmt2.executeBatch();
					result = "success";
				}
			} else {
				throw new Exception("栏目无效!");
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
			if (stmt2 != null) {
				stmt2.close();
				stmt2 = null;
			}
			if (conn != null) {
				conn.close();
				conn = null;
			}
		}
		return result;
	}

	/**
	 * 继承父栏目权限设置
	 * 
	 * @param folderID
	 * @param createPsnID
	 * @param createPsnName
	 * @return
	 * @throws Exception
	 */
	public static void inheritRightsSet(String folderID) throws Exception {
		Connection conn = null;
		Statement stmt = null, stmt2 = null;
		ResultSet rs = null;
		String sql = null;
		String strID = null;
		String strCurrentDate = null;
		try {
			String createPsnID = com.justep.appCommon.SysUtils.getCurrentPersonID();
			String createPsnName = com.justep.appCommon.SysUtils.getCurrentPersonName();
			conn = ModelUtils.getConnection("/OA");
			ContextHelper.getTransaction().begin(conn);
			String strDatabaseType = conn.getMetaData().getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				strID = "sys_guid()";
				strCurrentDate = "current_date";
			} else {
				strID = "newid()";
				strCurrentDate = "getDate()";
			}
			stmt = conn.createStatement();
			stmt2 = conn.createStatement();

			sql = "select fParent,fFullID from OA_KM_Folder where fid = '" + folderID + "'";
			rs = stmt.executeQuery(sql);
			if (rs.next()) {
				String pFolderID = rs.getString("fParent");
				String folderFullID = rs.getString("fFullID");

				sql = "insert into OA_KM_Rights(fID,version," + "fKWKind,fFolderID,fKWFullID," + "fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName,"
						+ "fCanCreateKW,fCanReadKW,fCanReleaseKW,fCanCreateComment,fCanReadComment," + "fCanScore,fCanReadRecord,fIsInherit,"
						+ "fCreatePsnID,fCreatePsnName,fCreateTime) " + "select " + strID + ",0," + "'Folder','" + folderID + "','" + folderFullID
						+ "'," + "fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName,"
						+ "fCanCreateKW,fCanReadKW,fCanReleaseKW,fCanCreateComment,fCanReadComment," + "fCanScore,fCanReadRecord,1,'" + createPsnID
						+ "','" + createPsnName + "'," + strCurrentDate + " " + "from OA_KM_Rights " + "where fFolderID='" + pFolderID
						+ "' and fKWKind = 'Folder'";

				stmt2.execute(sql);
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
			if (stmt2 != null) {
				stmt2.close();
				stmt2 = null;
			}
			if (conn != null) {
				conn.close();
				conn = null;
			}
		}
	}

	/**
	 * 获取栏目信息
	 * 
	 * @param folderID
	 * @throws Exception
	 */
	public static String getFolderInfo(String folderID) throws Exception {
		String result = "";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String querySql = "select fIsNeedApprove,fIsInheritApprove," + "fIsInheritManager,fManagerNames,fIsInheritRights, "
					+ "fFullName from OA_KM_Folder where fid = ?";
			PreparedStatement pstmt = conn.prepareStatement(querySql);
			pstmt.setString(1, folderID); 
			try {
				ResultSet rs = pstmt.executeQuery();
				try {
					if (rs.next()) {
						String fIsNeedApprove = rs.getString("fIsNeedApprove");
						String fIsInheritApprove = rs.getString("fIsInheritApprove");
						String fIsInheritManager = rs.getString("fIsInheritManager");
						String fManagerNames = rs.getString("fManagerNames");

						if (fManagerNames == null || fManagerNames.equals("")) {
							fManagerNames = getFolderManagers(conn, folderID);
						}
						String fIsInheritRights = rs.getString("fIsInheritRights");
						String fFullName = rs.getString("fFullName");
						result = fIsNeedApprove + "|" + fIsInheritApprove + "|" + fIsInheritManager + "|" + fManagerNames + "|" + fIsInheritRights
								+ "|" + fFullName;

					} else {
						throw new Exception("获取栏目信息失败!");
					}
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				pstmt.close();
				pstmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return result;
	}

	private static String getFolderManagers(Connection conn, String folderID) throws Exception {
		String result = "";
		String querySql = "select fManagerName from OA_KM_FDManager where fFolderID = ?";
		PreparedStatement pstmt = conn.prepareStatement(querySql);
		try {
			pstmt.setString(1, folderID);
			ResultSet rs = pstmt.executeQuery();
			try {
				while (rs.next()) {
					String manager = rs.getString("fManagerName");
					result = manager + " " + result;
				}
			} finally {
				rs.close();
				rs = null;
			}
		} finally {
			pstmt.close();
			pstmt = null;
		}
		return result;
	}

	/**
	 * 根据栏目ID获取栏目ID路径(即fFullID)
	 * 
	 * @param conn
	 * @param folderID
	 * @return
	 * @throws Exception
	 */
	private static String getFolderFullID(Connection conn, String folderID) throws Exception {
		String fullID = null;
		String sql = null;
		ResultSet rs = null;
		Statement stmt = null;

		sql = String.format("select fFullID from OA_KM_Folder where fid = '%s'", folderID);
		stmt = conn.createStatement();
		try {
			rs = stmt.executeQuery(sql);
			try {
				if (rs.next()) {
					fullID = rs.getString("fFullID");
				}
			} finally {
				rs.close();
				rs = null;
			}
		} finally {
			stmt.close();
			stmt = null;
		}

		return fullID;
	}

	/**
	 * 获取父栏目审批设置
	 * 
	 * @param folderID
	 * @return
	 * @throws Exception
	 */
	public static String getParentFolderApproveSet(String folderID) throws Exception {
		String result = "";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String querySql = "select fid,fIsNeedApprove from OA_KM_Folder " + "where fid = (select fParent from OA_KM_Folder where fid = ?)";
			PreparedStatement pstmt = conn.prepareStatement(querySql);
			try {
				pstmt.setString(1, folderID);
				ResultSet rs = pstmt.executeQuery();
				try {
					if (rs.next()) {
						String id = rs.getString("fid");
						String needApprove = rs.getString("fIsNeedApprove");
						result = id + " " + needApprove;
					} else {
						throw new Exception("没有找到父栏目!");
					}
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				pstmt.close();
				pstmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return result;
	}

	/**
	 * 更新栏目审批设置
	 * 
	 * @param folderID
	 * @param isNeedApprove
	 * @param isInherit
	 * @param isOverride
	 * @throws Exception
	 */
	public static void updateFolderApproveSet(String folderID, String isNeedApprove, String isInherit, String isOverride) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String updateSql = String.format("update OA_KM_Folder " + " set fIsNeedApprove=%s,fIsInheritApprove=%s " + " where fid='%s'",
					isNeedApprove, isInherit, folderID);
			Statement stmt = conn.createStatement();
			try {
				stmt.executeUpdate(updateSql);
				if (isOverride.equals("0")) {
					updateSubFDApproveSetByInherit(conn, folderID, isNeedApprove);
				} else {
					updateSubFDApproveSetByOverride(conn, folderID, isNeedApprove);
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

	private static void updateSubFDApproveSetByInherit(Connection conn, String folderID, String isNeedApprove) throws Exception {
		boolean isSuccess = setApproveRebuildFlag(conn, folderID); // 设置重构标记
		if (isSuccess) {
			String folderFullID = getFolderFullID(conn, folderID);
			if ((folderFullID != null) && (!folderFullID.equals(""))) {
				String fullIDCondition = folderFullID + "%";

				// 构造更新范围
				String rang = String.format("select c.fid " + " from OA_km_folder c join OA_km_folder p "
						+ " on c.fparent = p.fid and c.frebuildapprove = 1 and p.frebuildapprove = 0 " + " and c.fIsInheritApprove = 1"
						+ " and c.fFullID like '%s'", fullIDCondition);

				// 继承父审批设置
				String updateApprove = String.format("update OA_KM_Folder " + " set fIsNeedApprove=%s,fIsInheritApprove=1 " + " where fid in(%s)",
						isNeedApprove, rang);

				// 更新重构标记
				String udpateRebuild = String.format("update OA_km_folder" + " set frebuildapprove = 0 " + " where fid in(%s)", rang);

				Statement stmt = conn.createStatement();
				try {
					int iCount = 1;
					while (iCount != 0) {
						stmt.addBatch(updateApprove);
						stmt.addBatch(udpateRebuild);
						int[] ret = stmt.executeBatch();
						iCount = ret[ret.length - 1];
					}
				} finally {
					stmt.close();
					stmt = null;
				}

			}
		}
	}

	private static void updateSubFDApproveSetByOverride(Connection conn, String folderID, String isNeedApprove) throws Exception {
		String folderFullID = getFolderFullID(conn, folderID);
		if ((folderFullID != null) && (!folderFullID.equals(""))) {
			String fullIDCondition = folderFullID + "/%";

			// 覆盖子栏目审批设置
			String updateApprove = String.format("update OA_KM_Folder " + " set fIsNeedApprove=%s,fIsInheritApprove=1 " + " where fFullID like '%s'",
					isNeedApprove, fullIDCondition);

			Statement stmt = conn.createStatement();
			try {
				stmt.executeUpdate(updateApprove);
			} finally {
				stmt.close();
				stmt = null;
			}
		}
	}

	private static boolean setApproveRebuildFlag(Connection conn, String folderID) throws Exception {
		boolean flag = false;
		Statement stmt = null;

		stmt = conn.createStatement();
		try {
			// 修改根栏目审批重构的标记为0
			String sql = String.format("update OA_KM_Folder set fRebuildApprove = 0 " + " where fid = '%s'", folderID);
			stmt.addBatch(sql);
			String folderFullID = getFolderFullID(conn, folderID);

			// 修改所有子栏目的审批重构标记为1
			if ((folderFullID != null) && (!folderFullID.equals(""))) {
				String fullIDCondition = folderFullID + "/%";
				sql = String.format("update OA_KM_Folder set fRebuildApprove = 1 " + " where fFullID like '%s'", fullIDCondition);
				stmt.addBatch(sql);
			}

			stmt.executeBatch();
			flag = true;
		} finally {
			stmt.close();
			stmt = null;
		}
		return flag;
	}

	/**
	 * 获取父栏目管理员
	 * 
	 * @param folderID
	 * @return
	 * @throws Exception
	 */
	public static Table getParentFolderManagerSet(String folderID) throws Exception {
		String ksqlSelect = "select OA_KM_FDManager.fManagerID,OA_KM_FDManager.fManagerName "
				+ "from OA_KM_FDManager OA_KM_FDManager where OA_KM_FDManager.fFolderID = (select OA_KM_Folder.fParent "
				+ "from OA_KM_Folder OA_KM_Folder " + "where OA_KM_Folder ='" + folderID + "')";
		Table result = KSQL.select(ksqlSelect, null, "/OA/knowledge/data", null);
		return result;
	}

	public static void updateAllSubFolderManagerSet(String folderID, String isInherit, String kind) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);

		try {
			String createPsnID = com.justep.appCommon.SysUtils.getCurrentPersonID();
			String createPsnName = com.justep.appCommon.SysUtils.getCurrentPersonName();
			if (kind.equals("1")) { // 继承
				boolean isSuccess = setManagersRebuildFlag(conn, folderID); // 设置重构标记
				if (isSuccess) {
					rebuildManagers(conn, folderID, createPsnID, createPsnName); // 重构栏目管理员
				}
			} else { // 覆盖
				overrideFolderManagers(conn, folderID, createPsnID, createPsnName);
			}
			String updateSql = String.format("update OA_KM_Folder set fIsInheritManager = %s" + " where fid = '%s'", isInherit, folderID);
			Statement stmt = conn.createStatement();
			try {
				stmt.executeUpdate(updateSql);
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
	 * 重构栏目管理员(子栏目继承父栏目管理员)
	 * 
	 * @param conn
	 * @param folderID
	 * @param createPsnID
	 * @param createPsnName
	 * @throws Exception
	 */
	private static void rebuildManagers(Connection conn, String folderID, String createPsnID, String createPsnName) throws Exception {
		String strID = null;
		String strCurrentDate = null;
		String operator = null;
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();

		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			strID = "sys_guid()";
			strCurrentDate = "current_date";
			operator = "||";
		} else {
			strID = "newid()";
			strCurrentDate = "getDate()";
			operator = "+";
		}

		String folderFullID = getFolderFullID(conn, folderID);

		if ((folderFullID != null) && (!folderFullID.equals(""))) {
			String fullIDCondition = folderFullID + "%";

			// 构造更新范围
			String rang = String.format("select c.fid " + " from OA_km_folder c join OA_km_folder p "
					+ " on c.fparent = p.fid and c.frebuildmanager = 1 and p.frebuildmanager = 0 " + " and c.fIsInheritManager = 1"
					+ " and c.fFullID like '%s'", fullIDCondition);

			// 删除原有继承管理员
			String delInheritSqL = String.format("delete from OA_KM_FDManager " + " where ffolderid in (%s)" + " and fisinherit = 1", rang);

			// 继承父管理员
			String insertInheritSql = String.format("insert into OA_KM_FDManager(fID,version," + "		fFolderID,fManagerID,fManagerName,fIsInherit,"
					+ "		fCreatePsnID,fCreatePsnName,fCreateTime) " + " select %s,0," + " 	f.fid,m.fManagerID,m.fManagerName,1," + " 	'%s','%s',%s "
					+ " from OA_km_folder f " + " join OA_km_fdmanager m on m.ffolderid = f.fparent " + " where f.fid in (%s)", strID, createPsnID,
					createPsnName, strCurrentDate, rang);

			// 去重
			String delRepeatSql = null;
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				delRepeatSql = String.format("delete from OA_KM_FDManager " + " where OA_KM_FDManager.ffolderid in (%s)"
						+ " and (select Max(t.fisinherit %s t.fID) " + " 		from OA_KM_FDManager t "
						+ " 		where t.ffolderid = OA_KM_FDManager.ffolderid " + "			and t.fManagerID = OA_KM_FDManager.fManagerID "
						+ " ) <> (OA_KM_FDManager.fisinherit %s OA_KM_FDManager.fID)", rang, operator, operator);
			} else {
				delRepeatSql = String.format("delete from OA_KM_FDManager " + " where OA_KM_FDManager.ffolderid in (%s)"
						+ " and (select Max(str(t.fisinherit) %s t.fID) " + " 		from OA_KM_FDManager t "
						+ " 		where t.ffolderid = OA_KM_FDManager.ffolderid " + "			and t.fManagerID = OA_KM_FDManager.fManagerID "
						+ " ) <> (str(OA_KM_FDManager.fisinherit) %s OA_KM_FDManager.fID)", rang, operator, operator);
			}

			// 更新重构标记
			String updateSql = String.format("update OA_km_folder " + " set frebuildmanager = 0 " + " where fid in(%s)", rang);

			Statement stmt = conn.createStatement();
			try {
				int iCount = 1;
				while (iCount != 0) {
					stmt.addBatch(delInheritSqL);
					stmt.addBatch(insertInheritSql);
					stmt.addBatch(delRepeatSql);
					stmt.addBatch(updateSql);
					int[] ret = stmt.executeBatch();
					iCount = ret[ret.length - 1];
				}
			} finally {
				stmt.close();
				stmt = null;
			}
		}
	}

	private static void overrideFolderManagers(Connection conn, String folderID, String createPsnID, String createPsnName) throws Exception {
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		String strID = null;
		String strCurrentDate = null;

		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			strID = "sys_guid()";
			strCurrentDate = "current_date";
		} else {
			strID = "newid()";
			strCurrentDate = "getDate()";
		}

		String folderFullID = getFolderFullID(conn, folderID);
		if ((folderFullID != null) && (!folderFullID.equals(""))) {
			String fullIDCondition = folderFullID + "/%";
			String rang = String.format("select fid from OA_KM_Folder" + " where ffullid like '%s'", fullIDCondition);

			String delSql = String.format("delete from OA_KM_FDManager" + " where ffolderid in (%s)", rang);

			String insertSql = String.format("insert into OA_KM_FDManager(fID,version," + "		fFolderID,fManagerID,fManagerName,fIsInherit,"
					+ "		fCreatePsnID,fCreatePsnName,fCreateTime) " + " select %s,0," + " 	f.fid,m.fManagerID,m.fManagerName,1,"
					+ " 	'%s','%s',%s from OA_km_folder f " + " join OA_KM_FDManager m on m.ffolderid = '%s' " + " and f.fid in(%s)", strID,
					createPsnID, createPsnName, strCurrentDate, folderID, rang);

			String updateSql = String.format("update OA_KM_Folder " + " set fIsInheritManager = 1 where ffullid like '%s'", fullIDCondition);

			Statement stmt = conn.createStatement();
			try {
				stmt.addBatch(delSql);
				stmt.addBatch(insertSql);
				stmt.addBatch(updateSql);
				stmt.executeBatch();
			} finally {
				stmt.close();
				stmt = null;
			}
		}
	}

	/**
	 * 设置管理员重构标记(0=不需要重构 1=需要重构)
	 * 
	 * @param conn
	 * @param folderID
	 * @return
	 * @throws Exception
	 */
	private static boolean setManagersRebuildFlag(Connection conn, String folderID) throws Exception {
		boolean flag = false;
		Statement stmt = null;

		stmt = conn.createStatement();
		try {
			// 修改根栏目管理员重构的标记为0
			String sql = String.format("update OA_KM_Folder set fRebuildManager = 0 " + " where fid = '%s'", folderID);
			stmt.addBatch(sql);
			String folderFullID = getFolderFullID(conn, folderID);

			// 修改所有子栏目的管理员重构标记为1
			if ((folderFullID != null) && (!folderFullID.equals(""))) {
				String fullIDCondition = folderFullID + "/%";
				sql = String.format("update OA_KM_Folder set fRebuildManager = 1 " + " where fFullID like '%s'", fullIDCondition);
				stmt.addBatch(sql);
			}

			stmt.executeBatch();
			flag = true;
		} finally {
			stmt.close();
			stmt = null;
		}
		return flag;
	}

	/**
	 * 获取父栏目权限设置
	 * 
	 * @param folderID
	 * @throws Exception
	 */
	public static Table getParentFolderRightsSet(String folderID) throws Exception {
		String ksqlSelect = "select "
				+ "OA_KM_Rights.fOrgKind,OA_KM_Rights.fOrgID,OA_KM_Rights.fOrgName,OA_KM_Rights.fOrgFID,OA_KM_Rights.fOrgFName,"
				+ "OA_KM_Rights.fCanCreateKW,OA_KM_Rights.fCanReadKW,OA_KM_Rights.fCanReleaseKW,OA_KM_Rights.fCanCreateComment,OA_KM_Rights.fCanReadComment,OA_KM_Rights.fCanReadRecord,OA_KM_Rights.fCanScore "
				+ "from OA_KM_Rights OA_KM_Rights where OA_KM_Rights.fFolderID = (select OA_KM_Folder.fParent " + "from OA_KM_Folder OA_KM_Folder "
				+ "where OA_KM_Folder='" + folderID + "') and OA_KM_Rights.fKWKind = 'Folder'";
		Table result = KSQL.select(ksqlSelect, null, "/OA/knowledge/data", null);
		return result;
	}

	/**
	 * 更新所有子栏目权限设置(继承,包括更新继承栏目权限的知识)
	 * 
	 * @param folderID
	 * @throws Exception
	 */
	public static void updateAllSubFDRightsSet(String folderID) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String createPsnID = com.justep.appCommon.SysUtils.getCurrentPersonID();
			String createPsnName = com.justep.appCommon.SysUtils.getCurrentPersonName();

			boolean isSuccess = setRightsRebuildFlag(conn, folderID); // 设置重构标记
			if (isSuccess) {
				rebuildRights(conn, folderID, createPsnID, createPsnName); // 重构栏目权限
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	/**
	 * 重构栏目权限(子栏目继承父栏目权限)
	 * 
	 * @param conn
	 * @param folderID
	 * @param createPsnID
	 * @param createPsnName
	 * @throws Exception
	 */
	private static void rebuildRights(Connection conn, String folderID, String createPsnID, String createPsnName) throws Exception {
		String strID = null;
		String strCurrentDate = null;
		String operator = null;
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();

		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			strID = "sys_guid()";
			strCurrentDate = "current_date";
			operator = "||";
		} else {
			strID = "newid()";
			strCurrentDate = "getDate()";
			operator = "+";
		}

		String folderFullID = getFolderFullID(conn, folderID);

		if ((folderFullID != null) && (!folderFullID.equals(""))) {
			String fullIDCondition = folderFullID + "%";

			// 构造更新范围
			String rang = String.format("select c.fid " + " from OA_km_folder c join OA_km_folder p "
					+ " on c.fparent = p.fid and c.frebuildright = 1 and p.frebuildright = 0 " + " and c.fIsInheritrights = 1"
					+ " and c.fFullID like '%s'", fullIDCondition);

			// 删除原有继承权限
			String delInheritSqL = String.format("delete from OA_km_rights " + " where ffolderid in (%s)"
					+ " and fisinherit = 1 and fKWKind = 'Folder'", rang);

			// 继承父权限
			String insertInheritSql = String.format("insert into OA_KM_rights(fID,version," + "		fKWKind,fFolderID,fKWFullID,"
					+ "		fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName," + " 	fCanCreateKW,fCanReadKW,fCanReleaseKW,"
					+ "     fCanCreateComment,fCanReadComment," + " 	fCanScore,fCanReadRecord,fIsInherit,"
					+ " 	fCreatePsnID,fCreatePsnName,fCreateTime)" + " select %s,0," + " 'Folder',f.fid,f.fFullID,"
					+ "		fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName," + " 	fCanCreateKW,fCanReadKW,fCanReleaseKW,"
					+ "     fCanCreateComment,fCanReadComment," + " 	fCanScore,fCanReadRecord,1," + " 	'%s','%s',%s " + " from OA_km_folder f  "
					+ " join OA_km_rights r on r.ffolderid = f.fparent" + " where f.fid in (%s) and r.fKWKind = 'Folder'", strID, createPsnID,
					createPsnName, strCurrentDate, rang);

			// 去重
			String delRepeatSql = null;
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				delRepeatSql = String.format("delete from OA_KM_Rights" + " where OA_KM_Rights.ffolderid in (%s)"
						+ " and (select Max(t.fisinherit %s t.fID) " + " 		from OA_km_rights t "
						+ " 		where COALESCE(t.ffolderid, '-') = COALESCE(OA_KM_Rights.ffolderid, '-')"
						+ " 		and COALESCE(t.fkwid, '-') = COALESCE(OA_KM_Rights.fkwid, '-')" + "			and t.fOrgFID = OA_KM_Rights.fOrgFID "
						+ "			and t.fKWKind = OA_KM_Rights.fKWKind" + " ) <> (OA_KM_Rights.fisinherit %s OA_KM_Rights.fID)"
						+ " and OA_KM_Rights.fKWKind = 'Folder'", rang, operator, operator);

			} else {
				delRepeatSql = String.format("delete from OA_KM_Rights" + " where OA_KM_Rights.ffolderid in (%s)"
						+ " and (select Max(str(t.fisinherit) %s t.fID) " + " 		from OA_km_rights t "
						+ " 		where COALESCE(t.ffolderid, '-') = COALESCE(OA_KM_Rights.ffolderid, '-')"
						+ " 		and COALESCE(t.fkwid, '-') = COALESCE(OA_KM_Rights.fkwid, '-')" + "			and t.fOrgFID = OA_KM_Rights.fOrgFID "
						+ "			and t.fKWKind = OA_KM_Rights.fKWKind" + " ) <> (str(OA_KM_Rights.fisinherit) %s OA_KM_Rights.fID)"
						+ " and OA_KM_Rights.fKWKind = 'Folder'", rang, operator, operator);
			}

			// 更新重构标记
			String updateSql = String.format("update OA_km_folder" + " set frebuildright = 0 " + " where fid in(%s)", rang);

			String folderRang = "'" + folderID + "'";
			rebuildKWRights(conn, folderRang, createPsnID, createPsnName); // 重构根栏目知识权限

			Statement stmt = conn.createStatement();
			try {
				int iCount = 1;
				while (iCount != 0) {
					stmt.addBatch(delInheritSqL);
					stmt.addBatch(insertInheritSql);
					stmt.addBatch(delRepeatSql);
					stmt.addBatch(updateSql);
					int[] ret = stmt.executeBatch();
					iCount = ret[ret.length - 1];

					rebuildKWRights(conn, rang, createPsnID, createPsnName); // 重构每层栏目下的知识权限
				}
			} finally {
				stmt.close();
				stmt = null;
			}
		}
	}

	/**
	 * 重构知识权限(知识继承栏目权限)
	 * 
	 * @param conn
	 * @param folderRang
	 * @param createPsnID
	 * @param createPsnName
	 * @throws Exception
	 */
	private static void rebuildKWRights(Connection conn, String folderRang, String createPsnID, String createPsnName) throws Exception {
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		String strID = null;
		String strCurrentDate = null;

		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			strID = "sys_guid()";
			strCurrentDate = "current_date";
		} else {
			strID = "newid()";
			strCurrentDate = "getDate()";
		}

		// 删除原有继承
		String delSql = String.format("delete from OA_KM_Rights" + " where ffolderid in (%s) and fKWKind = 'Knowledge'" + " and fIsInherit = 1",
				folderRang);

		// 继承栏目权限
		String insertSql = String.format("insert into OA_KM_Rights(fID,version," + "		fKWKind,fFolderID," + " 	fKWID,fKWFullID,"
				+ "		fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName," + "		fCanCreateKW,fCanReadKW,fCanReleaseKW,"
				+ "     fCanCreateComment,fCanReadComment," + "		fCanScore,fCanReadRecord,fIsInherit,"
				+ "		fCreatePsnID,fCreatePsnName,fCreateTime) " + "	select %s,0," + " 	'Knowledge',r.fFolderID," + "     kf.fkwid,kf.fkwfullid,"
				+ "		fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName," + " 	fCanCreateKW,fCanReadKW,fCanReleaseKW,"
				+ "     fCanCreateComment,fCanReadComment," + " 	fCanScore,fCanReadRecord,1," + " 	'%s','%s',%s " + "	from OA_KM_Rights r "
				+ "	join OA_Km_Kwfolder kf on r.ffolderid = kf.ffolderid "
				+ "	join OA_km_knowledge k on kf.fkwid = k.fid and k.fisinheritrights = 1 " + "	where r.fFolderID in (%s) and r.fKWKind = 'Folder' ",
				strID, createPsnID, createPsnName, strCurrentDate, folderRang);

		Statement stmt = conn.createStatement();
		try {
			stmt.addBatch(delSql);
			stmt.addBatch(insertSql);
			stmt.executeBatch();
		} finally {
			stmt.close();
			stmt = null;
		}
	}

	/**
	 * 设置权限重构标记(0=不需要重构 1=需要重构)
	 * 
	 * @param conn
	 * @param folderID
	 * @return
	 * @throws Exception
	 */
	private static boolean setRightsRebuildFlag(Connection conn, String folderID) throws Exception {
		boolean flag = false;
		Statement stmt = null;
		stmt = conn.createStatement();
		try {
			// 修改根栏目权限重构的标记为0
			String sql = String.format("update OA_KM_Folder set fRebuildRight = 0 " + " where fid = '%s'", folderID);
			stmt.addBatch(sql);

			String folderFullID = getFolderFullID(conn, folderID);

			// 修改所有子栏目的权限重构标记为1
			if ((folderFullID != null) && (!folderFullID.equals(""))) {
				String fullIDCondition = folderFullID + "/%";
				sql = String.format("update OA_KM_Folder set fRebuildRight = 1 " + " where fFullID like '%s'", fullIDCondition);
				stmt.addBatch(sql);
			}

			stmt.executeBatch();
			flag = true;
		} finally {
			stmt.close();
			stmt = null;
		}
		return flag;
	}

	/**
	 * 覆盖子栏目权限设置
	 * 
	 * @param folderID
	 * @throws Exception
	 */
	public static void overrideAllSubFDRightsSet(String folderID) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);

		try {
			String createPsnID = com.justep.appCommon.SysUtils.getCurrentPersonID();
			String createPsnName = com.justep.appCommon.SysUtils.getCurrentPersonName();
			overrideFolderRights(conn, folderID, createPsnID, createPsnName);
		} finally {
			conn.close();
			conn = null;
		}
	}

	private static void overrideFolderRights(Connection conn, String folderID, String createPsnID, String createPsnName) throws Exception {
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		String strID = null;
		String strCurrentDate = null;

		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			strID = "sys_guid()";
			strCurrentDate = "current_date";
		} else {
			strID = "newid()";
			strCurrentDate = "getDate()";
		}

		String folderFullID = getFolderFullID(conn, folderID);
		if ((folderFullID != null) && (!folderFullID.equals(""))) {
			String fullIDCondition = folderFullID + "/%";
			String rang = String.format("select fid from OA_KM_Folder" + " where ffullid like '%s'", fullIDCondition);

			String delSql = String.format("delete from OA_Km_Rights" + " where ffolderid in (%s) and fKWKind = 'Folder'", rang);

			String insertSql = String.format("insert into OA_KM_rights(fID,version," + "		fKWKind,fFolderID,fKWFullID,"
					+ "		fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName," + " 	fCanCreateKW,fCanReadKW,fCanReleaseKW,"
					+ "     fCanCreateComment,fCanReadComment," + " 	fCanScore,fCanReadRecord,fIsInherit,"
					+ " 	fCreatePsnID,fCreatePsnName,fCreateTime)" + " select %s,0," + " 'Folder',f.fid,f.fFullID,"
					+ "		fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName," + " 	fCanCreateKW,fCanReadKW,fCanReleaseKW,"
					+ "     fCanCreateComment,fCanReadComment," + " 	fCanScore,fCanReadRecord,1," + " 	'%s','%s',%s " + " from OA_km_folder f  "
					+ " join OA_km_rights r on r.ffolderid = '%s' and r.fKWKind = 'Folder' " + " and f.fid in(%s)", strID, createPsnID,
					createPsnName, strCurrentDate, folderID, rang);

			String updateSql = String.format("update OA_KM_Folder " + " set fIsInheritRights = 1 where fid in(%s)", rang);

			Statement stmt = conn.createStatement();
			try {
				stmt.addBatch(delSql);
				stmt.addBatch(insertSql);
				stmt.addBatch(updateSql);
				stmt.executeBatch();

				fullIDCondition = folderFullID + "%";
				String folderRang = String.format("select fid from OA_KM_Folder" + " where ffullid like '%s'", fullIDCondition);
				rebuildKWRights(conn, folderRang, createPsnID, createPsnName);
			} finally {
				stmt.close();
				stmt = null;
			}
		}
	}

	/**
	 * 覆盖栏目的知识权限设置(主栏目下的知识)
	 * 
	 * @param folderID
	 * @param includeSub
	 *            includeSub = 'true' 表示要除了要覆盖当前栏目知识权限外,还要覆盖所有子栏目的知识权限
	 *            includeSub = 'false' 只覆盖当前栏目下的知识权限
	 * @throws Exception
	 */
	public static void overrideKWRightsFromFDSet(String folderID, String includeSub) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String createPsnID = com.justep.appCommon.SysUtils.getCurrentPersonID();
			String createPsnName = com.justep.appCommon.SysUtils.getCurrentPersonName();
			String kwRang = null;
			String mainFolderRang = null;
			if (includeSub.equals("true")) {
				String folderFullID = getFolderFullID(conn, folderID);
				if ((folderFullID != null) && (!folderFullID.equals(""))) {
					String fullIDCondition = folderFullID + "/%";
					kwRang = String.format("select kf.fkwfullid from OA_KM_KWFolder kf " + " join OA_KM_Knowledge k on kf.fKWID = k.fid "
							+ " where kf.fKWFullID like '%s' " + " and kf.fFolderKind = 'MainFolder'", fullIDCondition);

					fullIDCondition = folderFullID + "%";
					mainFolderRang = String.format("select fid from OA_KM_Folder where fFullID like '%s'", fullIDCondition);
				} else {
					return;
				}
			} else {
				kwRang = String.format("select kf.fkwfullid from OA_KM_KWFolder kf " + " join OA_KM_Knowledge k on kf.fKWID = k.fid "
						+ " where kf.fFolderID = '%s' " + " and kf.fFolderKind = 'MainFolder'", folderID);
				mainFolderRang = "'" + folderID + "'";
			}
			rebuildKWRightsForOverride(conn, folderID, kwRang, mainFolderRang, createPsnID, createPsnName);
		} finally {
			conn.close();
			conn = null;
		}
	}

	private static void rebuildKWRightsForOverride(Connection conn, String folderID, String kwRang, String mainFolderRang, String createPsnID,
			String createPsnName) throws Exception {
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		String strID = null;
		String strCurrentDate = null;
		String operator = null;

		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			strID = "sys_guid()";
			strCurrentDate = "current_date";
			operator = "||";
		} else {
			strID = "newid()";
			strCurrentDate = "getDate()";
			operator = "+";
		}

		// 删除原有权限(主栏目)
		String delSql = String.format("delete from OA_KM_Rights" + " where fKWKind = 'Knowledge' and fkwfullid in(%s) " + " and fFolderID in(%s)",
				kwRang, mainFolderRang);

		String insertSql = String.format("insert into OA_KM_Rights(fID,version," + "		fKWKind,fFolderID," + " 	fKWID,fKWFullID,"
				+ "		fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName," + "		fCanCreateKW,fCanReadKW,fCanReleaseKW,"
				+ "     fCanCreateComment,fCanReadComment," + "		fCanScore,fCanReadRecord,fIsInherit,"
				+ "		fCreatePsnID,fCreatePsnName,fCreateTime) " + "	select %s,0," + " 	'Knowledge',k.fFolderID," + "     kf.fkwid,kf.fkwfullid,"
				+ "		fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName," + " 	fCanCreateKW,fCanReadKW,fCanReleaseKW,"
				+ "     fCanCreateComment,fCanReadComment," + " 	fCanScore,fCanReadRecord,1," + " 	'%s','%s',%s "
				+ "	from OA_KM_Knowledge k join OA_KM_Rights r " + "	on r.fFolderID = '%s' and r.fKWKind = 'Folder' and k.fFolderID in(%s) "
				+ " join OA_KM_KWFolder kf on k.fid = kf.fkwid " + " and kf.ffolderkind='MainFolder' and kf.fFolderID in(%s)", strID, createPsnID,
				createPsnName, strCurrentDate, folderID, mainFolderRang, mainFolderRang);

		String connOperator = operator + " '/' " + operator;
		String updateSql = String.format("update OA_KM_Knowledge " + " set fIsInheritRights = 1 where (fFolderFullID %s fid) in (%s)", connOperator,
				kwRang);

		Statement stmt = conn.createStatement();
		try {
			stmt.addBatch(delSql);
			stmt.addBatch(insertSql);
			stmt.addBatch(updateSql);
			stmt.executeBatch();
		} finally {
			stmt.close();
			stmt = null;
		}
	}

	// 判断能否删除某一栏目(为真条件：该栏目下没有子栏目和知识)
	public static boolean canDeleteFolder(String folderID) throws Exception {
		boolean can = false;
		String querySubFD = "select 1 from OA_KM_Folder where fParent = ?";
		String queryKW = "select 1 from OA_KM_KWFolder kf join OA_KM_Knowledge k " + " on kf.fFolderID = ? and kf.fKWID = k.fID";
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			PreparedStatement pstmt = conn.prepareStatement(querySubFD);
			try {
				pstmt.setString(1, folderID);
				ResultSet rs = pstmt.executeQuery();
				try {
					if (!rs.next()) {
						PreparedStatement pstmtKW = conn.prepareStatement(queryKW);
						try {
							pstmtKW.setString(1, folderID);
							ResultSet rsKW = pstmtKW.executeQuery();
							try {
								if (!rsKW.next()) {
									can = true;
								}
							} finally {
								rsKW.close();
								rsKW = null;
							}
						} finally {
							pstmtKW.close();
							pstmtKW = null;
						}
					}
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				pstmt.close();
				pstmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return can;
	}

	/**
	 * 更新栏目数据(dataType:数据类型,目前只支持string、integer)
	 * 
	 * @param folderID
	 * @param field
	 * @param dataType
	 * @param value
	 * @throws Exception
	 */
	public static void updateFolderData(String folderID, String field, String dataType, String value) throws Exception {
		Connection conn = null;
		Statement stmt = null;
		String sql = null;

		if (dataType.equals("string")) {
			sql = "update OA_KM_Folder set " + field + " = '" + value + "' where fid='" + folderID + "'";
		} else if (dataType.equals("integer")) {
			sql = "update OA_KM_Folder set " + field + " = " + value + " where fid='" + folderID + "'";
		} else {
			throw new Exception("传入的数据类型错误,目前只支持string、integer");
		}

		try {
			conn = ModelUtils.getConnection("/OA");
			stmt = conn.createStatement();
			stmt.execute(sql);
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
	}

	// 判断能否删除某一栏目(为真条件：该栏目下没有子栏目和知识)
	public static boolean canDeleteNode(String folderID) throws Exception {
		boolean can = false;
		String querySubFD = "select 1 from OA_KM_Folder where fParent = ?";
		String queryKW = "select 1 from OA_KM_KWFolder kf join OA_KM_Knowledge k " + " on kf.fFolderID = ? and kf.fKWID = k.fID";
		Connection conn = ModelUtils.getConnection("/OA");
		try {
			PreparedStatement pstmt = conn.prepareStatement(querySubFD);
			try {
				pstmt.setString(1, folderID);
				ResultSet rs = pstmt.executeQuery();
				try {
					if (!rs.next()) {
						PreparedStatement pstmtKW = conn.prepareStatement(queryKW);
						try {
							pstmtKW.setString(1, folderID);
							ResultSet rsKW = pstmtKW.executeQuery();
							try {
								if (!rsKW.next()) {
									can = true;
								}
							} finally {
								rsKW.close();
								rsKW = null;
							}
						} finally {
							pstmtKW.close();
							pstmtKW = null;
						}
					}
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				pstmt.close();
				pstmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return can;
	}
}
