package com.justep.studio.ui.editors.propertypage;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.jface.viewers.IColorProvider;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.ITableLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.SashForm;
import org.eclipse.swt.custom.StyledText;
import org.eclipse.swt.dnd.DND;
import org.eclipse.swt.dnd.DragSource;
import org.eclipse.swt.dnd.DragSourceAdapter;
import org.eclipse.swt.dnd.DragSourceEvent;
import org.eclipse.swt.dnd.DropTarget;
import org.eclipse.swt.dnd.DropTargetAdapter;
import org.eclipse.swt.dnd.DropTargetEvent;
import org.eclipse.swt.dnd.TextTransfer;
import org.eclipse.swt.dnd.Transfer;
import org.eclipse.swt.events.KeyAdapter;
import org.eclipse.swt.events.KeyEvent;
import org.eclipse.swt.events.PaintEvent;
import org.eclipse.swt.events.PaintListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.events.TraverseEvent;
import org.eclipse.swt.events.TraverseListener;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.ToolBar;
import org.eclipse.swt.widgets.ToolItem;
import org.eclipse.swt.widgets.Tree;

import com.justep.studio.data.DataRecord;
import com.justep.studio.data.DataSet;
import com.justep.studio.ui.commonpanel.TextFilterComposite;
import com.justep.studio.ui.editors.property.datasource.RefPropertyDatasource;
import com.justep.studio.ui.editors.property.strategy.RefPropertyValueStrategy;
import com.justep.studio.ui.editors.util.ExpressionUtil;
import com.justep.studio.ui.editors.util.ImageManager;
import com.justep.studio.ui.editors.xui.IPropertyDialogPage;
import com.justep.studio.ui.editors.xui.IPropertyValueStrategy;
import com.justep.studio.ui.editors.xui.PropertyItem;
import com.justep.studio.ui.exjface.DataSetTreeViewer;

public class XpathPropertyValuePage extends Composite implements IPropertyDialogPage {

	private StyledText styledText;
	private PropertyItem propData;

	private DataSetTreeViewer treeViewerData;
	private Tree treeData;

	private DataSetTreeViewer treeViewerXpath;
	private Tree treeXpath;

	private DataSet dataset;

	private boolean painTextEditor = false;
	private RefPropertyValueStrategy refStrategy = new RefPropertyValueStrategy();
	private TextFilterComposite filterText1;
	private TextFilterComposite filterText2;

	/**
	 * Create contents of the dialog
	 * @param parent
	 */
	public XpathPropertyValuePage(Composite parent, int style) {
		super(parent, style);
		this.setSize(700, 550);
		this.setLayout(new FillLayout(SWT.VERTICAL));

		final SashForm sashForm = new SashForm(this, SWT.VERTICAL);

		final Group group = new Group(sashForm, SWT.NONE);
		group.setText("数据选择");
		group.setLayout(new FillLayout());
		final SashForm sashFormUp = new SashForm(group, SWT.NONE);

		final Composite compositeUpData = new Composite(sashFormUp, SWT.NONE);
		GridLayout gridLayoutUpData = new GridLayout();
		gridLayoutUpData.marginHeight = 0;
		gridLayoutUpData.marginWidth = 0;
		compositeUpData.setLayout(gridLayoutUpData);

		final Label label1 = new Label(compositeUpData, SWT.NONE);
		label1.setText("数据选择区(选择拖动到编辑区)");
		label1.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, false));

		filterText1 = new TextFilterComposite(compositeUpData, SWT.NONE, true) {
			@Override
			public void doFilter(String text) {
				if (treeViewerData != null) {
					treeViewerData.filter(filterText1.getFilterText());
				}
			}
		};
		filterText1.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, false));
		filterText1.getText().addTraverseListener(new TraverseListener() {
			public void keyTraversed(TraverseEvent e) {
				if (e.keyCode == 16777218) {
					if (treeViewerData != null) {
						treeViewerData.getTree().setFocus();
						treeViewerData.getTree().select(treeViewerData.getTree().getItem(0));
					}
				} else if (e.keyCode == 16777217) {
					styledText.setFocus();
				}
			}
		});

		treeViewerData = new DataSetTreeViewer(compositeUpData, SWT.BORDER);
		treeData = treeViewerData.getTree();
		treeData.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		initDataTreeViwer(treeViewerData);

		final Composite compositeDown = new Composite(sashForm, SWT.NONE);
		GridLayout gridLayoutDown = new GridLayout();
		gridLayoutDown.marginHeight = 0;
		gridLayoutDown.marginWidth = 0;
		gridLayoutDown.verticalSpacing = 0;
		compositeDown.setLayout(gridLayoutDown);

		Label label = new Label(compositeDown, SWT.NULL);
		label.setText("（运算符两边用空格隔开）");
		
		final ToolBar toolBar = new ToolBar(compositeDown, SWT.RIGHT |SWT.FLAT);

		final ToolItem newItemToolItem = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem.setText(" + ");
		newItemToolItem.setToolTipText("加");

		newItemToolItem.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "+");
			}
		});

		final ToolItem newItemToolItem_1 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_1.setText(" - ");
		newItemToolItem_1.setToolTipText("减");
		newItemToolItem_1.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "-");
			}
		});

		final ToolItem newItemToolItem_2 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_2.setText(" * ");
		newItemToolItem_2.setToolTipText("乘");
		newItemToolItem_2.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "*");
			}
		});

		final ToolItem newItemToolItem_3 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_3.setText("div");
		newItemToolItem_3.setToolTipText("除");
		newItemToolItem_3.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "div");
			}
		});

		final ToolItem newItemToolItem_13 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_13.setText("mod");
		newItemToolItem_13.setToolTipText("求模");
		newItemToolItem_13.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "mod");
			}
		});

		final ToolItem newItemToolItem_4 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_4.setText(" | ");
		newItemToolItem_4.setToolTipText("节点集或");
		newItemToolItem_4.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "|");
			}
		});

		final ToolItem newItemToolItem_5 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_5.setText("and");
		newItemToolItem_5.setToolTipText("与");
		newItemToolItem_5.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "and");
			}
		});

		final ToolItem newItemToolItem_6 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_6.setText(" or ");
		newItemToolItem_6.setToolTipText("表达式或");
		newItemToolItem_6.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "or");
			}
		});

		final ToolItem newItemToolItem_7 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_7.setText(" = ");
		newItemToolItem_7.setToolTipText("等于");
		newItemToolItem_7.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "=");
			}
		});

		final ToolItem newItemToolItem_8 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_8.setText(" != ");
		newItemToolItem_8.setToolTipText("不等于");
		newItemToolItem_8.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "!=");
			}
		});

		final ToolItem newItemToolItem_9 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_9.setText(" > ");
		newItemToolItem_9.setToolTipText("大于");
		newItemToolItem_9.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, ">");
			}
		});

		final ToolItem newItemToolItem_10 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_10.setText(" >= ");
		newItemToolItem_10.setToolTipText("大于等于");
		newItemToolItem_10.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, ">=");
			}
		});

		final ToolItem newItemToolItem_11 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_11.setText(" < ");
		newItemToolItem_11.setToolTipText("小于");
		newItemToolItem_11.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "<");
			}
		});

		final ToolItem newItemToolItem_12 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_12.setText(" <= ");
		newItemToolItem_12.setToolTipText("小于等于");
		newItemToolItem_12.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.replaceTextRange(styledText.getCaretOffset(), 0, "<=");
			}
		});

		final ToolItem newItemToolItem_15 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_15.setText("添加");
		newItemToolItem_15.setImage(ImageManager.getIconByFileName("add.gif"));
		newItemToolItem_15.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent e) {
				if (treeViewerData.getTree().getSelection().length > 0) {
					DataRecord dataRecord = (DataRecord) treeViewerData.getTree().getSelection()[0].getData();
					String name = dataRecord.getString("name");
					String value = "";
					if (name != null && !name.equals("")) {
						value = name;
					} else {
						value = refStrategy.getRelationPath(dataRecord);
					}
					styledText.replaceTextRange(styledText.getCaretOffset(), 0, value);
				}
				if (treeViewerXpath.getTree().getSelection().length > 0) {
					DataRecord dataRecord = (DataRecord) treeViewerXpath.getTree().getSelection()[0].getData();
					String name = dataRecord.getString("name");
					String value = "";
					if (name != null && !name.equals("")) {
						value = name;
					} else {
						value = refStrategy.getRelationPath(dataRecord);
					}
					styledText.replaceTextRange(styledText.getCaretOffset(), 0, value);
				}
			}
		});

		final ToolItem newItemToolItem_14 = new ToolItem(toolBar, SWT.PUSH);
		newItemToolItem_14.setText("清除");
		newItemToolItem_14.setImage(ImageManager.getIconByFileName("remove.gif"));
		newItemToolItem_14.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent event) {
				styledText.setText("");
			}
		});

		styledText = new StyledText(compositeDown, SWT.BORDER | SWT.MULTI | SWT.V_SCROLL | SWT.H_SCROLL);
		styledText.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		initTextEditor();

		final Composite compositeUpXpath = new Composite(sashFormUp, SWT.NONE);
		GridLayout gridLayoutUpXpath = new GridLayout();
		gridLayoutUpXpath.marginHeight = 0;
		gridLayoutUpXpath.marginWidth = 0;
		compositeUpXpath.setLayout(gridLayoutUpXpath);

		final Label label9 = new Label(compositeUpXpath, SWT.NONE);
		label9.setText("xpath函数选择区(选择拖动到编辑区)");
		label9.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, false));

		filterText2 = new TextFilterComposite(compositeUpXpath, SWT.NONE, true) {
			@Override
			public void doFilter(String text) {
				if (treeViewerXpath != null) {
					treeViewerXpath.filter(filterText2.getFilterText());
				}
			}
		};

		treeViewerXpath = new DataSetTreeViewer(compositeUpXpath, SWT.BORDER);
		treeXpath = treeViewerXpath.getTree();
		treeXpath.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		initMidTreeViwer(treeViewerXpath);

		filterText2.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, false));
		filterText2.getText().addTraverseListener(new TraverseListener() {
			public void keyTraversed(TraverseEvent e) {
				if (e.keyCode == 16777218) {
					if (treeViewerXpath != null) {
						treeViewerXpath.getTree().setFocus();
						treeViewerXpath.getTree().select(treeViewerXpath.getTree().getItem(0));
					}
				} else if (e.keyCode == 16777217) {
					styledText.setFocus();
				}
			}
		});
		sashFormUp.setWeights(new int[] { 202, 289 });
		sashForm.setWeights(new int[] { 350, 100 });

	}

	private void initTextEditor() {

		styledText.addPaintListener(new PaintListener() {
			public void paintControl(PaintEvent e) {
				if (!painTextEditor) {
					styledText.setText(propData.getValue());
					painTextEditor = true;
				}
			}
		});

		styledText.addTraverseListener(new TraverseListener() {
			public void keyTraversed(TraverseEvent e) {
				if (e.keyCode == 16777218) {
					filterText2.getText().setFocus();
				}
			}
		});

		DropTarget dt = new DropTarget(styledText, DND.DROP_MOVE);
		dt.setTransfer(new Transfer[] { TextTransfer.getInstance() });
		dt.addDropListener(new DropTargetAdapter() {
			public void drop(DropTargetEvent event) {
				Point p = styledText.getSelection();
				styledText.replaceTextRange(p.x, 0, (String) event.data);
			}
		});
	}

	private void initMidTreeViwer(TreeViewer treeViewer) {
		DragSource ds = new DragSource(treeXpath, DND.DROP_MOVE);
		ds.setTransfer(new Transfer[] { TextTransfer.getInstance() });
		ds.addDragListener(new DragSourceAdapter() {
			public void dragSetData(DragSourceEvent event) {
				DataRecord record = (DataRecord) treeXpath.getSelection()[0].getData();
				String name = record.getString("name");
				if (name != null && !name.equals("")) {
					event.data = name;
				} else {
					event.data = refStrategy.getRelationPath(record);
				}
			}
		});
		treeViewer.getTree().addKeyListener(new KeyAdapter() {
			public void keyReleased(KeyEvent e) {
				if (e.keyCode == 102) {
					filterText2.getText().setFocus();
				}
			}
		});
		treeViewer.addSelectionChangedListener(new ISelectionChangedListener() {
			public void selectionChanged(SelectionChangedEvent event) {
				if (!treeViewerXpath.getSelection().isEmpty() && treeViewerXpath.getTree().getSelection().length != 0) {
					treeViewerData.setSelection(null);
				}
			}
		});
	}

	private void initDataTreeViwer(TreeViewer treeViewer) {
		DragSource ds = new DragSource(treeData, DND.DROP_MOVE);
		ds.setTransfer(new Transfer[] { TextTransfer.getInstance() });
		ds.addDragListener(new DragSourceAdapter() {
			public void dragSetData(DragSourceEvent event) {
				DataRecord record = (DataRecord) treeData.getSelection()[0].getData();
				String name = record.getString("name");
				if (name != null && !name.equals("")) {
					event.data = name;
				} else {
					event.data = refStrategy.getRelationPath(record);
				}
			}
		});
		treeViewer.getTree().addKeyListener(new KeyAdapter() {
			public void keyReleased(KeyEvent e) {
				if (e.keyCode == 102) {
					filterText1.getText().setFocus();
				}
			}
		});
		treeViewer.addSelectionChangedListener(new ISelectionChangedListener() {
			public void selectionChanged(SelectionChangedEvent event) {
				if (!treeViewerData.getSelection().isEmpty() && treeViewerData.getTree().getSelection().length != 0) {
					treeViewerXpath.setSelection(null);
				}
			}
		});
	}

	private DataSet createDataSet() {
		DataSet dataset = new DataSet();
		dataset.setFireDataChangedEvent(false);
		dataset.setDisplayStyle(DataSet.DISPLAY_STYLE_TREE);
		dataset.addColumn("nodeType", "nodeType", "string").setVisible(false);
		dataset.addColumn("name", "name", "string").setSearchField(true).setVisible(false);
		dataset.addColumn("text", "text", "string").setTreeColumn(true).setLength(1000);
		dataset.addColumn("asPath", "asPath", "string").setVisible(false);
		dataset.addColumn("image", "image", "string").setVisible(false);
		return dataset;
	}

	public DataSet getOperatorDataset() {
		dataset = createDataSet();
		String xpath = "xpath/operators";
		ExpressionUtil.getData(xpath, dataset);

		dataset.setFireDataChangedEvent(true);
		return dataset;
	}

	public DataSet getXlsFunctionDataset() {
		dataset = createDataSet();

		String xpath = "xpath/funcs";
		ExpressionUtil.getData(xpath, dataset);

		dataset.setFireDataChangedEvent(true);
		return dataset;
	}

	public DataSet getXformsFunctionDataset() {
		dataset = createDataSet();
		dataset.addRecord(new Object[] { "xformsfunction", "", "" });
		return dataset;
	}

	public DataSet getSysVarDataset() {
		dataset = createDataSet();

		DataRecord record1 = dataset.addRecord(new Object[] { "variable", "$BIZ-Param", "$BIZ-Param" });
		new DataRecord(new Object[] { "variable", "CurrentPerson" }, record1);

		DataRecord record2 = dataset.addRecord(new Object[] { "variable", "$BIZ-Param", "$BIZ-Param" });
		new DataRecord(new Object[] { "variable", "process" }, record2);
		new DataRecord(new Object[] { "variable", "activity" }, record2);
		return dataset;
	}

	public Object getReturnValue() {
		Map<String, String> map = new HashMap<String, String>();
		map.put(this.propData.getName(), styledText.getText());
		return map;
	}

	public String isValid() {
		return null;
	}

	public void setPropertyItem(PropertyItem propertyItem) {
		this.propData = propertyItem;
		RefPropertyDatasource ref = new RefPropertyDatasource();
		treeViewerData.setDataset(ref.getDatasource(propertyItem));
		treeViewerData.expandToLevel(2);
		treeViewerXpath.setDataset(getXlsFunctionDataset());
		treeViewerXpath.expandToLevel(2);
	}

	public void setReturnValueStrategy(IPropertyValueStrategy arg0) {
	}

	class TableLabelProvider extends LabelProvider implements ITableLabelProvider, IColorProvider {
		public String getColumnText(Object element, int columnIndex) {
			String[] data = (String[]) element;
			return data[columnIndex];
		}

		public Image getColumnImage(Object element, int columnIndex) {
			Image image = new Image(null, 1, 16);

			return image;
		}

		public Color getBackground(Object element) {
			return null;
		}

		public Color getForeground(Object element) {
			return null;
		}
	}

}
