import java.util.List;

import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.util.XPathUtil;


public class GridSelect extends BaseComponent {
	public static final String VALUE_NAME = "value"; 
	public static final String LABEL_NAME = "label"; 
	public static final String EXT_NAME = "ext"; 
	
	public boolean validate(XuiElement xuiElement) {
		boolean result = true;
		Element e = xuiElement.getOriginElement();
		List<Element> itemsets = XPathUtil.selectElementNodes(e, "./*[local-name()='itemset']");
		int count = null!=itemsets?itemsets.size():0;
		if(count<=0){
			this.addError(xuiElement, "select缺少itemset定义");
			result = false;
		}else if(count>1){
			this.addError(xuiElement, "select只能有一个itemset定义");
			result = false;
		}else{
			Element itemsetE = itemsets.get(0);
			String dataId = itemsetE.hasAttribute("data")?itemsetE.getAttribute("data"):"";
			boolean independence = "true".equals(itemsetE.getAttribute("independence"));
			List<Element> columns = XPathUtil.selectElementNodes(itemsetE, "./*[local-name()='column']");
			if(""!=dataId && !independence){
				for(Element colE : columns){
					String r = colE.getAttribute("ref");
					if(null==r || "".equals(r)){
						this.addError(xuiElement, "columns定义中ref不能为空");
						result = false;
					}
					if(!validateRelation(xuiElement, dataId, r)){
						this.addError(xuiElement, "columns定义中ref("+r+")在data("+dataId+")不存在");
						result = false;
					}
				}
			}
			if(!checkupRef(VALUE_NAME, independence?"":dataId, columns, xuiElement)) result = false; 
			if(!checkupRef(LABEL_NAME, independence?"":dataId, columns, xuiElement)) result = false;
			if(!checkupRef(EXT_NAME, independence?"":dataId, columns, xuiElement)) result = false;

			if("".equals(dataId) && "true".equals(e.getAttribute("multi-select"))){
				if("false".equals(columns.get(0).getAttribute("visible"))){
					this.addError(xuiElement, "静态数据时，columns定义中第一列必须显示");
				}
			}
		}
		return result;
	}
	
	private boolean checkupRef(String type, String dataId, List<Element> columns, XuiElement xuiElement){
		boolean result = true;
		List<Element> refE = null;
		String r = null;
		if(VALUE_NAME.equals(type)){
			refE = XPathUtil.selectElementNodes(xuiElement.getOriginElement(), "./*[local-name()='value']");
		}else if(LABEL_NAME.equals(type)){
			refE = XPathUtil.selectElementNodes(xuiElement.getOriginElement(), "./*[local-name()='label']");
		}else if(EXT_NAME.equals(type)){
			refE = XPathUtil.selectElementNodes(xuiElement.getOriginElement(), "./*[local-name()='ext-value']");
		}
		if(null!=refE && refE.size()>0){
			Element e = refE.get(0);
			if(e.hasAttribute("ref"))
				r = e.getAttribute("ref");
		}
		if(""!=dataId){
			if(null!=r){
				if(!validateRelation(xuiElement, dataId, r)){
					this.addError(xuiElement, "column-ref."+type+"("+r+")在data("+dataId+")不存在");
					result = false;
				}
			}
		}else{
			if(null!=r){
				boolean b = false;
				for(Element colE : columns){
					if("rowid".equalsIgnoreCase(r) || r.equals(colE.getAttribute("ref"))){
						b = true;
						break;
					}
				}
				if(!b){
					this.addError(xuiElement, "column-ref."+type+"("+r+")在columns不存在");
					result = false;
				}
			}
		}
		return result;
	}
}
