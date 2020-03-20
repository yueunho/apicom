package com.or.kr.excel.service;

import java.util.List;

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
	


}
