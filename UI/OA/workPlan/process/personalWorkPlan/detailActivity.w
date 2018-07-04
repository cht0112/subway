<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting"
  xmlns:justep="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:344px;left:266px;"> 
    <data auto-load="false" auto-new="false" component="/UI/system/components/data.xbl.xml#bizData"
      concept="OA_GZJH" id="dataMain" limit="1" offset="0" store-type="simple" update-mode="whereVersion"
      onValueChanged="dataMainValueChanged" onAfterNew="dataMainAfterNew" onBeforeSave="dataMainBeforeSave"
      onSaveCommit="detailActivity.dataMainSaveCommit"> 
      <reader action="/OA/workPlan/logic/action/queryOA_GZJHAction" id="default8"/>  
      <writer action="/OA/workPlan/logic/action/saveOA_GZJHAction" id="default9"/>  
      <creator action="/OA/workPlan/logic/action/createOA_GZJHAction" id="default10"/>  
      <rule id="dataBizRule1" concept="OA_GZJH" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/>  
      <rule id="dataBizRule2" relation="fGZJHLX" default-value="'个人工作计划'"/>  
      <rule id="dataBizRule3" relation="fPlanYear" required="true()" alert="'年度不能为空!'"/>  
      <!--<rule id="dataBizRule4" relation="fJHKSRQ" required="true()" alert="'计划开始日期不能为空！'"/>-->  
      <!--<rule id="dataBizRule5" relation="fJHJSRQ" required="true()" constraint="data('dataMain')/fJHJSRQ&gt;=data('dataMain')/fJHKSRQ"
        alert="'计划结束日期不能为空且结束日期不能小于开始日期！'"/>-->  
      <!--<rule id="dataBizRule6" relation="fGZNR" required="true()" alert="'计划内容不能为空！'"/>-->  
      <rule id="dataBizRule7" relation="fJHZT" required="true()" alert="'计划主题不能为空！'"/> 
    </data>  
    <data auto-load="true" auto-new="false" component="/UI/system/components/data.xbl.xml#bizData"
      concept="OA_GZNR" id="dGZNR" limit="-1" offset="0" store-type="grid" update-mode="whereVersion"
      order-by="fPlanTime:desc"> 
      <reader action="/OA/workPlan/logic/action/queryOA_GZNRAction"/>  
      <writer action="/OA/workPlan/logic/action/saveOA_GZNRAction"/>  
      <creator action="/OA/workPlan/logic/action/createOA_GZNRAction"/>  
      <master id="master1" data="dataMain" relation="fGZJHID"/>  
      <rule id="dataBizRule6" relation="fWorkContent" required="true()" alert="'工作内容必填!'"/> 
    </data>  
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script>xforms_model_construct_done(event)</xforms:script> 
    </xforms:action>  
    <data id="yearData" auto-load="true" store-type="simple" columns="label,value"
      component="/UI/system/components/data.xbl.xml#data"> 
      <rows xmlns="">  
        <row> 
          <cell>2010</cell>  
          <cell>2010</cell> 
        </row>  
        <row> 
          <cell>2011</cell>  
          <cell>2011</cell> 
        </row>  
        <row> 
          <cell>2012</cell>  
          <cell>2012</cell> 
        </row>  
        <row> 
          <cell>2013</cell>  
          <cell>2013</cell> 
        </row>  
        <row> 
          <cell>2014</cell>  
          <cell>2014</cell> 
        </row>  
        <row> 
          <cell>2015</cell>  
          <cell>2015</cell> 
        </row>  
        <row> 
          <cell>2016</cell>  
          <cell>2016</cell> 
        </row>  
        <row> 
          <cell>2017</cell>  
          <cell>2017</cell> 
        </row>  
        <row> 
          <cell>2018</cell>  
          <cell>2018</cell> 
        </row>  
        <row> 
          <cell>2019</cell>  
          <cell>2019</cell> 
        </row>  
        <row> 
          <cell>2020</cell>  
          <cell>2020</cell> 
        </row> 
      </rows> 
    </data>  
    <data id="monthData" auto-load="true" store-type="simple" columns="label,value"
      component="/UI/system/components/data.xbl.xml#data"> 
      <rows xmlns="">  
        <row> 
          <cell>1</cell>  
          <cell>1</cell> 
        </row>  
        <row> 
          <cell>2</cell>  
          <cell>2</cell> 
        </row>  
        <row> 
          <cell>3</cell>  
          <cell>3</cell> 
        </row>  
        <row> 
          <cell>4</cell>  
          <cell>4</cell> 
        </row>  
        <row> 
          <cell>5</cell>  
          <cell>5</cell> 
        </row>  
        <row> 
          <cell>6</cell>  
          <cell>6</cell> 
        </row>  
        <row> 
          <cell>7</cell>  
          <cell>7</cell> 
        </row>  
        <row> 
          <cell>8</cell>  
          <cell>8</cell> 
        </row>  
        <row> 
          <cell>9</cell>  
          <cell>9</cell> 
        </row>  
        <row> 
          <cell>10</cell>  
          <cell>10</cell> 
        </row>  
        <row> 
          <cell>11</cell>  
          <cell>11</cell> 
        </row>  
        <row> 
          <cell>12</cell>  
          <cell>12</cell> 
        </row> 
      </rows> 
    </data>  
    <data id="weekData" auto-load="true" store-type="simple" columns="label,value"
      component="/UI/system/components/data.xbl.xml#data"> 
      <rows xmlns="">  
        <row> 
          <cell>第一周</cell>  
          <cell>第一周</cell> 
        </row>  
        <row> 
          <cell>第二周</cell>  
          <cell>第二周</cell> 
        </row>  
        <row> 
          <cell>第三周</cell>  
          <cell>第三周</cell> 
        </row>  
        <row> 
          <cell>第四周</cell>  
          <cell>第四周</cell> 
        </row>  
        <row> 
          <cell>第五周</cell>  
          <cell>第五周</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action2" ev:event="xbl-loaded"> 
      <xforms:script id="xformsScript2">detailActivity.mdDefaultXBLLoaded(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xui:view auto-load="true" id="vDetail"> 
      <xui:view id="vTbrGZNR" auto-load="true"> 
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dGZNR"
            id="ngtbDetail"> 
            <item name="insert-item" id="barItem6"/>
            <item name="delete-item" id="barItem7"/>
          </xui:bar> 
        </xhtml:div>  
        <xui:layout style="height:100%"> 
          <place control="tbsDetail"/> 
        </xui:layout> 
      </xui:view>  
      <xui:view id="vgrdGZNR" auto-load="true"> 
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dGZNR"
          id="grdDetail" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
          <column ref="序号" type="ro" width="40" show-index="true" align="center"/>  
          <column id="default12" label="工作项目" ref="fWorkContent" type="ed" width="320"/>  
          <xui:column id="gridColumn1" ref="fFGLD" label="分管领导" type="ed" width="100"/>  
          <xui:column id="gridColumn2" ref="fZRC" label="责任处" type="ed" width="100"/>  
          <xui:column id="gridColumn3" ref="fZRR" label="责任人" type="ed" width="100"/>  
          <column id="default11" label="完成时限" ref="fPlanTime" type="ed" width="120"
            align="center" format="yyyy-MM-dd"/>  
          <column id="default18" label="备注" ref="fRemark" type="ed" width="100"/> 
        </xhtml:div>  
        <xui:layout style="height:100%"> 
          <place control="grdDetail" style="width:100%;height:100%;"/> 
        </xui:layout> 
      </xui:view>  
      <xforms:output id="fNO" ref="data('dataMain')/fNO"/>  
      <xforms:textarea ref="data('dataMain')/fGZNR" id="fGZNR" auto-size="true"/>  
      <xforms:output id="fCBR" ref="data('dataMain')/fCreatePsnName" auto-size="true"/>  
      <xforms:input id="fFZR" ref="data('dataMain')/fFZR" auto-size="true"/>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="fCBBM"
        show-org-types="ogn,dpt"> 
        <xforms:model id="model2"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrgDept"/> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSelect1"
          data-ref="dOrgDept" ref="data('dataMain')/fCreateDeptID" label-ref="data('dataMain')/fCreateDeptName"> 
          <xforms:itemset id="default1"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="fPlanYear"
        ref="data('dataMain')/fPlanYear" auto-size="true" dropdown-height="200" label-ref="data('dataMain')/fPlanYear"> 
        <xforms:label ref="label"/>  
        <xforms:value ref="value"/>  
        <xforms:itemset data="yearData" auto-load-data="true"> 
          <xforms:column ref="label" width="100"/>  
          <xforms:column ref="value" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="fPlanMonth"
        ref="data('dataMain')/fPlanMonth" auto-size="true" dropdown-height="200" label-ref="data('dataMain')/fPlanMonth"> 
        <xforms:label ref="label"/>  
        <xforms:value ref="value"/>  
        <xforms:itemset data="monthData" auto-load-data="true"> 
          <xforms:column ref="label" width="100"/>  
          <xforms:column ref="value" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="fPlanWeek"
        ref="data('dataMain')/fPlanWeek" auto-size="true" dropdown-height="200" label-ref="data('dataMain')/fPlanWeek"> 
        <xforms:label ref="label"/>  
        <xforms:value ref="value"/>  
        <xforms:itemset data="weekData" auto-load-data="true"> 
          <xforms:column ref="label" width="100"/>  
          <xforms:column ref="value" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:input ref="data('dataMain')/fCreateTime" id="fCreateTime" format="format-dateTime('yyyy-MM-dd')"
        auto-size="true"/>  
      <xforms:input id="fJHZT" ref="data('dataMain')/fJHZT" auto-size="true"/>  
      <xui:layout style="height:100%;" type="excel" src="mainActivity.xls"></xui:layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        data="dataMain" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem1"/>  
        <item name="save-item" id="barItem2"/>  
        <item name="delete-item" id="barItem3"/>  
        <item name="refresh-item" id="barItem4"/> 
      </xui:bar> 
    </xhtml:div>  
    <layout id="layout1" style="height:100%;position:relative;"> 
      <xhtml:table cellpadding="0" cellspacing="0" id="table3" align="center"> 
        <xhtml:tr id="default25"> 
          <xhtml:td colspan="2" style="width:98%;height:40px;font-size:18;font-weight:bold;"
            align="center"> 
            <xhtml:input type="text" value="" id="iptTitle" class="xui-autofill" style="text-align:center;font-size:20px;font-weight:bold;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default6"> 
          <xhtml:td id="td12" style="height:35px"> 
            <xui:place control="toolbars1" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5"> 
          <xhtml:td id="td1"> 
            <place control="vDetail" id="controlPlace11"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </layout> 
  </xui:view>  
  <resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="detailActivity.js"/> 
  </resource> 
</window>
