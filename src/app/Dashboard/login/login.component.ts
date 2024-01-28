import { Component } from '@angular/core';
import { NavComponent } from "../../nav/nav.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [NavComponent]
})
export class LoginComponent {

}
