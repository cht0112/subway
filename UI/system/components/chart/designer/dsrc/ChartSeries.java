import java.util.HashMap;

import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import com.justep.desinger.chart.runtime.render.ChartRender;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiElement;

public class ChartSeries extends BaseComponent {

	/**
	 * 删除
	 */
	public void afterRemove(XuiElement parentElement, String designerId) {
		render(parentElement);
	}
	public void paint(XuiElement xuiElement,XuiElement before){
		((BaseComponent)xuiElement.getParentElement().getParentElement().getParentElement().getComponent()).repaint(xuiElement.getParentElement());//.paint(xuiElement, before);
	}

	/**
	 * 前台渲染
	 * @param currentElement
	 */
	@SuppressWarnings({ "unchecked", "static-access" })
	private void render(XuiElement currentElement){
		
		//图表-资源文件更新
		XuiElement cE = currentElement.getParentElement().getParentElement();
		
		HashMap ps = new HashMap();
		ps.put("id",cE.getDesignId());
		//{"x":4,"y":4,"w":491,"h":369}
		String chartBoundStr = this.getDesigner().executeJSMethod(this.getDesigner().JSMETHOD_TYPE_ID, "getChartBound", ps);
		//System.out.println("===ChartSeries--getChartBound" + chartBoundStr);
		
		int chartWidth = 500;
		int chartHeight = 375;
		if(chartBoundStr != null && !chartBoundStr.equals("")){
			chartBoundStr = chartBoundStr.substring(1, chartBoundStr.length()-1);
			String [] cbs = chartBoundStr.split(",");
			for(String t : cbs){
				String [] ts = t.split(":");
				String f = ts[0];
				if(f.equals("\"w\"")){
					chartWidth = Integer.parseInt(ts[1]) ==0 ? 500 : Integer.parseInt(ts[1]);
				}else if(f.equals("\"h\"")){
					chartHeight = Integer.parseInt(ts[1]) ==0 ? 375 : Integer.parseInt(ts[1]);
				}
			}
		}
		
		//取设计器操作后的 高度宽度 作为 图表的 高度 宽度
		XuiElement placeE = cE.getXuiDataModel().getObjectElement(cE);
		if(placeE != null){
			String style = placeE.getProperyValue("style");
			if(style != null && !style.equals("")){				
				String cw = "";
				String ch = "";
				String [] temp = style.split(";");
				for(String t : temp){
					if(t.indexOf(":")!= -1){
						String [] tt = t.split(":");
						if(tt[0].trim().equalsIgnoreCase("width")){
							cw = tt[1].trim();
						}else if(tt[0].trim().equalsIgnoreCase("height")){
							ch = tt[1].trim();
						}
					}
				}		
				if(!cw.equals("") && cw.indexOf("%") == -1){
					cw = cw.substring(0, cw.length()-2);
					chartWidth = Integer.parseInt(cw);
				}				
				if(!ch.equals("") && ch.indexOf("%") == -1){
					ch = ch.substring(0, ch.length()-2);
					chartHeight = Integer.parseInt(ch);
				}
			}
		}

		
		
		String info = W3cDocumentHelper.asXML(cE.getOriginElement());
		info = info.replace("<div ", "<div xmlns:xui=\"http://www.justep.com/xui\" ");
		info = info.replace("<xhtml:div ", "<xhtml:div xmlns:xui=\"http://www.justep.com/xui\" ");
		info = info.replace("<series ", "<series xmlns:xui=\"http://www.justep.com/xui\" ");
		info = info.replaceAll("&", "&amp;");
		String chartImageInfo = "";
		Element chartComponentE = null;
		try {
			chartComponentE = (Element) DocumentHelper.parseText(info).getRootElement();
		} catch (DocumentException e) {
			e.printStackTrace();
		}
		ChartRender chartRender = new ChartRender(chartComponentE,chartWidth,chartHeight);
		chartImageInfo = chartRender.executeChart();

		//触发前台渲染		
		HashMap params = new HashMap();
		params.put("id",cE.getDesignId());
		params.put("image", chartImageInfo);
		this.getDesigner().executeJSMethod(this.getDesigner().JSMETHOD_TYPE_ID, "paintComponent", params);
				
	}
	
}
