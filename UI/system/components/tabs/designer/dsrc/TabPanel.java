

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.editors.xui.designpanel.WindowDesignPanel;
 
public class TabPanel extends BaseComponent {
	
	public void parseLayout(WindowDesignPanel designer,Element comE,String parentEId) {
		XuiDataModel dataModel = designer.getDataModel();
		org.dom4j.Element configE = dataModel.getConfig().getConfigByXblComponent(W3cDocumentHelper.getAttribute(comE, "component"));
		 List<Element> tabEList = W3cDocumentHelper.getChildXmlElementList(comE, "tab");
		 Map paramMap = new HashMap();
		 paramMap.put("currentE", parentEId);
		 paramMap.put("currentName", configE.attributeValue("name"));
		 String componentId = designer.executeJSMethod(designer.JSMETHOD_TYPE_CANVAS, "newInstance", paramMap);
		 int idx = 1;
		 for(Element tabE:tabEList){
			 Element labelE = W3cDocumentHelper.getFirstChildXmlElementByTag(tabE, "label");
			 String label = "tab_"+(idx++);
			 if(labelE != null){
				 label = W3cDocumentHelper.getText(labelE);//labelE.getNodeValue();
			 }
			 paramMap = new HashMap();
			 paramMap.put("componentId", componentId);
			 paramMap.put("label", label);
			 paramMap.put("componentMethod", "newTab");
			 String tabContentId = designer.executeJSMethod(designer.JSMETHOD_TYPE_CANVAS, "callComponentMethod", paramMap);
			 System.out.println("=======>"+tabContentId);
			 List<Element> tabChildList = W3cDocumentHelper.getAllChildXmlElements(tabE);
			 for(Element e:tabChildList){
				   if(!e.getLocalName().equals("label")){
					   
				   }
			 }
		 }
	}
	
	public Map addTab(XuiElement currentElement){
		Map cfg = new HashMap();		
//		FieldFormDialog dlg = new FieldFormDialog(null);
//		List fields = new ArrayList();
//		fields.add("ID");
//		fields.add("名称");
//		dlg.setFields(fields); 
//		dlg.setSize(400, 200);   
//		int status = dlg.open(); 
//		if(status==Dialog.OK){  
//			Map<String,String> retData = dlg.getReurnData();			
//			String id = retData.get("ID"); 
//			String name = retData.get("名称");
			XuiDataModel model = currentElement.getXuiDataModel();
			XuiElement newTabE = model.addElement("tabPage", currentElement, null);
//			newTabE.setDir(false); 
//			newTabE.setNew(true);
			//newTabE.setPropertyValue("id", id);
			
//			XuiElement newLabelE = model.addElement("xuiLabel", newTabE, null);
//			newLabelE.setDir(false);
//			newLabelE.setNew(true);
//			newLabelE.setText(name);
			
			this.repaint(newTabE);
//		}		
		return null;
	}
	
	public void repaint(XuiElement currentElement){
		StringBuffer sbf = new StringBuffer();
		getDesigner().parseLayout(currentElement.getParentElement().getOriginElement(), currentElement.getOriginElement(), sbf);
		Map map = new HashMap();
		map.put("data", "<layout>"+sbf.toString()+"</layout>");System.out.println(sbf.toString());
		map.put("targetElement", currentElement.getParentElement().getDesignId());
		getDesigner().executeJSMethod(getDesigner().JSMETHOD_TYPE_CANVAS, "repaintComponent", map);
	}
	
//	public Map modifyTab(XuiElement currentElement){ 
//		Map cfg = new HashMap();			
//		Map dataParams = new HashMap();
//        dataParams.put(CommonDataSource.DATA_SOURCE, currentElement);
//		CommonSelectorDialog dlg = new CommonSelectorDialog(StudioPlugin.getShell(),"请选择要修改的tab",CommonDataSource.TABS,dataParams,true);
//		dlg.setSize(580, 600);
//		dlg.setEndterReturn(false);
//		dlg.open();
//		if(dlg.getReturnCode() == Window.OK){
//			List<DataRecord> list = dlg.getReturnData();
//			List<Map> tabParams = new ArrayList<Map>();
//			XuiDataModel model = currentElement.getXuiDataModel();		
//			for(int i=0;i<list.size();i++){
//				DataRecord record = list.get(i);
//				String id = record.getString("id");
//				String name = record.getString("name");
//				String designId = record.getString("designId");
//				XuiElement tabE = currentElement.getChildByAttr("tab", null, "id", id);
//				if(tabE!=null){
//					XuiElement labelE = tabE.getChildBySrcTagName("label");
//					if(labelE!=null){
//						labelE.setText(name);
//					}
//					Map map = new LinkedHashMap();
//					map.put("designId", designId);
//					map.put("label", name);
//					tabParams.add(map);
//				}				
//			}
//			cfg.put("params", tabParams);
//		}
//		return cfg;
//	}

//	public Map deleteTab(XuiElement currentElement){
//		Map cfg = new HashMap();
//		Element curSrcE = currentElement.getOriginElement();				
//		Map dataParams = new HashMap();
//        dataParams.put(CommonDataSource.DATA_SOURCE, currentElement);
//		CommonSelectorDialog dlg = new CommonSelectorDialog(StudioPlugin.getShell(),"请选择要删除的tab",CommonDataSource.TABS,dataParams,true);
//		dlg.setSize(580, 600);
//		dlg.setEndterReturn(false);
//		dlg.open();
//		if(dlg.getReturnCode() == Window.OK){
//			List<DataRecord> list = dlg.getReturnData();
//			List<Map> tabParams = new ArrayList<Map>();
//			XuiDataModel model = currentElement.getXuiDataModel();		
//			for(int i=0;i<list.size();i++){
//				DataRecord record = list.get(i);
//				String id = record.getString("id");
//				String name = record.getString("name");
//				String designId = record.getString("designId");
//				currentElement.removeChild("tab", "id", id);
//				Map map = new LinkedHashMap();
//				map.put("designId", designId);				
//				tabParams.add(map);
//			}
//			cfg.put("params", tabParams);
//			this.refreshNavigatorTree();
//		}
//		return cfg;
//	}
	
	public  List<String> getTabs(XuiElement currentElement){
		Element srcE = currentElement.getOriginElement();
		List<String> list = new ArrayList<String>();
		NodeList children = srcE.getChildNodes();
		for(int i=0;i<children.getLength();i++){
			Node child = children.item(i);
			if(child.getNodeType()==Node.ELEMENT_NODE){				
				if(child.getLocalName().equals("tab")){
					Element tabE = (Element)child;
					String id = tabE.getAttribute("id");
					Element labelE = W3cDocumentHelper.getFirstChildXmlElementByTag(tabE, "label");
					
				}
			}
		}
		return list;
	}
}
