package com.becom.test;

/**
 * ����
 * @author pp
 *
 */
public class TestCase {
	//������Ϣ
	private TestCaseInfo testCaseInfo;
	//������-
	private SubTestCases subTestCases;

	//2013.12.2日新增节点
	private TestCaseRollbackRecords testCaseRollbackRecords;

	public TestCaseRollbackRecords getTestCaseRollbackRecords() {
		return testCaseRollbackRecords;
	}

	public void setTestCaseRollbackRecords(TestCaseRollbackRecords testCaseRollbackRecords) {
		this.testCaseRollbackRecords = testCaseRollbackRecords;
	}

	public TestCaseInfo getTestCaseInfo() {
		return testCaseInfo;
	}

	public void setTestCaseInfo(TestCaseInfo testCaseInfo) {
		this.testCaseInfo = testCaseInfo;
	}

	public SubTestCases getSubTestCases() {
		return subTestCases;
	}

	public void setSubTestCases(SubTestCases subTestCases) {
		this.subTestCases = subTestCases;
	}

}
