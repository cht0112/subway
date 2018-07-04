import com.justep.report.olap.InitMDXCubeMetaDataProcedure;
import com.justep.report.olap.QueryDrillMDXProcedure;
import com.justep.report.olap.QueryMDXProcedure;


public class MDXProcedure {
	public static String queryMDX(String mdxQuery, String properties,String dataModel){
		return QueryMDXProcedure.queryMDX(mdxQuery, properties,dataModel);
	}
	
	public static String queryMDXDrill(String mdxQuery, String properties,String dataModel){
		return QueryDrillMDXProcedure.queryMDXDrill(mdxQuery, properties,dataModel);
	}
	
	public static String initMDX(String request, String restrictions ,String properties,String dataModel){
		return InitMDXCubeMetaDataProcedure.initMDX(request, restrictions, properties,dataModel);
	}
}
