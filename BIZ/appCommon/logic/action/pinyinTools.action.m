<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="generatePinyinAction" global="false" procedure="generatePinyinProcedure"><label language="zh_CN">生成拼音</label>
<public type="String" required="true" name="dataModel"/>
<public type="String" required="true" name="concept"/>
<public type="String" required="true" name="chineseRelation"/>
<public type="String" required="true" name="simplePinyinRelation"/>
<public type="String" required="true" name="fullPinyinRelation"/>
</action>

</model>