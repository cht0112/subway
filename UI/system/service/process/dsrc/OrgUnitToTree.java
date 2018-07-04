
import java.util.List;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.QName;

/**
 * 
 * @author hcr
 *
 */
public class OrgUnitToTree  {
	public static final String ORG_UNIT_TAG = "org-unit";
	public static final String FID_TAG = "fid";
	public static final String FNAME_TAG = "fname";
	//public static final String RESPONSIBLE_TAG = "responsible";
	public static final String OGN = "ogn";
	public static final String DEPT = "dpt";
	public static final String POS = "pos";
	public static final String PERSON = "psm";
	public static final String GROUP = "grp";
	
	public static final String OGN_POSTFIX = "." + OGN;
	public static final String DEPT_POSTFIX = "." + DEPT;
	public static final String POS_POSTFIX = "." + POS;
	public static final String PERSON_POSTFIX = "." + PERSON;
	public static final String GROUP_POSTFIX = "." + GROUP;
	public static final String ORG_PATH_SEPRATOR = "/";
	
	public static Element execute(Element e){
		if (e == null){
			return e;
		}
		
		Element root = DocumentHelper.createElement("items");
		
		List<?> items = (List<?>)e.selectNodes("./" + ORG_UNIT_TAG);
		for (Object item : items){
			String fid = ((Element)item).element(new QName(FID_TAG)).getTextTrim();
			String fName = ((Element)item).element(new QName(FNAME_TAG)).getTextTrim();
			addOrgNode(root, fid, fName);
		}		
		
		return root;
	}

	private static void addOrgNode(Element root, String fid, String fName){
		String[] fidItems = fid.split(ORG_PATH_SEPRATOR);
		String[] fNameItems = fName.split(ORG_PATH_SEPRATOR);
		
		Element parentElement = null;
		for (int i=0; i<fidItems.length; i++){
			if (fidItems[i].trim().equals("")){
				continue;
			}
			
			String curIDItem = fidItems[i];
			String curKind = curIDItem.substring(curIDItem.lastIndexOf(".") + 1);
			String curName = fNameItems[i];
			
			
			String curFid = "";
			String curFName = "";
			if(parentElement != null){
				curFid = parentElement.elementTextTrim(new QName(FID_TAG)) + "/" + curIDItem;
				curFName = parentElement.elementTextTrim(new QName(FNAME_TAG)) + "/" + curName;
			}else{
				curFid = "/" + curIDItem;
				curFName = "/" +  curName;
				parentElement = root;
			}
			
			Element curElement = (Element)root.selectSingleNode(".//" + ORG_UNIT_TAG + "[(" + FID_TAG + "='" + curFid + "')]");
			if(curElement != null){
				parentElement = curElement;

			}else{

				
				curElement = parentElement.addElement(new QName(ORG_UNIT_TAG));
				curElement.addElement(new QName(FID_TAG)).addText(curFid);
				curElement.addElement(new QName(FNAME_TAG)).addText(curFName);
				curElement.addElement(new QName("id")).addText(getID(curFid));
				curElement.addElement(new QName("name")).addText(curName);
				curElement.addElement(new QName("kind")).addText(curKind);
				curElement.addElement(new QName("loaded")).addText("true");
				curElement.addElement(new QName("selectable")).addText("false");
				
				
				parentElement = curElement;
			}
			
			
			if(i == (fidItems.length-1)){
				if(!curKind.equals("psm")){
					curElement.element(new QName("loaded")).setText("false");
				}
				
				curElement.element(new QName("selectable")).setText("true");
			}
		}
	}
	
	public static String getName(String fname){
		if (fname!=null && fname.contains(ORG_PATH_SEPRATOR))
			return fname.substring(fname.lastIndexOf(ORG_PATH_SEPRATOR) + 1);
		else{
			return fname;
		}
	}
	
	public static String getKind(String fid){
		if (fid != null && fid.contains(".")){
			return fid.substring(fid.lastIndexOf(".") + 1);
		}else{
			return null;
		}
	}
	
	public static String getID(String fid) {
		if (fid!=null && !"".equals(fid)) {
			String item = null;
			if (fid.contains(ORG_PATH_SEPRATOR)) {
				item = fid.substring(fid.lastIndexOf(ORG_PATH_SEPRATOR) + 1);
			} else {
				item = fid;
			}

			if (item.endsWith(PERSON_POSTFIX)) {
				if (item.contains("@")) {
					return item.substring(0, item.indexOf("@"));

				} else {
					String msg = fid + "不是合法的FID, .psm的FID要求的格式是: person sid + @ + guid!";
					throw new UnsupportedOperationException(msg);
				}

			} else if (item.endsWith(POS_POSTFIX)) {
				return item.substring(0, item.length() - POS_POSTFIX.length());

			} else if (item.endsWith(DEPT_POSTFIX)) {
				return item.substring(0, item.length() - DEPT_POSTFIX.length());

			} else if (item.endsWith(OGN_POSTFIX)) {
				return item.substring(0, item.length() - OGN_POSTFIX.length());

			} else if (item.endsWith(GROUP_POSTFIX)) {
				return item.substring(0, item.length() - GROUP_POSTFIX.length());

			} else {
				return fid;
			}
		} else {
			return fid;
		}
	}
	
}
