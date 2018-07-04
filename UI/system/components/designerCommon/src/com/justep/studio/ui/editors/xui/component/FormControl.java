package com.justep.studio.ui.editors.xui.component;
import java.util.HashMap;
import java.util.Map;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiElement;


        
  
public class FormControl extends BaseComponent {
   
	public void genaControlLabel(XuiElement element){
		
		String id = element.getProperyValue("id");

		if(element.isInnerComponent()){
			element = element.getXuiDataModel().findOwnerComponent(element);
		}
		XuiElement placeE = element.getXuiDataModel().getObjectElement(element);
		if(placeE != null){
			String position = placeE.getCssStyle("position");
			Integer top = parseInt(placeE.getCssStyle("top"));
			Integer left = parseInt(placeE.getCssStyle("left"));
			StringBuffer style=  new StringBuffer();
			if("absolute".equals(position)){
				style.append("position:absolute");
				if(top != null){
					style.append(";top:"+(top+8)+"px");
				}
				if(left != null){
					left -= 80;
					if(left<0){
						left = 0;
					}
					style.append(";left:"+left+"px");
				}
			}
			XuiElement e = element.getXuiDataModel().insertBefore(placeE.getOriginElement(), "controlLabel", null);
            e.setPropertyValue("control-label", id);
            String oldStyle = e.getProperyValue("style");
            String newStyle = oldStyle+";"+style;
            if(newStyle.length()>3){
               e.setPropertyValue("style", newStyle);
            }
            
			org.w3c.dom.Element layoutNode = null;
			if(e.getParentElement().getName().equals("view")){
				layoutNode = W3cDocumentHelper.getFirstChildXmlElementByTag(e.getParentElement().getOriginElement(), "layout");
			}else{
				layoutNode = e.getParentElement().getOriginElement();
			}
 
			StringBuffer sbf = new StringBuffer();
			this.getDesigner().parseLayout(e.getOriginElement(), e.getOriginElement(), sbf);
			Map map = new HashMap();
			map.put("data", "<layout>"+sbf.toString()+"</layout>"); 
            if(e.getParentElement().getName().equals("layout")){
            	map.put("parentElementId", e.getParentElement().getParentElement().getDesignId());
            }else{
			   map.put("parentElementId", e.getParentElement().getDesignId());
            }
			map.put("before", element.getDesignId());
			this.getDesigner().executeJSMethod(this.getDesigner().JSMETHOD_TYPE_CANVAS, "paintComponent", map);
		}
	}
	
	private Integer parseInt(String s){
		if(s == null || s.equals("")){
			return null;
		}
		StringBuffer sbf = new StringBuffer();
		for(int i = 0,l=s.length();i<l;i++){
			if(s.charAt(i)>='0' && s.charAt(i)<='9'){
				sbf.append(s.charAt(i));
			}
		}
		return Integer.parseInt(sbf.toString());
	}
}
