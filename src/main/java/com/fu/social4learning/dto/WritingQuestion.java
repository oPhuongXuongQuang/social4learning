package com.fu.social4learning.dto;
// Generated Feb 12, 2016 9:50:55 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * WritingQuestion generated by hbm2java
 */
@Entity
@Table(name = "WritingQuestion", catalog = "social4learning")
public class WritingQuestion implements java.io.Serializable {

	private Integer id;
	private int testId;
	private String content;
	private int score;

	public WritingQuestion() {
	}

	public WritingQuestion(int testId, String content, int score) {
		this.testId = testId;
		this.content = content;
		this.score = score;
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

	@Column(name = "testId", nullable = false)
	public int getTestId() {
		return this.testId;
	}

	public void setTestId(int testId) {
		this.testId = testId;
	}

	@Column(name = "content", nullable = false, length = 65535)
	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Column(name = "score", nullable = false)
	public int getScore() {
		return this.score;
	}

	public void setScore(int score) {
		this.score = score;
	}

}
