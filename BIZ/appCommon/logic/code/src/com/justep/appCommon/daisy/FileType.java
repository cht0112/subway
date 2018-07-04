package com.justep.appCommon.daisy;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.dom4j.DocumentException;

public enum FileType {
	attachment, document, messenger;
	private static Map<String, Map<FileType, String>> cache = new HashMap<String, Map<FileType, String>>();

	private Map<FileType, String> getTypeCache(DaisyConfig config) {
		String key = config.getIPAddress() + ":" + config.getIPPort();
		Map<FileType, String> typeCache;
		if (cache.containsKey(key)) {
			typeCache = cache.get(key);
		} else {
			typeCache = new HashMap<FileType, String>();
			cache.put(key, typeCache);
		}
		return typeCache;
	}

	protected String getID(DaisyConfig config) throws IOException, DocumentException {
		String id;
		Map<FileType, String> typeCache = getTypeCache(config);
		if (typeCache.containsKey(this)) {
			id = typeCache.get(this);
		} else {
			FileTypeByNameCaller caller = new FileTypeByNameCaller(config);
			id = caller.execute(this);
			typeCache.put(this, id);
		}
		return id;
	}
}
