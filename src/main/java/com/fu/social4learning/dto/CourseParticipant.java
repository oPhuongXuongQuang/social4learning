package com.fu.social4learning.dto;
// Generated Feb 12, 2016 9:50:55 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * CourseParticipant generated by hbm2java
 */
@Entity
@Table(name = "CourseParticipant", catalog = "social4learning")
public class CourseParticipant implements java.io.Serializable {

	private CourseParticipantId id;
	private boolean isTeacher;

	public CourseParticipant() {
	}

	public CourseParticipant(CourseParticipantId id, boolean isTeacher) {
		this.id = id;
		this.isTeacher = isTeacher;
	}

	@EmbeddedId

	@AttributeOverrides({ @AttributeOverride(name = "userId", column = @Column(name = "userId", nullable = false) ),
			@AttributeOverride(name = "courseId", column = @Column(name = "courseId", nullable = false) ) })
	public CourseParticipantId getId() {
		return this.id;
	}

	public void setId(CourseParticipantId id) {
		this.id = id;
	}

	@Column(name = "isTeacher", nullable = false)
	public boolean isIsTeacher() {
		return this.isTeacher;
	}

	public void setIsTeacher(boolean isTeacher) {
		this.isTeacher = isTeacher;
	}

}