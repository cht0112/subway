<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
    
  <relation name="tESTSCHEMEID" data-type="Integer"> 
    <label language="zh_CN">检测方案ID</label> 
  </relation>  
  <relation name="pROJECTDATE" data-type="DateTime"> 
    <label language="zh_CN">立项日期</label> 
  </relation>  
  <relation name="eNDINGDATE" data-type="DateTime"> 
    <label language="zh_CN">结项日期</label> 
  </relation>  
  <relation name="mAKEDATE" data-type="DateTime"> 
    <label language="zh_CN">方案制定日期</label> 
  </relation>  
  <relation name="pROJECTTYPE" data-type="Integer"> 
    <label language="zh_CN">项目类型</label> 
  </relation>  
  <relation name="nOTIFYTYPE" data-type="Integer"> 
    <label language="zh_CN">通知类型</label> 
  </relation>  
  <relation name="eXECUTESTATE" data-type="Integer"> 
    <label language="zh_CN">执行状态</label> 
  </relation>  
  <relation name="pROJECTMANAGER" data-type="String"> 
    <label language="zh_CN">项目负责人</label> 
  </relation>  
  <relation name="pROJECTNAME" data-type="String"> 
    <label language="zh_CN">项目名称</label> 
  </relation> 
<concept name="TEST_PROJECT_INFO" default-value-expr="nextSeq('20110')"><label language="zh_CN">测试项目信息</label>
<has-relation relation="aPPLICATIONNO" size="10" required="true" data-type="Integer"></has-relation>
<has-relation relation="tESTSCHEMEID" size="10" required="true"><label language="zh_CN">检测方案</label>
</has-relation>
<has-relation relation="pROJECTNAME" size="200" required="true"><label language="zh_CN">项目名称</label>
</has-relation>
<has-relation relation="pROJECTTYPE" size="3" required="true"><label language="zh_CN">项目类型</label>
</has-relation>
<has-relation relation="aSSIGNEDMANUFACTUREID" size="5" required="true"><label language="zh_CN">委托单位</label>
</has-relation>
<has-relation relation="cONTACTPERSON" size="30" required="true"><label language="zh_CN">联系人</label>
</has-relation>
<has-relation relation="cONTACTMOBILE" size="20" required="true"><label language="zh_CN">联系手机</label>
</has-relation>
<has-relation relation="cONTACTTELEPHONE" size="20" required="true"><label language="zh_CN">联系电话</label>
</has-relation>
<has-relation relation="cONTACTEMAIL" size="200"><label language="zh_CN">联系邮件</label>
</has-relation>
<has-relation relation="nOTIFYTYPE" size="3" required="true"><label language="zh_CN">通知类型</label>
</has-relation>
<has-relation relation="lINEID" size="2" required="true"><label language="zh_CN">线路ID</label>
</has-relation>
<has-relation relation="bUSINESSID" size="5" required="true"><label language="zh_CN">业务类型</label>
</has-relation>
<has-relation relation="mANUFACTUREID" size="5" required="true"></has-relation>
<has-relation relation="pROJECTDATE" required="true" default-value-expr="currentDate()" data-type="Date"><label language="zh_CN">立项日期</label>
</has-relation>
<has-relation relation="eNDINGDATE" required="true" data-type="Date"><label language="zh_CN">项目结束日期</label>
</has-relation>
<has-relation relation="pROJECTMANAGER" size="8" required="true"><label language="zh_CN">项目负责人</label>
</has-relation>
<has-relation relation="qAMANAGER" size="8" required="true"><label language="zh_CN">质量负责人</label>
</has-relation>
<has-relation relation="tESTMANAGER" size="8" required="true"><label language="zh_CN">检测负责人</label>
</has-relation>
<has-relation relation="tECHMANAGER" size="8" required="true"><label language="zh_CN">技术负责人</label>
</has-relation>
<has-relation relation="mAKEDATE" required="true" default-value-expr="currentDate()" data-type="Date"><label language="zh_CN">方案制定日期</label>
</has-relation>
<has-relation relation="eXECUTESTATE" size="3" required="true"><label language="zh_CN">执行状态</label>
</has-relation>
<has-relation relation="mEMO" size="1000"></has-relation>
</concept>
<relation name="tESTMANAGER" data-type="String"><label language="zh_CN">tESTMANAGER</label>
</relation>
<relation name="qAMANAGER" data-type="String"><label language="zh_CN">qAMANAGER</label>
</relation>
<relation name="tECHMANAGER" data-type="String"><label language="zh_CN">tECHMANAGER</label>
</relation>
</model>
