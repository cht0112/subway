package com.justep.appCommon.daisy;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import org.dom4j.DocumentException;

public class DaisyHelper {

	private DaisyConfig config;

	public DaisyHelper(String ipAddress, int ipPort, boolean isHttps) {
		this.config = new DaisyConfig(ipAddress, ipPort, isHttps);
	}

	public DaisyHelper(DaisyConfig config) {
		this.config = config;
	}

	public DaisyConfig getConfig() {
		return config;
	}

	public FileInfo upload(FileInfo fileInfo, InputStream content, InputStream comment, InputStream revision)
			throws IOException, DocumentException {
		FileUploadCaller caller = new FileUploadCaller(config);
		return caller.execute(fileInfo, content, comment, revision);
	}

	public FileInfo upload(FileType fileType, String fileName, InputStream content, InputStream comment,
			InputStream revision) throws IOException, DocumentException {
		FileUploadCaller caller = new FileUploadCaller(config);
		return caller.execute(fileType, fileName, content, comment, revision);
	}

	public FileInfo upload(FileType fileType, String fileName, InputStream content) throws IOException,
			DocumentException {
		return upload(fileType, fileName, content, null, null);
	}

	public FileInfo upload(FileType fileType, File file) throws IOException, DocumentException {
		FileInputStream stream = new FileInputStream(file);
		return upload(fileType, file.getName(), stream, null, null);
	}

	public long download(String fileID, String versionID, FilePartType partType, OutputStream output)
			throws DocumentException, IOException {
		FileDownloadCaller caller = new FileDownloadCaller(config);
		return caller.execute(fileID, versionID, partType, output);
	}

	public long download(String fileID, OutputStream output) throws DocumentException, IOException {
		return download(fileID, null, null, output);
	}

	public long download(String fileID, File file) throws DocumentException, IOException {
		FileOutputStream fs = new FileOutputStream(file);
		try {
			return download(fileID, null, null, fs);
		} finally {
			fs.close();
		}
	}

	public void delete(String fileID) throws DocumentException, IOException {
		FileDeleteCaller caller = new FileDeleteCaller(config);
		caller.execute(fileID);
	}

	public FileInfo fileInfo(String fileID) throws DocumentException, IOException {
		FileInfoCaller caller = new FileInfoCaller(config);
		return caller.execute(fileID);
	}

	public FileInfo update(String fileID, FileInfo fileInfo, InputStream content, InputStream comment,
			InputStream revision, String updateCount, String variantUpdateCount) throws IOException, DocumentException {
		FileUpdateCaller caller = new FileUpdateCaller(config);
		return caller.execute(fileID, fileInfo, content, comment, revision, updateCount, variantUpdateCount);
	}

	public FileInfo update(String fileID, FileType fileType, String fileName, InputStream content, InputStream comment,
			InputStream revision, String updateCount, String variantUpdateCount) throws IOException, DocumentException {
		FileUpdateCaller caller = new FileUpdateCaller(config);
		return caller.execute(fileID, fileType, fileName, content, comment, revision, updateCount, variantUpdateCount);
	}

	public FileInfo update(String fileID, FileType fileType, String fileName, InputStream content, InputStream comment,
			InputStream revision) throws IOException, DocumentException {
		FileInfo fileInfo = fileInfo(fileID);
		return update(fileID, fileType, fileName, content, comment, revision, fileInfo.getUpdateCount(),
				fileInfo.getVariantUpdateCount());
	}

	public FileInfo update(String fileID, FileType fileType, String fileName, InputStream content) throws IOException,
			DocumentException {
		return update(fileID, fileType, fileName, content, null, null);
	}

	public FileInfo update(String fileID, FileType fileType, File file) throws IOException, DocumentException {
		FileInputStream stream = new FileInputStream(file);
		return update(fileID, fileType, file.getName(), stream, null, null);
	}

	public List<FileInfo> replicate(String fileID, int count) throws DocumentException, IOException {
		List<FileInfo> result = new ArrayList<FileInfo>();
		FileInfo fileInfo = fileInfo(fileID);
		ByteArrayOutputStream contentOut = null, commentOut = null, revisionOut = null;
		ByteArrayInputStream contentIn = null, commentIn = null, revisionIn = null;
		try {
			contentOut = new ByteArrayOutputStream();
			download(fileID, "last", FilePartType.content, contentOut);
			contentIn = new ByteArrayInputStream(contentOut.toByteArray());

			String commentTypeID = FilePartType.comment.getID(config);
			if (fileInfo.getParts().containsKey(commentTypeID)) {
				commentOut = new ByteArrayOutputStream();
				download(fileID, "last", FilePartType.comment, commentOut);
				commentIn = new ByteArrayInputStream(commentOut.toByteArray());
			}

			String revisionTypeID = FilePartType.revision.getID(config);
			if (fileInfo.getParts().containsKey(revisionTypeID)) {
				revisionOut = new ByteArrayOutputStream();
				download(fileID, "last", FilePartType.revision, revisionOut);
				revisionIn = new ByteArrayInputStream(revisionOut.toByteArray());
			}
			FileUploadCaller uploadCaller = new FileUploadCaller(config);
			for (int i = 0; i < count; i++) {
				result.add(uploadCaller.execute(fileInfo, contentIn, commentIn, revisionIn));
				contentIn.reset();
				if (commentIn != null) {
					commentIn.reset();
				}
				if (revisionIn != null) {
					revisionIn.reset();
				}
			}
			return result;
		} finally {
			contentIn = null;
			commentIn = null;
			revisionIn = null;
			contentOut = null;
			commentOut = null;
			revisionOut = null;
		}
	}
}
