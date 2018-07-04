import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import com.justep.biz.client.Action;
import com.justep.biz.client.ActionEngine;
import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.ui.JProcessor;
import com.justep.ui.system.service.permission.MenuUtils;
import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;


public class GetProcess implements JProcessor {

	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Action action = new Action();
		action.setProcess("/SA/OPM/system/systemProcess");
		action.setActivity("mainActivity");
		action.setName("queryAllBusinessActivity2Action");
		action.setExecutor(NetUtils.getExecutor(request));
		action.setExecuteContext(NetUtils.getExecutor(request));
		Document menuDoc = getMenus(request);
		action.setParameter("range", menuDoc);
		
		String bsessionID = NetUtils.getBSessionID(request);
		String language = NetUtils.getLanguage(request);
		ActionResult ar = ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, bsessionID, language, null);
		Document result = null;
		if (ar.isSuccess()){
			Document arDocument = (Document)ar.getContent();
			result = DocumentHelper.createDocument();
			Element root = result.addElement("root");
			root.addElement("flag").addText("true");
			Element data = root.addElement("data");
			Element processes = data.addElement("processes");
			List<Object> ps = arDocument.selectNodes("//process");
			for (Object p : ps){
				Element e = (Element)p;
				Element cur = processes.addElement("row");
				cur.addElement("cell").addText(e.attributeValue("process"));
				cur.addElement("cell").addText(e.attributeValue("processLabel"));
			}
			
			Element activities = data.addElement("activities");
			List<Object> as = arDocument.selectNodes("//activity");
			for (Object a : as){
				Element e = (Element)a;
				Element cur = activities.addElement("row");
				String process = e.getParent().attributeValue("process");
				cur.addElement("cell").addText(process);
				cur.addElement("cell").addText(e.attributeValue("activity"));
				cur.addElement("cell").addText(e.attributeValue("activityLabel"));
			}
			
		}else{
			result = (Document)ar.getContent();
		}
		
		UIUtils.outputXML(response, result);
	}
	
	private Document getMenus(HttpServletRequest request){
		Document menuDoc = MenuUtils.getMenus(NetUtils.getBSessionID(request),
				NetUtils.getExecutor(request),
				NetUtils.getExecuteContext(request),
				NetUtils.getLanguage(request));
		Document result = DocumentHelper.createDocument();
		Element root = result.addElement("items");
		List<Object> items = menuDoc.selectNodes("//item[@activity!='']");
		for (Object item : items){
			Element e = (Element)item;
			Element cur = root.addElement("item");
			cur.addAttribute("process", e.attributeValue("process"));
			cur.addAttribute("activity", e.attributeValue("activity"));
		}
		
		return result;
	}
}
