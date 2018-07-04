import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import com.justep.model.ModelUtils;
import com.justep.system.process.ProcessUtils;
import com.justep.system.context.ContextHelper;

public class AssetDealApply {
	public static void assetDealApplyProcessAfterFinish() throws Exception {
		Statement stmt = null;
		String sql = null;
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String bizID = ProcessUtils.getProcessData1();
			stmt = conn.createStatement();
			sql = "update OA_AS_Card set fStatus='3',fStatusName='处理' where fID=(select fAssetID from OA_AS_DealApply where fID='"
					+ bizID + "')";
			stmt.executeUpdate(sql);
		} finally {
			conn.close();
			conn = null;
		}
	}
}
