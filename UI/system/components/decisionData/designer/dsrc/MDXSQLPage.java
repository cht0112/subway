import java.util.HashMap;
import java.util.Map;

import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.StyledText;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.justep.studio.ui.editors.xui.IPropertyDialogPage;
import com.justep.studio.ui.editors.xui.IPropertyValueStrategy;
import com.justep.studio.ui.editors.xui.PropertyItem;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.swtdesigner.SWTResourceManager;

public class MDXSQLPage extends Composite implements IPropertyDialogPage {

	private StyledText text;
	private PropertyItem propertyItem;

	public MDXSQLPage(Composite parent, int style) {
		super(parent, style);
		setLayout(new FillLayout());
		

		final Group group_1 = new Group(this, SWT.NONE);
		group_1.setText("MDX语句");
		final FillLayout fillLayout_1 = new FillLayout();
		fillLayout_1.marginHeight = 4;
		group_1.setLayout(fillLayout_1);

		text = new StyledText(group_1, SWT.BORDER|SWT.MULTI | SWT.V_SCROLL | SWT.H_SCROLL);
		text.setFont(SWTResourceManager.getFont("", 14, SWT.NONE));
		

	}

	public Object getReturnValue() {
		NodeList nodeList = this.propertyItem.getOwerElement().getOriginElement().getElementsByTagName("mdx-query");
		W3cDocumentHelper.setElementText(((Element)nodeList.item(0)),text.getText());
		Map<String, String> map = new HashMap<String, String>();
		return map;
	}

	public String isValid() {
		return null;
	}

	public void setPropertyItem(PropertyItem propertyItem) {
		this.propertyItem = propertyItem;
		NodeList nodeList = this.propertyItem.getOwerElement().getOriginElement().getElementsByTagName("mdx-query");		
		String mdxSqlText = W3cDocumentHelper.getText((Element)nodeList.item(0));		
		text.setText(mdxSqlText);		
	}

	public void setReturnValueStrategy(IPropertyValueStrategy arg0) {
		
	}

}
