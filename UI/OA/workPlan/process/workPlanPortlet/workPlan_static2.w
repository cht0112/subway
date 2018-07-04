<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:481px;left:29px;"> 
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">workPlan_static.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1" class="xui-tabPanel" style="height:100%;width:100%;"> 
        <xui:tab id="tabPage_bj"> 
          <xui:label id="xuiLabel2">本局</xui:label>  
          <xhtml:table style="height:100%;width:100%;" border="0" cellspacing="0" cellpadding="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr> 
              <xhtml:td style="text-align: center;" valign="top"> 
                <xhtml:div id="textDiv_bj"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabPage_b"> 
          <xui:label id="xuiLabel1">部</xui:label>  
          <xhtml:table style="height:100%;width:100%;" border="0" cellspacing="0" cellpadding="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr> 
              <xhtml:td style="text-align: center;" valign="top"> 
                <xhtml:div id="textDiv_b"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <!--<xui:tab id="tabPage_jxj"> 
          <xui:label id="xuiLabel3">军械局</xui:label>
          <xhtml:table style="height:100%;width:100%;" border="0" cellspacing="0" cellpadding="0"> 
            <xhtml:tr> 
              <xhtml:td style="text-align: center;" valign="top"> 
                <xhtml:div id="textDiv_jxj"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabPage_zjj"> 
          <xui:label id="xuiLabel4">装甲局</xui:label>
          <xhtml:table style="height:100%;width:100%;" border="0" cellspacing="0" cellpadding="0"> 
            <xhtml:tr> 
              <xhtml:td style="text-align: center;" valign="top"> 
                <xhtml:div id="textDiv_zjj"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabPage_ghj"> 
          <xui:label id="xuiLabel5">工化局</xui:label>
          <xhtml:table style="height:100%;width:100%;" border="0" cellspacing="0" cellpadding="0"> 
            <xhtml:tr> 
              <xhtml:td style="text-align: center;" valign="top"> 
                <xhtml:div id="textDiv_ghj"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabPage_ccj"> 
          <xui:label id="xuiLabel6">车船局</xui:label>
          <xhtml:table style="height:100%;width:100%;" border="0" cellspacing="0" cellpadding="0"> 
            <xhtml:tr> 
              <xhtml:td style="text-align: center;" valign="top"> 
                <xhtml:div id="textDiv_ccj"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabPage_zzb"> 
          <xui:label id="xuiLabel7">政治部</xui:label>
          <xhtml:table style="height:100%;width:100%;" border="0" cellspacing="0" cellpadding="0"> 
            <xhtml:tr> 
              <xhtml:td style="text-align: center;" valign="top"> 
                <xhtml:div id="textDiv_zzb"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>--> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="workPlan_static2.js"/>  
    <xhtml:style> <![CDATA[
				.tableClass {
				font-size: 12.5px;
				color: #1f3a87;
				border: none;
				border-spacing: 0px;
				margin: 0;
				padding: 0px;
				width: 100%;
				overflow: hidden;
				table-layout: fixed;
				font-family: "宋体";
			}
			.tableClass tr {
				word-break: keep-all;
			}
			.tableClass tr td a {			
				font-size:12.5px;
				color:#1f3a87;
				white-space: nowrap;
				text-decoration: none;
				display: block;
				width: 100%;
				overflow: hidden;
				-o-text-overflow: ellipsis;
				text-overflow: ellipsis;
				font-family: "宋体";
			}
			.tableClass tr td a:hover {
				text-decoration:underline;
				color:#0A73E9;
				font-size:12.5px;
			}
			.tableClass tfoot tr td {
				text-align: right;
				font-weight: bold;
			}
			]]> </xhtml:style> 
  </xui:resource> 
</xui:window>
