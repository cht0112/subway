import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.justep.system.data.KSQL;
import com.justep.system.data.Table;
import com.justep.system.process.ProcessUtils;


public class ComplaintUtils {
	/**
	 * 客户投诉流程查询显示名称
	 * @return
	 */
	public static String complaintFn() {
		String data1 = ProcessUtils.getProcessData1();
		Integer data = Integer.parseInt(data1);
		String taskTitle = "select com.TITLE as COMPLAINT_TITLE,com.CONTACTOR as CONTACTOR," +
				"com.COMPLAINT_DATE as COMPLAINT_DATE," +
				"com.RECEIPT_DATE as COMPLAINT_RECEIPT_DATE " +
				"from CUSTOMER_COMPLAINT_INFO com " +
				"where com="+data;
		Table tb = KSQL.select(taskTitle, null, "/metrodetection/customer_service/data", null);
		String complaintTitle = (String) tb.iterator().next().getValue("COMPLAINT_TITLE");
		String contactor = (String) tb.iterator().next().getValue("CONTACTOR");
		Date complaintDate = (Date) tb.iterator().next().getValue("COMPLAINT_DATE");
		Date complaintReceiptDate = (Date) tb.iterator().next().getValue("COMPLAINT_RECEIPT_DATE");
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String complaintDate1 = df.format(complaintDate);
		String complaintReceiptDate1 = df.format(complaintReceiptDate);
		String res = "投诉主题:"+complaintTitle+"--联系人:"+contactor+"--投诉日期:"+complaintDate1+"--受理日期:"+complaintReceiptDate1;
		return res;
	}

}