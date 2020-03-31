package com.dota.utils;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
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
	
}
