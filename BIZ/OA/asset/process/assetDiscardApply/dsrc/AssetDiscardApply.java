import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import com.justep.model.ModelUtils;
import com.justep.system.process.ProcessUtils;
import com.justep.system.context.ContextHelper;

public class AssetDiscardApply {
	public static void assetDiscardApplyProcessAfterFinish() throws Exception {
		Statement stmt = null;
		String sql = null;
		Connection conn = ModelUtils.getConnection("/OA");
		ContextHelper.getTransaction().begin(conn);
		try {
			String bizID = ProcessUtils.getProcessData1();
			stmt = conn.createStatement();
			sql = "update OA_AS_Card set fStatus='2',fStatusName='报废' where fID=(select fAssetID from OA_AS_DiscardApply where fID='"
					+ bizID + "')";
			stmt.executeUpdate(sql);
		} finally {
			conn.close();
			conn = null;
		}
	}
}
