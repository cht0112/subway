package com.justep.designer.components;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List; 
import java.util.Map;

import org.eclipse.jface.window.Window;
import org.w3c.dom.Element;

import com.justep.studio.StudioPlugin;
import com.justep.studio.data.DSUtil;
import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.dialog.CommonSelectorDialog;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;
 

public class DBaseBar extends BaseComponent {
    public static final String BAR_ITEMS = "bar_items";
    public static final String DEFAULT_BAR_ITEMS = "default_bar_items";
    public static final String DATA_SOURCE = "data_source";
    
    public void afterSetProperty(String p, String v) {
    	if("mode".equals(p))
    		this.repaint(); 
    }
	public String decodeUnicode(String theString) { 
		  
        char aChar; 
  
        int len = theString.length(); 
  
        StringBuffer outBuffer = new StringBuffer(len); 
  
        for (int x = 0; x < len;) { 
  
            aChar = theString.charAt(x++); 
  
            if (aChar == '\\') { 
  
                aChar = theString.charAt(x++); 
  
                if (aChar == 'u') { 
  
                    // Read the xxxx 
  
                    int value = 0; 
  
                    for (int i = 0; i < 4; i++) { 
  
                        aChar = theString.charAt(x++); 
  
                        switch (aChar) { 
  
                        case '0': 
  
                        case '1': 
  
                        case '2': 
  
                        case '3': 
  
                        case '4': 
  
                        case '5': 
  
                        case '6': 
                        case '7': 
                        case '8': 
                        case '9': 
                            value = (value << 4) + aChar - '0'; 
                            break; 
                        case 'a': 
                        case 'b': 
                        case 'c': 
                        case 'd': 
                        case 'e': 
                        case 'f': 
                            value = (value << 4) + 10 + aChar - 'a'; 
                            break; 
                        case 'A': 
                        case 'B': 
                        case 'C': 
                        case 'D': 
                        case 'E': 
                        case 'F': 
                            value = (value << 4) + 10 + aChar - 'A'; 
                            break; 
                        default: 
                            throw new IllegalArgumentException( 
                                    "Malformed   \\uxxxx   encoding."); 
                        } 
  
                    } 
                    outBuffer.append((char) value); 
                } else { 
                    if (aChar == 't') 
                        aChar = '\t'; 
                    else if (aChar == 'r') 
                        aChar = '\r'; 
  
                    else if (aChar == 'n') 
  
                        aChar = '\n'; 
  
                    else if (aChar == 'f') 
  
                        aChar = '\f'; 
  
                    outBuffer.append(aChar); 
  
                } 
  
            } else
  
                outBuffer.append(aChar); 
  
        } 
  
        return outBuffer.toString(); 
  
    }    
	public Map setBarItem(XuiElement currentElement){ 
		String s = this.getDesigner().executeJSMethod(this.getDesigner().JSMETHOD_TYPE_SELECTED_COMPONENT, "getDefaultItemsToString", new HashMap());
		ArrayList list = (ArrayList)(this.getDesigner().json.deserialize(s));

		Map cfg = new HashMap();		
		Element curSrcE = currentElement.getOriginElement();	
		
		Map dataParams = new HashMap();
		List<String> items = getBarItem(currentElement);
        DataSet dataSet = getBarItems(curSrcE,list,items);
		CommonSelectorDialog dlg = new CommonSelectorDialog(StudioPlugin.getShell(),"选择toolItem");
		dlg.setInitialSize(450,520);
		dlg.setDataSet(dataSet);
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
						if(idx>=0)model.insertAfter(currentElement.getChildByAttr("item",null, "name",items.get(idx)).getOriginElement(), "barItem", "<item name=\""+name+"\"/>");
						else model.addElement("barItem", currentElement, null).setPropertyValue("name", name);
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
	
	public DataSet getBarItems(Element srcE,List<List> itemList,List<String> inludeList){
		DataSet dataset = new DataSet();
		DSUtil.createSelectedColumn(dataset);
		DSUtil.createColumn(dataset, "name","名称","string", true, false, 150).setDisenableFilterCondition("selected==true");
		DSUtil.createColumn(dataset, "label","标签","string", true, false, 150).setDisenableFilterCondition("selected==true");
		DSUtil.createColumn(dataset, "img","图片","string", true, false, 150).setVisible(false);	
 
		 
		if(srcE==null){
			System.out.println("没有找到数据源元素。");
			return dataset;
		}
 
		List<Element> items = W3cDocumentHelper.getChildXmlElementList(srcE, "item");
		if(items.size()>0){ 
			for(List item:itemList){ 
				String text = decodeUnicode((item.get(1)+"").replace("u", "\\u"));
				if(inludeList.contains(item.get(0))){
				   dataset.addRecord(new Object[]{true,item.get(0),text,item.get(2)});
				}else{
				   dataset.addRecord(new Object[]{false,item.get(0),text,item.get(2)});
				}
			}	
		}else{
			for(List item:itemList){
				String text = decodeUnicode((item.get(1)+"").replace("u", "\\u"));
				if(item.size() == 4){
				   dataset.addRecord(new Object[]{true,item.get(0),text,item.get(2)});
				}else{
				   dataset.addRecord(new Object[]{false,item.get(0),text,item.get(2)});
				}
			}	
		}
		
		return dataset;
	}
}
