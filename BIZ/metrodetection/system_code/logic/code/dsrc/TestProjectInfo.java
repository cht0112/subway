import java.util.List;
import java.util.Map;

import com.justep.system.data.Table;
import com.justep.system.data.BizData;

public class TestProjectInfo {

	public static Table myTestProjectInfo(List range, String concept, String select, String from, String aggregate, String dataModel, String fnModel,
			String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns, String orderBy,
			String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	public static Table recurrenceSchemeAndProject(List range, String concept, String select, String from, String aggregate, String dataModel, String fnModel,
			String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns, String orderBy,
			String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
	
	public static Table myQueryTestSchemeCase(List range, String concept, String select, String from, String aggregate, String dataModel, String fnModel,
			String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns, String orderBy,
			String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
}