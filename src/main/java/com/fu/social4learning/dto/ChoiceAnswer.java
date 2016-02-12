package com.fu.social4learning.dto;
// Generated Feb 12, 2016 9:50:55 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * ChoiceAnswer generated by hbm2java
 */
@Entity
@Table(name = "ChoiceAnswer", catalog = "social4learning")
public class ChoiceAnswer implements java.io.Serializable {

	private Integer id;
	private int questionId;
	private String content;
	private boolean isCorrect;

	public ChoiceAnswer() {
	}

	public ChoiceAnswer(int questionId, String content, boolean isCorrect) {
		this.questionId = questionId;
		this.content = content;
		this.isCorrect = isCorrect;
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

	@Column(name = "questionId", nullable = false)
	public int getQuestionId() {
		return this.questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	@Column(name = "content", nullable = false, length = 65535)
	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Column(name = "isCorrect", nullable = false)
	public boolean isIsCorrect() {
		return this.isCorrect;
	}

	public void setIsCorrect(boolean isCorrect) {
		this.isCorrect = isCorrect;
	}

}
