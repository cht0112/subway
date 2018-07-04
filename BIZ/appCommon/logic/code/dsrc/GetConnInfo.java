import org.dom4j.Document;
import org.dom4j.DocumentException;

import org.dom4j.Node;

import org.dom4j.io.SAXReader;

import com.justep.model.Config;
import com.justep.model.ModelUtils;
import com.justep.olap.common.WEBConstants;

public class GetConnInfo {
	public GetConnInfo() {

	}

	//得到数据库用户名 如果DBType为空，则取系统库的

	public static String getDBUser(String DBType) {
		String userName = "";
		//Connection Conn = null;
		String webAbsPath = WEBConstants.getWebRootAbsPath();
		String configPath = webAbsPath.substring(0, webAbsPath.indexOf("apache-tomcat")) + "apache-tomcat\\conf\\server.xml";
		//System.out.println(configPath);
		SAXReader xmlReader = new SAXReader();
		String dsStr = ModelUtils.getModel("/system/data").getUseableConfig("dataSource").getValue();//"/system/data"为db.config.m的路径
		if ("".equals(DBType) || DBType == null) {
			if (dsStr.contains(";")) {
				String[] pro=dsStr.split(";");
				return pro[2];
			} else {
				DBType = dsStr.substring(dsStr.lastIndexOf("/") + 1, 20);
			}
			//System.out.println(DBType);
		}
		Document doc;
		try {
			doc = xmlReader.read(configPath);

			Node nd = doc.getRootElement().selectSingleNode("//Resource[@name='" + DBType + "']/@username");//Server/Service[1]/Engine[1]/Host[1]/Context[1]

			//System.out.println(nd.asXML()+"---"+nd.getStringValue());
			userName = nd.getStringValue();
		} catch (DocumentException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		/*	try {
				if ("app".equals(DBType)) {
					Conn = ActionUtils.getRequestContext().getTransaction().getConnection(ModelUtils.getModel(("/OA/car/data")));
				}
				if ("sys".equals(DBType)) {
					Conn = ActionUtils.getRequestContext().getTransaction().getConnection(ModelUtils.getModel(("/system/data")));
				}
				if (Conn != null) {
					userName = Conn.getMetaData().getUserName();
				}
				//System.out.println("userName：" + userName);
			} catch (NamingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} finally {
				if (Conn != null) {
					try {
						Conn.close();
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}*/
		return userName;
	}
}
