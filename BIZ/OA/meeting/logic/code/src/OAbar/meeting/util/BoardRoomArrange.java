package OAbar.meeting.util;

import OAbar.schedule.*;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.List;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Node;
import com.justep.model.ModelUtils;
import com.justep.system.context.ContextHelper;

public class BoardRoomArrange {
	public static String newMeetingArrangeByApply(String applyID,
			boolean addScheduleFlag) throws Exception {
		String arrangeID = "";
		String sql = String.format(
				"select * from OA_MT_UseApply where fid='%s'", applyID);
		String applyPsnSql = String.format(
				"select * from OA_MT_UseApplyPsns where fMasterID='%s'",
				applyID);
		Document result = DocumentHelper.createDocument();
		Element rtRoot = result.addElement("root");
		Element arrange = rtRoot.addElement("arrange");
		Connection conn = ModelUtils.getConnection("/OA/meeting/data");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stat = conn.createStatement();
			try {
				ResultSet rs = stat.executeQuery(sql);
				try {
					if (rs.next()) {
						String checkMeetingRoomUseFlag = checkBoardroomUsed(rs.getString("farrboardroomid"),
													rs.getString("farrbegintime"),
													rs.getString("farrendtime"),"");
						if("true".equals(checkMeetingRoomUseFlag))
							throw new Exception("会议室——" + rs.getString("fboardroom") + "在该时段被占用：\n" 
									+ rs.getString("farrbegintime").substring(0,19)+"--\n"
									+ rs.getString("farrendtime").substring(0,19));
						Element fUseOgnID = arrange.addElement("fUseOgnID");
						fUseOgnID.setText(rs.getString("fapplyognid"));
						Element fUseOgnName = arrange.addElement("fUseOgnName");
						fUseOgnName.setText(rs.getString("fapplyognname"));
						Element fUseDeptID = arrange.addElement("fUseDeptID");
						fUseDeptID.setText(rs.getString("fapplydeptid"));
						Element fUseDeptName = arrange
								.addElement("fUseDeptName");
						fUseDeptName.setText(rs.getString("fapplydeptname"));
						Element fUsePsnID = arrange.addElement("fUsePsnID");
						fUsePsnID.setText(rs.getString("fapplypsnid"));
						Element fUsePsnName = arrange.addElement("fUsePsnName");
						fUsePsnName.setText(rs.getString("fapplypsnname"));
						Element fUsePsnFullID = arrange
								.addElement("fUsePsnFullID");
						fUsePsnFullID.setText(rs.getString("fapplypsnfid"));
						Element fUsePsnFullName = arrange
								.addElement("fUsePsnFullName");
						fUsePsnFullName.setText(rs
								.getString("fapplypsnfname"));
						Element fBoardRoomID = arrange
								.addElement("fBoardRoomID");
						fBoardRoomID.setText(rs.getString("farrboardroomid"));
						Element fBoardRoom = arrange.addElement("fBoardRoom");
						fBoardRoom.setText(rs.getString("farrboardroom"));
						Element fMeetName = arrange.addElement("fMeetName");
						if(rs.getString("fmeetname") == null)
							fMeetName.setText("");
						else
							fMeetName.setText(rs.getString("fmeetname"));
						Element fBeginTime = arrange.addElement("fBeginTime");
						fBeginTime.setText(rs.getString("farrbegintime")
								.substring(0, 19));
						Element fEndTime = arrange.addElement("fEndTime");
						fEndTime.setText(rs.getString("farrendtime").substring(0,
								19));
						Element fMeetPsns = arrange.addElement("fMeetPsns");
						if(rs.getString("fmeetpsns") == null)
							fMeetPsns.setText("");
						else
							fMeetPsns.setText(rs.getString("fmeetpsns"));
						Element fMeetPsnNum = arrange.addElement("fMeetPsnNum");
						if(rs.getString("fmeetpsnnum") == null)
							fMeetPsnNum.setText("0");
						else
							fMeetPsnNum.setText(rs.getString("fmeetpsnnum"));
						Element fPhone = arrange.addElement("fPhone");
						if(rs.getString("fPhone") == null)
							fPhone.setText("");
						else
							fPhone.setText(rs.getString("fphone"));
						Element fArrOgnID = arrange.addElement("fArrOgnID");
						fArrOgnID
								.setText((rs.getString("farrognid") == null ? ""
										: (rs.getString("farrognid"))));
						Element fArrOgnName = arrange.addElement("fArrOgnName");
						if (rs.getString("farrognname") == null)
							fArrOgnName.setText("");
						else
							fArrOgnName.setText(rs.getString("farrognname"));
						Element fArrDeptID = arrange.addElement("fArrDeptID");
						fArrDeptID.setText(rs.getString("farrdeptid"));
						Element fArrDeptName = arrange
								.addElement("fArrDeptName");
						fArrDeptName.setText(rs.getString("farrdeptname"));
						Element fArrPsnID = arrange.addElement("fArrPsnID");
						fArrPsnID.setText(rs.getString("farrpsnid"));
						Element fArrPsnName = arrange.addElement("fArrPsnName");
						fArrPsnName.setText(rs.getString("farrpsnname"));
						Element fArrPsnFullID = arrange
								.addElement("fArrPsnFullID");
						fArrPsnFullID.setText(rs.getString("farrpsnfid"));
						Element fArrPsnFullName = arrange
								.addElement("fArrPsnFullName");
						fArrPsnFullName
								.setText(rs.getString("farrpsnfname"));
						Element fArrTime = arrange.addElement("fArrTime");
						fArrTime.setText(rs.getString("farrtime").substring(0,
								19));
						Element fDescription = arrange
								.addElement("fDescription");
						if(rs.getString("fdescription") == null)
							fDescription.setText("");
						else
							fDescription.setText(rs.getString("fdescription"));
						Element fRemark = arrange.addElement("fRemark");
						fRemark
								.setText((rs.getString("farrremark") == null ? ""
										: rs.getString("farrremark")));
						Element fMTUseApplyID = arrange
								.addElement("fMTUseApplyID");
						fMTUseApplyID.setText(applyID);
					}
				} finally {
					rs.close();
					rs = null;
				}
				rs = stat.executeQuery(applyPsnSql);
				try {
					Element arrangePsns = arrange.addElement("arrangePsns");
					while (rs.next()) {
						Element arrangePsn = arrangePsns
								.addElement("arrangePsn");
						Element fPersonID = arrangePsn.addElement("fPersonID");
						fPersonID.setText(rs.getString("fpersonid"));
						Element fPersonName = arrangePsn
								.addElement("fPersonName");
						fPersonName.setText(rs.getString("fpersonname"));
					}
				} finally {
					rs.close();
					rs = null;
				}
				Element faddScheduleFlag = arrange
						.addElement("faddScheduleFlag");
				faddScheduleFlag.setText((addScheduleFlag == true ? "true"
						: "false"));
				arrangeID = newMeetingArrange(result);
			} finally {
				stat.close();
				stat = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return arrangeID;
	}

	public static String newMeetingArrange(Document dom) throws Exception {
		String arrangeID = "";
		Element root = dom.getRootElement();
		Element arrangeNode = (Element) (root.selectSingleNode("arrange"));
		if (arrangeNode == null)
			throw new Exception("没有找到arrange节点");
		Connection conn = ModelUtils.getConnection("/OA/meeting/data");
		ContextHelper.getTransaction().begin(conn);
		try {
			arrangeID = newArrangeData(conn, arrangeNode);
		} finally {
			conn.close();
			conn = null;
		}
		return arrangeID;
	}

	private static String newArrangeData(Connection conn, Element arrangeNode)
			throws Exception {
		String arrangerID = java.util.UUID.randomUUID().toString();
		SimpleDateFormat s = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm");
		String sqlDeleteArrangePsns = String
				.format(
						"delete from OA_MT_ArrangePsns where fMasterID in (select fid from OA_MT_RoomArrange where fMTUseApplyID='%s')",
						arrangeNode.selectSingleNode("fMTUseApplyID").getText());
		String sqwlDeleteRoomArrange = String.format(
				"delete from OA_MT_RoomArrange where fMTUseApplyID='%s'",
				arrangeNode.selectSingleNode("fMTUseApplyID").getText());
		String sqlNewArrange = "insert into OA_MT_RoomArrange("
				+ "fID, version, fUseOgnID, fUseOrgName, fUseDeptID, fUseDeptName,"
				+ "fUsePsnID, fUsePsnName, fUsePsnFID, fUsePsnFName,"
				+ "fBoardroomID, fBoardroom, fMeetName,"
				+ "fBeginTime, fEndTime, "
				+ "fMeetPsns, fMeetPsnNum, fPhone,"
				+ "fArrOgnID, fArrOgnName, fArrDeptID, fArrDeptName,"
				+ "fArrPsnID, fArrPsnName, fArrPsnFID, fArrPsnFName,"
				+ "fArrTime, fDescription, fRemark, fEffect, fMTUseApplyID)"
				+ " values(?, 0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Statement stat = conn.createStatement();
		
		try {
			stat.executeUpdate(sqlDeleteArrangePsns);
			stat.executeUpdate(sqwlDeleteRoomArrange);

		} finally {
			stat.close();
			stat = null;
		}
		PreparedStatement pstat = conn.prepareStatement(sqlNewArrange);
		try {
			String fbeginTime = arrangeNode.selectSingleNode("fBeginTime")
					.getText();
			String fendTime = arrangeNode.selectSingleNode("fEndTime")
					.getText();
			String farrTime = arrangeNode.selectSingleNode("fArrTime")
					.getText();
			java.util.Date beginTime = s.parse(fbeginTime);
			java.util.Date endTime = s.parse(fendTime);
			java.util.Date arrTime = s.parse(farrTime);
			pstat.setString(1, arrangerID);
			pstat.setString(2, arrangeNode.selectSingleNode("fUseOgnID")
					.getText());
			pstat.setString(3, arrangeNode.selectSingleNode("fUseOgnName")
					.getText());
			pstat.setString(4, arrangeNode.selectSingleNode("fUseDeptID")
					.getText());
			pstat.setString(5, arrangeNode.selectSingleNode("fUseDeptName")
					.getText());
			pstat.setString(6, arrangeNode.selectSingleNode("fUsePsnID")
					.getText());
			pstat.setString(7, arrangeNode.selectSingleNode("fUsePsnName")
					.getText());
			pstat.setString(8, arrangeNode.selectSingleNode("fUsePsnFullID")
					.getText());
			pstat.setString(9, arrangeNode.selectSingleNode("fUsePsnFullName")
					.getText());
			if (arrangeNode.selectSingleNode("fBoardRoomID") == null)
					{
					pstat.setString(10, " ");
					}
			else
				{
				pstat.setString(10, arrangeNode			
						.selectSingleNode("fBoardRoomID").getText());
				}
			if (arrangeNode.selectSingleNode("fBoardRoom") == null)
					pstat.setString(11, " ");
			else
				pstat.setString(11, arrangeNode.selectSingleNode("fBoardRoom")
						.getText());
			pstat.setString(12, arrangeNode.selectSingleNode("fMeetName")
					.getText());
			pstat.setTimestamp(13, new java.sql.Timestamp(beginTime.getTime()));
			pstat.setTimestamp(14, new java.sql.Timestamp(endTime.getTime()));
			pstat.setString(15, arrangeNode.selectSingleNode("fMeetPsns")
					.getText());
			pstat.setInt(16, Integer.parseInt(arrangeNode.selectSingleNode(
					"fMeetPsnNum").getText()));
			pstat.setString(17, arrangeNode.selectSingleNode("fPhone")
					.getText());
			if (arrangeNode.selectSingleNode("fArrOgnID") == null)
				pstat.setString(18, "");
			else
				pstat.setString(18, arrangeNode.selectSingleNode("fArrOgnID")
						.getText());
			if (arrangeNode.selectSingleNode("fArrOgnName") == null)
				pstat.setString(19, "");
			else
				pstat.setString(19, arrangeNode.selectSingleNode("fArrOgnName")
						.getText());
			pstat.setString(20, arrangeNode.selectSingleNode("fArrDeptID")
					.getText());
			pstat.setString(21, arrangeNode.selectSingleNode("fArrDeptName")
					.getText());
			pstat.setString(22, arrangeNode.selectSingleNode("fArrPsnID")
					.getText());
			pstat.setString(23, arrangeNode.selectSingleNode("fArrPsnName")
					.getText());
			pstat.setString(24, arrangeNode.selectSingleNode("fArrPsnFullID")
					.getText());
			pstat.setString(25, arrangeNode.selectSingleNode("fArrPsnFullName")
					.getText());
			pstat.setTimestamp(26, new java.sql.Timestamp(arrTime.getTime()));
			pstat.setString(27, arrangeNode.selectSingleNode("fDescription")
					.getText());
			if (arrangeNode.selectSingleNode("fRemark") == null)
				pstat.setString(28, "");
			else
				pstat.setString(28, arrangeNode.selectSingleNode("fRemark")
						.getText());
			pstat.setInt(29, 1);
			pstat.setString(30, arrangeNode.selectSingleNode("fMTUseApplyID")
					.getText());
			pstat.executeUpdate();
			String addScheduleFlag = arrangeNode.selectSingleNode(
					"faddScheduleFlag").getText();
			Node nodeArrangePsns = arrangeNode.selectSingleNode("arrangePsns");
			if(nodeArrangePsns != null)//参会人员根节点
			{
				List<Element> arrangePsnList = (List<Element>) nodeArrangePsns
				.selectNodes("arrangePsn");
				if((arrangePsnList != null) && (arrangePsnList.size()>0))//有参会人员
				{
					newArrangePsns(conn, arrangeNode, arrangerID);
					if ("true".equals(addScheduleFlag)) {
						newScheduleByApply(arrangeNode
								.selectSingleNode("fMTUseApplyID").getText(),arrangerID);
					}
				}
			}
		} finally {
			pstat.close();
			pstat = null;
		}
		return arrangerID;
	}

	private static void newArrangePsns(Connection conn, Element arrangeNode,
			String arrangeID) throws Exception {
		String executorIDs = "";
		String executorNames = "";
		Node nodeArrangePsns = arrangeNode.selectSingleNode("arrangePsns");
		if(nodeArrangePsns == null)
			return;
		List<Element> arrangePsnList = (List<Element>) nodeArrangePsns
				.selectNodes("arrangePsn");
		String applyID = arrangeNode.selectSingleNode("fMTUseApplyID")
				.getText();
		String sql = String.format(
				"select * from OA_MT_UseApplyPsns where fMasterID='%s'",
				applyID);
		Statement stat = conn.createStatement();
		try {
			ResultSet rs = stat.executeQuery(sql);
			try {
				String sqlNewArrangePsn = "insert into OA_MT_ArrangePsns("
						+ "fID, fMasterID, fOrgKind, fOrgID, fOrgName,"
						+ "fPersonID, fPersonName, fRangeURL, fRangeURLName, version)"
						+ "values(?, ?, ?, ?, ?, ?, ?, ?, ?, 0)";
				while (rs.next()) {
					String fID = java.util.UUID.randomUUID().toString();
					PreparedStatement pstat = conn
							.prepareStatement(sqlNewArrangePsn);
					pstat.setString(1, fID);
					pstat.setString(2, arrangeID);
					pstat.setString(3, rs.getString("fOrgKind"));
					pstat.setString(4, rs.getString("fOrgID"));
					pstat.setString(5, rs.getString("fOrgName"));
					pstat.setString(6, rs.getString("fPersonID"));
					pstat.setString(7, rs.getString("fPersonName"));
					pstat.setString(8, rs.getString("fRangeURL"));
					pstat.setString(9, rs.getString("fRangeURLName"));
					pstat.executeUpdate();
				}
			} finally {
				rs.close();
				rs = null;
			}

		} finally {
			stat.close();
			stat = null;
		}
	}

	private static String newScheduleByApply(String applyID, String arrangeID) throws Exception {
		String scheduleID = "";
		String sql = String.format(
				"select * from OA_MT_UseApply where fid='%s'", applyID);
		String getApplyPsnSql = String.format(
				"select * from OA_MT_UseApplyPsns where fMasterID='%s'",
				applyID);
		Document result = DocumentHelper.createDocument();
		Element rtRoot = result.addElement("root");
		Element schedule = rtRoot.addElement("schedule");
		Connection conn = ModelUtils.getConnection("/OA/meeting/data");
		ContextHelper.getTransaction().begin(conn);

		try {
			Statement stat = conn.createStatement();
			try {
				ResultSet rs = stat.executeQuery(sql);
				try {
					if (rs.next()) {
						Element fTitle = schedule.addElement("fTitle");
						fTitle.setText(rs.getString("fmeetname"));
						Element fBeginTime = schedule.addElement("fBeginTime");
						fBeginTime.setText(rs.getString("fbegintime"));
						Element fEndTime = schedule.addElement("fEndTime");
						fEndTime.setText(rs.getString("fendtime"));
						Element fContent = schedule.addElement("fContent");
						if(rs.getString("fdescription") == null)
							fContent.setText("");
						else
							fContent.setText(rs.getString("fdescription"));
						Element fIsShared = schedule.addElement("fIsShared");
						fIsShared.setText("1");
						Element fIsRemind = schedule.addElement("fIsRemind");
						fIsRemind.setText("1");
						Element fRemindTime = schedule
								.addElement("fRemindTime");
						fRemindTime.setText(rs.getString("fBeginTime"));
						Element fCreatePsnID = schedule
								.addElement("fCreatePsnID");
						fCreatePsnID.setText(rs.getString("fcreatepsnid"));
						Element fCreatePsnName = schedule
								.addElement("fCreatePsnName");
						fCreatePsnName.setText(rs.getString("fcreatepsnname"));
						Element fCreateTime = schedule
								.addElement("fCreateTime");
						fCreateTime.setText(rs.getString("fcreatetime"));
						Element fCreateURL = schedule.addElement("fCreateURL");
						fCreateURL.setText(rs.getString("fcreatepsnfid"));
						Element fBizID = schedule.addElement("fBizID");
						fBizID.setText(arrangeID);
						Element fBizType = schedule.addElement("fBizType");
						fBizType.setText("会议安排");
					}
				} finally {
					rs.close();
					rs = null;
				}
				rs = stat.executeQuery(getApplyPsnSql);
				try {
					Element Executors = schedule.addElement("Executors");
					while (rs.next()) {
						Element Executor = Executors.addElement("Executor");
						Element fExecutorID = Executor
								.addElement("fExecutorID");
						fExecutorID.setText(rs.getString("fpersonid"));
						Element fExecutorName = Executor
								.addElement("fExecutorName");
						fExecutorName.setText(rs.getString("fpersonname"));
					}
				} finally {
					rs.close();
					rs = null;
				}
				scheduleID = OAbar.schedule.ScheduleInterface.newSchedule(result);
			} finally {
				stat.close();
				stat = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
		return scheduleID;
	}
	
	private static String checkBoardroomUsed(String fBoardroomID,
			String fBeginTime, String fEndTime ,String fArrangeID) throws Exception {
		String sql = "";
		Connection conn = ModelUtils.getConnection("/OA/meeting/data");
		ContextHelper.getTransaction().begin(conn);
		try {
			Statement stmt = conn.createStatement();
			try {
				String strDatabaseType = conn.getMetaData()
						.getDatabaseProductName();
				fBeginTime = fBeginTime.replace("T", " ");
				fEndTime = fEndTime.replace("T", " ");
				fBeginTime = fBeginTime.substring(0, 19);
				fEndTime = fEndTime.substring(0, 19);
				if (strDatabaseType.equalsIgnoreCase("Oracle")) {
					sql = "select 1 from OA_MT_RoomArrange where fboardroomid = '"
							+ fBoardroomID
							+ "' and fEndTime > to_date('"
							+ fBeginTime
							+ "','yyyy-mm-dd hh24:mi:ss') and fBeginTime < to_date('"
							+ fEndTime
							+ "','yyyy-mm-dd hh24:mi:ss') and fEffect = 1";
				} else {
					sql = "select 1 from OA_MT_RoomArrange where fboardroomid = '"
							+ fBoardroomID
							+ "' and fEndTime > CAST('"
							+ fBeginTime
							+ "' as datetime) and fBeginTime < CAST('"
							+ fEndTime + "' as datetime) and fEffect = 1";
				}
				if(fArrangeID != null && (!"".equals(fArrangeID)))
				{
					 sql +=  " and (fID !='" + fArrangeID + "')"; 
				}
				ResultSet rs = stmt.executeQuery(sql);
				try {
					if (rs.next()) {
						return "true";
					} else {
						return "false";
					}
				} finally {
					rs.close();
					rs = null;
				}
			} finally {
				stmt.close();
				stmt = null;
			}
		} finally {
			conn.close();
			conn = null;
		}
	}
}
