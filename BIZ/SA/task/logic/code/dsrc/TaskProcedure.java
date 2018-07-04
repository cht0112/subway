import java.util.List;
import java.util.Map;

import com.justep.message.SystemMessages;
import com.justep.system.context.ContextHelper;
import com.justep.system.data.BizData;
import com.justep.system.data.DataPermission;
import com.justep.system.data.Table;
import com.justep.system.process.TaskKind;
import com.justep.system.process.TaskStatus;
import com.justep.system.util.BizSystemException;
import com.justep.util.Utils;


public class TaskProcedure {
	private static final String WAITING = "waiting";
	private static final String FINISHED = "finished";
	private static final String SUBMITED = "submited";
	
	public static Table taskQuery(String concept, String idColumn, String select, String from, String condition, List<DataPermission> range,
			String filter, Boolean distinct, int offset, int limit, String columns, String orderBy, String aggregate, String aggregateColumns,
			Map<String, Object> variables, String dataModel, String fnModel, String status, String org) {
		String alias = concept;//from.substring(from.indexOf(" "));
		String customFilter = getCustomFilter(alias, status, org, concept);
		if (Utils.isNotEmptyString(filter)){
			filter = "(" + filter + ") and (" + customFilter + ")";
		}else{
			filter = customFilter;
		}
		
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	private static String getCustomFilter(String alias, String status, String org, String concept){
		if (Utils.isEmptyString(status)){
			if (concept.equals("SA_Task")){
				status = WAITING;	
			}else{
				status = WAITING + " " + FINISHED + " " + SUBMITED;
			}
			
		}
		
		if (Utils.isEmptyString(org)){
			org = ContextHelper.getPerson().getID();
		}
		
		String result = "";
		if (status.contains(WAITING) || status.contains(FINISHED)){
			String executorCondition = getExecutorCondition(alias, org, concept.equals("SA_Task"));
			if (Utils.isNotEmptyString(executorCondition)){
				String finishedCondition = "((" + alias + ".sStatusID='" + TaskStatus.FINISHED + "')" +
								" or (" + alias + ".sStatusID='" + TaskStatus.RETURNED + "')" +
								" or (" + alias + ".sStatusID='" + TaskStatus.ABORTED + "')" +
								" or (" + alias + ".sStatusID='" + TaskStatus.TRANSMITED + "')" +
								" or (" + alias + ".sStatusID='" + TaskStatus.CANCELED + "')" +
								")";
				String waitingCondition = "((" + alias + ".sStatusID='" + TaskStatus.READY + "')" +
								" or (" + alias + ".sStatusID='" + TaskStatus.EXECUTING + "')" +
								")";
				
				if (status.contains(WAITING) && status.contains(FINISHED)){
					result = TaskUtils.appendCondition(result, "or", "(" + waitingCondition + " or " + finishedCondition +  ") and " + executorCondition);
				
				}else if (!status.contains(WAITING) && status.contains(FINISHED)){
					result = TaskUtils.appendCondition(result, "or", finishedCondition + " and " + executorCondition);
				
				}else if (status.contains(WAITING) && !status.contains(FINISHED)){
					result = TaskUtils.appendCondition(result, "or", waitingCondition + " and " + executorCondition);
				}
			}
		}
		
		if (status.contains(SUBMITED)){
			String creatorCondition = getCreatorCondition(alias, org, concept.equals("SA_Task"));
			result = TaskUtils.appendCondition(result, "or", creatorCondition);
		}
		
		
		return result;
	}
	
	
	private static String getCreatorCondition(String alias, String org, boolean useAgentProcess){
		String result = "";
		for (String item : org.split(",")){
			if (Utils.isNotEmptyString(item)){
				if (item.contains("/")){
					//是组织
					result = TaskUtils.appendCondition(result, "or", alias + ".sCreatorFID like '" + item + "%'");
				}else{
					//是人
					if (item.equals(ContextHelper.getPerson().getID())){
						result = TaskUtils.appendCondition(result, "or", TaskUtils.getCreatorCondition(alias, ContextHelper.getPerson().getPersonMembers(), useAgentProcess));
						
					}else{
						throw BizSystemException.create(SystemMessages.ORG_ID_IS_CUR_PERSON_ID2, org, ContextHelper.getPerson().getID());
					}
				}
			}
		}
		
		if (Utils.isNotEmptyString(result)){
			result = TaskUtils.appendCondition(result, "and", alias + ".sKindID='" + TaskKind.TASK + "' or " + alias + ".sKindID='" + TaskKind.NOTICE + "'");
		}
		
		return result;
	}
	
	private static String getExecutorCondition(String alias, String org, boolean useAgentProcess){
		String result = "";
		for (String item : org.split(",")){
			if (Utils.isNotEmptyString(item)){
				if (item.contains("/")){
					//是组织
					result = TaskUtils.appendCondition(result, "or", alias + ".sExecutorFID like '" + item + "%'");
				}else{
					//是人
					if (item.equals(ContextHelper.getPerson().getID())){
						result = TaskUtils.appendCondition(result, "or", TaskUtils.getExecutorCondition(alias, ContextHelper.getPerson().getPersonMembers(), useAgentProcess));
						
					}else{
						throw BizSystemException.create(SystemMessages.ORG_ID_IS_CUR_PERSON_ID2, org, ContextHelper.getPerson().getID());
					}
				}
			}
		}
		
		return result;
	}

	
	

}
