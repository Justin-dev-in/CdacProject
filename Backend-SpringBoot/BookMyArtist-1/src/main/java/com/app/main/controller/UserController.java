package com.app.main.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;


import com.app.main.dto.User;

import com.app.main.service.IuserService;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;



@CrossOrigin("*")
@RestController
public class UserController {

@Autowired
IuserService userseriveRef;



	

@RequestMapping("/usertest")
public String welcomeuser() {

return "you are in the testing phase";

}


@RequestMapping("/userslist")
public List<User> getallUsers(){

return userseriveRef.getAllUsers();
}


@RequestMapping("/userslist/{email}")
public User getUserById(@PathVariable String email) {
return userseriveRef.getUserById(email);
}


@RequestMapping(method = RequestMethod.POST,value = "/userslist")
public void addUser(@RequestBody User user)
{
userseriveRef.addUser(user);
}

@RequestMapping(method = RequestMethod.PUT,value = "/userslist/{email}")
public void updateUser(@RequestBody User user,@PathVariable String email)
{
userseriveRef.updateUser(user,email);
}

@RequestMapping(method = RequestMethod.DELETE,value = "/userslist/{email}")
public void deleteUser(@PathVariable String email)
{
userseriveRef.deleteUser(email);
}
	
	
	/*
	 * @RequestMapping(value="/login/{email}/{pwd}",method = RequestMethod.POST)
	 * public List<User> login(@PathVariable String email,@PathVariable String pwd )
	 * { return userseriveRef.validate(email,pwd);
	 * 
	 * 
	 * }
	 */
@RequestMapping(value="/Ulogin",method = RequestMethod.POST)
public String login(@RequestBody JSONObject user)
{ 
	JSONObject json=(JSONObject)JSONSerializer.toJSON(user);
	String userEmailID=json.getString("userEmail");
	String userPassword=json.getString("userPassword");
  return  userseriveRef.validate(userEmailID,userPassword);

   
}
	 
	 
	 
	 
}

