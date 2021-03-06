import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.widgets.FileDialog;
import org.eclipse.swt.widgets.Item;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.swt.widgets.MenuItem;
import org.eclipse.swt.widgets.ToolBar;
import org.eclipse.swt.widgets.ToolItem;
import org.json.JSONException;
import org.json.JSONObject;

import com.justep.studio.StudioPlugin;
import com.justep.studio.ui.editors.property.dialog.CellLayoutPropertyDialog;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiDataModelChangedEvent;
import com.justep.studio.ui.editors.xui.XuiDataModelChangedListener;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.editors.xui.designpanel.WindowDesignPanel;
import com.justep.studio.util.LogUtil;
import com.justep.studio.util.XPathUtil;
import com.justep.util.xls.BinaryExcelConvert;


public class Report extends BaseComponent {

	@SuppressWarnings("unchecked")
	public Map editRule(XuiElement currentElement) {
		Map conifgMap = new HashMap();
		return conifgMap;
	} 

	public void gotoReportDesigner(XuiElement currentElement) {
		String reportSrc = currentElement.getProperyValue("src");
		if (reportSrc == null || reportSrc.equals("")) {
			MessageDialog.openInformation(StudioPlugin.getShell(), "提示","请先设置报表组件src属性(.xls)!");
			return;
		} 
		XuiElement xuiWindowE = getWindowXuiElement(currentElement);
		XuiElement modelE = xuiWindowE.getChildListByTagName("model").get(0);		
		List<XuiElement> dataXuiList = modelE.getAllChildrenByBaseClass("data");
		if(dataXuiList.size() ==0){
			MessageDialog.openInformation(StudioPlugin.getShell(), "提示","请首先设置报表数据源!");
			return;
		}
		
		String dataListStr = currentElement.getProperyValue("data-list");
		String temp ="";
		if(dataListStr != null && !dataListStr.equals("")){			
			String [] dids = dataListStr.split(",");
			for(String did : dids){
				did = did.trim();
				for(int i=0; i<dataXuiList.size(); i++){
					XuiElement dataXuiE = dataXuiList.get(i);
					String dataId = dataXuiE.getProperyValue("id");
					if(did.equals(dataId)){
						temp += dataId;
						temp += ",";
					}
				}
			}
		}
		if(!temp.equals("")){
			temp = temp.substring(0, temp.length()-1);
		}
		this.getDesigner().getEditorPart().getEditorContainerPanel().showDesignePanel("report", currentElement,temp);
	}
	
	
	private  XuiElement getWindowXuiElement(XuiElement xuiChildE){
		if(xuiChildE == null){
			return null;
		}
		String tagName = xuiChildE.getTagName();
		if(tagName.equalsIgnoreCase("window")){
			return xuiChildE;
		}else{
			return getWindowXuiElement(xuiChildE.getParentElement());
		}
	}
	
	public boolean validate(XuiElement xuiElement) {
		boolean result = true;
		
		org.w3c.dom.Element rootE = xuiElement.getXuiDataModel().getRootElement().getOriginElement();
		String dataList = xuiElement.getOriginElement().getAttribute("data-list");
		if(dataList != null && !dataList.equals("")){
			String [] datas = dataList.split(",");
			for(String id : datas){
				id = id.trim();
				String sXpath = "//*[local-name()='data' and @id='"+id+"']";
				List<?> list = XPathUtil.selectNodes(rootE, sXpath);
				int count = list.size();
				if(count == 0){
					this.addError(xuiElement, "report组件引用的data("+id.toString()+")不存在!");
					result = false;
				}
			}			
		}
		
		return result;
	}
	
	public boolean executeCommonToolbarAction(String key, String value) {
		Map<String, String> paramMap = new HashMap<String, String>();
		paramMap.put(key, value);
	    this.getDesigner().executeJSMethod(WindowDesignPanel.JSMETHOD_TYPE_SELECTED_COMPONENT, "setCellStyle", paramMap);
		return false;
	}
	public void setContent(Map map) {
		String layoutContent = (String)map.get("layoutContent");
		List<String> removeComIds = (List<String>)map.get("removeComIds");
		layoutContent = layoutContent.replaceAll("__nbsp__"," ");
		XuiElement xuiElement = this.getXuiElement();
		xuiElement.getXuiDataModel().getUndoRedoManager().updateCellLayoutContent(xuiElement.getDesignId(),layoutContent,removeComIds);//.setPropertyValue("layout-data", content);

//	public void setContent(String content){
//		XuiElement xuiElement = this.getXuiElement();
//		xuiElement.setPropertyValue("layout-data", content);
//		return;
	}
	
	public Map<String, String> mergeCell(XuiElement currentElement) {
		return new HashMap<String, String>();
	}

	public Map<String, String> cancelCellMerging(XuiElement currentElement) {
		return new HashMap<String, String>();
	}

	public Map<String, String> insertRow(XuiElement currentElement) {
		return new HashMap<String, String>();
	}

	public Map<String, String> insertCol(XuiElement currentElement) {
		return new HashMap<String, String>();
	}
	
	public Map<String, String> deleteRow(XuiElement currentElement) {
		return new HashMap<String, String>();
	}

	public Map<String, String> deleteCol(XuiElement currentElement) {
		return new HashMap<String, String>();
	}
	
	@Override
	public void initItemEnabled(Item item) {
		 Object obj =  item.getData("method");
		 
//			<item text="切换到报表设计" method="gotoReportDesigner"> </item> 
//			<sperator/>  
//       		<item text="合并单元格" method="mergeCell"/>  
//       		<item text="取消单元格合并" method="cancelCellMerging"/>  
//       		<sperator/> 
//       		<item text="插入行" method="insertRow"/> 
//			<item text="插入列" method="insertCol"/> 
//			<item text="删除行" method="deleteRow"/> 
//			<item text="删除列" method="deleteCol"/> 
		
		 if(obj!=null){
			 XuiElement e = this.getXuiElement();
			 XuiElement parent = e.getParentElement();
			 String src = e.getProperyValue("src");
			 boolean hasExcel = src!=null&&!src.trim().equals("");
			 if("gotoReportDesigner".equals(obj)){
//				 if(!hasExcel && !item.isDisposed()){
//					
//						if(item instanceof ToolItem){
//							ToolBar toolbar = ((ToolItem)item).getParent();
//							toolbar.getItem(1).dispose();
//						}else if(item instanceof MenuItem){
//							Menu menu = ((MenuItem)item).getParent();
//							menu.getItem(1).dispose();
//						}
//					 item.dispose();
//				 }
				 this.setItemEnabled(item, hasExcel);
			 }else if(obj.toString().matches("mergeCell|cancelCellMerging|insertRow|insertCol|deleteRow|deleteCol|setCellProperties|importFromExcel|showHideCellBorder")){
				 this.setItemEnabled(item,!hasExcel);
			 }else{
				 super.initItemEnabled(item);
			 }
		 }else{
			 super.initItemEnabled(item);
		 }
		
	 }
	
	
	public void setDesigner(WindowDesignPanel designer) {
		super.setDesigner(designer);
	}
	
	public Map<String, String> importFromExcel(XuiElement currentElement) {
		FileDialog dlg = new FileDialog(this.getDesigner().getShell());
		dlg.setFilterExtensions(new String[]{"*.xls;*.xlsx","*.xls","*.xlsx"});
		String fileName = dlg.open();
		if (fileName != null) {
			try {
				org.dom4j.Element table = BinaryExcelConvert.convertToCellLayoutTable(fileName,null,null);
				currentElement.getXuiDataModel().setPropertyValue(currentElement, currentElement.getPropertyItem("layout-data"), table.asXML());
			} catch (Exception e) {
				e.printStackTrace();
				LogUtil.error(e.getLocalizedMessage(),e);
				MessageDialog.openError(this.getDesigner().getShell(), "导入Excel出错", e.getLocalizedMessage());
			}
		}
		return new HashMap<String, String>();
	}
	
	public Map<String, String> setCellProperties(XuiElement currentElement) {
		CellLayoutPropertyDialog dlg = new CellLayoutPropertyDialog(this.getDesigner().getShell());
		String jsonStr = this.getDesigner().executeJSMethod(WindowDesignPanel.JSMETHOD_TYPE_SELECTED_COMPONENT, "getCurrentCellProperties", new HashMap());
		if(jsonStr!=null&&!jsonStr.equals("")){
			try {
				JSONObject json = new JSONObject(jsonStr);
				dlg.setColumnWidth(json.getInt("width"));
				dlg.setRowHeight(json.getInt("height"));
			} catch (JSONException e) {
				e.printStackTrace();
			}
		}
		if(dlg.open()==Window.OK){
			int rowHeight = dlg.getRowHeight();
			int colWidth = dlg.getColumnWidth();
			Map<String,String> map =  new HashMap<String, String>();
			map.put("rowHeight", rowHeight+"");
			map.put("columnWidth", colWidth+"");
			return map;
		}
		return null;
	}
	
	public Map<String,String> showHideCellBorder(XuiElement currentElement) {
		return new HashMap<String, String>();
	}
}
