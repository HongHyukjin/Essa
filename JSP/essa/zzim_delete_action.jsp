<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="zzim.ZzimDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="zzim.ZzimDTO" id="ZzimDTO" scope="page"/>
<jsp:setProperty name="ZzimDTO" property="user_id"/>
<jsp:setProperty name="ZzimDTO" property="product_num"/>

<%
    ZzimDAO ZzimDAO = new ZzimDAO();
    int result = ZzimDAO.delete(ZzimDTO);
%>

{"result":"<%=result%>"}