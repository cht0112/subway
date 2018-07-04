package com.becom.test;

/**
 * <FieldControl Name="�������" Type="PackageFieldConst">
 * 
 * @author pp
 * 
 */
public class FieldControl {
	private String name;
	private String type;
	// private Const const1;
	private String value;
	private String desc;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	/*
	 * public Const getConst1() { return const1; }
	 * 
	 * public void setConst1(Const const1) { this.const1 = const1; }
	 */

}
