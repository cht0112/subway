import java.io.IOException;
import java.util.List;
import java.util.UUID;

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
import com.justep.ui.system.service.permission.MenuUtils;
import com.justep.ui.impl.JProcessorImpl;
import com.justep.ui.util.NetUtils;


public class GetProcessTree extends JProcessorImpl {

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		super.doPost(request, response);
		String type = request.getParameter("type");
		
		Document domMenus = MenuUtils.getMenus(NetUtils.getBSessionID(request),
				NetUtils.getExecutor(request), 
				NetUtils.getExecuteContext(request),
				NetUtils.getLanguage(request));
		Action action = new Action();
		action.setProcess("/SA/OPM/system/systemProcess");
		action.setActivity("mainActivity");
		action.setName("queryProcessAction");
		action.setParameter("type", "flow");
		action.setParameter("range", domMenus);
		
		String bsessionID = NetUtils.getBSessionID(request);
		String language = NetUtils.getLanguage(request);
		ActionResult ar = ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, bsessionID, language, null);
		Document result = null;
		if (ar.isSuccess()){
			Document arDocument = (Document)ar.getContent();
			Element elmTreeRoot = (Element) arDocument.selectSingleNode("/*[local-name()='root']/*[local-name()='data']/*[local-name()='xml']/*[local-name()='root']");
			
			//System.out.println(domFunctree.asXML());
	
			Document domRows = DocumentHelper.createDocument(org.dom4j.DocumentHelper
					.createElement("rows"));
			
			Element elmRows = domRows.getRootElement();
			
			boolean isTree = "tree".equals(type);
			transRowData(elmTreeRoot, elmRows, "", isTree);
			
	//		System.out.println(domRows.asXML());
			response.setContentType("text/xml");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(domRows.asXML());
			
		}else{
			Document arDocument = (Document)ar.getContent();
			throw new RuntimeException(arDocument.asXML());
			/*
			response.setContentType("text/xml");
			response.setCharacterEncoding("UTF-8");
			Document arDocument = (Document)ar.getContent();
			response.getWriter().write(arDocument.asXML());
			*/
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
