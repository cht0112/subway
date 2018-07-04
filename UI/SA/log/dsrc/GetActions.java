import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.justep.biz.client.Action;
import com.justep.biz.client.ActionEngine;
import com.justep.biz.client.ActionUtils;
import com.justep.biz.client.StreamCallback;
import com.justep.ui.system.service.permission.MenuUtils;
import com.justep.ui.JProcessor;
import com.justep.ui.exception.UIException;
import com.justep.ui.util.NetUtils;


public class GetActions implements JProcessor {

	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Document instance = NetUtils.getInstance(request);
		String process = ((Element)instance.selectSingleNode("/form/process")).getTextTrim();
		String activity = ((Element)instance.selectSingleNode("/form/activity")).getTextTrim();
		
		Action action = new Action();
		action.setProcess("/SA/log/logProcess");
		action.setActivity("mainActivity");
		action.setName("getActionsAction");
		action.setExecutor(NetUtils.getExecutor(request));
		action.setExecuteContext(NetUtils.getExecuteContext(request));
		Element processes = DocumentHelper.createElement("items");;
		if ("*".equals(process) || "*".equals(activity)){
			Document menuDoc = MenuUtils.getMenus(NetUtils.getBSessionID(request), 
					NetUtils.getExecutor(request),
					NetUtils.getExecuteContext(request), 
					NetUtils.getLanguage(request));
			List<Element> items = menuDoc.selectNodes("//item[@process!='' and @activity!='']");
			for (Element item : items){
				Element e = processes.addElement("item");
				e.addAttribute("process", item.attributeValue("process"));
				e.addAttribute("activity", item.attributeValue("activity"));
			}
		}else{
			Element e = processes.addElement("item");
			e.addAttribute("process", process);
			e.addAttribute("activity", activity);
		}
		
		action.setParameter("processes", processes);
		ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, NetUtils.getBSessionID(request), NetUtils.getLanguage(request), new StreamCallback(response));
	}
	
	
	
	
}
