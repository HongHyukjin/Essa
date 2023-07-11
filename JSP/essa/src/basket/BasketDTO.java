package basket;

public class BasketDTO {
    private String user_id;
    private int product_code;
    private int num;
    private String option1;
    private String option2;

    public String getUser_id() { 
        return this.user_id;
    }  

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public int getProduct_code() {
        return this.product_code;
    }

    public void setProduct_code(int product_code) {
        this.product_code = product_code;
    }

    public int getNum() {
        return this.num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getOption1() {
        return this.option1;
    }

    public void setOption1(String option1) {
        this.option1 = option1;
    }

    public String getOption2() {
        return this.option2;
    }

    public void setOption2(String option2) {
        this.option2 = option2;
    }

}
