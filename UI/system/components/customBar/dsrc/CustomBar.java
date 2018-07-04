import java.util.Iterator;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;


public class CustomBar implements JavaTemplate{
	
	private static final String SEPARATOR_NAME = "separator";

	public Element execute(Element arg0, Map arg1) throws XBLException {
		
		Element rootE = DocumentHelper.createElement("root");
		Element toolbarE = DocumentHelper.createElement(new QName("toolbar",XMLConstants.XUI_NAMESPACE));
		rootE.add(toolbarE);		
		
	    Iterator iter = arg0.elementIterator();
		while (iter.hasNext()) {
			Element e = (Element)((Element) iter.next()).clone();
			String barItemName = e.attributeValue(new QName("name"));
					
			String itemName = (SEPARATOR_NAME.equals(e.getName())
					|| SEPARATOR_NAME.equals(barItemName))?"toolbar-separator":"toolbar-item";						
		
			e.setQName(new QName(itemName, XMLConstants.XUI_NAMESPACE));
			e.addAttribute(new QName("_processed_"), "true");
			
			toolbarE.add(e);
		}		
		
		return rootE;
	}

}
