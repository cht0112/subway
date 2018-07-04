var singleList = {};

singleList.filterImgClick = function(event){
	xforms.blur();
	justep.xbl('main').refreshData();
};

justep.SingleList = function(){
	createReturnData = function(){
		var store = justep.xbl('main').getStore();
		var selectIds = [];
		selectIds.push(store.getSelectedRowId());
		return justep.xbl('windowReceiver').getMappingData("main",selectIds);
	};
	return{
		gridRowDblClick : function(event){
			justep.xbl('windowReceiver').windowEnsure(createReturnData());
		},
		windowOK : function(){
			justep.xbl('windowReceiver').windowEnsure(createReturnData());
		},
		windowCancel : function(){
			justep.xbl('windowReceiver').windowCancel();
		},
		windowRefresh : function(){
			justep.xbl('windowReceiver').windowRefresh();
		}
	};
}();