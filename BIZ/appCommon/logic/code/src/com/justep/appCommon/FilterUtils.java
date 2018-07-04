package com.justep.appCommon;

import java.util.Collection;
import java.util.List;

import com.justep.util.Utils;

public class FilterUtils {
	/**
	 * 联合过滤条件
	 * 
	 * @param filter1
	 * @param filter2
	 * @param operator
	 * @return
	 */
	public static String joinFilter(String filter1, String filter2,
			String operator) {
		if (Utils.isNotEmptyString(filter1) && Utils.isNotEmptyString(filter2)) {
			return "(" + filter1 + ") " + operator + " (" + filter2 + ")";
		} else {
			return (Utils.isEmptyString(filter1) ? "" : filter1)
					+ (Utils.isEmptyString(filter2) ? "" : filter2);
		}
	}

	/**
	 * 生成当前操作员所有人员成员的URL过滤条件
	 * 
	 * @param urlField
	 * @return
	 */
	public static String getCurrentMembersURLFilter(String urlField) {
		String filter = "";

		Collection<String> psmFIDs = SysUtils.getAllPersonMemberFIDs();
		for (String psmFID : psmFIDs) {
			String[] psmFIDSplit = psmFID.split("/");

			String psmFIDPart = "";
			for (int j = 0; j < psmFIDSplit.length; j++) {
				String splitID = psmFIDSplit[j];
				if (splitID == "")
					continue;

				if (psmFIDPart == "") {
					psmFIDPart = "/" + splitID;
				} else {
					psmFIDPart = psmFIDPart + "/" + splitID;
				}

				String condition = String.format("(%s = '%s')", urlField,
						psmFIDPart);
				if (filter.indexOf(condition) < 0)
					filter = joinFilter(filter, condition, "OR");
			}
		}
		return filter;
	}

	public static String getInFilter(String field, List<String> values) {
		String s = "";
		for (String value : values) {
			if (s.length() == 0)
				s = String.format("'%s'", value);
			else
				s = String.format("%s, '%s'", s, value);
		}
		if (s.length() == 0)
			return "1 = 0";
		else 
			return String.format("%s in (%s)", field, s);
	}
}