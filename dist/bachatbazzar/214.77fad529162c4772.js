"use strict";(self.webpackChunkbachatbazzar=self.webpackChunkbachatbazzar||[]).push([[214],{8214:(f,s,c)=>{c.r(s),c.d(s,{ContactModule:()=>h});var l=c(9808),g=c(5020),o=c(3075),t=c(5e3),r=c(520),d=c(5980);let m=(()=>{class n{constructor(e,a){this.http=e,this.authservice=a,this.userId=this.authservice.getuserId(),this._postContactus=`https://bachatbazzar.herokuapp.com/bachatbazzar/contact/users/${this.userId}/postcontact`}postcontact(e){return this.http.post(this._postContactus,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(r.eN),t.LFG(d.r))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var p=c(3838);const _=[{path:"",component:(()=>{class n{constructor(e,a){this.contactsevice=e,this.toast=a,this.contactform=new o.cw({name:new o.NI("",[o.kI.required]),email:new o.NI("",[o.kI.required,o.kI.email,o.kI.pattern(/^[a-z0-9]{1,}@g(oogle)?mail\.com$/)]),phone:new o.NI("",[o.kI.required,o.kI.minLength(10),o.kI.maxLength(10)]),Subject:new o.NI("",[o.kI.required]),message:new o.NI("",[o.kI.required])})}ngOnInit(){}get f(){return this.contactform.controls}sendmessage(){this.contactsevice.postcontact(this.contactform.value).subscribe(e=>{this.contactform.reset(),this.toast.success({detail:"Success",summary:"Message Successfully send",duration:5e3})},e=>{this.toast.error({detail:"WARNING",summary:`${e.error.message}`,duration:5e3})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m),t.Y36(p.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact"]],decls:132,vars:2,consts:[[1,"contact-address-area"],[1,"container"],[1,"sec-title-style1","text-center","max-width"],[1,"title"],[1,"text"],[1,"decor-left"],[1,"decor-right"],[1,"bottom-text"],[1,"contact-address-box","row"],[1,"col-sm-4","single-contact-address-box","text-center"],[1,"icon-holder"],[1,"icon-clock-1"],[1,"path1"],[1,"path2"],[1,"path3"],[1,"path4"],[1,"path5"],[1,"path6"],[1,"path7"],[1,"path8"],[1,"path9"],[1,"path10"],[1,"path11"],[1,"path12"],[1,"path13"],[1,"path14"],[1,"path15"],[1,"path16"],[1,"path17"],[1,"path18"],[1,"path19"],[1,"path20"],[1,"col-sm-4","single-contact-address-box","main-branch"],[1,"inner"],[1,"icon-question-2"],[1,"contact-info-area"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"contact-form"],[1,"col-xl-12"],[1,"sec-title-style1","float-left"],[1,"text-box","float-right"],[1,"inner-box"],["id","contact-form","name","contact_form","action","inc/sendmail.php","method","post",1,"default-form",3,"formGroup"],[1,"col-xl-6","col-lg-12"],[1,"col-xl-6"],[1,"input-box"],["type","text","name","form_name","value","","formControlName","name","placeholder","Name","required",""],["type","text","name","form_phone","value","","formControlName","phone","placeholder","Phone"],["type","email","name","form_email","value","","formControlName","email","placeholder","Email","required",""],["type","text","name","form_subject","value","","placeholder","Subject","formControlName","Subject"],["name","form_message","placeholder","Your Message...","required","","formControlName","message"],[1,"button-box"],["id","form_botcheck","name","form_botcheck","type","hidden","value","",1,"form-control"],["type","submit",3,"disabled","click"],[1,"flaticon-next"]],template:function(e,a){1&e&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._uU(4,"Contact Us"),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t._UZ(7,"span"),t.qZA(),t.TgZ(8,"p"),t._uU(9,"Quick Contact"),t.qZA(),t.TgZ(10,"div",6),t._UZ(11,"span"),t.qZA(),t.qZA(),t.TgZ(12,"div",7),t.TgZ(13,"p"),t._uU(14," BachatBazzar is proud to be the name that nearly 1 million homeowners have trusted since 1992 for home improvement and repair, providing Ecommerce product . covering various region. "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",8),t.TgZ(16,"div",9),t.TgZ(17,"div",10),t.TgZ(18,"span",11),t._UZ(19,"span",12),t._UZ(20,"span",13),t._UZ(21,"span",14),t._UZ(22,"span",15),t._UZ(23,"span",16),t._UZ(24,"span",17),t._UZ(25,"span",18),t._UZ(26,"span",19),t._UZ(27,"span",20),t._UZ(28,"span",21),t._UZ(29,"span",22),t._UZ(30,"span",23),t._UZ(31,"span",24),t._UZ(32,"span",25),t._UZ(33,"span",26),t._UZ(34,"span",27),t._UZ(35,"span",28),t._UZ(36,"span",29),t._UZ(37,"span",30),t._UZ(38,"span",31),t.qZA(),t.qZA(),t.TgZ(39,"h3"),t._uU(40,"Lorem Ipsum"),t.qZA(),t.TgZ(41,"h2"),t._uU(42,"Lorem Ipsum is simply dummy"),t.qZA(),t.qZA(),t.TgZ(43,"div",32),t.TgZ(44,"h3"),t._uU(45,"Lorem Ipsum"),t.qZA(),t.TgZ(46,"div",33),t.TgZ(47,"ul"),t.TgZ(48,"li"),t.TgZ(49,"div",3),t.TgZ(50,"h4"),t._uU(51,"Address:"),t.qZA(),t.qZA(),t.TgZ(52,"div",4),t.TgZ(53,"p"),t._uU(54," Lorem Ipsum, 40C, Lorem Ipsum dummy,"),t._UZ(55,"br"),t._uU(56," Lorem Ipsum, Ch 98054 "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"li"),t.TgZ(58,"div",3),t.TgZ(59,"h4"),t._uU(60,"Ph & Fax:"),t.qZA(),t.qZA(),t.TgZ(61,"div",4),t.TgZ(62,"p"),t._uU(63," +123 456 789 "),t._UZ(64,"br"),t._uU(65," test@info.com "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(66,"li"),t.TgZ(67,"div",3),t.TgZ(68,"h4"),t._uU(69,"Office Hrs:"),t.qZA(),t.qZA(),t.TgZ(70,"div",4),t.TgZ(71,"p"),t._uU(72," Mon-Fri: 9:30am - 6:30pm"),t._UZ(73,"br"),t._uU(74," Sat-Sun: Closed "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(75,"div",9),t.TgZ(76,"div",10),t.TgZ(77,"span",34),t._UZ(78,"span",12),t._UZ(79,"span",13),t._UZ(80,"span",14),t._UZ(81,"span",15),t.qZA(),t.qZA(),t.TgZ(82,"h3"),t._uU(83,"Lorem Ipsum"),t.qZA(),t.TgZ(84,"h2"),t._uU(85,"Lorem Ipsum is simply dummy"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(86,"section",35),t.TgZ(87,"div",1),t.TgZ(88,"div",36),t.TgZ(89,"div",37),t.TgZ(90,"div",38),t.TgZ(91,"div",36),t.TgZ(92,"div",39),t.TgZ(93,"div",40),t.TgZ(94,"div",3),t._uU(95,"Send Your Message"),t.qZA(),t.TgZ(96,"div",4),t.TgZ(97,"div",5),t._UZ(98,"span"),t.qZA(),t.TgZ(99,"p"),t._uU(100,"Contact Form"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(101,"div",41),t.TgZ(102,"p"),t._uU(103," Lorem Ipsum is simply dummy text of the printing and typesetting industry. "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(104,"div",42),t.TgZ(105,"form",43),t.TgZ(106,"div",36),t.TgZ(107,"div",44),t.TgZ(108,"div",36),t.TgZ(109,"div",45),t.TgZ(110,"div",46),t._UZ(111,"input",47),t.qZA(),t.TgZ(112,"div",46),t._UZ(113,"input",48),t.qZA(),t.qZA(),t.TgZ(114,"div",45),t.TgZ(115,"div",46),t._UZ(116,"input",49),t.qZA(),t.qZA(),t.qZA(),t.TgZ(117,"div",36),t.TgZ(118,"div",39),t.TgZ(119,"div",46),t._UZ(120,"input",50),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(121,"div",44),t.TgZ(122,"div",46),t._UZ(123,"textarea",51),t.qZA(),t.TgZ(124,"div",52),t._UZ(125,"input",53),t.TgZ(126,"button",54),t.NdJ("click",function(){return a.sendmessage()}),t._uU(127," Send Message"),t._UZ(128,"span",55),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(129,"br"),t._UZ(130,"br"),t._UZ(131,"br"),t.qZA()),2&e&&(t.xp6(105),t.Q6J("formGroup",a.contactform),t.xp6(21),t.Q6J("disabled",!a.contactform.valid))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o.Q7],styles:['a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active{text-decoration:none;outline:none}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus{color:#333;text-decoration:none;transition-timing-function:ease-in-out;-ms-transition-timing-function:ease-in-out;-moz-transition-timing-function:ease-in-out;-webkit-transition-timing-function:ease-in-out;-o-transition-timing-function:ease-in-out;transition-duration:.2s;-ms-transition-duration:.2s;-moz-transition-duration:.2s;-webkit-transition-duration:.2s;-o-transition-duration:.2s}ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}img[_ngcontent-%COMP%]{max-width:100%;height:auto}.sec-title-style1[_ngcontent-%COMP%]{position:relative;display:block;margin-top:-9px;padding-bottom:50px}.sec-title-style1.max-width[_ngcontent-%COMP%]{position:relative;display:block;max-width:770px;margin:-9px auto 0;padding-bottom:52px}.sec-title-style1.pabottom50[_ngcontent-%COMP%]{padding-bottom:42px}.sec-title-style1[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:relative;display:block;color:#131313;font-size:36px;line-height:46px;font-weight:700;text-transform:uppercase}.sec-title-style1[_ngcontent-%COMP%]   .title.clr-white[_ngcontent-%COMP%]{color:#fff}.sec-title-style1[_ngcontent-%COMP%]   .decor[_ngcontent-%COMP%]{position:relative;display:block;width:70px;height:5px;margin:5px 0 0}.sec-title-style1[_ngcontent-%COMP%]   .decor[_ngcontent-%COMP%]:before{position:absolute;top:0;right:0;bottom:0;width:5px;height:5px;background:#FFA500;border-radius:50%;content:""}.sec-title-style1[_ngcontent-%COMP%]   .decor[_ngcontent-%COMP%]:after{position:absolute;top:0;right:10px;bottom:0;width:5px;height:5px;background:#FFA500;border-radius:50%;content:""}.sec-title-style1[_ngcontent-%COMP%]   .decor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;width:50px;height:1px;background:#FFA500;margin:2px 0}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:relative;display:block;margin:7px 0 0}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;display:inline-block;padding:0 15px;color:#131313;font-size:14px;line-height:16px;font-weight:700;text-transform:uppercase;margin:0}.sec-title-style1[_ngcontent-%COMP%]   .text.clr-yellow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:orange}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .decor-left[_ngcontent-%COMP%]{position:relative;top:-2px;display:inline-block;width:70px;height:5px;background:transparent}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .decor-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;width:50px;height:1px;background:#FFA500;content:"";margin:2px 0}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .decor-left[_ngcontent-%COMP%]:before{position:absolute;top:0;right:0;bottom:0;width:5px;height:5px;background:#FFA500;border-radius:50%;content:""}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .decor-left[_ngcontent-%COMP%]:after{position:absolute;top:0;right:10px;bottom:0;width:5px;height:5px;background:#FFA500;border-radius:50%;content:""}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .decor-right[_ngcontent-%COMP%]{position:relative;top:-2px;display:inline-block;width:70px;height:5px;background:transparent}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .decor-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;width:50px;height:1px;background:#FFA500;content:"";margin:2px 0}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .decor-right[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;bottom:0;width:5px;height:5px;background:#FFA500;border-radius:50%;content:""}.sec-title-style1[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .decor-right[_ngcontent-%COMP%]:after{position:absolute;top:0;left:10px;bottom:0;width:5px;height:5px;background:#FFA500;border-radius:50%;content:""}.sec-title-style1[_ngcontent-%COMP%]   .bottom-text[_ngcontent-%COMP%]{position:relative;display:block;padding-top:16px}.sec-title-style1[_ngcontent-%COMP%]   .bottom-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#848484;font-size:16px;line-height:26px;font-weight:400;margin:0}.sec-title-style1[_ngcontent-%COMP%]   .bottom-text.clr-gray[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#cdcdcd}.contact-address-area[_ngcontent-%COMP%]{position:relative;display:block;background:#ffffff;padding:50px 0 120px}.contact-address-area[_ngcontent-%COMP%]   .sec-title-style1.max-width[_ngcontent-%COMP%]{padding-bottom:72px}.contact-address-box[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row;flex-wrap:wrap;align-items:center}.single-contact-address-box[_ngcontent-%COMP%]{position:relative;display:block;background:#131313;padding:85px 30px 77px}.single-contact-address-box[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%]{position:relative;display:block;padding-bottom:24px}.single-contact-address-box[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{font-size:75px}.single-contact-address-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;margin:0 0 9px}.single-contact-address-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:orange;font-size:24px;font-weight:600;margin:0 0 19px}.single-contact-address-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.single-contact-address-box.main-branch[_ngcontent-%COMP%]{background:#FFA500;padding:53px 30px 51px;margin-top:-20px;margin-bottom:-20px}.single-contact-address-box.main-branch[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#131313;font-size:18px;font-weight:700;margin:0 0 38px;text-transform:uppercase;text-align:center}.single-contact-address-box.main-branch[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{position:relative;display:block}.single-contact-address-box.main-branch[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:relative;display:block;overflow:hidden}.single-contact-address-box.main-branch[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;display:block;padding-left:110px;border-bottom:1px solid #737373;padding-bottom:23px;margin-bottom:24px}.single-contact-address-box.main-branch[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border:none;margin-bottom:0;padding-bottom:0}.single-contact-address-box.main-branch[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:absolute;top:2px;left:0;display:inline-block}.single-contact-address-box.main-branch[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#131313;font-size:18px;font-weight:600;line-height:24px;text-transform:capitalize;border-bottom:2px solid #a5821e}.single-contact-address-box.main-branch[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:relative;display:block}.single-contact-address-box.main-branch[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#131313;font-size:16px;line-height:24px;font-weight:600;margin:0}.contact-info-area[_ngcontent-%COMP%]{position:relative;display:block;background:#ffffff}.contact-form[_ngcontent-%COMP%]{position:relative;display:block;background:#ffffff;padding:100px 60px 80px;box-shadow:0 3px 8px 2px #ededed;z-index:3}.contact-form[_ngcontent-%COMP%]   .sec-title-style1[_ngcontent-%COMP%]{position:relative;display:block;padding-bottom:51px;width:50%}.contact-form[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]{position:relative;display:block;margin-top:19px;width:50%}.contact-form[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#848484;line-height:26px;margin:0}.contact-form[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]{position:relative;display:block;background:#ffffff}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{position:relative;display:block}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{position:relative;display:block;background:#ffffff;border:1px solid #eeeeee;width:100%;height:55px;font-size:16px;padding-left:19px;padding-right:15px;border-radius:0;margin-bottom:20px;transition:all .5s ease}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:130px;padding:14px 15px 15px 19px}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{color:#222;border-color:#d4d4d4}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus{color:#222;border-color:#d4d4d4}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{color:#222;border-color:#d4d4d4}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-webkit-input-placeholder{color:#848484}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:-moz-placeholder{color:#848484}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]::-moz-placeholder{color:#848484}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:-ms-input-placeholder{color:#848484}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]::-webkit-input-placeholder{color:#848484}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:-moz-placeholder{color:#848484}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]::-moz-placeholder{color:#848484}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:-ms-input-placeholder{color:#848484}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:relative;display:block;width:100%;background:#FFA500;border:1px solid #FFA500;color:#131313;font-size:16px;line-height:55px;font-weight:600;text-align:center;text-transform:capitalize;transition:all .2s linear;transition-delay:.1s;cursor:pointer}.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#fff;background:#131313}']}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(_)],g.Bz]}),n})();var u=c(8989);let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[{provide:r.TP,useClass:u.N,multi:!0}],imports:[[l.ez,C,o.UX,o.u5,r.JF,p.XF]]}),n})()}}]);