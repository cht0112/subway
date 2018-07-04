<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<process name="detectionProcess" start="start1" end="end1">
		<label language="zh_CN">检测流程</label>
		<static-activity name="mainActivity">
			<label language="zh_CN">检测流程</label>
		</static-activity>
	<place name="start1"><label language="zh_CN">开始</label>
<has-token token="init"></has-token>
</place>
<token name="init"></token>
<business-activity name="bizActivity1" condition="true"><label language="zh_CN">检测申请</label>
<input name="x" unit="start1"></input>
<output name="x" unit="bizActivity2"></output>
</business-activity>
<business-activity name="bizActivity2" condition="true"><label language="zh_CN">技术审核</label>
<input name="x" unit="bizActivity1"></input>
<output name="x" unit="bizActivity3"></output>
</business-activity>
<business-activity name="bizActivity3" condition="true"><label language="zh_CN">行政审核</label>
<input name="x" unit="bizActivity2"></input>


<output name="x" unit="and1"></output>
</business-activity>



<and-activity name="and1"><label language="zh_CN">AND</label>
<input name="x" unit="bizActivity3"></input>
<output name="x" unit="bizActivity4"></output>
<output name="x" unit="bizActivity5"></output>
</and-activity>
<business-activity name="bizActivity4" condition="true"><label language="zh_CN">制定计划</label>
<input name="x" unit="and1"></input>
<output name="x" unit="and2"></output>
</business-activity>
<business-activity name="bizActivity5" condition="true"><label language="zh_CN">签署协议</label>
<input name="x" unit="and1"></input>
<output name="x" unit="and2"></output>
</business-activity>
<and-activity name="and2"><label language="zh_CN">AND</label>
<input name="x" unit="bizActivity4"></input>
<input name="x" unit="bizActivity5"></input>
<output name="x" unit="bizActivity6"></output>
</and-activity>
<business-activity name="bizActivity6" condition="true"><label language="zh_CN">接收样品</label>
<input name="x" unit="and2"></input>
<output name="x" unit="bizActivity7"></output>


<input name="x" unit="bizActivity10"></input>
</business-activity>
<business-activity name="bizActivity7" condition="true"><label language="zh_CN">执行检测</label>
<input name="x" unit="bizActivity6"></input>
<output name="x" unit="bizActivity8"></output>
</business-activity>
<business-activity name="bizActivity8" condition="true"><label language="zh_CN">结果分析</label>
<input name="x" unit="bizActivity7"></input>


<output name="x" unit="xor1"></output>
</business-activity>

<place name="xor1"><label language="zh_CN">XOR</label>
</place>
<place name="end1"><label language="zh_CN">结束</label>
</place>
<arc name="x" from="xor1" to="end1"></arc>

<business-activity name="bizActivity9" condition="true"><label language="zh_CN">回退</label>
<output name="x" unit="bizActivity10"></output>
<input name="x" unit="xor1"></input>
</business-activity>
<business-activity name="bizActivity10" condition="true"><label language="zh_CN">回退计划</label>
<input name="x" unit="bizActivity9"></input>


<output name="x" unit="bizActivity6"></output>
</business-activity>
</process>
</model>
