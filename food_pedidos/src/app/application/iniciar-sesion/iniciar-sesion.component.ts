import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder){}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    console.log('email:', email);
    console.log('Password:', password);

    // Restablecer el formulario después de enviar los datos
    this.loginForm.reset();
  } 
}
