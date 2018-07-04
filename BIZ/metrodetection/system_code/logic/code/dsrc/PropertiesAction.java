import java.io.*;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;

public class PropertiesAction {
	public static Map<String, String> propertiesMap =new HashMap<String, String>();

	public static String PropertiesA(String name){
		
		// 读取配置文件
		String tarPath = "";
		try {
			String st = PropertiesAction.class.getResource("").toString();
			st = st.split("BIZ")[0];
			st = st.substring(6, st.length());
			st = File.separator+st + File.separator+"BIZ"+File.separator+"metrodetection"+File.separator+"config"+File.separator+"sys-conf.properties";
			Properties prop = new Properties();
			InputStream in = new BufferedInputStream (new FileInputStream(st));
			prop.load(in);
			Iterator<Object> iterator = prop.keySet().iterator();
			while(iterator.hasNext()){				
				String pName =(String)iterator.next();
				propertiesMap.put(pName, prop.getProperty(pName));
			}
			in.close();
			tarPath = prop.getProperty(name);
			return tarPath;
//			System.out.println("路径"+prop.getProperty("importValueFileNameUrl"));

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			return tarPath;
		}
	}

}