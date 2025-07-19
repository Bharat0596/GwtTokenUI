import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { Homepage } from './homepage/homepage';

export const routes: Routes = [
 { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignIn },
  { path: 'signup', component: SignUp },
  {path:'homepage', component:Homepage}
];
