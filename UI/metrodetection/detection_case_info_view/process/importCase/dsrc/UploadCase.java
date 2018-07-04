import java.io.File;
import java.io.IOException;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import com.justep.biz.client.Action;
import com.justep.biz.client.ActionEngine;
import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.biz.client.StreamCallback;
import com.justep.ui.JProcessor;
import com.justep.ui.util.NetUtils;
import org.apache.commons.lang.StringUtils;

public class UploadCase implements JProcessor {
	
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Action actionUrl = new Action();
		actionUrl.setProcess("/metrodetection/detection_case_info_view/process/importCase/importCaseProcess");
		actionUrl.setActivity("mainActivity");
		actionUrl.setName("PropertiesAction");
		actionUrl.setExecutor(NetUtils.getExecutor(request));
		actionUrl.setExecuteContext(NetUtils.getExecuteContext(request));
		actionUrl.setParameter("name", "importValueFileNameUrl");
		ActionResult ar = ActionEngine.invokeAction(actionUrl, ActionUtils.JSON_CONTENT_TYPE, NetUtils.getBSessionID(request),
				null, null);
		String tPath = ar.getDatas().get(0).toString();
		
		String ret = "";
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		Action action = new Action();
		action.setProcess("/metrodetection/detection_case_info_view/process/importCase/importCaseProcess");
		action.setActivity("mainActivity");
		action.setName("importCase");
		action.setExecutor(NetUtils.getExecutor(request));
		action.setExecuteContext(NetUtils.getExecuteContext(request));

		Document result = null;
		if (isMultipart) {
//			SITEFileItemFactor factory = new DiskFileItemFactory();
			String st = "";
//			st = UploadCase.class.getResource("").toString();
//			st = st.split("BIZ")[0];
//			st = st.substring(6, st.length());
//			String url = "UI";
//			st = st+url;
			st = "C:\\Users\\hy\\Desktop\\用例\\temp";
			st = tPath; 
			
			File filere = new File(st);
			if(!filere.exists()){
				filere.mkdir();
			}
			DiskFileItemFactory factory = new DiskFileItemFactory();
			factory.setRepository(filere);
			ServletFileUpload upload = new ServletFileUpload(factory);
			Iterator items;
			
			Element processes = DocumentHelper.createElement("items");
			Element e = processes.addElement("item");
			e.addAttribute("fileURL", st);
			String yiju = request.getParameter("jianceyiju");
			String banben = request.getParameter("caseVersion");
			String importMod = request.getParameter("importMod");
			e.addAttribute("detionBaseId", yiju);
			e.addAttribute("tESTCASEVER", banben);
			e.addAttribute("importMod", importMod);
			try {
				//解析表单中提交的所有文件内容
				items = upload.parseRequest(request).iterator();
				String file = "";
				while (items.hasNext()) {
					FileItem item = (FileItem) items.next();
					String name = item.getName();
					if(StringUtils.isNotBlank(name)) {
						st = st+File.separator+name;
						System.out.println("组装完的路径："+st+"====="+name);
						if(StringUtils.isNotBlank(st)) {
							File uploadFile = new File(st);
							item.write(uploadFile);
							e.addAttribute("file", st);
							action.setParameter("processes", processes);
							ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, NetUtils.getBSessionID(request),
								NetUtils.getLanguage(request), new StreamCallback(response));
						}
					}
				}
			} catch (Exception e1) {
				e1.printStackTrace();
			}
		}
	}
}
