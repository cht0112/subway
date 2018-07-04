import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.io.SAXReader;

import com.justep.filesystem.FileSystemWrapper;
import com.justep.ui.JProcessor;
import com.justep.ui.exception.UIException;
import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;


public class ProcessDialog implements JProcessor {
	private static final String PROCESS_DIALOG_VIEW = "/UI/system/service/process/processDialogView.xhtml";

	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Document instance = NetUtils.getInstance(request);
		Document gridData = ConvertProcessData2GridAction.execute(instance);
		
		Document xslt = getDialogView();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("instance", instance);
		Document view = UIUtils.xslt(xslt, gridData, params);
		String windowURL = NetUtils.getRequestPath(request);
		String language = NetUtils.getLanguage(request);
		Document xbled = UIUtils.xbl(view, windowURL, language);
		Document xformed = UIUtils.xforms(xbled);
		UIUtils.ouputXHTML(request, response, xformed);
	}
	
	private Document getDialogView(){
		try {
			String path = FileSystemWrapper.instance().getRealPath(PROCESS_DIALOG_VIEW);
			SAXReader reader = new SAXReader();
			return reader.read(new File(path));
		} catch (DocumentException e) {
			throw new UIException(e.getMessage(), e);
		}
	}
	
	
	
	
	
}
