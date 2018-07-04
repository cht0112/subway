<?xml version="1.0" encoding="UTF-8"?>

<p:config xmlns:p="http://www.orbeon.com/oxf/pipeline"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:oxf="http://www.orbeon.com/oxf/processors"
	xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xxforms="http://orbeon.org/oxf/xml/xforms"
	xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:f="http://orbeon.org/oxf/xml/formatting"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:justep="http://www.justep.com/x5#"
	xmlns:ns="http://www.justep.com/x5#">

	<p:param name="instance" type="input"/>
	<p:param name="data" type="output"/>
	
	<p:processor name="oxf:xslt">
		<p:input name="data" href="#instance" />
		<p:input name="config">
			<xsl:stylesheet version="2.0">
				<xsl:template match="/">
					<rows xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:p="http://www.orbeon.com/oxf/pipeline"
							xmlns:oxf="http://www.orbeon.com/oxf/processors" xmlns:xslt="http://www.orbeon.com/oxf/processors"
							xmlns:saxon="http://saxon.sf.net/" xmlns:xforms="http://www.justep.com/xforms"
							xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xxforms="http://orbeon.org/oxf/xml/xforms"
							xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:f="http://orbeon.org/oxf/xml/formatting"
							xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
							xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:widget="http://orbeon.org/oxf/xml/widget"
							xmlns:exf="http://www.exforms.org/exf/1-0" xmlns:ajx="http://www.ajaxforms.net/2006/ajx"
							xmlns:justep="http://www.justep.com/x5#" xmlns:ns="http://www.justep.com/x5#"
							xmlns:xreport="http://www.justep.com/x5/xreport" xmlns:data="http://www.justep.com/x5/xui/data#"
							xmlns:xblcompliexblns="http://www.w3.org/ns/xbl">
  						<row id="root">
  							<cell>文档关联</cell>
  						</row>
					</rows>
				</xsl:template>
			</xsl:stylesheet>
		</p:input>
		<p:output name="data" id="dataRoot" />
	</p:processor>
	
	<p:processor name="oxf:xupdate">
		<p:input name="data" href="#dataRoot" />
		<p:input name="instance" href="#instance"/>
		<p:input name="config">
			<xu:modifications xmlns:xu="http://www.xmldb.org/xupdate" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
				xmlns:justep="http://www.justep.com/x5#" xmlns:ns="http://www.justep.com/x5#">
				<xu:variable name="root" select="/rows/row[@id='root']" />
				<xu:for-each select="doc('input:instance')/rows/row">
					<xu:variable name="row" select="." />
					<xu:if test="not($root/row[@id=$row/cell[2]])">
						<xu:append select="$root">
			             	<xu:element name="row">
			             		<xu:attribute name="id">
			             			<xu:value-of select="$row/cell[2]" />
			             		</xu:attribute>
								<xu:element name="cell">
			             			<xu:value-of select="$row/cell[2]" />
								</xu:element>
			             	</xu:element>
           				</xu:append>
					</xu:if>
					<xu:append select="$root/row[@id=$row/cell[2]]">
						<xu:copy-of select="$row" />
					</xu:append>
				</xu:for-each>
			</xu:modifications>
		</p:input>
		<p:output name="data" id="treeData" ref="data"/>
	</p:processor>
	
</p:config>


