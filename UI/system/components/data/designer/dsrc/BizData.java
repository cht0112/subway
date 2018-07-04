import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.QName;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.window.Window;
import org.w3c.dom.Element;

import com.justep.design.model.ModelConstant;
import com.justep.studio.StudioPlugin;
import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.dialog.CommonSelectorDialog;
import com.justep.studio.ui.editors.util.XuiConstant;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiDataSourceManager;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.editors.xui.OperationComponent;
import com.justep.studio.ui.views.ConsoleView;
import com.justep.studio.util.XPathUtil;
import com.justep.ui.layoutgenerator.DataAbsoluteLayoutGenerator;
import com.justep.ui.layoutgenerator.ExcelLayoutGenerator;
import com.justep.ui.layoutgenerator.GridControlGenerator;
import com.justep.ui.layoutgenerator.TreeControlGenerator;
import com.justep.ui.layoutgenerator.dialog.GenerateLayoutWizard;
import com.justep.ui.layoutgenerator.dialog.GenerateLayoutWizardDialog;
import com.justep.ui.layoutgenerator.dialog.GenerateTreeWizard;
import com.justep.ui.layoutgenerator.dialog.GenerateTreeWizardDialog;
import com.justep.ui.layoutgenerator.dialog.SelectViewWizard;
import com.justep.ui.layoutgenerator.dialog.SelectViewWizardDialog;

public class BizData extends OperationComponent {
	static int filterNO = 0;
	static int aggregateNO = 0;
	static int calculateNO = 0;

	public Map editData(XuiElement currentElement) {
		EditDataDialog commonDialog = new EditDataDialog(StudioPlugin.getShell(), "添加数据", currentElement);
		commonDialog.open();
		String[] columns = commonDialog.getTableColumnCount();
		if (commonDialog.getReturnCode() == Window.OK) {
			List<DataRecord> retrunData = commonDialog.getRecord();
			XuiDataModel model = currentElement.getXuiDataModel();
			StringBuffer buffer = new StringBuffer();
			buffer.append("<rows _xmlns=\"\">");
			for (int i = 0; i < retrunData.size(); i++) {
				DataRecord record = retrunData.get(i);
				buffer.append("<row>");
				for (int j = 0; j < columns.length; j++) {
					buffer.append("<cell>").append(record.getValue(columns[j])).append("</cell>");
				}
				buffer.append("</row>");
				record.getValue("");
			}
			buffer.append("</rows>");
			currentElement.removeChildren("rows");
			model.addElement("rows", currentElement, null, null, buffer.toString(), null);
		}
		return null;
	}

	public Map<?, ?> editRule(XuiElement currentElement) {
		List<String> excludeList = getDataRules(currentElement);

		CommonSelectorDialog dlg = new CommonSelectorDialog(StudioPlugin.getShell(), "添加规则");
		DataSet ds = XuiDataSourceManager.getDataRelationDataSet(currentElement, true);
		ds.removeByCondition(ModelConstant.ALIAS, null, excludeList);
		dlg.setDataSet(ds);
		dlg.setInitialSize(580, 600);
		dlg.open();
		if (dlg.getReturnCode() == Window.OK) {
			try {
				currentElement.getXuiDataModel().suspendEvent();
				List<DataRecord> retrunData = dlg.getSelections();
				XuiDataModel model = currentElement.getXuiDataModel();
				String elementName = "dataBizRule";
				if (currentElement.getName().equals("data")) {
					elementName = "dataRule"; 
				}
				for (int i = 0; i < retrunData.size(); i++) {
					DataRecord record = retrunData.get(i);
					String alias = record.getString(ModelConstant.ALIAS);
					String type = record.getString(ModelConstant.TYPE);

					XuiElement newE = model.addElement(elementName, currentElement, null);
					//newE.setDir(false);
					newE.setNew(true);
					if ("column".equals(type)) {
						newE.setPropertyValue("column", alias);
					} else if ("relation".equals(type)) {
						newE.setPropertyValue("relation", alias);
						newE.setDisplayName(alias);
					} else if ("concept".equals(type)) {
						newE.setPropertyValue("concept", alias);
						newE.setDisplayName(alias);
					}
				}
				this.getDesigner().getEditorPart().getTreeViewer().refresh(currentElement);
			} catch (Exception ex) {
				ex.printStackTrace();
			} finally {
				currentElement.getXuiDataModel().resumeEvent();
			}
		}

		return null;
	}

	private List<String> getAllRelations(XuiElement currentE) {
		List<String> relationDatas = new ArrayList<String>();

		String[] actinoInfo = XuiDataSourceManager.getActionInfoOfData(currentE, XuiConstant.P_READER);
		DataSet ds = XuiDataSourceManager.getRelationsOfActionMainConcept(actinoInfo[0], actinoInfo[1]);
		List<DataRecord> rcList = ds.getData();
		for (DataRecord rc : rcList) {
			String name = rc.getString(ModelConstant.NAME);
			if (!"version".equalsIgnoreCase(name)) {
				String alias = rc.getString(ModelConstant.ALIAS);
				String type = rc.getString(ModelConstant.DATA_TYPE);
				String label = rc.getString(ModelConstant.LABEL);
				relationDatas.add(name + "," + alias + "," + label + "," + type);
			}
		}
		return relationDatas;
	}

	public Map generateGridView(XuiElement currentE) {
		List relationDatas = this.getAllRelations(currentE);
		List<Element> viewList = XPathUtil.selectNodes(currentE.getOriginElement(), "//*[local-name()='view']");
		SelectViewWizard viewWizard = new SelectViewWizard(viewList, relationDatas);
		SelectViewWizardDialog viewWizardDialog = new SelectViewWizardDialog(StudioPlugin.getShell(), viewWizard);
		viewWizardDialog.setPageSize(400, 250);
		if (viewWizardDialog.open() == Dialog.OK) {
			List<String> relationsSelect = viewWizard.getRelationSelects(); 
			Map dataMap = new HashMap();
			String dataId = currentE.getId();
			dataMap.put(dataId, relationsSelect);
			GridControlGenerator gcg = new GridControlGenerator(currentE.getXuiDataModel(), dataMap);
			if (gcg.generate()) {
				List<XuiElement> eList = new ArrayList<XuiElement>();
				int selIdx = viewWizardDialog.getReturnData();
				Element viewE = viewList.get(selIdx);
				XuiElement xuiView = (XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT);
				org.dom4j.Element result = gcg.getResult();
				org.dom4j.Element gridE = (org.dom4j.Element) result
						.selectSingleNode("*[local-name()='div' and @component='/UI/system/components/grid.xbl.xml#grid']");
				if (gridE != null) {
					eList.add(currentE.getXuiDataModel().addElement("grid", (XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT), null, null,
							gridE.asXML(), null));

					org.dom4j.Element placeE = (org.dom4j.Element) result.selectSingleNode("//*[local-name()='place']");
					if (placeE != null) {
						Element layoutE = (Element) XPathUtil.selectSingleNode(viewE, "*[local-name()='layout']");
						if (layoutE != null) {
							
							eList.add(currentE.getXuiDataModel().addElement("controlPlace", 
										(XuiElement) layoutE.getUserData(XuiConstant.OWNER_XUIELEMENT), null, null, placeE.asXML(), null));
							currentE.getXuiDataModel().getUndoRedoManager().batchCreateComponent(((XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT)).getDesignId(), eList);
							//this.getDesigner().repaintComponent(((XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT)));
						}
					}
				}
			}
		}

		return null;
	}

	public Map generateTreeView(XuiElement currentE) {
		List<Element> viewList = XPathUtil.selectNodes(currentE.getOriginElement(), "//*[local-name()='view']");
		List relationDatas = this.getAllRelations(currentE);
		if (relationDatas.size() > 0) {
			GenerateTreeWizard treeWizard = new GenerateTreeWizard(viewList, relationDatas);
			GenerateTreeWizardDialog treeWizardDialog = new GenerateTreeWizardDialog(StudioPlugin.getShell(), treeWizard);
			treeWizardDialog.setPageSize(400, 250);
			if (treeWizardDialog.open() == Dialog.OK) {
				Map dataMap = new HashMap();
				String dataId = currentE.getId();
				dataMap.put(dataId, relationDatas);
				TreeControlGenerator tcg = new TreeControlGenerator(currentE.getXuiDataModel(), dataMap, treeWizardDialog.getTreeRelation());
				if (tcg.generate()) {
					List<XuiElement> eList = new ArrayList<XuiElement>();
					int viewIdx = treeWizardDialog.getViewIndex();
					Element viewE = viewList.get(viewIdx);
					XuiElement xuiView = (XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT);
					org.dom4j.Element result = tcg.getResult();
					org.dom4j.Element gridE = (org.dom4j.Element) result
							.selectSingleNode("*[local-name()='div' and @component='/UI/system/components/grid.xbl.xml#grid']");
					if (gridE != null) {
						eList.add(currentE.getXuiDataModel().addElement("grid", (XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT), null, null,
								gridE.asXML(), null));

						org.dom4j.Element placeE = (org.dom4j.Element) result.selectSingleNode("//*[local-name()='place']");
						if (placeE != null) {
							Element layoutE = (Element) XPathUtil.selectSingleNode(viewE, "*[local-name()='layout']");
							if (layoutE != null) {
								
								eList.add(currentE.getXuiDataModel().addElement("controlPlace",
												(XuiElement) layoutE.getUserData(XuiConstant.OWNER_XUIELEMENT), null, null, placeE.asXML(), null));
									currentE.getXuiDataModel().getUndoRedoManager().batchCreateComponent(((XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT)).getDesignId(), eList);
									//this.getDesigner().repaintComponent(((XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT)));
							}
						}
					}
				}
			}
		}
		return null;
	}

	@SuppressWarnings("unchecked")
	public Map generateAbsoluteView(XuiElement currentE) {
		List relationDatas = this.getAllRelations(currentE);
		if (relationDatas.size() > 0) {
			List<Element> viewList = XPathUtil.selectNodes(currentE.getOriginElement(), "//*[local-name()='view']");
			GenerateLayoutWizard layoutWizard = new GenerateLayoutWizard(viewList, relationDatas);
			layoutWizard.setWindowTitle("生成绝对布局");
			GenerateLayoutWizardDialog layoutWizardDialog = new GenerateLayoutWizardDialog(StudioPlugin.getShell(), layoutWizard);
			layoutWizardDialog.setPageSize(400, 250);
			if (layoutWizardDialog.open() == Dialog.OK) {
				Map dataMap = new HashMap();
				String dataId = currentE.getId();
				dataMap.put(dataId, layoutWizardDialog.getSelectedRelations());
				int columnSize = layoutWizardDialog.getColumnSize();
				DataAbsoluteLayoutGenerator dalg = new DataAbsoluteLayoutGenerator(currentE.getXuiDataModel(), dataMap, columnSize);
				if (dalg.generate()) {
					org.dom4j.Element result = dalg.getResult();

					int selIdx = layoutWizardDialog.getViewIndex();
					Element viewE = viewList.get(selIdx);
					XuiElement xuiView = (XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT);

					xuiView.getXuiDataModel().setPropertyValue(xuiView, "layout-type", XuiConstant.ABSOLUTE_LAYOUT);
                    List<XuiElement> eList = new ArrayList<XuiElement>();
					List<org.dom4j.Element> controlList = (List<org.dom4j.Element>) result
							.selectNodes("//*[local-name()='view']/*[local-name()!='layout']");
					for (org.dom4j.Element controlE : controlList) {
						String name = controlE.getName();
						if ("div".equalsIgnoreCase(name)) {
							String componentName = controlE.attributeValue(new QName("component"));
							if ("/UI/system/components/select.xbl.xml#gridSelect".equals(componentName)) {
								name = "gridSelect";
							} else if ("/UI/system/components/select.xbl.xml#treeSelect".equals(componentName)) {
								name = "treeSelect";
							}
						}
						eList.add(currentE.getXuiDataModel().addElement(name, (XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT), null, null,
								controlE.asXML(), null));
					}

					Element layoutE = (Element) XPathUtil.selectSingleNode(viewE, "*[local-name()='layout']");
					if (layoutE != null) {
						List<org.dom4j.Element> layoutList = (List<org.dom4j.Element>) result.selectNodes("//*[local-name()='layout']/*");
						for (org.dom4j.Element el : layoutList) {
							if ("place".equals(el.getName())) {
								String placeName = "controlPlace";
								if (el.attribute("control") == null) {
									placeName = "controlLabel";
								}
								eList.add(currentE.getXuiDataModel().addElement(placeName,
										(XuiElement) layoutE.getUserData(XuiConstant.OWNER_XUIELEMENT), null, null, el.asXML(), null));
//								this.paint(placeE, null);
							}
						}
						xuiView.getXuiDataModel().getUndoRedoManager().batchCreateComponent(xuiView.getDesignId(), eList);
						//this.repaint(xuiView); 
					}
				}
			}
		}

		return null;
	}

	private String generateExcelFile(String path, int num) {
		String strRet = path + "\\excelLayout" + String.valueOf(num) + ".xls";
		if (new File(strRet).exists()) {
			return generateExcelFile(path, num + 1);
		}
		return strRet;
	}

	@SuppressWarnings("unchecked")
	public Map generateExcelView(XuiElement currentE) {
		List relationDatas = this.getAllRelations(currentE);
		if (relationDatas.size() > 0) {
			List<Element> viewList = XPathUtil.selectNodes(currentE.getOriginElement(), "//*[local-name()='view']");
			GenerateLayoutWizard layoutWizard = new GenerateLayoutWizard(viewList, relationDatas);
			layoutWizard.setWindowTitle("生成Excel布局");
			GenerateLayoutWizardDialog layoutWizardDialog = new GenerateLayoutWizardDialog(StudioPlugin.getShell(), layoutWizard);
			layoutWizardDialog.setPageSize(400, 250);
			if (layoutWizardDialog.open() == Dialog.OK) {
				Map dataMap = new HashMap();
				String dataId = currentE.getId();
				dataMap.put(dataId, layoutWizardDialog.getSelectedRelations());

				String wFile = currentE.getXuiDataModel().getFilePath();
				File f = new File(wFile);
				String xlsFile = generateExcelFile(f.getParent(), 1);

				int columnSize = layoutWizardDialog.getColumnSize();

				ExcelLayoutGenerator elg = new ExcelLayoutGenerator(currentE.getXuiDataModel(), dataMap, xlsFile, columnSize);
				if (elg.generate()) {
					org.dom4j.Element result = elg.getResult();

					int selIdx = layoutWizardDialog.getViewIndex();
					Element viewE = viewList.get(selIdx);
					XuiElement xuiView = (XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT);
					
					//xuiView.getXuiDataModel().setPropertyValue(xuiView, "layout-type", XuiConstant.EXCEL_LAYOUT);
					xuiView.getXuiDataModel().setPropertyValue(xuiView, "layout-type", XuiConstant.FLOW_LAYOUT);

					List<XuiElement> eList = new ArrayList<XuiElement>();
					List<org.dom4j.Element> controlList = (List<org.dom4j.Element>) result
							.selectNodes("//*[local-name()='view']/*[local-name()!='layout']");
					for (org.dom4j.Element controlE : controlList) {
						String name = controlE.getName();
						if ("div".equalsIgnoreCase(name)) {
							String componentName = controlE.attributeValue(new QName("component"));
							if ("/UI/system/components/select.xbl.xml#gridSelect".equals(componentName)) {
								name = "gridSelect";
							} else if ("/UI/system/components/select.xbl.xml#treeSelect".equals(componentName)) {
								name = "treeSelect";
							}
						}
						eList.add(currentE.getXuiDataModel().addElement(name, (XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT), null, null,
								controlE.asXML(), null));
					}

					String fName = xlsFile.substring(xlsFile.lastIndexOf("\\") + 1);
					//xuiView.getXuiDataModel().setPropertyValue(xuiView, "src", fName);
					
					XuiElement viewLayout = ((XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT)).getChildByTagName("layout");
					XuiElement excelLayout = currentE.getXuiDataModel().addElement("excelLayout", viewLayout, null);
					currentE.getXuiDataModel().setPropertyValue(excelLayout,"src",fName);
                    eList.add(excelLayout);
                    xuiView.getXuiDataModel().getUndoRedoManager().batchCreateComponent(((XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT)).getDesignId(), eList);
					//this.getDesigner().repaintComponent(((XuiElement) viewE.getUserData(XuiConstant.OWNER_XUIELEMENT)));
				}
			}
		}

		return null;
	}

	public Map newFilter(XuiElement currentE) {
		String elementName = "filter";
		XuiDataModel model = currentE.getXuiDataModel();
		XuiElement newE = model.addElement(elementName, currentE, null);
		newE.setPropertyValue("name", "filter" + (filterNO++));
		this.getDesigner().getEditorPart().getTreeViewer().refresh();
		return null;
	}

	public Map newCalculate(XuiElement currentE) {
		String elementName = "calculate-relation";
		Element srcDataE = currentE.getOriginElement();
		XuiDataModel model = currentE.getXuiDataModel();
		XuiElement newE = model.addElement(elementName, currentE, null);
		newE.setPropertyValue("relation", "calculate" + (calculateNO++));
		this.getDesigner().getEditorPart().getTreeViewer().refresh();
		return null;
	}

	public Map newAggregate(XuiElement currentE) {
		String elementName = "aggregate-relation";
		Element srcDataE = currentE.getOriginElement();
		XuiDataModel model = currentE.getXuiDataModel();
		XuiElement newE = model.addElement(elementName, currentE, null);
		newE.setPropertyValue("relation", "aggregate" + (aggregateNO++));
		this.getDesigner().getEditorPart().getTreeViewer().refresh();
		return null;
	}

	public List<String> getDataRules(XuiElement currentE) {
		List<String> list = new ArrayList<String>();
		Element srcDataE = currentE.getOriginElement();
		String attrName = "relation";// isCommonData = false;
		if (currentE.getName().equals("data")) {
			attrName = "column";
		}
		List<Element> rules = W3cDocumentHelper.getChildXmlElementList(srcDataE, "rule");
		for (Element ruleE : rules) {
			String relRef = ruleE.getAttribute(attrName);
			if (relRef != null && !relRef.equals(""))
				list.add(relRef);	
//			String cptRef = ruleE.getAttribute("concept");
//			if (cptRef != null)
//				list.add(cptRef);
			String atnRef = ruleE.getAttribute("action");
			if (atnRef != null && !atnRef.equals(""))
				list.add(atnRef);
		}
		return list;
	}

	public boolean validate(XuiElement xuiElement) {
		boolean result = true;
		String dataId = xuiElement.getId();
		String storeType = xuiElement.getProperyValue("store-type");
		Element rootE = xuiElement.getXuiDataModel().getRootElement().getOriginElement();
		String sXpath = "//*[local-name()='div' and starts-with(@component,'/UI/system/components/grid.xbl.xml') and @data='" + dataId + "']";
		List<?> list = XPathUtil.selectNodes(rootE, sXpath);
		int count = null != list ? list.size() : 0;
		List<?> itemset = XPathUtil.selectNodes(rootE, "//*[local-name()='itemset' and @data='" + dataId + "' and not(@independence='true')]");
		count += null != itemset ? itemset.size() : 0;
		if ("grid".equals(storeType)) {
			if (0 == count) {
				this.addError(xuiElement, "grid的data(" + dataId + ")必须绑定一个grid或者select的itemset");
				result = false;
			} else if (1 < count) {
				this.addError(xuiElement, "grid的data(" + dataId + ")只能绑定一个grid或者select的itemset");
				result = false;
			}
		} else if ("simple".equals(storeType)) {
			if (0 < count) {
				this.addError(xuiElement, "simple的data(" + dataId + ")不能绑定grid或者select的itemset");
				result = false;
			}
		}
		return result;
	}

}
