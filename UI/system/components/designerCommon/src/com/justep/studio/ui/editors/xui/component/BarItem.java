package com.justep.studio.ui.editors.xui.component;

public class BarItem{
	private String name;
	private String label;
	private String img;
	BarItem(String name,String label,String img){
		this.name = name;
		this.label = label;
		this.img = img;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}			
}
