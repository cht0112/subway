
<xsl:stylesheet  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
	<xsl:template match="/">
		<xsl:choose>
			<xsl:when test="/root/flag='true'">
				<root>
					<xsl:apply-templates select="/root/data" />
				</root>
			</xsl:when>
			<xsl:otherwise>
				<root>
					<flag>
						<xsl:value-of select="/root/flag" />
					</flag>
					<message>
						<xsl:value-of select="/root/message" />
					</message>
				</root>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template match="/root/data">
		<flag>
			<xsl:value-of select="/root/flag" />
		</flag>
		<text>
				    <![CDATA[						    
					 <div style="text-align:left;white-space:nowrap">
						<a href="javascript:void(0)" style="display:block;text-decoration:none;color:#333;line-height:27px;display:inline;padding:0px 5px;">未处理提醒		  
					 ]]><xsl:value-of select="/root/data/*/remindCount/@remindCount" /><![CDATA[条</a>
					 </div>
				    ]]>
		</text>
		<parameters>
			<openType><![CDATA[dialog]]></openType>
			<url><![CDATA[/SA/task/remind/showActivity.w?process=/SA/task/remind/remindProcess&activity=mainActivity]]></url>
			<title><![CDATA[提醒窗口1]]></title>
			<width><![CDATA[640]]></width>
			<height><![CDATA[480]]></height>
		</parameters>
	</xsl:template>
</xsl:stylesheet>
	