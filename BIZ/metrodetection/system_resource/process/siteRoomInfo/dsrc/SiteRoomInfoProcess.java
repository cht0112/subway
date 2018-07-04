
import java.sql.Blob;

import com.justep.system.context.ContextHelper;
import com.justep.system.data.KSQL;
import com.justep.system.data.Row;
import com.justep.system.data.Table;
import com.justep.util.Utils;

public class SiteRoomInfoProcess {
	public static void siteRoomInfoProcessAfterBlobDownloadAction() {
      String id = (String)ContextHelper.getActionContext().getParameter("id"); 
      String ksql = "select DETECTION_ROOM_INFO.* from DETECTION_ROOM_INFO DETECTION_ROOM_INFO";
      Table localTable = KSQL.select(ksql,null , "/metrodetection/system_code/data", null);
      System.out.println(ksql);
      Row localRow = (Row)localTable.getRow("DETECTION_ROOM_INFO",id);
      Blob localBlob = localRow.getBlob("iMAGE");
      if (Utils.isNotNull(localBlob)) {
    	  System.out.println("blob字段有值");
      }else{
    	  System.out.println("blob字段没有值#####");

		}	
	}

	public static void mainActivityAfterBlobDownloadAction() {
	  String id = (String)ContextHelper.getActionContext().getParameter("id"); 
      String ksql = "select DETECTION_ROOM_INFO.* from DETECTION_ROOM_INFO DETECTION_ROOM_INFO";
      Table localTable = KSQL.select(ksql,null , "/metrodetection/system_code/data", null);
      System.out.println(ksql);
      Row localRow = (Row)localTable.getRow("DETECTION_ROOM_INFO",id);
      Blob localBlob = localRow.getBlob("iMAGE");
      if (Utils.isNotNull(localBlob)){
    	  System.out.println("blob字段有值");
      }else{
    	  System.out.println("blob字段没有值#####");
	  }
	}
}