import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;

import com.justep.ui.util.NetUtils;
import com.justep.ui.util.UIUtils;

public class FunctionTree implements com.justep.ui.JProcessor {
	
	public void execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException{
		com.justep.ui.system.service.permission.FunctionTree ft = new com.justep.ui.system.service.permission.FunctionTree();
		Document result = ft.execute(NetUtils.getExecutor(request),
			NetUtils.getExecuteContext(request),
			NetUtils.getBSessionID(request),
			NetUtils.getLanguage(request));
		UIUtils.outputXML(response, result);
	}
	
}
