/*
 * file from "UI\portal\system\js\data.js"
 */

if (!$.jpolite) $.jpolite = {};
if (!$.jpolite.Data) $.jpolite.Data = {
	ajax: function(options){

		function check(o, p, status, code, title, text){
			for(var i in p){
				if (o[p[i]]){
					if ($.alert && $.alert({status:status,code:code,title:title,text:text+p[i]})){
						return false;
					} else {
						delete o[p[i]];
					}
				}
			}
			return true;
		}
		function genKey(){
			var k = {jpolite_key_req_version: "0.1"};
			if (options.bean) k.jpolite_key_req_bean = options.bean.replace(/\/|\\/g, '.').replace(/^\.+|\.+$/g, "");
			return k;
		}
		options = options || {};
		
		if (check(options, ['url','cache','contentType','global','ifModified','jsonp',
			'password','processData','scriptCharset','timeout','type','username','xhr'],
			'WARN', 'system.data.js.1', 'Ajax Check', 'Illegal parameter:')){
			var d = options.data || {};
			if (check(d, ['jpolite_key_req_version', 'jpolite_key_req_bean'], 
				'WARN', 'system.data.js.2', 'Ajax Data Check', 'Illegal property:')) {
				var o = {};
				$.extend(o, options, {
					async: options.async || false,
					type: options.type || 'post',
					dataType: options.dataType || 'json',
					url: 'controller/' + $.trim(options.action || 'system/Error').replace(/\.|\\/g, '/').replace(/^\/+|\/+$/g, ""),
					data: $.extend(d, genKey()),
					beforeSend: (options.beforeSend) ? function(XMLHttpRequest){
						return options.beforeSend(XMLHttpRequest);
					} : null,
					complete: (options.complete) ? function(XMLHttpRequest, textStatus){
						return options.complete(XMLHttpRequest, textStatus);
					} : null,
					dataFilter: function(data, type){
						if (options.dataFilter){ 
							return options.dataFilter(data, type);
						} else if(type=="json"){
							var r = new Array;
							items = window["eval"]("(" + data + ")");
							if($.isArray(items)){
								for(var i in items){
									var item = items[i];
									if (item.status) {
										if (item.status=="SUCCESS" || item.status=="FAILURE" || item.status=="NOTLOGIN"){
											r.push(items[i]);
										} else {
											if($.alert){												
												$.alert({"status":item.status,"code":item.code,"title":item.title,"text":item.text});
											}else{
												//利用portal-core的UserValidator对chrome的刷新退出进行判断
												if(item.status=="ERROR"&&item.code=="system.UserValidator.validate.1"){
													window.location.reload();
												}
											}
										}
									} else {
										$.alert && $.alert({status:"WARN",code:"system.data.js.3",title:"Ajax Data",text:"Returns the wrong data"});
									}
								}
							} else {
								r.push(data);
							}
							if(r.length==0){
								return null;
							} else if(r.length == 1){
								return r[0];
							} else {
								$.alert && $.alert({status:"WARN",code:"system.data.js.4",title:"Ajax Data",text:"Returned too much data"});
								return r[0];
							}
						} else {
							return data;
						}
					},
					error: (options.error) ? function(XMLHttpRequest, textStatus, errorThrown){
						return options.error(XMLHttpRequest, textStatus, errorThrown);
					} : null,
					success:function(data, textStatus){
						if(data){
							var status = data.status;
							if(status == "NOTLOGIN"){
								window.location.href = window.location.href.replace(/index.*\.jsp.*/,'index.jsp');
							}
							if(data.data){
								data = window["eval"]("(" + data.data + ")");
							} else {
								data = {};
							}
							data.status = status=="SUCCESS";
							//超时判断
							if(!data.status&&data.code&&data.code==justep.Request.SESSION_TIMEOUT){
								var msg = data.message;
								if (confirm(msg)){
									$.jpolite.Data.system.User.logout(function(data){
										if (data.status) {
											$.neadUnloadConfirm = false;
											window.location.href = window.location.href.replace(/index.*\.jsp.*/,'index.jsp');
										}
									});
								}
							}
						} else {
							data = {status:false};
						}
						return options.success?options.success(data, textStatus):null;
					} 
				});
				
				return $.ajax(o);
			}
		}
	},
	
	send: function(action, data, callback, async, bean){
		return this.ajax({action:action,data:data,success:callback,bean:bean,async:async});
	}
};
$.jpolite.Data.system = {
	User: {
		login: function(username, password, language, params, callback) {
			var date = new Date(), loginDate, y, M, d;
			y = date.getFullYear();
			M = date.getMonth() + 1;
			d = date.getDate();
			loginDate = y + "-" + (M<10?"0":"") +  M + "-" + (d<10?"0":"") + d;

			//hcr
			if (!params){
				params = {};
			}
			var client = $.urlParam('client');
			if(client)
				params["client"] = client;
			
			return $.jpolite.Data.send('system/User/login',$.extend({},{username:username,password:password,language:language, loginDate:loginDate, options:params}),callback,true);
		},
		logout: function(callback) {
			return $.jpolite.Data.send('system/User/logout',{},callback);
		},
		check: function(callback) {
			return $.jpolite.Data.send('system/User/check',{},function(data){
				if (data.status) {
					delete data.status;
					for (var i in data) {
						$.jpolite.Data.system.User["$" + i] = data[i];
					}
					data.status = true;
					if ($.isFunction(callback)) callback.call(this, data);
				} else {
					for (var i in $.jpolite.Data.system.User) {
						if (i[0] == "$") {
							delete $.jpolite.Data.system.User[i];
						}
					}
					if ($.isFunction(callback)) callback.call(this, data);
				}
			});
		},
		getAgents: function(username, password, callback) {
			return $.jpolite.Data.send('system/User/getAgents',{username:username,password:password},callback,true);
		},
		changePassword: function(username, password, new_password, callback) {
			return $.jpolite.Data.send('system/User/changePassword',{username:username,password:password,new_password:new_password},callback,true);
		},
		getOnlineCount: function(callback) {
			return $.jpolite.Data.send('system/User/getOnlineCount',{},callback);
		},
		getOnceFunc: function(callback) {
			return $.jpolite.Data.send('system/User/getOnceFunc',{},callback);
		},
		getLanguage: function(callback) {
			return $.jpolite.Data.send('system/User/getLanguage',{},callback);
		},
		setLanguage: function(language, callback) {
			return $.jpolite.Data.send('system/User/setLanguage',{language:language},callback);
		},
		getPersonMembers:function(process,activity,callback){
			return $.jpolite.Data.send('system/PersonMembers',{process:process,activity:activity,executor:$.principalID||""},callback);
		}
	},
	Layout: {
		loadTabs: function(callback) {
			return $.jpolite.Data.send('system/Layout/loadTabs',{executor:$.principalID||""},callback);
		},
		saveTabs: function(layout, callback) {
			return $.jpolite.Data.send('system/Layout/saveTabs',{layout:layout||""},callback,true);
		},
		removeTabs: function(callback) {
			return $.jpolite.Data.send('system/Layout/removeTabs',{},callback);
		},
		loadTheme: function(callback) {
			return $.jpolite.Data.send('system/Layout/loadTheme',{executor:$.principalID||""},callback);
		},
		saveTheme: function(theme, callback) {
			return $.jpolite.Data.send('system/Layout/saveTheme',{theme:theme||""},callback,true);
		},
		removeTheme: function(callback) {
			return $.jpolite.Data.send('system/Layout/removeTheme',{},callback);
		},
		loadShortcuts: function(callback) {
			return $.jpolite.Data.send('system/Layout/loadShortcuts',{},callback);
		},
		saveShortcuts: function(shortcuts, callback) {
			return $.jpolite.Data.send('system/Layout/saveShortcuts',{shortcuts:shortcuts||""},callback,true);
		},
		removeShortcuts: function(callback) {
			return $.jpolite.Data.send('system/Layout/removeShortcuts',{},callback);
		}
	},
	FuncTree: function(callback) {
		return $.jpolite.Data.send('system/FuncTree',{},callback,true);
	}
}
/*
 * file from "UI\portal\system\js\md5.js"
 */

var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance */
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode */

/* 
 * These are the functions you'll usually want to call 
 * They take string arguments and return either hex or base-64 encoded strings 
 */
function hex_md5(s) {
	return binl2hex(core_md5(str2binl(s), s.length * chrsz)).toUpperCase();
}
function b64_md5(s) {
	return binl2b64(core_md5(str2binl(s), s.length * chrsz));
}
function hex_hmac_md5(key, data) {
	return binl2hex(core_hmac_md5(key, data));
}
function b64_hmac_md5(key, data) {
	return binl2b64(core_hmac_md5(key, data));
}

/* Backwards compatibility - same as hex_md5() */
function calcMD5(s) {
	return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}

/* 
 * Perform a simple self-test to see if the VM is working 
 */
function md5_vm_test() {
	return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/* 
 * Calculate the MD5 of an array of little-endian words, and a bit length 
 */
function core_md5(x, len) {
	/* append padding */
	x[len >> 5] |= 0x80 << ((len) % 32);
	x[(((len + 64) >>> 9) << 4) + 14] = len;

	var a = 1732584193;
	var b = -271733879;
	var c = -1732584194;
	var d = 271733878;

	for (var i = 0; i < x.length; i += 16) {
		var olda = a;
		var oldb = b;
		var oldc = c;
		var oldd = d;

		a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
		d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
		c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
		b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
		a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
		d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
		c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
		b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
		a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
		d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
		c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
		b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
		a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
		d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
		c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
		b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

		a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
		d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
		c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
		b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
		a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
		d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
		c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
		b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
		a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
		d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
		c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
		b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
		a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
		d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
		c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
		b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

		a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
		d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
		c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
		b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
		a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
		d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
		c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
		b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
		a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
		d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
		c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
		b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
		a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
		d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
		c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
		b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

		a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
		d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
		c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
		b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
		a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
		d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
		c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
		b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
		a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
		d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
		c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
		b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
		a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
		d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
		c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
		b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

		a = safe_add(a, olda);
		b = safe_add(b, oldb);
		c = safe_add(c, oldc);
		d = safe_add(d, oldd);
	}
	return Array(a, b, c, d);

}

/* 
 * These functions implement the four basic operations the algorithm uses. 
 */
function md5_cmn(q, a, b, x, s, t) {
	return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
	return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
	return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
	return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
	return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/* 
 * Calculate the HMAC-MD5, of a key and some data 
 */
function core_hmac_md5(key, data) {
	var bkey = str2binl(key);
	if (bkey.length > 16)
		bkey = core_md5(bkey, key.length * chrsz);

	var ipad = Array(16), opad = Array(16);
	for (var i = 0; i < 16; i++) {
		ipad[i] = bkey[i] ^ 0x36363636;
		opad[i] = bkey[i] ^ 0x5C5C5C5C;
	}

	var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
	return core_md5(opad.concat(hash), 512 + 128);
}

/* 
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally 
 * to work around bugs in some JS interpreters. 
 */
function safe_add(x, y) {
	var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return (msw << 16) | (lsw & 0xFFFF);
}

/* 
 * Bitwise rotate a 32-bit number to the left. 
 */
function bit_rol(num, cnt) {
	return (num << cnt) | (num >>> (32 - cnt));
}

/* 
 * Convert a string to an array of little-endian words 
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored. 
 */
function str2binl(str) {
	var bin = Array();
	var mask = (1 << chrsz) - 1;
	for (var i = 0; i < str.length * chrsz; i += chrsz)
		bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
	return bin;
}

/* 
 * Convert an array of little-endian words to a hex string. 
 */
function binl2hex(binarray) {
	var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	var str = "";
	for (var i = 0; i < binarray.length * 4; i++) {
		str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF)
				+ hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
	}
	return str;
}

/* 
 * Convert an array of little-endian words to a base-64 string 
 */
function binl2b64(binarray) {
	var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var str = "";
	for (var i = 0; i < binarray.length * 4; i += 3) {
		var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
				| (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
				| ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
		for (var j = 0; j < 4; j++) {
			if (i * 8 + j * 6 > binarray.length * 32)
				str += b64pad;
			else
				str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
		}
	}
	return str;
}
/*
 * file from "UI\portal\system\js\core.js"
 */

/*
 * jQuery extensions to support widgetization actions on newly DOM nodes
 * Applicable to widget_content, helper, dynamic content ...
 */
$.extend({
	urlParam: function(name){
		var index = window.location.href.indexOf("?");
		if(index != -1){
			var items = window.location.href.substr(index + 1).split("&");
			for(var i=0; i<items.length; i++){
				var param = items[i].split("=");
				if(param.length=2){
					if (param[0]==name){
						return param[1];
					}
				}
			}
		}
	},
	//Registry of controls dynamically loaded in widgets
	_widgetControls:{},
	addControls: function(options) {	//{selector:handler}
		this.extend(this._widgetControls, options);
	},
	widgetize: function() {
		//Make external links open in new window
		$("a[href^=http]", this).attr("target", "blank");
		for (s in $._widgetControls) {
			var x = $(s, this);
			if (x.length > 0){
				var f = $._widgetControls[s][0],	//Function
					p = $._widgetControls[s][1];	//Associated Parameters
				if ($.isArray(p)) f.apply(x, p);
				else f.call(x, p);
			}
		}
	},

	//A message registry and handling system to handle server side messages
	//Can be used for local messaging as well
	_MsgRegistry: {
		//find out what the target: header, tab#id, helper, container#id, widget#id
		jpolite: [],
		//update content of a widget
		widget: [],
		//find out which XDO to handle, name#url
		resource: [],
		//show some alerts to user (after success)
		msg: [
			function(msg) {
				$.alert({title:'System Notification', text:msg});
				return true;
			}
		]
	},
	registerMsgHandlers: function(handlers) {
		var MR = this._MsgRegistry;
		for (var x in handlers) {
			if (!MR[x]) MR[x]=[];
			MR[x].push(handlers[x])
		}
	},
	handleMessage: function(m) {
		var rv = true;
		for (var k in m) {
			var x = this._MsgRegistry[k];
			if (x) for (var i in x) x[i](m[k])
		};
		return rv;
	},

	//A global event processing mechanism for you to register and process events
	_DOC: $(document),
	bindEvent: function(events){
		for (var e in events) this._DOC.bind(e, events[e]);
	},
	triggerEvent: function(e, data){
		return this._DOC.trigger(e, data);
	},
	triggerHandlerEvent: function(e, data){
		return this._DOC.triggerHandler(e, data);
	}
});

/*
 * Utility functions added to jQuery.fn
 */
$.fn.extend({
	rm: function() {
		return this.each(function() {
			this.parentNode.removeChild(this);
		});
	},
	on: function(sib) {
		if (this.is(".on")) return false;
		this.siblings(".on").andSelf().toggleClass("on");
		return true;
	},
	hasEvent: function(name) {
		for (i in (this.data("events") || {} )[name]) return true;
		return false;
	}
});

/*
 * JPolite Core Features and Functions
 */
if (!$.jpolite) $.jpolite = {};
$.extend($.jpolite, {
	Page: {
		entryCount: null,
		_loadLayout: function(){},	//Method to load layout
		_saveLayout: function(s){},	//Method to save layout
		_loadScriptLevel: 2,
		dynamicScripts: [],
		
		loadLayout: function(l){
			if (this.entryCount==null) {
				if (this._loadLayout) {
					if(typeof l=="string"){
						l = window["eval"]("("+l+")");
					}
					this._tempLayout = l || this._loadLayout() || portalConfig.defaultTabs;//按特定要求放置||按读取的参数放置||按变量_tabs放置
					if ($.isEmptyObject(this._tempLayout)){
						 this._tempLayout = portalConfig.defaultTabs;
					}
				
					//初始化标签
					$.jpolite.Nav.loadStored(this._tempLayout);
				}
				this.entryCount = 0;
			}
		},
		saveLayout: function(s, f, p){
			function compare(fobj, sobj) {
				function compareArray(farr, sarr) {
					if (farr.length != sarr.length) return false;
					for (var i = 0; i < farr.length; i++)
						if (!compare(farr[i],sarr[i]))
							return false;
					return true;
				}
				function compareObject(fobj, sobj) {
					var f = [], s = [];
					for (var i in fobj) f.push(i);
					for (var i in sobj) s.push(i);
					if (compareArray(f, s)) {
						for (var ele in fobj)
							if ((sobj[ele] == undefined) || (!compare(fobj[ele],sobj[ele])))
								return false;
						return true;
					} else {
						return false;
					}
				}
				var ftype = typeof(fobj);
				var stype = typeof(sobj);
				if (ftype == stype) {
					if (ftype == "object") {
						if (fobj.constructor == Array && sobj.constructor == Array) {
							return compareArray(fobj,sobj);
						} else if (fobj.constructor != Array && sobj.constructor != Array) {
							return compareObject(fobj,sobj);
						}
						return false;
					}
					return fobj == sobj;
				}
				return false;
			}
			
			if (this.entryCount!=null) {
				this.entryCount++;
				try {
					if ($.isArray(p)) f.apply(s, p);
					else f.call(s,p);
				} finally {
					this.entryCount--;
				}
				if ((this.entryCount == 0) && this._saveLayout) {
					
					var l = $.jpolite.Nav.saveStored();
					
					var o = window["eval"]("(" + l + ")");
					
					if (!compare(this._tempLayout, o)) {
						this._tempLayout = o;
						this._saveLayout(l);
					}
				}
			}
		},
		resetLayout: function(){
			$.jpolite.Data.system.Layout.removeTabs(
				function(data){
					if(data&&data.status){
						$.jpolite.Data.system.Layout.loadTabs(
							function(data){
								if(data){
									delete data.status;
									$.jpolite.removeTab({tabType:"stored"});
									$.jpolite.Page.entryCount = null;
									$.jpolite.Page.loadLayout(data);
									$.jpolite.gotoTab();
								}
							}
						); 
					}
				}	
			);
		},
		loadScript: function(level, p){
			if (!p || this._loadScriptLevel!=level) return;
			var x = this;
			var l = p.split(",");
			for (var i in l) {
				var s = $.trim(l[i]);
				if (s=="") continue;
				if (x.dynamicScripts.toString().indexOf(s)<0) {
					$.ajax({
						async: false,
						cache: true,
						type: "POST",
						url: s,
						data: null,
						success: function(){
							x.dynamicScripts.push(s);
							$.triggerEvent("scriptLoadedEvent", s);
						},
						dataType: "script"
					});
				}
			}
		}
	},
	Nav: {
		tabList: function(c){
			return $(this.cts + " > " + this.its + (c || ""&&":visible")).add(this.ctm + " > " + this.its + (c || ""&&":visible"));
		},
		
		tabActions: {
			close: function(){
				$.jpolite.removeTab(this.id);
			},
			offset: function(n){
				
				$.jpolite.Page.saveLayout(this, function(n){
					function isComment(t){
						return t && (t.nodeName == "#comment");
					}
					function getNext(t){
						while (isComment(t.nextSibling)) {
							t = t.nextSibling;
						}
						if (t.nextSibling && (t.nextSibling.tabType == t.tabType)) {
							return t.nextSibling;
						} else {
							return null;
						}
					}
					function getPrev(t){
						while (isComment(t.previousSibling)) {
							t = t.previousSibling
						}
						if (t.previousSibling && (t.previousSibling.tabType == t.tabType)) {
							return t.previousSibling; 
						} else {
							return null;
						}
					}
					
					var s = this;
					if (n > 0) {
						while ((n > 0) && getNext(s)) {
							s = getNext(s);
							n--;
						}
						while (isComment(s.nextSibling)) {
							s = s.nextSibling;
						}
						s = s.nextSibling;
					} else if (n < 0) {
						while ((n < 0) && getPrev(s)) {
							s = getPrev(s);
							n++;
						}
					} else {
						return;
					}
					
					if (this != s) {
						var p = this.parentNode;
						p.insertBefore(p.removeChild(this), s);
						$.jpolite.Nav.tabs = {};
						$(p).find("li").each(function(i){
							$.jpolite.Nav.tabs[this.id] = this;
						});
					}	
				}, n);
			},
			rename: function(t){
				$.jpolite.Page.saveLayout(this, function(t){
					$("span", this).text(t);
					$("span", this).attr("title",t);
					this.tabTitle = t;
				},t);
			},
			changeRefreahState:function(state){
				$.jpolite.Page.saveLayout(this,function(state){
					this.tabRefresh = state;
				},state);
			},
			setLayout: function(l){
				$.jpolite.Page.saveLayout(this, function(l){
					this.tabLayout = l;
					$.jpolite.Content.rePosition(this);
				}, l);
			}
		},
		//初始化导航条
		init: function(cts, ctm, ctb, its, itb, func, p){
			$.extend(this, 
				{
					cts: "#main_nav",			//Navigation Tab container id
					ctm: "#main_nav_more",		//Navigation Tab container more id
					ctb: "#main_nav_more_btn",	//Navigation Tab container more button id
					its: "li",					//Navigation Tab selector
					itb: "dd",					//Navigation Tab selector more button
					cfo: {
						fn: $.fn.fadeOut,		//Content transition out function
						speed: 100				//Content transition out speed
					},
					cfi: {
						fn: $.fn.fadeIn,		//Content transition in function
						speed: 300				//Content transition in speed
					},
					navInit: null,				//Navigation Tab Initialization callback
				 	navInitArguments: {},		//Navigation Tab Initialization parameters
					
					tabs: {},			//Hash for tabs, tabs[tab_x_id] => tab_x
					ct:	null,			//Current tab id
					cc: $("#content"),	//Content container
					
					his: []		//Tab switch history
				}
			)
			
			this.cts = cts || this.cts;
			this.ctm = ctm || this.ctm;
			this.ctb = ctb || this.ctb;
			this.its = its || this.its;
			this.itb = itb || this.itb;
			
			this.loadStatic();
			
			this.navInit = func || this.navInit;
			this.navInitArguments = p || this.navInitArguments;
			this.initNav({state:"init"});
			//模拟悬停事件
			$(this.itb, this.ctb).hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
		},
		initNav: function(arguments){
			if (this.navInit){
				//在#main_nav上运行TraditionalTabs传递参数({state:"init",navInitArguments:{}})
				this.navInit.call($(this.cts), $.extend(arguments, this.navInitArguments));
			}
		},
		//添加标签
		addTab: function(id, p, type){
						
			function genNewTitle(s, fix){
				var i=0;
				while(s.tabs[fix + i])i++;
				return fix + i;
			}
			
			if (!id) {
				id = genNewTitle(this, "u");
				if (!type) type="stored";
				if (!p) p = {title: "NewTab"};
			}
			
			if(p.isFunc){
				var newlayoutdiv = $.jpolite.Content.funcTemplate.clone(true);
				newlayoutdiv.appendTo(this.cc);
				newlayoutdiv.attr("id",newlayoutdiv.id+"_"+id);
				
				this.initTab($.extend(
					$("<li><span></span><div></div></li>").attr({id: id}).find("span").attr("title", p.title).text(p.title).end().get(0),
					{tabTitle: p.title, tabLayout: p.layoutID||"l1_0", tabWidgets: String(p.widgets), tabOptions: p.authority || {tab:{removeable:true},widget:{addable:true,removeable:true,sortable:true}},tabRefresh:p.refresh||false,tabLayoutDiv:newlayoutdiv,tabLoaded:false,isFunc:p.isFunc,tabVisible:(p.visible?p.visible:'show'),hideTree:p.hideTree||false, funcInfo:p}
				), "");
				
			}else{
				var newlayoutdiv = $.jpolite.Content.layoutTemplate.clone(true);
				newlayoutdiv.appendTo(this.cc);
				newlayoutdiv.attr("id",newlayoutdiv.id+"_"+id);
				var x =  newlayoutdiv.find(".cc");
				var c = x.get();
				var containers = {};
				for(var i in c){
					containers[c[i].id] = $(c[i]);
				}
				x.sortable({
					start: function(){
						x.addClass("dragging");
						var t = $.jpolite.Nav.getTab($.jpolite.Nav.ct);
						$.jpolite.Content.rePosition(t);
						$(this).sortable('refreshPositions'); //刷新缓存的所有sortable的位置
					},
					
					stop:  function(e, u){
						$.jpolite.Page.saveLayout(this, function(e, u){
							x.removeClass("dragging");
							var w = u.item[0]; 
							if (w.c) w.c = w.parentNode.id;
							var t = $.jpolite.Nav.getTab($.jpolite.Nav.ct);
							$.jpolite.Content.rePosition(t);
							//重新定义widgets顺序；
							var newwidgets = {};
							var containers = t.tabLayoutContainers;
							for(var i in containers){
								var c = containers[i];
								var widgets = c.find(".widget");
								widgets.each(function(i){
									newwidgets[this.id] = this;
								});
							}
							t.widgets = newwidgets;
						}, [e, u]);
					},
					connectWith: newlayoutdiv.find(".cc"),
					tolerance: 'pointer', 
					handle: '.widgetHeader',
					placeholder: 'ui-sortable-placeholder',
					revert: true 
				});
				
				this.initTab($.extend(
					$("<li><span></span><div></div></li>").attr({id: id}).find("span").attr("title", p.title).text(p.title).end().get(0),
					{tabTitle: p.title, tabLayout: p.layoutID||"l1_0", tabWidgets: String(p.widgets), tabOptions: p.authority || {tab:{removeable:true},widget:{addable:true,removeable:true,sortable:true}},tabRefresh:p.refresh||false,tabLayoutDiv:newlayoutdiv,tabLayoutContainers:containers,tabLoaded:false,tabVisible:(p.visible?p.visible:'show'),hideTree:p.hideTree||false}
				), type);
			}
			this.initNav({state:"add"});
			return this.getTab(id);
		},
		initTab: function(t, type){
			//分类标签
			function sortTabs(s){
			
				function appendTabs(l, p){
					for(var i in l){
						if(l[i].tabType==p){
							s.tabs[i]=l[i];
						}
					}
				}
				var tmpTabs=s.tabs;
				s.tabs={};
				appendTabs(tmpTabs, "static");
				appendTabs(tmpTabs, "stored");
				appendTabs(tmpTabs, "dynamic");
				
			}
			var $t = $(t);
			
			if(!t.Initialized){
				t.Initialized = true;
				type = ((type != "static") && (type != "stored")) ? "dynamic" : type;
				
				var _tabs = this.tabs;
				this.tabs = {};
				for(var i in _tabs) this.tabs[i] = _tabs[i];
				this.tabs[t.id] = t;
				
				$.extend(t, {
					widgets: {},
					tabType: type
				}, this.tabActions);
				
				$t.addClass(type);
				sortTabs(this);
			}
			//代理时不出现页面设置
			if(!$.principalID||$.principalID&&t.tabType!= "stored"){
				$t.hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");}).find("div").hover(
					function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
			}
			if(!$t.hasEvent("click"))
				$t.click(function(e){
					if ($(this).on($.jpolite.Nav.tabList(".on"))) {
						if($(this).parent("#main_nav_more").length > 0){
							$("#main_nav>li.on").toggleClass("on").addClass("off");
						}else{
							$("#main_nav_more>li.on").toggleClass("on").addClass("off");
						}
						$.jpolite.Nav.initNav({state:"click"});
						if(this.isFunc){
							$.jpolite.Nav.switchToFunc(this.id);
						}else{
							$.jpolite.Nav.switchTab(this.id);
						}
					}
					return false;
				});
			if(!$t.find("div").hasEvent("click"))
				$t.find("div").click(function(e){
					if (t.tabType == "stored") $t.click();
					$.triggerEvent("tabActionEvent", t);
					return false;
				});
			if(t.tabVisible=='hide'){
				$t.hide();
				t.tabLayoutDiv.hide();
			}
		},
		switchToFunc: function(id){
			var x = this.getTab(id);
			if (!x.tabLoaded){
					$.jpolite.Content.addFunc({
						id: 'wFunc',
						wc: '',
						wt:	'FUNC',
						arguments: x.funcInfo,
						type:"func"
					}, x);
			}
			this.ct = x.id;
			for(var s in this.tabs){
				if(s!=x.id){
					this.tabs[s].tabLayoutDiv.hide();
				}else{
					this.tabs[s].tabLayoutDiv.show();
				}
			}
			$.triggerEvent("tabActivateEvent", x);
			this.his.push(x.id);
		},
		switchTab: function(id){
			var cc = this.cc,
				x = this.getTab(id),
				cfi = this.cfi;
			this.ct = x.id;
			var f = function(){
				if ($.jpolite.Nav.ct==x.id) {
					window._changing_ = true;
					try {
						if(!x.tabLoaded){
							for (var i in x.widgets) {
								var w = x.widgets[i];
								$(w).show();
								if(w&& w.height)
									$(".widgetContent",w).height(w.height);
							};
							$.jpolite.Content.rePosition(x);
						}
						cfi.fn.call(cc, cfi.speed);

						for (var i in x.widgets) {
							x.widgets[i].loadContent();
						};
						if(!x.tabLoaded){
							x.tabLoaded =true;
							$.jpolite.Content.rePosition(x);
						}

					} finally {
						window._changing_ = false;
					}
				}
			};
			
			for(var s in this.tabs){
				if(s!=x.id){
					this.tabs[s].tabLayoutDiv.hide();
				}else{
					this.tabs[s].tabLayoutDiv.show();
				}
			}
			$.triggerEvent("tabActivateEvent", x);
			this.his.push(x.id);
			this.cfo.fn.apply(cc, [this.cfo.speed, f]);
		},
		getTab: function(id) {
			return typeof id == "object" && id != null ?
				id :
				typeof id == "number" ?
					this.getTab(this.getTabID(id)) :
					this.tabs[id || this.ct];
		},
		getTabID: function(index) {
			var _id = null;
			this.tabList().each(function(i){
				if (index==i) {
					_id=this.id;
					return false;
				}
			});
			return _id || this.ct;
		},
		getTabIndex: function(id) {
			id = id || this.ct;
			var _index = null
			this.tabList().each(function(i){
				if (id==this.id) {
					_index=i;
					return false;
				}
			});
			return _index;
		},
		getTabCount: function() {
			return this.tabList().length; 
		},
		removeFuncTab:function(id){
			$('#content_loading').hide();
			var f =function(t){
				var index = this.ct==t.id ? this.getTabIndex(t.id) : -1;
				if($.triggerHandlerEvent("tabCloseEvent", t)){
					 if (this.ct == t.id)
						this.ct = null;
					var iframes = $("iframe", t.tabLayoutDiv);
				    if(iframes.length > 0){
				    	for(var i=0;i<iframes.length;i++){
				    		//避免再次触发事件
				    		iframes.get(i).onload = null;
				    		iframes.get(i).onreadystatechange = null;
				    		iframes.eq(i).attr("src","about:blank");
				    		iframes.eq(i).remove();	
				    	}	
				    }
				    t.tabLayoutDiv.rm();
					t.tabLayoutDiv = null;
					delete this.tabs[t.id];
					//删除所有重复的索引以及需要删除的tab的索引
					var old = null;
					for (var i in this.his){
						if ((this.his[i] == t.id) || (this.his[i] == old)) {
							delete this.his[i];
						} else {
							old = this.his[i];
						}
					}
					this.initNav({state:"remove"});
					if(index>=0){
						var count=this.getTabCount();
						if (index >= count) index=count-1;
						this.ct = this.getTabID(index);
					}else{
						index = this.getTabIndex(this.ct);
					}
				}
				return index;
			}
			var index = null;
			if(typeof id == "object"){
				if(this.tabs[id.id]) {
					index = f.call(this, id);
				}else{//删除同一类型的tab 
					for(var i in this.tabs){
						var t = this.tabs[i];
						for(var j in id){
							if(t[j]==id[j])	index = f.call(this,t);
						}
					}
				}
			}else{
				index = f.call(this, this.getTab(id));
			}
			for (var i in this.his)
				index = this.his[i];
			setTimeout("$.jpolite.gotoTab('"+index+"')",1);
		},
  		removeTab: function(id){
			$.jpolite.Page.saveLayout(this, function(id){
				var f = function(t){
					var index = this.ct==t.id ? this.getTabIndex(t.id) : -1;
					if ($.triggerHandlerEvent("tabCloseEvent", t)) {
						if (this.ct == t.id)
							this.ct = null;
						var old = null;
						for (var i in this.his){
							if ((this.his[i] == t.id) || (this.his[i] == old)) {
								delete this.his[i];
							} else {
								old = this.his[i];
							}
						}
						var widgets = this.tabs[t.id].widgets
						for(var w in widgets){
							this.removeWidget(widgets[w]);
						}
						widgets = null;
						t.tabLayoutDiv.rm();
						t.tabLayoutDiv = null;
						delete this.tabs[t.id];
						this.initNav({state:"remove"});
						if(index>=0){
							var count=this.getTabCount();
							if (index >= count) index=count-1;
							this.ct = this.getTabID(index);
						} else {
							index = this.getTabIndex(this.ct);
						}
						
					}
					return index;
				}
				var index = null;
				if (typeof id == "object") {
					if (this.tabs[id.id]) {
						index = f.call(this, id);
					} else for(var i in this.tabs){
						var t = this.tabs[i];
						for(var j in id)
							if(t[j]==id[j])
								index = f.call(this, t);
					}
				} else {
					index = f.call(this, this.getTab(id));
				}
				for (var i in this.his)
					index = this.his[i];
				$.jpolite.gotoTab(index);
			}, [id]);
		},
		removeWidget: function(w){
			w.tab.widgets[w.id].removing = true;
			var iframes = $("iframe", w);
			if (iframes.length > 0) {
				for(var i=0;i<iframes.length;i++){
		    		iframes.eq(i).attr("src","about:blank");
		    		iframes.eq(i).remove();	
		    	}	
				$(w).rm();
				delete w.tab.widgets[w.id];
				w.tab=null;
			} else {
				$(w).rm();
				delete w.tab.widgets[w.id];
				w.tab=null;
			}
		},
		// Make #main_nav sections preloaded in the home page active tabs 
		loadStatic: function(){
			$(this.cts).children(this.its).each(function(){
				var p = this.id.split(":");	//t0:_default
				$.extend($(this).attr({id: p[0]}).get(0), {
					tabLayout: p[1]
				});
				$.jpolite.Nav.initTab(this, "static");
			});
		},
		loadStored: function(s){
			for (var i in s) {
				$.jpolite.Nav.addTab(i, s[i], "stored");//生成对应标签
			}
			//初始化与标签匹配的内容
			$.jpolite.Content.loadStored();
		},
		// Retrieve current layout
		saveStored: function(){
			return "{" + this.tabList().map(function(){
				if ($(this).hasClass("stored")){
					if (this.funcInfo){
							return "'" + this.id + "':{'title':'" + (this.funcInfo.title || "") 
								+ "','refresh':'" + (this.funcInfo.refresh||"") 
								+ "','activity':'" + (this.funcInfo.activity||"") 
								+ "','process':'" + (this.funcInfo.process||"") 
								+ "','url':'" + (this.funcInfo.url||"") 
								+ "','hideTree':"+(this.funcInfo.hideTree||"")+"}";
					}else{
						var option = this.tabOptions||{tab:{removeable:true},widget:{addable:true,removeable:true,sortable:true}};
						var a ="{tab:{'removeable':"+option.tab.removeable+"},widget:{'addable':"+option.widget.addable+",removeable:"+option.widget.removeable+",sortable:"+option.widget.sortable+"}}";
						return "'" + this.id + "':{'title':'" + (this.tabTitle || "") + "','layoutID':'" + (this.tabLayout || "") + "','widgets':[" + $.jpolite.Content.saveStored(this) + "],'authority':"+a+",'refresh':"+this.tabRefresh+",'visible':'"+this.tabVisible+"','hideTree':"+this.hideTree+"}";
					}
				}
			}).get().join(",") + "}";
		},
		//隐藏tab
		hideTab: function(id){
			$.jpolite.Page.saveLayout(this,function(id){
				var tt = this.tabs[id];
				tt.tabVisible='hide';
				tt.tabLayoutDiv.hide();
				$(tt).hide();
				var f = function(t){
					var index = this.ct==t.id ? this.getTabIndex(t.id) : -1;
						if (this.ct == t.id)
							this.ct = null;
						var old = null;
						for (var i in this.his){
							if ((this.his[i] == t.id) || (this.his[i] == old)) {
								delete this.his[i];
							} else {
								old = this.his[i];
							}
						}
						if(index>=0){
							var count=this.getTabCount();
							if (index >= count) index=count-1;
							this.ct = this.getTabID(index);
						} else {
							index = this.getTabIndex(this.ct);
						}
					return index;
				}
				var index = null;
				if (typeof id == "object") {
					if (this.tabs[id.id]) {
						index = f.call(this, id);
					} else for(var i in this.tabs){
						var t = this.tabs[i];
						for(var j in id)
							if(t[j]==id[j])
								index = f.call(this, t);
					}
				} else {
					index = f.call(this, this.getTab(id));
				}
				for (var i in this.his)
					index = this.his[i];
				$.jpolite.gotoTab(index);
			},[id]);
		},
	
		showTab: function(id){
			$.jpolite.Page.saveLayout(this,function(id){	
					var t = this.tabs[id];
					t.tabVisible='show';
					t.tabLayoutDiv.show();
					$(t).show();
					$.jpolite.gotoTab(id);
			},[id])
		}
	},
	Content: {
		MTS: {}, 	//Widget Templates c1 c2 c3 c4
		layoutTemplate:"",//LayOutTemplate Template
		widgetActions: {
			loadContent: function(url, forced) {
				var x = this;
				if (typeof url === "boolean") {
					forced = url;
					url = portalSystemConfig.funcIframe;
				} else url = url ||x.url|| portalSystemConfig.funcIframe;
				if (!url || (x.loaded && !forced)) {
					$.triggerEvent("widgetActivateEvent",x);
					if (x.activateReload) {
						x.loadContent(url, true);
					}
					return;
				}
				$.jpolite.Page.loadScript(2, x.script);
				//20100811 MaDuo 为了让widget并发取页面
				$(".widgetContent", this).load(url, null, null,false);
				$.widgetize.apply(this);
				$.jpolite.Content.doLoadContent(x);
				$.triggerEvent("widgetLoadedEvent", x);
				x.loaded = true;
			},
			max: function(){
				$(".widgetContent,.actionMin", this).show();
				$(".actionMax",this).hide();
			},
			min: function(){
				$(".widgetContent,.actionMin", this).hide();
				$(".actionMax",this).show();
			},
			close: function(){
				$.jpolite.Page.saveLayout(this, function(){
					$.jpolite.Nav.removeWidget(this);
				});
			}
		},

		init: function(widgetSortable) {
			var x = $.jpolite.Content.layoutTemplate.find(".cc");//页面显示块集合

			x = $(".widget_template").get();//获取所有的显示工具模板
			for (i in x){
				var id = x[i].id || 0;
				this.MTS[id] = $(x[i]).attr("class","widget").rm();//把模板组建装入MTS中并删除自身
				
			};
			this.loadStatic();
		},
		rePosition: function (t) {
			var x = $.extend({}, portalConfig.layouts?portalConfig.layouts._default:{}, portalConfig.layouts?portalConfig.layouts[t.tabLayout || "_" + t.tabType]:{}),//获取页面布局
				bc = $('body').attr('class') || 'normal';
			if (bc != x.background) $('body').switchClass(bc, x.background);
			delete x.background;
			var containers = t.tabLayoutContainers
			for (var c in x){
				if(containers[c].hasClass("dragging")){
					containers[c].attr('class', 'cc ui-sortable ' + x[c]+' dragging');//为容器设置布局参数_layouts中某项
				}else{
					containers[c].attr('class', 'cc ui-sortable ' + x[c]);//为容器设置布局参数_layouts中某项
				}
			}
			$.jpolite.Nav.cc.get(0).w = 0;
			if (this.resize) this.resize(t.id);
		},
		//重新定义内容大小
		resize: function(id) {
			//剩余页面宽度；判断$("#functree_owner")的可见性是因为$("#functree_owner")这个即使不可见任然有9px的宽度
			var w = $("#functree_owner").is(":hidden")?$(window).width():$(window).width()-$("#functree_owner").width();
			if ($.browser.msie&&($.browser.version=="6.0")&&!$.support.style){
				w -= 3;
			}
			//在ie下设置显示的dpi，或放大显示会出现问题，所以加了下边一句 
			w -= 1;
			var cc = $.jpolite.Nav.cc.get(0);
			if (w != cc.w && cc.clientWidth > 0) {
				$.jpolite.Nav.cc.width(w);
				cc.w = w;
				var x = [];
				function doResize() {
					if (x.length == 0) return true;
					var fixWidth = 0,
						autoCount = 0,
						totalWidth = 0;
					for (var i in x) {
						if (x[i].unit == 'px') {
							fixWidth += x[i].size;
						} else if (x[i].unit == 'auto') {
							autoCount++;
						}
					}
					for (var i in x) {
						if (x[i].unit == 'px') {
							if(totalWidth+x[i].size>w){
								x[i].width = w-totalWidth;
								totalWidth += x[i].width;
							}else{
								x[i].width = x[i].size;
								totalWidth += x[i].width;
							}
						} else if (x[i].unit == '%') {
							if(totalWidth+Math.floor((w-fixWidth) * x[i].size / 100)>w){
								x[i].width = w-totalWidth;
								totalWidth += x[i].width;
							}else{								
								x[i].width = Math.floor((w-fixWidth) * x[i].size / 100);
								totalWidth += x[i].width;
							}
						}
					}
					for (var i in x) {
						if (x[i].unit == 'auto') {
							x[i].width = Math.floor((w-totalWidth) / autoCount);
						}
					}
					for (var i in x) {
						x[i].container.width(x[i].width).css("float", x[i].right ? "right" : "left");
					}
				}
				
				
				var s = $.jpolite.Nav.getTab(id)||$.jpolite.Nav.getTab(this.ct);
				if(s){
					var containers = s.tabLayoutContainers;
					for (var i in containers) {
						var c = containers[i];
						if (c.hasClass('hide')) continue;
						var s = (c.attr('class').match(/\d+(?:\%|px)/) || '').toString();//获取百分比
						var p = s=='' ?
							{size:0, unit:'auto', container: c} :
							{size:s.match(/\d+/).toString() * 1, unit:s.match(/\%|px/).toString(), container: c};
						
						p.right = c.hasClass('right');
						x.push(p);
						if (c.hasClass('last')) {
							doResize();
							x = [];
						}
					}
					doResize();
				}
				
			}
		},
		doLoadContent: function(target){
			if (target.type == "func") {
				var p = $.X.parseFunc(target.arguments);
				$(target).addClass("funcOwner");
				var funcURL = $.X.createFunc(p);
				//提前计算出content的大小
				$(".funcIFrame",target).height(Math.max($("#functree_owner").height(),$(window).height(),200)-(121+parseInt($("#header").css("top").match(/-?\d+/))));
				$('#content_loading').show();
				$('.func',target).show();
				$('.funcIFrame',target).src(funcURL, function(iframe, duration){
					$('#content_loading').hide();
					target.onload?target.onload.apply(this):'';
					if($('.funcIFrame',target).get(0))$('.funcIFrame',target).get(0).contentWindow.focus();
				});
			} else if (target.type == "widget") {
				if(target.innerUrl){//widget打开非业务功能
					$(target).addClass("funcWidgetOwner");
					$('.funcIFrame',target).src(target.innerUrl, function(iframe, duration){
						$(window).wresize();
					}).height(target.height);
					$('.func',target).show();
				}else if(target.arguments){//widget打开业务widget
					$(target).addClass("funcWidgetOwner");
					var p = $.X.parseFunc(target.arguments);
					var funcURL = $.X.createFunc(p);
					$('.funcIFrame',target).src(funcURL, function(iframe, duration){
						$(window).wresize();
					}).height(target.height);
					$('.func',target).show();
				}
			}
		},
		//加入widget方法
		//t is tab object
		addWidget: function(w, t) {
			
			var containers = t.tabLayoutContainers;
			var c = containers[w.c];
			
			if (!c) return;
			var d = portalConfig.widgets[w.id];
			
			if (!d) return;
			//Check for duplicate widget, and refuse
			//检查重复的widget
			if (t.widgets[w.id]) {
				$(t.widgets[w.id]).fadeTo(200,0.5).fadeTo(200,1)
				return;
			};
			
			var x = this.MTS[w.wt || 0].clone()[0];//取出显示一个 widget_template
			
			$.extend(x, {wc:'', wt:''}, this.widgetActions, d, w, {
				loaded: false,
				tab: t,
				type:"widget"
			});
			t.widgets[w.id] = x;
			$.jpolite.Page.loadScript(1, x.script);
			
			$(".widgetTitle", x).text(d.title);
			
			$(".widgetHeader", x).hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
			if (w.wc) $(x).addClass(w.wc);
			if (d.more) $(".actionMore", x).css("display", "block");
			c.append(x);
			
			if (t.id == $.jpolite.Nav.ct) {
				$(x).show();
				x.loadContent();
				
			}
		},
		addFunc: function(w, t) {
			var containers = t.tabLayoutDiv.get(0);
			var url = portalSystemConfig.funcIframe;
			$(containers).load(url, null, null,false);
			$.extend(containers, w);
			$.jpolite.Content.doLoadContent(containers);
			$.triggerEvent("widgetLoadedEvent", containers);
			t.tabLoaded = true;
		},
		// Make DIV.widget sections preloaded in the page active widgets 
		loadStatic: function(){
			var ma = this.widgetActions;
			$(".widget").each(function(){
				var p = this.id.split(":");	//m101:t1
				
				$.extend(this, {
					id: p[0], 
					tab: p[1],
					//url: portalConfig.widgets[p[0]],
					loaded: true
				}, ma);
				$.widgetize.apply(this);
				this.tab = $.jpolite.Nav.getTab(id);
				this.tab.widgets[this.id] = this;
			});
		},
		// Load layout defined in config.js
		loadStored: function() {
			for (var t in $.jpolite.Nav.tabs){
				var tab = $.jpolite.Nav.tabs[t];
				if (tab.tabWidgets&&!tab.isFunc) {
					var l = tab.tabWidgets.split(",");
					for (var i in l) {
						var s = l[i].split(" ");
						this.addWidget({
							id: s[0],
							c:	s[1] || 'a1',
							wc: s[2] || '',
							wt:	s[3] || ''
						}, tab)
					}
				}
				//判断页面的操纵权限
				this.checkWidgetAuthority($(tab).attr("id"));
			}
		},
		// Retrieve current layout
		saveStored: function(t) {
			var r = [], w = t.widgets;
			for (var i in w){
				if (w[i].c && w[i].removing!==true){		//Skip static widgets
					r.push("'".concat(w[i].id," ", w[i].c," ", w[i].wc," ",w[i].wt, "'"));
				}
			}
			return r.toString();
		},
		//tab页的widget关闭和拖动开关
		checkWidgetAuthority:function(id){
			var tab = $.jpolite.Nav.getTab(id);
			tab.tabLayoutDiv.find(".cc").each(function(){
				//当没有权限或者为代理时不可拖动和关闭widget;
				if(tab.tabOptions.widget.removeable==false||$.principalID) {
					$(this).find(".actionClose").addClass("readonly");
				}else{
					$(this).find(".actionClose").removeClass("readonly");
				}
				if(tab.tabOptions.widget.sortable==false||$.principalID){
					$.data(this,"sortable").options.handle = "_";
				}else{
					$.data(this,"sortable").options.handle = ".widgetHeader";
				}	
			});
		}
	},
	//提示区域
	RemindArea:{
		init:function(){
			if(!portalConfig.showRemind) return ;
			$.extend(this,{
				remindDialog:$("" +
					"<div id='remind_dialog' class='jqmWindow'>" +
						"<div id='remind_dialog_inner'>" +
							"<div class='jqmTitle'>" +
								"<table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
									"<tr>" +
										"<td class='jqmTitleLeft' width='5'>&nbsp;</td>" +
										"<td class='jqmTitleContent'><span/></td>" +
										"<td class='jqmTitleRight' width='5'>&nbsp;</td>" +
									"</tr>" +
								"</table>" +
							"</div>" +
	
							"<div class='jqmContent'>" +
								"<div class='jqmClose'/>" +
								"<div id='remind_content_loading'>" +
									"<img src='../UI/portal/system/img/loading.gif' alt='Loading...'/>" +
								"</div>" +
								"<div>" +
									"<div class='iframeMark'>" +
									"</div>" +
								"</div>" +
								"<div class='iframeDiv'>" +
									"<iframe id='remind_dialog_iframe' style='width:100%' frameborder='0' scrolling='auto'/>" +
								"</div>" +
							"</div>" +
							"<div class='jqmFooter'>" +
								"<table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
								"<tr>" +
								"<td class='jqmFooterLeft' width='150'>&nbsp;</td>" +
								"<td class='jqmFooterContent'>&nbsp;</td>" +
								"<td class='jqmFooterRight' width='5'>&nbsp;</td>" +
								"</tr>" +
								"</table>" +
							"</div>" +
						"</div>" +
					"</div>").appendTo($("body"))
				}
			);	
			for(var remindID in portalConfig.reminds){
				this.addRemind(portalConfig.reminds[remindID],remindID);
			}
		},
		addRemind:function(o,id){
			var p = {
				type:"POST",
				async:false
			};
			$.extend(p,o);
			var size = this.getRemindList().length;
			if(size>0){
				$("<div></div>").addClass("sep").appendTo($("#footer_status"));
			}
			var remind = $("<div></div>").addClass("remind").attr("id",id).appendTo($("#footer_status")).width((p.width?p.width:'100'));
			
			p.url = $.X.createFunc(p);
			//第一次执行
			setTimeout(function(){
					$.ajax({
						url: p.url,
						async: p.async||true,
						type: p.type||"POST",
						dataType:"xml",
						error:function(XMLHttpRequest, textStatus, errorThrown){
							if(remind.is(":visible")){
								$.jpolite.RemindArea.hideRemind(id);
							}
						},
						success:function(data){
							if(remind.is(":hidden")){
								$.jpolite.RemindArea.showRemind(id);
							}
							remind.empty();
							var resultData = data.documentElement;
							var codeSegment = $.jpolite.Tool.XML.getNodeText(resultData,"/root/text");
							var url = $.jpolite.Tool.XML.getNodeText(resultData,"/root/parameters/url");
							var title =$.jpolite.Tool.XML.getNodeText(resultData,"/root/parameters/title");
							var width =$.jpolite.Tool.XML.getNodeText(resultData,"/root/parameters/width");
							var height =$.jpolite.Tool.XML.getNodeText(resultData,"/root/parameters/height");
							
							$(codeSegment).find("a").click(function(){
								$.jpolite.RemindArea.openRemindDialog(url,title,width,height);
									return false;
								}
							).end().appendTo(remind);
							
							$.extend(remind.get(0),{rev:codeSegment,remindChanged:true});
						}
					});
			},5000);
			var ft = setInterval(function(){
					$.ajax({
						url: p.url,
						async: p.async||true,
						type: p.type||"POST",
						dataType:"xml",
						error:function(XMLHttpRequest, textStatus, errorThrown){
							if(remind.is(":visible")){
								$.jpolite.RemindArea.hideRemind(id);
							}
						},
						success:function(data){
							if(remind.is(":hidden")){
								$.jpolite.RemindArea.showRemind(id);
							}
							var resultData = data.documentElement;
							var flag = window["eval"]("(" + $.jpolite.Tool.XML.getNodeText(resultData,"/root/flag") + ")");
							if(flag){
								var codeSegment = $.jpolite.Tool.XML.getNodeText(resultData,"/root/text");
								if(remind.get(0).rev!=codeSegment){
									remind.empty();
									var url = $.jpolite.Tool.XML.getNodeText(resultData,"/root/parameters/url");
									var title =$.jpolite.Tool.XML.getNodeText(resultData,"/root/parameters/title");
									var width =$.jpolite.Tool.XML.getNodeText(resultData,"/root/parameters/width");
									var height =$.jpolite.Tool.XML.getNodeText(resultData,"/root/parameters/height");
									$(codeSegment).find("a").click(
										function(){
											$.jpolite.RemindArea.openRemindDialog(url,title,width,height);
											return false;
										}
									).end().appendTo(remind);
									$.extend(remind.get(0),{rev:codeSegment,remindChanged:true});
								}
							}else if($.jpolite.Tool.XML.getNodeText(resultData,"/root/code")==justep.Request.SESSION_TIMEOUT){
								var message = $.jpolite.Tool.XML.getNodeText(resultData,"/root/message");
								if (confirm(message)){//"服务器连接超时, 切换到登录页面!"
									$.jpolite.Data.system.User.logout(function(data){
										if (data && data.status) {
											$.neadUnloadConfirm = false;
											window.location.href = window.location.href.replace(/index.*\.jsp.*/,'index.jsp')
										}
									});
								}
							}
						}
					});
			},p.interval*1000*60);
			$.extend(remind.get(0),p,{id:id,ft:ft});
			
		},
		hideRemind:function(id){
			$("#"+id).hide();
			$("#"+id+" + .sep").hide();
			if($("#"+id+" + .remind").length==0){
				$("#"+id).prev(".sep").hide();
			}
		},
		showRemind:function(id){
			$("#"+id).show();
			$("#"+id+" + .sep").show();
			if($("#"+id+" + .remind").length==0){
				$("#"+id).prev(".sep").show();
			}
		},
		getRemindList:function(){
			return $("#footer").find(".remind");
		},
		openRemindDialog:function(url,title,width,height){
		
			var eventTarget = window.event.srcElement||event.target;
			var $target = $(eventTarget).parents(".remind");
			if($target.get(0).remindChanged){
				$('#remind_dialog').jqm().jqDrag(".jqmTitle", this);
				$("#remind_content_loading").show();
				$("#remind_dialog_iframe").src("about:blank",function(){
					var funcURL = $.X.createFunc({'title':title,'url':url,'width':width,'height':height});
					$("#remind_dialog_iframe").src(funcURL, function(iframe, duration){
						$("#remind_content_loading").hide();
						$target.get(0).remindChanged=false;
					});
					$('#remind_dialog').jqmShow().width(width).find(".jqmTitleContent > span").text(title);
				}).height(parseInt(height));
				$('#remind_dialog').jqmShow().width(width).find(".jqmTitleContent > span").text(title);
			}else{
				$('#remind_dialog').jqmShow().width(width).find(".jqmTitleContent > span").text(title);
			}
			
		}
	},
	
	//初始化导航标签
	init: function(options){
		var s = $.extend({
	 		cts: "#main_nav",
	 		ctm: "#main_nav_more",
	 		ctb: "#main_nav_more_btn",
	 		its: "li",
	 		itb: "dd",
	 		cfo: {fn:$.fn.fadeOut,speed:100},
	 		cfi: {fn:$.fn.fadeIn,speed:300},
	 		navInit: TraditionalTabs,//构建标签栏的方法
	 		navInitArguments: {},
	 		widgetSortable: true
		}, options);
		//初始化Page的_loadLayout和_saveLayout为后台请求方法
		if (s.layoutPersistence) {
			this.Page._loadLayout = s.layoutPersistence[0];
			this.Page._saveLayout = s.layoutPersistence[1];
		}
		//Page的Script读取等级
		this.Page._loadScriptLevel = s.loadScriptLevel || this.Page._loadScriptLevel;
		//初始化layoutTemplate作为显示
		$.jpolite.Content.layoutTemplate = $("#layoutTemplate").clone(true);
		$.jpolite.Content.funcTemplate = $("#funcTemplate").clone(true);
		
		$("#layoutTemplate").remove();
		
		//初始化提示框
		$.jpolite.RemindArea.init();
		//隐藏于显现的动画效果
		this.Nav.cfo = s.cfo || this.Nav.cfo;
		this.Nav.cfi = s.cfi || this.Nav.cfi;
		//初始化导航
		this.Nav.init(s.cts, s.ctm, s.ctb, s.its, s.itb, s.navInit, s.navInitArguments);
		
		this.Content.init(s.widgetSortable);
		//为了安全删除初始化方法
		delete this.Nav.init;
		delete this.Nav.loadStatic;
		delete this.Content.init;
		delete this.Content.loadStatic;
		delete $.jpolite.init;
	},
	getTab: function(id) {
		return this.Nav.getTab(id);
	},
	getTabID: function(index) {
		return this.Nav.getTabID(index);
	},
	getTabIndex: function(id) {
		return this.Nav.getTabIndex(id);
	},
	getTabCount: function() {
		return this.Nav.getTabCount();
	},
	gotoTab: function(id) {
		var tab = this.getTab(id) || this.getTab(0);

		if($(tab).parent("#main_nav_more").length > 0){
			$("#main_nav>li.on").toggleClass("on").addClass("off");
		}else{
			$("#main_nav_more>li.on").toggleClass("on").addClass("off");
		}
		
		if(tab&&tab.isFunc){
			if ($(tab).on($.jpolite.Nav.tabList(".on"))) {
				$.jpolite.Nav.initNav({state:"click"});
				$.jpolite.Nav.switchToFunc(tab.id);
			};
		}else{
			$(tab).click();
		}
	},
	addTab: function(id, param, type) {
		var tab = null;
		$.jpolite.Page.saveLayout(this, function(id, param, type){
			tab = this.Nav.addTab(id, param, type);
		}, [id, param, type]);
		return tab;
	},
	removeTab: function(id) {
		if (typeof id == "object") {
			if (this.Nav.tabs[id.id]) {//如果传入的为tab对象
				if(this.Nav.tabs[id.id].isFunc){
					this.Nav.removeFuncTab(id.id);
				}else{
					this.Nav.removeTab(id.id);
				}
			} else {//如果传入的为tab类型
				for(var i in id){
					if(id[i]=="dynamic"){						
						this.Nav.removeFuncTab(id);
					}else if(id[i]=="stored"){
						this.Nav.removeTab(id);
					}
				}
			}
		} else {//传入的为tab的Id
			if(this.getTab(id).isFunc){
				this.Nav.removeFuncTab(id);
			}else{
				this.Nav.removeTab(id);
			}
		}
	},
	moveTab: function(id, n) {
		this.getTab(id).offset(n);
	},
	renameTab: function(id, t) {
		this.getTab(id).rename(t);
	},
	changeTabRefreah: function(id,state) {
		this.getTab(id).changeRefreahState(state);
	},
	hideTab:function(id){
		this.Nav.hideTab(id);
	},
	showTab:function(id){
		this.Nav.showTab(id);
	},
	getTabAuthority:function(id){
		return this.getTab(id).tabOptions;
	},
	setLayout: function(l, tab_id) {
		this.getTab(tab_id).setLayout(l);
	},
	addWidget: function(w, tab_id) {
		$.jpolite.Page.saveLayout(this, function(w, tab_id){
			this.Content.addWidget(w, this.getTab(tab_id));
		}, [w, tab_id]);
	},
	resetLayout: function() {
		$.jpolite.Page.saveLayout(this,function(){
			$.jpolite.Page.resetLayout();
		},[]);
	},
	replaceWidget: function(col, ids) {
		$.jpolite.Page.saveLayout(this, function(col, ids){
			var x = $(".widget:visible", this.Content[col]).get();
			var t = this.getTab();
			for (var i in x) x[i].close();
			for (i in ids) this.Content.addWidget({id: ids[i], c: col}, t);
		}, [col, ids]);
	},
	//初始化用户信息与服务器信息
	ClientInfo:{
		params:{},
		userName:"",
		businessId:"",
		hostPath:"",
		locale:"",
	    init:function(options){
			if(_init_userInfo){	
				var datainfo = _init_userInfo;
				$.extend($.jpolite.ClientInfo.params,datainfo);
				$.jpolite.ClientInfo.userName = datainfo.userName;
				$.jpolite.ClientInfo.businessId = datainfo.businessId;
				$.jpolite.ClientInfo.locale = datainfo.locale;
				$.jpolite.ClientInfo.hostPath = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname.split("/")[1];
			}
		},
		createURL:function(func){
			var url = func.url;
			if((url.substring(0,4)).toLowerCase() =="http"){
				url = url;
			}else{
				var list = url.split("?",2);
				var split = "";
				if (list.length==1) {
					split = "?";
					url = $.jpolite.ClientInfo.hostPath+ url + split
					+ "bsessionid="+ $.jpolite.ClientInfo.businessId
					+ "&language=" + $.jpolite.ClientInfo.locale
					+ (func.process?"&process="+func.process:"")
					+ (func.activity?"&activity=" + func.activity:"")
					+ (func.params?func.params:"")
					+ (func.executor?"&executor="+func.executor:($.principalID?"&executor="+$.principalID:""));
				} else if (list.length==2) {
					 if (list[1]!="") {
						 split = "&";
					 }
					url = $.jpolite.ClientInfo.hostPath+ url + split
					+ "bsessionid="+ $.jpolite.ClientInfo.businessId
					+ "&language=" + $.jpolite.ClientInfo.locale
					+ (list[1].indexOf("process")==-1&&func.process?"&process="+func.process:"")
					+(list[1].indexOf("activity")==-1&&func.activity?"&activity=" + func.activity:"")
					+ (func.params?func.params:"")
					+ (func.executor?"&executor="+func.executor:($.principalID?"&executor="+$.principalID:""));
				}
			}
			
				
			return url;
		}
	},
	//被代理者信息
	PrincipalInfo:{
		params:{},
		userName:"",
		init:function(options){
			if(_init_principalInfo){
				var datainfo = _init_principalInfo;
				$.extend($.jpolite.PrincipalInfo.params,datainfo);
				$.jpolite.PrincipalInfo.userName = datainfo.userName;
			}
		}
	},
	Tool:{
		XML:{
			resultType:{single: 'single', array: 'array'},
			nodeType:{
				ELEMENT: 1,
				ATTRIBUTE: 2,
				TEXT: 3,
				CDATA_SECTION: 4,
				ENTITY_REFERENCE: 5,
				ENTITY: 6,
				PROCESSING_INSTRUCTION: 7,
				COMMENT: 8,
				DOCUMENT: 9,
				DOCUMENT_TYPE: 10,
				DOCUMENT_FRAGMENT: 11,
				NOTATION: 12
			},
			xmlToString:function(xmlNode){
					if (!this.browser.IE){
						var xmlSerializer = new XMLSerializer();
						return xmlSerializer.serializeToString(xmlNode);
					} else
						return xmlNode.xml;
			},
			browser:{
				IE: !!(window.attachEvent && !window.opera),
				FF: navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1
			},
			getNodeText:function(context, xpathExp, defaultValue){
				var finded = xpathExp ? this.eval(context, xpathExp, this.resultType.single) : context;
				if(finded && (finded.nodeType == this.nodeType.ELEMENT)){
					finded = this.eval(finded, "./text()", this.resultType.single);
				}
				return (finded && finded.nodeValue)? ""+finded.nodeValue : (defaultValue != undefined)? defaultValue : null;
			},
			getNSResolver:function(str){
				if (!str) return null;
				var list = str.split(' ');
				var namespaces = {};
				for(var i=0; i<list.length; i++){
					var pair = list[i].split('=');
					var fix = $.jpolite.Tool.String.trim(pair[0]).replace("xmlns:", "");
					namespaces[fix] = $.jpolite.Tool.String.trim(pair[1]).replace(/"/g, "").replace(/'/g, "");
				}
				return function(prefix){ return namespaces[prefix];};
			},
			eval:function(context, xpathExp, resultType, namespaces){
				if (this.browser.IE){
					namespaces = namespaces ? namespaces : "";
					var doc = (context.nodeType == this.nodeType.DOCUMENT) ? context : context.ownerDocument; 
					doc.setProperty("SelectionNamespaces", namespaces);		
					if (resultType == this.resultType.single){
						var result = context.selectSingleNode(xpathExp);
					}else{
						var result = context.selectNodes(xpathExp) || [];
					}
					doc.setProperty("SelectionNamespaces", "");
					return result;
				}else{
					var node = context;
					var xmlDoc = (context.nodeName.indexOf("document") == -1)? context.ownerDocument : context;
					var retType = (resultType == this.resultType.single)? XPathResult.FIRST_ORDERED_NODE_TYPE : XPathResult.ANY_TYPE;
					var col = xmlDoc.evaluate(xpathExp, node, this.getNSResolver(namespaces), retType, null);
					
					if (retType == XPathResult.FIRST_ORDERED_NODE_TYPE){
						return col.singleNodeValue;
					}else{
						var thisColMemb = col.iterateNext();
						var rowsCol = new Array();
						while (thisColMemb){
							rowsCol[rowsCol.length]=thisColMemb;
							thisColMemb=col.iterateNext();
						}
						return rowsCol;
					}
				}
			}
		},
		String:{
			trim:function(str){
				return (str || "").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
			}
		}
	}
});

jQuery.fn.extend({
	load: function( url, params, callback, async) {
		if ( typeof url !== "string" ) {
			return _load.call( this, url );

		// Don't do a request if no elements are being requested
		} else if ( !this.length ) {
			return this;
		}

		var off = url.indexOf(" ");
		if ( off >= 0 ) {
			var selector = url.slice(off, url.length);
			url = url.slice(0, off);
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params ) {
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = null;

			// Otherwise, build a param string
			} else if ( typeof params === "object" ) {
				params = jQuery.param( params, jQuery.ajaxSettings.traditional );
				type = "POST";
			}
		}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			async: async,
			dataType: "html",
			data: params,
			complete: function( res, status ) {
				// If successful, inject the HTML into all the matched elements
				if ( status === "success" || status === "notmodified" ) {
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div />")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(res.responseText.replace(rscript, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						res.responseText );
				}

				if ( callback ) {
					self.each( callback, [res.responseText, status, res] );
				}
			}
		});

		return this;
	}
});


/*
 * file from "UI\portal\system\js\api.js"
 */

if(!justep)var justep = {};
justep.Portal={};
justep.Portal.passwordRule={},
justep.Portal.welcomeMsg="";
justep.Portal.FuncTree={};

justep.Portal.FuncTree.hide =function(){
	$("#functree_owner").get(0).close();
	$("#functree_owner").hide();
	$("#content").attr("style", "margin-left:0px");
}
justep.Portal.FuncTree.show =function(){
	$("#functree_owner").get(0).open();
	$("#functree_owner").show(); 
	if($("#content").css("margin-left")=="0px"){
		$("#content").css("margin-left","9px");
	}
}
justep.Portal.FuncTree.toggle =function(){
	if($("#functree_owner").is(":visible")){
		$("#functree_owner").get(0).close();
		$("#functree_owner").hide();
	}else{
		$("#functree_owner").get(0).open();
		$("#functree_owner").show();
	}
}
justep.Portal.FuncTree.openItem =function(index){
	if(typeof index =="number"){
		var $functree =  $(".accordion").children("dt")
		var i = $functree.length>index?index:0;
		$functree.eq(i).click();
	}
}
justep.Portal.Tab={};

justep.Portal.Tab.getCurrentId =function(){
	return $.jpolite.Nav.ct;
}

justep.Portal.Tab.open =function(title,url,hidetreeable,callback,executor){
	var option ={title:title,url:url,hideTree:hidetreeable||false,executor:executor};
	return $.X.runFunc(option,callback);
}
justep.Portal.Tab.hide =function(id){
	if($("#"+id).is(":visible")){
		$.jpolite.hideTab(id);
	}
}
justep.Portal.Tab.show =function(id){
	if($("#"+id).is(":hidden")){
		$.jpolite.showTab(id);
	}
}
justep.Portal.Tab.toggle =function(id){
	if($("#"+id).is(":visible")){
		$.jpolite.hideTab(id);
	}else{
		$.jpolite.showTab(id);
	}	
}
justep.Portal.Tab.setAuthority=function(id,tabremoveable,widgetaddable,widgetremoveable,widgetsortable){
	var tab = $.jpolite.getTab(id);
	tab.tabOptions = {tab:{removeable:tabremoveable},widget:{addable:widgetaddable,removeable:widgetremoveable,sortable:widgetsortable}}
	$.jpolite.Content.loadStored();
}

justep.Portal.Tab.getWindowById=function(id){
	var tabLi = document.getElementById(id);
	if (!tabLi || !tabLi.tabLayoutDiv) return null; 
	var iframe = $("iframe", tabLi.tabLayoutDiv).get(0);
	if(!iframe) return null;
	return iframe.contentWindow;
}

justep.Portal.passwordValidator = function(desc,minSize,maxSize,regs){
	$.extend(justep.Portal.passwordRule,{desc:desc?desc:"",minSize:minSize?minSize:{},maxSize:maxSize?maxSize:{},regs:regs?regs:[]});
}

justep.Portal.getUserInfo = function(){
	return $.jpolite.ClientInfo.params;
}

justep.Portal.getPrincipalInfo = function(){
	return $.jpolite.PrincipalInfo.params;
}

justep.Portal.setWelcomeMsg =function(msg){
	$("#footer_status_info","#footer").text(msg);
}

justep.Portal.openPrincipalPage = function(principalID){
	if(!$.proxyPageList)$.proxyPageList =[];
	var oper = window.open("index.w?principalID="+principalID,"principalID_"+principalID);
	$.proxyPageList.push(oper);
	return oper;
}
/*
 * file from "UI\portal\system\js\func.js"
 */

if (!$.X) $.X = {};
//解析为 $对象
$.X.parseFunc = function(func) {
	var p = {};
	if (typeof func == "string") {
		try {
			$.extend(p, window["eval"]("(" + func + ")"));
		} catch(e) {
			alert("$.X.parseFunc\n" + e.description + "\n" + func);
		}
	} else {
		$.extend(p, func);
	}
	//加日志记录标记
	if(p.url && p.url.indexOf("&$log=")==-1 && p.url.indexOf("?$log=")==-1){
		if(p.url.indexOf("?")!=-1){
			p.url += "&$log=1";
		}else{
			p.url += "?$log=1";
		}
	}
	return p;
};

//为功能构建连接地址
$.X.createFunc = function(func){
	var funcURL = $.jpolite.ClientInfo.createURL(func);
	return funcURL;
}

//把符号全部换成"_"
$.X.getFuncID = function(func){
	var p = (typeof func == "string")? $.X.parseFunc(func) : func;
	return (p.url +p.params+p.executor).replace(/[^a-z0-9A-Z_]/g, "_");
};
//页面打开
//onload回调函数
$.X.runFunc = function(func,onload){
	var p = $.X.parseFunc(func);
	
	$.alert({title:'Run Func Notification', text:p.title});
	
	if(p.openType=="blank"){
		var funcURL = $.X.createFunc(p);
		window.open(funcURL);
	} else if(p.openType=="current"){
		var funcURL = $.X.createFunc(p);
		window.location.href = funcURL;
	} else if(p.openType=="dialog"){
		window.Light.portal.showDialog(p.url, p.title, p.width || 600, p.height || 400);
	} else {
		// _SA_tasks_work_record_mainActivity_w
		
		var tid = $.X.getFuncID(p);
		
		if ($.jpolite.getTab(tid)) {
			$.jpolite.gotoTab(tid);
		} else {
			var tab = $.jpolite.addTab(tid,$.extend({isFunc:true},p));
			onload?$.extend(tab.tabLayoutDiv.get(0),{'onload':onload}):'';//添加回调函数到页面上当加载完成时调用
			$.jpolite.gotoTab(tid);
		}
		return tid;//返回生成Tab的ID
	}
	return true;
};
/*
 * file from "UI\portal\system\js\functree.js"
 */

(function(){
	
	var loadShortcuts = function(){
		var o = null;
		$.jpolite.Data.system.Layout.loadShortcuts(function(data){
			if (data && data.status) {
				delete data.status;
				o = data;
			}
		});
		return o||portalConfig.shortcuts;
	};
	
	var loadInitShortcuts = function(){
		var data = _init_shortCuts;
		if (data && data.status) {
			delete data.status;
		}
		return data||portalConfig.shortcuts;
	};
	
	var _genJSON = function(node){
		return "{"
			+ "\"title\":\"" + (node.label || node.title|| "") + "\","
			+ "\"url\":\"" + (node.url || "") + "\","
			+ "\"process\":\"" + (node.process || "") + "\","
			+ "\"activity\":\"" + (node.activity || "") + "\","
			+ "\"width\":\"" + (node.width || "") + "\","
			+ "\"height\":\"" + (node.height || "") + "\","
			+ "\"openType\":\"" + (node.openType || "") + "\","
			+ "\"params\":\"" + (node.params || "") + "\","
			+ "\"id\":\"" + (node.id || "") + "\","
			+ "\"icon\":\"" + (node.icon16 || node.icon || "") + "\","
			+ "\"thumbnail\":\"" + (node.thumbnail || "") + "\","
			+ "\"refresh\":"+(node.refresh || false)+","
			+ "\"hideTree\":"+(node.hideTree || false)+""
			+"}";
	};
	
	$.fn.extend({
		FuncTreeShortcuts: function(){
			var x = $(this);
			x.find("._shortcuts_").replaceWith("");
			var shortcuts = loadShortcuts();
			var html = "";
			if(shortcuts&&shortcuts.length > 0){
				html += "<dt class='_shortcuts_ _shortcuts_hover_ _shortcuts_dt_' rel=''><div class='icon'><img width='16px' height='16px' src='" + x.attr("iconPath") + "bookmark.gif'/></div><span title='快捷方式'>快捷方式</span></dt>";
				html += "<dd class='_shortcuts_ _shortcuts_dd_'>";
				html += "<ul class='jqueryFuncTree'>"
				for(var i in shortcuts){
					var node = shortcuts[i]; 
					var id = node.id || "";
					var json = _genJSON(node);
					var kind = "file";
					html += "<li class='_shortcuts_hover_" + kind + " " + id + "'>";
					html += "<a class='_shortcuts_link_ " + kind + "' rel='" + json + "' herf='javascript:void(0)' title='" + node.title + "'>" + node.title + "</a>";
					html += "</li>";
				}
				html += "</ul>";
				html += "</dd>";
			}
			var dl = x.find("dl");
			$(html).prependTo(dl);
			dl.find("._shortcuts_link_").click(function(){
				$.X.runFunc($(this).attr('rel'));
			});
			dl.find("._shortcuts_hover_").hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
			dl.find("._shortcuts_dt_").click(function(){
				var x = $(this);
				if (!x.on()) {
					x.removeClass("on");
					x.siblings("dd:visible").slideToggle();
					return;
				}
	
				x.siblings("dd:visible").add(x.next()).slideToggle();
			}).eq(0).click();
		},
		
		//$.FuncTree
		FuncTree: function(iconPath, showShortcuts, fn) {
			if (this.length == 1) {
				//判断传入是否为一个函数
				if ($.isFunction(showShortcuts)){
					fn = showShortcuts;
					showShortcuts = false;
				} else if (showShortcuts!=true){
					showShortcuts = false;
				}
				
				var x = $(this);
				x.empty();
				x.attr("iconPath", iconPath || "../UI/portal/x5/img/icon/");
				
					var data = _init_funcTree;
					function genTree(nodes, level){
						var html = "";
						var target = nodes.target||"";
						if(target==""){//自定义widget
							if (nodes.childNodes && (nodes.childNodes.length > 0)) {
									var style = (level > 0) ? "display:none;" : "";
									html += "<ul class='jqueryFuncTree' style='" + style + "'>"
									for(var i in nodes.childNodes){
										var node = nodes.childNodes[i];
										//var kind = node.url ? "file" : "directory collapsed";
										var kind = (node.childNodes && (node.childNodes.length > 0)) ? "directory collapsed" : "file";
										var id = node.id || "";
										
										html += "<li class='" + kind + " " + id + "'>";
										if(node.url){
											var json = _genJSON(node);
											html += "<a class='" + kind + "' rel='" + json + "' herf='javascript:void(0)' title='" + node.label + "'>" + node.label + "</a>";
										}else{
											html += "<a class='" + kind + "' herf='javascript:void(0)' title='" + node.label + "'>" + node.label + "</a>";
										}
										
										if(node.psmCount&&parseInt(node.psmCount)>1){
											html +="<div class='depart' process="+node.process+" activity="+node.activity+"><div class='buttonbox'></div></div>";
										}
										html +="<div style='clear:left'></div>";
										html += genTree(node, level + 1);
										html += "</li>";
										
									}
									html += "</ul>";
								}		
						}
						return html;
					}

					if(data && data.status){
						var dataTmp = $.triggerHandlerEvent("functreeLoadData", data);
						data = dataTmp || data;
						var html = "";
						if(showShortcuts){
							var shortcuts = loadInitShortcuts();
							if(shortcuts&&shortcuts.length > 0){
								html += "<dt class='_shortcuts_' rel='{\"name\":\"快捷方式\"}'><div class='icon'><img width='16px' height='16px' src='" + x.attr("iconPath") + "bookmark.gif'/></div><span title='快捷方式'>快捷方式</span></dt>";
								html += "<dd class='_shortcuts_'>";
								html += "<ul class='jqueryFuncTree'>"
								for(var i in shortcuts){
									var node = shortcuts[i]; 
									var id = node.id || "";
									var json = _genJSON(node);
									var kind = "file";
									html += "<li class='" + kind + " " + id + "'>";
									html += "<a class='" + kind + "' rel='" + json + "' herf='javascript:void(0)' title='" + node.title + "'>" + node.title + "</a>";
									html += "</li>";
								}
								html += "</ul>";
								html += "</dd>";
							}
						}
						for(var i in data.childNodes){
							var node = data.childNodes[i];
							var json = _genJSON(node);
							
							var id = node.id || "";
							var icon = (node.icon16 || node.icon) ? "<img width='16px' height='16px' src='" + x.attr("iconPath") + (node.icon16 || node.icon) + "'/>" : "";
							var isURL = (node.url) ? "url" : "";
							
							html += "<dt class='" + id + " " + isURL + "' rel='" + json + "'><div class='icon'>" + icon + "</div><span  title='" + node.label + "'>" + node.label + "</span></dt>";
							html += "<dd class='" + id + "'>";
							html += genTree(node, 0);
							html += "</dd>";
						}
						
						html = "<dl class='accordion'>" + html + "</dl>";
						var dl = $(html).appendTo(x);

						dl.find(".url").click(function(){
							if($(this).hasClass("on")||$(this).hasClass("expanded")) return;
							if(fn){
								fn.call(this, $(this).attr("rel"));
							}else{
								$.X.runFunc($(this).attr("rel"));
							}
						});
						dl.children("dt").click(function(){
	
							var rel = window["eval"]("(" + $(this).attr("rel") + ")");
							return $.triggerHandlerEvent("functreeClickTitle", rel);
						});
						dl.children("dd").funcTree(null,function(func, dd){
							if(dd && !$(dd).hasClass("expanded")) return;
							if(fn){
								fn.call(this, func);
							}else{
								$.X.runFunc(func);//标签响应 
							}
						});
						//多岗下拉菜单
						function buildMenu(){     
							$(".depart").click(function(e){
								var  departDiv = this;
								if($(".depart").hasEvent("mouseout"))$(".depart").unbind("mouseout");
								$(".depart").removeClass("open");
								$("div.departMenu").hide();
								if($(departDiv).attr("loaded")){
									$(departDiv).mouseout(function(){
										s = setTimeout(function(){
											$(".depart").removeClass("open");
											$("div.departMenu").hide();
										},100);
										this.menu.hover(function(){
											if(s)clearTimeout(s);
										},function(){
											$(".depart").removeClass("open");
											$("div.departMenu").hide();
										});
										$(this).unbind("mouseout");
									});
									departDiv.menu.show().css({top:($(departDiv).offset().top)+"px",left:($(departDiv).offset().left+$(departDiv).width())+"px"}).hover(function(){
									},function(){
										$(".depart").removeClass("open");
										$("div.departMenu").hide();
									});
									$(departDiv).addClass("open");
								}else{
									$.jpolite.Data.system.User.getPersonMembers($(this).attr('process'),$(this).attr('activity'),function(data){
										if(data&&data.status){
											$(".depart").removeClass("open");
											$("div.departMenu").hide();
											var x = $(departDiv).offset().left+$(departDiv).width();
											var y = $(departDiv).offset().top;
											var $menu=popDiv(x,y,data,departDiv); 
											$.extend($(departDiv).get(0),{menu:$menu,loaded:true});
											$menu = null;
										}
									});
								}
								departDiv = null;
							});
							function popDiv(x,y,data,rel){
								if(data&&data.psmList){
									$(rel).addClass("open");
									var html =  "<div class='departMenu'><div class='menubox'><ul>";
									for(var i in data.psmList){
										if(i==0){
											html+="<li  fid="+data.psmList[i].fid+" class='first'><a href='javaScript:void(0)' title='"+data.psmList[i].fname+"'>"+data.psmList[i].fname+"</a></li>";
										}else{	
											html+="<li  fid="+data.psmList[i].fid+" class='other'><a href='javaScript:void(0)' title='"+data.psmList[i].fname+"'>"+data.psmList[i].fname+"</a></li>";
										}
									}
									html+= "</ul></div></div>"; 
									var $menu = $(html).appendTo("body").hover(function(){
									},function(){
										$(".depart").removeClass("open");
										$("div.departMenu").hide();
									});
									$menu.css({top:y+"px",left:x+"px"});
									$(rel).mouseout(function(){
										var s = setTimeout(function(){
											$(".depart").removeClass("open");
											$("div.departMenu").hide();
										},100);
										$menu.hover(function(){
											if(s)clearTimeout(s);
										},function(){
											$(".depart").removeClass("open");
											$("div.departMenu").hide();
										});
										$(this).unbind("mouseout");
									});
									$menu.find("li").each(function(i){
										if(i>0){
											$(this).hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
										}
									});
									$menu.find("li").click(function(){
										var fid = $(this).attr("fid");
										var func = window["eval"]("(" + $(rel).prev("a").eq(0).attr("rel") + ")");
										func.executor = fid;
										$.X.runFunc(func);
										$(".depart").removeClass("open");
										$menu.hide();
										return false;
									});
									return $menu;
								}
							}
						};
						buildMenu();
						dl.find("dt").hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
						dl.find("li").hover(function(){$(this).addClass("hover");}, function(){$(this).removeClass("hover");});
						$.fn.Accordion.call(dl,null);
						$.triggerHandlerEvent("functreeLoadTree", dl);
					}
			}
		}
	});
	
	$.addControls({
		".functree":	[$.fn.FuncTree]
	});
	
}());
/*
 * file from "UI\portal\system\js\reserved.js"
 */

$(function(){
/*此方法用于判断是否是jpolite*/
	if (!window._JPolite_) window._JPolite_=true;
/*此部分为了兼容OPS*/
	window.xformsHidenMask = function(forceClose){
	var win = window;if(!win){return;}
	if(forceClose){win.__isSubmitEvent=false;}
	if(win.__isSubmitEvent){return;}
	var doc = win.document;
	var mask = doc.getElementById("x5_plat_mask");
	if(mask){mask.style.display="none";var img = doc.getElementById("x5_plat_mask_img");if(img && img.style){
	img.style.display="none";}}}
/*此部分兼容老板本-关闭当前标签页*/
	window.closeFocusPortalTabFromPortlet = function(b){
		$.jpolite.Nav.tabs[$.jpolite.Nav.ct].close();
	}
/*此部分兼容老板本-打开标签页*/
	window.addAutoTabPortlet = function(tabTitle, portletName, portletTitle, portletParams, portletExtParam){
		if(portletParams.indexOf('$mode$=newwindow')!=-1){
			portletParams = portletParams.replace('$mode$=newwindow&','').replace('$mode$=newwindow','');
			portletParams=portletParams.replace('${username}',Light.portal.userId);
			window.open (portletParams.replace('$justep-target-url$=',''), 'newwindow');
			return true;
		}else{
			//if(portletParams && portletParams.indexOf('$justep-target-url$=/')==0){ 
				//xformsShowMask();
			//}
			return addTabAndPortlet(null, tabTitle, "PortletWindow2", 1, 5, 1, 1, portletName, portletTitle, 0, portletParams, portletExtParam);
		}
	}
	window.addTabAndPortlet = function(tIndex, tabTitle, portletWindow, tabColumns, tabBetween, tabCloseable, tabDefaulted, portletName, portletTitle, portletColumn, portletParams, portletExtParam) {
		tabTitle = tabTitle || "New Tab";
		var url = portletParams.replace("$justep-target-url$=", "");
		return $.X.runFunc({"title":tabTitle,"url":url,"process":"","activity":"","width":"","height":"","target":"","params":"","id":"","icon":"","thumbnail":""});
	}
/*注销*/
	if (!window.Light) window.Light={};
	if (!window.Light.portal) window.Light.portal={};
	if (!window.Light.portal.logout) window.Light.portal.logout=function(){
		$.neadUnloadConfirm = false;
		var url = window.location.href.replace(/index.*\.w.*/,'login.w');
		var client = $.urlParam('client');
		var query = [];
		if(client) query.push('client=' + client);
		if(typeof _adURL != 'undefined') query.push('ad=' + encodeURIComponent(_adURL));
		if(query.length>0)
			url += '?' + query.join('&');
		
		window.location.href = url;
	};
/*弹出对话框*/
	var _func_dialog_inited = false;
	function init_func_dialog(){
		if(_func_dialog_inited) return;
		$("<div id='func_dialog' class='jqmWindow'><div id='func_dialog_inner'><div class='jqmTitle'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td class='jqmTitleLeft' width='5'>&nbsp;</td><td class='jqmTitleContent'><span/></td><td class='jqmTitleRight' width='5'>&nbsp;</td></tr></table></div><div  id='func_content_loading'><img src='../UI/portal/system/img/loading.gif' alt='Loading...'/></div><div class='jqmContent'><div class='jqmClose'/><div><div class='iframeMark'></div></div><div class='iframeDiv'><iframe id='func_dialog_iframe' style='width:100%' frameborder='0' scrolling='auto'/></div></div><div class='jqmFooter'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td class='jqmFooterLeft' width='150'>&nbsp;</td><td class='jqmFooterContent'>&nbsp;</td><td class='jqmFooterRight' width='5'>&nbsp;</td></tr></table></div></div></div>").appendTo($("body"));
		$('#func_dialog').jqm().jqDrag(".jqmTitle", this);
		_func_dialog_inited = true;
	}
	if (!window.Light.portal.showDialog) window.Light.portal.showDialog=function(url,title,width,height){
		init_func_dialog();
		$('#func_dialog_iframe').src("about:blank",function(){
			$("#func_content_loading").show();
			var funcURL = $.X.createFunc({'title':title,'url':url,'width':width,'height':height});
			$('#func_dialog_iframe').src(funcURL, function(iframe, duration){
				$("#func_content_loading").hide();
			});
			$('#func_dialog').jqmShow().width(width).find(".jqmTitleContent > span").text(title);
		}).height(height);
	};
/*设置标签页标题*/
	if (!window.Light.portal.setCurrentTabLabel) window.Light.portal.setCurrentTabLabel=function(label){
		alert("TODO::jpolite.reserved.js");
	};
/*接管激活和关闭*/
	$.bindEvent({
		//widget 激活时候的事件响应
		"widgetActivateEvent": function(e, target){
			if ($(target).find(".funcIFrame").length > 0) {
				var iframe = $(target).find(".funcIFrame").get(0);
				try {
					if (iframe.contentWindow.tabActive)
						iframe.contentWindow.tabActive(target.title);
					if($.jpolite.Nav.getTab($.jpolite.Nav.ct).tabRefresh||target.refresh){
						iframe.contentWindow.document.location.reload();
					}
				} catch(e) {
				}finally{ 
					iframe = null
				}
			}
		},
		//tab 激活时候的事件响应
		"tabActivateEvent":function(e,target){
			if(target.isFunc&&target.tabLoaded){
				var iframe =target.tabLayoutDiv.find(".funcIFrame").get(0);
				if (iframe.contentWindow.tabActive)
					iframe.contentWindow.tabActive(target.title);
				if(target.tabRefresh){
					iframe.contentWindow.document.location.reload();
				}
				iframe = null;
			}
		},
		"tabCloseEvent": function(e, target){
			var iframe = $(target.widgets.wFunc).find(".funcIFrame").get(0) || $(target.tabLayoutDiv).find(".funcIFrame").get(0);
			if (iframe) {
				try {
					if (iframe.contentWindow.confirmClose)
						return iframe.contentWindow.confirmClose(target.title);
				}catch(e){
				}finally{ 
					iframe = null
				}
			}
			return true;
		}
	});
	/*自动运行隐藏功能
	if(window._auto_run_hide_funcs){
		var $_hide_funcs = $("<div id='_hide_funcs' style='display:none'></div>").appendTo($("body"));
		for(var i in _auto_run_hide_funcs){
			$.jpolite.Data.system.Func(_auto_run_hide_funcs[i], function(data){
				if (data && data.status) {
					$_hide_funcs.append($("<iframe src='"+data.funcURL+"'/>"));
				}
			});
		}
	}
	*/
});
