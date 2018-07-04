var mainActivity = {};
var sFontColor1="#5F9EA0";
var sFontColor2="#5F9EA0";
var sFontColor3="#5F9EA0";
var sBgColor1="rgb(194,213,252)";
var sBgColor2="#5F9EA0";
var sBgColor3="#5F9EA0";
var sBgColor4="#5F9EA0";
var sTitleExp="(tempDate.getMonth()+1)+'月'+(tempDate.getDate())+'日'";
/**

  页面加载完毕就设置工具栏的数据。
 
 *  
阿
  ** 
************ *************
  ///           
********************

  */
mainActivity.model1Load = function(event){
   	setCurrTime();   
};
var tempDateOfBeginDate;
var tempDateOfEndDate;
window.putData = function(ss) {
	var flag = justep.xbl('tempData').getValue("fWeekOrMonthCode");
	var  dg = justep.xbl("showDataGrid").grid;
	var testTable = document.getElementById("tbShow");
	var bodies = testTable.tBodies;
	var aBody = null;
	if (bodies) {
		aBody = bodies[0];
		if (aBody) { /* document.getElementById("2CEEE6DAF0FF402EBC51199E4E1DFE7B_2010-09-01") */
			var num = dg.getRowsNum();
			var aIds = [];
			var aDates = [];
			var bDates = [];
			var fTitles = [];
			var fExecutorName = [];
			var fBeginTimePart = [];
			var fEndTimePart = [];
			for (var i = 0; i < num; i++) {
				aIds[aIds.length] = dg.getValueByName('fExecutorID', i); // 得到当前人gird的一个主键值。
				aDates[aDates.length] = dg.getValueByName('fDate', i); // 得到日程的开始时间。
				bDates[bDates.length] = dg.getValueByName('fEndTime', i)
						.substring(0, 10);// 得到日程的结束时间。
				
				fTitles[fTitles.length] = dg.getValueByName('fTitle', i);
				fExecutorName[fExecutorName.length] = dg.getValueByName('fExecutorName', i);
				fBeginTimePart[fBeginTimePart.length] = dg.getValueByName('fBeginTimePart', i);
				fEndTimePart[fEndTimePart.length] = dg.getValueByName('fEndTimePart', i);
			}
			var minDate ,  maxDate;
			if(flag=='week'){
			   minDate = justep.xbl('tempData').getValue("fDate1");
			   maxDate = justep.xbl('tempData').getValue("fDate2");
			}else{
			   var date = justep.xbl('tempData').getValue("fDate0");
               var months;
			   var dateAry = date.split("-");
               var year = (Number)(dateAry[0]);
               var month = ((Number)(dateAry[1]));
               var d = new Date(year,month,0); 
               var dayNumber =  d.getDate(); 	
               if(month<=9){
               	   months="0"+month;
               }else{
               	   months=month;
               }
                maxDate = year+"-"+months+"-"+dayNumber;
                minDate = year+"-"+months+"-"+"01";
			 }
           for(var i=0 ; i<bDates.length;i++){
             	 if(bDates[i]>maxDate){
             	   bDates[i]=maxDate;
             	 }
             	 if(aDates[i]<minDate){
             		aDates[i]=minDate;
             	}    
             }
			for (p = 0; p < num; p++) {
				if(aDates[p] <= bDates[p]){
					var aId = aIds[p];
					var aDate = aDates[p];
					var bDate = bDates[p];
					var fId = aId + "_" + aDate;
					var delIds = "";
					var colspan = 0;
					while (bDate>=aDate) {
						colspan++;
						var tempId = aId + "_" + aDate;
						var aText = document.getElementById(fId).innerHTML;
						if (aText == "&nbsp;") {
							aText = "";
						} 
						aText=aText+"<table width='100%'><tr><td><tr><nobr>"+ "["+dg.getValueByName('fBeginTimePart',p)+"-"+dg.getValueByName('fEndTimePart',p)+"]"+"</nobr></tr><tr><nobr>"+dg.getValueByName('fTitle',p)+"</nobr><tr></td></tr></table>"; 
						//aText=aText+"<table width='100%'><tr><td>"+ "["+dg.getValueByName('fBeginTimePart',p)+"-"+dg.getValueByName('fEndTimePart',p)+"]"+dg.getValueByName('fExecutorName',p)+"安排 "+dg.getValueByName('fTitles',p) + "</td></tr></table>"; 
						//aText += "<div>" + "["+fBeginTimePart[p]+"-"+fEndTimePart[p]+"]"+fExecutorName[p]+"安排 "+fTitles[p] + "</div>";
						document.getElementById(tempId).innerHTML = aText;
						document.getElementById(tempId).style.backgroundColor = "rgb(000,241,244)";
						if (fId != tempId) {
							if (delIds)
								delIds += "," + tempId;
							else
								delIds = tempId;
						}
						var str = aDate;
						var d = new Date(str.substring(0,4),""+(Number(str.substring(5,7))-1),str.substring(8));
						var d2 = new Date(d.getTime() + 24*60*60*1000);
						var tt = d2.getDate();
						aDate = d2.getYear() + "-" + (d2.getMonth()>=9?(d2.getMonth()+1):('0'+(d2.getMonth()+1))) + "-"
								+ (d2.getDate()>=10?d2.getDate():("0"+d2.getDate()));
					 }
					var ids = delIds.split(",");
				    if(ids!=""){
					for (var i = 0; i < ids.length; i++) {
						var dom = document.getElementById(ids[i]);
						dom.parentNode.removeChild(dom);
					}
				   }
					document.getElementById(fId).setAttribute("colspan", colspan);
					if(flag=='week'){
					document.getElementById(fId).width=110*colspan;	
					}
					document.getElementById(fId).style.backgroundColor="rgb(193,255,239)";
					document.getElementById(fId).setAttribute("align",'center'); 
					var table = document.getElementById(fId).parentNode.parentNode.parentNode;
					var tableStr = table.outerHTML;
					var tableParent = table.parentNode;
					tableParent.removeChild(table);
				    tableParent.innerHTML = tableParent.innerHTML + tableStr;
				}
			 }
		   }
	  }

};
window.aDList = new Array();
window.getWeekNum = function(dd) {
	var aYear = dd.getYear();
	var d0 = new Date(aYear, 0, 1);
	var d0Day = d0.getDay();
	if (d0Day == 0) {
		d0Day = 7;
	}
	if (d0Day != 1) {
		d1 = DateUtils.incDate(d0, 8 - d0Day, 'd');
	} else {
		d1 = d0;
	}
	var x = Math.round((dd.valueOf() - d1.valueOf()) / 86400000);
	var xw = x / 7 + 1;
	return Math.floor(xw);
};
window.setDate = function() {
   var tempData = justep.xbl("tempData");
   var flag = tempData.getValue("fWeekOrMonthCode");
   var d1 = tempData.getValue("fDate0");
   var d1toDate  = justep.Date.fromString(d1, "yyyy-MM-dd");
   var aYear = d1toDate.getYear();
   var  currentDay=d1toDate.getDay();
   if(currentDay==0){currentDay=7;}
   var mondayTime=d1toDate.getTime()-(currentDay-1)*24*60*60*1000;
   var sundayTime=d1toDate.getTime()+(7-currentDay)*24*60*60*1000;
   var mondayDate =justep.Date.toString( new Date(mondayTime), 'yyyy-MM-dd');
   var sundayDate =justep.Date.toString( new Date(sundayTime), 'yyyy-MM-dd');
   var iWeekNum = getWeekNumber(d1toDate);
   var dateAry = d1.split("-");
   tempDateOfBeginDate = mondayDate;
   tempDateOfEndDate = sundayDate;
	if(flag=='week'){
	tempData.setValue('fDate1', mondayDate);
	tempData.setValue('fDate2', sundayDate);
	tempData.setValue('fYear', aYear);
	tempData.setValue('fWeekNum', iWeekNum);
	  for (i = 0; i < 7; i++) { 
	  var tempDate;
	  var newDate = new Date(mondayTime+(24*60*60*1000*i));
	  var tempDate=newDate;
	  aDList[i] =justep.Date.toString(newDate, "yyyy-MM-dd");
	  var sTemp = "Week" + (i + 1);
	  eval("var ss=" + sTitleExp + ";");
	  document.getElementById(sTemp).innerHTML = ss + " " + aWList[i]; 
	  }
	}else{
	
	var date= tempData.getValue("fDate0");
    tempData.setValue('fDate0', date);
    var dateAry = date.split("-");
    var year = (Number)(dateAry[0]);
    var month = ((Number)(dateAry[1]));
    var d = new Date(year,month,0); 
    var dayNumber =  d.getDate(); 
     tempData.setValue('fDate1', dateAry[0]+"-"+dateAry[1]+"-"+"01");
	 tempData.setValue('fDate2', dateAry[0]+"-"+dateAry[1]+"-"+dayNumber);
	 tempData.setValue('fYear', dateAry[0]);
	 tempData.setValue('fWeekNum', iWeekNum);
	}
};
window.addRow = function() {
	var flag =  justep.xbl("tempData").getValue("fWeekOrMonthCode");
    if(flag=='week'){
	var testTable = document.getElementById("tbShow");
	var bodies = testTable.tBodies;
	var aBody = null;
	if (bodies) {
		aBody = bodies[0];
	}
	var dg = justep.xbl("personOfGrid").grid;
	var rowstr;
	if (aBody) {
		for (p = 0; p < dg.getRowsNum(); p++) {
			var row = document.createElement("tr"); // 根据人员表的数量，创建TR标记。
			if (p % 2 > 0) {
				row.style.backgroundColor = "rgb(236,241,244)"; // 对奇数行的TR设置底色。
			}
			row.height = "40px";
			var cell0 = document.createElement("td");
			cell0.setAttribute("className", "t_bl");
			var str = dg.getValueByName('fExecutorName', p);
			if(str.length==2){
				var str1 = str.substring(0,1);
				var str2 = str.substring(1,2);
				str =str1+'&nbsp;&nbsp;'+str2;
			}
			cell0.innerHTML = str;
			cell0.style.backgroundColor = "rgb(179,218,255)";
			cell0.style.border="black dotted";
			cell0.style.borderWidth="0px 1px 1px 0px";
			row.appendChild(cell0);
			for (var i = 0; i < 7; i++) {
				cell = document.createElement("td");
				cell.width=110;
				cell.setAttribute("className", "t_br");
				cell.id = dg.getValueByName('fExecutorID', p) + "_" + aDList[i]; // 给每一行的TD赋ID值。值为主键_日期。
				str = "&nbsp;";
				cell.innerHTML = str;
				cell.style.border="black dotted";
				cell.style.borderWidth="0px 1px 1px 0px";
				row.appendChild(cell);
			}
			aBody.insertBefore(row);
	    	}
	  }
    }else{
    	addRowOfMonth();
    }
};
window.clearRow = function() {
	var testTable = document.getElementById("tbShow");
	var bodies = testTable.tBodies;
	var aBody = null;
	if (bodies) {
		aBody = bodies[0];
		if (aBody) {
			var l = aBody.rows.length; 
			for (i = 0; i < l; i++) {
				aBody.removeChild(aBody.rows[0]);
			}
		}
	}
};
window.gridUpdate = {
	setDD : setDate,
	drawGrid : function() {
		clearRow();
		addRow();
	},
	putData : function(ss) {
		putData(ss);
	}
};
function  setCommDataValue(value){
	
	commonUtils.setValueToInstance('tempData', 'fWeekOrMonthCode',value);
}

/**
*****************************************************************
  当按月查看是，按照下面方法给table添加列
****************************************************************
*/
function addRowOfMonth(){	
	var table =null;
	var date = 	justep.xbl("tempData").getValue('fDate0');
    var dateAry = date.split("-");
    var year = (Number)(dateAry[0]);
    var month = ((Number)(dateAry[1]));
    var d = new Date(year,month,0); 
    var dayNumber =  d.getDate(); 
    var testTable = document.getElementById("tbShow");
    testTable.width="2500px";
	var tableTitle =  document.getElementById("trShow");
	if(tableTitle!=null){     		
	table = tableTitle.parentNode;
	table.removeChild(tableTitle);	
	}else{
	  table = document.getElementById("trShowT").parentNode.parentNode;
	}
	var bodies = testTable.tBodies;
	var dayS = null;
	var monthS=null;
	var monthAndDay=null;
	var dateArray = [dayNumber];
	var daeeArrayOfTH = [dayNumber];
	var yearMonthDay = null;
	for(var i=1;i<=dayNumber;i++){
		if(i<=9){
		   dayS = "0"+i.toString();
		}else{
		  dayS = i.toString();
		}		
		if(month<=9){
			 monthS="0"+month.toString();		
		}else{
			monthS=month.toString();
		}
	    monthAndDay = monthS+"月"+dayS+"日";
		yearMonthDay = year.toString()+"-"+monthS+"-"+dayS;
		daeeArrayOfTH[i-1]=monthAndDay;
	    dateArray[i-1]=yearMonthDay;	
	}	
	var aBody = null;
	if (bodies) {
		aBody = bodies[0];
	}	
	var row1 = document.createElement("tr");
	row1.style.backgroundColor = "rgb(179,218,255)";
	row1.height="40px";
	row1.id="trShow";
	var th = document.createElement("th");
	th.innerHTML="姓名";
    th.setAttribute("className", "th_tl");
    th.style.border="black dotted";
	th.style.borderWidth="0px 1px 1px 0px";
	row1.appendChild(th);
	for(var i=0; i<dayNumber;i++){
		var th = document.createElement("td");
	th.innerHTML=daeeArrayOfTH[i];
	th.setAttribute("className", "t_br");
	th.style.border="black dotted";
	th.style.borderWidth="0px 1px 1px 0px";
		row1.appendChild(th);
	}
	table.appendChild(row1);
	var dg = justep.xbl("personOfGrid").grid;
	if (aBody) { 
		for (p = 0; p < dg.getRowsNum(); p++) {
			var row = document.createElement("tr"); // 根据人员表的数量，创建TR标记。
			if (p % 2 > 0) {
				row.style.backgroundColor = "rgb(236,241,244)"; // 对奇数行的TR设置底色。
			}
			row.height = "40px";
			var cell0 = document.createElement("td");
			cell0.setAttribute("className", "t_month_th");
			var str = dg.getValueByName('fExecutorName', p);
			cell0.innerHTML = str;
			cell0.style.backgroundColor = "rgb(179,218,255)";
			cell0.style.border="black dotted";
			cell0.style.borderWidth="0px 1px 1px 0px";
			row.appendChild(cell0);
			for (var i = 0; i < dayNumber; i++) {
				cell = document.createElement("td");
				cell.setAttribute("className", "t_br");
				cell.id = dg.getValueByName('fExecutorID', p) + "_" + dateArray[i]; // 给每一行的TD赋ID值。值为主键_日期。
				str = "&nbsp;";
				cell.innerHTML = str;
				cell.style.border="black dotted";
				cell.style.borderWidth="0px 1px 1px 0px";
				row.appendChild(cell);
			}
			aBody.insertBefore(row);	
		}
	}	
}
  /**
  ***************
  当改变查看方式时，调用
 ****************
  */
function checkWayChange(fWeekOrMonth){
	if(fWeekOrMonth=='month'){
		justep.xbl('tempData').setValue('fWeekOrMonthCode',fWeekOrMonth);
		refreshData();
	}else if(fWeekOrMonth=='week'){
		justep.xbl('tempData').setValue('fWeekOrMonthCode',fWeekOrMonth);
   	     var table  = null;
   	     var testTable = document.getElementById("tbShow");
   	     testTable.width="750px";
         var tableTitle =  document.getElementById("trShow");
	if(tableTitle!=null){     		
	     table = tableTitle.parentNode;
	     table.removeChild(tableTitle);	
	}else{
	  table = document.getElementById("trShowT").parentNode.parentNode;
	  table.removeChild(tableTitle);
	    }
	  var row = document.createElement("tr");
	  row.id='trShow';
	  row.style.backgroundColor="rgb(179,218,255)";
	  row.height="40px";
	  var name = document.createElement("th");
	  name.innerHTML='姓名';
	  name.setAttribute("className","th_tl");
	  name.style.border="black dotted";
	  name.style.borderWidth="0px 1px 1px 0px";
	  name.id="Week0";
	  row.appendChild(name);
	  for(var i=1; i<=7;i++){
	  	 var th = document.createElement("th");
	  	   th.setAttribute("className","th_tr");
	  	   th.style.border="black dotted";
		   th.style.borderWidth="0px 1px 1px 0px";
	  	   th.id="Week"+i;
	  	   if(i==1){th.innerHTML='星期一';}
	  	   if(i==2){th.innerHTML='星期二';}
	  	   if(i==3){th.innerHTML='星期三';}
	  	   if(i==4){th.innerHTML='星期四';}
	  	   if(i==5){th.innerHTML='星期五';}
	  	   if(i==6){th.innerHTML='星期六';}
	  	   if(i==7){th.innerHTML='星期日';}
	  	   row.appendChild(th);
	   }
	   table.width="750";
	   table.appendChild(row);   
	   refreshData();
	} 
}
	/**
	 * <xhtml:tr bgcolor="rgb(179,218,255)" style="height:30" id="trShow">
	 * <th scope="col" id="Week0" class="th_tl">姓名</th>
	 * <th scope="col" id="Week1" class="th_tr">星期一</th>
	 * <th scope="col" id="Week2" class="th_tr">星期二</th>
	 * <th scope="col" id="Week3" class="th_tr">星期三</th>
	 * <th scope="col" id="Week4" class="th_tr">星期四</th>
	 * <th scope="col" id="Week5" class="th_tr">星期五</th>
	 * <th scope="col" id="Week6" class="th_tr">星期六</th>
	 * <th scope="col" id="Week7" class="th_tr">星期日</th>
	 * </xhtml:tr>
	 */
function refreshData(){
	gridUpdate.setDD();
	var ss="\"<div title='\"+dg.getValueByName('fContent',p)+\"'>\"+dg.getValueByName('fTitle',p)+\"</div>\" ";
	gridUpdate.drawGrid();
	gridUpdate.putData(ss);
}
function onPageLoad(){
	setCurrTime();
}
window.aWList=new Array();
aWList[0]='<br /> 一 ';
aWList[1]=' <br />二 ';
aWList[2]=' <br />三 ';
aWList[3]=' <br />四 ';
aWList[4]=' <br />五 ';
aWList[5]=' <br />六 ';
aWList[6]='<br />日 ';
function setCurrTime(){
    var tempData= justep.xbl("tempData");
	var data = xforms.I8N.format(justep.System.datetime(), "yyyy-MM-dd");
	tempData.setValue('fDate0',data);
	tempData.setValue('fWeekOrMonthCode','week');
	tempData.setValue('fWeekOrMonthName','按周查看');
}
mainActivity.inputDate0Change = function(event){
   refreshData();
};
  /**
       计算出某个日期属于这一年的第几周  */
function getWeekNumber(d1){
    var beginDate = new Date(d1.getFullYear(), 0, 1);  // 今年第一天
    var n = beginDate.getDay();   // 今年第一天星期几
    var dayCount = Math.ceil((d1 - beginDate)/(24*60*60*1000));// 今年第几天
    if(n != 0){   
        var m = parseInt("0654321".charAt(n));   
        weekNo = Math.ceil((dayCount-m)/7) + 1;   
    }else{   
        weekNo = Math.ceil(dayCount/7);   
    }   
    return weekNo;  
}
  /** 
 */
mainActivity.weekOrMonthSelectCloseup = function(event){
  var tempData = justep.xbl("tempData");
  var method = justep.xbl("tempData").getValue('fWeekOrMonth');
  justep.xbl("showData").refreshData();
  checkWayChange(method);
};
