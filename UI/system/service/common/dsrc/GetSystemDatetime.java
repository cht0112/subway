import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.justep.ui.JProcessor;
import com.justep.ui.system.service.commonUtils;
import com.justep.ui.util.UIUtils;



public class GetSystemDatetime implements JProcessor {

	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		UIUtils.outputXML(response, commonUtils.getSystemDatetime());
	}
	
}
