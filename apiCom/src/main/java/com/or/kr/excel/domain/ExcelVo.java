package com.or.kr.excel.domain;

import org.apache.ibatis.type.Alias;

@Alias("excelVo")
public class ExcelVo {
 private String 가감점키;
 
 private String 구분;
 
 private String 평가항목;
 
 private String 점수;
 
 private String 사용여부;
 
 private String 고정여부;
 
 private String 게시판이름;

public String get가감점키() {
	return 가감점키;
}

public void set가감점키(String 가감점키) {
	this.가감점키 = 가감점키;
}

public String get구분() {
	return 구분;
}

public void set구분(String 구분) {
	this.구분 = 구분;
}

public String get평가항목() {
	return 평가항목;
}

public void set평가항목(String 평가항목) {
	this.평가항목 = 평가항목;
}

public String get점수() {
	return 점수;
}

public void set점수(String 점수) {
	this.점수 = 점수;
}

public String get사용여부() {
	return 사용여부;
}

public void set사용여부(String 사용여부) {
	this.사용여부 = 사용여부;
}

public String get고정여부() {
	return 고정여부;
}

public void set고정여부(String 고정여부) {
	this.고정여부 = 고정여부;
}

public String get게시판이름() {
	return 게시판이름;
}

public void set게시판이름(String 게시판이름) {
	this.게시판이름 = 게시판이름;
}
 
}
