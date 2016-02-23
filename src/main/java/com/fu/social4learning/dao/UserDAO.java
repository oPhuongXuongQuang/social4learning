package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fu.social4learning.dto.User;

/**
 * Home object for domain model class User.
 * @see com.fu.social4learning.dao.User
 * @author Hibernate Tools
 */
@Repository
public class UserDAO {

	private static final Log log = LogFactory.getLog(UserDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	@Transactional
	public void persist(User transientInstance) {
		log.debug("persisting User instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	@Transactional
	public void remove(User persistentInstance) {
		log.debug("removing User instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	@Transactional
	public User merge(User detachedInstance) {
		log.debug("merging User instance");
		try {
			User result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	@Transactional
	public User findById(Integer id) {
		log.debug("getting User instance with id: " + id);
		try {
			User instance = entityManager.find(User.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	
	@Transactional
	public boolean userExist(User user) {
		try {
			Query query = entityManager.createNamedQuery("User.login", User.class);
			query.setParameter("email", user.getEmail());
			query.setParameter("password", user.getPassword());
			List<User> result = query.getResultList();
			if (!result.isEmpty()){
				return true;
			}
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
		
		return false;
	}
	
	@Transactional
	public User getUserInfo(String email) {
		try {
			Query query = entityManager.createNamedQuery("User.findByEmail");
			query.setParameter("email", email);
			User result = (User) query.getSingleResult();
			if (result != null){
				return result;
			}
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
		
		return null;
	}
}
