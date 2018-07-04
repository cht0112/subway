package com.justep.appCommon;

import java.sql.Timestamp;
import java.util.Collection;

import com.justep.filesystem.FileSystemWrapper;
import com.justep.model.ModelObject;
import com.justep.model.ModelUtils;
import com.justep.system.context.ContextHelper;
import com.justep.system.opm.Operator;
import com.justep.system.opm.OrgNode;
import com.justep.system.opm.PersonMember;
import com.justep.system.util.CommonUtils;
import com.justep.util.Utils;

public class SysUtils {

	/**
	 * 获取biz层物理根路径
	 * @return
	 */
	public static String getBizRootPath() {
		return FileSystemWrapper.instance().getBase();
	}

	/**
	 * 获取当前Process的全名称
	 * @return
	 */
	public static String getCurrentProcessFullName() {
		return ModelUtils.getRequestContext().getActionContext().getProcess().getFullName();
	}

	public static String getCurrentProcessName() {
		return ModelUtils.getRequestContext().getActionContext().getProcess().getName();
	}

	public static String getCurrentProcessLabel() {
		return ModelUtils.getRequestContext().getActionContext().getProcess().getLabel(getLanguage());
	}

	/**
	 * 获取当前活动的全名称
	 * @return
	 */
	public static String getCurrentActivityFullName() {
		return ModelUtils.getRequestContext().getActionContext().getActivity().getFullName();
	}

	/**
	 * 获取当前活动的名称
	 * @return
	 */
	public static String getCurrentActivityName() {
		return ModelUtils.getRequestContext().getActionContext().getActivity().getName();
	}

	/**
	 * 获取当前活动的标签
	 * @return
	 */
	public static String getCurrentActivityLabel() {
		return ModelUtils.getRequestContext().getActionContext().getActivity().getLabel(getLanguage());
	}

	public static String getOperatorID(){
		return ContextHelper.getOperator().getID();
	}

	public static String getOperatorName(){
		return ContextHelper.getOperator().getName();
	}
	
	public static Collection<String> getAllPersonMemberFIDs() {
		Operator o = ContextHelper.getOperator();
		return o.getPersonMemberFIDs();
	}

	public static String getCurrentPersonID() {
		PersonMember o = ContextHelper.getPersonMember();
		return o.getPerson().getID();
	}
	
	public static String getCurrentPersonName() {
		PersonMember o = ContextHelper.getPersonMember();
		return o.getPerson().getName();
	}
	
	public static String getCurrentPersonNameWithAgent() {
		return ContextHelper.getPersonMemberNameWithAgent();
	}
	
	public static String getCurrentPersonMemberFNameWithAgent() {
		return ContextHelper.getPersonMemberFNameWithAgent();
	}
	
	public static String getCurrentPersonMemberID() {
		OrgNode o = ContextHelper.getPersonMember();
		return o.getID();
	}
	
	public static String getCurrentPersonMemberName() {
		OrgNode o = ContextHelper.getPersonMember();
		return o.getName();
	}
	
	public static String getCurrentPersonMemberFID() {
		OrgNode o = ContextHelper.getPersonMember();
		return o.getFID();
	}

	public static String getCurrentPersonMemberFName() {
		OrgNode o = ContextHelper.getPersonMember();
		return o.getFName();
	}

	public static String getCurrentOgnID() {
		OrgNode o = ContextHelper.getPersonMember().getOgn();
		return o.getID();
	}

	public static String getCurrentOgnName() {
		OrgNode o = ContextHelper.getPersonMember().getOgn();
		return o.getName();
	}

	public static String getCurrentOgnFID() {
		OrgNode o = ContextHelper.getPersonMember().getOgn();
		return o.getFID();
	}

	public static String getCurrentOgnFName() {
		OrgNode o = ContextHelper.getPersonMember().getOgn();
		return o.getFName();
	}

	public static String getCurrentDeptID() {
		OrgNode o = ContextHelper.getPersonMember().getDept();
		if (Utils.isNotNull(o)) {
			return o.getID();
		} else
			return null;
	}
	
	public static String getCurrentDeptName() {
		OrgNode o = ContextHelper.getPersonMember().getDept();
		if (Utils.isNotNull(o)) {
			return o.getName();
		} else
			return null;
	}
	
	public static String getCurrentDeptFID() {
		OrgNode o = ContextHelper.getPersonMember().getDept();
		if (Utils.isNotNull(o)) {
			return o.getFID();
		} else
			return null;
	}

	public static String getCurrentDeptFName() {
		OrgNode o = ContextHelper.getPersonMember().getDept();
		if (Utils.isNotNull(o)) {
			return o.getFName();
		} else
			return null;
	}

	public static String getCurrentPosID() {
		OrgNode o = ContextHelper.getPersonMember().getPos();
		if (Utils.isNotNull(o)) {
			return o.getID();
		} else
			return null;
	}
	
	public static String getCurrentPosName() {
		OrgNode o = ContextHelper.getPersonMember().getPos();
		if (Utils.isNotNull(o)) {
			return o.getName();
		} else
			return null;
	}
	
	public static String getCurrentPosFID() {
		OrgNode o = ContextHelper.getPersonMember().getPos();
		if (Utils.isNotNull(o)) {
			return o.getFID();
		} else
			return null;
	}

	public static String getCurrentPosFName() {
		OrgNode o = ContextHelper.getPersonMember().getPos();
		if (Utils.isNotNull(o)) {
			return o.getFName();
		} else
			return null;
	}

	public static String getCurrentOrgID() {
		OrgNode o = ContextHelper.getPersonMember().getOrg();
		return o.getID();
	}
	
	public static String getCurrentOrgName() {
		OrgNode o = ContextHelper.getPersonMember().getOrg();
		return o.getName();
	}
	
	public static String getCurrentOrgFID() {
		OrgNode o = ContextHelper.getPersonMember().getOrg();
		return o.getFID();
	}

	public static String getCurrentOrgFName() {
		OrgNode o = ContextHelper.getPersonMember().getOrg();
		return o.getFName();
	}

	public static Timestamp getCurrentDateTime() {
		return CommonUtils.getCurrentDateTime();
	}
	
	public static String getLabel(String fullName, String type) {
		ModelObject obj = ModelUtils.getModelObjectByFullName(fullName, type);
		if (Utils.isNull(obj)){
			return null;
		}else{
			return obj.getLabel(getLanguage());
		}
	}
	
	public static String getLanguage() {
		return ContextHelper.getOperator().getLanguage();
	}
	
	public static String createGUID() {
		return CommonUtils.createGUID();
	}
	
}
