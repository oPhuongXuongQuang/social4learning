package com.fu.social4learning.dto;
// Generated Feb 12, 2016 9:50:55 PM by Hibernate Tools 4.3.1.Final

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Course generated by hbm2java
 */
@Entity
@Table(name = "Course", catalog = "social4learning")
public class Course implements java.io.Serializable {

	private Integer id;
	private Date createTime;
	private Date startTime;
	private Date endTime;
	private String name;
	private String description;
	private int category;

	public Course() {
	}

	public Course(Date createTime, String name, String description, int category) {
		this.createTime = createTime;
		this.name = name;
		this.description = description;
		this.category = category;
	}

	public Course(Date createTime, Date startTime, Date endTime, String name, String description, int category) {
		this.createTime = createTime;
		this.startTime = startTime;
		this.endTime = endTime;
		this.name = name;
		this.description = description;
		this.category = category;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "createTime", nullable = false, length = 10)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "startTime", length = 10)
	public Date getStartTime() {
		return this.startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "endTime", length = 10)
	public Date getEndTime() {
		return this.endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	@Column(name = "name", nullable = false, length = 100)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "description", nullable = false, length = 65535)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "category", nullable = false)
	public int getCategory() {
		return this.category;
	}

	public void setCategory(int category) {
		this.category = category;
	}

}