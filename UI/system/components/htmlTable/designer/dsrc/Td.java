import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.swt.widgets.Item;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.swt.widgets.MenuItem;
import org.eclipse.swt.widgets.ToolItem;
import org.w3c.dom.Element;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.NS;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiElement;

/**
 * 表格操作
 * 
 * @author xiangyaohua
 * @version 2010-5-9
 */
public class Td extends BaseComponent {
	
	private void refreshNavTree(){
		this.getDesigner().getEditorPart().getTreeViewer().refresh();
	}
	
	private Map<String, String> insertRow(XuiElement currentElement,boolean isAfter) {
		Map<String, String> map = new HashMap<String, String>();

		int columnSize = currentElement.getParentElement()
				.getChildListByTagName("td").size();
		StringBuffer sbf = new StringBuffer();
		sbf.append("<xhtml:tr xmlns:xhtml=\"" + NS.xhtml + "\">");
		for (int i = 0; i < columnSize; i++) {
			sbf.append("<xhtml:td/>");
		}
		sbf.append("</xhtml:tr>");
		XuiElement e = null;
		if(isAfter){
			e = currentElement.getXuiDataModel().insertAfter(
				currentElement.getParentElement().getOriginElement(), "tr",
				sbf.toString());
		}else{
			e = currentElement.getXuiDataModel().insertBefore(
					currentElement.getParentElement().getOriginElement(), "tr",
					sbf.toString());
			
		}
		sbf = new StringBuffer();
		this.getDesigner().parseLayout(
				(org.w3c.dom.Element) e.getOriginElement().getParentNode(),
				e.getOriginElement(), sbf);
		map.put("xmlStr", sbf.toString());
		refreshNavTree();
		return map;
	}

	public Map<String, String> insertRowBefore(XuiElement currentElement) {
		return this.insertRow(currentElement,false);
	}

	public Map<String, String> insertRowAfter(XuiElement currentElement) {
		return this.insertRow(currentElement,true);
	}

	public Map<String, String[]> insertColumnBefore(XuiElement currentElement) {
		
		int cellIndex = this.getCellIndex(currentElement);
		String tdXML = "<xhtml:td  xmlns:xhtml=\"" + NS.xhtml + "\"/>";
		List<XuiElement> trs = currentElement.getParentElement().getParentElement().getChildListByTagName("tr");
		Map<String,String[]> map= new HashMap<String, String[]>();
		String[] tdList = new String[trs.size()];
		map.put("tds", tdList);
		for (int i = 0;i<trs.size();i++) {
			List<XuiElement> tds = trs.get(i).getChildListByTagName("td");
			XuiElement td = tds.get(cellIndex);
			if(td!=null){
				XuiElement e = currentElement.getXuiDataModel().insertBefore(td.getOriginElement(), "td",tdXML);
				StringBuffer sbf = new StringBuffer();
				this.getDesigner().parseLayout(trs.get(i).getOriginElement(), e.getOriginElement(), sbf);
				tdList[i]=sbf.toString();
			}
		}
		refreshNavTree();
		return map;
	}
 
	public Map<String, String[]> insertColumnAfter(XuiElement currentElement) {
		
		int cellIndex = this.getCellIndex(currentElement);
		String tdXML = "<xhtml:td  xmlns:xhtml=\"" + NS.xhtml + "\"/>";
		List<XuiElement> trs = currentElement.getParentElement().getParentElement().getChildListByTagName("tr");
		Map<String,String[]> map= new HashMap<String, String[]>();
		String[] tdList = new String[trs.size()];
		map.put("tds", tdList);
		for (int i = 0;i<trs.size();i++) {
			List<XuiElement> tds = trs.get(i).getChildListByTagName("td");
			XuiElement td = tds.get(cellIndex);
			if(td!=null){
				XuiElement e = currentElement.getXuiDataModel().insertAfter(td.getOriginElement(), "td",tdXML);
				StringBuffer sbf = new StringBuffer();
				this.getDesigner().parseLayout(trs.get(i).getOriginElement(), e.getOriginElement(), sbf);
				tdList[i]=sbf.toString();
			}
		}
		refreshNavTree();
		return map;
	}

	public Map<String, String> deleteRow(XuiElement currentElement) {
		XuiElement tr = currentElement.getParentElement();
		String id = tr.getDesignId();
		if (tr.getParentElement().getChildListByTagName("tr").size() <= 1) {
			id = tr.getParentElement().getDesignId();
		}
		currentElement.getXuiDataModel().getDesigner().removeSelection(id);//zmh 统一调用删除方法
		return null;
	} 

	public Map<String, String> deleteColumn(XuiElement currentElement) {
		int cellIndex = this.getCellIndex(currentElement);
		if(cellIndex==-1){
			return null;
		}
		List<String> ids = new ArrayList<String>();
		XuiElement tableE = currentElement.getParentElement().getParentElement();
		List<XuiElement> trs = tableE.getChildListByTagName("tr");
		for (XuiElement tr : trs) {
			List<XuiElement> tds = tr.getChildListByTagName("td");
			if(tds.size()<=1){
				ids.add(tr.getDesignId());
				continue;
			}
			XuiElement td = tds.get(cellIndex);
			if(td!=null){
				ids.add(td.getDesignId());
			}
		}
		currentElement.getXuiDataModel().getDesigner().removeSelections(ids);//zmh 统一调用删除方法
		if(tableE.getChildren().size() == 0){
			currentElement.getXuiDataModel().getDesigner().removeSelection(tableE.getDesignId());
		}
		return null;
	}
	

	public Map<String, String>  appendCell(XuiElement tr){
		Map<String,String> map= new HashMap<String, String>();
		String tdXML = "<xhtml:td  xmlns:xhtml=\"" + NS.xhtml + "\"/>";
		XuiElement e = tr.getXuiDataModel().addElement("td", tr, null, null, tdXML, null);
		StringBuffer sbf = new StringBuffer();
		this.getDesigner().parseLayout(tr.getOriginElement(), e.getOriginElement(), sbf);
		map.put("tdXML", sbf.toString());
		refreshNavTree();
		return map;
		
	}
	
	public Map<String, String>  insertCellBefore(XuiElement td){
		Map<String,String> map= new HashMap<String, String>();
		String tdXML = "<xhtml:td  xmlns:xhtml=\"" + NS.xhtml + "\"/>";
		XuiElement e = td.getXuiDataModel().insertBefore(td.getOriginElement(), "td",tdXML);
		StringBuffer sbf = new StringBuffer();
		this.getDesigner().parseLayout(td.getParentElement().getOriginElement(), e.getOriginElement(), sbf);
		map.put("tdXML", sbf.toString());
		refreshNavTree();
		return map;
	}
	
	public Map<String, String>  insertCellAfter(XuiElement td){
		Map<String,String> map= new HashMap<String, String>();
		String tdXML = "<xhtml:td  xmlns:xhtml=\"" + NS.xhtml + "\"/>";
		XuiElement e = td.getXuiDataModel().insertAfter(td.getOriginElement(), "td",tdXML);
		StringBuffer sbf = new StringBuffer();
		this.getDesigner().parseLayout(td.getParentElement().getOriginElement(), e.getOriginElement(), sbf);
		map.put("tdXML", sbf.toString());
		refreshNavTree();
		return map;
		
	}
	
	public Map<String, String>  deleteCell(XuiElement td){
		XuiElement tr = td.getParentElement();
		if (tr.getChildListByTagName("td").size() <= 1) {
			HashMap<String, String> resultMap = (HashMap<String, String>)deleteRow(td);
			HashMap<String, String> map = new HashMap<String, String>();
			map.put("deleteRow", "true");
			if (resultMap.containsKey("deleteTable")) {
				map.put("deleteTable", "true");
			}
			return map;
		}
		td.getXuiDataModel().deleteElement(td);
		refreshNavTree();
		return new HashMap<String, String>();
	}
	
	public Map<String, String>  mergeRightCell(XuiElement td){
		HashMap<String, String> map = new HashMap<String, String>();
		int cellIndex = this.getCellIndex(td);
		List<XuiElement> tds = td.getParentElement().getChildListByTagName("td");
		if(tds.size()<=cellIndex+1){
			return null;
		}
		XuiElement ntd = tds.get(cellIndex+1);
		if(ntd.getChildren().size()>0 || !W3cDocumentHelper.getText(ntd.getOriginElement()).trim().equals("")){
			map.put("err", "不能合并有内容的表格");
			return map;
		}
		td.getXuiDataModel().deleteElement(ntd);
		String value = td.getProperyValue("colspan");
		int colspan = 1;
		if(value!=null && !value.trim().equals("")){
			colspan = Integer.parseInt(value);
		}
		colspan++;
		td.getXuiDataModel().setPropertyValue(td, "colspan", colspan+"");
		map.put("colspan", colspan+"");
		refreshNavTree();
		return map;
	}
	
	public Map<String, String>  mergeDownCell(XuiElement td){
		HashMap<String, String> map = new HashMap<String, String>();
		int cellIndex = this.getCellIndex(td);
		int rowIndex = this.getRowIndex(td.getParentElement());
		String rowspanValue = td.getProperyValue("rowspan");
		int rowspan = 1;
		if(rowspanValue!=null && !rowspanValue.trim().equals("")){
			rowspan = Integer.parseInt(rowspanValue);
		}
		List<XuiElement> trs = td.getParentElement().getParentElement().getChildListByTagName("tr");
		int nextRowIndex = rowIndex+rowspan;
		if(trs.size()<=nextRowIndex){
			return null;
		}
		List<XuiElement> tds = trs.get(nextRowIndex).getChildListByTagName("td");
		if(tds.size()<=cellIndex){
			return null;
		}
		XuiElement ntd = tds.get(cellIndex);
		if(ntd.getChildren().size()>0 || !W3cDocumentHelper.getText(ntd.getOriginElement()).trim().equals("")){
			map.put("err", "不能合并有内容的表格");
			return map;
		}
		
		td.getXuiDataModel().deleteElement(ntd);
		rowspan++;
		td.getXuiDataModel().setPropertyValue(td, "rowspan", rowspan+"");
		map.put("nextRowIndex", nextRowIndex+"");
		map.put("rowspan", rowspan+"");
		refreshNavTree();
		return map;
	}
	
	public Map<String, Object>  horizontalSplitCell(XuiElement td){
		Map<String,Object> map = new HashMap<String, Object>();  
		String colspanS = td.getProperyValue("colspan");
		int colspan = 1;
		if(colspanS!=null && !colspanS.trim().equals("")){
			colspan = Integer.parseInt(colspanS);
		} 
		if(colspan>1){
			colspan--;
			td.getXuiDataModel().setPropertyValue(td, "colspan", colspan+"");//////////
			this.insertCellAfter(td);///////
		}else{
			List<XuiElement> trs = td.getParentElement().getParentElement().getChildListByTagName("tr");
			int rowIndex = this.getRowIndex(td.getParentElement());
			int cellPos = this.getCellPos(td);
			this.insertCellAfter(td);///////////
			for (int i = 0; i < trs.size(); i++) {
				if(rowIndex ==i)continue;
				XuiElement ntd = this.getCellByPos(trs.get(i),cellPos);
				if(ntd==null){
					List<XuiElement> tds = trs.get(i).getChildListByTagName("td");
					ntd = tds.get(tds.size()-1);
				}
				int nColspan = this.getColspan(ntd); 
				nColspan++;
				td.getXuiDataModel().setPropertyValue(ntd, "colspan", nColspan+"");///
				
			}
		}
		XuiElement table = td.getParentElement().getParentElement();
		StringBuffer sbf = new StringBuffer();
		this.getDesigner().parseLayout((Element)table.getOriginElement().getParentNode(),table.getOriginElement(), sbf);
		map.put("tableXML", sbf.toString());
		refreshNavTree();
		return map;
	}
	
	public Map<String,Object> verticalSplitCell(XuiElement td){
		Map<String,Object> map = new HashMap<String, Object>();  
		int rowspan = this.getRowspan(td);
		if(rowspan<2)return null;
		rowspan--;
		td.getXuiDataModel().setPropertyValue(td, "rowspan", rowspan+"");
		
		XuiElement table = td.getParentElement().getParentElement();
		int rowIndex = this.getRowIndex(td.getParentElement());
		int cellPos = this.getCellPos(td);
		XuiElement ntr = (XuiElement)table.getChildListByTagName("tr").get(rowIndex+1);
		XuiElement ntd = this.getCellByPos(ntr, cellPos);
		if(ntd!=null){
			this.insertCellBefore(ntd);
		}else{
			this.appendCell(ntr);
		}
		
		StringBuffer sbf = new StringBuffer();
		this.getDesigner().parseLayout((Element)table.getOriginElement().getParentNode(),table.getOriginElement(), sbf);
		map.put("tableXML", sbf.toString());
		refreshNavTree();
		return map;
	}
	
	private int getColspan(XuiElement td){
		int colspan = 1;
		String colspanS = td.getProperyValue("colspan");
		if(colspanS!=null && !colspanS.trim().equals("")){
			colspan = Integer.parseInt(colspanS);
		}
		return colspan;
	}
	
	private int getRowspan(XuiElement td){
		int rowspan = 1;
		String rowspanS = td.getProperyValue("rowspan");
		if(rowspanS!=null && !rowspanS.trim().equals("")){
			rowspan = Integer.parseInt(rowspanS);
		}
		return rowspan;
	}
	
	/**
	 * 获得td所在行的位置，计算了colspan属性
	 */
	private int getCellPos(XuiElement td){
		XuiElement currTr = td.getParentElement();
		List<XuiElement> currTds = currTr.getChildListByTagName("td");
		int cellPos = 0;
		for (int i = 0;i < currTds.size();i++ ){
			XuiElement currTd = currTds.get(i);
			if(currTd==td){
				return cellPos;
			}
			cellPos+=this.getColspan(currTd);
		}
		return -1;
	}
	
	private XuiElement getCellByPos(XuiElement tr,int pos){
		List<XuiElement> tds = tr.getChildListByTagName("td");
		int currPos = 0;
		for (XuiElement td : tds) {
			if(pos==currPos){
				return td;
			}
			currPos+= this.getColspan(td);
		}
		return null;
		
	}
	
	private int getCellIndex(XuiElement td){
		XuiElement currTr = td.getParentElement();
		List currTds = currTr.getChildListByTagName("td");
		int cellIndex = -1;
		for (int i = 0;i < currTds.size();i++ ){
			if(currTds.get(i)==td){
				cellIndex = i;
				break;
			} 
		}
		return cellIndex;
	}
	
	
	
	private int getRowIndex(XuiElement tr){
		XuiElement currTr = tr.getParentElement();
		List currTds = currTr.getChildListByTagName("tr");
		int rowIndex = -1;
		for (int i = 0;i < currTds.size();i++ ){
			if(currTds.get(i)==tr){
				rowIndex = i;
				break;
			} 
		}
		return rowIndex;
	}
	
	 public void initContextItemEnabled(Item item) {
		 Object obj =  item.getData("method");
		 if(obj==null){
			 Menu menu = null;
			 if(item instanceof ToolItem){
				 Object objMenu = ((ToolItem)item).getData("menu") ;
				 if(objMenu instanceof Menu){
					  menu = ((Menu)objMenu);
				 }
			 }else if(item instanceof MenuItem){ 
				 menu = ((MenuItem)item).getMenu();
			 }
			 if (menu != null) {
				XuiElement td = this.getXuiElement();
				int cellIndex = this.getCellIndex(td);
				for (MenuItem c : menu.getItems()) {
					Object method = c.getData("method");
					if ("mergeRightCell".equals(method)) {
						List<XuiElement> tds = td.getParentElement().getChildListByTagName("td");
						if (tds.size() <= cellIndex + 1) {
							this.setItemEnabled(c, false);
						}else{
							this.setItemEnabled(c, true);
						}
					} else if ("mergeDownCell".equals(method)) {
						int rowIndex = this.getRowIndex(td.getParentElement());
						String rowspanValue = td.getProperyValue("rowspan");
						int rowspan = 1;
						if (rowspanValue != null && !rowspanValue.trim().equals("")) {
							rowspan = Integer.parseInt(rowspanValue);
						}
						List<XuiElement> trs = td.getParentElement().getParentElement().getChildListByTagName("tr");
						int nextRowIndex = rowIndex + rowspan;
						if (trs.size() <= nextRowIndex) {
							this.setItemEnabled(c, false);
						}else{
							this.setItemEnabled(c, true);
						}
					}else if("verticalSplitCell".equals(method)){
						int rowspan = this.getRowspan(td);
						if(rowspan<2){
							this.setItemEnabled(c, false);
						}else{
							this.setItemEnabled(c, true);
						}
					}
					/**
					 * <item text="删除单元格" method="deleteCell" /> <item
					 * text="向右合并单元格" method="mergeRightCell" /> <item
					 * text="向下合并单元格" method="mergeDownCell" /> <item
					 * text="水平拆分单元格" method="horizontalSplitCell" /> <item
					 * text="垂直拆分单元格" method="verticalSplitCell" /> </item>
					 * <item text="行" type="DROP_DOWN"> <item text="在上方插入行"
					 * method="insertRowBefore" /> <item text="在下方插入行"
					 * method="insertRowAfter" /> <item text="删除行"
					 * method="deleteRow" /> </item> <item text="列"
					 * type="DROP_DOWN"> <item text="在左侧插入列"
					 * method="insertColumnBefore" /> <item text="在右侧插入列"
					 * method="insertColumnAfter" /> <item text="删除列"
					 * method="deleteColumn"
					 */
				}
			}
			 
		 }
		
	 }

}