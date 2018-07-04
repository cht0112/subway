package com.justep.studio.ui.editors.property.strategy;

import java.util.ArrayList;
import java.util.List;

import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.editors.xui.IPropertyValueStrategy;

public class RefPropertyValueStrategy implements IPropertyValueStrategy {

	public String transformPropertyValue(DataSet dataset) {
		// TODO Auto-generated method stub
		List<DataRecord> rcList = dataset.getSelectedRecord();
		if(rcList.size()>0){
			String nodeType = rcList.get(0).getString("nodeType");
			if(!("false".equals(rcList.get(0).getString("asPath")))){
				return getRelationPath(rcList.get(0));
			}
		}
		return "";
	}
	
	public String getRelationPath(DataRecord record){
		List<DataRecord> valueList = new ArrayList();
		buildPath(record,valueList);
		StringBuilder path = new StringBuilder();
		for(int i=valueList.size()-1;i>=0;i--){
			DataRecord tmpRecord = valueList.get(i);
			String id = tmpRecord.getString("id");
			if(id == null || "".equals(id)){
				id = record.getString("text");
			}
			String type = tmpRecord.getString("nodeType");			
			if("data".equals(type)){
				path.append("data('"+id+"')");
			}else{
				path.append("/"+record.getString("text"));
			}			
		}		
		return path.toString();
	}
	
	private void  buildPath(DataRecord record,List valueList){		
		valueList.add(record);
		DataRecord pNode = record.getParent();
		if(pNode != null && !("false".equals(pNode.getString("asPath")))){
			buildPath(pNode,valueList);
		}
	}	
}
