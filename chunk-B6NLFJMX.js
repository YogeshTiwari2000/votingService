import{a as k}from"./chunk-J7NIAVEL.js";import{d as y}from"./chunk-EEOSKWDR.js";import{a as M,b as _,c as S,d as N,e as v,f as P,k as V,m as L,n as O}from"./chunk-ZP6C7VA2.js";import"./chunk-OD3BPQVW.js";import{Aa as u,Fa as h,Ta as e,Ua as n,Wa as w,Xa as C,Z as s,Za as a,_ as l,ab as p,bb as c,cb as f,wa as g,wb as x}from"./chunk-E7YQ3UJQ.js";var D=(()=>{class d{constructor(r,i){this.authService=r,this.router=i,this.login={aadharCardNumber:"",password:""}}onSubmit(){console.log("login === ",this.login),this.authService.login(this.login.aadharCardNumber,this.login.password).subscribe(r=>{localStorage.setItem("token",r.token),this.router.navigate(["/userProfile"])})}forgetPassword(){}static{this.\u0275fac=function(i){return new(i||d)(u(k),u(y))}}static{this.\u0275cmp=h({type:d,selectors:[["app-login"]],decls:15,vars:2,consts:[["loginForm","ngForm"],[1,"flex","justify-center","items-center","min-h-screen"],[1,"w-1/2","space-y-6",3,"ngSubmit"],[1,"text-3xl","font-bold","text-center"],[1,"form-group"],["for","aadharCardNumber",1,"block","text-sm","font-medium","text-gray-700"],["type","text","id","aadharCardNumber","required","","name","aadharCardNumber",1,"mt-1","block","w-full","px-3","py-2","bg-white","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm",3,"ngModelChange","ngModel"],["for","password",1,"block","text-sm","font-medium","text-gray-700"],["type","password","id","password","required","","name","password",1,"mt-1","block","w-full","px-3","py-2","bg-white","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","sm:text-sm",3,"ngModelChange","ngModel"],["type","submit",1,"w-full","flex","justify-center","py-2","px-4","border","border-transparent","rounded-md","shadow-sm","text-sm","font-medium","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500"]],template:function(i,o){if(i&1){let m=w();e(0,"div",1)(1,"form",2,0),C("ngSubmit",function(){return s(m),l(o.onSubmit())}),e(3,"h1",3),a(4,"Login"),n(),e(5,"div",4)(6,"label",5),a(7,"AadharCardNumber:"),n(),e(8,"input",6),f("ngModelChange",function(t){return s(m),c(o.login.aadharCardNumber,t)||(o.login.aadharCardNumber=t),l(t)}),n()(),e(9,"div",4)(10,"label",7),a(11,"Password:"),n(),e(12,"input",8),f("ngModelChange",function(t){return s(m),c(o.login.password,t)||(o.login.password=t),l(t)}),n()(),e(13,"button",9),a(14,"Login"),n()()()}i&2&&(g(8),p("ngModel",o.login.aadharCardNumber),g(4),p("ngModel",o.login.password))},dependencies:[x,L,P,M,_,S,V,v,N,O],styles:[".login-container[_ngcontent-%COMP%]{width:300px;margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 10px #0000001a}.login-title[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;font-size:24px;color:#333}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:15px;padding:10px;border:1px solid #ccc;border-radius:4px}.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]})}}return d})();export{D as LoginComponent};
