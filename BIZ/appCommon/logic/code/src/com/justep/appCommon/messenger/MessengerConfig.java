package com.justep.appCommon.messenger;

import org.dom4j.Document;

import com.justep.appCommon.ConfigUtils;

public class MessengerConfig {
	private static final String CONFIG_FILE = "/appCommon/conf/messenger.xml";
	
	private boolean enabled;
	private String host;
	private int port;
	private String domain;

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getHost() {
		return host;
	}

	public void setHost(String host) {
		this.host = host;
	}

	public int getPort() {
		return port;
	}

	public void setPort(int port) {
		this.port = port;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}
	
	public MessengerConfig(String host, int port, String domain) {
		this.enabled = true;
		this.host = host;
		this.port = port;
		this.domain = domain;
	}
	
	public static MessengerConfig createByConfigFile() {
		Document conf = ConfigUtils.getBizConfig(CONFIG_FILE);
		
		boolean enabled = ConfigUtils.getBooleanConfigItem(conf, "//enabled", true);
		String host = ConfigUtils.getStringConfigItem(conf, "//host", "");
		String port = ConfigUtils.getStringConfigItem(conf, "//port", "");
		String domain = ConfigUtils.getStringConfigItem(conf, "//domain", "");

		MessengerConfig msgConf = new MessengerConfig(host, Integer.parseInt(port), domain);
		msgConf.setEnabled(enabled);
		return msgConf;
	}
}
