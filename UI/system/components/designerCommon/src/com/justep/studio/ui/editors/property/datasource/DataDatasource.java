package com.justep.studio.ui.editors.property.datasource;

import java.util.List;

import org.w3c.dom.Element;

import com.justep.studio.data.DataColumn;
import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.editors.util.PropertyEditorUtil;
import com.justep.studio.ui.editors.xui.PropertyItem;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.util.XPathUtil;

public class DataDatasource extends PropertyDatasource {

	public DataSet getDatasource(PropertyItem propertyItem) {
		XuiElement ownerE = (XuiElement)propertyItem.getOwerElement();
		Element currentE = ownerE.getOriginElement();
				
		dataset.setFireDataChangedEvent(false);
		dataset.setDisplayStyle(DataSet.DISPLAY_STYLE_TREE);
		dataset.addColumn("nodeType", "nodeType", "string").setVisible(false);
		DataColumn column = dataset.addColumn("text", "text", "string");
		column.setTreeColumn(true);
		column.setSearchField(true);
		column = dataset.addColumn("id", "id", "string");
		column.setVisible(false);
		dataset.addColumn("asPath", "asPath", "string").setVisible(false);
		dataset.addColumn("image", "image", "string").setVisible(false);
		
		DataRecord windowNode  = dataset.addRecord();
		Element winE = PropertyEditorUtil.getCurrentWindowElement(currentE);
		windowNode.setValue(new Object[]{"window",winE.getAttribute("id")==null?winE.getTagName():winE.getAttribute("id"),winE.getAttribute("id")});		
		windowNode.setValue("image","window.gif");
		windowNode.setValue("asPath","false");
		
		List<Element> models = W3cDocumentHelper.getChildXmlElementList(winE,"model");
		for(Element model : models){
			String modelId = model.getAttribute("id");
			DataRecord modelNode = new DataRecord(new Object[]{"model",modelId==null?model.getTagName():modelId,modelId},windowNode);
			modelNode.setValue("image","model.gif");
			modelNode.setValue("asPath","false");
			
			List<Element> datas = XPathUtil.selectNodes(model, ".//*[local-name()='data']");
			for(Element dataE : datas){			
				String dataId = dataE.getAttribute("id");
				if(dataId!=null){
					DataRecord dataNode = new DataRecord(new Object[]{"data",dataId==null?dataE.getTagName():dataId,dataId},modelNode);
					dataNode.setValue("image","data.gif");				
				}
			}
		}	
		
		dataset.setFireDataChangedEvent(true);
		return this.getDataset();
	}
	
}
