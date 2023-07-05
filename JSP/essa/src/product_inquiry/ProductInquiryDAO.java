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
        String SQL = "INSERT INTO product_inquiry (user_id, category, user_name, subject, content) VALUES (?,?, ?, ?, ?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, productInquiryDTO.getUser_id());
            ps.setString(2, productInquiryDTO.getCategory());
            ps.setString(3, productInquiryDTO.getUser_name());
            ps.setString(4, productInquiryDTO.getSubject());    
            ps.setString(5, productInquiryDTO.getContent());
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

    public ArrayList<ProductInquiryDTO> selectAll(){
        String SQL = "SELECT * FROM product_inquiry";
        ProductInquiryDTO productInquiryDTO = null;
        ArrayList<ProductInquiryDTO> list = new ArrayList<ProductInquiryDTO>();
        try {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(SQL);
            while(rs.next()){
                productInquiryDTO = new ProductInquiryDTO();
                productInquiryDTO.setCategory(rs.getString("category"));
                productInquiryDTO.setUser_id(rs.getString("user_id"));
                productInquiryDTO.setUser_name(rs.getString("user_name"));
                productInquiryDTO.setSubject(rs.getString("subject"));
                productInquiryDTO.setContent(rs.getString("content"));
                productInquiryDTO.setWrite_date(rs.getString("write_date"));
                list.add(productInquiryDTO);
            }
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
        return list;
    }
    
    public int update(ProductInquiryDTO productInquiryDTO){
        String SQL = "UPDATE product_inquiry SET category=?, subject=?, content=? WHERE user_name=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, productInquiryDTO.getCategory());
            ps.setString(2, productInquiryDTO.getUser_name());
            ps.setString(3, productInquiryDTO.getSubject());
            ps.setString(4, productInquiryDTO.getContent());
            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
            // TODO: handle exception
        }
        finally{
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
          
    public ProductInquiryDTO getJoin(String user_id){
        ProductInquiryDTO productInquiryDTO = new ProductInquiryDTO();
        String SQL = "SELECT * FROM product_inquiry WHERE user_id=?"; 
        try{                      
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);
            if(rs.next()){
                productInquiryDTO.setCategory(rs.getString("category"));
                productInquiryDTO.setUser_id(rs.getString("user_id"));
                productInquiryDTO.setUser_name(rs.getString("user_name"));
                productInquiryDTO.setSubject(rs.getString("subject"));
                productInquiryDTO.setContent(rs.getString("content"));
            }
        }         
        catch(Exception e){
            e.printStackTrace();
        }
        finally{
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }        
            catch(Exception e){
                e.printStackTrace();
            }         
        }
        return productInquiryDTO;          
    }

     

         
    public List<ProductInquiryDTO> getJoinList(){
        List<ProductInquiryDTO> list = new ArrayList<>();
      
        String SQL = "SELECT * FROM product_inquiry";
        try {
            ps = conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            while(rs.next()){
                ProductInquiryDTO productInquiryDTO = new ProductInquiryDTO();
                productInquiryDTO.setIdx(rs.getInt("idx"));
                productInquiryDTO.setCategory(rs.getString("category"));
                productInquiryDTO.setUser_name(rs.getString("user_name"));
                productInquiryDTO.setSubject(rs.getString("subject"));
                productInquiryDTO.setContent(rs.getString("content"));
                productInquiryDTO.setWrite_date(rs.getString("write_date"));
                list.add(productInquiryDTO);
            }
        }      
        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            try{
                if(rs!= null){ rs.close(); }
                if(ps!= null){ ps.close(); }
                if(conn!= null){ conn.close(); }
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return list;
    }






    public int delete(ProductInquiryDTO productInquiryDTO){
        String SQL = "DELETE FROM product_inquiry WHERE idx=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setInt(1, productInquiryDTO.getIdx());

            return ps.executeUpdate();
        }
        catch(Exception e){}
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){ e.printStackTrace();}
        }
        return -1;
    }
}                       