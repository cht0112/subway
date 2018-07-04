<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:426px;height:auto;left:44px"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="fid,fname" auto-load="true" id="data1" store-type="simple"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="to_right,to_left" auto-load="true" id="data2" store-type="simple" style=";"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataBizRule1" column="to_right" readonly="not(call('allowToRight'))"/>  
      <rule id="dataBizRule2" column="to_left" readonly="not(call('allowToLeft'))"/> 
    </data>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript5">model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" style="width:100%;height:100%;"> 
    <xhtml:div id="orgMemberTree" height="100%" component="/UI/system/components/orgTree.xbl.xml#orgTree" include-disable="false"> 
      <data id="orgTreeData" component="/UI/system/components/data.xbl.xml#bizData" auto-load="true"/>  
      <xhtml:div height="100%" width="100%" style="background-color: white; overflow: auto" component="/UI/system/components/grid.xbl.xml#grid" appearance="tree" data="orgTreeData" onRowDblClick="addCurrentExecutor" onAfterIndexChanged="refreshRule"> 
        <column ref="sName" type="tree" readonly="true"/> 
      </xhtml:div> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid1" data="data1" onRowDblClick="removeCurrentExecutor"> 
      <xui:column id="gridColumn1" ref="fid" label="fid" type="ed" width="100" visible="false" readonly="true"/>  
      <xui:column id="gridColumn2" ref="fname" label="执行者名称" type="ed" width="*" readonly="true" style=";"/> 
    </xhtml:div>  
    <xforms:trigger id="trigger3" ref="data('data2')/to_right" class="custom_button"> 
      <xforms:label id="xuiLabel3"> 
        <xhtml:b>&gt;</xhtml:b> 
      </xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action3"> 
        <xforms:script id="xformsScript1">trigger3Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trigger4" ref="data('data2')/to_left" class="custom_button"> 
      <xforms:label id="xuiLabel4"> 
        <xhtml:b>&lt;</xhtml:b> 
      </xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action4"> 
        <xforms:script id="xformsScript2">trigger4Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trigger5" class="custom_button"> 
      <xforms:label id="xuiLabel5">确定</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action5"> 
        <xforms:script id="xformsScript3">trigger5Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trigger6" class="custom_button"> 
      <xforms:label id="xuiLabel6">取消</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action6"> 
        <xforms:script id="xformsScript4">trigger6Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xui:layout style="width:100%;height:100%;" id="rootLayout"> 
      <xhtml:table id="table1" style="width:100%; height:100%; table-layout: fixed;" border="0" cellspacing="0" cellpadding="0"> 
        <xhtml:tr height="8px"> 
          <xhtml:td width="8px"/>  
          <xhtml:td width="200px"/>  
          <xhtml:td width="35px"/>  
          <xhtml:td/>  
          <xhtml:td width="8px"/> 
        </xhtml:tr>  
        <xhtml:tr id="default1" valign="top"> 
          <xhtml:td/>  
          <xhtml:td id="td1" style="border: 1px solid #c8c8c8;"> 
            <xhtml:table border="0" cellpadding="0" cellspacing="0" style="width: 100%; height: 100%; table-layout: fixed" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr valign="top"> 
                <xhtml:td height="30px"> 
                  <xhtml:div style="height: 100%; border-bottom: 1px solid gray; padding-top: 5px"> 
                    <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" class="no-editor-border"> 
                      <xhtml:tr height="21px" valign="bottom"> 
                        <xhtml:td width="70px" style="padding-bottom: 2px; font-size: 10pt; text-indent: 3px;">快速查询：</xhtml:td>  
                        <xhtml:td style="border-bottom: 1px solid #c0c0c0;"> 
                          <xhtml:input type="text" id="flow_to_query_input" style="width: 100px; border: none" onkeydown="flowToFilterInputKeydown(event);"/> 
                        </xhtml:td>  
                        <xhtml:td width="20px" style="padding-bottom: 2px"> 
                        	  
                          <xforms:trigger appearance="image" src="/UI/system/images/flow/select0.gif"> 
                            <xforms:label>查询</xforms:label>  
                            <xforms:action ev:event="DOMActivate"> 
                              <xforms:script> <![CDATA[
	          										filterOrgTreeData();
	          									]]> </xforms:script> 
                            </xforms:action> 
                          </xforms:trigger>
                           
                        </xhtml:td> 
                      </xhtml:tr> 
                    </xhtml:table> 
                  </xhtml:div> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr valign="top"> 
                <xhtml:td> 
                  <xui:place control="orgMemberTree" style="width:100%;height:100%"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td>  
          <xhtml:td id="td2" align="center" valign="middle"> 
            <xui:place control="trigger3" id="controlPlace3" style="width:30px;"/>  
            <br/>  
            <xui:place control="trigger4" id="controlPlace4" style="width:30px;"/> 
          </xhtml:td>  
          <xhtml:td id="td3"> 
            <xui:place control="grid1" id="controlPlace5" style="width:100%;height:100%;"/> 
          </xhtml:td>  
          <xhtml:td/> 
        </xhtml:tr>  
        <xhtml:tr valign="bottom"> 
          <xhtml:td height="30px"/>  
          <xhtml:td colspan="3" style="border: 0px;height:30px">
          	<xhtml:div style="width: 100%; text-align: right;" > 
              <xui:place control="trigger6" id="controlPlace6" style="float:right" />  
              <xhtml:div style="width: 10px; display: inline"/>  
              <xui:place control="trigger5" id="controlPlace5" style="float:right;margin-right:8px;" /> 
            </xhtml:div>
             
          </xhtml:td>  
          <xhtml:td/> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td height="8px"/>  
          <xhtml:td height="8px"/>  
          <xhtml:td height="8px"/>  
          <xhtml:td height="8px"/>  
          <xhtml:td height="8px"/> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="multiOrgPersonSelector.js"/>  
    <xhtml:style text="text/css"> <![CDATA[
    	.custom_button { 
    		margin: 0; 
    		width: 75px; 
    	}
    	.custom_button button {
    		display: inline;
    		height: 23px;
    		_height: 24px;
    	}
    ]]> </xhtml:style> 
  </xui:resource> 
</xui:window>
