package community;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import community.CommunityDTO;

public class CommunityDAO {
        private Connection conn;
        private PreparedStatement ps;
        private ResultSet rs;

        public CommunityDAO(){
            try {
                final String URL = "jdbc:mariadb://localhost:3306/rlaqjawh46";
                final String ID = "rlaqjawh46";
                final String PW = "soomgo0629";
                Class.forName("org.mariadb.jdbc.Driver");
                this.conn = DriverManager.getConnection(URL, ID, PW);
            }
            catch (Exception e) {
                e.printStackTrace();
            }
        }
        

        

        public int write( CommunityDTO communityDTO){

             String SQL = "INSERT INTO soomgo_community(userId,subject,file1,file2,file3,title,service,location,content,writeDate) values(?,?,?,?,?,?,?,?,?,?)";
            
            try {
                ps=conn.prepareStatement(SQL);
                ps.setString(1, communityDTO.getUserId());
                ps.setString(2, communityDTO.getSubject());
                ps.setString(3, communityDTO.getFile1());
                ps.setString(4, communityDTO.getFile2());
                ps.setString(5, communityDTO.getFile3());
                ps.setString(6, communityDTO.getTitle());
                ps.setString(7, communityDTO.getService());
                ps.setString(8, communityDTO.getLocation());
                ps.setString(9, communityDTO.getContent());
                ps.setString(10, communityDTO.getWriteDate());
                return ps.executeUpdate();
            } catch (Exception e) {
                e.printStackTrace();
            }
          
                return -1; //데이터베이스 오류
        }



        public List<CommunityDTO> select(String userId){
            CommunityDTO communityDTO = null;
            List <CommunityDTO> list =new ArrayList<>();
            String SQL = "SELECT * FROM user m JOIN soomgo_community p WHERE m.userId = ? && p.userId=? ";
            try {
                ps=conn.prepareStatement(SQL);
                ps.setString(1, userId);
                ps.setString(2, userId);
                rs=ps.executeQuery();
                    while(rs.next()){
                        communityDTO = new CommunityDTO();
                        communityDTO.setIdx(rs.getInt("idx"));
                        communityDTO.setUserId(rs.getString("userId"));
                        communityDTO.setSubject(rs.getString("subject"));
                        communityDTO.setFile1(rs.getString("file1"));
                        communityDTO.setFile2(rs.getString("file2"));
                        communityDTO.setFile3(rs.getString("file3"));
                        communityDTO.setTitle(rs.getString("title"));
                        communityDTO.setService(rs.getString("service"));
                        communityDTO.setLocation(rs.getString("location"));
                        communityDTO.setContent(rs.getString("content"));
                        communityDTO.setWriteDate(rs.getString("writeDate"));
                        list.add(communityDTO);
                    }
                return list;
                }
                catch(Exception e){
                    e.printStackTrace();
                }
                finally{
                    try{
                        if(rs!=null){rs.close();}
                        if(ps!=null){ps.close();}
                        if(conn!=null){conn.close();}
                    }
                    catch(Exception e){ }
                  
                }
                return list;
        }

        
        public ArrayList<CommunityDTO> getList(CommunityDTO communityDTO) {
       
            ArrayList<CommunityDTO> list = new ArrayList<CommunityDTO>();
            String SQL = "SELECT * FROM soomgo_community ORDER BY idx DESC ";

            try {
                PreparedStatement ps = conn.prepareStatement(SQL);
            
                ResultSet rs = ps.executeQuery();
                
                while (rs.next()) {
                    communityDTO = new CommunityDTO();
                    communityDTO.setIdx(rs.getInt("idx"));
                    communityDTO.setUserId(rs.getString("userId"));
                    communityDTO.setSubject(rs.getString("subject"));
                    communityDTO.setFile1(rs.getString("file1"));
                    communityDTO.setFile2(rs.getString("file2"));
                    communityDTO.setFile3(rs.getString("file3"));
                    communityDTO.setTitle(rs.getString("title"));
                    communityDTO.setService(rs.getString("service"));
                    communityDTO.setLocation(rs.getString("location"));
                    communityDTO.setContent(rs.getString("content"));
                    communityDTO.setWriteDate(rs.getString("writeDate"));
                    list.add(communityDTO);
                }
                return list;
            } catch (Exception e) {
                e.printStackTrace();
            }
        
            return list;
        }

        public CommunityDTO getView(int idx) {
            String SQL ="SELECT * FROM soomgo_community WHERE idx =?";
                try {
                    PreparedStatement ps= conn.prepareStatement(SQL);
                    ps.setInt(1, idx);
                    rs=ps.executeQuery();
                    while(rs.next()){
                        CommunityDTO communityDTO = new CommunityDTO();
                        communityDTO.setIdx(rs.getInt(1));
                        communityDTO.setUserId(rs.getString(2));
                        communityDTO.setSubject(rs.getString(3));
                        communityDTO.setFile1(rs.getString(4));
                        communityDTO.setFile2(rs.getString(5));
                        communityDTO.setFile3(rs.getString(6));
                        communityDTO.setTitle(rs.getString(7));
                        communityDTO.setService(rs.getString(8));
                        communityDTO.setLocation(rs.getString(9));
                        communityDTO.setContent(rs.getString(10));
                        communityDTO.setWriteDate(rs.getString(11));
                        return communityDTO;
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
                return null;
        }

        public int delete(CommunityDTO communityDTO){
            String SQL = "DELETE FROM soomgo_community WHERE idx=?";
            try {
                ps=conn.prepareStatement(SQL);
                ps.setInt(1, communityDTO.getIdx());
                return ps.executeUpdate();
            } 
            catch (Exception e) {
                e.printStackTrace();
            }
            finally{
                try {
                    if(rs!=null){rs.close();}
                    if(ps!=null){ps.close();}
                    if(conn!=null){conn.close();}

                } catch (Exception e) {
                   
                }
            }
            return -1;

        }

        public CommunityDTO getListUpdate(CommunityDTO communityDTO){
            String SQL = "SELECT * FROM soomgo_community WHERE idx=?";
           try {
               ps = conn.prepareStatement(SQL);
     
               rs = ps.executeQuery();
               if(rs.next()){
                communityDTO = new CommunityDTO();
                communityDTO.setIdx(rs.getInt("idx"));
                communityDTO.setSubject(rs.getString("subject"));
                communityDTO.setFile1(rs.getString("file1"));
                communityDTO.setFile2(rs.getString("file2"));
                communityDTO.setFile3(rs.getString("file3"));
                communityDTO.setTitle(rs.getString("title"));
                communityDTO.setService(rs.getString("service"));
                communityDTO.setLocation(rs.getString("location"));
                communityDTO.setContent(rs.getString("content"));
                communityDTO.setWriteDate(rs.getString("writeDate"));
               }
            
           } catch (Exception e) {
               e.printStackTrace();
           }
           finally{
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}

            } catch (Exception e) {
                // TODO: handle exception
            }
        }
        return communityDTO; 
       }
        

        public int update(CommunityDTO communityDTO){

            String SQL = "UPDATE soomgo_community SET subject=?,file1=?,file2=?,file3=?, title=?, service=? , location=?,content=?,writeDate=? WHERE idx=?";
           
           try {
               ps=conn.prepareStatement(SQL);
               ps.setString(1, communityDTO.getSubject());
               ps.setString(2, communityDTO.getFile1());
               ps.setString(3, communityDTO.getFile2());
               ps.setString(4, communityDTO.getFile3());
               ps.setString(5, communityDTO.getTitle());
               ps.setString(6, communityDTO.getService());
               ps.setString(7, communityDTO.getLocation());
               ps.setString(8, communityDTO.getContent());
               ps.setString(9, communityDTO.getWriteDate());
               ps.setInt(10, communityDTO.getIdx());
               return ps.executeUpdate();
           } catch (Exception e) {
               e.printStackTrace();
           }
           finally{
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}

            } catch (Exception e) {
                // TODO: handle exception
            }
        }
        return -1;
       }
}
