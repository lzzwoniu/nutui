System.register(["./mobile-legacy.a6c8685a.js","./index-legacy.5c289299.js","./vendor-legacy.44d419bd.js"],(function(e){"use strict";var t,n,a,l,u,o,r,c,s,g,i,m;return{setters:[function(e){t=e.c},function(e){n=e._},function(e){a=e.a,l=e.A,u=e.r,o=e.e,r=e.j,c=e.k,s=e.g,g=e.o,i=e.l,m=e.t}],execute:function(){const{createDemo:d}=t("pagination"),p=d({setup(){const e=a({currentPage:1,currentPage1:1,currentPage2:1,currentPage3:1});return{...l(e),pageChange:e=>{console.log(e,444)}}}}),P={class:"demo"},V=s("h2",null,"基础用法",-1),f=s("h2",null,"简单模式",-1),h=s("h2",null,"显示省略号",-1),x=s("h2",null,"自定义按钮",-1);e("default",n(p,[["render",function(e,t,n,a,l,s){const d=u("nut-pagination"),p=u("nut-icon");return g(),o("div",P,[V,r(d,{modelValue:e.currentPage,"onUpdate:modelValue":t[0]||(t[0]=t=>e.currentPage=t),"total-items":25,"items-per-page":5},null,8,["modelValue"]),f,r(d,{modelValue:e.currentPage1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.currentPage1=t),"page-count":12,mode:"simple"},null,8,["modelValue"]),h,r(d,{modelValue:e.currentPage2,"onUpdate:modelValue":t[2]||(t[2]=t=>e.currentPage2=t),"total-items":125,"show-page-size":3,"force-ellipses":""},null,8,["modelValue"]),x,r(d,{modelValue:e.currentPage3,"onUpdate:modelValue":t[3]||(t[3]=t=>e.currentPage3=t),"total-items":500,"show-page-size":5},{"prev-text":c((()=>[r(p,{name:"left",size:"10px"})])),"next-text":c((()=>[r(p,{name:"right",size:"10px"})])),page:c((({item:e})=>[i(m(3==e.number?"hot":e.text),1)])),_:1},8,["modelValue"])])}]]))}}}));