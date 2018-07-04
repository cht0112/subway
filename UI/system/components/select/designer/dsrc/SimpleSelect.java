import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.jface.window.Window;

import com.justep.studio.StudioPlugin;
import com.justep.studio.data.DataRecord;
import com.justep.studio.ui.editors.property.dialog.EditSelectOptionDialog;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;

public class SimpleSelect extends BaseComponent {

	public Map editOptionData(XuiElement currentElement) {
		EditSelectOptionDialog editSelectOption = new EditSelectOptionDialog(StudioPlugin.getShell(), "编辑选项", currentElement);
		editSelectOption.open();

		if (editSelectOption.getReturnCode() == Window.OK) {
			@SuppressWarnings("unchecked")
			List<DataRecord> resultList = editSelectOption.getRecord();
			XuiDataModel model = currentElement.getXuiDataModel();
			StringBuffer buffer = null;

			currentElement.removeAllChildren();

			for (int i = 0; i < resultList.size(); i++) {
				buffer = new StringBuffer();
				DataRecord record = resultList.get(i);
				buffer.append("<xui:option ").append("value=\"").append(record.getValue("value")).append("\" >").append(record.getValue("text"))
						.append("</xui:option>");
				model.addElement("", currentElement, null, null, buffer.toString(), null);
			}
		}

		return null;
	}
}
