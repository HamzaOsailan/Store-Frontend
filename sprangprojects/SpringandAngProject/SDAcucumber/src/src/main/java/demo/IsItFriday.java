package demo;

public class IsItFriday {
    protected static String isItFridaym(String today) {
//       if (today.equals("Friday")){
//           return "TGIF";
//       }else {
//           return "Nope";
//       }
        return "Friday".equals(today)? "TGIF":"Nope";
    }
}
