import java.util.HashMap;
import java.util.Map;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;


public class XFormSelect extends BaseComponent{
	public Map<String,String> addItem(XuiElement currentElement){
		Map<String, String> cfg = new HashMap<String, String>();		

		XuiDataModel model = currentElement.getXuiDataModel();
		XuiElement item = model.addElement("selectItem", currentElement, null);

			
		this.repaint(currentElement);
				
		return null;
	}
}

