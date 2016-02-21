package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.fu.social4learning.dto.Comment;

/**
 * Home object for domain model class Comment.
 * @see com.fu.social4learning.dao.Comment
 * @author Hibernate Tools
 */
@Repository
public class CommentDAO {

	private static final Log log = LogFactory.getLog(CommentDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Comment transientInstance) {
		log.debug("persisting Comment instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Comment persistentInstance) {
		log.debug("removing Comment instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Comment merge(Comment detachedInstance) {
		log.debug("merging Comment instance");
		try {
			Comment result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Comment findById(Integer id) {
		log.debug("getting Comment instance with id: " + id);
		try {
			Comment instance = entityManager.find(Comment.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
