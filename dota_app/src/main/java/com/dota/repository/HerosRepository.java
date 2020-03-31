package com.dota.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dota.model.Heros;
@Repository
public interface HerosRepository extends JpaRepository<Heros, Integer>{

}
