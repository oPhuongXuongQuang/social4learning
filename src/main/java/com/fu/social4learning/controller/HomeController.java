package com.fu.social4learning.controller;

import java.util.Date;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fu.social4learning.dto.Course;
import com.fu.social4learning.dto.CourseView;
import com.fu.social4learning.dto.StudentListView;
import com.fu.social4learning.dto.User;
import com.fu.social4learning.service.CourseService;
import com.fu.social4learning.service.SearchService;
import com.fu.social4learning.service.UserService;

/**
 * Handles requests for the application home page.
 */
@Controller

public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired
	UserService userService;
	@Autowired
	SearchService searchService;
	@Autowired
	CourseService courseService;
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model, HttpSession session) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		model.addAttribute("user", new User());
		User user = (User) session.getAttribute("USER");
		if (user != null) {
			User userInfo = userService.getUserInfo(user.getEmail());
			model.addAttribute("USER", userInfo);
		}
		return "index";
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String registerGet(Model model) {
		
		model.addAttribute("user", new User());
		
		return "register";
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String registerPost(@ModelAttribute("user") User user, BindingResult bindingResult) {
		
		if (bindingResult.hasErrors()) {
			return "register";
		}
		
		try {
			user.setCreateTime(new Date());
			userService.createUser(user);
		} catch (Exception e) {
			e.printStackTrace();
			return "register";
		}
		
		return "login";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String loginGet(Model model) {
		
		model.addAttribute("user", new User());
		
		return "login";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String loginPost(@ModelAttribute("user") User user, BindingResult bindingResult, Model model, HttpSession session) {
		
		
		if (!userService.checkUserExist(user)){
			model.addAttribute("Error","LoginFail");
			return "login";
		}
		user.setPassword("");
		session.setAttribute("USER", user);
		
		return "redirect:/";
	}
	
	@RequestMapping(value = "/userInfo/{id}", method = RequestMethod.GET)
	public String userInfo(Model model, HttpSession session, @PathVariable Integer id) {
		model.addAttribute("user", new User());
		User user = (User) session.getAttribute("USER");
		User userInfo;
//		int userId = 0;
//		try {
//			id = Integer.parseInt(userId);
//		} catch(Exception e){
//			return "404";
//		}
		if (user != null) {
				userInfo = userService.getUserInfo(user.getEmail());
				model.addAttribute("userSession", userInfo);
				if(userInfo.getId() == id) {
					model.addAttribute("USER", userInfo);
					return "userInfo";
				} else {
					userInfo = userService.getUserInfoById(id);
				}
		} else {
			userInfo = userService.getUserInfoById(id);
			if(userInfo == null){
				return "404";
			}
		}
		userInfo.setEmail("");
		userInfo.setPhone("");
		model.addAttribute("LIMITEDUSER", userInfo);
		
		return "userInfo";
	}
	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(Model model, HttpSession session) {
		User user = (User) session.getAttribute("USER");
		if (user != null) {
			session.invalidate();
		}
		return "redirect:/";
	}
	
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public String search(Model model, HttpServletRequest request, HttpSession session) {
		model.addAttribute("user", new User());
		User user = (User) session.getAttribute("USER");
		if (user != null) {
			User userInfo = userService.getUserInfo(user.getEmail());
			model.addAttribute("USER", userInfo);
		}
		List<CourseView> courses = searchService.searchCourse(request.getParameter("s"));
		if(!courses.isEmpty()){
			model.addAttribute("result", courses);
			model.addAttribute("totalresult", courses.size());
			System.out.println("-----Course Size: " + courses.size());
			return "searchResult";
		}
		
		return "redirect:/";
	}
	
	@RequestMapping(value = "/course-detail/home", method = RequestMethod.GET)
	public String courseDetailHome(Model model, HttpServletRequest request, HttpSession session) {
		model.addAttribute("user", new User());
		User user = (User) session.getAttribute("USER");
		if (user != null) {
			User userInfo = userService.getUserInfo(user.getEmail());
			model.addAttribute("USER", userInfo);
		}
		Integer courseId = Integer.parseInt(request.getParameter("id"));
		CourseView courseView = courseService.findCourseViewById(courseId);
		model.addAttribute("course", courseView);
		List<StudentListView> list = courseService.getCourseSampleMember(courseId);
		model.addAttribute("sampleStudent", list);
		
		model.addAttribute("suggestCourse", courseService.getSuggestCourse(courseView.getTeacherId()));
		
		return "courseDetail-home";
	}
	
}
