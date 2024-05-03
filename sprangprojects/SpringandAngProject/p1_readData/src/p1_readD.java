public class p1_readD {
    public static void main(String[]args){
        Connection con=   DriverManager.getConnection("jdbc:mysql://localhost:3306/sys", "root", "0000");

        Statement st= con.createStatement();

        //Question 1: List all records from the students table.

        ResultSet records= st.executeQuery("SELECT * FROM students");

        while(records.next()){

            System.out.printf("%-6d  %-20.20s  %-8s %-6d\n",records.getInt(1), records.getString(2), records.getString(3), records.getInt(4));

        }
    }
}
