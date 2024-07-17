import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private users: { [email: string]: string } = {}; // Store user email and password
  session: any = null;

  constructor() {}

  login(email: string, password: string) {
    // Check if the provided email and password match an existing user
    if (!this.users[email] || this.users[email] !== password) {
      // Invalid email or password
      return;
    }

    // Simulate success and get token from server, store token in local storage
    const token = Math.random() + "";
    localStorage.setItem("token", token);

    // Update session state
    this.session = { email, token };
  }

  logout() {
    this.session = null;
    localStorage.removeItem("token");
    alert("Logout successfully");
  }

  signup(email: string, password: string): boolean {
    // Check if the email already exists
    if (this.users[email]) {
      return false; // Email already exists
    }

    // Add the new user to the users object
    this.users[email] = password;
    return true; // Signup successful
  }
}