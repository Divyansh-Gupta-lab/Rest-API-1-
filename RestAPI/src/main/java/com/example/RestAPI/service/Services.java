package com.example.RestAPI.service;

import java.util.List;
import java.util.Optional;

import com.example.RestAPI.entities.Car;

public interface Services {
	
	public List<Car> QueryAllCars();

	public Optional<Car> QueryCar(String name);

	public List<Car> CreateCar(Car c);

	public List<Car> UpdateCar(Car c, String name);

	public List<Car> DeleteCar(String name);
	
}