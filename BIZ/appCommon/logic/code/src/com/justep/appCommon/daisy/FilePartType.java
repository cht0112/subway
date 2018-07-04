package com.justep.appCommon.daisy;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.dom4j.DocumentException;

public enum FilePartType {
	content, comment, revision;
	private static Map<String, Map<FilePartType, String>> cache = new HashMap<String, Map<FilePartType, String>>();

	private Map<FilePartType, String> getTypeCache(DaisyConfig config) {
		String key = config.getIPAddress() + ":" + config.getIPPort();
		Map<FilePartType, String> typeCache;
		if (cache.containsKey(key)) {
			typeCache = cache.get(key);
		} else {
			typeCache = new HashMap<FilePartType, String>();
			cache.put(key, typeCache);
		}
		return typeCache;
	}

	protected String getID(DaisyConfig config) throws IOException, DocumentException {
		String id;
		Map<FilePartType, String> typeCache = getTypeCache(config);
		if (typeCache.containsKey(this)) {
			id = typeCache.get(this);
		} else {
			FilePartTypeByNameCaller caller = new FilePartTypeByNameCaller(config);
			id = caller.execute(this);
			typeCache.put(this, id);
		}
		return id;
	}
}
