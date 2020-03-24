package com.or.kr.excel.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.or.kr.excel.dao.ExcelDao;
import com.or.kr.excel.domain.ExcelVo;

@Service
public class ExcelService {
	@Autowired
	ExcelDao excelDao;

	public List<ExcelVo> getTest(ExcelVo excelVo) {
		return excelDao.getTest(excelVo);
	}

	public Map<String, Object> postTest(ExcelVo excelVo) {
		Map<String, Object> result = new HashMap<String, Object>();
		int gubun =excelDao.insertTest(excelVo);
		if(gubun == 1) {
			result.put("result", "성공");
		} else {
			result.put("result", "실패");
		}
		return  result;
	}
	


}
