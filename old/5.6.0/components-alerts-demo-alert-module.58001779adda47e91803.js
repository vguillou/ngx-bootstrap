(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+sp4":function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoAlertBasicComponent {}\n"},"/qBw":function(t,e,n){"use strict";n.r(e),e.default='<div *ngFor="let alert of alerts">\n  <alert [type]="alert.type"><span [innerHtml]="alert.msg"></span></alert>\n</div>\n'},"0gxi":function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-dismiss',\n  templateUrl: './dismiss.html'\n})\nexport class DemoAlertDismissComponent {\n  dismissible = true;\n  defaultAlerts: any[] = [\n    {\n      type: 'success',\n      msg: `You successfully read this important alert message.`\n    },\n    {\n      type: 'info',\n      msg: `This alert needs your attention, but it's not super important.`\n    },\n    {\n      type: 'danger',\n      msg: `Better check yourself, you're not looking too good.`\n    }\n  ];\n  alerts = this.defaultAlerts;\n\n  reset(): void {\n    this.alerts = this.defaultAlerts;\n  }\n\n  onClosed(dismissedAlert: any): void {\n    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);\n  }\n}\n"},"25MS":function(t,e,n){"use strict";n.r(e),e.default='<alert type="success">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n<alert type="info">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</alert>\n<alert type="warning">\n  <strong>Warning!</strong> Better check yourself, you\'re not looking too good.\n</alert>\n<alert type="danger">\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</alert>\n'},"3R/t":function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\nimport { AlertConfig } from 'ngx-bootstrap/alert';\n\n// such override allows to keep some initial values\n\nexport function getAlertConfig(): AlertConfig {\n  return Object.assign(new AlertConfig(), { type: 'success' });\n}\n\n@Component({\n  selector: 'demo-alert-config',\n  templateUrl: './config.html',\n  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]\n})\nexport class DemoAlertConfigComponent {}\n"},"4QJV":function(t,e,n){"use strict";n.r(e),e.default='<alert type="success">\n  <h4 class="alert-heading">Well done!</h4>\n  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n</alert>\n'},"4ZZ2":function(t,e,n){"use strict";n.r(e),e.default='<p>If you missed alert under me, just press <code>Add more</code> button</p>\n<div *ngFor="let alert of alerts">\n  <alert [type]="alert.type" [dismissOnTimeout]="alert.timeout" (onClosed)="onClosed(alert)">{{ alert.msg }}</alert>\n</div>\n<button type="button" class="btn btn-primary" (click)="add()">Add more</button>\n'},"50XX":function(t,e,n){"use strict";n.r(e),e.default="// RECOMMENDED\nimport { AlertModule } from 'ngx-bootstrap/alert';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { AlertModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [AlertModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},"80s3":function(t,e,n){"use strict";n.r(e),e.default='<div *ngFor="let alert of alerts">\n  <alert [type]="alert.type" [dismissible]="dismissible" (onClosed)="onClosed(alert)">{{ alert.msg }}</alert>\n</div>\n<button type="button" class="btn btn-primary" (click)="dismissible = !dismissible">Toggle dismissible</button>\n<button type="button" class="btn btn-primary" (click)="reset()">Reset</button>\n'},Biq7:function(t,e,n){"use strict";n.r(e),e.default='<alert type="success">{{messages[index]}}</alert>\n\n<div *ngIf="index !== messages.length -1; else elseBlock">\n  <button class="btn btn-primary" (click)="changeText()">Change text</button>\n</div>\n<ng-template #elseBlock>\n  <button class="btn btn-primary" (click)="index = 0">Reset</button>\n</ng-template>\n'},"D7w+":function(t,e,n){"use strict";n.r(e),e.default='<alert type="success">\n  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.\n</alert>\n<alert type="info">\n  <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it\'s not super important.\n</alert>\n<alert type="warning">\n  <strong>Warning!</strong> Better check yourself, you\'re <a href="#" class="alert-link">not looking too good</a>.\n</alert>\n<alert type="danger">\n  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.\n</alert>\n'},DpZG:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\nimport { AlertComponent } from 'ngx-bootstrap/alert/alert.component';\n\n@Component({\n  selector: 'demo-alert-timeout',\n  templateUrl: './dismiss-on-timeout.html'\n})\nexport class DemoAlertTimeoutComponent {\n  alerts: any[] = [{\n    type: 'success',\n    msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,\n    timeout: 5000\n  }];\n\n  add(): void {\n    this.alerts.push({\n      type: 'info',\n      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,\n      timeout: 5000\n    });\n  }\n\n  onClosed(dismissedAlert: AlertComponent): void {\n    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);\n  }\n}\n"},SQCk:function(t,e,n){"use strict";n.r(e),e.default='<alert type="md-local">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n'},XPdg:function(t,e,n){"use strict";n.r(e);var o=n("Valr"),s=n("DUip"),r=n("mrSG"),i=n("TYT/"),c=n("rpEJ"),l=function(){function t(){this.type="warning",this.dismissible=!1,this.dismissOnTimeout=void 0}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(i.Wb)({token:t,factory:t.\u0275fac}),t}();function a(t,e){if(1&t){var n=Object(i.hc)();Object(i.gc)(0,"button",2),Object(i.oc)("click",(function(){return Object(i.Jc)(n),Object(i.qc)(2).close()})),Object(i.gc)(1,"span",3),Object(i.Tc)(2,"\xd7"),Object(i.fc)(),Object(i.gc)(3,"span",4),Object(i.Tc)(4,"Close"),Object(i.fc)(),Object(i.fc)()}}function u(t,e){if(1&t&&(Object(i.gc)(0,"div",1),Object(i.Rc)(1,a,5,0,"ng-template",0),Object(i.uc)(2),Object(i.fc)()),2&t){var n=Object(i.qc)();Object(i.Qb)("alert alert-"+n.type),Object(i.wc)("ngClass",n.classes),Object(i.Ob)(1),Object(i.wc)("ngIf",n.dismissible)}}var p=["*"],m=function(){function t(t,e){var n=this;this.changeDetection=e,this.type="warning",this.dismissible=!1,this.isOpen=!0,this.onClose=new i.r,this.onClosed=new i.r,this.classes="",this.dismissibleChange=new i.r,Object.assign(this,t),this.dismissibleChange.subscribe((function(t){n.classes=n.dismissible?"alert-dismissible":"",n.changeDetection.markForCheck()}))}return t.prototype.ngOnInit=function(){var t=this;this.dismissOnTimeout&&setTimeout((function(){return t.close()}),parseInt(this.dismissOnTimeout,10))},t.prototype.close=function(){this.isOpen&&(this.onClose.emit(this),this.isOpen=!1,this.changeDetection.markForCheck(),this.onClosed.emit(this))},t.\u0275fac=function(e){return new(e||t)(Object(i.ac)(l),Object(i.ac)(i.i))},t.\u0275cmp=Object(i.Ub)({type:t,selectors:[["alert"],["bs-alert"]],inputs:{type:"type",dismissible:"dismissible",dismissOnTimeout:"dismissOnTimeout",isOpen:"isOpen"},outputs:{onClose:"onClose",onClosed:"onClosed"},ngContentSelectors:p,decls:1,vars:1,consts:[[3,"ngIf"],["role","alert",3,"ngClass"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"sr-only"]],template:function(t,e){1&t&&(Object(i.vc)(),Object(i.Rc)(0,u,3,4,"ng-template",0)),2&t&&Object(i.wc)("ngIf",e.isOpen)},directives:[o.t,o.q],encapsulation:2,changeDetection:0}),Object(r.b)([Object(c.b)(),Object(r.d)("design:type",Object)],t.prototype,"dismissible",void 0),t}(),d=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[l]}},t.\u0275mod=Object(i.Yb)({type:t}),t.\u0275inj=Object(i.Xb)({factory:function(e){return new(e||t)},imports:[[o.c]]}),t}(),f=n("k3/p"),g=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-basic"]],decls:16,vars:0,consts:[["type","success"],["type","info"],["type","warning"],["type","danger"]],template:function(t,e){1&t&&(i.gc(0,"alert",0),i.gc(1,"strong"),i.Tc(2,"Well done!"),i.fc(),i.Tc(3," You successfully read this important alert message.\n"),i.fc(),i.gc(4,"alert",1),i.gc(5,"strong"),i.Tc(6,"Heads up!"),i.fc(),i.Tc(7," This alert needs your attention, but it's not super important.\n"),i.fc(),i.gc(8,"alert",2),i.gc(9,"strong"),i.Tc(10,"Warning!"),i.fc(),i.Tc(11," Better check yourself, you're not looking too good.\n"),i.fc(),i.gc(12,"alert",3),i.gc(13,"strong"),i.Tc(14,"Oh snap!"),i.fc(),i.Tc(15," Change a few things up and try submitting again.\n"),i.fc())},directives:[m],encapsulation:2}),t}(),h=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-link"]],decls:27,vars:0,consts:[["type","success"],["href","#",1,"alert-link"],["type","info"],["type","warning"],["type","danger"]],template:function(t,e){1&t&&(i.gc(0,"alert",0),i.gc(1,"strong"),i.Tc(2,"Well done!"),i.fc(),i.Tc(3," You successfully read "),i.gc(4,"a",1),i.Tc(5,"this important alert message"),i.fc(),i.Tc(6,".\n"),i.fc(),i.gc(7,"alert",2),i.gc(8,"strong"),i.Tc(9,"Heads up!"),i.fc(),i.Tc(10," This "),i.gc(11,"a",1),i.Tc(12,"alert needs your attention"),i.fc(),i.Tc(13,", but it's not super important.\n"),i.fc(),i.gc(14,"alert",3),i.gc(15,"strong"),i.Tc(16,"Warning!"),i.fc(),i.Tc(17," Better check yourself, you're "),i.gc(18,"a",1),i.Tc(19,"not looking too good"),i.fc(),i.Tc(20,".\n"),i.fc(),i.gc(21,"alert",4),i.gc(22,"strong"),i.Tc(23,"Oh snap!"),i.fc(),i.gc(24,"a",1),i.Tc(25,"Change a few things up"),i.fc(),i.Tc(26," and try submitting again.\n"),i.fc())},directives:[m],encapsulation:2}),t}(),y=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-content"]],decls:7,vars:0,consts:[["type","success"],[1,"alert-heading"],[1,"mb-0"]],template:function(t,e){1&t&&(i.gc(0,"alert",0),i.gc(1,"h4",1),i.Tc(2,"Well done!"),i.fc(),i.gc(3,"p"),i.Tc(4,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),i.fc(),i.gc(5,"p",2),i.Tc(6,"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."),i.fc(),i.fc())},directives:[m],encapsulation:2}),t}();function b(t,e){if(1&t){var n=i.hc();i.gc(0,"div"),i.gc(1,"alert",2),i.oc("onClosed",(function(){i.Jc(n);var t=e.$implicit;return i.qc().onClosed(t)})),i.Tc(2),i.fc(),i.fc()}if(2&t){var o=e.$implicit,s=i.qc();i.Ob(1),i.wc("type",o.type)("dismissible",s.dismissible),i.Ob(1),i.Uc(o.msg)}}var C=function(){function t(){this.dismissible=!0,this.defaultAlerts=[{type:"success",msg:"You successfully read this important alert message."},{type:"info",msg:"This alert needs your attention, but it's not super important."},{type:"danger",msg:"Better check yourself, you're not looking too good."}],this.alerts=this.defaultAlerts}return t.prototype.reset=function(){this.alerts=this.defaultAlerts},t.prototype.onClosed=function(t){this.alerts=this.alerts.filter((function(e){return e!==t}))},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-dismiss"]],decls:5,vars:1,consts:[[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"click"],[3,"type","dismissible","onClosed"]],template:function(t,e){1&t&&(i.Rc(0,b,3,3,"div",0),i.gc(1,"button",1),i.oc("click",(function(){return e.dismissible=!e.dismissible})),i.Tc(2,"Toggle dismissible"),i.fc(),i.gc(3,"button",1),i.oc("click",(function(){return e.reset()})),i.Tc(4,"Reset"),i.fc()),2&t&&i.wc("ngForOf",e.alerts)},directives:[o.s,m],encapsulation:2}),t}(),T=n("E1rE");function w(t,e){if(1&t&&(i.gc(0,"div"),i.gc(1,"alert",1),i.bc(2,"span",2),i.fc(),i.fc()),2&t){var n=e.$implicit;i.Ob(1),i.wc("type",n.type),i.Ob(1),i.wc("innerHtml",n.msg,i.Kc)}}var v=function(){function t(t){this.alerts=[{type:"success",msg:"<strong>Well done!</strong> You successfully read this important alert message."},{type:"info",msg:"<strong>Heads up!</strong> This alert needs your attention, but it's not super important."},{type:"danger",msg:"<strong>Warning!</strong> Better check yourself, you're not looking too good."}],this.alerts=this.alerts.map((function(e){return{type:e.type,msg:t.sanitize(i.T.HTML,e.msg)}}))}return t.\u0275fac=function(e){return new(e||t)(i.ac(T.b))},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-dynamic-html"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"type"],[3,"innerHtml"]],template:function(t,e){1&t&&i.Rc(0,w,3,2,"div",0),2&t&&i.wc("ngForOf",e.alerts)},directives:[o.s,m],encapsulation:2}),t}();function O(t,e){if(1&t){var n=i.hc();i.gc(0,"div"),i.gc(1,"button",3),i.oc("click",(function(){return i.Jc(n),i.qc().changeText()})),i.Tc(2,"Change text"),i.fc(),i.fc()}}function k(t,e){if(1&t){var n=i.hc();i.gc(0,"button",3),i.oc("click",(function(){return i.Jc(n),i.qc().index=0})),i.Tc(1,"Reset"),i.fc()}}var A=function(){function t(){this.index=0,this.messages=["You successfully read this important alert message.","Now this text is different from what it was before. Go ahead and click the button one more time","Well done! Click reset button and you'll see the first message"]}return t.prototype.changeText=function(){this.messages.length-1!==this.index&&this.index++},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-content-html"]],decls:5,vars:3,consts:[["type","success"],[4,"ngIf","ngIfElse"],["elseBlock",""],[1,"btn","btn-primary",3,"click"]],template:function(t,e){if(1&t&&(i.gc(0,"alert",0),i.Tc(1),i.fc(),i.Rc(2,O,3,0,"div",1),i.Rc(3,k,2,0,"ng-template",null,2,i.Sc)),2&t){var n=i.Gc(4);i.Ob(1),i.Uc(e.messages[e.index]),i.Ob(1),i.wc("ngIf",e.index!==e.messages.length-1)("ngIfElse",n)}},directives:[m,o.t],encapsulation:2}),t}();function x(t,e){if(1&t){var n=i.hc();i.gc(0,"div"),i.gc(1,"alert",2),i.oc("onClosed",(function(){i.Jc(n);var t=e.$implicit;return i.qc().onClosed(t)})),i.Tc(2),i.fc(),i.fc()}if(2&t){var o=e.$implicit;i.Ob(1),i.wc("type",o.type)("dismissOnTimeout",o.timeout),i.Ob(1),i.Uc(o.msg)}}var j=function(){function t(){this.alerts=[{type:"success",msg:"Well done! You successfully read this important alert message. (added: "+(new Date).toLocaleTimeString()+")",timeout:5e3}]}return t.prototype.add=function(){this.alerts.push({type:"info",msg:"This alert will be closed in 5 seconds (added: "+(new Date).toLocaleTimeString()+")",timeout:5e3})},t.prototype.onClosed=function(t){this.alerts=this.alerts.filter((function(e){return e!==t}))},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-timeout"]],decls:8,vars:1,consts:[[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"click"],[3,"type","dismissOnTimeout","onClosed"]],template:function(t,e){1&t&&(i.gc(0,"p"),i.Tc(1,"If you missed alert under me, just press "),i.gc(2,"code"),i.Tc(3,"Add more"),i.fc(),i.Tc(4," button"),i.fc(),i.Rc(5,x,3,3,"div",0),i.gc(6,"button",1),i.oc("click",(function(){return e.add()})),i.Tc(7,"Add more"),i.fc()),2&t&&(i.Ob(5),i.wc("ngForOf",e.alerts))},directives:[o.s,m],encapsulation:2}),t}(),D=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-styling-global"]],decls:4,vars:0,consts:[["type","md-color"]],template:function(t,e){1&t&&(i.gc(0,"alert",0),i.gc(1,"strong"),i.Tc(2,"Well done!"),i.fc(),i.Tc(3," You successfully read this important alert message.\n"),i.fc())},directives:[m],styles:["\n  .alert-md-color {\n    background-color: #7B1FA2;\n    border-color: #4A148C;\n    color: #fff;\n  }\n"],encapsulation:2}),t}(),W=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-styling-local"]],decls:4,vars:0,consts:[["type","md-local"]],template:function(t,e){1&t&&(i.gc(0,"alert",0),i.gc(1,"strong"),i.Tc(2,"Well done!"),i.fc(),i.Tc(3," You successfully read this important alert message.\n"),i.fc())},directives:[m],styles:["[_nghost-%COMP%]     .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }"]}),t}();function U(){return Object.assign(new l,{type:"success"})}var Y=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["demo-alert-config"]],features:[i.Nb([{provide:l,useFactory:U}])],decls:8,vars:0,consts:[["type","info"]],template:function(t,e){1&t&&(i.gc(0,"alert"),i.gc(1,"strong"),i.Tc(2,"Well done!"),i.fc(),i.Tc(3," You successfully read this important alert message.\n"),i.fc(),i.gc(4,"alert",0),i.gc(5,"strong"),i.Tc(6,"Heads up!"),i.fc(),i.Tc(7," This alert needs your attention, but it's not super important.\n"),i.fc())},directives:[m],encapsulation:2}),t}(),S=n("ClAA"),B=n("y20O"),F=n("nk7K"),M=n("l3GJ"),R=[{name:"Usage",anchor:"usage",outlet:S.a,content:{doc:n("50XX")}},{name:"Examples",anchor:"examples",outlet:B.a,content:[{title:"Basic",anchor:"basic",description:"<p>Alerts are available for any length of text, as well as an optional dismiss\n          button. For proper styling, use one of the four <strong>required</strong>\n          contextual classes (e.g., <code>.alert-success</code>). For inline\n          dismissal, use the <code>dismissible</code> property.</p>",component:n("+sp4"),html:n("25MS"),outlet:g},{title:"Link color",anchor:"link-color",description:"<p>Use the <code>.alert-link</code> utility class to quickly provide matching\n          colored links within any alert.</p>",component:n("ZI10"),html:n("D7w+"),outlet:h},{title:"Additional content",anchor:"additional-content",description:"<p>Alerts can also contain additional HTML elements like headings and\n          paragraphs.</p>",component:n("mNWG"),html:n("4QJV"),outlet:y},{title:"Dismissing",anchor:"dismissing",description:"<p>Alerts have <code>dismiss</code> option. Enabling it will show close button\n          to the right of the alert.</p>",component:n("0gxi"),html:n("80s3"),outlet:C},{title:"Dynamic html",anchor:"dynamic-html",description:"<p>Sometimes you will need to show dynamically generated html in alerts, here\n          is how you can make it. And don't forget to sanitize your html.</p>",component:n("uSVt"),html:n("/qBw"),outlet:v},{title:"Dynamic content",anchor:"dynamic-content",description:"<p>Alerts fully support bindings.</p>",component:n("oxdj"),html:n("Biq7"),outlet:A},{title:"Dismiss on timeout",anchor:"dismiss-on-timeout",description:"<p>You can simply set timeout in milliseconds to <code>dismissOnTimeout</code>\n          property to create self closable alerts.</p>",component:n("DpZG"),html:n("4ZZ2"),outlet:j},{title:"Global styling",anchor:"global-styling",description:"<p>You can add additional types of alerts globally.</p>",component:n("qMQJ"),html:n("aSi3"),outlet:D},{title:"Component level styling",anchor:"local-styling",description:"<p>You can add additional types of alerts directly to containing component</p>",component:n("tpBY"),html:n("SQCk"),outlet:W},{title:"Configuring defaults",anchor:"configuration",description:"<p>It is possible to override default alert config partially or completely.</p>",component:n("3R/t"),html:n("XY5g"),outlet:Y}]},{name:"API Reference",anchor:"api-reference",outlet:F.a,content:[{title:"AlertComponent",anchor:"alert-component",outlet:M.b},{title:"AlertConfig",anchor:"alert-config",outlet:M.c}]}],q=n("ybC4"),I=n("oxqd"),E=[{path:"",component:function(){function t(){this.name="Alerts",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/alert",this.componentContent=R}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ub({type:t,selectors:[["alert-section"]],decls:16,vars:4,consts:[[3,"name","src","componentContent"],[1,"prettyprint","lang-bash","prettyprinted"],[1,"pln"],[1,"pun"],[3,"content"]],template:function(t,e){1&t&&(i.gc(0,"demo-section",0),i.gc(1,"p"),i.Tc(2,"Provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),i.fc(),i.gc(3,"p"),i.Tc(4,"The easiest way to add an alerts component to your app (will be added to the root module)"),i.fc(),i.gc(5,"pre",1),i.gc(6,"span",2),i.Tc(7,"ng add ngx"),i.fc(),i.gc(8,"span",3),i.Tc(9,"-"),i.fc(),i.gc(10,"span",2),i.Tc(11,"bootstrap "),i.fc(),i.Tc(12," --component "),i.gc(13,"span",2),i.Tc(14,"alerts"),i.fc(),i.fc(),i.bc(15,"docs-section",4),i.fc()),2&t&&(i.wc("name",e.name)("src",e.src)("componentContent",e.componentContent),i.Ob(15),i.wc("content",e.componentContent))},directives:[q.a,I.a],encapsulation:2,changeDetection:0}),t}()}];n.d(e,"DemoAlertsModule",(function(){return H}));var H=function(){function t(){}return t.routes=E,t.\u0275mod=i.Yb({type:t}),t.\u0275inj=i.Xb({factory:function(e){return new(e||t)},imports:[[d.forRoot(),o.c,f.a,s.i.forChild(E)]]}),t}()},XY5g:function(t,e,n){"use strict";n.r(e),e.default='<alert>\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n<alert type="info">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</alert>\n'},ZI10:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-link',\n  templateUrl: './link.html'\n})\nexport class DemoAlertLinkComponent {}\n"},aSi3:function(t,e,n){"use strict";n.r(e),e.default='<style>\n  .alert-md-color {\n    background-color: #7B1FA2;\n    border-color: #4A148C;\n    color: #fff;\n  }\n</style>\n<alert type="md-color">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n'},mNWG:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-content',\n  templateUrl: './content.html'\n})\nexport class DemoAlertContentComponent {}\n"},oxdj:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-content-html',\n  templateUrl: './dynamic-content.html'\n})\nexport class DemoAlertDynamicContentComponent {\n  index = 0;\n  messages = [\n    'You successfully read this important alert message.',\n    'Now this text is different from what it was before. Go ahead and click the button one more time',\n    'Well done! Click reset button and you\\'ll see the first message'\n  ];\n\n  changeText() {\n    if (this.messages.length - 1 !== this.index) {\n      this.index++;\n    }\n  }\n}\n"},qMQJ:function(t,e,n){"use strict";n.r(e),e.default="import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-styling-global',\n  templateUrl: './styling-global.html',\n  encapsulation: ViewEncapsulation.None\n})\nexport class DemoAlertStylingGlobalComponent {}\n"},tpBY:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-styling-local',\n  templateUrl: './styling-local.html',\n  /* tslint:disable no-unused-css*/\n  styles: [\n    `\n  :host >>> .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  `\n  ]\n})\nexport class DemoAlertStylingLocalComponent {}\n"},uSVt:function(t,e,n){"use strict";n.r(e),e.default="import { Component, SecurityContext } from '@angular/core';\nimport { DomSanitizer } from '@angular/platform-browser';\n\n@Component({\n  selector: 'demo-alert-dynamic-html',\n  templateUrl: './dynamic-html.html'\n})\nexport class DemoAlertDynamicHtmlComponent {\n  alerts: any = [\n    {\n      type: 'success',\n      msg: `<strong>Well done!</strong> You successfully read this important alert message.`\n    },\n    {\n      type: 'info',\n      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`\n    },\n    {\n      type: 'danger',\n      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`\n    }\n  ];\n\n  constructor(sanitizer: DomSanitizer) {\n    this.alerts = this.alerts.map((alert: any) => ({\n      type: alert.type,\n      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)\n    }));\n  }\n}\n"}}]);