package com.app.main.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.app.main.dto.User;

@Repository("userdao")

public interface IuserDao extends JpaRepository<User, String>{

	@Query("select u from User u where userEmail=?1 and userPassword =?2")
	List<User> login(String email, String pwd);
	 
	 
	   
}

