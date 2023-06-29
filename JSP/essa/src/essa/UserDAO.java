package essa;
import java.sql.*;
import java.util.*;

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
}
