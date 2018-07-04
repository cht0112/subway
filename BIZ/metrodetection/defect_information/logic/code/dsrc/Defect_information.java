import java.math.*;
import java.sql.*;
import java.util.*;
import org.dom4j.*;
import com.justep.system.data.*;

public class Defect_information {

	public static Table queryProductVersion(List range, String concept, String select, String from, String aggregate, String dataModel,
			String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns,
			String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table queryDefectProduct(List range, String concept, String select, String from, String aggregate, String dataModel,
			String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer limit, Integer offset, String columns,
			String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryDefectModuleAndProduct(List range, String concept, String select, String from, String
			aggregate, String dataModel, String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer
			limit, Integer offset, String columns, String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit,
				columns, orderBy, aggregate, aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryMandProjAndProd(List range, String concept, String select, String from, String
			aggregate, String dataModel, String fnModel, String condition, Boolean distinct, String idColumn, String filter, Integer
			limit, Integer offset, String columns, String orderBy, String aggregateColumns, Map variables) {
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit,
				columns, orderBy, aggregate, aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table Problem(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table queryNewDefectBug(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);		
	}

	public static Table queryProjectMemberName(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);		
	}

	public static Table NewProblem(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);		
	}

	public static Table NewProject(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table queryProjectInfo(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table NewSystem(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}
}