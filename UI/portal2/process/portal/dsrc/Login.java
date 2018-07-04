import java.io.InputStreamReader;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.SimpleHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.params.HttpClientParams;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

//import com.justep.common.MessageUtils;
import com.justep.ui.JustepConfig;
import com.justep.ui.WModel;
//import com.justep.ui.system.UISystemMessages;

public class Login implements WModel{
	public void execute(Map<String, Object> vars, HttpServletRequest request, HttpServletResponse response){

		//获取版权信息
		String license = "";
		vars.put("license", license);
		HttpClient client = new HttpClient(new HttpClientParams(),new SimpleHttpConnectionManager(true) );
		GetMethod get = new GetMethod(JustepConfig.getBusinessServer() + "/license");
		try{
			int statusCode = client.executeMethod(get);
			if (statusCode == HttpStatus.SC_OK) {
				SAXReader reader = new SAXReader();
				Document resultDoc = reader.read(new InputStreamReader(get.getResponseBodyAsStream(), "UTF-8"));
				
				if (resultDoc != null) {
					Element root = resultDoc.getRootElement();
					String flag = root.elementText("flag");
					if("true".equalsIgnoreCase(flag)){
						Node nExpires = root.selectSingleNode("./data/license/day");
						String expires = (nExpires!=null) ? nExpires.getStringValue() : "";
						license = "{success: true, expires:\"" + expires + "\"}";
					}	
				}
			}
			vars.put("license", license);
		} catch (Exception e){
		}finally {
		   // 释放连接
		   get.releaseConnection();
		}
		
	}
}
