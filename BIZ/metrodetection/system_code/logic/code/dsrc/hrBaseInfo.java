import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import com.justep.model.ModelUtils;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;

public class hrBaseInfo {
	
	public static void saveHrBaseInfo(String operatorId,String sName,String sCode,Integer sex,Date birthDay,String nation,Integer office,Integer position,Integer degree,Integer education,
			Integer political,String profession,Integer title,String email,String moble,Integer state,String memo,String cardId){
		System.out.println("asasdads========================================================================================");
		String operator = (String)ModelUtils.getRequestContext().getActionContext().getParameter("operatorId");
		String name = (String)ModelUtils.getRequestContext().getActionContext().getParameter("sName");
		System.out.println("=======name====: "+name);
		String scode = (String)ModelUtils.getRequestContext().getActionContext().getParameter("sCode");
		Integer oSex = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("sex");
		Date BirthDay = (Date)ModelUtils.getRequestContext().getActionContext().getParameter("birthDay");
		Timestamp oBirthDay = null;
		if(BirthDay != null){
			oBirthDay = new Timestamp(BirthDay.getTime());
		}else{
			oBirthDay = new Timestamp(new Date().getTime());
		}
		String oNation = (String)ModelUtils.getRequestContext().getActionContext().getParameter("nation");
		Integer oOffice = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("office");
		Integer oPosition = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("position");
		Integer oDegree = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("degree");
		Integer oEducation = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("education");
		Integer oPolitical = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("political");
		String oProfession = (String)ModelUtils.getRequestContext().getActionContext().getParameter("profession");
		Integer oTitle = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("title");
		String oEmail = (String)ModelUtils.getRequestContext().getActionContext().getParameter("email");
		String oMoble = (String)ModelUtils.getRequestContext().getActionContext().getParameter("moble");
		Integer oState = (Integer)ModelUtils.getRequestContext().getActionContext().getParameter("state");
		String oMemo = (String)ModelUtils.getRequestContext().getActionContext().getParameter("memo");
		
		Map<String,Object> var = new HashMap<String,Object>();
    	var.put("operator", operator);
		var.put("name", name);
		var.put("scode", scode);
		var.put("oSex", oSex);
		var.put("oNation", oNation);
		var.put("oEducation", oEducation);
		var.put("oOffice", oOffice);
		var.put("oPosition", oPosition);
		var.put("oDegree", oDegree);
		var.put("oPolitical", oPolitical);
		var.put("oTitle", oTitle);
		var.put("oEmail", oEmail);
		var.put("oMoble", oMoble);
		var.put("oState", oState);
		var.put("oMemo", oMemo);
		var.put("oBirthDay", oBirthDay);
		var.put("oProfession", oProfession);
		var.put("cardId", cardId);
		
		//判断是新增还是修改
		System.out.println(operator+"  &&&&&&&&&&&&&&&operator&&&&&&&&&");
		String skqlHrbaseInfo = "select HR_BASE_INFO.oPERATORNAME as oPERATORNAME from HR_BASE_INFO HR_BASE_INFO WHERE trim(HR_BASE_INFO)=:operator";
		System.out.println("====skqlHrbaseInfo====: "+skqlHrbaseInfo);
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("operator", operator);
		Table tab = KSQL.select(skqlHrbaseInfo, map, "/metrodetection/system_code/data", null);
		Iterator<Row> it = tab.iterator();
		while(it.hasNext()){
			Row inRow = (Row)it.next();
			System.out.println(inRow.getValue("oPERATORNAME"));
		}
		System.out.println(tab.size()+" &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
		
		if(tab.size()<= 0){
			//新增
			String saveHrBaseInfoksql = "insert into HR_BASE_INFO h(h,h.oPERATORNAME,h.oPERATORSEX,h.oPERATORBIRTHDAY,h.nATION,h.oFFICEID,h.pOSITIONID,h.dEGREEID,h.eDUCATIONID,h.pOLITICALID," +
			" h.pROFESSIONAL,h.pOSITIONALTITLE,h.eMAILADDRESS,h.mOBILE,h.oPERATORSTATE,h.mEMO,h.Scode,h.cARDID) values(:operator,:name,:oSex,:oBirthDay,:oNation," +
			" :oOffice,:oPosition,:oDegree,:oEducation,:oPolitical,:oProfession,:oTitle,:oEmail,:oMoble,:oState,:oMemo,:scode,:cardId)";
			KSQL.executeUpdate(saveHrBaseInfoksql, var, "/metrodetection/system_code/data", null);
		}else{
			//修改
			String updataHrBaseInfo = "update HR_BASE_INFO h set h.oPERATORNAME='"+name+"', h.oPERATORSEX=:oSex, h.oPERATORBIRTHDAY=:oBirthDay, h.nATION=:oNation," +
					" h.oFFICEID=:oOffice, h.pOSITIONID=:oPosition, h.dEGREEID=:oDegree, h.eDUCATIONID=:oEducation, h.pOLITICALID=:oPolitical, " +
					"h.pROFESSIONAL=:oProfession, h.pOSITIONALTITLE=:oTitle, h.eMAILADDRESS=:oEmail, h.mOBILE=:oMoble, h.oPERATORSTATE=:oState, " +
					"h.mEMO=:oMemo, h.Scode=:scode,h.cARDID=:cardId where trim(h)='"+operator+"'";
			System.out.println("----updataHrBaseInfo------->>>>>>>>>"+updataHrBaseInfo);
			KSQL.executeUpdate(updataHrBaseInfo, var, "/metrodetection/system_code/data", null);
		}
	}

}