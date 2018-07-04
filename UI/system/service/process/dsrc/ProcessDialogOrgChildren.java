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
import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.ui.JProcessor;
import com.justep.ui.exception.UIException;
import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;


public class ProcessDialogOrgChildren implements JProcessor {

	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Document instance = NetUtils.getInstance(request);
		Element e = (Element)instance.selectSingleNode("/form/data/org-id");
		String parent = (e==null) ? "" : e.getTextTrim();
		
		Action action = new Action();
		action.setProcess("/SA/OPM/system/systemProcess");
		action.setActivity("mainActivity");
		action.setName("queryOrgUnitChildrenAction");
		action.setExecutor(NetUtils.getExecutor(request));
		action.setExecuteContext(NetUtils.getExecuteContext(request));
		action.setParameter("id", parent);
		
		ActionResult ar = ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, NetUtils.getBSessionID(request), 
				NetUtils.getLanguage(request), null);
		Document result = (Document)ar.getContent();
		if (ar.isSuccess()){
			List<?> orgs = result.getRootElement().selectNodes("/root/data/*/items/org-unit");
			result = DocumentHelper.createDocument();
			Element root = result.addElement("root");
			for (Object obj : orgs){
				Element org = (Element)obj;
				String fid = org.elementTextTrim(OrgUnitToTree.FID_TAG);
				String fname = org.elementTextTrim(OrgUnitToTree.FNAME_TAG);
				String id = OrgUnitToTree.getID(fid);
				String name = OrgUnitToTree.getName(fname);
				String kind = OrgUnitToTree.getKind(fid);
				Element orgUnit = root.addElement(OrgUnitToTree.ORG_UNIT_TAG);
				orgUnit.addElement(OrgUnitToTree.FID_TAG).addText(fid);
				orgUnit.addElement(OrgUnitToTree.FNAME_TAG).addText(fname);
				orgUnit.addElement("id").addText(id);
				orgUnit.addElement("name").addText(name);
				orgUnit.addElement("kind").addText(kind);
				orgUnit.addElement("selectable").addText("true");
				if (kind.equals("psm")){
					orgUnit.addElement("loaded").addText("true");	
				}else{
					orgUnit.addElement("loaded").addText("false");
				}
			}
		}
		
		UIUtils.outputXML(response, result);
	}
	
	
}
