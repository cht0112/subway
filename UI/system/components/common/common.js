/**
 * @1 名空间名用小驼峰写法
 * @2 类名用大驼峰写法
 * @3 方法和属性名用小驼峰
 * @4 私用成员用下划线开头
 * @5 我们平台的js代码在全局只有两个名空间justep和xforms，也就是只占两个变量，除此平台代码不允许定义全局变量
 * @6 这种模式和java比较好对应，名空间下不建议（或不允许）放方法，所有的方法都是类方法或类的实例方法
 * @7 应用产品的名空间为justep.Components
 */

// 字符串格式化
// 示例: "aaaaa{0},dddafa{1}".format("XX", "YY");
// 结果: "aaaaaXXX,dddafaYYY"
String.prototype.format = function() {
	var args = arguments;
	return this.replace(/\{(\d+)\}/g, function(m, i) {
		return args[i];
	});
};
// 去除字符串左右空格
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};
// 去除字符串中所有空格
String.prototype.atrim = function() {
	return this.replace(/\s/g, '');
};
// 去除字符串左边空格
String.prototype.ltrim = function() {
	return this.replace(/(^\s*)/g, "");
};
// 去除字符串右边空格
String.prototype.rtrim = function() {
	return this.replace(/(\s*$)/g, "");
};

/**
 * components根名空间
 */
if (typeof (justep.Components) == "undefined")
	justep.Components = {};

justep.Components.ToolUtils = {};

/**
 * 数值转中文金额
 */
justep.Components.ToolUtils.num2ChMoney = function(num) {
	var numberValue = new String(Math.round(num * 100)); // 数字金额
	var chineseValue = ""; // 转换后的汉字金额
	var String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字
	var String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位
	var len = numberValue.length; // numberValue 的字符串长度
	var Ch1; // 数字的汉语读法
	var Ch2; // 数字位的汉字读法
	var nZero = 0; // 用来计算连续的零值的个数
	var String3; // 指定位置的数值
	if (len > 15) {
		alert("超出计算范围");
		return "";
	}
	if (numberValue == 0) {
		chineseValue = "零元整";
		return chineseValue;
	}
	String2 = String2.substr(String2.length - len, len); // 取出对应位数的STRING2的值
	for ( var i = 0; i < numberValue.length; i++) {
		String3 = parseInt(numberValue.substr(i, 1), 10); // 取出需转换的某一位的值
		// //alert(String3);
		if (i != (len - 3) && i != (len - 7) && i != (len - 11)
				&& i != (len - 15)) {
			if (String3 == 0) {
				Ch1 = "";
				Ch2 = "";
				nZero = nZero + 1;
			} else if (String3 != 0 && nZero != 0) {
				Ch1 = "零" + String1.substr(String3, 1);
				Ch2 = String2.substr(i, 1);
				nZero = 0;
			} else {
				Ch1 = String1.substr(String3, 1);
				Ch2 = String2.substr(i, 1);
				nZero = 0;
			}
		} else { // 该位是万亿，亿，万，元位等关键位
			if (String3 != 0 && nZero != 0) {
				Ch1 = "零" + String1.substr(String3, 1);
				Ch2 = String2.substr(i, 1);
				nZero = 0;
			} else if (String3 != 0 && nZero == 0) {
				Ch1 = String1.substr(String3, 1);
				Ch2 = String2.substr(i, 1);
				nZero = 0;
			} else if (String3 == 0 && nZero >= 3) {
				Ch1 = "";
				Ch2 = "";
				nZero = nZero + 1;
			} else {
				Ch1 = "";
				Ch2 = String2.substr(i, 1);
				nZero = nZero + 1;
			}
			if (i == (len - 11) || i == (len - 3)) { // 如果该位是亿位或元位，则必须写上
				Ch2 = String2.substr(i, 1);
			}
		}
		chineseValue = chineseValue + Ch1 + Ch2;
	}
	if (String3 == 0) { // 最后一位（分）为0时，加上“整”
		chineseValue = chineseValue + "整";
	}
	return chineseValue;
};

/**
 * 创建编号（不占号）
 */
justep.Components.ToolUtils.createTempNextSeqString = function(key, format) {
	var param = new justep.Request.ActionParam();
	param.setString("key", key);
	param.setString("format", format);

	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(),
			"createTempNextSeqStringAction", param);
	if (!justep.Request.isBizSuccess(r)) {
		var msg = new justep.Message(justep.Message.JUSTEP23104);
		throw new Error(justep.Request.getServerError(r, msg.getMessage()));
	}
	return justep.XML.getNodeText(r.responseXML, "/root/data/*");
};

/**
 * 创建编号（占号）
 */
justep.Components.ToolUtils.createNextSeqString = function(key, format) {
	var param = new justep.Request.ActionParam();
	param.setString("key", key);
	param.setString("format", format);

	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "createNextSeqStringAction",
			param);
	if (!justep.Request.isBizSuccess(r)) {
		var msg = new justep.Message(justep.Message.JUSTEP23104);
		throw new Error(justep.Request.getServerError(r, msg.getMessage()));
	}
	return justep.XML.getNodeText(r.responseXML, "/root/data/*");
};

justep.Components.ToolUtils.rdf2json = function(rdfNode) {
	var jObject = new Object();
	jObject[rdfNode.baseName] = this._rdf2json(rdfNode);
	return jObject;
};

justep.Components.ToolUtils._rdf2json = function(rdfNode) {
	var type = rdfNode.getAttribute("rdf:type");
	if (type) {
		return rdfNode.nodeTypedValue;
	} else {
		var jObject = new Object();
		var id = rdfNode.getAttribute("rdf:id");
		if (id) {
			jObject.id = id;
		}
		for ( var i = 0; i < rdfNode.childNodes.length; i++) {
			var childNode = rdfNode.childNodes[i];
			if (childNode.getAttribute("rdf:id")) {
				if (!jObject[childNode.baseName])
					jObject[childNode.baseName] = new Array();
				jObject[childNode.baseName].push(this._rdf2json(childNode));

			} else {
				jObject[childNode.baseName] = this._rdf2json(childNode);
			}
		}
		return jObject;
	}
};

/**
 * XML 转义
 */
justep.Components.ToolUtils.xmlEncode = function(str) {
	str = str.replace(/&/g, "&amp;");
	str = str.replace(/</g, "&lt;");
	str = str.replace(/>/g, "&gt;");
	str = str.replace(/'/g, "&apos;");
	str = str.replace(/"/g, "&quot;");
	return str;
};

/**
 * 获取上级路径
 * 
 * @param path
 * @return
 */
justep.Components.ToolUtils.getParentPath = function(path) {
	if (path.charAt(path.length - 1) == "/"
			|| path.charAt(path.length - 1) == "\\") {
		path = path.substring(0, path.length - 1);
	}

	var idx = Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\"));
	path = path.substring(0, idx);
	return path;
};

justep.Components.ToolUtils.getValueFromBinding = function(binding) {
	var value = null;
	if (binding) {
		value = binding.evaluate();
		if (typeof value != "string") {
			value = value[0].getValue();
		}
	}
	return value;
};

justep.Components.FilterUtils = {};

justep.Components.FilterUtils.getRelationAlias = function(dataid,relation){
	if(!dataid || !relation || relation === "") return relation;
	var d = justep.xbl(dataid);
	var r = d.defRelations[relation];
	return r?r.relation:relation;
};

/**
 * 联合过滤条件
 */
justep.Components.FilterUtils.joinFilter = function(filter1, filter2, operator) {
	if (!operator)
		operator = "and";

	if (filter1 && filter2)
		return "(" + filter1 + ") " + operator + " (" + filter2 + ")";
	else
		return (filter1 ? filter1 : "") + (filter2 ? filter2 : "");
};

justep.Components.FilterUtils.getInFilter = function(field, values, split) {
	if(values==="") return "";
	if (!split || split == "")
		split = ",";

	var valueArray = [];
	if (typeof (values) == "string")
		valueArray = values.split(split);
	else if (Object.prototype.toString.apply(values) == "[object Array]")
		valueArray = values;
	else{
		var msg = new justep.Message(justep.Message.JUSTEP231043);
		throw justep.Error.create(msg);
	}

	if (valueArray.length == 0)
		return "1 = 0";
	else
		return (field + " IN ('" + valueArray.join("','") + "')");
};

/**
 * 生成单选过滤条件
 */
justep.Components.FilterUtils.getSingleSelectFilter = function(field, value) {
	return value===""?"":(field + " = '" + value + "'");
};

/**
 * 生成多选过滤条件
 * 
 * @field 过滤的字段
 * @values 过滤的数值，字符串或字符串数组
 * @split 分隔符，默认逗号分隔
 */
justep.Components.FilterUtils.getMuiltSelectFilter = function(field, values, split) {
	return justep.Components.FilterUtils.getInFilter(field, values, split);
};

/**
 * 生成多字段模糊过滤条件
 * 
 * @fields 过滤的字段，逗号分隔的字符串或字符串数组
 * @value string
 */
justep.Components.FilterUtils.getMultiLikeFilter = function(fields, value, split) {
	if(value==="") return "";
	if (!split)
		split = ",";

	var fieldArray = [];
	if (typeof (fields) == "string")
		fieldArray = fields.split(split);
	else if (Object.prototype.toString.apply(fields) == "[object Array]")
		fieldArray = fields;
	else{
		var msg = new justep.Message(justep.Message.JUSTEP231044);
		throw justep.Error.create(msg);
	}

	value = value.toUpperCase();
	var filter = "";
	for ( var i = 0; i < fieldArray.length; i++) {
		filter = justep.Components.FilterUtils.joinFilter(filter, "UPPER("
				+ fieldArray[i] + ") LIKE '%" + value + "%'", "OR");
	}
	return filter;
};

/**
 * 生成日期过滤
 * 
 * @field string
 * @beginDate Date
 * @endDate Date
 */
justep.Components.FilterUtils.getDateFilter = function(field, beginDate, endDate) {
	var beginStr = null;
	if (Object.prototype.toString.apply(beginDate) == "[object Date]") {
		beginStr = beginDate ? justep.Date.toString(beginDate, 'YYYY-MM-DD')
				: null;
	}
	var endStr = null;
	if (Object.prototype.toString.apply(endDate) == "[object Date]") {
		endStr = endDate ? justep.Date.toString(justep.Date.increase(endDate,
				1, "d"), 'YYYY-MM-DD') : null;
	}

	if (beginStr && endStr)
		return "(stringToDate('" + beginStr + "') <= " + field
				+ ") AND (stringToDate('" + endStr + "') > " + field + ")";
	else if (beginStr)
		return "(stringToDate('" + beginStr + "') <= " + field + ")";
	else if (endStr)
		return "(stringToDate('" + endStr + "') > " + field + ")";
	else
		return "";
};

/**
 * 生成日期范围过滤
 * 
 * @beginField string
 * @endField string
 * @beginDate Date
 * @endDate Date
 */
justep.Components.FilterUtils.getDateRangeFilter = function(beginField, endField,
		beginDate, endDate) {
	var beginStr = null;
	if (Object.prototype.toString.apply(beginDate) == "[object Date]") {
		beginStr = beginDate ? justep.Date.toString(beginDate, 'YYYY-MM-DD')
				: null;
	}
	var endStr = null;
	if (Object.prototype.toString.apply(endDate) == "[object Date]") {
		endStr = endDate ? justep.Date.toString(justep.Date.increase(endDate,
				1, "d"), 'YYYY-MM-DD') : null;
	}

	if (beginStr && endStr)
		return "((" + endField + " IS NULL) OR (stringToDate('" + beginStr
				+ "') <= " + endField + ")) " + " AND ((" + beginField
				+ " IS NULL) OR (stringToDate('" + endStr + "') > "
				+ beginField + "))";
	else if (beginStr)
		return "((" + endField + " IS NULL) OR (stringToDate('" + beginStr
				+ "') <= " + endField + "))";
	else if (endStr)
		return "((" + beginField + " IS NULL) OR (stringToDate('" + endStr
				+ "') > " + beginField + "))";
	else
		return "";
};

/**
 * 生成当前操作员所有人员成员的URL过滤条件
 * 
 * @urlField string
 */
justep.Components.FilterUtils.getCurrentMembersURLFilter = function(urlField) {
	var filter = "";

	var psmFIDs = justep.Context.getAllPersonMemberFIDs();
	for ( var i = 0; i < psmFIDs.length; i++) {
		var psmFID = psmFIDs[i];
		var psmFIDSplit = psmFID.split("/");

		var psmFIDPart = "";
		for ( var j = 0; j < psmFIDSplit.length; j++) {
			var splitID = psmFIDSplit[j];
			if (splitID == "")
				continue;

			if (psmFIDPart == "") {
				psmFIDPart = "/" + splitID;
			} else {
				psmFIDPart = psmFIDPart + "/" + splitID;
			}

			var condition = "(" + urlField + " = '" + psmFIDPart + "')";
			if (filter.indexOf(condition) < 0)
				filter = justep.Components.FilterUtils.joinFilter(filter, condition,
						"OR");
		}
	}
	return filter;
};
