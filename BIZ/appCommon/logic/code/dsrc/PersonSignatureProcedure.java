import java.util.HashMap;
import java.util.Map;

import com.justep.appCommon.Constants;
import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class PersonSignatureProcedure {
	public static void initPersonSignature(String personID) {
		String ksql = "Select AP_PersonSignature.* From AP_PersonSignature AP_PersonSignature "
				+ "	Where AP_PersonSignature = :personID ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("personID", personID);
		Table data = KSQL.select(ksql, params, Constants.APPCOMMON_DATA, null);
		if (!data.iterator().hasNext()) {
			Row row = data.appendRow();
			row.setValue("AP_PersonSignature", personID);
			row.setValue("version", 0);
			
			data.save(ModelUtils.getModel(Constants.APPCOMMON_DATA));
		}
	}
}