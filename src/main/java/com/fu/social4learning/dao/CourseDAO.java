package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fu.social4learning.dto.Course;
import com.fu.social4learning.dto.CourseView;
import com.fu.social4learning.dto.StudentListView;

/**
 * Home object for domain model class Course.
 * @see com.fu.social4learning.dao.Course
 * @author Hibernate Tools
 */
@Repository
public class CourseDAO {

	private static final Log log = LogFactory.getLog(CourseDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	@Transactional
	public void persist(Course transientInstance) {
		log.debug("persisting Course instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	@Transactional
	public void remove(Course persistentInstance) {
		log.debug("removing Course instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	@Transactional
	public Course merge(Course detachedInstance) {
		log.debug("merging Course instance");
		try {
			Course result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	@Transactional
	public Course findById(Integer id) {
		log.debug("getting Course instance with id: " + id);
		try {
			Course instance = entityManager.find(Course.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	
	@Transactional
	public List<Course> searchCourse(String value) {
		log.debug("getting Course instance with id: " + value);
		try {
			TypedQuery<Course> query = entityManager.createNamedQuery("searchCourse",Course.class);
			query.setParameter("courseName", "%" + value + "%");
			List<Course> result = query.getResultList();
			if(!result.isEmpty()){
				return result;
			}
			
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
		return null;
	}
	
	@Transactional
	public List<CourseView> searchCourseView(String value) {
		log.debug("getting Course instance with id: " + value);
		try {
			TypedQuery<CourseView> query = entityManager.createNamedQuery("searchCourseView",CourseView.class);
			query.setParameter("courseName", "%" + value + "%");
			List<CourseView> result = query.getResultList();
			if(!result.isEmpty()){
				return result;
			}
			
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
		return null;
	}
	
	@Transactional
	public CourseView findCourseViewById(Integer id) {
		log.debug("getting Course instance with id: " + id);
		try {
			TypedQuery<CourseView> query = entityManager.createNamedQuery("getAllCourseView",CourseView.class);
			query.setParameter("courseId",id );
			CourseView instance = query.getSingleResult();
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	
	
	@Transactional
	public List<StudentListView> getCourseSampleMember(Integer value) {
		log.debug("getting Course instance with id: " + value);
		try {
			TypedQuery<StudentListView> query = entityManager.createNamedQuery("getStudentList",StudentListView.class).setMaxResults(5);
			query.setParameter("courseId", value);
			List<StudentListView> result = query.getResultList();
			if(!result.isEmpty()){
				return result;
			}
			
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
		return null;
	}
	
	@Transactional
	public List<StudentListView> getStudentList(Integer value) {
		log.debug("getting Course instance with id: " + value);
		try {
			TypedQuery<StudentListView> query = entityManager.createNamedQuery("getStudentList",StudentListView.class);
			query.setParameter("courseId", value);
			List<StudentListView> result = query.getResultList();
			if(!result.isEmpty()){
				return result;
			}
			
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
		return null;
	}
	
	@Transactional
	public List<CourseView> getSuggestCourse(Integer userId) {
		log.debug("getting Course instance with id: " + userId);
		try {
			TypedQuery<CourseView> query = entityManager.createNamedQuery("getSuggestCourse",CourseView.class).setMaxResults(5);
			query.setParameter("userId",userId);
			List<CourseView> result = query.getResultList();
			if(!result.isEmpty()){
				return result;
			}
			
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
		return null;
	}
}
