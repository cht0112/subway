import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.widgets.ToolBar;
import org.eclipse.swt.widgets.ToolItem;

import swing2swt.layout.BorderLayout;

import com.justep.studio.data.DataColumn;
import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.editors.xui.IPropertyDialogPage;
import com.justep.studio.ui.editors.xui.IPropertyValueStrategy;
import com.justep.studio.ui.editors.xui.PropertyItem;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.exjface.DataSetTableViewer;
import com.justep.studio.ui.exjface.DatasetTableLabelProvider;

/**
 * select 下拉表格静态数据编辑框
 * @author xiangyaohua
 * @version 2010-5-26
 *
 */
public class DialogContentPage extends Composite implements IPropertyDialogPage {

	private Text text;

	private PropertyItem propertyItem;
	
	
   
	/**
	 * Create the composite
	 * @param parent
	 * @param style
	 */
	public DialogContentPage(Composite parent, int style) {
		super(parent, style);
		setLayout(new BorderLayout(0, 0));

		text = new Text(this, SWT.BORDER);
		text.setLayoutData(BorderLayout.CENTER);

	}

	@Override
	protected void checkSubclass() {
		// Disable the check that prevents subclassing of SWT components
	}

	public Object getReturnValue() {
		Map<String,Object> map = new HashMap<String, Object>();

		return map;
	}
	
	public String isValid() {
		return "";
	}

	public void setPropertyItem(PropertyItem propertyItem) {
		this.propertyItem = propertyItem;

	}

	public void setReturnValueStrategy(IPropertyValueStrategy strategy) {

	}
}
