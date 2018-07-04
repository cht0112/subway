import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.justep.system.data.KSQL;

public class projectMember {
	public static int projectMem(String applNo,List list) throws IOException{
		try{
			System.out.println(list.size());
			System.out.println(applNo);
			for(Object aa : list){
				System.out.println(aa);
			}
			Map<String, Object> mapdelete = new  HashMap<String,Object>();
			mapdelete.put("applNo", Integer.valueOf(applNo));
			System.out.println(mapdelete);
			String ksql = "delete from  TEST_PROJECT_MEMBER_INFO TEST_PROJECT_MEMBER_INFO "+
			" where TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO = :applNo";
			System.out.println(ksql);
			int tabApplication = KSQL.executeUpdate(ksql, mapdelete, "/metrodetection/system_code/data", null);
			System.out.println(tabApplication+" 删除记录");
			Map<String, Object> map = new  HashMap<String,Object>();
			if(list != null && list.size() > 0){
				for(int i=0;i<list.size();i++){
					map.put("applicationNo", Integer.valueOf(applNo));
					map.put("memId", list.get(i));
					StringBuffer sql = new StringBuffer();
					System.out.println(i+"============================"+list.get(i));
					sql.append("insert into TEST_PROJECT_MEMBER_INFO test(test,test.pROJECTMEMBERID,test.aPPLICATION_NO) values(")
					.append(":guid(),")
					.append(":memId,")
					.append(":applicationNo)");
					System.out.println(sql);
					KSQL.executeUpdate(sql.toString(), map, "/metrodetection/system_code/data", null);
				}
			}
		}catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		return 1;
	}
}