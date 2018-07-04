/**
 * 
 */
justep.BizDataFilterMenu = function(xblObject){

	this.dataId = $(xblObject.domNode).attr('data');
	this.menuId = 'filter-pattern-' + xblObject.domNode.id;
	this.dialogId = 'filter-dialog-' + xblObject.domNode.id;

	//build operater
	var me = this;
	this.defineOperation('show', {
		label: (new justep.Message(justep.Message.JUSTEP231034)).getMessage(),
		src: '',
		disSrc: '',
		method: function(event){
			me.show(event);
		}	
	});
	
	this.customOperation(xblObject.getOperations());
};

justep.supportOperation(justep.BizDataFilterMenu);

justep.BizDataFilterMenu.prototype.show = function(event){
	if(!this.dataId) return;
	if(!this.menu){
		this.menu = justep.xbl(this.menuId);
	}
	this.menu.show(this.dataId, event.target||event.srcElement, this.dialogId);
	
};
