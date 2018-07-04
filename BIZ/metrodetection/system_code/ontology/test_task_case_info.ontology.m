<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
    
  <relation name="aPPLYFOROBJECT" data-type="Decimal">
    <label language="zh_CN">应用检测对象类型</label> 
  </relation>  
  <relation name="tESTCASEID" data-type="String">
    <label language="zh_CN">测试用例ID</label> 
  </relation>  
  <relation name="tESTCASEVER" data-type="Decimal">
    <label language="zh_CN">测试用例版本</label> 
  </relation>  
  <relation name="bUSINESSSTAGE" data-type="Decimal">
    <label language="zh_CN">业务阶段</label> 
  </relation>  
  <relation name="aPPLYFORDEVICETYPE" data-type="Decimal">
    <label language="zh_CN">应用检测对象</label> 
  </relation> 
<concept name="TEST_TASK_CASE_INFO" default-value-expr="guid()"><label language="zh_CN">测试任务用例信息</label>
<has-relation relation="pROJECTID" size="10" required="true"></has-relation>
<has-relation relation="tASKID" size="10" required="true"><label language="zh_CN">任务ID</label>
</has-relation>
<has-relation relation="tESTCASEVER" size="10" required="true"><label language="zh_CN">测试用例版本</label>
</has-relation>
<has-relation relation="tESTCASEID" size="16" required="true"><label language="zh_CN">测试用例ID</label>
</has-relation>
<has-relation relation="bUSINESSID" size="5" required="true"><label language="zh_CN">业务类型</label>
</has-relation>
<has-relation relation="bUSINESSSTAGE" size="5" required="true"><label language="zh_CN">业务阶段</label>
</has-relation>
<has-relation relation="aPPLYFOROBJECT" size="5" required="true"><label language="zh_CN">应用检测对象类型</label>
</has-relation>
<has-relation relation="aPPLYFORDEVICETYPE" size="5" required="true"><label language="zh_CN">应用检测对象</label>
</has-relation>
</concept>
</model>
