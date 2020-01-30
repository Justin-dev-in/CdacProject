package com.app.main.dto;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Artist implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String artistEmailID;

	private String artistName;
	private long artistPhoneNumber;
	private String artistGenre;
//	private String artistAvailDays;
//	private float artistfees;
	private String artistCertification;
	private String artistExperience;
	private String artistAddress;
	private String artistPassword;
	private String artistDob;
	private String prefWorkHours;
	private String artistPicture;
	
	
	
	public Artist(String artistEmailID, String artistName, long artistPhoneNumber, String artistGenre,
			String artistAvailDays, float artistfees, String artistCertification, String artistExperience,
			String artistAddress, String artistPassword, String artistDob, String prefWorkHours, String artistPicture) {
		super();
		this.artistEmailID = artistEmailID;
		this.artistName = artistName;
		this.artistPhoneNumber = artistPhoneNumber;
		this.artistGenre = artistGenre;
			this.artistCertification = artistCertification;
		this.artistExperience = artistExperience;
		this.artistAddress = artistAddress;
		this.artistPassword = artistPassword;
		this.artistDob = artistDob;
		this.prefWorkHours = prefWorkHours;
		this.artistPicture = artistPicture;
	}

	public Artist() {
		super();
		
	}
	
	/*
	 * @OneToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL,mappedBy
	 * ="artistEmail") private Order1 order;
	 */
	 
	
	
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getArtistEmailID() {
		return artistEmailID;
	}
	public void setArtistEmailID(String artistEmailID) {
		this.artistEmailID = artistEmailID;
	}
	public long getArtistPhoneNumber() {
		return artistPhoneNumber;
	}
	public void setArtistPhoneNumber(long artistPhoneNumber) {
		this.artistPhoneNumber = artistPhoneNumber;
	}
	public String getArtistGenre() {
		return artistGenre;
	}
	public void setArtistGenre(String artistGenre) {
		this.artistGenre = artistGenre;
	}
	
	
	public String getArtistCertification() {
		return artistCertification;
	}
	public void setArtistCertification(String artistCertification) {
		this.artistCertification = artistCertification;
	}
	public String getArtistExperience() {
		return artistExperience;
	}
	public void setArtistExperience(String artistExperience) {
		this.artistExperience = artistExperience;
	}
	public String getArtistAddress() {
		return artistAddress;
	}
	public void setArtistAddress(String artistAddress) {
		this.artistAddress = artistAddress;
	}
	public String getArtistDob() {
		return artistDob;
	}
	public void setArtistDob(String artistDob) {
		this.artistDob = artistDob;
	}
	public String getPrefWorkHours() {
		return prefWorkHours;
	}
	public void setPrefWorkHours(String prefWorkHours) {
		this.prefWorkHours = prefWorkHours;
	}
	
	public String getArtistPassword() {
		return artistPassword;
	}
	public void setArtistPassword(String artistPassword) {
		this.artistPassword = artistPassword;
	}
	
	public String getArtistName() {
		return artistName;
	}
	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}
	public String getArtistPicture() {
		return artistPicture;
	}
	public void setArtistPicture(String artistPicture) {
		this.artistPicture = artistPicture;
	}

	@Override
	public String toString() {
		return "Artist [artistEmailID=" + artistEmailID + ", artistName=" + artistName + ", artistPhoneNumber="
				+ artistPhoneNumber + ", artistGenre=" + artistGenre + 
				 " artistCertification=" + artistCertification + ", artistExperience="
				+ artistExperience + ", artistAddress=" + artistAddress + ", artistPassword=" + artistPassword
				+ ", artistDob=" + artistDob + ", prefWorkHours=" + prefWorkHours + ", artistPicture=" + artistPicture
				+ "]";
	}

	}

	
	
	
	
	


