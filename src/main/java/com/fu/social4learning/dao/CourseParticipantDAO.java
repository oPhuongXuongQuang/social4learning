package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.fu.social4learning.dto.ConvParticipant;
import com.fu.social4learning.dto.CourseParticipant;
import com.fu.social4learning.dto.CourseParticipantId;

/**
 * Home object for domain model class CourseParticipant.
 * @see com.fu.social4learning.dao.CourseParticipant
 * @author Hibernate Tools
 */
@Repository
public class CourseParticipantDAO {

	private static final Log log = LogFactory.getLog(CourseParticipantDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(CourseParticipant transientInstance) {
		log.debug("persisting CourseParticipant instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(CourseParticipant persistentInstance) {
		log.debug("removing CourseParticipant instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public CourseParticipant merge(CourseParticipant detachedInstance) {
		log.debug("merging CourseParticipant instance");
		try {
			CourseParticipant result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public CourseParticipant findById(CourseParticipantId id) {
		log.debug("getting CourseParticipant instance with id: " + id);
		try {
			CourseParticipant instance = entityManager.find(CourseParticipant.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	
	public Integer findFirstTeacher(int courseId) {
		log.debug("getting Course instance with id: " + courseId);
		try {
			TypedQuery<CourseParticipant> query = entityManager.createNamedQuery("findTeacher",CourseParticipant.class).setMaxResults(1);
			query.setParameter("courseId", courseId);
			CourseParticipant result = query.getSingleResult();
			if(result != null){
				return result.getId().getUserId();
			}
			
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
		return null;
	}
}
