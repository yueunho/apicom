package com.or.kr.login.web;

import java.io.IOException;
import java.math.BigInteger;
import java.math.MathContext;
import java.security.SecureRandom;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.github.scribejava.core.builder.ServiceBuilder;
import com.github.scribejava.core.model.OAuth2AccessToken;
import com.github.scribejava.core.model.OAuthRequest;
import com.github.scribejava.core.model.Response;
import com.github.scribejava.core.model.Verb;
import com.github.scribejava.core.oauth.OAuth20Service;
import com.or.kr.util.NaverLoginApi;


@Controller
@RequestMapping(value = "/login/")
public class LoginController {
	
    @RequestMapping("login.do")
	public ModelAndView  login(ModelMap model, HttpServletRequest request){
    	 SecureRandom random = new SecureRandom();
    	 String state = new BigInteger(130, random).toString(32);
    	 String url = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=Tjos9_Mb1vN4Q4AEli4S";
    	      url += "&redirect_uri=http://localhost/login/loginProcess.do&state="+state;
    	 model.addAttribute("url",url);
	    return new ModelAndView("login/login",model);
	}
    
    @RequestMapping(value="loginProcess.do")
  	public  ModelAndView loginProcess(ModelMap model, HttpServletRequest request,HttpSession session) throws IOException{
    	 String sessionState =  (String) session.getAttribute("state");
    	 System.out.println(sessionState);
    	 if(sessionState == null) {
	    	 OAuth20Service oauthService = new ServiceBuilder()
	                 .apiKey("Tjos9_Mb1vN4Q4AEli4S")
	                 .apiSecret("X6MLY7l4CM")
	                 .callback("http://localhost/login/loginProcess.do")
	                 .state(request.getParameter("state").toString())
	                 .build(NaverLoginApi.instance());	
	          OAuth2AccessToken accessToken = oauthService.getAccessToken(request.getParameter("code").toString());
	          session.setAttribute("stats",request.getParameter("state").toString());
	   
	          String rsp = getUserProfile(accessToken);
	          System.out.println(rsp);
    	 }
    	  return new ModelAndView("login/login");
    }
    
    
    // 네이버로그인  정보 가져오기.
    public String getUserProfile(OAuth2AccessToken oauthToken) throws IOException{
			OAuth20Service oauthService =new ServiceBuilder()
                .apiKey("loginProcess")
                .apiSecret("X6MLY7l4CM")
                .callback("http://localhost/login/loginProcess.do").build(NaverLoginApi.instance());
			    OAuthRequest request = new OAuthRequest(Verb.GET, "https://openapi.naver.com/v1/nid/me", oauthService);
    
			    oauthService.signRequest(oauthToken, request);
		        Response response = request.send();
		        return response.getBody();
    }
}
