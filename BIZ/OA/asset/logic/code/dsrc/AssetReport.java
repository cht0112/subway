import java.io.File;
import java.util.HashMap;

import org.dom4j.DocumentException;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

import com.justep.olap.common.WEBConstants;
import com.justep.system.data.SQL;
import com.justep.system.data.Table;

public class AssetReport {
	public static Table assetSummaryMain(String beginDate,String endDate,String dayNum,String orgIDs) throws DocumentException{
		//System.out.println("1----- beginDate="+beginDate+"--endDate="+endDate+"--dayNum="+dayNum+"--orgIDs="+orgIDs);
		String orclSql = "",msSql = "",orgCondition="",beginDateOrcl="",endDateOrcl="",beginDateMS="",endDateMS="";
		String webAbsPath = WEBConstants.getWebRootAbsPath();
		String configPath = webAbsPath.substring(0, webAbsPath.indexOf("apache-tomcat")) + "apache-tomcat"+File.separator+"conf"+File.separator+"server.xml";
		SAXReader xmlReader = new SAXReader();
		Node ndORCL = xmlReader.read(configPath).getRootElement().selectSingleNode("//Resource[@name='system']/@username");
		String dbNameORCL = ndORCL.getStringValue();
		Node ndMS = xmlReader.read(configPath).getRootElement().selectSingleNode("//Resource[@name='system']/@url");
		String dbNameMS = ndMS.getStringValue().substring(ndMS.getStringValue().lastIndexOf("/")+1, ndMS.getStringValue().length());
		
		beginDateOrcl = "convert(date,'"+ beginDate + "')";
		endDateOrcl = "convert(date,'"+ endDate + "')";
		beginDateMS = "cast('"+beginDate+"' as datetime) ";
		endDateMS = "cast('"+endDate+"' as datetime) ";
		if(orgIDs.equals("") || orgIDs.equals(null)){
			orgCondition = " and 1=1 ";
		}else{
			orgIDs = "'"+ orgIDs + "'";
			orgIDs = orgIDs.replace(" ","','");
			orgCondition= " and m.fCreateDeptID in ("+ orgIDs +")";
		}
		if(dayNum.equals("") || dayNum.equals(null)){
			orclSql = "select t1.ct SQDSL,null CYYDZQRWS,null DYYDZQRWS,null DAYNUM,"+beginDateOrcl+" BEGINDATE,"+endDateOrcl+" ENDDATE from "
			+"(select count(m.fid) ct from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+") t1";
			
			msSql ="select t1.ct SQDSL,null CYYDZQRWS,null DYYDZQRWS,null DAYNUM,"+beginDateMS+" BEGINDATE,"+endDateMS+" ENDDATE from "
			+"(select count(m.fid) ct from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+") t1";
		}else{
			orclSql = "select t1.ct SQDSL,t2.ct CYYDZQRWS,t3.ct DYYDZQRWS,"+dayNum+" DAYNUM,"+beginDateOrcl+" BEGINDATE,"+endDateOrcl+" ENDDATE from "
			+"(select count(m.fid) ct from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+") t1,"
			+"(select count(d.fid) ct from (select fid from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+" ) d join "+dbNameORCL+".dbo.sa_task s on d.fid=s.sdata1 and s.sparentid is null and (s.sstatusid = 'tesFinished' and s.sactualfinishtime > dateadd(dd,("+dayNum+"-1),s.sactualstarttime))) t2,"
			+"(select count(d.fid) ct from (select fid from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+" ) d join "+dbNameORCL+".dbo.sa_task s on d.fid=s.sdata1 and s.sparentid is null and (s.sstatusid = 'tesFinished' and s.sactualfinishtime < =dateadd(dd,("+dayNum+"-1),s.sactualstarttime))) t3";
			
			msSql = "select t1.ct SQDSL,t2.ct CYYDZQRWS,t3.ct DYYDZQRWS,"+dayNum+" DAYNUM,"+beginDateMS+" BEGINDATE,"+endDateMS+" ENDDATE from "
			+"(select count(m.fid) ct from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+") t1,"
			+"(select count(d.fid) ct from (select fid from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+" ) d join "+dbNameMS+".dbo.sa_task s on d.fid=s.sdata1 and s.sparentid is null and (s.sstatusid = 'tesFinished' and s.sactualfinishtime > dateadd(dd,("+dayNum+"-1),s.sactualstarttime))) t2,"
			+"(select count(d.fid) ct from (select fid from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+" ) d join "+dbNameMS+".dbo.sa_task s on d.fid=s.sdata1 and s.sparentid is null and (s.sstatusid = 'tesFinished' and s.sactualfinishtime < =dateadd(dd,("+dayNum+"-1),s.sactualstarttime))) t3";
		}

		HashMap<String,String> sqlMap = new HashMap<String,String>();
		sqlMap.put("SYBASE",orclSql);
		sqlMap.put("MSSQL",msSql);
		
		return SQL.select(sqlMap,null,"/OA/asset/data");
	}
	
	public static Table assetSummaryDetail(String beginDate,String endDate,String orgIDs){
		//System.out.println("2----- beginDate="+beginDate+"--endDate="+endDate+"--orgIDs="+orgIDs);
		String orclSql = "",msSql = "",orgCondition="",beginDateOrcl="",endDateOrcl="",beginDateMS="",endDateMS="";
		beginDateOrcl = "convert(date,'"+ beginDate + "')";
		endDateOrcl = "convert(date,'"+ endDate + "')";
		beginDateMS = "cast('"+beginDate+"' as datetime) ";
		endDateMS = "cast('"+endDate+"' as datetime) ";
		if(orgIDs.equals("") || orgIDs.equals(null)){
			orgCondition = " and 1=1 ";
		}else{
			orgIDs = "'"+ orgIDs + "'";
			orgIDs = orgIDs.replace(" ","','");
			orgCondition= " and m.fCreateDeptID in ("+ orgIDs +")";
		}
		
		orclSql = "select t.fkind FKINDNAME,t.FNAME,sum(t.fBuyNum) NUM,sum(t.fAmount) AMOUNT from (select d.fkind,d.fname,fBuyNum,d.fAmount from OA_AS_BuyApplyD d join OA_AS_BuyApplyM m on d.fmasterid=m.fid and m.fBizState='bsFinished' and m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+") t group by t.fkind,t.fname order by t.fkind,t.fname";
		msSql = "select t.fkind FKINDNAME,t.FNAME,sum(t.fBuyNum) NUM,sum(t.fAmount) AMOUNT from (select d.fkind,d.fname,fBuyNum,d.fAmount from OA_AS_BuyApplyD d join OA_AS_BuyApplyM m on d.fmasterid=m.fid and m.fBizState='bsFinished' and m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+") t group by t.fkind,t.fname order by t.fkind,t.fname";
		//System.out.println("orclSql="+orclSql);
		HashMap<String,String> sqlMap = new HashMap<String,String>();
		sqlMap.put("SYBASE",orclSql);
		sqlMap.put("MSSQL",msSql);
		return SQL.select(sqlMap,null,"/OA/asset/data");
	}
	
	public static Table assetSummaryZT(String beginDate,String endDate,String dayNum,String orgIDs) throws DocumentException{
		//System.out.println("3----- beginDate="+beginDate+"--endDate="+endDate+"--dayNum="+dayNum+"--orgIDs="+orgIDs);
		String orclSql = "",msSql = "",orgCondition="",beginDateOrcl="",endDateOrcl="",beginDateMS="",endDateMS="";
		String webAbsPath = WEBConstants.getWebRootAbsPath();
		String configPath = webAbsPath.substring(0, webAbsPath.indexOf("apache-tomcat")) + "apache-tomcat"+File.separator+"conf"+File.separator+"server.xml";
		SAXReader xmlReader = new SAXReader();
		Node ndORCL = xmlReader.read(configPath).getRootElement().selectSingleNode("//Resource[@name='system']/@username");
		String dbNameORCL = ndORCL.getStringValue();
		Node ndMS = xmlReader.read(configPath).getRootElement().selectSingleNode("//Resource[@name='system']/@url");
		String dbNameMS = ndMS.getStringValue().substring(ndMS.getStringValue().lastIndexOf("/")+1, ndMS.getStringValue().length());
		
		beginDateOrcl = "convert(date,'"+ beginDate + "')";
		endDateOrcl = "convert(date,'"+ endDate + "')";
		beginDateMS = "cast('"+beginDate+"' as datetime) ";
		endDateMS = "cast('"+endDate+"' as datetime) ";
		if(orgIDs.equals("") || orgIDs.equals(null)){
			orgCondition = " and 1=1 ";
		}else{
			orgIDs = "'"+ orgIDs + "'";
			orgIDs = orgIDs.replace(" ","','");
			orgCondition= " and m.fCreateDeptID in ("+ orgIDs +")";
		}
		if(dayNum.equals("") || dayNum.equals(null)){
			orclSql = "select '申请单数量' FNAME,t1.ct CT from (select count(m.fid) ct from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+") t1";
			msSql = "select '申请单数量' FNAME,t1.ct CT from (select count(m.fid) ct from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+") t1";
		}else{
			orclSql = "select '申请单数量' FNAME,t1.ct CT from (select count(m.fid) ct from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+") t1 union "
				+"select '长于预定周期任务数' FNAME,t2.ct CT from (select count(d.fid) ct from (select fid from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+" ) d join "+dbNameORCL+".dbo.sa_task s on d.fid=s.sdata1 and s.sparentid is null and (s.sstatusid = 'tesFinished' and s.sactualfinishtime > dateadd(dd,("+dayNum+"-1),s.sactualstarttime))) t2 union "
				+"select '短于预定周期任务数' FNAME,t3.ct CT from (select count(d.fid) ct from (select fid from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+" ) d join "+dbNameORCL+".dbo.sa_task s on d.fid=s.sdata1 and s.sparentid is null and (s.sstatusid = 'tesFinished' and s.sactualfinishtime < =dateadd(dd,("+dayNum+"-1),s.sactualstarttime))) t3";
			msSql = "select '申请单数量' FNAME,t1.ct CT from (select count(m.fid) ct from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+") t1 union "
			+"select '长于预定周期任务数' FNAME,t2.ct CT from (select count(d.fid) ct from (select fid from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+" ) d join "+dbNameMS+".dbo.sa_task s on d.fid=s.sdata1 and s.sparentid is null and (s.sstatusid = 'tesFinished' and s.sactualfinishtime > dateadd(dd,("+dayNum+"-1),s.sactualstarttime))) t2 union "
			+"select '短于预定周期任务数' FNAME,t3.ct CT from (select count(d.fid) ct from (select fid from OA_AS_BuyApplyM m where m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+" ) d join "+dbNameMS+".dbo.sa_task s on d.fid=s.sdata1 and s.sparentid is null and (s.sstatusid = 'tesFinished' and s.sactualfinishtime < =dateadd(dd,("+dayNum+"-1),s.sactualstarttime))) t3";
		}

		HashMap<String,String> sqlMap = new HashMap<String,String>();
		sqlMap.put("SYBASE",orclSql);
		sqlMap.put("MSSQL",msSql);
		return SQL.select(sqlMap,null,"/OA/asset/data");
	}
	public static Table assetSummaryBT(String beginDate,String endDate,String orgIDs){
		//System.out.println("4----- beginDate="+beginDate+"--endDate="+endDate+"--orgIDs="+orgIDs);
		String orclSql = "",msSql = "",orgCondition="",beginDateOrcl="",endDateOrcl="",beginDateMS="",endDateMS="";
		beginDateOrcl = "convert(date,'"+ beginDate + "')";
		endDateOrcl = "convert(date,'"+ endDate + "')";
		beginDateMS = "cast('"+beginDate+"' as datetime) ";
		endDateMS = "cast('"+endDate+"' as datetime) ";
		if(orgIDs.equals("") || orgIDs.equals(null)){
			orgCondition = " and 1=1 ";
		}else{
			orgIDs = "'"+ orgIDs + "'";
			orgIDs = orgIDs.replace(" ","','");
			orgCondition= " and m.fCreateDeptID in ("+ orgIDs +")";
		}
		orclSql = "select t.fkind FKINDNAME,sum(t.fAmount) AMOUNT from (select d.fkind,d.fAmount from OA_AS_BuyApplyD d join OA_AS_BuyApplyM m on d.fmasterid=m.fid and m.fBizState='bsFinished' and m.fcreatetime >= "+beginDateOrcl+" and m.fcreatetime <= "+endDateOrcl+orgCondition+") t group by t.fkind";
		msSql = "select t.fkind FKINDNAME,sum(t.fAmount) AMOUNT from (select d.fkind,d.fAmount from OA_AS_BuyApplyD d join OA_AS_BuyApplyM m on d.fmasterid=m.fid and m.fBizState='bsFinished' and m.fcreatetime >= "+beginDateMS+" and m.fcreatetime <= "+endDateMS+orgCondition+") t group by t.fkind";

		HashMap<String,String> sqlMap = new HashMap<String,String>();
		sqlMap.put("SYBASE",orclSql);
		sqlMap.put("MSSQL",msSql);
		return SQL.select(sqlMap,null,"/OA/asset/data");
	}
}