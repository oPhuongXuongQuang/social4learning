package com.fu.social4learning.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fu.social4learning.dao.CourseDAO;
import com.fu.social4learning.dao.CourseParticipantDAO;
import com.fu.social4learning.dao.UserDAO;
import com.fu.social4learning.dto.Course;
import com.fu.social4learning.dto.CourseView;
import com.fu.social4learning.dto.User;

@Service
public class SearchServiceImpl implements SearchService {

	@Autowired
	CourseDAO courseDAO;
	
	@Autowired
	CourseParticipantDAO coursePartDAO;
	
	@Autowired
	UserDAO userDAO;
	
	@Override
	public List<CourseView> searchCourse(String value) {
		// TODO Auto-generated method stub
		
//		List<Course> result = courseDAO.searchCourse(value);
//		List<CourseView> viewResult = new ArrayList<CourseView>();
//		for(Course course:result){
//			Integer teacherId = coursePartDAO.findFirstTeacher(course.getId());
//			User user = null;
//			if(teacherId != null){
//				user = userDAO.findById(teacherId);
//			}
//			CourseView cv = new CourseView(course,new User(teacherId, user.getFirstname() + " " + user.getLastname()));
//			viewResult.add(cv);
//		}
		
		return courseDAO.searchCourseView(value);
	}

}
