<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:277px;left:156px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="DECTION_BASED_ON_INFO" direct-delete="false" id="dataMain" limit="20"
      offset="0" update-mode="whereVersion" store-type="grid" onValueChanged="mainActivity.dataMainValueChanged"
      confirm-delete="true" data-type="xml" filter-relations="dECTIONBASEDONNAME,vALIDDATETIME,vALIDSTATE1,version1"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryDectionBasedOnInfo"
        id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveDECTION_BASED_ON_INFOAction"
        id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createDECTION_BASED_ON_INFOAction"
        id="default5"/>  
      <rule id="dataBizRule2" relation="vALIDDATETIME" required="true()" alert="'依据生效时间不能为空!'"/>  
      <rule id="dataBizRule1" relation="vALIDSTATE1" required="true()"></rule></data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="bizData1" concept="VALID_STATE_CODE" store-type="grid"> 
      <creator id="default19" action="/metrodetection/system_code/logic/action/createVALID_STATE_CODEAction"/>  
      <reader id="default20" action="/metrodetection/system_code/logic/action/queryVALID_STATE_CODEAction"/>  
      <writer id="default22" action="/metrodetection/system_code/logic/action/saveVALID_STATE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="xml" auto-load="true" id="saDocnodeD" concept="SA_DocNode" store-type="grid"
      is-tree="false" limit="-1"> 
      <reader id="default6" action="/SA/doc/logic/action/queryDocNodeAction"/>  
      <tree-option id="default7" parent-relation="sParentID"/>  
      <calculate-relation relation="calSeq" id="calculate-relation1"/>  
      <calculate-relation relation="calCheck" id="calculate-relation2" type="xsd:string"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="dectionStandardD" concept="DECTION_BASED_STANDARD" filter-relations="DECTION_STANDARD_ID,PUBLISH_DATE,cITYCODECNAME,sDocName"> 
      <reader id="default16" action="/metrodetection/system_code/logic/action/queryDectionStandardMidAction"/>  
      <calculate-relation relation="calCheckBox" id="calculate-relation3"/>  
      <calculate-relation relation="calSeq" id="calculate-relation4"/>  
      <writer id="default10" action="/metrodetection/system_code/logic/action/saveDECTION_BASED_STANDARDAction"/>
    <master id="master2"></master></data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="dectionSchemeD" concept="TEST_SCHEME_BASE_INFO" confirm-refresh="false" store-type="simple"><creator id="default11" action="/metrodetection/system_code/logic/action/createTEST_SCHEME_BASE_INFOAction"></creator>
  <reader id="default13" action="/metrodetection/system_code/logic/action/queryTEST_SCHEME_BASE_INFOAction"></reader>
  <writer id="default14" action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_BASE_INFOAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <!--        <item> -->  
        <!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->  
        <!--            id="insertTrigger" onclick="mainActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->  
        <!--            style="border:none" title="新建"/> -->  
        <!--        </item>  -->  
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <!--         <item> -->  
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
        <item id="barItem1" name="separator"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item id="barItem12"> 
          <xforms:trigger appearance="image-text" id="insertTr" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newInsertClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem13"> 
          <xforms:trigger appearance="image-text" id="saveTr" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveTrClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="42px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="grid1" id="controlPlace9" style="width:100%;height:580px;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="mainActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="42px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="width:827px;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="grid1" data="dataMain" onRowDblClick="mainActivity.grdMainRowDblClick"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn4" ref="dECTIONBASEDONNAME" label="检测依据文件名称" type="ro"
        width="118px"/>  
      <xui:column id="gridColumn5" ref="vALIDDATETIME" label="依据生效时间" type="ro" width="126px"
        format="yyyy-MM-dd"/>  
      <xui:column id="gridColumn14" ref="vALIDSTATECNAME" label="依据有效状态" type="ro"
        width="111px"/>  
      <xui:column id="gridColumn2" ref="version1" label="版本" type="ed" width="100px"/> 
    </xhtml:div>  
    <xforms:input id="iptDECTIONBASEDONNAME" ref="data('dataMain')/dECTIONBASEDONNAME"/>  
    <xforms:input id="iptVALIDDATETIME" ref="data('dataMain')/vALIDDATETIME" format="yyyy-MM-dd"/>  
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
      value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/vALIDSTATE1"> 
      <xforms:label ref="vALIDSTATECNAME" id="xuiLabel7"/>  
      <xforms:value ref="VALID_STATE_CODE" id="default49"/>  
      <xforms:itemset id="default50" data="bizData1" auto-load-data="true"> 
        <xforms:column ref="vALIDSTATECNAME" id="default1"/>  
        <xforms:column ref="VALID_STATE_CODE" visible="false" id="default2"/> 
      </xforms:itemset> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout2" style="position:relative;width:827px;height:100%;color:#000000"
        type="absolute"> 
        <place control="iptDECTIONBASEDONNAME" id="default15" style="font-size:10pt;position: absolute;left:147px;top:5px;width:471px;"/>  
        <place control="iptVALIDDATETIME" id="default17" style="font-size:10pt;position: absolute;left:465px;top:43px;"/>  
        <xhtml:label id="label13" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;left:376px;top:48px;">*</xhtml:label>  
        <xui:place control="gridSelect4" id="controlPlace11" style="position:absolute;left:147px;top:42px;"/>  
        <xhtml:label id="label3" style="position:absolute;left:63px;top:48px;" class="xui-label">依据有效状态</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;width:150px;left:40px;top:10px;"
          class="xui-label">检测依据文件名称</xhtml:label>  
        <xhtml:label id="label12" style="position:absolute;left:384px;top:48px;" class="xui-label">依据生效时间</xhtml:label>  
        <xhtml:label id="label18" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;left:53px;top:47px;">*</xhtml:label>  
        <xui:place control="grid2" id="controlPlace2" style="position:absolute;top:135px;left:8px;height:223px;width:657px;"/>  
        <xui:place control="toolbars1" id="controlPlace3" style="position:absolute;width:400px;left:8px;top:90px;height:37px;"/>  
        <xui:place control="dectionStandardWD" id="controlPlace6" style="position:absolute;top:236px;left:390px;"/> 
      </layout>  
      <xforms:input id="iptDECTIONBASEDONNAME" ref="data('dataMain')/dECTIONBASEDONNAME"/>  
      <xforms:input id="iptVALIDDATETIME" ref="data('dataMain')/vALIDDATETIME" format="yyyy-MM-dd"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/vALIDSTATE1"> 
        <xforms:label ref="vALIDSTATECNAME" id="xuiLabel7"/>  
        <xforms:value ref="VALID_STATE_CODE" id="default49"/>  
        <xforms:itemset id="default50" data="bizData1" auto-load-data="true"> 
          <xforms:column ref="vALIDSTATECNAME" id="default1"/>  
          <xforms:column ref="VALID_STATE_CODE" visible="false" id="default2"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="grid2" data="dectionStandardD"> 
        <xui:column id="gridColumn3" ref="calCheckBox" label="#master_checkbox" type="checkbox"
          width="44px" align="center"/>  
        <xui:column id="gridColumn6" ref="calSeq" label="序号" type="ro" width="41px"
          align="center" show-index="true"/>  
        <xui:column id="gridColumn10" ref="sDocName" label="文件名称" type="ed" width="100px"/>  
        <xui:column id="gridColumn7" ref="DECTION_STANDARD_ID" label="依赖标准编号" type="ro"
          width="115px"/>  
        <xui:column id="gridColumn9" ref="cITYCODECNAME" label="依赖标准所属城市" type="ro"
          width="118px"/>  
        <xui:column id="gridColumn1" ref="sTANDARDTYPENAME" type="ro" width="100px"
          label="依赖标准类型"/>  
        <xui:column id="gridColumn8" ref="PUBLISH_DATE" label="依赖标准发布时间" type="ro"
          width="130px"/> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="dectionStandardD"> 
          <item id="barItem2"> 
            <xforms:trigger appearance="image-text" id="insertSubTr" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[mainActivity.InsertSubClick(event)]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item id="barItem7"> 
            <xforms:trigger appearance="image-text" id="removeDetailTrigger" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/remove.gif"> 
              <xforms:label> <![CDATA[删除]]> </xforms:label>  
              <xforms:action id="action2" ev:event="DOMActivate"> 
                <xforms:script id="script2"> <![CDATA[mainActivity.removeDetailClick(event)]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem8"/>  
          <item name="filter-pro-item" id="customBarItem1"/>  
          <item name="separator" id="customBarItem2"/>  
          <item name="custom-page-item" id="customPageItem1" items="pre,page,next,ext"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
        title="检测标准详细信息" width="770px" height="470px" modal="true" id="dectionStandardWD"
        url="/UI/metrodetection/testing_standard/process/dection_based_on_info/dectionStandardDetail.w"
        onClose="mainActivity.dectionStandardWDClose"/> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
