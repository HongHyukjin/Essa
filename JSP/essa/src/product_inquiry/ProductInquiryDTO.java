package product_inquiry;

/**
 * ProductInquiryDTO
 */
public class ProductInquiryDTO {
                   
    private int idx;   
    private String category;
    private String user_id;
    private String user_name;
    private String subject;
    private String content;
    private String write_date;

    public int getIdx() {
        return this.idx; 
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getCategory() { 
        return this.category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getUser_id() {
        return this.user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return this.user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getSubject() {
        return this.subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getWrite_date() {
        return this.write_date;
    }

    public void setWrite_date(String write_date) {
        this.write_date = write_date;
    }

     
}