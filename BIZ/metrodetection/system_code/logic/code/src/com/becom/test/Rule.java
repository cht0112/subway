package com.becom.test;

public class Rule {
	private String type;
	private Generate generate;
	private Package package1;
	private Send send;
	private Receive receive;
	private Parse parse;

	public Generate getGenerate() {
		return generate;
	}

	public void setGenerate(Generate generate) {
		this.generate = generate;
	}

	public Package getPackage1() {
		return package1;
	}

	public void setPackage1(Package package1) {
		this.package1 = package1;
	}

	public Send getSend() {
		return send;
	}

	public void setSend(Send send) {
		this.send = send;
	}

	public Receive getReceive() {
		return receive;
	}

	public void setReceive(Receive receive) {
		this.receive = receive;
	}

	public Parse getParse() {
		return parse;
	}

	public void setParse(Parse parse) {
		this.parse = parse;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
