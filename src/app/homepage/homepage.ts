import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule,FormsModule],
  standalone:true,
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit, OnDestroy{
   constructor(private router: Router) {}
  ngOnInit(): void {
     window.onpopstate = () => {
      const confirmed = confirm("Going back will log you out. Continue?");
      if (confirmed) {
        localStorage.removeItem('token');
        this.router.navigate(['/sign-in'],{ replaceUrl: true });
      } else {
        history.pushState(null, '', location.href); // Prevent back
      }
    };
  }
  ngOnDestroy(): void {
    window.onpopstate = null;
  }
 logout() {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem('token');
      this.router.navigate(['/sign-in'],{ replaceUrl: true });
    }
  }
}
