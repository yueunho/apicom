<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="layout" tagdir="/WEB-INF/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<layout:layout>
	<jsp:attribute name="headArea">    
		<script type="text/javascript">
		
			  function submit() {
				  var data =$("#excelVo").serialize();
				  console.log(data);
				   $.ajax({
					    url: "./excelPostTest.do",
					    type: "POST",
					    data: data,
					    success: function(data){
					    	console.log(data.result);
					    }
			 	 }); 
			}
			 
	
		</script>
	</jsp:attribute>
	<jsp:attribute name="bodyArea">
		 <div class="container">
			 <form:form commandName="excelVo" action="./excelPostTest.do" method="post" >
			 	<form:input path="userId"/>
			 	<form:input path="userName"/>
			 </form:form>
			 <button onclick="submit()">확인</button>
		 </div>
	</jsp:attribute>
</layout:layout>
