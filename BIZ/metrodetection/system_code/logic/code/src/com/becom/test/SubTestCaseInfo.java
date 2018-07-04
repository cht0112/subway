package com.becom.test;

/**
 * ��������Ϣ
 * 
 * @author pp
 * 
 */
public class SubTestCaseInfo {
	// ������ID
	private String subCaseID;
	// ���������
	private String subCaseName;
	// �������
	private String subCaseLevel;
	// ������˳��
	private String subCaseSeq;
	// �������ʱ��Ĭ�ϵ�λСʱ
	private String subCaseSpendTime;
	// �������� ��ʱ����
	//private String subCaseToolsType;
	// �������� ��ʱ����
	//private String subCaseToolsCount;
	// ����������Ϣ
	//private EnvironmentConfig environmentConfig;
	private SystemConfiguration systemConfiguration;
	// 1��AG��SC������2������ԱȨ���Ѿ��·���AG��
	private String preCondition;
	//指标名称
	private String indexName;

	public String getIndexName() {
		return indexName;
	}

	public void setIndexName(String indexName) {
		this.indexName = indexName;
	}

	public String getSubCaseID() {
		return subCaseID;
	}

	public void setSubCaseID(String subCaseID) {
		this.subCaseID = subCaseID;
	}

	public String getSubCaseName() {
		return subCaseName;
	}

	public void setSubCaseName(String subCaseName) {
		this.subCaseName = subCaseName;
	}

	public String getSubCaseLevel() {
		return subCaseLevel;
	}

	public void setSubCaseLevel(String subCaseLevel) {
		this.subCaseLevel = subCaseLevel;
	}

	public String getSubCaseSeq() {
		return subCaseSeq;
	}

	public void setSubCaseSeq(String subCaseSeq) {
		this.subCaseSeq = subCaseSeq;
	}

	public String getSubCaseSpendTime() {
		return subCaseSpendTime;
	}

	public void setSubCaseSpendTime(String subCaseSpendTime) {
		this.subCaseSpendTime = subCaseSpendTime;
	}

	/*public String getSubCaseToolsType() {
		return subCaseToolsType;
	}

	public void setSubCaseToolsType(String subCaseToolsType) {
		this.subCaseToolsType = subCaseToolsType;
	}

	public String getSubCaseToolsCount() {
		return subCaseToolsCount;
	}

	public void setSubCaseToolsCount(String subCaseToolsCount) {
		this.subCaseToolsCount = subCaseToolsCount;
	}

	public EnvironmentConfig getEnvironmentConfig() {
		return environmentConfig;
	}

	public void setEnvironmentConfig(EnvironmentConfig environmentConfig) {
		this.environmentConfig = environmentConfig;
	}*/

	public String getPreCondition() {
		return preCondition;
	}

	public void setPreCondition(String preCondition) {
		this.preCondition = preCondition;
	}

	public SystemConfiguration getSystemConfiguration() {
		return systemConfiguration;
	}

	public void setSystemConfiguration(SystemConfiguration systemConfiguration) {
		this.systemConfiguration = systemConfiguration;
	}

}
