package com.justep.desinger.chart.property.config.composite.bar;

import java.util.HashMap;

import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.CLabel;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.ColorDialog;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

import com.justep.desinger.chart.common.ChartConstant;
import com.justep.desinger.chart.property.config.composite.IChartComposite;
import com.justep.desinger.chart.util.ChartConfigHelper;
import com.justep.desinger.chart.util.ColorUtil;
import com.justep.studio.ui.editors.xui.W3cDocumentHelper;
import com.justep.studio.ui.editors.xui.XuiElement;
import com.swtdesigner.SWTResourceManager;

public class ChartBarClassComposite extends Composite implements IChartComposite{

	private Text combo_tick_label_fontColor;
	
	private Text text_category_item_label_angle;
	private Text text_category_item_label_number_format;
	private Text text_category_item_label_corlor;
	private Combo combo_category_item_label_fontStyle;
	private Combo combo_category_item_label_fontSize;
	private Combo combo_category_item_label_fontName;
	private Combo combo_category_item_outlineStroke;
	private Text text_category_item_outlineColor;
	private Combo combo_category_item_max_width;
	private Combo combo_category_item_margin;
	
	//private Combo combo_category_item_label_visible;
	
	
	private Text text_category_label_max_width;
	private Combo combo_category_lower_margin;
	private Combo combo_category_upper_margin;
	private Combo combo_category_margin;
	private Text text_category_title_color;
	private Text text_category_title;
	private Combo combo_category_title_fontSize;
	private Combo combo_category_title_fontStyle;
	private Combo combo_category_title_fontName;
	private Combo combo_tick_label_fontSize;
	private Combo combo_tick_label_fontStyle;
	private Combo combo_tick_label_fontName;
	
	Shell shell;
	private Button button_category_item_label_visible;
	private Button button_text_category_title_color;
	private Button button_combo_tick_label_fontColor;
	private Button button_text_category_item_label_corlor;
	private Button button_text_category_item_outlineColor;
	
	private XuiElement owerElement;
	private String currentChartType;
	
	public ChartBarClassComposite(Composite parent, int style,XuiElement owerElement ,String currentChartType) {
		super(parent, style);
		this.owerElement = owerElement;
		this.currentChartType = currentChartType;
		this.shell = this.getShell();
		
		initLayout();
		registerEvent();
		initDefaultValue();
		initSelfDefaultValue();
	}

	public void initDefaultValue() {

		combo_category_title_fontName.select(ChartConstant.getSYSFontList().length-1);
		combo_category_title_fontStyle.select(0);
		combo_category_title_fontSize.select(5);
		
		combo_category_margin.select(1);
		combo_category_lower_margin.select(0);
		combo_category_upper_margin.select(0);
		combo_category_item_margin.select(1);
		combo_category_item_max_width.select(3);
		combo_category_item_outlineStroke.select(2);
		
		button_category_item_label_visible.setSelection(false);
		
		combo_category_item_label_fontName.select(ChartConstant.getSYSFontList().length-1);
		combo_category_item_label_fontStyle.select(0);
		combo_category_item_label_fontSize.select(5);
		
		combo_tick_label_fontSize.select(5);
		combo_tick_label_fontStyle.select(0);
		combo_tick_label_fontName.select(ChartConstant.getSYSFontList().length-1);
	}

	public void saveSelfConfig() {
		XuiElement configElement = getXuiElement(this.owerElement,"config");
		
		boolean b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-title",  text_category_title.getText(), new HashMap<String,String>());
		if(b){
			XuiElement bgColorE = getXuiElement(configElement, "category-title");
			W3cDocumentHelper.setElementText(bgColorE.getOriginElement(), text_category_title.getText());
		}else{
			configElement.removeChildren("category-title");
		}
		
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-title-color",  text_category_title_color.getText(), new HashMap<String,String>());
		if(b){
			XuiElement bgColorE = getXuiElement(configElement, "category-title-color");
			W3cDocumentHelper.setElementText(bgColorE.getOriginElement(), text_category_title_color.getText());
		}else{
			configElement.removeChildren("category-title-color");
		}
		
		//字体
		String fontName = combo_category_title_fontName.getItem(combo_category_title_fontName.getSelectionIndex());
		String fontStyle =combo_category_title_fontStyle.getSelectionIndex()+"";
		String fontSize = combo_category_title_fontSize.getItem(combo_category_title_fontSize.getSelectionIndex());
		HashMap<String,String> attrMap = new HashMap<String,String>();
		attrMap.put("name", fontName);
		attrMap.put("style", fontStyle);
		attrMap.put("size", fontSize);
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-title-font",  "", attrMap);
		if(b){
			XuiElement eE = getXuiElement(configElement, "category-title-font");
			eE.getXuiDataModel().setPropertyValue(eE, "name", fontName);
			eE.getXuiDataModel().setPropertyValue(eE, "style", fontStyle);
			eE.getXuiDataModel().setPropertyValue(eE, "size",fontSize );
		}else{
			configElement.removeChildren("category-title-font");
		}
		
		String temp = combo_category_margin.getItem(combo_category_margin.getSelectionIndex());
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-margin", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-margin");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-margin");
		}
		
		
		temp = combo_category_upper_margin.getItem(combo_category_upper_margin.getSelectionIndex());
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-upper-margin", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-upper-margin");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-upper-margin");
		}
		

		temp = combo_category_lower_margin.getItem(combo_category_lower_margin.getSelectionIndex());
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-lower-margin", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-lower-margin");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-lower-margin");
		}
		
		temp = text_category_label_max_width.getText();
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-label-max-width", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-label-max-width");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-label-max-width");
		}
		
		temp = combo_category_item_margin.getItem(combo_category_item_margin.getSelectionIndex());
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-item-margin", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-item-margin");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-item-margin");
		}

		temp = combo_category_item_max_width.getItem(combo_category_item_max_width.getSelectionIndex());
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-item-max-width", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-item-max-width");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-item-max-width");
		}
		
		String temp1 = text_category_item_outlineColor.getText();
		String temp2 = combo_category_item_outlineStroke.getItem(combo_category_item_outlineStroke.getSelectionIndex());
		attrMap = new HashMap<String,String>();
		attrMap.put("color", temp1);
		attrMap.put("stroke", temp2);
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-item-outline",  "", attrMap);
		if(b){
			XuiElement eE = getXuiElement(configElement, "category-item-outline");
			eE.getXuiDataModel().setPropertyValue(eE, "color", temp1);
			eE.getXuiDataModel().setPropertyValue(eE, "stroke", temp2);
		}else{
			configElement.removeChildren("category-item-outline");
		}		
		
		temp = "" + button_category_item_label_visible.getSelection();
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-item-label-visible", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-item-label-visible");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-item-label-visible");
		}

		//字体
		fontName = combo_category_item_label_fontName.getItem(combo_category_item_label_fontName.getSelectionIndex());
		fontStyle =combo_category_item_label_fontStyle.getSelectionIndex()+"";
		fontSize = combo_category_item_label_fontSize.getItem(combo_category_item_label_fontSize.getSelectionIndex());
		attrMap = new HashMap<String,String>();
		attrMap.put("name", fontName);
		attrMap.put("style", fontStyle);
		attrMap.put("size", fontSize);
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-item-label-font",  "", attrMap);
		if(b){
			XuiElement eE = getXuiElement(configElement, "category-item-label-font");
			eE.getXuiDataModel().setPropertyValue(eE, "name", fontName);
			eE.getXuiDataModel().setPropertyValue(eE, "style", fontStyle);
			eE.getXuiDataModel().setPropertyValue(eE, "size",fontSize );
		}else{
			configElement.removeChildren("category-item-label-font");
		}
		
		
		temp = text_category_item_label_corlor.getText();
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-item-label-color", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-item-label-color");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-item-label-color");
		}
		
		
		temp = text_category_item_label_number_format.getText();
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-item-label-number-format", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-item-label-number-format");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-item-label-number-format");
		}
		
		
		temp = text_category_item_label_angle.getText();
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-item-label-angle", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-item-label-angle");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-item-label-angle");
		}
		
		temp = combo_tick_label_fontColor.getText();
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-tick-label-color", temp, new HashMap<String,String>());
		if(b){
			XuiElement eE = getXuiElement(configElement,"category-tick-label-color");
			W3cDocumentHelper.setElementText(eE.getOriginElement(), temp);
		}else{
			configElement.removeChildren("category-tick-label-color");
		}
		
		fontName = combo_tick_label_fontName.getItem(combo_tick_label_fontName.getSelectionIndex());
		fontStyle = combo_tick_label_fontStyle.getSelectionIndex()+"";
		fontSize =  combo_tick_label_fontSize.getItem(combo_tick_label_fontSize.getSelectionIndex());
		attrMap = new HashMap<String,String>();
		attrMap.put("name", fontName);
		attrMap.put("style", fontStyle);
		attrMap.put("size", fontSize);
		b = ChartConfigHelper.getChartConfigHelper().compare(this.currentChartType, "category-tick-label-font",  "", attrMap);
		if(b){
			XuiElement eE = getXuiElement(configElement, "category-tick-label-font");
			eE.getXuiDataModel().setPropertyValue(eE, "name", fontName);
			eE.getXuiDataModel().setPropertyValue(eE, "style", fontStyle);
			eE.getXuiDataModel().setPropertyValue(eE, "size",fontSize );
		}else{
			configElement.removeChildren("category-tick-label-font");
		}
		
	}
	
	public void initSelfDefaultValue() {
		if (this.owerElement == null) return; //原则上不允许也不会出现NULL
		XuiElement configElement = this.owerElement.getChildByTagName("config");
		if(configElement==null) return;
		XuiElement categoryTitleE = configElement.getChildByTagName("category-title");
		if(categoryTitleE!=null){
			text_category_title.setText(W3cDocumentHelper.getText(categoryTitleE.getOriginElement()));
		}
		XuiElement categoryTitleColorE = configElement.getChildByTagName("category-title-color");
		if(categoryTitleColorE!=null){
			text_category_title_color.setText(W3cDocumentHelper.getText(categoryTitleColorE.getOriginElement()));
			text_category_title_color.setBackground(ColorUtil.hexRGBToSWTColor(W3cDocumentHelper.getText(categoryTitleColorE.getOriginElement()),this.getDisplay()));
			text_category_title_color.setForeground(ColorUtil.hexRGBToSWTColor(W3cDocumentHelper.getText(categoryTitleColorE.getOriginElement()),this.getDisplay()));
		}else{
			text_category_title_color.setBackground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
			text_category_title_color.setForeground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
		}
		
		XuiElement categoryTitleFontE = configElement.getChildByTagName("category-title-font");
		if(categoryTitleFontE!=null){
			setDefaultComboValue(combo_category_title_fontName,categoryTitleFontE.getProperyValue("name"));
			combo_category_title_fontStyle.select(Integer.parseInt(categoryTitleFontE.getProperyValue("style")));
			setDefaultComboValue(combo_category_title_fontSize,categoryTitleFontE.getProperyValue("size"));
		}
		XuiElement categoryMarginE = configElement.getChildByTagName("category-margin");
		if(categoryMarginE!=null){
			setDefaultComboValue(combo_category_margin,W3cDocumentHelper.getText(categoryMarginE.getOriginElement()));
		}
		XuiElement categoryUpperMarginE = configElement.getChildByTagName("category-upper-margin");
		if(categoryUpperMarginE!=null){
			setDefaultComboValue(combo_category_upper_margin,W3cDocumentHelper.getText(categoryUpperMarginE.getOriginElement()));
		}
		XuiElement categoryLowerMarginE = configElement.getChildByTagName("category-lower-margin");
		if(categoryLowerMarginE!=null){
			setDefaultComboValue(combo_category_lower_margin,W3cDocumentHelper.getText(categoryLowerMarginE.getOriginElement()));
		}
		XuiElement categoryLabelMaxWidthE = configElement.getChildByTagName("category-label-max-width");
		if(categoryLabelMaxWidthE!=null){
			text_category_label_max_width.setText(W3cDocumentHelper.getText(categoryLabelMaxWidthE.getOriginElement()));
		}
		XuiElement categoryItenMarginE = configElement.getChildByTagName("category-item-margin");
		if(categoryItenMarginE!=null){
			setDefaultComboValue(combo_category_item_margin,W3cDocumentHelper.getText(categoryItenMarginE.getOriginElement()));
		}
		XuiElement categoryItenMaxWidthE = configElement.getChildByTagName("category-item-max-width");
		if(categoryItenMaxWidthE!=null){
			setDefaultComboValue(combo_category_item_max_width,W3cDocumentHelper.getText(categoryItenMaxWidthE.getOriginElement()));
		}
		XuiElement categoryItemOutlineE = configElement.getChildByTagName("category-item-outline");
		if(categoryItemOutlineE!=null){
			text_category_item_outlineColor.setText(categoryItemOutlineE.getProperyValue("color"));
			setDefaultComboValue(combo_category_item_outlineStroke,categoryItemOutlineE.getProperyValue("stroke"));
			text_category_item_outlineColor.setBackground(ColorUtil.hexRGBToSWTColor(categoryItemOutlineE.getProperyValue("color"),this.getDisplay()));
			text_category_item_outlineColor.setForeground(ColorUtil.hexRGBToSWTColor(categoryItemOutlineE.getProperyValue("color"),this.getDisplay()));
		}else{
			text_category_item_outlineColor.setBackground(ColorUtil.hexRGBToSWTColor("#BEBEBE",this.getDisplay()));
			text_category_item_outlineColor.setForeground(ColorUtil.hexRGBToSWTColor("#BEBEBE",this.getDisplay()));
		}
		
		XuiElement categoryItemLabelVisibleE = configElement.getChildByTagName("category-item-label-visible");
		if(categoryItemLabelVisibleE!=null){
			boolean b = Boolean.parseBoolean(W3cDocumentHelper.getText(categoryItemLabelVisibleE.getOriginElement()));
			button_category_item_label_visible.setSelection(b);
			text_category_item_label_number_format.setEnabled(b);
			text_category_item_label_corlor.setEnabled(b);
			combo_category_item_label_fontStyle.setEnabled(b);
			combo_category_item_label_fontSize.setEnabled(b);
			combo_category_item_label_fontName.setEnabled(b);
			combo_category_item_outlineStroke.setEnabled(b);
			text_category_item_outlineColor.setEnabled(b);	
			combo_category_item_max_width.setEnabled(b);	
			combo_category_item_margin.setEnabled(b);	
		}else{
			button_category_item_label_visible.setSelection(false);
			text_category_item_label_number_format.setEnabled(false);
			text_category_item_label_corlor.setEnabled(false);
			combo_category_item_label_fontStyle.setEnabled(false);
			combo_category_item_label_fontSize.setEnabled(false);
			combo_category_item_label_fontName.setEnabled(false);
			combo_category_item_outlineStroke.setEnabled(false);
			text_category_item_outlineColor.setEnabled(false);	
			combo_category_item_max_width.setEnabled(false);	
			combo_category_item_margin.setEnabled(false);	
		}
		
		XuiElement categoryItemLabelFontE = configElement.getChildByTagName("category-item-label-font");
		if(categoryItemLabelFontE!=null){
			setDefaultComboValue(combo_category_item_label_fontName,categoryItemLabelFontE.getProperyValue("name"));
			combo_category_item_label_fontStyle.select(Integer.parseInt(categoryItemLabelFontE.getProperyValue("style")));
			setDefaultComboValue(combo_category_item_label_fontSize,categoryItemLabelFontE.getProperyValue("size"));
		}
		XuiElement categoryItemLabelColorE = configElement.getChildByTagName("category-item-label-color");
		if(categoryItemLabelColorE!=null){
			text_category_item_label_corlor.setText(W3cDocumentHelper.getText(categoryItemLabelColorE.getOriginElement()));
			text_category_item_label_corlor.setBackground(ColorUtil.hexRGBToSWTColor(W3cDocumentHelper.getText(categoryItemLabelColorE.getOriginElement()),this.getDisplay()));
			text_category_item_label_corlor.setForeground(ColorUtil.hexRGBToSWTColor(W3cDocumentHelper.getText(categoryItemLabelColorE.getOriginElement()),this.getDisplay()));
		}else{
			text_category_item_label_corlor.setBackground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
			text_category_item_label_corlor.setForeground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
		}
		XuiElement categoryItemNumberFormatE = configElement.getChildByTagName("category-item-label-number-format");
		if(categoryItemNumberFormatE!=null){
			text_category_item_label_number_format.setText(W3cDocumentHelper.getText(categoryItemNumberFormatE.getOriginElement()));
		}
		XuiElement categoryItemlabelAngleE = configElement.getChildByTagName("category-item-label-angle");
		if(categoryItemlabelAngleE!=null){
			text_category_item_label_angle.setText(W3cDocumentHelper.getText(categoryItemlabelAngleE.getOriginElement()));
		}
		XuiElement categoryTickLabelFontE = configElement.getChildByTagName("category-tick-label-font");
		if(categoryTickLabelFontE!=null){
			setDefaultComboValue(combo_tick_label_fontName,categoryTickLabelFontE.getProperyValue("name"));
			combo_tick_label_fontStyle.select(Integer.parseInt(categoryTickLabelFontE.getProperyValue("style")));
			setDefaultComboValue(combo_tick_label_fontSize,categoryTickLabelFontE.getProperyValue("size"));
		}
		XuiElement categoryTickLabelColorE = configElement.getChildByTagName("category-tick-label-color");
		if(categoryTickLabelColorE!=null){
			combo_tick_label_fontColor.setText(W3cDocumentHelper.getText(categoryTickLabelColorE.getOriginElement()));
			combo_tick_label_fontColor.setBackground(ColorUtil.hexRGBToSWTColor(W3cDocumentHelper.getText(categoryTickLabelColorE.getOriginElement()),this.getDisplay()));
			combo_tick_label_fontColor.setForeground(ColorUtil.hexRGBToSWTColor(W3cDocumentHelper.getText(categoryTickLabelColorE.getOriginElement()),this.getDisplay()));
		}else{
			combo_tick_label_fontColor.setBackground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
			combo_tick_label_fontColor.setForeground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
		}
	}
	
	public void initLayout() {
		setLayout(new GridLayout());
		final CLabel label = new CLabel(this, SWT.NONE);
		label.setFont(SWTResourceManager.getFont("", 12, SWT.BOLD));
		label.setLayoutData(new GridData(506, 25));
		label.setText("分类轴");

		final Label label_1 = new Label(this, SWT.SEPARATOR | SWT.HORIZONTAL);
		label_1.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, false));

		final Group group_1 = new Group(this, SWT.NONE);
		group_1.setText("分类轴描述信息");
		final GridData gd_group_1 = new GridData(SWT.FILL, SWT.FILL, true, false);
		gd_group_1.heightHint = 56;
		gd_group_1.widthHint = 505;
		group_1.setLayoutData(gd_group_1);
		final GridLayout gridLayout_1 = new GridLayout();
		gridLayout_1.marginWidth = 1;
		gridLayout_1.marginTop = 1;
		gridLayout_1.marginRight = 1;
		gridLayout_1.marginLeft = 1;
		gridLayout_1.marginHeight = 1;
		gridLayout_1.marginBottom = 1;
		gridLayout_1.numColumns = 9;
		group_1.setLayout(gridLayout_1);

		final Label label_6 = new Label(group_1, SWT.NONE);
		label_6.setText("描述信息：");

		text_category_title = new Text(group_1, SWT.BORDER);
		text_category_title.setText("分类");
		text_category_title.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 8, 1));

		final Label label_7 = new Label(group_1, SWT.NONE);
		label_7.setText("字体名称：");

		combo_category_title_fontName = new Combo(group_1, SWT.NONE);
		final GridData gd_combo_category_title_fontName = new GridData(SWT.FILL, SWT.CENTER, true, false);
		gd_combo_category_title_fontName.widthHint = 57;
		combo_category_title_fontName.setLayoutData(gd_combo_category_title_fontName);
		combo_category_title_fontName.setItems(ChartConstant.getSYSFontList());

		final Label label_8 = new Label(group_1, SWT.NONE);
		label_8.setText("字体样式：");

		combo_category_title_fontStyle = new Combo(group_1, SWT.NONE);
		final GridData gd_combo_category_title_fontStyle = new GridData(SWT.FILL, SWT.CENTER, true, false);
		combo_category_title_fontStyle.setLayoutData(gd_combo_category_title_fontStyle);
		combo_category_title_fontStyle.setItems(new String[] {"正常", "粗体", "斜体", "粗斜体"});

		final Label label_9 = new Label(group_1, SWT.NONE);
		label_9.setText("字体大小：");

		combo_category_title_fontSize = new Combo(group_1, SWT.NONE);
		combo_category_title_fontSize.setItems(new String[] {"6", "8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72"});
		final GridData gd_combo_category_title_fontSize = new GridData(SWT.FILL, SWT.CENTER, true, false);
		gd_combo_category_title_fontSize.widthHint = 37;
		combo_category_title_fontSize.setLayoutData(gd_combo_category_title_fontSize);

		final Label label_5 = new Label(group_1, SWT.NONE);
		label_5.setLayoutData(new GridData());
		label_5.setText("字体颜色：");

		text_category_title_color = new Text(group_1, SWT.BORDER);
		text_category_title_color.setText("#000000");
		final GridData gd_text_category_title_color = new GridData(SWT.FILL, SWT.CENTER, true, false);
		text_category_title_color.setLayoutData(gd_text_category_title_color);
		text_category_title_color.setBackground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
		text_category_title_color.setForeground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
		
		
		button_text_category_title_color = new Button(group_1, SWT.NONE);
		button_text_category_title_color.setText("..");
		
		final GridData gd_text_2 = new GridData(SWT.FILL, SWT.CENTER, true, false);
		gd_text_2.widthHint = 142;
		
		final Group group_2 = new Group(this, SWT.NONE);
		group_2.setText("分类轴各组信息");
		final GridData gd_group_2 = new GridData(SWT.FILL, SWT.FILL, true, false);
		gd_group_2.heightHint = 77;
		gd_group_2.widthHint = 505;
		group_2.setLayoutData(gd_group_2);
		final GridLayout gridLayout_2 = new GridLayout();
		gridLayout_2.marginWidth = 1;
		gridLayout_2.marginTop = 1;
		gridLayout_2.marginRight = 1;
		gridLayout_2.marginLeft = 1;
		gridLayout_2.marginHeight = 1;
		gridLayout_2.marginBottom = 1;
		gridLayout_2.numColumns = 9;
		group_2.setLayout(gridLayout_2);

		final Label label_17 = new Label(group_2, SWT.NONE);
		label_17.setText("组间间距：");

		combo_category_margin = new Combo(group_2, SWT.NONE);
		combo_category_margin.setToolTipText("分类轴各组之间的距离");
		final GridData gd_combo_category_margin = new GridData(SWT.FILL, SWT.CENTER, true, false);
		gd_combo_category_margin.widthHint = 26;
		combo_category_margin.setLayoutData(gd_combo_category_margin);
		combo_category_margin.setItems(new String[] {"0.0","0.1","0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0"});
		
		final Label label_18 = new Label(group_2, SWT.NONE);
		label_18.setText("首组间距：");

		combo_category_upper_margin = new Combo(group_2, SWT.NONE);
		combo_category_upper_margin.setToolTipText("左侧或上侧组距靠近图表边缘的距离");
		combo_category_upper_margin.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));
		combo_category_upper_margin.setItems(new String[] {"0.0","0.1","0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0"});
		
		final Label label_19 = new Label(group_2, SWT.NONE);
		label_19.setText("末组间距：");

		combo_category_lower_margin = new Combo(group_2, SWT.NONE);
		combo_category_lower_margin.setToolTipText("右侧或下侧组距靠近图表边缘的距离");
		combo_category_lower_margin.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));
		combo_category_lower_margin.setItems(new String[] {"0.0","0.1","0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0"});

		final Label label_20 = new Label(group_2, SWT.NONE);
		label_20.setLayoutData(new GridData());
		label_20.setText("信息宽度：");

		text_category_label_max_width = new Text(group_2, SWT.BORDER);
		text_category_label_max_width.setToolTipText("分类轴各组描述信息最大宽度 ");
		final GridData gd_text_category_label_max_width = new GridData(SWT.FILL, SWT.CENTER, true, false, 2, 1);
		gd_text_category_label_max_width.widthHint = 35;
		text_category_label_max_width.setLayoutData(gd_text_category_label_max_width);
		text_category_label_max_width.setText("10");
		
		final Label label_29 = new Label(group_2, SWT.NONE);
		label_29.setText("字体名称：");

		combo_tick_label_fontName = new Combo(group_2, SWT.NONE);
		combo_tick_label_fontName.setToolTipText("分类轴各组描述信息字体名称");
		final GridData gd_combo_tick_label_fontName = new GridData(SWT.FILL, SWT.CENTER, false, false);
		gd_combo_tick_label_fontName.widthHint = 34;
		combo_tick_label_fontName.setLayoutData(gd_combo_tick_label_fontName);
		combo_tick_label_fontName.setItems(ChartConstant.getSYSFontList());
		
		final Label label_30 = new Label(group_2, SWT.NONE);
		label_30.setText("字体样式：");

		combo_tick_label_fontStyle = new Combo(group_2, SWT.NONE);
		combo_tick_label_fontStyle.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, false, false));
		combo_tick_label_fontStyle.setToolTipText("分类轴各组描述信息字体样式");
		combo_tick_label_fontStyle.setItems(new String[] {"正常", "粗体", "斜体", "粗斜体"});
		
		final Label label_31 = new Label(group_2, SWT.NONE);
		label_31.setText("字体大小：");

		combo_tick_label_fontSize = new Combo(group_2, SWT.NONE);
		combo_tick_label_fontSize.setToolTipText("分类轴各组描述信息字体大小");
		combo_tick_label_fontSize.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, false, false));
		combo_tick_label_fontSize.setItems(new String[] {"6", "8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72"});

		final Label label_10 = new Label(group_2, SWT.NONE);
		label_10.setText("字体颜色：");

		combo_tick_label_fontColor = new Text(group_2, SWT.BORDER);
		combo_tick_label_fontColor.setToolTipText("字体颜色");
		final GridData gd_combo_tick_label_fontColor = new GridData(SWT.FILL, SWT.CENTER, false, false);
		gd_combo_tick_label_fontColor.widthHint = 30;
		combo_tick_label_fontColor.setLayoutData(gd_combo_tick_label_fontColor);
		combo_tick_label_fontColor.setText("#000000");
		combo_tick_label_fontColor.setBackground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
		combo_tick_label_fontColor.setForeground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
		
		button_combo_tick_label_fontColor = new Button(group_2, SWT.NONE);
		button_combo_tick_label_fontColor.setText("..");

		final Label label_4 = new Label(group_2, SWT.NONE);
		label_4.setLayoutData(new GridData());
		label_4.setText("偏移度：");

		text_category_item_label_angle = new Text(group_2, SWT.BORDER);
		text_category_item_label_angle.setToolTipText("分类轴各组描述信息水平偏移度(0~90)");
		text_category_item_label_angle.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, false, false, 2, 1));
		text_category_item_label_angle.setText("0");
		new Label(group_2, SWT.NONE);
		new Label(group_2, SWT.NONE);
		new Label(group_2, SWT.NONE);
		new Label(group_2, SWT.NONE);
		new Label(group_2, SWT.NONE);
		new Label(group_2, SWT.NONE);
		
		final Group group_3 = new Group(this, SWT.NONE);
		group_3.setText("分类轴中各组中各项数据信息");
		final GridData gd_group_3 = new GridData(SWT.FILL, SWT.FILL, true, false);
		gd_group_3.heightHint = 103;
		gd_group_3.widthHint = 508;
		group_3.setLayoutData(gd_group_3);
		final GridLayout gridLayout_3 = new GridLayout();
		gridLayout_3.marginWidth = 1;
		gridLayout_3.marginTop = 1;
		gridLayout_3.marginRight = 1;
		gridLayout_3.marginLeft = 1;
		gridLayout_3.marginHeight = 1;
		gridLayout_3.marginBottom = 1;
		gridLayout_3.numColumns = 9;
		group_3.setLayout(gridLayout_3);

		button_category_item_label_visible = new Button(group_3, SWT.CHECK);
		button_category_item_label_visible.setLayoutData(new GridData(SWT.LEFT, SWT.CENTER, false, false, 6, 1));
		button_category_item_label_visible.setText("分类轴中各组各数据项上是否显示当前数据值");
		new Label(group_3, SWT.NONE);
		new Label(group_3, SWT.NONE);
		new Label(group_3, SWT.NONE);

		final Label label_26 = new Label(group_3, SWT.NONE);
		label_26.setLayoutData(new GridData());
		label_26.setText("字体名称：");

		combo_category_item_label_fontName = new Combo(group_3, SWT.NONE);
		combo_category_item_label_fontName.setToolTipText("分类轴中各组各数据项上数据值字体名称");
		final GridData gd_combo_category_item_label_fontName = new GridData(SWT.FILL, SWT.CENTER, true, false);
		gd_combo_category_item_label_fontName.widthHint = 39;
		combo_category_item_label_fontName.setLayoutData(gd_combo_category_item_label_fontName);
		combo_category_item_label_fontName.setItems(ChartConstant.getSYSFontList());
		
		final Label label_27 = new Label(group_3, SWT.NONE);
		label_27.setLayoutData(new GridData());
		label_27.setText("字体样式：");

		combo_category_item_label_fontStyle = new Combo(group_3, SWT.NONE);
		combo_category_item_label_fontStyle.setToolTipText("分类轴中各组各数据项上数据值字体样式");
		combo_category_item_label_fontStyle.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));
		combo_category_item_label_fontStyle.setItems(new String[] {"正常", "粗体", "斜体", "粗斜体"});
		
		final Label label_28 = new Label(group_3, SWT.NONE);
		label_28.setLayoutData(new GridData());
		label_28.setText("字体大小：");

		combo_category_item_label_fontSize = new Combo(group_3, SWT.NONE);
		combo_category_item_label_fontSize.setToolTipText("分类轴中各组各数据项上数据值字体大小");
		combo_category_item_label_fontSize.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));
		combo_category_item_label_fontSize.setItems(new String[] {"6", "8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72"});

		final Label label_2 = new Label(group_3, SWT.NONE);
		label_2.setLayoutData(new GridData());
		label_2.setText("字体颜色：");

		text_category_item_label_corlor = new Text(group_3, SWT.BORDER);
		text_category_item_label_corlor.setToolTipText("分类轴中各组各数据项上数据值字体颜色");
		text_category_item_label_corlor.setText("#000000");
		text_category_item_label_corlor.setBackground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
		text_category_item_label_corlor.setForeground(ColorUtil.hexRGBToSWTColor("#000000",this.getDisplay()));
		
		
		final GridData gd_text_category_item_label_corlor = new GridData(SWT.FILL, SWT.CENTER, true, false);
		gd_text_category_item_label_corlor.widthHint = 31;
		text_category_item_label_corlor.setLayoutData(gd_text_category_item_label_corlor);

		button_text_category_item_label_corlor = new Button(group_3, SWT.NONE);
		button_text_category_item_label_corlor.setText("..");

		final Label label_21 = new Label(group_3, SWT.NONE);
		label_21.setText("各项距离：");

		combo_category_item_margin  = new Combo(group_3, SWT.NONE);
		combo_category_item_margin.setToolTipText("分类轴各组各数据项之间的距离");
		combo_category_item_margin.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));
		combo_category_item_margin.setItems(new String[] {"0.0","0.1","0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0"});

		final Label label_22 = new Label(group_3, SWT.NONE);
		label_22.setText("最大宽度：");

		combo_category_item_max_width = new Combo(group_3, SWT.NONE);
		combo_category_item_max_width.setToolTipText("分类轴各组各数据项最大宽度");
		combo_category_item_max_width.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));
		combo_category_item_max_width.setItems(new String[] {"0.0","0.1","0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0"});

		final Label label_24 = new Label(group_3, SWT.NONE);
		label_24.setLayoutData(new GridData());
		label_24.setText("描边特效：");

		combo_category_item_outlineStroke = new Combo(group_3, SWT.NONE);
		combo_category_item_outlineStroke.setToolTipText("分类轴各组各数据项描边特效");
		combo_category_item_outlineStroke.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false));
		combo_category_item_outlineStroke.setItems(new String[] {"0.1f","0.2f", "0.3f", "0.4f", "0.5f", "0.6f", "0.7f", "0.8f", "0.9f", "1.0f"});

		final Label label_23 = new Label(group_3, SWT.NONE);
		label_23.setLayoutData(new GridData());
		label_23.setText("廓线颜色：");

		text_category_item_outlineColor = new Text(group_3, SWT.BORDER);
		text_category_item_outlineColor.setToolTipText("分类轴各组各数据项轮廓线颜色");
		final GridData gd_text_category_item_outlineColor = new GridData(SWT.FILL, SWT.CENTER, true, false);
		gd_text_category_item_outlineColor.widthHint = 31;
		text_category_item_outlineColor.setLayoutData(gd_text_category_item_outlineColor);
		text_category_item_outlineColor.setText("#BEBEBE");
		text_category_item_outlineColor.setBackground(ColorUtil.hexRGBToSWTColor("#BEBEBE",this.getDisplay()));
		text_category_item_outlineColor.setForeground(ColorUtil.hexRGBToSWTColor("#BEBEBE",this.getDisplay()));
		
		button_text_category_item_outlineColor = new Button(group_3, SWT.NONE);
		button_text_category_item_outlineColor.setText("..");

		final Label label_3 = new Label(group_3, SWT.NONE);
		label_3.setLayoutData(new GridData());
		label_3.setText("数值格式：");

		text_category_item_label_number_format = new Text(group_3, SWT.BORDER);
		text_category_item_label_number_format.setText("######.00");
		text_category_item_label_number_format.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 2, 1));
		new Label(group_3, SWT.NONE);
		new Label(group_3, SWT.NONE);
		new Label(group_3, SWT.NONE);
		new Label(group_3, SWT.NONE);
		new Label(group_3, SWT.NONE);
		new Label(group_3, SWT.NONE);
		
	}

	public void registerEvent() {
		
		button_category_item_label_visible.addSelectionListener(new SelectionAdapter() {    
            public void widgetSelected(SelectionEvent e) {              	
    			text_category_item_label_number_format.setEnabled(button_category_item_label_visible.getSelection());
    			text_category_item_label_corlor.setEnabled(button_category_item_label_visible.getSelection());
    			combo_category_item_label_fontStyle.setEnabled(button_category_item_label_visible.getSelection());
    			combo_category_item_label_fontSize.setEnabled(button_category_item_label_visible.getSelection());
    			combo_category_item_label_fontName.setEnabled(button_category_item_label_visible.getSelection());
    			combo_category_item_outlineStroke.setEnabled(button_category_item_label_visible.getSelection());
    			text_category_item_outlineColor.setEnabled(button_category_item_label_visible.getSelection());   
    			combo_category_item_max_width.setEnabled(button_category_item_label_visible.getSelection());   
    			combo_category_item_margin.setEnabled(button_category_item_label_visible.getSelection());   
            }    
        });   
		
		button_text_category_title_color.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				ColorDialog dlg = new ColorDialog(shell);
				dlg.setRGB(text_category_title_color.getBackground().getRGB());
				dlg.setText("颜色选择框");
				RGB rgb = dlg.open();
				if (rgb != null) {
					Color color = new Color(shell.getDisplay(), rgb);
					text_category_title_color.setBackground(color);
					text_category_title_color.setForeground(color);
					text_category_title_color.setText(ColorUtil.SWTColorToHexRGB(color).toUpperCase());
				}
			}
		});
		
		
		button_text_category_item_outlineColor.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				ColorDialog dlg = new ColorDialog(shell);
				dlg.setRGB(text_category_item_outlineColor.getBackground().getRGB());
				dlg.setText("颜色选择框");
				RGB rgb = dlg.open();
				if (rgb != null) {
					Color color = new Color(shell.getDisplay(), rgb);
					text_category_item_outlineColor.setBackground(color);
					text_category_item_outlineColor.setForeground(color);
					text_category_item_outlineColor.setText(ColorUtil.SWTColorToHexRGB(color).toUpperCase());
				}
			}
		});
		
		
		button_combo_tick_label_fontColor.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				ColorDialog dlg = new ColorDialog(shell);
				dlg.setRGB(combo_tick_label_fontColor.getBackground().getRGB());
				dlg.setText("颜色选择框");
				RGB rgb = dlg.open();
				if (rgb != null) {
					Color color = new Color(shell.getDisplay(), rgb);
					combo_tick_label_fontColor.setBackground(color);
					combo_tick_label_fontColor.setForeground(color);
					combo_tick_label_fontColor.setText(ColorUtil.SWTColorToHexRGB(color).toUpperCase());
				}
			}
		});
		
		button_text_category_item_label_corlor.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(final SelectionEvent e) {
				ColorDialog dlg = new ColorDialog(shell);
				dlg.setRGB(text_category_item_label_corlor.getBackground().getRGB());
				dlg.setText("颜色选择框");
				RGB rgb = dlg.open();
				if (rgb != null) {
					Color color = new Color(shell.getDisplay(), rgb);
					text_category_item_label_corlor.setBackground(color);
					text_category_item_label_corlor.setForeground(color);
					text_category_item_label_corlor.setText(ColorUtil.SWTColorToHexRGB(color).toUpperCase());
				}
			}
		});

	}

	/**
	 * @param combo
	 * @param v
	 */
	private void setDefaultComboValue(Combo combo , String v){
		String [] items = combo.getItems();
		for(int i=0; i<items.length; i++){
			if(items[i].equalsIgnoreCase(v)){
				combo.select(i);
				break;
			}
		}
	}
	
	private XuiElement getXuiElement(XuiElement parentElement,String tagName){
		XuiElement xuiE = parentElement.getChildByTagName(tagName);
		if(xuiE == null){
			if("config".equals(tagName)){
				xuiE = parentElement.getXuiDataModel().addElement(tagName, parentElement, null, null, "<config></config>", null);
			}else{
				xuiE = parentElement.getXuiDataModel().addElement(tagName, parentElement, tagName);
			}
		}
		return xuiE;
	}
}
