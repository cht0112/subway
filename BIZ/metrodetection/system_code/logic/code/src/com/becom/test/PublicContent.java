package com.becom.test;

/**
 * ���������еĹ�������
 * @author pp
 *2012-11-14日xml文件public部分增加内容
 */
public class PublicContent {
	//��ĿID
	private String projectId;
	//项目名称
	private String projectName;
	//产品名称
	private String productName;
	//委托单位
	private String assigned;
	//开发单位
	private String develop;
	//检测对象类别
	private String detectionObjType;
	//检测对象
	private String detectionObj;
	//业务类型
	private String bussinessType;
	//业务阶段
	private String bussinessStage;
	//����ID
	private String taskId;
	//2013.3.4新增任务名称节点
	private String taskName;
	//�ƻ�����ԱID
	private String planOperatorID;
	//�ƻ���ʼ����
	private String taskPlanStartDate;
	//�ƻ���������
	private String taskPlanEndDate;
	//��������:������+ҵ������+ҵ��׶�
	private String taskArea;
	//����һ��/�ڶ���
	private String taskIterative;
	//���񱨸���Ϣ
	private TaskReport taskReport;

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getPlanOperatorID() {
		return planOperatorID;
	}

	public void setPlanOperatorID(String planOperatorID) {
		this.planOperatorID = planOperatorID;
	}

	public String getTaskPlanStartDate() {
		return taskPlanStartDate;
	}

	public void setTaskPlanStartDate(String taskPlanStartDate) {
		this.taskPlanStartDate = taskPlanStartDate;
	}

	public String getTaskPlanEndDate() {
		return taskPlanEndDate;
	}

	public void setTaskPlanEndDate(String taskPlanEndDate) {
		this.taskPlanEndDate = taskPlanEndDate;
	}

	public String getTaskArea() {
		return taskArea;
	}

	public void setTaskArea(String taskArea) {
		this.taskArea = taskArea;
	}

	public String getTaskIterative() {
		return taskIterative;
	}

	public void setTaskIterative(String taskIterative) {
		this.taskIterative = taskIterative;
	}

	public TaskReport getTaskReport() {
		return taskReport;
	}

	public void setTaskReport(TaskReport taskReport) {
		this.taskReport = taskReport;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getAssigned() {
		return assigned;
	}

	public void setAssigned(String assigned) {
		this.assigned = assigned;
	}

	public String getDevelop() {
		return develop;
	}

	public void setDevelop(String develop) {
		this.develop = develop;
	}

	public String getDetectionObjType() {
		return detectionObjType;
	}

	public void setDetectionObjType(String detectionObjType) {
		this.detectionObjType = detectionObjType;
	}

	public String getDetectionObj() {
		return detectionObj;
	}

	public void setDetectionObj(String detectionObj) {
		this.detectionObj = detectionObj;
	}

	public String getBussinessType() {
		return bussinessType;
	}

	public void setBussinessType(String bussinessType) {
		this.bussinessType = bussinessType;
	}

	public String getBussinessStage() {
		return bussinessStage;
	}

	public void setBussinessStage(String bussinessStage) {
		this.bussinessStage = bussinessStage;
	}
	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

}
