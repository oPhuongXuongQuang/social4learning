package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.fu.social4learning.dto.Test;

/**
 * Home object for domain model class Test.
 * @see com.fu.social4learning.dao.Test
 * @author Hibernate Tools
 */
@Repository
public class TestDAO {

	private static final Log log = LogFactory.getLog(TestDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Test transientInstance) {
		log.debug("persisting Test instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Test persistentInstance) {
		log.debug("removing Test instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Test merge(Test detachedInstance) {
		log.debug("merging Test instance");
		try {
			Test result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Test findById(Integer id) {
		log.debug("getting Test instance with id: " + id);
		try {
			Test instance = entityManager.find(Test.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
