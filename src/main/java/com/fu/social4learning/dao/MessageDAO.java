package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fu.social4learning.dto.Message;

/**
 * Home object for domain model class Message.
 * @see com.fu.social4learning.dao.Message
 * @author Hibernate Tools
 */
@Stateless
public class MessageDAO {

	private static final Log log = LogFactory.getLog(MessageDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Message transientInstance) {
		log.debug("persisting Message instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Message persistentInstance) {
		log.debug("removing Message instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Message merge(Message detachedInstance) {
		log.debug("merging Message instance");
		try {
			Message result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Message findById(Integer id) {
		log.debug("getting Message instance with id: " + id);
		try {
			Message instance = entityManager.find(Message.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
