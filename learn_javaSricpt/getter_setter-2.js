let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  user.name = "Pete";
  console.log(user.name); // Pete
  
  user.name = ""; // Name is too short...

// So, the name is stored in _name property, and the access is done via getter and setter.

// Technically, external code is able to access the name directly by using user._name. But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.
