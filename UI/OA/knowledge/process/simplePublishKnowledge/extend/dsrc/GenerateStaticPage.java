import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

import com.justep.filesystem.FileSystemWrapper;
import com.justep.ui.JProcessor;
import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;

public class GenerateStaticPage implements JProcessor {
	private static final String RESOURCEPATH = "/UI/OA/knowledge/res/template/";
	
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
			String modelURL = FileSystemWrapper.instance().getBase();
			String webappsDirectory = modelURL.replace("/model", "/apache-tomcat/webapps");
			System.out.println("webappsDirectory="+webappsDirectory);
			
			File kwContext = new File(webappsDirectory + "/KW");
			if (!kwContext.exists()) {
				kwContext.mkdir();
			}
			/** 文件目录 */
			Document instance = NetUtils.getInstance(request);
				
			String templateFilePath = ((Element)instance.selectSingleNode("/knowledge/fTemplateFileName")).getTextTrim();
			Document htmlTemplete=null;
			try {
				htmlTemplete = getHtmlTemplate(modelURL, templateFilePath);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			String htmlTempleteContent=null;
			try {
				htmlTempleteContent = getHtmlTemplateContent(modelURL, templateFilePath);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			try {
				htmlTempleteContent = replaceFieldAndPicture(htmlTempleteContent,htmlTemplete.getRootElement(), (Element)instance.getRootElement());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			htmlTempleteContent = htmlTempleteContent.replace("<![CDATA[", "").replace("]]>", "");
			String rowid = ((Element)instance.selectSingleNode("/knowledge/rowid")).getTextTrim();

			String fileName = "kw-" + rowid + ".html";
			String targetFilePath = webappsDirectory + "/KW/" + fileName;
			File targetStaticHTMLFile = new File(targetFilePath);
			if (targetStaticHTMLFile.exists()) {
				targetStaticHTMLFile.delete();
			}
			targetStaticHTMLFile.createNewFile();

			try {
				writeFile(targetFilePath, htmlTempleteContent, "UTF-8");
				Document doc = DocumentHelper.createDocument();
				Element docRoot = DocumentHelper.createElement("root");
				Element fileNameUrl = DocumentHelper.createElement("fileName");
				fileNameUrl.setText(fileName);
				docRoot.add(fileNameUrl);
				doc.add(docRoot);
				UIUtils.outputXML(response, doc);
				
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

	public String replaceFieldAndPicture(String templeteContent,
			Element templete, Element params) throws Exception {
		List elements = params.elements();
		for (int i = 0; i < elements.size(); i++) {
			Element param = (Element) elements.get(i);
			String key = param.getQName().getName();
			String value = param.getText();
			if ("pics".equals(key)) {
				templeteContent = replacePicture(templeteContent, templete,
						param);
			} else {
				templeteContent = replaceField(templeteContent, templete, key,
						value);
			}
		}
		return templeteContent;
	}

	private String replaceField(String templateContent, Element templete,
			String key, String value) {
		String targetVariables = "\\$\\{" + key + "\\}";
		value = value.replaceAll("\\$", "\\\\\\$");
		if (templateContent.contains("${" + key + "}")) {
			templateContent = templateContent
					.replaceAll(targetVariables, value);
		}
		return templateContent;
	}

	private String replacePicture(String templeteContent, Element templete,
			Element pics) {
		Pattern pattern = Pattern.compile("\\$\\{pic\\}");
		Matcher m = pattern.matcher(templeteContent);
		int i = 0;
		while (m.find()) {
			String g = m.group();
			i++;
			if (pics.elements().size() + 1 > i) {
				String value = ((Node) pics.selectSingleNode(".//pic[" + i
						+ "]")).getText();
				templeteContent = templeteContent.replaceFirst("\\$\\{pic\\}",
						value);
			}
		}
		return templeteContent;
	}

	public Document getHtmlTemplate(String resourcePath, String templateFileName)
			throws Exception {
		SAXReader reader = new SAXReader();
		String templatePath = resourcePath + RESOURCEPATH + templateFileName;
		Document doc = reader.read(new File(templatePath));
		return doc;

	}

	public String getHtmlTemplateContent(String resourcePath,
			String templateFileName) throws Exception {
		SAXReader reader = new SAXReader();
		String templatePath = resourcePath + RESOURCEPATH + templateFileName;
		Document doc = reader.read(new File(templatePath));
		return doc.asXML();

	}

	public static boolean writeFile(String file, String sConetent,
			String charsetName) throws Exception {
		FileOutputStream fos = new FileOutputStream(file);
		Writer out = null;
		if (charsetName != null && !charsetName.equals("")) {
			out = new OutputStreamWriter(fos, charsetName);
		} else {
			out = new OutputStreamWriter(fos);
		}
		out.write(sConetent);
		out.close();
		fos.close();
		return true;
	}
}
