package OA.schedule;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.Node;
import java.util.List;
import com.justep.model.ModelUtils;
import com.justep.system.context.ContextHelper;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import org.dom4j.DocumentHelper;
import com.justep.util.Utils;

public class ScheduleInterface {
	public static String newSchedule(Document dom) throws Exception {
		Element root = dom.getRootElement();
		Element scheduleNode = (Element) (root.selectSingleNode("schedule"));
		String scheduleID = "";
		if (scheduleNode == null)
			throw new Exception("没有找到schedule节点");

		Connection conn = ModelUtils.getConnection("/OA/schedule/data");
		ContextHelper.getTransaction().begin(conn);
		try {
			scheduleID = newScheduleData(conn, scheduleNode);
		} finally {
			conn.close();
			conn = null;
		}
		return scheduleID;
	}

	private static String newScheduleData(Connection conn, Element scheduleNode)
			throws Exception {
		
		String sqlNewSchedule = "insert into OA_SD_Schedule"
				+ "		(fID, version, fTitle, fBeginDatePart, fBeginTimePart, fBegintime, "
				+ "		fEndDatePart, fEndTimePart, fEndTime, "
				+ "		fContent, fExecutors, fIsShared, fIsRemind, "
				+ "		fRemindDatePart, fRemindTimePart, fRemindTime,"
				+ "		fCreatePsnID, fCreatePsnName, fCreateTime, fCreateURL, fBizID, fBizType) "
				+ "	values(?, 0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
		String scheduleID = java.util.UUID.randomUUID().toString();
		SimpleDateFormat s = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm");
		String sqlDeleteSchedule = String
				.format(
						"delete from OA_SD_Schedule where fBizID='%s' and fBizType='%s'",
						scheduleNode.selectSingleNode("fBizID").getText(),
						scheduleNode.selectSingleNode("fBizType").getText());
		String sqlDeleteExecutor = String
		.format(
				"delete from OA_SD_Executor where fMasterID in(select fid from OA_SD_Schedule where fBizID='%s' and fBizType='%s')",
				scheduleNode.selectSingleNode("fBizID").getText(),
				scheduleNode.selectSingleNode("fBizType").getText());
		Statement stat = conn.createStatement();
		try {
			stat.executeUpdate(sqlDeleteExecutor);
			stat.executeUpdate(sqlDeleteSchedule);

		} finally {
			stat.close();
			stat = null;
		}
		PreparedStatement pstat = conn.prepareStatement(sqlNewSchedule);

		try {
			String fBeginTime = scheduleNode.selectSingleNode("fBeginTime")
					.getText();
			if(fBeginTime == null ||("".equals(fBeginTime)))
				throw new Exception("开始时间不能为空!");
			String fEndTime = scheduleNode.selectSingleNode("fEndTime")
					.getText();
			if(fEndTime == null ||("".equals(fEndTime)))
				throw new Exception("结束时间不能为空!");
			fBeginTime = fBeginTime.replace("T", " ");
			fEndTime = fEndTime.replace("T", " ");
			java.util.Date beginTime = s.parse(fBeginTime);
			java.util.Date endTime = s.parse(fEndTime);
			String beginTimePart = String.format("%tR", s.parse(fBeginTime));
			String endTimePart = String.format("%tR", s.parse(fEndTime));
			if (beginTime.after(endTime)) {
				throw new Exception("结束时间必须大于开始时间");
			}
			String fContent = scheduleNode.selectSingleNode("fContent")
					.getText();
			String fRemindTime = scheduleNode.selectSingleNode("fRemindTime")
					.getText();
			if(fRemindTime != null)
				fRemindTime =fRemindTime.replace("T", " ");
			String fCreateTime = scheduleNode.selectSingleNode("fCreateTime")
					.getText();
			if(fCreateTime != null)
				fCreateTime = fCreateTime.replace("T", " ");
			java.util.Date createTime = s.parse(fCreateTime);
			String executorNames = "";
			Node nodeExecutor = scheduleNode.selectSingleNode("./Executors");
			if(nodeExecutor == null)
				throw new Exception("");
			List<Element> ExecutorInfos = (List<Element>) nodeExecutor
					.selectNodes("./Executor");
			for (Element executor : ExecutorInfos) {
				executorNames += executor.selectSingleNode("./fExecutorName")
						.getText()
						+ ",";
			}
			pstat.setString(1, scheduleID);
			pstat.setString(2, scheduleNode.selectSingleNode("fTitle")
					.getText());
			pstat.setDate(3, new java.sql.Date(beginTime.getTime()));
			pstat.setString(4, beginTimePart);
			pstat.setTimestamp(5, new java.sql.Timestamp(beginTime.getTime()));
			pstat.setDate(6, new java.sql.Date(endTime.getTime()));
			pstat.setString(7, endTimePart);
			pstat.setTimestamp(8, new java.sql.Timestamp(endTime.getTime()));
			if (fContent == null)
				pstat.setNull(9, java.sql.Types.NULL);
			else
				pstat.setString(9, scheduleNode.selectSingleNode("fContent")
						.getText());
			pstat.setString(10, executorNames);
			pstat.setInt(11, Integer.parseInt(scheduleNode.selectSingleNode(
					"fIsShared").getText()));
			pstat.setInt(12, Integer.parseInt(scheduleNode.selectSingleNode(
					"fIsRemind").getText()));
			if ("".equals(fRemindTime)) {
				pstat.setNull(13, java.sql.Types.NULL);
				pstat.setNull(14, java.sql.Types.NULL);
				pstat.setNull(15, java.sql.Types.NULL);
			} else {
				java.util.Date remindTime = s.parse(fRemindTime);
				String remindTimePart = String.format("%tR", s
						.parse(fRemindTime));
				pstat.setDate(13, new java.sql.Date(remindTime.getTime()));
				pstat.setString(14, remindTimePart);
				pstat.setTimestamp(15, new java.sql.Timestamp(remindTime.getTime()));
			}
			pstat.setString(16, scheduleNode.selectSingleNode("fCreatePsnID")
					.getText());
			pstat.setString(17, scheduleNode.selectSingleNode("fCreatePsnName")
					.getText());
			pstat.setTimestamp(18, new java.sql.Timestamp(createTime.getTime()));
			pstat.setString(19, scheduleNode.selectSingleNode("fCreateURL")
					.getText());
			pstat.setString(20, scheduleNode.selectSingleNode("fBizID")
					.getText());
			pstat.setString(21, scheduleNode.selectSingleNode("fBizType")
					.getText());
			pstat.executeUpdate();
		} finally {
			pstat.close();
			pstat = null;
		}

		newScheduleExecutors(conn, scheduleNode, scheduleID);
		return scheduleID;
	}

	private static void newScheduleExecutors(Connection conn,
			Element scheduleNode, String scheduleID) throws Exception {
		String executorIDs = "";
		String executorNames = "";
		Node nodeExecutor = scheduleNode.selectSingleNode("./Executors");
		List<Element> ExecutorInfos = (List<Element>) nodeExecutor
				.selectNodes("./Executor");
		for (Element executor : ExecutorInfos) {
			executorIDs += executor.selectSingleNode("./fExecutorID").getText()
					+ ",";
			executorNames += executor.selectSingleNode("./fExecutorName")
					.getText()
					+ ",";
		}
		String[] executorIDArray = executorIDs.split(",");
		String[] executorNameArray = executorNames.split(",");
		
		for (int k = 0; k < executorIDArray.length; k++) {
			if ("".equals(executorIDArray[k]))
				continue;
			String executorFID = java.util.UUID.randomUUID().toString();
			String sqlNewExceutor = "insert into OA_SD_Executor"
					+ "(fid,version,fmasterid,fexecutorid,fexecutorname,fremark) "
					+ "values(?, 0, ?, ?, ?, ?)";
			PreparedStatement pstat = conn.prepareStatement(sqlNewExceutor);
			try {
				pstat.setString(1, executorFID);
				pstat.setString(2, scheduleID);
				pstat.setString(3, executorIDArray[k]);
				pstat.setString(4, executorNameArray[k]);
				pstat.setString(5, "");
				pstat.executeUpdate();
			} finally {
				pstat.close();
				pstat = null;
			}
		}
	}
}
