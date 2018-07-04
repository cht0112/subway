function meetingApply(date, time, roomID, roomName, state) {
	if (state == '申请中') {
		if (!confirm(roomName + "在" + date + " " + time + ":00至"
				+ (time * 1 + 1) + ":00已被申请,是否继续申请？"))
			return;
	} else if (state == '已安排') {
		if (!confirm(roomName + "在" + date + " " + time + ":00至"
				+ (time * 1 + 1) + ":00已被占用,是否继续申请？"))
			return;
	}
	var process = "/OA/meeting/process/boardroomUseApply/boardroomUseApplyProcess";
	var activity = "useApply";
	var url = "/OA/meeting/process/boardroomUseApply/useApply.w?process="
			+ process + "&activity=" + activity + "&roomID=" + roomID
			+ "&date=" + date + "&time=" + time;
	justep.Portal.openWindow("会议室申请", url);
}