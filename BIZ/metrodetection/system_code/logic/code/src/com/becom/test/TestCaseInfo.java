package com.becom.test;

/**
 * ������Ϣ
 * ����ID��������ơ��������� �μ� test_case_base_info 
 * @author pp
 * 
 */
public class TestCaseInfo {
	// ����ID
	private String caseId;
	// �������
	private String caseName;
	// ����
	private String casePrior;
	// ����
	private String description;
	//������
	private DetectionObject detectionObject;
	//��ⷽ��
	private DetectionRange detectionRange;

	public String getCaseId() {
		return caseId;
	}

	public void setCaseId(String caseId) {
		this.caseId = caseId;
	}

	public String getCaseName() {
		return caseName;
	}

	public void setCaseName(String caseName) {
		this.caseName = caseName;
	}

	public String getCasePrior() {
		return casePrior;
	}

	public void setCasePrior(String casePrior) {
		this.casePrior = casePrior;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public DetectionObject getDetectionObject() {
		return detectionObject;
	}

	public void setDetectionObject(DetectionObject detectionObject) {
		this.detectionObject = detectionObject;
	}

	public DetectionRange getDetectionRange() {
		return detectionRange;
	}

	public void setDetectionRange(DetectionRange detectionRange) {
		this.detectionRange = detectionRange;
	}

}
