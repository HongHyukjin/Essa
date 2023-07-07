<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="java.util.*"%>
<%@ page import="community.CommunityDAO"%>
<%@ page import="community.CommunityDTO"%>

<%
    request.setCharacterEncoding("UTF-8");
%>
    <jsp:useBean class="community.CommunityDTO" id="communityDTO" scope="page"/>
    <jsp:setProperty name="communityDTO" property="idx"/>

<%
   

    CommunityDAO communityDAO = new CommunityDAO();
    CommunityDTO communityDTO = communityDAO.getList(communityDTO);

    String jsonData = "{ \"result\": {"
    +   "\"idx\" : \"" + communityDTO.getIdx() + "\","   
    +   "\"userId\" : \"" + communityDTO.getUserId() + "\","
    +   "\"subject\" : \"" + communityDTO.getSubject() + "\","
    +   "\"file1\" : \"" + communityDTO.getFile1() + "\","
    +   "\"file2\" : \"" + communityDTO.getFile2() + "\","
    +   "\"file3\" : \"" + communityDTO.getFile3() + "\","
    +   "\"title\" : \"" + communityDTO.getTitle() + "\","
    +   "\"service\" : \"" + communityDTO.getService() + "\","
    +   "\"location\" : \"" + communityDTO.getLocation() + "\","
    +   "\"content\" : \"" + communityDTO.getContent() + "\","
    +   "\"writeDate\" : \"" + communityDTO.getWriteDate() + "\""
    + "} }";


    response.getWriter().write(jsonData);
        
%>


