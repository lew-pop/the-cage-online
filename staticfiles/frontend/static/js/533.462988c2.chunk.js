"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[533],{3613:(e,s,a)=>{a.d(s,{A:()=>i});var t=a(5043);var c=a(579);var l=a(3167),r=a(8684);const i=e=>{let{children:s,headerContainerClass:a,headerTop:i,headerPaddingClass:n,headerPositionClass:d}=e;return(0,c.jsxs)(t.Fragment,{children:[(0,c.jsx)(l.A,{layout:a,top:i,headerPaddingClass:n,headerPositionClass:d}),s,(0,c.jsx)(r.A,{backgroundColorClass:"footer-white",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",footerTopBackgroundColorClass:"bg-gray-2",footerTopSpaceTopClass:"pt-80",footerTopSpaceBottomClass:"pb-60",copyrightColorClass:"copyright-white",footerLogo:"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/logo_no_pad.png"})]})}},4533:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var t=a(9379),c=a(5043),l=a(3003),r=a(2134),i=a(2168),n=a(2821),d=a(3613),o=a(970),h=a(2032),m=a(579);const x=()=>{let e=0;const[s]=(0,c.useState)(1),a=(0,l.wA)();let{pathname:x}=(0,r.zy)();const p=(0,l.d4)((e=>e.currency)),{cartItems:u}=(0,l.d4)((e=>e.cart));return(0,m.jsxs)(c.Fragment,{children:[(0,m.jsx)(i.A,{titleTemplate:"Cart",description:"Cart page of The Cage SShop, vapes and smoke accessories."}),(0,m.jsxs)(d.A,{headerTop:"visible",children:[(0,m.jsx)(o.A,{pages:[{label:"Home",path:"/"},{label:"Cart",path:""+x}],backgroundImage:"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"}),(0,m.jsx)("div",{className:"cart-main-area pt-90 pb-100",children:(0,m.jsx)("div",{className:"container",children:u&&u.length>=1?(0,m.jsxs)(c.Fragment,{children:[(0,m.jsx)("h3",{className:"cart-page-title",children:"Your cart items"}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)("div",{className:"table-content table-responsive cart-table-content",children:(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Image"}),(0,m.jsx)("th",{children:"Product Name"}),(0,m.jsx)("th",{children:"Unit Price"}),(0,m.jsx)("th",{children:"Qty"}),(0,m.jsx)("th",{children:"Subtotal"}),(0,m.jsx)("th",{children:"action"})]})}),(0,m.jsx)("tbody",{children:u.map(((l,i)=>{const d=(0,n.do)(l.price,l.discount),o=(l.price*p.currencyRate).toFixed(2),x=(d*p.currencyRate).toFixed(2);return e+=null!=d?x*l.quantity:o*l.quantity,(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"product-thumbnail",children:(0,m.jsx)(r.N_,{to:"/product/"+l.id,children:(0,m.jsx)("img",{className:"img-fluid",src:""+l.image[0],alt:""})})}),(0,m.jsxs)("td",{className:"product-name",children:[(0,m.jsx)(r.N_,{to:"/product/"+l.id,children:l.name}),l.selectedProductColor&&l.selectedProductSize?(0,m.jsxs)("div",{className:"cart-item-variation",children:[(0,m.jsxs)("span",{children:["Color: ",l.selectedProductColor]}),(0,m.jsxs)("span",{children:["Size: ",l.selectedProductSize]})]}):""]}),(0,m.jsx)("td",{className:"product-price-cart",children:null!==d?(0,m.jsxs)(c.Fragment,{children:[(0,m.jsx)("span",{className:"amount old",children:p.currencySymbol+o}),(0,m.jsx)("span",{className:"amount",children:p.currencySymbol+x})]}):(0,m.jsx)("span",{className:"amount",children:p.currencySymbol+o})}),(0,m.jsx)("td",{className:"product-quantity",children:(0,m.jsxs)("div",{className:"cart-plus-minus",children:[(0,m.jsx)("button",{className:"dec qtybutton",onClick:()=>a((0,h.CG)(l)),children:"-"}),(0,m.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:l.quantity,readOnly:!0}),(0,m.jsx)("button",{className:"inc qtybutton",onClick:()=>a((0,h.bE)((0,t.A)((0,t.A)({},l),{},{quantity:s}))),disabled:void 0!==l&&l.quantity&&l.quantity>=(0,n.e1)(l,l.selectedProductColor,l.selectedProductSize),children:"+"})]})}),(0,m.jsx)("td",{className:"product-subtotal",children:null!==d?p.currencySymbol+(x*l.quantity).toFixed(2):p.currencySymbol+(o*l.quantity).toFixed(2)}),(0,m.jsx)("td",{className:"product-remove",children:(0,m.jsx)("button",{onClick:()=>a((0,h.Yd)(l.cartItemId)),children:(0,m.jsx)("i",{className:"fa fa-times"})})})]},i)}))})]})})})}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-lg-12",children:(0,m.jsxs)("div",{className:"cart-shiping-update-wrapper",children:[(0,m.jsx)("div",{className:"cart-shiping-update",children:(0,m.jsx)(r.N_,{to:"/shop-grid-standard",children:"Continue Shopping"})}),(0,m.jsx)("div",{className:"cart-clear",children:(0,m.jsx)("button",{onClick:()=>a((0,h.XW)()),children:"Clear Shopping Cart"})})]})})}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,m.jsxs)("div",{className:"cart-tax",children:[(0,m.jsx)("div",{className:"title-wrap",children:(0,m.jsx)("h4",{className:"cart-bottom-title section-bg-gray",children:"Estimate Shipping And Tax"})}),(0,m.jsxs)("div",{className:"tax-wrapper",children:[(0,m.jsx)("p",{children:"Enter your destination to get a shipping estimate."}),(0,m.jsxs)("div",{className:"tax-select-wrapper",children:[(0,m.jsxs)("div",{className:"tax-select",children:[(0,m.jsx)("label",{children:"* Country"}),(0,m.jsxs)("select",{className:"email s-email s-wid",children:[(0,m.jsx)("option",{children:"United States"}),(0,m.jsx)("option",{children:"Canada"}),(0,m.jsx)("option",{children:"Mexico"}),(0,m.jsx)("option",{children:"Germany"}),(0,m.jsx)("option",{children:"United Kingdom"}),(0,m.jsx)("option",{children:"Other"})]})]}),(0,m.jsxs)("div",{className:"tax-select",children:[(0,m.jsx)("label",{children:"* Region / State"}),(0,m.jsx)("input",{type:"text"})]}),(0,m.jsxs)("div",{className:"tax-select",children:[(0,m.jsx)("label",{children:"* Zip / Postal Code"}),(0,m.jsx)("input",{type:"text"})]}),(0,m.jsx)("button",{className:"cart-btn-2",type:"submit",children:"Get A Quote"})]})]})]})}),(0,m.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,m.jsxs)("div",{className:"discount-code-wrapper",children:[(0,m.jsx)("div",{className:"title-wrap",children:(0,m.jsx)("h4",{className:"cart-bottom-title section-bg-gray",children:"Use Coupon Code"})}),(0,m.jsxs)("div",{className:"discount-code",children:[(0,m.jsx)("p",{children:"Enter your coupon code if you have one."}),(0,m.jsxs)("form",{children:[(0,m.jsx)("input",{type:"text",required:!0,name:"name"}),(0,m.jsx)("button",{className:"cart-btn-2",type:"submit",children:"Apply Coupon"})]})]})]})}),(0,m.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,m.jsxs)("div",{className:"grand-totall",children:[(0,m.jsx)("div",{className:"title-wrap",children:(0,m.jsx)("h4",{className:"cart-bottom-title section-bg-gary-cart",children:"Cart Total"})}),(0,m.jsxs)("h5",{children:["Total products"," ",(0,m.jsx)("span",{children:p.currencySymbol+e.toFixed(2)})]}),(0,m.jsxs)("h4",{className:"grand-totall-title",children:["Grand Total"," ",(0,m.jsx)("span",{children:p.currencySymbol+e.toFixed(2)})]}),(0,m.jsx)(r.N_,{to:"/checkout",children:"Proceed to Checkout"})]})})]})]}):(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-lg-12",children:(0,m.jsxs)("div",{className:"item-empty-area text-center",children:[(0,m.jsx)("div",{className:"item-empty-area__icon mb-30",children:(0,m.jsx)("i",{className:"pe-7s-cart"})}),(0,m.jsxs)("div",{className:"item-empty-area__text",children:["No items found in cart ",(0,m.jsx)("br",{})," ",(0,m.jsx)(r.N_,{to:"/shop-grid-standard",children:"Shop Now"})]})]})})})})})]})]})}},970:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(9397),c=a(2134),l=a(579);const r=e=>{let{pages:s,backgroundImage:a}=e;return(0,l.jsx)("div",{className:"breadcrumb-area pt-120 pb-120 bg-gray-3 bg-img",style:{backgroundImage:" ".concat(a?"url(".concat(""+a,")"):"url()")},children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)(t.A,{children:null===s||void 0===s?void 0:s.map(((e,a)=>{let{path:r,label:i}=e;return a!==s.length-1?(0,l.jsx)(t.A.Item,{linkProps:{to:r},linkAs:c.N_,children:i},i):(0,l.jsx)(t.A.Item,{active:!0,children:i},i)}))})})})}},9397:(e,s,a)=>{a.d(s,{A:()=>j});var t=a(9379),c=a(45),l=a(8139),r=a.n(l),i=a(5043),n=a(7852),d=a(4364),o=a(579);const h=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=i.forwardRef(((e,s)=>{let{bsPrefix:a,active:l=!1,children:i,className:m,as:x="li",linkAs:p=d.A,linkProps:u={},href:j,title:b,target:N}=e,g=(0,c.A)(e,h);const v=(0,n.oU)(a,"breadcrumb-item");return(0,o.jsx)(x,(0,t.A)((0,t.A)({ref:s},g),{},{className:r()(v,m,{active:l}),"aria-current":l?"page":void 0,children:l?i:(0,o.jsx)(p,(0,t.A)((0,t.A)({},u),{},{href:j,title:b,target:N,children:i}))}))}));m.displayName="BreadcrumbItem";const x=m,p=["bsPrefix","className","listProps","children","label","as"],u=i.forwardRef(((e,s)=>{let{bsPrefix:a,className:l,listProps:i={},children:d,label:h="breadcrumb",as:m="nav"}=e,x=(0,c.A)(e,p);const u=(0,n.oU)(a,"breadcrumb");return(0,o.jsx)(m,(0,t.A)((0,t.A)({"aria-label":h,className:l,ref:s},x),{},{children:(0,o.jsx)("ol",(0,t.A)((0,t.A)({},i),{},{className:r()(u,null==i?void 0:i.className),children:d}))}))}));u.displayName="Breadcrumb";const j=Object.assign(u,{Item:x})}}]);
//# sourceMappingURL=533.462988c2.chunk.js.map