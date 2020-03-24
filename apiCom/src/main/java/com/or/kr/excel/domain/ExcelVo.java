package com.or.kr.excel.domain;

import org.apache.ibatis.type.Alias;

@SuppressWarnings("serial")
@Alias("excelVo")
public class ExcelVo {
 
 private  int userSeq;
 private  String userId;
 private  String userName;
public int getUserSeq() {
	return userSeq;
}
public void setUserSeq(int userSeq) {
	this.userSeq = userSeq;
}
public String getUserId() {
	return userId;
}
public void setUserId(String userId) {
	this.userId = userId;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
 
 
 
}
