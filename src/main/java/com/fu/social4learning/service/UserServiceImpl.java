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
	public User checkUserExist(User user) {
		// TODO Auto-generated method stub
		return userDAO.userExist(user);
	}

}
