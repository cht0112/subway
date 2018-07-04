justep.design.StandardProcessExecuteList = function(config) {
	justep.design.StandardProcessExecuteList.superclass.constructor.call(this,
			config);
}

justep
		.extend(
				justep.design.StandardProcessExecuteList,
				justep.design.Component,
				{
					paintContent : function(xmlNode) {
						var elementStr = '<table id="'
								+ this.id
								+ '" border="1" class="xform-input" cellpadding="0" cellspacing="0"'
								+ 'solid="#9FB7D3"'
								+ 'font-family="Arial"'
								+ 'font-size="12px"'
								+ 'table-layout="fixed"'
								+ 'width="100%">'
								+ '<tr height="5px">'
								+ '	<td style="background-color:#C9D6E6;font-size:12px;font-weight:bold;font-family:Arial;padding:1px;color:#000000;">'
								+ '		<div style="float:left" name="title">'
								+ '		</div>'
								+ '		<div style="float:left">'
								+ '			<span style="display:inline-block;width:5px;height:5px;"></span>'
								+ '		</div>'
								+ '		<div style="float:right">'
								+ '      <img name="btn" src=""/>'
								+ '		</div>'
								+ '	</td>'
								+ '</tr>'
								+ '<tr style="vertical-align: top">'
								+ '	<td>'
								+ '		<div name="panelarea" isViewPartContent ="true" style="background-color:white;width:100%;height:100%;border:1px solid black;">'
								+ "<table style='border-style: solid none none solid; border-width: 1px; border-color: #C0C0C0; width: 100%; font-family: 宋体, Arial, Helvetica, sans-serif; font-size: 9pt; border-collapse: collapse;'>"
								+ "		<tr style='height: 25px; text-align: center; background-color: #DDEEFF;'>"
								+ "			<td style='width: 120px; border-style: none solid solid none; border-width: 1px; border-color: #C0C0C0; padding: 0px;'>"
								+ "				环节</td>"
								+ "			<td style='border-style: none solid solid none; border-width: 1px; border-color: #C0C0C0; padding: 0px;'>"
								+ "				意见</td>"
								+ "			<td style='width: 102px; border-style: none solid solid none; border-width: 1px; border-color: #C0C0C0; padding: 0px;'>"
								+ "				处理人</td>"
								+ "			<td style='width: 110px; border-style: none solid solid none; border-width: 1px; border-color: #C0C0C0; padding: 0px;'>"
								+ "				处理时间</td>" + "		</tr>" + "</table>"
								+ '</div>' + '	</td>' + '</tr>' + '</table>';
						this.createElement(elementStr, xmlNode);

						var div = $(this.element).find('div[name="panelarea"]')[0];
						var panelarea = $(xmlNode).find(
								'group[name="panelarea"]')[0];
						if (div && panelarea) {
							div.id = panelarea.getAttribute('id');
						}
						this.setProperty('panel-title', xmlNode
								.getAttribute('panel-title'), true);
						this.setProperty('status',
								xmlNode.getAttribute('status'), true);

						var panelareaNodes = $(panelarea).children();
						for ( var n = 0; n < panelareaNodes.length; n++) {
							if (panelareaNodes[n].nodeType == 1) {
								this.canvas.parseXml(panelareaNodes[n], div);
							} else if (panelareaNodes[n].nodeType == 3) {
								var text = document
										.createTextNode(panelareaNodes[n].nodeValue);
								div.appendChild(text);
							}
						}
					},

					setProperty : function(p, v, init) {
						// justep.design.StandardProcessExecuteList.superclass.setProperty.call(p,v,false,false);
						if ('panel-title' == p) {
							$(this.element).find('div[name="title"]').each(
									function() {
										$(this).text(v ? v : '');
									});
						} else if ('status' == p) {
							this.changeLayout(v, init);
						}
					},
					getActivteViewPartElement : function() {
						return $(this.element).find("div[name='panelarea']")[0];
					},
					changeLayout : function(status, init) {
						var basePath = ComponentConfig[this.componentName].basePath;
						var collapsed = 'collapsed' == status;
						var img = $(this.element).find('img[name="btn"]')[0];
						if (img) {
							img.src = collapsed ? (basePath + '/images/expanded.gif')
									: (basePath + '/images/collapsed.gif');
						}
						this._status = status;
						var div = $(this.element).find('div[name="panelarea"]')[0];
						if (div) {
							if (collapsed) {
								div.style.display = "none";
								div.style.visibility = "hidden";
								this.oldHeight = this.element.style.height;
								this.element.style.height = 5;
							} else {
								if (init)
									return;
								div.style.display = "inline";
								div.style.visibility = "inherit";
								this.element.style.height = this.oldHeight ? this.oldHeight
										: 20;
							}
							;
							// this.canvas.paintResizeBox();
						}
					}
				});