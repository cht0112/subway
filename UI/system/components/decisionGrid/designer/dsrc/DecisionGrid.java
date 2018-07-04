import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.util.XPathUtil;


public class DecisionGrid extends BaseComponent {

	public Map editRule(XuiElement currentElement) {
		Map conifgMap = new HashMap();
		return conifgMap;
	}

	public boolean validate(XuiElement xuiElement) {
		boolean result = true;
		
		org.w3c.dom.Element rootE = xuiElement.getXuiDataModel().getRootElement().getOriginElement();
		String dId = xuiElement.getOriginElement().getAttribute("data");
		if(dId != null && !dId.equals("")){
			String sXpath = "//*[local-name()='data' and @id='"+dId+"']";
			List<?> list = XPathUtil.selectNodes(rootE, sXpath);
			int count = list.size();
			if(count == 0){
				this.addError(xuiElement, "DecisionGrid组件引用的data("+dId+")不存在!");
				result = false;
			}		
		}
		
		
		return result;
	}
	
}
