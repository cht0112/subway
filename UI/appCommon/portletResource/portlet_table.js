function PortletTable(aTableId, aMoreTitle, aMoreUrl, aItems, aExtColWidth) {
	this.tableElement = document.getElementById(aTableId);
	this.extColWidth = aExtColWidth;

	if (aMoreUrl && aMoreUrl != null) {
		var moreCell = this.tableElement.createTFoot().insertRow().insertCell();
		if (aExtColWidth)
			moreCell.colSpan = 3;
		else
			moreCell.colSpan = 2;
		var a = moreCell.appendChild(document.createElement("A"));
		a.href = "#";
		a.innerText = "更多>>";
		a.onclick = function() {
			justep.Portal.openWindow(aMoreTitle, aMoreUrl);
		};
	}

	if (aItems) {
		this.addItems(aItems);
	}
};

PortletTable.prototype = new Object();

PortletTable.prototype.getBaseURL = function(){
	var s = justep.Request.convertURL("", true);
	if(s.slice(-1) == "/") return s.slice(0, -1);
	else return s;
};
PortletTable.prototype.addItem = function(aText, aUrlTitle, aUrl, aTitle,
		aClickFun, aExtColText) {
	var dataRow = this.tableElement.insertRow();
	var imgCell = dataRow.insertCell();
	imgCell.width = "12px";
	imgCell.height = "16px";
	imgCell.vAlign="middle";
	var dotImg = imgCell.appendChild(document.createElement("img"));
	// dotImg.border = "none";
	dotImg.src = this.getBaseURL() + "/UI/appCommon/images/dot.png";
	var dataCell = dataRow.insertCell();
	dataCell.height="16px";
	dataCell.width="100%";
	dataCell.vAlign="middle";
	var a = dataCell.appendChild(document.createElement("A"));
	a.href = "#";
	a.innerHTML = aText;
	a.title = aTitle;
	if (aClickFun) {
		a.onclick = Function(aClickFun);
	} else {
		a.onclick = function() {
			if (aUrlTitle)
					justep.Portal.openWindow(aUrlTitle, aUrl);
			else
					justep.Portal.openWindow(aText, aUrl);
		};
	}
	if (this.extColWidth) {
		if (!aExtColText)
			aExtColText = "";
		var extCell = dataRow.insertCell();
		extCell.width = this.extColWidth;
		extCell.innerHTML = aExtColText;
	}
};

PortletTable.prototype.addItems = function(aItems) {
	for (var i = 0; aItems[i]; i++) {
		this.addItem(aItems[i]["text"], aItems[i]["urlTitle"],
				aItems[i]["url"], aItems[i]["title"], aItems[i]["clickFun"],
				aItems[i]["extColText"]);
	}
};

PortletTable.prototype.clearItems = function() {
	while (this.tableElement.rows[0]) {
		this.tableElement.deleteRow(0);
	}
}