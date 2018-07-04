<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:330px;left:669px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="AFC_MANUFACTURER_INFO" direct-delete="true" id="dataMaster" limit="20"
      offset="0" store-type="grid" update-mode="whereAll" onValueChanged="mainActivity.dataMasterValueChanged" filter-relations="mANUFACTUREIDCNAME,mANUFACTUREADDRESS,cONTACTOR,cONTACTTELEPHONE,mANUFACTURETYPE1"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryAFCManufacturerAction"
        id="default1"/>  
      <writer action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"
        id="default2"/>  
      <creator action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"
        id="default3"/>  
      <rule id="dataBizRule1" relation="mANUFACTUREIDCNAME" required="true()"
        alert="'厂商中文名称不能为空!'"/>  
      <rule id="dataBizRule2" relation="cONTACTTELEPHONE" required="true()"
        alert="'联系电话不能为空!'"/>
    <rule id="dataBizRule3" relation="mANUFACTURETYPE" required="true()" alert="'厂商类型不能为空!'"></rule>
  <rule id="dataBizRule4" relation="mANUFACTURETYPE1" required="true()" alert="'厂商类型不能为空!'"></rule>
  <calculate-relation relation="recCB" id="calculate-relation3"></calculate-relation></data>  
    <xforms:action id="action5" ev:event="xbl-loaded">
      <xforms:script id="xformsScript5">mainActivity.mdDefaultXBLLoaded(event)</xforms:script>
    </xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="hrData" concept="HR_BASE_INFO"><creator id="default38"></creator>
  <reader id="default39" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default40"></writer>
  </data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1" mode="IMG_TXT_LR"> 
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--            id="insertTrigger" onclick="mainActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->
<!--            style="border:none" title="新建"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"-->
<!--            id="removeTrigger1" onclick="mainActivity.assetDelete(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none;" title="删除"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.assetDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1" name="separator"/>  
        <item id="barItem2"> 
          <xhtml:div component="/UI/system/components/excel.xbl.xml#export" data="dataMaster"
            id="excelExport1"/> 
        </item>  
        <item id="barItem7" name="separator"></item></xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" onRowDblClick="mainActivity.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column" edit-mode="true"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/> 
      <column id="default7" label="厂商名称 " ref="mANUFACTUREIDCNAME" type="ro" width="172px"/>  
      <xui:column id="gridColumn1" ref="mANUFACTURETYPE_1" type="ro" width="118px" label="厂商类型"></xui:column><column id="default11" label="联系人 " ref="cONTACTOR" type="ro" width="98px" /><column id="default10" label="联系电话 " ref="cONTACTTELEPHONE" type="ro" width="124px" /><column id="default9" label="厂商地址 " ref="mANUFACTUREADDRESS" type="ro" width="270px"/>  
      
       
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" style="width:174px;" mode="IMG_TXT_LR"> 
<!--        <item id="barItem12" name="insert-item"/>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem13" name="save-item"/>  -->

		<item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif">  
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[mainActivity.saveMasClick(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 

        <item id="barItem14" name="delete-item"/>  
        <item id="barItem15" name="refresh-item"/>
  <item name="first-item" id="barItem3"></item>
  <item name="pre-item" id="barItem8"></item>
  <item name="next-item" id="barItem9"></item>
  <item name="last-item" id="barItem10"></item>  
        </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout1" style="position:relative;height:441px;" type="absolute"> 
        <place control="iptMANUFACTUREIDCNAME" id="default16" style="font-size:10pt;position: absolute;width:525px;top:18px;left:115px;"/>  
        <place control="iptMANUFACTUREIDENAME" id="default18" style="font-size:10pt;position: absolute;width:210px;top:81px;left:115px;"/>  
        <place control="iptMANUFACTUREADDRESS" id="default22" style="font-size:10pt;position: absolute;width:525px;top:49px;left:114px;"/>  
        <place control="iptMANUFACTUREPOSTCODE" id="default24" style="font-size:10pt;position: absolute;width:210px;top:113px;left:431px;"/>  
        <place control="iptCONTACTTELEPHONE" id="default26" style="font-size:10pt;position: absolute;width:210px;top:144px;left:114px;"/>  
        <place control="iptCONTACTMOBILE" id="default30" style="font-size:10pt;position: absolute;width:210px;top:144px;left:431px;"/>  
        <place control="iptFAXNUMBER" id="default32" style="font-size:10pt;position: absolute;width:210px;top:174px;left:431px;"/>  
        <place control="iptCONTACTEMAIL" id="default34" style="font-size:10pt;position: absolute;width:210px;top:174px;left:115px;"/>  
        <!-- <place control="iptManufacture_id" id="default38" style="font-size:10pt;position:absolute;text-align:center;width:150px;top:22px;left:107px;"/> -->  
        <xui:place control="textarea1" id="controlPlace7" style="position:absolute;width:530px;top:206px;height:82px;left:114px;"/>  
        <xhtml:label id="label2" style="position:absolute;top:86px;left:28px;" class="xui-label">厂商英文名称</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;width:55px;top:53px;left:50px;"
          class="xui-label">厂商地址</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;width:55px;top:149px;left:54px;"
          class="xui-label">联系电话</xhtml:label>  
        <xhtml:label id="label5" style="position:absolute;width:40px;top:152px;left:384px;"
          class="xui-label">手机号</xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;width:55px;top:179px;left:53px;"
          class="xui-label">电子邮件</xhtml:label>  
        <xhtml:label id="label7" style="position:absolute;width:30px;top:210px;left:77px;"
          class="xui-label">备注</xhtml:label>  
        <xhtml:label id="label8" style="position:absolute;top:22px;left:28px;" class="xui-label">厂商中文名称</xhtml:label>  
        <xhtml:label id="label9" style="position:absolute;width:55px;top:86px;left:368px;"
          class="xui-label">厂商类型</xhtml:label>  
        <xhtml:label id="label10" style="position:absolute;width:55px;top:119px;left:369px;"
          class="xui-label">邮政编码</xhtml:label>  
        <xhtml:label id="label11" style="position:absolute;width:40px;top:119px;left:64px;"
          class="xui-label">联系人</xhtml:label>  
        <xhtml:label id="label12" style="position:absolute;width:30px;top:181px;left:393px;"
          class="xui-label">传真</xhtml:label>  
        <xui:place control="gridSelect1" id="controlPlace9" style="position:absolute;width:210px;top:81px;left:430px;"/>
        <xhtml:label id="label13" style="position:absolute;text-align:right;color:#FF0000;width:8px;top:151px;left:40px;"
          class="xui-label">*</xhtml:label>  
        <xhtml:label id="label14" class="xui-label" style="position:absolute;text-align:right;color:#FF0000;position:absolute;width:8px;top:86px;left:358px;">*</xhtml:label>  
        <xhtml:label id="label15" class="xui-label" style="position:absolute;text-align:right;color:#FF0000;position:absolute;position:absolute;width:8px;top:22px;left:17px;">*</xhtml:label>  
      <xui:place control="view1" id="controlPlace4" style="position:absolute;height:36px;width:234px;left:110px;top:104px;"></xui:place>
  <xui:place control="view2" id="controlPlace8" style="position:absolute;height:35px;width:241px;left:82px;top:105px;"></xui:place></layout>  
      <xforms:input id="iptMANUFACTUREIDCNAME" ref="data('dataMaster')/mANUFACTUREIDCNAME" tabindex="1"/>  
      <xforms:input id="iptMANUFACTUREIDENAME" ref="data('dataMaster')/mANUFACTUREIDENAME" tabindex="3"/>  
      <xforms:input id="iptMANUFACTUREADDRESS" ref="data('dataMaster')/mANUFACTUREADDRESS" tabindex="2"/>  
      <xforms:input id="iptMANUFACTUREPOSTCODE" ref="data('dataMaster')/mANUFACTUREPOSTCODE" input-regex="^[0-9]*[0-9][0-9]*$" tabindex="6"/>  
      <xforms:input id="iptCONTACTTELEPHONE" ref="data('dataMaster')/cONTACTTELEPHONE" tabindex="7">
        <xforms:action id="action4" ev:event="DOMFocusIn">
          <xforms:script id="xformsScript4">(event)</xforms:script>
        </xforms:action>
      </xforms:input>  
      <xforms:input id="iptCONTACTMOBILE" ref="data('dataMaster')/cONTACTMOBILE" tabindex="8"/>  
      <xforms:input id="iptFAXNUMBER" ref="data('dataMaster')/fAXNUMBER" tabindex="10"/>  
      <xforms:input id="iptCONTACTEMAIL" ref="data('dataMaster')/cONTACTEMAIL" tabindex="9"/>  
      <!-- <xforms:input id="iptManufacture_id" ref="data('dataMaster')/rowid"/> -->  
      <xforms:textarea ref="data('dataMaster')/mEMO" id="textarea1" tabindex="11"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/mANUFACTURETYPE1"
        input-changeable="false" onCloseup="mainActivity.gridSelect1Closeup" tabindex="4"> 
        <xforms:label ref="col_1" id="xuiLabel3"/>  
        <xforms:value ref="col_0" id="default12"/>  
        <xforms:itemset id="default15" auto-load-data="true"> 
            
            
          
        <xforms:column ref="col_0" visible="false" label="#text_search" id="default23"></xforms:column>
  <xforms:column ref="col_1" id="default25"></xforms:column>
  <itemset-data xmlns="" id="default43">
   <rows xmlns="" id="default44">
    <row id="default45">
     <cell id="default46">1</cell>
     <cell id="default49">设备厂商</cell></row> 
    <row id="default50">
     <cell id="default51">2</cell>
     <cell id="default52">工具厂商</cell></row> 
    <row id="default53">
     <cell id="default54">3</cell>
     <cell id="default55">第三方检测机构</cell></row> 
    <row id="default56">
     <cell id="default57">4</cell>
     <cell id="default58">检测中心实验室</cell></row> 
    <row id="default59">
     <cell id="default60">5</cell>
     <cell id="default61">加工单位</cell></row> </rows> </itemset-data></xforms:itemset>
      </xhtml:div>  
      <xui:view auto-load="false" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout2"><xui:place control="gridSelect2" id="controlPlace6" style="position:absolute;top:7px;width:210px;left:5px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMaster')/oPERATOR_ID" label-ref="data('dataMaster')/cONTACTOR" input-changeable="false" tabindex="5">
   <xforms:label ref="oPERATORNAME" id="default35"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default36"></xforms:value>
   <xforms:itemset id="default37" auto-load-data="true" data="hrData">
  
  
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default47"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default48"></xforms:column></xforms:itemset></xhtml:div></xui:view>
  <xui:view auto-load="false" id="view2" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout3"><xui:place control="input1" id="controlPlace10" style="position:absolute;top:7px;left:33px;width:210px;"></xui:place></layout>
  <xforms:input id="input1" ref="data('dataMaster')/cONTACTOR" tabindex="5"></xforms:input></xui:view>
  </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:99%;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="32px"> 
              <place control="tbsMaster1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="mainActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2"> 
              <place control="tbsMaster2" id="controlPlace3" style="width:301px;"/>  
              <place control="vDetail" id="controlPlace5" style="height:441px;"/> 
            </top>  
            <center id="borderLayout-center2"></center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
