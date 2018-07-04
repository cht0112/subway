import java.util.Iterator;

import com.justep.appCommon.PinyinUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.util.Utils;

public class PinyinToolsProcedure {
	public static void generatePinyin(String dataModel, String concept, String chineseRelation,
			String simplePinyinRelation, String fullPinyinRelation) {
		String ksql = String.format("select %1$s.* from %1$s %1$s ", concept);
		Table table = KSQL.select(ksql, null, dataModel, null);
		Iterator<Row> rows = table.iterator();
		PinyinUtils.generatePinyin(rows, chineseRelation, simplePinyinRelation, fullPinyinRelation);
		table.save(dataModel);
	}
}