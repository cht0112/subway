var workPlan_static = {};
workPlan_static.model1Load = function(event){
	var text = "";
	text += "<table class='tableClass' border='0' cellspacing='0' cellpadding='0'>"
	       + "<tr height='10'><td width='20'/><td/><td width='50'/><td width='50'/><td width='130'/></tr>"
	       + "<tr height='18'><td width='20' align='center'>1</td><td>关于召开团拜会的请示</td><td width='50'>综合局</td><td width='50'>司保华</td><td width='130'>2011-03-02 09:30</td></tr>"
	       + "<tr height='18' style='background-color: #D2D2FF'><td width='20' align='center'>2</td><td>关于年终大会讲话稿</td><td width='50'>综合局</td><td width='50'>司保华</td><td width='130'>2011-03-02 09:12</td></tr>"
	       + "<tr height='18'><td width='20' align='center'>3</td><td>总装备部请示件</td><td width='50'>秘书</td><td width='50'>王文华</td><td width='130'>2011-03-02 09:10</td></tr>"
	       + "<tr height='18' style='background-color: #D2D2FF'><td width='20' align='center'>4</td><td>一二五科研发展规划汇总稿</td><td width='50'>综合局</td><td width='50'>张参谋</td><td width='130'>2011-03-02 08:50</td></tr>"
	       + "<tr height='18'><td width='20' align='center'>5</td><td>关于召开团拜会的请示</td><td width='50'>政治部</td><td width='50'>王参谋</td><td width='130'>2011-03-02 09:30</td></tr>"
	       + "</table>";
	 var bDivObj = justep("textDiv_b");
	 var bjDivObj = justep("textDiv_bj");
	/* var jxjObj = justep("textDiv_jxj");
	 var zjjDivObj = justep("textDiv_zjj");
	 var ghjDivObj = justep("textDiv_ghj");
	 var ccjDivObj = justep("textDiv_ccj");
	 var zzbDivObj = justep("textDiv_zzb");*/
	 bDivObj.innerHTML = text;
	 bjDivObj.innerHTML = text;
	 /*jxjObj.innerHTML = text;
	 zjjDivObj.innerHTML = text;
	 ghjDivObj.innerHTML = text;
	 ccjDivObj.innerHTML = text;
	 zzbDivObj.innerHTML = text;*/
};
