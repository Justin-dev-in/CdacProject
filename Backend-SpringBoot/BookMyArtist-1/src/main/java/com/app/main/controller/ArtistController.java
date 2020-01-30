package com.app.main.controller;

import java.util.Date;
import java.util.List;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.main.dto.AdateAvail;
import com.app.main.dto.Artist;
import com.app.main.service.IartistService;
import com.app.main.service.IdateService;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;
@CrossOrigin("*")
@RestController
public class ArtistController {


@Autowired
IartistService artistserviceRef;

@Autowired
IdateService adateserviceRef;

@RequestMapping("/artiststest")
public String welcomeartist() {

return "you are in the testing phase";

}


@RequestMapping("/artistslist")
public List<Artist> getallArtists(){

return  artistserviceRef.getAllArtists();
}


@RequestMapping("/artistslist/{email}")
public Artist getArtistById(@PathVariable String email) {
return  artistserviceRef.getArtistById(email);
}


@RequestMapping(method = RequestMethod.POST,value = "/artistslist")
public void addArtist(@RequestBody Artist artist)
{
	 artistserviceRef.addArtist(artist);
}

@RequestMapping(method = RequestMethod.PUT,value = "/artistslist/{email}")
public void updateArtist(@RequestBody Artist artist,@PathVariable String email)
{
	artistserviceRef.updateArtist(artist,email);
}

@RequestMapping(method = RequestMethod.DELETE,value = "/artistslist/{email}")
public void deleteArtist(@PathVariable String email)
{
	 artistserviceRef.deleteArtist(email);
}

@RequestMapping(method = RequestMethod.POST,value = "/adatelist/{fromdate}/{todate}/{fees}/{email}")
public void addDate(@PathVariable String fromdate,@PathVariable  String todate, @PathVariable int fees,@PathVariable  String email) throws ParseException
{
	 SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
	  Date date = formatter.parse(todate);
	  Date date2=formatter.parse(fromdate);
	  System.out.println(date2);
	  System.out.println(date);
	  if(date.compareTo(date2)<=0) {
		  System.out.println("Invalid to-date,must be after from-date!!!");
	  }
	  else
	  //System.out.println(date1);
		  {
	//  System.out.println(fees);
	adateserviceRef.addArtistDate(fromdate,todate,fees,email);
}
}



@RequestMapping(value="/Alogin",method = RequestMethod.POST)
public String login(@RequestBody JSONObject artist)
{ 
	JSONObject json=(JSONObject)JSONSerializer.toJSON(artist);
	String artistEmailID=json.getString("artistEmail");
	String artistPassword=json.getString("artistPassword");
  return  artistserviceRef.validate(artistEmailID,artistPassword);

   
}


@RequestMapping(value="/searchArtistsBydate",method=RequestMethod.POST)
public List<AdateAvail> getRelArtists(@RequestBody JSONObject dateobject ) throws ParseException
{
	JSONObject json=(JSONObject)JSONSerializer.toJSON(dateobject);
	String date1=json.getString("date");
	String fees1=json.getString("fees");
    String genre=json.getString("genre");
    String city=json.getString("city");
	int fees=Integer.parseInt(fees1);
	
	
	  SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd");
	  Date date = formatter.parse(date1);
	  System.out.println(date);
	  System.out.println(date1);
	  System.out.println(fees);
  return  artistserviceRef.getRelevantArtist(date, fees,genre,city);
}

@RequestMapping("/artistscategory/{cat}")
public List<Artist> getArtistBycategory(@PathVariable String cat) {

	return artistserviceRef.getArtistBycat(cat);
}
}
