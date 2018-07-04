import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import java.util.Collection;
import com.justep.system.context.ContextHelper;
import com.justep.model.ModelUtils;

/**
 * 知识地图
 * 
 * @author Administrator
 * 
 */
public class KWMap {
	/**
	 * 获取 知识地图分类 管理员
	 * 
	 * @param folderID
	 * @return
	 * @throws Exception
	 */
	public static String getKnowledgeMapManagers(String folderID)
			throws Exception {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String sql = null;
		String result = null;

		try {
			conn = ModelUtils.getConnection("/OA");
			ContextHelper.getTransaction().begin(conn);
			try {
				stmt = conn.createStatement();
				try {
					sql = "select fManagerID from OA_KM_FDManager where fFolderID = '"
							+ folderID + "'";
					rs = stmt.executeQuery(sql);
					while (rs.next()) {
						String managerID = rs.getString("fManagerID");
						if (result == null) {
							result = managerID;
						} else {
							result += "," + managerID;
						}
					}
				} finally {
					if (rs != null) {
						rs.close();
						rs = null;
					}
				}
			} finally {
				if (stmt != null) {
					stmt.close();
					stmt = null;
				}
			}
		} finally {
			if (conn != null) {
				conn.close();
				conn = null;
			}
		}
		if (result == null) {
			result = "";
		}
		return result;
	}

	/**
	 * 获取当前登录人知识地图(知识地图权限)
	 * 
	 * @queryKind = 'map'表示查询知识地图 queryKind='mapKind'表示查询地图分类
	 * @return
	 * @throws Exception
	 */
	public static String getCurrentPsnKnowledgeMap(String folderID,
			String queryKind) throws Exception {
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
			Collection<String> memberFullIDs = com.justep.appCommon.SysUtils.getAllPersonMemberFIDs();
			String urlCondition = "";
			for (String memberFullID : memberFullIDs) {
				String condition = String.format(
						" ('%s/%s.psn' like r.fOrgFID %s '%%') ", memberFullID,
						psnID, operator);
				if (urlCondition.equals(""))
					urlCondition = condition;
				else
					urlCondition += " or " + condition;
			}

			if (queryKind.equals("map")) {
				sql = "select distinct f.fid,f.fName,f.fFullID "
						+ "from OA_KM_Folder f join OA_KM_Rights r "
						+ "on f.fid = r.fFolderID and r.fKWKind = 'Folder' "
						+ "where f.fParent = 'map' " + "and (" + urlCondition
						+ ")";
			} else if (queryKind.equals("mapKind")) {
				sql = "select fid,fName,fFullID from OA_KM_Folder "
						+ "where fParent = '" + folderID + "'";
			} else {
				return "";
			}
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
}