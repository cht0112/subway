package com.justep.appCommon;

import java.util.Iterator;

import com.justep.system.data.Row;
import com.justep.util.Utils;

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;

public class PinyinUtils {
	private static HanyuPinyinOutputFormat format = initFormat();

	private static HanyuPinyinOutputFormat initFormat() {
		HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
		format.setCaseType(HanyuPinyinCaseType.UPPERCASE);
		format.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
		return format;
	}

	public static String getSimplePinyin(String chinese) {
		StringBuffer pinyin = new StringBuffer();
		for (int i = 0; i < chinese.length(); i++) {
			char chr = chinese.charAt(i);
			if (chr > 128) {
				try {
					String[] p = PinyinHelper.toHanyuPinyinStringArray(chr, format);
					if (p != null && p.length > 0 && p[0].length() > 0) {
						pinyin.append(p[0].charAt(0));
					}
				} catch (Exception e) {
					throw new RuntimeException(e);
				}
			} else {
				pinyin.append(String.valueOf(chr).toUpperCase().charAt(0));
			}
		}
		return pinyin.toString();
	}

	public static String getFullPinyin(String chinese) {
		StringBuffer pinyin = new StringBuffer();
		for (int i = 0; i < chinese.length(); i++) {
			char chr = chinese.charAt(i);
			if (chr > 128) {
				try {
					String[] p = PinyinHelper.toHanyuPinyinStringArray(chr, format);
					if (p != null && p.length > 0) {
						pinyin.append(p[0]);
					}
				} catch (Exception e) {
					throw new RuntimeException(e);
				}
			} else {
				pinyin.append(String.valueOf(chr).toUpperCase().charAt(0));
			}
		}
		return pinyin.toString();
	}

	public static void generatePinyin(Iterator<Row> rows, String chineseRelation, String simplePinyinRelation,
			String fullPinyinRelation) {
		while (rows.hasNext()) {
			Row row = rows.next();
			String chinese = row.getString(chineseRelation);
			if (Utils.isNotEmptyString(simplePinyinRelation)) {
				row.setString(simplePinyinRelation, PinyinUtils.getSimplePinyin(chinese));
			}
			if (Utils.isNotEmptyString(fullPinyinRelation)) {
				row.setString(fullPinyinRelation, PinyinUtils.getFullPinyin(chinese));
			}
		}
	}
}
