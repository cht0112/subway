import java.util.HashMap;
import java.util.Map;

import com.justep.system.util.*;
import com.justep.system.process.*;
import com.justep.system.context.*;
import com.justep.system.opm.*;
import com.justep.system.data.*;
import com.justep.system.action.*;
import com.justep.model.*;

public class InfomationComplaintProcess {
	public static void businessActivity2BeforeSaveCUSTOMER_COMPLAINT_FEEDBACKAction() {
		    Table tb = (Table)ModelUtils.getRequestContext().getActionContext().getParameter("table");
		    Row row = (Row)tb.iterator().next();
			Integer complaintID = (Integer)row.getValue("COMPLAINT_ID");
		    Map<String,Object> updatevars = new HashMap<String,Object>();
			updatevars.put("status", 2);
			updatevars.put("comId", complaintID);
		    String ksql = "UPDATE CUSTOMER_COMPLAINT_INFO cci SET cci.STATUS=:status WHERE cci=:comId";
		    KSQL.executeUpdate(ksql,updatevars,"/metrodetection/customer_service/data",null);
	}

	public static void businessActivity3BeforeQueryCUSTOMER_COMPLAINT_FEEDBACKAction() {
		Table tb = (Table)ModelUtils.getRequestContext().getActionContext().getParameter("table");
		    Row row = (Row)tb.iterator().next();
			Integer complaintID = (Integer)row.getValue("COMPLAINT_ID");
		    Map<String,Object> updatevars = new HashMap<String,Object>();
			updatevars.put("status", 3);
			updatevars.put("comId", complaintID);
		    String ksql = "UPDATE CUSTOMER_COMPLAINT_INFO cci SET cci.STATUS=:status WHERE cci=:comId";
		    KSQL.executeUpdate(ksql,updatevars,"/metrodetection/customer_service/data",null);
	}
}