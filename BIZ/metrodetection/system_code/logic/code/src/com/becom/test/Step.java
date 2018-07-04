package com.becom.test;

/**
 * !--������Ϣ OperatePlaceΪִ�з���ȷ�����������ߣ�TypeΪ����������ͣ�ȷ�����Ӧ�Ļ���������Ϣ
 * 
 * @author pp
 * 2012-11-13去掉id和name
 */
public class Step {
	//private Integer id;
	// ���
	//private String name;
	// ����
	private String description;
	// ִ�з���ȷ������������
	private String operatePlace;
	// ����������ͣ�ȷ�����Ӧ�Ļ���������Ϣ
	private String type;
	// ���輶��
	//private StepLevel stepLevel;
	private String stepLevel;
	// ����˳��
	private String stepNo;
	// Ԥ�ڽ��
	private String stepResult;
	private Application application;
	// ������
	private Execution execution;
	// ����ִ�б���
	private StepReoprt stepReoprt;

	/*public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}*/

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getOperatePlace() {
		return operatePlace;
	}

	public void setOperatePlace(String operatePlace) {
		this.operatePlace = operatePlace;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStepLevel() {
		return stepLevel;
	}

	public void setStepLevel(String stepLevel) {
		this.stepLevel = stepLevel;
	}

	public String getStepNo() {
		return stepNo;
	}

	public void setStepNo(String stepNo) {
		this.stepNo = stepNo;
	}

	public String getStepResult() {
		return stepResult;
	}

	public void setStepResult(String stepResult) {
		this.stepResult = stepResult;
	}


	public StepReoprt getStepReoprt() {
		return stepReoprt;
	}

	public void setStepReoprt(StepReoprt stepReoprt) {
		this.stepReoprt = stepReoprt;
	}

	/*public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}*/

	public Application getApplication() {
		return application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}

	public Execution getExecution() {
		return execution;
	}

	public void setExecution(Execution execution) {
		this.execution = execution;
	}

}
