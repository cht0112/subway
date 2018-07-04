import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.io.SAXReader;

import com.justep.filesystem.FileSystemWrapper;
import com.justep.ui.JProcessor;
import com.justep.ui.JustepConfig;
import com.justep.ui.exception.UIException;
import com.justep.ui.util.UIUtils;


public class Update implements JProcessor {
	private static final String VIEW = "/UI/SA/update/download.xhtml";

	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String updateServer = getUpdateServer(request);
		Document data = DocumentHelper.createDocument();
		data.addElement("update-server").addText(updateServer);
		
		Document xslt = getView();
		Document result = UIUtils.xslt(xslt, data, new HashMap<String, Object>());
		UIUtils.ouputXHTML(request, response, result);
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
	
	private String getUpdateServer(HttpServletRequest request){
		String result = JustepConfig.getUpdateServer();
		if (result==null || "".equals(result)){
			result = "http://" + request.getLocalAddr() + ":" + request.getServerPort() + request.getContextPath();
		}
		
		return result;
	}
	
}
