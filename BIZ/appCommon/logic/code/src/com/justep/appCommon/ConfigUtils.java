package com.justep.appCommon;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;


public class ConfigUtils {
	/**
	 * 获取BIZ层配置文件
	 * @param fileFullName BIZ目录下的路径，例如：/appCommon/conf/turbomail.xml
	 * @return
	 */
	public static Document getBizConfig(String fileFullName) {
		Document doc = null;
		SAXReader reader = new SAXReader();
		try {
			doc = reader.read(SysUtils.getBizRootPath() + fileFullName);
		} catch (DocumentException e) {
			throw new RuntimeException(String.format("配置文件[%s]读取失败/n%s",
					fileFullName, e.getMessage()));
		}
		return doc;
	}
	
	public static Document getCurrentProcessBizConfig(String fileName) {
		String processPath = ToolUtils.getParentPath(SysUtils.getCurrentProcessFullName());
		String fileFullName = processPath + "/" + fileName;
		return getBizConfig(fileFullName);
	}

	/**
	 * 获取字符串配置项
	 * @param doc
	 * @param nodePath
	 * @param defaultValue
	 * @return
	 */
	public static String getStringConfigItem(Document doc, String nodePath,
			String defaultValue) {
		if (doc != null) {
			Node node = doc.selectSingleNode(nodePath);
			if (node != null) {
				String nodeText = node.getText().trim();
				return nodeText;
			}
		}
		return defaultValue;
	}

	/**
	 * 获取布尔型配置项
	 * @param doc
	 * @param nodePath
	 * @param defaultValue
	 * @return
	 */
	public static boolean getBooleanConfigItem(Document doc, String nodePath,
			boolean defaultValue) {
		String configValue = getStringConfigItem(doc, nodePath, null);
		return checkBooleanConfigItem(configValue, defaultValue);
	}

	public static boolean checkBooleanConfigItem(String configValue,
			Boolean defaultValue) {
		if (configValue == null || "".equals(configValue))
			return defaultValue;
		return "TRUE".equalsIgnoreCase(configValue);
	}

	public static Boolean getActivityConfigItem(Document doc, String nodePath,
			Boolean defaultValue) {
		String configValue = getStringConfigItem(doc, nodePath, null);
		return checkActivityConfigItem(configValue, defaultValue);
	}

	/**
	 * 判断环节配置项 
	 * 	1、配置项的值可以是环节名称或者环节显示名称用逗号分隔的字符串 
	 * 	2、配置项的值中存在当前环节则此配置项为true
	 * 	3、all代表全部环节为true, none代表全部环节为false
	 * 	4、如果配置项不存在，或者配置项的值为空字符串，返回defaultValue 
	 * 
	 * 示例
	 * 	"startActivity,bizAcitivty1,领导审批" 	=> 以当前环节的name和label作判断 
	 * 	"all" 									=> true
	 * 	"none" 									=> false 
	 * 	"" 										=> defaultValue 
	 * 	null 									=> defaultValue
	 * 
	 * @param configValue
	 * @param defaultValue
	 * @return
	 */
	public static Boolean checkActivityConfigItem(String configValue,
			Boolean defaultValue) {
		if (configValue == null || "".equals(configValue))
			return defaultValue;

		if ("ALL".equalsIgnoreCase(configValue))
			return true;
		if ("NONE".equalsIgnoreCase(configValue))
			return false;

		String[] activities = configValue.split(",");
		String activityName = SysUtils.getCurrentActivityName();
		String activityLabel = SysUtils.getCurrentActivityLabel();

		for (int i = 0; i < activities.length; i++) {
			if (activities[i].equals(activityName)
					|| activities[i].equals(activityLabel))
				return true;
		}
		return false;
	}

}