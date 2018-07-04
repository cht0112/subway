package com.justep.appCommon.daisy;

abstract class DaisyCallerBase {
	private DaisyConfig config;

	public DaisyCallerBase(DaisyConfig config) {
		this.config = config;
	}

	public DaisyConfig getConfig() {
		return config;
	}

	public abstract String getPath();

	private String getBaseURL() {
		return (config.isHttps() ? "https" : "http") + "://" + config.getIPAddress() + ":" + config.getIPPort()
				+ DaisyConstants.BASE_PATH + getPath();
	}

	public String getURL(String... params) {
		StringBuffer url = new StringBuffer(getBaseURL());
		for (String param : params) {
			url.append("/");
			url.append(param);
		}
		return url.toString();
	}
}
