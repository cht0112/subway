import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

import appCommon.component.Utils;

public class StandardProcessExecuteList implements JavaTemplate {

	private String id;
	private String data;
	private String configFile;
	private String panelTitle;
	private String listTitle;
	private String fixed;
	private String status;
	private String minHeight;

	private String collapsePanelID;
	private String expandFunName;
	private String collapseFunName;
	private String refreshFunName;
	private String windowFrameID;

	@SuppressWarnings("unchecked")
	public Element execute(Element bound, Map context) throws XBLException {
		this.id = Utils.getAttributeOfReuired(bound, "id");
		this.data = Utils.getAttributeOfReuired(bound, "data");
		this.configFile = Utils.getAttributeOfDefault(bound, "config-file", "");
		this.panelTitle = Utils.getAttributeOfDefault(bound, "panel-title", "");
		this.listTitle = Utils.getAttributeOfDefault(bound, "list-title", "");
		this.fixed = Utils.getAttributeOfDefault(bound, "fixed", "true");
		this.status = Utils.getAttributeOfDefault(bound, "status", "collapsed");
		this.minHeight = Utils.getAttributeOfDefault(bound, "min-height", null);
		if (!Utils.isStringEmpty(this.minHeight)) {
			try {
				Integer.parseInt(this.minHeight);
			} catch(Exception e) {
				throw new XBLException(String.format("minHeight [%s] is not a valid integer.", this.minHeight));
			}
		}

		String globalID = com.justep.xbl.Utils.generateGlobalId();
		this.windowFrameID = this.id + "_windowFrame_" + globalID;
		this.collapsePanelID = this.id + "_collapse_panel_" + globalID;
		this.expandFunName = this.id + "_expand_fun_" + globalID;
		this.collapseFunName = this.id + "_collapse_fun_" + globalID;
		this.refreshFunName = this.id + "_refresh_fun_" + globalID;

		Element inBody = DocumentHelper.createElement(Utils.INBODY_QNAME);
		inBody.add(this.createExpandFun());
		inBody.add(this.createCollapseFun());
		inBody.add(this.createRefreshFun());

		Element root = DocumentHelper.createElement(new QName("root"));
		root.add(inBody);
		root.add(this.createXBLAttribute());
		root.add(this.createCollapsePanel());
		return root;
	}

	private Element createXBLAttribute() {
		Element e = Utils.createXBLAttribute();
		e.addAttribute("window-iframe-id", this.windowFrameID);
		e.addAttribute("collapse-panel-id", this.collapsePanelID);
		return e;
	}

	private Element createWindowFrame() {
		Element windowFrame = Utils.createComponentDiv(Utils.WINDOW_FRAME,this.windowFrameID);
		windowFrame.addAttribute("id", this.windowFrameID);
		windowFrame.addAttribute("url", "/UI/appCommon/components/standardProcessExecuteList/processExecute/processExecuteList.w");
		windowFrame.addAttribute("auto-load", "false");
		windowFrame.addAttribute("style", "height:200px;width:100%");
		return windowFrame;
	}
	private Element createCollapsePanel() {
		Element e = Utils.createComponentDiv(Utils.COLLAPSE_PANEL,
				this.collapsePanelID);
		e.addAttribute("title", this.panelTitle);
		e.addAttribute("fixed", this.fixed);
		e.addAttribute("status", this.status);
		e.addAttribute("style", "width: 100%");
		e.addAttribute("onExpand", this.expandFunName);
		e.addAttribute("onCollapse", this.collapseFunName);
		Element groupElement = e.addElement("group").addAttribute("name",
				"panelarea");
		groupElement.add(this.createWindowFrame());
		return e;
	}

	private Element createExpandFun() {
		String script = String.format("function %s() {justep.xbl('%s')._doCollapsePanelExpand();}",
				this.expandFunName, this.id);
		Element e = Utils.createXHTMLScript(script);
		return e;
	}

	private Element createCollapseFun() {                              
		String script = String.format("function %s() {justep.xbl('%s')._doCollapsePanelCollapse();}",
				this.collapseFunName, this.id);
		Element e = Utils.createXHTMLScript(script);
		return e;
	}

	private Element createRefreshFun() {
		String script = String.format("function %s(event) {justep.xbl('%s')._doListIframeRefresh(event);}",
				this.refreshFunName, this.id);
		Element e = Utils.createXHTMLScript(script);
		return e;
	}

}
