package com.justep.appCommon.daisy;

import java.io.IOException;

import org.dom4j.Document;
import org.dom4j.DocumentException;

class FileTypeByNameCaller extends DaisyCallerBase {

	public FileTypeByNameCaller(DaisyConfig config) {
		super(config);
	}

	public String getPath() {
		return "/file/typeByName";
	}

	public String execute(FileType fileType) throws IOException, DocumentException {
		String url = getURL(fileType.toString());
		Document result = DaisyUtils.executeGetMethodReturnDocument(url);
		return DaisyUtils.getIDByResult(result);
	}

}
