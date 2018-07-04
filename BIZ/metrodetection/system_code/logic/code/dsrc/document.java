import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.justep.system.data.KSQL;
import com.justep.system.data.Table;
import com.justep.system.process.ProcessUtils;

public class document {
	public static String documentFn() {
//		String taskTitle = "select P_DOCUMENTS_BORROW_RECORD.aPPLICATIONTIME as aPPLICATIONTIME," +
//				"P_DOCUMENTS_BORROW_RECORD.pFILENAME as pFILENAME,DOCUMENT_CATEGORY_CODE.dOCUMENTCATEGORYCNAME as dOCUMENTCATEGORYCNAME," +
//				"DOCUMENT_TYPE_CODE.dOCUMENTTYPECNAME as dOCUMENTTYPECNAME,P_DOCUMENTS_BORROW_RECORD.bORROWER as bORROWER1 " +
//				"from P_DOCUMENTS_BORROW_RECORD P_DOCUMENTS_BORROW_RECORD " +
//				"optional  join DOCUMENT_CATEGORY_CODE DOCUMENT_CATEGORY_CODE on P_DOCUMENTS_BORROW_RECORD.dOCUMENTCATEGORY = DOCUMENT_CATEGORY_CODE " +
//				"optional  join DOCUMENT_TYPE_CODE DOCUMENT_TYPE_CODE on P_DOCUMENTS_BORROW_RECORD.dOCUMENTTYPE = DOCUMENT_TYPE_CODE.dOCUMENTTYPE " +
//				"where DOCUMENTS_DESTROY_RECODE=:getProcessData1()";
		String data = ProcessUtils.getProcessData1();
		Integer d = Integer.parseInt(data);
		String taskTitle = "select DOCUMENTS_DESTROY_RECORD.*," +
				"case when DOCUMENTS_DESTROY_RECORD.sECRETLEVEL = 1 then '普通' when DOCUMENTS_DESTROY_RECORD.sECRETLEVEL = 2 then '秘密' when DOCUMENTS_DESTROY_RECORD.sECRETLEVEL = 3 then '机密'  else '绝密' end as sECRETLEVEL1" +
				",P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY as dOCUMENTCATEGORY," +
				"P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE as dOCUMENTTYPE," +
				"DOCUMENT_CATEGORY_CODE.dOCUMENTCATEGORYCNAME as dOCUMENTCATEGORYCNAME," +
				"DOCUMENT_TYPE_CODE.dOCUMENTTYPECNAME as dOCUMENTTYPECNAME," +
				"SA_DocNode.sParentID as sParentID," +
				"SA_DocNode.sDocName as sDocName "+
	    "from DOCUMENTS_DESTROY_RECORD DOCUMENTS_DESTROY_RECORD " +
	     "optional  join P_DOCUMENTS_ARCHIVE P_DOCUMENTS_ARCHIVE on DOCUMENTS_DESTROY_RECORD.fILEID = P_DOCUMENTS_ARCHIVE " +
	     "optional  join DOCUMENT_CATEGORY_CODE DOCUMENT_CATEGORY_CODE on P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY = DOCUMENT_CATEGORY_CODE " +
	     "optional  join DOCUMENT_TYPE_CODE DOCUMENT_TYPE_CODE on P_DOCUMENTS_ARCHIVE.dOCUMENTCATEGORY = DOCUMENT_TYPE_CODE.dOCUMENTCATEGORY AND P_DOCUMENTS_ARCHIVE.dOCUMENTTYPE = DOCUMENT_TYPE_CODE.dOCUMENTTYPE "+
	     "optional  join SA_DocNode SA_DocNode on DOCUMENTS_DESTROY_RECORD.fILEID = SA_DocNode " +
	     "where DOCUMENTS_DESTROY_RECORD="+d;
		Table tb = KSQL.select(taskTitle, null, "/metrodetection/system_code/data", null);
		Date aPPLICATIONTIME = (Date) tb.iterator().next().getValue("aPPLICATIONTIME");
		String pFILENAME = (String) tb.iterator().next().getValue("fILENAME");
		String dOCUMENTCATEGORYCNAME = (String) tb.iterator().next().getValue("dOCUMENTCATEGORYCNAME");
		String sECRETLEVEL = (String) tb.iterator().next().getValue("sECRETLEVEL1");
		String dOCUMENTTYPECNAME = (String) tb.iterator().next().getValue("dOCUMENTTYPECNAME");
		String sDocName = (String) tb.iterator().next().getValue("sDocName");
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String applicationtime = df.format(aPPLICATIONTIME);
		String res = "";
		if(sDocName!=null){
			res = "销毁时间："+applicationtime+"-文档销毁-文档科目:"+dOCUMENTCATEGORYCNAME+"-文档类别:"+dOCUMENTTYPECNAME+"-电子文档名称:"+sDocName+"-涉密级别："+sECRETLEVEL;
		}else{
			res = "销毁时间："+applicationtime+"-文档销毁-文档科目:"+dOCUMENTCATEGORYCNAME+"-文档类别:"+dOCUMENTTYPECNAME+"-纸质文档名称:"+pFILENAME+"-涉密级别："+sECRETLEVEL;
		}
		
		return res;
	}
}