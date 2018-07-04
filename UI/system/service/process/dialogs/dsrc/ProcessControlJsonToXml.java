import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.nio.charset.Charset;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.json.JSONObject;

public class ProcessControlJsonToXml extends com.justep.ui.impl.JProcessorImpl {

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			String jsonString = getRequestString(request);
			JSONObject json = new JSONObject(jsonString);
			Document dom = ProcessControlConvertor.jsonToXml(json);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("text/plain");
			response.getWriter().write(dom.getRootElement().asXML());
		} catch (Exception e) {
			throw new ServletException("Convert ProcessControl json to xml fail!", e);
		}
	}

	private String getRequestString(HttpServletRequest request) throws IOException {
		StringBuffer sb = new StringBuffer();
		InputStream in = request.getInputStream();
		
		char[] buffer = new char[1024];
		Reader reader = new InputStreamReader(in, Charset.forName("UTF-8"));
		int iRead;
		while ((iRead = reader.read(buffer)) != -1) {
			sb.append(buffer, 0, iRead);
		}
		return sb.toString();
	}
}
