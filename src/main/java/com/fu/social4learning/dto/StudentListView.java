package com.fu.social4learning.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedNativeQuery;
import javax.persistence.Table;

@Entity
@NamedNativeQuery(name = "getStudentList", query = "SELECT * FROM StudentListView c WHERE c.courseId = :courseId", resultClass = StudentListView.class)
@Table(name = "StudentListView")
public class StudentListView implements Serializable{
	private Integer courseId;
	private Integer userId;
	private String firstname;
	private String lastname;
	private String avatar;
	
	public StudentListView(){
		
	}
	
	public StudentListView(Integer courseId, Integer studentId, String firstname, String lastname, String avatar) {
		super();
		this.courseId = courseId;
		this.userId = studentId;
		this.firstname = firstname;
		this.lastname = lastname;
		this.avatar = avatar;
	}
	
	@Column(name = "courseId")
	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	@Id
	@Column(name = "userId")
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer studentId) {
		this.userId = studentId;
	}

	@Column(name = "firstname")
	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	@Column(name = "lastname")
	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	@Column(name = "avatar")
	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	
	
}
