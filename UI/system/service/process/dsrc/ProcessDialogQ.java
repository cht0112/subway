import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

import com.justep.ui.WModel;

public class ProcessDialogQ implements WModel {

	@SuppressWarnings("rawtypes")
	public void execute(Map<String, Object> vars, HttpServletRequest request,
			HttpServletResponse response) {
		Enumeration emParams = request.getParameterNames();
		StringBuffer sbParams = new StringBuffer("");
		do {
			if (!emParams.hasMoreElements()) {
				break;
			}

			String sParam = (String) emParams.nextElement();
			if (sParam.startsWith("xml-data")) {
				String[] sValues = request.getParameterValues(sParam);
				String sValue = "";
				for (int i = 0; i < sValues.length; i++) {
					sValue = sValues[i];
					if (sValue != null && sValue.trim().length() != 0) {
						try {
							sbParams.append(URLDecoder.decode(sValue, "utf-8"));
						} catch (UnsupportedEncodingException e) {
							e.printStackTrace();
						}
					}
				}
			}
		} while (true);
		
		try {
			Document paramDoc = DocumentHelper.parseText(sbParams.toString());
			prepare(paramDoc);

			StringBuffer sbResult = new StringBuffer();
			sbResult.append("({");

			sbResult.append(generateProcessInfo(paramDoc));
			sbResult.append(",");
			sbResult.append(generateRootActivity(paramDoc));
			sbResult.append(",");
			sbResult.append("childActivities:" + generateChildActivities(paramDoc, null));
			sbResult.append(",");
			sbResult.append(generateProcessControlItem(paramDoc, "to", "to"));
			sbResult.append(",");
			sbResult.append(generateTaskRelationValue(paramDoc, "to_taskrelation_value", "to"));
			sbResult.append(",");
			sbResult.append(generateExecutorRange(paramDoc, "to_executor_range", "to"));
			sbResult.append(",");
			sbResult.append(generateExecutors(paramDoc, "to_executors", "to"));
			sbResult.append(",");
			sbResult.append(generateOrgPersonTree(paramDoc, "to_org_person", "to"));

			sbResult.append(",");
			sbResult.append(generateProcessControlItem(paramDoc, "notice", "notice"));
			sbResult.append(",");
			sbResult.append(generateTaskRelationValue(paramDoc, "notice_taskrelation_value", "notice"));
			sbResult.append(",");
			sbResult.append(generateExecutorRange(paramDoc, "notice_executor_range", "notice"));
			sbResult.append(",");
			sbResult.append(generateExecutors(paramDoc, "notice_executors", "notice"));
			sbResult.append(",");
			sbResult.append(generateOrgPersonTree(paramDoc, "notice_org_person", "notice"));
			
			sbResult.append("})");

			vars.put("jsonData", sbResult.toString());
			
			vars.put("cardElements", generateProcessCard(paramDoc));
		} catch (DocumentException e) {
			e.printStackTrace();
		}
	}
	
	@SuppressWarnings("unchecked")
	private String generateTaskRelationValue(Document doc, String varName, String nodeName) {
		StringBuffer sbResult = new StringBuffer("");
		sbResult.append(varName + ":");
		StringBuffer sbContent = new StringBuffer("");
		sbContent.append("[");
		
		List<Element> items = (List<Element>)doc.selectNodes("/process-control/" + nodeName + "//process-control-item");
		if (items.size() > 0) {
			boolean firstRow = true;
			for (Element item : items) {
				if (!firstRow) {
					sbContent.append(",");
				} else {
					firstRow = false;
				}
				sbContent.append("{");
				Element taskRelationValueEl = item.element(new QName("task-relation-value"));
				if (taskRelationValueEl != null) {
					List<Element> childs = taskRelationValueEl.elements();
					for (Element childEl : childs) {
						String tagName = childEl.getName();
						sbContent.append(tagName2JsonName(tagName) + ":\"" + childEl.getText() + "\",");
					}
					sbContent.append("data_id:\"" + item.attributeValue(new QName("id")) + "\"");
				}
				sbContent.append("}");
			}
		}
		
		sbContent.append("]");
		sbResult.append(sbContent);
		return sbResult.toString();
	}
	
	@SuppressWarnings("unchecked")
	private String generateOrgPersonTree(Document doc, String varName, String nodeName) {
		StringBuffer sbResult = new StringBuffer("");
		sbResult.append(varName + ":");
		StringBuffer sbContent = new StringBuffer("");
		sbContent.append("[");
		List<Element> items = (List<Element>)doc.selectNodes("/process-control/" + nodeName + "//process-control-item");
		if (items.size() > 0) {
			boolean firstRow = true;
			for (Element item : items) {
				String dataId = item.attributeValue(new QName("id"));
				Element rangeEl = item.element(new QName("executor-range"));
				Element orgPersonEl = OrgUnitToTree.execute(rangeEl);
				if (orgPersonEl != null) {
					List<Element> orgUtils = orgPersonEl.elements(new QName("org-unit"));
					for (Element childEl : orgUtils) {
						String orgPerson = generateOrgPersonNode(childEl, dataId);
						if (!"".equals(orgPerson)) {
							if (!firstRow) {
								sbContent.append(",");
							} else {
								firstRow = false;
							}
							sbContent.append(orgPerson);
						}
					}
				}
			}
		}
		sbContent.append("]");
		sbResult.append(sbContent);
		return sbResult.toString();
	}
	
	@SuppressWarnings("unchecked")
	private String generateOrgPersonNode(Element opEl, String dataId) {
		StringBuffer sbResult = new StringBuffer("");

		if (opEl != null) {
			sbResult.append("{");
			
			Element nameEl = opEl.element(new QName("name"));
			sbResult.append("name:\"" + (nameEl!=null?nameEl.getText():"") + "\",");
			
			Element fidEl = opEl.element(new QName("fid"));
			sbResult.append("fid:\"" + (fidEl!=null?fidEl.getText():"") + "\",");
			
			Element fnameEl = opEl.element(new QName("fname"));
			sbResult.append("fname:\"" + (fnameEl!=null?fnameEl.getText():"") + "\",");
			
			Element idEl = opEl.element(new QName("id"));
			sbResult.append("id:\"" + (idEl!=null?idEl.getText():"") + "\",");
			
			Element kindEl = opEl.element(new QName("kind"));
			sbResult.append("kind:\"" + (kindEl!=null?kindEl.getText():"") + "\",");
			
			Element loadedEl = opEl.element(new QName("loaded"));
			sbResult.append("loaded:\"" + (loadedEl!=null?loadedEl.getText():"") + "\",");
			
			Element selectableEl = opEl.element(new QName("selectable"));
			sbResult.append("selectable:\"" + (selectableEl!=null?selectableEl.getText():"") + "\",");
			
			sbResult.append("data_id:\"" + dataId + "\",");
	
			StringBuffer sbChilds = new StringBuffer("");
			boolean firstRow = true;
			List<Element> childEls = opEl.elements(new QName("org-unit"));
			for (Element childEl : childEls) {
				String childOrgPerson = generateOrgPersonNode(childEl, dataId);
				if (!"".equals(childOrgPerson)) {
					if (!firstRow) {
						sbChilds.append(",");
					} else {
						firstRow = false;
					}
					sbChilds.append(childOrgPerson);
				}
			}
			sbResult.append("rows:[" + sbChilds.toString() + "]");
			
			sbResult.append("}");
		}
		
		return sbResult.toString();
	}
	
	@SuppressWarnings("unchecked")
	private String generateExecutors(Document doc, String varName, String nodeName) {
		StringBuffer sbResult = new StringBuffer("");
		sbResult.append(varName + ":");
		StringBuffer sbContent = new StringBuffer("");
		sbContent.append("[");
		List<Element> items = (List<Element>)doc.selectNodes("/process-control/" + nodeName + "//process-control-item");
		if (items.size() > 0) {
			boolean firstRow = true;
			for (Element item : items) {
				Element executorRangeEl = item.element(new QName("executors"));
				String orgUnit = generateOrgUnit(executorRangeEl, item.attributeValue(new QName("id")));
				if (!"".equals(orgUnit)) {
					if (!firstRow) {
						sbContent.append(",");
					} else {
						firstRow = false;
					}
					sbContent.append(orgUnit);
				}
			}
		}
		sbContent.append("]");
		sbResult.append(sbContent);
		return sbResult.toString();
	}
	
	@SuppressWarnings("unchecked")
	private String generateExecutorRange(Document doc, String varName, String nodeName) {
		StringBuffer sbResult = new StringBuffer("");
		sbResult.append(varName + ":");
		StringBuffer sbContent = new StringBuffer("");
		sbContent.append("[");
		List<Element> items = (List<Element>)doc.selectNodes("/process-control/" + nodeName + "//process-control-item");
		if (items.size() > 0) {
			boolean firstRow = true;
			for (Element item : items) {
				Element executorRangeEl = item.element(new QName("executor-range"));
				String orgUnit = generateOrgUnit(executorRangeEl, item.attributeValue(new QName("id")));
				if (!"".equals(orgUnit)) {
					if (!firstRow) {
						sbContent.append(",");
					} else {
						firstRow = false;
					}
					sbContent.append(orgUnit);
				}
			}
		}
		sbContent.append("]");
		sbResult.append(sbContent);
		return sbResult.toString();
	}
	
	@SuppressWarnings("unchecked")
	private String generateOrgUnit(Element parentEl, String dataId) {
		StringBuffer sbResult = new StringBuffer("");
		if (parentEl != null) {
			List<Element> orgUnits = parentEl.selectNodes(".//org-unit");
			boolean firstRow = true;
			for (Element orgUnit : orgUnits) {
				if (!firstRow) {
					sbResult.append(",");
				} else {
					firstRow = false;
				}
				
				sbResult.append("{");
				
				Element fidEl = orgUnit.element(new QName("fid"));
				sbResult.append("fid:\"" + (fidEl!=null?fidEl.getText():"") + "\",");
				
				Element fnameEl = orgUnit.element(new QName("fname"));
				sbResult.append("fname:\"" + (fnameEl!=null?fnameEl.getText():"") + "\",");
				
				Element kindEl = orgUnit.element(new QName("kind"));
				sbResult.append("kind:\"" + (kindEl!=null?kindEl.getText():"") + "\",");
				
				Element nameEl = orgUnit.element(new QName("name"));
				sbResult.append("name:\"" + (nameEl!=null?nameEl.getText():"") + "\",");
				
				Element responsibleEl = orgUnit.element(new QName("responsible"));
				sbResult.append("responsible:\"" + (responsibleEl!=null?responsibleEl.getText():"") + "\",");
				
				sbResult.append("data_id:\"" + dataId + "\"");
				
				sbResult.append("}");
			}
		}
		return sbResult.toString();
	}

	@SuppressWarnings("unchecked")
	private String generateProcessControlItem(Document doc, String varName, String nodeName) {
		StringBuffer sbResult = new StringBuffer("");
		sbResult.append(varName + ":");
		StringBuffer sbContent = new StringBuffer("");
		sbContent.append("[");
		List<Element> items = (List<Element>)doc.selectNodes("/process-control/" + nodeName + "//process-control-item");
		if (items.size() > 0) {
			boolean firstRow = true;
			for (Element item : items) {
				if (!firstRow) {
					sbContent.append(",");
				} else {
					firstRow = false;
				}
				sbContent.append("{");
				
				Element unitEl = item.element(new QName("unit"));
				sbContent.append("activity:\"" + (unitEl!=null?unitEl.getText():"") + "\",");
				
				Element processEl = item.element(new QName("process"));
				sbContent.append("process:\"" + (processEl!=null?processEl.getText():"") + "\",");

				Element templateEl = item.element(new QName("template"));
				sbContent.append("template:\"" + (templateEl!=null?templateEl.getText():"") + "\",");

				Element passedActivitiesEl = item.element(new QName("passed-activities"));
				sbContent.append("passed_activities:\"" + (passedActivitiesEl!=null?passedActivitiesEl.getText():"") + "\",");
				
				Element taskAssignModeEl = item.element(new QName("task-assign-mode"));
				sbContent.append("task_assign_mode:\"" + (taskAssignModeEl!=null?taskAssignModeEl.getText():"") + "\",");
				
				Element executorKindsEl = item.element(new QName("executor-kinds"));
				sbContent.append("executor_kinds:\"" + (executorKindsEl!=null?executorKindsEl.getText():"") + "\",");
				
				Element taskRelationValueEl = item.element(new QName("task-relation-value"));
				if (taskRelationValueEl != null) {
					Element eurlEl = taskRelationValueEl.element(new QName("sEURL"));
					sbContent.append("eurl:\"" + (eurlEl!=null?eurlEl.getText():"") + "\",");
					
					Element lockEl = taskRelationValueEl.element(new QName("sLock"));
					sbContent.append("lock:\"" + (lockEl!=null?lockEl.getText():"") + "\",");
					
					Element warningTimeEl = taskRelationValueEl.element(new QName("sWarningTime"));
					sbContent.append("warning_time:\"" + (warningTimeEl!=null?warningTimeEl.getText():"") + "\",");
					
					Element executeModeEl = taskRelationValueEl.element(new QName("sExecuteMode"));
					sbContent.append("execute_mode:\"" + (executeModeEl!=null?executeModeEl.getText():"") + "\",");
					
					Element executeModeEl2 = taskRelationValueEl.element(new QName("sExecuteMode2"));
					sbContent.append("execute_mode2:\"" + (executeModeEl2!=null?executeModeEl2.getText():"") + "\",");
					
					Element emergencyNameEl = taskRelationValueEl.element(new QName("sEmergencyName"));
					sbContent.append("emergency_name:\"" + (emergencyNameEl!=null?emergencyNameEl.getText():"") + "\",");
					
					Element catalogEl = taskRelationValueEl.element(new QName("sCatalogID"));
					sbContent.append("catalog_id:\"" + (catalogEl!=null?catalogEl.getText():"") + "\",");
					
					Element contentEl = taskRelationValueEl.element(new QName("sContent"));
					sbContent.append("content:\"" + (contentEl!=null?contentEl.getText():"") + "\",");
					
					Element preemptModeEl = taskRelationValueEl.element(new QName("sPreemptMode"));
					sbContent.append("preempt_mode:\"" + (preemptModeEl!=null?preemptModeEl.getText():"") + "\",");
					
					Element activityEl = taskRelationValueEl.element(new QName("sActivity"));
					sbContent.append("activity2:\"" + (activityEl!=null?activityEl.getText():"") + "\",");
					
					Element createTimeEl = taskRelationValueEl.element(new QName("sCreateTime"));
					sbContent.append("create_time:\"" + (createTimeEl!=null?createTimeEl.getText():"") + "\",");
					
					Element limitTimeEl = taskRelationValueEl.element(new QName("sLimitTime"));
					sbContent.append("limit_time:\"" + (limitTimeEl!=null?limitTimeEl.getText():"") + "\",");
					
					Element emergencyIDEl = taskRelationValueEl.element(new QName("sEmergencyID"));
					sbContent.append("emergency_id:\"" + (emergencyIDEl!=null?emergencyIDEl.getText():"") + "\",");
					
					Element curlEl = taskRelationValueEl.element(new QName("sCURL"));
					sbContent.append("curl:\"" + (curlEl!=null?curlEl.getText():"") + "\",");
					
					Element processEl2 = taskRelationValueEl.element(new QName("sProcess"));
					sbContent.append("process2:\"" + (processEl2!=null?processEl2.getText():"") + "\",");
					
					Element captionEl = taskRelationValueEl.element(new QName("sName"));
					sbContent.append("name:\"" + (captionEl!=null?captionEl.getText():"") + "\",");
					
					Element lastModifyTimeEl = taskRelationValueEl.element(new QName("sLastModifyTime"));
					sbContent.append("last_modify_time:\"" + (lastModifyTimeEl!=null?lastModifyTimeEl.getText():"") + "\",");
				}
				
				String readonly = item.attributeValue(new QName("readonly"));
				sbContent.append("readonly:" + (readonly!=null?readonly:"false") + ",");
				
				String isEnd = item.attributeValue(new QName("is-end"));
				sbContent.append("is_end:" + (isEnd!=null?isEnd:"false") + ",");
				
				String selected = item.attributeValue(new QName("selected"));
				sbContent.append("selected:" + (selected!=null?selected:"false") + ",");
				
				sbContent.append("data_id:\"" + item.attributeValue(new QName("id")) + "\",");
				
				String activityId = item.attributeValue(new QName("activity-id"));
				sbContent.append("activity_id:\"" + (activityId!=null?activityId:"") + "\"");
				
				sbContent.append("}");
			}
		}
		sbContent.append("]");
		sbResult.append(sbContent);
		return sbResult.toString();
	}
	
	private String generateProcessCard(Document doc) {
		StringBuffer sbResult = new StringBuffer("");
		sbResult.append(generateActivityCard(doc));
		sbResult.append(generateNoticeCard(doc));
		return sbResult.toString();
	}
	
	@SuppressWarnings("unchecked")
	private String generateNoticeCard(Document doc) {
		StringBuffer sbResult = new StringBuffer("");
		List<Element> notices = (List<Element>)doc.selectNodes("/process-control/notice/process-control-item");
		if (notices.size() > 0) {
			sbResult.append("&lt;div style=\"padding: 0 0 3px 0;\"&gt;");
			sbResult.append("&lt;div style=\"font-size: 11pt; font-weight: bold; width: 80px; text-indent: 8px; padding: 8px 0px 5px 0px; color: #e8e8e8; background-color: #6D85A3;\"&gt;");
			sbResult.append("通知信息");
			sbResult.append("&lt;/div&gt;");
			sbResult.append("&lt;div style=\"font-size: 0; height: 3px; background-color: #6D85A3;\"&gt;&lt;/div&gt;");
			sbResult.append("&lt;/div&gt;");
			for (Element childEl : notices) {
				String tableId = UUID.randomUUID().toString();
				String dataId = childEl.attributeValue(new QName("id"));
				String noticeLabel = "";
				Element nameEl = (Element)childEl.selectSingleNode("task-relation-value/sName");
				if (nameEl != null) {
					noticeLabel = nameEl.getTextTrim();
				}
								
				sbResult.append("&lt;table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"table-layout: fixed;\" class=\"card\" id=\"" + tableId + "\"&gt;");

				sbResult.append("&lt;tr class=\"title\"&gt;");
				sbResult.append("&lt;td class=\"caption\" style=\"text-indent: 8px;\"&gt;");
				sbResult.append("&lt;div class=\"label\"&gt;");
				sbResult.append(noticeLabel);
				sbResult.append("&lt;/div&gt;");
				sbResult.append("&lt;/td&gt;");
				sbResult.append("&lt;td class=\"button\" align=\"right\"&gt;");
				sbResult.append("&lt;button class=\"xui-button\" style=\"background-color: #f1f1f1;\" onclick=\"addExecutors(event); return false;\"&gt;增加&lt;/button&gt;");
				sbResult.append("&lt;/td&gt;");
				sbResult.append("&lt;/tr&gt;");
			
				List<Element> executors = (List<Element>)childEl.selectNodes("executors//org-unit");
				boolean hasExecutor = executors.size() > 0;
				int index = 1;
				for (Element executorEl : executors) {
					String fid = "";
					Element fidEl = executorEl.element("fid");
					if (fidEl != null) {
						fid = fidEl.getText();
					}
					
					sbResult.append("&lt;tr class=\"executor\" fid=\"" + fid + "\"&gt;");
					sbResult.append("&lt;td class=\"notice-label\"&gt;");
					
					Element nameEl2 = executorEl.element("name");
					if (nameEl2 != null) {
						sbResult.append(nameEl2.getText());
					}
					
					sbResult.append("&lt;/td&gt;");
					
					sbResult.append("&lt;td class=\"button\" align=\"right\"&gt;");
					
					sbResult.append("&lt;button class=\"xui-button\" onclick=\"removeExecutor(event); return false;\"&gt;删除&lt;/button&gt;");
					
					sbResult.append("&lt;/td&gt;");
					
					sbResult.append("&lt;/tr&gt;");
					
					index++;
				}
				if (!hasExecutor) {
					sbResult.append("&lt;tr data-id=\"" + dataId + "\" type=\"notice\" class=\"executor\"&gt;");
				} else {
					sbResult.append("&lt;tr data-id=\"" + dataId + "\" type=\"notice\" class=\"executor\" style=\"display: none;\"&gt;");
				}
				sbResult.append("&lt;td colspan=\"2\" style=\"color: red; text-indent: 28px;\"&gt;");
				sbResult.append("尚未设置执行者！");
				sbResult.append("&lt;/td&gt;");
				sbResult.append("&lt;/tr&gt;");
				
				sbResult.append("&lt;/table&gt;");
				
				sbResult.append("&lt;div style=\"font-size: 0; height: 10px\"&gt;&lt;/div&gt;");
			}
		}
		return sbResult.toString();
	}
	
	@SuppressWarnings("unchecked")
	private String generateActivityCard(Document doc) {
		StringBuffer sbResult = new StringBuffer("");
		
		List<Element> activities = (List<Element>)doc.selectNodes("/process-control/runnable-activities//*");
		if (activities.size() > 0) {
			sbResult.append("&lt;div style=\"padding: 0 0 3px 0;\"&gt;");
			sbResult.append("&lt;div style=\"font-size: 11pt; font-weight: bold; width: 80px; text-indent: 8px; padding: 8px 0px 5px 0px; color: #e8e8e8; background-color: #6D85A3;\"&gt;");
			sbResult.append("环节信息");
			sbResult.append("&lt;/div&gt;");
			sbResult.append("&lt;div style=\"font-size: 0; height: 3px; background-color: #6D85A3;\"&gt;&lt;/div&gt;");
			sbResult.append("&lt;/div&gt;");
			for (Element childEl : activities) {
				String tagName = childEl.getName();
				if (!"xor".equals(tagName) && !"and".equals(tagName)) {
					String activityId = childEl.attributeValue(new QName("id"));
					String activityLabel = childEl.attributeValue(new QName("label"));
					String tableId = UUID.randomUUID().toString();
					String chkId = childEl.attributeValue(new QName("check-id"));
	
					Element controlItemEl = (Element)doc.selectSingleNode("/process-control/to/process-control-item[@activity-id='" + activityId + "']");
					boolean isEnd = false;
					if (controlItemEl != null) {
						String attrEnd = controlItemEl.attributeValue(new QName("is-end"));
						isEnd = "true".equals(attrEnd);
					}
					
					sbResult.append("&lt;table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"table-layout: fixed;\" class=\"card\" id=\"" + tableId + "\"&gt;");
	
					sbResult.append("&lt;tr class=\"title\"&gt;");
					sbResult.append("&lt;td class=\"checkbox\"&gt;");
					sbResult.append("&lt;input type=\"checkbox\" id=\"" + chkId + "\" onclick=\"onCheckChanged('" + chkId + "');\"/&gt;");
					sbResult.append("&lt;/td&gt;");
					sbResult.append("&lt;td class=\"caption\"&gt;");
					sbResult.append("&lt;div class=\"label\"&gt;");
					sbResult.append(activityLabel);
					sbResult.append("&lt;/div&gt;");
					sbResult.append("&lt;/td&gt;");
					sbResult.append("&lt;td class=\"button\" align=\"right\"&gt;");
					if (!isEnd) {
						sbResult.append("&lt;button class=\"xui-button\" style=\"background-color: #f1f1f1;\" onclick=\"addExecutors(event); return false;\"&gt;增加&lt;/button&gt;");
					}
					sbResult.append("&lt;/td&gt;");
					sbResult.append("&lt;/tr&gt;");
					
					boolean hasExecutor = false;
					String dataId = "";
					if (controlItemEl != null) {
						dataId = controlItemEl.attributeValue(new QName("id"));
						List<Element> executors = (List<Element>)controlItemEl.selectNodes("./executors//org-unit");
						hasExecutor = executors.size() > 0;
						int index = 1;
						for (Element executorEl : executors) {
							String fid = "";
							Element fidEl = executorEl.element("fid");
							if (fidEl != null) {
								fid = fidEl.getText();
							}
							
							sbResult.append("&lt;tr class=\"executor\" fid=\"" + fid + "\"&gt;");
							sbResult.append("&lt;td&gt;&lt;/td&gt;");
							sbResult.append("&lt;td class=\"activity-label\"&gt;");
							
							Element nameEl = executorEl.element("name");
							if (nameEl != null) {
								sbResult.append(nameEl.getText());
							}
							
							sbResult.append("&lt;/td&gt;");
							
							sbResult.append("&lt;td class=\"button\" align=\"right\"&gt;");
							
							sbResult.append("&lt;button class=\"xui-button\" onclick=\"removeExecutor(event); return false;\"&gt;删除&lt;/button&gt;");
							
							sbResult.append("&lt;/td&gt;");
							
							sbResult.append("&lt;/tr&gt;");
							
							index++;
						}
					}
	
					if (!hasExecutor && !isEnd) {
						sbResult.append("&lt;tr data-id=\"" + dataId + "\" type=\"activity\" class=\"executor\"&gt;");
					} else {
						sbResult.append("&lt;tr data-id=\"" + dataId + "\" type=\"activity\" class=\"executor\" style=\"display: none;\"&gt;");
					}
					sbResult.append("&lt;td&gt;&lt;/td&gt;");
					sbResult.append("&lt;td colspan=\"2\" style=\"color: red;\"&gt;");
					sbResult.append("尚未设置执行者！");
					sbResult.append("&lt;/td&gt;");
					sbResult.append("&lt;/tr&gt;");
									
					sbResult.append("&lt;/table&gt;");
					
					sbResult.append("&lt;div style=\"font-size: 0; height: 10px\"&gt;&lt;/div&gt;");
				}
			}
		}
		return sbResult.toString();
	}
	
	@SuppressWarnings("unchecked")
	private String generateChildActivities(Document doc, Element currEl) {
		StringBuffer sbResult = new StringBuffer("");
		StringBuffer sbContent = new StringBuffer("");
		sbContent.append("[");
		if (currEl == null) {
			currEl = (Element)doc.selectSingleNode("/process-control/runnable-activities");
		}
		if (currEl != null) {
			boolean firstRow = true;
			for (Element childEl : (List<Element>)currEl.elements()) {
				String chkId = UUID.randomUUID().toString();
				childEl.addAttribute(new QName("check-id"), chkId);
				
				String tagName = childEl.getName();
				if (!firstRow) {
					sbContent.append(",");
				} else {
					firstRow = false;
				}
				sbContent.append("{");
				if ("xor".equals(tagName) || "and".equals(tagName)){
					sbContent.append("name:\"\",");
					sbContent.append("activity:\"\",");
					
					String operator = "xor";
					if ("xor".equals(tagName) || "and".equals(tagName)){
						operator = tagName;
					}
					sbContent.append("operator:\"" + operator + "\",");
					
					String selected = childEl.attributeValue(new QName("selected"));
					sbContent.append("selected:" + (selected == null ? "false" : selected) + ",");
					
					String optional = childEl.attributeValue(new QName("optional"));
					sbContent.append("optional:" + (optional == null ? "false" : optional) + ",");
					
					sbContent.append("is_activity:false,");
					sbContent.append("activity_id:\"\",");
				} else {
					String label = childEl.attributeValue(new QName("label"));
					sbContent.append("name:\"" + label + "\",");
					
					sbContent.append("activity:\"" + (tagName == null ? "" : tagName) + "\",");
					sbContent.append("operator:\"\",");
					
					String selected = childEl.attributeValue(new QName("selected"));
					sbContent.append("selected:" + (selected == null ? "false" : selected) + ",");
					
					String optional = childEl.attributeValue(new QName("optional"));
					sbContent.append("optional:" + (optional == null ? "false" : optional) + ",");
					
					sbContent.append("is_activity:true,");
					
					String activityId = childEl.attributeValue(new QName("id"));
					sbContent.append("activity_id:\"" + activityId + "\",");
					
				}
				sbContent.append("check_id:\"" + chkId + "\",");
				sbContent.append("rows:" + generateChildActivities(doc, childEl));
				sbContent.append("}");
			}
		}
		sbContent.append("]");
		sbResult.append(sbContent);
		return sbResult.toString();
	}
	
	private String generateRootActivity(Document doc) {
		StringBuffer sbResult = new StringBuffer("");
		sbResult.append("rootActivity:");
		StringBuffer sbContent = new StringBuffer("");
		Element activityEl = (Element)doc.selectSingleNode("/process-control/runnable-activities");
		sbContent.append("[");
		if (activityEl != null) {
			sbContent.append("{");
			sbContent.append("name:\"\",");
			sbContent.append("activity:\"\",");
			
			String operator = "xor";
			if (!activityEl.elements().isEmpty()) {
				String tagName = ((Element)activityEl.elements().get(0)).getName();
				if ("xor".equals(tagName) || "and".equals(tagName)){
					operator = tagName;
				}
			}
			sbContent.append("operator:\"" + operator + "\",");
			
			String selected = activityEl.attributeValue(new QName("selected"));
			sbContent.append("selected:" + (selected == null ? "false" : selected) + ",");
			
			String optional = activityEl.attributeValue(new QName("optional"));
			sbContent.append("optional:" + (optional == null ? "false" : optional) + ",");
			
			sbContent.append("is_activity:false,");
			sbContent.append("activity_id:\"\"");
			
			sbContent.append("}");
		}
		sbContent.append("]");
		sbResult.append(sbContent);
		return sbResult.toString();
	}
	
	private String generateProcessInfo(Document doc) {
		StringBuffer sbResult = new StringBuffer("");
		sbResult.append("processInfo:");
		StringBuffer sbContent = new StringBuffer("");
		sbContent.append("[");
		Element processControlEl = (Element)doc.selectSingleNode("/process-control");
		if (processControlEl != null) {
			boolean haved = false;
			boolean firstRow = true;
			for (Object obj : processControlEl.elements()) {
				Element childEl = (Element)obj;
				String tagName = childEl.getName();
				if (!("runnable-activities".equals(tagName) || "notice".equals(tagName) || "to".equals(tagName))) {
					if (!haved) {
						sbContent.append("{");
						haved = true;
					}
					if (!firstRow) {
						sbContent.append(",");
					} else {
						firstRow = false;
					}
					sbContent.append(tagName2JsonName(tagName) + ":\"" + childEl.getText() + "\"");
				}
			}
			if (haved) {
				sbContent.append("}");
			}
		}
		sbContent.append("]");
		sbResult.append(sbContent);
		return sbResult.toString();
	}
	
	private String tagName2JsonName(String tagName) {
		return tagName.replaceAll("-", "_");
	}

	//hcr: 这里进行预处理:
	//为process-control-item添加唯一标识, 以及默认选中, taskRelationValue
	private void prepare(Document doc){
		Element root = doc.getRootElement();
		if (doc == null || root == null)
			return;
		
		List<?> items = (List<?>)root.selectNodes("/*[local-name(.)='process-control']/*/*[local-name(.)='process-control-item']");
		for (Object item : items){
			if (((Element)item).getParent().getName().equals("notice")){
				//hcr: 比较特殊
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
					executor.addElement(new QName("name")).addText(OrgUnitToTree.getKind(fid));
				}
			}
			
			
		}
	}
	
	private Map<String, String> getDefaultRelations(){
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