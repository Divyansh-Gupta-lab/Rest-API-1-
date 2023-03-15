package com.example.RestAPI.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.RestAPI.entities.Car;
import com.example.RestAPI.service.Services;

@RestController
public class MyController {
	
	@Autowired
	private Services serv;
	//intro url
	@GetMapping("/home")
	public String home()
	{
		return "IT works!";
	}
	
	//get list of courses
	@GetMapping("/Car")
	public List<Car> QueryAllCars()
	{
		return serv.QueryAllCars();
	}
	@GetMapping("/Car/{name}")
	public Optional<Car> QueryCar(@PathVariable String name)
	{
		return serv.QueryCar(name);
	}
	@PostMapping("/Car")
	public List<Car> CreateCar(@RequestBody Car c)
	{
		return serv.CreateCar(c);
	}
	@PutMapping("/Car/{name}")
	public List<Car> UpdateCar(@RequestBody Car c, @PathVariable String name)
	{
		return serv.UpdateCar(c,name);
	}
	@DeleteMapping("/Car/{name}")
	public List<Car> DeleteCar(@PathVariable String name)
	{
		return serv.DeleteCar(name);
	}
}
