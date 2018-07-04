import java.util.HashMap;
import java.util.Map;

import org.dom4j.Element;

import com.justep.ui.system.component.BaseBar;
import com.justep.xbl.runtime.XBLException;

public class PrintBar extends BaseBar {
	private static final String REPORT_PAGE_SETUP_ITEM = "report-page-setup-item";
	private static final String REPORT_PREVIEW_ITEM = "report-preview-item";
	private static final String REPORT_PRINT_ITEM = "report-print-item";

	private String report;

	@SuppressWarnings("rawtypes")
	protected void preProcess(Element bound, Map context) throws XBLException{
		this.report = bound.attributeValue("report");
		this.imgPath = "/UI/system/images/report/";
	}
	
	protected HashMap<String, BarItemDef> getBarItemDefs(){
		HashMap<String, BarItemDef> result = new HashMap<String, BarItemDef>();
		result.put(REPORT_PAGE_SETUP_ITEM, new BarItemDef(REPORT_PAGE_SETUP_ITEM, "print_page_setup.gif", "print_page_setup_g.gif", "call('justep.Context.isReadonlyMode')",
				"justep.xbl('" + report + "').pageSetup();"));
		result.put(REPORT_PREVIEW_ITEM, new BarItemDef(REPORT_PREVIEW_ITEM, "print_preview.gif", "print_preview_g.gif", "call('justep.Context.isReadonlyMode')",
				"justep.xbl('" + report + "').preview();"));
		result.put(REPORT_PRINT_ITEM, new BarItemDef(REPORT_PRINT_ITEM, "print_print.gif", "print_print_g.gif", "call('justep.Context.isReadonlyMode')",
				"justep.xbl('" + report + "').print();"));
		return result;
	}
}
