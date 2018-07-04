import java.util.Map;

import com.justep.studio.StudioPlugin;
import com.justep.studio.ui.editors.property.dialog.SelectFileTreeDialog;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;

/**
 * 
 * @author xiangyaohua
 *
 */
public class Resource extends BaseComponent {
	public Map addJS(XuiElement currentE) {
		String elementName = "htmlScript";
		XuiDataModel model = currentE.getXuiDataModel();
		XuiElement newE = model.addElement(elementName, currentE, null);
		SelectFileTreeDialog dlg = new SelectFileTreeDialog(StudioPlugin.getShell());
		dlg.setPropertyItem(newE.getPropertyItem("src"));
		dlg.open();
		String src = ((Map<String,String>)dlg.getReturnValue()).get("src");
		if(src!=null){
			newE.setPropertyValue("src", src);
		}
		return null;
	}
	
	public Map addCSS(XuiElement currentE) {
		String elementName = "htmlLink";
		XuiDataModel model = currentE.getXuiDataModel();
		XuiElement newE = model.addElement(elementName, currentE, null);
		SelectFileTreeDialog dlg = new SelectFileTreeDialog(StudioPlugin.getShell());
		dlg.setPropertyItem(newE.getPropertyItem("href"));
		dlg.open();
		String href = ((Map<String,String>)dlg.getReturnValue()).get("href");
		if(href!=null){
			newE.setPropertyValue("href", href);
		}
		return null;
	}
}
