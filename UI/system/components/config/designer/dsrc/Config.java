import java.util.Map;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;


public class Config extends BaseComponent {
	
	public Map addConfigItem(XuiElement currentElement) {
		XuiDataModel model = currentElement.getXuiDataModel();
		
		//configItem为已注册组件的名字
		model.addElement("configItem", currentElement, null);
		this.repaint(currentElement);
		return null;	
	}
}
