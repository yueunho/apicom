<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session="false"%>
<% request.setCharacterEncoding("utf-8"); %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="layout" tagdir="/WEB-INF/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<script type="text/javascript">
	
		  function submit() {
			  var data =$("#formname1").serialize();
			  console.log(data);
			 /*  $.ajax({
				    url: "./excelPostTest.do",
				    type: "POST",
				    data: data,
				    success: function(data){
				    	
				    }
		 	 }); */
		}
		 

	</script>
</head>
<body>
<%-- <%@ include file="/WEB-INF/views/include/header.jsp" %>
<%@ include file="/WEB-INF/views/include/menu.jsp" %> --%>
 <div class="container">
	 <form:form commandName="excelVo" action="./excelPostTest.do" method="post" >
	 	<form:input path="가감점키"/>
	 </form:form>
	 <button onclick="submit()">확인</button>
 </div>
</body>
</html>