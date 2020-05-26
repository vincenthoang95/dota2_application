package com.dota.controller;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import org.json.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DotaConstantController {
	
	@GetMapping("/testHerosStats")
	public String test() {
		return getJSONFile("build/heroes.json");
	}
	
	@GetMapping("/testAbilityIds")
	public String testAbilityId() {
		return getJSONFile("build/ability_ids.json");
	}
	
	@GetMapping("/testAbilityList")
	public String testAbilityList() {
		return getJSONFile("build/abilities.json");
	}
	
	@GetMapping("/getItemInfo")
	public String getItemInfo() {
		JSONObject result = new JSONObject();
		
		result.put("itemIds", new JSONObject(getJSONFile("build/item_ids.json")));
		result.put("itemList", new JSONObject(getJSONFile("build/items.json")));
		
		return result.toString();
	}
	
	@GetMapping("/getHeroNameList")
	public String getHeroNameList() {
		return getJSONFile("build/hero_names.json");
	}
	
	@GetMapping("/getHeroesAbilitiesList")
	public String getHeroesAbilitiesList() {
		return getJSONFile("build/hero_abilities.json");
	}
	
	public String getJSONFile(String path) {
		JSONParser jsonParser = new JSONParser();
        String result = "";
        
        ClassPathResource cpr = new ClassPathResource(path);
        try {
        	byte[] bdata = FileCopyUtils.copyToByteArray(cpr.getInputStream());
        	result = new String(bdata, StandardCharsets.UTF_8);
        } catch (IOException e) {
        	e.printStackTrace();
        }
//        try 
//        {   
//        	FileReader reader = new FileReader(path);
// 
//            JSONObject abilityIds = new JSONObject(jsonParser.parse(reader).toString());
//            
//            result = abilityIds.toString();
// 
//        } catch (FileNotFoundException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (ParseException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		return result;
	}
	

}
