
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.jface.window.Window;
import org.w3c.dom.Element;

import com.justep.studio.StudioPlugin;
import com.justep.studio.data.DataColumn;
import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.dialog.CommonSelectorDialog;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;

import com.justep.studio.util.XPathUtil;

public class ReportDecisionBar extends BaseComponent {
	
    public static final String BAR_ITEMS = "bar_items";
    public static final String DEFAULT_BAR_ITEMS = "default_bar_items";
    public static final String DATA_SOURCE = "data_source";
    
	public Map setBarItem(XuiElement currentElement){
		String s = this.getDesigner().executeJSMethod(this.getDesigner().JSMETHOD_TYPE_SELECTED_COMPONENT, "getDefaultItemsToString", new HashMap());
		
		//JsonSerializer json = new JsonSerializer();
		//JosnSerializer
		ArrayList list = (ArrayList)this.getDesigner().json.deserialize(s);
		
		Map cfg = new HashMap();		
		Element curSrcE = currentElement.getOriginElement();	
		
		Map dataParams = new HashMap();
		List<String> items = getBarItem(currentElement);

		dataParams.put("itemList", list);
 
		CommonSelectorDialog dlg = new CommonSelectorDialog(StudioPlugin.getShell(),"选择toolItem");
		dlg.setDataSet(this.getBarItems(curSrcE, list, items)) ;
		dlg.setInitialSize(580, 600);
		dlg.open();
		if(dlg.getReturnCode() == Window.OK){
			XuiDataModel model = currentElement.getXuiDataModel();
			List<DataRecord> returnData = dlg.getSelections();
			//删除
			for(String name:items){
				int idx1 = getItemIndex(name,list);
				if(idx1 !=-1 && !isInReturnValue(name,returnData)){
					XuiElement targetE = currentElement.getChildByAttr("item",null, "name",name);
					if(targetE != null){
						model.deleteElement(targetE);
					}
				}
			}
			//添加
			for(DataRecord dr:returnData){
				String name = dr.getString("name");
				if(!isInOldItems(dr.getString("name"),items)){
					int idx1 = getItemIndex(name,list);
					items = getBarItem(currentElement);
					boolean flag = true;
					for(String item:items){
						int idx2 = getItemIndex(item,list);
						if(idx2 !=-1 && idx2>idx1){
							model.insertBefore(currentElement.getChildByAttr("item",null, "name",item).getOriginElement(), "barItem", "<item name=\""+name+"\"/>");
							flag = false;
							break;
						}
					}
					if(flag){
						int idx = getLastIdxInDefaultList(items,list);
						model.insertAfter(currentElement.getChildByAttr("item",null, "name",items.get(idx)).getOriginElement(), "barItem", "<item name=\""+name+"\"/>");
						//model.addElement("barItem", currentElement, null).setPropertyValue("name", name);
					}
				}
			}		
			this.repaint(currentElement);
		}
		return cfg;
	}
	
    private int getLastIdxInDefaultList(List<String> currentItems,List defaultList){
    	for(int i = currentItems.size()-1;i>-1;i--){
    		int idx = getItemIndex(currentItems.get(i),defaultList);
    		if(idx != -1){
    			return i;
    		}
    	}
    	return  currentItems.size()-1;
    }
    
	/*
	 * 获取item的默认位置.
	 */
	private int getItemIndex(String name,List<List> itemList){
		for(int i =0,l=itemList.size();i<l;i++){
			if(name.equals(itemList.get(i).get(0))){
				return i;
			}
		}
		return -1;
	}
	/*
	 * 名称是否存在返回值中.
	 */
	private boolean isInReturnValue(String name,List<DataRecord> drList){
		for(DataRecord dr:drList){
			if(name.equals(dr.getValue("name"))){
				return true;
			}
		}
		return false;
	}
	/*
	 * 名称是否存在旧的item中。
	 */
	private boolean isInOldItems(String name,List<String> oldItems){
		for(String oldItem:oldItems){
			if(name.equals(oldItem)){
				return true;
			}
		}
		return false;
	}
	
	public List<String> getBarItem(XuiElement currentElement){
		List<String> list = new ArrayList<String>();
		Element curSrcE = currentElement.getOriginElement();
		List<Element> items = W3cDocumentHelper.getChildXmlElementList(curSrcE, "item");
		if(items.size()>0){
			for(Element itemE : items){
				String itemName = itemE.getAttribute("name");
				if(itemName != null && !itemName.equals("")){
				  list.add(itemName);
				}
			}
		}
		return list;
	}
    
	private DataColumn cureateSelectedColumn(DataSet dataset){
		DataColumn column0 = dataset.addColumn("selected","选择","bool");
		column0.setLength(40);
		column0.setShowText(false);
		return column0;
	}
	
	public DataSet getBarItems(Element srcE,List<List> itemList,List<String> selectedList ){
		DataSet dataset = new DataSet();
		cureateSelectedColumn(dataset);

		DataColumn col0 = dataset.addColumn("name","名称","string");
		col0.setLength(120);
		col0.setSearchField(true);
		col0.setDisenableFilterCondition("selected==true");
		
		DataColumn col1 = dataset.addColumn("label","标签","string");
		col1.setLength(120);
		col1.setSearchField(true);
		col1.setDisenableFilterCondition("selected==true");
		
		col1 = dataset.addColumn("name","名称","string");
		col1.setLength(170);
		col1.setSearchField(true);
		
		col1 = dataset.addColumn("img","图片","string").setVisible(false);		
		
 
		if(srcE==null){
			System.out.println("没有找到数据源元素。");
			return dataset;
		}
 
		List<Element> items = W3cDocumentHelper.getChildXmlElementList(srcE, "item");
		if(items.size()>0){
			for(List item:itemList){
				if(selectedList.contains(item.get(0))){
				   dataset.addRecord(new Object[]{true,item.get(0),item.get(1),item.get(2)});
				}else{
				   dataset.addRecord(new Object[]{false,item.get(0),item.get(1),item.get(2)});
				}
			}	
		}else{
			for(List item:itemList){
				if(item.size() == 4){
				   dataset.addRecord(new Object[]{true,item.get(0),item.get(1),item.get(2)});
				}else{
				   dataset.addRecord(new Object[]{false,item.get(0),item.get(1),item.get(2)});
				}
			}	
		}
		
		return dataset;
	}
	
	public boolean validate(XuiElement xuiElement) {
		boolean result = true;
		
		org.w3c.dom.Element rootE = xuiElement.getXuiDataModel().getRootElement().getOriginElement();
		String reportId = xuiElement.getOriginElement().getAttribute("decision");
		if(reportId != null && !reportId.equals("")){
			String sXpath = "//*[local-name()='div' and @component='/UI/system/components/decisionGrid.xbl.xml#grid'  and @id='"+reportId+"']";
			List<?> list = XPathUtil.selectNodes(rootE, sXpath);
			int count = list.size();
			if(count == 0){
				this.addError(xuiElement, "reportDecisionBar组件引用的decision("+reportId+")不存在!");
				result = false;
			}		
		}
		
		
		return result;
	}
	
}
