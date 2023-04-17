package com.example.fullstackbackend.repository.commonInfoRepository;


import com.example.fullstackbackend.model.address.Ethnicity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEthnicityRepository extends JpaRepository<Ethnicity,Integer> {
}
