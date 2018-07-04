<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:348px;left:82px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SCREEN_LOCATION_INFO" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" confirm-delete="false" filter-relations="IDENTIFY_CODE,SCREEN_LOCALTION,USE_DESC"> 
      <reader action="/metrodetection/receptionA_info/logic/action/newSelect"
        id="default3"/>  
      <writer action="/metrodetection/receptionA_info/logic/action/saveSCREEN_LOCATION_INFOAction"
        id="default4"/>  
      <creator action="/metrodetection/receptionA_info/logic/action/createSCREEN_LOCATION_INFOAction"
        id="default5"/>  
      <rule id="dataBizRule1" relation="SCREEN_LOCALTION" required="true()"
        alert="'屏幕位置不能为空'"/>  
      <rule id="dataBizRule2" relation="LOCATION_TYPE" required="true()" alert="'屏幕位置类型不能为空'"/>  
      <rule id="dataBizRule3" relation="SCREEN_TYPE" required="true()" alert="'屏幕类型不能为空'"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        
                <item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.removeTrigger1Click(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>
        
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"-->
<!--            id="removeTrigger1" onclick="mainActivity.removeTrigger1Click(event)"-->
<!--            src="/UI/system/images/standardToolbar/standard/remove.gif" style="border:none;height:24px;width:30px;"-->
<!--            title="删除"/> -->
<!--        </item>  -->
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem2" name="separator"/>  
        <item id="barItem5"> 
          <xhtml:div action="/SA/excel/logic/action/exportExcel" component="/UI/system/components/excel.xbl.xml#export"
            data="dataMain" id="excelExport1"/> 
        </item>  
        <item id="barItem6" name="separator"/>  
        <item id="barItem7"/>  
        <item id="barItem8"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="IDENTIFY_CODE,SCREEN_LOCALTION,LOCATION_TYPE,SCREEN_TYPE,USE_DESC,MEMO"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem9"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif"> 
            <xforms:label id="default10"> <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1"> <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <column id="default1" label="屏幕唯一识别ID" ref="IDENTIFY_CODE" type="ro" width="100px"/>  
      <column id="default7" label="屏幕类型" ref="SCREEN_TYPE1" type="ro" width="85px"/>  
      <column id="default6" label="屏幕位置类型" ref="LOCATION_TYPE1" type="ro" width="83px"/>  
      <column id="default2" label="屏幕位置" ref="SCREEN_LOCALTION" type="ro" width="121px"/>  
      <column id="default8" label="屏幕用途描述" ref="USE_DESC" type="ro" width="323px"/> 
    </xhtml:div>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
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
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
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
        <place control="iptIDENTIFY_CODE" id="default12" style="font-size:10pt;position: absolute;top:30px;width:142px;left:127px;"/>  
        <place control="iptSCREEN_LOCALTION" id="default15" style="font-size:10pt;position: absolute;top:62px;left:382px;width:143px;"/>  
        <xhtml:label id="label1" style="position:absolute;left:31px;top:35px;" class="xui-label">屏幕唯一识别ID</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;top:65px;left:321px;" class="xui-label">屏幕位置</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;left:43px;top:66px;" class="xui-label">屏幕位置类型</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;top:31px;left:320px;" class="xui-label">屏幕类型</xhtml:label>  
        <xui:place control="gridSelect2" id="controlPlace6" style="position:absolute;top:29px;width:141px;left:382px;"/>
        <xhtml:label id="label5" style="position:absolute;left:43px;top:97px;" class="xui-label">屏幕用途描述</xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;left:83px;top:204px;" class="xui-label">备注</xhtml:label>  
        <xui:place control="textarea1" id="controlPlace7" style="position:absolute;height:92px;left:125px;width:400px;top:97px;"/>  
        <xui:place control="textarea2" id="controlPlace8" style="position:absolute;left:125px;top:204px;height:92px;width:400px;"/>  
        <xhtml:label id="label7" style="position:absolute;color:#FF0000;top:30px;left:309px;"
          class="xui-label">*</xhtml:label>  
        <xhtml:label id="label8" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:64px;left:31px;">*</xhtml:label>  
        <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;top:64px;left:310px;">*</xhtml:label>  
        <xui:place control="gridSelect3" id="controlPlace9" style="position:absolute;top:65px;width:142px;left:127px;"/>
      </layout>  
      <xforms:input id="iptIDENTIFY_CODE" ref="data('dataMain')/IDENTIFY_CODE"/>  
      <xforms:input id="iptSCREEN_LOCALTION" ref="data('dataMain')/SCREEN_LOCALTION"/>  
      <xforms:textarea ref="data('dataMain')/USE_DESC" id="textarea1"/>  
      <xforms:textarea ref="data('dataMain')/MEMO" id="textarea2"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/SCREEN_TYPE"> 
        <xforms:label ref="col_1" id="default17"/>  
        <xforms:value ref="col_0" id="default18"/>  
        <xforms:itemset id="default19" auto-load-data="true"> 
          <itemset-data xmlns="" id="default64">  
            <rows id="default65">  
              <row id="default66"> 
                <cell id="default67">1</cell>  
                <cell id="default68">32寸屏</cell>
              </row>  
              <row id="default69"> 
                <cell id="default70">2</cell>  
                <cell id="default71">39寸屏</cell>
              </row>  
              <row id="default72"> 
                <cell id="default73">3</cell>  
                <cell id="default74">46寸屏</cell>
              </row>  
              <row id="default75"> 
                <cell id="default76">4</cell>  
                <cell id="default77">其它</cell>
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default78"/>  
          <xforms:column ref="col_1" id="default79"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/LOCATION_TYPE"> 
        <xforms:label ref="col_1" id="default80"/>  
        <xforms:value ref="col_0" id="default81"/>  
        <xforms:itemset id="default82">
          <itemset-data xmlns="" id="default83">  
            <rows id="default84">  
              <row id="default85"> 
                <cell id="default86">1</cell>  
                <cell id="default87">楼层入口</cell>
              </row>  
              <row id="default88"> 
                <cell id="default89">2</cell>  
                <cell id="default90">检测室门口</cell>
              </row>  
              <row id="default91"> 
                <cell id="default92">3</cell>  
                <cell id="default93">检测设备上方</cell>
              </row>  
              <row id="default94"> 
                <cell id="default95">4</cell>  
                <cell id="default96">其它</cell>
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default97"/>  
          <xforms:column ref="col_1" id="default98"/>
        </xforms:itemset>
      </xhtml:div>
    </xui:view> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
