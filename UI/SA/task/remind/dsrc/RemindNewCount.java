import java.io.File;
import java.io.IOException;
import java.util.HashMap;

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


public class RemindNewCount implements JProcessor {
	private static final String VIEW = "/UI/SA/task/remind/remindNewCount.xsl";
	
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Action action = new Action();
		action.setProcess("/SA/task/remind/remindProcess");
		action.setActivity("mainActivity");
		action.setName("queryRemindCountAction");
		action.setExecutor(NetUtils.getExecutor(request));
		action.setExecuteContext(NetUtils.getExecuteContext(request));
		
		ActionResult ar = ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, 
				NetUtils.getBSessionID(request), NetUtils.getLanguage(request), null);
		Document result = (Document)ar.getContent();
		Document xslt = getView();
		Document output = UIUtils.xslt(xslt, result, new HashMap<String, Object>());
		UIUtils.outputXML(response, output);
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
}
