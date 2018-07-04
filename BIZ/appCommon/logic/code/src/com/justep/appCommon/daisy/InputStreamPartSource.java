package com.justep.appCommon.daisy;

import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.httpclient.methods.multipart.PartSource;

class InputStreamPartSource implements PartSource {
	private String fileName = null;
	private InputStream inputStream = null;

	public InputStreamPartSource(String fileName, InputStream inputStream) {
		this.fileName = fileName;
		this.inputStream = inputStream;
	}

	public InputStream createInputStream() throws IOException {
		return inputStream;
	}

	public String getFileName() {
		return fileName;
	}

	public long getLength() {
		try {
			return this.inputStream.available();
		} catch (IOException e) {
			e.printStackTrace();
			return -1;
		}
	}
}
