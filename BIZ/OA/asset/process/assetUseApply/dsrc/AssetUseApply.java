import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import com.justep.model.ModelUtils;
import com.justep.system.process.ProcessUtils;
import com.justep.system.context.ContextHelper;

public class AssetUseApply {
	public static void assetUseApplyProcessAfterFinish() throws Exception {
		Statement stmt = null, qStmt = null, qStmt1 = null, uStmt = null, uStmt1 = null;
		ResultSet rs = null, rs1 = null;
		String sql = null, strID = "";
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
			String bizID = ProcessUtils.getProcessData1();
			sql = "select fAssetID,fArrangeDate from OA_AS_UseArrange where fMasterID='"
					+ bizID + "'";
			qStmt = conn.createStatement();
			try {
				rs = qStmt.executeQuery(sql);
				try {
					if (rs.next()) {
						String fAssetID = rs.getString("fAssetID");
						if ((fAssetID != null) || (!fAssetID.equals(""))) {
							uStmt1 = conn.createStatement();
							try {
								sql = "update OA_AS_UseRecord set fEndDate=(select fArrangeDate from OA_AS_UseArrange where fMasterID='"
										+ bizID
										+ "') where fAssetID='"
										+ fAssetID + "' and fEndDate is null";
								uStmt1.execute(sql);
							} finally {
								uStmt1.close();
								uStmt1 = null;
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
										+ ",d.fAssetID,d.fKindID,d.fKind,d.fCode,d.fName,d.fSpecType,"
										+ "m.fApplyOgnID,m.fApplyOgnName,"
										+ "m.fApplyDeptID,m.fApplyDeptName,"
										+ "m.fApplyPosID,m.fApplyPosName,"
										+ "m.fApplyPsnID,m.fApplyPsnName,m.fApplyPsnFID,m.fApplyPsnFName,"
										+ "d.fArrangeDate,m.fRemark,0 "
										+ "from OA_AS_UseApplyM m, OA_AS_UseArrange d "
										+ "where m.fid='"
										+ bizID
										+ "' and m.fid = d.fMasterID and d.fAssetID is not null";
								stmt.execute(sql);
							} finally {
								stmt.close();
								stmt = null;
							}
							qStmt1 = conn.createStatement();
							try {
								sql = "select fApplyOgnID,fApplyOgnName,fApplyDeptID,fApplyDeptName,fApplyPosID,fApplyPosName,fApplyPsnID,fApplyPsnName,fApplyPsnFID,fApplyPsnFName from OA_AS_UseApplyM where fID = '"
										+ bizID + "'";
								try {
									rs1 = qStmt1.executeQuery(sql);
									if (rs1.next()) {
										uStmt = conn.createStatement();
										try {
											sql = "update OA_AS_Card set fStatus='1',fStatusName='占用',fDutyOgnID = '"
													+ rs1
															.getString("fApplyOgnID")
													+ "',fDutyOgnName = '"
													+ rs1
															.getString("fApplyOgnName")
													+ "',fDutyDeptID = '"
													+ rs1
															.getString("fApplyDeptID")
													+ "',fDutyDeptName = '"
													+ rs1
															.getString("fApplyDeptName")
													+ "',fDutyPosID = '"
													+ rs1
															.getString("fApplyPosID")
													+ "',fDutyPosName = '"
													+ rs1
															.getString("fApplyPosName")
													+ "',fDutyPsnID= '"
													+ rs1
															.getString("fApplyPsnID")
													+ "',fDutyPsnName= '"
													+ rs1
															.getString("fApplyPsnName")
													+ "',fDutyPsnFID= '"
													+ rs1
															.getString("fApplyPsnFID")
													+ "',fDutyPsnFName = '"
													+ rs1
															.getString("fApplyPsnFName")
													+ "' where fID='"
													+ fAssetID + "'";
											uStmt.executeUpdate(sql);
										} finally {
											uStmt.close();
											uStmt = null;
										}
									}
								} finally {
									rs1.close();
									rs1 = null;
								}
							} finally {
								qStmt1.close();
								qStmt1 = null;
							}
						}
					}
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				qStmt.close();
				qStmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}
}
