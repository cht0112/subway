package com.justep.studio.ui.editors.propertypage;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import com.justep.studio.data.DataSet;
import com.justep.studio.data.DataSetChangedEvent;
import com.justep.studio.data.DataSetChangedListener;
import com.justep.studio.ui.commonpanel.CommonSelectorComposite;
import com.justep.studio.ui.editors.property.strategy.RefPropertyValueStrategy;
import com.justep.studio.ui.editors.util.XuiDynJavaManager;
import com.justep.studio.ui.editors.xui.IPropertyValueStrategy;
import com.justep.studio.ui.editors.xui.PropertyItem;
/**
 *data 关系引用选择.
 * @author zmh
 *
 */
public class RefPropertyPage extends CommonPropertyEditorPage {
	private IPropertyValueStrategy  strategy = new RefPropertyValueStrategy();
	private PropertyItem propertyItem;
	private Text displayText;
	private DataSet dataset;

	public RefPropertyPage(Composite parent, int style) {
		super(parent, style);
	}
	
	private void createContents(){	
		CommonSelectorComposite commonComposite = new CommonSelectorComposite(this,SWT.NONE,false,true);
		commonComposite.getTreeViewer().getTree().setLinesVisible(false);
		commonComposite.getTreeViewer().getTree().setHeaderVisible(false);
		commonComposite.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		commonComposite.setDataSet(this.dataset);
		commonComposite.getTreeViewer().expandAll();
 
		Composite composite = new Composite(this, SWT.NONE);
		GridData gd_composite = new GridData(SWT.FILL, SWT.FILL, true, false);

		composite.setLayoutData(gd_composite);
		GridLayout gridLayout = new GridLayout();
		gridLayout.numColumns = 2;
		gridLayout.marginWidth = 0;
		gridLayout.marginHeight = 0;
		composite.setLayout(gridLayout);

		Label label = new Label(composite, SWT.NONE);
		label.setText("属性值");
		displayText = new Text(composite, SWT.BORDER);
		displayText.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));

		displayText.setEditable(false);
		displayText.setBackground(displayText.getParent().getBackground());

        displayText.setText(this.propertyItem.getValue());
	}

	public void setPropertyItem(PropertyItem propertyItem) {
		this.propertyItem = propertyItem;
 
		String className = propertyItem.getDialogDynData("class-name");
		String methodName = propertyItem.getDialogDynData("method");
		this.dataset = (DataSet)XuiDynJavaManager.executeMethod(propertyItem.getOwnerElementBasePath(), className, methodName,new Object[]{propertyItem});

		if(this.dataset != null){
			this.dataset.addDataSetChangedListener(new DataSetChangedListener(){
				public void dataSetChanged(DataSetChangedEvent event) {
					if(event.getEventType() == DataSetChangedEvent.DATACHANGED || event.getEventType() == DataSetChangedEvent.SELECTIONCHANGED){
						String str = strategy.transformPropertyValue(dataset);
						if(!"UNCHANGED".equals(str)){
							displayText.setText(str);
						}
					}
			}});
		}
		
		this.createContents();
	}

	public Map<String,String> getReturnValue() {
		Map<String,String> map = new HashMap<String,String>();		 
		map.put(this.propertyItem.getName(), displayText.getText());
		return map;
	}
}
