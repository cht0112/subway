<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/root/*" 
	    xmlns:justep="http://www.justep.com/x5#"
		xmlns:xforms="http://www.justep.com/xforms" 
		xmlns:ev="http://www.w3.org/2001/xml-events"
		xmlns:xhtml="http://www.w3.org/1999/xhtml"
		xmlns:xui="http://www.justep.com/xui">
		<root>
			<xsl:variable name="menu-id">
				<xsl:choose>
					<xsl:when test="@menu-id">
						<xsl:value-of select="@menu-id"></xsl:value-of>
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="replace(generate-global-id(),'-','_')" />
					</xsl:otherwise>
				</xsl:choose>
			</xsl:variable>

			<xhtml:div xmlns:xui="http://www.justep.com/xui" xblid="menuitemsets"
				style="display:none">
				<xsl:attribute name="menuid"><xsl:value-of select="$menu-id" /></xsl:attribute>
				<xsl:for-each select="//xui:menuitemset">
					<xhtml:span>
						<xsl:attribute name="data"><xsl:value-of
							select="@data" /></xsl:attribute>
						<xsl:attribute name="id"><xsl:value-of
							select="if(@id) then @id else replace(generate-global-id(),'-','_')" /></xsl:attribute>
						<xsl:attribute name="init-loaded"><xsl:value-of
							select="if(@init-loaded) then @init-loaded else 'true'" /></xsl:attribute>
						<xsl:attribute name="replace"><xsl:value-of
							select="if(@replace) then @replace else 'true'" /></xsl:attribute>
						<xsl:attribute name="parentID"><xsl:value-of
							select="..[local-name(.)='menuitem']/@id" /></xsl:attribute>
						<xsl:for-each select="node()">
							<xhtml:span>
								<xsl:attribute name="name"><xsl:value-of
									select="local-name(.)" /></xsl:attribute>
								<xsl:attribute name="value"><xsl:value-of
									select="@ref" /></xsl:attribute>
							</xhtml:span>
						</xsl:for-each>
					</xhtml:span>
				</xsl:for-each>
			</xhtml:div>

			<xforms:menu>
				<xsl:attribute name="id"><xsl:value-of select="$menu-id" /></xsl:attribute>
				<xsl:attribute name="appearance">
											<xsl:choose>
												<xsl:when test="@appearance">
													<xsl:value-of select="@appearance" />
												</xsl:when>
												<xsl:otherwise>
													<xsl:text>general</xsl:text>
												</xsl:otherwise>
											</xsl:choose>
				</xsl:attribute>
				<xsl:attribute name="open-mode">
											<xsl:choose>
												<xsl:when test="@open-mode">
													<xsl:value-of select="@open-mode" />
												</xsl:when>
												<xsl:otherwise>
													<xsl:text>web</xsl:text>
												</xsl:otherwise>
											</xsl:choose>
				</xsl:attribute>

				<xsl:if test="@targetID">
					<xsl:attribute name="targetID"><xsl:value-of select="@targetID"></xsl:value-of></xsl:attribute>
				</xsl:if>

				<xsl:if test="@img">
					<xsl:attribute name="img"><xsl:value-of select="@img"></xsl:value-of></xsl:attribute>
				</xsl:if>

				<xsl:if test="@disImg">
					<xsl:attribute name="disImg"><xsl:value-of select="@disImg"></xsl:value-of></xsl:attribute>
				</xsl:if>

				<xsl:call-template name="build-menu-items">
					<xsl:with-param name="item" select="node()">
					</xsl:with-param>
				</xsl:call-template>
			</xforms:menu>
		</root>
	</xsl:template>

	<xsl:template name="build-menu-items"
		xmlns:justep="http://www.justep.com/x5#"
		xmlns:xforms="http://www.justep.com/xforms" 
		xmlns:ev="http://www.w3.org/2001/xml-events"
		xmlns:xhtml="http://www.w3.org/1999/xhtml"
		xmlns:xui="http://www.justep.com/xui">
		<xsl:param name="item" />
		<xsl:for-each select="$item">
			<xsl:choose>
				<xsl:when test="name() = 'xui:menuitem'">
					<xforms:menuitem>
						<xsl:copy-of select="./@*"></xsl:copy-of>
						<xsl:if test="not(@id)">
							<xsl:attribute name="id"><xsl:value-of select="replace(generate-global-id(),'-','_')" /></xsl:attribute>
						</xsl:if>
						<xsl:call-template name="build-menu-items">
							<xsl:with-param name="item" select="node()">
							</xsl:with-param>
						</xsl:call-template>
					</xforms:menuitem>
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

