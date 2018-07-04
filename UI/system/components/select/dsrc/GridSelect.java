import java.util.Map;

import org.dom4j.Element;

import com.justep.xbl.JavaTemplate;
import com.justep.xbl.runtime.XBLException;

public class GridSelect implements JavaTemplate {
	private Select select;
	
	public Element execute(Element bound, Map context) throws XBLException {
		// TODO Auto-generated method stub
		
		if(null==select)
			select = new Select(bound, context, Select.GRIDSELECT);
		else{
			select.setDefE(bound);
			select.setContext(context);
			select.setKind(Select.GRIDSELECT);
		}
		return select.buildSelect();
	}

}
