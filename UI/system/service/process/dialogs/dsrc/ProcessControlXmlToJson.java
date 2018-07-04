import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.io.SAXReader;
import org.json.JSONObject;

public class ProcessControlXmlToJson extends com.justep.ui.impl.JProcessorImpl {

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			SAXReader reader = new SAXReader();
			reader.setEncoding("UTF-8");
			Document dom = reader.read(request.getInputStream());
			JSONObject json = ProcessControlConvertor.xmlToJson(dom);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("text/plain");
			response.getWriter().write(json.toString());
		} catch (Exception e) {
			throw new ServletException("Convert ProcessControl xml to json fail!", e);
		}
	}

}
