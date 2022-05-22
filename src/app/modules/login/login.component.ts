import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private api: LoginService,
    private notifi: NzNotificationService) { }

  validateForm!: FormGroup;

  submitForm(): void {
    if(this.validateForm.invalid){
      console.log("Vui lòng nhập tài khoản và mật khẩu","");     
    }
    console.log(this.validateForm.value)
    this.api.login(this.validateForm.value).subscribe(
      (response: any)=>{
        if(response){
          localStorage.setItem('token',JSON.stringify(response.result));
          this.route.navigate(['/admin'], {});
        }
        else{
          console.log("Tài khoản hoặc mật khẩu không hợp lệ","")
        }
      },
      (err)=>{
        this.notifi.error("LỖI","Không thể kết nối đến Server!")
      }
    )
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

}
