package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fu.social4learning.dto.StudentWriteAnswer;
import com.fu.social4learning.dto.StudentWriteAnswerId;

/**
 * Home object for domain model class StudentWriteAnswer.
 * @see com.fu.social4learning.dao.StudentWriteAnswer
 * @author Hibernate Tools
 */
@Stateless
public class StudentWriteAnswerDAO {

	private static final Log log = LogFactory.getLog(StudentWriteAnswerDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(StudentWriteAnswer transientInstance) {
		log.debug("persisting StudentWriteAnswer instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(StudentWriteAnswer persistentInstance) {
		log.debug("removing StudentWriteAnswer instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public StudentWriteAnswer merge(StudentWriteAnswer detachedInstance) {
		log.debug("merging StudentWriteAnswer instance");
		try {
			StudentWriteAnswer result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public StudentWriteAnswer findById(StudentWriteAnswerId id) {
		log.debug("getting StudentWriteAnswer instance with id: " + id);
		try {
			StudentWriteAnswer instance = entityManager.find(StudentWriteAnswer.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
