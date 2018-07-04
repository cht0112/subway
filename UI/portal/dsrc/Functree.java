import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.justep.portal.bean.system.ContextBean;
import com.justep.portal.controller.Controller;
import com.justep.ui.WModel;

public class Functree implements WModel{
	public void execute(Map<String, Object> vars, HttpServletRequest request, HttpServletResponse response){
		//获取功能树
		String funcTree = Controller.process("system/FuncTree", (HttpServletRequest)request);
		vars.put("funcTree", funcTree);
	}
}
