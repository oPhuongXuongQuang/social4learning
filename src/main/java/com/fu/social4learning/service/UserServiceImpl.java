package com.fu.social4learning.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fu.social4learning.dao.UserDAO;
import com.fu.social4learning.dto.User;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserDAO userDAO;
	
	@Override
	public void createUser(User user) {
		// TODO Auto-generated method stub
		userDAO.merge(user);
	}

	@Override
	public boolean checkUserExist(User user) {
		// TODO Auto-generated method stub
		return userDAO.userExist(user);
	}
	
	@Override
	public User getUserInfo(String email) {
		// TODO Auto-generated method stub
		User user = userDAO.getUserInfo(email);
		user.setPassword("");
		return user;
	}

	@Override
	public User getUserInfoById(Integer id) {
		// TODO Auto-generated method stub
		return userDAO.findById(id);
	}

}
