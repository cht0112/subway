<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:253px;height:auto;left:607px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_TASK_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereVersion"> 
      <reader action="/metrodetection/toolProtect/logic/action/ToolProtectAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_TASK_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_TASK_INFOAction" id="default5"/>  
      <rule id="default10" relation="pROJECTNAME" required="true()"/>  
      <rule id="default15" relation="aPPLICATIONNO" required="true()"/>  
      <rule id="default18" relation="aSSIGNEDMANUFACTUREID" required="true()"/>  
      <rule id="default21" relation="cONTACTPERSON" required="true()"/>  
      <rule id="default24" relation="cONTACTMOBILE" required="true()"/>  
      <rule id="default27" relation="cONTACTTELEPHONE" required="true()"/>  
      <rule id="default32" relation="nOTIFYTYPE" required="true()"/>  
      <rule id="default35" relation="bUSINESSID" required="true()"/>  
      <rule id="default38" relation="pROJECTDATE" required="true()"/>  
      <rule id="default41" relation="eNDINGDATE" required="true()"/>  
      <rule id="default44" relation="pROJECTMANAGER" required="true()"/>  
      <rule id="default47" relation="tESTSCHEMEID" required="true()"/>  
      <rule id="default50" relation="mAKEDATE" required="true()"/>  
      <rule id="default53" relation="eXECUTESTATE" required="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="项目名称" ref="pROJECTNAME" type="ro" width="100px" align="center"/>  
      <column id="default2" label="项目类型" ref="pROJECTTYPE" type="ro" width="100px" align="center"/>  
      <column id="default6" label="立项日期" ref="pROJECTDATE" type="dateTime" width="136px" align="center"/>  
      <column id="default7" label="结项日期" ref="eNDINGDATE" type="dateTime" width="152px" align="center"/>  
      <column id="default8" label="项目负责人" ref="pROJECTMANAGER" type="ro" width="100px" align="center"/>  
      <column id="default9" label="执行状态" ref="eXECUTESTATE" type="ro" width="100px" align="center"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item id="barItem12" name="insert-item"/>  
        <item id="barItem13" name="save-item"/>  
        <item id="barItem14" name="delete-item"/>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <xui:place control-label="tOOLCNAME" style="font-size:10pt;position: absolute;left:10px;top:18px" id="controlLabel1" label="工具中文名">工具中文名称</xui:place>
  <xui:place control="tOOLCNAME" style="position: absolute;width: 153px;left:95px;top:10px" id="controlPlace3"></xui:place>
  <xui:place control-label="tOOLENAME" style="font-size:10pt;position: absolute;left:275px;top:18px;height:13px;width:73px;" id="controlLabel2" label="工具英文名">工具英文名称</xui:place>
  <xui:place control="tOOLENAME" style="position: absolute;width: 153px;left:360px;top:10px" id="controlPlace6"></xui:place>
  <xui:place control-label="tOOLTYPEID" style="font-size:10pt;position: absolute;left:10px;top:48px" id="controlLabel3" label="工具类型">工具类型</xui:place>
  <xui:place control="tOOLTYPEID" style="position: absolute;width: 153px;left:95px;top:40px" id="controlPlace7"></xui:place>
  <xui:place control-label="tOOLMODEL" style="font-size:10pt;position: absolute;left:275px;top:48px;width:75px;height:12px;" id="controlLabel4" label="工具型号">工具型号</xui:place>
  <xui:place control="tOOLMODEL" style="position: absolute;width: 153px;left:360px;top:40px" id="controlPlace8"></xui:place>
  <xui:place control-label="tOOLSTANDARDS" style="font-size:10pt;position: absolute;left:10px;top:78px" id="controlLabel5" label="工具规格">工具规格</xui:place>
  <xui:place control="tOOLSTANDARDS" style="position: absolute;width: 153px;left:95px;top:70px" id="controlPlace9"></xui:place>
  <xui:place control-label="tOOLID" style="font-size:10pt;position: absolute;left:275px;top:78px;width:62px;" id="controlLabel6" label="工具ID">工具id</xui:place>
  <xui:place control="tOOLID" style="position: absolute;width: 153px;left:360px;top:70px" id="controlPlace10"></xui:place>
  <xui:place control-label="uSESTATECODE" style="font-size:10pt;position: absolute;left:10px;top:108px" id="controlLabel7" label="状态">状态</xui:place>
  <xui:place control="uSESTATECODE" style="position: absolute;width: 153px;left:95px;top:100px" id="controlPlace11"></xui:place>
  <xui:place control-label="tOOLUNIT" style="font-size:10pt;position: absolute;left:275px;top:108px;width:65px;height:14px;" id="controlLabel8" label="计量单位">计量单位</xui:place>
  <xui:place control="tOOLUNIT" style="position: absolute;width: 153px;left:360px;top:100px" id="controlPlace12"></xui:place>
  <xui:place control-label="mANUFACTUREID" style="font-size:10pt;position: absolute;left:10px;top:138px" id="controlLabel9" label="供应商ID">供应商ID</xui:place>
  <xui:place control="mANUFACTUREID" style="position: absolute;width: 153px;left:95px;top:130px" id="controlPlace13"></xui:place>
  <xui:place control-label="tOOLRESOURCE" style="font-size:10pt;position: absolute;left:275px;top:138px;width:70px;height:12px;" id="controlLabel10" label="资源来源">资产来源</xui:place>
  <xui:place control="tOOLRESOURCE" style="position: absolute;width: 153px;left:360px;top:130px" id="controlPlace14"></xui:place>
  <xui:place control-label="iNDATE" style="font-size:10pt;position: absolute;left:10px;top:168px" id="controlLabel11" label="入账时间">入账时间</xui:place>
  <xui:place control="iNDATE" style="position: absolute;width: 153px;left:95px;top:160px" id="controlPlace15"></xui:place>
  <xui:place control-label="iNPRICE" style="font-size:10pt;position: absolute;left:275px;top:168px;width:61px;height:15px;" id="controlLabel12" label="入账价值">入账价值</xui:place>
  <xui:place control="iNPRICE" style="position: absolute;width: 153px;left:360px;top:160px" id="controlPlace16"></xui:place>
  <xui:place control-label="sHAREDFLAG" style="font-size:10pt;position: absolute;left:10px;top:198px" id="controlLabel13" label="是否允许资源共用">是否允许资源共用</xui:place>
  <xui:place control="sHAREDFLAG" style="position: absolute;width: 153px;left:95px;top:190px" id="controlPlace17"></xui:place>
  <xui:place control-label="mEMO" style="font-size:10pt;position: absolute;left:275px;top:198px;height:13px;width:34px;" id="controlLabel14" label="备注">备注</xui:place>
  <xui:place control="mEMO" style="position: absolute;width: 153px;left:360px;top:190px" id="controlPlace18"></xui:place>
  <xui:place control-label="tOOL_NO" style="font-size:10pt;position: absolute;left:10px;top:228px" id="controlLabel15" label="工具序号">工具序号</xui:place>
  <xui:place control="tOOL_NO" style="position: absolute;width: 153px;left:95px;top:220px" id="controlPlace19"></xui:place>
  <xui:place control-label="tESTTASKID" style="font-size:10pt;position: absolute;left:275px;top:228px;width:79px;height:15px;" id="controlLabel16" label="测试任务ID">测试任务ID</xui:place>
  <xui:place control="tESTTASKID" style="position: absolute;width: 153px;left:360px;top:220px" id="controlPlace20"></xui:place>
  <xui:place control-label="oCCUPYSTARTDATETIME" style="font-size:10pt;position: absolute;left:10px;top:258px" id="controlLabel17" label="计划占用起始时间">计划占用起始日期时间</xui:place>
  <xui:place control="oCCUPYSTARTDATETIME" style="position: absolute;width: 153px;left:95px;top:250px" id="controlPlace21"></xui:place>
  <xui:place control-label="oCCUPYENDDATETIME" style="font-size:10pt;position: absolute;left:275px;top:258px;width:111px;height:16px;" id="controlLabel18" label="计划占用结束时间">计划占用结束日期时间</xui:place>
  <xui:place control="oCCUPYENDDATETIME" style="position: absolute;width: 153px;left:360px;top:250px" id="controlPlace22"></xui:place>
  <xui:place control-label="mEMO" style="font-size:10pt;position: absolute;left:10px;top:288px" id="controlLabel19" label="备注">备注</xui:place>
  <xui:place control="mEMO" style="position: absolute;width: 153px;left:95px;top:280px" id="controlPlace23"></xui:place>
  <xui:place control-label="pROJECTID" style="font-size:10pt;position: absolute;left:275px;top:288px;width:47px;height:14px;" id="controlLabel20" label="项目ID">项目ID</xui:place>
  <xui:place control="pROJECTID" style="position: absolute;width: 153px;left:360px;top:280px" id="controlPlace24"></xui:place>
  <xui:place control-label="tASKTYPE" style="font-size:10pt;position: absolute;left:10px;top:318px" id="controlLabel21" label="任务类型">任务类型</xui:place>
  <xui:place control="tASKTYPE" style="position: absolute;width: 153px;left:95px;top:310px" id="controlPlace25"></xui:place>
  <xui:place control-label="tASKID" style="font-size:10pt;position: absolute;left:275px;top:318px;height:15px;width:61px;" id="controlLabel22" label="任务ID">任务ID</xui:place>
  <xui:place control="tASKID" style="position: absolute;width: 153px;left:360px;top:310px" id="controlPlace26"></xui:place>
  <xui:place control-label="pLANOPERATORID" style="font-size:10pt;position: absolute;left:10px;top:348px" id="controlLabel23" label="计划执行人">计划执行人</xui:place>
  <xui:place control="pLANOPERATORID" style="position: absolute;width: 153px;left:95px;top:340px" id="controlPlace27"></xui:place>
  <xui:place control-label="pLANSTARTDATE" style="font-size:10pt;position: absolute;left:275px;top:348px;width:80px;height:18px;" id="controlLabel24" label="计划开始日期">计划开始日期</xui:place>
  <xui:place control="pLANSTARTDATE" style="position: absolute;width: 153px;left:360px;top:340px" id="controlPlace28"></xui:place>
  <xui:place control-label="pLANENDINGDATE" style="font-size:10pt;position: absolute;left:10px;top:378px" id="controlLabel25" label="计划结束日期">计划结束日期</xui:place>
  <xui:place control="pLANENDINGDATE" style="position: absolute;width: 153px;left:95px;top:370px" id="controlPlace29"></xui:place>
  <xui:place control-label="tESTTASKAREA" style="font-size:10pt;position: absolute;left:275px;top:378px;width:45px;height:17px;" id="controlLabel26" label="区域">区域</xui:place>
  <xui:place control="tESTTASKAREA" style="position: absolute;width: 153px;left:360px;top:370px" id="controlPlace30"></xui:place>
  <xui:place control-label="tESTTASKITERATIVE" style="font-size:10pt;position: absolute;left:10px;top:408px" id="controlLabel27" label="迭代">迭代</xui:place>
  <xui:place control="tESTTASKITERATIVE" style="position: absolute;width: 153px;left:95px;top:400px" id="controlPlace31"></xui:place>
  <xui:place control-label="tESTTASKREASON" style="font-size:10pt;position: absolute;left:275px;top:408px;width:85px;height:18px;" id="controlLabel28" label="任务生成原因">任务生成原因</xui:place>
  <xui:place control="tESTTASKREASON" style="position: absolute;width: 153px;left:360px;top:400px" id="controlPlace32"></xui:place>
  <xui:place control-label="aCTUALOPERATORID" style="font-size:10pt;position: absolute;left:10px;top:438px" id="controlLabel29" label="任务执行人">任务执行人</xui:place>
  <xui:place control="aCTUALOPERATORID" style="position: absolute;width: 153px;left:95px;top:430px" id="controlPlace33"></xui:place>
  <xui:place control-label="aCTUALSTARTDATE" style="font-size:10pt;position: absolute;left:275px;top:438px;width:103px;height:17px;" id="controlLabel30" label="任务开始日期">任务开始日期</xui:place>
  <xui:place control="aCTUALSTARTDATE" style="position: absolute;width: 153px;left:360px;top:430px" id="controlPlace34"></xui:place>
  <xui:place control-label="aCTUALENDINGDATE" style="font-size:10pt;position: absolute;left:10px;top:468px" id="controlLabel31" label="任务结束日期">任务结束日期</xui:place>
  <xui:place control="aCTUALENDINGDATE" style="position: absolute;width: 153px;left:95px;top:460px" id="controlPlace35"></xui:place>
  <xui:place control-label="tASKEXECUTE" style="font-size:10pt;position: absolute;left:275px;top:468px;width:107px;height:19px;" id="controlLabel32" label="任务执行状态">任务执行状态</xui:place>
  <xui:place control="tASKEXECUTE" style="position: absolute;width: 153px;left:360px;top:460px" id="controlPlace36"></xui:place>
  <xui:place control-label="tASKCHECK" style="font-size:10pt;position: absolute;left:10px;top:498px" id="controlLabel33" label="任务执行结果">任务执行结果</xui:place>
  <xui:place control="tASKCHECK" style="position: absolute;width: 153px;left:95px;top:490px" id="controlPlace37"></xui:place>
  </layout>  
      <xforms:input ref="data('dataMain')/tOOLCNAME" id="tOOLCNAME"></xforms:input>
  <xforms:input ref="data('dataMain')/tOOLENAME" id="tOOLENAME"></xforms:input>
  <xforms:input ref="data('dataMain')/tOOLTYPEID" id="tOOLTYPEID"></xforms:input>
  <xforms:input ref="data('dataMain')/tOOLMODEL" id="tOOLMODEL"></xforms:input>
  <xforms:input ref="data('dataMain')/tOOLSTANDARDS" id="tOOLSTANDARDS"></xforms:input>
  <xforms:input ref="data('dataMain')/tOOLID" id="tOOLID"></xforms:input>
  <xforms:input ref="data('dataMain')/uSESTATECODE" id="uSESTATECODE"></xforms:input>
  <xforms:input ref="data('dataMain')/tOOLUNIT" id="tOOLUNIT"></xforms:input>
  <xforms:input ref="data('dataMain')/mANUFACTUREID" id="mANUFACTUREID"></xforms:input>
  <xforms:input ref="data('dataMain')/tOOLRESOURCE" id="tOOLRESOURCE"></xforms:input>
  <xforms:input ref="data('dataMain')/iNDATE" id="iNDATE"></xforms:input>
  <xforms:input ref="data('dataMain')/iNPRICE" id="iNPRICE"></xforms:input>
  <xforms:input ref="data('dataMain')/sHAREDFLAG" id="sHAREDFLAG"></xforms:input>
  <xforms:input ref="data('dataMain')/mEMO" id="mEMO"></xforms:input>
  <xforms:input ref="data('dataMain')/tOOL_NO" id="tOOL_NO"></xforms:input>
  <xforms:input ref="data('dataMain')/tESTTASKID" id="tESTTASKID"></xforms:input>
  <xforms:input ref="data('dataMain')/oCCUPYSTARTDATETIME" id="oCCUPYSTARTDATETIME"></xforms:input>
  <xforms:input ref="data('dataMain')/oCCUPYENDDATETIME" id="oCCUPYENDDATETIME"></xforms:input>
  <xforms:input ref="data('dataMain')/mEMO" id="mEMO"></xforms:input>
  <xforms:input ref="data('dataMain')/pROJECTID" id="pROJECTID"></xforms:input>
  <xforms:input ref="data('dataMain')/tASKTYPE" id="tASKTYPE"></xforms:input>
  <xforms:input ref="data('dataMain')/tASKID" id="tASKID"></xforms:input>
  <xforms:input ref="data('dataMain')/pLANOPERATORID" id="pLANOPERATORID"></xforms:input>
  <xforms:input ref="data('dataMain')/pLANSTARTDATE" id="pLANSTARTDATE"></xforms:input>
  <xforms:input ref="data('dataMain')/pLANENDINGDATE" id="pLANENDINGDATE"></xforms:input>
  <xforms:input ref="data('dataMain')/tESTTASKAREA" id="tESTTASKAREA"></xforms:input>
  <xforms:input ref="data('dataMain')/tESTTASKITERATIVE" id="tESTTASKITERATIVE"></xforms:input>
  <xforms:input ref="data('dataMain')/tESTTASKREASON" id="tESTTASKREASON"></xforms:input>
  <xforms:input ref="data('dataMain')/aCTUALOPERATORID" id="aCTUALOPERATORID"></xforms:input>
  <xforms:input ref="data('dataMain')/aCTUALSTARTDATE" id="aCTUALSTARTDATE"></xforms:input>
  <xforms:input ref="data('dataMain')/aCTUALENDINGDATE" id="aCTUALENDINGDATE"></xforms:input>
  <xforms:input ref="data('dataMain')/tASKEXECUTE" id="tASKEXECUTE"></xforms:input>
  <xforms:input ref="data('dataMain')/tASKCHECK" id="tASKCHECK"></xforms:input>
  </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="width:704px;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
