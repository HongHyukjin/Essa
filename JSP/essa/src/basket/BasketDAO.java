package basket;
import java.sql.*;
import java.util.*;

public class BasketDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public BasketDAO(){
        try{
            String URL = "jdbc:mysql://localhost:3306/essa";
            String ID = "root";
            String PW = "1234";

            Class.forName("com.mysql.jdbc.Driver");

            conn = DriverManager.getConnection(URL, ID, PW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    // 장바구니 담은 제품 보내기
    public int basket_post(BasketDTO basketDTO){
        String SQL ="insert into basket(user_id,product_code,num,option1,option2) values(?,?,?,?,?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, basketDTO.getUser_id());
            ps.setInt(2, basketDTO.getProduct_code());
            ps.setInt(3, basketDTO.getNum());
            ps.setString(4, basketDTO.getOption1());
            ps.setString(5, basketDTO.getOption2());

            return ps.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return -1;
    }

    // 장바구니 목록
    public List<BasketDTO> basket_select(String user_id){
        BasketDTO basketDTO = null;
        List<BasketDTO> list = new ArrayList<>();
        String SQL = "SELECT * FROM essa_member e join basket b where e.user_id=? && b.user_id=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1,user_id);
            ps.setString(2,user_id);
            rs = ps.executeQuery();
            while(rs.next()){
                basketDTO = new BasketDTO();
                basketDTO.setProduct_code(rs.getInt("product_code"));
                basketDTO.setNum(rs.getInt("num"));
                basketDTO.setOption1(rs.getString("option1"));
                basketDTO.setOption2(rs.getString("option2"));
                list.add(basketDTO);
            }
            return list;
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
         
}
