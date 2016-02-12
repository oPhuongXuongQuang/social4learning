package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fu.social4learning.dto.WritingQuestion;

/**
 * Home object for domain model class WritingQuestion.
 * @see com.fu.social4learning.dao.WritingQuestion
 * @author Hibernate Tools
 */
@Stateless
public class WritingQuestionDAO {

	private static final Log log = LogFactory.getLog(WritingQuestionDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(WritingQuestion transientInstance) {
		log.debug("persisting WritingQuestion instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(WritingQuestion persistentInstance) {
		log.debug("removing WritingQuestion instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public WritingQuestion merge(WritingQuestion detachedInstance) {
		log.debug("merging WritingQuestion instance");
		try {
			WritingQuestion result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public WritingQuestion findById(Integer id) {
		log.debug("getting WritingQuestion instance with id: " + id);
		try {
			WritingQuestion instance = entityManager.find(WritingQuestion.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
