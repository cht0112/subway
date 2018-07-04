var roomDialog = {};

roomDialog.btnRoomClick = function(event){
	var  mainData = justep.xbl("main");
	var roomSelect = justep.xbl("roomSelect");
	var room = $(roomSelect).attr("value");
	alert(room);

	mainData.setFilter("filter0","ROOM_APPLY_INFO.aPPLYFOROBJECT="+room);
	mainData.refreshData();	
};
