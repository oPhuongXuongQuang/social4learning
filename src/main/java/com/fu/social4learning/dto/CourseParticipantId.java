package com.fu.social4learning.dto;
// Generated Feb 12, 2016 9:50:55 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * CourseParticipantId generated by hbm2java
 */
@Embeddable
public class CourseParticipantId implements java.io.Serializable {

	private int userId;
	private int courseId;

	public CourseParticipantId() {
	}

	public CourseParticipantId(int userId, int courseId) {
		this.userId = userId;
		this.courseId = courseId;
	}

	@Column(name = "userId", nullable = false)
	public int getUserId() {
		return this.userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Column(name = "courseId", nullable = false)
	public int getCourseId() {
		return this.courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof CourseParticipantId))
			return false;
		CourseParticipantId castOther = (CourseParticipantId) other;

		return (this.getUserId() == castOther.getUserId()) && (this.getCourseId() == castOther.getCourseId());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getUserId();
		result = 37 * result + this.getCourseId();
		return result;
	}

}
