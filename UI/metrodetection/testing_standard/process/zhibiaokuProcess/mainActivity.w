<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:251px;height:auto;left:281px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="INDEX_SYSTEM_PARAMETER" direct-delete="false" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" filter-relations="iNDEXSYSTEMNAME,mAKEDATETIME,vALIDSTATE,dECTIONBASEDONNAME"> 
      <reader action="/metrodetection/testing_standard/logic/action/myQueryIndexSystemValueAction"
        id="default3"/>  
      <writer action="/metrodetection/testing_standard/logic/action/saveINDEX_SYSTEM_PARAMETERAction"
        id="default4"/>  
      <creator action="/metrodetection/testing_standard/logic/action/createINDEX_SYSTEM_PARAMETERAction"
        id="default5"/>  
      <rule id="dataBizRule6" relation="iNDEXSYSTEMNAME" required="true()" alert="'指标库名称不能为空!'"/>  
      <rule id="dataBizRule7" relation="mAKEDATETIME" required="true()" alert="'作成日期时间不能为空!'"/>  
      <rule id="dataBizRule8" relation="dECTIONBASEDONID" required="true()"
        alert="'检测依据ID不能为空!'"/>  
      <rule id="dataBizRule10" relation="vALIDSTATE" required="true()" alert="'指标库有效状态不能为空!'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="syztbmData" concept="VALID_STATE_CODE"> 
      <creator id="default19" action="/metrodetection/system_code/logic/action/createVALID_STATE_CODEAction"/>  
      <reader id="default20" action="/metrodetection/system_code/logic/action/queryVALID_STATE_CODEAction"/>  
      <writer id="default21" action="/metrodetection/system_code/logic/action/saveVALID_STATE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="jcyjData" concept="DECTION_BASED_ON_INFO"> 
      <creator id="default52" action="/metrodetection/testing_standard/logic/action/createDECTION_BASED_ON_INFOAction"/>  
      <reader id="default53" action="/metrodetection/testing_standard/logic/action/queryDECTION_BASED_ON_INFOAction"/>  
      <writer id="default54" action="/metrodetection/testing_standard/logic/action/saveDECTION_BASED_ON_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="dectionBaseD" concept="DECTION_BASED_ON_INFO"
      store-type="simple"> 
      <creator id="default8" action="/metrodetection/system_code/logic/action/createDECTION_BASED_ON_INFOAction"/>  
      <reader id="default9" action="/metrodetection/system_code/logic/action/queryDECTION_BASED_ON_INFOAction"/>  
      <writer id="default14" action="/metrodetection/system_code/logic/action/saveDECTION_BASED_ON_INFOAction"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <!--        <item> -->  
        <!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->  
        <!--            id="insertTrigger" onclick="mainActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->  
        <!--            style="border:none" title="新建"/> -->  
        <!--        </item>         -->  
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <!--        <item> -->  
        <!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"-->  
        <!--            id="removeTrigger1" onclick="mainActivity.removeTrigger1Click(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->  
        <!--            style="border:none;" title="删除"/> -->  
        <!--        </item>  -->  
        <item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.removeTrigger1Click(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCC" type="checkbox"
        align="center"/>  
      <column id="default1" label="指标库名称 " ref="iNDEXSYSTEMNAME" type="ro" width="106px"/>  
      <xui:column id="gridColumn2" ref="dECTIONBASEDONNAME" label="检测依据文件名称" type="ed" width="108px"></xui:column><column id="default2" label="作成日期时间 " ref="mAKEDATETIME" type="ro" width="161px"
        format="yyyy-MM-dd"/>  
      <xui:column id="gridColumn1" ref="vALIDSTATECNAME" label="指标库有效状态" type="ed"
        width="167px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
        <!--        <item id="barItem12">-->  
        <!--        	<xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->  
        <!--            id="insertId" onclick="mainActivity.insertClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->  
        <!--            style="border:none" title="新建"/>-->  
        <!--        </item>  -->  
        <item> 
          <xforms:trigger appearance="image-text" id="insertId" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.insertClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <!--        <item id="barItem13">-->  
        <!--        	 <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"-->  
        <!--            id="saveTrigger" onclick="mainActivity.saveClick(event)" src="/UI/system/images/standardToolbar/standard/save.gif"-->  
        <!--            style="border:none" title="保存"/> -->  
        <!--        </item>-->  
        <item> 
          <xforms:trigger appearance="image-text" id="saveTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem14" name="delete-item"/>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <place control="iptINDEXSYSTEMNAME" id="default10" style="font-size:10pt;position: absolute;top:32px;left:113px;"/>  
        <place control="iptMAKEDATETIME" id="default12" style="font-size:10pt;position: absolute;top:32px;left:400px;"/>  
        <xui:place control="gridSelect1" id="controlPlace3" style="position:absolute;top:70px;left:402px;"/>  
        <xui:place control="gridSelect2" id="controlPlace6" style="position:absolute;top:72px;left:113px;"/>  
        <xhtml:label id="label1" style="position:absolute;width:65px;top:37px;left:47px;"
          class="xui-label">指标库名称</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;width:65px;top:76px;left:48px;"
          class="xui-label">检测依据ID</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;width:95px;top:75px;left:310px;"
          class="xui-label">指标库有效状态</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;top:38px;left:320px;" class="xui-label">做成日期时间</xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;color:#FF0000;width:10px;top:37px;left:39px;"
          class="xui-label">*</xhtml:label>  
        <xhtml:label id="label7" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;width:10px;top:75px;left:303px;">*</xhtml:label>  
        <xhtml:label id="label8" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;top:77px;left:41px;">*</xhtml:label>  
        <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;top:38px;left:313px;">*</xhtml:label> 
      </layout>  
      <xforms:input id="iptINDEXSYSTEMNAME" ref="data('dataMain')/iNDEXSYSTEMNAME"/>  
      <xforms:input id="iptMAKEDATETIME" ref="data('dataMain')/mAKEDATETIME" format="yyyy-MM-dd"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/vALIDSTATE"
        label-ref="data('dataMain')/vALIDSTATECNAME"> 
        <xforms:label ref="vALIDSTATECNAME" id="xuiLabel3"/>  
        <xforms:value ref="VALID_STATE_CODE" id="default22"/>  
        <xforms:itemset id="default23" data="syztbmData" auto-load-data="true"> 
          <itemset-data xmlns="" id="default11">  
            <rows id="default13"/> 
          </itemset-data>  
          <xforms:column ref="VALID_STATE_CODE" visible="false" id="default24"/>  
          <xforms:column ref="vALIDSTATECNAME" id="default25"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dECTIONBASEDONID"
        label-ref="data('dataMain')/dECTIONBASEDONNAME"> 
        <xforms:label ref="dECTIONBASEDONNAME" id="xuiLabel4"/>  
        <xforms:value ref="DECTION_BASED_ON_INFO" id="default50"/>  
        <xforms:itemset id="default51" data="jcyjData" auto-load-data="true"> 
          <xforms:column ref="DECTION_BASED_ON_INFO" visible="false" id="default6"/>  
          <xforms:column ref="dECTIONBASEDONNAME" id="default7"/> 
        </xforms:itemset> 
      </xhtml:div> 
    </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="41px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="mainActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="43px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="height:100%;"/> 
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
