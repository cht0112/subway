<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:178px;left:578px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TRAINING_COURSE_INFO" direct-delete="true" id="dataMaster" limit="20"
      offset="0" store-type="grid" update-mode="whereAll" onValueChanging="mainActivity.dataMasterValueChanging"
      confirm-delete="false" confirm-refresh="false" filter-relations="COURSE_NAME,COURSE_LENGTH"> 
      <reader action="/metrodetection/training_management/logic/action/queryTRAINING_COURSE_INFOAction"
        id="default1"/>  
      <writer action="/metrodetection/training_management/logic/action/saveTRAINING_COURSE_INFOAction"
        id="default2"/>  
      <creator action="/metrodetection/training_management/logic/action/createTRAINING_COURSE_INFOAction"
        id="default3"/>  
      <rule id="default12" relation="COURSE_NAME" required="true()"/>  
      <calculate-relation relation="recCB" id="calculate-relation1" type="xsd:string"/>
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="RELATION_CONTENT_SUBJECT" confirm-delete="false" id="dataDetail" limit="20"
      offset="0" update-mode="whereAll" direct-delete="true" confirm-refresh="false" filter-relations="TRAINING_NAME,TRAINING_CONTENT1,TRAINING_DOC,sDocName"> 
      <reader action="/metrodetection/training_management/logic/action/myQueryContentSubjectAction"
        id="default4"/>  
      <writer action="/metrodetection/training_management/logic/action/saveRELATION_CONTENT_SUBJECTAction"
        id="default5"/>  
      <creator action="/metrodetection/training_management/logic/action/createRELATION_CONTENT_SUBJECTAction"
        id="default6"/>  
      <master data="dataMaster" id="master1" relation="COURSE_IDID"/>  
      <calculate-relation relation="recCB" id="calculate-relation2" type="xsd:integer"/>
    </data>  
    <xforms:action id="action4" ev:event="xbl-loaded">
      <xforms:script id="xformsScript4"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script>
    </xforms:action>
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1" mode="IMG_TXT_LR"> 
        <!--        <item name="insert-item" id="barItem7"></item>-->  
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <!--        <item id="barItem3" name="delete-item"/>  -->  
        <item> 
          <xforms:trigger appearance="image-text" id="deleteTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label id="default76"> <![CDATA[删除]]> </xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate">
              <xforms:script id="xformsScript2"><![CDATA[mainActivity.deleteTriggerClick(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem5"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMaster" filter-relations="COURSE_NAME,COURSE_LENGTH"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem6"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif"> 
            <xforms:label id="default11"> <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1"> <![CDATA[xforms.blur();justep.xbl('dataMaster').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" onRowDblClick="mainActivity.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <column id="default7" label="培训课程名称" ref="COURSE_NAME" type="ro" width="255px"
        align="left"/>  
      <column id="default8" label="课时长度" ref="COURSE_LENGTH" type="ro" width="206px"
        align="left"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" mode="IMG_TXT_LR" style="width:283px;"> 
        
                <item> 
          <xforms:trigger appearance="image-text" id="insertTriggerDetail" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[mainActivity.insertTriggerDetailClick(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>
        
        
        
        
<!--        <item id="barItem12" name="insert-item"/>  -->
        <item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem14" name="delete-item"/>  
        <item id="barItem15" name="refresh-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout1" style=";position:relative;" type="absolute"> 
        <xhtml:span id="span1" style="font-size:10pt;position:absolute;color:#FF8080;top:42px;left:8px;"> <![CDATA[*]]> </xhtml:span>  
        <place control="iptCOURSE_NAME" id="default14" style="font-size:10pt;position: absolute;width:440px;top:41px;left:108px;"/>  
        <xhtml:label id="label1" style="position:absolute;color:#000000;top:43px;left:24px;"
          class="xui-label"><![CDATA[培训课程名称]]></xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;top:74px;left:48px;" class="xui-label"><![CDATA[课时长度]]></xhtml:label>  
        <xui:place control="input1" id="controlPlace8" style="position:absolute;top:74px;left:108px;"/>  
        <xhtml:label id="label6" style="position:absolute;top:6px;left:8px;background-color:#F2FFFD;font-weight:bold;height:18px;color:#000000;width:550px;text-align:center;"
          class="xui-label" dir="ltr"><![CDATA[培训课程信息]]></xhtml:label>  
        <xhtml:label id="label7" style="position:absolute;top:153px;left:8px;color:#000000;font-weight:bold;background-color:#F2FFFD;height:18px;width:550px;text-align:center;"
          class="xui-label"><![CDATA[课程内容信息]]></xhtml:label> 
      </layout>  
      <xforms:input id="iptCOURSE_NAME" ref="data('dataMaster')/COURSE_NAME" tabindex="1"/>  
      <xforms:input id="input1" ref="data('dataMaster')/COURSE_LENGTH" tabindex="2"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail"
      id="grdDetail"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn2" ref="TRAINING_NAME" label="培训内容名称" type="ro" width="199px"
        align="left"/>  
      <xui:column id="gridColumn5" ref="TRAINING_DOC" label="培训纸质教材" type="ed" width="148px"></xui:column><xui:column id="gridColumn4" ref="sDocName" label="培训电子教材" type="ed" width="232px"></xui:column><xui:column id="gridColumn3" ref="TRAINING_CONTENT1" label="培训内容描述" type="ed" width="315px"></xui:column>
  
  </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
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
            <top id="borderLayout-top2" size="210px"> 
              <place control="tbsMaster2" id="controlPlace3"/>  
              <place control="vDetail" id="controlPlace5" style="height:141px;"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <xui:place control="view1" id="controlPlace9" style="width:1011px;height:49px;"/>  
              <place control="grdDetail" id="controlPlace6" style="height:81%;width:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout2"> 
        <xui:place control="toolbars1" id="controlPlace10" style="position:absolute;width:828px;height:35px;top:5px;left:5px;"/>  
        <xui:place control="ContentDialog" id="controlPlace7" style="position:absolute;top:10px;left:621px;"/> 
      </layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
          data="dataDetail" mode="IMG_TXT_LR"> 
          <item> 
            <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[mainActivity.insertMasClick(event)]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <!--          <item name="insert-item" id="barItem9"/>  -->  
          <!--          <item name="delete-item" id="barItem16"/>  -->  
          <item> 
            <xforms:trigger appearance="image-text" id="deleteTrigger1" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/remove.gif"> 
              <xforms:label id="default76"> <![CDATA[删除]]> </xforms:label>  
              <xforms:action id="action3" ev:event="DOMActivate">
                <xforms:script id="xformsScript3"><![CDATA[mainActivity.deleteTrigger1Click(event)]]></xforms:script>
              </xforms:action>
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem17"/>  
          <item name="filter-pro-item" id="customBarItem1"/>  
          <item name="custom-page-item" id="customPageItem1"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
        title="选择课程内容" width="660px" height="400px" modal="true" id="ContentDialog"
        url="/UI/metrodetection/training_management/process/trainingCourseManagement/ContentDailog.w"
        onClose="mainActivity.ContentDialogClose"> 
        <result concept="dataDetail" operation="clear" origin="main" id="default9"> 
          <mapping from="rowid" to="TRAINING_CONTENT_ID" id="default10"/>  
          <mapping from="TRAINING_NAME" to="TRAINING_NAME" id="default13"/>  
          <mapping from="TRAINING_DOC_ID" to="TRAINING_DOC_ID" id="default15"/>
        </result>
      </xhtml:div> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
