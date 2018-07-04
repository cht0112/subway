import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.swt.widgets.Item;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.editors.xui.designpanel.WindowDesignPanel;

public class Column extends BaseComponent {

	private static Item moveToLeftItem;
	private static Item moveToRightItem;
	
	public void parseLayout(WindowDesignPanel designer,Element comE,String parentEId) {
		XuiDataModel dataModel = designer.getDataModel();
		String compUrl = W3cDocumentHelper.getAttribute(comE, "component");
	}

	private Element getPrevElement(Node currentNode) {
		if (currentNode != null) {
			Node prevNode = currentNode.getPreviousSibling();
			if (prevNode != null) {
				if (prevNode.getNodeType() == 1) {
					return (Element)prevNode;
				} else {
					return getPrevElement(prevNode);
				}
			}
		}
		return null;
	}
	
	private Element getNextElement(Node currentNode) {
		if (currentNode != null) {
			Node nextNode = currentNode.getNextSibling();
			if (nextNode != null) {
				if (nextNode.getNodeType() == 1) {
					return (Element)nextNode;
				} else {
					return getNextElement(nextNode);
				} 
			}
		}
		return null;
	}
	
	public Map moveToLeft(XuiElement currentElement) {
		Map result = new HashMap();
		
		XuiElement parentEl = currentElement.getParentElement();
		Element prevEl = getPrevElement(currentElement.getOriginElement());
		if (prevEl != null) {
			XuiElement targetEl = (XuiElement)prevEl.getUserData("owerXuiElement");
			List<XuiElement> sourceEls = new ArrayList<XuiElement>();
			sourceEls.add(currentElement);
			this.getDesigner().changeLocation(sourceEls, parentEl.getDesignId(), targetEl.getDesignId(),null);
			
			result.put("sourceId", currentElement.getDesignId());
			result.put("targetId", targetEl.getDesignId());

			updateMoveColumnButtonStatus(currentElement);
		}
		
		return result;
	}
	
	public Map moveToRight(XuiElement currentElement) {
		Map result = new HashMap();
		
		XuiElement parentEl = currentElement.getParentElement();
		Element nextEl = getNextElement(currentElement.getOriginElement());
		if (nextEl != null) {
			XuiElement targetEl = (XuiElement)nextEl.getUserData("owerXuiElement");
			List<XuiElement> sourceEls = new ArrayList<XuiElement>();
			sourceEls.add(targetEl);
			this.getDesigner().changeLocation(sourceEls, parentEl.getDesignId(), currentElement.getDesignId(),null);
			
			result.put("sourceId", targetEl.getDesignId());
			result.put("targetId", currentElement.getDesignId());

			updateMoveColumnButtonStatus(currentElement);
		}

		return result;
	}

	private void updateMoveColumnButtonStatus(XuiElement currentEl) {
		Element prevEl = getPrevElement(currentEl.getOriginElement());
		Element nextEl = getNextElement(currentEl.getOriginElement());
		this.setItemEnabled(moveToLeftItem, prevEl != null);
		this.setItemEnabled(moveToRightItem, nextEl != null);
	}

	public void initItemEnabled(Item item){
		super.initItemEnabled(item);
		if("左移".equals(item.getText())){
			this.setItemEnabled(item, getPrevElement(this.getXuiElement().getOriginElement()) != null);
		}else if("右移".equals(item.getText())){
			this.setItemEnabled(item, getNextElement(this.getXuiElement().getOriginElement()) != null);
		}
		
	}

	
}
