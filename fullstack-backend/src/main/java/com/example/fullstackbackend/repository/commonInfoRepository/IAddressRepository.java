package com.example.fullstackbackend.repository.commonInfoRepository;

import com.example.fullstackbackend.model.address.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAddressRepository extends JpaRepository<City, Integer> {
}
