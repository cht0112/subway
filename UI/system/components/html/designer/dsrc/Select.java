import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.jface.window.Window;

import com.justep.studio.StudioPlugin;
import com.justep.studio.data.DataRecord;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.editors.property.dialog.EditSelectOptionDialog;

public class Select extends BaseComponent {

	public Map editOptionData(XuiElement currentElement) {
		Map conifgMap = new HashMap();
		EditSelectOptionDialog editSelectOption = new EditSelectOptionDialog(StudioPlugin.getShell(), "编辑选项", currentElement);
		editSelectOption.open();

		StringBuffer resultBuffer = new StringBuffer();

		if (editSelectOption.getReturnCode() == Window.OK) {
			List<DataRecord> resultList = editSelectOption.getRecord();
			XuiDataModel model = currentElement.getXuiDataModel();
			StringBuffer buffer = null;
			int columnCount = 2;
			currentElement.removeAllChildren();

			resultBuffer.append("[");

			for (int i = 0; i < resultList.size(); i++) {
				buffer = new StringBuffer();
				DataRecord record = resultList.get(i);
				buffer.append("<xhtml:option ").append("value=\"").append(record.getValue("value")).append("\" >").append(record.getValue("text"))
						.append("</xhtml:option>");
				model.addElement("", currentElement, null, null, buffer.toString(), null);

				resultBuffer.append("{label:'").append(record.getValue("text")).append("',value:'").append(record.getValue("value")).append("'}");
				if (i < resultList.size() - 1) {
					resultBuffer.append(",");
				}
			}

			resultBuffer.append("]");
		}

		conifgMap.put("array", resultBuffer.toString());
		return conifgMap;
	}
}
