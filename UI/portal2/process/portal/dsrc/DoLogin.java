import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.util.Enumeration;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;

import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.ui.JProcessor;
import com.justep.ui.system.service.portal.LoginAction;


public class DoLogin implements JProcessor {
	
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ActionResult result = LoginAction.execute(request);
		JSONObject content = (JSONObject)result.getContent();
		try {
			content.put("bsessionid", result.getBSessionID());
		} catch (JSONException e) {
			e.printStackTrace();
		}
		response.setCharacterEncoding("UTF-8");
		response.setContentType(ActionUtils.JSON_CONTENT_TYPE);
		OutputStream output = response.getOutputStream();
		output.write(content.toString().getBytes("UTF-8"));
		output.flush();
		output.close();
		
	}
}
