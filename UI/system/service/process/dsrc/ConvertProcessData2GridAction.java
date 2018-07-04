import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.QName;


public class ConvertProcessData2GridAction {
	public static Document execute(Document control){
		prepare(control);
		
		Document result = DocumentHelper.createDocument();
		Element newFormE = result.addElement("form");
		List<?> sourceNamespaces = control.getRootElement().declaredNamespaces();
		for (Object sourceNamespace : sourceNamespaces) {
			if (!"".equals(((Namespace)sourceNamespace).getPrefix())) {
				newFormE.declaredNamespaces().add(((Namespace)sourceNamespace));
			}
		}

		if (control != null) {
			Element newProcessDataE = newFormE.addElement(new QName("process-control"));
			Element oldProcessDataE = (Element)control.selectSingleNode("/*[local-name(.)='process-control']");
			if (oldProcessDataE != null) {
				for (Object obj : oldProcessDataE.elements()) {
					Element e = (Element)obj;
					if ("runnable-activities".equals(e.getName())){
						Element newRunnableActivitiesE = newProcessDataE.addElement(new QName("runnable-activities"));
						Element oldRunnableActivitiesE = e;
						if (oldRunnableActivitiesE != null) {
							Element oldRootItem = e;//oldRunnableActivitiesE.element(new QName("item"));
							if (!oldRootItem.elements().isEmpty()){
								Element newRootE = newRunnableActivitiesE.addElement(new QName("root"));
								ConvertRunnableActivitiesRoot2Grid(oldRootItem, newRootE);
								
								Element newChildrenE = newRunnableActivitiesE.addElement(new QName("children"));
								ConvertRunnableActivitiesChildren2Grid(oldRootItem, newChildrenE);
							}
						}
						
					}else if ("notice".equals(e.getName())){
						Element oldNoticeE = e;

						Element newNoticeE = newProcessDataE.addElement(new QName("notice"));
						Element bakNoticeE = newProcessDataE.addElement(new QName("original-notice"));
						ConvertProcessData2Grid(oldNoticeE, newNoticeE, bakNoticeE);
						
						Element newNoticeExecutorRangeE = newProcessDataE.addElement(new QName("notice-executor-range"));
						ConvertExecutorRange2Grid(oldNoticeE, newNoticeExecutorRangeE);

						Element newNoticeExecutorsE = newProcessDataE.addElement(new QName("notice-executors"));
						ConvertExecutors2Grid(oldNoticeE, newNoticeExecutorsE);
						
					}else if ("to".equals(e.getName())){
						Element oldProcessToE = e;
						
						Element newProcessToE = newProcessDataE.addElement(new QName("to"));
						Element bakProcessToE = newProcessDataE.addElement(new QName("original-to"));
						ConvertProcessData2Grid(oldProcessToE, newProcessToE, bakProcessToE);

						Element newProcessToExecutorRangeE = newProcessDataE.addElement(new QName("to-executor-range"));
						ConvertExecutorRange2Grid(oldProcessToE, newProcessToExecutorRangeE);

						Element newProcessToExecutorsE = newProcessDataE.addElement(new QName("to-executors"));
						ConvertExecutors2Grid(oldProcessToE, newProcessToExecutorsE);
					}else{
						newProcessDataE.add((Element)e.clone());	
					}
				}
			}
			
			Element newNoticeOrgPersonE = newProcessDataE.addElement(new QName("notice-org-person"));
			Element newProcessToOrgPersonE = newProcessDataE.addElement(new QName("to-org-person"));
			List<?> items = control.selectNodes("/*[local-name(.)='process-control']/*/*[local-name(.)='process-control-item']");
			for (Object obj : items){
				Element item = (Element)obj;
				String id = item.attributeValue("id");
				Element range = item.element(new QName("executor-range"));
				Element tree = OrgUnitToTree.execute(range);
				
				String executorKinds = item.elementTextTrim(new QName("executor-kinds"));
				if (executorKinds == null){
					executorKinds = "";
				}
				executorKinds = executorKinds.toUpperCase();
				
				if ("notice".equals(item.getParent().getName())){
					//notices
					ConvertOrgUnit2Grid(id, tree, newNoticeOrgPersonE, executorKinds);
					
				}else {
					//to
					ConvertOrgUnit2Grid(id, tree, newProcessToOrgPersonE, executorKinds);
					
				}
			}
		}
		
		System.out.println(result.asXML());
			
		return result;
	}
	

	private static void ConvertRunnableActivitiesRoot2Grid(Element source, Element target) {
		Element rowE = target.addElement(new QName("row"));
		rowE.addAttribute(new QName("id"), UUID.randomUUID().toString());
		rowE.addElement(new QName("cell"));
		rowE.addElement(new QName("cell"));
		
		String operator = "xor";
		String name = ((Element)source.elements().get(0)).getName();
		if ("xor".equals(name) || "and".equals(name)){
			operator = name;
		}
		
		rowE.addElement(new QName("cell")).setText(operator == null ? "" : operator);
		String selected = source.attributeValue(new QName("selected"));
		rowE.addElement(new QName("cell")).setText(selected == null ? "" : selected);
		String optional = source.attributeValue(new QName("optional"));
		rowE.addElement(new QName("cell")).setText(optional == null ? "" : optional);
		
		rowE.addElement(new QName("cell")).setText("false");
		rowE.addElement(new QName("cell"));
	}
	
	
	private static void ConvertRunnableActivitiesChildren2Grid(Element source, Element target) {
		for (Element e : (List<Element>)source.elements()) {
			Element rowE = target.addElement(new QName("row"));
			rowE.addAttribute(new QName("id"), UUID.randomUUID().toString());
			
			String tagName = e.getName();
			if ("xor".equals(tagName) || "and".equals(tagName)){
				rowE.addElement(new QName("cell"));
				rowE.addElement(new QName("cell"));
				String operator = tagName;
				rowE.addElement(new QName("cell")).setText(operator == null ? "" : operator);
				String selected = e.attributeValue(new QName("selected"));
				rowE.addElement(new QName("cell")).setText(selected == null ? "" : selected);
				String optional = e.attributeValue(new QName("optional"));
				rowE.addElement(new QName("cell")).setText(optional == null ? "" : optional);
				rowE.addElement(new QName("cell")).setText("false");
				rowE.addElement(new QName("cell"));
			}else{
				String name = e.attributeValue(new QName("label"));
				rowE.addElement(new QName("cell")).setText(name == null ? "" : name);
				String activity = tagName;//e.attributeValue(new QName("activity"));
				rowE.addElement(new QName("cell")).setText(activity == null ? "" : activity);
				rowE.addElement(new QName("cell"));
				String selected = e.attributeValue(new QName("selected"));
				rowE.addElement(new QName("cell")).setText(selected == null ? "" : selected);
				String optional = e.attributeValue(new QName("optional"));
				rowE.addElement(new QName("cell")).setText(optional == null ? "" : optional);
				rowE.addElement(new QName("cell")).setText("true");
				String activityId = e.attributeValue(new QName("id"));
				rowE.addElement(new QName("cell")).setText(activityId == null ? "" : activityId);
			}
			
			if (e.elements().size() > 0) {
				ConvertRunnableActivitiesChildren2Grid(e, rowE);
			}
		}
	}
	
	private static void GenerateTaskRelationValueCell(Element taskRelationValue, Element rowE) {
		Element newEURLE = rowE.addElement(new QName("cell"));
		Element oldEURLE = taskRelationValue.element(new QName("sEURL"));
		if (oldEURLE != null) {
			newEURLE.setText(oldEURLE.getText());
		}
		
		Element newLockE = rowE.addElement(new QName("cell"));
		Element oldLockE = taskRelationValue.element(new QName("sLock"));
		if (oldLockE != null) {
			newLockE.setText(oldLockE.getText());
		}
		
		Element newWarningTimeE = rowE.addElement(new QName("cell"));
		Element oldWarningTimeE = taskRelationValue.element(new QName("sWarningTime"));
		if (oldWarningTimeE != null) {
			newWarningTimeE.setText(oldWarningTimeE.getText());
		}
		
		Element newExecuteModeE = rowE.addElement(new QName("cell"));
		Element oldExecuteModeE = taskRelationValue.element(new QName("sExecuteMode"));
		if (oldExecuteModeE != null) {
			newExecuteModeE.setText(oldExecuteModeE.getText());
		}

		Element newExecuteModeE2 = rowE.addElement(new QName("cell"));
		Element oldExecuteModeE2 = taskRelationValue.element(new QName("sExecuteMode2"));
		if (oldExecuteModeE2 != null) {
			newExecuteModeE2.setText(oldExecuteModeE2.getText());
		}

		Element newEmergencyNameE = rowE.addElement(new QName("cell"));
		Element oldEmergencyNameE = taskRelationValue.element(new QName("sEmergencyName"));
		if (oldEmergencyNameE != null) {
			newEmergencyNameE.setText(oldEmergencyNameE.getText());
		}

		Element newScopeIDE = rowE.addElement(new QName("cell"));
		Element oldScopeIDE = taskRelationValue.element(new QName("sCatalogID"));
		if (oldScopeIDE != null) {
			newScopeIDE.setText(oldScopeIDE.getText());
		}
		
		Element newContentE = rowE.addElement(new QName("cell"));
		Element oldContentE = taskRelationValue.element(new QName("sContent"));
		if (oldContentE != null) {
			newContentE.setText(oldContentE.getText());
		}

		Element newPreemptModeE = rowE.addElement(new QName("cell"));
		Element oldPreemptModeE = taskRelationValue.element(new QName("sPreemptMode"));
		if (oldPreemptModeE != null) {
			newPreemptModeE.setText(oldPreemptModeE.getText());
		}

		Element newActivityE = rowE.addElement(new QName("cell"));
		Element oldActivityE = taskRelationValue.element(new QName("sActivity"));
		if (oldActivityE != null) {
			newActivityE.setText(oldActivityE.getText());
		}
		
		Element newCreateTimeE = rowE.addElement(new QName("cell"));
		Element oldCreateTimeE = taskRelationValue.element(new QName("sCreateTime"));
		if (oldCreateTimeE != null) {
			newCreateTimeE.setText(oldCreateTimeE.getText());
		}
		
		Element newLimitTimeE = rowE.addElement(new QName("cell"));
		Element oldLimitTimeE = taskRelationValue.element(new QName("sLimitTime"));
		if (oldLimitTimeE != null) {
			newLimitTimeE.setText(oldLimitTimeE.getText());
		}
		
		Element newEmergencyIDE = rowE.addElement(new QName("cell"));
		Element oldEmergencyIDE = taskRelationValue.element(new QName("sEmergencyID"));
		if (oldEmergencyIDE != null) {
			newEmergencyIDE.setText(oldEmergencyIDE.getText());
		}
		
		Element newCURLE = rowE.addElement(new QName("cell"));
		Element oldCURLE = taskRelationValue.element(new QName("sCURL"));
		if (oldCURLE != null) {
			newCURLE.setText(oldCURLE.getText());
		}

		Element newProcessE = rowE.addElement(new QName("cell"));
		Element oldProcessE = taskRelationValue.element(new QName("sProcess"));
		if (oldProcessE != null) {
			newProcessE.setText(oldProcessE.getText());
		}
		
		Element newCaptionE = rowE.addElement(new QName("cell"));
		Element oldCaptionE = taskRelationValue.element(new QName("sName"));
		if (oldCaptionE != null) {
			newCaptionE.setText(oldCaptionE.getText());
		}
		
		Element newLastModifyTimeE = rowE.addElement(new QName("cell"));
		Element oldLastModifyTimeE = taskRelationValue.element(new QName("sLastModifyTime"));
		if (oldLastModifyTimeE != null) {
			newLastModifyTimeE.setText(oldLastModifyTimeE.getText());
		}
	}
	
	private static void ConvertProcessData2Grid2(Element source, Element target, Element backup) {
		Element rowE = target.addElement(new QName("row"));
		rowE.addAttribute(new QName("id"), UUID.randomUUID().toString());
		
		Element newActivityE = rowE.addElement(new QName("cell"));
		Element oldActivityE = source.element(new QName("unit"));
		if (oldActivityE != null) {
			newActivityE.setText(oldActivityE.getText());
		}
		
		Element newProcessE = rowE.addElement(new QName("cell"));
		Element oldProcessE = source.element(new QName("process"));
		if (oldProcessE != null) {
			newProcessE.setText(oldProcessE.getText());
		}
		
		Element newTemplateE = rowE.addElement(new QName("cell"));
		Element oldTemplateE = source.element(new QName("template"));
		if (oldTemplateE != null) {
			newTemplateE.setText(oldTemplateE.getText());
		}

		
		

		Element newPassedActivitiesE = rowE.addElement(new QName("cell"));
		Element oldPassedActivitiesE = source.element(new QName("passed-activities"));
		if (oldPassedActivitiesE != null) {
			newPassedActivitiesE.setText(oldPassedActivitiesE.getText());
		}
		
		Element newTaskAssignModeE = rowE.addElement(new QName("cell"));
		Element oldTaskAssignModeE = source.element(new QName("task-assign-mode"));
		if (oldTaskAssignModeE != null) {
			newTaskAssignModeE.setText(oldTaskAssignModeE.getText());
		}
		
		Element newExecutorKindsE = rowE.addElement(new QName("cell"));
		Element oldExecutorKindsE = source.element(new QName("executor-kinds"));
		if (oldExecutorKindsE != null) {
			newExecutorKindsE.setText(oldExecutorKindsE.getText().trim());
		}
		
		Element oldTaskRelationValueE = source.element(new QName("task-relation-value"));
		if (oldTaskRelationValueE != null) {
			GenerateTaskRelationValueCell(oldTaskRelationValueE, rowE);
			
			Element bakEl = (Element)oldTaskRelationValueE.clone();
			bakEl.addAttribute(new QName("id"), source.attributeValue(new QName("id")));
			backup.add(bakEl);
		}
		
		String readonly = source.attributeValue(new QName("readonly"));
		rowE.addElement(new QName("cell")).setText(readonly == null ? "" : readonly);
		String isEnd = source.attributeValue(new QName("is-end"));
		rowE.addElement(new QName("cell")).setText(isEnd == null ? "" : isEnd);
		String selected = source.attributeValue(new QName("selected"));
		rowE.addElement(new QName("cell")).setText(selected == null ? "" : selected);
		
		rowE.addElement(new QName("cell")).setText(source.attributeValue(new QName("id")));
		
		String activityId = source.attributeValue(new QName("activity-id"));
		rowE.addElement(new QName("cell")).setText(activityId == null ? "" : activityId);
		
	}
	
	private static void ConvertProcessData2Grid(Element source, Element target, Element backup) {
		if (source != null) {
			List<Element> dataItemEs = source.selectNodes("*[local-name(.)='process-control-item']");
			for (Element e : dataItemEs) {
				ConvertProcessData2Grid2(e, target, backup);
			}
		}
	}
	
	private static void ConvertExecutorRange2Grid2(String id, Element executorRange, Element target) {
		List<Element> dataItemEs = executorRange.selectNodes("*[local-name(.)='org-unit']");
		for (Element e : dataItemEs) {
			Element rowE = target.addElement(new QName("row"));
			rowE.addAttribute(new QName("id"), UUID.randomUUID().toString());
			
			Element newFidE = rowE.addElement(new QName("cell"));
			Element oldFidE = e.element(new QName("fid"));
			if (oldFidE != null) {
				newFidE.setText(oldFidE.getText());
			}
			
			Element newFnameE = rowE.addElement(new QName("cell"));
			Element oldFnameE = e.element(new QName("fname"));
			if (oldFnameE != null) {
				newFnameE.setText(oldFnameE.getText());
			}
			
			Element newKindE = rowE.addElement(new QName("cell"));
			Element oldKindE = e.element(new QName("kind"));
			if (oldKindE != null) {
				newKindE.setText(oldKindE.getText());
			}
			
			Element newNameE = rowE.addElement(new QName("cell"));
			Element oldNameE = e.element(new QName("name"));
			if (oldNameE != null) {
				newNameE.setText(oldNameE.getText());
			}
			
			Element newIsManagerE = rowE.addElement(new QName("cell"));
			Element oldIsManagerE = e.element(new QName("responsible"));
			if (oldIsManagerE != null) {
				newIsManagerE.setText(oldIsManagerE.getText());
			}
			
			rowE.addElement(new QName("cell")).setText(id);
		}
	}
	
	private static void ConvertExecutorRange2Grid(Element source, Element target) {
		if (source != null) {
			List<Element> dataItemEs = source.selectNodes("*[local-name(.)='process-control-item']");
			for (Element e : dataItemEs) {
				Element oldExecutorRangeE = e.element(new QName("executor-range"));
				if (oldExecutorRangeE != null) {
					ConvertExecutorRange2Grid2(e.attributeValue(new QName("id")), oldExecutorRangeE, target);
				}
			}
		}
	}

	private static void ConvertExecutors2Grid2(String id, Element executors, Element target) {
		List<Element> dataItemEs = executors.selectNodes("*[local-name(.)='org-unit']");
		for (Element e : dataItemEs) {
			Element rowE = target.addElement(new QName("row"));
			rowE.addAttribute(new QName("id"), UUID.randomUUID().toString());
			
			Element newFidE = rowE.addElement(new QName("cell"));
			Element oldFidE = e.element(new QName("fid"));
			if (oldFidE != null) {
				newFidE.setText(oldFidE.getText());
			}
			
			Element newFnameE = rowE.addElement(new QName("cell"));
			Element oldFnameE = e.element(new QName("fname"));
			if (oldFnameE != null) {
				newFnameE.setText(oldFnameE.getText());
			}
			
			Element newNameE = rowE.addElement(new QName("cell"));
			Element oldNameE = e.element(new QName("name"));
			if (oldNameE != null) {
				newNameE.setText(oldNameE.getText());
			}

			Element newKindE = rowE.addElement(new QName("cell"));
			Element oldKindE = e.element(new QName("kind"));
			if (oldKindE != null) {
				newKindE.setText(oldKindE.getText());
			}
			
			Element newIsManagerE = rowE.addElement(new QName("cell"));
			Element oldIsManagerE = e.element(new QName("responsible"));
			if (oldIsManagerE != null) {
				if ("FALSE".equalsIgnoreCase(oldIsManagerE.getText())) {
					newIsManagerE.setText("0");
				} else {
					newIsManagerE.setText("1");
				}
			}
			
			rowE.addElement(new QName("cell")).setText(id);
		}
	}
	
	private static void ConvertExecutors2Grid(Element source, Element target) {
		if (source != null) {
			List<Element> dataItemEs = source.selectNodes("*[local-name(.)='process-control-item']");
			for (Element e : dataItemEs) {
				Element oldExecutorRangeE = e.element(new QName("executors"));
				if (oldExecutorRangeE != null) {
					ConvertExecutors2Grid2(e.attributeValue(new QName("id")), oldExecutorRangeE, target);
				}
			}
		}
	}
	
	
	private static void ConvertOrgUnit2Grid(String id, Element source, Element target, String executorKinds) {
		if (source != null) {
			Element rowE = target;
			
			if (source.getName().equalsIgnoreCase("org-unit")) {
				rowE = target.addElement(new QName("row"));
				rowE.addAttribute(new QName("id"), UUID.randomUUID().toString());
				
				Element newNameE = rowE.addElement(new QName("cell"));
				Element oldNameE = source.element(new QName("name"));
				if (oldNameE != null) {
					newNameE.setText(oldNameE.getText());
				}
				
				Element newFidE = rowE.addElement(new QName("cell"));
				Element oldFidE = source.element(new QName("fid"));
				if (oldFidE != null) {
					newFidE.setText(oldFidE.getText());
				}
				
				Element newFnameE = rowE.addElement(new QName("cell"));
				Element oldFnameE = source.element(new QName("fname"));
				if (oldFnameE != null) {
					newFnameE.setText(oldFnameE.getText());
				}
				
				Element newIdE = rowE.addElement(new QName("cell"));
				Element oldIdE = source.element(new QName("id"));
				if (oldIdE != null) {
					newIdE.setText(oldIdE.getText());
				}
				
				Element newKindE = rowE.addElement(new QName("cell"));
				Element oldKindE = source.element(new QName("kind"));
				if (oldKindE != null) {
					newKindE.setText(oldKindE.getText());
				}
				
				Element newLoadedE = rowE.addElement(new QName("cell"));
				Element oldLoadedE = source.element(new QName("loaded"));
				if (oldLoadedE != null) {
					newLoadedE.setText(oldLoadedE.getText());
				}
				
				Element newSelectableE = rowE.addElement(new QName("cell"));
				String kind = oldKindE.getTextTrim().toUpperCase();
				String selectable = "false";
				if (executorKinds.contains(kind)){
					selectable = "true";
				}
				newSelectableE.setText(selectable);
				/*
				Element oldSelectableE = source.element(new QName("selectable"));
				if (oldSelectableE != null) {
					newSelectableE.setText(oldSelectableE.getText());
				}
				*/
				
				
				rowE.addElement(new QName("cell")).setText(id == null ? "" : id);
			}
			
			List<Element> oldChildsE = source.elements(new QName("org-unit"));
			for (Element e : oldChildsE) {
				ConvertOrgUnit2Grid(id, e, rowE, executorKinds);
			}
		}
	}
	
	
	//为process-control-item添加唯一标识, 以及默认选中, taskRelationValue
	private static void prepare(Document doc){
		if ((doc == null) || (doc.getRootElement() == null))
			return;

		Element root = doc.getRootElement();
		
		List<?> items = (List<?>)root.selectNodes("/*[local-name(.)='process-control']/*/*[local-name(.)='process-control-item']");
		for (Object item : items){
			//比较特殊: 通知默认都选中
			if (((Element)item).getParent().getName().equals("notice")){
				((Element)item).addAttribute("selected", "true");
			}
			
			((Element)item).addAttribute("id", UUID.randomUUID().toString());
			
			Element task = ((Element)item).element(new QName("task-relation-value"));
			if(task != null){
				Map<String, String> relations = getDefaultRelations();
				for (String key : relations.keySet()){
					if (task.element(new QName(key)) == null){
						task.addElement(new QName(key)).addText(relations.get(key));
					}
				}
			}
			
			Element executors = ((Element)item).element(new QName("executors"));
			if (executors != null){
				for (Object obj : executors.elements()){
					Element executor = (Element)obj;
					String fid = executor.elementTextTrim(new QName("fid"));
					String fname = executor.elementTextTrim(new QName("fname"));
					executor.addElement(new QName("id")).addText(OrgUnitToTree.getID(fid));
					executor.addElement(new QName("name")).addText(OrgUnitToTree.getName(fname));
					executor.addElement(new QName("kind")).addText(OrgUnitToTree.getKind(fid));
				}
			}
			
			
		}
	}
	
	private static Map<String, String> getDefaultRelations(){
		Map<String, String> result = new HashMap<String, String>();
		result.put("sName", "");
		result.put("sEmergencyID", "");
		result.put("sEmergencyName", "");
		result.put("sCreateTime", "");
		result.put("sLimitTime", "");
		result.put("sWarningTime", "");
		result.put("sContent", "");
		result.put("sRemindMode", "");
		
		return result;
	}	
	
}
