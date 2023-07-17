import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  registerForm!: FormGroup;
  enviado = false;
  valorPass: string | undefined | null;
  confirmacionInvalida = false;
  invalido = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    // Aquí puedes realizar la lógica de registro, por ejemplo, hacer una llamada a la API
    const email = this.registerForm.value.email;
    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    const password = this.registerForm.value.password;
    console.log('Email:', email);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Password:', password);

    // Restablecer el formulario después de enviar los datos
    this.registerForm.reset();
  }

  obtenerPassword() {
    this.valorPass = this.registerForm.get('password')?.value 
  }

  compararPass(){
    const confirmacion = this.registerForm.get('confirmPassword')?.value
    this.confirmacionInvalida = this.valorPass !== confirmacion 
  }
}
