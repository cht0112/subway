package com.justep.appCommon.daisy;

import java.io.IOException;

import org.dom4j.Document;
import org.dom4j.DocumentException;

class FileInfoCaller extends DaisyCallerBase {

	public FileInfoCaller(DaisyConfig config) {
		super(config);
	}

	public String getPath() {
		return "/fileinfo";
	}

	public FileInfo execute(String fileID) throws DocumentException, IOException {
		String url = getURL(fileID, "last");
		Document result = DaisyUtils.executeGetMethodReturnDocument(url);
		return FileInfo.parseDocument(result);
	}
}
