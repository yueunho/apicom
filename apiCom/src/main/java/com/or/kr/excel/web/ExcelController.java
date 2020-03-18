package com.or.kr.excel.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.or.kr.excel.domain.ExcelVo;
import com.or.kr.excel.service.ExcelService;


@Controller
@RequestMapping("/excel/")
public class ExcelController {
    @Autowired
	ExcelService excelService;
	@RequestMapping("excel.do")
	public ModelAndView  excel(ModelMap model, HttpServletRequest request){
		@SuppressWarnings("unchecked")
		List<ExcelVo> ExcelData =   (List<ExcelVo>) excelService.getTest();
		ExcelVo excelVo = ExcelData.get(0);
		System.out.println(excelVo.get가감점키());
		System.out.println(excelVo.get구분());
	    return new ModelAndView("excel/excel", model);
	}
}
