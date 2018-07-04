import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.io.SAXReader;

import com.justep.biz.client.Action;
import com.justep.biz.client.ActionEngine;
import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.filesystem.FileSystemWrapper;
import com.justep.ui.JProcessor;
import com.justep.ui.exception.UIException;
import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;
import com.justep.biz.action.impl.SysParam;

public class WorkPlan implements JProcessor  {
	private static final String GET_PORTLET_DATA_ACTION = "getWorkPlanAction";
	private static final String VIEW = "/UI/OA/workPlan/process/workPlanPortlet/workPlanPortlet.xhtml";
	private static final String PROCESS = "/OA/workPlan/process/workPlanPortlet/workPlanPortletProcess";
	private static final String ACTIVITY = "workPlanActivity";
	
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Document portletData = getPortletData(request);
		Document viewPortletData = getView();
		String executor = NetUtils.getExecutor(request);
		if (executor == null){
			executor = "";
		}
		portletData.getRootElement().addElement(NetUtils.EXECUTOR).addText(executor);
		Map<String, Object> params = new HashMap<String, Object>();
		Document result = UIUtils.xslt(viewPortletData, portletData, params);
		UIUtils.ouputXHTML(request, response, result);
	}
	
	private Document getView(){
		try {
			String path = FileSystemWrapper.instance().getRealPath(VIEW);
			SAXReader reader = new SAXReader();
			return reader.read(new File(path));
		} catch (Exception e) {
			throw new UIException(e.getMessage(), e);
		}
	}	
	
	private Document getPortletData(HttpServletRequest request){
		String count = request.getParameter("count");
		if(count==null){
			count = "5";
		}
		Action action = new Action();
		action.setProcess(PROCESS);
		action.setActivity(ACTIVITY);
		action.setName(GET_PORTLET_DATA_ACTION);
		action.setExecutor(NetUtils.getExecutor(request));
		action.setExecuteContext(NetUtils.getExecuteContext(request));
		action.setParameter("count", count);
		
		String bsessionID = NetUtils.getBSessionID(request);
		String language = NetUtils.getLanguage(request);
		ActionResult ar = ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, bsessionID, language, null);
		return (Document)ar.getContent();
	}
}
