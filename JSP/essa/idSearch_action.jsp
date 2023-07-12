<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "essa.UserDAO" %>
<%@ page import = "essa.UserDTO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="essa.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_email" />



<%
    UserDAO userDAO = new UserDAO();
    String result = userDAO.idSearch(userDTO.getUser_name(), userDTO.getUser_email());
%>


{"AJAX실행 DTO & DAO 결과":"<%=result%>"}

