package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.fu.social4learning.dto.Conversation;

/**
 * Home object for domain model class Conversation.
 * @see com.fu.social4learning.dao.Conversation
 * @author Hibernate Tools
 */
@Repository
public class ConversationDAO {

	private static final Log log = LogFactory.getLog(ConversationDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Conversation transientInstance) {
		log.debug("persisting Conversation instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Conversation persistentInstance) {
		log.debug("removing Conversation instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Conversation merge(Conversation detachedInstance) {
		log.debug("merging Conversation instance");
		try {
			Conversation result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Conversation findById(Integer id) {
		log.debug("getting Conversation instance with id: " + id);
		try {
			Conversation instance = entityManager.find(Conversation.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
