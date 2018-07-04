<?xml version="1.0" encoding="utf-8"?>

<!-- 在该页面设置了两个grid，一个grid用来显示领导人员，一个用来显示领导的日程。这两个grid都是隐藏的 -->
<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:345px;left:188px;"> 
    <!-- 一个视图，用来展示领导的日程。 -->  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="true" id="showData" concept="OA_v_especialSchedule"> 
      <reader id="default1" action="/OA/schedule/logic/action/queryOA_v_especialScheduleAction"/> 
    </data>  
    <!-- 设置一个临时的data，用来保存页面的工具栏的一些数据 -->  
    <data component="/UI/system/components/data.xbl.xml#data" columns="fDate0,fDate1,fDate2,fYear,fWeekNum,fWeekOrMonth,fWeekOrMonthName,fWeekOrMonthCode"
      src="" store-type="simple" auto-load="true" id="tempData" auto-new="false"> 
      <rule id="dataRule1" column="fDate0" type="xsd:date"/>  
      <rows xmlns="" id="default5">  
        <row id="default6"> 
          <cell id="default7"/>  
          <cell id="default8"/>  
          <cell id="default9"/>  
          <cell id="default10"/>  
          <cell id="default11"/>  
          <cell id="default12"/>  
          <cell id="default13"/>  
          <cell id="default14"/> 
        </row> 
      </rows> 
    </data>  
    <!-- 领导人员的data -->  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="true" id="personData" concept="OA_SD_especialSchedulePerson"> 
      <creator id="default2" action="/OA/schedule/logic/action/createEspecialSchedulePersonAction"/>  
      <reader id="default3" action="/OA/schedule/logic/action/queryEspecialSchedulePersonAction"/>  
      <writer id="default4" action="/OA/schedule/logic/action/saveEspecialSchedulePersonAction"/> 
    </data>  
    <data id="weekOrMonthData" store-type="simple" component="/UI/system/components/data.xbl.xml#data"
      src="" columns="fWeekOrMonth,fWeekOrMonthCode"> 
      <rows xmlns="">  
        <row> 
          <cell>按周查看</cell>  
          <cell>week</cell> 
        </row>  
        <row> 
          <cell>按月查看</cell>  
          <cell>month</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">mainActivity.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view auto-load="true" id="v_tempData" class="xui-container"> 
      <xforms:output id="inputYear" ref="data('tempData')/fYear"/>  
      <xforms:output id="inputWeekNum" ref="data('tempData')/fWeekNum"/>  
      <xforms:output id="inputDate1" ref="data('tempData')/fDate1" format="yyyy-MM-dd"/>  
      <xforms:output id="inputDate2" format="yyyy-MM-dd" ref="data('tempData')/fDate2"/>  
      <xforms:input id="inputDate0" ref="data('tempData')/fDate0" format="yyyy-MM-dd"> 
        <xforms:action id="action2" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript2">mainActivity.inputDate0Change(event)</xforms:script> 
        </xforms:action> 
      </xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" ref="data('tempData')/fWeekOrMonth"
        label-ref="data('tempData')/fWeekOrMonthName" id="weekOrMonthSelect" auto-size="true"
        onCloseup="mainActivity.weekOrMonthSelectCloseup"> 
        <xforms:label ref="fWeekOrMonth" id="htmlLabel_10"/>  
        <xforms:value ref="fWeekOrMonthCode"/>  
        <xforms:itemset data="weekOrMonthData" auto-load-data="true"> 
          <xforms:column ref="fWeekOrMonth" width="28" id="default34"/>  
          <xforms:column ref="fWeekOrMonthCode" visible="false" id="default35"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <layout id="layout1" style="height:100%;width:100%;"> 
        <xhtml:table> 
          <xhtml:tr> 
            <xhtml:td style="width:80px">选择日期:</xhtml:td>  
            <xhtml:td style="width:114px;"> 
              <xui:place control="inputDate0" style="width:100px"/> 
            </xhtml:td>  
            <xhtml:td width="5px" style="width:5px;"/>  
            <xhtml:td> 
              <xui:place control="inputYear"/> 
            </xhtml:td>  
            <xhtml:td style="width:40px;">年第</xhtml:td>  
            <xhtml:td style="width:15px"> 
              <xui:place control="inputWeekNum"/> 
            </xhtml:td>  
            <xhtml:td>周</xhtml:td>  
            <xhtml:td width="5px"/>  
            <xhtml:td style="width:90px;">起始时间：</xhtml:td>  
            <xhtml:td style="width:76px;"> 
              <xui:place control="inputDate1"/> 
            </xhtml:td>  
            <xhtml:td>至：</xhtml:td>  
            <xhtml:td style="width:90px"> 
              <xui:place control="inputDate2"/> 
            </xhtml:td>  
            <!--  
            <xhtml:td width="48px" style="width:32;"/>  
            -->  
            <xhtml:td> 
              <xui:place control="weekOrMonthSelect"/> 
            </xhtml:td> 
          </xhtml:tr> 
        </xhtml:table> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="noneView" class="xui-container"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        id="personOfGrid" data="personData"> 
        <xui:column id="gridColumn1" ref="fExecutorID" label="执行人" type="ed" width="100"/>  
        <xui:column id="gridColumn2" ref="fExecutorName" label="执行人姓名" type="ed" width="100"/>  
        <xui:column id="gridColumn3" ref="fOrderNum" label="顺序号" type="ed" width="100"/> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        id="showDataGrid" data="showData"> 
        <xui:column id="gridColumn4" ref="fScheduleID" label="领导日程ID" type="ed" width="100"/>  
        <xui:column id="gridColumn5" ref="fTitle" label="主题" type="ed" width="100"/>  
        <xui:column id="gridColumn6" ref="fExecutorName" label="执行人姓名" type="ed" width="100"/>  
        <xui:column id="gridColumn7" ref="fExecutorID" label="执行人" type="ed" width="100"/>  
        <xui:column id="gridColumn8" ref="fContent" label="内容" type="ed" width="100"/>  
        <xui:column id="gridColumn9" ref="fEndDatePart" label="结束时间日期部分" type="ed"
          width="100"/>  
        <xui:column id="gridColumn10" ref="fEndTime" label="结束时间" type="ed" width="100"/>  
        <xui:column id="gridColumn11" ref="fDate" label="日期" type="ed" width="100"/> 
      </xhtml:div>  
      <layout id="layout2"> 
        <xui:place control="personOfGrid" id="controlPlace2" style="width:200px;height:100px;"/>  
        <xui:place control="showDataGrid" id="controlPlace3" style="width:200px;height:100px;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:table style="width:750px" border="0" cellspacing="0"> 
        <xhtml:tr> 
          <xhtml:td style="display:none"> 
            <xui:place control="noneView" id="myView"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td height="5px"/> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td style="font-size:20px;font-weight:bold;width:750px;" align="center">领导日程查看
            <br/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td style="width:100%;height:30px;"> 
            <xui:place control="v_tempData" id="tempView"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:table id="tbShow" border="0" cellspacing="0" width="750px"> 
              <xhtml:thead> 
                <xhtml:tr bgcolor="rgb(179,218,255)" id="trShow" style="font-size:13px;font-weight:bold;"> 
                  <th scope="col" id="Week0" class="th_tl">姓名</th>  
                  <th scope="col" id="Week1" class="th_tr">星期一</th>  
                  <th scope="col" id="Week2" class="th_tr">星期二</th>  
                  <th scope="col" id="Week3" class="th_tr">星期三</th>  
                  <th scope="col" id="Week4" class="th_tr">星期四</th>  
                  <th scope="col" id="Week5" class="th_tr">星期五</th>  
                  <th scope="col" id="Week6" class="th_tr">星期六</th>  
                  <th scope="col" id="Week7" class="th_tr">星期日</th> 
                </xhtml:tr> 
              </xhtml:thead>  
              <xhtml:tbody> 
                <xhtml:tr style="height:0" id="trShowT"/> 
              </xhtml:tbody> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <!--  
      <xui:place control="input" id="controlPlace3" style="width:27px;"/>  
      <xui:place control="input3" id="controlPlace4"/>  
      <xui:place control="input4" id="controlPlace5"/>  
      <xui:place control="input5" id="controlPlace6"/> 
    -->  
      <!--<xui:place control="noneView" id="controlPlace1"/> 
    --> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:style>  
		
			.t_1  {font: normal;font-size: 13px; 
			BORDER-Left: black 1px
			solid; BORDER-Top: black 1px solid;
			BORDER-Right: black 1px solid;
			BORDER-Bottom: black 1px solid;
			margin-left:10px;margin-right:0px;
			padding-left:10px;padding-right:0px;}
			
			.t_tl  {font: normal;font-size:
			13px; 
			BORDER-Left: black 1px solid; BORDER-Top: black 1px solid;
			BORDER-Right: black 1px solid; BORDER-Bottom: black 1px solid;
			margin-left:10px;margin-right:0px;
			padding-left:10px;padding-right:0px;}
			
			.t_tr  {font: normal;font-size:
			13px; 
			BORDER-Top: black 1px solid;
			BORDER-Right: black 1px solid;
			margin-left:10px;margin-right:0px;
			padding-left:10px;padding-right:0px;}
			
			.th_tl  {font: normal;font-size:
			13px; 
			BORDER-Right: black 1px dotted; BORDER-Bottom: black 1px dotted;
			margin-left:2px;margin-right:0px;
			padding-left:2px;padding-right:0px;
			width:48px;
			height:40px;
			}
			
			.th_tr0  {font: normal;font-size: 13px; 
			BORDER-Top: black 1px
			solid;
			BORDER-Right: black 1px solid; BORDER-Bottom: black 1px solid;
			margin-left:10px;margin-right:0px;
			padding-left:10px;padding-right:0px;}
			
			.th_tr  {font: normal;font-size:
			13px; 
			BORDER-Top: black 0px dotted;
			BORDER-Right: black 1px dotted;
			BORDER-Bottom: black 1px dotted;
			margin-left:10px;margin-right:0px;
			padding-left:10px;padding-right:0px;
			width:110px;
			height:40px;
			text-align:center;
			}
			
			.t_bl  {font:
			normal;font-size: 14px; 
			BORDER-Left: black 1px dotted; 
			BORDER-Right: black
			1px dotted;BORDER-Bottom: black 1px dotted;
			margin-left:2px;margin-right:0px;
			background-color:rgb(179,218,255);
			padding-left:4px;padding-right:0px;}
			
			.t_bl_0  {font: normal;font-size:
			13px; 
			BORDER-Left: black 1px solid; 
			BORDER-Right: black 1px
			solid;BORDER-Bottom: black 1px solid;
			margin-left:10px;margin-right:0px;
			background-color:rgb(179,218,255);
			padding-left:10px;padding-right:0px;}
			
			.t_br  {font: normal;font-size:
			13px; font-color: #00BB00;
			BORDER-Right: black 1px dotted; BORDER-Bottom:
			black 1px dotted;
			margin-left:2px;margin-right:0px;
			padding-left:2px;padding-right:0px;
			text-align:center;
			}
			
			.t_br1  {font: normal;font-size:
			13px; 
			BORDER-Right: black 1px solid; BORDER-Bottom: black 1px solid;
			margin-left:10px;margin-right:0px;
			padding-left:10px;padding-right:0px;}
			
			.t_br2  {font: normal;font-size:
			13px; 
			BORDER-Right: black 1px solid; BORDER-Bottom: black 1px solid;
			background-color: rgb(211,218,222);
			margin-left:10px;margin-right:0px;
			padding-left:10px;padding-right:0px;}
			
			<!-- 下面的CSS样式操作按月查看时的样式 -->
			.t_month_th  {font:
			normal;font-size: 13px; 
			BORDER-Left: black 1px dotted; 
			BORDER-Right: black
			1px dotted;BORDER-Bottom: black 1px dotted;
			margin-left:2px;margin-right:0px;
			background-color:rgb(179,218,255);
			padding-left:4px;padding-right:0px;
			width:110px;}
		</xhtml:style>
  </xui:resource> 
</xui:window>
