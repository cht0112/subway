import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.justep.designer.components.OperationManager;
import com.justep.studio.data.DataRecord;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;

public class ButtonBar extends BaseComponent {
	
	@SuppressWarnings("rawtypes")
	public Map selectOperation(XuiElement xuiElement){
		List<String> excludeList = new ArrayList<String>();
		List<XuiElement> childList = xuiElement.getChildren();
		for(XuiElement childE:childList){
			XuiElement ownerCom = childE.getComponentDefine();
			if(ownerCom != null){
				childE = ownerCom;
			}
			String opOwner = childE.getProperyValue("operation-owner");
			String op = childE.getProperyValue("operation");
			if(opOwner!=null && !opOwner.equals("") && op!=null && !op.equals("")){
				System.out.println(opOwner+"."+op);
				excludeList.add(opOwner+"."+op);
			}
		}
		
		XuiDataModel model = xuiElement.getXuiDataModel();
		List<XuiElement> triggerList = new ArrayList<XuiElement>();
		List<DataRecord> recordList = OperationManager.selectOperation(xuiElement,excludeList);
		if(recordList == null){
			return null;
		}
		for(DataRecord record:recordList){
			String owner = record.getString("owner");
			String name = record.getString("name");
			XuiElement triggerE = model.addElement("trigger", xuiElement.getOwnerView(), null);
			triggerE.setPropertyValue("label", "");
			triggerE.setPropertyValue("operation-owner", owner);
			triggerE.setPropertyValue("operation", name);
			triggerE.setPropertyValue("appearance", "image-minimal");
			triggerList.add(triggerE);
			XuiElement place = model.addElement("controlPlace", xuiElement, null);
			place.setPropertyValue("control", triggerE.getId());
		}
		if(triggerList.size()>0){
			model.getUndoRedoManager().batchCreateComponent(xuiElement.getDesignId(), triggerList);	
		}
		return null;
	}
}
