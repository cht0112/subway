import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.xml.transform.TransformerConfigurationException;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

import com.justep.filesystem.FileSystemWrapper;
import com.justep.ui.JustepConfig;
import com.justep.ui.resources.ResourceManagerWrapper;
import com.justep.ui.util.PageUtils;
import com.justep.util.xls.ExcelConvert;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.URLConvert;
import com.justep.xbl.runtime.XBLException;
import com.justep.ui.system.UISystemMessages;
import com.justep.ui.system.component.window.FileHelper;

/**
 * xiangyaohua
 * 2012-6-1
 */
public class ExcelLayout implements JavaTemplate {

	public Element execute(Element bound, Map context) throws XBLException {
	
		String file = bound.attributeValue("src");
		if (file != null && !file.trim().equals("")) {
			if (URLConvert.isRelativePath(file)) {
				file = getLayoutFilePath(file, (String) context.get(PageUtils.WINDOW_FILE_URL));
			}
			
			String windowURL = (String)context.get(PageUtils.WINDOW_FILE_URL);
			String basePath = new File(ResourceManagerWrapper.instance().getRealPath(windowURL)).getParent() + "/.cache";
			file = ResourceManagerWrapper.instance().getRealPath(file);
			File f = new File(file);
			//String basePath = f.getParent() + "/.cache";//hcr, excel文件的缓存文件应该相对excel文件更合适，而不是相对w文件
			String cacheFilePath = basePath + "/" + f.getName() + "_" + "$$" + f.lastModified() + ".xml";

			Document doc = FileHelper.getXmlDocument(cacheFilePath);
			if (doc != null) {
				Element rootE = doc.getRootElement();
				addAutoFill(rootE,bound);
				doc.remove(rootE);
				return rootE;
			} else {
				removeOutDateFile(cacheFilePath, f.getName() + "_");
			}

			//long t1 = System.currentTimeMillis();
			Element elResult = null;

			try {
				org.dom4j.io.SAXReader reader1 = new org.dom4j.io.SAXReader();
				org.dom4j.Document docSource = reader1.read(new FileInputStream(file));

				String extension = file.substring(file.lastIndexOf(".") + 1);
				if (extension.equalsIgnoreCase("xls")) {

					ExcelConvert convert = new ExcelConvert();
					elResult = convert.convertToHtml(docSource);
				} else {
					elResult = docSource.getRootElement();
					elResult.getDocument().remove(elResult);
				}
				
				addAutoFill(elResult,bound);
				
				FileHelper.writeFile(cacheFilePath, elResult.asXML(), true);
				
				return elResult;
			} catch (FileNotFoundException e) {
				throw XBLException.create(e, UISystemMessages.XBL_EXCEL_LAYOUT_CREATE_ERROR);
			} catch (DocumentException e) {
				throw XBLException.create(e, UISystemMessages.XBL_EXCEL_LAYOUT_CREATE_ERROR);
			} catch (IOException e) {
				throw XBLException.create(e, UISystemMessages.XBL_EXCEL_LAYOUT_CREATE_ERROR);
			} catch (TransformerConfigurationException e) {
				throw XBLException.create(e, UISystemMessages.XBL_EXCEL_LAYOUT_CREATE_ERROR);
			} catch (Exception e) {
				throw XBLException.create(e, UISystemMessages.XBL_EXCEL_LAYOUT_CREATE_ERROR);
			}
		} else {
			return bound;
		}

	}
	
	private void addAutoFill(Element elResult,Element bound){
		//添加class  xui-autofill
		Element view = bound.getParent();
		while(view!=null && !"view".equals(view.getName())){
			view = view.getParent();
		}
		if(view!=null){
			List<Element> places = elResult.selectNodes("//xui:place[@control]");
			for (Element place : places) {
				String id = place.attributeValue("control");
				Element e = (Element)view.selectSingleNode("//*[@id='"+id+"']");
				if (e == null){
					throw XBLException.create(UISystemMessages.XBL_EXCEL_LAYOUT_CONTROL_NOT_EXIST, view.attributeValue("id"), id);
				}
				Attribute cls = e.attribute("class");
				if(cls!=null){
					String str = cls.getStringValue();
					if(!str.contains("xui-autofill")){
						e.remove(cls);
						e.addAttribute("class", str+" xui-autofill");
					}
				}else{
					e.addAttribute("class", "xui-autofill");
				}
				
			}
		}
	}

	private String getLayoutFilePath(String src, String windowURL) throws XBLException {
		String result = FileSystemWrapper.getParentFile(windowURL) + "/" + src;
		if (URLConvert.isExist(result)) {
			return result;

		} else {
			String parentFileURL = getParentWindowURL(windowURL);
			if (parentFileURL != null) {
				return getLayoutFilePath(src, parentFileURL);
			} else {
				throw XBLException.create(UISystemMessages.XBL_EXCEL_LAYOUT_FILE_NOT_EXIST, src);
			}
		}
	}

	private String getParentWindowURL(String windowURL) {
		try {
			SAXReader reader = new SAXReader();
			Document doc = reader.read(ResourceManagerWrapper.instance().getContentAsStream(windowURL));
			Node node = doc.selectSingleNode("/window/@extends");
			if (node != null) {
				String value = node.getText();
				if (URLConvert.isRelativePath(value)) {
					return FileSystemWrapper.getParentFile(windowURL) + "/" + value;
				} else {
					return value;
				}
			} else {
				return null;
			}
		} catch (Exception e) {
			return null;
		}
	}

	private static void removeOutDateFile(String cacheFile, String fileName) {

		File f = new File(cacheFile).getParentFile();
		File[] fList = f.listFiles();
		if (fList != null) {
			for (File ff : fList) {
				if (ff.getName().startsWith(fileName)) {
					ff.delete();
				}
			}
		}

	}

	/*
	private static String getCacheDir(Map context) {
		String windowURL = (String) context.get(PageUtils.WINDOW_FILE_URL);
		int index = windowURL.lastIndexOf("/");
		if (index == -1) {
			index = windowURL.lastIndexOf("\\");
		}

		return windowURL.substring(0, index) + "/.cache";
	}
	*/
}
