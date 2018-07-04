package com.justep.appCommon.daisy;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.QName;

public class FileInfo {
	public class FilePart {
		private String typeId;
		private String size;
		private String mimeType;

		public String getTypeId() {
			return typeId;
		}

		public void setTypeId(String typeId) {
			this.typeId = typeId;
		}

		public String getSize() {
			return size;
		}

		public void setSize(String size) {
			this.size = size;
		}

		public String getMimeType() {
			return mimeType;
		}

		public void setMimeType(String mimeType) {
			this.mimeType = mimeType;
		}

	}

	private DaisyConfig config;
	
	private String id;
	private String name;
	private String typeId;
	private String owner = "3";
	private String validateOnSave = "true";
	private String newVersionState = "publish";
	private String isRetired = "false";
	private String isPrivate = "false";
	private String branchId = "1";
	private String languageId = "1";
	private String updateCount;
	private String variantUpdateCount;
	private String lastVersionId;

	private Map<String, String> customFieldsMap = new HashMap<String, String>();
	private Map<String, FilePart> partsMap = new HashMap<String, FilePart>();

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTypeId() {
		return typeId;
	}

	public void setTypeId(String fileTypeId) {
		this.typeId = fileTypeId;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getValidateOnSave() {
		return validateOnSave;
	}

	public void setValidateOnSave(String validateOnSave) {
		this.validateOnSave = validateOnSave;
	}

	public String getNewVersionState() {
		return newVersionState;
	}

	public void setNewVersionState(String newVersionState) {
		this.newVersionState = newVersionState;
	}

	public String getRetired() {
		return isRetired;
	}

	public void setRetired(String isRetired) {
		this.isRetired = isRetired;
	}

	public String getPrivate() {
		return isPrivate;
	}

	public void setPrivate(String isPrivate) {
		this.isPrivate = isPrivate;
	}

	public String getBranchId() {
		return branchId;
	}

	public void setBranchId(String branchId) {
		this.branchId = branchId;
	}

	public String getLanguageId() {
		return languageId;
	}

	public void setLanguageId(String languageId) {
		this.languageId = languageId;
	}

	public String getUpdateCount() {
		return updateCount;
	}

	public void setUpdateCount(String updateCount) {
		this.updateCount = updateCount;
	}

	public String getVariantUpdateCount() {
		return variantUpdateCount;
	}

	public void setVariantUpdateCount(String variantUpdateCount) {
		this.variantUpdateCount = variantUpdateCount;
	}

	public String getLastVersionId() {
		return lastVersionId;
	}

	public void setLastVersionId(String lastVersionId) {
		this.lastVersionId = lastVersionId;
	}

	public Map<String, String> getCustomFields() {
		return customFieldsMap;
	}

	public Map<String, FilePart> getParts() {
		return partsMap;
	}
	
	public FilePart appendPart(String partTypeId, String mimeType) {
		FilePart part = new FilePart();
		part.setTypeId(partTypeId);
		part.setMimeType(mimeType);
		partsMap.put(partTypeId, part);
		return part;
	}
	
	public static FileInfo parseDocument(Document doc) {
		Namespace ns = DaisyUtils.getDaisyNamespace();
		
		FileInfo fileInfo = new FileInfo();
		Element rootE = doc.getRootElement();
		if (!"document".equals(rootE.getName())) {
			throw new RuntimeException("Error file info: " + doc.asXML());
		}
		fileInfo.setId(rootE.attributeValue("id"));
		fileInfo.setName(rootE.attributeValue("name"));
		fileInfo.setTypeId(rootE.attributeValue("typeId"));
		fileInfo.setOwner(rootE.attributeValue("owner"));
		fileInfo.setValidateOnSave(rootE.attributeValue("validateOnSave"));
		fileInfo.setNewVersionState(rootE.attributeValue("newVersionState"));
		fileInfo.setRetired(rootE.attributeValue("retired"));
		fileInfo.setPrivate(rootE.attributeValue("private"));
		fileInfo.setBranchId(rootE.attributeValue("branchId"));
		fileInfo.setLanguageId(rootE.attributeValue("languageId"));
		fileInfo.setLastVersionId(rootE.attributeValue("liveVersionId"));
		fileInfo.setUpdateCount(rootE.attributeValue("updateCount"));
		fileInfo.setVariantUpdateCount(rootE.attributeValue("variantUpdateCount"));
		
		Element partsE = rootE.element(new QName("parts", ns));
		@SuppressWarnings("unchecked")
		List<Element> parts = partsE.elements();
		for (Element partE : parts) {
			String partType = partE.attributeValue("typeId");
			String mimeType = partE.attributeValue("mimeType");
			FilePart part = fileInfo.appendPart(partType, mimeType);
			part.setSize(partE.attributeValue("size"));
		}
		
		Element customFieldsE = rootE.element(new QName("customFields", ns));
		@SuppressWarnings("unchecked")
		List<Element> customFields = customFieldsE.elements();
		for (Element customFieldE : customFields) {
			String fieldName = customFieldE.attributeValue("name");
			String fieldValue = customFieldE.attributeValue("value");
			fileInfo.getCustomFields().put(fieldName, fieldValue);
		}
		
		return fileInfo;
	}
	
	public Document toDocument() throws IOException, DocumentException {
		Namespace ns = DaisyUtils.getDaisyNamespace();

		Document doc = DocumentHelper.createDocument();

		Element rootE = doc.addElement(new QName("document", ns));
		rootE.addAttribute("id", getId());
		rootE.addAttribute("name", getName());
		rootE.addAttribute("typeId", getTypeId());
		rootE.addAttribute("owner", getOwner());
		rootE.addAttribute("validateOnSave", getValidateOnSave());
		rootE.addAttribute("newVersionState", getNewVersionState());
		rootE.addAttribute("retired", getRetired());
		rootE.addAttribute("private", getPrivate());
		rootE.addAttribute("branchId", getBranchId());
		rootE.addAttribute("languageId", getLanguageId());
		rootE.addAttribute("updateCount", getUpdateCount());
		rootE.addAttribute("variantUpdateCount", getVariantUpdateCount());

		Element partsE = rootE.addElement(new QName("parts", ns));
		for (FilePart part : getParts().values()) {
			Element partE = partsE.addElement(new QName("part", ns));
			partE.addAttribute("mimeType", part.getMimeType());
			partE.addAttribute("typeId", part.getTypeId());
			partE.addAttribute("dataRef", DaisyUtils.getFilePartName(config, part.getTypeId()));
		}

		Element customFieldsE = rootE.addElement(new QName("customFields", ns));
		for (Entry<String, String> customField : getCustomFields().entrySet()) {
			Element customFieldE = customFieldsE.addElement(new QName("customField", ns));
			customFieldE.addAttribute("name", customField.getKey());
			customFieldE.addAttribute("value", customField.getValue());
		}

		rootE.addElement(new QName("collectionIds", ns));
		rootE.addElement(new QName("fields", ns));
		rootE.addElement(new QName("links", ns));

		return doc;
	}
}
