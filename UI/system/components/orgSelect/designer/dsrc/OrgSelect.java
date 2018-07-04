import java.util.List;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.util.CommonUtil;

public class OrgSelect extends BaseComponent {
	public boolean validate(XuiElement xuiElement) {
		XuiElement treeSelect = xuiElement.getChildByName("treeSelect");
		XuiElement model = xuiElement.getChildByName("model");
		if (null == model)
			model = xuiElement.getXuiDataModel().addElement("model",
					xuiElement, "");
		XuiElement data = model.getChildByName("data");
		if (null != data)
			this.addWarning(xuiElement, "存在无效data(" + data.getId() + ")");
		XuiElement bizData = model.getChildByName("bizData");
		if (null == bizData)
			bizData = xuiElement.getXuiDataModel().addElement("bizData", model,
					"");
		if (null != treeSelect && null != bizData) {
			String s = treeSelect.getProperyValue("column-ref|value");
			if (CommonUtil.isEmpty(s))
				treeSelect.setPropertyValue("column-ref|value", "rowid");
			s = treeSelect.getProperyValue("column-ref|label");
			if (CommonUtil.isEmpty(s))
				treeSelect.setPropertyValue("column-ref|label", "sName");
			s = treeSelect.getProperyValue("itemset|data-ref");
			if (CommonUtil.isEmpty(s))
				treeSelect
						.setPropertyValue("itemset|data-ref", bizData.getId());
		}
		return true;
	}
}
