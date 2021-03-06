package com.fu.social4learning.dto;
// Generated Feb 12, 2016 9:50:55 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * StudentWriteAnswerId generated by hbm2java
 */
@Embeddable
public class StudentWriteAnswerId implements java.io.Serializable {

	private int studentId;
	private int testId;
	private int questionId;

	public StudentWriteAnswerId() {
	}

	public StudentWriteAnswerId(int studentId, int testId, int questionId) {
		this.studentId = studentId;
		this.testId = testId;
		this.questionId = questionId;
	}

	@Column(name = "studentId", nullable = false)
	public int getStudentId() {
		return this.studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	@Column(name = "testId", nullable = false)
	public int getTestId() {
		return this.testId;
	}

	public void setTestId(int testId) {
		this.testId = testId;
	}

	@Column(name = "questionId", nullable = false)
	public int getQuestionId() {
		return this.questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof StudentWriteAnswerId))
			return false;
		StudentWriteAnswerId castOther = (StudentWriteAnswerId) other;

		return (this.getStudentId() == castOther.getStudentId()) && (this.getTestId() == castOther.getTestId())
				&& (this.getQuestionId() == castOther.getQuestionId());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getStudentId();
		result = 37 * result + this.getTestId();
		result = 37 * result + this.getQuestionId();
		return result;
	}

}
