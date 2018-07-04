


import java.util.ArrayList;
import java.util.List;

import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.ToolBar;
import org.eclipse.swt.widgets.ToolItem;
import org.w3c.dom.Element;

import swing2swt.layout.BorderLayout;

import com.justep.studio.StudioPlugin;
import com.justep.studio.data.DSUtil;
import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.data.DataSetChangedEvent;
import com.justep.studio.data.DataSetChangedListener;
import com.justep.studio.ui.dialog.CommonSelectorDialog;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiDataModelChangedEvent;
import com.justep.studio.ui.editors.xui.XuiDataModelChangedListener;
import com.justep.studio.ui.editors.xui.XuiDataSourceManager;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.exjface.DataSetTableViewer;
import com.justep.studio.ui.template.config.model.TemplateItem;
import com.justep.studio.ui.template.config.view.AbstractTemplateConfigPage;


public class ListViewPage extends AbstractTemplateConfigPage {
	private DataSetTableViewer tableViewer;
	private Table table;
	private DataSet dataSet;

	private XuiElement dataElement;
	private XuiElement gridElement;

	public ListViewPage(Composite parent, TemplateItem templateItem) {
		super(parent, templateItem);
		this.dataElement = xuiDataModel.findElementById(this .getParam("data-id"));
		this.gridElement = xuiDataModel.findElementById(this .getParam("grid-id"));

		setLayout(new BorderLayout(0, 0));
		final Composite composite = new Composite(this, SWT.NONE);
		final GridLayout gridLayout = new GridLayout();
		composite.setLayout(gridLayout);

		final ToolBar toolBar = new ToolBar(composite, SWT.NONE);
		toolBar.setLayoutData(new GridData());

		final ToolItem partDataToolItem = new ToolItem(toolBar, SWT.PUSH);
		partDataToolItem.setText("根据主数据添加");
		partDataToolItem.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				addGridColumn();
			}
		});
		final ToolItem delToolItem = new ToolItem(toolBar, SWT.PUSH);
		delToolItem.setText("删除");
		delToolItem.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				deleteColumn();
			}
		});
		tableViewer = new DataSetTableViewer(composite, SWT.FULL_SELECTION
				| SWT.BORDER | SWT.MULTI | SWT.V_SCROLL | SWT.H_SCROLL);
		table = tableViewer.getTable();
		table.setLinesVisible(true);
		table.setHeaderVisible(true);
		table.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
	
		dataSet = new DataSet();
		dataSet.addColumn("alias", "关系名称").setLength(130);
		dataSet.addColumn("rangeType", "关系域类型").setLength(140);
		dataSet.addColumn("label", "列名(*)").setLength(140).setEditable(true).setEditor("TextCellEditor");
		dataSet.addColumn("editorType", "列编辑器(*)").setLength(100).setEditable(true).setDataSource("templateGridColumnType").setEditor("ComboboxEditor");
		tableViewer.setDataSet(dataSet);
		tableViewer.refresh();

		 addListeners();
	}

	private void addListeners() {
		this.xuiDataModel.addXuiDataChangedListener(new XuiDataModelChangedListener(){

			public void xuiDataModelChanged(XuiDataModelChangedEvent event) {
				XuiElement element = event.getCurrentNode();
				if(tableViewer.getTable().getItems().length >0 && element.getId().equals(dataElement.getId())){
					String pName = event.getPropData().getName();
					if(pName.equals("reader")||pName.equals("relations")){
						gridElement.removeChildren("column");
						dataSet.removeAll();
						tableViewer.refresh();
					}
				}
				
			}});
		
		dataSet.addDataSetChangedListener(new DataSetChangedListener(){

			public void dataSetChanged(DataSetChangedEvent event) {
				Object newValue = event.getNewValue();
				if(event.getEventType() != DataSetChangedEvent.DATACHANGED
				||newValue	==null ){
					return;
				}
				 
				String fieldName = event.getFieldName();
				DataRecord dataRecord = event.getDatarecord();
				String ref = dataRecord.getString("alias");
				XuiElement columnEle = gridElement.getChildByAttr("column",null, "ref", ref);
				if(fieldName.equals("label")){
					columnEle.setPropertyValue("label", newValue.toString());
				}else if(fieldName.equals("editorType")){
					columnEle.setPropertyValue("type", newValue.toString());
				}
				
			}});
		
	}

	protected void addGridColumn() {
		
		String concept = this.dataElement.getProperyValue("concept");
		if(concept==null || concept.equals("")){
			this.showWarring("请先设置data属性！");
			return;
		}

        
		CommonSelectorDialog dlg = new CommonSelectorDialog(StudioPlugin .getShell(),"请选择要创建的列");
		List<String> excludeList = getColumnRelations(this.gridElement);
		DataSet ds = XuiDataSourceManager.getDataRelationDataSet(dataElement);
		ds.setValueByCondition(DSUtil.SELECTED, true, "alias", excludeList);
		dlg.setDataSet(ds);
		dlg.setInitialSize(580, 600);
		dlg.open();

		if (dlg.getReturnCode() == Window.OK) {
			List<DataRecord> list = dlg.getSelections();
			XuiDataModel model = this.gridElement.getXuiDataModel();

			for (int i = 0; i < list.size(); i++) {
				DataRecord record = list.get(i);

				String alias = record.getString("alias");
				String name = record.getString("name");
				String label = record.getString("label");
				String rangeType = record.getString("type");

				dataSet.addRecord(new Object[]{alias,rangeType,label,"ro"});
				
				String elementName = "column";
				XuiElement newE = model.addElement(elementName,this.gridElement, null);
				newE.setDir(false);
				newE.setNew(true);
				newE.setPropertyValue("ref", alias);
				newE.setPropertyValue("label", label);
				newE.setPropertyValue("type", "ro");
				newE.setPropertyValue("width", "100");
			}
			tableViewer.refresh();
		}
	}
	
	public void deleteColumn(){

		List<DataRecord> list = dataSet.getSelectedRecord();
		for (DataRecord dataRecord : list) {
			this.gridElement.removeChildren("column", "ref", new String[]{dataRecord.getString("alias")});
			dataSet.remove(dataRecord);
		}
		tableViewer.refresh();
	}
	
	public List<String> getColumnRelations(XuiElement currentE){
		List<String> list = new ArrayList<String>();
		Element srcE = currentE.getOriginElement();
		List<Element> columns = W3cDocumentHelper.getChildXmlElementList(srcE, "column");
		for(Element colE : columns){
			String colRef = colE.getAttribute("ref");
			list.add(colRef);
		}
		return list;
	}
	
	@Override
	public String isValidation() {
		int columnSize = this.gridElement.getChildListByTagName("column").size();
		if(columnSize==0){
			return "请添加表格列";
		}else{
			return null;
		}
		
	}
}
