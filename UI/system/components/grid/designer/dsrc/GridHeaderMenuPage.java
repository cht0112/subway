import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.eclipse.swt.widgets.Composite;

import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.editors.xui.AbstractDataSetPage;


public class GridHeaderMenuPage  extends AbstractDataSetPage{

	public GridHeaderMenuPage(Composite parent, int style) {
		super(parent, style);
	}

	@Override
	public DataSet getDataSet() {
		String[] items = this.propertyItem.getValue().split(",");
		Set<String> set = new HashSet<String>();
		for (String item : items) {
			set.add(item);
		}
		
		DataSet dataSet = new DataSet();
		dataSet.addColumn("selected","选择","bool").setLength(50).setShowText(false);
		dataSet.addColumn("itemName","菜单项").setVisible(false);
		dataSet.addColumn("disp","菜单项").setLength(200);
		dataSet.addRecord(new Object[]{set.contains("hide-column"),"hide-column","显示隐藏列"});
		dataSet.addRecord(new Object[]{set.contains("save-layout"),"save-layout","保存表格布局"});
		dataSet.addRecord(new Object[]{set.contains("group-column"),"group-column","分组"});
		dataSet.addRecord(new Object[]{set.contains("adjust-column"),"adjust-column","列自适应"});
		return dataSet;
	
	}

	@Override
	public Map<String, String> getReturnValue(DataSet dataSet) {
		Map<String,String> map = new HashMap<String, String>();
		List<DataRecord> list = this.getSelectedRecord();
		String value = "";
		for (int i = 0; i<list.size(); i++) {
			if(i!=0)value +=","; 
			value += list.get(i).getValue("itemName");
		}
		map.put(this.propertyItem.getName(), value);
		return map;
	}

	@Override
	public boolean isMultiSelect() {
		return true;   
	}




	
	
}
