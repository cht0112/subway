<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:205px;left:16px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="ch,id,width,label,type,NO"
      src="" auto-load="false" id="main"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div style="width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid"
      id="mainGrid" data="main" multi-selection="false" space-column="false" class="grid-flat"> 
      <column ref="ch" align="center" label=" " type="ch" width="24"/>  
      <column ref="label" label="显示名称" type="ed" width="130"/>  
      <column ref="width" label="列宽(px)" type="ed" width="60"/>  
      <column ref="id" label="列名" type="ro" width="100"/>  
      <column ref="type" label="类型" type="ro" width="60"/> 
    </xhtml:div>  
    <xui:layout style="width:100%;height:100%"> 
      <xhtml:table cellpadding="0" cellspacing="8" border="0" style="width:100%;height:100%;table-layout:fixed"
        component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:table cellpadding="0" cellspacing="0" style="width:100%;height:100%;table-layout:fixed"
              border="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr height="36px"> 
                <xhtml:td> 
                  <!-- 
                  <place control="toolbars_1" style="width:100%;height:100%"/> 
                   -->  
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
                    id="buttonBar1"> 
                    <xui:place control="trigger1" id="controlPlace1" style="width:68px;"/>  
                    <xui:place control="trigger2" id="controlPlace2" style="width:68px;"/>  
                    <xui:place control="trigger3" id="controlPlace3" style="width:68px;"/>  
                    <xui:place control="trigger4" id="controlPlace4" style="width:68px;"/> 
                  </xhtml:div> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr> 
                <xhtml:td> 
                  <place control="mainGrid" style="width:100%;height:100%;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr style="height:26px"> 
          <xhtml:td> 
            <xforms:trigger id="trigger8" style="float:right;width:75px;" appearance="minimal"> 
              <xforms:label id="default4"><![CDATA[取消]]></xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action2"> 
                <xforms:script id="xformsScript2">justep.windowDialogReceiver.windowCancel();</xforms:script> 
              </xforms:action> 
            </xforms:trigger>  
            <xforms:trigger id="trigger7" style="float:right;margin-right:8px;width:75px;" class="button-green"> 
              <xforms:label id="default3"><![CDATA[确定]]></xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action1"> 
                <xforms:script id="xformsScript1">justep.windowDialogReceiver.windowEnsure(justep.xbl('main'));</xforms:script> 
              </xforms:action> 
            </xforms:trigger>  
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1"
      appearance="image-text" icon-class="icon-system-check" class="button-blue"> 
      <xforms:label id="default1"><![CDATA[全选]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1"><![CDATA[allSelect(true)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2"
      appearance="image-text" icon-class="icon-system-check-empty" class="button-blue"> 
      <xforms:label id="default2"><![CDATA[全取消]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1"><![CDATA[allSelect(false)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3"
      appearance="image-text" class="button-blue" icon-class="icon-system-up"> 
      <xforms:label id="default3"><![CDATA[上移]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1"><![CDATA[move(-1)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4"
      class="button-blue" icon-class="icon-system-down"> 
      <xforms:label id="default4"><![CDATA[下移]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1"><![CDATA[move(1)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger> 
  </xui:view>  
  <xui:resource> 
    <xhtml:style>.img_button { vertical-align:middle; margin: 0px 10px; cursor:default; } .img_button *{ vertical-align:middle; }</xhtml:style>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/windowDialogReceiver.js"/>  
    <xhtml:script type="text/javascript"> <![CDATA[
		    var dataId = '';
			justep.windowDialogReceiver.acceptParentParamsFun = function(event){
				var obj = event.data;
			    if(obj.dataId!=dataId){
				    var mainData = justep.xbl('main');
				    if (mainData.getCount() > 0) return;
			    	dataId = obj.dataId;
					var data = obj.getData();
					var exportCalculate = obj.isExportCalculate();
					var ids = obj.getRelations();
					if (ids.length<=0) {
					    ids = data.getColumnIds();
						ids = ids.split(data.delim);
					}
					for (var i = ids.length-1; i>=0; i--) {
						var colInfo = data.getColumnInfo(ids[i]);
						if ((data.versionRelation!=ids[i]) && ('space-column'!=ids[i]) && (exportCalculate || ('EXPRESS' != colInfo.define))) {
							var l = obj.getRelationLabel(ids[i]);	
							var values = ['1',(l?l:colInfo.label),obj.getRelationWidth(ids[i]),ids[i],colInfo.type,(i+1)+''];	
							mainData.insert(i+'',0,values);	
						}
					}
					if(obj.isExportKey()) mainData.insert(mainData.createUUID(),0,['1',data.getConceptName(),'','主键','key','0']);
				}
			};
			function allSelect(selected){
				var data = justep.xbl('main');
				var grid = data.getStore();
				var len = data.getCount();
				var value = selected?'1':'0';
				for(var i=0; i<len; i++){
					grid.setValueByName('ch',value,i);
				}
			}
			function move(v){
				var data = justep.xbl('main');
				var grid = data.getStore();
				grid.moveRowPro(v);
			}
		]]> </xhtml:script> 
  </xui:resource> 
</xui:window>
