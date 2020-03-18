package com.or.kr.excel.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ExcelDao  {
	@Autowired
	private SqlSession sqlSession; 
	public Object getTest() {
		return sqlSession.selectList("excelDao.test");
	}
}