

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.window.Window;
import org.w3c.dom.Element;

import com.justep.design.model.ModelConstant;
import com.justep.studio.StudioPlugin;
import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.dialog.CommonSelectorDialog;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiDataSourceManager;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.editors.xui.dialog.ParametersDialog;
import com.justep.studio.ui.editors.xui.opt.UndoRedoManager;
import com.justep.studio.util.CommonUtil;

public class Grid extends BaseComponent{
	public Map<String, Object> insertColumn(XuiElement currentElement){
		Map<String, Object> reValMap = new HashMap<String, Object>();
		String text ="<root>" + 
			    "<param name=\"index\" desc=\"列索引\" readOnly=\"false\"/>"+
				"<param name=\"label\" desc=\"列标题\" readOnly=\"false\"/>" + 
				"<param name=\"typeCode\" value=\"ro,ed,txt,ch,ra,co\" desc=\"类型码\"/>"+
				"<param name=\"width\" desc=\"宽度\" readOnly=\"false\"/>"+
				"</root>";
		try {
			Document doc = DocumentHelper.parseText(text);
			List<?> params = doc.getRootElement().selectNodes("param");
			ParametersDialog dlg = new ParametersDialog(null);
			dlg.setDataEntries(params);
			int status = dlg.open();
			if(status==Dialog.OK){
				List<DataRecord> list = dlg.getReurnData().getData();
				for(DataRecord r : list){
					String name = r.getString("paramName");
					Object value = r.getValue("paramValue");
					reValMap.put(name, value);
				}				
			} 
		} catch (DocumentException e) {
			e.printStackTrace();
		}		
		return reValMap;
	}
   
	public Map<?, ?> appendColumn(XuiElement currentElement){
		Element curSrcE = currentElement.getOriginElement();
		String data = curSrcE.getAttribute("data");
		if (data == null || "".equals(data)) {

			MessageDialog.openInformation(StudioPlugin.getShell(), "提示",
					"请先设置Grid的data属性！");
			return null;
		}

		List<String> excludeList = getColumnRelations(currentElement);
		XuiElement dataE = currentElement.getXuiDataModel().findElementById(data);
		DataSet ds = null;
		if(dataE != null){
			if("data".equals(dataE.getName())){
				ds = XuiDataSourceManager.createHasRelationDataSet();
				String columns = dataE.getProperyValue("columns");
				String[] columnItems = columns.split(",");
				for(String col:columnItems){
				   ds.addRecord(new Object[] { false,col, col, col,"String", null, "relation" });
				}
			}
		}
		if(ds == null){
		   ds = XuiDataSourceManager.getGridColumnDataSet(currentElement);
		}
		ds.removeByCondition(ModelConstant.ALIAS, null, excludeList);
		CommonSelectorDialog dlg = new CommonSelectorDialog(
				StudioPlugin.getShell(), "请选择要创建的列");
		dlg.setDataSet(ds);
		dlg.setInitialSize(580, 600);
		dlg.open();
		if(dlg.getReturnCode() == Window.OK){
			List<DataRecord> retrunData = dlg.getSelections();			
			XuiDataModel model = currentElement.getXuiDataModel();
			List<XuiElement> eList = new ArrayList<XuiElement>();
			for(int i=0;i<retrunData.size();i++){
				DataRecord record = retrunData.get(i);
				String relAlias = record.getString("alias");
				String relLabel = record.getString("label");		
				String elementName = "gridColumn";
				XuiElement newE = model.addElement(elementName, currentElement, null);
				newE.setDir(false);
				newE.setNew(true);
				newE.setPropertyValue("ref", relAlias);
				newE.setPropertyValue("label", relLabel);
				newE.setPropertyValue("type", "ed");
				newE.setPropertyValue("width", "100px");
				eList.add(newE);
			}
			model.getUndoRedoManager().batchCreateComponent(currentElement.getDesignId(), eList);
			
			//this.repaint(currentElement);
		}
		return null;
	}
	
	public List<String> getColumnRelations(XuiElement currentE){
		List<String> list = new ArrayList<String>();
		Element srcE = currentE.getOriginElement();
		@SuppressWarnings("unchecked")
		List<Element> columns = W3cDocumentHelper.getChildXmlElementList(srcE, "column");
		for(Element colE : columns){
			String colRef = colE.getAttribute("ref");
			list.add(colRef);
		}		
		return list;
	}
	
	public void afterSetProperty(String name,String value){
		if("header-row-height".equals(name)) this.repaint();		
	}

	public boolean validate(XuiElement xuiElement) {
		boolean result = true;
		boolean directEdit = "true".equalsIgnoreCase(xuiElement.getProperyValue("edit-mode"))?true:false;
		int treeCount = 0;
		boolean isExistEditColumn = false;
		List<XuiElement>columns = xuiElement.getChildListByName("gridColumn");
		for(XuiElement e : columns){
			String type = e.getProperyValue("type");
			String visible = e.getProperyValue("visible");
			boolean isEdit = !CommonUtil.isEmpty(type) && !"ro".equals(type)
					&& !"true".equalsIgnoreCase(e.getProperyValue("readonly"))
					&& !"false".equalsIgnoreCase(e.getProperyValue("visible"))
					&& !"html".equals(type) && !"ch".equals(type) && !"ch".equals(type) ;
			if(isEdit) isExistEditColumn = true;
			if("tree".equals(type)) treeCount++;
			else if("html".equals(type) && (CommonUtil.isEmpty(e.getProperyValue("onRender")))){
				this.addWarning(xuiElement, "列("+e.getProperyValue("ref")+")类型为html但是没有定义onRender事件");
				result = false;
			}
			String ref = e.getProperyValue("ref");
			if(isEdit && "version".equals(ref)){
				this.addWarning(xuiElement, "列ref为version可能会造成data数据保存冲突");
				result = false;
			}
		}
		String dataId = xuiElement.getProperyValue("data");
		boolean isTreeGrid = "tree".equals(xuiElement.getProperyValue("appearance"));
		if(null!=dataId && !"".equals(dataId)){
			XuiElement dataE = xuiElement.getXuiDataModel().findElementById(dataId);
			if(null!=dataE){
				boolean isSimpleData = "/UI/system/components/data.xbl.xml#data".equals(dataE.getProperyValue("component"));
				boolean isTree = "true".equals(dataE.getProperyValue("is-tree"))?true:false;
				if(isTree){
					if(treeCount<1 && !isTreeGrid){
						this.addError(xuiElement, "绑定的data是树类型，必须定义一列为tree类型");
						result = false;
					}
					else if(treeCount>1){
						this.addError(xuiElement, "为tree类型的列只能有一列");
						result = false;
					}
					else if(treeCount==1 && !"tree".equals(columns.get(0).getProperyValue("type"))){
						
					}
				}else if(treeCount>0 && !isSimpleData){
					this.addError(xuiElement, "列不能使用tree类型，绑定的data不是树类型");
					result = false;
				}
			}
		}

		if(isExistEditColumn){
			String s = xuiElement.getProperyValue("onRowClick");
			if(directEdit && null!=s && !"".equals(s)){
				this.addWarning(xuiElement, "direct-edit=true和onRowClick可能存在冲突");
				result = false;
			}
			s = xuiElement.getProperyValue("onRowDblClick");
			if(!directEdit && null!=s && !"".equals(s)){
				this.addWarning(xuiElement, "direct-edit=false和onRowDbClick可能存在冲突");
				result = false;
			}
		}
	
		return result;
	}
	
}
