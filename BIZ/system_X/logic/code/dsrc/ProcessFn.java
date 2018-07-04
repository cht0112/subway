import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.justep.system.action.ActionUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.system.opm.OrgUnit;
import com.justep.system.opm.OrgUtils;
import com.justep.system.process.ProcessUtils;
import java.util.HashMap;
import java.util.Map;



public class ProcessFn {

	public static List<OrgUnit> findOrgUnitsHasCActivity(Object inOrg, boolean isPersonMember) {
		return ProcessUtils.findOrgUnitsHasCActivity(inOrg, isPersonMember);
	}


	public static List<OrgUnit> findActivityExecutor(String activity) {
		return ProcessUtils.findActivityExecutor(activity);
	}
	
	public static String findActivityFirstExecutorFID(String activity) {
		return OrgUtils.firstOrgUnitFID(ProcessUtils.findActivityExecutor(activity));
	}
	
	public static String findActivityFirstExecutorName(String activity) {
		return OrgUtils.firstOrgUnitFName(ProcessUtils.findActivityExecutor(activity));
	}


	public static List<OrgUnit> findActivityExecutorOrg(String activity) {
		return ProcessUtils.findActivityExecutorOrg(activity);
	}


	public static String findActivityFirstExecutorOrgFID(String activity) {
		return OrgUtils.firstOrgUnitFID(ProcessUtils.findActivityExecutorOrg(activity));
	}
	
	public static String findActivityFirstExecutorOrgFName(String activity) {
		return OrgUtils.firstOrgUnitFName(ProcessUtils.findActivityExecutorOrg(activity));
	}
	

	
	public static List<OrgUnit> findActivityExecutorDept(String activity) {
		return ProcessUtils.findActivityExecutorDept(activity);
	}

	public static String findActivityFirstExecutorDeptFID(String activity) {
		return OrgUtils.firstOrgUnitFID(ProcessUtils.findActivityExecutorDept(activity));
	}

	public static String findActivityFirstExecutorDeptFName(String activity) {
		return OrgUtils.firstOrgUnitFName(ProcessUtils.findActivityExecutorDept(activity));
	}

	public static List<OrgUnit> findActivityExecutorOgn(String activity) {
		return ProcessUtils.findActivityExecutorOgn(activity);
	}

	public static String findActivityFirstExecutorOgnFID(String activity) {
		return OrgUtils.firstOrgUnitFID(ProcessUtils.findActivityExecutorOgn(activity));
	}

	public static String findActivityFirstExecutorOgnFName(String activity) {
		return OrgUtils.firstOrgUnitFName(ProcessUtils.findActivityExecutorOgn(activity));
	}

	public static List<OrgUnit> findActivityCreator(String activity) {
		return ProcessUtils.findActivityCreator(activity);
	}

	public static String findActivityFirstCreatorFID(String activity) {
		return OrgUtils.firstOrgUnitFID(ProcessUtils.findActivityCreator(activity));
	}

	public static String findActivityFirstCreatorFName(String activity) {
		return OrgUtils.firstOrgUnitFName(ProcessUtils.findActivityCreator(activity));
	}

	public static List<OrgUnit> findActivityCreatorOrg(String activity) {
		return ProcessUtils.findActivityCreatorOrg(activity);
	}

	public static String findActivityFirstCreatorOrgFID(String activity) {
		return OrgUtils.firstOrgUnitFID(ProcessUtils.findActivityCreatorOrg(activity));
	}

	public static String findActivityFirstCreatorOrgFName(String activity) {
		return OrgUtils.firstOrgUnitFName(ProcessUtils.findActivityCreatorOrg(activity));
	}

	public static List<OrgUnit> findActivityCreatorDept(String activity) {
		return ProcessUtils.findActivityCreatorDept(activity);
	}

	public static String findActivityFirstCreatorDeptFID(String activity) {
		return OrgUtils.firstOrgUnitFID(ProcessUtils.findActivityCreatorDept(activity));
	}

	public static String findActivityFirstCreatorDeptFName(String activity) {
		return OrgUtils.firstOrgUnitFName(ProcessUtils.findActivityCreatorDept(activity));
	}

	public static List<OrgUnit> findActivityCreatorOgn(String activity) {
		return ProcessUtils.findActivityCreatorOgn(activity);
	}

	public static String findActivityFirstCreatorOgnFID(String activity) {
		return OrgUtils.firstOrgUnitFID(ProcessUtils.findActivityCreatorOgn(activity));
	}

	public static String findActivityFirstCreatorOgnFName(String activity) {
		return OrgUtils.firstOrgUnitFName(ProcessUtils.findActivityCreatorOgn(activity));
	}

	public static List<OrgUnit> findOrgUnitsHasActivity(String activity, Object inOrg, boolean isPersonMember) {
		String process = ProcessUtils.getProcessInProcessContext().getFullName2();
		return OrgUtils.findOrgUnitsHasActivity(process, activity, inOrg, isPersonMember);
	}

	
	
	public static List<OrgUnit> findOrgUnitsHasCActivityInAEDept(String activity, boolean isPersonMember) {
		return ProcessUtils.findOrgUnitsHasCActivityInAEDept(activity, isPersonMember);
	}

	public static List<OrgUnit> findOrgUnitsHasCActivityInAEOgn(String activity, boolean isPersonMember) {
		return ProcessUtils.findOrgUnitsHasCActivityInAEOgn(activity, isPersonMember);
	}

	public static List<OrgUnit> findOrgUnitsHasCActivityInACDept(String activity, boolean isPersonMember) {
		return ProcessUtils.findOrgUnitsHasCActivityInACDept(activity, isPersonMember);
	}

	public static List<OrgUnit> findOrgUnitsHasCActivityInACOgn(String activity, boolean isPersonMember) {
		return ProcessUtils.findOrgUnitsHasCActivityInACOgn(activity, isPersonMember);
	}
	
	public static Boolean isExecutingAction(String name){
		return ProcessUtils.isExecutingAction(name);
	}
	
	public static Boolean isProcessFinished(){
		return ProcessUtils.isProcessFinished();
	}
	
	public static Boolean isStartingProcess(){
		return ProcessUtils.isStartingProcess();
	}
	
	public static Boolean processFinishable(){
		return ProcessUtils.processFinishable();
	}
	
	public static Boolean isFlowTo(String name){
		return ProcessUtils.isFlowTo(name);
	}
	
	public static Boolean isFlowToEnd(){
		return ProcessUtils.isFlowToEnd();
	}
	
	
	public static String currentProcessLabel(){
		return ProcessUtils.getCurrentProcessLabel();
	}

	public static String currentActivityLabel(){
		return ProcessUtils.getCurrentActivityLabel();
	}
	
	
	public static String currentPIName(){
		return ProcessUtils.getPINameInProcessContext();
	}
	
	public static String getProcessData1(){
		return ProcessUtils.getProcessData1();
	}

	public static String getProcessData2(){
		return ProcessUtils.getProcessData2();
	}

	public static String getProcessData3(){
		return ProcessUtils.getProcessData3();
	}

	public static String getProcessData4(){
		return ProcessUtils.getProcessData4();
	}
	
	public static String currentProcess(){
		return ActionUtils.getRequestContext().getActionContext().getProcess().getFullName();
	}

	public static String currentActivity(){
		return ActionUtils.getRequestContext().getActionContext().getActivity().getFullName();
	}
	
	public static String currentProcessOfProcessContext(){
		return ProcessUtils.getProcessInProcessContext().getFullName();
	}

	public static String currentActivityOfProcessContext(){
		return ProcessUtils.getActivityInProcessContext().getFullName();
	}
	
	public static String currentProcessLabelOfProcessContext(){
		return ProcessUtils.getProcessLabelInProcessContext();
	}
	
	public static String currentActivityLabelOfProcessContext(){
		return ProcessUtils.getActivityLabelInProcessContext();
	}
	
	public static Boolean inputFromActivity(String activity){
		return ProcessUtils.inputFromActivity(activity);
	}
	
	public static List<OrgUnit> findActivityProjectUser(String activity) {
		System.out.println(activity);
		List<OrgUnit> orgs = new ArrayList<OrgUnit>();
		Map map = new HashMap();
		map.put("no", Integer.valueOf(activity));
		String KsqlSelect = "select oper.oRGID from TEST_PROJECT_INFO test " +
							"join TEST_PROJECT_MEMBER_INFO member on test.aPPLICATIONNO=member.aPPLICATION_NO " +
							"join OPERATOR_PASSWORD oper on member.pROJECTMEMBERID=oper " +
							"where test.aPPLICATIONNO= :no";
		Table table = (Table)KSQL.select(KsqlSelect, map, "/metrodetection/system_code/data", null);
		Iterator<Row> rs = table.iterator(); 
		Row row = null;
		if(table.size()>0){
			 while (rs.hasNext()){
				row = rs.next();
				String orgID = row.getValue("oRGID").toString();
				System.out.println("++++++++++"+orgID);
				List<OrgUnit> org = OrgUtils.findPersonMembersByID(null, orgID.split("@")[0]);
				orgs.add(org.get(0));
			 }
		}else{
			System.out.println("----------->");
		}
		return orgs;
	}
	
	public static List<OrgUnit> findActivityProjectTECH(String activity) {
		System.out.println(activity);
		List<OrgUnit> orgs = new ArrayList<OrgUnit>();
		String KsqlSelect = "select op.oRGID from OPERATOR_PASSWORD op " +
							"join HR_BASE_INFO hr on hr = op " +
							"where hr.Scode='"+activity+"'";
		Table table = (Table)KSQL.select(KsqlSelect, null, "/metrodetection/system_code/data", null);
		Iterator<Row> rs = table.iterator(); 
		Row row = null;
		if(table.size()>0){
			 while (rs.hasNext()){
				row = rs.next();
				String orgID = row.getValue("oRGID").toString();
				List<OrgUnit> org = OrgUtils.findPersonMembersByID(null, orgID.split("@")[0]);
				orgs.add(org.get(0));
			 }
		}else{
			System.out.println("----------->");
		}
		return orgs;
	}
	
}
