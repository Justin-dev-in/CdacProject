package com.app.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.main.dao.IadateDao;

@Service
public class ADateServiceImpl implements IdateService{


	@Autowired
	private IadateDao addaoref;

	@Override
	public void addArtistDate(String fromdate, String todate, int fees, String email) {
		// TODO Auto-generated method stub
		addaoref.addArtistDate(fromdate, todate, fees, email);
	}
	
	
	

}
