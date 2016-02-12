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
import javax.persistence.UniqueConstraint;

/**
 * User generated by hbm2java
 */
@Entity
@Table(name = "User", catalog = "social4learning", uniqueConstraints = @UniqueConstraint(columnNames = "email") )
public class User implements java.io.Serializable {

	private Integer id;
	private String email;
	private String firstname;
	private String lastname;
	private String address;
	private String phone;
	private Date birth;
	private Integer gender;
	private Date createTime;

	public User() {
	}

	public User(String email, String firstname, String lastname, Date createTime) {
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
		this.createTime = createTime;
	}

	public User(String email, String firstname, String lastname, String address, String phone, Date birth,
			Integer gender, Date createTime) {
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.phone = phone;
		this.birth = birth;
		this.gender = gender;
		this.createTime = createTime;
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

	@Column(name = "email", unique = true, nullable = false, length = 50)
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "firstname", nullable = false, length = 100)
	public String getFirstname() {
		return this.firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	@Column(name = "lastname", nullable = false, length = 100)
	public String getLastname() {
		return this.lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	@Column(name = "address", length = 65535)
	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Column(name = "phone", length = 20)
	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "birth", length = 10)
	public Date getBirth() {
		return this.birth;
	}

	public void setBirth(Date birth) {
		this.birth = birth;
	}

	@Column(name = "gender")
	public Integer getGender() {
		return this.gender;
	}

	public void setGender(Integer gender) {
		this.gender = gender;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "createTime", nullable = false, length = 10)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

}
