<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="OA_MT_BudgetApplyExecute"/>
<store name="OA_MT_BudgetApply"/>
  <store name="OA_MT_ArrangePsns"/>
  <store name="OA_MT_Boardroom"/>
  <store name="OA_MT_UseApplyPsns"/>
  <store name="OA_MT_Summary"/>
  <store name="OA_MT_SummaryIssue"/>
  <store name="OA_MT_BoardroomType"/>
  <store name="OA_MT_UseExecute"/>
  <store name="OA_MT_UseApply"/>
  <store name="OA_MT_RoomArrange"/>  
  <mapping concept="OA_MT_ArrangePsns">
    <table name="OA_MT_ArrangePsns" type="owner-table">
      <key field="fID" type="String"/>
    </table>
  </mapping>
  <mapping concept="OA_MT_Boardroom">
    <table name="OA_MT_Boardroom" type="owner-table">
      <key field="fID" type="String"/>
    </table>
  </mapping>
  <mapping concept="OA_MT_UseApplyPsns">
    <table name="OA_MT_UseApplyPsns" type="owner-table">
      <key field="fID" type="String"/>
    </table>
  </mapping>
  <mapping concept="OA_MT_Summary">
    <table name="OA_MT_Summary" type="owner-table">
      <key field="fID" type="String"/>
    </table>
  </mapping>
  <mapping concept="OA_MT_SummaryIssue">
    <table name="OA_MT_SummaryIssue" type="owner-table">
      <key field="fID" type="String"/>
    </table>
  </mapping>
  <mapping concept="OA_MT_BoardroomType">
    <table name="OA_Pub_BaseCode" type="owner-table">
      <key field="fID" type="String"/>
      <discriminator field="fScope" value="会议室类型"/>
    </table>
  </mapping>
  <mapping concept="OA_MT_UseExecute">
    <table name="OA_PUB_Execute" type="owner-table">
      <key field="fID" type="String"/>
      <discriminator field="fBizKind" value="会议室使用申请"/>
    </table>
  </mapping>
  <mapping concept="OA_MT_UseApply">
    <table name="OA_MT_UseApply" type="owner-table">
      <key field="fID" type="String"/>
    </table>
  </mapping>
  <mapping concept="OA_MT_RoomArrange">
    <table name="OA_MT_RoomArrange" type="owner-table">
      <key field="fID" type="String"/>
    </table>
  </mapping>
</model>