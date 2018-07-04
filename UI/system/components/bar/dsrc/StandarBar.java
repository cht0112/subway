import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.ui.system.UISystemMessages;
import com.justep.ui.system.component.BaseBar;
import com.justep.ui.system.component.data.DataDef;
import com.justep.ui.system.component.data.DataUtils;

import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.Utils;
import com.justep.xbl.runtime.XBLException;


public class StandarBar extends BaseBar {
	private static final String XUI_INSERT = "insert-item"; // 新建
	private static final String XUI_FILTER_PRO = "filter-pro-item"; // 过虑增强
	private static final String XUI_FILTER = "filter-item"; // 过虑
	private static final String XUI_FILTER_PATTERN = "filter-pattern-item"; // 使用过滤模式
	private static final String XUI_DELETE = "delete-item"; // 删除
	private static final String XUI_REFRESH = "refresh-item"; // 刷新主data
	private static final String XUI_NEXT_PAGE = "next-page-item"; // 查询下一页数据
	private static final String XUI_ALL_PAGE = "all-page-item"; // 查询全部数据

	private static final String XUI_SAVE = "save-item"; // 保存(批)

	private static final String XUI_FIRST = "first-item";
	private static final String XUI_LAST = "last-item";
	private static final String XUI_NEXT = "next-item";
	private static final String XUI_PRE = "pre-item";

	private static final String XUI_CUSTOM_PAGE = "custom-page-item";

	private static final String XUI_COLLAPSE_ALL = "collapse-all-item"; // 折叠所有节点
	private static final String XUI_COLLAPSE_THIS = "collapse-this-item"; // 折叠当前节点
	private static final String XUI_EXPAND_ALL = "expand-all-item"; // 展开所有节点
	private static final String XUI_EXPAND_THIS = "expand-this-item"; // 展开当前节点
	private static final String XUI_CREATE_NEW_BROTHER = "create-new-brother-item"; // 新建兄弟节点
	private static final String XUI_CREATE_NEW_CHILD = "create-new-child-item"; // 新建子节点
	private static final String XUI_CREATE_NEW_ROOT = "create-new-root-item"; // 新建一个根节点

	private DataDef oDataDef;
	private Element barDef;
	private String dataId;
	private String modelId;
	private String Id;

	@SuppressWarnings({ "rawtypes", "unchecked" })
	protected void preProcess(Element bound, Map context) throws XBLException {
		init(bound, context);
	}

	protected HashMap<String, BarItemDef> getBarItemDefs() {
		HashMap<String, BarItemDef> result = new HashMap<String, BarItemDef>();
		result.put(XUI_INSERT, new BarItemDef(XUI_INSERT, "insert.gif", "un_insert.gif",
				"justep.xbl('" + dataId + "').newData(); "));
		result.put(XUI_SAVE, new BarItemDef(XUI_SAVE, "save.gif", "un_save.gif",
				"justep.xbl('" + dataId + "').saveData(); "));
		result.put(XUI_DELETE, new BarItemDef(XUI_DELETE, "remove.gif", "un_remove.gif",
				"justep.xbl('" + dataId + "').deleteData(); "));
		result.put(XUI_REFRESH, new BarItemDef(XUI_REFRESH, "refresh.gif", "un_refresh.gif",
				"justep.xbl('" + dataId + "').refreshData(); "));
		result.put(XUI_FILTER_PRO, new BarItemDef(XUI_FILTER_PRO, "search.gif", "un_search.gif",
		""));
		result.put(XUI_FILTER, new BarItemDef(XUI_FILTER, "search.gif", "un_search.gif",
				""));
		result.put(XUI_FILTER_PATTERN, new BarItemDef(XUI_FILTER_PATTERN, "filter-dropdown.gif", "filter-dropdown.gif",
				""));
		result.put(XUI_FIRST, new BarItemDef(XUI_FIRST, "first.gif", "un_first.gif",
				"justep.xbl('" + dataId + "').first(); "));
		result.put(XUI_PRE, new BarItemDef(XUI_PRE, "pre.gif", "un_pre.gif",
				"justep.xbl('" + dataId + "').pre(); "));
		result.put(XUI_NEXT, new BarItemDef(XUI_NEXT, "next.gif", "un_next.gif",
				"justep.xbl('" + dataId + "').next(); "));
		result.put(XUI_LAST, new BarItemDef(XUI_LAST, "last.gif", "un_last.gif",
				"justep.xbl('" + dataId + "').last(); "));		
		result.put(XUI_CUSTOM_PAGE, new BarItemDef(XUI_CUSTOM_PAGE, "", "",""));		
		result.put(XUI_NEXT_PAGE, new BarItemDef(XUI_NEXT_PAGE, "next-page.gif", "un_next-page.gif",
				"justep.xbl('" + dataId + "').loadNextPageData(); "));
		result.put(XUI_ALL_PAGE, new BarItemDef(XUI_ALL_PAGE, "last-page.gif", "un_last-page.gif",
				"justep.xbl('" + dataId + "').loadAllPageData(); "));
		result.put(XUI_CREATE_NEW_CHILD, new BarItemDef(XUI_CREATE_NEW_CHILD, "addchild.gif", "un_addchild.gif",
				"var data = justep.xbl('" + dataId + "');data.newData(0,data.getCurrentRowId());"));
		result.put(XUI_CREATE_NEW_BROTHER, new BarItemDef(XUI_CREATE_NEW_BROTHER, "addbrother.gif", "un_addbrother.gif",
				"var data = justep.xbl('" + dataId + "');var pId = data.getStore().getParentId(data.getCurrentRowId());data.newData(0,pId);"));
		result.put(XUI_CREATE_NEW_ROOT, new BarItemDef(XUI_CREATE_NEW_ROOT, "addroot.gif", "un_addroot.gif",
				"justep.xbl('" + dataId + "').newData(); "));
		result.put(XUI_EXPAND_THIS, new BarItemDef(XUI_EXPAND_THIS, "expandthis.gif", "un_expandthis.gif",
				"justep.xbl('" + dataId + "').expandRow(); "));
		result.put(XUI_EXPAND_ALL, new BarItemDef(XUI_EXPAND_ALL, "expandall.gif", "un_expandall.gif",
				"justep.xbl('" + dataId + "').expandAll(); "));
		result.put(XUI_COLLAPSE_THIS, new BarItemDef(XUI_COLLAPSE_THIS, "collapsethis.gif", "un_collapsethis.gif",
				"justep.xbl('" + dataId + "').collapseRow(); "));
		result.put(XUI_COLLAPSE_ALL, new BarItemDef(XUI_COLLAPSE_ALL, "collapseall.gif", "un_collapseall.gif",
				"justep.xbl('" + dataId + "').collapseAll(); "));
		return result;
	}

	protected String getDefaultReadonly(String name, String readonly, BarItemDef itemDef){
		return getActionReadonlyXpath(name, readonly);
	}
	
	protected Element buildItem(Element item, BarItemDef itemDef) throws XBLException {
		// wxm 判断是否使用了查询按钮
		generateFilterDialog(item, itemDef);
		generateFilterPatternDataAndMenu(item, itemDef);
		generateFilterPatternDataAndMenuAndDlg(item, itemDef);
		// end

		String barItemName = item != null ? item.attributeValue(new QName("name")) : "";

		// lzg 通用分页工具条特殊判断
		if (XUI_CUSTOM_PAGE.equals(barItemName))
			return generateCustomPageItem(item, itemDef);
		else
			return super.buildItem(item, itemDef);
	}

	private Element generateCustomPageItem(Element item, BarItemDef itemDef) throws XBLException {
		/*
		 * <xhtml:div style="width:100%;height:24px;" data='@dataid' component="/UI/system/components/pageNavigator.xbl.xml#pageNavigator"/>
		 */
		Element toolbarItem = DocumentHelper.createElement(new QName("toolbar-item", XMLConstants.XUI_NAMESPACE));
		String id = item.attributeValue("id");
		if(id == null){
			id = generateID("item");
		}
		Element divTag = toolbarItem.addElement(new QName("div", XMLConstants.XHTML_NAMESPACE));
		divTag.addAttribute("component", "/UI/system/components/pageNavigator.xbl.xml#pageNavigator");
		divTag.addAttribute("data", dataId);
		String s = item.attributeValue("page-count");
		if (!DataUtils.isStringEmpty(s)) divTag.addAttribute("page-count", s);
		s = item.attributeValue("items");
		if (!DataUtils.isStringEmpty(s)) divTag.addAttribute("items", s);
		divTag.addAttribute("mode", btnDisplayMode);
		return toolbarItem;
	}
	
	private void init(Element bound, Map<String, Object> context) throws XBLException {
		this.Id = bound.attributeValue("id");
		if (DataUtils.isStringEmpty(this.Id))
			this.Id = "bar_" + Utils.generateGlobalId();
		this.barDef = bound;
		this.dataId = this.barDef.attributeValue("data");
		this.oDataDef = DataUtils.getDataDef(dataId, context);
		if (null == this.oDataDef) {
			Element dataE = (Element) bound.getDocument().selectSingleNode("//*[@id='" + dataId + "']");
			if (null == dataE) {
				throw XBLException.create(UISystemMessages.XBL_NAVIGATORBAR_DATA_DEFINE_ERROR, dataId);
			}

			try {
				this.oDataDef = new DataDef(dataE, context);
			} catch (Exception e) {
				throw XBLException.create(UISystemMessages.XBL_NAVIGATORBAR_DATA_DEFINE_ERROR, dataId);
			}
		}
		this.modelId = this.oDataDef.getModelId();
		this.model = getModel(this.modelId);
	}

	// wxm 如果使用了查询按钮，就生成查询对话框组件
	private void generateFilterDialog(Element barItem, BarItemDef itemDef) {
		String barItemName = barItem.attributeValue(new QName("name"));
		if (XUI_FILTER.equals(barItemName)) {
			String dialogId = "filter-dialog-" + UUID.randomUUID().toString();
			Element dialogE = DocumentHelper.createElement(new QName("div", XMLConstants.XHTML_NAMESPACE));
			dialogE.addAttribute(new QName("component"), "/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog");
			dialogE.addAttribute(new QName("id"), dialogId);
			Element inBodyE = DocumentHelper.createElement(new QName("inbody", XMLConstants.XUI_NAMESPACE));
			inBodyE.add(dialogE);
			root.add(inBodyE);
			
			itemDef.script = "justep.xbl('"+dialogId+"').show('"+dataId+"');";
		}
	}

	private void generateFilterPatternDataAndMenu(Element barItem, BarItemDef itemDef) {
		String barItemName = barItem.attributeValue(new QName("name"));
		if (XUI_FILTER_PATTERN.equals(barItemName)) {
			String componentId = "filter-pattern-" + UUID.randomUUID().toString();
			Element filterPatternE = DocumentHelper.createElement(new QName("div", XMLConstants.XHTML_NAMESPACE));
			filterPatternE.addAttribute(new QName("component"), "/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern");
			filterPatternE.addAttribute(new QName("id"), componentId);
			Element inBodyE = DocumentHelper.createElement(new QName("inbody", XMLConstants.XUI_NAMESPACE));
			inBodyE.add(filterPatternE);
			root.add(inBodyE);

			itemDef.script = "justep.xbl('"+componentId+"').show('"+dataId+"', event.target||event.srcElement);";
		}
	}

	private void generateFilterPatternDataAndMenuAndDlg(Element barItem, BarItemDef itemDef) {
		String barItemName = barItem.attributeValue(new QName("name"));
		if (XUI_FILTER_PRO.equals(barItemName)) {
			String componentId = "filter-pattern-" + UUID.randomUUID().toString();
			Element filterPatternE = DocumentHelper.createElement(new QName("div", XMLConstants.XHTML_NAMESPACE));
			filterPatternE.addAttribute(new QName("component"), "/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern");
			filterPatternE.addAttribute(new QName("id"), componentId);
			Element inBodyE = DocumentHelper.createElement(new QName("inbody", XMLConstants.XUI_NAMESPACE));
			inBodyE.add(filterPatternE);
			root.add(inBodyE);

			String dialogId = "filter-dialog-" + UUID.randomUUID().toString();
			Element dialogE = DocumentHelper.createElement(new QName("div", XMLConstants.XHTML_NAMESPACE));
			dialogE.addAttribute(new QName("component"), "/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog");
			dialogE.addAttribute(new QName("id"), dialogId);
			inBodyE.add(dialogE);

			itemDef.script = "justep.xbl('"+componentId+"').show('"+dataId+"', event.target||event.srcElement, '"+dialogId+"');";
		}
	}
	// end

	private String getCanDoText(String name) {
		return "not(call('justep.XData.canDo','" + this.dataId + "','" + name + "'))";
	}

	private String getActionReadonlyXpath(String actionName, String readonly) {
		String result = null;
		if (XUI_INSERT.equalsIgnoreCase(actionName)) {
			String s = getCanDoText("Insert");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_SAVE.equalsIgnoreCase(actionName)) {
			String s = getCanDoText("Save");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_DELETE.equalsIgnoreCase(actionName)) {
			String s = getCanDoText("Delete");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_FIRST.equalsIgnoreCase(actionName)) {
			String s = getCanDoText("First");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_PRE.equalsIgnoreCase(actionName)) {
			String s = getCanDoText("Pre");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_NEXT.equalsIgnoreCase(actionName)) {
			String s = getCanDoText("Next");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_LAST.equalsIgnoreCase(actionName)) {
			String s = getCanDoText("Last");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_NEXT_PAGE.equalsIgnoreCase(actionName)) {
			String s = getCanDoText("NextPage");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_ALL_PAGE.equalsIgnoreCase(actionName)) {
			String s = getCanDoText("AllPage");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_CREATE_NEW_CHILD.equalsIgnoreCase(actionName)) {
			String s = "-1>=index('" + this.dataId + "')";
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else if (XUI_CREATE_NEW_BROTHER.equalsIgnoreCase(actionName)) {
			String s = "-1>=index('" + this.dataId + "')";
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or (" + readonly + ")";
		} else result = readonly;

		return result;
	}

}
