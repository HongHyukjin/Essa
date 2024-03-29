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

<jsp:useBean id="userDTO" class="essa.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_email" />
<jsp:setProperty name="userDTO" property="user_hp" />
<jsp:setProperty name="userDTO" property="user_ph" />
<jsp:setProperty name="userDTO" property="user_addr1" />
<jsp:setProperty name="userDTO" property="user_addr2" />
<jsp:setProperty name="userDTO" property="user_addr3" />
<jsp:setProperty name="userDTO" property="user_birth_year" />
<jsp:setProperty name="userDTO" property="user_birth_month" />
<jsp:setProperty name="userDTO" property="user_birth_date" />
<jsp:setProperty name="userDTO" property="user_agr1" />
<jsp:setProperty name="userDTO" property="user_agr2" />

<%
    UserDAO userDAO = new UserDAO();
    int search = userDAO.id_search(userDTO); 
    int result=0;
    if(search==-1){
        result=-2;
    }
    else{
        result = userDAO.signup(userDTO);
    }
%>

<%
    String jsonData = "{ \"result\": \"" + result + "\"" + "}";
    response.getWriter().write(jsonData);
%>