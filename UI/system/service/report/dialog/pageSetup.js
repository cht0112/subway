var pageSetup = {
	changeCount : 0
};

/**
 * name:data#onValueChanged description: <b>[回调型事件]</b>数据变化
 * 
 * @param event
 *            它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
 */
pageSetup.pageInfoValueChanged = function(data) {
	try {
		pageSetup.changeCount++;
		if (pageSetup.changeCount == 1) {
			if (data.column == 'paperType' || data.column == 'orientation') {
				var select = justep.xbl('selectpaperType');
				var paperType = select.getValue();

				var pageTypeData = justep.xbl('pageType');
				var width = pageTypeData.getValue('pageWidth');
				var height = pageTypeData.getValue('pageHeight');

				if (data.source.getValue('orientation') == 'Landscape') {
					data.source.setValue('pageWidth', height);
					data.source.setValue('pageHeight', width);
				} else {
					data.source.setValue('pageWidth', width);
					data.source.setValue('pageHeight', height);
				}
			} else if ((data.column == 'pageWidth')
					|| (data.column == 'pageHeight')) {
				var pageInfo = justep.xbl('pageInfo');
				pageInfo.setValue('paperType', 'custom');
				pageInfo.setValue('displayName', '自定义');
			}
		}
	} finally {
		pageSetup.changeCount--;
	}

};
