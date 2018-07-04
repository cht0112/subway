import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.justep.system.data.KSQL;
import com.justep.system.data.Table;

public class changeAaaplyUtils {
	/**
	 * 客户投诉流程查询显示名称
	 * @return
	 */
	public static String changeApplyFn() {
		String taskTitle = "select apply.CHANGE_TITLETITLE as CHANGE_TITLE," +
									"apply.PROJECT_NAMENAME as PROJECT_NAME," +
									"apply.CHANGE_CONTENTCONTENT as CHANGE_CONTENT," +
									"apply.APPLY_PERSONPERSON as APPLY_PERSON," +
									"apply.APPLY_DATEDATE as APPLY_DATE " +
							"from CHANGE_APPLY_INFO apply " +
							"where apply=:toInteger(getProcessData1())";
		Table tb = KSQL.select(taskTitle, null, "/metrodetection/system_code/data", null);
		String changeTitle = (String) tb.iterator().next().getValue("CHANGE_TITLE");
		String changeContent = (String) tb.iterator().next().getValue("CHANGE_CONTENT");
		String projectName = (String) tb.iterator().next().getValue("PROJECT_NAME");
		String applyPerson = (String) tb.iterator().next().getValue("APPLY_PERSON");
		Date applyDate = (Date) tb.iterator().next().getValue("APPLY_DATE");
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String complaintDate1 = df.format(applyDate);
		String res = "变更提案标题:"+changeTitle+"--项目名称:"+projectName+"--变更内容:"+changeContent+"--变更申请日期:"+complaintDate1;
		return res;
		
	}
}