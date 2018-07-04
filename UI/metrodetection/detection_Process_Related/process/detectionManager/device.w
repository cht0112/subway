<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="width:143px;height:auto;top:361px;left:590px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData1" concept="SAMPLE_DEVICE_INFO" store-type="simple" auto-new="false"><creator id="default1" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_INFOAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_INFOAction"></writer>
  <rule id="dataBizRule6" relation="sOFTWAREVERSION" required="true()" alert="'软件版本不能为空!'"></rule>
  <rule id="dataBizRule7" relation="hARDWAREVERSION" required="true()" alert="'硬件版本不能为空!'"></rule>
  <rule id="dataBizRule8" relation="dEADLINERECEIVEDATE" required="true()" alert="'最晚进场日期不能为空!'"></rule>
  <rule id="dataBizRule9" relation="iNDEEDRECEIVEDATE" required="true()" alert="'实际进场日期不能为空!'"></rule>
  <rule id="dataBizRule10" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'"></rule>
  <rule id="dataBizRule12" relation="sHAREDFLAG" required="true()" alert="'是否允许资源共用不能为空!'"></rule>
  <rule id="dataBizRule1" relation="dEVICETYPE" required="true()" alert="'监测对象不能为空!'"></rule>
  <rule id="dataBizRule2" relation="dECTIONTYPE" required="true()" alert="'检测类型不能为空!'"></rule>
  <rule id="dataBizRule3" relation="dEVICEID" required="true()" alert="'设备ID不能为空!'"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData2" concept="SAMPLE_DEVICE_HARDWARE_INFO" store-type="grid" onValueChanged="device.bizData2ValueChanged"><creator id="default4" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_HARDWARE_INFOAction"></creator>
  <reader id="default5" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_HARDWARE_INFOAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_HARDWARE_INFOAction"></writer>
  <rule id="dataBizRule13" relation="sAMPLEDEVICENO" required="true()" alert="'样品序号不能为空!'"></rule>
  <rule id="dataBizRule14" relation="mODELNAME" required="true()" alert="'长度不能大于200!'" constraint="string-length(data('bizData2')/mODELNAME)&lt;=200"></rule>
  <master id="master1" data="bizData1" relation="sAMPLEDEVICENO"></master>
  <rule id="dataBizRule4" relation="mODELSTYLE" required="false()" constraint="string-length(data('bizData2')/mODELSTYLE)&lt;=200" alert="'长度不能大于200！'"></rule>
  <rule id="dataBizRule5" relation="mODELNUMBER" required="false()" constraint="string-length(data('bizData2')/mODELNUMBER)&lt;=3" alert="'长度不能大于3！'"></rule>
  <rule id="dataBizRule11" relation="mEMO" required="false()" constraint="string-length(data('bizData2')/mEMO)&lt;=1000" alert="'长度不能大于1000！'"></rule></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="projectData" concept="TEST_PROJECT_INFO"><creator id="default11" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"></creator>
  <reader id="default12" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
  <writer id="default13" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"></writer></data><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="hetong" concept="TEST_CONTRACT_INFO"><creator id="default22" action="/metrodetection/system_code/logic/action/createTEST_CONTRACT_INFOAction"></creator>
  <reader id="default23" action="/metrodetection/system_code/logic/action/queryTEST_CONTRACT_INFOAction"></reader>
  <writer id="default24" action="/metrodetection/system_code/logic/action/saveTEST_CONTRACT_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="gongyingshang" concept="AFC_MANUFACTURER_INFO"><creator id="default31" action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"></creator>
  <reader id="default32" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader>
  <writer id="default33" action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="jianceduixiang" concept="DEVICE_TYPE_CODE"><creator id="default14" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default15" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default16" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[device.model1XBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData3" concept="SAMPLE_DEVICE_HARDWARE_INFO" store-type="simple"><creator id="default9" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_HARDWARE_INFOAction"></creator>
  <reader id="default10" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_HARDWARE_INFOAction"></reader>
  <writer id="default17" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_HARDWARE_INFOAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="device.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:165px;left:621px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace2" style="height:618px;width:803px;"></xui:place></center>  
        </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;width:786px;height:618px;" id="layout1"><xui:place control="dEVICESTYLE" style="position: absolute;left:112px;top:55px;" id="controlPlace7"></xui:place>
  <xui:place control="dEVICEID" style="position: absolute;left:112px;top:85px;" id="controlPlace9"></xui:place>
  <xui:place control="sOFTWAREVERSION" style="position: absolute;left:377px;top:85px;" id="controlPlace10"></xui:place>
  <xui:place control="hARDWAREVERSION" style="position: absolute;left:112px;top:115px;" id="controlPlace11"></xui:place>
  <xui:place control="dEADLINERECEIVEDATE" style="position: absolute;left:377px;top:115px;" id="controlPlace12"></xui:place>
  <xui:place control="iNDEEDRECEIVEDATE" style="position: absolute;left:112px;top:145px;" id="controlPlace13"></xui:place>
  <xui:place control="rETURNDATE" style="position: absolute;left:377px;top:145px;" id="controlPlace14"></xui:place>
  <xhtml:label id="label3" style="position:absolute;top:60px;left:60px;" class="xui-label">对象型号</xhtml:label>
  <xhtml:label id="label4" style="position:absolute;top:89px;left:73px;" class="xui-label">设备ID</xhtml:label>
  <xhtml:label id="label5" style="position:absolute;top:119px;left:61px;" class="xui-label">硬件版本</xhtml:label>
  <xhtml:label id="label6" style="position:absolute;top:150px;left:35px;" class="xui-label">实际进场日期</xhtml:label>
  <xhtml:label id="label8" style="position:absolute;top:209px;width:100px;left:11px;" class="xui-label">受检样品信息备注</xhtml:label>
  <xhtml:label id="label14" style="position:absolute;left:325px;top:60px;" class="xui-label">检测类型</xhtml:label>
  <xhtml:label id="label15" style="position:absolute;left:326px;top:91px;" class="xui-label">软件版本</xhtml:label>
  <xhtml:label id="label16" style="position:absolute;left:301px;top:121px;" class="xui-label">最晚进场日期</xhtml:label>
  <xhtml:label id="label17" style="position:absolute;left:300px;top:149px;" class="xui-label">预计归还日期</xhtml:label>
  <xhtml:label id="label18" style="position:absolute;top:179px;width:100px;left:9px;" class="xui-label">是否允许资源共用</xhtml:label>
  <xui:place control="textarea1" id="controlPlace23" style="position:absolute;width:420px;height:103px;left:112px;top:209px;"></xui:place>
  <xhtml:label id="label21" style="position:absolute;font-weight:bold;color:#000000;top:0px;height:18px;left:1px;width:530px;background-color:#F2FFFD;text-align:center;" class="xui-label"><![CDATA[受检样品信息]]></xhtml:label>
  <xhtml:label id="label22" class="xui-label" style="position:absolute;font-weight:bold;color:#000000;position:absolute;width:532px;height:18px;top:321px;left:1px;background-color:#F2FFFD;text-align:center;"><![CDATA[受检样品硬件配置信息]]></xhtml:label>
  <xui:place control="radio1" id="controlPlace16" style="position:absolute;left:109px;top:175px;"></xui:place>
  <xui:place control="view2" id="controlPlace17" style="position:absolute;top:359px;left:2px;width:531px;height:156px;"></xui:place>
  <xui:place control="gridSelect5" id="controlPlace5" style="position:absolute;left:377px;top:57px;"></xui:place>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;left:27px;top:150px;">

*</xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:10px;left:2px;top:179px;">


*</xhtml:label>
  <xhtml:label id="label20" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:292px;top:150px;">




*</xhtml:label>
  <xhtml:label id="label23" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:293px;top:121px;">





*</xhtml:label>
  <xhtml:label id="label24" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:318px;top:91px;">






*</xhtml:label>
  <xhtml:label id="label25" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:318px;top:61px;">







*</xhtml:label>
  <xui:place control="toolbars2" id="controlPlace6" style="position:absolute;top:19px;left:2px;"></xui:place>
  <xhtml:label id="label1" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;top:119px;width:10px;left:53px;">*</xhtml:label>
  <xhtml:label id="label7" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;position:absolute;top:89px;left:66px;">*</xhtml:label></layout>
  <xforms:input ref="data('bizData1')/dEVICESTYLE" id="dEVICESTYLE" tabindex="1"></xforms:input>
  <xforms:input ref="data('bizData1')/dEVICEID" id="dEVICEID" tabindex="3"></xforms:input>
  <xforms:input ref="data('bizData1')/sOFTWAREVERSION" id="sOFTWAREVERSION" tabindex="4"></xforms:input>
  <xforms:input ref="data('bizData1')/hARDWAREVERSION" id="hARDWAREVERSION" tabindex="5"></xforms:input>
  <xforms:input ref="data('bizData1')/dEADLINERECEIVEDATE" id="dEADLINERECEIVEDATE" format="yyyy-MM-dd" tabindex="6" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/iNDEEDRECEIVEDATE" id="iNDEEDRECEIVEDATE" format="yyyy-MM-dd" tabindex="7" readonly="true"></xforms:input>
  <xforms:input ref="data('bizData1')/rETURNDATE" id="rETURNDATE" format="yyyy-MM-dd" tabindex="8" readonly="true"></xforms:input>
  <xforms:textarea ref="data('bizData1')/mEMO" id="textarea1" tabindex="10"></xforms:textarea>
  <xforms:select1 ref="data('bizData1')/sHAREDFLAG" id="radio1" tabindex="9">
					
					
				
   <xforms:item id="selectItem1">
						
						
					
    <xforms:label id="xuiLabel1">是</xforms:label>
    <xforms:value id="default7">0</xforms:value>
  </xforms:item> 
   <xforms:item id="selectItem2">
						
						
					
    <xforms:label id="xuiLabel2">否</xforms:label>
    <xforms:value id="default8">1</xforms:value></xforms:item> </xforms:select1>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="absolute" style="position:relative;width:531px;height:239px;" id="layout2"><xui:place control="toolbars1" id="controlPlace19" style="position:absolute;width:400px;height:25px;top:-19px;left:-4px;"></xui:place>
  <xui:place control="view3" id="controlPlace20" style="position:absolute;top:10px;left:-2px;width:454px;height:135px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="bizData2" mode="IMG_TXT_LR">    
		
		
		
		
		
		
		
		
		
		
		
		
		
	
   <item name="insert-item" id="barItem1"></item>
   <item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[device.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
   <item name="delete-item" id="barItem3"></item>
   <item name="refresh-item" id="barItem4"></item>
   <item name="filter-item" id="barItem5"></item>
   <item name="filter-pattern-item" id="barItem6"></item>
   <item name="separator" id="customBarItem1"></item>
   </xui:bar></xhtml:div>
  <xui:view auto-load="true" id="view3" class="xui-container">
   <layout type="absolute" style="position:relative;height:195px;width:454px;" id="layout3"><xui:place control="grid2" style="text-align:left;width:100%;top:9px;left:0px;height:80%;" id="controlPlace21"></xui:place>
  </layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid2" data="bizData2">
   <column ref="mODELNAME" label="模块名称" width="100px" type="inputbtn" id="gridColumn7" onEditDone="device.grid2_mODELNAMEEditDone"></column>
   <column ref="mODELSTYLE" label="模块型号" width="100px" type="ed" id="gridColumn8"></column>
   <column ref="mODELNUMBER" label="模块数量" width="100px" type="ed" id="gridColumn9"></column>
   <column ref="mEMO" label="备注" width="228px" type="ed" id="gridColumn10"></column></xhtml:div>
  </xui:view></xui:view>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('bizData1')/dECTIONTYPE" tabindex="2">
				   
				   
				   
				
   <xforms:label ref="col_1" id="xuiLabel7"></xforms:label>
   <xforms:value ref="col_0" id="default26"></xforms:value>
   <xforms:itemset id="default27">
  
  
  <itemset-data xmlns="" id="default54">
   <rows xmlns="" id="default55">
    <row id="default56">
     <cell id="default57">1</cell>
     <cell id="default58">软件</cell></row> 
    <row id="default59">
     <cell id="default60">2</cell>
     <cell id="default61">硬件</cell></row> 
    <row id="default62">
     <cell id="default63">3</cell>
     <cell id="default64">全部</cell></row> </rows> </itemset-data>
  
  
  
  
  
  
  
  <xforms:column ref="col_0" visible="false" id="default21"></xforms:column>
  <xforms:column ref="col_1" id="default25"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2" data="bizData1" mode="IMG_TXT_LR">    
		
		
		
		
		
		
		
		
		
		
		
		
		
	
   <item name="save-item" id="barItem12"></item>
   <item name="refresh-item" id="barItem14"></item>
   </xui:bar></xhtml:div></xui:view></xui:view>  
  <xui:resource/> 
<resource id="resource1"><xhtml:script id="htmlScript1" src="device.js"></xhtml:script></resource></xui:window>
