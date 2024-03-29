<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"    
%>

<%@ page import = "essa.UserDAO" %>
<%@ page import = "essa.UserDTO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="essa.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_name" />

<%
    UserDAO userDAO = new UserDAO();
    String result = userDAO.pwSearch(userDTO.getUser_id(), userDTO.getUser_name());
%>

<%
    String jsonData = "{\"result\":\"" + result + "\"}";
    response.getWriter().write(jsonData);
%>
