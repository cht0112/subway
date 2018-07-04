import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;
import org.dom4j.io.SAXReader;

import com.justep.ui.system.UISystemMessages;
import com.justep.ui.system.component.data.DataDef;
import com.justep.ui.system.component.data.DataUtils;

import com.justep.ui.LanguageEngine;
import com.justep.ui.resources.ResourceManagerWrapper;
import com.justep.ui.xml.XMLConstants;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.Utils;
import com.justep.xbl.runtime.XBLException;

public class StandarBarReserved implements JavaTemplate {
	// private static final String COMPONENT_URL =
	// "/UI/system/components/toolbars.xbl.xml#toolbars";
	private static final String DEFAULT_BAR = "default";
	public static final String STANDARBAR_TEMPLATE_PATH = "/UI/system/components/bar/";
	public static final String STANDARBAR_TEMPLATE = "templateReserved.xml";
	private static final String PROCESS_FLAG = "_processed_";
	private static final String IMAGE_PATH = "img-path";
	// private static final String ROOT_NAME = "div";
	private static final String SEPARATOR_NAME = "separator";

	private static final String XUI_INSERT = "insert-item"; // 新建
	private static final String XUI_FILTER = "filter-item"; // 过虑
	private static final String XUI_USE_FILTER_PATTERN = "use-filter-pattern--item"; // 使用过滤模式
	private static final String XUI_DELETE = "delete-item"; // 删除
	private static final String XUI_REFRESH = "refresh-item"; // 刷新主data
	private static final String XUI_ADD_NEXT_PAGE = "add-next-page-item"; // 查询下一页数据
	private static final String XUI_ALL_PAGE_DATA = "all-page-data-item"; // 查询全部数据
	private static final String XUI_DATA_UP = "data-up-item"; // 数据记录上移
	private static final String XUI_DATA_DOWN = "data-down-item"; // 数据记录下移

	private static final String XUI_SAVE = "save-item"; // 保存(批)

	private static final String XUI_LOAD_SUB_DATA = "load-sub-data-item"; // 加载子window的数据

	private static final String XUI_FIRST_RECORD = "first-record-item";
	private static final String XUI_LAST_RECORD = "last-record-item";
	private static final String XUI_NEXT_RECORD = "next-record-item";
	private static final String XUI_PRE_RECORD = "pre-record-item";

	private static final String XUI_ENTER_CHILD = "enter-child-item";
	private static final String XUI_ENTER_PARENT = "enter-parent-item";

	private static final String XUI_FIRST_PAGE = "first-page-item";
	private static final String XUI_LAST_PAGE = "last-page-item";
	private static final String XUI_NEXT_PAGE = "next-page-item";
	private static final String XUI_PRE_PAGE = "pre-page-item";
	private static final String XUI_CUR_PAGE = "cur-page-item";
	private static final String XUI_CUSTOM_PAGE = "custom-page-item";

	private static final String XUI_COLLAPSE_ALL_NODE = "collapse-all-node-item"; // 折叠所有节点
	private static final String XUI_COLLAPSE_THIS_NODE = "collapse-this-node-item"; // 折叠当前节点
	private static final String XUI_EXPAND_ALL_NODE = "expand-all-node-item"; // 展开所有节点
	private static final String XUI_EXPAND_THIS_NODE = "expand-this-node-item"; // 展开当前节点
	private static final String XUI_CREATE_NEW_BROTHER_NODE = "create-new-brother-node-item"; // 新建兄弟节点
	private static final String XUI_CREATE_NEW_CHILD_NODE = "create-new-child-node-item"; // 新建子节点
	private static final String XUI_CREATE_NEW_ROOT_NODE = "create-new-root-node-item"; // 新建一个根节点

	private DataDef oDataDef;
	private Element barDef;
	private Element rootE;
	private Map<String, Object> context;
	private String dataId;
	private String modelId;
	private String partId;
	private Element bindParentE;
	private String Id;

	// 保留原代码，新的first,pre,next,last长亮
	private static final String COLUMNIDS = "insert,save,delete,refresh,filter,first,pre,next,last,next-page,all-page,create-new-child,create-new-brother,create-new-root,expand-this,expand-all,collapse-this,collapse-all,enter-parent,enter-child";
	// private static final String COLUMNIDS =
	// "insert,save,delete,refresh,filter,next-page,all-page,create-new-child,create-new-brother,create-new-root,expand-this,expand-all,collapse-this,collapse-all,enter-parent,enter-child";

	private Document templateE = null;
	private boolean isCreateRefBind = false;

	private String getLanguage() {
		return (String) this.context.get("system.language");
	}

	/**
	 * 加载模板文件获取模板文件文档对象
	 * 
	 * @param templateName
	 * @return
	 */
	private Document getTemplate(String templateName, String path) {
		String url = LanguageEngine.getLocalsResource(path + templateName,
				getLanguage());
		SAXReader xmlReader = new SAXReader();

		try {
			Document template = xmlReader.read(ResourceManagerWrapper
					.instance().getContentAsStream(url));
			rewriteDataId(template);
			return template;
		} catch (DocumentException e) {
			throw new RuntimeException(e.getMessage());
		}
		/*
		 * ResourceManager rm = ResourceManagerWrapper.instance(); String
		 * realPath = getLanguage() == null ? rm.getRealPath(path +
		 * templateName) : rm.getRealPath(path + "locals/" + getLanguage() + "/"
		 * + templateName); File templateFile = new File(realPath);
		 * if(!templateFile.exists()){ realPath =
		 * rm.getRealPath(path+templateName); templateFile = new File(realPath);
		 * } try { URL url = templateFile.toURL(); SAXReader xmlReader = new
		 * SAXReader(); Document template = xmlReader.read(url);
		 * 
		 * rewriteDataId(template);
		 * 
		 * return template; } catch (Exception e) { throw new
		 * RuntimeException(e.getMessage()); }
		 */
	}

	private void rewriteDataId(Document doc) {
		List<?> elist = doc.selectNodes(".//*[@process='true']");
		for (Object i : elist) {
			Element e = (Element) i;
			String text = e.getText();

			text = text.replaceAll("@dataid", this.dataId);

			e.setText(text);

			text = e.attributeValue("data");
			if (!DataUtils.isStringEmpty(text)) {
				text = text.replaceAll("@dataid", this.dataId);
				e.addAttribute("data", text);
			}
		}
	}

	public Element execute(Element bound, Map context) throws XBLException {
		init(bound, context);
		build();
		return this.rootE;
	}

	private Document getTemplate() {
		if (templateE == null)
			templateE = getTemplate(STANDARBAR_TEMPLATE,
					STANDARBAR_TEMPLATE_PATH);
		return templateE;
	}

	private Element getConfigElement() {
		return getTemplate().getRootElement().element(new QName("config"));
	}

	private Element getTemplateElement() {
		return getTemplate().getRootElement().element(new QName("template"));
	}

	private String getTemplateParam(String name) {
		return getConfigElement().element(new QName(name)).getTextTrim();
	}

	private Element getDefaultBars() {
		return getConfigElement().element(new QName(DEFAULT_BAR));
	}

	private boolean isExistUserBar(Element componentE) {
		return true;
	}

	private Element getElementByName(Element barTemplate, String name) {
		return (Element) barTemplate.selectSingleNode("//.[@name='" + name
				+ "']");
	}

	private List<Element> getToolBarDefs(Element componentE) {
		if (componentE == null)
			componentE = this.barDef;

		Element e = (Element) componentE.clone();
		e.setName("group");

		int iCount = e.attributeCount();
		for (int i = iCount - 1; i >= 0; i--) {
			e.remove(e.attribute(i));
		}
		e.addAttribute("name", "navigator-bar");

		List<Element> result = new ArrayList<Element>();
		result.add(e);
		return result;
		// return getChildDefs(componentE, "group");
	}

	@SuppressWarnings("unchecked")
	private List<Element> getChildDefs(Element e, String name) {
		if (e == null)
			e = this.barDef;

		if (!DataUtils.isStringEmpty(name)) {
			List<Element> list = new ArrayList<Element>();
			List<Element> bars = e.elements(name);
			if (bars != null && bars.size() > 0)
				list.addAll(bars);
			// List bars = e.elements(new QName(name,
			// DataUtils.JUSTEP_NAMESPACE));
			// if (bars != null && bars.size() > 0)
			// list.addAll(bars);
			// bars = e.elements(new QName(name));
			// if (bars != null && bars.size() > 0)
			// list.addAll(bars);
			return list;
		} else {
			return e.elements();
		}
	}

	@SuppressWarnings("unchecked")
	private Element buildBarItem(Element barItemDef, Element barTemplate,
			String imgPath) {
		String barItemName = barItemDef != null ? barItemDef
				.attributeValue(new QName("name")) : "";

		if (SEPARATOR_NAME.equals(barItemDef.getName())
				|| SEPARATOR_NAME.equals(barItemName)) {
			Element e = (Element) barItemDef.clone();
			e.setQName(new QName("toolbar-separator",
					XMLConstants.XUI_NAMESPACE));
			e.addAttribute(new QName(PROCESS_FLAG), "true");
			return e;
		}

		if (barItemDef.elements() == null || barItemDef.elements().size() <= 0) {
			Element e = getElementByName(barTemplate, barItemName);
			if (null != e) {
				String s = barItemDef.attributeValue("readonly");
				if (!DataUtils.isStringEmpty(s))
					e.addAttribute("readonly", s);
				s = barItemDef.attributeValue("relevant");
				if (!DataUtils.isStringEmpty(s))
					e.addAttribute("relevant", s);
				// lzg 通用分页工具条特殊判断
				if (XUI_CUSTOM_PAGE.equals(barItemName)) {
					s = barItemDef.attributeValue("page-count");
					if (!DataUtils.isStringEmpty(s)) {
						Element temp = (Element) e
								.selectSingleNode("*[@component='/UI/system/components/pageNavigator.xbl.xml#pageNavigator']");
						if (null != temp)
							temp.addAttribute("page-count", s);
					}
				}
				List<?> es = e.elements();
				Element temp = es != null && es.size() > 0 ? (Element) es
						.get(0) : null;
				if (null != temp) {
					s = barItemDef.attributeValue("accesskey");
					if (!DataUtils.isStringEmpty(s))
						temp.addAttribute("accesskey", s);
					s = barItemDef.attributeValue("disabled");
					if (!DataUtils.isStringEmpty(s))
						temp.addAttribute("disabled", s);
				}
			}
			return e != null ? (Element) e.clone() : null;
		} else {
			String customAction = barItemDef.elements().size() > 0 ? "overwrite"
					: null;
			if (customAction != null) {
				Element template = getElementByName(barTemplate, barItemName);
				if (template != null) {
					String s = barItemDef.attributeValue("readonly");
					if (!DataUtils.isStringEmpty(s))
						template.addAttribute("readonly", s);
					s = barItemDef.attributeValue("relevant");
					if (!DataUtils.isStringEmpty(s))
						template.addAttribute("relevant", s);
					template = (Element) template.clone();
					Element trigger = template.element(new QName("trigger",
							DataUtils.XFORMS_NAMESPACE));
					Element action = null != trigger ? trigger
							.element(new QName("action",
									DataUtils.XFORMS_NAMESPACE)) : null;
					if (null != action) {
						List<Element> standard = ((Element) action.clone())
								.elements();
						if ("append".equals(customAction)) {
							action.clearContent();

							Element before = barItemDef.element("before");
							if ((before != null)
									&& (before.content().size() > 0)) {
								appendChild(action, before.elements());
							}
							appendChild(action, standard);
							Element after = barItemDef.element("after");
							if ((after != null) && (after.content().size() > 0)) {
								appendChild(action, after.elements());
							}
						} else if ("overwrite".equals(customAction)) {
							List list = barItemDef.elements();
							Element parentE = action.getParent();
							if(null==list || list.size()!=1 
									|| !new QName("action",DataUtils.XFORMS_NAMESPACE).equals(((Element)list.get(0)).getQName())
									|| null==((Element)list.get(0)).attribute(new QName("event",DataUtils.EVENT_NAMESPACE))){
								//lzg 2010.11 兼容老的格式
								parentE = action;
								parentE.clearContent();
							}else{
								parentE.remove(action);
							}
							if (list != null) {
								for (int i = 0; i < list.size(); i++) {
									Element e = (Element) list.get(i);
									if (!"before".equals(e.getName())
											&& !"after".equals(e.getName()))
										parentE.add((Element) e.clone());
								}
							}
						}
					}
					List<?> es = template.elements();
					Element temp = es != null && es.size() > 0 ? (Element) es
							.get(0) : null;
					if (null != temp) {
						s = barItemDef.attributeValue("accesskey");
						if (!DataUtils.isStringEmpty(s))
							temp.addAttribute("accesskey", s);
						s = barItemDef.attributeValue("disabled");
						if (!DataUtils.isStringEmpty(s))
							temp.addAttribute("disabled", s);
					}
					return template;
				}
			}

			Element e = (Element) barItemDef.clone();
			e.setQName(new QName("toolbar-item",
					XMLConstants.XUI_NAMESPACE));
			e.addAttribute(new QName(PROCESS_FLAG), "true");

			List<?> es = e.elements();
			Element temp = es != null && es.size() > 0 ? (Element) es.get(0)
					: null;
			if (null != temp) {
				String s = barItemDef.attributeValue("accesskey");
				if (!DataUtils.isStringEmpty(s))
					temp.addAttribute("accesskey", s);
				s = barItemDef.attributeValue("disabled");
				if (!DataUtils.isStringEmpty(s))
					temp.addAttribute("disabled", s);
			}

			return e;
		}
	}

	private void appendChild(Element container, List<Element> items) {
		for (Element item : items) {
			container.add((Element) item.clone());
		}
	}

	private Element buildBar(Element barDef, Element barTemplate, String imgPath) {
		// String barName = barDef != null ? barDef.attributeValue(new QName(
		// "name")) : "";
		String refPath = barDef != null ? barDef
				.attributeValue(new QName("ref")) : "";
		if (DataUtils.isStringEmpty(refPath)) {
			refPath = barDef != null ? barDef.attributeValue(new QName("ref"))
					: "";
		}

		List<Element> barItemDefList = getChildDefs(barDef, null);
		if (barItemDefList.size() > 0) {
			Element barE = DocumentHelper.createElement(new QName("toolbar",
					XMLConstants.XUI_NAMESPACE));

			for (Element barItemE : barItemDefList) {
				Element itemE = buildBarItem(barItemE, barTemplate, imgPath);
				if (itemE != null)
					barE.add(itemE);
			}

			if (!DataUtils.isStringEmpty(refPath))
				barE.addAttribute(new QName("ref"), refPath);

			return barE;
		} else
			return null;
	}

	private Element buildBars(Element barDefsE) {
		// Element rootE = DocumentHelper.createElement(new QName(ROOT_NAME,
		// XMLConstants.XHTML_NAMESPACE));
		Element barTemplateE = getTemplateElement();
		String imgPath = getTemplateParam(IMAGE_PATH);
		List<Element> barDefList = getToolBarDefs(barDefsE);
		for (Element barDef : barDefList) {
			Element barE = buildBar(barDef, barTemplateE, imgPath);
			if (barE != null)
				rootE.add(barE);
		}

		return rootE;
	}

	private void init(Element bound, Map<String, Object> context)
			throws XBLException {
		this.Id = bound.attributeValue("id");
		if (DataUtils.isStringEmpty(this.Id))
			this.Id = "bar_" + Utils.generateGlobalId();
		this.barDef = bound;
		this.dataId = this.barDef.attributeValue("data");
		this.rootE = DocumentHelper.createElement("root");
		this.context = context;
		this.oDataDef = DataUtils.getDataDef(dataId, context);
		if (null == this.oDataDef) {
			Element dataE = (Element) bound.getDocument().selectSingleNode(
					"//*[@id='" + dataId + "']");
			if (null == dataE) {
				throw XBLException.create(UISystemMessages.XBL_NAVIGATORBAR_DATA_DEFINE_ERROR, dataId);
			}

			try {
				this.oDataDef = new DataDef(dataE, context);
			} catch (Exception e) {
				throw XBLException.create(UISystemMessages.XBL_NAVIGATORBAR_DATA_DEFINE_ERROR1, dataId);
			}
		}
		this.modelId = this.oDataDef.getModelId();
		this.partId = this.oDataDef.getPartId();
		this.bindParentE = this.getModel(this.modelId, this.partId);
		createBarCtrlInstance();
	}

	private String getBarCtrlInstanceContextFlag() {
		return "bar." + Id + ".ctrl.instance";
	}

	private boolean isExistBarCtrlInstance() {
		return !DataUtils.isStringEmpty((String) this.context
				.get(getBarCtrlInstanceContextFlag()));
	}

	private Element createBarCtrlInstance() {
		if (isExistBarCtrlInstance()) {
			this.isCreateRefBind = false;
			return null;
		}
		String barCtrlInstanceID = StandarBarReserved
				.generateNavigatorControllerInstanceID(this.Id);

		Element resultE = DocumentHelper.createElement(new QName("instance",
				DataUtils.XFORMS_NAMESPACE));
		this.bindParentE.add(resultE);
		// type="simple" columnIds="new,save,delete" language="CONSTANT"
		resultE.addAttribute("type", "simple");
		resultE.addAttribute("language", "CONSTANT");
		resultE.addAttribute("columnids", COLUMNIDS);
		resultE.addAttribute("id", barCtrlInstanceID);

		Element rows = DocumentHelper.createElement("rows");
		resultE.add(rows);
		Element row = DocumentHelper.createElement("row");
		rows.add(row);

		// 写入上下文
		this.context.put(getBarCtrlInstanceContextFlag(), barCtrlInstanceID);
		this.isCreateRefBind = true;

		return resultE;
	}

	private Element getModel(String modelId, String partId) {
		// todo lzg 目前没有处理part，而且认为modelId一定存在
		Element resultE = DocumentHelper.createElement(DataUtils.INBODY_QNAME);
		Element modelE = DocumentHelper.createElement(new QName("model",
				DataUtils.XFORMS_NAMESPACE));
		modelE.addAttribute(new QName("partial", DataUtils.XFORMS_NAMESPACE),
				modelId);
		resultE.add(modelE);
		this.rootE.add(resultE);
		return modelE;
	}

	private Element build() {
		Element barDefsE = this.barDef;
		if (!this.isExistUserBar(this.barDef))
			barDefsE = this.getDefaultBars();
		Element rootE = this.buildBars(barDefsE);
		// rootE.addAttribute(new QName("component"), COMPONENT_URL);
		build(rootE);
		// this.rootE.add(rootE);
		return this.rootE;
	}

	/**
	 * 进行组件的修改，重新设置图片的路径，重新设置ref关系
	 * 
	 * @param root
	 */
	private void build(Element root) {
		if (root == null)
			return;

		List<?> barList = root.elements(new QName("toolbar",
				XMLConstants.XUI_NAMESPACE));
		for (Object bar : barList) {
			setBar((Element) bar);
		}
	}

	// wxm 如果使用了查询按钮，就生成查询对话框组件
	private void generateFilterDialog(Element barItem) {
		String barItemName = barItem.attributeValue(new QName("name"));
		if (barItemName.equals("filter-item")) {
			String dialogId = "filter-dialog-" + UUID.randomUUID().toString();
			Element dialogE = DocumentHelper.createElement(new QName("div",
					XMLConstants.XHTML_NAMESPACE));
			dialogE
					.addAttribute(new QName("component"),
							"/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog");
			dialogE.addAttribute(new QName("id"), dialogId);
			Element inBodyE = DocumentHelper.createElement(new QName("inbody",
					XMLConstants.XUI_NAMESPACE));
			inBodyE.add(dialogE);
			rootE.add(inBodyE);

			// replace filter-dialog-id
			List<?> elist = barItem.selectNodes(".//*[@process='true']");
			for (Object i : elist) {
				Element e = (Element) i;
				String text = e.getText();
				text = text.replaceAll("&filter-dialog-id", dialogId);
				e.setText(text);
			}
		}
	}

	private void generateFilterPatternDataAndMenu(Element barItem) {
		String barItemName = barItem.attributeValue(new QName("name"));
		if (barItemName.equals("filter-pattern-item")) {
			String componentId = "filter-pattern-"
					+ UUID.randomUUID().toString();
			Element filterPatternE = DocumentHelper.createElement(new QName(
					"div", XMLConstants.XHTML_NAMESPACE));
			filterPatternE
					.addAttribute(new QName("component"),
							"/UI/system/components/bizDataFilterPattern.xbl.xml#bizDataFilterPattern");
			filterPatternE.addAttribute(new QName("id"), componentId);
			Element inBodyE = DocumentHelper.createElement(new QName("inbody",
					XMLConstants.XUI_NAMESPACE));
			inBodyE.add(filterPatternE);
			rootE.add(inBodyE);

			// replace filter-pattern-id
			List<?> elist = barItem.selectNodes(".//*[@process='true']");
			for (Object i : elist) {
				Element e = (Element) i;
				String text = e.getText();
				text = text.replaceAll("&filter-pattern-id", componentId);
				e.setText(text);
			}
		}
	}

	// end

	private void setBarItem(Element barItem, String imgPath) {
		// wxm 判断是否使用了查询按钮
		generateFilterDialog(barItem);
		generateFilterPatternDataAndMenu(barItem);
		// end

		List<?> triggerList = getElements(barItem, new QName("trigger",
				DataUtils.XFORMS_NAMESPACE));
		for (Object e : triggerList) {
			Element trigger = (Element) e;
			setImgPath(trigger, barItem, imgPath);
			setRef(trigger, barItem);
		}
	}

	private String getFileName(String url) {
		String result = url;
		int ipos = url.lastIndexOf("/");
		if (ipos >= 0) {
			result = url.substring(ipos + 1);
		}
		return result;
	}

	private void setImgPath(Element trigger, Element barItem, String imgPath) {
		if (null != trigger.attribute(new QName("src"))) {
			String url = trigger.attributeValue(new QName("src"));
			trigger.addAttribute(new QName("src"), imgPath + getFileName(url));
		}
		if (null != trigger.attribute(new QName("dis-src"))) {
			String url = trigger.attributeValue(new QName("dis-src"));
			trigger.addAttribute(new QName("dis-src"), imgPath
					+ getFileName(url));
		}
	}

	private void setBar(Element bar) {
		String imgPath = getTemplateParam(IMAGE_PATH);

		List<?> barItemList = bar.elements(new QName("toolbar-item",
				XMLConstants.XUI_NAMESPACE));
		for (Object e : barItemList) {
			Element barItem = (Element) e;
			if (!"true".equalsIgnoreCase(barItem.attributeValue(new QName(
					PROCESS_FLAG))))
				setBarItem(barItem, imgPath);
		}
	}

	private String getCanDoText(String name) {
		return "not(call('justep.XData.canDo','" + this.dataId + "','" + name
				+ "'))";
	}

	private String getActionReadonlyXpath(String actionName, Element item) {
		String result = null;
		// insert,save,delete,refresh,filter,first,pre,next,last,last-page
		if ("insert".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_INSERT, "readonly",
					item);
			String s = getCanDoText("Insert");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("save".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_SAVE, "readonly",
					item);
			String s = getCanDoText("Save");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("delete".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_DELETE, "readonly",
					item);
			String s = getCanDoText("Delete");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("refresh".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_REFRESH, "readonly", item);
		} else if ("filter".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_FILTER, "readonly", item);
		} else if ("first".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_FIRST_RECORD,
					"readonly", item);
			String s = getCanDoText("First");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("pre".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_PRE_RECORD,
					"readonly", item);
			String s = getCanDoText("Pre");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("next".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_NEXT_RECORD,
					"readonly", item);
			String s = getCanDoText("Next");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("last".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_LAST_RECORD,
					"readonly", item);
			String s = getCanDoText("Last");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("next-page".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_ADD_NEXT_PAGE,
					"readonly", item);
			String s = getCanDoText("NextPage");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("all-page".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_ALL_PAGE_DATA,
					"readonly", item);
			String s = getCanDoText("AllPage");
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("create-new-child".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(
					StandarBarReserved.XUI_CREATE_NEW_CHILD_NODE, "readonly", item);
			String s = "-1>=index('" + this.dataId + "')";
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("create-new-brother".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(
					StandarBarReserved.XUI_CREATE_NEW_BROTHER_NODE, "readonly", item);
			String s = "-1>=index('" + this.dataId + "')";
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("expand-this".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_EXPAND_THIS_NODE,
					"readonly", item);
			result = readonly;
		} else if ("collapse-this".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_COLLAPSE_THIS_NODE,
					"readonly", item);
			result = readonly;
		} else if ("enter-parent".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_ENTER_PARENT,
					"readonly", item);
			String s = "-1>=index('" + this.dataId + "')";
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";
		} else if ("enter-child".equalsIgnoreCase(actionName)) {
			String readonly = getActionRule(StandarBarReserved.XUI_ENTER_CHILD,
					"readonly", item);
			String s = "-1>=index('" + this.dataId + "')";
			result = DataUtils.isStringEmpty(readonly) ? s : s + " or ("
					+ readonly + ")";

		}

		return result;
	}

	private String getActionRelevantXpath(String actionName, Element item) {
		if ("insert".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_INSERT, "relevant", item);
		} else if ("save".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_SAVE, "relevant", item);
		} else if ("delete".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_DELETE, "relevant", item);
		} else if ("refresh".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_REFRESH, "relevant", item);
		} else if ("filter".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_FILTER, "relevant", item);
		} else if ("first".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_FIRST_RECORD, "relevant", item);
		} else if ("pre".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_PRE_RECORD, "relevant", item);
		} else if ("next".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_NEXT_RECORD, "relevant", item);
		} else if ("last".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_LAST_RECORD, "relevant", item);
		} else if ("next-page".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_ADD_NEXT_PAGE, "relevant", item);
		} else if ("all-page".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_ALL_PAGE_DATA, "relevant", item);
		} else if ("create-new-child".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_CREATE_NEW_CHILD_NODE,
					"relevant", item);
		} else if ("create-new-brother".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_CREATE_NEW_BROTHER_NODE,
					"relevant", item);
		} else if ("expand-this".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_EXPAND_THIS_NODE, "relevant",
					item);
		} else if ("collapse-this".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_COLLAPSE_THIS_NODE, "relevant",
					item);
		} else if ("enter-parent".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_ENTER_PARENT, "relevant", item);
		} else if ("enter-child".equalsIgnoreCase(actionName)) {
			return getActionRule(StandarBarReserved.XUI_ENTER_CHILD, "relevant", item);
		} else
			return null;
	}

	public static String generateNavigatorControllerInstanceID(String id) {
		return "_bar_" + id;
	}

	private void createCtrlBind(String actionName, Element item) {
		String barCtrlInstanceID = StandarBarReserved
				.generateNavigatorControllerInstanceID(this.Id);

		String readonly = getActionReadonlyXpath(actionName, item);
		String relevant = getActionRelevantXpath(actionName, item);
		if (!DataUtils.isStringEmpty(readonly)
				|| !DataUtils.isStringEmpty(relevant)) {
			String nodeset = "instance('" + barCtrlInstanceID + "')/"
					+ actionName;
			Element bindE = DataUtils.createBind(nodeset, null);
			this.bindParentE.add(bindE);
			if (!DataUtils.isStringEmpty(readonly))
				bindE.addAttribute(new QName("readonly"), readonly);
			if (!DataUtils.isStringEmpty(relevant))
				bindE.addAttribute(new QName("relevant"), relevant);
		}
	}

	private boolean isExistColumnID(String columnID) {
		String[] columnidNames = COLUMNIDS.split(",");
		for (int i = 0; i < columnidNames.length; i++) {
			if (columnidNames[i].equals(columnID))
				return true;
		}
		return false;
	}

	private String getBarItemRef(Element barItem) {
		String barCtrlInstanceID = StandarBarReserved
				.generateNavigatorControllerInstanceID(this.Id);
		String barItemName = barItem.attributeValue(new QName("name"));
		String actionName = barItemName;
		if (barItemName.endsWith("-item")) {
			actionName = barItemName.substring(0, barItemName
					.lastIndexOf("-item"));
		}
		if (isExistColumnID(actionName)) {
			if (isCreateRefBind)
				createCtrlBind(actionName, barItem);
			return "instance('" + barCtrlInstanceID + "')/" + actionName;
		}
		return null;
	}

	private void setRef(Element trigger, Element barItem) {
		String ref = getBarItemRef(barItem);
		if (!DataUtils.isStringEmpty(ref))
			trigger.addAttribute(new QName("ref"), ref);
	}

	@SuppressWarnings("unchecked")
	private List<Element> getElements(Element e, QName qname) {
		List<Element> list = new ArrayList<Element>();

		if (e != null) {
			List<Element> eList = e.elements(qname);
			list.addAll(eList);

			eList = e.elements();
			for (Element itemE : eList) {
				list.addAll(getElements(itemE, qname));
			}
		}

		return list;
	}

	private String getActionRule(String actionName, String type, Element item) {
		// return (String)oDataDef.getActionRule().get(actionName+"."+type);
		return null != item ? item.attributeValue(type) : null;
	}
}
