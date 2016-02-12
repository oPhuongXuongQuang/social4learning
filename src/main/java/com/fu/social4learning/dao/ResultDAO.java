package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fu.social4learning.dto.Result;
import com.fu.social4learning.dto.ResultId;

/**
 * Home object for domain model class Result.
 * @see com.fu.social4learning.dao.Result
 * @author Hibernate Tools
 */
@Stateless
public class ResultDAO {

	private static final Log log = LogFactory.getLog(ResultDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Result transientInstance) {
		log.debug("persisting Result instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Result persistentInstance) {
		log.debug("removing Result instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Result merge(Result detachedInstance) {
		log.debug("merging Result instance");
		try {
			Result result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Result findById(ResultId id) {
		log.debug("getting Result instance with id: " + id);
		try {
			Result instance = entityManager.find(Result.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
