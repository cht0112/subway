import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

import appCommon.component.Utils;

public class ProcessExecuteBar implements JavaTemplate {

	private final String PROCESS_EXECUTE_SRC =
			"/UI/appCommon/images/processExecute.gif";
	private final String PROCESS_EXECUTE_DIS_SRC =
			"/UI/appCommon/images/un_processExecute.gif";
	private final String PROCESS_EXECUTE_DIALOG =
			"/UI/appCommon/components/processExecuteDialog.xbl.xml#processExecuteDialog";

	private String id;
	private String data;
	private String model;
	private String processEngine;
	private String readonly;
	private String relevant;
	
	private String onBeforeExecute;
	private String onAfterExecute;
	
	private String innerDataID;
	private String executeTriggerID;
	private String executeDialogID;

	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		this.id = Utils.getAttributeOfReuired(bound, "id");
		this.data = Utils.getAttributeOfReuired(bound, "data");
		this.model = Utils.getModelIDByDataID(bound, this.data);
		this.processEngine = Utils.getAttributeOfReuired(bound, "process-engine");
		
		this.readonly = Utils.getAttributeOfDefault(bound, "readonly", "(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail') or (call('appCommon.TaskUtils.isNoticeTask'))");
		this.relevant = bound.attributeValue("relevant");
		
		this.onBeforeExecute = bound.attributeValue("onBeforeExecute");
		this.onAfterExecute = bound.attributeValue("onAfterExecute");
		
		this.innerDataID = this.id + "_innerData";
		this.executeTriggerID = this.id + "_executeTrigger";
		this.executeDialogID = this.id + "_executeDialog";

		Element root = DocumentHelper.createElement(new QName("root"));
		root.add(this.createInnerData());
		root.add(this.createProcessExecuteToolbar());
		root.add(this.createProcessExecuteDialog());
		return root;
	}

	private Element createInnerData() {
		Element model = Utils.createModelPartial(this.model);
		
		model.add(Utils.createSimpleData(this.innerDataID, "execute", true));
		
		model.add(Utils.createBind(String.format("instance('%s')/execute", this.innerDataID), this.readonly, this.relevant));
		
		return model;
	}
	
	private Element createProcessExecuteToolbar() {
		Element action =
				Utils
						.createScriptAction("DOMActivate", null, String.format(
								"justep.xbl('%s').execute();", executeDialogID));
		Element trigger =
				Utils.createImageTrigger(executeTriggerID, "处理",
						PROCESS_EXECUTE_SRC, PROCESS_EXECUTE_DIS_SRC, null);
		trigger.addAttribute("ref", String.format("instance('%s')/execute", this.innerDataID));
		
		Element toolbarItem =
				Utils.createToolbarItem("execute-item", trigger,
						action);
		Element toolbar = Utils.createToolbar("process-execute-bar");
		toolbar.add(toolbarItem);
		return toolbar;
	}

	private Element createProcessExecuteDialog() {
		Element div =
				Utils.createComponentDiv(PROCESS_EXECUTE_DIALOG,
						executeDialogID);
		div.addAttribute("data", this.data);
		div.addAttribute("process-engine", this.processEngine);
		div.addAttribute("onBeforeExecute", this.onBeforeExecute);
		div.addAttribute("onAfterExecute", this.onAfterExecute);
		return div;
	}
}
