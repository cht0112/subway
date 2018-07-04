(function(){
	var _loadShortcuts = function(){
		var o = null;
		$.jpolite.Data.system.Layout.loadShortcuts(function(data){
			if (data && data.status) {
				delete data.status;
				o = data;
			}
		});
		return o||portalConfig.shortcuts;
	};
	var _saveShortcuts = function(){
		var json = "";
		$(".shortcuts_ul", "#settings_shortcuts_inner").find("li").each(function(i){
			if (json!="") json += ",";
			json += this.attributes['rel'].value;
		});
		$.jpolite.Data.system.Layout.saveShortcuts("["+json+"]", function(data){
			if (data && data.status){
				$(".functree", "#functree_owner").FuncTreeShortcuts();
			}
		});
	};
	var _genJSON = function(node){
		var r = "";
		for(i in node){
			if (node[i]) {
				if(r!="") r += ",";
				r += "\"" + i + "\":\"" + node[i] + "\"";
			}
		}
		return "{" + r + "}";
	};
				
	$.fn.extend({
		ShortcutsDefine: function(iconPath) {
			iconPath = iconPath || "../UI/portal/x5/img/icon/";
			if (this.length == 1) {
				var x = $(this);
				x.empty();
				var shortcuts = _loadShortcuts();
				var html = "";
				for(i in shortcuts){
					var node = shortcuts[i];
					var icon = iconPath + (node.icon16 || node.icon || "xt.gif");
					html += "<li rel='" + _genJSON(node) + "'><img class='shortcuts_icon' src='"+icon+"' width=16 height=16><span class='shortcuts_name'>" + node.title + "</span><span class='shortcuts_close'></span></li>";
				}
				html = "<ul class='shortcuts_ul'>" + html + "</ul>";
				$(html).appendTo(x).sortable({stop: function(e, u) {_saveShortcuts();}}).disableSelection().find("li").hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");}).find(".shortcuts_close").click(function(e){
					var x = this.parentNode;
					x.parentNode.removeChild(x);
					delete x;
					_saveShortcuts();
				});
			}
			return $(this);
		},
		ShortcutsDefine_add: function(iconPath, func) {
			iconPath = iconPath || "../UI/portal/x5/img/icon/";
			var node = $.X.parseFunc(func);
			var icon = iconPath + (node.icon16 || node.icon || "xt.gif");
			var html = "<li rel='" + _genJSON(node) + "'><img class='shortcuts_icon' src='"+icon+"' width=16 height=16><span class='shortcuts_name'>" + node.title + "</span><span class='shortcuts_close'></span></li>";
			$(html).appendTo(this.andSelf().find(".shortcuts_ul")).hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");}).find(".shortcuts_close").click(function(e){
				var x = this.parentNode;
				x.parentNode.removeChild(x);
				delete x;
				_saveShortcuts();
			});
			_saveShortcuts();
		}
	});
}());