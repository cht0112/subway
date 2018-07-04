package com.justep.appCommon.daisy;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.httpclient.methods.multipart.ByteArrayPartSource;
import org.apache.commons.httpclient.methods.multipart.FilePart;
import org.apache.commons.httpclient.methods.multipart.Part;
import org.dom4j.Document;
import org.dom4j.DocumentException;

class FileUploadCaller extends DaisyCallerBase {

	public FileUploadCaller(DaisyConfig config) {
		super(config);
	}

	public String getPath() {
		return "/file/upload";
	}

	public FileInfo execute(FileInfo fileInfo, InputStream content, InputStream comment, InputStream revision)
			throws IOException, DocumentException {
		if (content == null) {
			throw new RuntimeException("Content dose not allow nulls.");
		}

		List<Part> parts = new ArrayList<Part>();
		parts.add(DaisyUtils.createUploadPart(getConfig(), FilePartType.content, content));
		if (comment != null) {
			parts.add(DaisyUtils.createUploadPart(getConfig(), FilePartType.comment, comment));
		}
		if (revision != null) {
			parts.add(DaisyUtils.createUploadPart(getConfig(), FilePartType.revision, revision));
		}

		ByteArrayPartSource infoSource = new ByteArrayPartSource("info", fileInfo.toDocument().asXML()
				.getBytes(DaisyConstants.DEFAULT_CHARSET));
		FilePart infoPart = new FilePart("xml", infoSource, "application/xml", DaisyConstants.DEFAULT_CHARSET);
		parts.add(infoPart);

		String url = getURL();
		Part[] partArray = {};
		Document result = DaisyUtils.executePostMethodReturnDocument(url, parts.toArray(partArray));
		return FileInfo.parseDocument(result);
	}

	public FileInfo execute(FileType fileType, String fileName, InputStream content, InputStream comment,
			InputStream revision) throws IOException, DocumentException {
		List<FilePartType> partTypes = new ArrayList<FilePartType>();
		partTypes.add(FilePartType.content);
		if (comment != null) {
			partTypes.add(FilePartType.comment);
		}
		if (revision != null) {
			partTypes.add(FilePartType.revision);
		}

		FileInfo fileInfo = createFileInfo(getConfig(), fileType, fileName, partTypes);
		return execute(fileInfo, content, comment, revision);
	}

	private FileInfo
			createFileInfo(DaisyConfig config, FileType fileType, String fileName, List<FilePartType> partTypes)
					throws IOException, DocumentException {
		String mimeType = MimeType.getFileMime(fileName);

		FileInfo fileInfo = new FileInfo();
		fileInfo.setName(fileName);
		fileInfo.setTypeId(fileType.getID(config));

		for (FilePartType partType : partTypes) {
			fileInfo.appendPart(partType.getID(config), mimeType);
		}

		return fileInfo;
	}
}
