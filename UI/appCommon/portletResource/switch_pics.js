function SwitchPics(aDivId, aTimeSpace, aItems) {
	this.divElement = document.getElementById(aDivId);
	this.timeSpace = aTimeSpace;
	this.items = new Array();
	this.index = 0;
	var tableHTML = "<table >"
			+ "<tr class='img'><td><a id='{id}_img_link'><img id='{id}_img' alt=''></img></a></td></tr>"
			+ "<tr class='title'><td><a id='{id}_title_link'></a></td></tr>"
			+ "<tr class='items'><td id='{id}_items'></td></tr>"
			+ "</table>";
	tableHTML = tableHTML.replace(/{id}/g, this.divElement.id);
	this.divElement.innerHTML = tableHTML;
	this.imgElement = document.getElementById(this.divElement.id + "_img");
	this.imgElement.src = justep.Request.convertURL("/UI/appCommon/images/blank.gif", true);
	this.imgLinkElement = document.getElementById(this.divElement.id + "_img_link");
	this.titleLinkElement = document
			.getElementById(this.divElement.id + "_title_link");
    this.itemsElement = document.getElementById(this.divElement.id + '_items');


	var self = this;
	var t = window.setInterval(function() {
		self.autoSwitch();
	}, self.timeSpace * 1000);
	this.imgElement.onmouseover = function() {
		window.clearInterval(t);
	};
	this.imgElement.onmouseout = function() {
		t = window.setInterval(function() {
			self.autoSwitch();
		}, self.timeSpace * 1000);
	};
	this.titleLinkElement.onmouseover = function() {
		window.clearInterval(t);
	};
	this.titleLinkElement.onmouseout = function() {
		t = window.setInterval(function() {
			self.autoSwitch();
		}, self.timeSpace * 1000);
	};
	
	var linkOnClickEvent = function() {
		self._openLink(self);
	}
	this.titleLinkElement.href = "#";
	this.imgLinkElement.href = "#";
	this.titleLinkElement.onclick = linkOnClickEvent;
	this.imgLinkElement.onclick = linkOnClickEvent;
	
	if (aItems) 
		this.addItems(aItems);
};

SwitchPics.prototype = new Object();

SwitchPics.prototype.clearItems = function() {
	this.items.length = 0;
	this.index = 0;
	this.itemsElement.innerHTML = "";
	this.imgElement.src = justep.Request.convertURL("/UI/appCommon/images/blank.gif", true);
	this.titleLinkElement.innerHTML = "";
};

SwitchPics.prototype.addItem = function(aTitle, aUrl, aImgUrl) {
	this.items.push({
		title : aTitle,
		url : aUrl,
		img : (function() {
			var o = new Image;
			o.src = aImgUrl;
			return o;
		})()
	});
	var itemElement = document.createElement("A")
	itemElement.href = "javascript:void(0)";
	itemElement.id = this.divElement.id + "_items_" + this.items.length;
	itemElement.className = "unfocus";
	itemElement.innerText = this.items.length;
	itemElement.textContent = this.items.length;

	var self = this;
	itemElement.onclick = function() {
		self._switchPic(event.srcElement.innerText);
	};

	this.itemsElement.appendChild(itemElement);

	if (this.index == 0)
		this._switchPic(1);
};

SwitchPics.prototype.addItems = function(aItems) {
	for (var i = 0; aItems[i]; i++) {
		this.addItem(aItems[i]['title'], aItems[i]['url'], aItems[i]['imgUrl']);
	}
};

SwitchPics.prototype._switchPic = function(aIndex) {
	if (this.items.length == 0)
		return;

	if (aIndex > this.items.length || aIndex < 1)
		aIndex = 1;
	var oldIndex = this.index;
	this.index = aIndex;

	if (oldIndex > 0) {
		var oldItemElement = document.getElementById(this.divElement.id + "_items_"
				+ oldIndex);
		oldItemElement.className = "unfocus";
	}
	var curItemElement = document.getElementById(this.divElement.id + "_items_"
			+ this.index);
	curItemElement.className = "focus";

	this.titleLinkElement.title = this.items[this.index - 1].title;
	this.titleLinkElement.innerText = this.items[this.index - 1].title;
	this.titleLinkElement.textContent = this.items[this.index - 1].title;
	this.imgElement.filters.revealTrans.Transition = 23;
	this.imgElement.filters.revealTrans.apply();
	this.imgElement.filters.revealTrans.play();
	this.imgElement.src = this.items[this.index - 1].img.src;
};

SwitchPics.prototype.autoSwitch = function() {
	if (this.items.length == 0) 
		return;
	this._switchPic(this.index * 1 + 1);
};

SwitchPics.prototype._openLink = function() {
	if (this.index == 0 || this.items.length == 0)
		return;
	var title = this.items[this.index - 1].title;
	var url = this.items[this.index - 1].url;
	justep.Portal.openWindow(title, url);
};
