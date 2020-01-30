package com.app.main.service;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.query.Param;

import com.app.main.dto.Order1;

public interface IorderService {
	
	List<Order1> getAllOrders();
	Order1 getOrdersById(int oId);
	void addOrders(Date booked_date,String booked_time, int order_price,String venue,String artist_emailid, String user_email);
	void deleteOrders(int oId);
	void updateOrders(Order1 order, int oId);
	List<Order1> getOrderbyAemail(String email);
	List<Order1> getOrderbyUemail(String email);
	List<Order1> checkStatus(String email,Date date);
	
}
