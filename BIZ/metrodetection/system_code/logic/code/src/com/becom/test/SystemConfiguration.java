package com.becom.test;
/**
 * ϵͳ���� �Ƿ��Զ������Ƿ��Զ�ͬ��
 * <SystemConfiguration AutoPowerOn="True" AutoParameterSync="True">
 * @author pp
 *2012-11-13日去除parameters节点
 */
public class SystemConfiguration {
	private String autoPowerOn;
	private String autoParameterSync;
	//private Parameters parameters;

	public String getAutoPowerOn() {
		return autoPowerOn;
	}

	public void setAutoPowerOn(String autoPowerOn) {
		this.autoPowerOn = autoPowerOn;
	}

	public String getAutoParameterSync() {
		return autoParameterSync;
	}

	public void setAutoParameterSync(String autoParameterSync) {
		this.autoParameterSync = autoParameterSync;
	}

	/*public Parameters getParameters() {
		return parameters;
	}

	public void setParameters(Parameters parameters) {
		this.parameters = parameters;
	}*/

}
