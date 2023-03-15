package com.example.RestAPI.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.RestAPI.dao.CarDao;
import com.example.RestAPI.entities.Car;

@Service
public class ServicesImplement implements Services {
	
	@Autowired
	private CarDao cardao;
	//List<Car> list;
	
	public ServicesImplement() {
		/*list = new ArrayList<>();
		list.add(new Car("Toyota","Corolla","White","John"));
		list.add(new Car("Swift","Dzire","Blue","Ryan"));
		list.add(new Car("Nissan","Mitsubishi","White","Kat"));*/
	}
	
	@Override
	public List<Car> QueryAllCars() {
		return cardao.findAll();
	}

	@Override
	public Optional<Car> QueryCar(String carId) {
		/*Car c = null;
		for (Car i : list) {
			if (name.equals(i.getName())){
				return i;
			}
		}
		return c;*/
		return cardao.findById(carId);
	}

	@Override
	public List<Car> CreateCar(Car c) {
		cardao.save(c);
		return cardao.findAll();
	}

	@Override
	public List<Car> UpdateCar(Car c, String carId) {
		/*for (int i =0 ; i<list.size() ; i++) {
			if (name.equals((list.get(i)).getName())){
				list.set(i, c);
				return list;
			}
		}
		return list;*/
		cardao.save(c);
		return cardao.findAll();
	}

	@Override
	public List<Car> DeleteCar(String carId) {
		/*for (int i =0 ; i<list.size() ; i++) {
			if (name.equals((list.get(i)).getName())){
				list.remove(i);
				return list;
			}
		}
		return list;*/
		cardao.deleteById(carId);
		return cardao.findAll();
	}
	
	
}
