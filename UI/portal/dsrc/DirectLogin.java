import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.justep.portal.controller.Controller;
import com.justep.ui.WModel;

public class DirectLogin implements WModel{
	public void execute(Map<String, Object> vars, HttpServletRequest request, HttpServletResponse response){

		//获取用户信息
		String info = Controller.process("system/User/login", (HttpServletRequest)request);
		vars.put("info", info);
		
		//
		String adURL = request.getParameter("ad");
		if(adURL == null)
			adURL = "";
		vars.put("adURL", "\"" + adURL + "\"");
		
		String client = request.getParameter("client");
		if(client == null)
			client = "";
		vars.put("client", "\"" + client + "\"");

		String language = request.getParameter("language");
		if(language == null)
			language = "";
		vars.put("language", "\"" + language + "\"");
	}
}
