(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[905],{425:(e,s,t)=>{"use strict";t.d(s,{A:()=>h});var a=t(9379),r=t(5043),o=t(7274),i=t(9566),n=t(3003),c=t(5913),l=t(7362),d=t(2821),u=t(2032),p=t(4990),m=t(579);const h=function(e){let{product:s,currency:t,discountedPrice:h,finalProductPrice:g,finalDiscountedPrice:x,show:f,onHide:v,wishlistItem:b}=e;const[j,y]=(0,r.useState)(null),w=(0,n.wA)(),{cartItems:N}=(0,n.d4)((e=>e.cart)),[C,P]=(0,r.useState)(s.variation?s.variation[0].color:""),[A,k]=(0,r.useState)(s.variation?s.variation[0].size[0].name:""),[S,T]=(0,r.useState)(s.variation?s.variation[0].size[0].stock:s.stock),[B,z]=(0,r.useState)(1),E=(0,d.pQ)(N,s,C,A),q={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:j},modules:[o._R,o.WO]},O={onSwiper:y,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,m.jsxs)(i.A,{show:f,onHide:()=>{y(null),v()},className:"product-quickview-modal-wrapper",children:[(0,m.jsx)(i.A.Header,{closeButton:!0}),(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,m.jsx)("div",{className:"product-large-image-wrapper",children:(0,m.jsx)(l.A,{options:q,children:s.image&&s.image.map(((e,s)=>(0,m.jsx)(l.q,{children:(0,m.jsx)("div",{className:"single-image",children:(0,m.jsx)("img",{src:e,className:"img-fluid",alt:"Product"})})},s)))})}),(0,m.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,m.jsx)(l.A,{options:O,children:s.image&&s.image.map(((e,s)=>(0,m.jsx)(l.q,{children:(0,m.jsx)("div",{className:"single-image",children:(0,m.jsx)("img",{src:e,className:"img-fluid",alt:""})})},s)))})})]}),(0,m.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,m.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,m.jsx)("h2",{children:s.name}),(0,m.jsx)("div",{className:"product-details-price",children:null!==h?(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)("span",{children:t.currencySymbol+x})," ",(0,m.jsx)("span",{className:"old",children:t.currencySymbol+g})]}):(0,m.jsxs)("span",{children:[t.currencySymbol+g," "]})}),s.rating&&s.rating>0?(0,m.jsx)("div",{className:"pro-details-rating-wrap",children:(0,m.jsx)("div",{className:"pro-details-rating",children:(0,m.jsx)(c.A,{ratingValue:Number(s.rating)})})}):"",(0,m.jsx)("div",{className:"pro-details-list",children:(0,m.jsx)("p",{children:s.shortDescription})}),s.variation?(0,m.jsxs)("div",{className:"pro-details-size-color",children:[(0,m.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,m.jsx)("span",{children:"Color"}),(0,m.jsx)("div",{className:"pro-details-color-content",children:s.variation.map(((e,s)=>(0,m.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,m.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===C?"checked":"",onChange:()=>{P(e.color),k(e.size[0].name),T(e.size[0].stock),z(1)}}),(0,m.jsx)("span",{className:"checkmark"})]},s)))})]}),(0,m.jsxs)("div",{className:"pro-details-size",children:[(0,m.jsx)("span",{children:"Size"}),(0,m.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((e=>e.color===C?e.size.map(((e,s)=>(0,m.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,m.jsx)("input",{type:"radio",value:e.name,checked:e.name===A?"checked":"",onChange:()=>{k(e.name),T(e.stock),z(1)}}),(0,m.jsx)("span",{className:"size-name",children:e.name})]},s))):""))})]})]}):"",s.affiliateLink?(0,m.jsx)("div",{className:"pro-details-quality",children:(0,m.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,m.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,m.jsxs)("div",{className:"pro-details-quality",children:[(0,m.jsxs)("div",{className:"cart-plus-minus",children:[(0,m.jsx)("button",{onClick:()=>z(B>1?B-1:1),className:"dec qtybutton",children:"-"}),(0,m.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:B,readOnly:!0}),(0,m.jsx)("button",{onClick:()=>z(B<S-E?B+1:B),className:"inc qtybutton",children:"+"})]}),(0,m.jsx)("div",{className:"pro-details-cart btn-hover",children:S&&S>0?(0,m.jsxs)("button",{onClick:()=>w((0,u.bE)((0,a.A)((0,a.A)({},s),{},{quantity:B,selectedProductColor:C||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:A||(s.selectedProductSize?s.selectedProductSize:null)}))),disabled:E>=S,children:[" ","Add To Cart"," "]}):(0,m.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,m.jsx)("div",{className:"pro-details-wishlist",children:(0,m.jsx)("button",{className:void 0!==b?"active":"",title:void 0!==b?"Remove from wishlist":"Add to wishlist",onClick:()=>{w(void 0!==b?(0,p.zN)(s):(0,p.U4)(s))},children:(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-heart-fill",viewBox:"0 0 16 16",children:(0,m.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"})})})})]})]})})]})})]})}},5913:(e,s,t)=>{"use strict";t.d(s,{A:()=>o});var a=t(5043),r=t(579);const o=e=>{let{ratingValue:s}=e,t=[];for(let a=0;a<5;a++)t.push((0,r.jsx)("i",{className:"fa fa-star-o"},a));if(s&&s>0)for(let a=0;a<=s-1;a++)t[a]=(0,r.jsx)("i",{className:"fa fa-star-o "},a);return(0,r.jsx)(a.Fragment,{children:t})}},5571:(e,s,t)=>{"use strict";t.d(s,{A:()=>o});var a=t(8387),r=t(579);const o=e=>{let{titleText:s,subtitleText:t,subtitleColorClass:o,positionClass:i,spaceClass:n,borderClass:c}=e;return(0,r.jsxs)("div",{className:(0,a.A)("section-title",i,n,c),children:[(0,r.jsx)("h2",{children:s}),(0,r.jsx)("p",{className:(0,a.A)(o),children:t})]})}},7362:(e,s,t)=>{"use strict";t.d(s,{A:()=>d,q:()=>i.qr});var a=t(9379),r=t(5043),o=t(8387),i=t(8499),n=t(7274),c=t(579);const l=(0,r.forwardRef)(((e,s)=>{let{options:t,prevIcon:r,nextIcon:l,children:d,className:u,navClass:p}=e;const m=void 0!==(null===t||void 0===t?void 0:t.modules)?t.modules:[],h="prev-".concat(p||"swiper-nav"),g="next-".concat(p||"swiper-nav"),x=(0,a.A)((0,a.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===t||void 0===t||!t.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},t),{},{modules:[n.Vx,n.dK,n.Jq,n.Ij,...m],navigation:!(null===t||void 0===t||!t.navigation)&&{prevEl:".".concat(h),nextEl:".".concat(g)},pagination:!(null===t||void 0===t||!t.pagination)&&{clickable:!0}});return(0,c.jsxs)("div",{className:(0,o.A)("swiper-wrap",u),ref:s,children:[(0,c.jsx)(i.RC,(0,a.A)((0,a.A)({},x),{},{children:d})),(null===x||void 0===x?void 0:x.navigation)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{type:"button",className:"ht-swiper-button-nav ".concat(h),children:(0,c.jsx)("i",{className:(0,o.A)(r,"icon")})}),(0,c.jsx)("button",{type:"button",className:"ht-swiper-button-nav ".concat(g),children:(0,c.jsx)("i",{className:(0,o.A)(l,"icon")})})]})]})}));l.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1};const d=l},7491:(e,s,t)=>{"use strict";t.d(s,{A:()=>o});t(5043);var a=t(7417),r=t(579);const o=function(){return(0,r.jsx)(a.A,{animation:"grow",size:"sm",role:"status",style:{height:"100px",width:"100px",margin:"auto",display:"block",backgroundColor:"#7c65a9"},children:(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})})}},5505:(e,s,t)=>{"use strict";t.d(s,{A:()=>o});t(5043);var a=t(3590),r=t(579);const o=function(e){let{variant:s,children:t}=e;return(0,r.jsx)(a.A,{variant:s,style:{position:"fixed",top:"20px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,minWidth:"300px",textAlign:"center"},children:t})}},3613:(e,s,t)=>{"use strict";t.d(s,{A:()=>n});var a=t(5043);var r=t(579);var o=t(3167),i=t(8684);const n=e=>{let{children:s,headerContainerClass:t,headerTop:n,headerPaddingClass:c,headerPositionClass:l}=e;return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(o.A,{layout:t,top:n,headerPaddingClass:c,headerPositionClass:l}),s,(0,r.jsx)(i.A,{backgroundColorClass:"footer-white",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",footerTopBackgroundColorClass:"bg-gray-2",footerTopSpaceTopClass:"pt-80",footerTopSpaceBottomClass:"pb-60",copyrightColorClass:"copyright-white",footerLogo:"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/logo_no_pad.png"})]})}},9905:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>Y});var a=t(5043),r=t(3003),o=t(2168),i=t(3613),n=t(8387),c=t(9834),l=t.n(c),d=t(8178),u=t.n(d);const p=function(e){var s=e.status,t=e.message,r=e.className,o=e.style,i=e.onSubmitted,n=void 0;return a.createElement("div",{className:r,style:o},"sending"===s&&a.createElement("div",{style:{color:"blue"}},"sending..."),"error"===s&&a.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:t}}),"success"===s&&a.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:t}}),a.createElement("input",{ref:function(e){return n=e},type:"email",placeholder:"Your email"}),a.createElement("button",{onClick:function(){return n&&n.value.indexOf("@")>-1&&i({EMAIL:n.value})}},"Submit"))};function m(e,s){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!==typeof s&&"function"!==typeof s?e:s}var h=function(e){function s(){var t,a;!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,s);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=a=m(this,e.call.apply(e,[this].concat(o))),a.state={status:null,message:null},a.subscribe=function(e){var s=u()(e),t=function(e){return e.replace("/post?","/post-json?")}(a.props.url)+"&"+s;a.setState({status:"sending",message:null},(function(){return l()(t,{param:"c"},(function(e,s){e?a.setState({status:"error",message:e}):"success"!==s.result?a.setState({status:"error",message:s.msg}):a.setState({status:"success",message:s.msg})}))}))},m(a,t)}return function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(e,s):e.__proto__=s)}(s,e),s.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},s}(a.Component);h.propTypes={},h.defaultProps={render:function(e){var s=e.subscribe,t=e.status,r=e.message;return a.createElement(p,{status:t,message:r,onSubmitted:function(e){return s(e)}})}};const g=h;var x=t(579);const f=e=>{let s,{status:t,message:a,onValidated:r,spaceTopClass:o,subscribeBtnClass:i}=e;return(0,x.jsx)("div",{className:(0,n.A)("subscribe-form-3",o),children:(0,x.jsxs)("div",{className:"mc-form",children:[(0,x.jsx)("div",{children:(0,x.jsx)("input",{className:"email",ref:e=>s=e,type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===t&&(0,x.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===t&&(0,x.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}}),"success"===t&&(0,x.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}}),(0,x.jsx)("div",{className:"clear-3 ".concat(i||""),children:(0,x.jsx)("button",{className:"button",onClick:()=>{s&&s.value.indexOf("@")>-1&&r({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})},v=e=>{let{mailchimpUrl:s,spaceTopClass:t,subscribeBtnClass:a}=e;return(0,x.jsx)("div",{children:(0,x.jsx)(g,{url:s,render:e=>{let{subscribe:s,status:r,message:o}=e;return(0,x.jsx)(f,{status:r,message:o,onValidated:e=>s(e),spaceTopClass:t,subscribeBtnClass:a})}})})},b=e=>{let{spaceTopClass:s,spaceBottomClass:t,subscribeBtnClass:a,bgColorClass:r,subscribeColorClass:o}=e;return(0,x.jsx)("div",{className:(0,n.A)("subscribe-area-3",r,s,t),children:(0,x.jsx)("div",{className:"container-fluid",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 mx-auto",children:(0,x.jsxs)("div",{className:(0,n.A)("subscribe-style-3 text-center",o),children:[(0,x.jsx)("h2",{className:"text-light",children:"Join Us! "}),(0,x.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,x.jsx)(v,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:a})]})})})})})};var j=t(7274),y=t(7362);const w=JSON.parse('[{"id":1,"title":"Welcome","subtitle":"The Cage","text":"Vapes, Smoke, and Accessories","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/home-hero-one.png","url":"/shop-grid-standard"},{"id":2,"title":"Welcome","subtitle":"The Cage","text":"Vapes, Smoke, and Accessories","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/home-hero-one.png","url":"/shop-list-two-column"}]');var N=t(2134);const C=e=>{let{data:s}=e;return(0,x.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12 ms-auto",children:(0,x.jsxs)("div",{className:"slider-content-3 slider-animated-1 text-center",children:[(0,x.jsx)("h3",{className:"animated",children:s.title}),(0,x.jsx)("h1",{className:"animated",children:s.subtitle}),(0,x.jsx)("p",{className:"animated",children:s.text}),(0,x.jsx)("div",{className:"slider-btn btn-hover",children:(0,x.jsx)(N.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},P={effect:"fade",fadeEffect:{crossFade:!0},modules:[j._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},A=()=>(0,x.jsx)("div",{className:"slider-area",children:(0,x.jsx)("div",{className:"slider-active nav-style-1",children:(0,x.jsx)(y.A,{options:P,children:w&&w.map(((e,s)=>(0,x.jsx)(y.q,{children:(0,x.jsx)(C,{data:e})},s)))})})}),k=JSON.parse('[{"id":"1","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/e-liquids.png","subtitle":"65 Products","title":"E-Liquids","link":"/shop-filtered-grid/primeBar"},{"id":"2","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/salt-nic.png","subtitle":"11 Products","title":"Salt Nic","link":"/shop-filtered-grid/salt-nic"},{"id":"3","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/disposables-cloud.png","subtitle":"287 Products","title":"Disposables","link":"/shop-filtered-grid/disposable"},{"id":"4","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/rolling-papers-cloud.png","subtitle":"5 Products","title":"Rolling Papers","link":"/shop-filtered-grid/rolling-papers"},{"id":"5","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/glass.png","subtitle":"22 Products","title":"Glass Products","link":"/shop-filtered-grid/glass"},{"id":"6","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/vaporizers.png","subtitle":"6 Products","title":"Vaporizers","link":"/shop-filtered-grid/vaporizers"}]'),S=e=>{let{data:s,sliderClass:t}=e;return(0,x.jsxs)("div",{className:"collection-product",children:[(0,x.jsx)("div",{className:"collection-img",children:(0,x.jsx)(N.N_,{to:""+s.link,children:(0,x.jsx)("img",{src:""+s.image,alt:""})})}),(0,x.jsxs)("div",{className:"collection-content text-center",children:[(0,x.jsx)("h4",{children:(0,x.jsx)(N.N_,{to:""+s.link,children:s.title})}),(0,x.jsx)(N.N_,{to:""+s.link,className:"collection-btn",children:"SHOP NOW"})]})]})};var T=t(5571);const B={loop:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:3},992:{slidesPerView:4}}},z=e=>{let{spaceTopClass:s,spaceBottomClass:t}=e;return(0,x.jsx)("div",{className:(0,n.A)("collections-area",s,t),children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)(T.A,{titleText:"Shop By Category",positionClass:"text-center",spaceClass:"mb-55",borderClass:""}),(0,x.jsx)("div",{className:"collection-wrap",children:(0,x.jsx)("div",{className:"collection-active",children:k&&(0,x.jsx)(y.A,{options:B,children:k.map(((e,s)=>(0,x.jsx)(y.q,{children:(0,x.jsx)(S,{data:e})},s)))})})})]})})},E=JSON.parse('[{"id":"1","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/CandyKing.png","subtitle":"287 Products","title":"Candy King","link":"/shop-filtered-grid/disposable"},{"id":"2","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/AirFactory.png","subtitle":"65 Products","title":"Air Factory","link":"/shop-filtered-grid/primeBar"},{"id":"4","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/brands/slider/Flum.png","subtitle":"62 Products","title":"Flum","link":"/shop-filtered-grid/flum"},{"id":"5","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/brands/slider/LostMary.png","subtitle":"9 Products","title":"Lost Mary","link":"/shop-brand-grid/lostmary"},{"id":"6","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/brands/slider/GeekBar.png","subtitle":"67 Products","title":"Geek Bar","link":"/shop-filtered-grid/geekbar"},{"id":"7","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/brands/slider/Daze.png","subtitle":"5 Products","title":"Daze","link":"/shop-filtered-grid/daze"},{"id":"8","image":"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/brands/slider/PodJuice.png","subtitle":"5 Products","title":"Pod Juice","link":"/shop-filtered-grid/podjuice"}]'),q={loop:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:3},992:{slidesPerView:4}}},O=e=>{let{spaceTopClass:s,spaceBottomClass:t}=e;return(0,x.jsx)("div",{className:(0,n.A)("collections-area",s,t),children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)(T.A,{titleText:"Shop By Brand",positionClass:"text-center",spaceClass:"mb-55",borderClass:""}),(0,x.jsx)("div",{className:"collection-wrap",children:(0,x.jsx)("div",{className:"collection-active",children:E&&(0,x.jsx)(y.A,{options:q,children:E.map(((e,s)=>(0,x.jsx)(y.q,{children:(0,x.jsx)(S,{data:e})},s)))})})})]})})};var _=t(7488);t(2342);const M=e=>{let{titleText:s,spaceBottomClass:t,positionClass:a,customClass:r}=e;return(0,x.jsx)("div",{className:(0,n.A)("section-title-3",t,a,r),children:(0,x.jsx)("h4",{children:s})})};var I=t(2821),L=t(425),V=t(2032),H=t(4990);const F=e=>{let{product:s,currency:t,cartItem:o,wishlistItem:i,spaceBottomClass:c,colorClass:l,titlePriceClass:d}=e;const[u,p]=(0,a.useState)(!1),m=(0,I.do)(s.price,s.discount),h=+(s.price*t.currencyRate).toFixed(2),g=+(m*t.currencyRate).toFixed(2),f=(0,r.wA)();return(0,x.jsxs)(a.Fragment,{children:[(0,x.jsxs)("div",{className:(0,n.A)("product-wrap-2",c,l),children:[(0,x.jsx)("div",{className:"product-title"}),(0,x.jsxs)("div",{className:"product-img",children:[(0,x.jsxs)(N.N_,{to:"/product/"+s.id,children:[(0,x.jsx)("img",{className:"default-img",src:s.image[0],alt:""}),s.image.length>1?(0,x.jsx)("img",{className:"hover-img",src:s.image[1],alt:""}):""]}),s.discount||s.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,x.jsxs)("span",{className:"purple",children:["-",s.discount,"%"]}):"",s.new?(0,x.jsx)("span",{className:"pink",children:"New"}):""]}):"",(0,x.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,x.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,x.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,x.jsx)(N.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,x.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,x.jsxs)("button",{onClick:()=>f((0,V.bE)(s)),className:void 0!==o&&o.quantity>0?"active":"",disabled:void 0!==o&&o.quantity>0,title:void 0!==o?"Added to cart":"Add to cart",children:[" ",(0,x.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,x.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,x.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,x.jsx)("button",{onClick:()=>p(!0),title:"Quick View",children:(0,x.jsx)("i",{className:"fa fa-eye"})})]})]}),(0,x.jsxs)("div",{className:"product-content-2",children:[(0,x.jsxs)("div",{className:"title-price-wrap-2 ".concat(d||""),children:[(0,x.jsx)("h3",{children:(0,x.jsx)(N.N_,{to:"/product/"+s.id,children:s.name})}),(0,x.jsx)("div",{className:"price-2",children:null!==m?(0,x.jsxs)(a.Fragment,{children:[(0,x.jsx)("span",{children:t.currencySymbol+g})," ",(0,x.jsx)("span",{className:"old",children:t.currencySymbol+h})]}):(0,x.jsxs)("span",{children:[t.currencySymbol+h," "]})})]}),(0,x.jsx)("div",{className:"my-pro-cart-2",children:s.stock&&s.stock>0?(0,x.jsxs)("button",{onClick:()=>f((0,V.bE)(s)),className:void 0!==o&&o.quantity>0?"active":"",disabled:void 0!==o&&o.quantity>0,title:void 0!==o?"Added to cart":"Add to cart",children:[" ",(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-cart-plus",viewBox:"0 0 16 16",children:[(0,x.jsx)("path",{d:"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"}),(0,x.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})]})," "]}):(0,x.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-cart-plus",viewBox:"0 0 16 16",children:[(0,x.jsx)("path",{d:"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"}),(0,x.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})]})})}),(0,x.jsx)("div",{className:"pro-wishlist-2",children:(0,x.jsx)("button",{className:void 0!==i?"active":"",disabled:void 0!==i,title:void 0!==i?"Added to wishlist":"Add to wishlist",onClick:()=>f((0,H.U4)(s)),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",className:"bi bi-heart",viewBox:"0 0 16 16",children:(0,x.jsx)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"})})})})]})]}),(0,x.jsx)(L.A,{show:u,onHide:()=>p(!1),product:s,currency:t,discountedPrice:m,finalProductPrice:h,finalDiscountedPrice:g,wishlistItem:i})]})},R={loop:!1,grabCursor:!0,observer:!0,observeParents:!0,spaceBetween:30,navigation:!0,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}},D=e=>{let{spaceBottomClass:s,colorClass:t,titlePriceClass:a,category:o,type:i,limit:n}=e;const{products:c}=(0,r.d4)((e=>e.product)),l=(0,r.d4)((e=>e.currency)),{cartItems:d}=(0,r.d4)((e=>e.cart)),{wishlistItems:u}=(0,r.d4)((e=>e.wishlist)),p=(0,I.d$)(c,o,i,n);return null!==p&&void 0!==p&&p.length?(0,x.jsx)(y.A,{className:"position-static",options:R,children:p.map((e=>(0,x.jsx)(y.q,{children:(0,x.jsx)(F,{spaceBottomClass:s,colorClass:t,product:e,currency:l,cartItem:d.find((s=>s.id===e.id)),wishlistItem:u.find((s=>s.id===e.id)),titlePriceClass:a})},e.id)))}):(0,x.jsx)("p",{children:"No products found"})},U=e=>{let{spaceBottomClass:s,category:t,colorClass:a,modelName:r}=e;return(0,x.jsx)("div",{className:(0,n.A)("related-product-area",s,a),children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)(T.A,{titleText:"Shop Our Products",positionClass:"text-center",spaceClass:"mb-55",borderClass:""}),(0,x.jsx)(M,{titleText:r,positionClass:"text-center",customClass:"my-product-title"}),(0,x.jsx)(D,{category:t,limit:20,colorClass:a})]})})},W=e=>{let{spaceBottomClass:s,category:t,colorClass:a,modelName:r}=e;return(0,x.jsx)("div",{className:(0,n.A)("related-product-area",s),children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)(M,{titleText:r,positionClass:"text-center",customClass:"my-product-title"}),(0,x.jsx)(D,{category:t,limit:20,colorClass:a})]})})};var J=t(1966),Q=t(8300),G=t(7975),K=t(7491),$=t(5505);const Y=()=>{const{data:e,error:s,isLoading:t}=(0,J.WI)();G.M_.dispatch((0,Q.d)(e));const{products:n}=(0,r.d4)((e=>e.product));return console.log("Home Data:",e),t?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:(0,x.jsx)(K.A,{})}):s?(0,x.jsx)("div",{className:"py-3",children:(0,x.jsx)($.A,{variant:"danger",children:s.message})}):(0,x.jsxs)(a.Fragment,{children:[(0,x.jsx)(o.A,{title:"The Cage SShop",titleTemplate:"Home Page",description:"The Cage SShop, Vapes, E-Liquids, Disposable Vapes, E-Cigarettes."}),(0,x.jsx)(_.N9,{position:"top-right"}),(0,x.jsxs)(i.A,{headerTop:"visible",children:[(0,x.jsx)(A,{}),(0,x.jsx)(z,{spaceTopClass:"pt-100",spaceBottomClass:"pb-40"}),(0,x.jsx)(O,{spaceTopClass:"pt-40",spaceBottomClass:"pb-95"}),(0,x.jsx)(U,{category:"pebble",spaceBottomClass:"pb-70",colorClass:"product-wrap-8--brown",modelName:"\xa0Flum Pebble\xa0"}),(0,x.jsx)(W,{category:"float",spaceBottomClass:"pb-70",colorClass:"product-wrap-8--brown",modelName:"\xa0Flum Float\xa0"}),(0,x.jsx)(W,{category:"gio",spaceBottomClass:"pb-70",colorClass:"product-wrap-8--brown",modelName:"\xa0Flum Gio\xa0"}),(0,x.jsx)(W,{category:"os5000",spaceBottomClass:"pb-70",colorClass:"product-wrap-8--brown",modelName:"\xa0Lost Mary OS5000\xa0"}),(0,x.jsx)(W,{category:"mo5000",spaceBottomClass:"pb-70",colorClass:"product-wrap-8--brown",modelName:"\xa0Lost Mary MO5000\xa0"}),(0,x.jsx)(W,{category:"mt15000",spaceBottomClass:"pb-70",colorClass:"product-wrap-8--brown",modelName:"\xa0Lost Mary MT15000\xa0"}),(0,x.jsx)(W,{category:"primeBar",spaceBottomClass:"pb-70",colorClass:"product-wrap-8--brown",modelName:"\xa0Prime Bar 8000\xa0"}),(0,x.jsx)(W,{category:"ultra",spaceBottomClass:"pb-70",colorClass:"product-wrap-8--brown",modelName:"\xa0Elf Bar Ultra BC5000\xa0"}),(0,x.jsx)(b,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",subscribeBtnClass:"dark-red-subscribe"})]})]})}},1966:(e,s,t)=>{"use strict";t.d(s,{Fc:()=>i,WI:()=>r});const a=t(6749).l.injectEndpoints({endpoints:e=>({listProducts:e.query({query:()=>"products/",providesTags:["Product"]}),listProductsByCategory:e.query({query:e=>"products/category/".concat(e,"/"),providesTags:["Product"]}),listProductsByTag:e.query({query:e=>"products/tag/".concat(e,"/"),providesTags:["Product"]}),listTopProducts:e.query({query:()=>"products/top/",providesTags:["Product"]}),getProduct:e.query({query:e=>"products/".concat(e,"/"),providesTags:(e,s,t)=>[{type:"Product",id:t}]}),getProducts:e.query({query:e=>"products/query/".concat(e,"/"),providesTags:["Product"]}),deleteProduct:e.mutation({query:e=>({url:"products/delete/".concat(e,"/"),method:"DELETE"}),invalidatesTags:["Product"]}),createProduct:e.mutation({query:()=>({url:"products/create/",method:"POST",body:{}}),invalidatesTags:["Product"]}),updateProduct:e.mutation({query:e=>({url:"products/update/".concat(e.id,"/"),method:"PUT",body:e}),invalidatesTags:(e,s,t)=>[{type:"Product",id:t.id}]}),createProductReview:e.mutation({query:e=>{let{productId:s,review:t}=e;return{url:"products/".concat(s,"/reviews/"),method:"POST",body:t}},invalidatesTags:(e,s,t)=>{let{productId:a}=t;return[{type:"Product",id:a}]}})})}),{useListProductsQuery:r,useListProductsByCategoryQuery:o,useListProductsByTagQuery:i,useListTopProductsQuery:n,useGetProductQuery:c,useGetProductsQuery:l,useDeleteProductMutation:d,useCreateProductMutation:u,useUpdateProductMutation:p,useCreateProductReviewMutation:m}=a},9834:(e,s,t)=>{var a=t(1260)("jsonp");e.exports=function(e,s,t){"function"==typeof s&&(t=s,s={});s||(s={});var i,n,c=s.prefix||"__jp",l=s.name||c+r++,d=s.param||"callback",u=null!=s.timeout?s.timeout:6e4,p=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head;u&&(n=setTimeout((function(){h(),t&&t(new Error("Timeout"))}),u));function h(){i.parentNode&&i.parentNode.removeChild(i),window[l]=o,n&&clearTimeout(n)}return window[l]=function(e){a("jsonp got",e),h(),t&&t(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+d+"="+p(l)).replace("?&","?"),a('jsonp req "%s"',e),(i=document.createElement("script")).src=e,m.parentNode.insertBefore(i,m),function(){window[l]&&h()}};var r=0;function o(){}},1260:(e,s,t)=>{function a(){var e;try{e=s.storage.debug}catch(t){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(s=e.exports=t(4703)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},s.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+s.humanize(this.diff),!t)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))})),e.splice(o,0,a)},s.save=function(e){try{null==e?s.storage.removeItem("debug"):s.storage.debug=e}catch(t){}},s.load=a,s.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},s.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),s.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],s.formatters.j=function(e){try{return JSON.stringify(e)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}},s.enable(a())},4703:(e,s,t)=>{var a;function r(e){function t(){if(t.enabled){var e=t,r=+new Date,o=r-(a||r);e.diff=o,e.prev=a,e.curr=r,a=r;for(var i=new Array(arguments.length),n=0;n<i.length;n++)i[n]=arguments[n];i[0]=s.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(t,a){if("%%"===t)return t;c++;var r=s.formatters[a];if("function"===typeof r){var o=i[c];t=r.call(e,o),i.splice(c,1),c--}return t})),s.formatArgs.call(e,i),(t.log||s.log||console.log.bind(console)).apply(e,i)}}return t.namespace=e,t.enabled=s.enabled(e),t.useColors=s.useColors(),t.color=function(e){var t,a=0;for(t in e)a=(a<<5)-a+e.charCodeAt(t),a|=0;return s.colors[Math.abs(a)%s.colors.length]}(e),"function"===typeof s.init&&s.init(t),t}(s=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},s.disable=function(){s.enable("")},s.enable=function(e){s.save(e),s.names=[],s.skips=[];for(var t=("string"===typeof e?e:"").split(/[\s,]+/),a=t.length,r=0;r<a;r++)t[r]&&("-"===(e=t[r].replace(/\*/g,".*?"))[0]?s.skips.push(new RegExp("^"+e.substr(1)+"$")):s.names.push(new RegExp("^"+e+"$")))},s.enabled=function(e){var t,a;for(t=0,a=s.skips.length;t<a;t++)if(s.skips[t].test(e))return!1;for(t=0,a=s.names.length;t<a;t++)if(s.names[t].test(e))return!0;return!1},s.humanize=t(4850),s.names=[],s.skips=[],s.formatters={}},4850:e=>{var s=1e3,t=60*s,a=60*t,r=24*a,o=365.25*r;function i(e,s,t){if(!(e<s))return e<1.5*s?Math.floor(e/s)+" "+t:Math.ceil(e/s)+" "+t+"s"}e.exports=function(e,n){n=n||{};var c,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var n=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*o;case"days":case"day":case"d":return n*r;case"hours":case"hour":case"hrs":case"hr":case"h":return n*a;case"minutes":case"minute":case"mins":case"min":case"m":return n*t;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}(e);if("number"===l&&!1===isNaN(e))return n.long?i(c=e,r,"day")||i(c,a,"hour")||i(c,t,"minute")||i(c,s,"second")||c+" ms":function(e){if(e>=r)return Math.round(e/r)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=t)return Math.round(e/t)+"m";if(e>=s)return Math.round(e/s)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},8178:function(e){e.exports=(()=>{"use strict";var e={d:(s,t)=>{for(var a in t)e.o(t,a)&&!e.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:t[a]})},o:(e,s)=>Object.prototype.hasOwnProperty.call(e,s),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},s={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}e.r(s),e.d(s,{default:()=>n});var a=encodeURIComponent;function r(e,s,r,o,n){var c=o&&n.arrayPrefix||"";if("object"===t(s)){var l="".concat(e).concat(c).concat(r&&"]","[");return"".concat(i(s,"".concat(r).concat(l),n))}return r&&r.length?"".concat(r).concat(e,"]").concat(c,"=").concat(a(s)):"".concat(e).concat(c,"=").concat(a(s))}function o(e,s,t,a){return s.map((function(s){return r(e,s,t,!0,a)})).join("&")}function i(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(Array.isArray(e)?e.map((function(e,a){return r("".concat(a),e,s,!0,t)})):Object.keys(e).filter((function(s){return void 0!==e[s]})).map((function(a){return e[a]&&Array.isArray(e[a])?o("".concat(a),e[a],s,t):r(a,e[a],s,!1,t)}))).join("&").replace(/%20/g,"+")}const n=i;return s})()},2342:()=>{}}]);
//# sourceMappingURL=905.942c5720.chunk.js.map