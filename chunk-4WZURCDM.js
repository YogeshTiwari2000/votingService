import{a as h}from"./chunk-J7NIAVEL.js";import{d as g,g as x}from"./chunk-EEOSKWDR.js";import{a as S}from"./chunk-UZUCJJIJ.js";import"./chunk-ZP6C7VA2.js";import"./chunk-OD3BPQVW.js";import{Aa as d,Fa as p,N as c,T as u,Ta as e,Ua as t,Va as f,Xa as m,Za as i,_a as s,wa as a}from"./chunk-E7YQ3UJQ.js";var b=(()=>{class o{constructor(){}setItem(r,n){localStorage.setItem(r,JSON.stringify(n))}getItem(r){let n=localStorage.getItem(r);return n?JSON.parse(n):null}removeItem(r){localStorage.removeItem(r)}clear(){localStorage.clear()}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275prov=c({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var y=(()=>{class o{constructor(r,n){this.authService=r,this.localStr=n,this.user={},this.router=u(g)}ngOnInit(){this.getUserProfile()}getUserProfile(){this.authService.getProfile().subscribe(r=>{this.user=r.user,console.log("this.user === ",this.user),console.log("this.userId === ",this.user._id)},r=>{console.error("Error fetching user profile:",r)})}editProfile(){}updateProfile(){this.authService.updateProfile(this.user).subscribe(r=>{console.log("Profile updated successfully:",r)},r=>{console.error("Error updating profile:",r)})}logOut(){this.localStr.clear(),this.router.navigate(["/signup"])}static{this.\u0275fac=function(n){return new(n||o)(d(h),d(b))}}static{this.\u0275cmp=p({type:o,selectors:[["app-user-profile"]],decls:42,vars:8,consts:[[1,"flex","items-center","justify-center"],[1,"user-profile","bg-white","rounded-lg","p-6","shadow-lg","m-auto","w-1/2"],[1,"text-2xl","font-bold","mb-4"],[1,"grid","grid-cols-2","gap-4"],[1,"font-bold"],[1,"mt-4","px-4","py-2","bg-blue-500","hover:bg-blue-700","text-white","rounded",3,"click"]],template:function(n,l){n&1&&(e(0,"div",0)(1,"div",1)(2,"h2",2),i(3,"User Profile"),t(),e(4,"dl",3)(5,"dt",4),i(6,"Name:"),t(),e(7,"dd"),i(8),t(),e(9,"dt",4),i(10,"Age:"),t(),e(11,"dd"),i(12),t(),e(13,"dt",4),i(14,"Email:"),t(),e(15,"dd"),i(16),t(),e(17,"dt",4),i(18,"Mobile:"),t(),e(19,"dd"),i(20),t(),e(21,"dt",4),i(22,"Address:"),t(),e(23,"dd"),i(24),t(),e(25,"dt",4),i(26,"Aadhar Card Number:"),t(),e(27,"dd"),i(28),t(),e(29,"dt",4),i(30,"Role:"),t(),e(31,"dd"),i(32),t(),e(33,"dt",4),i(34,"Has Voted:"),t(),e(35,"dd"),i(36),t()(),e(37,"button",5),m("click",function(){return l.editProfile()}),i(38,"Edit Profile"),t(),e(39,"button",5),m("click",function(){return l.logOut()}),i(40,"LogOut "),t()()(),f(41,"app-candidate-list")),n&2&&(a(8),s(l.user.name),a(4),s(l.user.age),a(4),s(l.user.email),a(4),s(l.user.mobile),a(4),s(l.user.address),a(4),s(l.user.aadharCardNumber),a(4),s(l.user.role),a(4),s(l.user.isVoted?"Yes":"No"))},dependencies:[S,x],styles:[".user-profile[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:20px}.user-profile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:10px}.user-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;margin:5px 0}.user-profile[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]{margin-top:15px;padding:10px 15px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer}.user-profile[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]})}}return o})();export{y as UserProfileComponent};
