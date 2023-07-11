<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
<<<<<<< HEAD
    contentType="application/json; charset=UTF-8"
=======
    contentType="text/html; charset=UTF-8"
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
    pageEncoding= "UTF-8"
%>


<%@ page import="product_inquiry.ProductInquiryDAO"%>
<%@ page import="product_inquiry.ProductInquiryDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    ProductInquiryDAO ProductInquiryDAO = new ProductInquiryDAO();
    List<ProductInquiryDTO> list = ProductInquiryDAO.selectAll();
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(ProductInquiryDTO productInquiryDTO : list){
        cnt++;
        if(cnt < list.size()){
<<<<<<< HEAD
            jsonData += "{ \"idx\" : \"" + productInquiryDTO.getIdx() + "\","
=======
            jsonData += "{ \"category\" : \"" + productInquiryDTO.getCategory() + "\","
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
                     +   "\"user_id\" : \"" + productInquiryDTO.getUser_id() + "\","
                     +   "\"user_name\" : \"" + productInquiryDTO.getUser_name() + "\","
                     +   "\"subject\" : \"" + productInquiryDTO.getSubject() + "\","
                     +   "\"content\" : \"" + productInquiryDTO.getContent() + "\","
<<<<<<< HEAD
                     +   "\"category\" : \"" + productInquiryDTO.getCategory() + "\","
                     +   "\"write_date\" : \"" + productInquiryDTO.getWrite_date() + "\""
                     + "},";
        }
        else{ 
            jsonData += "{ \"idx\" : \"" + productInquiryDTO.getIdx() + "\","
=======
                     +   "\"write_date\" : \"" + productInquiryDTO.getWrite_date() + "\""
                     + "},";
        }
        else{
            jsonData += "{ \"category\" : \"" + productInquiryDTO.getCategory() + "\","
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
                        +   "\"user_id\" : \"" + productInquiryDTO.getUser_id() + "\","
                        +   "\"user_name\" : \"" + productInquiryDTO.getUser_name() + "\","
                        +   "\"subject\" : \"" + productInquiryDTO.getSubject() + "\","
                        +   "\"content\" : \"" + productInquiryDTO.getContent() + "\","
<<<<<<< HEAD
                        +   "\"category\" : \"" + productInquiryDTO.getCategory() + "\","
=======
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
                        +   "\"write_date\" : \"" + productInquiryDTO.getWrite_date() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>