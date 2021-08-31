import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public id: Number = 0;
  public password: String = '';
  
  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) {}

  ngOnInit(): void {}

  onSubmit(form:any): void {
    // Express サーバに POST 通信する。リクエストボディのプロパティ名は passport.use('local') で定めたモノに合わせる
    // 第3引数の withCredentials はログイン時から全ての通信で必須
    this.httpClient.post('http://localhost:3000/login', {
      id: this.id,
      password: this.password,
    }, { withCredentials: true }).toPromise()
      .then((result) => {
        console.log('ログイン成功')
        this.router.navigate(["/goods"]);
    })
    .catch((error) => {
      console.log('ログイン失敗')
    });

    this.httpClient.get('http://localhost:3000/login', {
        
    });
  }

}
