<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:182px;top:320px;height:auto;left:130px;">
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="projectData" concept="TEST_PROJECT_INFO" store-type="simple">
      <creator id="default1" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="notifyData" concept="NOTIFY_TYPE_CODE">
      <reader id="default15" action="/metrodetection/system_code/logic/action/queryNOTIFY_TYPE_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="testSchemeData" concept="TEST_SCHEME_BASE_INFO" is-tree="false">
      <reader id="default19" action="/metrodetection/system_code/logic/action/queryTEST_SCHEME_BASE_INFOAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="projectManagerData" concept="ROLE_OPERATOR_VIEW" is-tree="true" auto-new="false" store-type="simple">
      <reader id="default22" action="/metrodetection/system_code/logic/action/queryROLE_OPERATOR_VIEWAction"/>  
      <tree-option id="default41" parent-relation="fPARENTID" virtual-root="aaa"/>  
      <creator id="default47" action="/metrodetection/system_code/logic/action/createROLE_OPERATOR_VIEWAction"/>  
      <writer id="default48" action="/metrodetection/system_code/logic/action/saveROLE_OPERATOR_VIEWAction"/>
    </data>
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver" onReceive="projectDialog.windowReceiverReceive"/>  
    <xui:layout style="height:450px;width:580px;"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:47px;left:181px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:95%;height:94%;"> 
        <center id="borderLayout-center1" size="400px">
          <xui:place control="view3" id="controlPlace23" style="width:579px;height:430px;"/>
        </center>  
        <bottom id="borderLayout-bottom1" size="33px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="btnCancelClick(event)"
            style="float:right;margin-left:8px;margin-right:20px;width:75px;" type="button"
            value="取消"/>  
          <xhtml:input class="xui-button" id="btnProject" style="float:right;width:75px;"
            type="button" value="确定" onclick="projectDialog.btnProjectClick(event)"/>
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="view3" class="xui-container"> 
      <layout type="absolute" style="position:relative;width:579px;height:430px;"
        id="layout3">
        <xui:place control="pROJECTNAME" style="position: absolute;width:153px;top:16px;left:120px;"
          id="controlPlace25"/>  
        <xui:place control="aPPLICATIONNO" style="position: absolute;width:153px;top:46px;left:120px;"
          id="controlPlace27"/>  
        <xui:place control="aSSIGNEDMANUFACTUREID" style="position: absolute;width:153px;top:46px;left:385px;"
          id="controlPlace28"/>  
        <xui:place control="cONTACTPERSON" style="position: absolute;width:153px;top:76px;left:120px;"
          id="controlPlace29"/>  
        <xui:place control="cONTACTMOBILE" style="position: absolute;width:153px;top:76px;left:385px;"
          id="controlPlace30"/>  
        <xui:place control="cONTACTTELEPHONE" style="position: absolute;width:153px;top:106px;left:120px;"
          id="controlPlace31"/>  
        <xui:place control="cONTACTEMAIL" style="position: absolute;width:153px;top:106px;left:385px;"
          id="controlPlace32"/>  
        <xui:place control="lINEID" style="position: absolute;width:153px;top:136px;left:385px;"
          id="controlPlace34"/>  
        <xui:place control="bUSINESSID" style="position: absolute;width:153px;top:166px;left:120px;"
          id="controlPlace35"/>  
        <xui:place control="mANUFACTUREID" style="position: absolute;width:153px;top:166px;left:385px;"
          id="controlPlace36"/>  
        <xui:place control="pROJECTDATE" style="position: absolute;width:153px;top:196px;left:120px;"
          id="controlPlace37"/>  
        <xui:place control="eNDINGDATE" style="position: absolute;width:153px;top:196px;left:385px;"
          id="controlPlace38"/>  
        <xui:place control="mAKEDATE" style="position: absolute;width:153px;top:256px;left:120px;"
          id="controlPlace41"/>  
        <xhtml:label id="label1" style="position:absolute;width:30px;top:294px;left:79px;"
          class="xui-label">备注</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;width:55px;top:24px;left:54px;"
          class="xui-label">项目名称</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;width:55px;top:173px;left:322px;"
          class="xui-label">供应商ID</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;width:55px;top:52px;left:322px;"
          class="xui-label">委托单位</xhtml:label>  
        <xhtml:label id="label5" style="position:absolute;width:55px;top:81px;left:322px;"
          class="xui-label">联系手机</xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;width:55px;top:202px;left:322px;"
          class="xui-label">结项日期</xhtml:label>  
        <xhtml:label id="label7" style="position:absolute;width:55px;top:231px;left:322px;"
          class="xui-label">检测方案</xhtml:label>  
        <xhtml:label id="label9" style="position:absolute;width:55px;top:261px;left:322px;"
          class="xui-label">执行状态</xhtml:label>  
        <xhtml:label id="label10" style="position:absolute;width:55px;top:115px;left:322px;"
          class="xui-label">电子邮箱</xhtml:label>  
        <xhtml:label id="label11" style="position:absolute;width:55px;top:139px;left:54px;"
          class="xui-label">通知类型</xhtml:label>  
        <xhtml:label id="label12" style="position:absolute;width:55px;top:109px;left:54px;"
          class="xui-label">联系电话</xhtml:label>  
        <xhtml:label id="label13" style="position:absolute;width:40px;top:78px;left:69px;"
          class="xui-label">联系人</xhtml:label>  
        <xhtml:label id="label14" style="position:absolute;width:55px;top:50px;left:54px;"
          class="xui-label">申请序号</xhtml:label>  
        <xhtml:label id="label15" style="position:absolute;width:55px;top:200px;left:54px;"
          class="xui-label">立项日期</xhtml:label>  
        <xhtml:label id="label16" style="position:absolute;width:65px;top:234px;left:44px;"
          class="xui-label">项目负责人</xhtml:label>  
        <xhtml:label id="label17" style="position:absolute;top:263px;left:28px;" class="xui-label">方案制定日期</xhtml:label>  
        <xhtml:label id="label18" style="position:absolute;width:42px;top:144px;left:335px;"
          class="xui-label">线路ID</xhtml:label>  
        <xhtml:label id="label19" style="position:absolute;width:55px;top:172px;left:54px;"
          class="xui-label">业务类型</xhtml:label>  
        <xhtml:label id="label22" style="position:absolute;width:55px;top:23px;left:322px;"
          class="xui-label">项目类型</xhtml:label>  
        <xui:place control="textarea1" id="controlPlace44" style="position:absolute;width:423px;top:293px;height:53px;left:121px;"/>  
        <xui:place control="gridSelect1" id="controlPlace2" style="position:absolute;top:18px;left:386px;"/>  
        <xui:place control="gridSelect2" id="controlPlace3" style="position:absolute;top:137px;left:119px;"/>  
        <xui:place control="gridSelect3" id="controlPlace4" style="position:absolute;top:227px;left:385px;"/>  
        <xui:place control="gridSelect4" id="controlPlace5" style="position:absolute;top:256px;left:386px;"/>  

        <xui:place control="treeSelect3" id="controlPlace10" style="position:absolute;top:228px;left:121px;"/>
      </layout>  
      <xforms:input ref="data('projectData')/pROJECTNAME" id="pROJECTNAME"/>  
      <xforms:input ref="data('projectData')/aPPLICATIONNO" id="aPPLICATIONNO"/>  
      <xforms:input ref="data('projectData')/aSSIGNEDMANUFACTUREID" id="aSSIGNEDMANUFACTUREID"/>  
      <xforms:input ref="data('projectData')/cONTACTPERSON" id="cONTACTPERSON"/>  
      <xforms:input ref="data('projectData')/cONTACTMOBILE" id="cONTACTMOBILE"/>  
      <xforms:input ref="data('projectData')/cONTACTTELEPHONE" id="cONTACTTELEPHONE"/>  
      <xforms:input ref="data('projectData')/cONTACTEMAIL" id="cONTACTEMAIL"/>  
      <xforms:input ref="data('projectData')/lINEID" id="lINEID"/>  
      <xforms:input ref="data('projectData')/bUSINESSID" id="bUSINESSID"/>  
      <xforms:input ref="data('projectData')/mANUFACTUREID" id="mANUFACTUREID"/>  
      <xforms:input ref="data('projectData')/pROJECTDATE" id="pROJECTDATE"/>  
      <xforms:input ref="data('projectData')/eNDINGDATE" id="eNDINGDATE"/>  
      <xforms:input ref="data('projectData')/mAKEDATE" id="mAKEDATE"/>  
      <xforms:textarea ref="data('projectData')/mEMO" id="textarea1"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('projectData')/pROJECTTYPE"> 
        <xforms:label ref="col_1" id="xuiLabel1"/>  
        <xforms:value ref="col_0" id="default4"/>  
        <xforms:itemset id="default5" auto-load-data="true">
          <itemset-data xmlns="" id="default6">  
            <rows id="default7">  
              <row id="default8"> 
                <cell id="default9">1</cell>  
                <cell id="default10">AFC专业检测项目</cell>
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default13"/>  
          <xforms:column ref="col_1" id="default14"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('projectData')/nOTIFYTYPE"> 
        <xforms:label ref="nOTIFYTYPECNAME" id="xuiLabel2"/>  
        <xforms:value ref="NOTIFY_TYPE_CODE" id="default16"/>  
        <xforms:itemset id="default17" data="notifyData" auto-load-data="true"> 
          <xforms:column ref="nOTIFYTYPECNAME" id="default63"/>  
          <xforms:column ref="NOTIFY_TYPE_CODE" visible="false" id="default64"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('projectData')/tESTSCHEMEID"
        onCloseup="projectDialog.gridSelect3Closeup"> 
        <xforms:label ref="tESTSCHEMENAME" id="xuiLabel3"/>  
        <xforms:value ref="TEST_SCHEME_BASE_INFO" id="default20"/>  
        <xforms:itemset id="default21" data="testSchemeData" auto-load-data="true"> 
          <xforms:column ref="tESTSCHEMENAME" id="default65"/>  
          <xforms:column ref="TEST_SCHEME_BASE_INFO" visible="false" id="default66"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect4" ref="data('projectData')/eXECUTESTATE"> 
        <xforms:label ref="col_1" id="xuiLabel4"/>  
        <xforms:value ref="col_0" id="default25"/>  
        <xforms:itemset id="default26" auto-load-data="true">
          <itemset-data xmlns="" id="default27">  
            <rows id="default28">  
              <row id="default29"> 
                <cell id="default30">0</cell>  
                <cell id="default31">未开始</cell>
              </row>  
              <row id="default32"> 
                <cell id="default33">1</cell>  
                <cell id="default34">开始检测</cell>
              </row>  
              <row id="default35"> 
                <cell id="default36">2</cell>  
                <cell id="default37">检测完成</cell>
              </row>  
              <row id="default38"> 
                <cell id="default39">3</cell>  
                <cell id="default40">出具报告</cell>
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default43"/>  
          <xforms:column ref="col_1" id="default44"/>
        </xforms:itemset>
      </xhtml:div>  
      <xforms:label id="xuiLabel5"/>  
      <xforms:value id="default11"/>  
      <xforms:itemset id="default12"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" label-separator=","
        value-separator="," ext-separator="," id="treeSelect3" ref="data('projectData')/pROJECTMANAGER"> 
        <xforms:label id="xuiLabel8" ref="rOLENAME"/>  
        <xforms:value id="default49" ref="rowID"/>  
        <xforms:itemset id="default50" auto-load-data="true"> 
            
          
        
  
  
  
  
  
  
  
  
  
  
  
  <xforms:column ref="rowID" id="default69"></xforms:column>
  <xforms:column ref="rOLENAME" id="default70"></xforms:column></xforms:itemset>
      </xhtml:div>
    </xui:view>
  </xui:view>  
  <resource id="resource1">
    <xhtml:script id="htmlScript1" src="projectDialog.js"/>
  </resource>
</xui:window>
