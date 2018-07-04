package com.justep.appCommon.daisy;

import java.io.IOException;

import org.dom4j.DocumentException;

class FileDeleteCaller extends DaisyCallerBase {

	public FileDeleteCaller(DaisyConfig config) {
		super(config);
	}

	public String getPath() {
		return "/file/delete";
	}

	public void execute(String fileID) throws DocumentException, IOException {
		String url = getURL(fileID);
		DaisyUtils.executePostMethodReturnDocument(url);
	}

}
