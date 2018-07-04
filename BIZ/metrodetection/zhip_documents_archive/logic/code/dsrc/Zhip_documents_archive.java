import java.math.*;
import java.sql.*;
import java.util.*;

import javax.naming.NamingException;

import org.dom4j.*;

import com.justep.model.Model;
import com.justep.model.ModelUtils;
import com.justep.system.context.ActionContext;
import com.justep.system.context.RequestContext;
import com.justep.system.data.*;
import com.justep.system.process.ProcessUtils;
import com.justep.system.util.BizUtils;

public class Zhip_documents_archive {


	public static Table myQueryPDocumentsArchive(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table queryP_DOCUMENTS_ARCHIVE(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table p_documents_archive(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables){
		return BizData.query(concept, idColumn, select, from, condition, range, filter, distinct, offset, limit, columns, orderBy, aggregate,
				aggregateColumns, variables, dataModel, fnModel);
	}

	public static Table myQueryCheckRecordAll(List range,String concept,String select,String from,String aggregate,String dataModel,String fnModel,String condition,Boolean distinct,String idColumn,String filter,Integer limit,Integer offset,String columns,String orderBy,String aggregateColumns,Map variables,String applicationNo){
		System.out.println("aaa");
		//String id = (String)ModelUtils.getRequestContext().getActionContext().getParameter("applicationNo");
		//System.out.println(id);
		String oracle = "select APPLICATION_NO,max(case CHECK_NAME when '初审' then '初审' end) as name1," +
		"max(case CHECK_NAME when '初审' then check_desc end) as desc1," +
		"max(case CHECK_NAME when '复审' then '复审' end) as name2," +
		"max(case CHECK_NAME when '复审' then check_desc end) as desc2," +
		"max(case CHECK_NAME when '终审' then '终审' end) as name3," +
		"max(case CHECK_NAME when '终审' then check_desc end) as desc3 FROM CHECK_RECORD "  +
		"GROUP BY APPLICATION_NO";
		HashMap<String,String> sqlMap = new HashMap<String,String>();
		sqlMap.put("ORACLE",oracle);
		Connection conn = null;
		Statement st = null;
		Table table = null;
		try {
			conn = ModelUtils.getConnectionInTransaction("/metrodetection/zhip_documents_archive/data");
			st = conn.createStatement();
			ResultSet rs = st.executeQuery(oracle);
			table = BizUtils.resultSet2Table(rs, (Model)null);
//			Iterator<Row> rowDatas = table.iterator();
//			while(rowDatas.hasNext()){
//				Row rowData = rowDatas.next();
//				System.out.println(rowData+"******");
//			}
		}catch(SQLException ex){
			ex.printStackTrace();
		} catch (NamingException e) {
			e.printStackTrace();
		}
		table.getProperties().put(Table.PROP_NAME_ROWID, "APPLICATION_NO");
		return table;
	}
}