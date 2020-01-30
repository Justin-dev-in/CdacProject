package com.app.main.dto;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
public class Order1 implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private int orderId;

	private String orderDate;
	private long orderPrice;
	private String bookedDate;
	private String bookedTime;
	private String venue;

	
	  @ManyToOne  
	  private User user;
	 

	
	  @ManyToOne 
	  private Artist artist;
	  
	 

	public Order1(int orderId, String orderDate, long orderPrice, String bookedDate, String bookedTime, String venue,
			String userEmail, String artistEmail) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
		this.orderPrice = orderPrice;
		this.bookedDate = bookedDate;
		this.bookedTime = bookedTime;
		this.venue = venue;
		this.user = new User(userEmail,"",(Long)null,"","","","");
		this.artist = new Artist(artistEmail,"",(Long)null,"","",(Float)null,"","","","","","","");
	}

	public Order1() {
		super();
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public long getOrderPrice() {
		return orderPrice;
	}

	public void setOrderPrice(long orderPrice) {
		this.orderPrice = orderPrice;
	}

	public String getBookedDate() {
		return bookedDate;
	}

	public void setBookedDate(String bookedDate) {
		this.bookedDate = bookedDate;
	}

	public String getBookedTime() {
		return bookedTime;
	}

	public void setBookedTime(String bookedTime) {
		this.bookedTime = bookedTime;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Artist getArtist() {
		return artist;
	}

	public void setArtist(Artist artist) {
		this.artist = artist;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Order1 [orderId=" + orderId + ", orderDate=" + orderDate + ", orderPrice=" + orderPrice
				+ ", bookedDate=" + bookedDate + ", bookedTime=" + bookedTime + ", venue=" + venue + ", user=" + user
				+ ", artist=" + artist + "]";
	}

	
	

}
