justep.OrgDialog = function(){
	
	getOrgKindFilter = function(filter){
		var kindArr = filter.split(",");
		var where = "";
		for(v in kindArr){
			where = where + "sOrgKindID = '" + kindArr[v] + "' OR ";
		}
		where = "(" + where + " 1=2 )";
		return where;
	};
	
	return{
		setFilter : function(evt){
			var orgKind, orgKindTree;
			var data,config;
			
			//处理列表grid的数据过滤
			config = justep.xbl('config');
			if(config){
				orgKind = config.getValue("orgKind");								
			}
			if(evt && evt.data && evt.data.orgKind){
				orgKind = evt.data.orgKind;
			}
			data = justep.xbl('main');
			if(data && orgKind){
				data.setFilter("orgKind",getOrgKindFilter(orgKind));
			}
			data.refreshData();
			
			//处理树形grid的数据过滤
			if(config){
				orgKindTree = config.getValue("orgKindTree");				
			}
			if(evt && evt.data && evt.data.orgKindTree){
				orgKindTree = evt.data.orgKindTree;
			}			
			var data = justep.xbl('treeMain');
			if(data && orgKindTree){
				data.setFilter("orgKindTree",getOrgKindFilter(orgKindTree));
			}
			if(data) data.refreshData();
			
			if(config && evt && evt.data){
				if(evt.data.returnColumn){
					config.setValue("returnColumn",evt.data.returnColumn);
				}
				if(evt.data.displayColumn){
					config.setValue("displayColumn",evt.data.displayColumn);
				}
			}
		},
		refreshOrgAfter : function(event) {
			event.source.expandRowsToLevel(0);
		},
		generateOrgKindImg : function(data){
	    	var rt = window.location.protocol + "//" + window.location.host + justep.Request.convertURL(justep.Resource.getOrgImgURL(data.value, false), true);
			return "<img src=\"" + rt + "\"/>";
		},		
		showNodeImg : function(event) {
			var data = justep.xbl(event.instance.element.id);
			if (!data)
				return;
			var orgKind = !event.grid._isVirtualRoot(event.rowId) ? data.getValue(
					'sOrgKindID', event.rowId) : 'root';
			var disable = data.getValue('sValidState', event.rowId) == '0';
			return justep.Resource.getOrgImgURL(orgKind, disable);
		},
		treeRowClick : function(event) {
			var id = event.getData().rowId;
			var data = justep.xbl('main');
			if (data) {
				data.filters.setFilter('orgSearch', 'SA_OPOrg.sParent=' + "'" + id
						+ "'");
			}
			data.refreshData();
		}
	};
}();
