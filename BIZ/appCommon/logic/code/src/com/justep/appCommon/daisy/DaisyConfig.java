package com.justep.appCommon.daisy;

import com.justep.appCommon.Constants;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.util.Utils;

public class DaisyConfig {
	private String ipAddress;
	private int ipPort;
	private boolean isHttps;

	public DaisyConfig(String ipAddress, int ipPort, boolean isHttps) {
		this.ipAddress = ipAddress;
		this.ipPort = ipPort;
		this.isHttps = isHttps;
	}

	public String getIPAddress() {
		return ipAddress;
	}

	public int getIPPort() {
		return ipPort;
	}

	public boolean isHttps() {
		return isHttps;
	}

	public static DaisyConfig createByDefault(boolean isHttps) {
		return createByNameSpace(null, isHttps);
	}

	public static DaisyConfig createByDocPath(String docPath, boolean isHttps) {
		String rootID = docPath.substring(1,
				(docPath.indexOf("/", 1) > -1) ? docPath.indexOf("/", 1) : docPath.length());
		Table table = KSQL.select("select SA_DocNode, SA_DocNode.sNameSpace "
				+ "	from SA_DocNode SA_DocNode where SA_DocNode = '" + rootID + "'", null, Constants.SA_DOC_DATA, null);
		Utils.check(table.iterator().hasNext(), String.format("不存在的文档根目录: %s", rootID));
		Row row = table.iterator().next();
		String nameSpace = row.getString("sNameSpace");
		return createByNameSpace(nameSpace, isHttps);
	}

	public static DaisyConfig createByNameSpace(String nameSpace, boolean isHttps) {
		String ksql = "select SA_DocNameSpace, SA_DocNameSpace.sHost, SA_DocNameSpace.sPort "
				+ "	from SA_DocNameSpace SA_DocNameSpace ";
		if (Utils.isNotEmptyString(nameSpace)) {
			ksql = ksql + "where SA_DocNameSpace = '" + nameSpace + "'";
		}
		Table table = KSQL.select(ksql, null, Constants.SA_DOC_DATA, null);
		Utils.check(table.iterator().hasNext(), String.format("不存在的文档服务命名空间: %s", nameSpace));
		Row row = table.iterator().next();
		String host = row.getString("sHost");
		int port = Integer.parseInt(row.getString("sPort"));
		return new DaisyConfig(host, port, isHttps);
	}

}
