package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.fu.social4learning.dto.StudentChoiceAnswer;
import com.fu.social4learning.dto.StudentChoiceAnswerId;

/**
 * Home object for domain model class StudentChoiceAnswer.
 * @see com.fu.social4learning.dao.StudentChoiceAnswer
 * @author Hibernate Tools
 */
@Repository
public class StudentChoiceAnswerDAO {

	private static final Log log = LogFactory.getLog(StudentChoiceAnswerDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(StudentChoiceAnswer transientInstance) {
		log.debug("persisting StudentChoiceAnswer instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(StudentChoiceAnswer persistentInstance) {
		log.debug("removing StudentChoiceAnswer instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public StudentChoiceAnswer merge(StudentChoiceAnswer detachedInstance) {
		log.debug("merging StudentChoiceAnswer instance");
		try {
			StudentChoiceAnswer result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public StudentChoiceAnswer findById(StudentChoiceAnswerId id) {
		log.debug("getting StudentChoiceAnswer instance with id: " + id);
		try {
			StudentChoiceAnswer instance = entityManager.find(StudentChoiceAnswer.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
