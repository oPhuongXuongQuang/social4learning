package com.fu.social4learning.dto;
// Generated Feb 12, 2016 9:50:55 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * ConvParticipant generated by hbm2java
 */
@Entity
@Table(name = "ConvParticipant", catalog = "social4learning")
public class ConvParticipant implements java.io.Serializable {

	private ConvParticipantId id;

	public ConvParticipant() {
	}

	public ConvParticipant(ConvParticipantId id) {
		this.id = id;
	}

	@EmbeddedId

	@AttributeOverrides({
			@AttributeOverride(name = "conversationId", column = @Column(name = "conversationId", nullable = false) ),
			@AttributeOverride(name = "userId", column = @Column(name = "userId", nullable = false) ) })
	public ConvParticipantId getId() {
		return this.id;
	}

	public void setId(ConvParticipantId id) {
		this.id = id;
	}

}