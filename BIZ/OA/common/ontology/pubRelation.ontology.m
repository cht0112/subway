<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <relation name="fParent" single-valued="true" inverse-of="fChildren"> 
    <label language="zh_CN">父</label> 
  </relation>  
  <relation name="fChildren" inverse-of="fParent"> 
    <label language="zh_CN">子</label> 
  </relation>  
  <relation name="fID" data-type="String" single-valued="true"> 
    <label language="zh_CN">主键</label> 
  </relation>  
  <relation name="fMasterID" data-type="String" single-valued="true"> 
    <label language="zh_CN">主数据ID</label> 
  </relation>  
  <relation name="fParentID" single-valued="true"> 
    <label language="zh_CN">父ID</label> 
  </relation>  
  <relation name="fParentCode" data-type="String" single-valued="true"> 
    <label language="zh_CN">上级编码</label> 
  </relation>  
  <relation name="fCode" data-type="String" single-valued="true"> 
    <label language="zh_CN">编码</label> 
  </relation>  
  <relation name="fName" data-type="String" single-valued="true"> 
    <label language="zh_CN">名称</label> 
  </relation>  
  <relation name="fNO" data-type="String" single-valued="true"> 
    <label language="zh_CN">单据号</label> 
  </relation>  
  <relation name="fDate" data-type="Date" single-valued="true"> 
    <label language="zh_CN">日期</label> 
  </relation>  
  <relation name="fTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">时间</label> 
  </relation>  
  <relation name="fDateTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">日期时间</label> 
  </relation>  
  <relation name="fBeginDate" data-type="Date" single-valued="true"> 
    <label language="zh_CN">开始日期</label> 
  </relation>  
  <relation name="fEndDate" data-type="Date" single-valued="true"> 
    <label language="zh_CN">结束日期</label> 
  </relation>  
  <relation name="fBeginTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">开始时间</label> 
  </relation>  
  <relation name="fEndTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">结束时间</label> 
  </relation>  
  <relation name="fSequence" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">排序</label> 
  </relation>  
  <relation name="fOrgKindSequence" data-type="String" single-valued="true"> 
    <label language="zh_CN">类型排序</label> 
  </relation>  
  <relation name="fRemark" data-type="String" single-valued="true"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="fScode" data-type="String" single-valued="true"> 
    <label language="zh_CN">简码</label> 
  </relation>  
  <relation name="fSname" data-type="String" single-valued="true"> 
    <label language="zh_CN">简称</label> 
  </relation>  
  <relation name="fScope" data-type="String" single-valued="true"> 
    <label language="zh_CN">类别编码</label> 
  </relation>  
  <relation name="fScopeName" data-type="String" single-valued="true"> 
    <label language="zh_CN">类别</label> 
  </relation>  
  <relation name="fUseStatus" data-type="String" single-valued="true"> 
    <label language="zh_CN">启用标识</label> 
  </relation>  
  <relation name="fUseStatusName" data-type="String" single-valued="true"> 
    <label language="zh_CN">启用标识</label> 
  </relation>  
  <relation name="fUseTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">启用时间</label> 
  </relation>  
  <relation name="fStopTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">停用时间</label> 
  </relation>  
  <relation name="fDisUseTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">停用时间</label> 
  </relation>  
  <relation name="fCanEdit" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">可编辑</label> 
  </relation>  
  <relation name="fCanDelete" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">可删除</label> 
  </relation>  
  <relation name="fPrice" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">单价</label> 
  </relation>  
  <relation name="fAmount" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">合计</label> 
  </relation>  
  <relation name="fCount" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">数量</label> 
  </relation>  
  <relation name="fSurname" data-type="String" single-valued="true"> 
    <label language="zh_CN">姓</label> 
  </relation>  
  <relation name="fFirstname" data-type="String" single-valued="true"> 
    <label language="zh_CN">名</label> 
  </relation>  
  <relation name="fAddress" data-type="String" single-valued="true"> 
    <label language="zh_CN">地址</label> 
  </relation>  
  <relation name="fEmail" data-type="String" single-valued="true"> 
    <label language="zh_CN">电子邮件</label> 
  </relation>  
  <relation name="fPostCode" data-type="String" single-valued="true"> 
    <label language="zh_CN">邮政编码</label> 
  </relation>  
  <relation name="fZip" data-type="String" single-valued="true"> 
    <label language="zh_CN">邮政编码</label> 
  </relation>  
  <relation name="fTelephone" data-type="String" single-valued="true"> 
    <label language="zh_CN">电话</label> 
  </relation>  
  <relation name="fPhone" data-type="String" single-valued="true"> 
    <label language="zh_CN">电话</label> 
  </relation>  
  <relation name="fMobilePhone" data-type="String" single-valued="true"> 
    <label language="zh_CN">手机号码</label> 
  </relation>  
  <relation name="fFax" data-type="String" single-valued="true"> 
    <label language="zh_CN">传真</label> 
  </relation>  
  <relation name="fManager" data-type="String" single-valued="true"> 
    <label language="zh_CN">负责人</label> 
  </relation>  
  <relation name="fShortName" data-type="String" single-valued="true"> 
    <label language="zh_CN">简称</label> 
  </relation>  
  <relation name="fTitle" data-type="String" single-valued="true"> 
    <label language="zh_CN">主题</label> 
  </relation>  
  <relation name="fOrigin" data-type="String" single-valued="true"> 
    <label language="zh_CN">原因</label> 
  </relation>  
  <relation name="fContent" data-type="String" single-valued="true"> 
    <label language="zh_CN">内容</label> 
  </relation>  
  <relation name="fDescription" data-type="String" single-valued="true"> 
    <label language="zh_CN">描述</label> 
  </relation>  
  <relation name="fDeleteFlag" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">禁用标识</label> 
  </relation>  
  <relation name="fDeleteTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">禁用时间</label> 
  </relation>  
  <relation name="fYear" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">年度</label> 
  </relation>  
  <relation name="fMonth" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">月份</label> 
  </relation>  
  <relation name="fCountry" data-type="String" single-valued="true"> 
    <label language="zh_CN">国家</label> 
  </relation>  
  <relation name="fCanton" data-type="String" single-valued="true"> 
    <label language="zh_CN">行政区</label> 
  </relation>  
  <relation name="fProvince" data-type="String" single-valued="true"> 
    <label language="zh_CN">省份</label> 
  </relation>  
  <relation name="fCity" data-type="String" single-valued="true"> 
    <label language="zh_CN">城市</label> 
  </relation>  
  <relation name="fCounty" data-type="String" single-valued="true"> 
    <label language="zh_CN">县</label> 
  </relation>  
  <relation name="fSex" data-type="String" single-valued="true"> 
    <label language="zh_CN">性别</label> 
  </relation>  
  <relation name="fQQ" data-type="String" single-valued="true"> 
    <label language="zh_CN">QQ</label> 
  </relation>  
  <relation name="fMsn" data-type="String" single-valued="true"> 
    <label language="zh_CN">MSN</label> 
  </relation>  
  <relation name="fMail" data-type="String" single-valued="true"> 
    <label language="zh_CN">电子信箱</label> 
  </relation>  
  <relation name="fHomePhone" data-type="String" single-valued="true"> 
    <label language="zh_CN">住宅电话</label> 
  </relation>  
  <relation name="fOfficePhone" data-type="String" single-valued="true"> 
    <label language="zh_CN">办公电话</label> 
  </relation>  
  <relation name="fIDCard" data-type="String" single-valued="true"> 
    <label language="zh_CN">身份证号</label> 
  </relation>  
  <relation name="fAge" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">年龄</label> 
  </relation>  
  <relation name="fBirthday" data-type="Date" single-valued="true"> 
    <label language="zh_CN">出生日期</label> 
  </relation>  
  <relation name="fNativePlace" data-type="String" single-valued="true"> 
    <label language="zh_CN">籍贯</label> 
  </relation>  
  <relation name="fRegisterAddress" data-type="String" single-valued="true"> 
    <label language="zh_CN">户籍所在地</label> 
  </relation>  
  <relation name="fCollege" data-type="String" single-valued="true"> 
    <label language="zh_CN">毕业院校</label> 
  </relation>  
  <relation name="fTrade" data-type="String" single-valued="true"> 
    <label language="zh_CN">行业</label> 
  </relation>  
  <relation name="fCurrency" data-type="String" single-valued="true"> 
    <label language="zh_CN">货币</label> 
  </relation>  
  <relation name="fPath" data-type="String" single-valued="true"> 
    <label language="zh_CN">ID路径</label> 
  </relation>  
  <relation name="fCodePath" data-type="String" single-valued="true"> 
    <label language="zh_CN">Code路径</label> 
  </relation>  
  <relation name="fDisplayPath" data-type="String" single-valued="true"> 
    <label language="zh_CN">Name路径</label> 
  </relation>  
  <relation name="fLevel" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">等级</label> 
  </relation>  
  <relation name="fURL" data-type="String" single-valued="true"> 
    <label language="zh_CN">ID路径</label> 
  </relation>  
  <relation name="fCodeURL" data-type="String" single-valued="true"> 
    <label language="zh_CN">Code路径</label> 
  </relation>  
  <relation name="fDisplayURL" data-type="String" single-valued="true"> 
    <label language="zh_CN">Name路径</label> 
  </relation>  
  <relation name="fBizKind" data-type="String" single-valued="true"> 
    <label language="zh_CN">业务类型</label> 
  </relation>  
  <relation name="fNodeID" data-type="String" single-valued="true"> 
    <label language="zh_CN">环节ID</label> 
  </relation>  
  <relation name="fNodeName" data-type="String" single-valued="true"> 
    <label language="zh_CN">环节名称</label> 
  </relation>  
  <relation name="fNodeBizKind" data-type="String" single-valued="true"> 
    <label language="zh_CN">环节业务类型</label> 
  </relation>  
  <relation name="fTaskID" data-type="String" single-valued="true"> 
    <label language="zh_CN">任务ID</label> 
  </relation>  
  <relation name="fTaskMsgID" data-type="String" single-valued="true"> 
    <label language="zh_CN">任务消息ID</label> 
  </relation>  
  <relation name="fVerdict" data-type="String" single-valued="true"> 
    <label language="zh_CN">处理结论</label> 
  </relation>  
  <relation name="fOpinion" data-type="String" single-valued="true"> 
    <label language="zh_CN">处理意见</label> 
  </relation>  
  <relation name="fSign" data-type="String" single-valued="true"> 
    <label language="zh_CN">签名</label> 
  </relation>  
  <relation name="fPostalcode" data-type="String" single-valued="true"> 
    <label language="zh_CN">邮编</label> 
  </relation>  
  <relation name="fCostCenterID" data-type="String" single-valued="true"> 
    <label language="zh_CN">成本中心ID</label> 
  </relation>  
  <relation name="fAccountID" data-type="String" single-valued="true"> 
    <label language="zh_CN">总账科目ID</label> 
  </relation>  
  <relation name="fCostCenterName" data-type="String" single-valued="true"> 
    <label language="zh_CN">成本中心</label> 
  </relation>  
  <relation name="fCostCenterCode" data-type="String" single-valued="true"> 
    <label language="zh_CN">成本中心编码</label> 
  </relation>  
  <relation name="fAccountName" data-type="String" single-valued="true"> 
    <label language="zh_CN">总账科目</label> 
  </relation>  
  <relation name="fAccountCode" data-type="String" single-valued="true"> 
    <label language="zh_CN">科目编码</label> 
  </relation>  
  <relation name="fIsDefault" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">默认值</label> 
  </relation>  
  <relation name="fDefaultVal" data-type="String" single-valued="true"> 
    <label language="zh_CN">默认值</label> 
  </relation>
  <relation name="fExtendStr1" data-type="String"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendStr2" data-type="String"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendStr3" data-type="String"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendStr4" data-type="String"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendStr5" data-type="String"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendStr6" data-type="String"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendStr7" data-type="String"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendStr8" data-type="String"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendStr9" data-type="String"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendNum1" data-type="Decimal"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendNum2" data-type="Decimal"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendNum3" data-type="Decimal"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendNum4" data-type="Decimal"><label language="zh_CN">扩展字段</label>
</relation>
<relation name="fExtendNum5" data-type="Decimal"><label language="zh_CN">扩展字段</label>
</relation> 
<relation name="fMeetTime" data-type="DateTime"><label language="zh_CN">会议时间</label>
</relation>
<relation name="fMeetPalce" data-type="String"><label language="zh_CN">会议地点</label>
</relation>
<relation name="fMeetReport" data-type="String"><label language="zh_CN">会议批件</label>
</relation>
<relation name="fMeetType" data-type="String"><label language="zh_CN">会议类别</label>
</relation>
<relation name="fMeetTypeCode" data-type="String"><label language="zh_CN">会议类别Code</label>
</relation>
<relation name="fMeetDayCount" data-type="Integer"><label language="zh_CN">会议天数</label>
</relation>
<relation name="fMeetPartnerNum" data-type="Integer"><label language="zh_CN">会议人数</label>
</relation>
<relation name="fRentHouseCost" data-type="String"><label language="zh_CN">房租费</label>
</relation>
<relation name="fRentHouseCostStand" data-type="Integer"><label language="zh_CN">房租费标准</label>
</relation>
<relation name="fEatCost" data-type="String"><label language="zh_CN">伙食费</label>
</relation>
<relation name="fEatCostStadard" data-type="Integer"><label language="zh_CN">伙食费标准</label>
</relation>
<relation name="fOtherCost" data-type="Integer"><label language="zh_CN">其他费用</label>
</relation>
<relation name="fConsultCost" data-type="Integer"><label language="zh_CN">咨询费</label>
</relation>
<relation name="fCostSource" data-type="String"><label language="zh_CN">经费来源</label>
</relation>
</model>
