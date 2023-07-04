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

<jsp:useBean class="zzim.ZzimDTO" id="zzimDTO" scope="page"/>
<jsp:setProperty name="zzimDTO" property="user_id"/>
<jsp:setProperty name="zzimDTO" property="product_num"/>
<jsp:setProperty name="zzimDTO" property="amount"/>

<%
    ZzimDAO zzimDAO = new ZzimDAO();
    int result = zzimDAO.post(zzimDTO);
%>

{"result":"<%=result%>"}