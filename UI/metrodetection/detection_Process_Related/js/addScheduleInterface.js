/**
 * scheduleInfo:Dom类型的字符串，内容为日程表的字段内容，Dom结构如下：
 	<schedule>
		<fTitle>
			fTitleValue
		</fTitle>
		<fBeginTime>
			fBeginTimeValue  	//格式：yyyy-MM-dd hh:mm:ss
		</fBeginTime>
		<fEndTime>
			fEndTimeValue  		//格式：yyyy-MM-dd hh:mm:ss
		</fEndTime>
		<fContent>
			fContentValue
		</fContent>
		<Executors>
			<Executor>
				<fExecutorID>
					fExecutorIDValue
				</fExecutorID>				
				<fExecutorName>
					fExecutorNameValue
				</fExecutorName>
			</Executor>
			<Executor>
				<fExecutorID>
					fExecutorIDValue
				</fExecutorID>				
				<fExecutorName>
					fExecutorNameValue
				</fExecutorName>
			</Executor>
			...
		</Executors>
		<fIsShared>
			fIsSharedValue
		</fIsShared>
		<fIsRemind>
			fIsRemindValue
		</fIsRemind>
		<fRemindTime>
			fRemindTimeValue  	//格式：yyyy-MM-dd hh:mm:ss
		</fRemindTime>
		<fCreatePsnID>
			fCreatePersonIDValue
		</fCreatePsnID>
		<fCreatePsnName>
			fCreatePersonNameValue
		</fCreatePsnName>
		<fCreateTime>
			fCreateTimeValue     
		</fCreateTime>	  
		<fCreateURL> 
			fCreateURLValue
		</fCreateURL> 
		<fBizID>
			fBizIDValue 	//业务ID
		</fBizID>
		<fBizType>
			fBizTypeValue	//业务类型
		</fBizType>
	</schedule>
	<schedule>
	...
	</schedule>
	...		
 */	
 /*例： scheduleInfo = "<schedule>"
						+ "<fTitle>"
							+ "fTitleValue"
						+ "</fTitle>"
						+ "<fBeginTime>"
							+ "2010-06-13 12:30:00"  	
						+ "</fBeginTime>"
						+ "<fEndTime>"
							+ "2010-06-13 13:30:00"
						+ "</fEndTime>"
						+ "<fContent>"
							+ "fContentValue"
						+ "</fContent>"
						+ "<Executors>"							
							+ "<Executor>" 
								+ "<fExecutorID>"
									+ "523A1E55-69EA-4256-B560-08A462FBF806"
								+ "</fExecutorID>"
								+ "<fExecutorName>" 
									+ "wanghu" 
								+ "</fExecutorName>"
							+ "</Executor>"
						+ "</Executors>"
						+ "<fIsShared>"
							+ "1"
						+ "</fIsShared>"
						+ "<fIsRemind>"
							+ "1"
						+ "</fIsRemind>"
						+ "<fRemindTime>"
							+ "2010-06-13 13:00:00"
						+ "</fRemindTime>"
						+ "<fCreatPsnID>"
							+ "523A1E55-69EA-4256-B560-08A462FBF806"
						+ "</fCreatPsnID>"
						+ "<fCreatPsnName>"
							+ "wanghu"
						+ "</fCreatPsnName>"	
						+ "<fCreateTime>"
							+ "2010-06-13 13:00:00"    
						+ "</fCreateTime>"	 
						+ "<fCreateURL>" 
							+ "fCreateURLValue"
						+ "</fCreateURL>" 
						+"<fBizID>"
						+ 	"523A1E55-69EA-4256-B560-08A462FBF806"
						+ "</fBizID>"
						+ "<fBizType>"
						+ 	"boardroomArrange"
						+ "</fBizType>"				
					+ "</schedule>";
	*/
 
function callAddSchedule(scheduleInfo)
{	
		var action = "<action process=\"/OA2/schedule/process/schedule/scheduleProcess\" activity=\"startActivity\" "
				+ "name=\"addSchedule2Action\">"
				+ "<parameter>"
				+ "<cmd>"
				+ "<jscheme:xml>"
				+ "<root>"
				+ scheduleInfo
				+ "</root>"
				+ "</jscheme:xml>" + "</cmd>" + "</parameter>" + "</action>";
		var doc = "<input name=\"instance\">" + action
				+ "</input><output name=\"data\"/>";
		var loader = dynamicDataGettor.callXPL("/UI/system/utils/sample-query.xpl", doc, false);
		if (!loader)
			return false;
		var rt = loader.doXPath("xpl-root/call-xpl/rdf:RDF/jscheme:xml/root/@success", null,null, "single");
		if (rt=="false")
			return false;
		//XMLEvents.dispatch($("mainModel").xfElement, "main" + "-xui-refresh");
		return rt.nodeValue == "true";
}