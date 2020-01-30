package com.app.main.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.main.dto.Order1;

import com.app.main.service.IorderService;

@CrossOrigin("*")
@RestController
public class OrderController {
	
	
	@Autowired
	IorderService orderserviceRef;



		

	@RequestMapping("/ordertest")
	public String welcomeorder() {

	return "you are in the testing phase";

	}


	@RequestMapping("/orderslist")
	public List<Order1> getallOrders(){

	return orderserviceRef.getAllOrders();
	}


	@RequestMapping("/orderslist/{oId}")
	public Order1 getordersById(@PathVariable int oId) {
	return orderserviceRef.getOrdersById(oId);
	}


	@RequestMapping(method = RequestMethod.GET,value = "/orderslist/{booked_date}/{booked_time}/{order_price}/{venue}/{artist_emailid}/{user_email}")
	public int addorder(@PathVariable String booked_date,@PathVariable  String booked_time, @PathVariable int order_price,
			@PathVariable  String venue,@PathVariable  String artist_emailid,@PathVariable  String user_email) throws ParseException
	{

		  SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd");
		  Date date = formatter.parse(booked_date);
		  System.out.println(artist_emailid);
		  System.out.println(date);
		  List<Order1> list=orderserviceRef.checkStatus( artist_emailid, date);
		  //String s1="";
		  System.out.println(list);
		  if(list.isEmpty()) {
			  orderserviceRef.addOrders(date,booked_time, order_price,venue, artist_emailid,  user_email);
			
			 
			  return 0;
		  }
		  else {
		
			 // s1="Sorry artist not available";
			  return  -1;
		  }
	}

	@RequestMapping(method = RequestMethod.PUT,value = "/orderslist/{oId}")
	public void updateUser(@RequestBody Order1 order,@PathVariable int oId)
	{
		orderserviceRef.updateOrders(order, oId);
	}

	@RequestMapping(method = RequestMethod.DELETE,value = "/orderslist/{oId}")
	public void deleteorder(@PathVariable int oId)
	{
		orderserviceRef.deleteOrders(oId);
	}
	
	@RequestMapping("/orderslistbyaemail/{email}")
	public List<Order1> getOrderByartistEmail(@PathVariable String email) {
		return orderserviceRef.getOrderbyAemail(email);
	}
	@RequestMapping("/Userorderslistbyuemail/{email}")
	public List<Order1> getOrderByUserEmail(@PathVariable String email) {
		return orderserviceRef.getOrderbyUemail(email);
	}
		

}
