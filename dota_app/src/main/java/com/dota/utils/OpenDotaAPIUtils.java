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
	//this is a random test
	final static String asd_asd = "lkasjdkf";

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
		
		
//		JSONObject jo = new JSONObject();
//		if(date != 0) jo.put("date", date);
//		if(patch != 0) jo.put("patch",patch);
//		if(region != 0) jo.put("region", region);
		
		String filterPath = "";

		if(date != 0) filterPath += "date=" + date + "&";
		if(patch != 0) filterPath += "patch=" + patch + "&";
		if(region != 0) filterPath += "region=" +region + "&";
		System.out.println(filterPath);
		System.out.println("https://api.opendota.com/api/players/" + playerId + "/heroes?" + filterPath);
		// my player id
		playerId = 93102567;
		String url = "https://api.opendota.com/api/players/" + playerId + "/heroes?" + filterPath;
//		
//		return url;
		
//		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://api.opendota.com/api/players/" + playerId + "/heroes?" + filterPath).encode();

//		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://api.opendota.com/api/players/" + playerId + "/heroes")
//				.queryParams(jo);
		
//		return builder.toUriString();
		
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.exchange(url,HttpMethod.GET,dotaOpenAPIHeader(),String.class);
		return response.getBody();		
	}
	
}
