package com.app.main.service;

import java.util.Date;
import java.util.List;

import com.app.main.dto.AdateAvail;
import com.app.main.dto.Artist;



public interface IartistService {
	List<Artist> getAllArtists();
	Artist getArtistById(String email);
	void addArtist(Artist artist);
	void deleteArtist(String email);
	void updateArtist(Artist artist, String email);
	String validate(String email,String pwd);
	List<AdateAvail> getRelevantArtist(Date date, int fees,String genre,String city);
	List<Artist> getArtistBycat(String cat);
	
}
