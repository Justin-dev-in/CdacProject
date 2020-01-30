package com.app.main.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.main.dao.IorderDao;

import com.app.main.dto.Order1;

@Service
public class OrderServiceImpl implements IorderService{

	
	@Autowired
	private IorderDao odaoref;
	
	@Override
	public List<Order1> getAllOrders() {
		// TODO Auto-generated method stub
		return odaoref.findAll();
	}

	@Override
	public Order1 getOrdersById(int oId) {
		// TODO Auto-generated method stub
		return odaoref.getOne(oId);
	}

	@Override
	public void addOrders(Date booked_date,String booked_time, int order_price,String venue,String artist_emailid, String user_email) {
		// TODO Auto-generated method stub
		odaoref.addOrder(booked_date, booked_time, order_price, venue, artist_emailid, user_email);
	}

	@Override
	public void deleteOrders(int oId) {
		// TODO Auto-generated method stub
		odaoref.deleteById(oId);
	}

	@Override
	public void updateOrders(Order1 order, int oId) {
		// TODO Auto-generated method stub
		odaoref.save(order);
		
	}

	@Override
	public List<Order1> getOrderbyAemail(String email) {
		// TODO Auto-generated method stub
		return odaoref.getOrderbyAemail(email);
	}

	@Override
	public List<Order1> getOrderbyUemail(String email) {
		// TODO Auto-generated method stub
		return odaoref.getOrderbyUemail(email);
	}

	@Override
	public List<Order1> checkStatus(String email, Date date) {
		// TODO Auto-generated method stub
		return odaoref.checkStatus(email, date);
	}

	

}
