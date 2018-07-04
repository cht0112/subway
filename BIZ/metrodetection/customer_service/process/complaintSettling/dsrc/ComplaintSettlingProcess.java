import java.util.HashMap;
import java.util.Map;

import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class ComplaintSettlingProcess {

	public static void mainActivityBeforeSaveCUSTOMER_COMPLAINT_FEEDBACKAction() {
//	    System.out.println("=======");
//		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
	}

	public static void mainActivityAfterSaveCUSTOMER_COMPLAINT_FEEDBACKAction() {
	    System.out.println("====+");
	    Table tb = (Table)ModelUtils.getRequestContext().getActionContext().getParameter("table");
	    Row row = (Row)tb.iterator().next();
	    System.out.println("+++");
		Integer complaintID = (Integer)row.getValue("COMPLAINT_ID");
		System.out.println(complaintID+"0000000");
	    Map<String,Object> updatevars = new HashMap<String,Object>();
			updatevars.put("status", 2);
			updatevars.put("comId", complaintID);
	    String ksql = "UPDATE CUSTOMER_COMPLAINT_INFO cci SET cci.STATUS=:status WHERE cci=:comId";
	    KSQL.executeUpdate(ksql,updatevars,"/metrodetection/customer_service/data",null);
	    
	}
}