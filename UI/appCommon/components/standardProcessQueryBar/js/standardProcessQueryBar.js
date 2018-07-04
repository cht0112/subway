/**
 * appCommon根名空间
 */
if (typeof(appCommon) == "undefined")
	appCommon = {};

/**
 * appCommon.component名空间
 */
if (typeof(appCommon.component) == "undefined")
	appCommon.component = {};

appCommon.component.StandardProcessQueryBar = {};

appCommon.component.StandardProcessQueryBar._processQueryConfig;
appCommon.component.StandardProcessQueryBar._manageTypeCodes;

appCommon.component.StandardProcessQueryBar.getManageTypeCodes = function() {
	appCommon.component.StandardProcessQueryBar.initByConfig();
	return appCommon.component.StandardProcessQueryBar._manageTypeCodes;
}

appCommon.component.StandardProcessQueryBar.initByConfig = function() {
	if (typeof(appCommon.component.StandardProcessQueryBar._processQueryConfig) == "undefined") {
		appCommon.component.StandardProcessQueryBar._processQueryConfig = appCommon.ConfigUtils
				.getCurrentProcessBizConfig(appCommon.ProcessExecute.PROCESS_QUERY_CONFIG_FILE);
		appCommon.component.StandardProcessQueryBar._manageTypeCodes = appCommon.ConfigUtils
				.getStringConfigItem(
						appCommon.component.StandardProcessQueryBar._processQueryConfig,
						"//manage-type-codes", "");
	}
}