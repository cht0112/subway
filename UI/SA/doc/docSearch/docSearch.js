var docAuthListArr = null;
var currentPage = 1;
var PageSize = 50;

function search(searchPage, pageCount, servers , recordCount,searchText){
	$("searchWordInput").blur();
	if(searchPage==undefined) searchPage=currentPage;
	var searchWord = typeof searchText =="undefined" ?document.getElementById("searchWordInput").value:searchText;
	pageCount =  typeof pageCount =="undefined" ? '':pageCount;
	searchText =  typeof searchText =="undefined" ? '':searchText;
	recordCount =  typeof recordCount =="undefined" ? '':recordCount;
	var ishttps = window.location.protocol == "https:" ? "true" : "false";
	if(searchWord){
		if(searchWord.replace(/^ +| +$/g,"")){
			var words = jQuery.trim(searchWord).split(" ");
			var wordItems = [];
			for(i=0;i<words.length;i++){
				wordItems.push("<word>");
				wordItems.push(words[i]);
				wordItems.push("</word>");
			}
		   	
           var param = ' <parameters> ' +
				       '  <parameter name="param"> '+
				       '    <xbiz:xml xmlns:xbiz="http://www.justep.com/xbiz#"> '+
				       '       <data><operate>queryDocSearch</operate><form><keyword>'+ searchWord +'</keyword>' +
				       '             <querySql>default</querySql><extraCond>FullText(\'' 
				       + searchWord + '\') and #sFlag = 1 </extraCond><extraOrderBy>creationTime desc</extraOrderBy>' +
				       '             <words>' 
				       + wordItems.join('') + '</words>' +
				       '<pageCount>'+ pageCount +'</pageCount><pageSize>10</pageSize><currentPage>'+ searchPage +'</currentPage>'+
				       '<servers>'+ servers +'</servers><recordCount>'+recordCount+'</recordCount><deptPath>'
				       + justep.Context.getCurrentPersonMemberFID() +'</deptPath><personId>'
				       + justep.Context.getCurrentPersonCode() +'</personId><ishttps>'+ishttps+'</ishttps></form></data>'+
				       '     </xbiz:xml> '+
				       '  </parameter> '+
				       ' </parameters> ';
		    justep.Request.callURL("/UI/SA/doc/docSearch/DocSearchQuery.j", "searchResultIframe", justep.Request.createBizParam("queryDocSearch" ,param , null ,true ,justep.Context.getCurrentProcess() ,justep.Context.getCurrentActivity()));
		}else{
			document.location.reload();
		}
	}
	if(currentPage == -1) currentPage=1;
	$('#searchResultIframe').css('height','100%');
}

function getAuthList(){
	var docAuthList = justep.doc.InnerUtils.getDocAuthList();
	if(!docAuthListArr) 
	    docAuthListArr = {};
	for(var deptFID in docAuthList) {
		var authItems = docAuthList[deptFID];
		var deptAuth = new Array();
		var i=0;
		for(var authId in authItems) {
			var authItem = authItems[authId];
			deptAuth[i] = {"authId":authId,"sDocPath":authItem.sDocPath,"sAuthorizeeFID" : authItem.sAuthorizeeFID,"sAccess":authItem.sAccess};
			i++;
		}
		docAuthListArr[deptFID] = deptAuth;
	}	
}

function searchDoc(event){
	currentPage =-1 ;
	search();
}

function getAuth(docFullPath){	
	var access = -1;	
	for(var item in docAuthListArr){
		var docAccess = null;
		while(docFullPath){
			$.each(docAuthListArr[item],function(n,value){
				if(value.sDocPath == docFullPath){
					docAccess = value.sAccess;
					return false;
				}
			});
			if(docAccess != null) break;
			if("/" == docFullPath){
				docAccess = 1;
				break;
			}
			docFullPath = docFullPath.substring(0, docFullPath.lastIndexOf("/"));
			if("" == docFullPath)
				docFullPath = "/";
		}
		if(docAccess > access)
			access = docAccess;
	}
	return access;	
}

function browse(obj){
	//TODO:修改展示
	var path = obj.getAttribute("path");
	var fileID = obj.getAttribute("id");
	var docName = obj.innerText;
	if(getAuth(path)%8 >=4){
		justep.doc.InnerUtils.browseDocByFileID(path, docName ,fileID);
	}else{
		alert("您未被授权查看此文件");
	}
}

function openResource(obj){
	var path = obj.getAttribute("path");
	var docID = obj.getAttribute("doc-id");
	var docFullPath = justep.doc.InnerUtils.getDocFullPath(docID, path);
	if(getAuth(docFullPath)>0){
		justep.Portal.openWindow("文档中心","/SA/doc/docCenter/docCenter.w?process=/SA/doc/docCenter/docCenterProcess&activity=mainActivity&docPath="+path+"&docID="+docID);
	}else{
		alert("您未被授权查看此文件");
	}
}

//TODO createTextRange不支持chrome 暂时没有高亮能力
function highLight(){
	var searchWord = document.getElementById("searchWord").innerText;
	var words = searchWord.split(" ");
	for(i=0;i<words.length;i++){
		if(words[i]){
			var orange = document.body.createTextRange();
			while(orange.findText(words[i])){
			orange.pasteHTML("<span class='searchword'>" + orange.text + "</span>");
			orange.moveStart('character',1);
				}
			}
		}
}