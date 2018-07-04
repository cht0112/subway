import java.io.File;
import java.io.IOException;
import java.util.Date;
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

public class UploadTask implements JProcessor {

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
		action.setProcess("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess");
		action.setActivity("bizActivity7");
		action.setName("uploadTask");
		action.setExecutor(NetUtils.getExecutor(request));
		action.setExecuteContext(NetUtils.getExecuteContext(request));

		Document result = null;
		if (isMultipart) {
//			SITEFileItemFactor factory = new DiskFileItemFactory();
			String st = "";
			st = UploadTask.class.getResource("").toString();
			st = st.split("BIZ")[0];
			st = st.substring(6, st.length());
			String url = "UI";
			st = st+url;
			//st = "/var/X5.2.3_ent/model/BIZ/xmlupload/";
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
			try {
				//解析表单中提交的所有文件内容
				items = upload.parseRequest(request).iterator();
				String file = "";
				while (items.hasNext()) {
					FileItem item = (FileItem) items.next();
//					if (!item.isFormField()) {
						//取出上传文件的文件名称
						Date date = new Date();
						String name = item.getName();
						name = name.substring(name.length()-3, name.length());
						String filena = String.valueOf(date.getTime());
						name = filena+"."+name;
						st = st+File.separator+name;
						System.out.println(st);
						File uploadFile = new File(st);
						item.write(uploadFile);
						
						e.addAttribute("file", st);
						action.setParameter("processes", processes);
						ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, NetUtils.getBSessionID(request),
								NetUtils.getLanguage(request), new StreamCallback(response));
						
//						String type = name.split("\\.")[1];
//						if (type.toUpperCase().equals("XML")) {
//							String str = item.getString();
//							str = new String(str.getBytes("ISO8859_1"), "UTF-8");
//							file = str;
//
//							Element processes = DocumentHelper.createElement("items");
//							Element e = processes.addElement("item");
//							e.addAttribute("file", file);
//							action.setParameter("processes", processes);
//							ActionEngine.invokeAction(action, ActionUtils.XML_CONTENT_TYPE, NetUtils.getBSessionID(request),
//									NetUtils.getLanguage(request), new StreamCallback(response));
//
//						} else {
////							String st = "";
////							st = UploadTask.class.getResource("").toString();
////							st = st.split("BIZ")[0];
////							st = st.substring(6, st.length());
////							String url = "UI"+File.separator+"projectPlan"+File.separator+name;
////							st = st+url;
////							
//							String stnew = st+File.separator+name;
////							File savedir = new File(st);  
////							// 如果目录不存在就创建  
////							if (!savedir.exists()) {  
////								savedir.mkdirs();  
////							} 
//
//							ZipOutputStream zipos = new ZipOutputStream(new FileOutputStream(stnew)); 
//							zipos.setMethod(ZipOutputStream.DEFLATED);
//							
//							ZipInputStream inputStream = new ZipInputStream(item.getInputStream());
//							ZipEntry zipEntry = null;
//							while( ( zipEntry = inputStream.getNextEntry() ) != null ){
//								InputStreamReader isr = new InputStreamReader(inputStream); 
//								BufferedReader br = new BufferedReader(isr);
//								String zipstr = "";
//								while(br.ready()){
//									zipstr = zipstr + new String(br.readLine().getBytes("ISO8859_1"), "gbk");
//								}
//								System.out.println(zipstr);
//								 File uploadFile = new File(stnew);
//								 item.write(uploadFile);
//							}
//						}
					}
//				}
			} catch (Exception e1) {
				e1.printStackTrace();
			}
		}
	}
}
