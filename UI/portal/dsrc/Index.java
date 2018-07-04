import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.justep.portal.bean.system.ContextBean;
import com.justep.portal.controller.Controller;
import com.justep.ui.WModel;

public class Index implements WModel{
	public void execute(Map<String, Object> vars, HttpServletRequest request, HttpServletResponse response){

		//获取被代理人ID
		String principalID = request.getParameter("principalID");
		//如果获取到被代理人ID就再获取被代理人信息，否则尝试获取被代理人列表
		if(principalID!=null&&principalID.length()>0){
			request.setAttribute("executor",principalID);
			String principalInfo = Controller.process("system/User/getPrincipalInfo", request);
			vars.put("principalID",principalID);
			vars.put("principalInfo",principalInfo);
		}else{
			String principalList = Controller.process("system/User/getPrincipalList", request);
			vars.put("principalList",principalList);			
		}	
		//判断是否已经登陆，如果没有登陆重定向到login.w 
		try{
		    String key = ContextBean.class.getName();
		    ContextBean bcontext = (ContextBean) (request.getSession().getAttribute(key));
		    if(bcontext == null || !bcontext.isLogin()){
		    	String href = request.getContextPath() + "/portal/login.w";
				String client = request.getParameter("client");
				if(client != null)
					href += "?client=" + client;
		    	response.sendRedirect(href);
				vars.put("redirect",true);
		    	return;
		    }
		}catch(Exception e){
			//TODO:
		}
		
		//获取用户信息
		String userInfo = Controller.process("system/User/initPortalInfo", (HttpServletRequest)request);
		vars.put("userInfo", userInfo);
		//获取功能树
		String funcTree = Controller.process("system/FuncTree", (HttpServletRequest)request);
		vars.put("funcTree", funcTree);
		//获取快捷方式
		String shortCuts = Controller.process("system/Layout/loadShortcuts", (HttpServletRequest)request);
		vars.put("shortCuts", shortCuts);
		//获取布局信息
		String layout = Controller.process("system/Layout/loadTabs", (HttpServletRequest)request);
		vars.put("layout", layout);
		//获取widget
		String widgets = Controller.process("system/WidgetList",(HttpServletRequest)request);
		vars.put("widgets", widgets);
		
		vars.put("isDebug", "true".equalsIgnoreCase(System.getProperty("debug"))? "true" : "false");
		
		//
		String adURL = request.getParameter("ad");
		if(adURL == null)
			adURL = "";
		vars.put("adURL", "\"" + adURL + "\"");
	}
}
