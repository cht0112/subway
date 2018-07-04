import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.justep.portal.controller.Controller;
import com.justep.portal.helper.Configuration;
import com.justep.ui.WModel;

public class Login implements WModel{
	public void execute(Map<String, Object> vars, HttpServletRequest request, HttpServletResponse response){

		String version = Configuration.getVersion();
		version = (version != null && version != "")? ("?$v=" + version) : "";
		vars.put("version", version);
		
		//获取用户信息
		String license = Controller.process("system/User/license", request);
		
		vars.put("license", license);
		
	}
}
