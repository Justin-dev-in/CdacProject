package com.app.main.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.main.dto.AdateAvail;
import com.app.main.dto.Artist;



	

@Repository("adatedao")
public interface IadateDao extends JpaRepository<AdateAvail, String>{


	@Modifying
    @Query(value = "insert into adate_avail (from_date,to_Date,artistfees,artist_artist_emailid) VALUES (:fromdate,:todate,:fees,:email)", nativeQuery = true)
    @Transactional
    void addArtistDate(@Param("fromdate") String fromdate, @Param("todate") String todate,@Param("fees") int fees,@Param("email") String email);
	
}
