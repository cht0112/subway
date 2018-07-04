import java.util.HashMap;
import java.util.Map;
import org.dom4j.Element;

import com.justep.ui.system.component.BaseBar;
import com.justep.xbl.runtime.XBLException;


public class ExportBar extends BaseBar {
	private static final String REPORT_EXPORT_PDF_ITEM = "report-export-pdf-item";
	private static final String REPORT_EXPORT_WORD_ITEM = "report-export-word-item";
	private static final String REPORT_EXPORT_EXCEL_ITEM = "report-export-excel-item";

	private String report;
	
	@SuppressWarnings("rawtypes")
	protected void preProcess(Element bound, Map context) throws XBLException{
		this.report = bound.attributeValue("report");
		this.imgPath = "/UI/system/images/report/";
	}
	
	protected HashMap<String, BarItemDef> getBarItemDefs(){
		HashMap<String, BarItemDef> result = new HashMap<String, BarItemDef>();
		result.put(REPORT_EXPORT_PDF_ITEM, new BarItemDef(REPORT_EXPORT_PDF_ITEM, "export_pdf.gif", "export_pdf_g.gif", "call('justep.Context.isReadonlyMode')", 
			"justep.xbl('" + report + "').exportPDF();"));
		result.put(REPORT_EXPORT_WORD_ITEM, new BarItemDef(REPORT_EXPORT_WORD_ITEM, "export_word.gif", "export_word_g.gif", "call('justep.Context.isReadonlyMode')", 
			"justep.xbl('" + report + "').exportWord();"));
		result.put(REPORT_EXPORT_EXCEL_ITEM, new BarItemDef(REPORT_EXPORT_EXCEL_ITEM, "export_excel.gif", "export_excel_.gif", "call('justep.Context.isReadonlyMode')", 
			"justep.xbl('" + report + "').exportExcel();"));
		return result;
	}
}
