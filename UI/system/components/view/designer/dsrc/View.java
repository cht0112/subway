import java.io.File;

import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.widgets.Item;

import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.editors.util.LayoutUtils;
import com.justep.studio.ui.editors.util.XuiConstant;
import com.justep.studio.util.ExtSpaceUIUtil;

public class View extends BaseComponent{
	
	public void gotoExcelLayout(XuiElement currentElement) { 
		 XuiElement layoutE = currentElement.getChildByTagName("layout");
		 if(layoutE == null || !LayoutUtils.isCellLayout(currentElement)){
			 MessageDialog.openInformation(this.getDesigner().getShell(), "提示", "当前布局不是excel布局");
			 return;
		 }
		String src = layoutE.getOriginElement().getAttribute("src");
		if(src.equals("")){
			 MessageDialog.openInformation(this.getDesigner().getShell(), "提示", "请选择excel布局文件");
			 return;
		}
		String filePath = new File(this.getDesigner().getEditorPart().getDataModel().getFilePath()).getParent()+"/"+src;
		if(ExtSpaceUIUtil.isInExtSpace(filePath)){
			filePath = ExtSpaceUIUtil.getRealPath(filePath);
		}
		File source = new File(filePath);
		if(!source.exists()){
			 MessageDialog.openInformation(this.getDesigner().getShell(), "提示", "excel布局文件："+src+"不存在");
			 return;
		}
         this.getDesigner().getEditorPart().getEditorContainerPanel().showDesignePanel("excel",currentElement.getChildByTagName("layout"));
	}
	
	public void newComponentByRelation(XuiElement currentElement){
		
	}
	public void initContextItemEnabled(Item item) {
		String method = (String)item.getData("method");
		if("gotoExcelLayout".equals(method)){
			if(LayoutUtils.isCellLayout(this.getXuiElement())){
				 this.setItemEnabled(item,true);
			}else{
				 this.setItemEnabled(item,false);
			}
		}
	}
}
