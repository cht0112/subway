package com.becom.test;


/**
 * ������ִ�н�� 
 * @author pp
 *
 */
public class SubTestCaseReport {
	//������ִ����� 0��δִ�У�1��ִ���У�2����ִ�У�3���ӳ�
	private String subCaseStatus;
	//����������� 0��δ֪��  1���ɹ���  2��ʧ�ܣ� 3������
	private String subCaseCheck;
	//������ִ������ʱ�� ��ʽYYYYMMDDHH24MISS
	private String subCaseStartTime;
	//������ʵ�ʺ�ʱ
	private String subCaseElapsedTime;
	//�ϱ�����
	private String subCaseReportDate;
	//描述
	private String subCaseDesc;

	public String getSubCaseDesc() {
		return subCaseDesc;
	}

	public void setSubCaseDesc(String subCaseDesc) {
		this.subCaseDesc = subCaseDesc;
	}

	public String getSubCaseStatus() {
		return subCaseStatus;
	}

	public void setSubCaseStatus(String subCaseStatus) {
		this.subCaseStatus = subCaseStatus;
	}

	public String getSubCaseCheck() {
		return subCaseCheck;
	}

	public void setSubCaseCheck(String subCaseCheck) {
		this.subCaseCheck = subCaseCheck;
	}

	public String getSubCaseStartTime() {
		return subCaseStartTime;
	}

	public void setSubCaseStartTime(String subCaseStartTime) {
		this.subCaseStartTime = subCaseStartTime;
	}

	public String getSubCaseElapsedTime() {
		return subCaseElapsedTime;
	}

	public void setSubCaseElapsedTime(String subCaseElapsedTime) {
		this.subCaseElapsedTime = subCaseElapsedTime;
	}

	public String getSubCaseReportDate() {
		return subCaseReportDate;
	}

	public void setSubCaseReportDate(String subCaseReportDate) {
		this.subCaseReportDate = subCaseReportDate;
	}

}
