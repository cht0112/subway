import java.io.InputStream;

import com.justep.system.data.BlobUtils;


public class BlobProcedure {
	public static void delete(String dataModel, String concept, String relation, String id) throws Exception {
		BlobUtils.delete(dataModel, concept, relation, id);
	}
	
	public static InputStream query(String dataModel, String concept, String relation, String id) throws Exception {
		return BlobUtils.query(dataModel, concept, relation, id);
	}

	public static void update(String dataModel, String concept, String relation, String id, String size, InputStream blobData) throws Exception {
		BlobUtils.update(dataModel, concept, relation, id, size, blobData);
	}
}
