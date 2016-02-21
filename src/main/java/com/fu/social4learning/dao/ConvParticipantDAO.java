package com.fu.social4learning.dao;
// Generated Feb 12, 2016 9:50:33 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.fu.social4learning.dto.ConvParticipant;
import com.fu.social4learning.dto.ConvParticipantId;

/**
 * Home object for domain model class ConvParticipant.
 * @see com.fu.social4learning.dao.ConvParticipant
 * @author Hibernate Tools
 */
@Repository
public class ConvParticipantDAO {

	private static final Log log = LogFactory.getLog(ConvParticipantDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(ConvParticipant transientInstance) {
		log.debug("persisting ConvParticipant instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(ConvParticipant persistentInstance) {
		log.debug("removing ConvParticipant instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public ConvParticipant merge(ConvParticipant detachedInstance) {
		log.debug("merging ConvParticipant instance");
		try {
			ConvParticipant result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public ConvParticipant findById(ConvParticipantId id) {
		log.debug("getting ConvParticipant instance with id: " + id);
		try {
			ConvParticipant instance = entityManager.find(ConvParticipant.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
