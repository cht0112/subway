package com.becom.test;

/**
 * 	<Application ID="1" Type="Socket">
 * @author pp
 *2012-11-13修改节点名称ConnectType
 */
public class Application {
	private Integer id;
	private String type;
	//private TCP tcp;
	private String protocolType;
	private String connectType;

	public String getProtocolType() {
		return protocolType;
	}

	public void setProtocolType(String protocolType) {
		this.protocolType = protocolType;
	}

	public String getConnectType() {
		return connectType;
	}

	public void setConnectType(String connectType) {
		this.connectType = connectType;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	/*public TCP getTcp() {
		return tcp;
	}

	public void setTcp(TCP tcp) {
		this.tcp = tcp;
	}*/

}
