import java.util.HashMap;
import java.util.Map;

import org.eclipse.swt.widgets.Item;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiElement;

public class BorderLayout extends BaseComponent {

	public Map<String, String> addTop(XuiElement currentElement) {
		return addArea(currentElement, "top", "<top size=\"30px\"/>");
	}

	public Map<String, String> addLeft(XuiElement currentElement) {
		return addArea(currentElement, "left", "<left size=\"50px\"/>");
	}

	public Map<String, String> addRight(XuiElement currentElement) {
		return addArea(currentElement, "right", "<right size=\"50px\"/>");
	}

	public Map<String, String> addBottom(XuiElement currentElement) {
		return addArea(currentElement, "bottom", "<bottom size=\"50px\"/>");
	}

	private Map<String, String> addArea(XuiElement currentElement, String tagName, String template) {
		XuiElement parent = currentElement;
		XuiElement e = currentElement.getXuiDataModel().addElement(tagName, parent, null, null, template, null);
		StringBuffer sbf = new StringBuffer();
		this.getDesigner().parseLayout(e.getParentElement().getOriginElement(), e.getOriginElement(), sbf);
		Map<String, String> map = new HashMap<String, String>();
		map.put("xml", sbf.toString());
		return map;
	}

	@Override
	public void initItemEnabled(Item item) {
		Object obj = item.getData("method");

		if (obj != null) {
			XuiElement e = this.getXuiElement();
			XuiElement parent = e;
			if ("addTop".equals(obj)) {
				this.setItemEnabled(item, parent.getChildByTagName("top") == null);
			} else if ("addLeft".equals(obj)) {
				this.setItemEnabled(item, parent.getChildByTagName("left") == null);
			} else if ("addRight".equals(obj)) {
				this.setItemEnabled(item, parent.getChildByTagName("right") == null);
			} else if ("addBottom".equals(obj)) {
				this.setItemEnabled(item, parent.getChildByTagName("bottom") == null);
			} else {
				super.initItemEnabled(item);
			}
		} else {
			super.initItemEnabled(item);
		}
	}

}