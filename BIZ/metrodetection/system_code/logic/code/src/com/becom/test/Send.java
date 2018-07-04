package com.becom.test;

/**
 * <!--���͹��� ����ʱ�䣨��ʱ������Ч�����ظ�������ʱ��--> <Send SendTime="0" RepeatTimes="1"
 * SpanTime="0">
 * 
 * @author pp
 * 
 */
public class Send {
	// ����ʱ�䣨��ʱ������Ч��
	private Integer sendTime;
	// �ظ�����
	private Integer repeatTimes;
	// ���ʱ��
	private Integer spanTime;
	// �������ͣ���ʱ����/��ʱ����
	private String sendType;

	public String getSendType() {
		return sendType;
	}

	public void setSendType(String sendType) {
		this.sendType = sendType;
	}

	public Integer getSendTime() {
		return sendTime;
	}

	public void setSendTime(Integer sendTime) {
		this.sendTime = sendTime;
	}

	public Integer getRepeatTimes() {
		return repeatTimes;
	}

	public void setRepeatTimes(Integer repeatTimes) {
		this.repeatTimes = repeatTimes;
	}

	public Integer getSpanTime() {
		return spanTime;
	}

	public void setSpanTime(Integer spanTime) {
		this.spanTime = spanTime;
	}

}
