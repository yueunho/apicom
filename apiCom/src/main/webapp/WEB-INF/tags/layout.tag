<!DOCTYPE html>
<%@tag description="layoutTag" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ attribute name="headArea" fragment="true" %>
<%@ attribute name="bodyArea" fragment="true" %>
<html lang="ko">
    <head>
    	<link href='/resources/css/common.css'  rel="stylesheet">
    	<link href='/resources/css/bootstrap-theme.css' rel="stylesheet">
    	<link href=/resources/css/bootstrap-theme.css.map' rel="stylesheet">
    	<link href='/resources/css/bootstrap.css' rel="stylesheet">
    	<link href=/resources/css/bootstrap.css.map' rel="stylesheet">
    	<link href='/resources/css/bootstrap.min.css' rel="stylesheet">
     	<script type="text/javascript" src='/resources/js/jquery-1.12.4.min.js'></script>
     	<script type="text/javascript" src='/resources/js/common.js'></script>
        <jsp:invoke fragment="headArea"/>
    </head>
    <body>
     <jsp:invoke fragment="bodyArea"/>
    </body>
</html>