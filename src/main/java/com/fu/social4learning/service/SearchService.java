package com.fu.social4learning.service;

import java.util.List;

import com.fu.social4learning.dto.Course;
import com.fu.social4learning.dto.CourseView;

public interface SearchService {
	public List<CourseView> searchCourse(String value);
}
