<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <procedure name="createTempNextSeqStringProcedure" code-model="/system/logic/code" code="com.justep.system.util.BizUtils.createTempNextSeqenceString"> 
    <parameter name="key" type="String"/>  
    <parameter name="format" type="String"/> 
  </procedure>  
  <action name="createTempNextSeqStringAction" global="TRUE" procedure="createTempNextSeqStringProcedure">
    <label language="zh_CN">获得下一个序号字符串（不占号）</label> 
    <public name="key" type="String"/>  
    <public name="format" type="String"/> 
  </action>  
  <procedure name="createNextSeqStringProcedure" code-model="/system/logic/code" code="com.justep.system.util.BizUtils.createNextSequenceString"> 
    <parameter name="key" type="String"/>  
    <parameter name="format" type="String"/> 
  </procedure>  
  <action name="createNextSeqStringAction" global="TRUE" procedure="createNextSeqStringProcedure">
    <label language="zh_CN">获得下一个序号字符串</label> 
    <public name="key" type="String"/>  
    <public name="format" type="String"/> 
  </action> 
</model>
