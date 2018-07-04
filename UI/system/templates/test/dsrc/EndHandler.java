

import com.justep.studio.ui.template.config.handler.AbstractTemplateConfigHandler;
/**
 * 
 * @author xiangyaohua
 *
 */
public class EndHandler extends AbstractTemplateConfigHandler{

	@Override
	public void doFinish() {
		String value = this.getParam("param");
		System.out.println("这个方法将会在点击完成后，最后被调用");
		
	}

	@Override
	public String isValidation() {
		//验证，返回错误信息。没有错误直接返回null
		return null;
	}

}
