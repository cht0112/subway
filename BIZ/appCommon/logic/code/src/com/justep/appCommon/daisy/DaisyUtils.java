package com.justep.appCommon.daisy;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.multipart.FilePart;
import org.apache.commons.httpclient.methods.multipart.MultipartRequestEntity;
import org.apache.commons.httpclient.methods.multipart.Part;
import org.apache.commons.httpclient.protocol.Protocol;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

class DaisyUtils {
	private static void regHttps() {
		Protocol oldHttps = Protocol.getProtocol("https");
		if (!SslSecureProtocolSocketFactory.class.equals(oldHttps.getSocketFactory().getClass())) {
			@SuppressWarnings("deprecation")
			Protocol myHttps = new Protocol("https", new SslSecureProtocolSocketFactory(), 443);
			Protocol.registerProtocol("https", myHttps);
		}
	}

	public static InputStream executeMethod(HttpMethod method) throws IOException, DocumentException {
		if ("https".equals(method.getURI().getScheme().toLowerCase())) {
			regHttps();
		}
		HttpClient httpClient = new HttpClient();
		int status = httpClient.executeMethod(method);
		if (status != HttpStatus.SC_OK) {
			if (status == 202) {
				InputStream is = method.getResponseBodyAsStream();
				SAXReader reader = new SAXReader();
				Document responseDoc = reader.read(is);
				method.releaseConnection();
				Element rootElement = responseDoc.getRootElement();
				Element exceptionElement = (Element) rootElement
						.selectSingleNode("//*[local-name()= 'cause']/*[local-name()= 'exception']");
				throw new RuntimeException("Failed to send request to DocServer: "
						+ exceptionElement.attributeValue("message"));
			}
			throw new RuntimeException("Failed to send request to DocServer: " + method.getStatusLine());
		} else {
			return method.getResponseBodyAsStream();
		}
	}

	protected static Document streamToDocument(InputStream stream) throws DocumentException {
		SAXReader reader = new SAXReader();
		Document responseDoc = reader.read(stream);
		return responseDoc;
	}

	private static void checkResultDocument(Document result) {
		Node flag = result.selectSingleNode("/root/flag");
		if (flag != null && "false".equals(flag.getStringValue().toLowerCase())) {
			Node message = result.selectSingleNode("/root/message");
			throw new RuntimeException(message.getStringValue());
		}
	}

	public static Document executeGetMethodReturnDocument(String url) throws DocumentException, IOException {
		GetMethod getMethod = new GetMethod(url);
		try {
			InputStream result = executeMethod(getMethod);
			Document doc = streamToDocument(result);
			checkResultDocument(doc);
			return doc;
		} finally {
			getMethod.releaseConnection();
		}
	}

	public static long executeGetMethodToStream(String url, OutputStream stream) throws DocumentException, IOException {
		GetMethod getMethod = new GetMethod(url);
		try {
			InputStream result = executeMethod(getMethod);
			return copyStream(result, stream);
		} finally {
			getMethod.releaseConnection();
		}
	}

	public static Document executePostMethodReturnDocument(String url) throws DocumentException, IOException {
		Part[] parts = {};
		return executePostMethodReturnDocument(url, parts);
	}

	public static Document executePostMethodReturnDocument(String url, Part[] parts) throws DocumentException, IOException {
		PostMethod postMethod = new PostMethod(url);
		MultipartRequestEntity e = new MultipartRequestEntity(parts, postMethod.getParams());
		postMethod.setRequestEntity(e);
		try {
			InputStream result = executeMethod(postMethod);
			Document doc = streamToDocument(result);
			checkResultDocument(doc);
			return doc;
		} finally {
			postMethod.releaseConnection();
		}
	}

	public static String getIDByResult(Document result) throws DocumentException {
		Element root = result.getRootElement();
		return root.attributeValue("id");
	}

	protected static long copyStream(InputStream input, OutputStream output) throws IOException {
		return copyStream(input, output, DaisyConstants.STREAM_BUFFER_SIZE);
	}

	private static long copyStream(InputStream input, OutputStream output, int bufferSize) throws IOException {
		byte[] buffer = new byte[bufferSize];
		int readCount = 0;
		long allCount = 0;
		while (true) {
			readCount = input.read(buffer);
			if (readCount > 0) {
				output.write(buffer, 0, readCount);
				output.flush();
				allCount += readCount;
			} else
				break;
		}
		return allCount;
	}

	public static Namespace getDaisyNamespace() {
		return new Namespace("ns", "http://outerx.org/daisy/1.0");
	}

	public static String getFilePartName(DaisyConfig config, String partTypeID) throws IOException, DocumentException {
		return "data" + partTypeID;
	}

	public static Part createUploadPart(DaisyConfig config, FilePartType partType, InputStream stream)
			throws IOException, DocumentException {
		String partName = getFilePartName(config, partType.getID(config));
		InputStreamPartSource source = new InputStreamPartSource(partName, stream);
		FilePart part = new FilePart(partName, source);
		return part;
	}

}
