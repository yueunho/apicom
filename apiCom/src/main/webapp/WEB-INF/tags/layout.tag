<%@ tag description="esqms manager display template" pageEncoding="UTF-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ attribute name="headArea" fragment="true" %>
<%@ attribute name="bodyArea" fragment="true" %>
<!DOCTYPE html>
<html lang="ko">
    <head>
    	<link href="<c:url value='/resources/css/common.css'/>" rel="stylesheet">
    	<link href="<c:url value='/resources/css/bootstrap-theme.css'/>" rel="stylesheet">
    	<link href="<c:url value='/resources/css/bootstrap-theme.css.map'/>" rel="stylesheet">
    	<link href="<c:url value='/resources/css/bootstrap.css'/>" rel="stylesheet">
    	<link href="<c:url value='/resources/css/bootstrap.css.map'/>" rel="stylesheet">
    	<link href="<c:url value='/resources/css/bootstrap.min.css'/>" rel="stylesheet">
     	<script type="text/javascript" src="<c:url value='/resources/js/jquery-1.12.4.min.js'/>"></script>
     	<script type="text/javascript" src="<c:url value='/resources/js/common.js'/>"></script>
     	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <jsp:invoke fragment="headArea"></jsp:invoke>
    </head>
    <body></body>
</html>