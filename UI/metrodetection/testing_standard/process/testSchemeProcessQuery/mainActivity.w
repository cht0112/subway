<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:282px;left:207px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="main" concept="SA_Task" order-by="sCreateTime desc" filter-relations="sName,sCreateTime,sCreatorPersonName,sExecutorPersonName"> 
      <reader id="default1" action="/metrodetection/system_code/logic/action/testSchemeProcessQueryAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="status,statusLabel,org,orgLabel"
      src="" auto-load="true" store-type="simple" id="custom_filter"> 
      <rows xmlns="" id="default4">  
        <row id="default5"> 
          <cell id="default6"/>  
          <cell id="default7"/> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action3" ev:event="onload"> 
      <xforms:script id="xformsScript3">mainActivity.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="dlgChart" id="controlPlace4" style="top:249px;left:95px;"/>  
      <xui:place control="process" id="controlPlace5" style="width:24px;top:102px;left:433px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="70px" id="borderLayout-top1"> 
          <xui:place control="toolbars1" id="controlPlace2"/>  
          <xhtml:table id="table2"> 
            <xhtml:tr id="tr4"> 
              <xhtml:td id="td2">时间</xhtml:td>  
              <xhtml:td id="td4"> 
                <xui:place control="dateFilter1" id="controlPlace7" style="width:80px;float:left;margin-top:2px;"/> 
              </xhtml:td>  
              <xhtml:td id="td6">组织</xhtml:td>  
              <xhtml:td id="td7"> 
                <!--                <xui:place control="orgPersonFilter" id="controlPlace8" style="width:150px;float:left;margin-top:2px;"/> -->  
               
                <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
                  label-separator="," value-separator="," ext-separator="," id="gridSelect2"
                  ref="data('custom_filter')/org" multi-select="false" style="width:99px;" label-ref="data('custom_filter')/orgLabel" onCloseup="mainActivity.gridSelect2Closeup"> 
                  <xforms:label ref="col_1" id="xuiLabel6"/>  
                  <xforms:value ref="col_0" id="default2"/>  
                  <xforms:itemset id="default3" auto-load-data="false"> 
                    <xforms:column ref="col_0" visible="false" id="default25"/>  
                    <xforms:column ref="col_1" id="default26"/>  
                    <itemset-data xmlns="" id="default27">  
                      <rows id="default28">  
                        <row id="default29"> 
                          <cell id="default30">0</cell>  
                          <cell id="default31">全部</cell>
                        </row>  
                        <row id="default32"> 
                          <cell id="default33">1</cell>  
                          <cell id="default34">本人</cell>
                        </row> 
                      </rows> 
                    </itemset-data>
                  </xforms:itemset> 
                </xhtml:div> 
              </xhtml:td>  
              <xhtml:td id="td8">状态</xhtml:td>  
              <xhtml:td id="td9"> 
                <xui:place control="gridSelect1" id="controlPlace6" style="float:left;margin-top:2px;width:74px;"/> 
              </xhtml:td>  
              <xhtml:td id="td10">查找</xhtml:td>  
              <xhtml:td id="td11"> 
                <xui:place control="smartFilter1" id="controlPlace9" style="width:100px;float:left;margin-top:2px;"/> 
              </xhtml:td>  
              <xhtml:td id="td12"> 
                <xui:place control="trgSearch" id="controlPlace10"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="grid" id="controlPlace1" style="width:100%;height:100%;"/> 
        </center> 
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="流程轨迹" width="400px" height="300px" modal="true" id="dlgChart" url="/UI/SA/task/taskCenter/dialogs/processChart.w"
      resizable="true" status="maximize" left="0" top="0"/>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="process"
      auto-close="false" auto-start="false" auto-save="false" auto-filter="false"/>  
    <!-- appearance="image" -->  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        data="main" mode="IMG_TXT_LR"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-pro-item" id="barItem2"/>  
        <item name="separator" id="customBarItem1"/>  
        <item name="custom-page-item" id="customPageItem1" page-count="0" items="pre,next,ext"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div default-select="0" component="/UI/system/components/dateFilter.xbl.xml#dateFilter"
      onChanged="" filter-date-mode="single" id="dateFilter1" filter-data="main" auto-refresh="true"
      dropdown-height="200px" filter-date-relation1="sCreateTime"/>  
    <xhtml:div onInit="" onChanged="" component="/UI/system/components/orgFilter.xbl.xml#orgFilter"
      id="orgPersonFilter" auto-refresh="false" dropdown-height="200px" default-value="本人"/>  
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
      value-separator="," ext-separator="," id="gridSelect1" ref="data('custom_filter')/status"
      label-ref="data('custom_filter')/statusLabel" multi-select="true" onCloseup="mainActivity.gridSelect1Closeup"> 
      <xforms:label ref="col_0" id="xuiLabel6"/>  
      <xforms:value ref="col_0" id="default2"/>  
      <xforms:itemset id="default3"> 
        <xforms:column ref="col_0" id="default47"/>  
        <xforms:column ref="col_1" visible="false" id="default48"/>  
        <itemset-data xmlns="" id="default8">  
          <rows id="default9"> 
            <row id="default10"> 
              <cell id="default11">处理中</cell> 
            </row>  
            <row id="default12"> 
              <cell id="default13">编辑中</cell> 
            </row>  
            <row id="default14"> 
              <cell id="default15">已完成</cell> 
            </row>  
            <row id="default16"> 
              <cell id="default17">已终止</cell> 
            </row> 
          </rows> 
        </itemset-data> 
      </xforms:itemset> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
      id="smartFilter1" filter-data="main" filter-relations="sName,sTypeName,sCreatorPersonName,sExecutorPersonName,sStatusName"
      auto-refresh="true"/>  
    <xforms:trigger id="trgSearch" src="/UI/SA/task/taskCenter/images/search.png" appearance="image-text"> 
      <xforms:label id="xuiLabel10"><![CDATA[搜索]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2">mainActivity.trgSearchClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grid" data="main" onRowDblClick="mainActivity.gridRowDblClick"> 
      <xui:column id="gridColumn9" ref="calcIndex" type="ro" width="30px" align="center"
        show-index="true" label=" "/>  
      <xui:column id="gridColumn3" ref="sStatusName1" label="状态" type="ro" width="60px"
        align="center"/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="827px"/>  
      <xui:column id="gridColumn7" ref="sCreatorPersonName" label="提交人" type="ro"
        width="76px"/>  
      <xui:column id="gridColumn5" ref="sCreateTime" label="提交时间" type="ro" width="145px"
        format="yyyy-MM-dd"/>  
      <xui:column id="gridColumn4" ref="sExecutorNames" label="执行人" type="ro" width="123px"/>  
      <xui:column id="gridColumn6" ref="sLastModifyTime" label="最后修改时间" type="ro"
        width="165px" format="yyyy-MM-dd"/>  
      </xhtml:div> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="htmlScript2" src="/UI/SA/task/js/common.js"/> 
  </xui:resource> 
</xui:window>
