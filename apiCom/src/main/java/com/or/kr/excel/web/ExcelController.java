package com.or.kr.excel.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;




import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.or.kr.excel.domain.ExcelVo;
import com.or.kr.excel.service.ExcelService;


@Controller
@RequestMapping(value = "/excel/")
public class ExcelController {
    @Autowired
	ExcelService excelService;
	
    @RequestMapping("excel.do")
	public ModelAndView  excel(ModelMap model, HttpServletRequest request,
			@ModelAttribute("excelVo") ExcelVo excelVo){
		excelVo.set구분("A");
		List<ExcelVo> ExcelData =   (List<ExcelVo>) excelService.getTest(excelVo);
	    ExcelVo excelVoMap = ExcelData.get(0);
	    return new ModelAndView("excel/excel", model);
	}
    
    @RequestMapping(value="excelPostTest.do", method=RequestMethod.POST)
    @ResponseBody
  	public  Map<String, Object> excelPostTest(ModelMap model, HttpServletRequest request,
  			@ModelAttribute("excelVo") @Valid ExcelVo excelVo){
    	 System.out.println(excelVo.get가감점키());
    	 Map<String, Object> result = new HashMap<String, Object>();
    	 result.put("result", "성공");
		return result;
    }
}    
