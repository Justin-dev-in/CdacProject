package com.app.main.service;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.main.dao.IuserDao;

import com.app.main.dto.User;

@Service
public class UserServerImpl implements IuserService{


@Autowired
private IuserDao udaoref;


@Override
public List<User> getAllUsers() {

return udaoref.findAll();
}

@Override
public User getUserById(String email) {

//return userlist.stream().filter(u ->u.getUid()==uid).findFirst().get();
return udaoref.getOne(email);
}

@Override
public void addUser(User user) {
// TODO Auto-generated method stub
//userlist.add(user);

udaoref.save(user);


}


@Override
public void deleteUser(String email) {


udaoref.deleteById(email);
}


@Override
public void updateUser(User user, String email) {
// TODO Auto-generated method stub

udaoref.save(user);

}

	
	  @Override public String validate(String email, String pwd)
	  { 
		  
         List<User> users=udaoref.login(email, pwd); 
         
        
         if(users.isEmpty()) {
        	 return "login failed"; 
         }
         
         else
        	 return  email;
       
        	 
         
        	 
         }
	





}
