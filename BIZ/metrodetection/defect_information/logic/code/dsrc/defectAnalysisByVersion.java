import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.justep.system.data.Row;
import com.justep.system.data.SQL;
import com.justep.system.data.Table;

public class defectAnalysisByVersion {
	public static Table ByVersion(Integer productId) {
		System.out.println("====开始defectAnalysisByVersion====");
		Table tb = null;
		System.out.println("Version报表"+productId);
		String sql = "select b1.myVersionId as MYVERSIONID,b1.mount as MOUNT,case when b2.mount is null then 0 else b2.mount end as MOUNT1 ,b1.BUILD_DATE as BUILD_DATE "+
					 "from " +
						"(select t2.VERSION_ID,count(t2.bDEFECT_STATUS) as mount,  max(t2.vPRODUCT_ID) as p2, max(t2.BUILD_DATE) as BUILD_DATE, "+
							//"max((concat(concat(concat(concat(t2.MAJOR_VERSION_NUMBER, '.'), t2.MINOR_VERSION_NUMBER), '.'), t2.REVISION_NUMBER))) as myVersionId "  +
							"max(t2.MAJOR_VERSION_NUMBER+'.'+t2.MINOR_VERSION_NUMBER+'.'+t2.REVISION_NUMBER) as myVersionId "+
						"from " +
							"(select t1.vVERSION_ID as VERSION_ID,t1.vPRODUCT_ID as vPRODUCT_ID,t1.vMAJOR_VERSION_NUMBER as MAJOR_VERSION_NUMBER, "+
								"t1.vMINOR_VERSION_NUMBER as MINOR_VERSION_NUMBER,t1.vREVISION_NUMBER as REVISION_NUMBER,t1.pPRODUCT_ID as PRODUCT_ID,t1.pPRODUCT_NAME as PRODUCT_NAME, "+
								"t1.pPROJECT_ID as PROJECT_ID,t1.vBUILD_DATE as BUILD_DATE,bug.DEFECT_STATUS as bDEFECT_STATUS "+
							"from " +
								"(select version.VERSION_ID as vVERSION_ID,version.PRODUCT_ID as vPRODUCT_ID,version.MAJOR_VERSION_NUMBER as vMAJOR_VERSION_NUMBER, "+
    								"version.MINOR_VERSION_NUMBER as vMINOR_VERSION_NUMBER,version.REVISION_NUMBER as vREVISION_NUMBER,version.BUILD_DATE as vBUILD_DATE, "+
   			 						"product.PRODUCT_ID as pPRODUCT_ID,product.PRODUCT_NAME as pPRODUCT_NAME,product.PROJECT_ID as pPROJECT_ID "+
								"from DEFECT_TRACK_VERSION_INFO version "+
								"join DEFECT_TRACK_PRODUCT_INFO product  "+
								"on version.PRODUCT_ID = product.PRODUCT_ID "+
								"where version.PRODUCT_ID="+productId+") t1 "+
							"left join  DEFECT_TRACK_BUG_INFO bug on t1.vVERSION_ID=bug.VERSION_ID) t2 "+
						"group by t2.VERSION_ID) b1 "+
					"left join "+
						"(select t2.VERSION_ID,count(t2.bDEFECT_STATUS) as mount,  max(t2.xPRODUCT_ID) as p1, "+
							//"max((concat(concat(concat(concat(t2.MAJOR_VERSION_NUMBER, '.'), t2.MINOR_VERSION_NUMBER), '.'), t2.REVISION_NUMBER))) as myVersionId "+
							"max(t2.MAJOR_VERSION_NUMBER+'.'+t2.MINOR_VERSION_NUMBER+'.'+t2.REVISION_NUMBER) as myVersionId "+
						"from "+
							"(select t1.vVERSION_ID as VERSION_ID,t1.vPRODUCT_ID as xPRODUCT_ID,t1.vMAJOR_VERSION_NUMBER as MAJOR_VERSION_NUMBER, "+
								"t1.vMINOR_VERSION_NUMBER as MINOR_VERSION_NUMBER,t1.vREVISION_NUMBER as REVISION_NUMBER,t1.pPRODUCT_ID as PRODUCT_ID,t1.pPRODUCT_NAME as PRODUCT_NAME, "+
								"t1.pPROJECT_ID as PROJECT_ID,t1.vBUILD_DATE as BUILD_DATE,bug.DEFECT_STATUS as bDEFECT_STATUS "+
							"from "+
								"(select version.VERSION_ID as vVERSION_ID,version.PRODUCT_ID as vPRODUCT_ID,version.MAJOR_VERSION_NUMBER as vMAJOR_VERSION_NUMBER, "+
    								"version.MINOR_VERSION_NUMBER as vMINOR_VERSION_NUMBER,version.REVISION_NUMBER as vREVISION_NUMBER,version.BUILD_DATE as vBUILD_DATE, "+
   			 						"product.PRODUCT_ID as pPRODUCT_ID,product.PRODUCT_NAME as pPRODUCT_NAME,product.PROJECT_ID as pPROJECT_ID "+
								"from DEFECT_TRACK_VERSION_INFO version "+
								"join DEFECT_TRACK_PRODUCT_INFO product  "+
								"on version.PRODUCT_ID = product.PRODUCT_ID "+
								"where version.PRODUCT_ID="+productId+") t1 "+
							"left join  DEFECT_TRACK_BUG_INFO bug on t1.vVERSION_ID=bug.VERSION_ID "+
							"where bug.DEFECT_STATUS=8) t2 "+
						"group by t2.VERSION_ID) b2 "+
					"on b1.VERSION_ID=b2.VERSION_ID "+
				    "order by b1.BUILD_DATE";

		Map<String,String> map = new HashMap<String,String>();
		map.put("SYBASE", sql);
		tb = SQL.select(map, null, "/metrodetection/defect_information/data");
		return tb;
	}
	public static Table ByPriority(Integer productId){
		System.out.println("====开始selectByPrority====");
		Table tb = null;
		String sql = "select t1.PRIORITY_NAME,t1.mount as MOUNT,case when t2.mount1 is null then 0 else t2.mount1 end as MOUNT1 "+
					"from  "+
						"(select max(product.PRODUCT_ID) as p1, "+
							"bug.PRIORITY as priority, "+
							"case when bug.PRIORITY = 1 then '功能错误' when bug.PRIORITY = 2 then '功能缺失' when bug.PRIORITY = 3 then '界面缺陷' when bug.PRIORITY = 4 then '其他' end as PRIORITY_NAME, "+
							"count(*)as MOUNT "+
						"from DEFECT_TRACK_BUG_INFO bug, "+
							"DEFECT_TRACK_FUNC_INFO func, "+
							"DEFECT_TRACK_MODULE_INFO module, "+
							"DEFECT_TRACK_PRODUCT_INFO product, "+
							"DEFECT_TRACK_PROJECT_INFO project, "+
							"DEFECT_TRACK_VERSION_INFO version "+
						"where bug.VERSION_ID=version.VERSION_ID "+
							"and bug.FUNC_ID=func.FUNC_ID "+
							"and func.MODULE_ID= module.MODULE_ID "+
							"and module.PRODUCT_ID=product.PRODUCT_ID "+
							"and product.PROJECT_ID= project.PROJECT_ID "+
							"and product.PRODUCT_ID="+productId+
						"group by bug.PRIORITY) t1 "+
					"left join  "+
						"(select max(product.PRODUCT_ID) as p2, "+
							"bug.PRIORITY as priority, "+						
							"case when bug.PRIORITY = 1 then '功能错误' when bug.PRIORITY = 2 then '功能缺失' when bug.PRIORITY = 3 then '界面缺陷' when bug.PRIORITY = 4 then '其他' end as PRIORITY_NAME, "+
							"count(bug.VERSION_ID) as mount1 "+
						"from  DEFECT_TRACK_BUG_INFO bug, "+
							"DEFECT_TRACK_FUNC_INFO func, "+
							"DEFECT_TRACK_MODULE_INFO module, "+
							"DEFECT_TRACK_PRODUCT_INFO product, "+
							"DEFECT_TRACK_PROJECT_INFO project, "+
							"DEFECT_TRACK_VERSION_INFO version "+
						"where bug.VERSION_ID=version.VERSION_ID "+
							"and bug.FUNC_ID=func.FUNC_ID "+
							"and func.MODULE_ID= module.MODULE_ID "+
							"and module.PRODUCT_ID=product.PRODUCT_ID "+
							"and product.PROJECT_ID= project.PROJECT_ID "+
							"and product.PRODUCT_ID="+productId+
							"and bug.DEFECT_STATUS=8 "+
						"group by bug.PRIORITY) t2 "+
					"on t1.priority=t2.priority";
		Map map = new HashMap();
		map.put("SYBASE", sql);
		tb = SQL.select(map, null, "/metrodetection/defect_information/data");
		Iterator<Row> rows = tb.iterator();
		List data = new ArrayList();
		while (rows.hasNext()) {
			Row row = rows.next();
			data.add(row.getString("PRIORITY_NAME"));
		}
		if (!data.contains("功能错误")) {
			Row r = tb.appendRow();
			r.setString("PRIORITY_NAME", "功能错误");
			r.setInt("MOUNT", 0);
			r.setInt("MOUNT1", 0);
		}
		if (!data.contains("功能缺失")) {
			Row r = tb.appendRow();
			r.setString("PRIORITY_NAME", "功能缺失");
			r.setInt("MOUNT", 0);
			r.setInt("MOUNT1", 0);
		}		
		if (!data.contains("界面缺陷")) {
			Row r = tb.appendRow();
			r.setString("PRIORITY_NAME", "界面缺陷");
			r.setInt("MOUNT", 0);
			r.setInt("MOUNT1", 0);
		}

		if (!data.contains("其它")) {
			Row r = tb.appendRow();
			r.setString("PRIORITY_NAME", "其它");
			r.setInt("MOUNT", 0);
			r.setInt("MOUNT1", 0);
		}
		return tb;
	}
	public static Table BySeverity(Integer productId){
		System.out.println("====开始selectByPrority====");
		Table tb = null;
		String sql = "select t1.SEVERITY_NAME,t1.mount MOUNT,case when t2.mount1 is null then 0 else t2.mount1 end as MOUNT1 "+
					 "from  "+
			 		 	"(select max(product.PRODUCT_ID) as p1, "+
			 		 		"bug.SEVERITY as SEVERITY, "+
							"case when bug.SEVERITY = 1 then '致命缺陷' when bug.SEVERITY = 2 then '严重缺陷' when bug.SEVERITY = 3 then '一般性缺陷' when bug.SEVERITY = 4 then '建议性缺陷' when bug.SEVERITY = 5 then '其它缺陷' end as SEVERITY_NAME, "+
							"count(*)as MOUNT "+
						"from DEFECT_TRACK_BUG_INFO bug, "+
							"DEFECT_TRACK_FUNC_INFO func, "+
							"DEFECT_TRACK_MODULE_INFO module, "+
							"DEFECT_TRACK_PRODUCT_INFO product, "+
							"DEFECT_TRACK_PROJECT_INFO project, "+
							"DEFECT_TRACK_VERSION_INFO version "+
						"where bug.VERSION_ID=version.VERSION_ID "+
							"and bug.FUNC_ID=func.FUNC_ID "+
							"and func.MODULE_ID= module.MODULE_ID "+
							"and module.PRODUCT_ID=product.PRODUCT_ID "+
							"and product.PROJECT_ID= project.PROJECT_ID "+
							"and product.PRODUCT_ID="+productId+
						"group by bug.SEVERITY) t1 "+
					 "left join  "+
						"(select max(product.PRODUCT_ID) as p2,bug.SEVERITY as SEVERITY, "+
							"case when bug.SEVERITY = 1 then '致命缺陷' when bug.SEVERITY = 2 then '严重缺陷' when bug.SEVERITY = 3 then '一般性缺陷' when bug.SEVERITY = 4 then '建议性缺陷' when bug.SEVERITY = 5 then '其它缺陷' end as SEVERITY_NAME, "+
							"count(bug.VERSION_ID) as mount1 "+
						"from DEFECT_TRACK_BUG_INFO bug, "+
							"DEFECT_TRACK_FUNC_INFO func, "+
							"DEFECT_TRACK_MODULE_INFO module, "+
							"DEFECT_TRACK_PRODUCT_INFO product, "+
							"DEFECT_TRACK_PROJECT_INFO project, "+
							"DEFECT_TRACK_VERSION_INFO version "+
						"where bug.VERSION_ID=version.VERSION_ID "+
							"and bug.FUNC_ID=func.FUNC_ID "+
							"and func.MODULE_ID= module.MODULE_ID "+
							"and module.PRODUCT_ID=product.PRODUCT_ID "+
							"and product.PROJECT_ID= project.PROJECT_ID "+
							"and product.PRODUCT_ID="+productId+
							"and bug.DEFECT_STATUS=8 "+
						"group by bug.SEVERITY) t2 "+
					"on t1.SEVERITY=t2.SEVERITY";
		Map map = new HashMap();
		map.put("SYBASE", sql);
		tb = SQL.select(map, null, "/metrodetection/defect_information/data");
		Iterator<Row> rows = tb.iterator();
		List data = new ArrayList();
		while (rows.hasNext()) {
			Row row = rows.next();
			data.add(row.getString("SEVERITY_NAME"));
		}
		if (!data.contains("致命缺陷")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY_NAME", "致命缺陷");
			r.setInt("MOUNT", 0);
			r.setInt("MOUNT1", 0);
		}
		if (!data.contains("严重缺陷")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY_NAME", "严重缺陷");
			r.setInt("MOUNT", 0);
			r.setInt("MOUNT1", 0);
		}	
		if (!data.contains("一般性缺陷")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY_NAME", "一般性缺陷");
			r.setInt("MOUNT", 0);
			r.setInt("MOUNT1", 0);
		}		
		if (!data.contains("建议性缺陷")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY_NAME", "建议性缺陷陷");
			r.setInt("MOUNT", 0);
			r.setInt("MOUNT1", 0);
		}

		if (!data.contains("其它缺陷")) {
			Row r = tb.appendRow();
			r.setString("SEVERITY_NAME", "其它缺陷");
			r.setInt("MOUNT", 0);
			r.setInt("MOUNT1", 0);
		}
		return tb;		
	}
}