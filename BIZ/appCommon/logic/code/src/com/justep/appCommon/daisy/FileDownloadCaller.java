package com.justep.appCommon.daisy;

import java.io.IOException;
import java.io.OutputStream;

import org.dom4j.DocumentException;

import com.justep.util.Utils;

class FileDownloadCaller extends DaisyCallerBase {

	public FileDownloadCaller(DaisyConfig config) {
		super(config);
	}

	public String getPath() {
		return "/file/download";
	}

	public long execute(String fileID, String versionID, FilePartType partType, OutputStream output)
			throws DocumentException, IOException {
		partType = partType == null ? FilePartType.content : partType;
		versionID = Utils.isEmptyString(versionID) ? "last" : versionID;
		String url = getURL(fileID, versionID, partType.toString());
		return DaisyUtils.executeGetMethodToStream(url, output);
	}
}
