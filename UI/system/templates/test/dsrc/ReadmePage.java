/**
 * test 
 * @author xiangyaohua
 * @date 2010-8-24
 */


import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import swing2swt.layout.BorderLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import com.justep.studio.ui.template.config.model.TemplateItem;
import com.justep.studio.ui.template.config.view.AbstractTemplateConfigPage;

public class ReadmePage extends AbstractTemplateConfigPage {

	private Text adfText;

	public ReadmePage(Composite parent, TemplateItem templateItem) {
		super(parent, templateItem);
		setLayout(new FillLayout());

		final Text label = new Text(this, SWT.MULTI | SWT.WRAP);
		label.setEditable(false);
		label
				.setText(" 1、这是一个 “列表模板”案例，/UI/system/templates/test 包含了此模板的所有资源。\n\n 2、若无需此模板，请删除 UI/system/templates/xuiTemplateConfig.xml 中的注册信息。\n\n 3、模板开发请参考“模板向导开发文档”，请找平台组和技术支持部门索取。");
	}

	@Override
	public String isValidation() {
		// TODO Auto-generated method stub
		return null;
	}

}
