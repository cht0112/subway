justep.design.ProcessExecuteListIframe = function(config){ 
	justep.design.ProcessExecuteListIframe.superclass.constructor.call(this,config);
}

justep.extend(justep.design.ProcessExecuteListIframe, justep.design.Component,{
	paintContent:function(xmlNode){   
	   this.createElement("<div id='"+this.id+"' class='xform-div'>" 
	   		+ "<table style='border-style: solid none none solid; border-width: 1px; border-color: #C0C0C0; width: 100%; font-family: 宋体, Arial, Helvetica, sans-serif; font-size: 9pt; border-collapse: collapse;'>"
			+ "		<tr style='height: 25px; text-align: center; background-color: #DDEEFF;'>"
			+ "			<td style='width: 120px; border-style: none solid solid none; border-width: 1px; border-color: #C0C0C0; padding: 0px;'>"
			+ "				环节</td>"
			+ "			<td style='border-style: none solid solid none; border-width: 1px; border-color: #C0C0C0; padding: 0px;'>"
			+ "				意见</td>"
			+ "			<td style='width: 102px; border-style: none solid solid none; border-width: 1px; border-color: #C0C0C0; padding: 0px;'>"
			+ "				处理人</td>"
			+ "			<td style='width: 110px; border-style: none solid solid none; border-width: 1px; border-color: #C0C0C0; padding: 0px;'>"
			+ "				处理时间</td>"
			+ "		</tr>"
			+ "</table>"
	   		+ "</div>",xmlNode);
	}
});

