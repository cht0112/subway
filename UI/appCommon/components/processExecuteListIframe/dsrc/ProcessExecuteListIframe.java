import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

import appCommon.component.Utils;

public class ProcessExecuteListIframe implements JavaTemplate {

	private String id;
	private String iframeID;
	private String title;
	private String titleBindingID;
	private String windowFrameID;

	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		this.id = Utils.getAttributeOfReuired(bound, "id");
		this.title = Utils.getAttributeOfDefault(bound, "title", "");

		String globalID = com.justep.xbl.Utils.generateGlobalId();
		this.iframeID = this.id + "_iframe_" + globalID;
		this.titleBindingID = this.id + "_title_" + globalID;
		this.windowFrameID = this.id + "_windowFrame_" + globalID;
		Element root = DocumentHelper.createElement(new QName("root"));
		root.add(this.createWindowFrame());
		root.add(this.createXBLAttribute());
		Element binding = this.createTitleBinding();
		if (null != binding)
			root.add(binding);
		return root;
	}

	private Element createWindowFrame() {
		Element windowFrame = Utils.createComponentDiv(Utils.WINDOW_FRAME,this.windowFrameID);
		windowFrame.addAttribute("id", this.windowFrameID);
		windowFrame.addAttribute("url", "/UI/appCommon/components/processExecuteListIframe/processExecute/processExecuteList.w");
		windowFrame.addAttribute("auto-load", "false");
		windowFrame.addAttribute("style", "height:100%;width:100%");
		return windowFrame;
	}

	private Element createXBLAttribute() {
		Element e = Utils.createXBLAttribute();
		e.addAttribute("window-iframe-id", this.windowFrameID);
		e.addAttribute("title-binding-id", this.titleBindingID);
		return e;
	}
	
	private Element createTitleBinding() {
		if (this.title == null || "".equals(this.title))
			return null;
		Element e = DocumentHelper.createElement(new QName("output", Utils.XFORMS_NAMESPACE));
		e.addAttribute("id", this.titleBindingID);
		e.addAttribute("value", this.title);
		e.addAttribute("style", "display:none");
		return e;
	}
}
