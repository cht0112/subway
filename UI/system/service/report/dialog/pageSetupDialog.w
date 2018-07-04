<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:justep="http://www.justep.com/x5#"
  xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:saxon="http://saxon.sf.net/" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns:ns="http://www.justep.com/x5#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xsl:version="2.0" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="pageSetupDialog"> 
    <data id="pageType" columns="sPageType,sDisplayName,sWidth,sHeight" auto-load="true"
      store-type="simple" component="/UI/system/components/data.xbl.xml#data">
      <rows xmlns="" id="default1">
	<row id="A3">
		<cell>A3</cell>
		<cell>A3</cell>
		<cell>297mm</cell>
		<cell>420mm</cell>
	</row>
	<row id="A4">
		<cell>A4</cell>
		<cell>A4</cell>
		<cell>210mm</cell>
		<cell>297mm</cell>
	</row>
	<row id="A5">
		<cell>A5</cell>
		<cell>A5</cell>
		<cell>148mm</cell>
		<cell>210mm</cell>
	</row>
	<row id="B4">
		<cell>B4</cell>
		<cell>B4 (JIS)</cell>
		<cell>257mm</cell>
		<cell>364mm</cell>
	</row>
	<row id="B5">
		<cell>B5</cell>
		<cell>B5 (JIS)</cell>
		<cell>182mm</cell>
		<cell>257mm</cell>
	</row>
	<row id="4K">
		<cell>4K</cell>
		<cell>4 开纸</cell>
		<cell>368mm</cell>
		<cell>520mm</cell>
	</row>
	<row id="8K">
		<cell>8K</cell>
		<cell>8 开纸</cell>
		<cell>260mm</cell>
		<cell>368mm</cell>
	</row>
	<row id="16K">
		<cell>16K</cell>
		<cell>16 开纸</cell>
		<cell>184mm</cell>
		<cell>260mm</cell>
	</row>
	<row id="32K">
		<cell>32K</cell>
		<cell>32 开纸</cell>
		<cell>130mm</cell>
		<cell>184mm</cell>
	</row>
	<row id="B32K">
		<cell>B32K</cell>
		<cell>大 32 开纸</cell>
		<cell>140mm</cell>
		<cell>203mm</cell>
	</row>
	<row id="DL">
		<cell>DL</cell>
		<cell>DL 信封</cell>
		<cell>110mm</cell>
		<cell>220mm</cell>
	</row>
	<row id="C3">
		<cell>C3</cell>
		<cell>C3 信封</cell>
		<cell>324mm</cell>
		<cell>458mm</cell>
	</row>
	<row id="C4">
		<cell>C4</cell>
		<cell>C4 信封</cell>
		<cell>229mm</cell>
		<cell>324mm</cell>
	</row>
	<row id="C5">
		<cell>C5</cell>
		<cell>C5 信封</cell>
		<cell>162mm</cell>
		<cell>229mm</cell>
	</row>
	<row id="C6">
		<cell>C6</cell>
		<cell>C6 信封</cell>
		<cell>114mm</cell>
		<cell>162mm</cell>
	</row>
	<row id="B4">
		<cell>B4</cell>
		<cell>B4 信封</cell>
		<cell>250mm</cell>
		<cell>353mm</cell>
	</row>
	<row id="B5">
		<cell>B5</cell>
		<cell>B5 信封</cell>
		<cell>176mm</cell>
		<cell>250mm</cell>
	</row>
	<row id="B6">
		<cell>B6</cell>
		<cell>B6 信封</cell>
		<cell>176mm</cell>
		<cell>125mm</cell>
	</row>
	<row id="custom">
		<cell>custom</cell>
		<cell>自定义</cell>
		<cell>100mm</cell>
		<cell>100mm</cell>
	</row>
</rows>
      
    </data>  
    <data id="pageInfo" columns="sPageType,sWidth,sHeight,sOrientation,sMarginTop,sMarginBottom,sMarginLeft,sMarginRight,sMarginHeader,sMarginFootter"
      store-type="simple" component="/UI/system/components/data.xbl.xml#data" onValueChanged="pageInfoChanged"/>  
    <xforms:bind nodeset="instance('dirInfo')/sCreateTime" type="xsd:dateTime"/> 
  </xforms:model>  
  <resource> 
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js"/>  
    <xhtml:script> <![CDATA[
			var pageChangingCount = 0;

			function pageInfoChanged(event) {
				if (pageChangingCount == 0) {
					pageChangingCount = 1;
					try {
						if (event.column == 'sOrientation') {
							var pageInfo = justep.xbl('pageInfo');
							var width = pageInfo.getValue('sWidth');
							var height = pageInfo.getValue('sHeight');
							pageInfo.setValue('sWidth', height);
							pageInfo.setValue('sHeight', width);
						}
						else if ((event.column == 'sWidth') || (event.column == 'sHeight')) {
							var pageInfo = justep.xbl('pageInfo');
							pageInfo.setValue('sPageType', 'custom');
						}
					}
					finally {
						pageChangingCount = 0;
					}
				}
			}

			justep.windowDialogReceiver.acceptParentParamsFun = function(event){
				var data = event.data;
				justep.xbl("pageInfo").loadXML(data);
			}

		 	function getPageInfoData() {
		 		xforms.blur(true);
		 		return justep.xbl("pageInfo");
		 	}
			]]> </xhtml:script> 
  </resource>  
  <view> 
    <layout> 
      <xhtml:style>.tr8{height:8px;} .tr30{height:30px;} .td8{width:8px;} .td70{width:70px;} .td140{width:140px;}</xhtml:style>  
      <xhtml:table xmlns="http://www.w3.org/1999/xhtml" border="0" width="100%" height="100%">  
        <xhtml:tr class="tr8"> 
          <xhtml:td/>  
          <xhtml:td/>  
          <xhtml:td/> 
        </xhtml:tr>  
        <xhtml:tr valign="top"> 
          <xhtml:td class="td8"/>  
          <xhtml:td> 
            <xhtml:fieldset> 
              <xhtml:legend>纸张12321</xhtml:legend>  
              <xhtml:table> 
                <xhtml:tr class="tr30"> 
                  <xhtml:td class="td70">类型：</xhtml:td>  
                  <xhtml:td class="td140"> 
                    <xforms:gridselect1 ref="data('pageInfo')/sPageType" auto-size="true"
                      id="test_select"> 
                      <xforms:label ref="sDisplayName"/>  
                      <xforms:value ref="sPageType"/>  
                      <xforms:itemset data="pageType"> 
                        <xforms:column ref="sPageType" visable="false"/>  
                        <xforms:column ref="sDisplayName" visable="true"/>  
                        <xforms:column ref="sWidth" visable="false"/>  
                        <xforms:column ref="sHeight" visable="false"/> 
                      </xforms:itemset>  
                      <xforms:action ev:event="xforms-value-changed"> 
                        <xforms:script> <![CDATA[
													var pageType = justep.xbl("pageType");
													if ((pageType.getCount() > 0) && (pageType.getValue('sPageType') != 'custom')) {
														pageChangingCount = pageChangingCount + 1;
														try {
															var pageInfo = justep.xbl("pageInfo");
															var width = pageType.getValue('sWidth');
															var height = pageType.getValue('sHeight');
															if (pageInfo.getValue('sOrientation') == 'Landscape') {
																pageInfo.setValue('sWidth', height);
																pageInfo.setValue('sHeight', width);
															}
															else {
																pageInfo.setValue('sWidth', width);
																pageInfo.setValue('sHeight', height);
															}
														}
														finally {
															pageChangingCount = pageChangingCount - 1;
														}
													}
													]]> </xforms:script> 
                      </xforms:action> 
                    </xforms:gridselect1> 
                  </xhtml:td> 
                </xhtml:tr>  
                <xhtml:tr class="tr30"> 
                  <xhtml:td class="td70">高度：</xhtml:td>  
                  <xhtml:td class="td140"> 
                    <xforms:input auto-size="true" ref="instance('pageInfo')/sHeight"/> 
                  </xhtml:td>  
                  <xhtml:td class="td70">宽度：</xhtml:td>  
                  <xhtml:td class="td140"> 
                    <xforms:input auto-size="true" ref="instance('pageInfo')/sWidth"/> 
                  </xhtml:td> 
                </xhtml:tr> 
              </xhtml:table> 
            </xhtml:fieldset>  
            <div style="height:1px;"/>  
            <fieldset> 
              <legend>边距</legend>  
              <xhtml:table> 
                <xhtml:tr class="tr30"> 
                  <xhtml:td class="td70">上页边距：</xhtml:td>  
                  <xhtml:td class="td140"> 
                    <xforms:input auto-size="true" ref="instance('pageInfo')/sMarginTop"/> 
                  </xhtml:td>  
                  <xhtml:td class="td70">下页边距：</xhtml:td>  
                  <xhtml:td class="td140"> 
                    <xforms:input auto-size="true" ref="instance('pageInfo')/sMarginBottom"/> 
                  </xhtml:td> 
                </xhtml:tr>  
                <xhtml:tr class="tr30"> 
                  <xhtml:td class="td70">左页边距：</xhtml:td>  
                  <xhtml:td class="td140"> 
                    <xforms:input auto-size="true" ref="instance('pageInfo')/sMarginLeft"/> 
                  </xhtml:td>  
                  <xhtml:td class="td70">右页边距：</xhtml:td>  
                  <xhtml:td class="td140"> 
                    <xforms:input auto-size="true" ref="instance('pageInfo')/sMarginRight"/> 
                  </xhtml:td> 
                </xhtml:tr> 
              </xhtml:table> 
            </fieldset>  
            <div style="height:1px;"/>  
            <fieldset> 
              <legend>方向</legend>  
              <xforms:select1 ref="instance('pageInfo')/sOrientation" class="select_radio"> 
                <xforms:item> 
                  <xforms:label>纵向</xforms:label>  
                  <xforms:value/> 
                </xforms:item>  
                <xforms:item> 
                  <xforms:label>横向</xforms:label>  
                  <xforms:value>Landscape</xforms:value> 
                </xforms:item> 
              </xforms:select1> 
            </fieldset>  
            <div style="height:1px;"/>  
            <fieldset> 
              <legend>页眉页脚</legend>  
              <xhtml:table> 
                <xhtml:tr class="tr30"> 
                  <xhtml:td class="td70">页眉：</xhtml:td>  
                  <xhtml:td class="td140"> 
                    <xforms:input auto-size="true" ref="instance('pageInfo')/sMarginHeader"/> 
                  </xhtml:td>  
                  <xhtml:td class="td70">页脚：</xhtml:td>  
                  <xhtml:td class="td140"> 
                    <xforms:input auto-size="true" ref="instance('pageInfo')/sMarginFootter"/> 
                  </xhtml:td> 
                </xhtml:tr> 
              </xhtml:table> 
            </fieldset> 
          </xhtml:td>  
          <xhtml:td class="td8"/> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td class="td8"/>  
          <xhtml:td> 
            <xhtml:table> 
              <xhtml:tr> 
                <xhtml:td width="250px"/>  
                <xhtml:td width="90px" align="right"> 
                  <xhtml:button onclick="justep.windowDialogReceiver.windowEnsure(getPageInfoData())"
                    style="width:75px">确定</xhtml:button> 
                </xhtml:td>  
                <xhtml:td width="90px" align="right"> 
                  <xhtml:button onclick="justep.windowDialogReceiver.windowCancel()"
                    style="width:75px">取消</xhtml:button> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td>  
          <xhtml:td class="td8"/> 
        </xhtml:tr> 
      </xhtml:table>  
      <!--
			<xhtml:div component="/UI/system/components/xformsInstanceInspector.xbl.xml#xformsInstanceInspector"/>
			--> 
    </layout> 
  </view> 
</window>
