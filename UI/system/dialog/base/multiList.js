justep.MultiList = function(){
	var returnData = [], selectIds = [], selectData = [], deleteImg = justep.Request.convertURL("/UI/system/images/templete/delete.gif",true);
	/**
	 *	计算选择区域数据量
	 **/
	checkCount = function(){
		var count = $("#selectHome").children(".multi-select-item").length;
		$("#selectBar").children(".multi-select-count").html("(共"+count+"项):");
		
		if(count > 0){
			$("#selectBar").children(".multi-delete-img").css({visibility: "visible"});
		}else{
			$("#selectBar").children(".multi-delete-img").css({visibility: "hidden"});
		}
	};
	checkHelp = function(rowIds,checked){
		var rowIdArray = [];
		if(Object.prototype.toString.apply(rowIds) === '[object Array]'){
			rowIdArray = rowIds;
		}else{
			rowIdArray.push(rowIds);
		}
		if(checked){
			var html = "";
			for (var i = 0; i < rowIdArray.length; i++) {
				var rowid = rowIdArray[i];
				var label = rowid;
				var displayColumn = justep.xbl('config').getValue("displayColumn");
				try{
					if(displayColumn && displayColumn != "") 
						label = justep.xbl('main').getStore().getValueById(rowid, justep.String.trim(displayColumn));
				}catch(e){
					var msg = new justep.Message(justep.Message.JUSTEP230059, displayColumn);
					throw justep.Error.create(msg);	
				}
				if(!document.getElementById(rowid))
					html = html + "<div class='multi-select-item' id='" + rowid +"'><img src='"+deleteImg+"' onclick='justep.MultiList.removeRow(this.parentNode.id)'>" + label + "</div>";
			}
			$("#selectHome").append(html);
		}else{
			for (var i = 0; i < rowIdArray.length; i++) {
				var rowid = rowIdArray[i];
				//id里有符号jquery选择不到
				//$("#selectHome").children("#"+rowid).remove();
				$(document.getElementById(rowid)).remove();
			}
		}
		
	};
	synchrSelectIds = function(){
		selectIds = [];
		$("#selectHome").children(".multi-select-item").each(function(){
			selectIds.push(this.id);		
		});
		
		var data = justep.xbl('windowReceiver').getMappingData("main",selectIds);
		for(var i in data){
			var rowid = data[i].rowid, isExist = false;
			
			for(var j in selectData){
				if(selectData[j] && selectData[j].rowid === rowid){
					isExist = true;
					break;
				}					
			}
			
			if(!isExist) selectData.push(data[i]);
		}							
	};
	
	deleteSelectData = function(idArr){
		var rowIdArray = [];
		if(Object.prototype.toString.apply(idArr) === '[object Array]'){
			rowIdArray = idArr;
		}else{
			rowIdArray.push(idArr);
		}
		
		for(var i in rowIdArray){
			var idx = "";rowid = rowIdArray[i];
			for(var j in selectData){
				if(selectData[j] && selectData[j].rowid === rowid){
					idx = j;
					break;
				}					
			}	
			selectData.splice(idx, 1);
		}
	};
	
	synchrGridChecked = function(){
		for(var i in selectData){
			var rowid = selectData[i].rowid;
			var store = justep.xbl('main').getStore();
			store.setValueById(rowid, "ch", "1");			
		}
	};
	
	checkRow = function(rowIdArr,checked){
		checkHelp(rowIdArr, checked);
		checkCount();
		synchrSelectIds();
		if(!checked)
			deleteSelectData(rowIdArr);		
	};
	
	return {
		_doPageChange : function(){
			justep.xbl('grid').grid.getHeaderMasterCheckbox().checked = false;
			synchrGridChecked();
		},
		/**
		 *	单选(grid)
		 **/
		_doCheckRow : function(e){
			checkRow(e.rowId, e.checked);
		},
		
		checkRow : function(rowIdArr,checked){
			checkRow(rowIdArr, checked);
		},
		/**
		 *	全选(grid)
		 **/
		_doCheckAll : function(e){
			var idArr = e.checked?e.grid.getCheckedRowIds():e.grid.getAllRowIds().split(",");
			checkRow(idArr, e.checked);
		},
		checkAll : function(checked){
			var idArr = justep.xbl("grid").grid.getAllRowIds().split(",");
			checkRow(idArr, checked);
		},		
		/**
		 *	删除选择行
		 **/
		removeRow : function(rowid){
			if(!rowid) return;
			var store = justep.xbl('main').getStore();
			store.setValueById(rowid, "ch", "0");
			if("tree" == store.type) justep.xbl('grid').grid.setItemChecked(rowid, false);
			//id里有符号jquery选择不到
			//$("#selectHome").children("#"+rowid).remove();
			$(document.getElementById(rowid)).remove();
			checkCount();
			synchrSelectIds();
			deleteSelectData(rowid);
		},
		/**
		 *	删除所有行
		 **/
		removeAllRow : function(){
			var store = justep.xbl('main').getStore();
			$("#selectHome").children(".multi-select-item").each(function(){
				if(this.id) {
					store.setValueById(this.id, "ch", "0");
					if("tree" == store.type) justep.xbl('grid').grid.setItemChecked(this.id, false);
				}
			});
			var ckb = justep.xbl('grid').grid.getHeaderMasterCheckbox();
			if(ckb) ckb.checked = false;
			$("#selectHome").children(".multi-select-item").remove();
			checkCount();
			synchrSelectIds();
			selectData=[];
		},
		windowOK : function(){
			//var returnData = justep.xbl('windowReceiver').getMappingData("main",selectIds);
			justep.xbl('windowReceiver').windowEnsure(selectData);
		},
		windowCancel : function(){
			justep.xbl('windowReceiver').windowCancel();
		},
		windowRefresh : function(){
			justep.xbl('windowReceiver').windowRefresh();
		}
	};
}();


