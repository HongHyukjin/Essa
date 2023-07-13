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

  public List<ZzimDTO> select(String user_id){
    ZzimDTO ZzimDTO = null;
    List<ZzimDTO> list = new ArrayList<>();
    String SQL ="select * from zzim where user_id=?";
    try{
        ps = conn.prepareStatement(SQL);
        ps.setString(1, user_id);
        rs = ps.executeQuery(); 
        while(rs.next()){
            ZzimDTO = new ZzimDTO();
            ZzimDTO.setUser_id(rs.getString("user_id"));;
            ZzimDTO.setProduct_num(rs.getInt("product_num"));;
            ZzimDTO.setAmount(rs.getInt("amount"));;
   
            list.add(ZzimDTO);
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

public int delete(ZzimDTO ZzimDTO){
  String SQL = "delete from zzim where user_id=? && product_num=?";
  try{
      ps = conn.prepareStatement(SQL);
      ps.setString(1, ZzimDTO.getUser_id());
      ps.setInt(2, ZzimDTO.getProduct_num());;

      return ps.executeUpdate();
  }
  catch(Exception e){}
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