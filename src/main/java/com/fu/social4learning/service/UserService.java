package com.fu.social4learning.service;

import com.fu.social4learning.dto.User;

public interface UserService {
	public void createUser(User user);
	public User checkUserExist(User user);
}
