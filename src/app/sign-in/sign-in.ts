import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule,RouterModule,HttpClientModule],
  standalone:true,
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {
    user={
      username:'',
      password:'',
    };
   constructor(private http:HttpClient,private router: Router){}
 
   onLogin() {
    this.http.post("http://localhost:8080/auth/login",this.user).subscribe({
      next:(res: any) => {
         const token = res.token || res; 
          localStorage.setItem("jwtToken", token);
          this.router.navigate(['/homepage']);
      },
      error:err=>{
          alert("Invalid User/Password")
        }
    });
  
  }
}
