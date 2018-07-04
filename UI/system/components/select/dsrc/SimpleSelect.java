import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;
import org.json.JSONArray;
import org.json.JSONObject;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;


public class SimpleSelect implements JavaTemplate {
	
	public Element execute(Element bound, Map context) throws XBLException {
		List<Element> elements = bound.selectNodes("./*[local-name()='option']");
		if(elements.size() > 0){
			JSONArray json = new JSONArray();
			Iterator<Element> iterator = elements.iterator();
			while(iterator.hasNext()){
				Element option = iterator.next();
				String value = option.attributeValue("value");
				String text = option.getTextTrim();
				JSONArray obj = new JSONArray();
				try{
					obj.put(value);
					obj.put(text);
					json.put(obj);
				}catch(Exception e){}
				
			}
			bound.addAttribute("initValue", json.toString());
		}
		String s = bound.attributeValue("class");
		bound.addAttribute("class", "xui-select " + ((null!=s)?s:""));
		Element root = DocumentHelper.createElement(new QName("root"));
		return root;
	}

}
