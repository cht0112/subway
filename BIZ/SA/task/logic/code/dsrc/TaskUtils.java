import java.io.ByteArrayInputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.justep.message.SystemMessages;
import com.justep.system.context.ContextHelper;
import com.justep.system.opm.PersonMember;
import com.justep.system.util.BizSystemException;
import com.justep.util.Utils;


public class TaskUtils {
	
	public static String getCreatorCondition(String alias, Collection<PersonMember> pms, boolean useAgentProcess){
		String result = "";
		List<String> items = new ArrayList<String>();
		for (PersonMember pm : pms){
			String item = alias + ".sCreatorFID = '" + pm.getFID() + "' ";
			if (useAgentProcess){
				String agentProcess = pm.getAgentProcess();
				if (Utils.isNotEmptyString(agentProcess)){
					String agentProcessCondition = getAgentProcessCondition(alias, agentProcess);
					item = appendCondition(item, "and", agentProcessCondition);
				}
			}
			
			items.add(item);
		}
		
		if (items.isEmpty()){
			result = "1<>1";
		}else{
			for (String item : items){
				if (result.equals("")){
					result = item;
				}else{
					result = result + " or " + item;
				}
			}
			
			result = "(" + result + ")";
		}
		
		return result;
	}
	
	public static String getExecutorCondition(String alias, Collection<PersonMember> pms, boolean useAgentProcess){
		String result = "";
		List<String> items = new ArrayList<String>();
		for (PersonMember pm : pms){
			String item = "'" + pm.getFID() + "' like concat(" + alias + ".sExecutorFID, '%')";
			if (useAgentProcess){
				String agentProcess = pm.getAgentProcess();
				if (Utils.isNotEmptyString(agentProcess)){
					String agentProcessCondition = getAgentProcessCondition(alias, agentProcess);
					item = appendCondition(item, "and", agentProcessCondition);
				}
			}
			
			items.add(item);
		}
		
		if (items.isEmpty()){
			result = "1<>1";
		}else{
			for (String item : items){
				if (result.equals("")){
					result = item;
				}else{
					result = result + " or " + item;
				}
			}
			
			result = appendCondition(result, "and", alias + ".sExecutorFID like '/%'");
		}
		
		return result;
	}
	
	private static String getAgentProcessCondition(String alias, String agentProcess){
		try {
			String result = "";
			List<String> items = new ArrayList<String>();
			SAXReader reader = new SAXReader();
			Document doc = reader.read(new ByteArrayInputStream(agentProcess.getBytes("UTF-8")));
			if (doc.getRootElement() != null){
				for (Object item : doc.getRootElement().elements()){
					String type = ((Element)item).getName();
					String value = ((Element)item).getTextTrim();
					if (type.equals("m")){
						items.add(alias + ".sProcess like '" + value + "%'");
						
					}else if (type.equals("r")){
						for (String processActivity : ContextHelper.getOperator().getPermissionByRoleID(value)){
							String process = processActivity.substring(0, processActivity.indexOf(",")).trim();
							String activity = processActivity.substring(processActivity.indexOf(",") + 1).trim();
							items.add(alias + ".sProcess = '" + process + "' and " + alias + ".sActivity = '" + activity + "'");
						}
						
					}else if (type.equals("p")){
						items.add(alias + ".sProcess = '" + value + "'");

					}else if (type.equals("a")){
						String activity = value.substring(value.lastIndexOf("/") + 1).trim();
						String process = getProcess(value.substring(0, value.lastIndexOf("/")));
						if ("*".equals(activity)){
							items.add(alias + ".sProcess = '" + process + "'");
							
						}else{
							items.add(alias + ".sProcess = '" + process + "' and " + alias + ".sActivity = '" + activity + "'");
						}

					}else{
						throw BizSystemException.create(SystemMessages.TYPE_OF_AGENT1, type);
					}
				}
			}
			
			if (items.isEmpty()){
				result = "1=1";
			}else{
				for (String item : items){
					if (result.equals("")){
						result = item;
					}else{
						result = result + " or " + item;
					}
				}
			}
			
			return result;
		} catch (UnsupportedEncodingException e) {
			throw BizSystemException.create(e, SystemMessages.SET_AGENT_ERROR1, agentProcess);
		} catch (DocumentException e) {
			throw BizSystemException.create(e, SystemMessages.SET_AGENT_ERROR1, agentProcess);
		}
	}
	
	private static String getProcess(String path){
		String name = path.substring(path.lastIndexOf("/") + 1);
		name = Character.toLowerCase(name.charAt(0)) + name.substring(1) + "Process";
		return path + "/" + name;
	}
	
	public static String appendCondition(String base, String operator, String condition){
		if (Utils.isEmptyString(base)){
			return condition;
		}else{
			if (Utils.isEmptyString(condition)){
				return base;
			}else{
				return "((" + base + ") " + operator + " (" + condition + "))";	
			}
		}
	}
	
}
