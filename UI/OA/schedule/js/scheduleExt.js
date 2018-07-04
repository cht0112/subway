var init_scroll_top = 335; // 初始日程表的滚动高度，这里显示时从08：00开始

function getScheduleDateFilter(mode, date, formatStr) {
	if (!mode || typeof(mode) != "string")
		return "";
	if (!date || typeof(date) != "object")
		return "";
	if (!formatStr || typeof(formatStr) != "string")
		return "";
	if (formatStr == "")
		return "";

	var rt = "";
	var temp = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	var begin = null;
	var end = null;
	switch (mode) {
		case "day" : {
			begin = temp;
			end = scheduler.date.add(begin, 1, "day");
			break;
		}
		case "week" : {
			begin = scheduler.date.week_start(temp);
			end = scheduler.date.add(begin, 1, "week");
			break;
		}
		case "month" : {
			begin = scheduler.date.month_start(temp);
			end = scheduler.date.add(begin, 1, "month");
			break;
		}
	}
	if (begin && end) {
		rt = getFormatedResult(begin, end, formatStr);
	}
	return rt;
}

function getFormatedResult(begin, end, formatStr) {
	if (typeof(begin) == "object")
		begin = justep.Date.toString(begin,"yyyy-MM-dd");
	
	if (typeof(end) == "object")
		end = justep.Date.toString(end,"yyyy-MM-dd");
	
	if (!formatStr || typeof(formatStr) != "string")
		return "";
	if (formatStr == "")
		return "";
	var rt = "";
		rt = formatStr.replace(new RegExp(":begin","gm"),begin);
		rt = rt.replace(new RegExp(":end","gm"),end);
	return rt;
}
// 获取日期间的天数
function DateDiff(sDate1, sDate2) {
	var aDate, oDate1, oDate2, iDays;
	aDate = sDate1.split("-");
	oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]); // 转换为mm-dd-yyyy格式
	aDate = sDate2.split("-");
	oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
	iDays = Math.ceil(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒数转换为天数
	if((sDate1.substring(0,10)) === (sDate2.substring(0,10)))
		iDays = 0;
	if((sDate1.substring(0,10)) !== (sDate2.substring(0,10))&&iDays==0)
		iDays = 1;
	//alert("idays=="+iDays+"\nss:"+Math.abs(oDate1 - oDate2));
	return iDays
}
// 返回指定日期
function getDate(sDate, n) {
	var s, d, t, t2;

	t = getUTC(sDate)
	t2 = n * 1000 * 3600 * 24 // 加减n天的时间
	t += t2;
	d = new Date(t);

	s = d.getUTCFullYear() + "-";
	s += ("00" + (d.getUTCMonth() + 1)).slice(-2) + "-";
	s += ("00" + d.getUTCDate()).slice(-2);
	return s;
}

function getUTC(sDate) {
	var yy, mm, dd;

	var reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
	if (arr = sDate.match(reg)) {
		yy = Number(arr[1]);
		mm = Number(arr[2]) - 1;
		dd = Number(arr[3]);
	} else {
		return null;
	}

	return Date.UTC(yy, mm, dd);
}