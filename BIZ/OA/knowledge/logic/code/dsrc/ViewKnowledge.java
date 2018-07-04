import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;
import org.dom4j.Document;
import org.dom4j.Element;
import com.justep.model.ModelUtils;
import com.justep.system.context.ContextHelper;

public class ViewKnowledge {
	private static class Reader {
		String sID;
		String sName;
		String sFName;
	}

	public static void insertReaders(String KWID) throws Exception {
		String curPersonID = com.justep.appCommon.SysUtils.getCurrentPersonID();
		String curPersonName = com.justep.appCommon.SysUtils.getCurrentPersonName();
		String sqlCheckReader = String
				.format(
						"select fReaderID from OA_KM_Readers where fKWID = '%s' and fReaderID = '%s' ",
						KWID, curPersonID);
		String sqlInsertReader = "insert into OA_KM_READERS(fID, fKWID, fReaderID, fReaderName, fReadTime) "
				+ "	values(?, ?, ?, ?, ?) ";
		String sqlUpdateReadCount = String
				.format(
						"update OA_KM_KNOWLEDGE set fReaderCount = COALESCE(fReaderCount, 0) + 1 where fID = '%s' ",
						KWID);

		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stat = conn.createStatement();
			try {
				ResultSet rs = stat.executeQuery(sqlCheckReader);
				try {
					if (rs.next())
						return;
				} finally {
					rs.close();
					rs = null;
				}

				PreparedStatement pstat = conn
						.prepareStatement(sqlInsertReader);
				try {

				} finally {
					pstat.setString(1, java.util.UUID.randomUUID().toString());
					pstat.setString(2, KWID);
					pstat.setString(3, curPersonID);
					pstat.setString(4, curPersonName);
					pstat.setTimestamp(5, new java.sql.Timestamp(new java.util.Date()
							.getTime()));
					pstat.executeUpdate();
				}

				stat.executeUpdate(sqlUpdateReadCount);

			} finally {
				stat.close();
				stat = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	public static Document getNoReaders(String KWID) throws Exception {
		Document result = org.dom4j.DocumentHelper
				.createDocument(org.dom4j.DocumentHelper
						.createElement("noReaders"));
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Connection connSys = ModelUtils.getConnection("/system/data");
			ContextHelper.getTransaction().begin(conn);
			try {
				Map<String, String> alreadyReaders = getAlreadyReaders(conn,
						KWID);
				Map<String, Reader> canReaders = getCanReaders(conn, connSys,
						KWID);
				Map<String, Reader> noReaders = getNoReaders(alreadyReaders,
						canReaders);
				for (Reader reader : noReaders.values()) {
					Element readerElement = result.getRootElement().addElement(
							"reader");
					readerElement.addElement("sID").addText(reader.sID);
					readerElement.addElement("sName").addText(reader.sName);
					readerElement.addElement("sFName").addText(reader.sFName);
				}
			} finally {
				connSys.close();
				connSys = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return result;
	}

	public static Integer getNoReaderCount(String KWID) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Connection connSys = ModelUtils.getConnection("/system/data");
			ContextHelper.getTransaction().begin(conn);
			try {
				Map<String, String> alreadyReaders = getAlreadyReaders(conn,
						KWID);
				Map<String, Reader> canReaders = getCanReaders(conn, connSys,
						KWID);
				Map<String, Reader> noReaders = getNoReaders(alreadyReaders,
						canReaders);
				return noReaders.size();
			} finally {
				connSys.close();
				connSys = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	private static Map<String, String> getAlreadyReaders(Connection conn,
			String KWID) throws Exception {
		String sql = String
				.format(
						"select fReaderID, fReaderName from OA_KM_Readers where fKWID = '%s' ",
						KWID);

		Map<String, String> result = new HashMap<String, String>();

		Statement stat = conn.createStatement();
		try {
			ResultSet rs = stat.executeQuery(sql);
			try {
				while (rs.next()) {
					result.put(rs.getString("fReaderID"), rs
							.getString("fReaderName"));
				}
			} finally {
				rs.close();
				rs = null;
			}
		} finally {
			stat.close();
			stat = null;
		}

		return result;
	}

	private static Map<String, Reader> getCanReaders(Connection conn,
			Connection connSys, String KWID) throws Exception {
		Map<String, Reader> result = new LinkedHashMap<String, Reader>();

		String orgIDs = "'-'", psnIDs = "'-'";
		String sqlGetRights = String
				.format(
						"select fOrgID, fOrgKind from OA_KM_Rights where fKWID = '%s' and fCanReadKW = 1 ",
						KWID);
		Statement stat = conn.createStatement();
		try {
			ResultSet rsRights = stat.executeQuery(sqlGetRights);
			try {
				while (rsRights.next()) {
					if (!(rsRights.getString("fOrgKind")
							.equalsIgnoreCase("psn"))) {
						orgIDs += String.format(", '%s'", rsRights
								.getString("fOrgID"));
					}
					if (rsRights.getString("fOrgKind").equalsIgnoreCase("psn")) {
						psnIDs += String.format(", '%s'", rsRights
								.getString("fOrgID"));
					}
				}
			} finally {
				rsRights.close();
				rsRights = null;
			}
		} finally {
			stat.close();
			stat = null;
		}

		String sqlGetPersons_Oracle = String
				.format(
						"Select distinct p.sID, p.sName, mainOrg.sFName "
								+ "	from SA_OPPerson p "
								+ "		join SA_OPOrg mainOrg on p.sMainOrgID = mainOrg.sID "
								+ "	where p.sID in (%s) "
								+ "		or p.sID in ( "
								+ "			select pm.sPersonID "
								+ "			from SA_OPOrg org "
								+ "				join SA_OPOrg orgC on orgC.sFID like org.sFID || '%%' "
								+ "				join SA_OPOrg pm on orgC.sID = pm.sParent "
								+ "			where org.sID in (%s) ) "
								+ "	order by mainOrg.sFName, p.sName ", psnIDs,
						orgIDs);
		String sqlGetPersons_SQLServer = String
				.format(
						"Select distinct p.sID, p.sName, mainOrg.sFName "
								+ "	from SA_OPPerson p "
								+ "		join SA_OPOrg mainOrg on p.sMainOrgID = mainOrg.sID "
								+ "	where p.sID in (%s) "
								+ "		or p.sID in ( "
								+ "			select pm.sPersonID "
								+ "			from SA_OPOrg org "
								+ "				join SA_OPOrg orgC on orgC.sFID like org.sFID + '%%' "
								+ "				join SA_OPOrg pm on orgC.sID = pm.sParent "
								+ "			where org.sID in (%s) ) "
								+ "	order by mainOrg.sFName, p.sName ", psnIDs,
						orgIDs);
		Statement statSys = connSys.createStatement();
		try {
			ResultSet rs = null;
			String strDatabaseType = connSys.getMetaData()
					.getDatabaseProductName();
			if (strDatabaseType.equalsIgnoreCase("Oracle")) {
				rs = statSys.executeQuery(sqlGetPersons_Oracle);
			} else {
				rs = statSys.executeQuery(sqlGetPersons_SQLServer);
			}
			try {
				while (rs.next()) {
					Reader reader = new Reader();
					reader.sID = rs.getString("sID");
					reader.sName = rs.getString("sName");
					reader.sFName = rs.getString("sFName");
					result.put(rs.getString("sID"), reader);
				}

			} finally {
				rs.close();
				rs = null;
			}
		} finally {
			statSys.close();
			statSys = null;
		}
		return result;
	}

	private static Map<String, Reader> getNoReaders(
			Map<String, String> alreadyReaders, Map<String, Reader> canReaders)
			throws Exception {
		Map<String, Reader> result = new LinkedHashMap<String, Reader>();
		for (String readerID : canReaders.keySet()) {
			if (!(alreadyReaders.keySet().contains(readerID)))
				result.put(readerID, canReaders.get(readerID));
		}
		return result;
	}

}