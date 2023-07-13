<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="zzim.ZzimDAO"%>
<%@ page import="zzim.ZzimDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    String user_id = request.getParameter("user_id");
    ZzimDAO ZzimDAO = new ZzimDAO();
    List<ZzimDTO> list = ZzimDAO.select(user_id);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(ZzimDTO ZzimDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"user_id\" : \"" + ZzimDTO.getUser_id() + "\","
                     +   "\"product_num\" : \"" + ZzimDTO.getProduct_num() + "\","
                     +   "\"amount\" : \"" + ZzimDTO.getAmount() + "\""
                     + "},";
        }   
        else{
            jsonData += "{ \"user_id\" : \"" + ZzimDTO.getUser_id() + "\","
                      +   "\"product_num\" : \"" + ZzimDTO.getProduct_num() + "\","
                      +   "\"amount\" : \"" + ZzimDTO.getAmount() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>