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

class FileUpdateCaller extends DaisyCallerBase {

	public FileUpdateCaller(DaisyConfig config) {
		super(config);
	}

	public String getPath() {
		return "/file/update";
	}

	public FileInfo execute(String fileID, FileInfo fileInfo, InputStream content,
			InputStream comment, InputStream revision, String updateCount, String variantUpdateCount)
			throws IOException, DocumentException {
		if (content == null) {
			throw new RuntimeException("Content does not allow nulls.");
		}

		List<Part> parts = new ArrayList<Part>();
		parts.add(DaisyUtils.createUploadPart(getConfig(), FilePartType.content, content));
		if (comment != null) {
			parts.add(DaisyUtils.createUploadPart(getConfig(), FilePartType.comment, comment));
		}
		if (revision != null) {
			parts.add(DaisyUtils.createUploadPart(getConfig(), FilePartType.revision, revision));
		}

		ByteArrayPartSource infoSource = new ByteArrayPartSource("info", fileInfo.toDocument().asXML().getBytes(
				DaisyConstants.DEFAULT_CHARSET));
		FilePart infoPart = new FilePart("xml", infoSource, "application/xml", DaisyConstants.DEFAULT_CHARSET);
		parts.add(infoPart);

		String url = getURL(fileID);
		Part[] partArray = {};
		Document result = DaisyUtils.executePostMethodReturnDocument(url, parts.toArray(partArray));
		return FileInfo.parseDocument(result);
	}

	public FileInfo execute(String fileID, FileType fileType, String fileName, InputStream content,
			InputStream comment, InputStream revision, String updateCount, String variantUpdateCount)
			throws IOException, DocumentException {
		List<FilePartType> partTypes = new ArrayList<FilePartType>();
		partTypes.add(FilePartType.content);
		if (comment != null) {
			partTypes.add(FilePartType.comment);
		}
		if (revision != null) {
			partTypes.add(FilePartType.revision);
		}

		FileInfo fileInfo = createFileInfo(getConfig(), fileType, fileName, partTypes, updateCount, variantUpdateCount);
		return execute(fileID, fileInfo, content, comment, revision, updateCount, variantUpdateCount);
	}

	private FileInfo createFileInfo(DaisyConfig config, FileType fileType, String fileName,
			List<FilePartType> partTypes, String updateCount, String variantUpdateCount) throws IOException,
			DocumentException {
		String mimeType = MimeType.getFileMime(fileName);

		FileInfo fileInfo = new FileInfo();
		fileInfo.setName(fileName);
		fileInfo.setTypeId(fileType.getID(config));
		fileInfo.setUpdateCount(updateCount);
		fileInfo.setVariantUpdateCount(variantUpdateCount);

		for (FilePartType partType : partTypes) {
			fileInfo.appendPart(partType.getID(config), mimeType);
		}

		return fileInfo;
	}
}
