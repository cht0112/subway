

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiElement;

public class Default extends BaseComponent{
	
	/**
	 * 左对齐.
	 * @param currentElement
	 */
	public void leftAlign(XuiElement currentElement) {
		//System.out.println("======leftAlign");
		List<XuiElement> list = getDesigner().getSelections();
		long minLeft = 10000;
		List<XuiElement> objEList = new ArrayList();
		
		//计算最左的坐标点
		for(XuiElement e:list){
			XuiElement objE = e;
            if("formControl".equals(e.getComponentType())){
            	objE = getDesigner().getDataModel().getObjectElement(e);
            }
				
			if(objE != null){
				objEList.add(objE);
				Map boundMap = getComponentBound(e.getDesignId());
				Long left = (Long)boundMap.get("x");
				if(left != null){
					if(left<minLeft){
						minLeft = left;
					}
				}
			}
		}
		if(minLeft != 10000){
			for(XuiElement e:objEList){
				//e.setCssStyle("left", minLeft+"px");
				getDesigner().updateJsStyle(e, new String[]{"left"},new String[]{minLeft+"px"});
			}
			getDesigner().setXuiElements(list);
		}
	}
	
	/*
	 * 获取组件的bound {x,y,w,h}
	 * @param id
	 * @return
	 */
	private Map getComponentBound(String id){
		Map paramMap = new HashMap();
		paramMap.put("id", id);
		String s = getDesigner().executeJSMethod(getDesigner().JSMETHOD_TYPE_CANVAS, "getComonentBound", paramMap);
        if(s != null && !s.equals("")){
        	Map returnMap = (Map)getDesigner().json.deserialize(s);
        	return returnMap;
        }
		return new HashMap();
	}
	
	public void rightAlign(XuiElement currentElement) {
		List<XuiElement> list = getDesigner().getSelections();
		long maxRight = 0;
		Map<XuiElement,Map> objEMap = new HashMap<XuiElement,Map>();
		
		for(XuiElement e:list){
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				objEMap.put(objE, boundMap);
				Long lt_x = (Long)boundMap.get("x");
				Long right = (Long)boundMap.get("w")+lt_x;
				if(right>maxRight){
					maxRight = right;
				}
			}
		}
		Iterator it = objEMap.keySet().iterator();
		while(it.hasNext()){
			XuiElement e = (XuiElement)it.next();
			Map boundMap = (Map)objEMap.get(e);
			Long width = (Long)boundMap.get("w");
			long left = maxRight - width.longValue();
			//e.setCssStyle("left", left+"px");
			getDesigner().updateJsStyle(e, new String[]{"left"},new String[]{left+"px"});
		}
		getDesigner().setXuiElements(list);
	}
	
	public void topAlign(XuiElement currentElement) {
		List<XuiElement> list = getDesigner().getSelections();
		long minTop = 100000;
		Map<XuiElement,Map> objEMap = new HashMap<XuiElement,Map>();
		
		for(XuiElement e:list){			
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
				objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				objEMap.put(objE, boundMap);
				Long lt_y = (Long)boundMap.get("y");
				if(lt_y<minTop){
					minTop = lt_y;
				}
			}
		}
		Iterator it = objEMap.keySet().iterator();
		while(it.hasNext()){
			XuiElement e = (XuiElement)it.next();
			Map boundMap = (Map)objEMap.get(e);
			long top = minTop;
			//e.setCssStyle("top", top+"px");
			getDesigner().updateJsStyle(e, new String[]{"top"},new String[]{top+"px"});
		}
		getDesigner().setXuiElements(list);
	}
	
	public void bottomAlign(XuiElement currentElement) {

		List<XuiElement> list = getDesigner().getSelections();
		long maxBottom = 0;
		Map<XuiElement,Map> objEMap = new HashMap<XuiElement,Map>();
		
		for(XuiElement e:list){
			
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				objEMap.put(objE, boundMap);
				Long lt_y = (Long)boundMap.get("y");
				Long height = (Long)boundMap.get("h") + lt_y;
				if(height>maxBottom){
					maxBottom = height;
				}
			}
		}
		Iterator it = objEMap.keySet().iterator();
		while(it.hasNext()){
			XuiElement e = (XuiElement)it.next();
			Map boundMap = (Map)objEMap.get(e);
			Long height = (Long)boundMap.get("h");
			long top = maxBottom - height.longValue();
			//e.setCssStyle("top", top+"px");
			getDesigner().updateJsStyle(e, new String[]{"top"},new String[]{top+"px"});
		}
		getDesigner().setXuiElements(list);
	
	}
	
	public void horizontalCenterAlign(XuiElement currentElement) {

		List<XuiElement> list = getDesigner().getSelections();		
		Map<XuiElement,Map> objEMap = new HashMap<XuiElement,Map>();
		
		XuiElement baseE = null ; 
		for(int i=0;i<list.size();i++){
			XuiElement e = list.get(i);			
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				objEMap.put(objE, boundMap);
				if(i==0)
					baseE = objE;				
			}
		}
		Map bound = objEMap.get(baseE);
		Long bx = (Long)bound.get("x");
		Long bw = (Long)bound.get("w");
		long cx = bx.longValue() + (long)bw.longValue()/2;
		Iterator it = objEMap.keySet().iterator();
		while(it.hasNext()){
			XuiElement e = (XuiElement)it.next();
			if(baseE!=e){
				Map boundMap = (Map)objEMap.get(e);
				Long width = (Long)boundMap.get("w");
				long left = cx - (long)width.longValue()/2;
				//e.setCssStyle("left", left+"px");
				getDesigner().updateJsStyle(e, new String[]{"left"},new String[]{left+"px"});
			}			
		}
		getDesigner().setXuiElements(list);
	
	}

	public void verticalCenterAlign(XuiElement currentElement) {

		List<XuiElement> list = getDesigner().getSelections();		
		Map<XuiElement,Map> objEMap = new HashMap<XuiElement,Map>();
		
		XuiElement baseE = null ; 
		for(int i=0;i<list.size();i++){
			XuiElement e = list.get(i);
			
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				objEMap.put(objE, boundMap);
				if(i==0)
					baseE = objE;				
			}
		}
		Map bound = objEMap.get(baseE);
		Long by = (Long)bound.get("y");
		Long bh = (Long)bound.get("h");
		long cy = by.longValue() + (long)bh.longValue()/2;
		Iterator it = objEMap.keySet().iterator();
		while(it.hasNext()){
			XuiElement e = (XuiElement)it.next();
			if(baseE!=e){
				Map boundMap = (Map)objEMap.get(e);
				Long height = (Long)boundMap.get("h");
				long top = cy - (long)height.longValue()/2;
				//e.setCssStyle("top", top+"px");
				getDesigner().updateJsStyle(e, new String[]{"top"},new String[]{top+"px"});
			}
		}
		getDesigner().setXuiElements(list);
	
	}
	
	public void horizontalSpaceEqually(XuiElement currentElement) {
		List<XuiElement> list = getDesigner().getSelections();		
		List<ComponentWapper> coms = new ArrayList<ComponentWapper>();		
		for(int i=0;i<list.size();i++){
			XuiElement e = list.get(i);
			
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				coms.add(new ComponentWapper(e,objE,boundMap));				
			}
		}
		Collections.sort(coms, new Comparator<ComponentWapper>(){
			public int compare(ComponentWapper o1, ComponentWapper o2) {
				Map bound1 = o1.getBound();
				Map bound2 = o2.getBound();
				Long x1 = (Long)bound1.get("x");
				Long x2 = (Long)bound2.get("x");				
				return x1.compareTo(x2);
			}});
		
		int size = coms.size(); 
		if(size>1){
			Long min_x = (Long)coms.get(0).getBound().get("x") + (Long)coms.get(0).getBound().get("w");
			Long max_x = (Long)coms.get(size-1).getBound().get("x");
			long dis = max_x.longValue() - min_x.longValue();
			for(int i = 1;i<coms.size()-1;i++){
				ComponentWapper com = coms.get(i);				
				Long width = (Long)com.getBound().get("w");
				dis -= width.longValue();
			}
			long avg = (long)(dis)/(size-1);
			if(avg>0){
				long temp = min_x + avg;
				for(int i = 1;i<coms.size();i++){
					ComponentWapper com = coms.get(i);				
					Long width = (Long)com.getBound().get("w");
					long left = temp ;
					//com.getXuiE().setCssStyle("left", left+"px");
					getDesigner().updateJsStyle(com.getXuiE(), new String[]{"left"},new String[]{left+"px"});
					temp += width.longValue() + avg;
				}
			}else{
				avg = 20;
				long temp = min_x + avg;
				for(int i = 1;i<coms.size();i++){
					ComponentWapper com = coms.get(i);				
					Long width = (Long)com.getBound().get("w");
					long left = temp ;
					//com.getXuiE().setCssStyle("left", left+"px");
					getDesigner().updateJsStyle(com.getXuiE(), new String[]{"left"},new String[]{left+"px"});
					temp += width.longValue() + avg;
				}
			}			
			getDesigner().setXuiElements(list);
		}			
	
	}
	
	public void verticalSpaceEqually(XuiElement currentElement) {
		List<XuiElement> list = getDesigner().getSelections();		
		List<ComponentWapper> coms = new ArrayList<ComponentWapper>();		
		for(int i=0;i<list.size();i++){
			XuiElement e = list.get(i);
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				coms.add(new ComponentWapper(e,objE,boundMap));				
			}
		}
		Collections.sort(coms, new Comparator<ComponentWapper>(){
			public int compare(ComponentWapper o1, ComponentWapper o2) {
				Map bound1 = o1.getBound();
				Map bound2 = o2.getBound();
				Long y1 = (Long)bound1.get("y");
				Long y2 = (Long)bound2.get("y");				
				return y1.compareTo(y2);
			}});
		
		int size = coms.size(); 
		if(size>1){
			Long min_y = (Long)coms.get(0).getBound().get("y") + (Long)coms.get(0).getBound().get("h");
			Long max_y = (Long)coms.get(size-1).getBound().get("y");
			long dis = max_y.longValue() - min_y.longValue();
			for(int i = 1;i<coms.size()-1;i++){
				ComponentWapper com = coms.get(i);				
				Long height = (Long)com.getBound().get("h");
				dis -= height.longValue();
			}
			long avg = (long)(dis)/(size-1);
			if(avg>0){
				long temp = min_y + avg;
				for(int i = 1;i<coms.size();i++){
					ComponentWapper com = coms.get(i);				
					Long height = (Long)com.getBound().get("h");
					long top = temp ;
					//com.getXuiE().setCssStyle("top", top+"px");
					getDesigner().updateJsStyle(com.getXuiE(), new String[]{"top"},new String[]{top+"px"});
					temp += height.longValue() + avg;
				}	
			}else{
				avg = 20;
				long temp = min_y + avg;
				for(int i = 1;i<coms.size();i++){
					ComponentWapper com = coms.get(i);				
					Long height = (Long)com.getBound().get("h");
					long top = temp ;
					//com.getXuiE().setCssStyle("top", top+"px");
					getDesigner().updateJsStyle(com.getXuiE(), new String[]{"top"},new String[]{top+"px"});
					temp += height.longValue() + avg;
				}
			}			
			getDesigner().setXuiElements(list);
		}			
	}
	
	class ComponentWapper{
		private XuiElement xuiE;
		private Map bound;
		private XuiElement objE;
		
		public ComponentWapper(XuiElement xuiE, XuiElement objE, Map bound){
			this.xuiE = xuiE;
			this.objE = objE;
			this.bound = bound;
		}

		public XuiElement getXuiE() {
			return xuiE;
		}

		public void setXuiE(XuiElement xuiE) {
			this.xuiE = xuiE;
		}

		public Map getBound() {
			return bound;
		}

		public void setBound(Map bound) {
			this.bound = bound;
		}

		public XuiElement getObjE() {
			return objE;
		}

		public void setObjE(XuiElement objE) {
			this.objE = objE;
		}		
	}
	
	public void replicateWidth(XuiElement currentElement) {
		List<XuiElement> list = getDesigner().getSelections();		
		Map<XuiElement,Map> objEMap = new HashMap<XuiElement,Map>();
		
		XuiElement baseE = null ; 
		for(int i=0;i<list.size();i++){
			XuiElement e = list.get(i);
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				objEMap.put(objE, boundMap);
				if(i==0)
					baseE = objE;				
			}
		}
		Map bound = objEMap.get(baseE);
		Long bw = (Long)bound.get("w");
		Iterator it = objEMap.keySet().iterator();
		while(it.hasNext()){
			XuiElement e = (XuiElement)it.next();
			if(baseE!=e){
				Map boundMap = (Map)objEMap.get(e);
				//e.setCssStyle("width", bw+"px");
				getDesigner().updateJsStyle(e, new String[]{"width"},new String[]{bw+"px"});
			}			
		}
		getDesigner().setXuiElements(list);
	}
	
	public void replicateHeight(XuiElement currentElement) {
		List<XuiElement> list = getDesigner().getSelections();		
		Map<XuiElement,Map> objEMap = new HashMap<XuiElement,Map>();
		
		XuiElement baseE = null ; 
		for(int i=0;i<list.size();i++){
			XuiElement e = list.get(i);
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				objEMap.put(objE, boundMap);
				if(i==0)
					baseE = objE;				
			}
		}
		Map bound = objEMap.get(baseE);
		Long bh = (Long)bound.get("h");
		Iterator it = objEMap.keySet().iterator();
		while(it.hasNext()){
			XuiElement e = (XuiElement)it.next();
			if(baseE!=e){
				Map boundMap = (Map)objEMap.get(e);
				//e.setCssStyle("height", bh+"px");
				getDesigner().updateJsStyle(e, new String[]{"height"},new String[]{bh+"px"});
			}			
		}
		getDesigner().setXuiElements(list);	
	}

	public void horizontalCenter(XuiElement currentElement) {
		List<XuiElement> list = getDesigner().getSelections();	
		
		for(int i=0;i<list.size();i++){
			XuiElement e = list.get(i);
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				Long width = (Long)boundMap.get("w");
				XuiElement pE = e.getParentElement();
				Map pBound = this.getComponentBound(pE.getDesignId());
				Long pWidth = (Long)pBound.get("w");
				if(pWidth!=null){
					long left = (long)((pWidth.longValue()-width.longValue())/2);
					//e.setCssStyle("left", left+"px");
					getDesigner().updateJsStyle(e, new String[]{"left"},new String[]{left+"px"});	
				}
			}
		}		
		getDesigner().setXuiElements(list);	
	}
	
	public void verticalCenter(XuiElement currentElement) {
		List<XuiElement> list = getDesigner().getSelections();	
		
		for(int i=0;i<list.size();i++){
			XuiElement e = list.get(i);
			XuiElement objE = e;
			if("formControl".equals(e.getComponentType())){
	           	objE = getDesigner().getDataModel().getObjectElement(e);
	        }
			if(objE != null){				
				Map boundMap = getComponentBound(e.getDesignId());
				Long height = (Long)boundMap.get("h");
				XuiElement pE = e.getParentElement();
				Map pBound = this.getComponentBound(pE.getDesignId());
				Long pHeight = (Long)pBound.get("h");
				if(pHeight!=null){
					long top = (long)((pHeight.longValue()-height.longValue())/2);
					//e.setCssStyle("top", top+"px");
					getDesigner().updateJsStyle(e, new String[]{"top"},new String[]{top+"px"});	
				}				
			}
		}		
		getDesigner().setXuiElements(list);	
	
	}
}
