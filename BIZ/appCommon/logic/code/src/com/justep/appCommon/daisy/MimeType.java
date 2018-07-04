package com.justep.appCommon.daisy;

import java.util.HashMap;
import java.util.Map;

import com.justep.system.util.CommonUtils;

class MimeType {
	private static Map<String, String> mimeTypeMap = new HashMap<String, String>();
	static {
		mimeTypeMap.put("doc", "application/msword");
		mimeTypeMap.put("docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
		mimeTypeMap.put("xls", "application/vnd.ms-excel");
		mimeTypeMap.put("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
		mimeTypeMap.put("ppt", "application/vnd.ms-powerpoint");
		mimeTypeMap.put("pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation");
		mimeTypeMap.put("accdb", "application/msaccess");
		mimeTypeMap.put("rar", "application/x-zip-compressed");
		mimeTypeMap.put("jar", "application/x-zip-compressed");
		mimeTypeMap.put("zip", "application/x-zip-compressed");
		mimeTypeMap.put("txt", "text/plain");
		mimeTypeMap.put("text", "text/plain");
		mimeTypeMap.put("jsp", "text/plain");
		mimeTypeMap.put("java", "text/plain");
		mimeTypeMap.put("html", "text/html");
		mimeTypeMap.put("htm", "text/html");
		mimeTypeMap.put("xml", "text/xml");
		mimeTypeMap.put("css", "text/css");
		mimeTypeMap.put("rtf", "text/rtf");
		mimeTypeMap.put("wml", "text/vnd.wap.wml");
		mimeTypeMap.put("jpg", "image/jpg");
		mimeTypeMap.put("jpeg", "image/jpeg");
		mimeTypeMap.put("jpg", "image/jpeg");
		mimeTypeMap.put("jpe", "image/jpeg");
		mimeTypeMap.put("png", "image/png");
		mimeTypeMap.put("gif", "image/gif");
		mimeTypeMap.put("tiff", "image/tiff");
		mimeTypeMap.put("tif", "image/tiff");
		mimeTypeMap.put("svg", "image/svg+xml");
		mimeTypeMap.put("svgz", "image/svg+xml");
		mimeTypeMap.put("svg", "image/svg-xml");
		mimeTypeMap.put("pdf", "application/pdf");
		mimeTypeMap.put("wrl", "model/vrml");
		mimeTypeMap.put("smil", "application/smil");
		mimeTypeMap.put("js", "text/javascript");
		mimeTypeMap.put("vbs", "text/vbscript");
		mimeTypeMap.put("zip", "application/zip");
		mimeTypeMap.put("mp3", "audio/mpeg");
		mimeTypeMap.put("rdf", "text/rdf");
	}

	public static String getFileMime(String fileName) {
		String ext = CommonUtils.getExtOfFile(fileName);
		String mime = "application/octet-stream";
		if (mimeTypeMap.containsKey(ext.toLowerCase())) {
			mime = mimeTypeMap.get(ext.toLowerCase());
		}
		return mime;
	}
}
