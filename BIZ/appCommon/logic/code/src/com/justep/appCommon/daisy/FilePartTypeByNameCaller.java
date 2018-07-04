package com.justep.appCommon.daisy;

import java.io.IOException;

import org.dom4j.Document;
import org.dom4j.DocumentException;

class FilePartTypeByNameCaller extends DaisyCallerBase {

	public FilePartTypeByNameCaller(DaisyConfig config) {
		super(config);
	}

	public String getPath() {
		return "/file/partTypeByName";
	}

	public String execute(FilePartType filePartType) throws IOException, DocumentException {
		String url = getURL(filePartType.toString());
		Document result = DaisyUtils.executeGetMethodReturnDocument(url);
		return DaisyUtils.getIDByResult(result);
	}

}
