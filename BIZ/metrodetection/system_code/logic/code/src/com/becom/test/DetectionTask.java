package com.becom.test;

/**
 * ��������
 * @author pp
 *
 */
public class DetectionTask {
	//��������
	private PublicContent publicContent;
	//����
	private TestCases testCases;
	//ָ��ӳ��
	private IndexsContent indexsContent;

	//2013.11.04日新增md5节点
	//private String md5;

	/*public String getMd5() {
		return md5;
	}

	public void setMd5(String md5) {
		this.md5 = md5;
	}*/

	public PublicContent getPublicContent() {
		return publicContent;
	}

	public void setPublicContent(PublicContent publicContent) {
		this.publicContent = publicContent;
	}

	public TestCases getTestCases() {
		return testCases;
	}

	public void setTestCases(TestCases testCases) {
		this.testCases = testCases;
	}

	public IndexsContent getIndexsContent() {
		return indexsContent;
	}

	public void setIndexsContent(IndexsContent indexsContent) {
		this.indexsContent = indexsContent;
	}

}
