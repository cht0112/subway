import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.QName;

import com.justep.ui.system.component.data.bizdata.BizDataDef;
import com.justep.ui.system.component.data.bizdata.BizDataUtils;

import com.justep.design.model.kql.QRelation;
import com.justep.ui.resources.ResourceManagerWrapper;
import com.justep.ui.util.PageUtils;
import com.justep.xbl.runtime.XBLException;


class WindowUtils{
	private static String DATAKEY = "data.light";
	public static void processData(Map context) throws XBLException {
		if (context.containsKey(DATAKEY)){
			Map dataDefs = (Map)context.get(DATAKEY);
			if (dataDefs.size() == 0) return;
			String filePath = getFilePath(context);
			Document doc = getXML(dataDefs);
			PageUtils.writeFile(doc, filePath, true);
		}
	}
	
	private static String getFilePath(Map context){
		String url = (String)context.get("system.windowFileURL");
		url = ResourceManagerWrapper.instance().getRealPath(url);
		int index = url.lastIndexOf("/");
		int index2 = url.lastIndexOf(".");
		String fileName = url.substring(index + 1, index2);
		return url.substring(0, index) + "/.cache/" + fileName + ".xml";
	}
	
	private static Document getXML(Map dataDefs){
		//TODO:
		Iterator it = dataDefs.keySet().iterator();
		List<Element> vars = new ArrayList<Element>(); 
		while (it.hasNext()){
			String id = (String)it.next();
			BizDataDef def = (BizDataDef)dataDefs.get(id);
			vars.add(getVarXML(id, def));
		}
		Element root = DocumentHelper.createElement("root");
		for(Element var : vars){root.add(var);}
		return DocumentHelper.createDocument(root);
	}
	
	private static boolean isSingleData(BizDataDef def){
		return def.getDataDef().attributeValue("component").endsWith("single_data");
	}
	
	private static Element getVarXML(String name, BizDataDef def){
		Element var = DocumentHelper.createElement("var");
		var.addAttribute("name", name);
		var.addAttribute("type", "action");
		if (isSingleData(def)){
			var.addText("[#if (params.form.input.parameters.new?size == 0) || (params.form.input.parameters.new != 'true')][#noparse]");
			var.add(createQueryAction(def));
			var.addText("[/#noparse][#else][#noparse]");
			var.add(createNewAction(def));
			var.addText("[/#noparse][/#if]");
		}else{
			var.add(createQueryAction(def));
		}
		return var;
	}
	
	private static Element createNewAction(BizDataDef def){
		Element action = DocumentHelper.createElement("action");//TODO:
		action.addAttribute("direct-execute", "true");//TODO:
		action.addAttribute("process", "/SA/task/workRecord/workRecordProcess");//TODO:
		action.addAttribute("activity", "mainActivity");//TODO:
		action.addAttribute("name", def.getCreatorAction());

		Element parameters = action.addElement("parameters");
		//parameters.addNamespace("xbiz", "http://www.justep.com/xbiz#");
		
		Element parameter = parameters.addElement("parameter");
		parameter.addAttribute("name", "table");
		
		//TODO: use-namespace = true
		//Element table = parameter.addElement(new QName("table", new Namespace("xbiz", "http://www.justep.com/xbiz#")));
		Element table = parameter.addElement("table");
		Element rows = table.addElement("rows");
		
		createUserData(rows, "concept", def.getConcept());
		createUserData(rows, "concept-alias", def.getConcept());//TODO:
		createUserData(rows, "id-column-name", def.getIdColumnName());//TODO:
		createUserData(rows, "id-column-type", "String");
		createUserData(rows, "id-column-define", def.getConcept());
		createUserData(rows, "relations", getRelations(def));
		createUserData(rows, "relation-alias", getRelationAlias(def));
		createUserData(rows, "relation-types", getRelationTypes(def));
		createUserData(rows, "model", "/SA/task/data");//TODO:
		createUserData(rows, "update-mode", "whereVersion");

		Element variables = parameters.addElement("parameter");
		variables.addAttribute("name", "defaultValues");
		//TODO:
		//Element map = variables.addElement(new QName("map", new Namespace("xbiz", "http://www.justep.com/xbiz#")));
		Element map = variables.addElement("map");

		Element tParameter = action.addElement("translate-parameter");
		tParameter.addAttribute("data-type", "row-list");//TODO:
		tParameter.addAttribute("use-namespace", "false");
		
		return action;
	}
	private static String getRelations(BizDataDef def){
		Iterator<String> i = def.getRelationList().iterator();
		StringBuffer bf = new StringBuffer();
		while (i.hasNext()){
			QRelation r = def.getRelationRef(i.next());
			bf.append("," + BizDataUtils.getQRelationFullName(r));
		}
		return bf.delete(0, 1).toString();
	}
	private static String getRelationAlias(BizDataDef def){
		Iterator<String> i = def.getRelationList().iterator();
		StringBuffer bf = new StringBuffer();
		while (i.hasNext()){
			QRelation r = def.getRelationRef(i.next());
			bf.append("," + r.getAlias());
		}
		return bf.delete(0, 1).toString();
	}
	private static String getRelationTypes(BizDataDef def){
		Iterator<String> i = def.getRelationList().iterator();
		StringBuffer bf = new StringBuffer();
		while (i.hasNext()){
			QRelation r = def.getRelationRef(i.next());
			bf.append("," + def.getRelationDataType(r));
		}
		return bf.delete(0, 1).toString();
	}
	
	
	private static Element createUserData(Element rows, String name, String value){
		Element result = rows.addElement("userdata");
		result.addAttribute("name", name);
		result.addText(value);
		return result;
	}

	private static Element createQueryAction(BizDataDef def){
		Element action = DocumentHelper.createElement("action");
		action.addAttribute("direct-execute", "true");//TODO:
		action.addAttribute("process", "${params.form.input.parameters.process}");//TODO:
		action.addAttribute("activity", "${params.form.input.parameters.activity}");//TODO:
		action.addAttribute("name", def.getAction().getName());
		
		Element parameters = action.addElement("parameters");
		//parameters.addNamespace("xbiz", "http://www.justep.com/xbiz#");
		
		Element variables = parameters.addElement("parameter");
		variables.addAttribute("name", "variables");
		//Element map = variables.addElement(new QName("map", new Namespace("xbiz", "http://www.justep.com/xbiz#")));
		
		createParameter(parameters, "filter", "string", getFilterString(def));//TODO:
		createParameter(parameters, "offset", "integer", def.getOffset());
		createParameter(parameters, "limit", "integer", def.getLimit());
		createParameter(parameters, "columns", "string", join(def.getRelationList().iterator(), ",") + "," + def.getConcept());
		createParameter(parameters, "orderBy", "string", def.getOrderByDef());//TODO:
		createParameter(parameters, "distinct", "boolean", "false");//TODO:
		
		Element aggregateColumns = parameters.addElement("parameter");
		aggregateColumns.addAttribute("name", "aggregateColumns");
		
		Element tParameter = action.addElement("translate-parameter");
		tParameter.addAttribute("data-type", "row-list");//TODO:
		tParameter.addAttribute("use-namespace", "false");
		return action;
	}
	
	private static String getFilterString(BizDataDef def){
		if (def.getFilterDefList().isEmpty()) return "";
		Iterator<Element> iterator = def.getFilterDefList().iterator();
		String result = "(" + iterator.next().getText() + ")";
		while (iterator.hasNext()){
			result = result + "and (" + iterator.next().getText() + ")";
		}
		return result;
	}
	
	//TODO:
	private static String join(Iterator<String> iter, String delimiter) {
	    if (!iter.hasNext()) return "";
	    StringBuffer buffer = new StringBuffer(iter.next());
	    while (iter.hasNext()) buffer.append(delimiter).append(iter.next());
	    return buffer.toString();
	}	
	
	private static Element createParameter(Element parent, String name, String type, String value){
		Element result = parent.addElement("parameter");
		result.addAttribute("name", name);
		Element simple = result.addElement(new QName("simple", new Namespace("xbiz", "http://www.justep.com/xbiz#")));
		simple.addAttribute("type", "http://www.w3.org/2001/XMLSchema#"+type);
		simple.addText(value);
		return result;
	}
}