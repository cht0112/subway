package com.justep.appCommon.messenger;

import org.jivesoftware.smack.ConnectionConfiguration;
import org.jivesoftware.smack.XMPPConnection;
import org.jivesoftware.smack.XMPPException;
import org.jivesoftware.smack.packet.DefaultPacketExtension;
import org.jivesoftware.smack.packet.Message;
import org.jivesoftware.smack.packet.Message.Type;

import com.justep.system.util.CommonUtils;

public class MessengerHelper {
	private boolean enabled;

	private String host;
	private int port;
	private String domain;

	public MessengerHelper(String host, int port, String domain) {
		this.enabled = true;
		this.host = host;
		this.port = port;
		this.domain = domain;
	}

	public MessengerHelper(MessengerConfig conf) {
		this.enabled = conf.isEnabled();
		this.host = conf.getHost();
		this.port = conf.getPort();
		this.domain = conf.getDomain();
	}

	private String formatUserID(String personID, String domain) {
		return String.format("%s@%s/xmsg", personID, domain);
	}

	public void sendMessage(Type type, String subject, String msg, String fromPersonID, String toPersonID) throws XMPPException {
		if (!enabled) {
			return;
		}

		ConnectionConfiguration config = new ConnectionConfiguration(host, port);
		XMPPConnection conn = null;
		conn = new XMPPConnection(config);
		conn.connect();
		try {
			conn.loginAnonymously();
			Message msgX = new Message();
			msgX.setSubject(subject);
			msgX.setType(type);
			msgX.setFrom(formatUserID(fromPersonID, domain));
			msgX.setTo(formatUserID(toPersonID, domain));
			msgX.setThread(CommonUtils.createGUID());
			msgX.setPacketID(CommonUtils.createGUID());
			msgX.setBody(msg);
			DefaultPacketExtension ext = new DefaultPacketExtension("html", "http://jabber.org/protocol/xhtml-im");
			ext.setValue("body", msg);
			msgX.addExtension(ext);
			conn.sendPacket(msgX);
		} finally {
			conn.disconnect();
		}
	}
}
