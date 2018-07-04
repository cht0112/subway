package com.becom.timertask;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;
import java.util.TimerTask;



public class NoticeTask extends TimerTask {

	@Override
	public void run() {
		// TODO Auto-generated method stub
		sendNotice();
		System.out.println(new Date());
	}
	
	/**
	 * 登录获取业务session的ID 
	 * @return
	 */
	public static String login() {
		String businessServer = "http://localhost:8080/BusinessServer";
		String loginName = "system";
		String password = "123456";
		String bsessionID = "";
		try {
			//获取本地IP
			String localIp = InetAddress.getLocalHost().getHostAddress();
			System.out.println(localIp);
			//初始化动作引擎
			//ActionEngine.init(businessServer);
			//登录返回businessId
			//bsessionID = ActionEngine.login(loginName, ActionUtils.md5(password), localIp, null);
			System.out.println(bsessionID);
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return bsessionID;
	}
	
	public static String sendNotice() {
		/*//登录
		String bsessionID = login();
		try {
			//指定动作的progress,activity,action注：登录的这个用户应有本动作的权限和功能
			//Action action = new Action();
			action.setProcess("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess");
			action.setActivity("bizActivityNew1");
			action.setName("taskSendNotice");
			//调用动作
			//ActionResult ar = ActionEngine.invokeAction(action, ActionUtils.JSON_CONTENT_TYPE, bsessionID, 
			//		null, null);
			//是否调用成功
			if(ar.isSuccess()) {
				System.out.println("SUCCESS");
				return ar.getDatas().get(0).toString();
			} else {
				System.out.println("ERROR");
				throw new RuntimeException(ar.getMessage());
			}
		} finally {
			ActionEngine.logout(bsessionID);
		}*/
		return null;
	}

}
