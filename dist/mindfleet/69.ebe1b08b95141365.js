"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[69],{6456:(C,h,l)=>{l.d(h,{Z:()=>d});var d=function(a,p){return void 0===p&&(p=document.body),window.getComputedStyle(p,null).getPropertyValue(a).replace(/^\s/,"")}},5792:(C,h,l)=>{l.d(h,{c:()=>A});var d=l(6456),a=l(1571),p=l(6602),Z=l(7834);function W(c,g){1&c&&a._uU(0,"\n        TYPING TEST\n      ")}function b(c,g){if(1&c&&a._UZ(0,"c-chart",7),2&c){const i=a.oxw();a.Q6J("data",i.data[0])("options",i.options[0])("type","line")}}function t(c,g){1&c&&a._uU(0,"\n        MEMORY TEST\n      ")}function y(c,g){if(1&c&&a._UZ(0,"c-chart",7),2&c){const i=a.oxw();a.Q6J("data",i.data[0])("options",i.options[0])("type","line")}}function f(c,g){1&c&&a._uU(0,"\n        CODING TEST\n      ")}function T(c,g){if(1&c&&a._UZ(0,"c-chart",7),2&c){const i=a.oxw();a.Q6J("data",i.data[0])("options",i.options[0])("type","line")}}function u(c,g){1&c&&a._uU(0,"\n        IQ TEST\n      ")}function v(c,g){if(1&c&&a._UZ(0,"c-chart",7),2&c){const i=a.oxw();a.Q6J("data",i.data[0])("options",i.options[0])("type","line")}}let A=(()=>{class c{constructor(i){this.changeDetectorRef=i,this.data=[],this.options=[],this.labels=["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],this.datasets=[[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,d.Z)("--cui-primary"),pointHoverBorderColor:(0,d.Z)("--cui-primary"),data:[65,59,84,84,51,55,40]}],[{label:"My Second dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,d.Z)("--cui-info"),pointHoverBorderColor:(0,d.Z)("--cui-info"),data:[1,18,9,17,34,22,11]}],[{label:"My Third dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,d.Z)("--cui-warning"),pointHoverBorderColor:(0,d.Z)("--cui-warning"),data:[78,81,80,45,34,12,40],fill:!0}],[{label:"My Fourth dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.7}]],this.optionsDefault={plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}}ngOnInit(){this.setData()}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}setData(){for(let i=0;i<4;i++)this.data[i]={labels:i<3?this.labels.slice(0,7):this.labels,datasets:this.datasets[i]};this.setOptions()}setOptions(){for(let i=0;i<4;i++){const r=JSON.parse(JSON.stringify(this.optionsDefault));switch(i){case 0:this.options.push(r);break;case 1:r.scales.y.min=-9,r.scales.y.max=39,this.options.push(r);break;case 2:r.scales.x={display:!1},r.scales.y={display:!1},r.elements.line.borderWidth=2,r.elements.point.radius=0,this.options.push(r);break;case 3:r.scales.x.grid={display:!1,drawTicks:!1},r.scales.x.grid={display:!1,drawTicks:!1,drawBorder:!1},r.scales.y.min=void 0,r.scales.y.max=void 0,r.elements={},this.options.push(r)}}}clickFunc(i){this.goToLink(i)}goToLink(i){window.open(i,"_blank")}}return c.\u0275fac=function(i){return new(i||c)(a.Y36(a.sBO))},c.\u0275cmp=a.Xpm({type:c,selectors:[["app-widgets-dropdown"]],decls:17,vars:0,consts:[["sm","6","xl","3"],["color","primary","title","Click to try",1,"mb-4",3,"click"],["cTemplateId","widgetValueTemplate"],["cTemplateId","widgetChartTemplate"],["color","info","title","Click to try",1,"mb-4",3,"click"],["color","warning","title","Click to try",1,"mb-4",3,"click"],["color","danger","title","Click to try",1,"mb-4",3,"click"],["height","70",1,"mt-3","mx-3",3,"data","options","type"]],template:function(i,r){1&i&&(a.TgZ(0,"c-row")(1,"c-col",0)(2,"c-widget-stat-a",1),a.NdJ("click",function(){return r.clickFunc("")}),a.YNc(3,W,1,0,"ng-template",2),a.YNc(4,b,1,3,"ng-template",3),a.qZA()(),a.TgZ(5,"c-col",0)(6,"c-widget-stat-a",4),a.NdJ("click",function(){return r.clickFunc("")}),a.YNc(7,t,1,0,"ng-template",2),a.YNc(8,y,1,3,"ng-template",3),a.qZA()(),a.TgZ(9,"c-col",0)(10,"c-widget-stat-a",5),a.NdJ("click",function(){return r.clickFunc("")}),a.YNc(11,f,1,0,"ng-template",2),a.YNc(12,T,1,3,"ng-template",3),a.qZA()(),a.TgZ(13,"c-col",0)(14,"c-widget-stat-a",6),a.NdJ("click",function(){return r.clickFunc("")}),a.YNc(15,u,1,0,"ng-template",2),a.YNc(16,v,1,3,"ng-template",3),a.qZA()()())},dependencies:[p.Yp0,p.iok,p.Eqf,p.y1J,Z.d]}),c})()},2069:(C,h,l)=>{l.r(h),l.d(h,{WidgetsModule:()=>bt});var d=l(6895),a=l(6602),p=l(1334),Z=l(7834),W=l(7642),b=l(593),t=l(1571),y=l(2592);function f(e,n){if(1&e&&(t.O4$(),t.kcU(),t.ynx(0),t.TgZ(1,"c-chart",5,6),t._uU(3),t.qZA(),t.BQk()),2&e){const o=t.MAs(2),s=t.oxw().$implicit,m=t.oxw();t.xp6(1),t.Q6J("data",s.data)("options",m.chartOptions),t.xp6(2),t.Oqu(o.id)}}function T(e,n){if(1&e&&(t.TgZ(0,"c-col",1)(1,"c-widget-stat-d",2),t.O4$(),t._UZ(2,"svg",3),t.YNc(3,f,4,3,"ng-container",4),t.qZA()()),2&e){const o=n.$implicit,s=t.oxw();let m,_;t.xp6(1),t.Akn(null!==(m=o.capBg)&&void 0!==m?m:null),t.Q6J("color",null!==(_=o.color)&&void 0!==_?_:"")("values",o.values),t.xp6(1),t.Q6J("name",o.icon),t.xp6(1),t.Q6J("ngIf",s.withCharts)}}let u=(()=>{class e{constructor(o){this.changeDetectorRef=o,this.chartOptions={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.labels=["January","February","March","April","May","June","July"],this.datasets={borderWidth:2,fill:!0},this.colors={backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",pointBackgroundColor:"rgba(255,255,255,.55)"},this.brandData=[{icon:"cibFacebook",values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],capBg:{"--cui-card-cap-bg":"#3b5998"},labels:[...this.labels],data:{labels:[...this.labels],datasets:[{...this.datasets,data:[65,59,84,84,51,55,40],label:"Facebook",...this.colors}]}},{icon:"cibTwitter",values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],capBg:{"--cui-card-cap-bg":"#00aced"},data:{labels:[...this.labels],datasets:[{...this.datasets,data:[1,13,9,17,34,41,38],label:"Twitter",...this.colors}]}},{icon:"cib-linkedin",values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],capBg:{"--cui-card-cap-bg":"#4875b4"},data:{labels:[...this.labels],datasets:[{...this.datasets,data:[78,81,80,45,34,12,40],label:"LinkedIn",...this.colors}]}},{icon:"cilCalendar",values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}],color:"warning",data:{labels:[...this.labels],datasets:[{...this.datasets,data:[35,23,56,22,97,23,64],label:"Events",...this.colors}]}}]}capStyle(o){return o?{"--cui-card-cap-bg":o}:{}}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets-brand"]],inputs:{withCharts:"withCharts"},decls:2,vars:1,consts:[["sm","6","xl","3",4,"ngFor","ngForOf"],["sm","6","xl","3"],[1,"mb-4",3,"color","values"],["cIcon","","height","52",1,"my-4","text-white",3,"name"],[4,"ngIf"],["type","line",1,"position-absolute","w-100","h-100",3,"data","options"],["chart","cChart"]],template:function(o,s){1&o&&(t.TgZ(0,"c-row"),t.YNc(1,T,4,6,"c-col",0),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",s.brandData))},dependencies:[d.sg,d.O5,a.Yp0,a.iok,a.efQ,p.ar,Z.d]}),e})();var v=l(5792),w=l(6456);let A=(()=>{class e{constructor(o){this.changeDetectorRef=o,this.datasets=[],this.labels=[],this.data=[],this.barOptions={maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.lineOptions={maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.prepareLabels(),this.prepareDatasets(),this.prepareData()}get random(){return Math.floor(61*Math.random()+40)}get randomData(){const o=[];for(let s=0;s<15;s++)o.push(this.random);return o}get baseDatasets(){return[{data:this.randomData,barThickness:"flex",borderColor:"transparent",backgroundColor:"transparent",pointBackgroundColor:"transparent",pointHoverBorderColor:"transparent",borderWidth:1}]}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}prepareData(){for(let o=0;o<6;o++)this.data.push({labels:this.labels,datasets:this.datasets[o]})}prepareLabels(){for(let o=0;o<15;o++)this.labels.push(this.getDayName(o))}prepareDatasets(){const o=[{backgroundColor:"danger"},{backgroundColor:"primary"},{backgroundColor:"dark"},{borderColor:"danger",borderWidth:2},{borderColor:"success",borderWidth:2},{borderColor:"info",borderWidth:2}];for(let s=0;s<6;s++)this.datasets.push(this.getDataset(o[s]))}getDataset({backgroundColor:o="transparent",borderColor:s="transparent",borderWidth:m=1}){const _=this.baseDatasets;return _[0].backgroundColor="transparent"!==o?(0,w.Z)(`--cui-${o}`):o,_[0].borderColor="transparent"!==s?(0,w.Z)(`--cui-${s}`):s,_[0].pointBackgroundColor=(0,w.Z)(`--cui-${s}`),_[0].borderWidth=m,_}getDayName(o=0){const s=navigator.language??navigator.userLanguage??navigator.systemLanguage??navigator.browserLanguage??"en-US",m=new Date(Date.UTC(2e3,1,0));return m.setDate(m.getDate()+o),m.toLocaleDateString(s,{weekday:"short"})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets-e"]],decls:19,vars:24,consts:[["xl","2","lg","4","sm","6"],[1,"mb-4",3,"title","value"],["height","40","width","80",1,"mx-auto",3,"data","options"],["height","40","type","line","width","80",1,"mx-auto",3,"data","options"]],template:function(o,s){1&o&&(t.TgZ(0,"c-row")(1,"c-col",0)(2,"c-widget-stat-e",1),t._UZ(3,"c-chart",2),t.qZA()(),t.TgZ(4,"c-col",0)(5,"c-widget-stat-e",1),t._UZ(6,"c-chart",2),t.qZA()(),t.TgZ(7,"c-col",0)(8,"c-widget-stat-e",1),t._UZ(9,"c-chart",2),t.qZA()(),t.TgZ(10,"c-col",0)(11,"c-widget-stat-e",1),t._UZ(12,"c-chart",3),t.qZA()(),t.TgZ(13,"c-col",0)(14,"c-widget-stat-e",1),t._UZ(15,"c-chart",3),t.qZA()(),t.TgZ(16,"c-col",0)(17,"c-widget-stat-e",1),t._UZ(18,"c-chart",3),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",s.data[0])("options",s.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",s.data[1])("options",s.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",s.data[2])("options",s.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",s.data[3])("options",s.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",s.data[4])("options",s.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",s.data[5])("options",s.lineOptions))},dependencies:[a.Yp0,a.iok,a.gDu,Z.d]}),e})();function J(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",57))}function c(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",58))}function g(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",59))}function i(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",60))}function r(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",57))}function x(e,n){1&e&&(t.TgZ(0,"a",61),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",62),t.qZA())}function U(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",58))}function Q(e,n){1&e&&(t.TgZ(0,"a",61),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",62),t.qZA())}function O(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",59))}function D(e,n){1&e&&(t.TgZ(0,"a",61),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",62),t.qZA())}function k(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",60))}function N(e,n){1&e&&(t.TgZ(0,"a",61),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",62),t.qZA())}function Y(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",57))}function q(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",58))}function I(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",59))}function B(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",63))}function $(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",64))}function M(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function E(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",66))}function S(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function R(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",67))}function L(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function F(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",68))}function P(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function j(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",69))}function V(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function z(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",64))}function H(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function K(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",66))}function X(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function G(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",67))}function tt(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function et(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",68))}function at(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function nt(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",69))}function ot(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function it(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",71))}function st(e,n){1&e&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",72),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function ct(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",64))}function lt(e,n){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function rt(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",66))}function pt(e,n){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function gt(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",67))}function dt(e,n){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function mt(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",68))}function ut(e,n){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function _t(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",69))}function ft(e,n){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}function ht(e,n){1&e&&(t.O4$(),t._UZ(0,"svg",71))}function Zt(e,n){1&e&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&e&&(t.xp6(1),t.Q6J("value",75))}const vt=[{path:"",component:(()=>{class e{constructor(o){this.changeDetectorRef=o}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets"]],decls:167,vars:50,consts:[[1,"mb-4"],["href","components/"],["href","components/widgets/#cwidgetstatsb"],["xl","3","md","6","sm","6"],["text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["thin","",1,"my-2"],["color","success",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["color","info",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["color","warning",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["color","primary",3,"value"],["color","success","inverse","","text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["widgetStatB1inv","cWidgetStatB"],["thin","",1,"my-2",3,"white"],[3,"value"],["color","info","inverse","","text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["widgetStatB2inv","cWidgetStatB"],["color","warning","inverse","","text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["widgetStatB3inv","cWidgetStatB"],["color","primary","inverse","","text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["widgetStatB4inv","cWidgetStatB"],["href","components/widgets/#cwidgetstatse"],["href","components/widgets/#cwidgetstatsf"],["color","primary","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetIconTemplate"],["color","info","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetFooterTemplate"],["color","primary","value","$1,999.50",1,"mb-3",3,"title"],["color","info","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","value","$1,999.50",1,"mb-3",3,"title"],["href","components/widgets/#cwidgetstatsd"],[3,"withCharts"],["href","components/widgets/#cwidgetstatsc"],["value","87,500",3,"title"],["cTemplateId","widgetProgressTemplate"],["value","385",3,"title"],["value","1238",3,"title"],["value","28%",3,"title"],["value","5:34:11",3,"title"],["xl","2","lg","4","sm","6"],["value","87,500",1,"mb-4",3,"title"],["value","385",1,"mb-4",3,"title"],["value","1238",1,"mb-4",3,"title"],["value","28%",1,"mb-4",3,"title"],["value","5:34:11",1,"mb-4",3,"title"],["value","972",1,"mb-4",3,"title"],["color","info","inverse","","value","87,500",1,"mb-4",3,"title"],["color","success","inverse","","value","385",1,"mb-4",3,"title"],["color","warning","inverse","","value","1238",1,"mb-4",3,"title"],["color","primary","inverse","","value","28%",1,"mb-4",3,"title"],["color","danger","inverse","","value","5:34:11",1,"mb-4",3,"title"],["color","dark","inverse","","value","972",1,"mb-4",3,"title"],["cIcon","","name","cilSettings","size","xl","width","24"],["cIcon","","name","cilUser","size","xl","width","24"],["cIcon","","name","cilMoon","size","xl","width","24"],["cIcon","","name","cilBell","size","xl","width","24"],["href","https://coreui.io/","rel","noopener norefferer","target","_blank",1,"font-weight-bold","font-xs","text-medium-emphasis"],["cIcon","","name","cilArrowRight","width","16",1,"float-end"],["cIcon","","name","cilBell","size","xl","width","24",1,"rounded-5"],["cIcon","","height","36","name","cilPeople"],["thin","",1,"mt-3","mb-0"],["cIcon","","height","36","name","cilUserFollow"],["cIcon","","height","36","name","cilBasket"],["cIcon","","height","36","name","cilChartPie"],["cIcon","","height","36","name","cilSpeedometer"],["color","danger",3,"value"],["cIcon","","height","36","name","cilSpeech"],["color","dark",3,"value"],["thin","","white","",1,"mt-3","mb-0"]],template:function(o,s){if(1&o&&(t.TgZ(0,"c-card",0)(1,"c-card-header"),t._uU(2,"Widgets"),t.qZA(),t.TgZ(3,"c-card-body")(4,"app-docs-example",1),t._UZ(5,"app-widgets-dropdown"),t.qZA(),t.TgZ(6,"app-docs-example",2)(7,"c-row")(8,"c-col",3)(9,"c-widget-stat-b",4)(10,"c-progress",5),t._UZ(11,"c-progress-bar",6),t.qZA()()(),t.TgZ(12,"c-col",3)(13,"c-widget-stat-b",7)(14,"c-progress",5),t._UZ(15,"c-progress-bar",8),t.qZA()()(),t.TgZ(16,"c-col",3)(17,"c-widget-stat-b",9)(18,"c-progress",5),t._UZ(19,"c-progress-bar",10),t.qZA()()(),t.TgZ(20,"c-col",3)(21,"c-widget-stat-b",11)(22,"c-progress",5),t._UZ(23,"c-progress-bar",12),t.qZA()()()()(),t.TgZ(24,"app-docs-example",2)(25,"c-row")(26,"c-col",3)(27,"c-widget-stat-b",13,14)(29,"c-progress",15),t._UZ(30,"c-progress-bar",16),t.qZA()()(),t.TgZ(31,"c-col",3)(32,"c-widget-stat-b",17,18)(34,"c-progress",15),t._UZ(35,"c-progress-bar",16),t.qZA()()(),t.TgZ(36,"c-col",3)(37,"c-widget-stat-b",19,20)(39,"c-progress",15),t._UZ(40,"c-progress-bar",16),t.qZA()()(),t.TgZ(41,"c-col",3)(42,"c-widget-stat-b",21,22)(44,"c-progress",15),t._UZ(45,"c-progress-bar",16),t.qZA()()()()(),t.TgZ(46,"app-docs-example",23),t._UZ(47,"app-widgets-e"),t.qZA(),t.TgZ(48,"app-docs-example",24)(49,"c-row")(50,"c-col",3)(51,"c-widget-stat-f",25),t.YNc(52,J,1,0,"ng-template",26),t.qZA()(),t.TgZ(53,"c-col",3)(54,"c-widget-stat-f",27),t.YNc(55,c,1,0,"ng-template",26),t.qZA()(),t.TgZ(56,"c-col",3)(57,"c-widget-stat-f",28),t.YNc(58,g,1,0,"ng-template",26),t.qZA()(),t.TgZ(59,"c-col",3)(60,"c-widget-stat-f",29),t.YNc(61,i,1,0,"ng-template",26),t.qZA()()()(),t.TgZ(62,"app-docs-example",24)(63,"c-row")(64,"c-col",3)(65,"c-widget-stat-f",25),t.YNc(66,r,1,0,"ng-template",26),t.YNc(67,x,3,0,"ng-template",30),t.qZA()(),t.TgZ(68,"c-col",3)(69,"c-widget-stat-f",27),t.YNc(70,U,1,0,"ng-template",26),t.YNc(71,Q,3,0,"ng-template",30),t.qZA()(),t.TgZ(72,"c-col",3)(73,"c-widget-stat-f",28),t.YNc(74,O,1,0,"ng-template",26),t.YNc(75,D,3,0,"ng-template",30),t.qZA()(),t.TgZ(76,"c-col",3)(77,"c-widget-stat-f",29),t.YNc(78,k,1,0,"ng-template",26),t.YNc(79,N,3,0,"ng-template",30),t.qZA()()()(),t.TgZ(80,"app-docs-example",24)(81,"c-row")(82,"c-col",3)(83,"c-widget-stat-f",31),t.YNc(84,Y,1,0,"ng-template",26),t.qZA()(),t.TgZ(85,"c-col",3)(86,"c-widget-stat-f",32),t.YNc(87,q,1,0,"ng-template",26),t.qZA()(),t.TgZ(88,"c-col",3)(89,"c-widget-stat-f",33),t.YNc(90,I,1,0,"ng-template",26),t.qZA()(),t.TgZ(91,"c-col",3)(92,"c-widget-stat-f",34),t.YNc(93,B,1,0,"ng-template",26),t.qZA()()()(),t.TgZ(94,"app-docs-example",35),t._UZ(95,"app-widgets-brand"),t.qZA(),t.TgZ(96,"app-docs-example",35),t._UZ(97,"app-widgets-brand",36),t.qZA(),t.TgZ(98,"app-docs-example",37)(99,"c-card-group",0)(100,"c-widget-stat-c",38),t.YNc(101,$,1,0,"ng-template",26),t.YNc(102,M,2,1,"ng-template",39),t.qZA(),t.TgZ(103,"c-widget-stat-c",40),t.YNc(104,E,1,0,"ng-template",26),t.YNc(105,S,2,1,"ng-template",39),t.qZA(),t.TgZ(106,"c-widget-stat-c",41),t.YNc(107,R,1,0,"ng-template",26),t.YNc(108,L,2,1,"ng-template",39),t.qZA(),t.TgZ(109,"c-widget-stat-c",42),t.YNc(110,F,1,0,"ng-template",26),t.YNc(111,P,2,1,"ng-template",39),t.qZA(),t.TgZ(112,"c-widget-stat-c",43),t.YNc(113,j,1,0,"ng-template",26),t.YNc(114,V,2,1,"ng-template",39),t.qZA()()(),t.TgZ(115,"app-docs-example",37)(116,"c-row")(117,"c-col",44)(118,"c-widget-stat-c",45),t.YNc(119,z,1,0,"ng-template",26),t.YNc(120,H,2,1,"ng-template",39),t.qZA()(),t.TgZ(121,"c-col",44)(122,"c-widget-stat-c",46),t.YNc(123,K,1,0,"ng-template",26),t.YNc(124,X,2,1,"ng-template",39),t.qZA()(),t.TgZ(125,"c-col",44)(126,"c-widget-stat-c",47),t.YNc(127,G,1,0,"ng-template",26),t.YNc(128,tt,2,1,"ng-template",39),t.qZA()(),t.TgZ(129,"c-col",44)(130,"c-widget-stat-c",48),t.YNc(131,et,1,0,"ng-template",26),t.YNc(132,at,2,1,"ng-template",39),t.qZA()(),t.TgZ(133,"c-col",44)(134,"c-widget-stat-c",49),t.YNc(135,nt,1,0,"ng-template",26),t.YNc(136,ot,2,1,"ng-template",39),t.qZA()(),t.TgZ(137,"c-col",44)(138,"c-widget-stat-c",50),t.YNc(139,it,1,0,"ng-template",26),t.YNc(140,st,2,1,"ng-template",39),t.qZA()()()(),t.TgZ(141,"app-docs-example",37)(142,"c-row")(143,"c-col",44)(144,"c-widget-stat-c",51),t.YNc(145,ct,1,0,"ng-template",26),t.YNc(146,lt,2,1,"ng-template",39),t.qZA()(),t.TgZ(147,"c-col",44)(148,"c-widget-stat-c",52),t.YNc(149,rt,1,0,"ng-template",26),t.YNc(150,pt,2,1,"ng-template",39),t.qZA()(),t.TgZ(151,"c-col",44)(152,"c-widget-stat-c",53),t.YNc(153,gt,1,0,"ng-template",26),t.YNc(154,dt,2,1,"ng-template",39),t.qZA()(),t.TgZ(155,"c-col",44)(156,"c-widget-stat-c",54),t.YNc(157,mt,1,0,"ng-template",26),t.YNc(158,ut,2,1,"ng-template",39),t.qZA()(),t.TgZ(159,"c-col",44)(160,"c-widget-stat-c",55),t.YNc(161,_t,1,0,"ng-template",26),t.YNc(162,ft,2,1,"ng-template",39),t.qZA()(),t.TgZ(163,"c-col",44)(164,"c-widget-stat-c",56),t.YNc(165,ht,1,0,"ng-template",26),t.YNc(166,Zt,2,1,"ng-template",39),t.qZA()()()()()()),2&o){const m=t.MAs(28),_=t.MAs(33),Tt=t.MAs(38),wt=t.MAs(43);t.xp6(9),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(4),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",m.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",_.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",Tt.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",wt.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("withCharts",!0),t.xp6(3),t.Q6J("title","Visitors"),t.xp6(3),t.Q6J("title","New Clients"),t.xp6(3),t.Q6J("title","Products sold"),t.xp6(3),t.Q6J("title","Returning Visitors"),t.xp6(3),t.Q6J("title","Avg. Time"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments")}},dependencies:[a.Yp0,a.iok,a.Pvw,a.S0f,a.bvG,p.ar,a.y1J,a.AkF,a.yue,a.RMw,a.nkx,y.U,a.t15,a.RIQ,u,v.c,A]}),e})(),data:{title:"Widgets"}}];let xt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[b.Bz.forChild(vt),b.Bz]}),e})(),bt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,xt,a.zE6,a.yF7,p.QX,a.kWm,a.m81,a.hJ1,a.dTQ,W.E,a.qek,Z.N]}),e})()},2592:(C,h,l)=>{l.d(h,{U:()=>y});var d=l(4147),a=l(1571),p=l(6602),Z=l(1334),W=l(593);const b=function(){return[]},t=["*"];let y=(()=>{class f{constructor(u){this.changeDetectorRef=u,this._href="https://coreui.io/angular/docs/"}get href(){return this._href}set href(u){this._href=`${d?.config?.coreui_library_docs_url??"https://coreui.io/angular/"}${u}`}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}ngAfterViewInit(){this.changeDetectorRef.markForCheck()}}return f.\u0275fac=function(u){return new(u||f)(a.Y36(a.sBO))},f.\u0275cmp=a.Xpm({type:f,selectors:[["app-docs-example"]],inputs:{fragment:"fragment",href:"href"},ngContentSelectors:t,decls:13,vars:5,consts:[[1,"example","mb-3"],["variant","tabs"],["cNavLink","",3,"active","fragment","routerLink"],["cIcon","","name","cilMediaPlay",1,"me-2"],["cNavLink","","target","_blank",3,"href"],["cIcon","","name","cilCode",1,"me-2"],[1,"tab-content","rounded-bottom"],[1,"tab-pane","active","show","p-3","preview","fade"]],template:function(u,v){1&u&&(a.F$t(),a.TgZ(0,"div",0)(1,"c-nav",1)(2,"c-nav-item")(3,"a",2),a.O4$(),a._UZ(4,"svg",3),a._uU(5," Preview "),a.qZA()(),a.kcU(),a.TgZ(6,"c-nav-item")(7,"a",4),a.O4$(),a._UZ(8,"svg",5),a._uU(9," Code "),a.qZA()()(),a.kcU(),a.TgZ(10,"div",6)(11,"div",7),a.Hsn(12),a.qZA()()()),2&u&&(a.xp6(3),a.Q6J("active",!0)("fragment",v.fragment)("routerLink",a.DdM(4,b)),a.xp6(4),a.Q6J("href",v.href,a.LSH))},dependencies:[p.rZi,p.HOP,p.Vh3,Z.ar,W.rH],changeDetection:0}),f})()},4147:C=>{C.exports=JSON.parse('{"name":"coreui-free-angular-admin-template","version":"4.3.13","copyright":"Copyright 2023 creativeLabs \u0141ukasz Holeczek","license":"MIT","author":"The CoreUI Team (https://github.com/orgs/coreui/people) and contributors","homepage":"https://coreui.io/angular","config":{"coreui_library_short_version":"4.3","coreui_library_docs_url":"https://coreui.io/angular/docs/"},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","watch":"ng build --watch --configuration development","test":"ng test"},"private":true,"dependencies":{"@angular/animations":"^15.2.8","@angular/cdk":"^15.2.8","@angular/common":"^15.2.8","@angular/compiler":"^15.2.8","@angular/core":"^15.2.8","@angular/forms":"^15.2.8","@angular/language-service":"^15.2.8","@angular/platform-browser":"^15.2.8","@angular/platform-browser-dynamic":"^15.2.8","@angular/router":"^15.2.8","@coreui/angular":"~4.4.7","@coreui/angular-chartjs":"~4.4.7","@coreui/chartjs":"^3.1.1","@coreui/coreui":"~4.2.6","@coreui/icons":"^3.0.1","@coreui/icons-angular":"~4.4.7","@coreui/utils":"^2.0.1","chart.js":"^3.9.1","ngx-perfect-scrollbar":"^10.1.1","rxjs":"~7.8.1","tslib":"^2.3.0","zone.js":"~0.13.0"},"devDependencies":{"@angular-devkit/build-angular":"^15.2.7","@angular/cli":"^15.2.7","@angular/compiler-cli":"^15.2.8","@angular/localize":"^15.2.8","@types/jasmine":"^4.3.1","@types/node":"^18.16.2","jasmine-core":"~4.6.0","karma":"~6.4.2","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.0.0","typescript":"~4.9.5"},"engines":{"node":"^14.20.0 || ^16.13.0 || ^18.10.0","npm":">= 6"}}')}}]);