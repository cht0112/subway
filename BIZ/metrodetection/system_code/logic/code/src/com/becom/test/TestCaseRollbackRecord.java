package com.becom.test;

/**
 * 2013.12.2日新增节点
 * 检测平台任务回退记录
 * @author latitude
 *
 */

public class TestCaseRollbackRecord {
	//授权人ID
    private String authorizerID;
	//执行人ID
	private String operatorID;
	//回滚原因
	private String rollbackDesc;
	//项目ID
	private String projectID;
	//任务ID
	private String taskID;
	//用例ID
	private String caseID;
	//回滚时间（yyyy-MM-dd HH:mm:ss）
	private String rollbackTime;
	//次数
	private String times;

	public String getAuthorizerID() {
		return authorizerID;
	}

	public void setAuthorizerID(String authorizerID) {
		this.authorizerID = authorizerID;
	}

	public String getOperatorID() {
		return operatorID;
	}

	public void setOperatorID(String operatorID) {
		this.operatorID = operatorID;
	}

	public String getRollbackDesc() {
		return rollbackDesc;
	}

	public void setRollbackDesc(String rollbackDesc) {
		this.rollbackDesc = rollbackDesc;
	}

	public String getProjectID() {
		return projectID;
	}

	public void setProjectID(String projectID) {
		this.projectID = projectID;
	}

	public String getTaskID() {
		return taskID;
	}

	public void setTaskID(String taskID) {
		this.taskID = taskID;
	}

	public String getCaseID() {
		return caseID;
	}

	public void setCaseID(String caseID) {
		this.caseID = caseID;
	}

	public String getRollbackTime() {
		return rollbackTime;
	}

	public void setRollbackTime(String rollbackTime) {
		this.rollbackTime = rollbackTime;
	}

	public String getTimes() {
		return times;
	}

	public void setTimes(String times) {
		this.times = times;
	}

}
