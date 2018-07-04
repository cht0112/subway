import java.math.*;
import java.sql.*;
import java.util.*;
import org.dom4j.*;
import com.justep.system.data.*;

public class Customer_service {

	public static Table queryCUSTOMER_COMPLAINT_INFO(List range, String concept, String select, String from, String aggregate, String dataModel,
			String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns,
			String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryComplaint(List range, String concept, String select, String from, String aggregate, String dataModel, String fnModel,
			String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns, String orderBy,
			String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table queryCUSTOMER_COMPLAINT_FEEDBACK(List range, String concept, String select, String from, String aggregate, String dataModel,
			String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns,
			String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryComplantFeedback(List range, String concept, String select, String from, String aggregate, String dataModel,
			String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns,
			String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myComplaintInfoSelete(List range, String concept, String select, String from, String aggregate, String dataModel,
			String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns,
			String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryComplaintFeedAndHR(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
}