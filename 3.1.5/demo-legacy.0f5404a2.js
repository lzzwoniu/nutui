System.register(["./mobile-legacy.1c980c7e.js","./vendor-legacy.7d1181c8.js","./index-legacy.d89f512d.js"],(function(e){"use strict";var t,l,u,n,a,s,d,r,h;return{setters:[function(e){t=e.c},function(e){l=e.m,u=e.r,n=e.o,a=e.e,s=e.j,d=e.k,r=e.g,h=e.l},function(){}],execute:function(){const{createDemo:o}=t("swipe");var c=e("default",o({props:{},setup(){const e=l(),t=l(!1),u=l(0);return{checked:t,number:u,changSwitch:t=>{t?e.value?.open("left"):e.value?.close()},refSwipe:e,open:e=>{console.log(e),t.value=!0},close:()=>{t.value=!1}}}}));const i={class:"demo full"},p=r("h2",null,"基础用法",-1),f=h("删除"),g=r("h2",null,"禁止滑动",-1),y=h("删除"),_=r("h2",null,"左右滑动",-1),m=h("选择"),v=h("删除"),q=h("收藏"),b=r("h2",null,"异步控制",-1),w=h("删除"),k=r("h2",null,"自定义",-1),V=h("选择"),S=h("删除"),j=h("收藏");c.render=function(e,t,l,r,h,o){const c=u("nut-cell"),x=u("nut-button"),C=u("nut-swipe"),O=u("nut-switch"),U=u("nut-inputnumber");return n(),a("div",i,[p,s(C,null,{right:d((()=>[s(x,{shape:"square",style:{height:"100%"},type:"danger"},{default:d((()=>[f])),_:1})])),default:d((()=>[s(c,{"round-radius":"0",desc:"左滑删除"})])),_:1}),g,s(C,{disabled:""},{right:d((()=>[s(x,{shape:"square",style:{height:"100%"},type:"danger"},{default:d((()=>[y])),_:1})])),default:d((()=>[s(c,{"round-radius":"0",desc:"禁止滑动"})])),_:1}),_,s(C,null,{left:d((()=>[s(x,{shape:"square",style:{height:"100%"},type:"success"},{default:d((()=>[m])),_:1})])),right:d((()=>[s(x,{shape:"square",style:{height:"100%"},type:"danger"},{default:d((()=>[v])),_:1}),s(x,{shape:"square",style:{height:"100%"},type:"info"},{default:d((()=>[q])),_:1})])),default:d((()=>[s(c,{"round-radius":"0",desc:"左滑右滑都可以哦"})])),_:1}),b,s(C,{ref:"refSwipe",onOpen:e.open,onClose:e.close},{right:d((()=>[s(x,{shape:"square",style:{height:"100%"},type:"danger"},{default:d((()=>[w])),_:1})])),default:d((()=>[s(c,{title:"异步打开关闭"},{link:d((()=>[s(O,{modelValue:e.checked,"onUpdate:modelValue":t[0]||(t[0]=t=>e.checked=t),onChange:e.changSwitch,"active-text":"开","inactive-text":"关"},null,8,["modelValue","onChange"])])),_:1})])),_:1},8,["onOpen","onClose"]),k,s(C,null,{left:d((()=>[s(x,{shape:"square",style:{height:"100%"},type:"success"},{default:d((()=>[V])),_:1})])),right:d((()=>[s(x,{shape:"square",style:{height:"100%"},type:"danger"},{default:d((()=>[S])),_:1}),s(x,{shape:"square",style:{height:"100%"},type:"info"},{default:d((()=>[j])),_:1})])),default:d((()=>[s(c,{title:"商品描述"},{link:d((()=>[s(U,{modelValue:e.number,"onUpdate:modelValue":t[1]||(t[1]=t=>e.number=t)},null,8,["modelValue"])])),_:1})])),_:1})])}}}}));
