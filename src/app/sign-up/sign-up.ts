import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import{HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule,FormsModule,RouterModule,HttpClientModule ],
  standalone:true,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  user={
    username:'',
    password:'',
  };
  constructor(private http:HttpClient){}
  onRegister() {
    this.http.post("http://localhost:8080/auth/register",this.user)
    .subscribe({
        next:res=>{
          console.log('Registration successful:', res);
          alert('🎉 Registration successful!');
        },
        error:err=>{
          alert("some error during registartion")
        }
    });
  }
}
