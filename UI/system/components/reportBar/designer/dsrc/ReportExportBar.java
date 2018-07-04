

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.jface.window.Window;
import org.w3c.dom.Element;

import com.justep.studio.StudioPlugin;
import com.justep.studio.data.DataColumn;
import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.dialog.CommonSelectorDialog;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiDataModel;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.util.XPathUtil;

import com.justep.designer.components.DBaseBar;

public class ReportExportBar extends DBaseBar {
	public boolean validate(XuiElement xuiElement) {
		boolean result = true;
		
		org.w3c.dom.Element rootE = xuiElement.getXuiDataModel().getRootElement().getOriginElement();
		String reportId = xuiElement.getOriginElement().getAttribute("report");
		if(reportId != null && !reportId.equals("")){
			String sXpath = "//*[local-name()='div' and (@component='/UI/system/components/report.xbl.xml#report' or  @component='/UI/system/components/reportEditor.xbl.xml#editor' or @component='/UI/system/components/chart.xbl.xml#chart') and @id='"+reportId+"']";
			List<?> list = XPathUtil.selectNodes(rootE, sXpath);
			int count = list.size();
			if(count == 0){
				this.addError(xuiElement, "reportExportBar组件引用的report("+reportId+")不存在!");
				result = false;
			}		
		}
		
		
		return result;
	}
	
	
}
