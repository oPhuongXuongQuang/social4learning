package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fu.social4learning.dto.Friend;
import com.fu.social4learning.dto.FriendId;

/**
 * Home object for domain model class Friend.
 * @see com.fu.social4learning.dao.Friend
 * @author Hibernate Tools
 */
@Stateless
public class FriendDAO {

	private static final Log log = LogFactory.getLog(FriendDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Friend transientInstance) {
		log.debug("persisting Friend instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Friend persistentInstance) {
		log.debug("removing Friend instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Friend merge(Friend detachedInstance) {
		log.debug("merging Friend instance");
		try {
			Friend result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Friend findById(FriendId id) {
		log.debug("getting Friend instance with id: " + id);
		try {
			Friend instance = entityManager.find(Friend.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
