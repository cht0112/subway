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
public class SelectItemsetDataPage extends Composite implements IPropertyDialogPage {

	private Table table;
	private DataSet dataset;
	private final DataSetTableViewer tableViewer ;
	private Map editorMap = new HashMap();
	private PropertyItem propertyItem;
	
	public void setProperty(String propName,String propValue){
		if(propName.equals("columnids")){

		   if(propValue != null && !propValue.equals("")){
			   String[] headers = propValue.split(",");
			   for(String header:headers){
				   dataset.addColumn(header).setLength(150).setDataType("String").setHeader(header).setEditable(true).setEditor("TextCellEditor");
			   }
		   }
		   
		 tableViewer.reloadDataSet(dataset);
		}
	}
	

	
   private void initEditors(){
	   
   }
   
   private void disposeEditors(){
	   
   }
   
	/**
	 * Create the composite
	 * @param parent
	 * @param style
	 */
	public SelectItemsetDataPage(Composite parent, int style) {
		super(parent, style);
		setLayout(new BorderLayout(0, 0));

		tableViewer = new DataSetTableViewer(this, SWT.BORDER|SWT.FULL_SELECTION);
		dataset=new DataSet();
		tableViewer.setDataSet(dataset);
		table = tableViewer.getTable();
		table.setLinesVisible(true);
		table.setHeaderVisible(true);
	

		tableViewer.setLabelProvider(new DatasetTableLabelProvider(tableViewer){
			public Color getBackground(Object element, int columnIndex) {
				return new Color(null,211,226,243);
			}
		});
		
		final ToolBar toolBar = new ToolBar(this, SWT.NONE);
		toolBar.setLayoutData(BorderLayout.NORTH);

		final ToolItem newItemToolItem_2 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_2.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				
				setProperty("columnids",table.getColumnCount()+"");
			}
		});
		newItemToolItem_2.setText("增加列");

		final ToolItem newItemToolItem_3 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_3.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				int colSize = tableViewer.getTable().getColumnCount();
				if(colSize<=1){
					return;
				}
				int index = tableViewer.getTable().getSelectionIndex();
				if(index!=-1){
					dataset.deleteColumn(index);
					for (int i = 0; i < colSize-1; i++) {
						DataColumn col = dataset.getDataColumn(i);
						col.setFieldName(i+"");
						col.setHeader(i+"");
					}
					tableViewer.reloadDataSet(dataset);
				}
			}
		});
		newItemToolItem_3.setText("删除列");
		
		final ToolItem newItemToolItem = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				if(tableViewer.getTable().getColumnCount()<=0){
					return;
				}
				Object[] values = new Object[] {""};
				dataset.addRecord(values);
			}
		});
		newItemToolItem.setText("添加行");

		final ToolItem newItemToolItem_1 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_1.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				List<DataRecord> list = dataset.getSelectedRecord();
				if(list.size()>0){
					dataset.deleteRecord(dataset.getSelectedRecord().get(0));
				}
			}
		});
		newItemToolItem_1.setText("删除行");

	
		
	}

	@Override
	protected void checkSubclass() {
		// Disable the check that prevents subclassing of SWT components
	}

	public Object getReturnValue() {
		Map<String,Object> map = new HashMap<String, Object>();
//		map.put(propertyItem.getName(), "[静态数据]"); 
		this.setItemsetDataXML();
		
		return map;
	}
	
	private  void setTableData(){
		dataset = new DataSet();
		XuiElement itemsetData = this.getItemsetDataNode();
		if(itemsetData==null){
			return;
		}
		XuiElement rows = itemsetData.getChildByTagName("rows");
		if(rows==null){
			return;
		}
		List<XuiElement> list = rows.getChildListByTagName("row");
	
		if(list.size()<=0){
			return;
		}
		int colSize = list.get(0).getChildListByTagName("cell").size();
		for (int i = 0; i < colSize; i++) {
			dataset.addColumn(i+"").setLength(100).setDataType("String").setHeader(i+"").setEditable(true).setEditor("TextCellEditor");
		}

		String[] vals = new String[colSize];
		List data = new ArrayList();
		for (int i = 0; i < list.size(); i++) {
			XuiElement row = list.get(i);
			List<XuiElement> cells = row.getChildListByTagName("cell");
			for (int j = 0; j < cells.size(); j++) {
				XuiElement cell = cells.get(j);
				vals[j] = W3cDocumentHelper.getText(cell.getOriginElement());
			}
			dataset.addRecord(vals);
		}
		
		this.tableViewer.setDataSet(this.dataset);
	}
	
	private String setItemsetDataXML(){
		XuiElement itemset = this.getItemsetNode();
		itemset.removeChildren("itemset-data");
		XuiDataModel model = propertyItem.getOwerElement().getXuiDataModel();
		
		StringBuffer dataXML = new StringBuffer();
		dataXML.append("<itemset-data _xmlns=''><rows _xmlns=''>");
		List<DataRecord> list = this.dataset.getData();
		for (int i = 0; i < list.size(); i++) {
			dataXML.append("<row>");
			DataRecord r = list.get(i);
			for (int j = 0; j < tableViewer.getTable().getColumnCount(); j++) {
				String cellValue = r.getString(j+"");
				dataXML.append("<cell>"+cellValue+"</cell>");
			}
			dataXML.append("</row>");
		}
		dataXML.append("</rows></itemset-data>");
		System.out.println(dataXML.toString());
		model.addElement("rows", itemset,null,null, dataXML.toString(),null);
		model.setPropertyValue(itemset.getChildByTagName("itemset-data"), "xmlns", "");
		return null;
	}

	public String isValid() {
		return this.dataset.validate();
	}

	public void setPropertyItem(PropertyItem propertyItem) {
		this.propertyItem = propertyItem;
		this.setTableData();
		
	}

	public void setReturnValueStrategy(IPropertyValueStrategy strategy) {

	}
	
	private XuiElement getItemsetNode(){
		XuiElement select = (XuiElement)propertyItem.getOwerElement();
		XuiElement itemset = select.getChildByTagName("itemset");
		if(itemset==null){
			
		}
		return itemset;
	}
	
	private XuiElement getItemsetDataNode(){
		XuiElement itemset = this.getItemsetNode();
		XuiElement itemsetData = itemset.getChildByTagName("itemset-data");
//		if(itemsetData==null){
//			itemsetData = propertyItem.getOwerElement().getXuiDataModel().addElement("itemset-data",itemset,null,null,"<itemset-data></itemset-data>",null);
//		}
		return itemsetData;
	}

}
