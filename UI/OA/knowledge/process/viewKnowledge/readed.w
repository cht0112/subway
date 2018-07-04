<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="readed.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource>  
  <xforms:model id="model1" style="top:90px;left:210px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dReaded" concept="OA_KM_READERS"> 
      <reader action="/OA/knowledge/logic/action/queryKMREADERSAction"/>  
      <rule id="dataBizRule1" concept="OA_KM_READERS" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrReaded"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgReaded" data="dReaded"> 
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="barItem14"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vReaded"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdReaded" data="dReaded"> 
        <column label="" ref="recNo" show-index="true"/>  
        <column id="gridColumn1" ref="fReaderName" label="姓名" type="ro" width="100"/>  
        <column id="gridColumn2" ref="fReadTime" label="阅文时间" type="dateTime" width="120"/> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;" id="layout1"> 
        <place control="grdReaded" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table style="width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="height:30px"> 
            <place control="tbrReaded" id="controlPlace1" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vReaded" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>
