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
import org.eclipse.swt.widgets.TableColumn;
import org.eclipse.swt.widgets.ToolBar;
import org.eclipse.swt.widgets.ToolItem;

import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.editors.xui.IPropertyDialogPage;
import com.justep.studio.ui.editors.xui.IPropertyValueStrategy;
import com.justep.studio.ui.editors.xui.PropertyItem;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.exjface.DataSetTableViewer;
import com.justep.studio.ui.exjface.DatasetTableLabelProvider;

import swing2swt.layout.BorderLayout;

/**
 * select 下拉表格列编辑框
 * @author xiangyaohua
 * @version 2010-5-26
 *
 */
public class SelectColumnPage extends Composite implements IPropertyDialogPage {

	private Table table;
	private DataSet dataset;
	private final DataSetTableViewer tableViewer ;
	private Map editorMap = new HashMap();
	private PropertyItem propertyItem;
	
	
	/**
	 * Create the composite
	 * @param parent
	 * @param style
	 */
	public SelectColumnPage(Composite parent, int style) {
		super(parent, style);
		setLayout(new BorderLayout(0, 0));

		tableViewer = new DataSetTableViewer(this, SWT.BORDER|SWT.FULL_SELECTION);
		dataset=new DataSet();
		dataset.addColumn("ref").setUnique(true).setRequired(true).setLength(100).setDataType("String").setHeader("ref").setEditable(true).setEditor("TextCellEditor");
		dataset.addColumn("visible").setLength(100).setDataType("bool").setHeader("visible").setEditable(true).setEditor("TextCellEditor");
		dataset.addColumn("label").setLength(100).setDataType("String").setHeader("label").setEditable(true).setEditor("TextCellEditor");
		dataset.addColumn("width").setLength(100).setDataType("String").setHeader("width").setEditable(true).setEditor("TextCellEditor");
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

		final ToolItem newItemToolItem = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				tableViewer.getTable().forceFocus();
				if(tableViewer.getTable().getColumnCount()<=0){
					return;
				}
				Object[] values = new Object[] {"col_"+dataset.getData().size(),true,"",""};
				dataset.addRecord(values);
				tableViewer.refresh();
			}
		});
		newItemToolItem.setText("添加列");

		final ToolItem newItemToolItem_1 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_1.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				if(tableViewer.getTable().getColumnCount()<=0){
					return;
				}
				List<DataRecord> list = dataset.getSelectedRecord();
				if(list.size()>0){
					dataset.deleteRecord(list.get(0));
				}
			}
		});
		newItemToolItem_1.setText("删除列");
		
		final ToolItem newItemToolItem_2 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_2.setText("上移");
		newItemToolItem_2.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				List<DataRecord> list = dataset.getSelectedRecord();
				if(list.size()>0){
					DataRecord selectedData = list.get(0);
					
					List<DataRecord> allList = dataset.getData();
					int selectIndex = 0;
					for (int i = 0; i < allList.size(); i++) {
						if(allList.get(i) == selectedData){
							selectIndex = i;
							break;
						}
					}
					if(selectIndex>0){
						allList.set(selectIndex, allList.get(selectIndex-1));
						allList.set(selectIndex-1, selectedData);
						dataset.setData(allList);
						tableViewer.reloadDataSet(dataset);
					}
				}
			}
		});		
		
		final ToolItem newItemToolItem_3 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_3.setText("下移");
		newItemToolItem_3.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				List<DataRecord> list = dataset.getSelectedRecord();
				if(list.size()>0){
					DataRecord selectedData = list.get(0);
					
					List<DataRecord> allList = dataset.getData();
					int selectIndex = 0;
					for (int i = 0; i < allList.size(); i++) {
						if(allList.get(i) == selectedData){
							selectIndex = i;
							break;
						}
					}
					if(selectIndex<allList.size()-1){
						allList.set(selectIndex, allList.get(selectIndex+1));
						allList.set(selectIndex+1, selectedData);
						dataset.setData(allList);
						tableViewer.reloadDataSet(dataset);
					}
				}
			}
		});		
	}

	public Object getReturnValue() {
		Map<String, Object> map = new HashMap<String, Object>();
		String columns = this.bulidColumnsXML();
		
		List<String> actions = new ArrayList<String>();
		actions.add("column-ref|value");
		actions.add("column-ref|label");  
		actions.add("column-ref|ext");
		map.put(ACTION_REFRESH_PROPERTY_EDITOR_LIST, actions);
		return map;
	}

	public String isValid() {
		return this.dataset.validate();
	}

	public void setPropertyItem(PropertyItem propertyItem) {
		this.propertyItem = propertyItem;
		this.bulidTableData();
	}



	public void setReturnValueStrategy(IPropertyValueStrategy strategy) {
		// TODO Auto-generated method stub
		
	}
	
	private void bulidTableData(){
		dataset.removeAll();
		XuiElement itemset = ((XuiElement)this.propertyItem.getOwerElement()).getChildByTagName("itemset");
		List<XuiElement> list = itemset.getChildListByTagName("column");
		Object[] values = new Object[4];
		for (XuiElement column : list) {
			values[0]= column.getProperyValue("ref");
			values[1]= "false".equals(column.getProperyValue("visible"))?false:true;
			values[2]= column.getProperyValue("label");
			values[2]= values[2]==null?"":values[2];
			values[3]= column.getProperyValue("width");
			values[3]= values[3]==null?"":values[3];
			dataset.addRecord(values);
		}
		tableViewer.refresh();
	}
	
	private String bulidColumnsXML(){
		XuiElement itemset = ((XuiElement)this.propertyItem.getOwerElement()).getChildByTagName("itemset");
		XuiDataModel model = itemset.getXuiDataModel();
		itemset.removeChildren("column");
		List<DataRecord> list = dataset.getData();
		StringBuffer columns= new StringBuffer();
		for (int i=0;i<list.size();i++) {
			DataRecord dataRecord = list.get(i);
			StringBuffer columnXML = new StringBuffer();
			columnXML.append("<xforms:column ref=\"").append(dataRecord.getString("ref")).append("\"");
			
			if(i!=0){
				columns.append(",");
			}
			columns.append(dataRecord.getString("ref"));
			
			if(dataRecord.getBoolean("visible")==false){
				columnXML.append(" visible=\"false\"");
			}
			String label = dataRecord.getString("label").trim();
			if(!label.equals("")){
				columnXML.append(" label=\"").append(label).append("\"");
			}
			String width = dataRecord.getString("width").trim();
			if(!width.equals("")){
				columnXML.append(" width=\"").append(width).append("\"");
			}
			columnXML.append("/>");
			model.addElement("column", itemset,null,null, columnXML.toString(),null); 
		}
		return columns.toString();
	}
}
