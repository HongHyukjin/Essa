package product_inquiry;
import java.util.*;
import java.sql.*;
<<<<<<< HEAD
import product_inquiry.ProductInquiryDTO;

=======
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe

/**
 * ProductInquiryDAO
 */  
public class ProductInquiryDAO {
    private Connection conn;
    private PreparedStatement ps;
    private Statement stmt;
    private ResultSet rs;
<<<<<<< HEAD
                    
    public ProductInquiryDAO() {
        try {      
=======
              
    public ProductInquiryDAO() {
        try {
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
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
<<<<<<< HEAD
            while(rs.next()){        
                productInquiryDTO = new ProductInquiryDTO();
                productInquiryDTO.setIdx(rs.getInt("idx"));
=======
            while(rs.next()){
                productInquiryDTO = new ProductInquiryDTO();
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
                productInquiryDTO.setCategory(rs.getString("category"));
                productInquiryDTO.setUser_id(rs.getString("user_id"));
                productInquiryDTO.setUser_name(rs.getString("user_name"));
                productInquiryDTO.setSubject(rs.getString("subject"));
                productInquiryDTO.setContent(rs.getString("content"));
                productInquiryDTO.setWrite_date(rs.getString("write_date"));
                list.add(productInquiryDTO);
            }
<<<<<<< HEAD
            return list;
        } catch (Exception e) {     
            // TODO: handle exception
            e.printStackTrace();
        }
        return list;  
=======
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
        return list;
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
    }
  
    public List<ProductInquiryDTO> select(String user_id){
        ProductInquiryDTO productInquiryDTO = null;
        List<ProductInquiryDTO> list = new ArrayList<>();
        String SQL = "SELECT * FROM essa_member e join product_inquiry p where e.user_id=? && p.user_id=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);
            ps.setString(2, user_id);
            rs = ps.executeQuery();
            while(rs.next()){
                productInquiryDTO = new ProductInquiryDTO();
                productInquiryDTO.setIdx(rs.getInt("p.idx"));
                productInquiryDTO.setCategory(rs.getString("category"));
                productInquiryDTO.setUser_name(rs.getString("user_name"));
                productInquiryDTO.setSubject(rs.getString("subject"));
                productInquiryDTO.setContent(rs.getString("content"));
                productInquiryDTO.setWrite_date(rs.getString("write_date"));
                list.add(productInquiryDTO);
            }   
            return list;
        } catch (Exception e) {
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
<<<<<<< HEAD

    // private int idx;   
    // private String category;
    // private String user_id;
    // private String user_name;
    // private String subject;
    // private String content;
    // private String write_date;
    
    public ProductInquiryDTO getListUpdate(ProductInquiryDTO productInquiryDTO){
        String SQL = "SELECT * FROM product_inquiry WHERE idx=?";
        try {
            ps = conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            if(rs.next()){
                productInquiryDTO = new ProductInquiryDTO();
                productInquiryDTO.setIdx(rs.getInt("idx"));
                productInquiryDTO.setCategory(rs.getString("category"));
                productInquiryDTO.setUser_id(rs.getString("user_id"));
                productInquiryDTO.setUser_name(rs.getString("user_name"));
                productInquiryDTO.setSubject(rs.getString("subject"));
                productInquiryDTO.setContent(rs.getString("content"));
                productInquiryDTO.setWrite_date(rs.getString("write_date"));
            }
        } catch (Exception e){
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
        return productInquiryDTO;
    }


   

    public int update(ProductInquiryDTO productInquiryDTO){
        String SQL = "UPDATE product_inquiry SET category=?, user_id=?, user_name=?, subject=?, content=?, write_date=? WHERE idx=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, productInquiryDTO.getCategory());
            ps.setString(2, productInquiryDTO.getUser_id());
            ps.setString(3, productInquiryDTO.getUser_name());
            ps.setString(4, productInquiryDTO.getSubject());
            ps.setString(5, productInquiryDTO.getContent());
            ps.setString(6, productInquiryDTO.getWrite_date());
            ps.setInt(7, productInquiryDTO.getIdx());
=======
    



    public int update(ProductInquiryDTO productInquiryDTO){
        String SQL = "UPDATE product_inquiry SET category=?, subject=?, content=? WHERE user_name=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, productInquiryDTO.getCategory());
            ps.setString(2, productInquiryDTO.getUser_name());
            ps.setString(3, productInquiryDTO.getSubject());
            ps.setString(4, productInquiryDTO.getContent());
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
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
<<<<<<< HEAD
    }    

        
          
    public ProductInquiryDTO getJoin(ProductInquiryDTO productInquiryDTO){
        String SQL = "SELECT * FROM product_inquiry WHERE idx=?"; 
        ProductInquiryDTO inquiryDTO = null;
        try{                            
            PreparedStatement ps = conn.prepareStatement(SQL);
            ps.setInt(1, productInquiryDTO.getIdx());
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                inquiryDTO = new ProductInquiryDTO();
                inquiryDTO.setIdx(rs.getInt("idx"));
                inquiryDTO.setCategory(rs.getString("category"));
                inquiryDTO.setUser_id(rs.getString("user_id"));
                inquiryDTO.setUser_name(rs.getString("user_name"));
                inquiryDTO.setSubject(rs.getString("subject"));
                inquiryDTO.setContent(rs.getString("content"));
                inquiryDTO.setWrite_date(rs.getString("write_date"));
            }   
=======
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
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
        }         
        catch(Exception e){
            e.printStackTrace();
        }
<<<<<<< HEAD
        
        // return productInquiryDTO;
        return inquiryDTO;       
=======
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
>>>>>>> 595d4748e9dce5ba52742618eaf8287581b610fe
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