<%@ page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="product_inquiry.ProductInquiryDAO" %>
<%@ page import="product_inquiry.ProductInquiryDTO" %>

<%
    response.setHeader("Access-Control-Allow-Origin", "*");
    request.setCharacterEncoding("UTF-8");

    String user_name = request.getParameter("user_name");

    ProductInquiryDAO productInquiryDAO = new ProductInquiryDAO();
    ProductInquiryDTO productInquiryDTO = productInquiryDAO.getJoin(user_name);

    String jsonData = "{ \"result\": {"
            + "\"카테고리\": \"" + userDTO.getUser_nick() + "\","
            + "\"이름\": \"" + userDTO.getUser_nick() + "\","
            + "\"제목\": \"" + userDTO.getUser_nick() + "\","
            + "\"내용\": \"" + userDTO.getUser_oneline() + "\""
            + "} }";

    response.getWriter().write(jsonData);
%>