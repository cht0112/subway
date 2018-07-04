import com.justep.model.Model;
import com.justep.model.ModelUtils;
import com.justep.system.process.*;
import OAbar.meeting.util.*;

public class BoardroomUseApplyProcess {

	private static Boolean getIsFlowEnd() {
		return ProcessUtils.isFlowToEnd();
	}

	private static String getBizID() {
		return ProcessUtils.getProcessData1();
	}

	public static void boardroomUseApplyProcessAfterAdvance() throws Exception {
		String fid = getBizID();
		if (getIsFlowEnd()) {
			BoardRoomArrange.newMeetingArrangeByApply(fid, true);
		}
	}
}
