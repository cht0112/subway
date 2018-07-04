import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.justep.filesystem.FileSystemWrapper;
import com.justep.ui.system.UISystemMessages;
import com.justep.ui.util.UIUtils;
import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class Menu implements JavaTemplate {
	static Logger logger = Logger.getLogger(Menu.class);

	public Element execute(Element bound, Map context) throws XBLException {
		try {
			Document dataDoc = DocumentHelper.createDocument();
			dataDoc.setRootElement((Element) bound.clone());
			SAXReader reader = new SAXReader();
			String fileName = FileSystemWrapper.instance().getRealPath("/UI/system/components/menu/dsrc/init.xsl");
			Document initXsltDoc;
			initXsltDoc = reader.read(new File(fileName));
			HashMap<String, Object> params = new HashMap<String, Object>();
			Document initResult = UIUtils.xslt(initXsltDoc, dataDoc, params);
			fileName = FileSystemWrapper.instance().getRealPath("/UI/system/components/menu/dsrc/menu.xsl");
			Document menuXsltDoc;
			menuXsltDoc = reader.read(new File(fileName));
			Document result = UIUtils.xslt(menuXsltDoc, initResult, params);
			return result.getRootElement();
		} catch (DocumentException e) {
			throw XBLException.create(e, UISystemMessages.XBL_MENU_CREATE_ERROR);
		}
	}

}
