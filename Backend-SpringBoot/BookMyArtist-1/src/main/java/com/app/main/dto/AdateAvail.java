package com.app.main.dto;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class AdateAvail {

	
	@Id
	@GeneratedValue
	private int id;
	
	private Date fromDate;
	private Date toDate;
	
	private float artistfees;
	 @OneToOne 
	  private Artist artist;
	 
	public AdateAvail() {
		super();
	}
	public AdateAvail(int id, Date fromDate, Date toDate, float artistfees, String artistEmail) {
		super();
		this.id = id;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.artistfees = artistfees;
		this.artist = new Artist(artistEmail,"",(Long)null,"","",(Float)null,"","","","","","","");
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getFromDate() {
		return fromDate;
	}
	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}
	public Date getToDate() {
		return toDate;
	}
	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}
	public float getArtistfees() {
		return artistfees;
	}
	public void setArtistfees(float artistfees) {
		this.artistfees = artistfees;
	}
	public Artist getArtist() {
		return artist;
	}
	public void setArtist(Artist artist) {
		this.artist = artist;
	}
	@Override
	public String toString() {
		return "AdateAvail [id=" + id + ", fromDate=" + fromDate + ", toDate=" + toDate + ", artistfees=" + artistfees
				+ ", artist=" + artist + "]";
	}
	
	 
}
