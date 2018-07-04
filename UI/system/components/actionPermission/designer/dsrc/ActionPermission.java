import java.util.Map;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;


public class ActionPermission extends BaseComponent {
	
	public Map<?, ?> addActionPermissionItem(XuiElement currentElement) {
		XuiDataModel model = currentElement.getXuiDataModel();
		model.addElement("actionPermissionItem", currentElement, null);
		this.repaint(currentElement);
		return null;	
	}
}
