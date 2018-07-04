/*
 * file from "UI\system\service\doc\office\config.js"
 */

/*officeViewerDialog.w使用的临时配置文件，将来要在数据库中实现
_seal_doc_node_sid 为签章图片在知识中心所在目录的sid*/
var _seal_doc_node_sid = "";
/* _seal_doc_node_sid 是否在附件的word编辑框中显示“插入签章”动作 */
var _seal_default_show = true;
/* _word_revision_init 编辑时是否显示文档的修订记录 */
var _word_all_history = false;
/*_office_isPrint 打开office文档时，打印按钮是否可用*/
var _office_isPrint = true;
/*_read_file_type读取文件，默认打开的格式*/
var _read_file_type = ".doc,.docx,.xls,.xlsx,.ppt,.pptx,.mpp,.vsd,.txt,.text,.jsp,.java,.html ,.htm,.xml,.css,.rtf,.wml,.jpg,.jpeg,.jpe,.png,.gif,.tiff,.tif,.svg,.svgz,.svg,.pdf,.wrl,.smil,.js,.vbs,.rdf,.odt,.ott,.uof";
/*是否显示菜单*/
var _show_menubar = false;
/*cab文件的动态版本*/
var _ocx_version="5,2,7,2601";

/*
 * file from "UI\system\service\doc\common\base64.js"
 */

/**
 * 
 * Base64 encode / decode http://www.webtoolkit.info/
 * 
 */

var Base64 = {

	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function(input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output + this._keyStr.charAt(enc1)
					+ this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3)
					+ this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function(input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while (i < utftext.length) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12)
						| ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

}
/*
 * file from "UI\system\service\doc\office\officeViewer.js"
 */

/**
 * OfficeViewer JavaScript, version 0.0.0.7 (c) 2000-2009 Justep

 * 
 * @author : CG
 * @date : 2009-09-10
 */

/**
 * Assert					断言函数
 * OfficeViewerClassID		获取OfficeViewer的classid
 * IsOfficeViewer			判断是否是OfficeViewer
 * CreateOfficeViewer		创建OfficeViewer
 * DestroyOfficeViewer		释放OfficeViewer
 * OfficeViewerEval			执行OfficeViewer指令
 * CheckViewer				检查source是否为OfficeViewer
 * CheckInstalled			检查操作系统是否安装了MSOffice中某个应用程序
 * CreateDoc				创建MSOffice中某个应用程序的文档
 * CreateWord				创建MSWord
 * CreateExcel				创建MSExcel
 * CreatePowerPoint			创建MSPowerPoint
 * CreateVisio				创建MSVisio
 * CreateProject			创建MSProject
 * IsDocOpened				判断是否打开了MSOffice中某个应用程序的文档
 * IsWordOpened				判断是否打开了MSWord
 * IsExcelOpened			判断是否打开了MSExcel
 * IsPowerPointOpened		判断是否打开了MSPowerPoint
 * IsVisioOpened			判断是否打开了MSVisio
 * IsProjectOpened			判断是否打开了MSProject
 * WordGetStatistic			获取MSWord统计数据
 * WordToggleShowCodes		显示或隐藏域代码
 * WordFieldSelected		是否选择了指定域
 * WordFieldSelect			选择指定域
 * WordUpdateField			更新指定域
 * WordInsertField			在当前选择位置插入域
 * WordGetNewFieldID		获取新的域标识
 * WordGetField				获取域对象
 * WordGetFieldData			获取域数据
 * WordGetFieldID			获取域标识
 * WordGetFieldName			获取域名称
 * WordGetFieldValue		获取域值
 * WordGetFieldRange		获取域名范围对象
 * WordAutoFillField		自动填充某个域的值
 * WordAutoFillFields		自动填充多个域的值
 * WordDeleteFields			删除当前选择区域中的域定义
 * WordDeleteAllFields		删除所有域定义
 * WordGetFieldJSON			获取JSON格式域信息
 * WordGetFieldInfo			获取域信息
 * WordInsertWebPicture		插入图片
 * WordInsertWebFile		插入文件内容
 * WordRevisionInit			初始化MSWord的痕迹保留
 * WordRevisionNone			复位MSWord的痕迹保留状态
 * WordGetRevisionJSON		获取MSWord痕迹保留的JSON格式修订记录
 * WordGetRevisionInfo		获取MSWord痕迹保留的修订记录
 * WordRevisionTypeToStr	转换痕迹保留的修订类型
 * InitOfficeViewer			控件初始化处理过程
 * DisableOfficeButton		禁止工具栏按钮
 * DisableFileCommand 		设置菜单项(the File menu)按钮disable属性
 * DisableOfficeReviewingBar 是否显示审阅工具栏中对应的属性
 */
var $OV = _OV =  function (element) {
	element = OV.getElementByID(element);
	if (element.OV_OfficeViewer_extended) return element;
	element.OV_OfficeViewer_extended = true;
	element.resCellRegExp_t = /\.\w*$/;
	element.resCellRegExp_f = /\.[^\.]+$/;
	return OV.extend(element, OV.OfficeViewer);
}

if (!this.OV) this.OV = (function() {
	var ProgramID = {
		Word:		"Word.Document",
		Excel:		"Excel.Sheet",
		PowerPoint:	"PowerPoint.Show",
		Visio:		"Visio.Drawing",
		Project:	"MSProject.Project"
	}
	var OpenedFileType = {
		oaUnknown:		-1,
		oaNoOpened:		0,
		oaWord:			1,
		oaExcel:		2,
		oaPowerPoint:	3,
		oaVisio:		4,
		oaProject:		5
	}
	var WdRangeType = {
		wdRangeAll:		0,
		wdRangeStart:	1,
		wdRangeEnd:		2
	}
	var WdStatistic = {
		wdStatisticWords:					0,
		wdStatisticLines:					1,
		wdStatisticPages:					2,
		wdStatisticCharacters:				3,
		wdStatisticParagraphs:				4,
		wdStatisticCharactersWithSpaces:	5,
		wdStatisticFarEastCharacters:		6
	}
	var WdBreakType = {
		wdSectionBreakNextPage:		2,
		wdSectionBreakContinuous:	3,
		wdSectionBreakEvenPage:		4,
		wdSectionBreakOddPage:		5,
		wdLineBreak:				6,
		wdPageBreak:				7,
		wdColumnBreak:				8,
		wdLineBreakClearLeft:		9,
		wdLineBreakClearRight:		10,
		wdTextWrappingBreak:		11
	}
	var WdSelectionType = {
		wdSelectionInlineShape:	7,
		wdSelectionShape:		8
	}
	var WdFieldType = {
		wdFieldAddin:	81
	}
	var WdWrapType = {
		wdWrapNone:	3
	}
	var MsoZOrderCmd = {
		msoBringInFrontOfText:	4
	}
	function extend(original, extended) {
		for (var key in (extended || {})) original[key] = extended[key];
		return original;
	}
	
	function IsWin(){
		var UserAgent = navigator.userAgent;
		if(UserAgent.indexOf("Windows NT")>-1){
			return true;
		}else{
			return false;
		}
	}
	
	function IsIE(){
		if(navigator.appVersion.indexOf("MSIE") > -1){
			return true;
		}else {
			return false;
		}
	}
	function getMultiLine(fn) {
		var lines = new String(fn);
		if(lines.indexOf("/*ie") == -1){
			lines = lines.substring(lines.indexOf("/*") + 2, lines.lastIndexOf("*/"));
		}else{
			if(OV.IsWin()){
				if(OV.IsIE()){
					lines = lines.substring(lines.indexOf("/*ie") + 4, lines.lastIndexOf("ie*/"));
				}else{
					lines = lines.substring(lines.indexOf("/*webkit") + 8, lines.lastIndexOf("webkit*/"));
				}
			}else{
				alert('当前环境不支持OfficeViewer');
			}
		}
		return lines;
	}
	function trim(str) {
		return str.replace(/^\s+|\s+$/g, '');
	}
	function substitute(str, object, regexp) {
		return str.replace(regexp || (/\\?\{([^{}]+)\}/g), function(match, name) {
			if (match.charAt(0) == '\\') return match.slice(1);
			return OV.isClear(object[name]) ? '' : object[name];
		});
	}
	function truncate(str, length, truncation) {
		length = length || 30;
		truncation = OV.isClear(truncation) ? '...' : truncation;
		return str.length > length ?
			str.slice(0, length - truncation.length) + truncation : String(str);
	}
	function tryThese(source) {
		for (var i = OV.isFunction(source) ? 0 : 1, l = arguments.length; i < l; i++) {
			try {
				return arguments[i](OV.isFunction(source) ? undefined : source);
			} catch(e) {}
		}
		return null;
	}
	function escape(str) {
		var lines = new String(str);
		return lines.replace(/\&/g, "&amp;")
			.replace(/\ /g, "&nbsp;")
			.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
			.replace(/\=/g, "&#61;")
			.replace(/\</g, "&lt;")
			.replace(/\>/g, "&gt;")
			.replace(/\r\n/g, "<br/>")
			.replace(/\r/g, "<br/>")
			.replace(/\n/g, "<br/>")
			.replace(/\'/g, "&#39;")
			.replace(/\"/g, "&quot;");
	}
	function getClass(object) {
		return Object.prototype.toString.call(object)
			.match(/^\[object\s(.*)\]$/)[1];
	}
	function isArray(object) {
		return OV.getClass(object) === "Array";
	}
	function isString(object) {
		return OV.getClass(object) === "String";
	}
	function isNumber(object) {
		return OV.getClass(object) === "Number";
	}
	function isFunction(object) {
		return typeof object === "function";
	}
	function isObject(object) {
		return typeof object === 'object';
	}
	function isUndefined(object) {
		return typeof object === "undefined";
	}
	function isNull(object) {
		return object == null;
	}
	function isClear(object) {
		return OV.isUndefined(object) || OV.isNull(object);
	}
	function isJSON(str) {
		return OV.isString(str) && Boolean(str.length) && 
			/^[\],:{}\s]*$/.test(str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
			replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
			replace(/(?:^|:|,)(?:\s*\[)+/g, '')) && !/^[\d\s\+\-\*\/]*$/.test(str);
	}
	function getElementByID(element) {
		if (OV.isString(element)) element = document.getElementById(element);
		if (OV.isClear(element)) return undefined;
		return element;
	}
	function getElementsByClassName(className, tag, elm) {
		tag = tag || "*";
		elm = elm || document;
		var classes = className.split(" "),
			classesToCheck = [],
			elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
			current,
			returnElements = [],
			match;
		for(var k = 0, kl = classes.length; k < kl; k += 1){
			classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
		}
		for(var l = 0, ll = elements.length; l < ll; l += 1){
			current = elements[l];
			match = false;
			for(var m = 0, ml = classesToCheck.length; m < ml; m += 1){
				match = classesToCheck[m].test(current.className);
				if (!match) {
					break;
				}
			}
			if (match) {
				returnElements.push(current);
			}
		}
		return returnElements;
	}
	function addEvent(element, type, fn) {
		element = OV.getElementByID(element);
		if (element.addEventListener) {
			element.addEventListener(type, fn, false);
		} else if (element.attachEvent) {
			element["e" + type + fn] = fn;
			element[type + fn] = function() {
				element["e" + type + fn](window.event);
			}
			element.attachEvent("on" + type, element[type + fn]);
		} else {
			element["on" + type] = element["e" + type + fn];
		}
	}
	var OfficeViewer = (function() {
		/**
		 * 断言函数
		 * @expr 断言表达式
		 * @msg 错误信息
		 * @return 返回断言表达式的值
		 */
		function Assert(expr, msg) {
			if (expr === false) alert("Assert::" + msg);
			return expr;
		}
		/**
		 * 获取OfficeViewer的classid
		 * @retrun 返回OfficeViewer的classid
		 */
		function OfficeViewerClassID() {
			return "clsid:6BA21C22-53A5-463F-BBE8-5CF7FFA0132B";
		}
		
		function OfficeViewerClsID() {
			return "6BA21C22-53A5-463F-BBE8-5CF7FFA0132B";
		}
		/**
		 * 判断是否是OfficeViewer
		 * @retrun 返回是否是OfficeViewer
		 */
		function IsOfficeViewer() {
			return this.classid == this.OfficeViewerClassID() || this.getAttribute('clsid') == "{"+this.OfficeViewerClsID()+"}";
		}
		/**
		 * 创建OfficeViewer
		 * @width 宽度，默认650
		 * @height 高度，默认450
		 * @return 返回是否执行了创建操作
		 */
		function CreateOfficeViewer(width, height) {
			var fn = function() {
				/*ie
				<object id="{id}" classid="{classid}" width="{width}" height="{height}" 
					codebase="/UI/system/service/doc/office/officeviewer.cab#version=${version}">
					<param name="BorderColor" value="-2147483632"/>
					<param name="BackColor" value="-2147483643"/>
					<param name="ForeColor" value="-2147483640"/>
					<param name="TitlebarColor" value="-2147483635"/>
					<param name="TitlebarTextColor" value="-2147483634"/>
					<param name="BorderStyle" value="0"/>
					<param name="Titlebar" value="0"/>
					<param name="Toolbars" value="1"/>
					<param name="LicenseName" value="Justep"/>
					<param name="LicenseKey" value="ED99-5508-1219-ABBD"/>
					<param name="Menubar" value="0"/>
					<param name="ActivationPolicy" value="1"/>
					<param name="FrameHookPolicy" value="0"/>
					<param name="MenuAccelerators" value="1"/>
				</object>
				ie*/
				
				/*webkit
				<object id="{id}" clsid="{clsid}" width="{width}" height="{height}" 
					codebase="/UI/system/service/doc/office/officeviewer.cab#version=${version}"
					type="application/justep-activex" 
					param_BorderColor="-2147483632"
					param_BackColor="-2147483643"
					param_BorderColor="-2147483643"
					param_ForeColor="-2147483632"
					param_TitlebarColor="-2147483632"
					param_TitlebarTextColor="-2147483632"
					param_Titlebar="0"
					param_BorderStyle="0"
					param_BorderColor="-2147483632"
					param_LicenseName="Justep"
					param_LicenseKey="ED99-5508-1219-ABBD"
					param_Menubar="0"
					param_ActivationPolicy="1"
					param_FrameHookPolicy="0"
					param_MenuAccelerators="1">
				</object>
				webkit*/
				
			}
			if (!this.IsOfficeViewer()) {
				this.removeAttribute('OV_OfficeViewer_extended');
				var s = this.outerHTML;
				if(OV.IsIE()){
					this.outerHTML = OV.substitute(OV.getMultiLine(fn), {
						id: this.id,
						classid: this.OfficeViewerClassID(),
						width: OV.isClear(width) ? 650 : width,
						height: OV.isClear(height) ? 450 : height,
						version: OV.isClear(_ocx_version) ? 0 : _ocx_version		
					});
				}else{
					this.outerHTML = OV.substitute(OV.getMultiLine(fn), {
						id: this.id,
						clsid: "{"+this.OfficeViewerClsID()+"}",
						width: OV.isClear(width) ? 650 : width,
						height: OV.isClear(height) ? 450 : height,
						version: OV.isClear(_ocx_version) ? 0 : _ocx_version 		
					});
				}
				$OV(this.id).$outerHTML = s;
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 释放OfficeViewer
		 * @return 返回是否执行了释放操作
		 */
		function DestroyOfficeViewer() {
			if (this.IsOfficeViewer() && this.IsOpened) this.Close();
			if (this.$outerHTML) {
				this.outerHTML = this.$outerHTML;
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 执行OfficeViewer指令
		 * 例如：
		 * 		<div style="width=0;height=0;"><div id="ElementID"></div></div>
		 * 		......
		 * 		$OV("ElementID").OfficeViewerEval(function(source){
		 * 			source.Open("C:\\test.doc");
		 * 			......
		 * 			source.Save();
		 * 		});
		 * @fn 包含OfficeViewer指令的函数
		 * @return 返回是否成功执行
		 */
		function OfficeViewerEval(fn) {
			var id = this.id;
			$OV(id).CreateOfficeViewer(0, 0);
			try {
				fn($OV(id));
			} finally {
				$OV(id).DestroyOfficeViewer();
			}
			return true;
		}
		/**
		 * 检查source是否为OfficeViewer
		 * @return 返回是否为OfficeViewer的布尔值
		 */
		function CheckViewer() {
			return this.Assert(
				this.IsOfficeViewer(),
				OV.substitute("The {nodeName}[{id}] is not OfficeViewer.", {nodeName: this.nodeName, id: this.id}));
		}
		
		/**
		 * 检查操作系统是否安装了MSOffice中某个应用程序
		 * @programID 应用程序标识，参考ProgramID
		 * @return 返回是否安装了MSOffice中某个应用程序的布尔值
		 */
		function CheckInstalled(programID) {
			if(OV.IsIE()){
				return this.CheckViewer() && this.Assert(
						this.OfficeProgramIsInstalled(programID),
						OV.substitute("The computer hasn't installed Microsoft {pid}.", {pid: programID.replace(/MS|\.\w*/, "")}));
			}else{
				return this.CheckViewer();
			}
			
		}
		/**
		 * 创建MSOffice中某个应用程序的文档
		 * @programID 应用程序标识，参考ProgramID
		 * @return 返回是否安装了该程序
		 */
		function CreateDoc(programID) {
			if (this.CheckViewer() && this.CheckInstalled(programID)) {
				this.CreateNew(programID);
				this.Activate();
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 创建MSWord
		 * @return 返回是否安装了MSWord
		 */
		function CreateWord() {
			return this.CreateDoc(OV.ProgramID.Word);
		}
		/**
		 * 创建MSExcel
		 * @return 返回是否安装了MSExcel
		 */
		function CreateExcel() {
			return this.CreateDoc(OV.ProgramID.Excel);
		}
		/**
		 * 创建MSPowerPoint
		 * @return 返回是否安装了MSPowerPoint
		 */
		function CreatePowerPoint() {
			return this.CreateDoc(OV.ProgramID.PowerPoint);
		}
		/**
		 * 创建MSVisio
		 * @return 返回是否安装了MSVisio
		 */
		function CreateVisio() {
			return this.CreateDoc(OV.ProgramID.Visio);
		}
		/**
		 * 创建MSProject
		 * @return 返回是否安装了MSProject
		 */
		function CreateProject() {
			return this.CreateDoc(OV.ProgramID.Project);
		}
		/**
		 * 判断是否打开了MSOffice中某个应用程序的文档
		 * @programID 应用程序标识，参考ProgramID
		 * @return 返回是否打开了该文档
		 */
		function IsDocOpened(programID) {
			if (!this.CheckViewer()) {
				return false;
			} else if (OV.isClear(programID)) {
				return this.IsOpened;
			} else if (OV.isNumber(programID)) {
				return this.GetOpenedFileType() == programID;
			} else if (OV.isString(programID)) {
				switch (programID) {
					case OV.ProgramID.Word : this.IsDocOpened(OV.OpenedFileType.oaWord);
					case OV.ProgramID.Excel : this.IsDocOpened(OV.OpenedFileType.oaExcel);
					case OV.ProgramID.PowerPoint : this.IsDocOpened(OV.OpenedFileType.oaPowerPoint);
					case OV.ProgramID.Visio : this.IsDocOpened(OV.OpenedFileType.oaVisio);
					case OV.ProgramID.Project : this.IsDocOpened(OV.OpenedFileType.oaProject);
					default : return this.Assert(false,
						OV.substitute("The {ID} is not ProgramID.", {ID: programID}));
				}
			} else {
				return false;
			}
		}
		/**
		 * 判断是否打开了MSWord
		 * @return 返回是否打开了MSWord
		 */
		function IsWordOpened() {
			return this.IsDocOpened(OV.OpenedFileType.oaWord);
		}
		/**
		 * 判断是否打开了MSExcel
		 * @return 返回是否打开了MSExcel
		 */
		function IsExcelOpened() {
			return this.IsDocOpened(OV.OpenedFileType.oaExcel);
		}
		/**
		 * 判断是否打开了MSPowerPoint
		 * @return 返回是否打开了MSPowerPoint
		 */
		function IsPowerPointOpened() {
			return this.IsDocOpened(OV.OpenedFileType.oaPowerPoint);
		}
		/**
		 * 判断是否打开了MSVisio
		 * @return 返回是否打开了MSVisio
		 */
		function IsVisioOpened() {
			return this.IsDocOpened(OV.OpenedFileType.oaVisio);
		}
		/**
		 * 判断是否打开了MSProject
		 * @return 返回是否打开了MSProject
		 */
		function IsProjectOpened() {
			return this.IsDocOpened(OV.OpenedFileType.oaProject);
		}
		/**
		 * 获取MSWord统计数据
		 * @type 统计数据类型，参考WdStatistic
		 * @return 返回统计数据结果，undefined表示获取失败
		 */
		function WordGetStatistic(type){
			if (this.CheckViewer() && this.IsWordOpened()) {
				return this.ActiveDocument.Range().ComputeStatistics(type);
			}
		}
		/**
		 * 显示或隐藏域代码
		 * @value true为显示，false为隐藏，undefined为自动匹配显示或隐藏
		 * @return 返回是否打开了MSWord
		 */
		function WordToggleShowCodes(value) {
			if (this.CheckViewer() && this.IsWordOpened()) {
				if (OV.isClear(value)) {
					this.ActiveDocument.Fields.ToggleShowCodes();
				} else {
					for (var i = 1; i <= this.ActiveDocument.Fields.Count; i++) {
						var field = this.WordGetField(i);
						if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
							field.ShowCodes = value;
						}
					}
				}
				return true;
			} else {
				return false;
			}		
		}
		/**
		 * 是否选择了指定域，域类型为wdFieldAddin
		 * @fieldID 域标识
		 * @return 返回是否选中
		 */
		function WordFieldSelected(fieldID) {
			var field = this.WordGetField(fieldID);
			if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
				var range = this.WordGetFieldRange(field);
				var selection = this.Application.Selection;
				if ((selection.Start <= range.Start) && (selection.End >= range.End) || 
					(selection.Start > range.Start) && (selection.Start < range.End) || 
					(selection.End > range.Start) && (selection.End < range.End)) {
						return true;
				}
			}
			return false;
		}
		/**
		 * 选择指定域，域类型为wdFieldAddin
		 * @fieldID 域标识
		 * @return 返回指定域
		 */
		function WordFieldSelect(fieldID) {
			var fieldRange = this.WordGetFieldRange(fieldID);
			if (!OV.isClear(fieldRange)) {
				fieldRange.Select();
			}
			return false;
		}
		/**
		 * 更新指定域
		 * @fieldID 域标识
		 * @newFieldID 新的域标识
		 * @newFieldName 新的域名称
		 * @newFieldValue 新的域值
		 * @return 返回是否更新成功
		 */
		function WordUpdateField(fieldID, newFieldID, newFieldName, newFieldValue) {
			var field = this.WordGetField(fieldID);
			if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
				field.Data = encodeURI(newFieldID + '|' + (newFieldName || '') + '|' + (newFieldValue || ''));
				return true;
			}
			return false;
		}
		/**
		 * 在当前选择位置插入域，域类型为wdFieldAddin，不允许在图层上插入域
		 * @fieldID 域标识
		 * @fieldName 域名称
		 * @return 返回是否打开了MSWord，是否插入成功
		 */
		function WordInsertField(fieldID, fieldName) {
			if (this.CheckViewer() && this.IsWordOpened()) {
				var selection = this.Application.Selection;
				if ((selection.Type == OV.WdSelectionType.wdSelectionInlineShape) ||
					(selection.Type == OV.WdSelectionType.wdSelectionShape)) {
					return false;
				} else {
					var field = this.ActiveDocument.Fields.Add(selection.Range, OV.WdFieldType.wdFieldAddin);
					this.WordUpdateField(field, fieldID, fieldName);
					return true;
				}
			} else {
				return false;
			}
		}
		/**
		 * 获取新的域标识
		 * @prefix 域标识前缀
		 * @return 返回前缀加数字的唯一标识符
		 */
		function WordGetNewFieldID(prefix) {
			if (OV.isClear(prefix)) {
				prefix = "Field_";
			}
			var i = 1;
			var newFieldID = prefix + i;
			while (!OV.isClear(this.WordGetField(newFieldID))) {
				i++;
				newFieldID = prefix + i;
			}
			return newFieldID;
		}
		/**
		 * 获取域对象
		 * @fieldID 域标识、域索引、域对象
		 * @return 返回域对象，undefined表示获取失败
		 */
		function WordGetField(fieldID) {
			if (this.CheckViewer() && this.IsWordOpened()) {
				if (OV.isNumber(fieldID)) {
					return this.ActiveDocument.Fields(fieldID);
				} else if (OV.isString(fieldID)) {
					for (var i = 1; i <= this.ActiveDocument.Fields.Count; i++) {
						var field = this.WordGetField(i);
						if (this.WordGetFieldID(field) == fieldID) {
							return field;
						}
					}
				} else if (OV.isObject(fieldID) && !OV.isClear(fieldID.ShowCodes)) {
					return fieldID;
				} else if (OV.isClear(fieldID)) {
					for (var i = this.ActiveDocument.Fields.Count; i >= 1; i--) {
						var field = this.WordGetField(i);
						if (this.WordFieldSelected(field)) {
							return field;
						}
					}
				}
			}
		}
		/**
		 * 获取域数据
		 * @fieldIndex 域索引、域对象
		 * @dataIndex 数据索引，undefined全部数据
		 * @return 返回域数据，undefined表示获取失败
		 */
		function WordGetFieldData(fieldIndex, dataIndex){
			var field = this.WordGetField(fieldIndex);
			if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
				if (!OV.isClear(dataIndex)) {
					return (decodeURI(field.Data)).split('|')[dataIndex] || '';
				} else {
					return decodeURI(field.Data) || '';
				}
			}
		}
		/**
		 * 获取域标识
		 * @fieldIndex 域索引、域对象
		 * @return 返回域标识，undefined表示获取失败
		 */
		function WordGetFieldID(fieldIndex){
			return this.WordGetFieldData(fieldIndex, 0);
		}
		/**
		 * 获取域名称
		 * @fieldIndex 域索引、域对象
		 * @return 返回域标识，undefined表示获取失败
		 */
		function WordGetFieldName(fieldIndex){
			return this.WordGetFieldData(fieldIndex, 1);
		}
		/**
		 * 获取域值
		 * @fieldIndex 域索引、域对象
		 * @return 返回域值，undefined表示获取失败
		 */
		function WordGetFieldValue(fieldIndex){
			return this.WordGetFieldData(fieldIndex, 2);
		}
		/**
		 * 获取域名范围对象
		 * @fieldID 域标识、域索引、域对象
		 * @type 域范围类型，参考WdRangeType
		 * @return 返回域范围对象，undefined表示获取失败
		 */
		function WordGetFieldRange(fieldID, type) {
			var field = this.WordGetField(fieldID);
			if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
				var fieldCode = '{' + field.Code + '}';
				var start = field.Result.End - fieldCode.length - 1;
				var end = field.Result.End;
				type = type || OV.WdRangeType.wdRangeAll;
				switch (type) {
					case OV.WdRangeType.wdRangeAll : return this.ActiveDocument.Range(start, end);
					case OV.WdRangeType.wdRangeStart : return this.ActiveDocument.Range(start, start);
					case OV.WdRangeType.wdRangeEnd : return this.ActiveDocument.Range(end, end);
					default : return this.ActiveDocument.Range(start, end);
				}
			}
		}
		/**
		 * 自动填充某个域的值
		 * @fieldID 域标识、域索引、域对象
		 * @json 填充值，可以是简单类型或JSON格式表述的特殊类型
		 * 1、填充字符串：
		 *		WordAutoFillField("Value1", "HELLO WORD!")
		 * 2、填充数字：
		 *		WordAutoFillField("Value2", 1024)
		 * 3、填充日期时间：
		 *		WordAutoFillField("Value3", '1979-10-24T19:00:00Z')
		 *		WordAutoFillField("Value3", '1979-10-24T')
		 *		WordAutoFillField("Value3", '19:00:00Z')
		 *		WordAutoFillField("Value3", '19:00Z')
		 * 4、填充图片：
		 *		WordAutoFillField("Value4", '{"Type": "Picture", "URL": "http://localhost:8080/ov/download/seal.bmp"}')
		 *		WordAutoFillField("Value4", '{"T": "P", "U": "http://localhost:8080/ov/download/seal.bmp"}')
		 *		WordAutoFillField("Value4", '{"Type": "Picture", "Local": "C:\\seal.bmp"}')
		 *		WordAutoFillField("Value4", '{"T": "P", "L": "C:\\seal.bmp"}')
		 * 5、填充文件内容：
		 *		WordAutoFillField("Value5", '{"Type": "File", "URL": "http://localhost:8080/ov/download/template.doc"}')
		 *		WordAutoFillField("Value5", '{"T": "F", "U": "http://localhost:8080/ov/download/template.doc"}')
		 *		WordAutoFillField("Value5", '{"Type": "File", "Local": "C:\\template.doc"}')
		 *		WordAutoFillField("Value5", '{"T": "F", "L": "C:\\template.doc"}')
		 * 6、填充分隔符：
		 *		分隔符参考WdBreakType，例如WdBreakType.wdPageBreak = 7
		 *		WordAutoFillField("Value6", '{"Type": "Break", "Value": 7}')
		 *		WordAutoFillField("Value6", '{"T": "B", "V": 7}')
		 * 7、填充域代码：
		 *		例如填充作者，对应的域代码为"INFO Author"
		 *		WordAutoFillField("Value7", '{"Type": "Code", "Value": "INFO Author"}')
		 *		WordAutoFillField("Value7", '{"T": "C", "V": "INFO Author"}')
		 * @return 返回是否打开了MSWord
		 */
		function WordAutoFillField(fieldID, json) {
			
			function localFile(source, data) {
				return (OV.isClear(data.URL || data.U)) ?
					(data.Local || data.L) : (source.HttpDownloadFileToTempDir((data.URL || data.U), '', '') || (data.URL || data.U));
			}
			function getType(data) {
				return (data.Type || data.T);
			}
			function getValue(data) {
				return (data.Value || data.V);
			}
			function isJSONDate(data) {
				var T = "^((((1[6-9]|[2-9]\\d)\\d{2})-(0?[13578]|1[02])-(0?[1-9]" +
					"|[12]\\d|3[01]))|(((1[6-9]|[2-9]\\d)\\d{2})-(0?[13456789]|1" +
					"[012])-(0?[1-9]|[12]\\d|30))|(((1[6-9]|[2-9]\\d)\\d{2})-0?2" +
					"-(0?[1-9]|1\\d|2[0-8]))|(((1[6-9]|[2-9]\\d)(0[48]|[2468][04" +
					"8]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))T";
				var Z = "(20|21|22|23|[0-1]?\\d)(:[0-5]?\\d){1,2}Z";
				return new RegExp(T + Z + '$').test(data) ||
					new RegExp(T + '$').test(data) || new RegExp(Z + '$').test(data);
			}
			function insertPicture(source, field, data) {
				var shape = source.ActiveDocument.InlineShapes.AddPicture(
					localFile(source, data), false, true, source.WordGetFieldRange(field, OV.WdRangeType.wdRangeStart));
				if (!OV.isClear(data.Width)) {
					shape.Width = data.Width;
				}
				if (!OV.isClear(data.Height)) {
					shape.Height = data.Height;
				}
			}
			function insertFile(source, field, data) {
				var range = source.WordGetFieldRange(field, OV.WdRangeType.wdRangeStart);
				if (!OV.isClear(range)) {
					range.InsertFile(localFile(source, data), "", false, false, false);
				}
			}
			function insertCode(source, field, data) {
				field.Code.Text = getValue(data);
				field.Update();
			}
			function insertBreak(source, field, data) {
				var range = source.WordGetFieldRange(field, OV.WdRangeType.wdRangeStart);
				if (!OV.isClear(range)) {
					range.InsertBreak(getValue(data));
				}
			}
			function insertSimple(source, field, data) {
				var value = source.WordGetFieldValue(field);
				data = isJSONDate(data) ? OV.trim(data.replace(/[T|Z]/g, ' ')) : data;
				if (value != data) {
					if (!OV.isClear(value) && (value.length > 0)) {
						var start = field.Result.End;
						var end = start + value.length;
						source.ActiveDocument.Range(start, end).Text = "";
					}
					field.Result.Text = data;
					source.WordUpdateField(field, source.WordGetFieldID(field), source.WordGetFieldName(field), data);
				}
			}
			
			if (this.CheckViewer() && this.IsWordOpened()) {
				var field = this.WordGetField(fieldID);
				if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
					var data = (OV.isString(json) && OV.isJSON(json)) ? OV.JSON.parse(json) : json;
					if (!OV.isClear(data)) {
						switch (getType(data)) {
							case "P" : case "Picture" : insertPicture(this, field, data); break;
							case "F" : case "File" : insertFile(this, field, data); break;
							case "C" : case "Code" : insertCode(this, field, data); break;
							case "B" : case "Break" : insertBreak(this, field, data); break;
							default : insertSimple(this, field, data);
						}
						if (!OV.isClear(data.URL || data.U)) {
							this.ClearTempFiles();
						}
					}
				}
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 自动填充多个域的值
		 * @json JSON格式表述的域-值列表
		 * 1、简写格式：WordAutoFillFields(
		 * 		'{' +
		 * 		'"Value1": "HELLO WORD!", ' +
		 * 		'"Value2": 1024, ' +
		 * 		'"Value3": "1979-10-24T19:00:00Z", ' +
		 * 		'"Value4": {"T": "P", "U": "http://localhost:8080/ov/download/seal.bmp"}, ' +
		 * 		'"Value5": {"T": "F", "U": "http://localhost:8080/ov/download/template.doc"}, ' +
		 * 		'"Value6": {"T": "B", "V": 7}, ' +
		 * 		'"Value7": {"T": "C", "V": "INFO Author"}' +
		 * 		'}');
		 * 2、完整格式：WordAutoFillFields(
		 * 		'{' +
		 * 		'"Value1": "HELLO WORD!", ' +
		 * 		'"Value2": 1024, ' +
		 * 		'"Value3": "1979-10-24T19:00:00Z", ' +
		 * 		'"Value4": {"Type": "Picture", "URL": "http://localhost:8080/ov/download/seal.bmp"}, ' +
		 * 		'"Value5": {"Type": "File", "URL": "http://localhost:8080/ov/download/template.doc"}, ' +
		 * 		'"Value6": {"Type": "Break", "Value": 7}, ' +
		 * 		'"Value7": {"Type": "Code", "Value": "INFO Author"}' +
		 * 		'}');
		 * @return 返回是否打开了MSWord
		 */
		function WordAutoFillFields(json) {
			if (this.CheckViewer() && this.IsWordOpened()) {
				var data = (OV.isString(json) && OV.isJSON(json)) ? OV.JSON.parse(json) : json;
				if (!OV.isClear(data)) {
					for (var i = 1; i <= this.ActiveDocument.Fields.Count; i++) {
						var field = this.WordGetField(i);
						if (field.Type == OV.WdFieldType.wdFieldAddin) {
							var fieldID = this.WordGetFieldID(field);
							this.WordAutoFillField(field, data[fieldID]);
						}
					}
					/*添加页眉页脚*/
					for (var i = 1; i <= this.Application.ActiveDocument.Sections.Count; i++){
						var Section =  this.Application.ActiveDocument.Sections(i);
						for(var j = 1; j <= Section.Headers.Count;j++){
							var head = this.Application.ActiveDocument.Sections(i).Headers(j);
							for(var m = 1; m <= head.Range.Fields.Count; m++){
								var field = this.WordGetHeadField(i,j,m);
								if (field.Type == OV.WdFieldType.wdFieldAddin) {
									var fieldID = this.WordGetHeadFieldID(Section,head,field);
									this.WordAutoFillHeadField(i,j,field, data[fieldID]);
								}
							}							
						}
						for(var j = 1; j <= Section.Footers.Count;j++){
							var foot = this.Application.ActiveDocument.Sections(i).Footers(j);
							for(var n = 1; n <= foot.Range.Fields.Count; n++){
								var field = this.WordGetHeadField(i,j,n,true);
								if (field.Type == OV.WdFieldType.wdFieldAddin) {
									var fieldID = this.WordGetHeadFieldID(Section,head,field ,true);
									this.WordAutoFillHeadField(i,j,field, data[fieldID],true);
								}
							}	
						}
					}
															
				}
				return true;
			} else {
				return false;
			}
		}
		
		/*页眉页脚扩展*/
		function WordGetHeadField(Section,head,fieldID,isFoot) {
			if (this.CheckViewer() && this.IsWordOpened()) {
				if (OV.isNumber(fieldID)) {
					return isFoot ? this.ActiveDocument.Sections(Section).Footers(head).Range.Fields(fieldID)
							: this.ActiveDocument.Sections(Section).Headers(head).Range.Fields(fieldID);
					
				} else if (OV.isString(fieldID)) {
					for (var i = 1; i <= this.ActiveDocument.Fields.Count; i++) {
						var field = this.WordGetField(i);
						if (this.WordGetFieldID(field) == fieldID) {
							return field;
						}
					}
				} else if (OV.isObject(fieldID) && !OV.isClear(fieldID.ShowCodes)) {
					return fieldID;
				} else if (OV.isClear(fieldID)) {
					for (var i = this.ActiveDocument.Fields.Count; i >= 1; i--) {
						var field = this.WordGetField(i);
						if (this.WordFieldSelected(field)) {
							return field;
						}
					}
				}
			}
		}
		
		function WordGetHeadFieldData(Section,head,fieldIndex, dataIndex ,isFoot){
			var field = this.WordGetHeadField(Section,head,fieldIndex ,isFoot);
			if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
				if (!OV.isClear(dataIndex)) {
					return decodeURI(field.Data).split('|')[dataIndex] || '';
				} else {
					return decodeURI(field.Data) || '';
				}
			}
		}
		
		function WordGetHeadFieldID(Section,head,fieldIndex ,isFoot){
			return this.WordGetHeadFieldData(Section,head,fieldIndex, 0);
		}
		
		function WordGetHeadFieldName(Section,head,fieldIndex ,isFoot){
			return this.WordGetHeadFieldData(Section,head,fieldIndex, 1 ,isFoot);
		}
		
		function WordGetHeadFieldValue(Section,head,fieldIndex,isFoot){
			return this.WordGetHeadFieldData(Section,head,fieldIndex, 2 ,isFoot);
		}
		
		
		function WordAutoFillHeadField(Section,head,fieldID, json ,isFoot) {
			
			function localFile(source, data) {
				return (OV.isClear(data.URL || data.U)) ?
					(data.Local || data.L) : (source.HttpDownloadFileToTempDir((data.URL || data.U), '', '') || (data.URL || data.U));
			}
			function getType(data) {
				return (data.Type || data.T);
			}
			function getValue(data) {
				return (data.Value || data.V);
			}
			function isJSONDate(data) {
				var T = "^((((1[6-9]|[2-9]\\d)\\d{2})-(0?[13578]|1[02])-(0?[1-9]" +
					"|[12]\\d|3[01]))|(((1[6-9]|[2-9]\\d)\\d{2})-(0?[13456789]|1" +
					"[012])-(0?[1-9]|[12]\\d|30))|(((1[6-9]|[2-9]\\d)\\d{2})-0?2" +
					"-(0?[1-9]|1\\d|2[0-8]))|(((1[6-9]|[2-9]\\d)(0[48]|[2468][04" +
					"8]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))T";
				var Z = "(20|21|22|23|[0-1]?\\d)(:[0-5]?\\d){1,2}Z";
				return new RegExp(T + Z + '$').test(data) ||
					new RegExp(T + '$').test(data) || new RegExp(Z + '$').test(data);
			}
			function insertPicture(source, field, data) {
				var shape = source.ActiveDocument.InlineShapes.AddPicture(
					localFile(source, data), false, true, source.WordGetFieldRange(field, OV.WdRangeType.wdRangeStart));
				if (!OV.isClear(data.Width)) {
					shape.Width = data.Width;
				}
				if (!OV.isClear(data.Height)) {
					shape.Height = data.Height;
				}
			}
			function insertFile(source, field, data) {
				var range = source.WordGetFieldRange(field, OV.WdRangeType.wdRangeStart);
				if (!OV.isClear(range)) {
					range.InsertFile(localFile(source, data), "", false, false, false);
				}
			}
			function insertCode(source, field, data) {
				field.Code.Text = getValue(data);
				field.Update();
			}
			function insertBreak(source, field, data) {
				var range = source.WordGetFieldRange(field, OV.WdRangeType.wdRangeStart);
				if (!OV.isClear(range)) {
					range.InsertBreak(getValue(data));
				}
			}
			function insertSimple(source, field, data ,isFoot) {
				var value = source.WordGetHeadFieldValue(Section,head,field,isFoot);
				data = isJSONDate(data) ? OV.trim(data.replace(/[T|Z]/g, ' ')) : data;
				if (value != data) {
					if (!OV.isClear(value) && (value.length > 0)) {
						var start = field.Result.End;
						var end = start + value.length;
						if(isFoot)
							source.Application.ActiveDocument.Sections(Section).Footers(head).Range(start, end).Text = "";
						else
							source.Application.ActiveDocument.Sections(Section).Headers(head).Range(start, end).Text = "";
					}
					field.Result.Text = data;
					source.WordUpdateField(field, source.WordGetFieldID(field), source.WordGetFieldName(field), data);
				}
			}
			
			if (this.CheckViewer() && this.IsWordOpened()) {
				var field = this.WordGetHeadField(Section,head,fieldID ,isFoot);
				if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
					var data = (OV.isString(json) && OV.isJSON(json)) ? OV.JSON.parse(json) : json;
					if (!OV.isClear(data)) {
						switch (getType(data)) {
							case "P" : case "Picture" : insertPicture(this, field, data); break;
							case "F" : case "File" : insertFile(this, field, data); break;
							case "C" : case "Code" : insertCode(this, field, data); break;
							case "B" : case "Break" : insertBreak(this, field, data); break;
							default : insertSimple(this, field, data ,isFoot);
						}
						if (!OV.isClear(data.URL || data.U)) {
							this.ClearTempFiles();
						}
					}
				}
				return true;
			} else {
				return false;
			}
		}
		
		/*页眉页脚扩展 end */
		
		/**
		 * 删除当前选择区域中的域定义，只删除wdFieldAddin类型的域
		 * @fieldID 域标识或域标识数组，为undefined或null时删除当前选中的域
		 * @return 返回是否打开了MSWord
		 */
		function WordDeleteFields(fieldID) {
			if (this.CheckViewer() && this.IsWordOpened()) {
				if (OV.isClear(fieldID)) {
					for (var i = this.ActiveDocument.Fields.Count; i >= 1; i--) {
						var field = this.WordGetField(i);
						if ((field.Type == OV.WdFieldType.wdFieldAddin) && this.WordFieldSelected(field)) {
							field.Delete();
						}
					}
				} else if (OV.isArray(fieldID)) {
					for (var i in fieldID) {
						this.WordDeleteFields(fieldID[i]);
					}
				} else {
					var field = this.WordGetField(fieldID);
					if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
						field.Delete();
					}
				}
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 删除所有域定义，只删除wdFieldAddin类型的域
		 * @return 返回是否打开了MSWord
		 */
		function WordDeleteAllFields() {
			if (this.CheckViewer() && this.IsWordOpened()) {
				for (var i = this.ActiveDocument.Fields.Count; i >= 1; i--) {
					var field = this.WordGetField(i);
					if (field.Type == OV.WdFieldType.wdFieldAddin) {
						field.Delete();
					}
				}
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 获取JSON格式域信息
		 * @return 返回JSON格式域信息，undefined表示获取失败
		 */
		function WordGetFieldJSON() {
			if (this.CheckViewer() && this.IsWordOpened()) {
				var result = [];
				var index = 0;
				for (var i = 1; i <= this.ActiveDocument.Fields.Count; i++) {
					var field = this.WordGetField(i);
					if (!OV.isClear(field) && (field.Type == OV.WdFieldType.wdFieldAddin)) {
						result[index] = {
							Index: field.Index,
							FieldID: this.WordGetFieldID(field),
							FieldName: this.WordGetFieldName(field),
							Result: field.Result.Text
						};
						index++;
					}
				}
				return OV.JSON.stringify(result);
			}
		}
		/**
		 * 获取域信息
		 * @json JSON格式域信息，如果为undefined则获取当前打开MSWORD文档的域信息
		 * @template 用于格式化域信息，为undefined则使用默认模板，模板参数：
		 * 		#{Index}		索引序号
		 * 		#{FieldID}		域标识
		 * 		#{FieldName}	域名称
		 * 		#{Result}		返回结果
		 * 		#{FullResult}	完整返回结果
		 * 		#{HTMLResult}	HTML返回结果
		 * @textLength 简化返回结果的长度，默认30字符
		 * @truncation 简化返回结果的后缀，默认为...
		 * @return 返回域信息，undefined表示获取失败
		 */
		function WordGetFieldInfo(json, template, textLength, truncation) {
			var fields = OV.tryThese(this, function(source){
				return OV.isClear(json) ?
					OV.JSON.parse(source.WordGetFieldJSON()) :
					(OV.isString(json) && OV.isJSON(json)) ? 
						OV.JSON.parse(json) :
						json;
			}, function(source){
				return json;
			});
			if (OV.isArray(fields)) {
				template = OV.isClear(template) ?
					'<fieldinfo index="{Index}" fieldID="{FieldID}" fieldName="{FieldName}">{Result}</fieldinfo>\r\n' :
					template;
				var result = "";
				for (var i = 0, length = fields.length; i < length; i++) {
					var field = fields[i];
					result += OV.substitute(template, {
						Index: field.Index,
						FieldID: field.FieldID,
						FieldName: field.FieldName,
						Result: OV.truncate(field.Result.replace(/\s+/g, ' '), textLength, truncation),
						FullResult: field.Result,
						HTMLResult: OV.escape(field.Result)});
				}
				return result;
			} else {
				return fields;
			}
		}
		/**
		 * 插入图片，如果left和top参数均为undefined则已嵌入的方式插入图片，否则已浮动方式插入
		 * @url 图片地址
		 * @left 图片的左起始位置，当top有值时left默认为0
		 * @top 图片的上起始位置，当left有值时top默认为0
		 * @trans 是否透明处理，默认为false
		 * @trans 是否透明处理，默认为白色
		 * @return 返回是否打开了MSWord
		 */
		function WordInsertWebPicture(url, left, top, trans, transColor) {
			if (this.CheckViewer() && this.IsWordOpened()) {
				var localFileName = this.HttpDownloadFileToTempDir(url, '', '') || url;
				var inLine = OV.isClear(left) && OV.isClear(top);
				var shape = inLine ?
					this.ActiveDocument.InlineShapes.AddPicture(
						localFileName, false, true, this.Application.Selection.Range) :
					this.ActiveDocument.Shapes.AddPicture(
						localFileName, false, true, this.ActiveDocument.Range(0, 0));
				if (!inLine) {
					shape.WrapFormat.Type = OV.WdWrapType.wdWrapNone;
					shape.ZOrder(OV.MsoZOrderCmd.msoBringInFrontOfText);
					shape.Left = left || 0;
					shape.Top = top || 0;
					shape.PictureFormat.TransparentBackground = trans || false;
					shape.PictureFormat.TransparencyColor = transColor || 0xFFFFFF;
				}
				this.ClearTempFiles();
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 插入文件内容
		 * @url 文件地址
		 * @range 用于描述文件内容范围，默认为""
		 * 		当指定的文档是MSWord文档时，此参数代表书签；
		 * 		当该文档为MSExcel时，此参数代表已命名的区域或单元格区域（例如 R1C1:R3C4）
		 * @confirm 如果值为True，则MSWord将在插入非MSWord文档格式的文档时提示确认转换
		 * @link 如果值为True，则可用INCLUDETEXT域插入该文档
		 * @attachment 为True时将该文件作为附件插入电子邮件消息中
		 * @return 返回是否打开了MSWord
		 */
		function WordInsertWebFile(url, range, confirm, link, attachment) {
			if (this.CheckViewer() && this.IsWordOpened()) {
				var localFileName = this.HttpDownloadFileToTempDir(url, '', '') || url;
				range = OV.isClear(range) ? "" : range;
				confirm = confirm || false;
				link = link || false;
				attachment = attachment || false;
				this.Application.Selection.InsertFile(localFileName, range, confirm, link, attachment);
				this.ClearTempFiles();
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 初始化MSWord的痕迹保留，主要用于保留MSWord修订历史，具体操作如下：
		 * 		接受当前文件的所有修订内容
		 * 		不显示修订痕迹
		 * 		启动痕迹保留
		 * @acceptAllRevisions 是否接受所有修订
		 * @userName 用户名，为undefined则保留原来的用户名
		 * @userInitials 简称，为undefined则保留原来的简称
		 * @return 返回是否打开了MSWord
		 */
		function WordRevisionInit(acceptAllRevisions, userName, userInitials) {
			if (this.CheckViewer() && this.IsWordOpened()) {
				if (acceptAllRevisions) {
					this.ActiveDocument.AcceptAllRevisions();
				}
				this.ActiveDocument.ShowRevisions = false;
				this.ActiveDocument.TrackRevisions = true;
				if (!OV.isClear(userName)) {
					this.Application.UserName = userName;
				}
				if (!OV.isClear(userInitials)) {
					this.Application.UserInitials = userInitials;
				}
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 复位MSWord的痕迹保留状态，主要用于查看MSWord修订历史，具体操作如下：
		 * 		关闭痕迹保留
		 * 		显示修订痕迹
		 * @return 返回是否打开了MSWord
		 */
		function WordRevisionNone() {
			if (this.CheckViewer() && this.IsWordOpened()) {
				this.ActiveDocument.TrackRevisions = false;
				this.ActiveDocument.ShowRevisions = true;
				return true;
			} else {
				return false;
			}
		}
		/**
		 * 获取MSWord痕迹保留的JSON格式修订记录
		 * @return 返回JSON格式修订记录，undefined表示获取失败
		 */
		function WordGetRevisionJSON() {
			if (this.CheckViewer() && this.IsWordOpened()) {
				var result = OV.tryThese(this, function(source){
					var r = [];
					for (var i = 1; i <= source.ActiveDocument.Revisions.Count; i++) {
						var revision = source.ActiveDocument.Revisions.Item(i);
						r[i-1] = {
							Author: revision.Author,
							Date: new Date(revision.Date),
							Index: revision.Index,
							Text: revision.Range.Text,
							Type: revision.Type
						};
					}
					return r;
				}, function(source){
					return [];
				});
				return OV.JSON.stringify(result);
			}
		}
		/**
		 * 获取MSWord痕迹保留的修订记录
		 * @json JSON格式修订记录，如果为undefined则获取当前打开MSWORD文档的修订记录
		 * @template 用于格式化修订内容的模板，为undefined则使用默认模板，模板参数：
		 * 		#{Index}	索引序号
		 * 		#{Author}	修订此内容的作者
		 * 		#{Type}		修订类型，参考WordRevisionTypeToStr方法
		 * 		#{Date}		修订时间
		 * 		#{Text}		简化修订内容，默认只有30字符并且不包含多余空行和换行符等
		 * 		#{FullText}	完整修订内容
		 * 		#{HTMLText}	HTML修订内容
		 * @textLength 简化修订内容的长度，默认30字符
		 * @truncation 简化修订内容的后缀，默认为...
		 * @return 返回修订记录，undefined表示获取失败
		 */
		function WordGetRevisionInfo(json, template, textLength, truncation) {
			var revisions = OV.tryThese(this, function(source){
				return OV.isClear(json) ?
					OV.JSON.parse(source.WordGetRevisionJSON()) :
					(OV.isString(json) && OV.isJSON(json)) ?
						OV.JSON.parse(json) :
						json;
			}, function(source){
				return json;
			});
			if (OV.isArray(revisions)) {
				template = OV.isClear(template) ?
					'<revisioninfo index="{Index}" author="{Author}" type="{Type}" date="{Date}">{Text}</revisioninfo>\r\n' :
					template;
				var result = "";
				for (var i = 0, length = revisions.length; i < length; i++) {
					var revision = revisions[i];
					result += OV.substitute(template, {
						Author: revision.Author,
						Date: OV.trim(revision.Date.replace(/\"|[T|Z]/g, ' ')),
						Index: revision.Index,
						Text: OV.truncate(revision.Text.replace(/\s+/g, ' '), textLength, truncation),
						FullText: revision.Text,
						HTMLText: OV.escape(revision.Text),
						Type: this.WordRevisionTypeToStr(revision.Type)});
				}
				return result;
			} else {
				return revisions;
			}
		}
		/**
		 * 转换痕迹保留的修订类型
		 * @type 修订类型，整数0~18，参考WdRevisionType
		 * @return 返回修订类型的文字描述，undefined表示转换失败
		 */
		function WordRevisionTypeToStr(type) {
			return ['None', 'Insert', 'Delete', 'Property', 'ParagraphNumber',
					'DisplayField', 'Reconcile', 'Conflict', 'Style', 'Replace',
					'ParagraphProperty', 'TableProperty', 'SectionProperty',
					'StyleDefinition', 'MovedFrom', 'MovedTo', 'CellInsertion',
					'CellDeletion', 'CellMerge'][type];
		}
		/**
		 * 控件初始化处理过程
		 */
		function InitOfficeViewer(){
			this.ActivationPolicy = 4;
			this.FrameHookPolicy = 1;
		}
		/**
		 * 禁止工具栏按钮
		 */
		function DisableOfficeButton(isPrint){
			if (OV.IsIE() && this.CheckViewer() && this.IsOpened) {					
				switch (this.GetOpenedFileType()) {
					case OV.OpenedFileType.oaUnknown :
					case OV.OpenedFileType.oaNoOpened :
						break;
					case OV.OpenedFileType.oaWord :
					case OV.OpenedFileType.oaExcel :
					case OV.OpenedFileType.oaPowerPoint :
						this.ActiveDocument.CommandBars("Standard").Controls(1).Visible = false;
						this.ActiveDocument.CommandBars("Standard").Controls(2).Visible = false;
						this.ActiveDocument.CommandBars("Standard").Controls(3).Visible = false;
						this.ActiveDocument.CommandBars("Standard").Controls(4).Visible = false;
						this.ActiveDocument.CommandBars("Standard").Controls(5).Visible = false;
						break;
					case OV.OpenedFileType.oaVisio :
						break;
					case OV.OpenedFileType.oaProject :
						break;
					default : break;
				}
				return true;
			} else {
				return false;
			}
		}
		
		function DisableFileCommand(isPrint,showOfficeButton){
			if (OV.IsIE() && this.CheckViewer()) {
				var enable = showOfficeButton?true:false;
				this.EnableFileCommand(0) = enable;
				this.EnableFileCommand(1) = enable;
				this.EnableFileCommand(2) = enable;
				this.EnableFileCommand(3) = enable;
				this.EnableFileCommand(4) = enable;
				
				if(!OV.isClear(isPrint)){
					this.EnableFileCommand(5) = isPrint;
					this.EnableFileCommand(8) = isPrint;
				}
			}	
		}
		
		function DisableOfficeReviewingBar(isShow){
			if (OV.IsIE() && this.CheckViewer() && this.IsWordOpened()) {
				//显示或隐藏批注框
				this.ActiveDocument.ActiveWindow.View.ShowComments=isShow;
				//显示或隐藏插入和删除标记批注框
				this.ActiveDocument.ActiveWindow.View.ShowInsertionsAndDeletions=isShow;
				//显示或隐藏墨迹注释
				this.ActiveDocument.ActiveWindow.View.ShowInkAnnotations=isShow;
				//正在格式化
				this.ActiveDocument.ActiveWindow.View.ShowFormatChanges=isShow;
			}else{
				return false;
			}
		}
		
		/**
		 * 以下方法用于测试
		 */
		function test1(value) {
		}
		function test2(value) {
		}
		function test3(value) {
		}
		return {
			Assert:					Assert,
			OfficeViewerClassID:	OfficeViewerClassID,
			OfficeViewerClsID:	    OfficeViewerClsID,
			IsOfficeViewer:			IsOfficeViewer,
			CreateOfficeViewer:		CreateOfficeViewer,
			DestroyOfficeViewer:	DestroyOfficeViewer,
			OfficeViewerEval:		OfficeViewerEval,
			CheckViewer:			CheckViewer,
			CheckInstalled:			CheckInstalled,
			CreateDoc:				CreateDoc,
			CreateWord:				CreateWord,
			CreateExcel:			CreateExcel,
			CreatePowerPoint:		CreatePowerPoint,
			CreateVisio:			CreateVisio,
			CreateProject:			CreateProject,
			IsDocOpened:			IsDocOpened,
			IsWordOpened:			IsWordOpened,
			IsExcelOpened:			IsExcelOpened,
			IsPowerPointOpened:		IsPowerPointOpened,
			IsVisioOpened:			IsVisioOpened,
			IsProjectOpened:		IsProjectOpened,
			WordGetStatistic:		WordGetStatistic,
			WordToggleShowCodes:	WordToggleShowCodes,
			WordFieldSelected:		WordFieldSelected,
			WordFieldSelect:		WordFieldSelect,
			WordUpdateField:		WordUpdateField,
			WordInsertField:		WordInsertField,
			WordGetNewFieldID:		WordGetNewFieldID,
			WordGetField:			WordGetField,
			WordGetFieldData:		WordGetFieldData, 
			WordGetFieldID:			WordGetFieldID,
			WordGetFieldName:		WordGetFieldName,
			WordGetFieldValue:		WordGetFieldValue,
			WordGetFieldRange:		WordGetFieldRange,
			WordAutoFillField:		WordAutoFillField,
			WordAutoFillFields:		WordAutoFillFields,
			WordDeleteFields:		WordDeleteFields,
			WordDeleteAllFields:	WordDeleteAllFields,
			WordGetFieldJSON:		WordGetFieldJSON,
			WordGetFieldInfo:		WordGetFieldInfo,
			WordInsertWebPicture:	WordInsertWebPicture,
			WordInsertWebFile:		WordInsertWebFile,
			WordRevisionInit:		WordRevisionInit,
			WordRevisionNone:		WordRevisionNone,
			WordGetRevisionJSON:	WordGetRevisionJSON,
			WordGetRevisionInfo:	WordGetRevisionInfo,
			WordRevisionTypeToStr:	WordRevisionTypeToStr,
			InitOfficeViewer:		InitOfficeViewer,
			DisableOfficeButton:	DisableOfficeButton,
			DisableFileCommand:		DisableFileCommand,
			DisableOfficeReviewingBar:  DisableOfficeReviewingBar,
			WordGetHeadField :		WordGetHeadField,
			WordAutoFillHeadField :	WordAutoFillHeadField,
			WordGetHeadFieldData : WordGetHeadFieldData,
			WordGetHeadFieldName : WordGetHeadFieldName,
			WordGetHeadFieldID : WordGetHeadFieldID,
			WordGetHeadFieldValue : WordGetHeadFieldValue,
			test1:					test1,
			test2:					test2,
			test3:					test3
		}
	})();
	/**
	 * 历史修订模板
	 * OV.RevisionTemplate.defaultHTMLContent 默认的HTML格式修订存储模板
	 */
	var RevisionTemplate = (function() {
		var defaultHTMLContent = (function() {
			var fn = function() {
				/*
				<div class='revision_item'>
					<div class='revision_title'>
						<div class='revision_left'>{Index}.{Type}</div>
						<div class='revision_center'>{Author}</div>
						<div class='revision_right'>{Date}</div>
					</div>
					<div class='revision_content'>{Text}</div>
					<div class='revision_content_full'>{HTMLText}</div>
				</div>
				*/
			}
			return getMultiLine(fn);
		})();
		return {
			defaultHTMLContent:	defaultHTMLContent
		}
	})();
	return {
		JSON:	this.JSON || {},
		Base64:	this.Base64 || {},
		ProgramID:			ProgramID,
		OpenedFileType:		OpenedFileType,
		WdRangeType:		WdRangeType,
		WdStatistic:		WdStatistic,
		WdBreakType:		WdBreakType,
		WdSelectionType:	WdSelectionType,
		WdFieldType:		WdFieldType,
		WdWrapType:			WdWrapType,
		MsoZOrderCmd:		MsoZOrderCmd,
		extend:					extend,
		IsIE:                   IsIE,
		IsWin:                  IsWin,
		getMultiLine:			getMultiLine,
		trim:					trim,
		substitute:				substitute,
		truncate:				truncate,
		tryThese:				tryThese,
		escape:					escape,
		getClass:				getClass,
		isArray:				isArray,
		isString:				isString,
		isNumber:				isNumber,
		isFunction:				isFunction,
		isObject:				isObject,
		isUndefined:			isUndefined,
		isNull:					isNull,
		isClear:				isClear,
		isJSON:					isJSON,
		getElementByID:			getElementByID,
		getElementsByClassName:	getElementsByClassName,
		addEvent:				addEvent,
		
		OfficeViewer:		OfficeViewer,
		RevisionTemplate:	RevisionTemplate
	}
})();
/*
 * file from "UI\system\service\doc\common\doc.js"
 */

justep.Doc = {
	/* 附件权限枚举值 
	 * 列表(list) : l ; 读取(read) : r ; 下载(download) : d ; 下载上传 (download upload) : du ; 
	 * 下载上传修改(download upload update) : duu ; 下载上传修改删除(download upload update delete) : duud  */	
	accessEnum : {
		l : 1,
		r : 3,
		d : 7,
		du : 263,
		duu : 775,
		duud : 1799
	},	
	
	isHttps : function(){
		return window.location.protocol == "https:";
	},	
	
	getdocServerAction : function(docPath, urlPattern, isFormAction) {
		if(!isFormAction)
			isFormAction = false;
		var options = {};
		var sendParam = new justep.Request.ActionParam();
		sendParam.setBoolean("isHttps", this.isHttps());
		sendParam.setString('docPath',docPath);
		sendParam.setString('urlPattern',urlPattern);
		sendParam.setBoolean('isFormAction',isFormAction);
		
		options.process = "/SA/doc/system/systemProcess";
		options.activity = "mainActivity";

		options.dataType = "json";
		options.parameters = sendParam;
		var isDocCenter = false;
		var process = justep.Context.getCurrentProcess();
		var activity = justep.Context.getCurrentActivity();
		if("/SA/doc/docCenter/docCenterProcess" == process && "mainActivity" == activity){
			isDocCenter = true;
		}
		if(isDocCenter){
			options.action = "queryHostAction";
		}else{
			options.action = "queryNoPermissionHostAction";
		}
		options.directExecute = true;
		//__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
		var res = "#";
		try{
			res = justep.Request.sendBizRequest2(options);
		}catch(e){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232109).getMessage());
		}
		
		if(!justep.Request.isBizSuccess(res,'json')){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232110).getMessage());
		}
		var __XHR = res;
		//__checkMD5CodeByJSON__
		var docUrl= justep.Request.responseParseJSON(res).data.value;
		if(docUrl=='#'){
			alert('您没有相应操作的权限');
		}
		if(!docUrl.indexOf(window.location.protocol) < 1 && docUrl!='#'){
			docUrl = justep.Request.BASE_URL4NORESOURCE + docUrl;
		}
		return docUrl+"&"+this.getBSessionIDParam();
	},
		
	getBSessionIDParam : function() {
		return "bsessionid=" + justep.Request.URLParams["bsessionid"];	
	},
	
	getCookie : function(cookieName) {
		var data = this.getShareData();
		if(!data) return "";
		return data["__docShareData__" + cookieName];
	},

	getShareData: function(){
		var currentWindow = window;
		var parentWindow = currentWindow.parent;
		while (parentWindow && currentWindow!=parentWindow) {
			currentWindow = parentWindow;
			parentWindow = window.parent;
		}
		if(!parentWindow) return this.__docShareData;
		if(parentWindow.__docShareData) return parentWindow.__docShareData;
		parentWindow.__docShareData = {};
		return parentWindow.__docShareData;
	},
	
	setCookie : function(cookieName, value) {
		var data = this.getShareData();
		if(!data) return;
		
		data["__docShareData__" + cookieName] = value;		
	},
	
	getAuthList : function(person, personId){
		if(typeof person == "undefined"){
			person = justep.Context.getCurrentPersonMemberFID();
		}
		if(typeof personId == "undefined"){
			personId = justep.Context.getCurrentPersonCode();
		}
		var deptPath =justep.Context.getCurrentPersonMemberFID();
	    var personId = justep.Context.getCurrentPersonCode();
		
		var sendParam = new justep.Request.ActionParam();
		sendParam.setString('deptPath', deptPath);
		sendParam.setString('personId', personId);
		//__checkMD5Code2__
		response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "queryPermissionAction", sendParam, null, null, true,null,('undefined'!=typeof(__executeContext__))?__executeContext__:null);
		if(justep.Request.isBizSuccess(response)){
			var __XHR = response;
			//__checkMD5CodeByXML__
			return response;
		}else{
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232111).getMessage());
		}
	},

	queryNameSpaces : function() {
		var options = {};
		var param = this.createParam("queryNameSpace", [], []);		
		var sendParam = new justep.Request.ActionParam();
		sendParam.setXml('param',new justep.Request.XMLParam(param));
		
		options.process = "/SA/doc/system/systemProcess";
		options.activity = "mainActivity";

		options.dataType = "json";
		options.parameters = sendParam;
		options.action = "dispatchOptAction";
		options.directExecute = true;
		//__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
		var resQN = justep.Request.sendBizRequest2(options);
		if(!justep.Request.isBizSuccess(resQN,'json')){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232112).getMessage());
		}
		var __XHR = resQN;
		//__checkMD5CodeByJSON__
		var nameSpaces = justep.Request.responseParseJSON(resQN).data.value.rows;
		var oNameSpaces = {};
		for (var i = 0; i < nameSpaces.length; i++) {
			var nameSpace = nameSpaces[i];
			var rootID = nameSpace.SA_DocNode.value;
			var url = nameSpace.sUrl.value;
			oNameSpaces[rootID] = {url : url};
		}
		this.setCookie("docNameSpaces", JSON.stringify(oNameSpaces));
		return oNameSpaces;
	},

	getDocServerByDocPath : function(fullPath) {
		if (!fullPath) {
			alert(new justep.Message(justep.Message.JUSTEP232104).getMessage());
			return;
		}
		fullPath = fullPath.substring(1);
		var rootID = fullPath.indexOf("/") == -1 ? fullPath : fullPath.substring(0, fullPath.indexOf("/"));
		var sNameSpaces = this.getCookie("docNameSpaces");
		if (sNameSpaces) {
			var oNameSpaces = JSON.parse(sNameSpaces);
		} else {
			var oNameSpaces = this.queryNameSpaces();
		}
		return oNameSpaces[rootID];
	},
	
	queryDefine : function(process, activity, keyId, linkDefineOnly) {
		var linkAll;
		if (this.attmentLinkDefines) {
			linkAll = this.attmentLinkDefines;
		} else {
			var options = {};
			var param = new justep.Request.ActionParam();
			param.setString('linkProcess', process);
			param.setString('linkActivity', activity);
			options.process = "/SA/doc/system/systemProcess";
			options.activity = "mainActivity";

			options.dataType = "json";
			options.parameters = param;
			options.action = "queryLinkDefineMap";
			options.directExecute = true;
			options.callback = function(data) {
			};
			//__checkMD5Code2__
			options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
			var response = justep.Request.sendBizRequest2(options);
			if(!justep.Request.isBizSuccess(response,'json')){
					throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232113).getMessage());
			}
			linkAll = justep.Request.responseParseJSON(response).data.value;
			this.attmentLinkDefines = linkAll;
		}
		
		var define = linkAll;
		
		if (keyId && !!linkAll.keys[keyId]) {
			define = linkAll.keys[keyId];
			//define.hostInfo = linkAll.hostInfo;
		}

		return define;
	},
	/**
	 * @description: 查询当前应显示的目录
	 * @param: billID - 业务ID
	 * @param: process - 过程名
	 * @param: activity - 活动名	
	 * @param: rootPath - 文档关联定义根目录
	 * @param: subPath - 文档关联定义子目录
	 * @return: loader - 结构是tree的目录信息
	 */
	
	queryLinkedDir : function(billID, process, activity, rootPath, subPath) {		
		var options = {};
		var sendParam = new justep.Request.ActionParam();
		sendParam.setString("rootPath", rootPath);
		sendParam.setString("subPath", subPath);
		sendParam.setString("billID", billID);
		sendParam.setString("process", process);
		sendParam.setString("activity", activity);
		sendParam.setBoolean("isTree", true);
		
		var tp= new justep.Request.TranslateParam();
		tp.dataType = justep.Request.TranslateParam.DATATYPE_ROW_TREE ;
		tp.setTreeOption("tree-parent-relation", "sParentID"); 
		
		options.translateParam = tp;
		
		options.process = "/SA/doc/system/systemProcess";
		options.activity = "mainActivity";
		
		options.dataType = "xml";
		options.parameters = sendParam;
		options.action = "queryLinkDirAction";
		options.directExecute = true;
		options.callback = function(data) {
		};
		//__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
		var response = justep.Request.sendBizRequest2(options);
		if(justep.Request.isBizSuccess(response)){
			var __XHR = response;
			//__checkMD5CodeByXML__
			return response;
		}else{
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232114).getMessage());
		}
	},
	
	/**
	 * @description: 查询当前应显示的文件
	 * @param: billID - 业务ID
	 * @param: process - 过程名
	 * @param: activity - 活动名	
	 * @param: pattern - 返回结果列表的字段名数组	
	 * @param: orderBy - 排序字段名
	 * @return: loader - 结构是list的文件信息
	 */
	
	queryLinkedDoc : function(billID,rootPath,subPath) {
		var param = this.createParam("queryLinkedDoc", ["bill-id","rootPath","subPath"], [billID,rootPath,subPath]);
		var sendParam = new justep.Request.ActionParam();
		sendParam.setXml('param',new justep.Request.XMLParam(param));
		var response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "dispatchOptAction", sendParam, null, null, true);
		if(justep.Request.isBizSuccess(response)){
			var __XHR = response;
			//__checkMD5CodeByXML__
			return response;
		}else{
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232115).getMessage());
		}
	},
	
	/**
	 * @description: 获取文档信息
	 * @param: docID - 文档ID
	 * @param: docPath - 文档docPath
	 * @param: pattern - 返回结果列表的字段名数组	
	 * @param: orderBy - 排序字段名
	 * @return: loader - 结构是list的文件信息 
	 */
	queryDoc : function(docID, docPath, pattern, orderBy, custom , single) {
		if(typeof docID == "undefined"){
			docID = "";
		}
		if(typeof docPath == "undefined"){
			docPath = "";
		}
		if(typeof pattern == "undefined"){
			pattern = "";
		}
		if(typeof orderBy == "undefined"){
			orderby = "";
		}
		if(typeof custom == "undefined"){
			custom = "";
		}
		if(pattern != ""){
			pattern=pattern.join(",");
		}
		
		var options = {};
		var sendParam = new justep.Request.ActionParam();
		sendParam.setString('docID', docID);
		sendParam.setString('docPath', docPath);
		sendParam.setString('pattern', pattern);
		sendParam.setString('orderBy',orderBy);
		sendParam.setString('custom',custom);
		options.process = "/SA/doc/system/systemProcess";
		options.activity = "mainActivity";

		options.dataType = "json";
		options.parameters = sendParam;
		options.action = "queryDocAction";
		options.directExecute = true;
		//__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
		var response = justep.Request.sendBizRequest2(options);
		if(!justep.Request.isBizSuccess(response,'json')){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232116).getMessage());
		}
		var __XHR = response;
		//__checkMD5CodeByJSON__
		var rows = justep.Request.responseParseJSON(response).data.value.rows;		
		/*返回单行数据*/
		if(single == "single"){
			if(rows.length != 1){
				throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232116).getMessage());
			}
			return rows[0];
		}		
		/*返回多行数据*/
		return rows;
	 },
	 
	 
	 getFlashUploader:function(param){
		 return this.getUploader2(param);
	 },
	 
	 getUploader: function(containerID, docPath, limitSize, uploadResponse, click, width, height, zIndex, filter, multiFiles, caller,selected,completed){
		 return this.getUploader2({containerID:containerID, docPath:docPath, limitSize:limitSize, uploadResponse:uploadResponse, click:click, width:width, height:height, zIndex:zIndex, filter:filter, multiFiles:multiFiles, caller:caller,selected:selected,completed:completed});
	 },
	 
	 getUploader2: function(o) {
		 var containerID=o.containerID;
		 var docPath=o.docPath;
		 var limitSize =o.limitSize;
		 var uploadResponse =o.uploadResponse;
		 var click =o.click;
		 var width =o. width;
		 var height=o.height;
		 var zIndex =o.zIndex;
		 var filter=o. filter;
		 var multiFiles=o.multiFiles;
		 var caller=o.caller;
		 var selected=o.selected;
		 var completed=o.completed;
		YAHOO.widget.Uploader.SWFURL = justep.Request.convertURL("/UI/system/service/doc/transport/uploader.swf", true);
		var overlay = YAHOO.util.Dom.get(containerID);
		YAHOO.util.Dom.setStyle(overlay, 'width', width);
		YAHOO.util.Dom.setStyle(overlay, 'height', height);
		YAHOO.util.Dom.setStyle(overlay, 'z-index', zIndex);
		var uploader = new YAHOO.widget.Uploader(containerID);
		uploader.setDocPath = function(docPath){
			this.docPath = docPath;
		};
		uploader.setDocPath(docPath);
		uploader.allCount = 0;
		uploader.finishCount = 0;
		uploader.fileList;
		uploader.click = function() {
			if (click != undefined) {
				click.call(caller);
			}
			uploader.clearFileList();
		};
		uploader.contentReady = function() {
			uploader.setAllowMultipleFiles(multiFiles ? true : false);
			if (filter) {
				uploader.setFileFilters(filter);
			}
		};
		uploader.fileSelect = function(event) {
			if (selected != undefined) {
				var cancel = selected.call(caller,event.fileList,this);
				if(cancel){
					event.fileList={};
					uploader.clearFileList();
				}
			}
			uploader.allCount = 0;
			uploader.finishCount = 0;
			uploader.completedCount = 0;
			uploader.fileList = event.fileList;
			
			var fileData = [];
			for (var p in uploader.fileList) {
				var file = uploader.fileList[p];
				if ((file.size > limitSize) && (limitSize > 0)) {
					alert(new justep.Message(justep.Message.JUSTEP232105,justep.Doc.formatSize(limitSize)).getMessage());
					uploader.removeFile(file.id);
					continue;
				}
				fileData.push({id : file.id, name : file.name, size : file.size, progress : "0"});
				uploader.allCount++;
			};
			if(uploader.allCount == 0) return;
			this.openUploadProgressDialog(fileData);
			this.currentUploader = uploader;
			/*uploader.uploadAll(uploader.host + "/repository/file/cache/upload", "POST", "uploadInfo", "Filedata");*/
			try{				
				var host = justep.Doc.getdocServerAction(uploader.docPath, "/repository/file/cache/upload");
				
			}catch(e){				
				alert(new justep.Message(justep.Message.JUSTEP232106).getMessage());
				throw e;
			}
			if(host.indexOf("uploadDoc.j")==-1&&host.indexOf("#")==-1){
				uploader.loadAppPolicy(host.substr(0,host.indexOf("repository"))+"crossdomain.xml");
			}else if (host.indexOf("#")!=-1){
				this.getUploadProgressDialog().close();
				throw e;
			}
			try{
				uploader.uploadAll(host, "POST", "uploadInfo", "Filedata");
			}catch(e){				
				alert(new justep.Message(justep.Message.JUSTEP232107).getMessage());
				throw e;
			}
		};
		uploader.uploadStart = function(event) {
		};
		uploader.uploadProgress = function(event) {
			var prog = Math.round(100 * (event["bytesLoaded"] / event["bytesTotal"]));
			if(this.uploadPprogressTable){
				var idx = this.uploadPprogressTable.find("id",event["id"]);
				this.uploadPprogressTable.setValue(idx+1,"progress",prog);
				this.uploadPprogressTable.dm[idx].prog = prog;
			}
		};
		uploader.uploadCancel = function(event) {
		};
		uploader.uploadComplete = function(event) {
			uploader.completedCount++;
			if(uploader.completedCount==uploader.allCount){
				if (completed != undefined) {
					completed.call(caller,uploader.fileList,this);
				}
			}
		};
		uploader.uploadResponse = function(event) {
			uploader.finishCount++;
			var eventData = justep.XML.fromString(event.data);
			var docName = uploader.fileList[event.id].name;
			var kind = justep.XML.getNodeText(justep.XML.eval0(eventData, "//file/@mediatype")[0]);
			var size = uploader.fileList[event.id].size;
			cacheName = justep.XML.getNodeText(justep.XML.eval0(eventData, "//file/@file-name")[0]);
			uploadResponse.call(caller, docName, kind, size, cacheName);
			if (uploader.finishCount == uploader.allCount) {
				if(this.uploadPprogressTable){
					this.uploadPprogressTable.deleteAllRow();
				    this.uploadPprogressTable.deleteQueue = null;
				}
				this.getUploadProgressDialog().close();
			}
		};
		uploader.uploadError = function(event) {
			alert(new justep.Message(justep.Message.JUSTEP232108,event.status).getMessage());
		};
		uploader.addListener('click', uploader.click);
		uploader.addListener('contentReady', uploader.contentReady);
		uploader.addListener('fileSelect', uploader.fileSelect, null, this);
		uploader.addListener('uploadStart', uploader.uploadStart);
		uploader.addListener('uploadProgress', uploader.uploadProgress, null, this);
		uploader.addListener('uploadCancel', uploader.uploadCancel);
		uploader.addListener('uploadComplete', uploader.uploadComplete, null, this);
		uploader.addListener('uploadCompleteData', uploader.uploadResponse, null, this);
		uploader.addListener('uploadError', uploader.uploadError);
		return uploader;
	},
	
	getHtml4Uploader : function(param){
		var uploaderDiv = param.uploaderDiv;
		var docPath= param.docPath;
		var onClickCallBack = param.clickCallBack;
		var onSubmitCallBack = param.submitCallBack;
		var onCompleteCallBack = param.completeCallBack;
		var caller = param.caller;
		var filter = param.filter ? param.filter : '*/*';
		var button = $('#'+uploaderDiv), interval;
		
		var dialog = document.createElement('div');
		dialog.id = uploaderDiv+'-waiting';
		dialog.style.position = "absolute";
		dialog.style.zIndex = "2000";
		dialog.style.background = "#fff";
		dialog.style.border = "1px solid #C2D5DC";
		dialog.style.width = "310px";
		dialog.style.height = "80px";
		AjaxUpload.prototype.setDocPath = function(docPath){
			this._settings.action = justep.Doc.getdocServerAction(
					docPath, "/repository/file/cache/upload", true);
		};
		AjaxUpload.prototype.getButton = function(){
			return this._button;
		};
		var uploader = new AjaxUpload(button, {
			action : '',
			name : 'myfile',
			filter : filter,
			onSubmit : function(file, ext) {
				var filter = this._settings.filter;
				if (filter == '*/*' || ext && new RegExp('^('+filter+')$','\i').test(ext)){
					if(onClickCallBack){
						var cancel = onClickCallBack.call(caller,this);
						if(cancel){
							return false;
						}
					}
					
					this.setDocPath(docPath);
					if(onSubmitCallBack){
						var cancel = onSubmitCallBack.call(caller,file,this);
						if(cancel){
							return false;
						}
					}
					var dialogHeight = 80;
					var top = $(this._button).offset().top;
					var topValue  = (top > (50+dialogHeight) ? top -50 -dialogHeight :top);
					var leftValue = ($(this._button).offset().left + 50);
					if(topValue <= 0){
						topValue = window.screen.height/2 -50 - dialogHeight;
					}
					
					if(leftValue <=0){
						leftValue = window.screen.width/2 - 50;
					}
					dialog.style.top = topValue + "px";
					dialog.style.left = leftValue + "px"; 
					dialog.innerHTML = "<div id='uploadingDialog' style='position:relative;'>" +
					   "<img style='position:absolute;top:20px;left:20px;' src='"+justep.Request.convertURL("/UI/system/service/report/dialog/waiting1.gif")+"'/>" +
					   "<div style='position:absolute;top:32px;left:60px;font-size:13px;width:230px;overflow:hidden;height:30px;padding-left:10px;'>正在上传:"+file+",请稍等...</div>" +
					   "<div style='position:relative;top:32px;left:290px;float:left;width:20px;'></div></div>";
					dialog.style.height = dialogHeight +"px";
					document.body.appendChild(dialog);
				} else {					
					alert('非法的文件格式!');
					return false;
				}
			},
			onComplete : function(docName, response) {
				var fileList = $(response).find("file");
				$("#"+uploaderDiv+'-waiting').remove();
				if(fileList.length == 0){
					throw new Error("上传失败!"+"|"+response);
				}else{
					if(onCompleteCallBack){
						onCompleteCallBack.call(caller,docName,this,response);
					}
				}
				
			}
		});
		return uploader;
	},
	
	
	trim :function(value){
		return value||"";
	},
	
	addCreateVersionLog:function(changeLog,attachmentValue,billID){
		var item={};
		item.billID=billID;
		item.attachmentValue=attachmentValue;
		changeLog.createVersionLogs.push(item);
	},
	
	addChangeLog : function(changeLog, operate, values, filePorps, billID){
		var item = {};
		item.operation_type = operate;
		/*当前环境信息 */
		item.process = justep.Context.getCurrentProcess();
		item.activity = justep.Context.getCurrentActivity();
		item.person = justep.Context.getCurrentPersonMemberFID();
		item.person_name = justep.Context.getCurrentPersonName();
		item.dept_name = justep.Context.getCurrentDeptName()?justep.Context.getCurrentDeptName():"";
		item.bill_id = this.trim(billID);
		
		/*文档属性 */
		item.doc_id = this.trim(values[0]);
		item.version = this.trim(values[1]+"");
		item.file_id = this.trim(values[2]);
		item.doc_version_id = this.trim(values[3]);
		item.doc_name = this.trim(values[4]);
		item.kind = this.trim(values[5]);
		item.size = this.trim(values[6]);
		item.parent_id = this.trim(values[7]);
		item.doc_path = this.trim(values[8]);
		item.doc_display_path = this.trim(values[9]);
		item.description = this.trim(values[10]);
		item.classification = this.trim(values[11]);
		item.keywords = this.trim(values[12]);
		item.finish_time = this.trim(values[13]);
		item.serial_number = this.trim(values[14]);
		/*文档服务器文件属性 */
		if (typeof filePorps != "undefined") {
			item.doc_type = this.trim(filePorps[0]);
			item.cache_name = this.trim(filePorps[1]);
			item.revision_cache_name = this.trim(filePorps[2]);
			item.comment_file_content = this.trim(filePorps[3]);			
		}else{
			item.doc_type = "";
			item.cache_name = "";
			item.revision_cache_name = "";
			item.comment_file_content = "";
		}

		/* 存储时需要的辅助信息 */
		if(("new"==operate) || ("link"==operate) || ("newDir"==operate)){
			item.link_id = (new justep.UUID()).valueOf();
		}else
			item.link_id = "";
		item.access_record_id = (new justep.UUID()).valueOf();
				
		changeLog.items.push(item);
	},
	
	updateChangeLog : function(changeLog,docId,fileId,docVersionId){
		var items = changeLog.items;
		for(var i=0; i < items.length ; i++){
			var item = items[i];
			if(item.doc_id == docId){
				item.file_id = fileId;
				item.doc_version_id = docVersionId;
				return;
			}
		}
	},
	
	removeChangeLog : function(changeLog,docID){
		var items = changeLog.items;
		for (var item in items) {
			var item = items[item];
			if (item.doc_id == docID){
				changeLog.items.pop(item);	
			}
		}
	},
	/*
	向changeLog中的row修改记录，需保证values和filePorps顺序
	values为[doc-id, version, file-id, doc-version-id, doc-name, kind, size, parent-id, doc-path, doc-display-path, description, classification, keywords, finish-time, serial-number].
	filePorps为[doc-type, cache-name, revision-cache-name, comment-file-content]
	*/
	modifyChangeLog : function(item, values, filePorps) {
		item.version = values[0];
		item.file_id = values[1];
		item.doc_version_id = values[2] == null?"":values[2];
		item.doc_name = values[3];
		item.kind = values[4];
			
		item.size = values[5];
		item.parent_id = values[6];
		item.doc_path =	values[7];
		item.doc_display_path = values[8];
		item.description =  values[9] == null?"":values[9];
		
		item.classification = values[10] == null?"":values[10];
		item.keywords = values[11] == null?"":values[11];
		item.finish_time = values[12] == null?"":values[12];
		item.serial_number = values[13] == null?"":values[13];
		if(item.operation_type=="editInfo"&&values[14]){
			item.operation_type = values[14];
		}
		
		/*文档服务器文件属性 */
		if (typeof filePorps != "undefined") {
			item.doc_type = filePorps[0];
			item.cache_name = filePorps[1];
			item.revision_cache_name =	filePorps[2];
			item.comment_file_content =	filePorps[3];			
		}else{
			item.doc_type = "";
			item.cache_name = "";
			item.revision_cache_name =	"";
			item.comment_file_content =	"";
		}
	},

	evalChangeLog : function(changeLog,docId) {
		var items = changeLog.items;
		for(var item in items){
			if(items[item].doc_id==docId)
				return items[item];
		}
		return null;
	},
	
	addAccessRecord : function(changeLog) {
		var sendParam = new justep.Request.ActionParam();	
	    sendParam.setString('param', JSON.stringify(changeLog));
		response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "addAccessRecordAction", sendParam, null, null, false);
		if(!justep.Request.isBizSuccess(response)){
		    throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232117).getMessage());
	    }
		var __XHR = response;
		//__checkMD5CodeByXML__
	},
	
	createElement : function(changeLog, name, value){
		var element = changeLog.createElement(name);
		if(value != null && value !== ""){
			justep.XML.setNodeText(element,'.', value);
		}
		return element;
	},
	createVersion : function(sDocID,isSaveDocLink,sDocName){
		var options = {};
	    var sendParam = new justep.Request.ActionParam();
	    sendParam.setString('sDocID', sDocID);
	    sendParam.setBoolean("isSaveDocLink", isSaveDocLink?isSaveDocLink:false);
	    sendParam.setBoolean("isHttps", this.isHttps());
	    if(sDocName){
	    	sendParam.setString("sDocName" , sDocName);
	    }
		var response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "createVersionAction", sendParam, null, null, true);
		if(justep.Request.isBizSuccess(response)){
			var __XHR = response;
			//__checkMD5CodeByXML__
			var createSucess =justep.Request.transform(justep.Request.getData(response.responseXML));
			return createSucess;
		}else{
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232118).getMessage());
		}
	},
	deleteVersion :function(docPath, fileID,LogID, docVersion){
		var options = {};
	    var sendParam = new justep.Request.ActionParam();
	    sendParam.setString('sDocPath', docPath);
	    sendParam.setString('sFileID', fileID);
	    sendParam.setString('sLogID', LogID);
	    sendParam.setString('sDocVersion', docVersion);
	    sendParam.setBoolean("isHttps", this.isHttps());
		var response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "deleteVersionAction", sendParam, null, null, true);
		if(!justep.Request.isBizSuccess(response)){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232119).getMessage());
		}
	},
	createVersionFromJsonStr : function(billID,jsonStr,isHttps){
		var options = {};
	    var sendParam = new justep.Request.ActionParam();
	    sendParam.setString('billID', billID);
	    sendParam.setString('jsonStr', jsonStr);
	    sendParam.setBoolean("isHttps", this.isHttps());
		var response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "createVersionFromJsonStrAction", sendParam, null, null, true);
		if(justep.Request.isBizSuccess(response)){
			var __XHR = response;
			//__checkMD5CodeByXML__
			return true;
		}else{
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232120).getMessage());
		}
	},
	
	//锁定自己已经锁定的文档返回false,函数queryDocCache会返回锁定的真正情况。TODO ：更好的函数命名
	lockDoc : function(sDocID) {
		var sendParam = new justep.Request.ActionParam();
		sendParam.setBoolean('isLockDoc', true);
		sendParam.setString('sDocID', sDocID);
		var response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "changeDocStateAction", sendParam, null, null, true);
		if(justep.Request.isBizSuccess(response)){
			var __XHR = response;
			//__checkMD5CodeByXML__
			var affactRow =justep.Request.transform(justep.Request.getData(response.responseXML));
			if(affactRow&&affactRow=='0'){
				return false;
			}
			return true;
		}else{
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232121).getMessage());
		}
	},
	unLockDoc : function(sDocID) {
		var sendParam = new justep.Request.ActionParam();
		sendParam.setBoolean('isLockDoc', false);
		sendParam.setString('sDocID', sDocID);
		var response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "changeDocStateAction", sendParam, null, null, true);
		if(justep.Request.isBizSuccess(response)){
			var __XHR = response;
			//__checkMD5CodeByXML__
			var affactRow =justep.Request.transform(justep.Request.getData(response.responseXML));
			if(affactRow&&affactRow=='0'){
				return false;
			}
			return true;
		}else{
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232122).getMessage());
		}
	},
	
	/**
	 * @description: 下载文档
	 * @param: docID - 文档ID
	 * @param: host - 文档服务器地址ID
	 */	
	downloadDoc : function(docPath, docID) {
		var row = this.queryDoc(docID, undefined, ["sFileID"],undefined,undefined,"single");
		var fileID =  row.sFileID.value;
		this.downloadDocByFileID(docPath, fileID);
	},
	
	downloadDocByFileID : function(docPath, fileID, versionID, partType) {
		if(justep.Browser.hasTouch){
			if(justep.Browser.isInApp){
				if(justep.Browser.isAndroid){
					window.open(this.getURLByFileID(docPath, fileID, versionID, partType),'附件下载',null,true);
				}else if(justep.Browser.isIDevice){
					var self = this;
				    var getDownloadUrl = function(){
							var docUrl = self.getURLByFileID(docPath, fileID, versionID, partType);
							if(docUrl.indexOf("uploadDoc.j")!=-1&&docUrl.indexOf("#")==-1){
								docUrl = justepApp.utils.getFullUrl(docUrl);
							}
							return docUrl;
					};
					var justepApp = justep.getJustepApp();
				    justepApp.attachment.downloadAttachment(getDownloadUrl);
				}
			}else{
				window.open(this.getURLByFileID(docPath, fileID, versionID, partType));	
			}
		}else{
			window.open(this.getURLByFileID(docPath, fileID, versionID, partType),"_self");
			
		}
	},
	
	getURL : function(docPath, docID) {
		var row = this.queryDoc(docID, undefined, ["sFileID"],undefined,undefined,"single");
		var fileID =  row.sFileID.value;
		return this.getURLByFileID(docPath, fileID);
	},
	
	getURLByFileID : function(docPath, fileID, versionID, partType) {
		var versionID = versionID ? versionID : "last";
		var partType = partType ? partType : "content";
		return this.getdocServerAction(docPath, "/repository/file/download/" + fileID + "/" + versionID + "/" + partType );
	},	

	browseFileComment : function(docPath,fileID,docVersionID){
		var options = {};
		var sendParam = new justep.Request.ActionParam();
		sendParam.setBoolean("isHttps", this.isHttps());
		sendParam.setString('docPath',docPath);
		sendParam.setString('fileID',fileID);
		sendParam.setString('docVersionID',docVersionID);
		
		options.process = "/SA/doc/system/systemProcess";
		options.activity = "mainActivity";

		options.dataType = "json";
		options.parameters = sendParam;
		options.action = "queryCommentFileContent";
		options.directExecute = true;
		//__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
		try{
			var res = justep.Request.sendBizRequest2(options);
		}catch(e){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232123).getMessage());
		}
		
		if(!justep.Request.isBizSuccess(res,'json')){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232123).getMessage());
		}
		var __XHR = res;
		//__checkMD5CodeByJSON__
		var v = justep.Request.responseParseJSON(res).data.value;
		return JSON.parse(v);
	},
	
	browseDoc : function(docPath, docID){
		var row = this.queryDoc(docID, undefined, ["sDocName,sFileID"],undefined,undefined,"single");
		var docName = row.sDocName.value;
		var fileID = row.sFileID.value;
		this.browseDocByFileID(docPath, docName, fileID);		
	},
	
	browseDocByFileID : function(docPath, docName, fileID, versionID, partType, programID, isPrint){
		var versionID = versionID ? versionID : "last";
		var partType = partType ? partType : "content";
		if(!fileID){
	         alert('文档不能浏览，数据未提交！');
	         return;
		}
		var fileinfo = this.queryDocByFileId(docPath,fileID,docName,versionID);
		if (!justep.Browser.isInApp && '.doc.docx.xls.xlsx.ppt.mpp.vsd.'.indexOf(String(/\.[^\.]+$/.exec(docName)) + '.') >= 0) {
			var OVP = {};
			OVP.host = docPath;	
			OVP.programID = programID;
			OVP.versionID = versionID;

			if(fileinfo.length < 1) 
			   throw new Error("文档服务器不存在名称为"+ docName + "的office文件！");
			if(partType=='revision'){
				OVP.partType = !fileinfo.parts.part_3 ? "content" : "revision";
			}else
				OVP.partType= partType;
					
			OVP.fileID = fileID;
			OVP.fileExt = String(/\.[^\.]+$/.exec(docName));
			OVP.filename = docName.substr(0, docName.lastIndexOf('.'));
			OVP.filename = escape(OVP.filename);
			if(typeof isPrint === "undefined" || isPrint == null) isPrint = true;
			OVP.isPrint = isPrint ? true : false;			
			var param = "<data>" + unescape(OV.JSON.stringify(OVP)) + "</data>";
			justep.Request.callURL("/system/service/doc/office/officeViewerWindow.w?process=" 
		      + justep.Context.getCurrentProcess()
		      + "&activity=" + justep.Context.getCurrentActivity(), "about:blank", param);
		}
		else if(_read_file_type &&_read_file_type.indexOf((String(/\.[^\.]+$/.exec(docName)).toLowerCase())) >= 0){
			var url = this.getdocServerAction(docPath, "/repository/file/view/" + fileID + "/" + versionID + "/" + partType );
			if(url.indexOf("#") == -1){
				var self = this;
				if (justep.Browser.isInApp) {
					var justepApp = justep.getJustepApp();
					var getBrowserUrl = function() {
						var docUrl = url;
						if (docUrl.indexOf("uploadDoc.j") != -1
								&& docUrl.indexOf("#") == -1) {
							docUrl = window.location.protocol + "//"
									+ window.location.host + docUrl;
						}
						return docUrl;
					};
					var getDocName = function() {
						return docName;
					};
					justepApp.attachment.browserAttachment(getBrowserUrl,getDocName);
				} else {
					window.open(url);
				}
			}
		}else{
			alert("浏览器不支持在线浏览此格式的文件");
		}		
	},
	
	/**
	 * @description: 构造请求参数
	 * @param: operation - 操作类型
	 * @param: nodes - 节点名数组与值对应
	 * @param: values - 节点值数组与名对应
	 * @return: param - 参数字符串
	 * 
	 */	
	createParam : function(operate, nodes, values){
		var items = [];
		items.push("<data>");
		items.push("<operate>");
		items.push(operate);
		items.push("</operate>");
		for(i=0;i<nodes.length;i++){
			items.push("<");
			items.push(nodes[i]);
			items.push(">");
			items.push(values[i]);
			items.push("</");
			items.push(nodes[i]);
			items.push(">");
		}
		items.push("</data>");
		return items.join("");			
	},

	/**
	 * @description: 构造请求参数
	 * @param: pattern - 条件模板节点名数组
	 * @return: param - 条件模板
	 * 
	 */
	createQueryPattern : function(pattern){
		var items = [];
		for(i=0;i<pattern.length;i++){
			items.push("<");
			items.push(pattern[i]);
			items.push("/>");
		}
		return items.join("");
	},
	
	transB2KB : function(v) {
		if (v.value == '') {
			return;
		}
		var tempValue = v.value;
		var resultValue = "";
		var tempValueStr = new String(tempValue);
		if ((tempValueStr.indexOf('E') != -1) || (tempValueStr.indexOf('e') != -1)) {
			var regExp = new RegExp('^((\\d+.?\\d+)[Ee]{1}(\\d+))$', 'ig');
			var result = regExp.exec(tempValue);
			var power = "";
			if (result != null) {
				resultValue = result[2];
				power = result[3];
				result = regExp.exec(tempValueStr);
			}
			if (resultValue != "") {
				if (power != "") {
					var powVer = Math.pow(10, power);
					resultValue = resultValue * powVer / 1000;
				}
			}
			return parseInt(resultValue) + 1;
		} else {
			return parseInt(tempValue / 1000) + 1;
		}
	},
	
	formatSize : function(size) {
		var format = "";
		if(size == 0) {
			format = "0.0 KB";
		} else {
			if(size < 1048576){
				format = (Math.ceil(size / 1024 * 10) / 10).toFixed(1) + " KB";
			} else{
				format = (Math.ceil(size / 1048576 * 10) / 10).toFixed(1) + " MB";
			}
		}
		return format;
	},
	
	getDocFullPath : function(docID, docPath) {
		if(docPath == "/"){
			return docPath.concat(docID);
		}else{
			return docPath.concat("/").concat(docID);
		}
	},
	
	
	getDocFullDisplayPath : function(docName, docDisplayPath) {
		if(docDisplayPath == "/"){
			return docDisplayPath.concat(docName);
		}else{
			return docDisplayPath.concat("/").concat(docName);
		}
	},
	
	/**
	 * @description: 获取文档操作记录
	 * @param: docID - 文档ID
	 * @param: opaerationTypes - 是否包含此操作
	 * @return: resopnse - 操作记录dom
	 * 
	 */
	
	getAccessRecord : function(docID, hasDownload, hasNew, hasEdit ){
		if (typeof hasDownload == "undefined") {
			hasDownload = true;
		}
		if (typeof hasNew == "undefined") {
			hasNew = true;
		}
		if (typeof hasEdit == "undefined") {
			hasEdit = true;
		}
		var param = this.createParam("queryAccessRecord", ["doc-id", "has-new", "has-download", "has-edit"], [docID, hasNew.toString(),hasDownload.toString() , hasEdit.toString()]);
	    var sendParam = new justep.Request.ActionParam();		
		sendParam.setXml('param',new justep.Request.XMLParam(param));
	    response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "dispatchOptAction", sendParam, null, null, true);		
	    
		if(justep.Request.isBizSuccess(response)){
			var __XHR = response;
			//__checkMD5CodeByXML__
			return response;
		}else{
			alert("getAccessRecord Error :查询操作记录失败！");
		}
	},
	
	openOfficeDialog : function(docExtDivID, docExtObjID, OVP, afterOfficeViewerDialogSelect, caller) {
		justep.Doc.afterOfficeViewerDialogSelect=afterOfficeViewerDialogSelect;
		justep.Doc.caller=caller;
		if(!document.getElementById(docExtObjID)){
			if(justep.Browser.IE){
				var docExtDiv = document.getElementById(docExtDivID);
			    docExtDiv.outerHTML = '<object id="'+ docExtObjID +'" classid="clsid:4771E057-4202-4F93-8F73-4C6654A9573D" style="position:absolute;width:100%"' +
					'codebase='+justep.Request.convertURL("/UI/system/service/doc/office/office.cab#version="+_ocx_version, true)+' style="display:none;" >' +
					'</object><SCRIPT LANGUAGE=javascript FOR='+docExtObjID+' EVENT=OnExcuteJS(id,param)>justep.Doc.execOfficeAction(id,param);</SCRIPT>';
			}else{
				var docExtDiv = document.getElementById(docExtDivID);
				docExtDiv.outerHTML = '<object id="'+ docExtObjID +'"type="application/justep-activex"  clsid="{4771E057-4202-4F93-8F73-4C6654A9573D}" style="width:0px;height:0px;" ' +
				'codebase='+justep.Request.convertURL("/UI/system/service/doc/office/office.cab#version="+_ocx_version, true)+' event_onexcutejs="_execOfficeAction">' +
				'</object>';
			}
		}
		var docOcx = document.getElementById(docExtObjID);
		if(justep.Browser.IE10){
			docOcx.attachEvent("OnExcuteJS", justep.Doc.execOfficeAction);
		}
		OVP.filename=encodeURI(OVP.filename);
		docOcx.OpenWebForm(justep.Request.addBsessionid(window.location.protocol+"//"+self.location.host+justep.Request.convertURL("/UI/system/service/doc/office/officeViewerDialog.w?process=/SA/doc/system/systemProcess&activity=mainActivity")), JSON.stringify(OVP));
		//docOcx.OpenWebForm("http://192.168.1.49:8080/x5/UI/demo/uploader/location.html", JSON.stringify(OVP));
	},
	openNeoOfficeDialog : function(OVP) {
		alert('openNeoOfficeDialog');
		var url = "/system/service/doc/office/neoOfficeEditDialog.w";
		if(!this.NeoOfficeEditRunner){
			  this.NeoOfficeEditRunner = new justep.windowRunner(url,"",true
						,null,null);
			  this.NeoOfficeEditRunner.setProcess("/SA/doc/system/systemProcess");
			  this.NeoOfficeEditRunner.setActivity("mainActivity");
			  
		}
		OVP.filename=encodeURI(OVP.filename);
		this.NeoOfficeEditRunner.open(JSON.stringify(OVP),url);
	},
	
	execOfficeAction : function(id,param){
		if(id=='officeAction'){
			if(param){
				var data = OV.JSON.parse(param);
				justep.Doc.afterOfficeViewerDialogSelect.call(justep.Doc.caller, data);
			}else{
				//点编辑进去，点关闭出来需要解锁
				justep.Doc.afterOfficeViewerDialogSelect.call(justep.Doc.caller, "");
			}
		}else if(id == "undefined"){
			if(typeof officeAutomation == "function"){
				officeAutomation.call(justep.Doc.caller,id,param);
			}
		}
	},
	
	docInfoDialog : null,
	
	openDocInfoDialog : function(data, afterEnsureFun, caller){
		if(!this.docInfoDialog){
			this.docInfoDialog = new justep.WindowDialog("docInfoDialog","/system/service/doc/dialog/docInfoDialog.w","文件属性",true,null,544,545,0,0,true);
			this.docInfoDialog.attachEvent("onSend",function(event){return this.data;} , this.docInfoDialog);
			this.docInfoDialog.attachEvent("onReceive",function(event){afterEnsureFun.call(caller, event);}, this.docInfoDialog);
		}
		this.docInfoDialog.data = data;
		this.docInfoDialog.open();
	},
	
	dirInfoDialog : null,
	
	openDirInfoDialog : function(data, afterEnsureFun, caller){
		if(!this.dirInfoDialog){
			this.dirInfoDialog = new justep.WindowDialog("docInfoDialog","/system/service/doc/dialog/dirInfoDialog.w","文件夹属性",true,null,440,525,0,0,true);
			this.dirInfoDialog.attachEvent("onSend",function(event){return this.data;} , this.dirInfoDialog);
			this.dirInfoDialog.attachEvent("onReceive",function(event){afterEnsureFun.call(caller, event);}, this.dirInfoDialog);
		}
		this.dirInfoDialog.data = data;
		this.dirInfoDialog.open();
	},
	
	historyDialog: null,
	
	openDocHistoryDialog: function(docID, fileID, docPath,access,isPrint)	{
		if(!this.historyDialog){
			this.historyDialog = new justep.WindowDialog("historyDialog","/system/service/doc/dialog/docHistoryDialog.w","历史版本",true,true,652,485,0,0,true);
			this.historyDialog.attachEvent("onSend",function(event){return this.data;} , this.historyDialog);
		}
		this.historyDialog.data = {
			docID: docID,
			fileID: fileID, 
			docPath: docPath,
			access:access,
			isPrint:isPrint
		};
		this.historyDialog.open();
	},
	
	downloadHistoryDialog: null,
	
	openDocDownloadHistoryDialog: function(docID){       
		if(!this.downloadHistoryDialog){
			this.downloadHistoryDialog = new justep.WindowDialog("docDownloadHistoryDialog","/system/service/doc/dialog/docDownloadHistoryDialog.w","下载记录",true,true,644,445,0,0,true);
			this.downloadHistoryDialog.attachEvent("onSend",function(event){return this.data;} , this.downloadHistoryDialog);
		}
		this.downloadHistoryDialog.data = {
			docID: docID
		};
		this.downloadHistoryDialog.open();
	},
	
	templateDialog: null,
	
	openDocTemplateDialog : function(data, afterSelectFun, caller){
		if(!this.templateDialog){
			this.templateDialog = new justep.WindowDialog("templateDialog","/system/service/doc/dialog/docTemplateDialog.w","选择模板",true,null,500,400,0,0,false);
		}
		if(this.templateDialog.onSendId) this.templateDialog.detachEvent(this.templateDialog.onSendId);
		if(this.templateDialog.onReciveId ) this.templateDialog.detachEvent(this.templateDialog.onReciveId);
		this.templateDialog.onSendId = this.templateDialog.attachEvent("onSend",function(event){return this.data;} , this.templateDialog);
		this.templateDialog.onReciveId = this.templateDialog.attachEvent("onReceive",function(event){afterSelectFun.call(caller, event);}, this.templateDialog);
		this.templateDialog.data = data;
		this.templateDialog.open();
	},
	
	officeFieldDialog:null,
	
	openOfficeFieldDialog : function(data, afterSelectFun, caller){
		if(!this.officeFieldDialog){
			this.officeFieldDialog = new justep.WindowDialog("officeFieldDialog","/system/service/doc/office/officeViewerFieldDialog.w","文档域编辑",true,null,550,350,0,0,true);
			this.officeFieldDialog.attachEvent("onSend",function(event){return this.data;} , this.officeFieldDialog);
			this.officeFieldDialog.attachEvent("onReceive",function(event){afterSelectFun.call(caller, event);}, this.officeFieldDialog);
		}
		this.officeFieldDialog.data = data;
		this.officeFieldDialog.open();
	},
	
	checkOcx:function(ocxDiv){
		var showUploadDialog = false;
		if(navigator.userAgent.toLowerCase().indexOf("windows")==-1){
			alert("当前环境不支持此功能");
			return false;
		}else{
			if(justep.Browser.IE){
				if(!document.getElementById("justepDoc_ocx")){							  	
					$('<div style="height:0px;weight:0px;display:none;"></div>').html('<object id="justepDoc_ocx" classid="clsid:4771E057-4202-4F93-8F73-4C6654A9573D" width="0" height="0"' +
							'codebase='+justep.Request.convertURL("/UI/system/service/doc/office/office.cab#version="+_ocx_version, true)+'>' +
							'</object>').appendTo('body');
				}
				var isExsitOcx = document.getElementById("justepDoc_ocx").innerHTML; 
				if (isExsitOcx == ''){
					showUploadDialog = true;
				}else{
					return true;
				}
			}else {
				if(!document.getElementById("justepDoc_ocx")){							  	
					$('<div style="height:0px;weight:0px;"></div>').html('<object id="justepDoc_ocx" type="application/justep-activex" style="width:0px;height:0px;" clsid="{4771E057-4202-4F93-8F73-4C6654A9573D}" ' +
							'codebase='+justep.Request.convertURL("/UI/system/service/doc/office/office.cab#version="+_ocx_version, true)+'>' +
							'</object>').appendTo('body');
				}
				var isExsitOcx = document.getElementById("justepDoc_ocx");
				if (typeof isExsitOcx.openWebForm != "function"){
					showUploadDialog = true;
				}else{
					return true;
				}
			}
			if(showUploadDialog){
				if(!this.checkOcxDialog){
					  var self = this;	
					  this.checkOcxDialog = new justep.Dialog("justepCheckOcxDialog", "安装提示",true,null,400,150,null,null,function(){
						     var str ='<div style="width:100%;height:100%;position:relative;">                                                     '
						    	 +'<div style="font:12px;margin-top:30px;margin-left:50px;margin-right:50px;" align="center" >                           '
						    	 +' 未安装文档相关辅助控件<br/><br/>点击                                                                                         '
						    	 +'	 <a href="#" onclick="justep.Doc.updateOcx()">                 '                                         
						    	 +'	 更新                                                                                                     '
						    	 +'	 </a>                                      '                                                             
						    	 +' 跳转到控件安装页面。                                                                      '                           
						    	 +'</div>                                         '                                                             
						    	 +'<div style="width:75px; height:22px; position:absolute;bottom:0;right:0;margin:8px">'                     
						    	 +'	<button class="xui-button" onclick="justep.Doc.checkOcxDialog.close();" style="width:75px">确定</button>'  
						    	 +'</div>                                                                                                     '
						 		+'</div> ';
						     self.checkOcxDialog.setContentHTML(str);
					  });
					  
					}
					this.checkOcxDialog.setMinmaxable(false);
					this.checkOcxDialog.setResizable(false);
					this.checkOcxDialog.open();	
			}
		}
    },
    
    updateOcx:function(){
    	justep.Doc.checkOcxDialog.close();
    	justep.Portal.openWindow('工具下载', "/SA/update/update.j");
	},
	
	getImage:function() {
		return '/form/dhtmlx/dhtmlxGrid/imgs/folderClosed.gif';	
	},
	
	getUploadProgressDialog:function(){
		var self = this;
		if(!this.uploadProgressDialog){ 
			this.uploadProgressDialog = new justep.Dialog("docUploadProgressDialog", "正在上传...",true,null,550,215,null,null,function(){
				var str = "<div id='progressTable'></div>";
				
				self.uploadProgressDialog.setContentHTML(str);
				
				self.uploadPprogressTable = new justep.Doc.ProgressTable({renderTo:"progressTable",width:"550px",columns:[
						{text:"名称",width:"270",name:"name"},
						{text:"大小(byte)",width:"100",name:"size"},
						{text:"上传进度",name:"progress",width:"150",render:function(prog,record){
					if(prog == '0'){
					return "<div style='height:5px;width:150px;background-color:#CCC;'></div>";
							   	  }else if(prog !='100'){
							   	  	return "<div style='height:12px;width:150px;background-color:#CCC;'><div style='height:5px;background-color:#0EBE0E;width:" + (prog/100)*150 + "px;'></div></div>";
							   	  }else if(prog == '100'){  
							   	  	return "<div style='height:12px;background-color:#0EBE0E;width:150px;'></div>";
							   	  }
							  }},
						{text:"",name:"cancal",width:"24"}
						 ]});
			}
			);
			this.uploadProgressDialog.setMinmaxable(false);
			this.uploadProgressDialog.setResizable(false);		 
			
		}
	    return this.uploadProgressDialog;
	},
	
	openUploadProgressDialog:function(data){
		if(!data) return;
		var dlg = this.getUploadProgressDialog();
		if(null!=dlg){
			dlg.open();
			if(this.uploadPprogressTable){
				if(this.uploadPprogressTable){
					this.uploadPprogressTable.deleteAllRow();
				    this.uploadPprogressTable.deleteQueue = null;
				}
			    for (i = 0; i < data.length; i++) {
			       var record = data[i];	
				   if(!this.uploadPprogressTable.dm){
					this.uploadPprogressTable.dm = [];
					}
					if(this.uploadPprogressTable.deleteQueue){
						this.uploadPprogressTable.deleteByField("id",this.uploadPprogressTable.deleteQueue.shift());
					}
					record.cancal = justep.Doc.ProgressTable.createCancalButton(record.id);
					this.uploadPprogressTable.dm.push(record);
					this.uploadPprogressTable.appendRow(record);
			    }
			}
			
		}
	},
	queryDocCache:function(docID){
		var options = {};
		var sendParam = new justep.Request.ActionParam();
		sendParam.setString('docID', docID);
		options.process = "/SA/doc/system/systemProcess";
		options.activity = "mainActivity";

		options.dataType = "json";
		options.parameters = sendParam;
		options.action = "queryDocCacheAction";
		options.directExecute = true;
		options.callback = function(data) {
		};
		//__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
		var response = justep.Request.sendBizRequest2(options);
		if(!justep.Request.isBizSuccess(response,'json')){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232124).getMessage());
		}
		var __XHR = response;
		//__checkMD5CodeByJSON__
		var fileinfo = justep.Request.responseParseJSON(response).data.value;
		return fileinfo;
	},	
	queryDocByFileId : function(docPath,fileid,filename,version){
		var options = {};
		var sendParam = new justep.Request.ActionParam();
		sendParam.setBoolean('isHttps', this.isHttps());
		sendParam.setString('host', docPath);
		sendParam.setString('fileId', fileid);
	    sendParam.setString('docVersion', !version?"last":version);
		// /options.contentType = 'json';
		options.process = "/SA/doc/system/systemProcess";
		options.activity = "mainActivity";

		options.dataType = "json";
		options.parameters = sendParam;
		options.action = "queryDocInfoByIdAction";
		options.directExecute = true;
		options.callback = function(data) {
		};
		//__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
		var response = justep.Request.sendBizRequest2(options);		
		if(!justep.Request.isBizSuccess(response,'json')){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232125).getMessage());
		}
		var __XHR = response;
		//__checkMD5CodeByJSON__
		var fileinfo = justep.Request.responseParseJSON(response).data.value;
		if(fileinfo.queryFlag == "false"){
			throw new Error('提示：'+(!filename ? '此文件不存在，可能文档服务配置存在问题，请联系系统管理员！' : '“'+ filename + '”文件不存在，可能文档服务配置存在问题，请联系系统管理员！'));
		}
		return fileinfo;			
	},
	syncCustomFileds:function(docID){
		var sendParam = new justep.Request.ActionParam();
		sendParam.setString('sDocID', docID);
		sendParam.setBoolean('isHttps', this.isHttps());
		response = justep.Request.sendBizRequest("/SA/doc/system/systemProcess", "mainActivity", "syncCustomFiledsAction", sendParam, null, null, true);
		if(!justep.Request.isBizSuccess(response)){
			throw justep.Error.create(new justep.Message(justep.Message.JUSTEP232126).getMessage());
		}
		var __XHR = response;
		//__checkMD5CodeByXML__
		
	},
	commitDocCache:function(docID,changeLog){
		var node = justep.Doc.evalChangeLog(changeLog, docID);
		var options = {};
	    var sendParam = new justep.Request.ActionParam();
	    sendParam.setString('changeLog', JSON.stringify(node));
	    options.process = "/SA/doc/system/systemProcess";
	    options.activity = "mainActivity";
	    options.dataType = "json";
	    options.parameters = sendParam;
	    options.action = "commitDocCacheAction";
	    options.directExecute = true;
	  //__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
	    var response = justep.Request.sendBizRequest2(options);
	    if(!justep.Request.isBizSuccess(response,'json')){
			throw new Error("commitError: 数据保存失败！");
		}
	    var __XHR = response;
		//__checkMD5CodeByJSON__
	},
	//知识中心新建word文件的时候要提交flag的
	commitDocFlag:function(changeLog){
		var options = {};
		var sendParam = new justep.Request.ActionParam();
	    sendParam.setString('changeLog', JSON.stringify(changeLog));
	    options.process = "/SA/doc/system/systemProcess";
	    options.activity = "mainActivity";
	    options.dataType = "json";
	    options.parameters = sendParam;
	    options.action = "commitDocFlagAction";
	  //__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
	    var response = justep.Request.sendBizRequest2(options);
	    if(!justep.Request.isBizSuccess(response,'json')){
			throw new Error("commitError: commitDocFlag失败！");
		}
	    var __XHR = response;
		//__checkMD5CodeByJSON__
	},
	
	
	/*
	 *  @param: 知识中心使用commitDocAction
	 *  		附件使用commitAttachAction
	 */
	commitDoc : function(changeLog,rootPath,action){
		//changeLog.url = host+"/repository/file/cache/commit";
		changeLog.isHttps = this.isHttps();
		changeLog.operate = "commitDoc";		
		var options = {};
	    var sendParam = new justep.Request.ActionParam();
	    sendParam.setString('changeLog', JSON.stringify(changeLog));
	    options.process = "/SA/doc/system/systemProcess";
	    options.activity = "mainActivity";
	    options.dataType = "json";
	    options.parameters = sendParam;
	    options.action = action?action:"commitDocAction";
	    options.directExecute = true;    
	    //__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
	    var response = justep.Request.sendBizRequest2(options);
	    if(!justep.Request.isBizSuccess(response,'json')){
			throw new Error("commitError: 数据提交失败！");
		}
	    var __XHR = response;
		//__checkMD5CodeByJSON__
	    return justep.Request.responseParseJSON(response).data.value;
	},
	
	saveDoc : function(changeLog,isSaveDocLink){
		changeLog.operate = "saveDoc";
		var options = {};

	    var sendParam = new justep.Request.ActionParam();
	    sendParam.setString('changeLog', JSON.stringify(changeLog));
	    sendParam.setBoolean("isSaveDocLink", isSaveDocLink?isSaveDocLink:false);
	    
	    options.process = "/SA/doc/system/systemProcess";
	    options.activity = "mainActivity";
	    options.dataType = "json";
	    options.parameters = sendParam;
	    options.action = "saveAttachAction";
	    options.directExecute = false;
	    //__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
	    var response = justep.Request.sendBizRequest2(options);
		
		if(!justep.Request.isBizSuccess(response,'json')){
			throw new Error("saveDocError: 数据保存失败！");
		}
		var __XHR = response;
		//__checkMD5CodeByJSON__
		return response;
	},
	
	deleteDocAction : function(changeLog,rootPath){
		changeLog.isHttps = this.isHttps();
		changeLog.operate = "deleteDocAction";		
		var options = {};
	    var sendParam = new justep.Request.ActionParam();
	    sendParam.setString('changeLog', JSON.stringify(changeLog));
	    options.process = "/SA/doc/system/systemProcess";
	    options.activity = "mainActivity";
	    options.dataType = "json";
	    options.parameters = sendParam;
	    options.action = "deleteDocAction";
	    options.directExecute = true;    
	  //__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
	    var response = justep.Request.sendBizRequest2(options);
	    if(!justep.Request.isBizSuccess(response,'json')){
			throw new Error("commitError: 数据提交失败！");
		}
	    var __XHR = response;
		//__checkMD5CodeByJSON__
	},
	
	getDocAuthList : function(){
		var options = {};
		var sendParam = new justep.Request.ActionParam();
		sendParam.setString('deptPath', justep.Context.getCurrentPersonMemberFID());
		sendParam.setString('personId', justep.Context.getCurrentPersonCode());
	    options.process = justep.Context.getCurrentProcess();
	    options.activity = justep.Context.getCurrentActivity();
	    options.dataType = "json";
	    options.parameters = sendParam;
	    options.action = "queryPermissionAction";
	    options.directExecute = false;    
	  //__checkMD5Code2__
		options.executeContext = ('undefined'!=typeof(__executeContext__))?__executeContext__:null;
	    var response = justep.Request.sendBizRequest2(options);
		
		if(!justep.Request.isBizSuccess(response,'json')){
			throw new Error("getDocAuthListError: 获取文档权限列表失败！");
		}
		var __XHR = response;
		//__checkMD5CodeByJSON__
		return justep.Request.responseParseJSON(response).data.value;
	}
};


justep.Doc.ProgressTable = function(config){ 
  this.columns = config.columns;
  this.tbObj = document.createElement("table"); 
  this.tbObj.border = "1px";
  this.tbObj.style.borderColor = "#DDDDDD";
  this.tbObj.cellpadding = "0";
  this.tbObj.cellspacing="0";
  this.tbObj.style.fontSize = "9pt";
  this.tbObj.style.borderCollapse = "collapse";
  document.getElementById(config.renderTo).appendChild(this.tbObj);
 
  this.hd = this.tbObj.insertRow(0);
  for(var i=0;i<this.columns.length;i++){
  	if(!this.columns[i].hide){
	  	var cell = this.hd.insertCell(i);
	  	cell.style.backgroundColor="#EDEEF0";
	  	cell.valign = "center";
	  	cell.width = this.columns[i].width || "100";
	  	cell.innerHTML=this.columns[i].text;
  	}
  }
};

justep.Doc.ProgressTable.prototype.appendRow = function(record){ 
	var rIdx = this.tbObj.rows.length;
	var r = this.tbObj.insertRow(rIdx);
	r.style.backgroundColor= "#FAFAFA";
	for(var i=0;i<this.columns.length;i++){
		var cell = r.insertCell(i);
		var render = this.columns[i].render;
		var value = record[this.columns[i].name];
		if(render){
			value = render.call(this,value,record);
		}
		cell.innerHTML=value ||'&nbsp;';
		/*
		cell.style.borderLeft="1px solid #CCCCCC";
		cell.style.borderRight="1px solid #CCCCCC";
		cell.style.borderBottom="1px solid #CCCCCC";
		*/
	}
};

justep.Doc.ProgressTable.prototype.loadData = function(dm){
	if(!dm) return;
	this.deleteAllRow();
	this.dm = dm;
	for(var i =0 ;i<this.dm.length;i++){
		this.appendRow(this.dm[i]);
	}
};

justep.Doc.ProgressTable.prototype.reload = function(){
	this.loadData(this.dm);
};

justep.Doc.ProgressTable.prototype.find = function(fieldName,value){ 
	for(var i = 0;i<this.dm.length;i++){
		if(this.dm[i][fieldName] == value){
			return i;
		}
	}
	return -1;
};

justep.Doc.ProgressTable.prototype.setValue = function(idx,fieldName,value){
	var cRow = this.tbObj.rows[idx];
	var cellIdx = -1;
	for(var i=0;i<this.columns.length;i++){
		if(this.columns[i].name == fieldName){
			var render = this.columns[i].render;
			if(render){ 
				value = render.call(this,value);
			}
			cRow.cells[i].innerHTML = value;
			break;
		}
	}
};


justep.Doc.ProgressTable.prototype.deleteAllRow = function(){ 
	var length = this.tbObj.rows.length;
	for (i=1;i<length;i++) {
         this.tbObj.deleteRow(1);
	}
	this.dm = [];
};

justep.Doc.ProgressTable.prototype.deleteByField = function(fieldName,value){ 
	var idx = -1;
	for(var i=0;i<this.dm.length;i++){
		if(this.dm[i][fieldName]== value){
			idx = i;
			break;
		}
	}
	if(idx != -1){
		 this.tbObj.deleteRow(idx+1);
		 this.dm.splice(idx,1);
	}
};

justep.Doc.ProgressTable.createCancalButton = function (id) {
    return "<img id=" + id + " src='" + justep.Request.convertURL('/UI/system/images/doc/deletefile.gif',true) + "' onclick='justep.Doc.ProgressTable.cancal(this.id);' alt='取消上传'/>"; 
};

justep.Doc.ProgressTable.cancal = function(id){
	if(justep.Doc.uploadPprogressTable){
		var uploader = justep.Doc.currentUploader;
		uploader.cancel(id);
		uploader.removeFile(id);
		--uploader.allCount;
		if(uploader.allCount==0) justep.Doc.getUploadProgressDialog().close();
  	    justep.Doc.uploadPprogressTable.deleteByField("id",id);
	}
};

justep.Doc.compatible = function(){
	_me = justep.Doc;
	//__initMD5Code__
}();
// for npapi interface
function _execOfficeAction(id,param){
	justep.Doc.execOfficeAction(id,param);
}



