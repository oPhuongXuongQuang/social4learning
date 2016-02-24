package com.fu.social4learning.dto;

import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.Table;

@Entity
@Table(name = "CourseView")
@NamedNativeQueries({
@NamedNativeQuery(name = "searchCourseView", query = "SELECT * FROM CourseView c WHERE c.name LIKE :courseName", resultClass = CourseView.class),	
@NamedNativeQuery(name = "getAllCourseView", query = "SELECT * FROM CourseView c WHERE c.id LIKE :courseId", resultClass = CourseView.class),
@NamedNativeQuery(name = "getSuggestCourse", query = "SELECT * FROM CourseView c WHERE c.teacherId = :userId", resultClass = CourseView.class)

})
public class CourseView extends Course {
	private Integer teacherId;
	private String teacherFirstName;
	private String teacherLastName;
	private String teacherAvatar;
	private BigInteger studentCount;
	
	public CourseView() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CourseView(Course course, Integer teacherId, String teacherFirstName, String teacherLastName) {
		super(course.getCreateTime(), course.getName(), course.getDescription(), course.getCategory());
		this.teacherId = teacherId;
		this.teacherFirstName = teacherFirstName;
		this.teacherLastName = teacherLastName;
		// TODO Auto-generated constructor stub
	}

	@Column(name = "teacherFirstName", length = 100)
	public String getTeacherFirstName() {
		return teacherFirstName;
	}

	public void setTeacherFirstName(String teacherFirstName) {
		this.teacherFirstName = teacherFirstName;
	}

	@Column(name = "teacherLastName", length = 100)
	public String getTeacherLastName() {
		return teacherLastName;
	}

	public void setTeacherLastName(String teacherLastName) {
		this.teacherLastName = teacherLastName;
	}

	@Column(name = "teacherId")
	public Integer getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(Integer teacherId) {
		this.teacherId = teacherId;
	}

	@Column(name = "teacherAvatar", length = 65535)
	public String getTeacherAvatar() {
		return teacherAvatar;
	}

	public void setTeacherAvatar(String teacherAvatar) {
		this.teacherAvatar = teacherAvatar;
	}

	@Column(name = "studentCount")
	public BigInteger getStudentCount() {
		return studentCount;
	}

	public void setStudentCount(BigInteger studentCount) {
		this.studentCount = studentCount;
	}

	

}
