package com.justep.appCommon;

import java.util.Collection;
import java.util.Iterator;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.util.Utils;

public class DataUtils {
	public static Document table2XML(Table table) {
		Element rootElement = DocumentHelper.createElement("root"); 
		Document xml = DocumentHelper.createDocument(rootElement);

		rootElement.add(table2XMLElement(table));

		return xml;
	}
	
	public static Element table2XMLElement(Table table) {
		Object idColumn = table.getProperties().get(Table.PROP_NAME_ROWID);

		Element dataElement = DocumentHelper.createElement("data");
		Element rowsElement = dataElement.addElement("rows");
		
		Iterator<Row> rows = table.iterator();
		
		Collection<String> columns = table.getColumnNames();
		
		while (rows.hasNext()) {
			Row row = rows.next();
			Element rowElement = rowsElement.addElement("row"); 
			
			if (Utils.isNotNull(idColumn)) {
				String idValue = row.getString(idColumn.toString());
				if (Utils.isNotNull(idValue))
					rowElement.addAttribute("id", idValue);
			}
			
			for (String column : columns) {
				Element columnElement = rowElement.addElement(column);
				columnElement.addAttribute("type", table.getMetaData().getColumnMetaData(column).getType());

				Object columnValue = row.getValue(column);
				if (Utils.isNotNull(columnValue))
					columnElement.setText(com.justep.system.transform.SimpleTransform.transToString(columnValue));
			}
		}
		return dataElement;
	}
}
