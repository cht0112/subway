import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.justep.biz.client.Action;
import com.justep.biz.client.ActionEngine;
import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.ui.JProcessor;
import com.justep.ui.exception.UIException;
import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;


public class ProcessDialogFilterOrg implements JProcessor {

	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Document instance = NetUtils.getInstance(request);
		Element rangeE = (Element)instance.selectSingleNode("/root/range/executor-range");
		Element conditionE = (Element)instance.selectSingleNode("/root/condition");
		String condition = (conditionE==null) ? "" : conditionE.getTextTrim();
		
		Action action = new Action();
		action.setProcess("/SA/OPM/system/systemProcess");
		action.setActivity("mainActivity");
		action.setName("filterOrgUnitAction");
		action.setExecutor(NetUtils.getExecutor(request));
		action.setExecuteContext(NetUtils.getExecuteContext(request));
		action.setParameter("condition", condition);
		action.setParameter("range", rangeE);
		
		ActionResult ar = ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, NetUtils.getBSessionID(request), 
				NetUtils.getLanguage(request), null);
		Document result = (Document)ar.getContent();
		if (ar.isSuccess()){
			Element items = (Element)result.selectSingleNode("/root/data/*/items");
			result = DocumentHelper.createDocument();
			result.add(OrgUnitToTree.execute(items));
		}
		
		UIUtils.outputXML(response, result);
	}
	
	
	
}
