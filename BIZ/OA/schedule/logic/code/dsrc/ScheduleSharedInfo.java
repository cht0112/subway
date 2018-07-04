import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.justep.model.ModelUtils;
import com.justep.system.context.ContextHelper;

public class ScheduleSharedInfo {
	public static String queryWhoShared2Me() throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Connection connSys = ModelUtils.getConnection("/system/data");
			ContextHelper.getTransaction().begin(conn);
			try {
				Set<String> currPsnFullID = getPersonFullIds(connSys);
				Set<String> personIDs = queryPersonIDsByPersonFID(querySharedPerson(
						conn, currPsnFullID));
				StringBuffer sb = new StringBuffer();
				for (String sid : personIDs) {
					sb.append(",").append(sid);
				}
				if (personIDs.size() != 0)
					return sb.substring(1, sb.length());
			} finally {
				connSys.close();
				connSys = null;
			}
		/*} catch (Exception e) {
			e.printStackTrace();*/
		} finally {
			conn.close();
			conn = null;
		}
		return null;
	}

	public static boolean GetDatabaseType(Connection conn) throws SQLException {
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		return !strDatabaseType.equalsIgnoreCase("Oracle") ? true : false;
	}

	private static Set<String> getPersonFullIds(Connection conn)
			throws SQLException {
		Set<String> personsSet = new HashSet<String>();
		Statement stmt = null;
		try {
			stmt = conn.createStatement();

			String sql = "select  e.sfid  from sa_oporg e "
					+ "where e.spersonid='"
					+ com.justep.appCommon.SysUtils.getCurrentPersonID() + "'";
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				String person = rs.getString(1);
				if (!personsSet.contains(person))
					personsSet.add(person);
			}
			rs.close();
			rs = null;

		} finally {
			stmt.close();
			stmt = null;
		}
		return personsSet;
	}

	private static Set<String> querySharedPerson(Connection conn,
			Set<String> currentPsnFullID) throws SQLException {
		List<String> persons = new ArrayList<String>();
		Set<String> personsSet = new HashSet<String>();
		Statement stmt = null;
		try {
			stmt = conn.createStatement();
			StringBuffer condition = new StringBuffer();
			for (String fid : currentPsnFullID) {
				if (GetDatabaseType(conn)) {
					condition.append(" or '" + fid
							+ "' like fShareToOrgFID + '%' ");
				} else {
					condition.append(" or '" + fid
							+ "' like fShareToOrgFID || '%' ");
				}
			}
			String sql = "select fSharedOrgFID from OA_Sd_Sharerange where 1=0 "
					+ condition.toString();
			ResultSet rs = stmt.executeQuery(sql);
			try {
				while (rs.next()) {
					String person = rs.getString(1);
					if (!persons.contains(person))
						persons.add(person);
				}
			} finally {
				rs.close();
				rs = null;
			}
			for (String p : persons)
				personsSet.add(p);
		} finally {
			stmt.close();
			stmt = null;
		}
		return personsSet;
	}

	private static Set<String> queryPersonIDsByPersonFID(Set<String> FIDs)
			throws Exception {
		String model = "/system/data";
		Connection conn = ModelUtils.getConnection(model);
		ContextHelper.getTransaction().begin(conn);

		Set<String> result = new HashSet<String>();
		
		if(FIDs.size()< 1){
			return result;
		}


		String likeConditions = "";
		StringBuffer sb = new StringBuffer();

		for (String FID : FIDs) {

			if (GetDatabaseType(conn)) {
				sb.append("o.sfid like '" + FID + "' + '%' or ");
			} else {
				sb.append("o.sfid like '" + FID + "' ||'%' or ");
			}
		}
		if (FIDs.size() != 0) {
			likeConditions = sb.substring(2, sb.length() - 4);
			likeConditions = " WHERE SPERSONID !='"
					+ com.justep.appCommon.SysUtils.getCurrentPersonID()
					+ "' AND(1=0 OR " + likeConditions + ")";
		}
		String sql = "";
		if (!(likeConditions.equals("") || null == likeConditions)) {
			sql = "SELECT DISTINCT SPERSONID FROM SA_OPORG o" + likeConditions
					+ " ";
		}
		try {
			Statement stmt = conn.createStatement();
			try {
				ResultSet rs = stmt.executeQuery(sql);
				try {
					while (rs.next()) {
						String sid = rs.getString(1);
						result.add(sid);
					}
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				stmt.close();
				stmt = null;
			}
		/*} catch (Exception e) {
			e.printStackTrace();*/
		} finally {
			conn.close();
			conn = null;
		}
		return result;
	}
}