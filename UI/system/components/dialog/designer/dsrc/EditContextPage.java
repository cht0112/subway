import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.StyledText;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.ToolBar;
import org.eclipse.swt.widgets.ToolItem;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import swing2swt.layout.BorderLayout;

import com.justep.studio.ui.editors.xui.IPropertyDialogPage;
import com.justep.studio.ui.editors.xui.IPropertyValueStrategy;
import com.justep.studio.ui.editors.xui.PropertyItem;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.swtdesigner.SWTResourceManager;

public class EditContextPage extends Composite implements IPropertyDialogPage {

	private StyledText styledText;
	private PropertyItem propertyItem;
	private int ceng = 0;
	private final Label ddLabel;

	public EditContextPage(Composite parent, int style) {
		super(parent, style);

		setLayout(new BorderLayout());

		styledText = new StyledText(this, SWT.BORDER);
		styledText.setLayoutData(BorderLayout.CENTER);

		Composite composite = new Composite(this, SWT.NONE);
		composite.setLayout(new FillLayout());
		composite.setLayoutData(BorderLayout.NORTH);

		final ToolBar toolBar = new ToolBar(composite, SWT.NONE);

		final ToolItem newItemToolItem = new ToolItem(toolBar, SWT.NONE);
		newItemToolItem.setText("检测");
		newItemToolItem.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				validate();
			}
		});

		ddLabel = new Label(composite, SWT.NONE);
		ddLabel.setFont(SWTResourceManager.getFont("", 10, SWT.NONE));
	}

	private org.dom4j.Document validate() {
		try {

			String prefix = "<root ";
			XuiElement xuiElement = (XuiElement) propertyItem.getOwerElement();
			XuiDataModel xuiElementModel = xuiElement.getXuiDataModel();
			//命名空间
			NamedNodeMap nodeMap = xuiElementModel.getRootElement().getOriginElement().getAttributes();

			for (int i = 0; i < nodeMap.getLength(); i++) {
				Node node = nodeMap.item(i);
				if (node.getNodeType() == Node.ATTRIBUTE_NODE) {
					if (node.getNodeName().indexOf("xmlns:") != -1) {
						prefix += (node.getNodeName() + "=\"" + node.getNodeValue() + "\" ");
					}
				}
			}

			prefix += ">";
			//没有在 上面添加默认的命名空间 的写法
			String content = prefix + styledText.getText().replace("xmlns", "_xmlns") + "</root>";
			org.dom4j.Document doc = DocumentHelper.parseText(content);
			ddLabel.setText("合法");
			return doc;
		} catch (Exception e2) {
			ddLabel.setText("不合法");
			return null;
		}
	}

	public Object getReturnValue() {
		Map map = new HashMap();

		org.dom4j.Document doc = validate();
		if (doc != null) {
			XuiElement xuiElement = (XuiElement) propertyItem.getOwerElement();
			XuiDataModel xuiElementModel = xuiElement.getXuiDataModel();
			xuiElement.removeAllChildren();
			org.dom4j.Element rootElement = doc.getRootElement();

			Iterator<org.dom4j.Element> it = rootElement.elementIterator();
			int flag = 0;
			while (it.hasNext()) {
				org.dom4j.Element innerElement = it.next();
				xuiElementModel.addElement("", xuiElement, null, null, innerElement.asXML(), null);
				flag++;
			}

			if (flag == 0 && !"".equals(styledText.getText())) {
				xuiElement.setText(rootElement.getText());
			}

		}
		return map;
	}

	public String isValid() {
		return null;
	}

	public void setPropertyItem(PropertyItem propertyItem) {
		this.propertyItem = propertyItem;
		Element element = propertyItem.getOwerElement().getOriginElement();
		NodeList nodeList = element.getChildNodes();
		ceng = 0;
		String str = parseElement(nodeList);
		styledText.setText(str);
	}

	private String parseElement(NodeList nodeList) {
		if (nodeList == null || nodeList.getLength() == 0)
			return "";
		StringBuffer buffer = new StringBuffer();
		int length = nodeList.getLength();
		int index = 0;
		while (index < length) {
			ceng++;
			Node node = nodeList.item(index);
			buffer.append(nodeToString_start(node));
			if (node.getChildNodes() != null && node.getChildNodes().getLength() > 0) {
				buffer.append(parseElement(node.getChildNodes()));
			}

			//判断是否最终的  子节点
			if (node.getChildNodes() != null && node.getChildNodes().getLength() == 1 && node.getChildNodes().item(0).getNodeType() == 3) {
				buffer.append(nodeToString_end(node, false));
			} else {
				buffer.append(nodeToString_end(node, true));
			}

			ceng--;
			index++;
		}
		return buffer.toString();
	}

	//节点结束
	private String nodeToString_end(Node node, boolean changeLine) {
		if (node.getNodeType() != 1)
			return "";
		StringBuffer buffer = new StringBuffer();
		buffer.append(changeLine ? "\n" + numSpace() : "").append("</").append(node.getNodeName()).append(">");
		return buffer.toString();
	}

	//子节点缩进
	private String numSpace() {
		StringBuffer buffer = new StringBuffer();
		for (int i = 0; i < ceng - 1; i++) {
			buffer.append("  ");
		}
		return buffer.toString();
	}

	//节点开始 
	private String nodeToString_start(Node node) {
		if (node == null)
			return "";
		short type = node.getNodeType();
		if (type == 1) {
			StringBuffer buffer = new StringBuffer();

			buffer.append("\n").append(numSpace()).append("<").append(node.getNodeName());
			for (int i = 0; i < node.getAttributes().getLength(); i++) {
				buffer.append(" ");
				buffer.append(node.getAttributes().item(i).getNodeName());
				buffer.append("=\"");
				buffer.append(node.getAttributes().item(i).getNodeValue());
				buffer.append("\" ");
			}
			buffer.append(">");
			return buffer.toString();
		} else if (type == 3) {
			return node.getNodeValue().trim();
		} else {
			return "";
		}
	}

	public void setReturnValueStrategy(IPropertyValueStrategy strategy) {

	}

}
