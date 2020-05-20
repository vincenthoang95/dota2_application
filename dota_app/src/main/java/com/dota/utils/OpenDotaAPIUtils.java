package com.dota.utils;

import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
@Service
public class OpenDotaAPIUtils {
	
	// constant header being used when sending request to dota api
	public HttpEntity<String> dotaOpenAPIHeader() {
		HttpHeaders headers = new HttpHeaders();
		headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		return entity;
	}
	
	public String getMatchDetail(long matchId) {
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.exchange("https://api.opendota.com/api/matches/" + matchId,HttpMethod.GET,dotaOpenAPIHeader(),String.class);
		return response.getBody();
	}
	
	public String filterPlayerHeroesPlayed(long playerId, Integer date, Integer patch, Integer region) {
		
		String filterPath = "";

		if(date != 0) filterPath += "date=" + date + "&";
		if(patch != 0) filterPath += "patch=" + patch + "&";
		if(region != 0) filterPath += "region=" +region + "&";

		// my player id
		playerId = 93102567;
		String url = "https://api.opendota.com/api/players/" + playerId + "/heroes?" + filterPath;
		
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.exchange(url,HttpMethod.GET,dotaOpenAPIHeader(),String.class);
		return response.getBody();		
	}
	
	public String getRecentMatches() {
		RestTemplate restTemplate = new RestTemplate();
		
		ResponseEntity<String> response = restTemplate.exchange("https://api.opendota.com/api/players/93102567/recentMatches",HttpMethod.GET,dotaOpenAPIHeader(),String.class);
		
		return response.getBody();
	}
	
	public String getPlayerMatches(long accountId) {
		RestTemplate restTemplate = new RestTemplate();
		
		ResponseEntity<String> response = restTemplate.exchange("https://api.opendota.com/api/players/" + accountId + "/matches",HttpMethod.GET,dotaOpenAPIHeader(),String.class);

		return response.getBody();
	}
	
}
