package com.becom.test;

/**
 * ���񱨸���Ϣ
 * 
 * @author pp
 * 
 */
public class TaskReport {
	// ʵ�ʲ���ԱID
	private String operatorID;
	// ����ʵ�ʿ�ʼ����
	private String taskStartDate;
	// ����ʵ�ʽ�������
	private String taskEndDate;
	// ����ִ��״̬ 0��δִ�У�1��׼��ִ�У�2��ִ���У�3����ɣ�4���޷�ִ��
	private String taskStatus;
	// ����ִ�н�� 0��δ֪�� 1���ɹ��� 2��ʧ�ܣ� 3���޷����
	private String taskCheck;

	public String getOperatorID() {
		return operatorID;
	}

	public void setOperatorID(String operatorID) {
		this.operatorID = operatorID;
	}

	public String getTaskStartDate() {
		return taskStartDate;
	}

	public void setTaskStartDate(String taskStartDate) {
		this.taskStartDate = taskStartDate;
	}

	public String getTaskEndDate() {
		return taskEndDate;
	}

	public void setTaskEndDate(String taskEndDate) {
		this.taskEndDate = taskEndDate;
	}

	public String getTaskStatus() {
		return taskStatus;
	}

	public void setTaskStatus(String taskStatus) {
		this.taskStatus = taskStatus;
	}

	public String getTaskCheck() {
		return taskCheck;
	}

	public void setTaskCheck(String taskCheck) {
		this.taskCheck = taskCheck;
	}

}
