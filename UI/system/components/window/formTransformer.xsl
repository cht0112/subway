<xsl:stylesheet version="2.0"
	xmlns:excel="urn:schemas-microsoft-com:office:spreadsheet"
	xmlns:excelproperty="urn:schemas-microsoft-com:office:office"
	xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
	xmlns:x="urn:schemas-microsoft-com:office:excel"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xs="http://www.w3.org/2001/XMLSchema"
	xmlns:xui="http://www.justep.com/xui"
	xmlns:xforms="http://www.justep.com/xforms">

	<xsl:output encoding="UTF-8"/>
	
	<xsl:variable name="COLWIDTHCONS">
		<xsl:choose>
			<xsl:when test="count(/excel:Workbook/excel:Worksheet[1]/x:WorksheetOptions/x:DisplayFormulas) &gt; 0">
				<xsl:text>2</xsl:text>
			</xsl:when>
			<xsl:otherwise>
				<xsl:text>1</xsl:text>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	
	<xsl:variable name="ROWCOUNT" select="xs:integer(/excel:Workbook/excel:Worksheet[1]/excel:Table/@ss:ExpandedRowCount)"/>
	<xsl:variable name="COLUMNCOUNT" select="xs:integer(/excel:Workbook/excel:Worksheet[1]/excel:Table/@ss:ExpandedColumnCount)"/>
	<xsl:variable name="ROWNUMBER" select="count(/excel:Workbook/excel:Worksheet[1]/excel:Table/excel:Row)"/>
	<xsl:variable name="COLUMNNUMBER" select="count(/excel:Workbook/excel:Worksheet[1]/excel:Table/excel:Column)"/>
	<xsl:variable name="DEFROWHEIGHT" select="round(xs:decimal(/excel:Workbook/excel:Worksheet[1]/excel:Table/@ss:DefaultRowHeight) div 0.78)"/>
	<xsl:variable name="DEFCOLWIDTH" select="round(xs:decimal(/excel:Workbook/excel:Worksheet[1]/excel:Table/@ss:DefaultColumnWidth) div 0.78 * $COLWIDTHCONS)"/>

	<xsl:template match="excel:Workbook">
		<xsl:element name="xui:layout">
			<xsl:attribute name="type">
				<xsl:text>excel</xsl:text>
			</xsl:attribute>

			<xsl:element name="xhtml:table">
				<xsl:variable name="BG">
					<xsl:call-template name="get_table_background">
						<xsl:with-param name="INDEX" select="0"/>
					</xsl:call-template>
				</xsl:variable>

				<xsl:attribute name="border">
					<xsl:text>0</xsl:text>
				</xsl:attribute>
				<xsl:attribute name="cellpadding">
					<xsl:text>0</xsl:text>
				</xsl:attribute>
				<xsl:attribute name="cellspacing">
					<xsl:text>0</xsl:text>
				</xsl:attribute>
				<xsl:attribute name="class">
					<xsl:text>no-editor-border</xsl:text>
				</xsl:attribute>
				<xsl:attribute name="style">
					<xsl:text>border-collapse: collapse; table-layout: fixed;</xsl:text>

					<xsl:call-template name="background_processor">
						<xsl:with-param name="BACKGROUND" select="$BG"/>
						<xsl:with-param name="TYPE" select="1"/>
					</xsl:call-template>

					<xsl:call-template name="style_background">
						<xsl:with-param name="BACKGROUND" select="$BG"/>
						<xsl:with-param name="TYPE" select="1"/>
					</xsl:call-template>

					<xsl:call-template name="get_table_width">
						<xsl:with-param name="INDEX" select="1"/>
					</xsl:call-template>
					
					<xsl:call-template name="get_table_height">
						<xsl:with-param name="INDEX" select="1"/>
					</xsl:call-template>					
				</xsl:attribute>

				<xsl:call-template name="table_processor"/>
			</xsl:element>
		</xsl:element>
	</xsl:template>

	<xsl:template name="get_table_height">
		<xsl:param name="INDEX"/>
		<xsl:param name="HEIGHT" select="0"/>

		<xsl:choose>
			<xsl:when test="xs:integer($INDEX) &lt;= xs:integer($ROWCOUNT)">
				<xsl:choose>
					<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($INDEX)]/@ss:Height)!=''">
						<xsl:variable name="CURRROWHEIGHT">
							<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($INDEX)]/@ss:Height) div 0.78)"/>
						</xsl:variable>
						
						<xsl:call-template name="get_table_height">
							<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
							<xsl:with-param name="HEIGHT" select="xs:integer($HEIGHT) + xs:integer($CURRROWHEIGHT)"/>
						</xsl:call-template>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="get_table_height">
							<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
							<xsl:with-param name="HEIGHT" select="xs:integer($HEIGHT) + xs:integer($DEFROWHEIGHT)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="concat('height:', xs:integer($HEIGHT), 'px;')"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="get_table_width">
		<xsl:param name="INDEX"/>
		<xsl:param name="WIDTH" select="0"/>

		<xsl:choose>
			<xsl:when test="xs:integer($INDEX) &lt;= xs:integer($COLUMNCOUNT)">
				<xsl:variable name="CURRCOLWIDTH">
					<xsl:call-template name="get_table_column_width">
						<xsl:with-param name="FINDINDEX" select="xs:integer($INDEX)"/>
						<xsl:with-param name="FINDPOSITION" select="1"/>
						<xsl:with-param name="PRIORINDEX" select="0"/>
						<xsl:with-param name="STARTINDEX" select="1"/>
						<xsl:with-param name="ENDINDEX" select="xs:integer($COLUMNCOUNT)"/>
						<xsl:with-param name="FRONTINDENT" select="0"/>
						<xsl:with-param name="BACKINDENT" select="0"/>
					</xsl:call-template>
				</xsl:variable>
			
				<xsl:call-template name="get_table_width">
					<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
					<xsl:with-param name="WIDTH" select="xs:integer($WIDTH) + xs:integer($CURRCOLWIDTH)"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="concat('width:', $WIDTH, 'px;')"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_processor">
		<xsl:element name="xhtml:tr">
			<xsl:attribute name="height">
				<xsl:text>0</xsl:text>
			</xsl:attribute>

			<xsl:call-template name="table_column">
				<xsl:with-param name="INDEX" select="1"/>
				<xsl:with-param name="STARTINDEX" select="1"/>
				<xsl:with-param name="COUNT" select="xs:integer($COLUMNCOUNT)"/>
				<xsl:with-param name="FRONTINDENT" select="0"/>
				<xsl:with-param name="BACKINDENT" select="0"/>
			</xsl:call-template>
		</xsl:element>

		<xsl:call-template name="table_row">
			<xsl:with-param name="INDEX" select="1"/>
			<xsl:with-param name="REPEATSTARTROW" select="0"/>
			<xsl:with-param name="REPEATSTARTCOL" select="0"/>
			<xsl:with-param name="REPEATENDROW" select="0"/>
			<xsl:with-param name="REPEATENDCOL" select="0"/>
		</xsl:call-template>
	</xsl:template>

	<xsl:template name="table_column">
		<xsl:param name="INDEX"/>
		<xsl:param name="STARTINDEX"/>
		<xsl:param name="COUNT"/>
		<xsl:param name="FRONTINDENT"/>
		<xsl:param name="BACKINDENT"/>

		<xsl:element name="xhtml:td">
			<xsl:attribute name="width">
				<xsl:call-template name="get_table_column_width">
					<xsl:with-param name="FINDINDEX" select="xs:integer($INDEX)"/>
					<xsl:with-param name="FINDPOSITION" select="1"/>
					<xsl:with-param name="PRIORINDEX" select="0"/>
					<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
					<xsl:with-param name="ENDINDEX" select="xs:integer($COUNT)"/>
					<xsl:with-param name="FRONTINDENT" select="xs:integer($FRONTINDENT)"/>
					<xsl:with-param name="BACKINDENT" select="xs:integer($BACKINDENT)"/>
				</xsl:call-template>
				<xsl:text>px</xsl:text>
			</xsl:attribute>
		</xsl:element>

		<xsl:if test="xs:integer($INDEX) &lt; xs:integer($COUNT)">
			<xsl:call-template name="table_column">
				<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
				<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
				<xsl:with-param name="COUNT" select="xs:integer($COUNT)"/>
				<xsl:with-param name="FRONTINDENT" select="xs:integer($FRONTINDENT)"/>
				<xsl:with-param name="BACKINDENT" select="xs:integer($BACKINDENT)"/>
			</xsl:call-template>
		</xsl:if>
	</xsl:template>

	<xsl:template name="get_table_column_width">
		<xsl:param name="FINDINDEX"/>
		<xsl:param name="FINDPOSITION"/>
		<xsl:param name="PRIORINDEX"/>
		<xsl:param name="STARTINDEX"/>
		<xsl:param name="ENDINDEX"/>
		<xsl:param name="FRONTINDENT"/>
		<xsl:param name="BACKINDENT"/>

		<xsl:variable name="CURRINDEX">
			<xsl:choose>
				<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Index)!=''">
					<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Index)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($CURRINDEX) = xs:integer($FINDINDEX)">
				<!--  
				<xsl:attribute name="width">
				-->
					<xsl:choose>
						<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width)!=''">
							<xsl:choose>
								<xsl:when test="(xs:integer($FINDINDEX) = xs:integer($STARTINDEX)) and (xs:integer($FINDINDEX) = xs:integer($ENDINDEX))">
									<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width) div 0.78 * $COLWIDTHCONS) - xs:integer($FRONTINDENT) - xs:integer($BACKINDENT)"/>
								</xsl:when>
								<xsl:when test="xs:integer($FINDINDEX) = xs:integer($STARTINDEX)">
									<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width) div 0.78 * $COLWIDTHCONS) - xs:integer($FRONTINDENT)"/>
								</xsl:when>
								<xsl:when test="xs:integer($FINDINDEX) = xs:integer($ENDINDEX)">
									<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width) div 0.78 * $COLWIDTHCONS) - xs:integer($BACKINDENT)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width) div 0.78 * $COLWIDTHCONS)"/>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:when>
						<xsl:otherwise>
							<xsl:choose>
								<xsl:when test="(xs:integer($FINDINDEX) = xs:integer($STARTINDEX)) and (xs:integer($FINDINDEX) = xs:integer($ENDINDEX))">
									<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($FRONTINDENT) - xs:integer($BACKINDENT)"/>
								</xsl:when>
								<xsl:when test="xs:integer($FINDINDEX) = xs:integer($STARTINDEX)">
									<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($FRONTINDENT)"/>
								</xsl:when>
								<xsl:when test="xs:integer($FINDINDEX) = xs:integer($ENDINDEX)">
									<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($BACKINDENT)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="xs:integer($DEFCOLWIDTH)"/>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:otherwise>
					</xsl:choose>
<!--  
					<xsl:text>px</xsl:text>
				</xsl:attribute>
-->
			</xsl:when>
			<xsl:when test="xs:integer($CURRINDEX) &gt; xs:integer($FINDINDEX)">
			<!--  
				<xsl:attribute name="width">
			-->
					<xsl:choose>
						<xsl:when test="(xs:integer($FINDINDEX) = xs:integer($STARTINDEX)) and (xs:integer($FINDINDEX) = xs:integer($ENDINDEX))">
							<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($FRONTINDENT) - xs:integer($BACKINDENT)"/>
						</xsl:when>
						<xsl:when test="xs:integer($FINDINDEX) = xs:integer($STARTINDEX)">
							<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($FRONTINDENT)"/>
						</xsl:when>
						<xsl:when test="xs:integer($FINDINDEX) = xs:integer($ENDINDEX)">
							<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($BACKINDENT)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="xs:integer($DEFCOLWIDTH)"/>
						</xsl:otherwise>
					</xsl:choose>
<!--  
					<xsl:text>px</xsl:text>
				</xsl:attribute>
-->
			</xsl:when>
			<xsl:otherwise>
				<xsl:choose>
					<xsl:when test="xs:integer($FINDPOSITION) &gt; xs:integer($COLUMNNUMBER)">
<!--  
						<xsl:attribute name="width">
-->					
							<xsl:choose>
								<xsl:when test="(xs:integer($FINDINDEX) = xs:integer($STARTINDEX)) and (xs:integer($FINDINDEX) = xs:integer($ENDINDEX))">
									<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($FRONTINDENT) - xs:integer($BACKINDENT)"/>
								</xsl:when>
								<xsl:when test="xs:integer($FINDINDEX) = xs:integer($STARTINDEX)">
									<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($FRONTINDENT)"/>
								</xsl:when>
								<xsl:when test="xs:integer($FINDINDEX) = xs:integer($ENDINDEX)">
									<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($BACKINDENT)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="xs:integer($DEFCOLWIDTH)"/>
								</xsl:otherwise>
							</xsl:choose>
<!--  
							<xsl:text>px</xsl:text>
						</xsl:attribute>
-->
					</xsl:when>
					<xsl:otherwise>
						<xsl:variable name="COLSPAN">
							<xsl:if test="string(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Span)!=''">
								<xsl:value-of select="excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Span"/>
							</xsl:if>
						</xsl:variable>

						<xsl:choose>
							<xsl:when test="string($COLSPAN)!=''">
								<xsl:choose>
									<xsl:when test="xs:integer($CURRINDEX) + xs:integer($COLSPAN) &gt;= xs:integer($FINDINDEX)">
<!--  
										<xsl:attribute name="width">
-->									
											<xsl:choose>
												<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width)!=''">
													<xsl:choose>
														<xsl:when test="(xs:integer($FINDINDEX) = xs:integer($STARTINDEX)) and (xs:integer($FINDINDEX) = xs:integer($ENDINDEX))">
															<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width) div 0.78 * $COLWIDTHCONS) - xs:integer($FRONTINDENT) - xs:integer($BACKINDENT)"/>
														</xsl:when>
														<xsl:when test="xs:integer($FINDINDEX) = xs:integer($STARTINDEX)">
															<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width) div 0.78 * $COLWIDTHCONS) - xs:integer($FRONTINDENT)"/>
														</xsl:when>
														<xsl:when test="xs:integer($FINDINDEX) = xs:integer($ENDINDEX)">
															<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width) div 0.78 * $COLWIDTHCONS) - xs:integer($BACKINDENT)"/>
														</xsl:when>
														<xsl:otherwise>
															<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Column[xs:integer($FINDPOSITION)]/@ss:Width) div 0.78 * $COLWIDTHCONS)"/>
														</xsl:otherwise>
													</xsl:choose>
												</xsl:when>
												<xsl:otherwise>
													<xsl:choose>
														<xsl:when test="(xs:integer($FINDINDEX) = xs:integer($STARTINDEX)) and (xs:integer($FINDINDEX) = xs:integer($ENDINDEX))">
															<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($FRONTINDENT) - xs:integer($BACKINDENT)"/>
														</xsl:when>
														<xsl:when test="xs:integer($FINDINDEX) = xs:integer($STARTINDEX)">
															<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($FRONTINDENT)"/>
														</xsl:when>
														<xsl:when test="xs:integer($FINDINDEX) = xs:integer($ENDINDEX)">
															<xsl:value-of select="xs:integer($DEFCOLWIDTH) - xs:integer($BACKINDENT)"/>
														</xsl:when>
														<xsl:otherwise>
															<xsl:value-of select="xs:integer($DEFCOLWIDTH)"/>
														</xsl:otherwise>
													</xsl:choose>
												</xsl:otherwise>
											</xsl:choose>
<!--  
											<xsl:text>px</xsl:text>
										</xsl:attribute>
-->
									</xsl:when>
									<xsl:otherwise>
										<xsl:call-template name="get_table_column_width">
											<xsl:with-param name="FINDINDEX" select="xs:integer($FINDINDEX)"/>
											<xsl:with-param name="FINDPOSITION" select="xs:integer($FINDPOSITION) + 1"/>
											<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX) + xs:integer($COLSPAN)"/>
											<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
											<xsl:with-param name="ENDINDEX" select="xs:integer($ENDINDEX)"/>
											<xsl:with-param name="FRONTINDENT" select="xs:integer($FRONTINDENT)"/>
											<xsl:with-param name="BACKINDENT" select="xs:integer($BACKINDENT)"/>
										</xsl:call-template>
									</xsl:otherwise>
								</xsl:choose>
							</xsl:when>
							<xsl:otherwise>
								<xsl:call-template name="get_table_column_width">
									<xsl:with-param name="FINDINDEX" select="xs:integer($FINDINDEX)"/>
									<xsl:with-param name="FINDPOSITION" select="xs:integer($FINDPOSITION) + 1"/>
									<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX)"/>
									<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
									<xsl:with-param name="ENDINDEX" select="xs:integer($ENDINDEX)"/>
									<xsl:with-param name="FRONTINDENT" select="xs:integer($FRONTINDENT)"/>
									<xsl:with-param name="BACKINDENT" select="xs:integer($BACKINDENT)"/>
								</xsl:call-template>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_row">
		<xsl:param name="INDEX"/>
		<xsl:param name="REPEATSTARTROW"/>
		<xsl:param name="REPEATSTARTCOL"/>
		<xsl:param name="REPEATENDROW"/>
		<xsl:param name="REPEATENDCOL"/>

		<xsl:variable name="RSCR">
			<xsl:choose>
				<xsl:when test="xs:integer($INDEX) &gt; xs:integer($REPEATENDROW)">
					<xsl:call-template name="table_repeat_range_start">
						<xsl:with-param name="STARTINDEX" select="xs:integer($INDEX)"/>
						<xsl:with-param name="FINDPOSITION" select="1"/>
						<xsl:with-param name="PRIORINDEX" select="0"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="concat($REPEATSTARTCOL, ',', $REPEATSTARTROW, ',', 1)"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:variable name="RSC">
			<xsl:value-of select="xs:integer(substring-before($RSCR, ','))"/>
		</xsl:variable>

		<xsl:variable name="RSR">
			<xsl:value-of select="xs:integer(substring-before(substring-after($RSCR, ','), ','))"/>
		</xsl:variable>

		<xsl:variable name="RPOS">
			<xsl:value-of select="xs:integer(substring-after(substring-after($RSCR, ','), ','))"/>
		</xsl:variable>

		<xsl:variable name="RECR">
			<xsl:choose>
				<xsl:when test="(xs:integer($INDEX) &gt; xs:integer($REPEATENDROW)) and (xs:integer($RSR) &gt; 0)">
					<xsl:call-template name="table_repeat_range_end">
						<xsl:with-param name="STARTINDEX" select="xs:integer($RSR)"/>
						<xsl:with-param name="FINDPOSITION" select="xs:integer($RPOS)"/>
						<xsl:with-param name="PRIORINDEX" select="xs:integer($RSR) - 1"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:choose>
						<xsl:when test="xs:integer($RSR) &gt; 0">
							<xsl:value-of select="concat($REPEATENDCOL, ',', $REPEATENDROW)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:text>0,0</xsl:text>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:variable name="REC">
			<xsl:value-of select="xs:integer(substring-before($RECR, ','))"/>
		</xsl:variable>

		<xsl:variable name="RER">
			<xsl:value-of select="xs:integer(substring-after($RECR, ','))"/>
		</xsl:variable>

		<xsl:element name="xhtml:tr">
			<xsl:call-template name="table_row_data">
				<xsl:with-param name="FINDINDEX" select="xs:integer($INDEX)"/>
				<xsl:with-param name="FINDPOSITION" select="1"/>
				<xsl:with-param name="PRIORINDEX" select="0"/>
				<xsl:with-param name="STARTCOL" select="1"/>
				<xsl:with-param name="ENDCOL" select="xs:integer($COLUMNCOUNT)"/>
				<xsl:with-param name="REPEATSTARTROW" select="xs:integer($RSR)"/>
				<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($RSC)"/>
				<xsl:with-param name="REPEATENDROW" select="xs:integer($RER)"/>
				<xsl:with-param name="REPEATENDCOL" select="xs:integer($REC)"/>
			</xsl:call-template>
		</xsl:element>

		<xsl:if test="xs:integer($INDEX) &lt; xs:integer($ROWCOUNT)">
			<xsl:call-template name="table_row">
				<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
				<xsl:with-param name="REPEATSTARTROW" select="xs:integer($RSR)"/>
				<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($RSC)"/>
				<xsl:with-param name="REPEATENDROW" select="xs:integer($RER)"/>
				<xsl:with-param name="REPEATENDCOL" select="xs:integer($REC)"/>
			</xsl:call-template>
		</xsl:if>
	</xsl:template>

	<xsl:template name="table_repeat_range_start">
		<xsl:param name="STARTINDEX"/>
		<xsl:param name="FINDPOSITION"/>
		<xsl:param name="PRIORINDEX"/>

		<xsl:variable name="CURRINDEX">
			<xsl:choose>
				<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($FINDPOSITION)]/@ss:Index)!=''">
					<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($FINDPOSITION)]/@ss:Index)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($FINDPOSITION) &gt; xs:integer($ROWNUMBER)">
				<xsl:text>0,0,1</xsl:text>
			</xsl:when>
			<xsl:when test="xs:integer($CURRINDEX) &gt;= xs:integer($STARTINDEX)">
				<xsl:call-template name="table_repeat_range_start_cell">
					<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
					<xsl:with-param name="ROWPOSITION" select="xs:integer($FINDPOSITION)"/>
					<xsl:with-param name="ROWINDEX" select="xs:integer($CURRINDEX)"/>
					<xsl:with-param name="CELLPOSITION" select="1"/>
					<xsl:with-param name="PRIORINDEX" select="0"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="table_repeat_range_start">
					<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
					<xsl:with-param name="FINDPOSITION" select="xs:integer($FINDPOSITION) + 1"/>
					<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX)"/>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="get_table_background">
		<xsl:param name="INDEX"/>

		<xsl:if test="xs:integer($INDEX)&lt;count(excel:Worksheet[1]/excel:Table//excel:Cell)">			
			<xsl:variable name="CD">
				<xsl:value-of select="excel:Worksheet[1]/excel:Table//excel:Cell[$INDEX]/excel:Data"/>
			</xsl:variable>

			<xsl:choose>
				<xsl:when test="contains($CD, '#background{')=true()">
					<xsl:variable name="BG">
						<xsl:value-of select="substring-before(substring-after($CD, '#background{'), '}')"/>
					</xsl:variable>

					<xsl:choose>
						<xsl:when test="contains($BG, ',')=true()">
							<xsl:variable name="VAR1">
								<xsl:value-of select="substring-after($BG, ',')"/>
							</xsl:variable>

							<xsl:choose>
								<xsl:when test="contains($VAR1, ',')=true()">
									<xsl:variable name="VAR2">
										<xsl:value-of select="substring-after($VAR1, ',')"/>
									</xsl:variable>

									<xsl:choose>
										<xsl:when test="contains($VAR2, ',')=true()">
											<xsl:variable name="BT">
												<xsl:value-of select="substring-before($VAR2, ',')"/>
											</xsl:variable>

											<xsl:choose>
												<xsl:when test="normalize-space(string($BT))='1'">
													<xsl:value-of select="$BG"/>
												</xsl:when>
												<xsl:otherwise>
													<xsl:call-template name="get_table_background">
														<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
													</xsl:call-template>
												</xsl:otherwise>
											</xsl:choose>
										</xsl:when>
										<xsl:otherwise>
											<xsl:choose>
												<xsl:when test="normalize-space(string($VAR2))='1'">
													<xsl:value-of select="$BG"/>
												</xsl:when>
												<xsl:otherwise>
													<xsl:call-template name="get_table_background">
														<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
													</xsl:call-template>
												</xsl:otherwise>
											</xsl:choose>
										</xsl:otherwise>
									</xsl:choose>
								</xsl:when>
								<xsl:otherwise>
									<xsl:call-template name="get_table_background">
										<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
									</xsl:call-template>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:when>
						<xsl:otherwise>
							<xsl:call-template name="get_table_background">
								<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
							</xsl:call-template>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:when>
				<xsl:otherwise>
					<xsl:call-template name="get_table_background">
						<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
					</xsl:call-template>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="table_repeat_range_start_cell">
		<xsl:param name="STARTINDEX"/>
		<xsl:param name="ROWPOSITION"/>
		<xsl:param name="ROWINDEX"/>
		<xsl:param name="CELLPOSITION"/>
		<xsl:param name="PRIORINDEX"/>

		<xsl:variable name="CELLNUMBER">
			<xsl:value-of select="count(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell)"/>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($CELLPOSITION) &lt;= xs:integer($CELLNUMBER)">
				<xsl:variable name="CELLDATA">
					<xsl:value-of select="excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/excel:Data"/>
				</xsl:variable>

				<xsl:variable name="CURRINDEX">
					<xsl:choose>
						<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:Index)!=''">
							<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:Index)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="starts-with($CELLDATA, '#c.start{')=true()">
						<xsl:value-of select="concat($CURRINDEX, ',', $ROWINDEX, ',', $ROWPOSITION)"/>
					</xsl:when>
					<xsl:otherwise>
						<xsl:variable name="COLSPAN">
							<xsl:choose>
								<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:MergeAcross)!=''">
									<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:MergeAcross)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:text>0</xsl:text>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:variable>

						<xsl:call-template name="table_repeat_range_start_cell">
							<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
							<xsl:with-param name="ROWPOSITION" select="xs:integer($ROWPOSITION)"/>
							<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
							<xsl:with-param name="CELLPOSITION" select="xs:integer($CELLPOSITION) + 1"/>
							<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX) + xs:integer($COLSPAN)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:text>0,0,1</xsl:text>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_repeat_range_end">
		<xsl:param name="STARTINDEX"/>
		<xsl:param name="FINDPOSITION"/>
		<xsl:param name="PRIORINDEX"/>

		<xsl:variable name="CURRINDEX">
			<xsl:choose>
				<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($FINDPOSITION)]/@ss:Index)!=''">
					<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($FINDPOSITION)]/@ss:Index)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($FINDPOSITION) &gt; xs:integer($ROWNUMBER)">
				<xsl:text>0,0</xsl:text>
			</xsl:when>
			<xsl:when test="xs:integer($CURRINDEX) &gt;= xs:integer($STARTINDEX)">
				<xsl:call-template name="table_repeat_range_end_cell">
					<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
					<xsl:with-param name="ROWPOSITION" select="xs:integer($FINDPOSITION)"/>
					<xsl:with-param name="ROWINDEX" select="xs:integer($CURRINDEX)"/>
					<xsl:with-param name="CELLPOSITION" select="1"/>
					<xsl:with-param name="PRIORINDEX" select="0"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="table_repeat_range_end">
					<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
					<xsl:with-param name="FINDPOSITION" select="xs:integer($FINDPOSITION) + 1"/>
					<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX)"/>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_repeat_range_end_cell">
		<xsl:param name="STARTINDEX"/>
		<xsl:param name="ROWPOSITION"/>
		<xsl:param name="ROWINDEX"/>
		<xsl:param name="CELLPOSITION"/>
		<xsl:param name="PRIORINDEX"/>

		<xsl:variable name="CELLNUMBER">
			<xsl:value-of select="count(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell)"/>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($CELLPOSITION) &lt;= xs:integer($CELLNUMBER)">
				<xsl:variable name="CELLDATA">
					<xsl:value-of select="excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/excel:Data"/>
				</xsl:variable>

				<xsl:variable name="CURRINDEX">
					<xsl:choose>
						<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:Index)!=''">
							<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:Index)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="starts-with($CELLDATA, '#c.end{')=true()">
						<xsl:variable name="CS">
							<xsl:choose>
								<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:MergeAcross)!=''">
									<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:MergeAcross)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:text>0</xsl:text>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:variable>

						<xsl:variable name="RS">
							<xsl:choose>
								<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:MergeDown)!=''">
									<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:MergeDown)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:text>0</xsl:text>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:variable>

						<xsl:value-of select="concat(string(xs:integer($CURRINDEX) + xs:integer($CS)), ',', string(xs:integer($ROWINDEX) + xs:integer($RS)))"/>
					</xsl:when>
					<xsl:otherwise>
						<xsl:variable name="COLSPAN">
							<xsl:choose>
								<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:MergeAcross)!=''">
									<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($CELLPOSITION)]/@ss:MergeAcross)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:text>0</xsl:text>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:variable>

						<xsl:call-template name="table_repeat_range_end_cell">
							<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
							<xsl:with-param name="ROWPOSITION" select="xs:integer($ROWPOSITION)"/>
							<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
							<xsl:with-param name="CELLPOSITION" select="xs:integer($CELLPOSITION) + 1"/>
							<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX) + xs:integer($COLSPAN)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="table_repeat_range_end">
					<xsl:with-param name="STARTINDEX" select="xs:integer($STARTINDEX)"/>
					<xsl:with-param name="FINDPOSITION" select="xs:integer($ROWPOSITION) + 1"/>
					<xsl:with-param name="PRIORINDEX" select="xs:integer($ROWINDEX)"/>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_row_data">
		<xsl:param name="FINDINDEX"/>
		<xsl:param name="FINDPOSITION"/>
		<xsl:param name="PRIORINDEX"/>
		<xsl:param name="STARTCOL"/>
		<xsl:param name="ENDCOL"/>		
		<xsl:param name="REPEATSTARTROW"/>
		<xsl:param name="REPEATSTARTCOL"/>
		<xsl:param name="REPEATENDROW"/>
		<xsl:param name="REPEATENDCOL"/>

		<xsl:variable name="CURRINDEX">
			<xsl:choose>
				<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($FINDPOSITION)]/@ss:Index)!=''">
					<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($FINDPOSITION)]/@ss:Index)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($CURRINDEX) = xs:integer($FINDINDEX)">
				<xsl:variable name="ROWHEIGHT">
					<xsl:choose>
						<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($FINDPOSITION)]/@ss:Height)!=''">
							<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($FINDPOSITION)]/@ss:Height) div 0.78)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="xs:integer($DEFROWHEIGHT)"/>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:variable>

				<xsl:attribute name="height">
					<xsl:value-of select="xs:integer($ROWHEIGHT)"/>
					<xsl:text>px</xsl:text>
				</xsl:attribute>

				<xsl:call-template name="table_row_cell">
					<xsl:with-param name="ROWPOSITION" select="xs:integer($FINDPOSITION)"/>
					<xsl:with-param name="ROWINDEX" select="xs:integer($FINDINDEX)"/>
					<xsl:with-param name="CELLINDEX" select="xs:integer($STARTCOL)"/>
					<xsl:with-param name="LASTCELLINDEX" select="xs:integer($ENDCOL)"/>
					<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
					<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
					<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
					<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:when test="xs:integer($CURRINDEX) &gt; xs:integer($FINDINDEX)">
				<xsl:attribute name="height">
					<xsl:value-of select="xs:integer($DEFROWHEIGHT)"/>
					<xsl:text>px</xsl:text>
				</xsl:attribute>

				<xsl:call-template name="table_row_cell_default">
					<xsl:with-param name="ROWINDEX" select="xs:integer($FINDINDEX)"/>
					<xsl:with-param name="CELLINDEX" select="xs:integer($STARTCOL)"/>
					<xsl:with-param name="LASTCELLINDEX" select="xs:integer($ENDCOL)"/>
					<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
					<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
					<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
					<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:choose>
					<xsl:when test="xs:integer($FINDPOSITION) &gt;= xs:integer(ROWNUMBER)">
						<xsl:attribute name="height">
							<xsl:value-of select="xs:integer($DEFROWHEIGHT)"/>
							<xsl:text>px</xsl:text>
						</xsl:attribute>

						<xsl:call-template name="table_row_cell_default">
							<xsl:with-param name="ROWINDEX" select="xs:integer($FINDINDEX)"/>
							<xsl:with-param name="CELLINDEX" select="xs:integer($STARTCOL)"/>
							<xsl:with-param name="LASTCELLINDEX" select="xs:integer($ENDCOL)"/>
							<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
							<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
							<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
							<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
						</xsl:call-template>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="table_row_data">
							<xsl:with-param name="FINDINDEX" select="xs:integer($FINDINDEX)"/>
							<xsl:with-param name="FINDPOSITION" select="xs:integer($FINDPOSITION) + 1"/>
							<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX)"/>
							<xsl:with-param name="STARTCOL" select="xs:integer($STARTCOL)"/>
							<xsl:with-param name="ENDCOL" select="xs:integer($ENDCOL)"/>
							<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
							<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
							<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
							<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_row_cell_default">
		<xsl:param name="ROWINDEX"/>
		<xsl:param name="CELLINDEX"/>
		<xsl:param name="LASTCELLINDEX"/>
		<xsl:param name="REPEATSTARTROW"/>
		<xsl:param name="REPEATSTARTCOL"/>
		<xsl:param name="REPEATENDROW"/>
		<xsl:param name="REPEATENDCOL"/>

		<xsl:if test="xs:integer($CELLINDEX) &lt;= xs:integer($LASTCELLINDEX)">
			<xsl:variable name="VISIBLE">
				<xsl:call-template name="table_row_cell_property">
					<xsl:with-param name="CHECKROWPOSITION" select="1"/>
					<xsl:with-param name="PRIORINDEX" select="0"/>
					<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
					<xsl:with-param name="CELLINDEX" select="xs:integer($CELLINDEX)"/>
					<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
					<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
					<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
					<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
				</xsl:call-template>
			</xsl:variable>

			<xsl:if test="xs:boolean($VISIBLE)=true()">
				<xsl:element name="xhtml:td"/>
			</xsl:if>

			<xsl:call-template name="table_row_cell_default">
				<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
				<xsl:with-param name="CELLINDEX" select="xs:integer($CELLINDEX) + 1"/>
				<xsl:with-param name="LASTCELLINDEX" select="xs:integer($LASTCELLINDEX)"/>
				<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
				<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
				<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
				<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
			</xsl:call-template>
		</xsl:if>
	</xsl:template>

	<xsl:template name="table_row_cell">
		<xsl:param name="ROWPOSITION"/>
		<xsl:param name="ROWINDEX"/>
		<xsl:param name="CELLINDEX"/>
		<xsl:param name="LASTCELLINDEX"/>
		<xsl:param name="REPEATSTARTROW"/>
		<xsl:param name="REPEATSTARTCOL"/>
		<xsl:param name="REPEATENDROW"/>
		<xsl:param name="REPEATENDCOL"/>

		<xsl:if test="xs:integer($CELLINDEX) &lt;= xs:integer($LASTCELLINDEX)">
			<xsl:variable name="CELLNUMBER">
				<xsl:value-of select="count(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell)"/>
			</xsl:variable>

			<xsl:call-template name="table_row_cell_data">
				<xsl:with-param name="ROWPOSITION" select="xs:integer($ROWPOSITION)"/>
				<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
				<xsl:with-param name="CELLNUMBER" select="xs:integer($CELLNUMBER)"/>
				<xsl:with-param name="FINDINDEX" select="xs:integer($CELLINDEX)"/>
				<xsl:with-param name="FINDPOSITION" select="1"/>
				<xsl:with-param name="PRIORINDEX" select="0"/>
				<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
				<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
				<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
				<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
			</xsl:call-template>

			<xsl:call-template name="table_row_cell">
				<xsl:with-param name="ROWPOSITION" select="xs:integer($ROWPOSITION)"/>
				<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
				<xsl:with-param name="CELLINDEX" select="xs:integer($CELLINDEX) + 1"/>
				<xsl:with-param name="LASTCELLINDEX" select="xs:integer($LASTCELLINDEX)"/>
				<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
				<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
				<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
				<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
			</xsl:call-template>
		</xsl:if>
	</xsl:template>

	<xsl:template name="get_property_value">
		<xsl:param name="PROPDATA"/>
		<xsl:param name="PROPNAME"/>

		<xsl:choose>
			<xsl:when test="contains($PROPDATA, ';')">
				<xsl:variable name="FIRSTPROP">
					<xsl:value-of select="substring-before($PROPDATA, ';')"/>
				</xsl:variable>

				<xsl:variable name="CURRPROPNAME">
					<xsl:value-of select="normalize-space(substring-before($FIRSTPROP, ':'))"/>
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="string($CURRPROPNAME) = string($PROPNAME)">
						<xsl:value-of select="normalize-space(substring-after($FIRSTPROP, ':'))"/>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="get_property_value">
							<xsl:with-param name="PROPDATA" select="substring-after($PROPDATA, ';')"/>
							<xsl:with-param name="PROPNAME" select="$PROPNAME"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:variable name="CURRPROPNAME">
					<xsl:value-of select="normalize-space(substring-before($PROPDATA, ':'))"/>
				</xsl:variable>

				<xsl:if test="string($CURRPROPNAME) = string($PROPNAME)">
					<xsl:value-of select="normalize-space(substring-after($PROPDATA, ':'))"/>
				</xsl:if>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_repeat_range_container">
		<xsl:param name="REPEATSET"/>
		<xsl:param name="REPEATSTARTROW"/>
		<xsl:param name="REPEATSTARTCOL"/>
		<xsl:param name="REPEATENDROW"/>
		<xsl:param name="REPEATENDCOL"/>

		<xsl:variable name="CONTAINER-CONTROL">
			<xsl:choose>
				<xsl:when test="contains($REPEATSET, ',')">
					<xsl:value-of select="substring-before($REPEATSET, ',')"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$REPEATSET"/>
				</xsl:otherwise>
			</xsl:choose>			
		</xsl:variable>

		<xsl:variable name="CONTAINER-PROPERTIES">
			<xsl:choose>
				<xsl:when test="contains($REPEATSET, ',')">
					<xsl:value-of select="substring-after($REPEATSET, ',')"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:text></xsl:text>
				</xsl:otherwise>
			</xsl:choose>			
		</xsl:variable>

		<xsl:variable name="CONTAINERSTYLE">
			<xsl:text>overflow:auto;margin:0;padding:0</xsl:text>

			<xsl:variable name="RANGEHEIGHT">
				<xsl:call-template name="get_property_value">
					<xsl:with-param name="PROPDATA" select="$CONTAINER-PROPERTIES"/>
					<xsl:with-param name="PROPNAME" select="string('height')"/>
				</xsl:call-template>
			</xsl:variable>

			<xsl:text>;height:</xsl:text>
			<xsl:choose>
				<xsl:when test="string($RANGEHEIGHT) != ''">
					<xsl:value-of select="$RANGEHEIGHT"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:text>100%</xsl:text>
				</xsl:otherwise>
			</xsl:choose>

			<xsl:variable name="RANGEWIDTH">
				<xsl:call-template name="get_property_value">
					<xsl:with-param name="PROPDATA" select="$CONTAINER-PROPERTIES"/>
					<xsl:with-param name="PROPNAME" select="string('width')"/>
				</xsl:call-template>
			</xsl:variable>

			<xsl:text>;width:</xsl:text>
			<xsl:choose>
				<xsl:when test="string($RANGEWIDTH) != ''">
					<xsl:value-of select="$RANGEWIDTH"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:text>100%</xsl:text>
				</xsl:otherwise>
			</xsl:choose>

			<xsl:call-template name="copy_properties">
				<xsl:with-param name="ACCORDPROPERTIES" select="string('')"/>
				<xsl:with-param name="ALLPROPERTIES" select="$CONTAINER-PROPERTIES"/>
				<xsl:with-param name="DIBARPROPERTIES" select="string('caption-row-count;height;width')"/>
			</xsl:call-template>
		</xsl:variable>

		<xsl:attribute name="style">
			<xsl:value-of select="$CONTAINERSTYLE"/>
		</xsl:attribute>

		<xsl:variable name="LEFTBORDERWIDTH">
			<xsl:call-template name="get_css_border_width">
				<xsl:with-param name="STYLEDATA" select="$CONTAINERSTYLE"/>
				<xsl:with-param name="BORDERNAME" select="string('left')"/>
			</xsl:call-template>
		</xsl:variable>

		<xsl:variable name="RIGHTBORDERWIDTH">
			<xsl:call-template name="get_css_border_width">
				<xsl:with-param name="STYLEDATA" select="$CONTAINERSTYLE"/>
				<xsl:with-param name="BORDERNAME" select="string('right')"/>
			</xsl:call-template>
		</xsl:variable>

		<xsl:variable name="FIXEDROWS">
			<xsl:call-template name="get_property_value">
				<xsl:with-param name="PROPDATA" select="$CONTAINER-PROPERTIES"/>
				<xsl:with-param name="PROPNAME" select="string('caption-row-count')"/>
			</xsl:call-template>
		</xsl:variable>

		<xsl:element name="xhtml:table">
			<xsl:attribute name="border">
				<xsl:text>0</xsl:text>
			</xsl:attribute>
			<xsl:attribute name="cellpadding">
				<xsl:text>0</xsl:text>
			</xsl:attribute>
			<xsl:attribute name="cellspacing">
				<xsl:text>0</xsl:text>
			</xsl:attribute>
			<xsl:attribute name="style">
				<xsl:text>border-collapse: collapse; table-layout: fixed;</xsl:text>
			</xsl:attribute>

			<xsl:element name="xhtml:tr">
				<xsl:attribute name="height">
					<xsl:text>0</xsl:text>
				</xsl:attribute>

				<xsl:call-template name="table_column">
					<xsl:with-param name="INDEX" select="xs:integer($REPEATSTARTCOL)"/>
					<xsl:with-param name="STARTINDEX" select="xs:integer($REPEATSTARTCOL)"/>
					<xsl:with-param name="COUNT" select="xs:integer($REPEATENDCOL)"/>
					<xsl:with-param name="FRONTINDENT" select="xs:integer($LEFTBORDERWIDTH)"/>
					<xsl:with-param name="BACKINDENT" select="xs:integer($RIGHTBORDERWIDTH)"/>
				</xsl:call-template>
			</xsl:element>

			<xsl:variable name="FIXEDROWS">
				<xsl:call-template name="get_property_value">
					<xsl:with-param name="PROPDATA" select="$CONTAINER-PROPERTIES"/>
					<xsl:with-param name="PROPNAME" select="string('caption-row-count')"/>
				</xsl:call-template>
			</xsl:variable>

			<xsl:choose>
				<xsl:when test="string($FIXEDROWS) = ''">
					<xsl:variable name="FIXEDROWSHEIGHT">
						<xsl:call-template name="get_row_height">
							<xsl:with-param name="INDEX" select="xs:integer($REPEATSTARTROW)"/>
							<xsl:with-param name="POSITION" select="1"/>
							<xsl:with-param name="PRIORINDEX" select="0"/>
						</xsl:call-template>
					</xsl:variable>

					<xsl:variable name="REPEATENDROWBOTTOMBORDERWIDTH">
						<xsl:call-template name="get_row_cell_border_width">
							<xsl:with-param name="ROWINDEX" select="xs:integer($REPEATSTARTROW)"/>
							<xsl:with-param name="COLINDEX" select="xs:integer($REPEATSTARTCOL)"/>
							<xsl:with-param name="WHATBORDER" select="string('Bottom')"/>
						</xsl:call-template>
					</xsl:variable>

					<xsl:element name="xhtml:tr">
						<xsl:attribute name="height">
							<xsl:value-of select="concat(string(xs:integer($FIXEDROWSHEIGHT) - xs:integer($REPEATENDROWBOTTOMBORDERWIDTH)), 'px')"/>
						</xsl:attribute>

						<xsl:element name="xhtml:td">
							<xsl:if test="xs:integer($REPEATENDCOL) &gt; xs:integer($REPEATSTARTCOL)">
								<xsl:attribute name="colspan">
									<xsl:value-of select="xs:integer($REPEATENDCOL) - xs:integer($REPEATSTARTCOL) + 1"/>
								</xsl:attribute>
							</xsl:if>


							<xsl:element name="xhtml:div">
								<xsl:attribute name="style">
									<xsl:text>height: 100%; width: 100%; position: relative; top: expression(this.offsetParent.scrollTop)</xsl:text>
								</xsl:attribute>
								
								<xsl:element name="xhtml:table">
									<xsl:attribute name="border">
										<xsl:text>0</xsl:text>
									</xsl:attribute>
									<xsl:attribute name="cellpadding">
										<xsl:text>0</xsl:text>
									</xsl:attribute>
									<xsl:attribute name="cellspacing">
										<xsl:text>0</xsl:text>
									</xsl:attribute>
									<xsl:attribute name="style">
										<xsl:text>border-collapse: collapse; table-layout: fixed;</xsl:text>
									</xsl:attribute>

									<xsl:element name="xhtml:tr">
										<xsl:attribute name="height">
											<xsl:text>0</xsl:text>
										</xsl:attribute>

										<xsl:call-template name="table_column">
											<xsl:with-param name="INDEX" select="xs:integer($REPEATSTARTCOL)"/>
											<xsl:with-param name="STARTINDEX" select="xs:integer($REPEATSTARTCOL)"/>
											<xsl:with-param name="COUNT" select="xs:integer($REPEATENDCOL)"/>
											<xsl:with-param name="FRONTINDENT" select="xs:integer($LEFTBORDERWIDTH)"/>
											<xsl:with-param name="BACKINDENT" select="xs:integer($RIGHTBORDERWIDTH)"/>
										</xsl:call-template>
									</xsl:element>

									<xsl:call-template name="table_repeat_range_row">
										<xsl:with-param name="INDEX" select="xs:integer($REPEATSTARTROW)"/>
										<xsl:with-param name="LASTINDEX" select="xs:integer($REPEATSTARTROW)"/>
										<xsl:with-param name="STARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
										<xsl:with-param name="ENDCOL" select="xs:integer($REPEATENDCOL)"/>
									</xsl:call-template>
								</xsl:element>
							</xsl:element>
						</xsl:element>
					</xsl:element>
				</xsl:when>
				<xsl:when test="xs:integer($FIXEDROWS) &gt; 0">
					<xsl:variable name="FIXEDROWSHEIGHT">
						<xsl:call-template name="get_rows_height">
							<xsl:with-param name="INDEX" select="xs:integer($REPEATSTARTROW)"/>
							<xsl:with-param name="LASTINDEX" select="xs:integer($REPEATSTARTROW) + xs:integer($FIXEDROWS) - 1"/>
							<xsl:with-param name="HEIGHT" select="0"/>
						</xsl:call-template>
					</xsl:variable>

					<xsl:variable name="VAR1">
						<xsl:call-template name="get_row_cell_border_width">
							<xsl:with-param name="ROWINDEX" select="xs:integer($REPEATSTARTROW) + xs:integer($FIXEDROWS) - 1"/>
							<xsl:with-param name="COLINDEX" select="xs:integer($REPEATSTARTCOL)"/>
							<xsl:with-param name="WHATBORDER" select="string('Bottom')"/>
						</xsl:call-template>
					</xsl:variable>

					<xsl:variable name="VAR2">
						<xsl:call-template name="get_row_cell_border_width">
							<xsl:with-param name="ROWINDEX" select="xs:integer($REPEATSTARTROW)"/>
							<xsl:with-param name="COLINDEX" select="xs:integer($REPEATSTARTCOL)"/>
							<xsl:with-param name="WHATBORDER" select="string('Bottom')"/>
						</xsl:call-template>
					</xsl:variable>

					<xsl:variable name="REPEATENDROWBOTTOMBORDERWIDTH">
						<xsl:choose>
							<xsl:when test="string($VAR1)=''">
								<xsl:value-of select="$VAR2"/>
							</xsl:when>
							<xsl:otherwise>
								<xsl:value-of select="$VAR1"/>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:variable>

					<xsl:element name="xhtml:tr">
						<xsl:attribute name="height">
							<xsl:value-of select="concat(string(xs:integer($FIXEDROWSHEIGHT) - xs:integer($REPEATENDROWBOTTOMBORDERWIDTH)), 'px')"/>
						</xsl:attribute>

						<xsl:element name="xhtml:td">
							<xsl:if test="xs:integer($REPEATENDCOL) &gt; xs:integer($REPEATSTARTCOL)">
								<xsl:attribute name="colspan">
									<xsl:value-of select="xs:integer($REPEATENDCOL) - xs:integer($REPEATSTARTCOL) + 1"/>
								</xsl:attribute>
							</xsl:if>

							<xsl:if test="xs:integer($FIXEDROWS) &gt; 1">
								<xsl:attribute name="rowspan">
									<xsl:value-of select="xs:integer($FIXEDROWS)"/>
								</xsl:attribute>
							</xsl:if>

							<xsl:element name="xhtml:div">
								<xsl:attribute name="style">
									<xsl:text>height: 100%; width: 100%; position: relative; top: expression(this.offsetParent.scrollTop)</xsl:text>
								</xsl:attribute>
								
								<xsl:element name="xhtml:table">
									<xsl:attribute name="border">
										<xsl:text>0</xsl:text>
									</xsl:attribute>
									<xsl:attribute name="cellpadding">
										<xsl:text>0</xsl:text>
									</xsl:attribute>
									<xsl:attribute name="cellspacing">
										<xsl:text>0</xsl:text>
									</xsl:attribute>
									<xsl:attribute name="style">
										<xsl:text>border-collapse: collapse; table-layout: fixed;</xsl:text>
									</xsl:attribute>

									<xsl:element name="xhtml:tr">
										<xsl:attribute name="height">
											<xsl:text>0</xsl:text>
										</xsl:attribute>

										<xsl:call-template name="table_column">
											<xsl:with-param name="INDEX" select="xs:integer($REPEATSTARTCOL)"/>
											<xsl:with-param name="STARTINDEX" select="xs:integer($REPEATSTARTCOL)"/>
											<xsl:with-param name="COUNT" select="xs:integer($REPEATENDCOL)"/>
											<xsl:with-param name="FRONTINDENT" select="xs:integer($LEFTBORDERWIDTH)"/>
											<xsl:with-param name="BACKINDENT" select="xs:integer($RIGHTBORDERWIDTH)"/>
										</xsl:call-template>
									</xsl:element>

									<xsl:call-template name="table_repeat_range_row">
										<xsl:with-param name="INDEX" select="xs:integer($REPEATSTARTROW)"/>
										<xsl:with-param name="LASTINDEX" select="xs:integer($REPEATSTARTROW) + xs:integer($FIXEDROWS) - 1"/>
										<xsl:with-param name="STARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
										<xsl:with-param name="ENDCOL" select="xs:integer($REPEATENDCOL)"/>
									</xsl:call-template>
								</xsl:element>
							</xsl:element>
						</xsl:element>
					</xsl:element>
				</xsl:when>
			</xsl:choose>

			<xsl:element name="xui:place">
				<xsl:attribute name="control">
					<xsl:value-of select="$CONTAINER-CONTROL"/>
				</xsl:attribute>

				<xsl:choose>
					<xsl:when test="string($FIXEDROWS) = ''">
						<xsl:call-template name="table_repeat_range_row">
							<xsl:with-param name="INDEX" select="xs:integer($REPEATSTARTROW) + 1"/>
							<xsl:with-param name="LASTINDEX" select="xs:integer($REPEATENDROW)"/>
							<xsl:with-param name="STARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
							<xsl:with-param name="ENDCOL" select="xs:integer($REPEATENDCOL)"/>
						</xsl:call-template>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="table_repeat_range_row">
							<xsl:with-param name="INDEX" select="xs:integer($REPEATSTARTROW) + xs:integer($FIXEDROWS)"/>
							<xsl:with-param name="LASTINDEX" select="xs:integer($REPEATENDROW)"/>
							<xsl:with-param name="STARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
							<xsl:with-param name="ENDCOL" select="xs:integer($REPEATENDCOL)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:element>

			<xsl:element name="xhtml:tr"/>
		</xsl:element>
	</xsl:template>

	<xsl:template name="copy_properties">
		<xsl:param name="ACCORDPROPERTIES"/>
		<xsl:param name="ALLPROPERTIES"/>
		<xsl:param name="DIBARPROPERTIES"/>

		<xsl:choose>
			<xsl:when test="contains($ALLPROPERTIES, ';')=true()">
				<xsl:variable name="SUBPROPERTY">
					<xsl:value-of select="normalize-space(substring-before($ALLPROPERTIES, ';'))"/>
				</xsl:variable>

				<xsl:variable name="SUBPROPERTYNAME">
					<xsl:value-of select="normalize-space(substring-before($SUBPROPERTY, ':'))"/>
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="contains($DIBARPROPERTIES, $SUBPROPERTYNAME)=true()">
						<xsl:call-template name="copy_properties">
							<xsl:with-param name="ACCORDPROPERTIES" select="$ACCORDPROPERTIES"/>
							<xsl:with-param name="ALLPROPERTIES" select="substring-after($ALLPROPERTIES, ';')"/>
							<xsl:with-param name="DIBARPROPERTIES" select="$DIBARPROPERTIES"/>
						</xsl:call-template>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="copy_properties">
							<xsl:with-param name="ACCORDPROPERTIES" select="concat($ACCORDPROPERTIES, ';', $SUBPROPERTY)"/>
							<xsl:with-param name="ALLPROPERTIES" select="substring-after($ALLPROPERTIES, ';')"/>
							<xsl:with-param name="DIBARPROPERTIES" select="$DIBARPROPERTIES"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:choose>
					<xsl:when test="normalize-space($ALLPROPERTIES) = ''">
						<xsl:value-of select="$ACCORDPROPERTIES"/>
					</xsl:when>
					<xsl:otherwise>
						<xsl:variable name="SUBPROPERTYNAME">
							<xsl:value-of select="normalize-space(substring-before($ALLPROPERTIES, ':'))"/>
						</xsl:variable>

						<xsl:choose>
							<xsl:when test="contains($DIBARPROPERTIES, $SUBPROPERTYNAME)=true()">
								<xsl:value-of select="$ACCORDPROPERTIES"/>
							</xsl:when>
							<xsl:otherwise>
								<xsl:value-of select="concat($ACCORDPROPERTIES, ';', $ALLPROPERTIES)"/>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="get_css_border_width">
		<xsl:param name="STYLEDATA"/>
		<xsl:param name="BORDERNAME"/>

		<xsl:variable name="BORDERDATA">
			<xsl:call-template name="get_css_border_data">
				<xsl:with-param name="STYLEDATA" select="$STYLEDATA"/>
				<xsl:with-param name="BORDERNAME" select="$BORDERNAME"/>
			</xsl:call-template>
		</xsl:variable>

		<xsl:call-template name="parse_css_border_width">
			<xsl:with-param name="BORDERDATA" select="$BORDERDATA"/>
		</xsl:call-template>
	</xsl:template>

	<xsl:template name="get_css_border_data">
		<xsl:param name="STYLEDATA"/>
		<xsl:param name="BORDERNAME"/>

		<xsl:choose>
			<xsl:when test="contains($STYLEDATA, concat('border-', $BORDERNAME))=true()">
				<xsl:value-of select="normalize-space(substring-after(normalize-space(substring-after($STYLEDATA, concat('border-', $BORDERNAME))), ':'))"/>
			</xsl:when>
			<xsl:when test="contains($STYLEDATA, 'border')=true()">
				<xsl:value-of select="normalize-space(substring-after(normalize-space(substring-after($STYLEDATA, 'border')), ':'))"/>
			</xsl:when>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="parse_css_border_width">
		<xsl:param name="BORDERDATA"/>

		<xsl:choose>
			<xsl:when test="string($BORDERDATA) != ''">
				<xsl:choose>
					<xsl:when test="contains($BORDERDATA, ' ')=true()">
						<xsl:variable name="SUBDATA">
							<xsl:value-of select="normalize-space(substring-before(substring-before($BORDERDATA, ' '), 'px'))"/>
						</xsl:variable>

						<xsl:choose>
							<xsl:when test="string(number($SUBDATA)) != 'NaN'">
								<xsl:value-of select="number($SUBDATA)"/>
							</xsl:when>
							<xsl:otherwise>
								<xsl:call-template name="parse_css_border_width">
									<xsl:with-param name="BORDERDATA" select="normalize-space(substring-after($BORDERDATA, ' '))"/>
								</xsl:call-template>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:when>
					<xsl:otherwise>
						<xsl:choose>
							<xsl:when test="string(number(substring-before($BORDERDATA, 'px'))) != 'NaN'">
								<xsl:value-of select="number(substring-before($BORDERDATA, 'px'))"/>
							</xsl:when>
							<xsl:otherwise>
								<xsl:text>0</xsl:text>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:text>0</xsl:text>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="get_rows_height">
		<xsl:param name="INDEX"/>
		<xsl:param name="LASTINDEX"/>
		<xsl:param name="HEIGHT"/>

		<xsl:choose>
			<xsl:when test="xs:integer($INDEX) &lt;= xs:integer($LASTINDEX)">
				<xsl:variable name="CURRHEIGHT">
					<xsl:call-template name="get_row_height">
						<xsl:with-param name="INDEX" select="xs:integer($INDEX)"/>
						<xsl:with-param name="POSITION" select="1"/>
						<xsl:with-param name="PRIORINDEX" select="0"/>
					</xsl:call-template>
				</xsl:variable>

				<xsl:call-template name="get_rows_height">
					<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
					<xsl:with-param name="LASTINDEX" select="xs:integer($LASTINDEX)"/>
					<xsl:with-param name="HEIGHT" select="xs:integer($HEIGHT) + xs:integer($CURRHEIGHT)"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="xs:integer($HEIGHT)"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="get_row_height">
		<xsl:param name="INDEX"/>
		<xsl:param name="POSITION"/>
		<xsl:param name="PRIORINDEX"/>

		<xsl:variable name="CURRINDEX">
			<xsl:choose>
				<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($POSITION)]/@ss:Index)!=''">
					<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($POSITION)]/@ss:Index)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($CURRINDEX) = xs:integer($INDEX)">
				<xsl:choose>
					<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($POSITION)]/@ss:Height)!=''">
						<xsl:value-of select="round(xs:decimal(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($POSITION)]/@ss:Height) div 0.78)"/>
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="xs:integer($DEFROWHEIGHT)"/>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:when test="xs:integer($CURRINDEX) &gt; xs:integer($INDEX)">
				<xsl:value-of select="xs:integer($DEFROWHEIGHT)"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:choose>
					<xsl:when test="xs:integer($POSITION) &gt;= xs:integer(ROWNUMBER)">
						<xsl:value-of select="xs:integer($DEFROWHEIGHT)"/>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="get_row_height">
							<xsl:with-param name="INDEX" select="xs:integer($INDEX)"/>
							<xsl:with-param name="POSITION" select="xs:integer($POSITION) + 1"/>
							<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_repeat_range_row">
		<xsl:param name="INDEX"/>
		<xsl:param name="LASTINDEX"/>
		<xsl:param name="STARTCOL"/>
		<xsl:param name="ENDCOL"/>

		<xsl:if test="xs:integer($INDEX) &lt;= xs:integer($LASTINDEX)">
			<xsl:element name="xhtml:tr">
				<xsl:call-template name="table_row_data">
					<xsl:with-param name="FINDINDEX" select="xs:integer($INDEX)"/>
					<xsl:with-param name="FINDPOSITION" select="1"/>
					<xsl:with-param name="PRIORINDEX" select="0"/>
					<xsl:with-param name="STARTCOL" select="xs:integer($STARTCOL)"/>
					<xsl:with-param name="ENDCOL" select="xs:integer($ENDCOL)"/>
					<xsl:with-param name="REPEATSTARTROW" select="0"/>
					<xsl:with-param name="REPEATSTARTCOL" select="0"/>
					<xsl:with-param name="REPEATENDROW" select="0"/>
					<xsl:with-param name="REPEATENDCOL" select="0"/>
				</xsl:call-template>
			</xsl:element>

			<xsl:call-template name="table_repeat_range_row">
				<xsl:with-param name="INDEX" select="xs:integer($INDEX) + 1"/>
				<xsl:with-param name="LASTINDEX" select="xs:integer($LASTINDEX)"/>
				<xsl:with-param name="STARTCOL" select="xs:integer($STARTCOL)"/>
				<xsl:with-param name="ENDCOL" select="xs:integer($ENDCOL)"/>
			</xsl:call-template>
		</xsl:if>
	</xsl:template>

	<xsl:template name="get_row_cell_border_width">
		<xsl:param name="ROWINDEX"/>
		<xsl:param name="COLINDEX"/>
		<xsl:param name="WHATBORDER"/>

		<xsl:variable name="ROWPOSITION">
			<xsl:call-template name="get_row_position">
				<xsl:with-param name="INDEX" select="xs:integer($ROWINDEX)"/>
				<xsl:with-param name="POSITION" select="1"/>
				<xsl:with-param name="PRIORINDEX" select="0"/>
			</xsl:call-template>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($ROWPOSITION) &gt; 0">
				<xsl:variable name="COLPOSITION">
					<xsl:call-template name="get_cell_position">
						<xsl:with-param name="ROWPOSITION" select="xs:integer($ROWPOSITION)"/>
						<xsl:with-param name="INDEX" select="xs:integer($COLINDEX)"/>
						<xsl:with-param name="POSITION" select="1"/>
						<xsl:with-param name="PRIORINDEX" select="0"/>
					</xsl:call-template>
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="xs:integer($COLPOSITION) &gt; 0">
						<xsl:variable name="STYLEID">
							<xsl:choose>
								<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($COLPOSITION)]/@ss:StyleID)!=''">
									<xsl:value-of select="xs:string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($COLPOSITION)]/@ss:StyleID)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="xs:string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/@ss:StyleID)"/>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:variable>

						<xsl:variable name="WIDTH">
							<xsl:value-of select="/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Borders/excel:Border[@ss:Position=string($WHATBORDER)]/@ss:Weight"/>
						</xsl:variable>

						<xsl:choose>
							<xsl:when test="string($WIDTH) != ''">
								<xsl:value-of select="$WIDTH"/>
							</xsl:when>
							<xsl:otherwise>
								<xsl:text>0</xsl:text>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:when>
					<xsl:otherwise>
						<xsl:text></xsl:text>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:text>0</xsl:text>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="get_row_position">
		<xsl:param name="INDEX"/>
		<xsl:param name="POSITION"/>
		<xsl:param name="PRIORINDEX"/>

		<xsl:variable name="CURRINDEX">
			<xsl:choose>
				<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($POSITION)]/@ss:Index)!=''">
					<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($POSITION)]/@ss:Index)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($CURRINDEX) = xs:integer($INDEX)">
				<xsl:value-of select="$POSITION"/>
			</xsl:when>
			<xsl:when test="xs:integer($CURRINDEX) &gt; xs:integer($INDEX)">
				<xsl:text>0</xsl:text>
			</xsl:when>
			<xsl:otherwise>
				<xsl:choose>
					<xsl:when test="xs:integer($POSITION) &gt;= xs:integer($ROWNUMBER)">
						<xsl:text>0</xsl:text>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="get_row_position">
							<xsl:with-param name="INDEX" select="xs:integer($INDEX)"/>
							<xsl:with-param name="POSITION" select="xs:integer($POSITION) + 1"/>
							<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="get_cell_position">
		<xsl:param name="ROWPOSITION"/>
		<xsl:param name="INDEX"/>
		<xsl:param name="POSITION"/>
		<xsl:param name="PRIORINDEX"/>

		<xsl:variable name="CURRINDEX">
			<xsl:choose>
				<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($POSITION)]/@ss:Index)!=''">
					<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($POSITION)]/@ss:Index)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($CURRINDEX) = xs:integer($INDEX)">
				<xsl:value-of select="$POSITION"/>
			</xsl:when>
			<xsl:when test="xs:integer($CURRINDEX) &gt; xs:integer($INDEX)">
				<xsl:text>0</xsl:text>
			</xsl:when>
			<xsl:otherwise>
				<xsl:variable name="CELLNUMBER">
					<xsl:value-of select="count(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell)"/>
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="xs:integer($POSITION) &gt;= xs:integer($CELLNUMBER)">
						<xsl:text>0</xsl:text>
					</xsl:when>
					<xsl:otherwise>
						<xsl:variable name="COLSPAN">
							<xsl:choose>
								<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($POSITION)]/@ss:MergeAcross)!=''">
									<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($POSITION)]/@ss:MergeAcross)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:text>0</xsl:text>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:variable>

						<xsl:call-template name="get_cell_position">
							<xsl:with-param name="ROWPOSITION" select="xs:integer($ROWPOSITION)"/>
							<xsl:with-param name="INDEX" select="xs:integer($INDEX)"/>
							<xsl:with-param name="POSITION" select="xs:integer($POSITION) + 1"/>
							<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX) + xs:integer($COLSPAN)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_row_cell_data">
		<xsl:param name="ROWPOSITION"/>
		<xsl:param name="ROWINDEX"/>
		<xsl:param name="CELLNUMBER"/>
		<xsl:param name="FINDINDEX"/>
		<xsl:param name="FINDPOSITION"/>
		<xsl:param name="PRIORINDEX"/>
		<xsl:param name="REPEATSTARTROW"/>
		<xsl:param name="REPEATSTARTCOL"/>
		<xsl:param name="REPEATENDROW"/>
		<xsl:param name="REPEATENDCOL"/>

		<xsl:variable name="CURRINDEX">
			<xsl:choose>
				<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:Index)!=''">
					<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:Index)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="xs:integer($CURRINDEX) = xs:integer($FINDINDEX)">
				<xsl:choose>
					<xsl:when test="(xs:integer($ROWINDEX) &gt;= xs:integer($REPEATSTARTROW)) and (xs:integer($ROWINDEX) &lt;= xs:integer($REPEATENDROW)) and (xs:integer($CURRINDEX) &gt;= xs:integer($REPEATSTARTCOL)) and (xs:integer($CURRINDEX) &lt;= xs:integer($REPEATENDCOL))">
						<xsl:if test="(xs:integer($ROWINDEX) = xs:integer($REPEATSTARTROW)) and (xs:integer($CURRINDEX) = xs:integer($REPEATSTARTCOL))">
							<xsl:element name="xhtml:td">
								<xsl:if test="xs:integer($REPEATSTARTCOL) != xs:integer($REPEATENDCOL)">
									<xsl:attribute name="colspan">
										<xsl:value-of select="xs:integer($REPEATENDCOL) - xs:integer($REPEATSTARTCOL) + 1"/>
									</xsl:attribute>
								</xsl:if>

								<xsl:if test="xs:integer($REPEATSTARTROW) != xs:integer($REPEATENDROW)">
									<xsl:attribute name="rowspan">
										<xsl:value-of select="xs:integer($REPEATENDROW) - xs:integer($REPEATSTARTROW) + 1"/>
									</xsl:attribute>
								</xsl:if>

								<xsl:variable name="CELLDATA">
									<xsl:value-of select="excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/excel:Data"/>
								</xsl:variable>

								<xsl:element name="xhtml:div">
									<xsl:call-template name="table_repeat_range_container">
										<xsl:with-param name="REPEATSET" select="substring-before(substring-after($CELLDATA, '#c.start{'), '}')"/>
										<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
										<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
										<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
										<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
									</xsl:call-template>
								</xsl:element>
							</xsl:element>
						</xsl:if>
					</xsl:when>
					<xsl:otherwise>
						<xsl:element name="xhtml:td">
							<xsl:if test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:MergeAcross)!=''">
								<xsl:attribute name="colspan">
									<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:MergeAcross) + 1"/>
								</xsl:attribute>
							</xsl:if>

							<xsl:if test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:MergeDown)!=''">
								<xsl:attribute name="rowspan">
									<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:MergeDown) + 1"/>
								</xsl:attribute>
							</xsl:if>

							<xsl:choose>
								<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:StyleID)!=''">
									<xsl:call-template name="style_processor">
										<xsl:with-param name="STYLEID" select="xs:string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:StyleID)"/>
										<xsl:with-param name="BACKGROUND" select="substring-before(substring-after(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/excel:Data, '#background{'), '}')"/>
									</xsl:call-template>
								</xsl:when>
								<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/@ss:StyleID)!=''">
									<xsl:call-template name="style_processor">
										<xsl:with-param name="STYLEID" select="xs:string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/@ss:StyleID)"/>
										<xsl:with-param name="BACKGROUND" select="substring-before(substring-after(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/excel:Data, '#background{'), '}')"/>
									</xsl:call-template>
								</xsl:when>
								<xsl:otherwise>
									<xsl:call-template name="style_processor">
										<xsl:with-param name="STYLEID" select="string('Default')"/>
										<xsl:with-param name="BACKGROUND" select="substring-before(substring-after(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/excel:Data, '#background{'), '}')"/>
									</xsl:call-template>
								</xsl:otherwise>
							</xsl:choose>
							
							<xsl:variable name="COMMENT">
								<xsl:choose>
									<xsl:when test="count(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/excel:Comment/descendant::node()[contains(., 'style:')])>0">
										<xsl:value-of select="substring-after(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/excel:Comment/descendant::node()[contains(., 'style:')][1], 'style:')"/>
									</xsl:when>
									<xsl:otherwise>
										<xsl:text></xsl:text>
									</xsl:otherwise>
								</xsl:choose>
							</xsl:variable>

							<xsl:call-template name="table_row_cell_content">
								<xsl:with-param name="CELLDATA" select="excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/excel:Data"/>
								<xsl:with-param name="CELLHREF" select="excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:HRef"/>
								<xsl:with-param name="CELLCOMMENT" select="$COMMENT"/>
							</xsl:call-template>
						</xsl:element>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:when test="xs:integer($CURRINDEX) &gt; xs:integer($FINDINDEX)">
				<xsl:variable name="VISIBLE">
					<xsl:call-template name="table_row_cell_property">
						<xsl:with-param name="CHECKROWPOSITION" select="1"/>
						<xsl:with-param name="PRIORINDEX" select="0"/>
						<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
						<xsl:with-param name="CELLINDEX" select="xs:integer($FINDINDEX)"/>
						<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
						<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
						<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
						<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
					</xsl:call-template>
				</xsl:variable>

				<xsl:if test="xs:boolean($VISIBLE)=true()">
					<xsl:element name="xhtml:td"/>
				</xsl:if>
			</xsl:when>
			<xsl:otherwise>
				<xsl:choose>
					<xsl:when test="xs:integer($FINDPOSITION) &gt;= xs:integer($CELLNUMBER)">
						<xsl:variable name="VISIBLE">
							<xsl:call-template name="table_row_cell_property">
								<xsl:with-param name="CHECKROWPOSITION" select="1"/>
								<xsl:with-param name="PRIORINDEX" select="0"/>
								<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
								<xsl:with-param name="CELLINDEX" select="xs:integer($FINDINDEX)"/>
								<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
								<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
								<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
								<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
							</xsl:call-template>
						</xsl:variable>

						<xsl:if test="xs:boolean($VISIBLE)=true()">
							<xsl:element name="xhtml:td"/>
						</xsl:if>
					</xsl:when>
					<xsl:otherwise>
						<xsl:variable name="COLSPAN">
							<xsl:choose>
								<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:MergeAcross)!=''">
									<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($ROWPOSITION)]/excel:Cell[xs:integer($FINDPOSITION)]/@ss:MergeAcross)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:text>0</xsl:text>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:variable>

						<xsl:call-template name="table_row_cell_data">
							<xsl:with-param name="ROWPOSITION" select="xs:integer($ROWPOSITION)"/>
							<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
							<xsl:with-param name="CELLNUMBER" select="xs:integer($CELLNUMBER)"/>
							<xsl:with-param name="FINDINDEX" select="xs:integer($FINDINDEX)"/>
							<xsl:with-param name="FINDPOSITION" select="xs:integer($FINDPOSITION) + 1"/>
							<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX) + xs:integer($COLSPAN)"/>
							<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
							<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
							<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
							<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="background_processor">
		<xsl:param name="BACKGROUND"/>
		<xsl:param name="TYPE"/>

		<xsl:if test="$BACKGROUND!=''">
			<xsl:choose>
				<xsl:when test="contains($BACKGROUND, ',')=true()">
					<xsl:variable name="BI">
						<xsl:value-of select="substring-before($BACKGROUND, ',')"/>
					</xsl:variable>

					<xsl:variable name="VAR1">
						<xsl:value-of select="substring-after($BACKGROUND, ',')"/>
					</xsl:variable>

					<xsl:choose>
						<xsl:when test="contains($VAR1, ',')=true()">
							<xsl:variable name="VAR2">
								<xsl:value-of select="substring-after($VAR1, ',')"/>
							</xsl:variable>

							<xsl:choose>
								<xsl:when test="contains($VAR2, ',')=true()">
									<xsl:variable name="BT">
										<xsl:value-of select="substring-before($VAR2, ',')"/>
									</xsl:variable>

									<xsl:if test="normalize-space(string($BT))=string($TYPE)">
										<xsl:value-of select="concat('background-image: url(/UIServer', $BI, ');')"/>
									</xsl:if>
								</xsl:when>
								<xsl:otherwise>
									<xsl:if test="normalize-space(string($VAR2))=string($TYPE)">
										<xsl:value-of select="concat('background-image: url(/UIServer', $BI, ');')"/>
									</xsl:if>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:when>
						<xsl:otherwise>
							<xsl:if test="string($TYPE)='0'">
								<xsl:value-of select="concat('background-image: url(/UIServer', $BI, ');')"/>
							</xsl:if>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:when>
				<xsl:otherwise>
					<xsl:if test="string($TYPE)='0'">
						<xsl:value-of select="concat('background-image: url(/UIServer', $BACKGROUND, ');')"/>
					</xsl:if>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="style_background">
		<xsl:param name="BACKGROUND"/>
		<xsl:param name="TYPE"/>

		<xsl:if test="contains($BACKGROUND, ',')=true()">
			<xsl:variable name="VAR1">
				<xsl:value-of select="substring-after($BACKGROUND, ',')"/>
			</xsl:variable>

			<xsl:choose>
				<xsl:when test="contains($VAR1, ',')=true()">
					<xsl:variable name="BS">
						<xsl:value-of select="substring-before($VAR1, ',')"/>
					</xsl:variable>

					<xsl:variable name="VAR2">
						<xsl:value-of select="substring-after($VAR1, ',')"/>
					</xsl:variable>

					<xsl:variable name="BT">
						<xsl:choose>
							<xsl:when test="contains($VAR2, ',')=true()">
								<xsl:value-of select="substring-before($VAR2, ',')"/>
							</xsl:when>
							<xsl:otherwise>
								<xsl:value-of select="$VAR2"/>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:variable>

					<xsl:if test="normalize-space(string($BT))=string($TYPE)">
						<xsl:if test="normalize-space(string($BS))!=''">
							<xsl:value-of select="concat($BS, ';')"/>
						</xsl:if>
					</xsl:if>
				</xsl:when>
				<xsl:otherwise>
					<xsl:if test="string($TYPE)='0'">
						<xsl:value-of select="concat($VAR1, ';')"/>
					</xsl:if>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="style_processor">
		<xsl:param name="STYLEID"/>
		<xsl:param name="BACKGROUND"/>

		<xsl:attribute name="style">
			<xsl:call-template name="style_alignment">
				<xsl:with-param name="STYLEID" select="$STYLEID"/>
			</xsl:call-template>

			<xsl:call-template name="style_backcolor">
				<xsl:with-param name="STYLEID" select="$STYLEID"/>
			</xsl:call-template>

			<xsl:call-template name="style_borders">
				<xsl:with-param name="STYLEID" select="$STYLEID"/>
			</xsl:call-template>

			<xsl:call-template name="style_font">
				<xsl:with-param name="STYLEID" select="$STYLEID"/>
			</xsl:call-template>

			<xsl:call-template name="background_processor">
				<xsl:with-param name="BACKGROUND" select="$BACKGROUND"/>
				<xsl:with-param name="TYPE" select="0"/>
			</xsl:call-template>

			<xsl:call-template name="style_background">
				<xsl:with-param name="BACKGROUND" select="$BACKGROUND"/>
				<xsl:with-param name="TYPE" select="0"/>
			</xsl:call-template>
		</xsl:attribute>
	</xsl:template>

	<xsl:template name="style_alignment">
		<xsl:param name="STYLEID"/>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Horizontal)!=''">
			<xsl:choose>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Horizontal)='Left'">
					<xsl:text>Text-Align: Left;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Horizontal)='Center'">
					<xsl:text>Text-Align: Center;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Horizontal)='Right'">
					<xsl:text>Text-Align: Right;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Horizontal)='Fill'">
					<xsl:text>Text-Align: Fill;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Horizontal)='Justify'">
					<xsl:text>Text-Align: Justify;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Horizontal)='CenterAcrossSelection'">
					<xsl:text>Text-Align: Center-Across;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Horizontal)='Distributed'">
					<xsl:text>Text-Align: 121;</xsl:text>
				</xsl:when>
				<xsl:otherwise>
					<xsl:text>Text-Align: General;</xsl:text>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Vertical)!=''">
			<xsl:choose>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Vertical)='Top'">
					<xsl:text>Vertical-Align: Top;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Vertical)='Center'">
					<xsl:text>Vertical-Align: Middle;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Vertical)='Bottom'">
					<xsl:text>Vertical-Align: Bottom;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Vertical)='Justify'">
					<xsl:text>Vertical-Align: Justify;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Alignment/@ss:Vertical)='Distributed'">
					<xsl:text>Vertical-Align: 121;</xsl:text>
				</xsl:when>
				<xsl:otherwise>
					<xsl:text>Vertical-Align: Middle;</xsl:text>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="style_backcolor">
		<xsl:param name="STYLEID"/>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Interior/@ss:Color)!=''">
			<xsl:text>Background: </xsl:text>
				<xsl:value-of select="/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Interior/@ss:Color"/>
			<xsl:text>;</xsl:text>
		</xsl:if>
	</xsl:template>

	<xsl:template name="style_borders">
		<xsl:param name="STYLEID"/>

		<xsl:for-each select="/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Borders/excel:Border">
			<xsl:text>border-</xsl:text>
			<xsl:value-of select="@ss:Position"/>
			<xsl:text>: </xsl:text>

			<xsl:choose>
				<xsl:when test="string(@ss:Weight)!=''">
					<xsl:value-of select="@ss:Weight"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:text>1</xsl:text>
				</xsl:otherwise>
			</xsl:choose>

			<xsl:text>px</xsl:text>

			<xsl:choose>
				<xsl:when test="string(@ss:LineStyle)='Continuous' and string(@ss:Weight)=''">
					<xsl:text> Hairline</xsl:text>
				</xsl:when>
				<xsl:when test="string(@ss:LineStyle)='Dash'">
					<xsl:text> Dashed</xsl:text>
				</xsl:when>
				<xsl:when test="string(@ss:LineStyle)='Dot'">
					<xsl:text> Dotted</xsl:text>
				</xsl:when>
				<xsl:when test="string(@ss:LineStyle)='DashDot'">
					<xsl:text> Dot-Dash</xsl:text>
				</xsl:when>
				<xsl:when test="string(@ss:LineStyle)='DashDotDot'">
					<xsl:text> Dot-Dot-Dash</xsl:text>
				</xsl:when>
				<xsl:when test="string(@ss:LineStyle)='SlantDashDot'">
					<xsl:text> Dot-Dash-Slanted</xsl:text>
				</xsl:when>
				<xsl:when test="string(@ss:LineStyle)='Double'">
					<xsl:text> Double</xsl:text>
				</xsl:when>
				<xsl:otherwise>
					<xsl:text> Solid</xsl:text>
				</xsl:otherwise>
			</xsl:choose>

			<xsl:choose>
				<xsl:when test="string(@ss:Color)!=''">
					<xsl:text> </xsl:text>
					<xsl:value-of select="@ss:Color"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:text> #000000</xsl:text>
				</xsl:otherwise>
			</xsl:choose>

			<xsl:text>;</xsl:text>
		</xsl:for-each>
	</xsl:template>

	<xsl:template name="style_font">
		<xsl:param name="STYLEID"/>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:FontName)!=''">
			<xsl:text>Font-Family: </xsl:text>
				<xsl:value-of select="/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:FontName"/>
			<xsl:text>;</xsl:text>
		</xsl:if>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:Size)!=''">
			<xsl:text>Font-Size: </xsl:text>
				<xsl:value-of select="/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:Size"/>
			<xsl:text>pt;</xsl:text>
		</xsl:if>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:Color)!=''">
			<xsl:text>Color: </xsl:text>
				<xsl:value-of select="/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:Color"/>
			<xsl:text>;</xsl:text>
		</xsl:if>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:Bold)='1'">
			<xsl:text>Font-Weight: Bold;</xsl:text>
		</xsl:if>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:Italic)='1'">
			<xsl:text>Font-Style: Italic;</xsl:text>
		</xsl:if>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:UnderLine)!='' or string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:StrikeThrough)='1'">
			<xsl:text>Text-Decoration:</xsl:text>

			<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:UnderLine)!=''">
				<xsl:text> Underline</xsl:text>
			</xsl:if>

			<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:StrikeThrough)='1'">
				<xsl:text> Line-Through</xsl:text>
			</xsl:if>

			<xsl:text>;</xsl:text>
		</xsl:if>

		<xsl:if test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:UnderLine)!=''">
			<xsl:choose>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:UnderLine)='Single'">
					<xsl:text>Text-Underline-Style: Single;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:UnderLine)='Double'">
					<xsl:text>Text-Underline-Style: Double;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:UnderLine)='SingleAccounting'">
					<xsl:text>Text-Underline-Style: Single-Accounting;</xsl:text>
				</xsl:when>
				<xsl:when test="string(/excel:Workbook/excel:Styles/excel:Style[@ss:ID=string($STYLEID)]/excel:Font/@ss:UnderLine)='DoubleAccounting'">
					<xsl:text>Text-Underline-Style: Double-Accounting;</xsl:text>
				</xsl:when>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="table_row_cell_content">
		<xsl:param name="CELLDATA"/>
		<xsl:param name="CELLHREF"/>
		<xsl:param name="CELLCOMMENT"/>

		<xsl:choose>
			<xsl:when test="xs:string($CELLHREF)!=''">
				<xsl:element name="xhtml:a">
					<xsl:attribute name="href" select="$CELLHREF"/>
					<xsl:value-of select="$CELLDATA"/>
				</xsl:element>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="table_row_cell_content_parse">
					<xsl:with-param name="PC" select="$CELLDATA"/>
					<xsl:with-param name="COMMENT" select="$CELLCOMMENT"/>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_row_cell_content_parse">
		<xsl:param name="PC"/>
		<xsl:param name="COMMENT"/>

		<xsl:if test="normalize-space($PC)!=''">
			<xsl:choose>
				<xsl:when test="starts-with(normalize-space($PC), '#l{')=true()">
					<xsl:call-template name="ui_object_label_parser">
						<xsl:with-param name="VALUE" select="substring-before(substring-after($PC, '#l{'), '}')"/>
					</xsl:call-template>

					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="substring-after($PC, '}')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:when test="starts-with($PC, '#c{')=true()">
					<xsl:call-template name="ui_object_parser">
						<xsl:with-param name="VALUE" select="substring-before(substring-after($PC, '#c{'), '}')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>

					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="substring-after($PC, '}')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:when test="starts-with($PC, '#img{')=true()">
					<xsl:call-template name="xhtml_img_parser">
						<xsl:with-param name="VALUE" select="substring-before(substring-after($PC, '#img{'), '}')"/>
					</xsl:call-template>

					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="substring-after($PC, '}')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:when test="starts-with($PC, '#background{')=true()">
					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="substring-after($PC, '}')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:when test="(starts-with($PC, '#c.start{')=true()) or (starts-with($PC, '#c.end{')=true())">
					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="normalize-space(substring-after($PC, '}'))"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:when test="contains($PC, '#l{')=true()">
					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="substring-before($PC, '#l{')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>

					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="concat('#l{', substring-after($PC, '#l{'))"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:when test="contains($PC, '#c{')=true()">
					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="substring-before($PC, '#c{')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>

					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="concat('#c{', substring-after($PC, '#c{'))"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:when test="contains($PC, '#img{')=true()">
					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="substring-before($PC, '#img{')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>

					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="concat('#img{', substring-after($PC, '#img{'))"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:when test="contains($PC, '#background{')=true()">
					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="substring-before($PC, '#background{')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>

					<xsl:call-template name="table_row_cell_content_parse">
						<xsl:with-param name="PC" select="concat('#background{', substring-after($PC, '#background{'))"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="translate($PC, ' ', '&#160;')"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="ui_object_parser">
		<xsl:param name="VALUE"/>
		<xsl:param name="COMMENT"/>

		<xsl:variable name="VP">
			<xsl:value-of select="normalize-space($VALUE)"/>
		</xsl:variable>

		<xsl:if test="string($VP)!=''">
			<xsl:choose>
				<xsl:when test="contains($VP, ',')=true()">
					<xsl:element name="xui:place">
						<xsl:attribute name="control">
							<xsl:value-of select="substring-before($VP, ',')"/>
						</xsl:attribute>
						<xsl:if test="normalize-space($COMMENT) != ''">
							<xsl:attribute name="style">
								<xsl:value-of select="$COMMENT"/>
							</xsl:attribute>
						</xsl:if>
					</xsl:element>

					<xsl:call-template name="ui_object_parser">
						<xsl:with-param name="VALUE" select="substring-after($VP, ',')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:element name="xui:place">
						<xsl:attribute name="control">
							<xsl:value-of select="$VP"/>
						</xsl:attribute>
						<xsl:if test="normalize-space($COMMENT) != ''">
							<xsl:attribute name="style">
								<xsl:value-of select="$COMMENT"/>
							</xsl:attribute>
						</xsl:if>
					</xsl:element>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="ui_relation_parser">
		<xsl:param name="VALUE"/>
		<xsl:param name="COMMENT"/>

		<xsl:variable name="VP">
			<xsl:value-of select="normalize-space($VALUE)"/>
		</xsl:variable>

		<xsl:if test="string($VP)!=''">
			<xsl:choose>
				<xsl:when test="contains($VP, ',')=true()">
					<xsl:element name="xui:place">
						<xsl:attribute name="relation">
							<xsl:value-of select="substring-before($VP, ',')"/>
						</xsl:attribute>
					</xsl:element>

					<xsl:call-template name="ui_object_parser">
						<xsl:with-param name="VALUE" select="substring-after($VP, ',')"/>
						<xsl:with-param name="COMMENT" select="$COMMENT"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:element name="xui:place">
						<xsl:attribute name="relation">
							<xsl:value-of select="$VP"/>
						</xsl:attribute>
					</xsl:element>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="ui_object_label_parser">
		<xsl:param name="VALUE"/>

		<xsl:variable name="VP">
			<xsl:value-of select="normalize-space($VALUE)"/>
		</xsl:variable>

		<xsl:if test="string($VP)!=''">
			<xsl:choose>
				<xsl:when test="contains($VP, ',')=true()">
					<xsl:element name="xui:place">
						<xsl:attribute name="control-label">
							<xsl:value-of select="substring-before($VP, ',')"/>
						</xsl:attribute>
					</xsl:element>

					<xsl:call-template name="ui_object_label_parser">
						<xsl:with-param name="VALUE" select="substring-after($VP, ',')"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:element name="xui:place">
						<xsl:attribute name="control-label">
							<xsl:value-of select="$VP"/>
						</xsl:attribute>
					</xsl:element>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="xhtml_img_parser">
		<xsl:param name="VALUE"/>

		<xsl:variable name="VP">
			<xsl:value-of select="normalize-space($VALUE)"/>
		</xsl:variable>

		<xsl:if test="string($VP)!=''">
			<xsl:choose>
				<xsl:when test="contains($VP, ',')=true()">
					<xsl:element name="xhtml:img">
						<xsl:attribute name="src">
							<xsl:value-of select="substring-before($VP, ',')"/>
						</xsl:attribute>
					</xsl:element>
	
					<xsl:call-template name="xhtml_img_parser">
						<xsl:with-param name="VALUE" select="substring-after($VP, ',')"/>
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:element name="xhtml:img">
						<xsl:attribute name="src">
							<xsl:value-of select="$VP"/>
						</xsl:attribute>
					</xsl:element>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	<xsl:template name="table_row_cell_property">
		<xsl:param name="CHECKROWPOSITION"/>
		<xsl:param name="PRIORINDEX"/>
		<xsl:param name="ROWINDEX"/>
		<xsl:param name="CELLINDEX"/>
		<xsl:param name="REPEATSTARTROW"/>
		<xsl:param name="REPEATSTARTCOL"/>
		<xsl:param name="REPEATENDROW"/>
		<xsl:param name="REPEATENDCOL"/>

		<xsl:choose>
			<xsl:when test="(xs:integer($ROWINDEX) &gt;= xs:integer($REPEATSTARTROW)) and (xs:integer($ROWINDEX) &lt;= xs:integer($REPEATENDROW)) and (xs:integer($CELLINDEX) &gt;= xs:integer($REPEATSTARTCOL)) and (xs:integer($CELLINDEX) &lt;= xs:integer(xs:integer($REPEATENDCOL)))">
				<xsl:text>0</xsl:text>
			</xsl:when>
			<xsl:otherwise>
				<xsl:variable name="CURRINDEX">
					<xsl:choose>
						<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($CHECKROWPOSITION)]/@ss:Index)!=''">
							<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($CHECKROWPOSITION)]/@ss:Index)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="xs:integer($PRIORINDEX) + 1"/>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="xs:integer($CURRINDEX) &gt; xs:integer($ROWINDEX)">
						<xsl:text>1</xsl:text>
					</xsl:when>
					<xsl:otherwise>
						<xsl:variable name="ABSOLUTE">
							<xsl:call-template name="table_row_cell_absolute_check">
								<xsl:with-param name="CHECKROWPOSITION" select="xs:integer($CHECKROWPOSITION)"/>
								<xsl:with-param name="CHECKROWINDEX" select="xs:integer($CURRINDEX)"/>
								<xsl:with-param name="CELLNUMBER" select="count(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($CHECKROWPOSITION)]/excel:Cell)"/>
								<xsl:with-param name="FINDROWINDEX" select="xs:integer($ROWINDEX)"/>
								<xsl:with-param name="FINDCELLINDEX" select="xs:integer($CELLINDEX)"/>
								<xsl:with-param name="FINDCELLPOSITION" select="1"/>
								<xsl:with-param name="CELLPRIORINDEX" select="0"/>
							</xsl:call-template>
						</xsl:variable>

						<xsl:choose>
							<xsl:when test="xs:boolean($ABSOLUTE)=true()">
								<xsl:choose>
									<xsl:when test="xs:integer($CHECKROWPOSITION) &lt; xs:integer($ROWNUMBER)">
										<xsl:call-template name="table_row_cell_property">
											<xsl:with-param name="CHECKROWPOSITION" select="xs:integer($CHECKROWPOSITION) + 1"/>
											<xsl:with-param name="PRIORINDEX" select="xs:integer($CURRINDEX)"/>
											<xsl:with-param name="ROWINDEX" select="xs:integer($ROWINDEX)"/>
											<xsl:with-param name="CELLINDEX" select="xs:integer($CELLINDEX)"/>
											<xsl:with-param name="REPEATSTARTROW" select="xs:integer($REPEATSTARTROW)"/>
											<xsl:with-param name="REPEATSTARTCOL" select="xs:integer($REPEATSTARTCOL)"/>
											<xsl:with-param name="REPEATENDROW" select="xs:integer($REPEATENDROW)"/>
											<xsl:with-param name="REPEATENDCOL" select="xs:integer($REPEATENDCOL)"/>
										</xsl:call-template>
									</xsl:when>
									<xsl:otherwise>
										<xsl:text>1</xsl:text>
									</xsl:otherwise>
								</xsl:choose>
							</xsl:when>
							<xsl:otherwise>
								<xsl:text>0</xsl:text>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="table_row_cell_absolute_check">
		<xsl:param name="CHECKROWPOSITION"/>
		<xsl:param name="CHECKROWINDEX"/>
		<xsl:param name="CELLNUMBER"/>
		<xsl:param name="FINDROWINDEX"/>
		<xsl:param name="FINDCELLINDEX"/>
		<xsl:param name="FINDCELLPOSITION"/>
		<xsl:param name="CELLPRIORINDEX"/>

		<xsl:variable name="CURRINDEX">
			<xsl:choose>
				<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($CHECKROWPOSITION)]/excel:Cell[xs:integer($FINDCELLPOSITION)]/@ss:Index)!=''">
					<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($CHECKROWPOSITION)]/excel:Cell[xs:integer($FINDCELLPOSITION)]/@ss:Index)"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="xs:integer($CELLPRIORINDEX) + 1"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="(xs:integer($CURRINDEX) &gt; xs:integer($FINDCELLINDEX)) or (xs:integer($FINDCELLPOSITION) &gt; xs:integer($CELLNUMBER))">
				<xsl:text>1</xsl:text>
			</xsl:when>
			<xsl:otherwise>
				<xsl:variable name="ROWSPAN">
					<xsl:choose>
						<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($CHECKROWPOSITION)]/excel:Cell[xs:integer($FINDCELLPOSITION)]/@ss:MergeDown)!=''">
							<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($CHECKROWPOSITION)]/excel:Cell[xs:integer($FINDCELLPOSITION)]/@ss:MergeDown)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:text>0</xsl:text>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:variable>

				<xsl:variable name="COLSPAN">
					<xsl:choose>
						<xsl:when test="string(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($CHECKROWPOSITION)]/excel:Cell[xs:integer($FINDCELLPOSITION)]/@ss:MergeAcross)!=''">
							<xsl:value-of select="xs:integer(excel:Worksheet[1]/excel:Table/excel:Row[xs:integer($CHECKROWPOSITION)]/excel:Cell[xs:integer($FINDCELLPOSITION)]/@ss:MergeAcross)"/>
						</xsl:when>
						<xsl:otherwise>
							<xsl:text>0</xsl:text>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="(xs:integer($FINDROWINDEX) &gt;= xs:integer($CHECKROWINDEX)) and (xs:integer($FINDROWINDEX) &lt;= xs:integer($CHECKROWINDEX) + xs:integer($ROWSPAN)) and (xs:integer($FINDCELLINDEX) &gt;= xs:integer($CURRINDEX)) and (xs:integer($FINDCELLINDEX) &lt;= xs:integer($CURRINDEX) + xs:integer($COLSPAN))">
						<xsl:text>0</xsl:text>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="table_row_cell_absolute_check">
							<xsl:with-param name="CHECKROWPOSITION" select="xs:integer($CHECKROWPOSITION)"/>
							<xsl:with-param name="CHECKROWINDEX" select="xs:integer($CHECKROWINDEX)"/>
							<xsl:with-param name="CELLNUMBER" select="xs:integer($CELLNUMBER)"/>
							<xsl:with-param name="FINDROWINDEX" select="xs:integer($FINDROWINDEX)"/>
							<xsl:with-param name="FINDCELLINDEX" select="xs:integer($FINDCELLINDEX)"/>
							<xsl:with-param name="FINDCELLPOSITION" select="xs:integer($FINDCELLPOSITION) + 1"/>
							<xsl:with-param name="CELLPRIORINDEX" select="xs:integer($CURRINDEX) + xs:integer($COLSPAN)"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>