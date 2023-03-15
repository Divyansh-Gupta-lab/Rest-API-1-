package com.example.RestAPI.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.RestAPI.entities.Car;
@Repository
public interface CarDao extends JpaRepository<Car, String> {

}
