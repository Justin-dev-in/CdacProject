package com.app.main.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.main.dao.IartistDao;
import com.app.main.dto.AdateAvail;
import com.app.main.dto.Artist;
@Service
public class ArtistServiceImpl implements IartistService{

	@Autowired
	private IartistDao adaoref;
	
	@Override
	public List<Artist> getAllArtists() {
		// TODO Auto-generated method stub
		return adaoref.findAll();
	}

	@Override
	public Artist getArtistById(String email) {
		// TODO Auto-generated method stub
		return adaoref.getOne(email);
	}

	@Override
	public void addArtist(Artist artist) {
		// TODO Auto-generated method stub
		adaoref.save(artist);
	}

	@Override
	public void deleteArtist(String email) {
		// TODO Auto-generated method stub
		adaoref.deleteById(email);
		
	}

	@Override
	public void updateArtist(Artist artist, String email) {
		adaoref.save(artist);
	}
	
	 @Override public String validate(String email, String pwd)
	  { 
		  
        List<Artist> artists=adaoref.login(email, pwd); 
        System.out.println(artists);
        
        if(artists.isEmpty()) {
       	 return "login failed"; 
        }
        
        else
       	 return  email;
      
       	 
        
       	 
        }

	@Override
	public List<AdateAvail> getRelevantArtist(Date date, int fees,String genre,String city) {
		// TODO Auto-generated method stub
		
		List<AdateAvail> relartists=adaoref.checkSearch(date, fees,genre,city);
	 
		System.out.println(relartists);
		
		if(relartists.isEmpty()) {
			return relartists;
		}
		
		else
			return relartists;
	}

	@Override
	public List<Artist> getArtistBycat(String cat) {
		
		List<Artist> artistcat=adaoref.artistByCat(cat);
		return artistcat;
	}

	

	

}


