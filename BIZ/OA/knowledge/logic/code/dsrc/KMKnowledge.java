import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import com.justep.system.context.ContextHelper;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Node;

import com.justep.appCommon.SysUtils;
import com.justep.model.ModelUtils;
import com.justep.system.data.BizData;
import com.justep.system.data.DataPermission;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class KMKnowledge {
	/**
	 * 判断当前人是否有权限创建知识
	 * 
	 * @param folderID
	 * @return
	 * @throws Exception
	 */
	public static boolean canCreateKW(String folderID) throws Exception {
		boolean result = false;
		String operator = null;

		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			operator = "|| '%'";
		} else {
			operator = "+ '%'";
		}

		try {
			Statement stmt = conn.createStatement();
			try {
				Collection<String> memberFullIDs = com.justep.appCommon.SysUtils
						.getAllPersonMemberFIDs();
				String orgCondition = null;
				for (String memberFullID : memberFullIDs) {
					if (orgCondition == null) {
						orgCondition = String.format("'%s' like fOrgFID %s",
								memberFullID, operator);
					} else {
						orgCondition += String.format(
								" or '%s' like fOrgFID %s", memberFullID,
								operator);
					}

					String sql = String
							.format(
									"select 1 from OA_KM_Rights r "
											+ " where r.fkwkind = 'Folder' and r.ffolderid='%s' "
											+ " and r.fCanCreateKW = 1 and (%s)",
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
	 * 判断当前人是否有权限发布知识
	 * 
	 * @param folderID
	 * @return
	 * @throws Exception
	 */
	public static boolean canReleaseKW(String folderID) throws Exception {
		boolean result = false;
		String operator = null;

		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			operator = "|| '%'";
		} else {
			operator = "+ '%'";
		}

		try {
			Statement stmt = conn.createStatement();
			try {
				String psnID = com.justep.appCommon.SysUtils
						.getCurrentPersonID();
				Collection<String> memberFullIDs = com.justep.appCommon.SysUtils
						.getAllPersonMemberFIDs();
				String orgCondition = null;
				for (String memberFullID : memberFullIDs) {
					if (orgCondition == null) {
						orgCondition = String.format(
								"'%s/%s.psn' like fOrgFID %s", memberFullID,
								psnID, operator);
					} else {
						orgCondition += String.format(
								" or '%s/%s.psn' like fOrgFID %s",
								memberFullID, psnID, operator);
					}
				}

				String sql = String.format("select 1 from OA_KM_Rights r "
						+ " where r.fkwkind = 'Folder' and r.ffolderid='%s' "
						+ " and r.fCanReleaseKW = 1 and (%s)", folderID,
						orgCondition);
				ResultSet rs = stmt.executeQuery(sql);
				try {
					if (rs.next()) {
						result = true;
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
	 * 获取知识所属的栏目权限
	 * 
	 * @param kwid
	 * @return
	 * @throws Exception
	 */
	public static Table getAttachedFDRights(String kwid) throws Exception {
		String sql = null;
		sql = "select OA_KM_Rights.fFolderID,OA_KM_Folder.fName as fFolderName,OA_KM_Folder.fFullID as fFolderFullID,"
				+ "OA_KM_Rights.fOrgKind,OA_KM_Rights.fOrgID,OA_KM_Rights.fOrgName,OA_KM_Rights.fOrgFID,OA_KM_Rights.fOrgFName,"
				+ "OA_KM_Rights.fCanCreateKW,OA_KM_Rights.fCanReadKW,OA_KM_Rights.fCanReleaseKW,OA_KM_Rights.fCanCreateComment,OA_KM_Rights.fCanReadComment,OA_KM_Rights.fCanReadRecord,OA_KM_Rights.fCanScore "
				+ "from OA_KM_Rights OA_KM_Rights join OA_KM_Folder OA_KM_Folder on OA_KM_Rights.fFolderID = OA_KM_Folder "
				+ "where OA_KM_Rights.fFolderID in(select OA_KM_KWFolder.fFolderID from OA_KM_KWFolder OA_KM_KWFolder where OA_KM_KWFolder.fKWID='"
				+ kwid + "') and OA_KM_Rights.fKWKind = 'Folder'";
		Table result = KSQL.select(sql, null, "/OA/knowledge/data", null);
		return result;
	}

	/**
	 * 发布知识接口
	 * 
	 * @param bizData
	 * @throws Exception
	 */
	public static void publishKwInterfaceByFolder(Document bizData)
			throws Exception {
		String kwID = java.util.UUID.randomUUID().toString().replace("-", "")
				.toUpperCase();
		String strID = null;
		String currentDate = null;
		String operator = null;
		String sql = "";

		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			strID = "sys_guid()";
			currentDate = "current_date";
			operator = "||";
		} else {
			strID = "newid()";
			currentDate = "getDate()";
			operator = "+";
		}
		String bizID = getSingleNodeValue(bizData, "root/fBizID");
		String folderID = getSingleNodeValue(bizData, "root/fFolderID");
		String otherFolderIDs = getSingleNodeValue(bizData,
				"root/fOtherFolderIDs");
		otherFolderIDs = "'" + otherFolderIDs.replaceAll(",", "','") + "'";
		Statement stmt = conn.createStatement();
		try {
			deleteOldKnowledge(stmt, bizID);

			sql = "insert into OA_KM_Knowledge(fid,version,ftitle,fkeyword,fdocnumber,fimportant,fwriter,ffolderid,ffoldername,ffolderfullid,"
					+ " ffolderfullname,fisneedapprove,fcontenttype,fcontenttypename,fistop,fcreateognid,fcreateognname,fcreatedeptid,fcreatedeptname,fcreatepsnid,"
					+ " fcreatepsnname,fcreatepsnfid,fcreatepsnfname,fcreatetime,freleasestatus,freleasestatusname,"
					+ " fisdisplayonportal,fisinheritrights,fotherfolders,fattachment,"
					+ " fdocument,fbizid,fimportantname,freadercount,frepliescount,fbiztype,fbiztypename,"
					+ " freleaseognid,freleaseognname,freleasedeptid,freleasedeptname,freleasepsnid,freleasepsnname,freleasepsnfid,"
					+ " freleasepsnfname,freleasetime)" + " (select '"
					+ kwID
					+ "',0,'"
					+ getSingleNodeValue(bizData, "root/fTitle")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fKeyword")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fDocNumber")
					+ "','low','"
					+ getSingleNodeValue(bizData, "root/fWriter")
					+ "','"
					+ folderID
					+ "',fName,fFullID,fFullName,fIsNeedApprove,'"
					+ getSingleNodeValue(bizData, "root/fContentType")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fContentTypeName")
					+ "',0,'"
					+ getSingleNodeValue(bizData, "root/fCreateOgnID")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fCreateOgnName")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fCreateDeptID")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fCreateDeptName")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fCreatePsnID")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fCreatePsnName")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fCreatePsnFID")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fCreatePsnFName")
					+ "',"
					+ currentDate
					+ ",1,'已发布',0,1,'"
					+ getSingleNodeValue(bizData, "root/fOtherFolderNames")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fAttachment")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fDocument")
					+ "','"
					+ bizID
					+ "','低',0,0,'"
					+ getSingleNodeValue(bizData, "root/fBizType")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fBizTypeName")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fReleaseOgnID")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fReleaseOgnName")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fReleaseDeptID")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fReleaseDeptName")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fReleasePsnID")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fReleasePsnName")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fReleasePsnFID")
					+ "','"
					+ getSingleNodeValue(bizData, "root/fReleasePsnFName")
					+ "',"
					+ currentDate
					+ " from OA_KM_Folder where fID = '"
					+ folderID + "')";
			stmt.addBatch(sql);

			synchroKMFolder(stmt, strID, operator, kwID, folderID,
					otherFolderIDs);

			synchroRights(stmt, strID, operator, currentDate, kwID, folderID,
					otherFolderIDs, true);

			stmt.executeBatch();
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

	public static void deleteOldKnowledge(Statement OAstmt, String bizID)
			throws Exception {
		String deleteSQL = "";
		deleteSQL = "delete from OA_KM_KWFolder where fKWID = (select fID from OA_KM_Knowledge where fBizID='"
				+ bizID + "')";
		OAstmt.addBatch(deleteSQL);
		deleteSQL = "delete from OA_KM_Rights where fKWID = (select fID from OA_KM_Knowledge where fBizID='"
				+ bizID + "')";
		OAstmt.addBatch(deleteSQL);
		deleteSQL = "delete from OA_KM_Readers where fKWID = (select fID from OA_KM_Knowledge where fBizID='"
				+ bizID + "')";
		OAstmt.addBatch(deleteSQL);
		deleteSQL = "delete from OA_KM_Knowledge where fBizID='" + bizID + "'";
		OAstmt.addBatch(deleteSQL);
	}

	public static void synchroKMFolder(Statement OAstmt, String StrID,
			String operator, String kwid, String folderID, String otherFolderIDs)
			throws Exception {
		String KMFolderSQL = "";
		KMFolderSQL = "insert into OA_KM_KWFolder(fid, version, fkwid, ffolderkind, ffolderid, fkwfullid, fkwfullname) (select "
				+ StrID
				+ ",0,'"
				+ kwid
				+ "','MainFolder',f.fID,f.fFullID "
				+ operator
				+ " '/' "
				+ operator
				+ " '"
				+ kwid
				+ "',null from OA_KM_Folder f where f.fID = '"
				+ folderID
				+ "')";
		OAstmt.addBatch(KMFolderSQL);

		KMFolderSQL = "insert into OA_KM_KWFolder(fid, version, fkwid, ffolderkind, ffolderid, fkwfullid, fkwfullname) (select "
				+ StrID
				+ ",0,'"
				+ kwid
				+ "','OtherFolder',f.fID,f.fFullID "
				+ operator
				+ " '/' "
				+ operator
				+ " '"
				+ kwid
				+ "',null from OA_KM_Folder f where f.fID in ("
				+ otherFolderIDs + "))";
		OAstmt.addBatch(KMFolderSQL);
	}

	public static void synchroRights(Statement OAstmt, String StrID,
			String operator, String currentDate, String kwid, String folderID,
			String otherFolderIDs, Boolean isInheritRights) throws Exception {
		String RightsSQL = "";
		if (isInheritRights) {
			otherFolderIDs = "'" + folderID + "'," + otherFolderIDs;
			RightsSQL = "insert into OA_KM_Rights(fid,version,fkwkind,ffolderid,ffoldername,fkwid,fkwname,fkwfullid,fkwfullname,"
					+ "forgkind,forgid,forgname,forgfid,forgfname,fcancreatekw,fcanreadkw,fcancreatecomment,fcanreadcomment,fcanscore,"
					+ "fcanreadrecord,fisinherit,fcreatepsnid,fcreatepsnname,fcreatetime,fcanreleasekw) (select "
					+ StrID
					+ ",0,'Knowledge',r.fFolderID,null,'"
					+ kwid
					+ "',null,r.fKWFullID "
					+ operator
					+ " '/' "
					+ operator
					+ " '"
					+ kwid
					+ "',null,r.forgkind,r.forgid,r.forgname,r.forgfid,r.forgfname,r.fcancreatekw,r.fcanreadkw,r.fcancreatecomment,r.fcanreadcomment,r.fcanscore,"
					+ "r.fcanreadrecord,1,'"
					+ com.justep.appCommon.SysUtils.getCurrentPersonID()
					+ "','"
					+ com.justep.appCommon.SysUtils
							.getCurrentPersonNameWithAgent()
					+ "',"
					+ currentDate
					+ ",r.fcanreleasekw from OA_KM_Rights r where r.fKWKind = 'Folder' and r.fFolderID in ("
					+ otherFolderIDs + "))";
			OAstmt.addBatch(RightsSQL);
		}
	}

	public static void publishKnowledgeInterface(Document bizData,String delFlag)
			throws Exception {
		String strID = null;
		String currentDate = null;
		String operator = null;

		Map<String, String> map = new HashMap<String, String>();
		String[] arrOtherFolder = null;
		String[] arrRight = null;
		parseKWInfoFromDoc(map, bizData);
		arrOtherFolder = parseOtherFolderFromDoc(arrOtherFolder, bizData);
		arrRight = parseRightFromDoc(arrRight, bizData);

		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			strID = "sys_guid()";
			currentDate = "current_date";
			operator = "||";
		} else {
			strID = "newid()";
			currentDate = "getDate()";
			operator = "+";
		}

		try {
			Statement stmt = conn.createStatement();
			try {
				if (delFlag.equals("1")) {
					deleteOldKnowledge(stmt, map);
				}
				String kwid = createNewKnowledge(stmt, map, currentDate);
				createKMFolder(stmt, map, arrOtherFolder, kwid);
				createKWRights(stmt, map, arrOtherFolder, arrRight, kwid,
						strID, operator);
				stmt.executeBatch();
			} finally {
				stmt.close();
				stmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}

	private static void parseKWInfoFromDoc(Map map, Document doc)
			throws Exception {
		map.put("fTitle", getSingleNodeValue(doc, "root/fTitle"));
		map.put("fKeyword", getSingleNodeValue(doc, "root/fKeyword"));
		map.put("fDocNumber", getSingleNodeValue(doc, "root/fDocNumber"));
		map.put("fWriter", getSingleNodeValue(doc, "root/fWriter"));
		map.put("fFolderID", getSingleNodeValue(doc, "root/fFolderID"));
		map.put("fFolderName", getSingleNodeValue(doc, "root/fFolderName"));
		map.put("fFolderFullID", getSingleNodeValue(doc, "root/fFolderFullID"));
		map.put("fFolderFullName", getSingleNodeValue(doc,
				"root/fFolderFullName"));
		map.put("fRightsText", getSingleNodeValue(doc, "root/fRightsText"));
		map.put("fIsNeedApprove",
				getSingleNodeValue(doc, "root/fIsNeedApprove"));
		map.put("fImportant", getSingleNodeValue(doc, "root/fImportant"));
		map.put("fImportantName",
				getSingleNodeValue(doc, "root/fImportantName"));
		map.put("fContentType", getSingleNodeValue(doc, "root/fContentType"));
		map.put("fContentTypeName", getSingleNodeValue(doc,
				"root/fContentTypeName"));
		map.put("fTemplateID", getSingleNodeValue(doc, "root/fTemplateID"));
		map.put("fTemplateName", getSingleNodeValue(doc, "root/fTemplateName"));
		map.put("fLinkURL", getSingleNodeValue(doc, "root/fLinkURL"));
		map.put("fContent", getSingleNodeValue(doc, "root/fContent"));
		map.put("fContentURL", getSingleNodeValue(doc, "root/fContentURL"));
		map.put("fIsTop", getSingleNodeValue(doc, "root/fIsTop"));
		map.put("fCreateOgnID", getSingleNodeValue(doc, "root/fCreateOgnID"));
		map.put("fCreateOgnName",
				getSingleNodeValue(doc, "root/fCreateOgnName"));
		map.put("fCreateDeptID", getSingleNodeValue(doc, "root/fCreateDeptID"));
		map.put("fCreateDeptName", getSingleNodeValue(doc,
				"root/fCreateDeptName"));
		map.put("fCreatePsnID", getSingleNodeValue(doc, "root/fCreatePsnID"));
		map.put("fCreatePsnName",
				getSingleNodeValue(doc, "root/fCreatePsnName"));
		map.put("fCreatePsnFID", getSingleNodeValue(doc, "root/fCreatePsnFID"));
		map.put("fCreatePsnFName", getSingleNodeValue(doc,
				"root/fCreatePsnFName"));
		map.put("fCreateTime", getSingleNodeValue(doc, "root/fCreateTime"));
		map.put("fReleaseOgnID", getSingleNodeValue(doc, "root/fReleaseOgnID"));
		map.put("fReleaseOgnName", getSingleNodeValue(doc,
				"root/fReleaseOgnName"));
		map.put("fReleaseDeptID",
				getSingleNodeValue(doc, "root/fReleaseDeptID"));
		map.put("fReleaseDeptName", getSingleNodeValue(doc,
				"root/fReleaseDeptName"));
		map.put("fReleasePsnID", getSingleNodeValue(doc, "root/fReleasePsnID"));
		map.put("fReleasePsnName", getSingleNodeValue(doc,
				"root/fReleasePsnName"));
		map.put("fReleasePsnFID",
				getSingleNodeValue(doc, "root/fReleasePsnFID"));
		map.put("fReleasePsnFName", getSingleNodeValue(doc,
				"root/fReleasePsnFName"));
		map.put("fReleaseTime", getSingleNodeValue(doc, "root/fReleaseTime"));
		map.put("fIsDisplayOnPortal", getSingleNodeValue(doc,
				"root/fIsDisplayOnPortal"));
		map.put("fIsInheritRights", getSingleNodeValue(doc,
				"root/fIsInheritRights"));
		map.put("fOtherFolders", getSingleNodeValue(doc, "root/fOtherFolders"));
		map.put("fDocument", getSingleNodeValue(doc, "root/fDocument"));
		map.put("fAttachment", getSingleNodeValue(doc, "root/fAttachment"));
		map.put("fBizID", getSingleNodeValue(doc, "root/fBizID"));
		map.put("fBizType", getSingleNodeValue(doc, "root/fBizType"));
		map.put("fBizTypeName", getSingleNodeValue(doc, "root/fBizTypeName"));
		map.put("fReleaseStatus", "1");
		map.put("fReleaseStatusName", "已发布");
	}

	private static String[] parseOtherFolderFromDoc(String[] ofd, Document doc) {
		List otherFolders = doc.selectNodes("/root/otherFolders/folder");
		int size = otherFolders.size();
		if (size > 0) {
			ofd = new String[size];
			for (int i = 0; i < size; i++) {
				Node otherFolder = (Node) otherFolders.get(i);
				String folderID = getSingleNodeValue(otherFolder, "./fFolderID");
				String folderName = getSingleNodeValue(otherFolder,
						"./fFolderName");
				String folderFullID = getSingleNodeValue(otherFolder,
						"./fFolderFullID");
				String folderFullName = getSingleNodeValue(otherFolder,
						"./fFolderFullName");

				ofd[i] = folderID + ":" + folderName + ":" + folderFullID + ":"
						+ folderFullName;
			}
		}
		return ofd;
	}

	private static String[] parseRightFromDoc(String[] rt, Document doc) {
		List rights = doc.selectNodes("/root/rights/right");
		int size = rights.size();
		if (size > 0) {
			rt = new String[size];
			for (int i = 0; i < size; i++) {
				Node right = (Node) rights.get(i);
				String fOrgKind = getSingleNodeValue(right, "./fOrgKind");
				String fOrgID = getSingleNodeValue(right, "./fOrgID");
				String fOrgName = getSingleNodeValue(right, "./fOrgName");
				String fOrgFID = getSingleNodeValue(right, "./fOrgFID");
				String fOrgFName = getSingleNodeValue(right, "./fOrgFName");
				String fCanReadKW = getSingleNodeValue(right, "./fCanReadKW");
				String fCanCreateKW = getSingleNodeValue(right,
						"./fCanCreateKW");
				String fCanReleaseKW = getSingleNodeValue(right,
						"./fCanReleaseKW");
				String fCanReadComment = getSingleNodeValue(right,
						"./fCanReadComment");
				String fCanCreateComment = getSingleNodeValue(right,
						"./fCanCreateComment");
				String fCanReadRecord = getSingleNodeValue(right,
						"./fCanReadRecord");
				String fCanScore = getSingleNodeValue(right, "./fCanScore");

				rt[i] = fOrgKind + ":" + fOrgID + ":" + fOrgName + ":"
						+ fOrgFID + ":" + fOrgFName + ":" + fCanReadKW + ":"
						+ fCanCreateKW + ":" + fCanReleaseKW + ":"
						+ fCanReadComment + ":" + fCanCreateComment + ":"
						+ fCanReadRecord + ":" + fCanScore;
			}
		}
		return rt;
	}

	private static void deleteOldKnowledge(Statement stmt, Map m)
			throws Exception {
		String oldKW = String.format("select fid from OA_KM_Knowledge "
				+ " where fBizID = '%s' and fBizType = '%s'", m.get("fBizID"),
				m.get("fBizType"));

		// 删除原有知识权限
		String delRights = String.format("delete from OA_KM_Rights "
				+ " where fKWID in (%s)", oldKW);

		// 删除原有知识栏目关系
		String delKWFolder = String.format("delete from OA_KM_KWFolder "
				+ " where fKWID in (%s)", oldKW);

		// 删除原有知识
		String delKnowledge = String.format("delete from OA_KM_Knowledge "
				+ " where fBizID = '%s' ", m.get("fBizID"));
		stmt.addBatch(delRights);
		stmt.addBatch(delKWFolder);
		stmt.addBatch(delKnowledge);
	}

	private static String createNewKnowledge(Statement stmt, Map m,
			String currentDate) throws Exception {
		String kwid = java.util.UUID.randomUUID().toString();
		String sql = String
				.format(
						"insert into OA_KM_Knowledge("
								+ "fID,version,"
								+ "fTitle,fKeyword,fDocNumber,fWriter,"
								+ "fFolderID,fFolderName,fFolderFullID,fFolderFullName,"
								+ "fRightsText,fIsNeedApprove,"
								+ "fImportant,fImportantName,"
								+ "fContentType,fContentTypeName,"
								+ "fTemplateID,fTemplateName,"
								+ "fLinkURL,fContent,fContentURL,fIsTop,"
								+ "fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,"
								+ "fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,"
								+ "fReleaseOgnID,fReleaseOgnName,fReleaseDeptID,fReleaseDeptName,"
								+ "fReleasePsnID,fReleasePsnName,fReleasePsnFID,fReleasePsnFName,fReleaseTime,"
								+ "fReleaseStatus,fReleaseStatusName,"
								+ "fIsDisplayOnPortal,fIsInheritRights,fOtherFolders,"
								+ "fDocument,fAttachment,fBizID,fBizType,fBizTypeName"
								+ ")values('%s',0,'%s','%s','%s','%s','%s','%s','%s','%s','%s','%s'"
								+ ",'%s','%s','%s','%s','%s','%s','%s','%s','%s','%s'"
								+ ",'%s','%s','%s','%s','%s','%s','%s','%s',%s"
								+ ",'%s','%s','%s','%s','%s','%s','%s','%s',%s"
								+ ",'%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')",
						kwid, m.get("fTitle"), m.get("fKeyword"), m
								.get("fDocNumber"), m.get("fWriter"), m
								.get("fFolderID"), m.get("fFolderName"), m
								.get("fFolderFullID"),
						m.get("fFolderFullName"), m.get("fRightsText"), m
								.get("fIsNeedApprove"), m.get("fImportant"), m
								.get("fImportantName"), m.get("fContentType"),
						m.get("fContentTypeName"), m.get("fTemplateID"), m
								.get("fTemplateName"), m.get("fLinkURL"), m
								.get("fContent"), m.get("fContentURL"), m
								.get("fIsTop"), m.get("fCreateOgnID"), m
								.get("fCreateOgnName"), m.get("fCreateDeptID"),
						m.get("fCreateDeptName"), m.get("fCreatePsnID"), m
								.get("fCreatePsnName"), m.get("fCreatePsnFID"),
						m.get("fCreatePsnFName"), currentDate, m
								.get("fReleaseOgnID"),
						m.get("fReleaseOgnName"), m.get("fReleaseDeptID"), m
								.get("fReleaseDeptName"), m
								.get("fReleasePsnID"),
						m.get("fReleasePsnName"), m.get("fReleasePsnFID"), m
								.get("fReleasePsnFName"), currentDate, m
								.get("fReleaseStatus"), m
								.get("fReleaseStatusName"), m
								.get("fIsDisplayOnPortal"), m
								.get("fIsInheritRights"), m
								.get("fOtherFolders"), m.get("fDocument"), m
								.get("fAttachment"), m.get("fBizID"), m
								.get("fBizType"), m.get("fBizTypeName"));
		stmt.addBatch(sql);
		return kwid;
	}

	private static void createKMFolder(Statement stmt, Map m, String[] ofd,
			String kwid) throws Exception {
		String sql = null;
		String mainFolder = m.get("fFolderID").toString();
		if (!mainFolder.equals("")) {
			String id = java.util.UUID.randomUUID().toString();
			String fKWFullID = m.get("fFolderFullID") + "/" + kwid;

			sql = "insert into OA_KM_KWFolder(" + "fID,version,"
					+ "fFolderKind,fFolderID,fKWID,fKWFullID" + ")values('"
					+ id + "',0," + "'MainFolder','" + mainFolder + "','"
					+ kwid + "','" + fKWFullID + "'" + ")";
			stmt.addBatch(sql);
		}
		if ((ofd != null) && (ofd.length > 0)) {
			for (int i = 0; i < ofd.length; i++) {
				String otherFolder = ofd[i];
				String[] temp = otherFolder.split(":");
				if (temp.length > 0) {
					String folderID = temp[0];
					String folderFullID = temp[2];
					String id = java.util.UUID.randomUUID().toString();
					String fKWFullID = folderFullID + "/" + kwid;

					sql = "insert into OA_KM_KWFolder(" + "fID,version,"
							+ "fFolderKind,fFolderID,fKWID,fKWFullID"
							+ ")values('" + id + "',0," + "'OtherFolder','"
							+ folderID + "','" + kwid + "','" + fKWFullID + "'"
							+ ")";
					stmt.addBatch(sql);
				}
			}
		}
	}

	private static void createKWRights(Statement stmt, Map m, String[] ofd,
			String[] rt, String kwid, String strID, String operator)
			throws Exception {
		String sql = null;
		if ((rt != null) && (rt.length > 0)) {
			for (int i = 0; i < rt.length; i++) {
				String right = rt[i];
				String[] temp = right.split(":");
				if (temp.length > 0) {
					String fOrgKind = temp[0];
					String fOrgID = temp[1];
					String fOrgName = temp[2];
					String fOrgFID = temp[3];
					String fOrgFName = temp[4];
					String fCanReadKW = temp[5];
					String fCanCreateKW = temp[6];
					String fCanReleaseKW = temp[7];
					String fCanReadComment = temp[8];
					String fCanCreateComment = temp[9];
					String fCanReadRecord = temp[10];
					String fCanScore = temp[11];
					String id = java.util.UUID.randomUUID().toString();

					sql = "insert into OA_KM_Rights(" + "fID,version,"
							+ "fKWKind,fKWID,"
							+ "fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName,"
							+ "fCanReadKW,fCanCreateKW,fCanReleaseKW,"
							+ "fCanReadComment,fCanCreateComment,"
							+ "fCanReadRecord,fCanScore" + ")values('"
							+ id
							+ "',0,"
							+ "'Knowledge','"
							+ kwid
							+ "','"
							+ fOrgKind
							+ "','"
							+ fOrgID
							+ "','"
							+ fOrgName
							+ "','"
							+ fOrgFID
							+ "','"
							+ fOrgFName
							+ "','"
							+ fCanReadKW
							+ "','"
							+ fCanCreateKW
							+ "','"
							+ fCanReleaseKW
							+ "','"
							+ fCanReadComment
							+ "','"
							+ fCanCreateComment
							+ "','"
							+ fCanReadRecord
							+ "','" + fCanScore + "'" + ")";
					stmt.addBatch(sql);
				}
			}
		} else { // 没传入权限则自动继承栏目权限
			String folderIDs = "";
			String fFolderID = m.get("fFolderID").toString();
			if (!fFolderID.equals("")) {
				folderIDs = "'" + fFolderID + "'";
			}
			if ((ofd != null) && (ofd.length > 0)) {
				for (int i = 0; i < ofd.length; i++) {
					String otherFolder = ofd[i];
					String[] temp = otherFolder.split(":");
					if (temp.length > 0) {
						String folderID = temp[0];
						if (!folderID.equals("")) {
							if (folderIDs.equals("")) {
								folderIDs = "'" + folderID + "'";
							} else {
								folderIDs += ",'" + folderID + "'";
							}
						}
					}
				}
			}
			if (!folderIDs.equals("")) {
				sql = "insert into OA_KM_Rights(" + "fID,version,"
						+ "fKWKind,fFolderID,fKWID,fKWFullID,"
						+ "fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName,"
						+ "fCanReadKW,fCanCreateKW,fCanReleaseKW,"
						+ "fCanReadComment,fCanCreateComment,"
						+ "fCanReadRecord,fCanScore," + "fIsInherit,"
						+ "fCreatePsnID,fCreatePsnName,fCreateTime"
						+ ")select " + strID + ",0,"
						+ "'Knowledge',fFolderID,'" + kwid + "',f.fFullID "
						+ operator + " '/" + kwid + "',"
						+ "fOrgKind,fOrgID,fOrgName,fOrgFID,fOrgFName,"
						+ "fCanReadKW,fCanCreateKW,fCanReleaseKW,"
						+ "fCanReadComment,fCanCreateComment,"
						+ "fCanReadRecord,fCanScore," + "1,"
						+ "r.fCreatePsnID,r.fCreatePsnName,r.fCreateTime "
						+ "from OA_KM_Rights r join OA_KM_Folder f "
						+ "on r.fFolderID = f.fID "
						+ "where r.fKWKind='Folder' and fFolderID in("
						+ folderIDs + ")";
				stmt.addBatch(sql);
			}
		}
	}

	/**
	 * 获取XML数据节点值
	 * 
	 * @param doc
	 * @param url
	 * @return
	 */
	private static String getSingleNodeValue(Document doc, String url) {
		String strReturn = "";
		try {
			strReturn = doc.selectSingleNode(url).getText();
		} catch (Exception e) {
		}

		return strReturn;
	}

	/**
	 * 获取XML数据节点值
	 * 
	 * @param doc
	 * @param url
	 * @return
	 */
	private static String getSingleNodeValue(Node node, String url) {
		String strReturn = "";
		try {
			strReturn = node.selectSingleNode(url).getText();
		} catch (Exception e) {
		}

		return strReturn;
	}

	public static String isPublishedByBiz(String fBizID, String fBizType)
			throws Exception {
		String returnvalue = "false";
		String sqlCheckPublished = String
				.format(
						"select 1 from OA_KM_Knowledge where fBizID='%s' and fBizType='%s'",
						fBizID, fBizType);
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stmt = conn.createStatement();
			try {
				ResultSet rs = stmt.executeQuery(sqlCheckPublished);
				try {
					if (rs.next()) {
						returnvalue = "true";
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
		return returnvalue;
	}

	public static String getPublishedRangeByBiz(String fBizID, String fBizType)
			throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		String sqlGetRange = String
				.format(
						"select fOrgFID from OA_KM_Rights where fKWID in"
								+ "(select fid from OA_KM_Knowledge where fBizID = '%s' and fBizType = '%s') ",
						fBizID, fBizType);
		String rangeIDs = "";
		try {
			Statement stmt = conn.createStatement();
			try {
				ResultSet rs = stmt.executeQuery(sqlGetRange);
				try {
					while (rs.next()) {
						if (rangeIDs.equals("")) {
							String orgFID = rs.getString("fOrgFID");
							if (orgFID == null || orgFID.equals("")) {
								continue;
							}
							rangeIDs = orgFID;
						} else {
							rangeIDs += "," + rs.getString("fOrgFID");
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
		return rangeIDs;
	}

	/**
	 * 判断当前人是否能够收文
	 * 
	 * @param psnID
	 * @param docID
	 * @return
	 * @throws Exceptions
	 */
	public static boolean canReceiveDoc(String psnID, String docID)
			throws Exception {
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String sql = null;
		try {
			conn = ModelUtils.getConnection("/OA");
			try {
				stmt = conn.createStatement();
				sql = "select 1 from OA_DC_Doc " + "where fCreatePsnID = '"
						+ psnID + "' " + "and fSendDocID = '" + docID + "' "
						+ "and fBizState <> 'bsAborted'";
				try {
					rs = stmt.executeQuery(sql);
					if (rs.next()) {
						return false;
					} else {
						return true;
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
	}

	public static String getPsnMaxSecretLevel() throws Exception {
		String result = "0";
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String sql = null;

		conn = ModelUtils.getConnection("/OA");
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		String operator = "";
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			operator = "||";
		} else {
			operator = "+";
		}
		try {
			stmt = conn.createStatement();
			try {
				Collection<String> memberFullIDs = com.justep.appCommon.SysUtils
						.getAllPersonMemberFIDs();
				String psnID = com.justep.appCommon.SysUtils
						.getCurrentPersonID();
				String urlCondition = "";
				for (String memberFullID : memberFullIDs) {
					String condition = String.format(
							" ('%s/%s.psn' like fOrgFullID %s '%%') ",
							memberFullID, psnID, operator);
					if (urlCondition.equals(""))
						urlCondition = condition;
					else
						urlCondition += " or " + condition;
				}

				sql = String.format("select max(fSecretLevel) secretLevel "
						+ " from OA_KM_PsnSecretLevel s " + " where %s",
						urlCondition);
				rs = stmt.executeQuery(sql);
				try {
					if (rs.next()) {
						result = rs.getString("secretLevel");
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
	 * 复制知识
	 * 
	 * @param kwid
	 * @return
	 * @throws Exception
	 */
	public static String copyKnowledge(String kwid) throws Exception {
		String strID = null;
		String strCurrentDate = null;
		String operator = null;
		String newKWID = java.util.UUID.randomUUID().toString().toUpperCase();
		Connection conn = ModelUtils.getConnection("/OA");
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
		String fCreateOgnID = SysUtils.getCurrentOgnID();
		String fCreateOgnName = SysUtils.getCurrentOgnName();
		String fCreateDeptID = SysUtils.getCurrentDeptID();
		String fCreateDeptName = SysUtils.getCurrentDeptName();
		String fCreatePsnID = SysUtils.getCurrentPersonID();
		String fCreatePsnName = SysUtils.getCurrentPersonNameWithAgent();
		String fCreatePsnFullID = SysUtils.getCurrentPersonMemberFID();
		String fCreatePsnFullName = SysUtils
				.getCurrentPersonMemberFNameWithAgent();

		String insertKW = String
				.format(
						"insert into OA_KM_Knowledge("
								+ " 	fid,version,fTitle,fKeyword,fDocNumber,"
								+ " 	fImportant,fImportantName,fWriter,"
								+ " 	fFolderID,fFolderName,fFolderFullID,fFolderFullName,"
								+ " 	fRightsText,fIsNeedApprove,fContentType,fContentTypeName,"
								+ " 	fTemplateID,fTemplateName,fLinkURL,fContent,fContentURL,"
								+ " 	fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,"
								+ " 	fCreatePsnID,fCreatePsnName,fCreatePsnFullID,fCreatePsnFullName,"
								+ " 	fCreateTime,fReleaseStatus,fReleaseStatusName,"
								+ " 	fIsDisplayOnPortal,fSmallPic,fIsInheritRights,"
								+ " 	fOtherFolders,fAttachment,fDocument,fBizID,"
								+ " 	fReaderCount,fRepliesCount,fBizType,fBizTypeName)"
								+ " select                                 "
								+ " 	'%s',0,fTitle,fKeyword,fDocNumber,"
								+ " 	fImportant,fImportantName,fWriter,"
								+ "     fFolderID,fFolderName,fFolderFullID,fFolderFullName,"
								+ " 	fRightsText,fIsNeedApprove,fContentType,fContentTypeName,"
								+ " 	fTemplateID,fTemplateName,fLinkURL,fContent,fContentURL,"
								+ " 	'%s','%s','%s','%s',"
								+ " 	'%s','%s','%s','%s',"
								+ " 	%s,'0','未发布',"
								+ " 	fIsDisplayOnPortal,fSmallPic,fIsInheritRights,"
								+ " 	fOtherFolders,fAttachment,fDocument,fBizID,"
								+ " 	0,0,fBizType,fBizTypeName "
								+ " from OA_KM_Knowledge k "
								+ " where k.fid = '%s'", newKWID, fCreateOgnID,
						fCreateOgnName, fCreateDeptID, fCreateDeptName,
						fCreatePsnID, fCreatePsnName, fCreatePsnFullID,
						fCreatePsnFullName, strCurrentDate, kwid);

		String KWFullID = String
				.format("f.fFullID %s '/%s'", operator, newKWID);

		String insertKWF = String.format(
				"          insert into OA_KM_KWFolder(                  "
						+ " 	fid,version,fFolderKind,fFolderID,       "
						+ " 	fKWID,fKWFullID)                         "
						+ " select                                       "
						+ " 	%s,0,kf.fFolderKind,f.fid,               "
						+ " 	'%s',%s "
						+ " from OA_KM_KWFolder kf join OA_KM_Folder f "
						+ " on kf.fFolderID = f.fid where kf.fKWID = '%s'",
				strID, newKWID, KWFullID, kwid);

		KWFullID = String
				.format(
						"case "
								+ " when r.fkwfullid is not null then ("
								+ " (select f.ffullid from OA_km_folder f where f.fid = r.ffolderid) %s '/%s')"
								+ " end", operator, newKWID);

		String insertRight = String
				.format(
						"insert into OA_KM_Rights ("
								+ " 	fid,version,fKWkind,fFolderID,fFolderName,"
								+ " 	fKWID,fKWFullID,fOrgKind,fOrgID,fOrgName,"
								+ " 	fOrgFullID,fOrgFullName,fCanCreateKW,fCanReadKW,fCanReleaseKW,"
								+ " 	fCanCreateComment,fCanReadComment,fCanScore,fCanReadRecord,"
								+ " 	fIsInherit,fCreatePsnID,fCreatePsnName,fCreateTime)"
								+ " select                                     "
								+ " 	%s,0,'Knowledge',fFolderID,fFolderName,"
								+ " 	'%s',%s,fOrgKind,fOrgID,fOrgName,"
								+ " 	fOrgFullID,fOrgFullName,fCanCreateKW,fCanReadKW,fCanReleaseKW,"
								+ " 	fCanCreateComment,fCanReadComment,fCanScore,fCanReadRecord,"
								+ " 	fIsInherit,'%s','%s',%s "
								+ " from OA_KM_Rights r"
								+ " where r.fkwid = '%s'", strID, newKWID,
						KWFullID, fCreatePsnID, fCreatePsnName, strCurrentDate,
						kwid);

		try {
			Statement stmt = conn.createStatement();
			try {
				stmt.addBatch(insertKW);
				stmt.addBatch(insertKWF);
				stmt.addBatch(insertRight);
				stmt.executeBatch();
			} finally {
				stmt.close();
				stmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return newKWID;
	}

	/**
	 * 根据条件获取值
	 * 
	 * @param tableName
	 *            表名
	 * @param fields
	 *            要查询的字段,以逗号隔开
	 * @param condition
	 *            where条件
	 * @return
	 * @throws Exception
	 */
	public static String getValueByCondition(String tableName, String fields,
			String condition) throws Exception {
		String result = "";
		String[] arrField = fields.split(",");
		if (condition.equals("empty")) {
			condition = "1 = 1";
		}
		String sql = String.format("select %s from %s where %s", fields,
				tableName, condition);
		Connection conn = ModelUtils.getConnection("/OA");
		try {
			Statement stmt = conn.createStatement();
			try {
				ResultSet rs = stmt.executeQuery(sql);
				try {
					while (rs.next()) {
						String rowResult = null;
						for (int i = 0; i < arrField.length; i++) {
							if (rowResult == null) {
								rowResult = rs.getString(arrField[i]) == null ? ""
										: rs.getString(arrField[i]);
							} else {
								rowResult += ","
										+ (rs.getString(arrField[i]) == null ? ""
												: rs.getString(arrField[i]));
							}
						}
						if (rowResult != null) {
							if (result.equals("")) {
								result = rowResult;
							} else {
								result += "|" + rowResult;
							}
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

	public static String getKWFolderIDs(String kwID) throws Exception {
		String folderIDs = "";
		String sql = "select fFolderID from OA_KM_KWFolder where FKWID='"
				+ kwID + "' and fFolderKind='OtherFolder'";
		Connection conn = ModelUtils.getConnection("/OA");
		try {
			Statement stmt = conn.createStatement();
			try {
				ResultSet rs = stmt.executeQuery(sql);
				try {
					while (rs.next()) {
						if (folderIDs.equals("")) {
							folderIDs = rs.getString("fFolderID");
						} else {
							folderIDs = folderIDs + ","
									+ rs.getString("fFolderID");
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
		return folderIDs;
	}

	public static void docBatchPublish(String id) throws Exception {
		Connection conn = ModelUtils.getConnection("/OA");
		String delFlag = "1";
		try {
			String sql = String.format("select fFolderID,fFolderName,"
					+ " fFolderFullID,fFolderFullName,fDocument "
					+ " from OA_KM_BatchKW where fid = '%s'", id);
			Statement stmt = conn.createStatement();
			try {
				ResultSet rs = stmt.executeQuery(sql);
				try {
					if (rs.next()) {
						String fFolderID = rs.getString("fFolderID");
						String fFolderName = rs.getString("fFolderName");
						String fFolderFullID = rs.getString("fFolderFullID");
						String fFolderFullName = rs
								.getString("fFolderFullName");
						String fDocument = rs.getString("fDocument");

						if (fDocument != null && !fDocument.equals("")) {
							List lst = new ArrayList();
							int bPos = 1;
							int ePos = 0;
							while (ePos >= 0) {
								ePos = fDocument.indexOf("}");
								if (ePos > 0) {
									String doc = "["
											+ fDocument.substring(bPos,
													ePos + 1) + "]";
									fDocument = fDocument.substring(ePos + 2);
									bPos = 0;
									String fTitle = doc.split(",")[1]
											.split(":")[1].split("\\.")[0]
											.substring(1);
									String bizData = "<root><fTitle>"
											+ fTitle
											+ "</fTitle>"
											+ "<fContentType>uploaddoc</fContentType>"
											+ "<fContentTypeName>上传文档</fContentTypeName>"
											+ "<fDocument>" + doc
											+ "</fDocument>" + "<fFolderID>"
											+ fFolderID + "</fFolderID>"
											+ "<fFolderName>" + fFolderName
											+ "</fFolderName>"
											+ "<fFolderFullID>" + fFolderFullID
											+ "</fFolderFullID>"
											+ "<fFolderFullName>"
											+ fFolderFullName
											+ "</fFolderFullName>"
											+ "<fBizID>" + id + "</fBizID>"
											+ "<fCreateOgnID>" + SysUtils.getCurrentOgnID() + "</fCreateOgnID>"
											+ "<fCreateOgnName>" + SysUtils.getCurrentOgnName() + "</fCreateOgnName>"
											+ "<fCreateDeptID>" + (SysUtils.getCurrentDeptID() != null ? SysUtils.getCurrentDeptID() : SysUtils.getCurrentOgnID()) + "</fCreateDeptID>"
											+ "<fCreateDeptName>" + (SysUtils.getCurrentDeptName() != null ? SysUtils.getCurrentDeptName() : SysUtils.getCurrentOgnName()) + "</fCreateDeptName>"
											+ "<fCreatePsnID>" + SysUtils.getCurrentPersonID() + "</fCreatePsnID>"
											+ "<fCreatePsnName>" + SysUtils.getCurrentPersonName() + "</fCreatePsnName>"
											+ "<fCreatePsnFID>" + SysUtils.getCurrentPersonMemberFID() + "</fCreatePsnFID>"
											+ "<fCreatePsnFName>" + SysUtils.getCurrentPersonMemberFName() + "</fCreatePsnFName>"
											+ "<fReleaseOgnID>" + SysUtils.getCurrentOgnID() + "</fReleaseOgnID>"
											+ "<fReleaseOgnName>" + SysUtils.getCurrentOgnName() + "</fReleaseOgnName>"
											+ "<fReleaseDeptID>" + (SysUtils.getCurrentDeptID() != null ? SysUtils.getCurrentDeptID() : SysUtils.getCurrentOgnID()) + "</fReleaseDeptID>"
											+ "<fReleaseDeptName>" + (SysUtils.getCurrentDeptName() != null ? SysUtils.getCurrentDeptName() : SysUtils.getCurrentOgnName()) + "</fReleaseDeptName>"
											+ "<fReleasePsnID>" + SysUtils.getCurrentPersonID() + "</fReleasePsnID>"
											+ "<fReleasePsnName>" + SysUtils.getCurrentPersonName() + "</fReleasePsnName>"
											+ "<fReleasePsnFID>" + SysUtils.getCurrentPersonMemberFID() + "</fReleasePsnFID>"
											+ "<fReleasePsnFName>" + SysUtils.getCurrentPersonMemberFName() + "</fReleasePsnFName>"+ "</root>";
									Document document = DocumentHelper
											.parseText(bizData);
									publishKnowledgeInterface(document,delFlag);
									delFlag= "0";
								}
							}
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
	}

	public static int saveKnowledge(Table table, String concept,
			List<Object> range, String readOnly, String notNull,
			String dataModel, String otherFolderIDs) throws Exception {
		Row knowledgeData = table.iterator().next();
		String kwid = knowledgeData.getString("OA_KM_Knowledge");
		otherFolderIDs = "'" + otherFolderIDs.replaceAll(",", "','") + "'";

		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		Statement stmt = conn.createStatement();
		String strDatabaseType = conn.getMetaData().getDatabaseProductName();
		String newID = "", currentDate = "", operator = "";
		if (strDatabaseType.equalsIgnoreCase("Oracle")) {
			newID = "sys_guid()";
			currentDate = "current_date";
			operator = "||";
		} else {
			newID = "NEWID()";
			currentDate = "getDate()";
			operator = "+";
		}
		try {
			// 同步栏目子表
			String sql = "delete from OA_KM_KWFolder where fKWID = '"
					+ kwid + "'";
			stmt.addBatch(sql);

			sql = "insert into OA_KM_KWFolder(fid, version, fkwid, ffolderkind, ffolderid, fkwfullid, fkwfullname) (select "
					+ newID
					+ ",0,'"
					+ kwid
					+ "','MainFolder',f.fID,f.fFullID "
					+ operator
					+ " '/' "
					+ operator
					+ " '"
					+ kwid
					+ "',null from OA_KM_Folder f where f.fID = '"
					+ knowledgeData.getString("fFolderID") + "')";
			stmt.addBatch(sql);

			sql = "insert into OA_KM_KWFolder(fid, version, fkwid, ffolderkind, ffolderid, fkwfullid, fkwfullname) (select "
					+ newID
					+ ",0,'"
					+ kwid
					+ "','OtherFolder',f.fID,f.fFullID "
					+ operator
					+ " '/' "
					+ operator
					+ " '"
					+ kwid
					+ "',null from OA_KM_Folder f where f.fID in ("
					+ otherFolderIDs + "))";
			stmt.addBatch(sql);

			// 重置权限
			if (knowledgeData.getInt("fIsInheritRights") == 1) {
				sql = "delete from OA_KM_Rights where fkwid = '" + kwid
						+ "' and fIsInherit = 1";
				stmt.addBatch(sql);
				otherFolderIDs = "'" + knowledgeData.getString("fFolderID")
						+ "'," + otherFolderIDs;
				sql = "insert into OA_KM_Rights(fid,version,fkwkind,ffolderid,ffoldername,fkwid,fkwname,fkwfullid,fkwfullname,"
						+ "forgkind,forgid,forgname,forgfid,forgfname,fcancreatekw,fcanreadkw,fcancreatecomment,fcanreadcomment,fcanscore,"
						+ "fcanreadrecord,fisinherit,fcreatepsnid,fcreatepsnname,fcreatetime,fcanreleasekw) (select "
						+ newID
						+ ",0,'Knowledge',r.fFolderID,null,'"
						+ kwid
						+ "',null,r.fKWFullID "
						+ operator
						+ " '/' "
						+ operator
						+ " '"
						+ kwid
						+ "',null,r.forgkind,r.forgid,r.forgname,r.forgfid,r.forgfname,r.fcancreatekw,r.fcanreadkw,r.fcancreatecomment,r.fcanreadcomment,r.fcanscore,"
						+ "r.fcanreadrecord,1,'"
						+ com.justep.appCommon.SysUtils.getCurrentPersonID()
						+ "','"
						+ com.justep.appCommon.SysUtils
								.getCurrentPersonNameWithAgent()
						+ "',"
						+ currentDate
						+ ",r.fcanreleasekw from OA_KM_Rights r where r.fKWKind = 'Folder' and r.fFolderID in ("
						+ otherFolderIDs + "))";
				stmt.addBatch(sql);
			} else {
				/*
				 * if ((Integer)knowledgeData.getOldValue("fIsInheritRights") !=
				 * knowledgeData .getInt("fIsInheritRights")) {
				 */
				sql = "update OA_KM_Rights set fkwid = 'knowledgeTranfer' where fkwid = '"
						+ kwid + "'";
				stmt.addBatch(sql);
				sql = "insert into OA_KM_Rights(fid,version,fkwkind,ffolderid,ffoldername,fkwid,fkwname,fkwfullid,fkwfullname,"
						+ "forgkind,forgid,forgname,forgfid,forgfname,fcancreatekw,fcanreadkw,fcancreatecomment,fcanreadcomment,fcanscore,"
						+ "fcanreadrecord,fIsInherit,fcreatepsnid,fcreatepsnname,fcreatetime,fcanreleasekw) (select "
						+ newID
						+ ",0,'Knowledge',null,null,'"
						+ kwid
						+ "',null,null,null,r.forgkind,r.forgid,r.forgname,r.forgfid,r.forgfname,1,1,1,1,1,"
						+ "1,0,'"
						+ com.justep.appCommon.SysUtils.getCurrentPersonID()
						+ "','"
						+ com.justep.appCommon.SysUtils
								.getCurrentPersonNameWithAgent()
						+ "',"
						+ currentDate
						+ ",1 from (select distinct forgkind,forgid,forgname,forgfid,forgfname from OA_KM_Rights where fkwid = 'knowledgeTranfer') r)";
				stmt.addBatch(sql);
				sql = "delete from OA_KM_Rights where fkwid = 'knowledgeTranfer'";
				stmt.addBatch(sql);
			}
			// }
			stmt.executeBatch();
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
		List<DataPermission> emp = Collections.emptyList();
		return BizData.save(table, concept, emp, emp, emp, readOnly, notNull, dataModel, null);
	}

	public static void deleteKWInfo(String BizID) throws Exception {
		Connection conn = null;
		Statement stmt = null;
		String sql = null;

		try {
			conn = ModelUtils.getConnection("/OA/data");
			ContextHelper.getTransaction().begin(conn);
			stmt = conn.createStatement();
			sql = "delete from OA_KM_Knowledge where fBizID ='" + BizID + "'";
			stmt.executeUpdate(sql);
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
}