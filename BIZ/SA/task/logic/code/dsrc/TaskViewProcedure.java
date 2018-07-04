

import java.math.BigDecimal;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.system.context.ContextHelper;
import com.justep.system.data.BizData;
import com.justep.system.data.DataPermission;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.opm.Person;
import com.justep.system.transform.SimpleTransform;
import com.justep.system.util.CommonUtils;
import com.justep.util.Utils;


public class TaskViewProcedure {
	private static final String DATA_MODEL = "/system/data";
	
	public static Table queryWaitTask2(String concept, String idColumn, String select, String from, String condition, List<DataPermission> range,
			String filter, Boolean distinct, int offset, int limit, String columns, String orderBy, String aggregate, String aggregateColumns,
			Map<String, Object> variables, String dataModel, String fnModel) {
		String customFilter = TaskUtils.getExecutorCondition("SA_Task", ContextHelper.getPerson().getPersonMembers(), true);
		customFilter = " ((SA_Task.sKindID='tkTask' or SA_Task.sKindID='tkExecutor' or SA_Task.sKindID='tkNotice' or SA_Task.sKindID IS NULL) " +
						" and (SA_Task.sStatusID='tesReady' or SA_Task.sStatusID='tesExecuting') " +
						" and (SA_Task.sTypeID IS NULL or SA_Task.sTypeID <> 'WORKREMIND')" +
						" and " + customFilter + ")";
		if (Utils.isEmptyString(filter))
			filter = customFilter;
		else{
			filter = "(" + filter + ") and " + customFilter;
		}
		
		Table table = BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
		Iterator<Row> it = table.iterator();
		while (it.hasNext()){
			Row r = it.next();
			
			{
				//修改sExecutorFName
			    String executorName = getValue(r.getString("sExecutorFName"), "");
			    if (Utils.isEmptyString(executorName)){
			    	executorName = getValue(r.getString("sExecutorNames"), "");
			    }else{
			    	executorName = CommonUtils.getNameOfFile(executorName);
			    }
			    
			    if (executorName == null){
			    	executorName = "";
			    }
				
			    r.setString("sExecutorFName", executorName);
			}
			
			{
				//修改sCreatorFName
			    String creatorName = getValue(r.getString("sCreatorFName"), "");
			    creatorName = CommonUtils.getNameOfFile(creatorName);
			    if (creatorName == null){
			    	creatorName = "";
			    }
			    r.setString("sCreatorFName", creatorName);
			}
		    
		    
			
		}
		return table;
	}

	public static Table querySubmitTask2(String concept, String idColumn, String select, String from, String condition, List<DataPermission> range,
			String filter, Boolean distinct, int offset, int limit, String columns, String orderBy, String aggregate, String aggregateColumns,
			Map<String, Object> variables, String dataModel, String fnModel) {
		String customFilter = TaskUtils.getCreatorCondition("SA_Task", ContextHelper.getPerson().getPersonMembers(), true);
		customFilter = "((SA_Task.sKindID='tkTask' or SA_Task.sKindID='tkNotice') " +
						" and (SA_Task.sTypeID IS NULL or SA_Task.sTypeID <> 'WORKREMIND')" +
						" and (SA_Task.sStatusID='tesReady' or SA_Task.sStatusID='tesExecuting') " + //or t.sStatusID='tesTransmited' hcr: 将转发的认为已经完成
						" and " + customFilter + ")";
		if (Utils.isEmptyString(filter))
			filter = customFilter;
		else{
			filter = "(" + filter + ") and " + customFilter;
		}
		
		Table table = BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
		Iterator<Row> it = table.iterator();
		while (it.hasNext()){
			Row r = it.next();
			
			{
				//修改sExecutorFName
			    String executorName = getValue(r.getString("sExecutorFName"), "");
			    if (Utils.isEmptyString(executorName)){
			    	executorName = getValue(r.getString("sExecutorNames"), "");
			    }else{
			    	executorName = CommonUtils.getNameOfFile(executorName);
			    }
			    
			    if (executorName == null){
			    	executorName = "";
			    }
				
			    r.setString("sExecutorFName", executorName);
			}
			
			{
				//修改sCreatorFName
			    String creatorName = getValue(r.getString("sCreatorFName"), "");
			    creatorName = CommonUtils.getNameOfFile(creatorName);
			    if (creatorName == null){
			    	creatorName = "";
			    }
			    r.setString("sCreatorFName", creatorName);
			}
		    
		    
			
		}
		return table;
	}

	
	public static Document queryTaskSummary(){
		Document result = DocumentHelper.createDocument();
		Element root = result.addElement("tasks");
		{
			//本人	
			long waitTaskCount = queryWaitCount(ContextHelper.getPerson());
			long submitTaskCount = querySubmitCount(ContextHelper.getPerson());
			Element item = root.addElement(new QName("item"));
			item.addElement(new QName("executorName")).addText("本人");
			item.addElement(new QName("executor")).addText(ContextHelper.getPerson().getID());
			item.addElement(new QName("waitTaskCount")).addText(waitTaskCount + "");
			item.addElement(new QName("submitTaskCount")).addText(submitTaskCount + "");
		}
			
		if (ContextHelper.getOperator().getID().equals(ContextHelper.getPerson().getID())){
			//代理
			for (Person person : ContextHelper.getOperator().getAgents()){
				long waitTaskCount = queryWaitCount(person);
				long submitTaskCount = querySubmitCount(person);
				Element item = root.addElement(new QName("item"));
				item.addElement(new QName("executorName")).addText(person.getName());
				item.addElement(new QName("executor")).addText(person.getID());
				item.addElement(new QName("waitTaskCount")).addText(waitTaskCount + "");
				item.addElement(new QName("submitTaskCount")).addText(submitTaskCount + "");
			}
		}
		
		return result;
	}
	
	private static long queryWaitCount(Person person){
		long result = 0;
		String condition = TaskUtils.getExecutorCondition("t", person.getPersonMembers(), true);
		
		String query = "select countAll() as taskCount " +
				" from SA_Task t " +
				" where (t.sKindID='tkTask' or t.sKindID='tkExecutor' or t.sKindID='tkNotice' or t.sKindID IS NULL) " +
				" and (t.sStatusID='tesReady' or t.sStatusID='tesExecuting') " +
				" and (t.sTypeID IS NULL or t.sTypeID <> 'WORKREMIND')" +
				" and " + condition;
		Table table = KSQL.select(query, null, DATA_MODEL, null);
		for(Iterator<Row> it = table.iterator(); it.hasNext();){
			Row r = it.next();
			Object v = r.getValue("taskCount");
			result = parserLong(v);
		}
		return result;
		
	}
	
	private static long parserLong(Object v){
		long result = 0;
		if (v instanceof BigDecimal){
			result = ((BigDecimal) v).longValue();
		}else if (v instanceof Integer){
			result = ((Integer) v).longValue();
		}else if (v instanceof Long){
			result = ((Long) v).longValue();
		}else{
			result = Long.parseLong(v.toString());
		}
		
		return result;
	}
	
	private static long querySubmitCount(Person person){
		long result = 0;
		String condition = TaskUtils.getCreatorCondition("t", person.getPersonMembers(), true);
		String query = "select countAll() as  taskCount" +
				" from SA_Task t " +
				" where " + condition + 
				" and (t.sKindID='tkTask' or t.sKindID='tkNotice') " +
				" and (t.sTypeID IS NULL or t.sTypeID <> 'WORKREMIND')" +
				" and (t.sStatusID='tesReady' or t.sStatusID='tesExecuting') ";
				
		Table table = KSQL.select(query, null, DATA_MODEL, null);
		for(Iterator<Row> it = table.iterator(); it.hasNext();){
			Row r = it.next();
			Object v = r.getValue("taskCount");
			result = parserLong(v);
		}
		
		return result;
	}
	
	public static Document querySubmitTask(){
		String condition = TaskUtils.getCreatorCondition("t", ContextHelper.getPerson().getPersonMembers(), true);
		String query = "select t, t.sName, t.sCURL, t.sProcess, t.sActivity, t.sCreateTime, t.sExecutorFName, t.sExecutorNames, t.sEURL, t.sCreatorFName, t.sShortcut, t.sHints, t.sCreatorFID, t.sExecutorFID, t.sKindID " +
				" from SA_Task t " +
				" where " + condition + 
				" and (t.sKindID='tkTask' or t.sKindID='tkNotice') " +
				" and (t.sTypeID IS NULL or t.sTypeID <> 'WORKREMIND')" +
				" and (t.sStatusID='tesReady' or t.sStatusID='tesExecuting') " + //or t.sStatusID='tesTransmited' hcr: 将转发的认为已经完成
				" order by t.sCreateTime desc " +
				" limit 0,8 ";
		
		return toDOM(KSQL.select(query, null, DATA_MODEL, null));
	}
	
	public static Document queryWaitTask(){
		String condition = TaskUtils.getExecutorCondition("t", ContextHelper.getPerson().getPersonMembers(), true);
		
		String query = "select t, t.sName, t.sCURL, t.sProcess, t.sActivity, t.sCreateTime, t.sExecutorFName, t.sExecutorNames, t.sEURL, t.sCreatorFName, t.sShortcut, t.sHints, t.sCreatorFID, t.sExecutorFID, t.sKindID " +
				" from SA_Task t " +
				" where (t.sKindID='tkTask' or t.sKindID='tkExecutor' or t.sKindID='tkNotice' or t.sKindID IS NULL) " +
				" and (t.sStatusID='tesReady' or t.sStatusID='tesExecuting') " +
				" and (t.sTypeID IS NULL or t.sTypeID <> 'WORKREMIND')" +
				" and " + condition + 
				" order by  t.sCreateTime desc " +
				" limit 0,8 ";
		return toDOM(KSQL.select(query, null, DATA_MODEL, null));
	}
	
	private static Document toDOM(Table table){
		Document result = DocumentHelper.createDocument();
		Element tasks = result.addElement("tasks");
		if (table != null){
			for(Iterator<Row> it = table.iterator(); it.hasNext();){
				Row r = it.next();
				Element task = tasks.addElement("SA_Task");
				task.addAttribute("id", r.getString("t"));
				task.addElement("sName").addText(getValue(r.getString("sName"), ""));
				
				task.addElement("sCURL").addText(getValue(r.getString("sCURL"), ""));
				
				task.addElement("sEURL").addText(getValue(r.getString("sEURL"), ""));
				task.addElement("sProcess").addText(getValue(r.getString("sProcess"), ""));
				task.addElement("sActivity").addText(getValue(r.getString("sActivity"), ""));
				task.addElement("sCreateTime").addText(getValue(SimpleTransform.transToString(r.getDateTime("sCreateTime")), ""));
				task.addElement("sCreatorFID").addText(getValue(r.getString("sCreatorFID"), ""));
				task.addElement("sExecutorFID").addText(getValue(r.getString("sExecutorFID"), ""));
				
				{
				    String executorName = getValue(r.getString("sExecutorFName"), "");
				    if (Utils.isEmptyString(executorName)){
				     executorName = getValue(r.getString("sExecutorNames"), "");
				    }else{
				     executorName = CommonUtils.getNameOfFile(executorName);
				    }
				    
				    if (executorName == null){
				     executorName = "";
				    }
				    
				    task.addElement("sExecutorFName").addText(executorName);
			    }
				
				{
				    String creatorName = getValue(r.getString("sCreatorFName"), "");
				    creatorName = CommonUtils.getNameOfFile(creatorName);
				    if (creatorName == null){
				     creatorName = "";
				    }
				    task.addElement("sCreatorFName").addText(creatorName);
				}
				
				task.addElement("sHints").addText(getValue(r.getString("sHints"), ""));
				task.addElement("sShortcut").addText(getValue(r.getString("sShortcut"), ""));
				task.addElement("sKindID").addText(getValue(r.getString("sKindID"), ""));
			}
			
		}
		
		return result;
	}
	
	private static String getValue(String obj, String defaultValue){
		if (obj == null){
			return defaultValue;
		}else{
			return obj;
		}
	}
	
}
