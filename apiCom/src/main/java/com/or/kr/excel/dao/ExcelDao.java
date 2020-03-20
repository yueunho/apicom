package com.or.kr.excel.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.or.kr.excel.domain.ExcelVo;

@Repository
public class ExcelDao  {
	@Autowired
	private SqlSessionTemplate sqlSession; 
	public List<ExcelVo> getTest(ExcelVo excelVo) {
		return sqlSession.selectList("excelDao.test",excelVo);
	}
}