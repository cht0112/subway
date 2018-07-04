package com.justep.appCommon;

import java.util.HashMap;
import java.util.Map;

import com.justep.system.data.KSQL;
import com.justep.system.data.Table;
import com.justep.system.process.TaskKind;

public class TaskUtils {

	public static String getTaskKind(String task) {
		String ksql = "select SA_Task.sKindID from SA_Task SA_Task where SA_Task = :task ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("task", task);
		Table table = KSQL.select(ksql, params, Constants.SYSTEM_DATA, null);
		if (table.iterator().hasNext())
			return table.iterator().next().getString("sKindID");
		else
			throw new RuntimeException(String.format("无效的任务[%s]", task));
	}
	
	public static Boolean isNoticeTask(String task) {
		return getTaskKind(task).equals(TaskKind.NOTICE);
	}
}
