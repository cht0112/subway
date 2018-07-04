import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;

import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;


public class WidgetList implements com.justep.ui.JProcessor {
	
	public void execute(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
		com.justep.ui.system.service.permission.WidgetList w = new com.justep.ui.system.service.permission.WidgetList();
		Document result = w.execute(NetUtils.getExecutor(request),
			NetUtils.getExecuteContext(request),
			NetUtils.getBSessionID(request),
			NetUtils.getLanguage(request));
		UIUtils.outputXML(response, result);
	}
}
