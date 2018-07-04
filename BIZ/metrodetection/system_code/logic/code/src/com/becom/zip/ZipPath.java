package com.becom.zip;


/**
 * 压缩文件及目录
 * @author LunwenLiu
 */
// import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;

import org.apache.tools.zip.ZipOutputStream;

public class ZipPath {
	static final int BUFFER = 2048000; // 200KB

	/*public void unzip(String zipFileName, String outputDirectory)
			throws Exception { // 解压中文有问题
		ZipInputStream in = new ZipInputStream(new FileInputStream(zipFileName));
		// org.apache.tools.zip.ZipEntry in = new
		// org.apache.tools.zip.ZipEntry(new FileInputStream(zipFileName));
		// org.apache.tools.zip.
		ZipEntry z;
		while ((z = in.getNextEntry()) != null) {
			if (z.isDirectory()) {
				String name = z.getName();
				name = name.substring(0, name.length() - 1);
				File f = new File(outputDirectory + File.separator + name);
				f.mkdir();
			} else {
				File f = new File(outputDirectory + File.separator
						+ z.getName());
				f.createNewFile();
				FileOutputStream out = new FileOutputStream(f);
				int count;
				byte[] data = new byte[BUFFER];
				while ((count = in.read(data, 0, BUFFER)) != -1) {
					out.write(data, 0, count);
				}
				out.close();
			}
		}
		in.close();
	}*/
	
	@SuppressWarnings("unchecked")
	public static void unzip(String zipFileName, String outputDirectory)
	 throws Exception { 
		org.apache.tools.zip.ZipFile zipFile = new  org.apache.tools.zip.ZipFile(new File(zipFileName));
		java.util.Enumeration e = zipFile.getEntries();
		org.apache.tools.zip.ZipEntry z = null;
		InputStream in = null;
			File outFile = new File(outputDirectory);
			if (!outFile.exists())
			{
				outFile.mkdirs();
			}
			while (e.hasMoreElements()) {
				z = (org.apache.tools.zip.ZipEntry)e.nextElement();
				if (z.isDirectory()) {
					String name = z.getName();
					name = name.substring(0, name.length() - 1);
					File f = new File(outputDirectory + File.separator + name);
					f.mkdir();
				} else {
					String name = z.getName();
					int position = name.lastIndexOf("/");
					if (position >= 0)
					{
						name = name.substring(position+1);
					}
					File f = new File(outputDirectory + File.separator
							+ name.toLowerCase());
					
					f.createNewFile();
					in = zipFile.getInputStream(z);
					FileOutputStream out = new FileOutputStream(f);
					int count;
					byte[] data = new byte[BUFFER];
					
					while ((count = in.read(data, 0, BUFFER)) != -1) {
						out.write(data, 0, count);
					}
					out.close();
				}
			}
			in.close();
			zipFile.close();
		}

	public void zip(String zipFileName, String inputFile) throws Exception {
		if (zipFileName == null || zipFileName.trim().length() == 0) {
			zipFileName = "test.zip";
		}
		zip(zipFileName, new File(inputFile));
	}

	private void zip(String zipFileName, File inputFile) throws Exception {
		ZipOutputStream out = new ZipOutputStream(new FileOutputStream(
				zipFileName));
		out.setMethod(ZipOutputStream.DEFLATED);
		out.setEncoding("GBK");
		// zip(out, inputFile, "test");//目录
		zip(out, inputFile, "");
		out.close();
	}

	private void zip(ZipOutputStream out, File f, String base) throws Exception {
		if (f.isDirectory()) {
			File[] fl = f.listFiles();
			if (!base.equals(""))
			{
				out.putNextEntry(new org.apache.tools.zip.ZipEntry(base + "/"));
			}
			base = base.length() == 0 ? "" : base + "/";
			for (int i = 0; i < fl.length; i++) {
				String fileName = fl[i].getName();
				int position = fileName.lastIndexOf(".");
				//扩展名
				String extName = fileName.substring(position + 1);
				if ("zip".equals(extName))
				{
					continue;
				}
				zip(out, fl[i], base + fl[i].getName());
			}
		} else {
			out.putNextEntry(new org.apache.tools.zip.ZipEntry(base));
			FileInputStream in = new FileInputStream(f);
			int count;
			byte[] data = new byte[BUFFER];
			while ((count = in.read(data, 0, BUFFER)) != -1) {
				out.write(data, 0, count);
			}
			// int b;
			// while ((b = in.read()) != -1)
			// {
			// out.write(b);
			// }
			in.close();
			
		}
	}

	/**
	 * @param args
	 */
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		try {
			ZipPath t = new ZipPath();
			t.zip("d:\\temp.zip", "d:\\temp\\01");
			t.unzip("d:\\temp.zip", "d:\\temp2"); 
		} catch (Exception e) {
			e.printStackTrace(System.out);
		}
	}

}
