<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>


<%@ page import="product_inquiry.ProductinquiryDAO"%>
<%@ page import="product_inquiry.ProductinquiryDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    ProductinquiryDAO productinquiryDAO = new ProductinquiryDAO();
    List<ProductinquiryDTO> list = productinquiryDAO.selectAll();
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(ProductinquiryDTO productinquiryDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"category\" : \"" + productinquiryDTO.getCategory() + "\","
                     +   "\"user_id\" : \"" + productinquiryDTO.getUser_id() + "\","
                     +   "\"user_name\" : \"" + productinquiryDTO.getUser_name() + "\","
                     +   "\"subject\" : \"" + productinquiryDTO.getSubject() + "\","
                     +   "\"content\" : \"" + productinquiryDTO.getContent() + "\","
                     +   "\"write_date\" : \"" + productinquiryDTO.getWrite_date() + "\""
                     + "},";
        }
        else{
            jsonData += "{ \"category\" : \"" + productinquiryDTO.getCategory() + "\","
                        +   "\"user_id\" : \"" + productinquiryDTO.getUser_id() + "\","
                        +   "\"user_name\" : \"" + productinquiryDTO.getUser_name() + "\","
                        +   "\"subject\" : \"" + productinquiryDTO.getSubject() + "\","
                        +   "\"content\" : \"" + productinquiryDTO.getContent() + "\","
                        +   "\"write_date\" : \"" + productinquiryDTO.getWrite_date() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>