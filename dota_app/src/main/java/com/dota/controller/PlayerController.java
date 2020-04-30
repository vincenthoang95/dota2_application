package com.dota.controller;

import java.util.Optional;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dota.utils.OpenDotaAPIUtils;

@RestController
@CrossOrigin
public class PlayerController {
	
	
	@Autowired
	OpenDotaAPIUtils openDotaAPIUtils;
	
	@GetMapping("/players/{accountId}/heroes")
	public String filterPlayerHeroesPlayed(@PathVariable long accountId, 
			@RequestParam(required = false) Optional<Integer> date,
			@RequestParam(required = false) Optional<Integer> patch,
			@RequestParam(required = false) Optional<Integer> region		
			) {
//		System.out.println(date.orElse(0) + "  " + patch.orElse(0) + "  " + region.orElse(0));
//		return date.orElse(0) + "  " + patch.orElse(0) + "  " + region.orElse(0);
		JSONArray filteredPlayerHeroes = new JSONArray(openDotaAPIUtils.filterPlayerHeroesPlayed(accountId, date.orElse(0), patch.orElse(0), region.orElse(0)));
		return filteredPlayerHeroes.toString();
		
//		JSONObject playerResponse = new JSONObject(openDotaAPIUtils.filterPlayerHeroesPlayed(accountId, date, patch, region));
//		return "";
	}
	
	
}
