<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:182px;left:379px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dFirstKeyWord" style=";" concept="OA_Pub_FirstKeyWord" limit="-1" store-type="simple" order-by="fName:asc"> 
      <reader id="default1" action="/OA/common/logic/action/queryOA_Pub_FirstKeyWordAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dSencondKeyWord" style=";" concept="OA_Pub_SencondKeyWord" store-type="simple" limit="-1" order-by="fName:asc"> 
      <reader id="default2" action="/OA/common/logic/action/queryOA_Pub_SencondKeyWordAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dEndKeyWord" style=";" concept="OA_Pub_EndKeyWord" limit="-1" store-type="simple" order-by="fName:asc"> 
      <reader id="default3" action="/OA/common/logic/action/queryOA_Pub_EndKeyWordAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="keyWordFirst,keyWordSencond,keyWordEnd,keyWordView" src="" auto-load="true" id="dTemp" store-type="simple"> 
      <rows xmlns="" id="default4">  
        <row id="default5"> 
          <cell id="default18"/>  
          <cell id="default19"/>  
          <cell id="default20"/>  
          <cell id="default21"/>  
          <cell id="default22"/>  
          <cell id="default23"/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:table id="table" class="xui-container" style="height:100%;width:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="tr2"> 
          <xhtml:td id="td4" align="center"> 
            <xui:place control="vDetail" id="controlPlace1" style="width:100%;height:50%;"/>  
            <xui:place control="wDlgSencondKeyWord" id="controlPlace2" style="top:-128px;left:-13px;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout1" type="absolute" style="width:100%;position:relative;height:100%;"> 
        <xui:place control="searchSltFirst" id="controlPlace3" style="position:absolute;width:220px;top:95px;left:142px;"/>  
        <xui:place control="trgSencondKeyWord" id="controlPlace5" style="position:absolute;width:23px;top:192px;height:23px;left:625px;"/>  
        <xui:place control="searchSltEnd" id="controlPlace6" style="position:absolute;width:220px;left:142px;top:280px;"/>  
        <xui:place control="optView" id="controlPlace7" style="position:absolute;border-width:1px 1px 1px 1px;border-style:none none none none;left:120px;top:0px;height:23px;text-align:left;width:560px;"/>  
        <xui:place control="trgRefresh" id="controlPlace8" style="position:absolute;width:50px;top:404px;height:23px;left:20px;"/>  
        <xui:place control="trgSure" id="controlPlace9" style="position:absolute;width:50px;top:404px;height:23px;left:523px;"/>  
        <xui:place control="trgCancel" id="controlPlace10" style="position:absolute;width:50px;top:404px;height:23px;left:599px;"/>  
        <xhtml:label id="label1" style="position:absolute;width:65px;top:100px;height:21px;left:46px;text-align:left;" class="xui-label">首主题词：</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;height:19px;left:47px;top:170px;text-align:left;" class="xui-label">自选主题词：</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;width:65px;height:16px;left:46px;top:285px;text-align:left;" class="xui-label">末主题词：</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;top:6px;left:20px;text-align:left;" class="xui-label">预    览：</xhtml:label>  
        <xhtml:label id="label5" style="position:absolute;width:351px;height:24px;left:20px;top:65px;text-align:left;" class="xui-label">第一步：设置首主题词。通过下方首主题词选择框进行设置。</xhtml:label>  
        <xhtml:label id="label6" class="xui-label" style="position:absolute;position:absolute;width:495px;top:135px;height:24px;left:20px;text-align:left;">第二步：设置自选主题词。通过下方自选主题词右边的选择按钮设置，或者手动输入。</xhtml:label>  
        <xhtml:label id="label7" class="xui-label" style="position:absolute;position:absolute;position:absolute;width:351px;height:24px;left:20px;top:245px;text-align:left;">第三步：设置末主题词。通过下方末主题词选择框进行设置。</xhtml:label>  
        <xhtml:hr id="horizontalRule1" style="position:absolute;top:384px;left:0px;width:660px;"/>  
        <xhtml:hr id="horizontalRule2" style="position:absolute;position:absolute;top:51px;left:0px;width:660px;"/>  
        <xui:place control="textarea" id="controlPlace11" style="position:absolute;width:476px;height:60px;left:143px;top:167px;"/> 
      </layout>  
      <xhtml:div component="/UI/appCommon/components/searchSelect.xbl.xml#searchSelect" id="searchSltFirst" dropdown-height="200" ref="data('dTemp')/keyWordFirst" label-ref="data('dTemp')/keyWordFirst" filter-relations="fName" onCloseup="keyWordSelect.searchSltFirstCloseup"> 
        <xforms:label ref="fName" id="xuiLabel2"/>  
        <xforms:value ref="OA_Pub_FirstKeyWord" id="default6"/>  
        <xforms:itemset id="default7" data="dFirstKeyWord"> 
          <xforms:column ref="OA_Pub_FirstKeyWord" visible="false" id="default12"/>  
          <xforms:column ref="fName" id="default13"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:trigger id="trgSencondKeyWord" class="xui-autofill" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png"> 
        <xforms:label id="xuiLabel1">选择自选主题词</xforms:label>  
        <xforms:action id="action6" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript6">keyWordSelect.trgSencondKeyWordClick(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xhtml:div component="/UI/appCommon/components/searchSelect.xbl.xml#searchSelect" id="searchSltEnd" dropdown-height="120" ref="data('dTemp')/keyWordEnd" label-ref="data('dTemp')/keyWordEnd" filter-relations="fName" onCloseup="keyWordSelect.searchSltEndCloseup"> 
        <xforms:label ref="fName" id="xuiLabel4"/>  
        <xforms:value ref="OA_Pub_EndKeyWord" id="default10"/>  
        <xforms:itemset id="default11" data="dEndKeyWord"> 
          <xforms:column ref="OA_Pub_EndKeyWord" visible="false" id="default16"/>  
          <xforms:column ref="fName" id="default17"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:output id="optView" ref="data('dTemp')/keyWordView"/>  
      <xforms:trigger id="trgRefresh" class="xui-autofill"> 
        <xforms:label id="xuiLabel3">刷新</xforms:label>  
        <xforms:action id="action1" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript1">keyWordSelect.trgRefreshClick(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgSure" class="xui-autofill"> 
        <xforms:label id="xuiLabel5">确定</xforms:label>  
        <xforms:action id="action2" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript2">keyWordSelect.trgSureClick(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgCancel" class="xui-autofill"> 
        <xforms:label id="xuiLabel6">取消</xforms:label>  
        <xforms:action id="action3" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript3">keyWordSelect.trgCancelClick(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:textarea ref="data('dTemp')/keyWordSencond" id="textarea"> 
        <xforms:action id="action4" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript4">keyWordSelect.textareaChange(event)</xforms:script> 
        </xforms:action> 
      </xforms:textarea> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="自选主题词选择" width="470px" height="420px" modal="true" id="wDlgSencondKeyWord" url="/OA/common/process/secondKeyWordSelect/secondKeyWordSelect.w" onReceive="keyWordSelect.wDlgSencondKeyWordReceive"/> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="keyWordSelect.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource> 
</xui:window>
