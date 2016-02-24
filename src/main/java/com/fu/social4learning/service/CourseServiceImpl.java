package com.fu.social4learning.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fu.social4learning.dao.CourseDAO;
import com.fu.social4learning.dto.CourseView;
import com.fu.social4learning.dto.StudentListView;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	CourseDAO courseDAO;
	
	@Override
	public CourseView findCourseViewById(Integer id) {
		// TODO Auto-generated method stub
		return courseDAO.findCourseViewById(id);
	}

	@Override
	public List<StudentListView> totalMember(Integer id) {
		// TODO Auto-generated method stub
		return courseDAO.getStudentList(id);
	}

	@Override
	public List<StudentListView> getCourseSampleMember(Integer value) {
		// TODO Auto-generated method stub
		return courseDAO.getCourseSampleMember(value);
	}

	@Override
	public List<CourseView> getSuggestCourse(Integer userId) {
		// TODO Auto-generated method stub
		return courseDAO.getSuggestCourse(userId);
	}

}
