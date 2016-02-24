package com.fu.social4learning.service;

import java.util.List;

import com.fu.social4learning.dto.CourseView;
import com.fu.social4learning.dto.StudentListView;

public interface CourseService {
	public CourseView findCourseViewById(Integer id);
	public List<StudentListView> totalMember(Integer id);
	public List<StudentListView> getCourseSampleMember(Integer value);
	public List<CourseView> getSuggestCourse(Integer userId);
}
