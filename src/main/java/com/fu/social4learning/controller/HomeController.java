package com.fu.social4learning.controller;

import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fu.social4learning.dto.User;
import com.fu.social4learning.service.UserService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired
	UserService userService;
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model, HttpSession session) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
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
	
}
