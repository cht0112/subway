<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<store name="SA_WorkRemind"/>
	<mapping concept="SA_WorkRemind">
		<table type="owner-table" name="SA_Task">
			<key field="sID" type="String"/>

			<discriminator field="sTypeID" value="WORKREMIND"/>
		</table>
	</mapping>
</model>