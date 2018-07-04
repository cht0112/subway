<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_APPLICATION_INFO" default-value-expr="nextSeq('SQ')"> 
    <label language="zh_CN">测试申请信息</label>  
    <has-relation relation="APP_DOC_ID" data-type="String" size="50" default-value-expr="nextSeqString(concat('PXJHSQ',dateFormat(currentDate(), 'yyyyMMdd' )),'000')"/>
    <has-relation relation="APP_DOC_NO" data-type="String" size="50" default-value-expr="'MNITL-03-RF-TR-001-V1.0'"/>
    <has-relation relation="aSSIGNEDMANUFACTUREID" size="5" data-type="Integer"> 
      <label language="zh_CN">委托单位</label> 
    </has-relation>  
    <has-relation relation="pRODUCTMANUFACTUREID" size="5" data-type="Integer"> 
      <label language="zh_CN">开发单位</label> 
    </has-relation>  
    <has-relation relation="pRODUCTNAME" size="200"> 
      <label language="zh_CN">产品名称</label> 
    </has-relation>  
    <has-relation relation="dETECTIONOBJECTTYPE" size="5" data-type="Integer"> 
      <label language="zh_CN">申请检测对象类别</label> 
    </has-relation>  
    <has-relation relation="dEVICETYPE" size="5" data-type="Integer"> 
      <label language="zh_CN">申请检测对象</label> 
    </has-relation>  
    <has-relation relation="bUSINESSID" size="5" data-type="Integer"> 
      <label language="zh_CN">申请检测业务</label> 
    </has-relation>  
    <has-relation relation="lINEID" size="2" data-type="Integer" default-value-expr="0"> 
      <label language="zh_CN">申请检测对象应用线路</label> 
    </has-relation>  
    <has-relation relation="dECTIONBASEDONNAME" data-type="String"> 
      <label language="zh_CN">检测依据</label> 
    </has-relation>  
    <has-relation relation="cONTACTPERSON" size="30"> 
      <label language="zh_CN">委托联系人</label> 
    </has-relation>  
    <has-relation relation="cONTACTMOBILE" size="20"> 
      <label language="zh_CN">委托单位联系手机</label> 
    </has-relation>  
    <has-relation relation="cONTACTTELEPHONE" size="20"> 
      <label language="zh_CN">委托单位联系电话</label> 
    </has-relation>  
    <has-relation relation="cONTACTEMAIL" size="200"> 
      <label language="zh_CN">委托单位联系邮件</label> 
    </has-relation>  
    <has-relation relation="cONTACTADDRESS" size="200"> 
      <label language="zh_CN">委托单位通信地址</label> 
    </has-relation>  
    <has-relation relation="cONTACTPOSTCODE" size="20"> 
      <label language="zh_CN">委托单位邮政编码</label> 
    </has-relation>  
    <has-relation relation="cONTACTFAXNUMBER" size="20"> 
      <label language="zh_CN">委托单位传真</label> 
    </has-relation>  
    <has-relation relation="aPPLICATIONDATE" data-type="Date" default-value-expr="currentDate()"> 
      <label language="zh_CN">申请日期</label> 
    </has-relation>  
    <has-relation relation="eXPECTENDINGDATE" data-type="Date"> 
      <label language="zh_CN">预期完成日期</label> 
    </has-relation>  
    <has-relation relation="pRODUCTSTYLE" size="1000"> 
      <label language="zh_CN">产品型号/内核版本号</label> 
    </has-relation>  
    <has-relation relation="cOMPANYTYPE" size="1000"> 
      <label language="zh_CN">开发单位公司性质</label> 
    </has-relation>  
    <has-relation relation="aPPLICATIONFIELDS" size="1000"> 
      <label language="zh_CN">产品应用领域</label> 
    </has-relation>  
    <has-relation relation="dEVELOPMENTTOOLS" size="1000"> 
      <label language="zh_CN">产品开发工具</label> 
    </has-relation>  
    <has-relation relation="cOMPILERENVIRONMENT" size="1000"> 
      <label language="zh_CN">产品编译环境</label> 
    </has-relation>  
    <has-relation relation="pRODUCTCONFIGURATION" size="2000"> 
      <label language="zh_CN">产品具体配置</label> 
    </has-relation>  
    <has-relation relation="fEATURESANDMODELS" size="2000"> 
      <label language="zh_CN">产品特点及功能模块</label> 
    </has-relation>  
    <has-relation relation="tESTINGREQUIREMENTS" size="2000"> 
      <label language="zh_CN">检测要求</label> 
    </has-relation>  
    <has-relation relation="oPERATORID" size="8"> 
      <label language="zh_CN">实验室联系人</label> 
    </has-relation>  
    <has-relation relation="mNITLTELEPHONE" size="20"> 
      <label language="zh_CN">实验室电话</label> 
    </has-relation>  
    <has-relation relation="mNITLFAXNUMBER" size="20"> 
      <label language="zh_CN">实验室传真</label> 
    </has-relation>  
    <has-relation relation="mNITLMOBILE" size="20"> 
      <label language="zh_CN">实验室联系手机</label> 
    </has-relation>  
    <has-relation relation="mNITLEMAIL" size="200"> 
      <label language="zh_CN">委托单位联系邮件</label> 
    </has-relation>  
    <has-relation relation="mNITLADDRESS" size="200"> 
      <label language="zh_CN">实验室通信地址</label> 
    </has-relation>  
    <has-relation relation="mNITLPOSTCODE" size="20"> 
      <label language="zh_CN">实验室邮政编码</label> 
    </has-relation>  
    <has-relation relation="rECEIPTER" size="8" default-value-expr="operatorID()"> 
      <label language="zh_CN">受理人</label> 
    </has-relation>  
    <has-relation relation="rECEIPTDATE" data-type="Date" default-value-expr="currentDate()"> 
      <label language="zh_CN">受理日期</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/>  
    <has-relation relation="COMPANY_PROMISE" size="1000"/>  
    <has-relation relation="iNSTALLREQUIRE" data-type="String" size="512"> 
      <label language="zh_CN">安装要求</label> 
    </has-relation>  
    <has-relation relation="pROCESSUNIT" data-type="String"> 
      <label language="zh_CN">加工单位</label> 
    </has-relation> 
  </concept>  
  <relation name="mNITLADDRESS" data-type="String"> 
    <label language="zh_CN">实验室通信地址</label> 
  </relation>  
  <relation name="dEVICETYPE" data-type="String"> 
    <label language="zh_CN">申请检测对象</label> 
  </relation>  
  <relation name="tESTINGREQUIREMENTS" data-type="String"> 
    <label language="zh_CN">检测要求</label> 
  </relation>  
  <relation name="cOMPILERENVIRONMENT" data-type="String"> 
    <label language="zh_CN">产品编译环境</label> 
  </relation>  
  <relation name="aPPLICATIONDATE" data-type="DateTime"> 
    <label language="zh_CN">申请日期</label> 
  </relation>  
  <relation name="pRODUCTNAME" data-type="String"> 
    <label language="zh_CN">产品名称</label> 
  </relation>  
  <relation name="cONTACTPERSON" data-type="String"> 
    <label language="zh_CN">委托联系人</label> 
  </relation>  
  <relation name="pRODUCTSTYLE" data-type="String"> 
    <label language="zh_CN">产品型号/内核版本号</label> 
  </relation>  
  <relation name="cONTACTADDRESS" data-type="String"> 
    <label language="zh_CN">委托单位通信地址</label> 
  </relation>  
  <relation name="lINEID" data-type="Integer"> 
    <label language="zh_CN">申请检测对象应用线路</label> 
  </relation>  
  <relation name="bUSINESSID" data-type="Integer"> 
    <label language="zh_CN">申请检测业务</label> 
  </relation>  
  <relation name="aPPLICATIONFIELDS" data-type="String"> 
    <label language="zh_CN">产品应用领域</label> 
  </relation>  
  <relation name="pRODUCTMANUFACTUREID" data-type="Integer"> 
    <label language="zh_CN">开发单位</label> 
  </relation>  
  <relation name="mNITLTELEPHONE" data-type="String"> 
    <label language="zh_CN">实验室电话</label> 
  </relation>  
  <relation name="mNITLMOBILE" data-type="String"> 
    <label language="zh_CN">实验室联系手机</label> 
  </relation>  
  <relation name="dECTIONBASEDONNAME" data-type="String"> 
    <label language="zh_CN">检测依据</label> 
  </relation>  
  <relation name="oPERATORID" data-type="String"> 
    <label language="zh_CN">实验室联系人</label> 
  </relation>  
  <relation name="dETECTIONOBJECTTYPE" data-type="Integer"> 
    <label language="zh_CN">申请检测对象类别</label> 
  </relation>  
  <relation name="dEVELOPMENTTOOLS" data-type="String"> 
    <label language="zh_CN">产品开发工具</label> 
  </relation>  
  <relation name="rECEIPTER" data-type="String"> 
    <label language="zh_CN">受理人</label> 
  </relation>  
  <relation name="mNITLFAXNUMBER" data-type="String"> 
    <label language="zh_CN">实验室传真</label> 
  </relation>  
  <relation name="mNITLEMAIL" data-type="String"> 
    <label language="zh_CN">委托单位联系邮件</label> 
  </relation>  
  <relation name="rECEIPTDATE" data-type="DateTime"> 
    <label language="zh_CN">受理日期</label> 
  </relation>  
  <relation name="mNITLPOSTCODE" data-type="String"> 
    <label language="zh_CN">实验室邮政编码</label> 
  </relation>  
  <relation name="fEATURESANDMODELS" data-type="String"> 
    <label language="zh_CN">产品特点及功能模块</label> 
  </relation>  
  <relation name="cOMPANYTYPE" data-type="String"> 
    <label language="zh_CN">开发单位公司性质</label> 
  </relation>  
  <relation name="cONTACTPOSTCODE" data-type="String"> 
    <label language="zh_CN">委托单位邮政编码</label> 
  </relation>  
  <relation name="aSSIGNEDMANUFACTUREID" data-type="Integer"> 
    <label language="zh_CN">委托单位</label> 
  </relation>  
  <relation name="cONTACTFAXNUMBER" data-type="String"> 
    <label language="zh_CN">委托单位传真</label> 
  </relation>  
  <relation name="pRODUCTCONFIGURATION" data-type="String"> 
    <label language="zh_CN">产品具体配置</label> 
  </relation>  
  <relation name="APP_DOC_NO" data-type="String">
    <label language="zh_CN">检测申请单编码</label> 
  </relation>  
  <relation name="APP_DOC_ID" data-type="String">
    <label language="zh_CN">检测申请单据号</label> 
  </relation>  
  <relation name="COMPANY_PROMISE" data-type="Integer">
    <label language="zh_CN">承诺样品最晚进场时间</label> 
  </relation> 
   <relation name="iNSTALLREQUIRE" data-type="String">
    <label language="zh_CN">安装要求</label> 
  </relation>  
  <relation name="pROCESSUNIT" data-type="String">
    <label language="zh_CN">加工单位</label> 
  </relation>
</model>
