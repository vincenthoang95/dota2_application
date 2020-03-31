package com.dota.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Heros {
	@Id
	int id;
	String name;
	String heroImage;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHeroImage() {
		return heroImage;
	}
	public void setHeroImage(String heroImage) {
		this.heroImage = heroImage;
	}
	
	
	
	
}
