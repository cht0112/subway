import com.justep.system.data.KSQL;
import com.justep.system.data.Table;

public class ProcessExecuteReport {
	public static Table getProcessExecuteReportData(String dataModel,String executeConcept,String bizID){
		String sql = "select EXECUTE_CONCEPT.fActivityLabel,case when EXECUTE_CONCEPT.fVerdict is not null then concat(EXECUTE_CONCEPT.fVerdict, '：' ,EXECUTE_CONCEPT.fOpinion) else EXECUTE_CONCEPT.fOpinion end as FOPINION,EXECUTE_CONCEPT.fCreatePsnName,EXECUTE_CONCEPT.fCreateTime from "+executeConcept+" EXECUTE_CONCEPT where EXECUTE_CONCEPT.fMasterID='"+bizID+"' order by EXECUTE_CONCEPT.fCreateTime asc";
		return KSQL.select(sql, null, dataModel, null);
	}
}