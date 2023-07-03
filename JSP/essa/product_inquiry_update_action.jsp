<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "product_inquiry.ProductInquiryDAO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="product_inquiry.ProductInquiryDTO" scope="page"/>

<jsp:setProperty name="productInquiryDTO" property="user_email1" />
<jsp:setProperty name="productInquiryDTO" property="user_email2" />
<jsp:setProperty name="productInquiryDTO" property="user_nick" />
<jsp:setProperty name="productInquiryDTO" property="user_url" />

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.update(userDTO);
%>

{"AJAX실행 DTO & DAO 결과":"<%=result%>"}


