package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fu.social4learning.dto.ChoiceQuestion;

/**
 * Home object for domain model class ChoiceQuestion.
 * @see com.fu.social4learning.dao.ChoiceQuestion
 * @author Hibernate Tools
 */
@Stateless
public class ChoiceQuestionDAO {

	private static final Log log = LogFactory.getLog(ChoiceQuestionDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(ChoiceQuestion transientInstance) {
		log.debug("persisting ChoiceQuestion instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(ChoiceQuestion persistentInstance) {
		log.debug("removing ChoiceQuestion instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public ChoiceQuestion merge(ChoiceQuestion detachedInstance) {
		log.debug("merging ChoiceQuestion instance");
		try {
			ChoiceQuestion result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public ChoiceQuestion findById(Integer id) {
		log.debug("getting ChoiceQuestion instance with id: " + id);
		try {
			ChoiceQuestion instance = entityManager.find(ChoiceQuestion.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
