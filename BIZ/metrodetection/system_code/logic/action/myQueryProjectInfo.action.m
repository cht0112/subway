<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="queryProject" global="false" procedure="queryProjectProcedure"><label language="zh_CN">查询立项信息</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="TEST_PROJECT_INFO"/>
<private name="select" type="String" value="TEST_PROJECT_INFO.*,case when TEST_PROJECT_INFO.eXECUTESTATE = 0 then '未开始' when TEST_PROJECT_INFO.eXECUTESTATE = 1 then '开始检测' when TEST_PROJECT_INFO.eXECUTESTATE = 2 then '检测完成' when TEST_PROJECT_INFO.eXECUTESTATE = 3 then '出具报告' end as excuteDsr,afc,afc.mANUFACTUREIDCNAME as cname1,afc1,afc1.mANUFACTUREIDCNAME as cname2,tpm1,tpm1.pROJECTMEMBERID as pm1,hr1,hr1.oPERATORNAME as name1,tpm2,tpm2.pROJECTMEMBERID as pm2,hr2,hr2.oPERATORNAME as name2,tpm3,tpm3.pROJECTMEMBERID as pm3,hr3,hr3.oPERATORNAME as name3,tpm4,tpm4.pROJECTMEMBERID as pm4,hr4,hr4.oPERATORNAME as name4"/>
<private name="from" type="String" value="TEST_PROJECT_INFO TEST_PROJECT_INFO  join AFC_MANUFACTURER_INFO afc on TEST_PROJECT_INFO.aSSIGNEDMANUFACTUREID = afc join AFC_MANUFACTURER_INFO afc1 on TEST_PROJECT_INFO.mANUFACTUREID = afc1 optional  join TEST_PROJECT_MEMBER_INFO tpm1 on TEST_PROJECT_INFO.qAMANAGER = tpm1.pROJECTMEMBERID AND TEST_PROJECT_INFO.aPPLICATIONNO = tpm1.aPPLICATION_NO optional  join HR_BASE_INFO hr1 on tpm1.pROJECTMEMBERID = hr1 optional  join TEST_PROJECT_MEMBER_INFO tpm2 on TEST_PROJECT_INFO.tESTMANAGER = tpm2.pROJECTMEMBERID AND TEST_PROJECT_INFO.aPPLICATIONNO = tpm2.aPPLICATION_NO optional  join HR_BASE_INFO hr2 on tpm1.pROJECTMEMBERID = hr2 optional  join TEST_PROJECT_MEMBER_INFO tpm3 on TEST_PROJECT_INFO.tECHMANAGER = tpm3.pROJECTMEMBERID AND TEST_PROJECT_INFO.aPPLICATIONNO = tpm3.aPPLICATION_NO optional  join HR_BASE_INFO hr3 on tpm3.pROJECTMEMBERID = hr3 optional  join TEST_PROJECT_MEMBER_INFO tpm4 on TEST_PROJECT_INFO.tECHMANAGER = tpm4.pROJECTMEMBERID AND TEST_PROJECT_INFO.aPPLICATIONNO = tpm4.aPPLICATION_NO optional  join HR_BASE_INFO hr4 on tpm4.pROJECTMEMBERID = hr4"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="TEST_PROJECT_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>