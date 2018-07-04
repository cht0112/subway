import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.List;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

import com.justep.biz.client.Action;
import com.justep.biz.client.ActionEngine;
import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.biz.client.StreamCallback;
import com.justep.ui.system.service.permission.MenuUtils;
import com.justep.ui.impl.JProcessorImpl;
import com.justep.ui.util.NetUtils;


public class GetFunctionTree extends JProcessorImpl {

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		super.doPost(request, response);
		
		try {
		
			Action actionUrl = new Action();
			actionUrl.setProcess("/SA/OPM/role/roleProcess");
			actionUrl.setActivity("mainActivity");
			actionUrl.setName("PropertiesAction");
			actionUrl.setExecutor(NetUtils.getExecutor(request));
			actionUrl.setExecuteContext(NetUtils.getExecuteContext(request));
			actionUrl.setParameter("name", "funcFile");
			ActionResult ar = ActionEngine.invokeAction(actionUrl, ActionUtils.JSON_CONTENT_TYPE, NetUtils.getBSessionID(request),
					null, null);
			String tPath = ar.getDatas().get(0).toString();
			tPath = tPath+"pingtai.function.xml";
			System.out.println(tPath+"********");
		
			Action action = new Action();
			action.setProcess("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess");
			action.setActivity("bizActivity7");
			action.setName("funcXML");
			action.setExecutor(NetUtils.getExecutor(request));
			action.setExecuteContext(NetUtils.getExecuteContext(request));
			action.setParameter("processes", tPath);
			ActionEngine.invokeAction(action, null, NetUtils.getBSessionID(request), NetUtils.getLanguage(request), null);
								
			String type = request.getParameter("type");
			
			Document domMenus = MenuUtils.getMenus(NetUtils.getLanguage(request));
			Element elmTreeRoot = (Element) domMenus.selectSingleNode("/root");
			
	//		System.out.println(domFunctree.asXML());
	
			Document domRows = DocumentHelper.createDocument(org.dom4j.DocumentHelper
					.createElement("rows"));
			Element elmRows = domRows.getRootElement();
			System.out.println(domRows);
			boolean isTree = "tree".equals(type);
			transRowData(elmTreeRoot, elmRows, "", isTree);
			
	//		System.out.println(domRows.asXML());
			
			response.setContentType("text/xml");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(domRows.asXML());
		
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		super.doGet(request, response);
		doPost(request, response); 
	}
	
	public void transRowData(Element parentElement, Element resultElement, String parentFName, boolean isTree) {
		@SuppressWarnings("unchecked")
		List<Element> childrenElements = parentElement.elements();
		for (Element childElement : childrenElements) {

			String id = childElement.attributeValue("access_id") == null ? UUID.randomUUID().toString() : childElement.attributeValue("access_id");
			String label = childElement.attributeValue("label") == null ? "" : childElement
					.attributeValue("label");
			String url = childElement.attributeValue("url") == null ? "" : childElement
					.attributeValue("url"); 
			String process = childElement.attributeValue("process") == null ? "" : childElement
					.attributeValue("process"); 
			String activity = childElement.attributeValue("activity") == null ? "" : childElement
					.attributeValue("activity"); 
			String activityFName = parentFName + "/" + label;
			boolean isFolder = (process == "");
			
			if (isTree || !isFolder) {
				Element rowElement = resultElement.addElement("row");
				rowElement.addAttribute("id", id);
				rowElement.addElement("cell");
				rowElement.addElement("cell").addText(label);
				rowElement.addElement("cell").addText(url);
				rowElement.addElement("cell").addText(process);
				rowElement.addElement("cell").addText(activity);
				rowElement.addElement("cell").addText(isFolder ? "1" : "0");
				rowElement.addElement("cell").addText(activityFName);
				if (isTree)
					transRowData(childElement, rowElement, activityFName, isTree);
				else
					transRowData(childElement, resultElement, activityFName, isTree);
			} else 
				transRowData(childElement, resultElement, activityFName, isTree);
		}
	}
}
