package com.example.RestAPI.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Car {
	@Id
	private String CarId;
	public String getCarId() {
		return CarId;
	}

	public void setCarId(String carId) {
		CarId = carId;
	}

	private String Name;
	private String Model;
	private String Color;
	private String Owner;
	
	public Car(String carId, String name, String model, String color, String owner)
	{
		this.CarId = carId;
		this.Name = name;
		this.Color = color;
		this.Model = model;
		this.Owner = owner;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getModel() {
		return Model;
	}

	public void setModel(String model) {
		Model = model;
	}

	public String getColor() {
		return Color;
	}

	public void setColor(String color) {
		Color = color;
	}

	public String getOwner() {
		return Owner;
	}

	public void setOwner(String owner) {
		Owner = owner;
	}

	public Car() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
