package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.fu.social4learning.dto.Topic;

/**
 * Home object for domain model class Topic.
 * @see com.fu.social4learning.dao.Topic
 * @author Hibernate Tools
 */
@Repository
public class TopicDAO {

	private static final Log log = LogFactory.getLog(TopicDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Topic transientInstance) {
		log.debug("persisting Topic instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Topic persistentInstance) {
		log.debug("removing Topic instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Topic merge(Topic detachedInstance) {
		log.debug("merging Topic instance");
		try {
			Topic result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Topic findById(Integer id) {
		log.debug("getting Topic instance with id: " + id);
		try {
			Topic instance = entityManager.find(Topic.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
