package com.justep.appCommon;

public class ToolUtils {
	/**
	 * 获取上级路径
	 * @param path
	 * @return
	 */
	public static String getParentPath(String path) {
		if (path.endsWith("/") || path.endsWith("\\")) {
			path = path.substring(0, path.length() - 1);
		}
		
		int idx = Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\"));
		path = path.substring(0, idx);
		return path;
	}

}
