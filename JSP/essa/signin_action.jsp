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

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<JSP:useBean id="userDTO" class="essa.UserDTO" scope="page"/>
<JSP:setProperty name="userDTO" property="user_id"/>
<JSP;setProperty name="userDTO" property="user_pw"/>

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signin(userDTO.getUser_id(), userDTO.getUser_pw());
%>


<%
    String jsonData = "{ \"result\": \"" + result + "\"" + "}";

    response.getWriter().write(jsonData);
%>
