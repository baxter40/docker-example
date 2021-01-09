using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace API.Models {
  public class User
  {
    public int ID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }



    public User (int iD, string firstName, string lastName) {
      ID = iD;
      FirstName = firstName;
      LastName = lastName;
    }

    public User () {

    }

  }
}
