import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.io.SAXReader;

import com.justep.biz.client.Action;
import com.justep.biz.client.ActionEngine;
import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.filesystem.FileSystemWrapper;
import com.justep.ui.JProcessor;
import com.justep.ui.exception.UIException;
import com.justep.ui.resources.ResourceManagerWrapper;
import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;


public class ProcessExecuteList implements JProcessor  {
	private static final String VIEW = "/UI/appCommon/components/processExecuteListIframe/processExecuteList/processExecuteList.xhtml";
	
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Document data = DocumentHelper.createDocument();
		data.addElement("processExecuteList").addText("processExecuteList");
		Document viewDoc = ResourceManagerWrapper.instance().getContentAsDOM4J(VIEW);
		Map<String, Object> params = new HashMap<String, Object>();
		Document result = UIUtils.xslt(viewDoc, data, params);
		UIUtils.ouputXHTML(request, response, result);
	}

}

