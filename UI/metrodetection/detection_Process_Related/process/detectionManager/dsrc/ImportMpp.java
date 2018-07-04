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
import com.justep.biz.client.Action;
import com.justep.biz.client.ActionEngine;
import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.biz.client.StreamCallback;
import com.justep.ui.util.NetUtils;
import org.apache.commons.lang.StringUtils;


public class ImportMpp extends com.justep.ui.impl.JProcessorImpl  {
		public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Action actionUrl = new Action();
		actionUrl.setProcess("/metrodetection/detection_case_info_view/process/importCase/importCaseProcess");
		actionUrl.setActivity("mainActivity");
		actionUrl.setName("PropertiesAction");
		actionUrl.setExecutor(NetUtils.getExecutor(request));
		actionUrl.setExecuteContext(NetUtils.getExecuteContext(request));
		actionUrl.setParameter("name", "zhibiaozhidaochuUrl");
		ActionResult ar = ActionEngine.invokeAction(actionUrl, ActionUtils.JSON_CONTENT_TYPE, NetUtils.getBSessionID(request),
				null, null);
		String tPath = ar.getDatas().get(0).toString();
		System.out.println("tPath   "+tPath);
		
		String ret = "";
		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		Action action = new Action();
		action.setProcess("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess");
		action.setActivity("bizActivity4");
		action.setName("importMpp");
		action.setExecutor(NetUtils.getExecutor(request));
		action.setExecuteContext(NetUtils.getExecuteContext(request));

		Document result = null;
		if (isMultipart) {
//			SITEFileItemFactor factory = new DiskFileItemFactory();
//			String st = "";
//			st = UploadCase.class.getResource("").toString();
//			st = st.split("BIZ")[0];
//			st = st.substring(6, st.length());
//			String url = "UI";
//			st = st+url;
//			st = "C:\\Users\\hy\\Desktop\\用例\\temp";
//			st = tPath; 
			
			File filere = new File(tPath);
			if(!filere.exists()){
				filere.mkdir();
			}
			DiskFileItemFactory factory = new DiskFileItemFactory();
			factory.setRepository(filere);
			ServletFileUpload upload = new ServletFileUpload(factory);
			Iterator items;
			String applicationNo = request.getParameter("applicationNo");
			String timeParam = request.getParameter("timeParam");
			try {
				//解析表单中提交的所有文件内容
				request.setCharacterEncoding("utf-8");
				items = upload.parseRequest(request).iterator();
//				String file = "";
				while (items.hasNext()) {
					FileItem item = (FileItem) items.next();
					String name = item.getName();
					System.out.println("name:"+name);
					String[] names = name.split("\\\\");
					String n = names[names.length-1];
					if(StringUtils.isNotBlank(name)) {
						tPath = tPath + n;
						System.out.println("组装完的路径："+tPath+"====="+name);
						if(StringUtils.isNotBlank(tPath)) {
							File uploadFile = new File(tPath);
							item.write(uploadFile);
							action.setParameter("filename", tPath);
							action.setParameter("applicationNo", applicationNo);
							action.setParameter("timeParam", timeParam);
							ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, NetUtils.getBSessionID(request),
								NetUtils.getLanguage(request), new StreamCallback(response));
						}
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
}
