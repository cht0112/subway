import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.justep.common.MessageUtils;
import com.justep.ui.system.UISystemMessages;
import com.justep.ui.system.service.commonUtils;

public class BizAction extends com.justep.ui.impl.JProcessorImpl{
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		try {
			commonUtils.bizAction(request, response, "post");
		} catch (Exception e) {
			throw new ServletException(MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.SERVICE_BIZ_ACTION_ERROR), e);
		}
	}
	
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		try {
			commonUtils.bizAction(request, response, "get");
		} catch (Exception e) {
			throw new ServletException(MessageUtils.getMessage(UISystemMessages.class, UISystemMessages.SERVICE_BIZ_ACTION_ERROR), e);
		}
	}
}