//wrapper office API
function Office(OfficeControl){
  this.NEOSHINE_Office = OfficeControl;
  this.Desktop = null;
  this.ServiceManager = null;
  this.HeaderFooterTogether = true;
};

Office.prototype.GetNEOSHINE_Office=function(){
  return this.NEOSHINE_Office;
};

Office.prototype.GetServiceManager=function(){
  if(this.ServiceManager==null)
  this.ServiceManager = this.NEOSHINE_Office.ServiceManager;
  return this.ServiceManager;
};

//A simple shortcut to create a service
Office.prototype.CreateUnoService = function(strServiceName){
  var UnoService = this.GetServiceManager().createInstance(strServiceName);
  return UnoService;
};

Office.prototype.getDesktop = function(){
  if(this.Desktop==null){
    this.Desktop= this.CreateUnoService("com.sun.star.frame.Desktop");
  }
  return this.Desktop;
};

//get current plugin frame
Office.prototype.getPluginFrame = function(){
  return this.NEOSHINE_Office.getPluginFrame();
};

//get current active frame
Office.prototype.getCurrentFrame = function(){
  return this.getDesktop().getCurrentFrame();
};

Office.prototype.getController = function(){
  var xController = this.getPluginFrame().getController();
  return xController;
};

Office.prototype.getModel = function(){
  var xModel = this.getController().getModel();
  return xModel;
};

Office.prototype.executeDispatch = function(unoSlotName,PropertyValueArray){
  var dis = this.GetServiceManager().createInstance("com.sun.star.frame.DispatchHelper");
  return dis.executeDispatch(this.getPluginFrame(),unoSlotName,"",0,PropertyValueArray);
};

Office.prototype.MakePropertyValue =function(cName, uValue){
  var oPropertyValue = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.beans.PropertyValue");
  oPropertyValue.Name = cName;
  oPropertyValue.Value = uValue;
  return oPropertyValue;
};

//private:factory/swriter
Office.prototype.CreateNew = function(doctype){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  arr.setProperty(0,"ViewOnly",0,3);
  this.getPluginFrame().loadComponentFromURL(doctype,"_self",55,arr);
};

Office.prototype.CreatePrivate = function(doctype){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.getPluginFrame().loadComponentFromURL(doctype,"_self",55,arr);
};

Office.prototype.OpenDocument = function(FileName,nFlag){
	var ret = this.NEOSHINE_Office.DeleteTemplateFile(FileName);
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  if(nFlag)
    arr.setProperty(0,"ReadOnly",1,3);
  else
    arr.setProperty(0,"ReadOnly",0,3);
  this.getPluginFrame().loadComponentFromURL(FileName,"_self",55,arr);
};

Office.prototype.OpenDocumentPreview = function(FileName){
  var ret = this.NEOSHINE_Office.DeleteTemplateFile(FileName);
  var arr= this.NEOSHINE_Office.CreateSequence(28,2);
  arr.setProperty(0,"Preview",1,3);
  arr.setProperty(1,"ReadOnly",1,3);
  this.getPluginFrame().loadComponentFromURL(FileName,"_self",55,arr);
};

Office.prototype.Taohong = function(templatePath){
  var ret = this.NEOSHINE_Office.DeleteTemplateFile(templatePath);
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  arr.setProperty(0,"AsTemplate",1,3);
  this.getPluginFrame().loadComponentFromURL(templatePath,"_self",55,arr);
};

Office.prototype.ShowRecension = function(Flag){
  this.getModel().setPropertyValue("RedlineDisplayType",Flag);
};

Office.prototype.SwitchRecension = function(bFlag){
try
{
  this.getModel().setPropertyValue("RecordChanges",bFlag);
}
catch(e)
{
}
};

Office.prototype.getRecensionStatus = function(){
  return this.getModel().getPropertyValue("RecordChanges");
};

Office.prototype.ShowRecensionDialog = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  this.executeDispatch(".uno:AcceptTrackedChanges",arr);
};

Office.prototype.AcceptAllChanges = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  this.executeDispatch(".uno:AcceptAllTracedChange",arr);
};

Office.prototype.RejectAllChanges = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  this.executeDispatch(".uno:RejectAllTracedChange",arr);
};

Office.prototype.PrintRevisionWithCertainAuthor = function(Author,bAcceptOther){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  var oViewCursor = this.getController().getViewCursor();
  var oRedLines = this.getModel().getRedlines();
  var ncount = oRedLines.getCount();
  var startRange = oViewCursor.getStart();
  var nsuccessexe = 0;
  if (oRedLines.hasElements())
  {
    var aEnum = oRedLines.createEnumeration();
    while(aEnum.hasMoreElements())
    {
      var oRedLine = aEnum.nextElement();

      var redlineAuthor = oRedLine.getPropertyValue("RedlineAuthor");
      if(Author.trim() != redlineAuthor.trim())
      {
        oViewCursor.gotoRange(oRedLine.getPropertyValue("RedlineStart"), false);
        oViewCursor.gotoRange(oRedLine.getPropertyValue("RedlineEnd"), true);
        var redlineText = oViewCursor.getString();
        oViewCursor.goLeft(1,false);
        if(bAcceptOther)
          this.executeDispatch(".uno:AcceptTracedChange",arr);
        else
          this.executeDispatch(".uno:RejectTracedChange",arr);
        nsuccessexe++;
        aEnum = oRedLines.createEnumeration();
      }
    }
  }
  oViewCursor.gotoRange(startRange,false);
  // this.getModel().print(arr);//todo
  this.executeDispatch(".uno:PrintDefault",arr);
  for(var i=0;i<nsuccessexe;i++)
  {
    this.executeDispatch(".uno:Undo",arr);
  }
};

Office.prototype.FilterCertainAuthor = function(Author,bAccept){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  var oViewCursor = this.getController().getViewCursor();
  var oRedLines = this.getModel().getRedlines();
  var ncount = oRedLines.getCount();
  var startRange = oViewCursor.getStart();
  if (oRedLines.hasElements())
  {
    var aEnum = oRedLines.createEnumeration();
    while(aEnum.hasMoreElements())
    {
      var oRedLine = aEnum.nextElement();

      var redlineAuthor = oRedLine.getPropertyValue("RedlineAuthor");
      if(Author.trim() == redlineAuthor.trim())
      {
        oViewCursor.gotoRange(oRedLine.getPropertyValue("RedlineStart"), false);
        oViewCursor.gotoRange(oRedLine.getPropertyValue("RedlineEnd"), true);
        var redlineText = oViewCursor.getString();
        oViewCursor.goLeft(1,false);
        if(bAccept)
          this.executeDispatch(".uno:AcceptTracedChange",arr);
        else
          this.executeDispatch(".uno:RejectTracedChange",arr);
        aEnum = oRedLines.createEnumeration();
      }

    }
  }
  oViewCursor.gotoRange(startRange,false);
};

Office.prototype.GetAllRevisions = function(){
  var oViewCursor = this.getController().getViewCursor();
  var oRedLines = this.getModel().getRedlines();
  var ncount = oRedLines.getCount();
  var sDum="";
  var separator = "&";
  var bracketsLeft = "[";
  var bracketsRight = "]";
  var quotationMarks = "\\";
  // sDum += bracketsLeft;
  var startRange = oViewCursor.getStart();
  for(var i=0;i< ncount ;i++)
  {
    var oRedLine = oRedLines.getByIndex(i);
    oViewCursor.gotoRange(oRedLine.getPropertyValue("RedlineStart"), false);
    oViewCursor.gotoRange(oRedLine.getPropertyValue("RedlineEnd"), true);
    var redlineText = oViewCursor.getString();

    // var identify = oRedLine.getPropertyValue("RedlineIdentifier");
    var redlineAuthor = oRedLine.getPropertyValue("RedlineAuthor");
    var redlineDataTime = oRedLine.getPropertyValue("RedlineDateTime");
    var redlineType = oRedLine.getPropertyValue("RedlineType");

    sDum += bracketsLeft;

    // sDum += identify;
    // sDum += quotationMarks;
    // sDum += separator;

    // sDum += quotationMarks;
    sDum += redlineText;
    // sDum += quotationMarks;
    sDum += separator;

    // sDum += quotationMarks;
    sDum += redlineAuthor;
    // sDum += quotationMarks;
    sDum += separator;

    // sDum += quotationMarks;
    sDum += redlineDataTime.Year;
    sDum += "/";
    sDum += redlineDataTime.Month;
    sDum += "/";
    sDum += redlineDataTime.Day;
    sDum += " ";
    sDum += redlineDataTime.Hours;
    sDum += ":";
    sDum += redlineDataTime.Minutes;
    //sDum += ":";
    // sDum += redlineDataTime.Seconds;
    // sDum += quotationMarks;
    sDum += separator;

    // sDum += quotationMarks;
    sDum += redlineType;
    // sDum += quotationMarks;
    // sDum += separator;
    sDum += bracketsRight;
  }
  oViewCursor.gotoRange(startRange,false);
  return sDum;
};

Office.prototype.SetRecensionInfo = function(UserName){
  var sProvider = "com.sun.star.configuration.ConfigurationProvider";
  var sAccess = "com.sun.star.configuration.ConfigurationUpdateAccess";
  var oConfigProvider = this.CreateUnoService(sProvider);
  var arr = new Array(1);
  arr[0] = this.MakePropertyValue("nodepath","/org.openoffice.UserProfile/Data");
  var oSet = oConfigProvider.createInstanceWithArguments(sAccess, arr);
  oSet.setPropertyValue("givenname",UserName);
  oSet.commitChanges();
};

Office.prototype.GetRecensionInfo = function(){
  var sProvider = "com.sun.star.configuration.ConfigurationProvider";
  var sAccess = "com.sun.star.configuration.ConfigurationAccess";
  var oConfigProvider = this.CreateUnoService(sProvider);
  var arr = new Array(1);
  arr[0] = this.MakePropertyValue("nodepath","/org.openoffice.UserProfile/Data");
  var oSet = oConfigProvider.createInstanceWithArguments(sAccess, arr);
  return oSet.getByName("givenname");
};

Office.prototype.HideToolbar = function(toolbarName){
  var xLayoutManager =
  this.getPluginFrame().getPropertyValue("LayoutManager");
  var sToolbarName = "private:resource/toolbar/"+toolbarName;
  var bShow = xLayoutManager.isElementVisible(sToolbarName);  
  if(bShow)
  {
     xLayoutManager.lock();
     xLayoutManager.hideElement(sToolbarName);
     xLayoutManager.unlock();
  }
};

Office.prototype.ShowToolbar = function(toolbarName){
  var xLayoutManager = this.getPluginFrame().getPropertyValue("LayoutManager");
  var sToolbarName = "private:resource/toolbar/"+toolbarName;
  var bShow = xLayoutManager.isElementVisible(sToolbarName);
  if(!bShow)
  {
    xLayoutManager.lock();
    if(!xLayoutManager.showElement(sToolbarName))
    {
      xLayoutManager.createElement(sToolbarName);
      xLayoutManager.showElement(sToolbarName);
    }
    xLayoutManager.unlock();
  }
};

Office.prototype.ShowMenubar = function(menubarName){
  var xLayoutManager = this.getPluginFrame().getPropertyValue("LayoutManager");
  var sMenubarName = "private:resource/menubar/"+menubarName;
  var bShow = xLayoutManager.isElementVisible(sMenubarName);
  if(!bShow)
  {
    this.getModel().lockControllers();
    xLayoutManager.showElement(sMenubarName);
    this.getModel().unlockControllers();
  }
};

Office.prototype.HideMenubar = function(menubarName){
  var xLayoutManager = this.getPluginFrame().getPropertyValue("LayoutManager");
  var sMenubarName = "private:resource/menubar/"+menubarName;
  var bShow = xLayoutManager.isElementVisible(sMenubarName);
  if(bShow)
  {
    this.getModel().lockControllers();
    xLayoutManager.hideElement(sMenubarName);
    this.getModel().unlockControllers();
  }
};

Office.prototype.IsModified = function(){
  return this.getModel().isModified();
};

Office.prototype.SetModified = function(bModified){
  this.getModel().setModified(bModified);
};

Office.prototype.IsReadOnly = function(){
  return this.getModel().isReadonly();
};

Office.prototype.IsLocation = function(){
  return this.getModel().hasLocation();
};

Office.prototype.SetReadOnly = function(bReadOnly){
  if (this.IsLocation() == false) return true;
  if (bReadOnly == this.IsReadOnly()) return true;

  if (bReadOnly)
  {
    var arr= this.NEOSHINE_Office.CreateSequence(28,1);
    this.executeDispatch(".uno:EditDoc",arr);

    this.UpdateContextMenu("remove", "编辑(~E)", "");
    this.EnableUnoID(".uno:EditDoc", false, false);
  }
  else
  {
    this.UpdateContextMenu("add", "编辑(~E)", "");
    this.EnableUnoID(".uno:EditDoc", true, false);

    var arr= this.NEOSHINE_Office.CreateSequence(28,1);
    this.executeDispatch(".uno:EditDoc",arr);
  }
  return true;
};

Office.prototype.GetFileURL = function(){
  return this.getModel().getURL();
};

Office.prototype.GetFileTitle = function(){
  return this.getModel().getTitle();
};

Office.prototype.OpenFromURL = function(URL,ReadOnly){ 
	var ret = this.NEOSHINE_Office.DeleteTemplateFile(URL);
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  if(ReadOnly)
    arr.setProperty(0,"ReadOnly",1,3);
  //else
    //arr.setProperty(0,"ReadOnly",0,3);
  this.getPluginFrame().loadComponentFromURL(URL,"_self",55,arr);
};

Office.prototype.Save = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.executeDispatch(".uno:Save", arr);
};

Office.prototype.SaveAs = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.executeDispatch(".uno:SaveAs", arr);
};

//doctype:writer8,writer8_template,MS Word 97,impress8,calc8,calc8_template
Office.prototype.SaveAsOtherFormatToURL = function(URL,doctype){
  var arr= this.NEOSHINE_Office.CreateSequence(28,2);
  arr.setProperty(0,"FilterName",doctype,1);
  arr.setProperty(1,"Overwrite",1,3);
  this.getModel().storeAsURL(URL,arr);
};

Office.prototype.Close = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  this.executeDispatch(".uno:CloseWin",arr);
};

Office.prototype.FindAndReplaceText = function(URL1, URL2){
  if (this.IsReadOnly())
    return false;
  else
  {
    var xReplaceDescriptor = this.getModel().createReplaceDescriptor();
    xReplaceDescriptor.setSearchString(URL1);
    xReplaceDescriptor.setReplaceString(URL2);
    xReplaceDescriptor.setPropertyValue("SearchCaseSensitive", true);
    return this.getModel().replaceAll(xReplaceDescriptor);
  }
};

Office.prototype.ShowSearchDialog = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.executeDispatch(".uno:SearchDialog", arr);
};

Office.prototype.SetFontHeight = function(Height){
  var arr= this.NEOSHINE_Office.CreateSequence(28,3);
  arr.setProperty(0,"FontHeight.Height",Height,2);
  arr.setProperty(1,"FontHeight.Prop",100,2);
  arr.setProperty(2,"FontHeight.Diff",0,2);
  this.executeDispatch(".uno:FontHeight",arr);
};

Office.prototype.SetFirstLineIndent = function(LineIndent){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  arr.setProperty(0,"LeftRightMargin.FirstLineIndent",LineIndent,2);
  this.executeDispatch(".uno:LeftRightMargin",arr);
};

Office.prototype.SetParagraphSpacing = function(ParagraphSpacing){
  var xStyleFamiliesSupplier = this.getModel().getStyleFamilies();
  var xParagraphStyles = xStyleFamiliesSupplier.getByName("ParagraphStyles");

  var xStyle = xParagraphStyles.getByName("Standard");
  var aSpaceing = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.style.LineSpacing");
  aSpaceing.Mode = 0;
  aSpaceing.Height = ParagraphSpacing;

  xStyle.setPropertyValue("ParaLineSpacing",aSpaceing);
};

Office.prototype.SetFontName = function(FontName){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  arr.setProperty(0,"CharFontName.FamilyName",FontName,1);
  this.executeDispatch(".uno:CharFontName",arr);
};

Office.prototype.GetOfficeVersion = function(){
  var sProvider = "com.sun.star.configuration.ConfigurationProvider";
  var sAccess = "com.sun.star.configuration.ConfigurationAccess";
  var oConfigProvider = this.CreateUnoService(sProvider);
  var arr = new Array(1);
  arr[0] = this.MakePropertyValue("nodepath","/org.openoffice.Setup/Office");
  var oSet = oConfigProvider.createInstanceWithArguments(sAccess, arr);
  return oSet.getByName("LastCompatibilityCheckID");
};

Office.prototype.ShowPageSetDialog = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  this.executeDispatch(".uno:PageDialog",arr);
};

Office.prototype.InsertPageNumber = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);

  this.executeDispatch(".uno:InsertPageNumberField",arr);
};

Office.prototype.InsertPageHeader = function(){
	if( this.HeaderFooterTogether ) 	
	{
		var arr= this.NEOSHINE_Office.CreateSequence(28,0);
		this.executeDispatch(".uno:InsertPageHeaderAndFooter",arr);
	}
	else
	{
		var arr= this.NEOSHINE_Office.CreateSequence(28,2);
		arr.setProperty(0,"PageStyle","默认",1);
		arr.setProperty(1,"On",1,3);
		this.executeDispatch(".uno:InsertPageHeader",arr);
	}
};

Office.prototype.InsertPageFooter = function(){
	if( this.HeaderFooterTogether )
	{
		var arr= this.NEOSHINE_Office.CreateSequence(28,0);
		this.executeDispatch(".uno:InsertPageHeaderAndFooter",arr);
		this.executeDispatch(".uno:DisplayHeaderOrFooter",arr);		
	}
	else
	{
		var arr= this.NEOSHINE_Office.CreateSequence(28,2);
		arr.setProperty(0,"PageStyle","默认",1);
		arr.setProperty(1,"On",1,3);
		this.executeDispatch(".uno:InsertPageFooter",arr);
	}
};

Office.prototype.InsertTime = function(sFormat){
  var xNumberFormats = this.getModel().getNumberFormats();
  var nLocale = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.lang.Locale");

  var nNewLocale = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.lang.Locale");
  nNewLocale.Language = "zh";
  nNewLocale.Country = "CN";
  nNewLocale.Variant = "POSIX";

  nLocale.Language = "zh";
  nLocale.Country = "CN";
  nLocale.Variant = "POSIX";
  var lkey = xNumberFormats.queryKey(sFormat,nLocale,true);
  if(lkey <0)
    lKey = xNumberFormats.addNewConverted(sFormat, nLocale, nNewLocale);

  var arr= this.NEOSHINE_Office.CreateSequence(28,6);
  arr.setProperty(0,"Type",0,2);
  arr.setProperty(1,"SubType",0,2);
  arr.setProperty(2,"Name"," ",1);
  arr.setProperty(3,"Content","0",1);
  arr.setProperty(4,"Format",lkey,2);
  arr.setProperty(5,"Separator"," ",1);
  this.executeDispatch(".uno:InsertField",arr);
};

Office.prototype.InsertTextAtCurrentCursor = function(Title){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  arr.setProperty(0,"Text",Title,1);
  this.executeDispatch(".uno:InsertText",arr);
};

//about BookMarks stt
Office.prototype.RenameBookmark = function(oldBookmark,newBookmark){
  var oBookMarks = this.getModel().getBookmarks();
  if(oBookMarks.hasByName(oldBookmark))
  {
    var xNamed = oBookMarks.getByName(oldBookmark);
    xNamed.setName(newBookmark);
  }
};

Office.prototype.CursorToBookmark = function(aBookmarkName){
  var oBookMarks = this.getModel().getBookmarks();
  if(oBookMarks.hasByName(aBookmarkName))
  {
    var xTextContent = oBookMarks.getByName(aBookmarkName);
    var oViewCursor = this.getController().getViewCursor();
    oViewCursor.gotoRange(xTextContent.getAnchor().getStart(),false);
    //oViewCursor.goRight(1,false);
    return xTextContent;
  }
};

Office.prototype.InsertDocToBookmark = function(aBookmarkName,FileDoc,doctype){
  this.getModel().lockControllers();
  this.SetBookMarks(aBookmarkName,"  ");
  var oViewCursor = this.getController().getViewCursor();
  this.CursorToBookmark(aBookmarkName);
  oViewCursor.goRight(1,false);
  this.InsertDocDispatch(FileDoc,doctype);
  if(doctype=="MS Word 97")
  {
    this.CursorToBookmark(aBookmarkName);
    oViewCursor.goRight(1,false);
    var arr= this.NEOSHINE_Office.CreateSequence(28,1);
    this.executeDispatch(".uno:delete",arr);
    this.Backspaces();
    var bookcursor = this.CursorToBookmark(aBookmarkName);
   
    oViewCursor.gotoRange(bookcursor.getAnchor().getEnd(),false);
    //oViewCursor.goLeft(1,false);
    this.Backspaces();
    this.Backspaces();
   
  }
  this.getModel().unlockControllers();
  /*this.SetBookMarks(aBookmarkName,"  ");
  var oViewCursor = this.getController().getViewCursor();
  this.CursorToBookmark(aBookmarkName);
  oViewCursor.goRight(1,false);
  this.InsertDoc(FileDoc,doctype);
  this.CursorToBookmark(aBookmarkName);
  if(bNeedBack){
   oViewCursor.goRight(1,false);
   this.Backspaces();
  }*/
  /*
  this.SetBookMarks(aBookmarkName,"  ");
  var oViewCursor = this.getController().getViewCursor();
  this.CursorToBookmark(aBookmarkName);
  oViewCursor.goRight(1,false);
  var arr= this.NEOSHINE_Office.CreateSequence(28,2);
  arr.setProperty(0,"Hidden",0,3);
  arr.setProperty(1,"FilterName",doctype,1);
  var ret = this.NEOSHINE_Office.DeleteTemplateFile(FileDoc);
  var doc = this.getDesktop().loadComponentFromURL(FileDoc,"_blank",0,arr);
  var dis = this.GetServiceManager().createInstance("com.sun.star.frame.DispatchHelper");
  var PropertyValueArray = this.NEOSHINE_Office.CreateSequence(28,0);
  dis.executeDispatch(doc.getCurrentController().getFrame(),".uno:SelectAll","", 0,PropertyValueArray);
  dis.executeDispatch(doc.getCurrentController().getFrame(),".uno:Copy","", 0,PropertyValueArray);
  doc.close(true);
 
  dis.executeDispatch(this.getPluginFrame(),".uno:Paste","",0,PropertyValueArray);
  this.CursorToBookmark(aBookmarkName);
  oViewCursor.goRight(1,false);
  this.Backspaces();*/
};

Office.prototype.Backspaces = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,1);
  this.executeDispatch(".uno:SwBackspace",arr);
};

Office.prototype.SetBookMarks = function(Name, Value){
  if (this.IsReadOnly())
    return false;
  else
  {
    var xNameAccess = this.getModel().getBookmarks();
    if(!xNameAccess.hasByName(Name))
      return false;

    var xTextRange = xNameAccess.getByName(Name).getAnchor();
    var xText = xTextRange.getText();
    xText.removeTextContent(xNameAccess.getByName(Name));

    xTextRange.setString(Value);
    var Cursor = this.getModel().getCurrentController().getViewCursor();
    Cursor.gotoRange(xTextRange, false);
    var arr= this.NEOSHINE_Office.CreateSequence(28,1);
    arr.setProperty(0,"Bookmark",Name,1);
    this.executeDispatch(".uno:InsertBookmark", arr);
    return true;
  }
};

Office.prototype.CreateBookmarkAtSelection = function(Name){
  if (this.IsReadOnly())
    return false;
  else
  {
    var arr= this.NEOSHINE_Office.CreateSequence(28,1);
    arr.setProperty(0,"Bookmark",Name,1);
    this.executeDispatch(".uno:InsertBookmark", arr);
    var oViewCursor = this.getController().getViewCursor();
    oViewCursor.goRight(1,false);
    this.InsertTextAtCurrentCursor(" ");
    this.Backspaces();
  }
};

Office.prototype.DelBookmark = function(Name){
  if (this.IsReadOnly())
    return false;
  else
  {
    var arr= this.NEOSHINE_Office.CreateSequence(28,1);
    arr.setProperty(0,"Bookmark",Name,1);
    this.executeDispatch(".uno:DeleteBookmark", arr);
  }
};

Office.prototype.GetBookmarkText = function(Name){
  var xNameAccess = this.getModel().getBookmarks();
  if(!xNameAccess.hasByName(Name))
    return false;

  var xTextRange = xNameAccess.getByName(Name).getAnchor();
  return xTextRange.getString();
};

Office.prototype.GetAllBookmarks = function(){
  var xNameAccess = this.getModel().getBookmarks();

  var names = xNameAccess.getElementNames();
  var iArrayLen = names.getLength();
  var arrRet=new Array(iArrayLen);
  for (i=0;i<iArrayLen;i++)
  {
    arrRet[i] = names.getElement(i);
  }

  return arrRet;
};

Office.prototype.ReplaceBookmarkWithPicture = function(Name, PicURL,width, height){
  if (this.IsReadOnly())
    return false;
  else
  {
    if(this.SetBookMarks(Name,"  "))
    {
      var oViewCursor = this.getController().getViewCursor();
      this.CursorToBookmark(Name);
      oViewCursor.goRight(1,false);
      this.InsertImageAtSelection(PicURL,width,height);
    }
    else
    {
      return false;
    }
  }
};

Office.prototype.HasBookMark = function(Name){
  var xNameAccess = this.getModel().getBookmarks();
  if(!xNameAccess.hasByName(Name))
    return false;
  else
    return true;
}

//about BookMarks end
Office.prototype.getDocumentText = function(){
  return this.getModel().getText().getString();
};

Office.prototype.PutRemoteContent = function(URL1, URL2){
var OfficeContent = this.GetNEOSHINE_Office();
OfficeContent.PutRemoteContent(URL1,URL2);
};

Office.prototype.GetRemoteContent = function(URL1, URL2){
	var OfficeContent = this.GetNEOSHINE_Office();
	OfficeContent.GetRemoteContent(URL1,URL2);
};

Office.prototype.GetRemoteContentNoOpen = function(URL1, URL2){
var OfficeContent = this.GetNEOSHINE_Office();
OfficeContent.GetRemoteContentNoOpen(URL1,URL2);
};

Office.prototype.OpenRemoteDocument = function(URL1, ReadOnly){
var OfficeContent = this.GetNEOSHINE_Office();
OfficeContent.OpenRemoteDocument(URL1,ReadOnly);
};

Office.prototype.HttpInit = function(){
var OfficeContent = this.GetNEOSHINE_Office();
OfficeContent.HttpInit();
};

Office.prototype.HttpAddPostFile = function(Name,URL){
var OfficeContent = this.GetNEOSHINE_Office();
OfficeContent.HttpAddPostFile(Name,URL);
};

Office.prototype.HttpAddPostString = function(Name,Value){
var OfficeContent = this.GetNEOSHINE_Office();
OfficeContent.HttpAddPostString(Name,Value);
};

Office.prototype.HttpPost = function(URL){
var OfficeContent = this.GetNEOSHINE_Office();
OfficeContent.HttpPost(URL);
};

Office.prototype.SavePDF = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.executeDispatch(".uno:ExportDirectToPDF", arr);
};

Office.prototype.exportPDF = function(URL){//URL example:
  "file:///home/liuy/workspace/pdfexporttest.pdf"
  var arr= this.NEOSHINE_Office.CreateSequence(28,2);
  arr.setProperty(0,"URL",URL,1);
  arr.setProperty(1,"FilterName","writer_pdf_Export",1);
  this.executeDispatch(".uno:ExportDirectToPDF", arr);
};

Office.prototype.Print = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.executeDispatch(".uno:PrintDefault", arr);
};

Office.prototype.ShowPrintDialog = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.executeDispatch(".uno:Print", arr);
};

Office.prototype.PrintPreview = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.executeDispatch(".uno:PrintPreview", arr);
};

/*
* @param sPage 页数 =0(全部)，=数字(页数),=x-x(范围) (excel只能为数字)
* @param nCount 份数
* @param nPaperOrientation 进纸方向 =0(纵向) =1(横向)
* @param nPaperFormat 纸型 =0(A3) =1(A4) =2(A5) =3(B4) =4(B5) =5(LETTER) =6(LEGAL) =7(TABLOID) =8(USER)
* @param nPagerWidth 纸宽 单位1/1000厘米
* @param nPagerHeight 纸高 单位1/1000厘米
*/
Office.prototype.OpenPrint = function(nCount,sPage,nPaperOrientation,nPaperFormat,nPagerWidth,nPagerHeight)
{
  var PrinterDescriptor = this.NEOSHINE_Office.CreateSequence(28,3);

  var size = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.awt.Size");
  size.Width = nPagerWidth;
  size.Height = nPagerHeight;

  PrinterDescriptor.setProperty(0,"PaperOrientation",nPaperOrientation,2);
  PrinterDescriptor.setProperty(1,"PaperFormat",nPaperFormat,2);
  PrinterDescriptor.setProperty(2,"PaperSize",size,4);

  this.getModel().setPrinter(PrinterDescriptor);

  if(sPage == "0")
  {
    var arr= this.NEOSHINE_Office.CreateSequence(28,1);
    arr.setProperty(0,"CopyCount",nCount,2);   
    this.getModel().print(arr);
  }
  else
  {
    var arr= this.NEOSHINE_Office.CreateSequence(28,2);
    arr.setProperty(0,"Pages",sPage,1);
    arr.setProperty(1,"CopyCount",nCount,2); 
    this.getModel().print(arr);
  }
};

Office.prototype.InsertTableAtSelection = function(TableName,ColumnCount,RowCount){
  if (this.IsReadOnly())
    return false;
  else
  {
    var arr= this.NEOSHINE_Office.CreateSequence(28,4);
    arr.setProperty(0,"TableName",TableName,1);
    arr.setProperty(1,"Columns",ColumnCount,2);
    arr.setProperty(2,"Rows",RowCount,2);
    arr.setProperty(3,"Flags",11,2);
    this.executeDispatch(".uno:InsertTable", arr);
  }
};

Office.prototype.RemoveTable = function(TableName){
  if (this.IsReadOnly())
    return false;
  else
  {
    if(this.CursorToCell(TableName,1,1))
    {
      var arr= this.NEOSHINE_Office.CreateSequence(28,1);
      arr.setProperty(0,"TableName",TableName,1);
      this.executeDispatch(".uno:DeleteTable", arr);
      return true;
    }
    else
      return false;
  }
};

Office.prototype.SetCellContent = function(TableName,ColumnCount,RowCount,Context){
  var xNameAccess = this.getModel().getTextTables();
  if(xNameAccess.hasByName(TableName))
  {
    var xTextTable = xNameAccess.getByName(TableName);
    if(RowCount < 1 || RowCount > xTextTable.getRows().getCount() || ColumnCount < 1 || ColumnCount > xTextTable.getColumns().getCount())
    {
      return false;
    }
    var xCell = xTextTable.getCellByPosition((ColumnCount-1),(RowCount-1));
    var xViewCursor = this.getController().getViewCursor();
    xViewCursor.gotoRange(xCell,false);
    var cellProperties = xViewCursor.getPropertyValue("Cell");
    var ProtectedProperties = cellProperties.getPropertyValue("IsProtected");
    if(ProtectedProperties)
      return false;
    else
    {
      xCell.setString(Context);
      return true;
    }
  }
  else
    return false;
};

Office.prototype.GetCellContent = function(TableName,ColumnCount,RowCount){
  var xNameAccess = this.getModel().getTextTables();
  if(xNameAccess.hasByName(TableName))
  {
    var xTextTable = xNameAccess.getByName(TableName);
    if(RowCount < 1 || RowCount > xTextTable.getRows().getCount() || ColumnCount < 1 || ColumnCount > xTextTable.getColumns().getCount())
    {
      return false;
    }
    var xCell = xTextTable.getCellByPosition((ColumnCount-1),(RowCount-1));

    return xCell.getString();
  }
  else
    return false;
};

Office.prototype.SetCellProtected = function(TableName,ColumnCount,RowCount,IsProtected){
  if (this.IsReadOnly())
    return false;
  else
  {
    if(this.CursorToCell(TableName,ColumnCount,RowCount))
    {
      var arr= this.NEOSHINE_Office.CreateSequence(28,0);
      if(IsProtected)
        this.executeDispatch(".uno:Protect", arr);
      else
        this.executeDispatch(".uno:UnsetCellsReadOnly", arr);
    }
  }
};

Office.prototype.SetTableBorderVisible = function(TableName,IsVisible){
  if (this.IsReadOnly())
    return false;
  else
  {
    var xNameAccess = this.getModel().getTextTables();
    if(xNameAccess.hasByName(TableName))
    {
      var xTextTable = xNameAccess.getByName(TableName);

      var borderLine = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.table.BorderLine");
      borderLine.Color = 0x000000;
      if(!IsVisible)
        borderLine.OuterLineWidth = 0 ;
      else
        borderLine.OuterLineWidth = 1 ;

      var tableBorder = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.table.TableBorder");
      tableBorder.BottomLine = tableBorder.HorizontalLine =
      tableBorder.LeftLine = tableBorder.RightLine = tableBorder.TopLine =
      tableBorder.VerticalLine = borderLine;

      tableBorder.IsVerticalLineValid = tableBorder.IsHorizontalLineValid =
      tableBorder.IsLeftLineValid = tableBorder.IsRightLineValid =
      tableBorder.IsTopLineValid = tableBorder.IsBottomLineValid = true;

      xTextTable.setPropertyValue("TableBorder",tableBorder);
      return true;
    }
    else
      return false;
  }
};

/*Office.prototype.InsertImageAtSelectionTail = function(URL){
  if (this.IsReadOnly())
    return false;
  else
  {
    var arr= this.NEOSHINE_Office.CreateSequence(28,4);
    arr.setProperty(0,"FileName",URL,1);
    arr.setProperty(1,"FilterNames","<所有的格式>",1);
    arr.setProperty(2,"AsLink",0,3);
    arr.setProperty(3,"Style","图形",1);
    this.executeDispatch(".uno:InsertGraphic", arr);
  }
};*/

Office.prototype.InsertImageAtSelection = function(URL,width,height){
  if (this.IsReadOnly())
    return false;
  else
  {
    var xTextRange = this.getModel().getCurrentController().getViewCursor();
    var xTextPicture = xTextRange.getText();
    var xShape = this.getModel().createInstance("com.sun.star.drawing.GraphicObjectShape");

    var size = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.awt.Size");
    size.Width = width;
    size.Height = height;
    xShape.setSize(size);

    var xGraphicProvider = this.CreateUnoService("com.sun.star.graphic.GraphicProvider");
    var propertyValue = this.NEOSHINE_Office.CreateSequence(28,1);
    propertyValue.setProperty(0,"URL",URL,1);
    var xGraphic = xGraphicProvider.queryGraphic(propertyValue);
    xShape.setPropertyValue("Graphic", xGraphic);
    xTextPicture.insertTextContent(xTextRange,xShape,true);
  }
};

Office.prototype.SearchText = function(SText, bForward){
  var desktop = this.getDesktop();
  var component = desktop.getCurrentComponent();
  var searcher = component.createSearchDescriptor();
  if(!bForward)
    searcher.setPropertyValue("SearchBackwards", true);
  searcher.setSearchString(SText);
  var range = this.getModel().getCurrentController().getViewCursor();
  try
  {
    if(bForward)
      range = component.findNext(range.getEnd(),searcher);
    else
      range = component.findNext(range.getStart(),searcher);
    var xText = range.getText();
    var xTextCursor = xText.createTextCursorByRange(range);
    var controller = component.getCurrentController();
    controller.select(xTextCursor);
  }
  catch(e)
  {
    if(bForward)
      range = component.findFirst(searcher);
    else
    {
      range = component.findNext(this.getModel().getText().getEnd(),searcher);
    }
    var xText = range.getText();
    var xTextCursor = xText.createTextCursorByRange(range);
    var controller = component.getCurrentController();
    controller.select(xTextCursor);
  }
};

Office.prototype.CursorToCell = function(TableName,ColumnCount,RowCount){
  var xNameAccess = this.getModel().getTextTables();
  if(xNameAccess.hasByName(TableName))
  {
    var xTextTable = xNameAccess.getByName(TableName);
    if(RowCount < 1 || RowCount > xTextTable.getRows().getCount() || ColumnCount < 1 || ColumnCount > xTextTable.getColumns().getCount())
    {
      return false;
    }
    var xCell = xTextTable.getCellByPosition((ColumnCount-1),(RowCount-1));
    var xViewCursor = this.getController().getViewCursor();
    xViewCursor.gotoRange(xCell,false);
    return true;
  }
  else
    return false;
};

Office.prototype.InsertImageDialog = function(){
  if (this.IsReadOnly())
    return false;
  else
  {
    var arr= this.NEOSHINE_Office.CreateSequence(28,0);
    this.executeDispatch(".uno:InsertGraphic", arr);
  }
};

Office.prototype.InsertTableDialog = function(){
  if (this.IsReadOnly())
    return false;
  else
  {
    var arr= this.NEOSHINE_Office.CreateSequence(28,0);
    this.executeDispatch(".uno:InsertTable", arr);
  }
};

Office.prototype.RenameTable = function(oldTableName, newTableName){
  if (this.IsReadOnly())
    return false;
  else
  {
    var xNameAccess = this.getModel().getTextTables();
    if(xNameAccess.hasByName(oldTableName))
    {
      var xTextTable = xNameAccess.getByName(oldTableName);
      xTextTable.setName(newTableName);
      return true;
    }
    else
      return false;
  }
};

Office.prototype.GetAllTables = function(){
  var xNameAccess = this.getModel().getTextTables();
  var names = xNameAccess.getElementNames();
  var iArrayLen = names.getLength();
  var arrRet=new Array(iArrayLen);
  for (i=0;i<iArrayLen;i++)
  {
    arrRet[i] = names.getElement(i);
  }

  return arrRet;
};

Office.prototype.AddColums = function(TableName,Index,Count){
  if (this.IsReadOnly())
    return false;
  else
  {
    var xNameAccess = this.getModel().getTextTables();
    if(xNameAccess.hasByName(TableName))
    {
      var xTextTable = xNameAccess.getByName(TableName);
      if(Index > xTextTable.getColumns().getCount() || 70 - xTextTable.getColumns().getCount() < Count)
      {
        return sal_False;
      }
      xTextTable.getColumns().insertByIndex(Index, Count);
      return true;
    }
    else
      return false;
  }
};

Office.prototype.AddRows = function(TableName,Index,Count){
  if (this.IsReadOnly())
    return false;
  else
  {
    var xNameAccess = this.getModel().getTextTables();
    if(xNameAccess.hasByName(TableName))
    {
      var xTextTable = xNameAccess.getByName(TableName);
      if(Index > xTextTable.getRows().getCount())
      {
        return sal_False;
      }
      xTextTable.getRows().insertByIndex(Index, Count);
      return true;
    }
    else
      return false;
  }
};

Office.prototype.InsertTextFrame = function(){
};

Office.prototype.GetType = function(){
};

Office.prototype.SaveAsPic = function(){
};

Office.prototype.BrowsePDFInFirefox = function(PDFSaveURL){
  //var winchild=window.open(PDFSaveURL,"_bland");
  	var url=encodeURI(PDFSaveURL);
	netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
	var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	file.initWithPath('/usr/bin/firefox');
	var process=Components.classes['@mozilla.org/process/util;1'].createInstance(Components.interfaces.nsIProcess);
	process.init(file);
	var arguments = [url];
	process.run(false,arguments,arguments.length);
};

//doctype:writer8,writer8_template,MS Word 97,impress8,calc8,calc8_template ...
Office.prototype.InsertDocDispatch = function(FileURL,doctype){
  var arr= this.NEOSHINE_Office.CreateSequence(28,2);
  arr.setProperty(0,"Name",FileURL,1);
  arr.setProperty(1,"Filter",doctype,1);
  this.executeDispatch(".uno:InsertDoc",arr);
};

Office.prototype.InsertDoc = function(FileURL,doctype){
  if(doctype=="MS Word 97")
  { 
    this.getModel().lockControllers();
    var oViewCursor = this.getController().getViewCursor();
    this.InsertTextAtCurrentCursor("  ");
    oViewCursor.goLeft(2,false);
    //this.InsertTextAtCurrentCursor(" ");
    this.CreateBookmarkAtSelection("PosSttInsertDoc");
    this.InsertDocDispatch(FileURL,doctype);
    this.CreateBookmarkAtSelection("PosEndInsertDoc");
    
    
    this.CursorToBookmark("PosSttInsertDoc");
    oViewCursor.goRight(1,false);    
    var arr= this.NEOSHINE_Office.CreateSequence(28,1);
    this.executeDispatch(".uno:delete",arr);
    this.DelBookmark("PosSttInsertDoc");
    //this.InsertTextAtCurrentCursor(" ");
    this.Backspaces();
    
    this.CursorToBookmark("PosEndInsertDoc");
    this.Backspaces();
    this.DelBookmark("PosEndInsertDoc");
    this.InsertTextAtCurrentCursor(" ");
    this.Backspaces();
    this.executeDispatch(".uno:delete",arr);
    this.getModel().unlockControllers();    
  }
  else
    this.InsertDocDispatch(FileURL,doctype);    
};

Office.prototype.RegistPluginListener = function(strListenerName, strFunctionName, bRegist){
  var ret = this.NEOSHINE_Office.RegistPluginListener(strListenerName, strFunctionName, bRegist);
  return ret;
};

Office.prototype.SetListenerPresetData = function(strListenerName, strFunctionName, pData){
  this.NEOSHINE_Office.SetListenerPresetData(strListenerName, strFunctionName, pData);
};

Office.prototype.UpdateListener = function(){
  this.NEOSHINE_Office.UpdateListener();
};

Office.prototype.UnRegistListener = function(strListenerName){
  var ret = this.NEOSHINE_Office.RegistPluginListener(strListenerName, "myfunc_", false);
  return ret;
};

Office.prototype.NotifyEvent = function(eventName, bNotify){
  var lisn = this.NEOSHINE_Office.RegistPluginListener("eventListener", "myfunc_", true);
  if (lisn)
  {
    var prpt = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.beans.PropertyValue");
    prpt.Name = eventName;
    prpt.Value = bNotify;

    this.NEOSHINE_Office.SetListenerPresetData("eventListener", "notifyEvent", prpt);
  }
};

Office.prototype.EnableKeyboard = function(ctrl_alt_shift, keyCode, bEnable){
  var lisn = this.NEOSHINE_Office.RegistPluginListener("keyboardListener", "myfunc_", true);
  if (lisn)
  {
    var e = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.awt.KeyEvent");
    e.Modifiers = ctrl_alt_shift;
    e.KeyCode = keyCode;

    var prpt = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.beans.PropertyValue");
    prpt.Name = bEnable ? "false" : "true";
    prpt.Value = e;

    this.NEOSHINE_Office.SetListenerPresetData("keyboardListener", "keyPressed", prpt);
  }
};

Office.prototype.EnableUnoID = function(unoid, bEnable, bDispatchByMyself){
  var lisn = this.NEOSHINE_Office.RegistPluginListener("dispatchListener", "myfunc_", true);
  if (lisn)
  {
    var url = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.util.URL");
    url.Complete = unoid;

    var prt = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.beans.PropertyValue");
    prt.Value = url;
    prt.Name = bEnable ? "false" : "true";
    if (bEnable)
    {
      prt.Name = bDispatchByMyself ? "true" : "false";
    }

    this.NEOSHINE_Office.SetListenerPresetData("dispatchListener", "queryDispatch", prt);

    prt = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.beans.PropertyValue");
    prt.Name = bEnable ? "true" : "false";
    prt.Value = url;
    this.NEOSHINE_Office.SetListenerPresetData("dispatchListener", "addStatusListener", prt);
  }
};

Office.prototype.UpdateContextMenu = function(operate, commandURL, commandText){
  var lisn = this.NEOSHINE_Office.RegistPluginListener("contextmenuListener", "myfunc_", true);
  if (lisn)
  {
    prt = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.beans.PropertyValue");
    prt.Value = commandURL;
    prt.Name = operate;
    this.NEOSHINE_Office.SetListenerPresetData("contextmenuListener", "notifyContextMenuExecute", prt);
  }
};

Office.prototype.EnableMouseHandle = function(buttonType, enable){
  var lisn = this.NEOSHINE_Office.RegistPluginListener("mouseListener", "myfunc_", true);
  if (lisn)
  {
    var event = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.awt.MouseEvent");
    event.Buttons = buttonType;   //1:LBUTTON, 2: RBUTTON, 4: MBUTTON

    prt = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.beans.PropertyValue");
    prt.Value = event;
    prt.Name = enable ? "false" : "true";
    this.NEOSHINE_Office.SetListenerPresetData("mouseListener", "mousePressed", prt);
  }
};

Office.prototype.EnableCopy = function(enable){
  this.EnableUnoID(".uno:Copy", enable, false);
  if (enable)
  {
    this.UpdateContextMenu("add", "slot:5711", "");
    this.UpdateContextMenu("add", "复制(~C)", "");
  }
  else
  {
    this.UpdateContextMenu("remove", "slot:5711", "");
    this.UpdateContextMenu("remove", "复制(~C)", "");
  }
};

Office.prototype.EnablePaste = function(enable){
  this.EnableUnoID(".uno:Paste", enable, false);
  if (enable)
  {
    this.UpdateContextMenu("add", "slot:5712", "");
    this.UpdateContextMenu("add", "粘贴(~P)", "");
  }
  else
  {
    this.UpdateContextMenu("remove", "slot:5712", "");
    this.UpdateContextMenu("remove", "粘贴(~P)", "");
  }
};

//------------------- Functions of operating menubar and toolbar -- Begin -------------------------------------
Office.prototype.FindObject = function(key,resourceSettings){
  for (var i = 0; i < resourceSettings.getCount(); i++)
  {
    var oItemSetting = resourceSettings.getByIndex(i);
    for (var j = 0; j < oItemSetting.length; j++)
    {
      if (oItemSetting[j].Name == "CommandURL")
      {
        if (oItemSetting[j].Value == key)
        {
          var objRet = new Array(2);
          objRet[0] = i;
          objRet[1] = oItemSetting;
          return objRet;
        }
      }
    }
  }
  return 0;
};

Office.prototype.CreateMenu = function(menuType,menuID,menuLable,menuBarSettings){
  var propertyValue = 0;
  if (menuType == 2)
  {
    var factory = menuBarSettings.createInstanceWithContext(this.GetServiceManager().DefaultContext);
    propertyValue = this.NEOSHINE_Office.CreateSequence(28,4);
    propertyValue.setProperty(0,"CommandURL",menuID,1);
    propertyValue.setProperty(1,"Label",menuLable,1);
    propertyValue.setProperty(2,"Type",0,2);
    propertyValue.setProperty(3,"ItemDescriptorContainer",factory,5);
  }
  else
  {
    propertyValue = this.NEOSHINE_Office.CreateSequence(28,3);
    propertyValue.setProperty(0,"CommandURL",menuID,1);
    propertyValue.setProperty(1,"Label",menuLable,1);
    propertyValue.setProperty(2,"Type",menuType == 0 ? 1:0,6);
  }
  return propertyValue;
};

Office.prototype.CreateToolbarItem = function(cmdType,cmdID,cmdLabel){
  var propertyValue = this.NEOSHINE_Office.CreateSequence(28,4);
  propertyValue.setProperty(0,"CommandURL",cmdID,1);
  propertyValue.setProperty(1,"Label",cmdLabel,1);
  propertyValue.setProperty(2,"Type",cmdType == 0 ? 1:0,6);
  propertyValue.setProperty(3,"Visible",true,3);
  return propertyValue;
};

Office.prototype.GetResource = function(resourceURL){
  var oFrame = this.getPluginFrame();
  oLayoutManager = oFrame.LayoutManager;
  oElement = oLayoutManager.getElement(resourceURL);
  oElement.setPropertyValue("Persistent",false);
  return oElement;
}

Office.prototype.CreateResource = function(resourceURL){
  var oFrame = this.getPluginFrame();
  oLayoutManager = oFrame.LayoutManager;
  oLayoutManager.createElement(resourceURL);
  oElement = oLayoutManager.getElement(resourceURL);
  oElement.setPropertyValue("Persistent",false);
  return oElement;
}

Office.prototype.GetImageFromURL = function(imageURL){
  var oGraphicProvider = this.CreateUnoService("com.sun.star.graphic.GraphicProvider");
  if (oGraphicProvider && imageURL.length > 7) // >"file://"
  {
    var propertyValue = this.NEOSHINE_Office.CreateSequence(28,1);
    propertyValue.setProperty(0,"URL",imageURL,1);
    var obj =  oGraphicProvider.queryGraphic(propertyValue);
    return obj;
  }
  return null;
}

Office.prototype.SetImageInfo = function(resourceList){
  var oModuleCfgMgr = this.getModel().getUIConfigurationManager();
  var oImageMgr = oModuleCfgMgr.getImageManager();

  var cmdURL = new Array();
  var cmdImg = new Array();
  var nIndex = 0;
  for (var i = 0; i < resourceList.length; i++)
  {
    var Iteminfo = resourceList[i];
    var Image = this.GetImageFromURL(Iteminfo[3]);
    if (Image && Iteminfo[1].length > 0 && !oImageMgr.hasImage(0, Iteminfo[1]))
    {
       cmdURL[nIndex] = Iteminfo[1];
       cmdImg[nIndex] = Image;
       nIndex++;
    }
  }
  if (nIndex)
  {
    var seqString = this.NEOSHINE_Office.CreateSequence(12,nIndex);
    var seqObj = this.NEOSHINE_Office.CreateSequence(22,nIndex);
    for (var j = 0; j < nIndex; j++)
    {
      seqObj.setValue(j,cmdImg[j]);
      seqString.setValue(j,cmdURL[j]);
    }
    oImageMgr.insertImages(0,seqString, seqObj);
  }
}

Office.prototype.UpdateMenuItemToBar = function(optType,sPopupMenuPath,menuInfoList){
  var keys = new Array();
  var strTopMenuTemp = sPopupMenuPath;
  var nIdx = strTopMenuTemp.indexOf("/");
  for (var i = 0; nIdx > 0; i++)
  {
    var sSub = strTopMenuTemp.substring(0, nIdx);
    keys[i] = sSub;

    strTopMenuTemp = strTopMenuTemp.substring(nIdx + 1, strTopMenuTemp.length);
    nIdx = strTopMenuTemp.indexOf("/");
  }
  if (nIdx < 0 && strTopMenuTemp.length > 0) 
  {
    keys[i] = strTopMenuTemp;
  }

  var oMenuBar = this.GetResource("private:resource/menubar/menubar");
  var oMenuBarSettings = oMenuBar.getSettings(true);
  
  var settings = oMenuBarSettings;
  for (var i = 0; i < keys.length; i++)
  {
    var oPopupObj = this.FindObject(keys[i],settings);
    if (!oPopupObj)
    {
      return false;
    }
    
    var oPopup = oPopupObj[1];
    var bGet = false;
    var m = oPopup.length;
    for (var j = 0; j < m; j++)
    {
      if (oPopup[j].Name == "ItemDescriptorContainer")
      {
        settings = oPopup[j].Value;
        bGet = true;
        break;
      }      
    }
    if (bGet ==  false)
    {
      return false;
    }
  }

  for (var i = 0; i < menuInfoList.length; i++)
  {
    var menuinfo = menuInfoList[i];
    var oPopupObj = this.FindObject(menuinfo[1],settings);
    if (optType == 1)
    {
      if (oPopupObj)
      {
        continue;
      }
      var menu = this.CreateMenu(menuinfo[0],menuinfo[1],menuinfo[2],oMenuBarSettings);
      var nIdx = settings.getCount();
      settings.insertByIndex(nIdx, menu);
    }
    else if (optType == 2)
    {
      var pos = oPopupObj[0];
      settings.removeByIndex(pos);
    }
  }
  
  this.SetImageInfo(menuInfoList);
  oMenuBar.setSettings(oMenuBarSettings);
  return true;
};

Office.prototype.UpdateToolBar = function(optType,toolbarCaption,toolbarURL,toolbarInfoList,InsIndex){
  var oModuleCfgMgr = this.getModel().getUIConfigurationManager();
  var oToolBar = 0;
  if (optType ==1)
  {
    if (oModuleCfgMgr.hasSettings(toolbarURL))
    {
      return false;
    }
    oToolBar = this.CreateResource(toolbarURL);
    var oToolBarSettings = oToolBar.getSettings(true);
    oToolBarSettings.setPropertyValue("UIName",toolbarCaption);
  }
  else
  {
    oToolBar = this.GetResource(toolbarURL);
    var oToolBarSettings = oToolBar.getSettings(true);
  }
  
  for (var i = 0; i < toolbarInfoList.length; i++)
  {
    var iteminfo = toolbarInfoList[i];
    var oItemObj = this.FindObject(iteminfo[1],oToolBarSettings);
    if (optType == 1)
    {
      if (oItemObj)
      {
        continue;
      }
      var oItem = this.CreateToolbarItem(iteminfo[0],iteminfo[1],iteminfo[2]);
      var nIdx = oToolBarSettings.getCount();
      oToolBarSettings.insertByIndex(nIdx, oItem);
    }
    else if (optType == 2)
    {
      if (oItemObj)
      {
        return false;
      }
      var oItem = this.CreateToolbarItem(iteminfo[0],iteminfo[1],iteminfo[2]);
      oToolBarSettings.insertByIndex(InsIndex, oItem);
    }
    else if (optType == 3)
    {
      if (!oItemObj)
      {
        return false;
      }
      var pos = oItemObj[0];
      oToolBarSettings.removeByIndex(pos);
    }
  }
  
  this.SetImageInfo(toolbarInfoList);
  oToolBar.setSettings(oToolBarSettings);  

  if (oModuleCfgMgr.hasSettings(toolbarURL))
  {
    oModuleCfgMgr.replaceSettings(toolbarURL, oToolBarSettings);
  }
  else
  {
    oModuleCfgMgr.insertSettings(toolbarURL, oToolBarSettings);
  }
  oModuleCfgMgr.store();
  return true;
};
//------------------- Functions of operating menubar and toolbar -- End -------------------------------------

Office.prototype.AddMenuItemToBar = function(sPopupMenuPath,menuInfoList){
  return this.UpdateMenuItemToBar(1,sPopupMenuPath,menuInfoList);
}

Office.prototype.RemoveMenuItemFromBar = function(sPopupMenuPath,menuInfoList){
  return this.UpdateMenuItemToBar(2,sPopupMenuPath,menuInfoList);
}

Office.prototype.CreateToolBar = function(toolbarCaption,toolbarURL,itemInfoList){
  return this.UpdateToolBar(1,toolbarCaption,toolbarURL,itemInfoList,0);
}

Office.prototype.InsertItemToToolBar = function(toolbarURL,itemInfoList,insIndex){
  return this.UpdateToolBar(2,"",toolbarURL,itemInfoList,insIndex);
}

Office.prototype.RemoveItemFromToolBar = function(toolbarURL,itemInfoList){
  return this.UpdateToolBar(3,"",toolbarURL,itemInfoList,0);
}

Office.prototype.OpenDocumentBuffer = function(buffer,IsReadOnly){
  var xTempAccess = this.CreateUnoService("com.sun.star.ucb.SimpleFileAccess");
  var xData = xTempAccess.openFileRead(buffer);
  var arr= this.NEOSHINE_Office.CreateSequence(28,2);
  arr.setProperty(0,"InputStream",buffer,1);
  if(IsReadOnly)
    arr.setProperty(1,"ReadOnly",1,3);
  else
    arr.setProperty(1,"ReadOnly",0,3);
  var ret = this.getPluginFrame().loadComponentFromURL("private:stream","_self",55,arr);
};

Office.prototype.OpenFileDialog = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.executeDispatch(".uno:Open", arr);
};

Office.prototype.ExportPDFDialog = function(){
  var arr= this.NEOSHINE_Office.CreateSequence(28,0);
  this.executeDispatch(".uno:ExportToPDF", arr);
};

Office.prototype.SetPageWidth = function(width){
  var xStyleFamiliesSupplier = this.getModel().getStyleFamilies();
  var xParagraphStyles = xStyleFamiliesSupplier.getByName("PageStyles");
  var xStyle = xParagraphStyles.getByName("Standard");
  xStyle.setPropertyValue("Width",width*1000);
};
Office.prototype.GetPageWidth = function(){
  var PageStyle = this.getModel().createInstance("com.sun.star.style.PageStyle");
  return (PageStyle.Width/1000).toFixed(2);
};

Office.prototype.SetPageHeight = function(Height){
  var xStyleFamiliesSupplier = this.getModel().getStyleFamilies();
  var xParagraphStyles = xStyleFamiliesSupplier.getByName("PageStyles");
  var xStyle = xParagraphStyles.getByName("Standard");

  xStyle.setPropertyValue("Height",Height*1000);
};
Office.prototype.GetPageHeight = function(){
  var PageStyle = this.getModel().createInstance("com.sun.star.style.PageStyle");
  return (PageStyle.Height/1000).toFixed(2);
};

Office.prototype.SetPageVertical = function(bVert){
  var xStyleFamiliesSupplier = this.getModel().getStyleFamilies();
  var xParagraphStyles = xStyleFamiliesSupplier.getByName("PageStyles");
  var xStyle = xParagraphStyles.getByName("Standard");

  xStyle.setPropertyValue("IsLandscape",bVert);
  var width = this.GetPageWidth();
  this.SetPageWidth(this.GetPageHeight());
  this.SetPageHeight(width);
};
Office.prototype.GetPageVertical = function(){
  var PageStyle = this.getModel().createInstance("com.sun.star.style.PageStyle");
  return PageStyle.IsLandscape;
};

Office.prototype.SetLeftMargin = function(Margin){
  var xStyleFamiliesSupplier = this.getModel().getStyleFamilies();
  var xParagraphStyles = xStyleFamiliesSupplier.getByName("PageStyles");
  var xStyle = xParagraphStyles.getByName("Standard");

  xStyle.setPropertyValue("LeftMargin",Margin*1000);
};
Office.prototype.GetLeftMargin = function(){
  var PageStyle = this.getModel().createInstance("com.sun.star.style.PageStyle");
  return (PageStyle.LeftMargin/1000).toFixed(2);
};

Office.prototype.SetRightMargin = function(Margin){
  var xStyleFamiliesSupplier = this.getModel().getStyleFamilies();
  var xParagraphStyles = xStyleFamiliesSupplier.getByName("PageStyles");
  var xStyle = xParagraphStyles.getByName("Standard");

  xStyle.setPropertyValue("RightMargin",Margin*1000);
};
Office.prototype.GetRightMargin = function(){
  var PageStyle = this.getModel().createInstance("com.sun.star.style.PageStyle");
  return (PageStyle.RightMargin/1000).toFixed(2);
};

Office.prototype.SetTopMargin = function(Margin){
  var xStyleFamiliesSupplier = this.getModel().getStyleFamilies();
  var xParagraphStyles = xStyleFamiliesSupplier.getByName("PageStyles");
  var xStyle = xParagraphStyles.getByName("Standard");

  xStyle.setPropertyValue("TopMargin",Margin*1000);
};
Office.prototype.GetTopMargin = function(){
  var PageStyle = this.getModel().createInstance("com.sun.star.style.PageStyle");
  return (PageStyle.TopMargin/1000).toFixed(2);
};

Office.prototype.SetBottomMargin = function(Margin){
  var xStyleFamiliesSupplier = this.getModel().getStyleFamilies();
  var xParagraphStyles = xStyleFamiliesSupplier.getByName("PageStyles");
  var xStyle = xParagraphStyles.getByName("Standard");

  xStyle.setPropertyValue("BottomMargin",Margin*1000);
};
Office.prototype.GetBottomMargin = function(){
  var PageStyle = this.getModel().createInstance("com.sun.star.style.PageStyle");
  return (PageStyle.BottomMargin/1000).toFixed(2);
};

Office.prototype.Zoom = function(zoomValue){
  var controller = this.getController();
  var views = controller.getViewSettings();
  views.setPropertyValue("ZoomValue",zoomValue);
};

Office.prototype.GetZoomValue = function(){
  var controller = this.getController();
  var views = controller.getViewSettings();
  var zoomV = views.getPropertyValue("ZoomValue");
  return zoomV;
};

Office.prototype.DisableExecuteByName = function(URL,bDisable){  
  this.NEOSHINE_Office.DisableExecuteByName(URL,bDisable);
};

Office.prototype.InsertTextFrame = function(AnchorType,PosX,PosY,Width,Height){
  var arr= this.NEOSHINE_Office.CreateSequence(28,5);
  arr.setProperty(0,"AnchorType",AnchorType,2);
  arr.setProperty(1,"Pos.X",PosX,2);
  arr.setProperty(2,"Pos.Y",PosY,2);
  arr.setProperty(3,"Size.Width",Width,2);
  arr.setProperty(4,"Size.Height",Height,2);
  this.executeDispatch(".uno:InsertFrame",arr);
};

Office.prototype.InsertImageWholePage = function(URL){
  if (this.IsReadOnly())
    return false;
  else
  {
    var xTextRange = this.getModel().getCurrentController().getViewCursor();
    var xTextPicture = xTextRange.getText();
    var xShape =
    this.getModel().createInstance("com.sun.star.drawing.GraphicObjectShape");

    var position = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.awt.Point");
    position.X = 0;
    position.Y = 0;
    xShape.setPosition(position);

    var size = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.awt.Size");
    size.Width = this.GetPageWidth();
    size.Height = this.GetPageHeight();
    xShape.setSize(size);

    var xGraphicProvider = this.CreateUnoService("com.sun.star.graphic.GraphicProvider");
    var propertyValue = this.NEOSHINE_Office.CreateSequence(28,1);
    propertyValue.setProperty(0,"URL",URL,1);
    var xGraphic = xGraphicProvider.queryGraphic(propertyValue);
    xShape.setPropertyValue("Graphic", xGraphic);
    xShape.setPropertyValue("AnchorType", 2);
    xShape.setPropertyValue("Opaque", true);
    xShape.setPropertyValue("Transparency", 0);

    xTextPicture.insertTextContent(xTextRange,xShape,true);
    xShape.setPropertyValue("Surround", 1);
    xShape.setPropertyValue("LayerName", "Hell");

    return xShape;
  }
};

Office.prototype.SetGraphicTransparency = function(xShape,Transparency){
  xShape.setPropertyValue("Transparency", Transparency);
};

Office.prototype.GetGraphicTransparency = function(xShape){
  return xShape.getPropertyValue("Transparency");
};

Office.prototype.GetAllTextFrames = function(){
  var xNameAccess = this.getModel().getTextFrames();
  var names = xNameAccess.getElementNames();
  var iArrayLen = names.getLength();
  var arrRet=new Array(iArrayLen);
  for (i=0;i<iArrayLen;i++)
  {
    arrRet[i] = names.getElement(i);
  }

  return arrRet;
};

Office.prototype.RenameTextFrame = function(oldTextName, newTextName){
  if (this.IsReadOnly())
    return false;
  else
  {
    var xNameAccess = this.getModel().getTextFrames();
    if(xNameAccess.hasByName(oldTextName))
    {
      var xTextTable = xNameAccess.getByName(oldTextName);
      xTextTable.setName(newTextName);
      return true;
    }
    else
      return false;
  }
};

Office.prototype.CursorToTextFrame = function(FrameName){
  var xNameAccess = this.getModel().getTextFrames();
  if(xNameAccess.hasByName(FrameName))
  {
    var xTextFrame = xNameAccess.getByName(FrameName);

    var xText = xTextFrame.getText();
    var xViewCursor = this.getController().getViewCursor();
    xViewCursor.gotoRange(xText,false);
    xViewCursor.gotoStart(false);
    return true;
  }
  else
    return false;
};

Office.prototype.InsertSheet = function(Name,Index){
  var arr= this.NEOSHINE_Office.CreateSequence(28,2);
  arr.setProperty(0,"Name",Name,1);
  arr.setProperty(1,"Index",Index,2);
  this.executeDispatch(".uno:Insert",arr);
};

Office.prototype.StandardContext = function(FontHeight,FontName,Indent,ParagraphSpacing){
  var oViewCursor = this.getController().getViewCursor();
  var xText = this.getModel().getText();
  var currentcursor = xText.createTextCursorByRange(oViewCursor);

  this.getModel().lockControllers();
  oViewCursor.gotoStart(false);
  oViewCursor.gotoEnd(true);

  this.SetFontHeight(FontHeight);
  this.SetFontName(FontName);
  this.SetFirstLineIndent(Indent);
  this.SetParagraphSpacing(ParagraphSpacing);

  oViewCursor.gotoRange(currentcursor.getStart(),false);
  this.getModel().unlockControllers();
};

Office.prototype.URLSelectDialogOffice = function(mode,filter){
  var URL= this.NEOSHINE_Office.ShowFilePicker(mode,filter);
  return URL;
};

Office.prototype.URLSelectDialogBrowser = function(){
  netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
  const FilePicker = Components.interfaces.nsIFilePicker;
  var fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(FilePicker);
  fp.init(window, "Save As ...", FilePicker.modeSave);
  var rv = fp.show();
  if(rv == FilePicker.returnOK || rv == FilePicker.returnReplace)
  {
    var ss = fp.file;
    var path = fp.file.path;
    return path;
  }
  return null;  
};

Office.prototype.CursorToDocStart = function(){
  var xViewCursor = this.getController().getViewCursor();
  xViewCursor.gotoStart(false);
};

Office.prototype.CursorToDocEnd = function(){
  var xViewCursor = this.getController().getViewCursor();
  xViewCursor.gotoEnd(false);
};

//nPrint 是打印设置参数 
//如果各项为true则 页面背景 = 1; 图片和对象 = 2; 隐藏的文字 = 4; 文字占位符 = 8; 表单控件 = 16; 使用黑色打印文字 = 32, 否则为0
//nPrint = 页面背景 + 图片和对象 + 隐藏的文字 + 文字占位符 + 表单控件 + 使用黑色打印文字
//f.e. 如果要将页面背景与隐藏的文字设置为true其他设置为false，则nPrint=页面背景+隐藏的文字 = 5
Office.prototype.PrintSetting = function(nPrint){
  var bBG=bGO=bHT=bPH=bCT=bPB = false;  
  var oSet = this.getModel().createInstance("com.sun.star.text.DocumentSettings");

  if(nPrint>31)
  {
    bPB = true;
    nPrint -= 32;
  }
  if(nPrint>15)
  {
    bCT = true;
    nPrint -= 16;
  }
  if(nPrint>7)
  {
    bPH = true;
    nPrint -= 8;
  }
  if(nPrint>3)
  {
    bHT = true;
    nPrint -= 4;
  }
  if(nPrint>1)
  {
    bGO = true;
    nPrint -= 2;
  }
  if(nPrint>0)
  {
    bBG = true;
    nPrint -= 1;
  }

  oSet.setPropertyValue("PrintPageBackground",bBG);
  oSet.setPropertyValue("PrintControls",bCT);
  oSet.setPropertyValue("PrintDrawings",bGO);
  oSet.setPropertyValue("PrintGraphics",bGO);
  oSet.setPropertyValue("PrintHiddenText",bHT);
  oSet.setPropertyValue("PrintTextPlaceholder",bPH);
  oSet.setPropertyValue("PrintBlackFonts",bPB);
};

Office.prototype.Encode2D = function(imgPath,BookmarkName){
  var content = this.GetBookmarkText(BookmarkName);
  if (!content)
    content = "null";  
  this.NEOSHINE_Office.Encode2D(imgPath,content);  
};

Office.prototype.UpdateGraphicObject = function(XShape,URL){
  var xGraphicProvider = this.CreateUnoService("com.sun.star.graphic.GraphicProvider");
  var propertyValue = this.NEOSHINE_Office.CreateSequence(28,1);
  propertyValue.setProperty(0,"URL",URL,1);
  var xGraphic = xGraphicProvider.queryGraphic(propertyValue);
  XShape.setPropertyValue("Graphic", xGraphic);
};

Office.prototype.InsertGraphicObject = function(URL,Name,PosX,PosY){
   if (this.IsReadOnly())
      return false;
   else
   {        
      var xTextRange = this.getModel().getCurrentController().getViewCursor();             
      var xTextPicture = xTextRange.getText();      
      var xShape = this.getModel().createInstance("com.sun.star.drawing.GraphicObjectShape");
      
      var position = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.awt.Point");
      position.X = PosX;
      position.Y = PosY;
      xShape.setPosition(position);

      var size = this.NEOSHINE_Office.Bridge_GetStruct("com.sun.star.awt.Size");
      size.Width = 2500;
      size.Height = 2500;
      xShape.setSize(size);

      var xGraphicProvider = this.CreateUnoService("com.sun.star.graphic.GraphicProvider");
      var propertyValue = this.NEOSHINE_Office.CreateSequence(28,1);
      propertyValue.setProperty(0,"URL",URL,1);	      
      var xGraphic = xGraphicProvider.queryGraphic(propertyValue);
      	
      xShape.setPropertyValue("Graphic", xGraphic);      
      xShape.setPropertyValue("AnchorType", 2);
      xShape.setPropertyValue("Name", Name);
 
      xTextPicture.insertTextContent(xTextRange,xShape,false);

      return xShape;
   }
};

Office.prototype.SystemShellExecute = function(Shell,Arg){
  this.NEOSHINE_Office.SystemExecute(Shell, Arg);
};