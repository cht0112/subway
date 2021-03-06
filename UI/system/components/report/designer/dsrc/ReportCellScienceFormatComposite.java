import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Spinner;

/**
 * 科学计数格式化配置页
 * @author xiangyaohua
 * 
 *
 */
public class ReportCellScienceFormatComposite extends Composite implements IReportCellFormatComposite{

	private Spinner decimalText;
	private String format;
	final Label simpleLabel;
	
	private int decimal;
	

	/**
	 * Create the composite
	 * @param parent
	 * @param style
	 */
	public ReportCellScienceFormatComposite(Composite parent, int style,String format) {
		super(parent, style);
		this.format =format;
		final GridLayout gridLayout = new GridLayout();
		gridLayout.numColumns = 2;
		setLayout(gridLayout);

		final Label label = new Label(this, SWT.NONE);
		label.setText("小数位数:");

		decimalText = new Spinner(this, SWT.BORDER|SWT.READ_ONLY);
		decimalText.setBackground(new org.eclipse.swt.graphics.Color(this.getDisplay(), 255, 255, 255));
		final GridData gd_decimalText = new GridData(SWT.LEFT, SWT.CENTER, true, false);
		gd_decimalText.widthHint = 40;
		decimalText.setLayoutData(gd_decimalText);
	
		decimalText.setValues(2, 0, 30, 0, 1, 1);
		this.decimal = 2;
		//负数
		
		final Group group = new Group(this, SWT.NONE);
		group.setText("示例");
		group.setLayout(new FillLayout());
		group.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, false, false, 2, 1));

		simpleLabel = new Label(group, SWT.NONE);
		
		if(!this.format.equals("")){
			this.initData();
		}
		this.showSample();
	
		initEvent();
		//
	}
	
	private void initEvent() {
		decimalText.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent arg0) {
				decimal = decimalText.getSelection();
				showSample();
			}
		});
	}

	private void initData(){
//		   0.E+00
//		   0.0E+00
//		   0.00E+00
		
		//小数位数
		this.decimal = 0;
		int decimalBegin = this.format.indexOf(".");
		if(decimalBegin!=-1){
			int decimalEnd = this.format.indexOf("E");
			this.decimal = decimalEnd-decimalBegin-1;
		}
		this.decimalText.setSelection(this.decimal);
	}
	
	private void showSample(){
		
		StringBuffer sbf = new StringBuffer("2.");
		
		if(this.decimal>0){
			for (int i = 0; i < this.decimal; i++) {
				sbf.append("0");
			}
		}
		sbf.append("E+06");
		
		
		simpleLabel.setText(sbf.toString());
		
	}

	@Override
	protected void checkSubclass() {
		// Disable the check that prevents subclassing of SWT components
	}

	public String getFormat() {
		StringBuffer sbf = new StringBuffer();
//		   0.E+00
//		   0.0E+00
//		   0.00E+00
		sbf.append("0.");
		if(this.decimal>0){
			for (int i = 0; i < this.decimal; i++) {
				sbf.append("0");
			}
		}

		sbf.append("E+00");
		
		return sbf.toString();
	}

}
