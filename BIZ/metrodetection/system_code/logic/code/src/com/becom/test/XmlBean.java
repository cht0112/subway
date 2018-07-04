package com.becom.test;

import java.io.IOException;
import java.io.StringReader;
import java.io.StringWriter;
import java.io.Writer;

import org.exolab.castor.mapping.Mapping;
import org.exolab.castor.mapping.MappingException;
import org.exolab.castor.xml.MarshalException;
import org.exolab.castor.xml.Marshaller;
import org.exolab.castor.xml.Unmarshaller;
import org.exolab.castor.xml.ValidationException;

import com.justep.filesystem.FileSystemWrapper;

public class XmlBean {
	
	private static String mapPath = FileSystemWrapper.instance().getRealPath("/metrodetection/system_code/logic/code/src/com/becom/test/subway.xml");
	private static String mapImportPath = FileSystemWrapper.instance().getRealPath("/metrodetection/system_code/logic/code/src/com/becom/test/case.xml");
	
	/**
	 * xml文件转为用例对象
	 * @param str
	 * @return
	 */
	public static TestCase xmlToCase(String str) {
		TestCase res = null;
		Mapping mapping = new Mapping();
		try {
			mapping.loadMapping(mapPath);
			StringReader srd = new StringReader(str);
			Unmarshaller umsl = new Unmarshaller(TestCase.class);
			umsl.setMapping(mapping);
			TestCase tc = (TestCase) umsl.unmarshal(srd);
			return tc;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MarshalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ValidationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return res;
		
	}
	
	/**
	 * xml文件转为测试任务对象
	 * @param str
	 * @return
	 */
	public static DetectionTask xmlToDetectionTask(String str) {
		DetectionTask res = null;
		Mapping mapping = new Mapping();
		try {
			mapping.loadMapping(mapPath);
			StringReader srd = new StringReader(str);
			Unmarshaller umsl = new Unmarshaller(DetectionTask.class);
			umsl.setMapping(mapping);
			DetectionTask dt = (DetectionTask) umsl.unmarshal(srd);
			return dt;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MarshalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ValidationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return res;
		
	}
	
	/**
	 * DetectionTask对象转为xml文件
	 * @return
	 */
	public static String beanToXml(DetectionTask dt) {
		String res = "";
		Mapping mapping = new Mapping();
		Writer wt = new StringWriter();
		Marshaller msl;
		try {
			mapping.loadMapping(mapPath);
			msl = new Marshaller(wt);
			msl.setMapping(mapping);
			msl.marshal(dt);
			res = wt.toString();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MarshalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ValidationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//System.out.println(wt);
		return res;
	}
	
	public static TestCase xmlToCaseForImport(String str) {
		TestCase res = null;
		Mapping mapping = new Mapping();
		try {
			mapping.loadMapping(mapImportPath);
			StringReader srd = new StringReader(str);
			Unmarshaller umsl = new Unmarshaller(TestCase.class);
			umsl.setMapping(mapping);
			TestCase tc = (TestCase) umsl.unmarshal(srd);
			return tc;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MarshalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ValidationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return res;
	}
	
	/**
	 * 2013.11.04日 文件新增md5节点后的验证
	 * @param str
	 * @return
	 */
	/*public static Boolean valiContents(String str) {
		Boolean flag = true;
		//DetectionTask res = null;
		Mapping mapping = new Mapping();
		StringReader srd = new StringReader(str);
		try {
			mapping.loadMapping(mapPath);
			Unmarshaller umsl = new Unmarshaller(DetectionTask.class);
			umsl.setMapping(mapping);
			DetectionTask dt = (DetectionTask) umsl.unmarshal(srd);
			//取出文件转换完对象之后中的md5节点
			String conMd5 = dt.getMd5();
			
			//对原始xml文件内容进行md5加密之后的内容
			String xmlMd5 = MD5Utils.encrypt(str.substring(0,str.lastIndexOf("<md5>")));
			
			//对比操作
			if(!xmlMd5.equals(conMd5)) {
				flag = false;
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MarshalException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ValidationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return flag;
	}*/
	

}
