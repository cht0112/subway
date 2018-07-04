<?xml version="1.0" encoding="UTF-8"?>
<p:config xmlns:p="http://www.orbeon.com/oxf/pipeline"
	xmlns:oxf="http://www.orbeon.com/oxf/processors"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xslt="http://www.orbeon.com/oxf/processors"
	xmlns:xforms="http://www.justep.com/xforms"
	xmlns:justep="http://www.justep.com/x5#"
	xmlns:ns="http://www.justep.com/x5#"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
	<p:param name="instance" type="input"/>
	<p:param name="data" type="output"/>

	<!--
	<p:processor name="justep:xml-debugger">
		<p:input name="config" href="#instance"/>
	</p:processor>
	-->

	<p:processor name="justep:excute-action">
		<p:input name="request" href="#instance"/>
		<p:output name="response" id="model-result"/>
	</p:processor>

	<p:processor name="oxf:xslt">
		<p:input name="data" href="#model-result"/>
		<p:input name="config">
			<xsl:stylesheet version="2.0">
				<xsl:template match="/*">
					<rdf:RDF>
						<xsl:attribute name="success">
							<xsl:value-of select="/root/flag"/>
						</xsl:attribute>
						<xsl:attribute name="message">
							<xsl:value-of select="/root/message"/>
						</xsl:attribute>
						<xsl:attribute name="count">
							<xsl:choose>
								<xsl:when test="/root/data/count">
									<xsl:value-of select="/root/data/count"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="'-1'"/>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:attribute>
						<xsl:choose>
							<xsl:when test="/root/data/rdf:RDF">
								<xsl:copy-of select="/root/data/rdf:RDF/*"/>
							</xsl:when>
							<xsl:otherwise>
								<xsl:value-of select="/root/data/text()"/>
								<xsl:copy-of select="/root/data/*"/>
							</xsl:otherwise>
						</xsl:choose>
					</rdf:RDF>
				</xsl:template>
			</xsl:stylesheet>
		</p:input>
		<p:output name="data" ref="data" id="result"/>
	</p:processor>

	<!--
	<p:processor name="justep:xml-debugger">
		<p:input name="config" href="#result"/>
	</p:processor>
	-->
</p:config>