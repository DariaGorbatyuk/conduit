"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[685],{4790:function(e,a,r){r.d(a,{Z:function(){return u}});var t=r(3396),s=r(4870),o=r(7139);const n={class:"error-messages"};var l={__name:"ValidationErrors",props:{validationErrors:{type:Object,required:!0}},setup(e){const a=e,r=(0,t.Fl)((()=>Object.keys(a.validationErrors).map((e=>{const r=a.validationErrors[e].join();return e+" "+r}))));return(e,a)=>((0,t.wg)(),(0,t.iD)("ul",n,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,s.SU)(r),(e=>((0,t.wg)(),(0,t.iD)("li",{key:e},(0,o.zw)(e),1)))),128))]))}},i=r(89);const c=(0,i.Z)(l,[["__scopeId","data-v-15d1a421"]]);var u=c},4393:function(e,a,r){r.r(a),r.d(a,{default:function(){return U}});var t=r(3396),s=r(4870),o=r(9242),n=r(65),l=r(2483),i=r(4790),c=r(6492);const u={class:"auth-page"},p={class:"container-page"},d={class:"row"},m={class:"col-md-6 offset-md-3 col-xs-12"},f=(0,t._)("h1",{class:"text-xs-center"},"Sign up",-1),g={class:"text-xs-center"},v=(0,t.Uk)("Have an account?"),w=["onSubmit"],_={class:"form-group"},b={class:"form-group"},h={class:"form-group"},y=["disabled"];var k={__name:"Register",setup(e){const a=(0,n.oR)(),r=(0,l.tv)(),k=(0,s.qj)({name:"",email:"",password:""}),S=(0,t.Fl)((()=>a.state.auth.isSubmitting)),U=(0,t.Fl)((()=>a.state.auth.validationErrors));function x(){a.dispatch(c.Hp.register,{email:k.email,username:k.name,password:k.password}).then((()=>{r.push({name:"globalFeed"})}))}return(e,a)=>{const r=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",p,[(0,t._)("div",d,[(0,t._)("div",m,[f,(0,t._)("p",g,[(0,t.Wm)(r,{to:"{name: 'login}"},{default:(0,t.w5)((()=>[v])),_:1})]),(0,s.SU)(U)?((0,t.wg)(),(0,t.j4)((0,s.SU)(i.Z),{key:0,"validation-errors":(0,s.SU)(U)},null,8,["validation-errors"])):(0,t.kq)("",!0),(0,t._)("form",{action:"",onSubmit:(0,o.iM)(x,["prevent"])},[(0,t._)("fieldset",_,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>k.name=e),type:"text",class:"form-control form-control-lg",placeholder:"Username"},null,512),[[o.nr,k.name,void 0,{trim:!0}]])]),(0,t._)("fieldset",b,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>k.email=e),type:"email",class:"form-control form-control-lg",placeholder:"Email"},null,512),[[o.nr,k.email]])]),(0,t._)("fieldset",h,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>k.password=e),type:"password",class:"form-control form-control-lg",placeholder:"Password"},null,512),[[o.nr,k.password]])]),(0,t._)("button",{type:"submit",class:"btn btn-lg btn-primary pull-xs-right",disabled:(0,s.SU)(S)},"Sign up",8,y)],40,w)])])])])}}};const S=k;var U=S}}]);
//# sourceMappingURL=register.c38d3b85.js.map