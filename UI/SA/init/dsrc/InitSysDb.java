import java.io.IOException;
import java.util.Date;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jxl.common.Logger;

import com.justep.biz.client.Action;
import com.justep.biz.client.ActionEngine;
import com.justep.biz.client.ActionResult;
import com.justep.biz.client.ActionUtils;
import com.justep.biz.client.util.BizClientUtils;
import com.justep.ui.JProcessor;
import com.justep.ui.JustepConfig;
import com.justep.ui.util.NetUtils;

/**
	1. 判断系统库是否已经初始化过
		判断规则：判断SA_OPPerson、SA_OPOrg、SA_Code中是否有记录
		如果有，则返回提示"系统已经初始化过，不允许重复执行初始化！"，否则进入下一步
	
	2. 创建系统表，并插入一个init用户；
		创建系统表时，要做到，如果有已经有系统表，需要先删除相应的表；

	3. 使用init用户登录，初始化系统数据库；
		调用initSysDbAction实现系统数据库初始化。

	3. 将init用户删除；

	4. 返回提示："系统库初始化成功！系统管理员用户名：system，密码：123456。是否使用系统管理员登录？"， 点是时自动登录。

*/
public class InitSysDb implements JProcessor  {
	private static final Logger logger = Logger.getLogger(InitSysDb.class);
	private static final String CREATE_SYS_DB = "/createSysDb";
	private static final String DELETE_INIT_DATA = "/deleteInitData";
	private static final String INIT_NAME = "init";
	private static final String INIT_PASSWORD = "123456";
	private static final String INIT_SYS_DB_ACTION = "initSysDbAction";
	private static final String PROCESS = "/SA/OPM/system/systemProcess";
	private static final String ACTIVITY = "mainActivity";
	private static final String MANAGER = "manager";
	private static final String CLIENT = "client";
	
	

	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String initURL = JustepConfig.getBusinessServer() + CREATE_SYS_DB;
		ActionResult ar = ActionEngine.invokeActions(initURL, null, null, null, 
				ActionUtils.JSON_CONTENT_TYPE, ActionUtils.JSON_CONTENT_TYPE, 
				null, null, "post", null);
		if (ar.isSuccess()){
			String data = (String)ar.getDatas().get(0);
			boolean isClient = "true".equalsIgnoreCase(data.trim());
			ActionEngine.init(JustepConfig.getBusinessServer());
			String ip = "127.0.0.1";
			HashMap<String, Object> options = new HashMap<String, Object>();
			if (isClient){
				options.put(CLIENT, MANAGER);
			}
			ActionResult loginResult = ActionEngine.login2(INIT_NAME, ActionUtils.md5(INIT_PASSWORD), 
					ip, NetUtils.getLanguage(request), new Date(System.currentTimeMillis()), 
					options, ActionUtils.JSON_CONTENT_TYPE, null);
			if (loginResult.isSuccess()){
				String bsessionID = loginResult.getBSessionID();
				try{
					Action action = new Action();
					action.setProcess(PROCESS);
					action.setActivity(ACTIVITY);
					action.setName(INIT_SYS_DB_ACTION);
					if (isClient){
						action.setParameter("client", MANAGER);
					}
					ActionResult acitonResult = ActionEngine.invokeAction(action, ActionUtils.JSON_CONTENT_TYPE, bsessionID, NetUtils.getLanguage(request), null);
					if (acitonResult.isSuccess()){
						if(deleteInitData(request, response)){
							output(true, null, null, null, null, null, isClient?MANAGER:"", request, response);
						}
					}else{
						output(acitonResult, request, response);
					}
					
				}catch(Exception e){
					logger.error(e.getMessage()+"", e);
					String result = BizClientUtils.doError(e, NetUtils.getAccept(request));
					output(result, request, response);
				}finally{
					ActionEngine.logout(bsessionID);
				}
			}else{
				output(loginResult, request, response);
			}
		}else{
			output(ar, request, response);
		}		
	}
	
	private boolean deleteInitData(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		String initURL = JustepConfig.getBusinessServer() + DELETE_INIT_DATA;
		ActionResult ar = ActionEngine.invokeActions(initURL, null, null, null, 
				ActionUtils.JSON_CONTENT_TYPE, ActionUtils.JSON_CONTENT_TYPE, 
				null, null, "post", null);
		if (ar.isSuccess()){
			return true;
		}else{
			output(ar, request, response);
			return false;
		}
	}
	
	private void output(ActionResult ar, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		boolean flag = false;
		String message = ar.getMessage();
		String code = ar.getCode();
		String reason = ar.getReason();
		String stack = ar.getStack();
		String messages = ar.getMessages();
		String data = null;
		output(flag, message, code, reason, stack, messages, data, request, response);
	}
	
	private void output(boolean flag, String message, String code, 
			String reason, String stack, String messages, String data, 
			HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		String responseDataType = NetUtils.getAccept(request);
		String result = BizClientUtils.generateResult(flag, code, message, reason, stack, data, messages, responseDataType);
		output(result, request, response);
	}
	
	private void output(String content, HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		String responseDataType = NetUtils.getAccept(request);
		String contentType = null;
		if (ActionUtils.isJSON(responseDataType)) {
			contentType = ActionUtils.JSON_CONTENT_TYPE;
		} else {
			contentType = ActionUtils.XML_CONTENT_TYPE;
		}
		response.setCharacterEncoding("UTF-8");
		response.setHeader("Content-Type", contentType);
		response.getWriter().write(content);
		response.getWriter().flush();
	}
	
	
	
}
