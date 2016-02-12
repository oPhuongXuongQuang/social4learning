package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fu.social4learning.dto.ChoiceAnswer;

/**
 * Home object for domain model class ChoiceAnswer.
 * @see com.fu.social4learning.dao.ChoiceAnswer
 * @author Hibernate Tools
 */
@Stateless
public class ChoiceAnswerDAO {

	private static final Log log = LogFactory.getLog(ChoiceAnswerDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(ChoiceAnswer transientInstance) {
		log.debug("persisting ChoiceAnswer instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(ChoiceAnswer persistentInstance) {
		log.debug("removing ChoiceAnswer instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public ChoiceAnswer merge(ChoiceAnswer detachedInstance) {
		log.debug("merging ChoiceAnswer instance");
		try {
			ChoiceAnswer result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public ChoiceAnswer findById(Integer id) {
		log.debug("getting ChoiceAnswer instance with id: " + id);
		try {
			ChoiceAnswer instance = entityManager.find(ChoiceAnswer.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
