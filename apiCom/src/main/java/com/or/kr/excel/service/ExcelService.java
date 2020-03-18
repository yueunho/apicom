package com.or.kr.excel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.or.kr.excel.dao.ExcelDao;

@Service
public class ExcelService {
	@Autowired
	ExcelDao excelDao;
	
public Object getTest() {
	return excelDao.getTest();
}
  

}
