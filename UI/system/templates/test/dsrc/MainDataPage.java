/**
 * data 配置页
 * @author xiangyaohua
 * @date 2010-8-24
 */


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.TableColumn;
import org.eclipse.swt.widgets.Text;

import swing2swt.layout.BorderLayout;

import com.justep.studio.ui.editors.xui.XuiElement;
import com.justep.studio.ui.template.config.model.TemplateItem;
import com.justep.studio.ui.template.config.view.AbstractPropertyDlg;
import com.justep.studio.ui.template.config.view.AbstractTemplateConfigPage;


public class MainDataPage extends AbstractTemplateConfigPage{
	private Text relationsText;
	private Text conceptText;
	private Text creatorText;
	private Text writerText;
	private Text readerText;
	private TableViewer tableViewer;
	private Table table;
	private Button readerButton;
	protected XuiElement dataElement;
	protected Composite composite;
	
	public MainDataPage(Composite parent,TemplateItem templateItem) {
		super(parent,templateItem);
		this.dataElement =  xuiDataModel.findElementById(this.getParam("data-id"));
		setLayout(new BorderLayout(0, 0));

		composite = new Composite(this, SWT.NONE);
		composite.setLayoutData(BorderLayout.NORTH);
		final GridLayout gridLayout = new GridLayout();
		gridLayout.numColumns = 3;
		composite.setLayout(gridLayout);

		final Label readerLabel = new Label(composite, SWT.NONE);
		readerLabel.setText("reader(*):");

		readerText = new Text(composite, SWT.BORDER);
		readerText.setEditable(false);
		readerText.addModifyListener(new ModifyListener() {
			public void modifyText(final ModifyEvent e) {
			
			}
		});
		final GridData gd_readerText = new GridData(SWT.FILL, SWT.CENTER, false, false);
		gd_readerText.widthHint = 355;
		readerText.setLayoutData(gd_readerText);

		readerButton = new Button(composite, SWT.NONE);
		final GridData gd_readerButton = new GridData(SWT.LEFT, SWT.FILL, true, false);
		gd_readerButton.widthHint = 30;
		readerButton.setLayoutData(gd_readerButton);
		readerButton.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				AbstractPropertyDlg dlg = new AbstractPropertyDlg(MainDataPage.this.getShell()){
					public void doApply(Map<String, String> map) {
						readerText.setText(map.get("reader"));
						conceptText.setText("");
						relationsText.setText("");
					
						dataElement.setPropertyValue("concept", "");
						dataElement.setPropertyValue("relations", "");

					}};
				dlg.setPropertyItem(dataElement.getPropertyItem("reader"));
				dlg.open();
			}
		});
		readerButton.setText("...");

		final Label writerLabel = new Label(composite, SWT.NONE);
		final GridData gd_writerLabel = new GridData();
		writerLabel.setLayoutData(gd_writerLabel);
		writerLabel.setText("writer:");

		writerText = new Text(composite, SWT.BORDER);
		writerText.setEditable(false);
		final GridData gd_writerText = new GridData(SWT.FILL, SWT.CENTER, true, false);
		writerText.setLayoutData(gd_writerText);

		final Button writerButton = new Button(composite, SWT.NONE);
		writerButton.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				AbstractPropertyDlg dlg = new AbstractPropertyDlg(MainDataPage.this.getShell()){
					public void doApply(Map<String, String> map) {
						writerText.setText(map.get("writer"));
					}};
				dlg.setPropertyItem(dataElement.getPropertyItem("writer"));
				dlg.open();
			}
		});
		final GridData gd_writerButton = new GridData(SWT.LEFT, SWT.FILL, true, false);
		gd_writerButton.widthHint = 30;
		writerButton.setLayoutData(gd_writerButton);
		writerButton.setText("...");

		final Label creatorLabel = new Label(composite, SWT.NONE);
		creatorLabel.setText("creator:");

		creatorText = new Text(composite, SWT.BORDER);
		creatorText.setEditable(false);
		final GridData gd_creatorText = new GridData(SWT.FILL, SWT.CENTER, true, false);
		creatorText.setLayoutData(gd_creatorText);

		final Button button_1 = new Button(composite, SWT.NONE);
		button_1.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				AbstractPropertyDlg dlg = new AbstractPropertyDlg(MainDataPage.this.getShell()){
					public void doApply(Map<String, String> map) {
						creatorText.setText(map.get("creator"));
					}};
				dlg.setPropertyItem(dataElement.getPropertyItem("creator"));
				dlg.open();
			}
		});
		final GridData gd_button_1 = new GridData(SWT.LEFT, SWT.FILL, true, false);
		gd_button_1.widthHint = 30;
		button_1.setLayoutData(gd_button_1);
		button_1.setText("...");

		final Label conceptLabel = new Label(composite, SWT.NONE);
		conceptLabel.setText("concept(*):");

		conceptText = new Text(composite, SWT.BORDER);
		conceptText.setEditable(false);
		final GridData gd_conceptText = new GridData(SWT.FILL, SWT.CENTER, true, false);
		conceptText.setLayoutData(gd_conceptText);

		final Button conceptButton = new Button(composite, SWT.NONE);
		conceptButton.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				if(readerText.getText().equals("")){
					showWarring("请先选择reader");
					return;
				}
				
				AbstractPropertyDlg dlg = new AbstractPropertyDlg(MainDataPage.this.getShell()){
					public void doApply(Map<String, String> map) {
						conceptText.setText(map.get("concept"));
					}};
				dlg.setPropertyItem(dataElement.getPropertyItem("concept"));
				dlg.open();
			}
		});
		final GridData gd_conceptButton = new GridData(SWT.LEFT, SWT.FILL, true, false);
		gd_conceptButton.widthHint = 30;
		conceptButton.setLayoutData(gd_conceptButton);
		conceptButton.setText("...");

		final Label relationsLabel = new Label(composite, SWT.NONE);
		relationsLabel.setText("relations:");

		relationsText = new Text(composite, SWT.BORDER);
		relationsText.setEditable(false);
		final GridData gd_relationsText = new GridData(SWT.FILL, SWT.CENTER, true, false);
		relationsText.setLayoutData(gd_relationsText);

		final Button selectRelationsButton = new Button(composite, SWT.NONE);
		final GridData gd_selectRelationsButton = new GridData(SWT.LEFT, SWT.FILL, true, false);
		gd_selectRelationsButton.widthHint = 30;
		selectRelationsButton.setLayoutData(gd_selectRelationsButton);
		selectRelationsButton.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				if(readerText.getText().equals("")){
					showWarring("请先选择reader");
					return;
				}
				AbstractPropertyDlg dlg = new AbstractPropertyDlg(MainDataPage.this.getShell()){
					public void doApply(Map<String, String> map) {
						relationsText.setText(map.get("relations"));
						
					}};
				dlg.setPropertyItem(dataElement.getPropertyItem("relations"));
				dlg.open();
			}
		});
		selectRelationsButton.setText("...");
		
	}
	
	


	@Override
	public String isValidation() {
		String concept = this.dataElement.getProperyValue("concept");
		if(concept.equals("")){
			return "请配置reader和concept";
		}else{
			return null;
		}
	}

}
