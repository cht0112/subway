
import java.util.HashMap;
import java.util.Map;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.util.XPathUtil;

public class DecisionData extends BaseComponent {

	@SuppressWarnings("unchecked")
	public Map editRule(XuiElement currentElement) {
		Map conifgMap = new HashMap();
		return conifgMap;
	}

	public boolean validate(XuiElement xuiElement) {
		boolean result = true;
		String dataId = xuiElement.getId();
		if(dataId.equals("")){
			this.addError(xuiElement,"reportData组件id属性不能为空!");
			result = false;
		}
		
		XuiElement mdxQueryE = xuiElement.getChildByTagName("mdx-query");
		if(mdxQueryE == null){
			this.addError(xuiElement,"reportData组件source子节点不存在!");
			result = false;
		}

		return result;
	}
	
	
}
