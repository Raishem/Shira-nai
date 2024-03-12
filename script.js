class User {
    constructor(username, password) {
        this.Username = username;
        this.Password = password;
    }

    // Getter for Username
    get getUsername() {
        return this.Username;
    }

    // Setter for username
    set username(username) {
        this.Username = username;
    }

    // Gtter for password
    get getPassword() {
        return this.Password;
    }

    // Stter for password
    set setPassword(password) {
        this.Password = password;
    }

    isValid() {
        if(this.Username = 'admin' && this.Password == 'pass') {
            return true;
        }
        return false;
    }

}

function passCheck () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

     const user = new User(username, password);

     if(user.isValid()) {
       window.location.href = 'products.html';
     } else {
        alert('Incorrect Username or Password');
     }
}