import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.justep.biz.client.ActionResult;
import com.justep.ui.JProcessor;
import com.justep.ui.system.service.portal.LoginAction;

public class DirectLogin implements JProcessor {

	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//尝试登陆
		ActionResult result = LoginAction.execute(request);
		//检查结果
		JSONObject content = (JSONObject)result.getContent();
		String language = request.getParameter("language");
		if(language == null || language.equals(""))
			language = "zh_CN";
		String client = request.getParameter("client");
		try{
			if(content.get("flag").toString().equals("false")){
				String url = request.getContextPath() + "/portal2/process/portal/login.w";
				url += "?language=" + language;
				if(client != null)
					url += "&client=" + client;
				response.sendRedirect(url);
			}else{
				String bsid = result.getBSessionID();
				String url = request.getContextPath() + "/portal2/process/portal/index.w?bsessionid=" + bsid;
				url += "&language=" + language;
				if(client != null)
					url += "&client=" + client;
		    	response.sendRedirect(url);
			}
		}catch(Exception e){
			String url = request.getContextPath() + "/portal2/process/portal/login.w";
			url += url + "?language=" + language;
			if(client != null)
				url += "&client=" + client;
			response.sendRedirect(url);
		}
		
	}
	
}	
