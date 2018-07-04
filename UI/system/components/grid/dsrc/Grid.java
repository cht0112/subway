import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.QName;

import com.justep.ui.system.component.data.DataDef;
import com.justep.ui.system.component.data.DataUtils;
import com.justep.ui.system.component.data.bizdata.BizDataUtils;

import com.justep.design.model.kql.QRelation;
import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class Grid implements JavaTemplate {
	private static final String CUSTOM_FILTER = "#custom_filter";
	public static final Namespace XHTML_NAMESPACE = new Namespace("xhtml",
	"http://www.w3.org/1999/xhtml");

	private DataDef dataDef;
	private Element gridDef;
	private Element gridDataDef;
	private Element rootE;
	private Element inBodyE;
	private Map<String, Object> context;
	private String dataId;
	private String systemColumns;
	private List<Element> columnDefs = null;
	
	@SuppressWarnings({ "rawtypes", "unused", "unchecked" })
	public Element execute(Element bound, Map context) throws XBLException {
		
		String component = bound.attributeValue("component");
		init(bound, context);
		build();
		return this.rootE;
	}

	@SuppressWarnings("unchecked")
	private void init(Element bound, Map<String, Object> context) {
		this.gridDef = bound;
		this.dataId = this.gridDef.attributeValue("data");
		this.rootE = DocumentHelper.createElement("root");
		this.inBodyE = DocumentHelper.createElement(DataUtils.INBODY_QNAME);
		this.rootE.add(this.inBodyE);
		this.context = context;
		this.dataDef = DataUtils.getDataDef(this.dataId, this.context);
		this.gridDataDef = this.dataDef.getDataDef();

		columnDefs = this.gridDef.elements(new QName("column", XMLConstants.XUI_NAMESPACE));
		systemColumns = "";
	}

	private void build() {
		//处理grid组件
		Element gridE = (Element) this.gridDef.clone();
		build(gridE);
		this.rootE.add(gridE);
	}

	private void build(Element gridE) {
		//修改grid组件的属性
		gridE.remove(gridE.attribute(new QName("component")));
		gridE.setQName(new QName("grid", DataUtils.XFORMS_NAMESPACE));
		gridE.addAttribute(new QName("data"), this.dataId);

		//延迟数据加载
		if (dataDef.isTree() && BizDataUtils.isDelayLoad(this.gridDataDef)) {
			gridE.addAttribute(new QName("delay"), "true");
			buildDelayLoadDataEvent(gridE);
			buildRowAfterRenderEvent(gridE, inBodyE);
		}else 
			gridE.addAttribute(new QName("delay"), "false");
		//		if (UIRules.isTreeData(this.gridDataDef) && "true".equalsIgnoreCase(gridE.attributeValue("drag")))
		//			buildDragAfterEvent(gridE, rootE);

		//设置右键选中
		if (null == gridE.attribute(new QName("right-click-selected")))
			gridE.addAttribute(new QName("right-click-selected"), "true");
		//列处理
		buildColumn(gridE, rootE);
		//图标处理
		buildImg(gridE, inBodyE);
		//菜单处理
		//buildMenu(gridE, rootE);
		//处理grid内部使用的组件
		buildEditor(gridE, inBodyE);
	}

	/*
	private Element getExpandEvent(Element gridE, String eventName) {
		List<Element> actionList = gridE.elements(new QName("action",DataUtils.XFORMS_NAMESPACE));
		for (Element e : actionList){
			if (eventName.equals(e.attributeValue(new QName("event", XFormsConstants.XML_EVENTS_NAMESPACE))))
				return e;
		}
		return null;
	}
	*/

	/**
	 * 生成分步加载数据的逻辑
	 * @param rootE
	 */
	private void buildDelayLoadDataEvent(Element gridE) {
		if (!dataDef.isTree())
			return;
		/*
		Element eventE = DataUtils.createAction("xforms-row-expand", null);
		
		//提供展开之前action代码
		Element beforeEventE = getExpandEvent(gridE, "xforms-row-expand-before");
		if (beforeEventE != null){
			Element eventCloneE = (Element)beforeEventE.clone();
			gridE.remove(beforeEventE);
			List<Element> list = eventCloneE.elements();
			if (list!=null){
				for (Element e : list)
					eventE.add((Element)e.clone());
			}
		}

		Element oldEventE = getExpandEvent(gridE, "xforms-row-expand");
		if(oldEventE==null || !"true".equalsIgnoreCase(oldEventE.attributeValue(new QName("replace")))){
			String content = "var oData = justep.XData.$('"+this.dataId+"');"
							+ "var eventData = ctx.getEvent().getData();"
							+ "var rowID = eventData['rowId'];"
							+ "var delay = eventData['delay'];"
							+ "var control = eventData['control'];"
							+ "if(oData && delay){ " 
							+ "oData.loadTreeData(rowID, function(){control.setNodeLoadSuccess(rowID);});"
							+ "}";
			Element scriptE = DataUtils.createScript(content);
			eventE.add(scriptE);
		}
		
		//复制旧的action代码
		if (oldEventE != null){
			Element eventCloneE = (Element)oldEventE.clone();
			gridE.remove(oldEventE);
			List<Element> list = eventCloneE.elements();
			if (list!=null){
				for (Element e : list)
					eventE.add((Element)e.clone());
			}
		}
		
		gridE.add(eventE);
		*/
		String oldFunc = gridE.attributeValue(new QName("onRowExpand"));
		String callback = createRowExpandFunc(inBodyE, oldFunc);
		if (!DataUtils.isStringEmpty(callback))
			gridE.addAttribute(new QName("onRowExpand"), callback);
	}

	private String createRowExpandFunc(Element rootE, String oldFunc) {
		String funcName = "func_" + String.valueOf(java.lang.Math.abs(java.util.UUID.randomUUID().toString().hashCode()));
		String script = "function " + funcName + "(data){" + "var oData = justep.XData.$('" + this.dataId + "');" + "var eventData = data;"
				+ "var rowID = eventData['rowId'];" + "var delay = eventData['delay'];" + "var control = eventData['source'];"
				+ "if(delay){if(oData){ " + "oData.loadTreeData(rowID, function(){control.setNodeLoadSuccess(rowID);});"
				+ (DataUtils.isStringEmpty(oldFunc) ? "" : oldFunc + "(data);") + "}}}";
		Element funcE = DataUtils.createXHTMLScript(script);
		rootE.add(funcE);
		return funcName;
	}

	/**
	 * 生成控制加载数据的图标
	 * @param gridE
	 */
	private void buildRowAfterRenderEvent(Element gridE, Element rootE) {
		if (!dataDef.isTree())
			return;
		String nodeKindPath = BizDataUtils.getNodeKindPath(this.gridDataDef);
		if (!DataUtils.isStringEmpty(nodeKindPath)) {
			/*	lzg，10.3.24，目前不再使用这个时机进行树的子判断	
			String afterFillRowCallback = gridE.attributeValue(new QName("after-fill-row-callback"));

			afterFillRowCallback = createAfterFillRowFunc(afterFillRowCallback, rootE);
			if (!UIRules.isStringEmpty(afterFillRowCallback))
				gridE.addAttribute(new QName("after-fill-row-callback"), afterFillRowCallback);
			 */
			String callback = createHasChildrenFunc(rootE);
			if (!DataUtils.isStringEmpty(callback))
				gridE.addAttribute(new QName("onRowHasChildren"), callback);
		}
	}

	private String createHasChildrenFunc(Element rootE) {
		String funcName = "func_" + String.valueOf(java.lang.Math.abs(java.util.UUID.randomUUID().toString().hashCode()));
		String script = "function " + funcName + "(data){var instance = data.instance;" + "var grid = data.grid;var cell = data.cell;"
				+ "var nodeKind =cell.getValueByColId(instance.nodeKindPath);" + "return !grid.isLeafNode(nodeKind);}";
		Element funcE = DataUtils.createXHTMLScript(script);
		rootE.add(funcE);
		return funcName;
	}

	//	/**
	//	 * 生成控制加载数据的图标
	//	 * @param gridE
	//	 */
	//	private void buildRowAfterRenderEvent(Element gridE, Element rootE) {
	//		String nodeKindPath = BizDataUtils.getNodeKindPath(this.gridDataDef);
	//		if (!DataUtils.isStringEmpty(nodeKindPath)) {
	//			String afterFillRowCallback = gridE.attributeValue(new QName("after-fill-row-callback"));
	//
	//			afterFillRowCallback = createAfterFillRowFunc(afterFillRowCallback, rootE);
	//			if (!DataUtils.isStringEmpty(afterFillRowCallback))
	//				gridE.addAttribute(new QName("after-fill-row-callback"), afterFillRowCallback);
	//		}
	//	}
	//	
	//	private String createAfterFillRowFunc(String afterFillRowCallback,
	//			Element rootE) {
	//		String funcName = "func_"
	//				+ String.valueOf(java.lang.Math.abs(java.util.UUID.randomUUID()
	//						.toString().hashCode()));
	//		String script = "function "
	//				+ funcName
	//				+ "(data){var instance = data.instance;"
	//				+ "var grid = data.grid;var rowId = data.rowId;"
	//				+ "var nodeKind = grid.getValueById(rowId,instance.nodeKindPath);"
	//				+ "if (grid.isLeafNode(nodeKind)) data.control.setNodeLoadSuccess(rowId);"
	//				+ (DataUtils.isStringEmpty(afterFillRowCallback) ? ""
	//						: afterFillRowCallback + "(data);") + "}";
	//		Element funcE = DataUtils.createXHTMLScript(script);
	//		rootE.add(funcE);
	//		return funcName;
	//	}

	@SuppressWarnings("unchecked")
	private void clsColumn(Element gridE) {
		List<Element> columns = gridE.elements(new QName("column", XMLConstants.XUI_NAMESPACE));
		if (columns != null) {
			for (Element itemE : columns)
				gridE.remove(itemE);
		}
	}

	private Element getColumnDef(String relation) {
		if (columnDefs == null)
			return null;
		for (Element columnDefE : columnDefs) {
			String ref = columnDefE.attributeValue(new QName("ref"));
			if (relation.equals(DataUtils.toLocalName(ref)))
				return (Element) columnDefE.clone();
		}
		return null;
	}

	private void buildColumn(Element gridE, Element rootE) {
		clsColumn(gridE);

		//按grid的顺序进行处理
		List<String> relations = new ArrayList<String>();
		if (columnDefs != null)
			for (Element columnDefE : columnDefs) {
				String ref = columnDefE.attributeValue(new QName("ref"));
				relations.add(ref);
			}

		//支持主从的数据filter
		Element masterDefE = dataDef.getMasterDef();
		if (null != masterDefE && !DataUtils.isStringEmpty(masterDefE.attributeValue("data"))) {
			String relation = masterDefE.attributeValue("relation");
			relation = DataUtils.toLocalName(relation);
			if (!Grid.isExistRelation(relation, relations))
				relations.add(relation);
		}

		//增加其他的relation
		String childrenPath = BizDataUtils.getChildrenPath(this.gridDataDef);
		String childrenRelation = DataUtils.XpathToLocalName(childrenPath);
		List<String> temps = this.getDataRelations();
		for (String s : temps) {
			s = DataUtils.toLocalName(s);
			if (!Grid.isExistRelation(s, relations) && !s.equals(childrenRelation))
				relations.add(s);
		}

		//生成对象属性的relation
		//		List<Element> objRelationDefs = UIRules.getDataObjectRelations(this.gridDataDef);
		//		for(Element objRelationDef:objRelationDefs){
		//			String s = UIRules.getObjectRelationName(objRelationDef);
		//			if (!Grid.isExistRelation(s, relations))
		//				relations.add(s);
		//		}

		//增加计算字段的规则处理
		List<Element> calculateDefs = dataDef.getCalculateRelationDefList();
		if (null != calculateDefs) {
			for (Element calculateItem : calculateDefs) {
				String s = calculateItem.attributeValue(new QName("relation"));
				if (!Grid.isExistRelation(s, relations))
					relations.add(s);
			}
		}

		int columnCount = 0;
		for (String relation : relations) {
			Element columnE = createColumn(relation, "");
			if (columnE != null) {
				gridE.add(columnE);
				columnCount++;
			}
		}
		
		//创建空白填充列
		String spaceColumn = gridE.attributeValue("space-column");
		if(!"false".equalsIgnoreCase(spaceColumn)){
			Element columnE = DocumentHelper.createElement(new QName("column", DataUtils.XFORMS_NAMESPACE));
			columnE.addAttribute(new QName("ref"), "space-column");
			columnE.addAttribute(new QName("width"), "*");
			gridE.add(columnE);
		}

		//没有列定义时自动生成一列
		if (columnCount == 0) {
			if (!DataUtils.isStringEmpty(systemColumns)) {
				String[] sysCols = systemColumns.split(",");
				String columnName = sysCols[0];
				Element columnE = DocumentHelper.createElement(new QName("column", DataUtils.XFORMS_NAMESPACE));
				columnE.addAttribute(new QName("ref"), columnName);
				gridE.add(columnE);
				systemColumns = "";
				for (int i = 1; i < sysCols.length; i++)
					systemColumns = !DataUtils.isStringEmpty(systemColumns) ? systemColumns + "," + sysCols[i] : sysCols[i];
			} else
				throw new UnsupportedOperationException("grid组件没有列定义,grid:" + this.gridDef.asXML());
		}

		if (!DataUtils.isStringEmpty(systemColumns))
			gridE.addAttribute(new QName("system-columns"), systemColumns);
	}

	public static boolean isExistRelation(String relation, List<String> relationList) {
		if (DataUtils.isStringEmpty(relation) || relationList == null || relationList.size() <= 0)
			return false;
		relation = DataUtils.toLocalName(relation);
		for (String s : relationList) {
			if (!DataUtils.isStringEmpty(s) && relation.equals(DataUtils.toLocalName(s)))
				return true;
		}
		return false;
	}

	private Element createColumn(String relation, String filterFuncName) {
		relation = DataUtils.toLocalName(relation);
		Element columnE = getColumnDef(relation);
		if (columnE != null) {
			String w = columnE.attributeValue("width");
			if(!DataUtils.isStringEmpty(w)){
				w = w.trim().toLowerCase();
				if(w.endsWith("px")) w = w.substring(0, w.length()-2);
				columnE.addAttribute("width", w);
			}
			columnE.setQName(new QName("column", DataUtils.XFORMS_NAMESPACE));
			columnE.addAttribute(new QName("ref"), relation);
			if ((CUSTOM_FILTER.equals(columnE.attributeValue(new QName("filter"))) || CUSTOM_FILTER
					.equals(columnE.attributeValue(new QName("label"))))
					&& !DataUtils.isStringEmpty(filterFuncName))
				columnE.addAttribute(new QName("onFilter"), filterFuncName);
		} else {
			//支持主从的数据filter
			Element masterDefE = dataDef.getMasterDef();
			if (null != masterDefE && null != masterDefE.attribute("data") && null != masterDefE.attribute("relation")) {
				String s = masterDefE.attributeValue("relation");
				s = DataUtils.toLocalName(s);
				if (relation.equals(s)) {
					columnE = DocumentHelper.createElement(new QName("column", DataUtils.XFORMS_NAMESPACE));
					columnE.addAttribute(new QName("ref"), relation);
					columnE.addAttribute(new QName("_system_invisible"), "true");
					columnE.addAttribute(new QName("label"), relation);
					return columnE;
				}
			}

			if(!dataDef.isidColumn(relation))
				systemColumns = DataUtils.isStringEmpty(systemColumns) ? relation : systemColumns + "," + relation;
			return null;
			/*
			 *系统隐藏列处理 
			columnE = DocumentHelper.createElement(new QName("column", Component.XXFORMS_NAMESPACE));
			columnE.addAttribute(new QName("ref"), relation);
			columnE.addAttribute(new QName("_system_invisible"), "true");
			*/
		}
		//不存在label属性自动获取relation的label定义
		if (null == columnE.attribute(new QName("label"))) {
			columnE.addAttribute(new QName("label"), getBizRelationLable(relation));
		}
		return columnE;
	}

	private String getBizRelationLable(String relation) {
		String result = relation;

		QRelation r = dataDef.getRelationRef(relation);
		if (null != r) {
			String label = r.getLabel();
			if (!DataUtils.isStringEmpty(label))
				result = label;
		}
		return result;
	}

	//生成树的图标控制
	@SuppressWarnings("unchecked")
	private void buildImg(Element gridE, Element rootE) {
		String nodeImgCallback = gridE.attributeValue(new QName("onShowNodeImg"));
		//已经定义回调不进行处理
		if (!DataUtils.isStringEmpty(nodeImgCallback))
			return;

		List<Element> imgList = gridE.elements(new QName("nodeimg", DataUtils.XFORMS_NAMESPACE));
		if (imgList != null && imgList.size() > 0) {
			nodeImgCallback = createNodeImgFunc(imgList, rootE);
			if (!DataUtils.isStringEmpty(nodeImgCallback))
				gridE.addAttribute(new QName("onShowNodeImg"), nodeImgCallback);

			for (Element e : imgList)
				gridE.remove(e);
		}
	}

	@SuppressWarnings("unchecked")
	private void buildEditor(Element gridE, Element rootE) {
		List<Element> list =  new ArrayList<Element>();
		List<Element> columns = gridE.elements(new QName("column", DataUtils.XFORMS_NAMESPACE));
		if (columns != null) {
			for (Element itemE : columns){
				List<Element> eList = itemE.elements();
				if(null != eList && eList.size()>0){
					for(Element e : eList){
						list.add((Element)e.clone());
						itemE.remove(e);
					}
				}
			}
		}
		if(list.size()>0){
			Element editorE = DocumentHelper.createElement(new QName("div", XHTML_NAMESPACE));
			editorE.addAttribute("style", "display:none");
			for (Element itemE : list){
				editorE.add(itemE);
			}
			rootE.add(editorE);
		}
	}
	
	private String createNodeImgFunc(List<Element> imgList, Element rootE) {
		if (imgList != null) {
			String funcName = "func_" + String.valueOf(java.lang.Math.abs(java.util.UUID.randomUUID().toString().hashCode()));
			String script = "";

			for (Element e : imgList) {
				String src = e.attributeValue(new QName("src"));
				String filter = e.attributeValue(new QName("filter"));
				String filterCode = filter.replaceAll("'this.([^']*)'", "(\"$1\"==\"@rowid\"?data.rowId:data.grid.getValueById(data.rowId,\"$1\"))");
				String code = "if(" + filterCode + ") return '" + src + "';";
				script = !DataUtils.isStringEmpty(script) ? script + code : code;
			}

			Element funcE = DataUtils.createXHTMLScript("function " + funcName + "(data){var isRoot=data.grid._isVirtualRoot(data.rowId);" + script
					+ "return '';" + "}");
			rootE.add(funcE);
			return funcName;
		}
		return null;
	}

	private List<String> getDataRelations() {
		return dataDef.getRelationList();
	}
}
