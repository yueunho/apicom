package com.or.kr.excel.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.or.kr.excel.domain.ExcelVo;
import com.or.kr.excel.service.ExcelService;
import com.or.kr.utill.web.SHA256Util;


@Controller
@RequestMapping(value = "/excel/")
public class ExcelController {
	@Autowired
	ExcelService excelService;
	
    @RequestMapping("excel.do")
	public ModelAndView  excel(ModelMap model, HttpServletRequest request,
			@ModelAttribute("excelVo") ExcelVo excelVo){
		List<ExcelVo> ExcelData = (List<ExcelVo>) excelService.getTest(excelVo);
		model.addAttribute("excelData", ExcelData);
	    return new ModelAndView("excel/excel", model);
	}
    
    @RequestMapping(value="excelPostTest.do", method=RequestMethod.POST)
    @ResponseBody
  	public  Map<String, Object> excelPostTest(ModelMap model, HttpServletRequest request,
  			@ModelAttribute("excelVo") @Valid ExcelVo excelVo){
    	 Map<String, Object> result = new HashMap<String, Object>();
    	 //sha ¾ÏÈ£È­
    	 //excelVo.setUserId(SHA256Util.getEncrypt(excelVo.getUserId(), SHA256Util.generateSalt()));
    	 result = excelService.postTest(excelVo);
		return result;
    }
}    
