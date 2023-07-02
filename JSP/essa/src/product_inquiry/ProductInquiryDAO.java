package product_inquiry;
import java.util.*;
import java.sql.*;

/**
 * ProductInquiryDAO
 */
public class ProductInquiryDAO {
    private Connection conn;
    private PreparedStatement ps;
    private Statement stmt;
    private ResultSet rs;
              
    public ProductInquiryDAO() {
        try {
            String DBURL = "jdbc:mysql://localhost:3306/essa";
            String DBID = "root";
            String DBPW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
      
    // 1. post 
    public int post(ProductInquiryDTO productInquiryDTO){
        String SQL = "INSERT INTO product_inquiry (category, user_name, subject, content) VALUES (?, ?, ?, ?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, productInquiryDTO.getCategory());
            ps.setString(2, productInquiryDTO.getUser_name());
            ps.setString(3, productInquiryDTO.getSubject());    
            ps.setString(4, productInquiryDTO.getContent());
            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }                                 
        finally {
            try {        
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -1;
    }
    
}                      