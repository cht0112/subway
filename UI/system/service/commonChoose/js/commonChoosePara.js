
justep.CommonChoosePara = function (showAlais , store){
	this.showAlais = showAlais;
	this.store = store; 
}

justep.CommonChoosePara.prototype.getShowAlias = function(){
	return this.showAlais;  
}

justep.CommonChoosePara.prototype.getSimpleStore = function(){
	return this.store;
}  