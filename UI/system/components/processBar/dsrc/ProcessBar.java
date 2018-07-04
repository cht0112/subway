import java.util.HashMap;
import java.util.Map;

import org.dom4j.Element;

import com.justep.ui.system.UISystemMessages;
import com.justep.ui.system.component.BaseBar;
import com.justep.xbl.runtime.XBLException;

/**
 * @author hcr
 *
 */
public class ProcessBar extends BaseBar {
	private static final String BACK_PROCESS_ITEM = "back-process-item";
	private static final String ADVANCE_PROCESS_ITEM = "advance-process-item";
	private static final String TRANSFER_PROCESS_ITEM = "transfer-task-item";
	private static final String SUSPEND_PROCESS_ITEM = "suspend-process-item";
	private static final String ABORT_PROCESS_ITEM = "abort-process-item";
	private static final String CUSTOMIZED_PROCESS_ITEM = "customized-process-item";
	private static final String PROCESS_CHART_ITEM = "process-chart-item";
	private static final String EXECUTE_LIST_ITEM = "execute-list-item";
	private static final String WITHDRAW_TASK_ITEM = "withdraw-task-item";
	private static final String MODIFY_EXECUTOR_ITEM = "modify-executor-item";
	
	private String flow;

	@SuppressWarnings("rawtypes")
	protected void preProcess(Element bound, Map context) throws XBLException{
		this.flow = bound.attributeValue("process");
		if ((flow == null) || (flow.equals("")))
			throw XBLException.create(UISystemMessages.class, UISystemMessages.PROCESS_OF_PROCESS_BAR_NULL);
	}
	
	protected HashMap<String, BarItemDef> getBarItemDefs(){
		HashMap<String, BarItemDef> result = new HashMap<String, BarItemDef>();
		result.put(BACK_PROCESS_ITEM, new BarItemDef(BACK_PROCESS_ITEM, "back.gif", "un_back.gif", "call('justep.Context.isReadonlyMode')",
			"var flowEngine = justep.xbl('" + flow + "');  flowEngine.backQuery() "));
		result.put(ADVANCE_PROCESS_ITEM, new BarItemDef(ADVANCE_PROCESS_ITEM, "turn.gif", "un_turn.gif", "call('justep.Context.isReadonlyMode')", 
			"var flowEngine = justep.xbl('" + flow + "');  flowEngine.advanceQuery();"));
		result.put(TRANSFER_PROCESS_ITEM, new BarItemDef(TRANSFER_PROCESS_ITEM, "redirect.gif", "un_redirect.gif", "call('justep.Context.isReadonlyMode')",
			"var flowEngine = justep.xbl('" + flow + "');  flowEngine.transferQuery();"));
		result.put(SUSPEND_PROCESS_ITEM, new BarItemDef(SUSPEND_PROCESS_ITEM, "pause.gif", "un_pause.gif", "call('justep.Context.isReadonlyMode')",
			"var flowEngine = justep.xbl('" + flow + "'); flowEngine.suspendQuery(); "));
		result.put(ABORT_PROCESS_ITEM, new BarItemDef(ABORT_PROCESS_ITEM, "stop.gif", "un_stop.gif", "call('justep.Context.isReadonlyMode')",
			"var flowEngine = justep.xbl('" + flow + "');  flowEngine.abortQuery();"));
		result.put(CUSTOMIZED_PROCESS_ITEM, new BarItemDef(CUSTOMIZED_PROCESS_ITEM, "customized.gif", "un_customized.gif", "call('justep.Context.isReadonlyMode')",
			"var flowEngine = justep.xbl('" + flow + "');  flowEngine.startCustomizedQuery();"));
		result.put(PROCESS_CHART_ITEM, new BarItemDef(PROCESS_CHART_ITEM, "chart.gif", "chart.gif", 
			"var flowEngine = justep.xbl('" + flow + "');  flowEngine.showChart();"));
		result.put(EXECUTE_LIST_ITEM, new BarItemDef(EXECUTE_LIST_ITEM, "executeList.png", "executeList.png", 
				"var flowEngine = justep.xbl('" + flow + "'); flowEngine.openExecuteListDialog();"));
		result.put(WITHDRAW_TASK_ITEM, new BarItemDef(WITHDRAW_TASK_ITEM, "recycle_task.gif", "un_recycle_task.gif", "not(call('justep.Context.isReadonlyMode'))" ,
				"var flowEngine = justep.xbl('" + flow + "'); flowEngine.withdrawTask();"));
		result.put(MODIFY_EXECUTOR_ITEM, new BarItemDef(MODIFY_EXECUTOR_ITEM, "modify_executor.gif", "un_modify_executor.gif", "not(call('justep.Context.isReadonlyMode'))", 
				"var flowEngine = justep.xbl('" + flow + "'); flowEngine.modifyExecutor();"));
		
		return result;
	}
}