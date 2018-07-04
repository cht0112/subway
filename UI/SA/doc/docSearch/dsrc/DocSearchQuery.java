import java.io.IOException;
import java.io.UnsupportedEncodingException;
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
import com.justep.ui.JProcessor;
import com.justep.ui.exception.UIException;
import com.justep.ui.resources.ResourceManagerWrapper;
import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;


public class DocSearchQuery implements JProcessor {
	private static final String VIEW = "/UI/SA/doc/docSearch/docSearch.xhtml";
	
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Document taskDoc = queryDocSearch(request);
		Document viewDoc = ResourceManagerWrapper.instance().getContentAsDOM4J(VIEW);
		Map<String, Object> params = new HashMap<String, Object>();
		Document result = UIUtils.xslt(viewDoc, taskDoc, params);
		UIUtils.ouputXHTML(request, response, result);
	}
	
	private Document getInstance(HttpServletRequest request){
		SAXReader reader = new SAXReader();
		try {
			return reader.read(request.getInputStream());
		} catch (Exception e) {
			throw new UIException(e.getMessage(), e);
		}
		
	}
	
	private Document queryDocSearch(HttpServletRequest request){
		Document instance = getInstance(request);
		String bsessionID = NetUtils.getBSessionID(request);
		String language = NetUtils.getLanguage(request);
		ActionResult ar;
		try {
			ar = ActionEngine.invokeActions(instance.asXML().getBytes("UTF-8"), ActionUtils.XML_CONTENT_TYPE ,ActionUtils.XML_CONTENT_TYPE, bsessionID, language, null);
			return (Document)ar.getContent();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return null;
	}
}
