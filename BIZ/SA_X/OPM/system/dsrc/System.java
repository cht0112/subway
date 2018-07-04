
import com.justep.model.ModelUtils;
import com.justep.system.context.ActionContext;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;


public class System {

	public static void systemProcessAfterChangePasswordAction() {
		ActionContext conn = ModelUtils.getRequestContext().getActionContext();
		String name = (String)conn.getParameter("name");
		String selectOpPerson = "select SA_OPPerson.* from SA_OPPerson SA_OPPerson where SA_OPPerson.sCode = '"+name+"'";
		Table tabOp = KSQL.select(selectOpPerson, null, "/system/data", null);
		Row rowOp = tabOp.iterator().next();
		String sCode = (String)rowOp.getValue("sCode");
		String password = (String)rowOp.getValue("sPassword");
		String ksqlSelectHr = "select HR_BASE_INFO.* from HR_BASE_INFO HR_BASE_INFO where HR_BASE_INFO.Scode = '"+sCode+"'";
		Table tabHr = KSQL.select(ksqlSelectHr, null, "/system/data", null);
		if(tabHr.size()>0){
			String operatorId = (String)tabHr.iterator().next().getValue("HR_BASE_INFO");
			String ksqlUpdatePassword = "update OPERATOR_PASSWORD o set o.oPERATORPASSWORD = '"+password+"' where o = '"+operatorId+"'"; 
			KSQL.executeUpdate(ksqlUpdatePassword,null,"/metrodetection/system_code/data",null);
		}
	}
}