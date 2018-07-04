import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.ide.IDE;

import com.justep.studio.ui.editors.PlmInfoModelEditor;
import com.justep.studio.ui.editors.xui.BaseComponent;
import com.justep.studio.ui.editors.xui.NS;
import com.justep.studio.ui.editors.xui.XuiElement;

/**
 * 
 * @author xiangyaohua
 * @version 2010-06-03  
 *
 */
public class WindowDialog extends BaseComponent{
	
	public Map<String, String>  skipPage(XuiElement ele){
		Map<String,String> map = new HashMap<String, String>();
		String url = ele.getProperyValue("url");
		if("".equals(url)){
			MessageDialog.openInformation(this.getDesigner().getShell(), "提示", "url不能为空");
			return null;
		}else if(url.startsWith("http://")||url.startsWith("https://")){
			MessageDialog.openInformation(this.getDesigner().getShell(), "提示", "不能打开外部页面");
			return null;
		}
		IWorkbenchPage page = PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage();
		IProject proj = ResourcesPlugin.getPlugin().getWorkspace().getRoot().getProject("UI");
		
		if(url.startsWith("/UI")){
			url = url.substring(3);
		}
		IFile file = proj.getFile(url);
		if(!file.exists()){
			MessageDialog.openInformation(this.getDesigner().getShell(), "提示", "文件不存在:"+url);
			return null;
		}
		try {
			IDE.openEditor(page, file, true);
		} catch (PartInitException e) {
			e.printStackTrace();
		}

		return null;
	}
}
