package essa;
import java.sql.*;
import java.util.*;
import essa.UserDTO;

public class UserDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;
    

    public UserDAO(){
        try{
            String URL = "jdbc:mysql://localhost:3306/essa";
            String ID = "root";
            String PW = "1234";
            // 1. 데이터베이스 드라이버(JDBC)
            Class.forName("com.mysql.jdbc.Driver");

            // 2. 데이터베이스 인증 & 인가 (URL, ID, PW)
            conn = DriverManager.getConnection(URL, ID, PW);
            
            

        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    // 회원가입
    public int signup(UserDTO userDTO){
        String SQL = "INSERT INTO essa_member(user_id, user_pw, user_name, user_email,user_hp,user_ph,user_addr,user_birth,user_agr) VALUES(?,?,?,?,?,?,?,?,?)";
        try {   
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_id());
            ps.setString(2, userDTO.getUser_pw());
            ps.setString(3, userDTO.getUser_name());
            ps.setString(4, userDTO.getUser_email());
            ps.setString(5, userDTO.getUser_hp());
            ps.setString(6, userDTO.getUser_ph());
            ps.setString(7, userDTO.getUser_addr1()+" "+userDTO.getUser_addr2()+" "+userDTO.getUser_addr3());
            ps.setString(8, userDTO.getUser_birth_year()+userDTO.getUser_birth_month()+userDTO.getUser_birth_date());
            ps.setString(9, userDTO.getUser_agr1()+userDTO.getUser_agr2());
            
            return ps.executeUpdate();
        } catch(Exception e){
            
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                if(conn!= null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -1;
    }

    // 로그인

    public int signin(String user_id, String user_pw){
        String SQL = "SELECT user_pw FROM essa_member WHERE user_id = ?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);
            
            rs = ps.executeQuery();
            if(rs.next()){
                if(rs.getString("user_pw").equals(user_pw)){
                    return 1;
                }
                else { 
                    
                    return 0;
                }
            }
            else {
                return -1;
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        finally{
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch (Exception e) {   
                e.printStackTrace();
            }
        }
        return -2;
        
    }

    public int update(UserDTO userDTO){
        String SQL = "UPDATE essa_member SET user_pw =?, user_name=?, user_email=?, user_hp=?,  user_ph =?,  user_birth=? WHERE user_id=? ";

        String nn = userDTO.getUser_birth_year()+userDTO.getUser_birth_month()+userDTO.getUser_birth_date();
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_pw());    
            ps.setString(2, userDTO.getUser_name());    
            ps.setString(3, userDTO.getUser_email());    
            ps.setString(4, userDTO.getUser_hp());    
            ps.setString(5, userDTO.getUser_ph());   
            ps.setString(6, nn);    
            ps.setString(7, userDTO.getUser_id());    
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
            }
             catch (Exception e) {
                e.printStackTrace();
            }
        }
        return -1;
    }

    public UserDTO getJoin(String user_id){
        UserDTO userDTO = new UserDTO();

        String SQL = "SELECT * FROM essa_member WHERE user_id=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);
            rs=ps.executeQuery();    
            if(rs.next()){ 
                userDTO.setUser_id(rs.getString("user_id"));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_email(rs.getString("user_email"));
                userDTO.setUser_hp(rs.getString("user_hp"));
                userDTO.setUser_ph(rs.getString("user_ph"));
                userDTO.setUser_birth_year(rs.getString("user_birth").substring(0,4));
                userDTO.setUser_birth_month(rs.getString("user_birth").substring(4,6));
                userDTO.setUser_birth_date(rs.getString("user_birth").substring(6,8));
            }
        }
         catch (Exception e) {
           e.printStackTrace();
        }
        finally{
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}    
            }
             catch (Exception e) {
                e.printStackTrace();
            }
        }
        return userDTO;
    }
}
