import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import com.justep.appCommon.ConfigUtils;
import com.justep.appCommon.Constants;
import com.justep.appCommon.SysUtils;

import com.justep.system.context.ContextHelper;
import com.justep.system.data.KSQL;
import com.justep.system.data.Table;
import com.justep.system.util.CommonUtils;
import com.justep.util.Utils;

public class ToDoProcedure {
	public static Document getToDoData() {
		Element root = DocumentHelper.createElement("root");
		Document doc = DocumentHelper.createDocument(root);

		root.addElement("tasks-count").setText(String.valueOf(getTasksCount()));
		root.addElement("schedules-count").setText(String.valueOf(getSchedulesCount()));
		root.addElement("waitReadDoc-count").setText(String.valueOf(getWaitReadDocCount()));

		return doc;
	}

	private static int getTasksCount() {
		List<String> fids = ContextHelper.getOperator().getPersonMemberFIDs();
		if (fids.isEmpty()) {
			return 0;
		}

		String condition = "";
		for (String fid : fids) {
			if (Utils.isNotEmptyString(condition)) {
				condition += " or ";
			}

			String parent = CommonUtils.getPathOfFile(fid);
			condition += " '" + fid + "' = t.sExecutorFID or '" + parent + "' = t.sExecutorFID";
		}

		if (Utils.isEmptyString(condition)) {
			return 0;
		} else {
			condition = "(" + condition + ")";
		}

		String query = "select count(t) as tasksCount " + " from SA_Task t "
				+ " where (t.sKindID='tkTask' or t.sKindID='tkExecutor' or t.sKindID='tkNotice' or t.sKindID IS NULL) "
				+ " and (t.sStatusID='tesReady' or t.sStatusID='tesExecuting') " + " and (t.sTypeID IS NULL or t.sTypeID <> 'REMINDTASK')" + " and "
				+ condition;
		Table table = KSQL.select(query, null, Constants.SYSTEM_DATA, null);
		if (table.iterator().hasNext())
			return Integer.parseInt(table.iterator().next().getValue("tasksCount").toString());
		else
			return 0;
	}

	private static int getSchedulesCount() {
		String ksql = "select count(OA_SD_Schedule) as tasksCount from OA_SD_Schedule OA_SD_Schedule " + "	where OA_SD_Schedule in ("
				+ "			select OA_SD_Executor.fSDMasterID " + "			from OA_SD_Executor OA_SD_Executor "
				+ "			where OA_SD_Executor.fExecutorID = :personID) " + "		and OA_SD_Schedule.fBeginDatePart <= :date "
				+ "		and OA_SD_Schedule.fEndDatePart >= :date ";

		Map<String, Object> params = new HashMap<String, Object>();
		params.put("personID", SysUtils.getCurrentPersonID());
		params.put("date", CommonUtils.getCurrentDate());

		Table table = KSQL.select(ksql, params, "/OA/schedule/data", null);
		if (table.iterator().hasNext())
			return Integer.parseInt(table.iterator().next().getValue("tasksCount").toString());
		else
			return 0;
	}

	//此处定义数量
	private static int getWaitReadDocCount() {
		String personID = com.justep.appCommon.SysUtils.getCurrentPersonID();
		String numbersFilter = getFilterOfNumbers("OA_DC_ReaderRange.fRangeURL");
		if (!numbersFilter.equals("")) {
			numbersFilter = " AND (" + numbersFilter + ")";
		}
		String ksql = String
				.format("SELECT count(OA_DC_Doc) as tasksCount FROM OA_DC_Doc OA_DC_Doc join OA_DC_ReaderRange OA_DC_ReaderRange on OA_DC_Doc = OA_DC_ReaderRange.fMasterID "
						+ "	WHERE NOT OA_DC_Doc IN (SELECT OA_DC_DocExecute.fMasterID FROM OA_DC_DocExecute OA_DC_DocExecute WHERE OA_DC_DocExecute.fActivityLabel = '阅文意见' AND OA_DC_DocExecute.fCreatePsnID = '%s' and OA_DC_DocExecute.fMasterID is not null ) %s "
						//+ "	ORDER BY OA_DC_Doc.fCreateTime desc "
						, personID, numbersFilter);
		Table result = KSQL.select(ksql, null, "/OA/doc/data", null);
		//System.out.println("ksql:"+ksql);
		if (result.iterator().hasNext()) {
			return Integer.parseInt(result.iterator().next().getValue("tasksCount").toString());
		} else {
			return 0;
		}
	}

	private static String getFilterOfNumbers(String field) {
		String filterCondition = "";
		String psnID = com.justep.appCommon.SysUtils.getCurrentPersonID();
		Collection<String> memberFIDs = com.justep.appCommon.SysUtils.getAllPersonMemberFIDs();
		for (String memberFullID : memberFIDs) {
			String psnFullID = memberFullID + "/" + psnID + ".psn";
			String[] psnFullIDSplit = psnFullID.split("/");

			String psnFullIDPart = "";
			for (int j = 0; j < psnFullIDSplit.length; j++) {
				String splitID = psnFullIDSplit[j];
				if (psnFullIDPart == "") {
					psnFullIDPart = splitID;
				} else {
					psnFullIDPart = psnFullIDPart + "/" + splitID;
				}

				String condition = "(" + field + " = '" + psnFullIDPart + "')";
				if (filterCondition.indexOf(condition) < 0) {
					if (filterCondition == "") {
						filterCondition = condition;
					} else {
						filterCondition = filterCondition + " or " + condition;
					}
				}
			}
		}
		return filterCondition;
	}
}