package com.app.main.service;

import java.util.List;


import com.app.main.dto.User;


public interface IuserService {

List<User> getAllUsers();
User getUserById(String email);
void addUser(User user);
void deleteUser(String email);
void updateUser(User user, String email);
	

	String validate(String email,String pwd); 

}

