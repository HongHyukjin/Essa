package zzim;
import java.sql.*;
import java.util.*;

public class ZzimDAO {
  private Connection conn;
  private PreparedStatement ps;
  private ResultSet rs;
  
  public ZzimDAO(){
    try{
      String URL = "jdbc:mysql://localhost:3306/essa";
      String ID = "essa";
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

  public int post(ZzimDTO zzimDTO){
    String SQL ="insert into zzim(user_id,product_num,amount) values(?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, zzimDTO.getUser_id());
            ps.setInt(2, zzimDTO.getProduct_num());
            ps.setInt(3, zzimDTO.getAmount());
            return ps.executeUpdate();
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
        return -1;
  }
  
}