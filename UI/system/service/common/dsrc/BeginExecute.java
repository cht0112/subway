import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.justep.common.MessageUtils;
import com.justep.ui.impl.JProcessorImpl;
import com.justep.ui.system.UISystemMessages;
import com.justep.ui.system.service.commonUtils;

public class BeginExecute extends JProcessorImpl {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			commonUtils.beginExecute(request, response);
		} catch (Exception e) {
			throw new ServletException(MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.SERVICE_BEGIN_EXECUTE_ERROR), e);
		}
	}
}
