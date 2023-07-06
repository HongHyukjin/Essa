<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="essa.UserDAO" %>
<%@ page import="essa.UserDTO" %>

<%
    response.setHeader("Access-Control-Allow-Origin", "*");
    request.setCharacterEncoding("UTF-8");

    String user_id = request.getParameter("user_id");

    UserDAO userDAO = new UserDAO();
    UserDTO userDTO = userDAO.getJoin(user_id);

    String jsonData = "{ \"result\": {"
            + "\"아이디\": \"" + userDTO.getUser_id() + "\","
            + "\"비밀번호\": \"" + userDTO.getUser_pw() + "\","
            + "\"이름\": \"" + userDTO.getUser_name() + "\","
            + "\"이메일\": \"" + userDTO.getUser_email() + "\","
            + "\"핸드폰번호\": \"" + userDTO.getUser_hp() + "\","
            + "\"전화번호\": \"" + userDTO.getUser_ph() + "\","
            + "\"생년\": \"" + userDTO.getUser_birth_year() + "\","
            + "\"생월\": \"" + userDTO.getUser_birth_month() + "\","
            + "\"생일\": \"" + userDTO.getUser_birth_date() + "\""
            + "} }";

    response.getWriter().write(jsonData);
%>