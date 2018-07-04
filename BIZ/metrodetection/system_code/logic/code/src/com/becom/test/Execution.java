package com.becom.test;
/**
 * ִ�ж���������/����/�˹�
 * @author pp
 * <Execution Type="����" ApplicationID="1">
 *
 */
public class Execution {
	private String type;
	//private Integer applicationId;
	private Rules rules;
	//2013.8.15日新增节点
	private Pars pars;

	public Pars getPars() {
		return pars;
	}

	public void setPars(Pars pars) {
		this.pars = pars;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	/*public Integer getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(Integer applicationId) {
		this.applicationId = applicationId;
	}*/

	public Rules getRules() {
		return rules;
	}

	public void setRules(Rules rules) {
		this.rules = rules;
	}

}
