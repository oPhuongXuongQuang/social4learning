package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fu.social4learning.dto.Lesson;

/**
 * Home object for domain model class Lesson.
 * @see com.fu.social4learning.dao.Lesson
 * @author Hibernate Tools
 */
@Stateless
public class LessonDAO {

	private static final Log log = LogFactory.getLog(LessonDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Lesson transientInstance) {
		log.debug("persisting Lesson instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Lesson persistentInstance) {
		log.debug("removing Lesson instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Lesson merge(Lesson detachedInstance) {
		log.debug("merging Lesson instance");
		try {
			Lesson result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Lesson findById(Integer id) {
		log.debug("getting Lesson instance with id: " + id);
		try {
			Lesson instance = entityManager.find(Lesson.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
