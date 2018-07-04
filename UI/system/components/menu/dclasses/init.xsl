<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/*" 
	    xmlns:justep="http://www.justep.com/x5#"
		xmlns:xforms="http://www.justep.com/xforms" 
		xmlns:ev="http://www.w3.org/2001/xml-events"
		xmlns:xui="http://www.justep.com/xui"
		xmlns:xhtml="http://www.w3.org/1999/xhtml">
		<root>
			<xhtml:div>
				<xsl:copy-of select="./@*"></xsl:copy-of>
				<xsl:call-template name="crate-id">
					<xsl:with-param name="item" select="node()">
					</xsl:with-param>
				</xsl:call-template>
			</xhtml:div>
		</root>
	</xsl:template>
	<xsl:template name="crate-id"
		xmlns:justep="http://www.justep.com/x5#"
		xmlns:xforms="http://www.justep.com/xforms" 
		xmlns:ev="http://www.w3.org/2001/xml-events"
		xmlns:xhtml="http://www.w3.org/1999/xhtml"
		xmlns:xui="http://www.justep.com/xui">
		<xsl:param name="item" />
		<xsl:for-each select="$item">
			<xsl:choose>
				<xsl:when test="name() = 'xui:menuitem'">
					<xui:menuitem>
						<xsl:copy-of select="./@*"></xsl:copy-of>
						<xsl:if test="not(@id)">
							<xsl:attribute name="id"><xsl:value-of select="replace(generate-global-id(),'-','_')" /></xsl:attribute>
						</xsl:if>
						<xsl:call-template name="crate-id">
							<xsl:with-param name="item" select="./node()">
							</xsl:with-param>
						</xsl:call-template>
					</xui:menuitem>
				</xsl:when>
				<xsl:when test="name() = 'xui:menuitemset'">
					<xui:menuitemset>
						<xsl:copy-of select="@*"></xsl:copy-of>
						<xsl:copy-of select="*"></xsl:copy-of>
					</xui:menuitemset>
				</xsl:when>
				<xsl:when test="name() = 'xforms:action'">
					<xforms:action>
						<xsl:copy-of select="@*"></xsl:copy-of>
						<xsl:copy-of select="*"></xsl:copy-of>
					</xforms:action>
				</xsl:when>
			</xsl:choose>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>

