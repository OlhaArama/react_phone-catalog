(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},,,,,function(e,t,c){},,,,,,,,,,,function(e,t,c){},,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(28),a=c(6),r=c(21),i=c(8),n=c(4),o=c(1),d=c.n(o),l=c(0),j=d.a.createContext({}),u=function(e){var t=e.children,c=localStorage.getItem("cartItems"),s=c?JSON.parse(c):[],a=localStorage.getItem("favorites"),d=a?JSON.parse(a):[],u=Object(o.useState)(s),b=Object(n.a)(u,2),p=b[0],m=b[1],h=Object(o.useState)(d),_=Object(n.a)(h,2),O=_[0],x=_[1];Object(o.useEffect)((function(){localStorage.setItem("cartItems",JSON.stringify(p))}),[p]),Object(o.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(O))}),[O]);return Object(l.jsx)(j.Provider,{value:{cartItems:p,favorites:O,addProductToCart:function(e){return p.find((function(t){return t.id===e.id}))?m(p.filter((function(t){return t.id!==e.id}))):m([].concat(Object(i.a)(p),[{product:e,id:e.id,quantity:1}]))},deleteProductFromCart:function(e){return m(p.filter((function(t){return t.id!==e.id})))},addProductToFavorites:function(e){return O.find((function(t){return t.id===e.id}))?x(O.filter((function(t){return t.id!==e.id}))):x([].concat(Object(i.a)(O),[e]))},isInCart:function(e){return!!p.find((function(t){return t.id===e.id}))},isInFavorites:function(e){return!!O.find((function(t){return t.id===e.id}))},increaseQuantity:function(e){m(p.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},t),{},{quantity:t.quantity+1}):t})))},decreaseQuantity:function(e){m(p.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},t),{},{quantity:t.quantity-1}):t})))}},children:t})},b=c(3),p=(c(38),c(10),c(39),c(15),c(40),function(){return Object(l.jsx)(a.b,{to:"/",className:"logo",children:Object(l.jsxs)("svg",{width:"40",height:"11",viewBox:"0 0 40 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M2.93333 8.0966V0.254421H0V10.7306H6.65986V8.0966H2.93333Z",fill:"#313237"}),Object(l.jsx)("path",{d:"M11.6842 11C15.0516 11 17.4461 8.7102 17.4461 5.50748C17.4461 2.2898 15.0516 0 11.6842 0C8.31688 0 5.92232 2.30476 5.92232 5.50748C5.92232 8.69524 8.31688 11 11.6842 11ZM11.6842 8.32109C10.0978 8.32109 8.91552 7.12381 8.91552 5.50748C8.91552 3.87619 10.0978 2.67891 11.6842 2.67891C13.2856 2.67891 14.438 3.86122 14.438 5.50748C14.438 7.13878 13.2856 8.32109 11.6842 8.32109Z",fill:"#313237"}),Object(l.jsx)("path",{d:"M22.535 5.13333V6.95918H25.1391C24.8099 7.76735 23.867 8.30612 22.7595 8.30612C21.1731 8.30612 20.1405 7.16871 20.1405 5.50748C20.1405 3.83129 21.1881 2.69388 22.7595 2.69388C23.8221 2.69388 24.765 3.26258 25.1391 4.14558H28.1772C27.7282 1.72109 25.4833 0 22.7296 0C19.5119 0 17.1772 2.31973 17.1772 5.50748C17.1772 8.69524 19.5568 11 22.7595 11C26.0371 11 28.282 8.56054 28.282 5.13333H22.535Z",fill:"#313237"}),Object(l.jsx)("path",{d:"M33.7555 11C37.1229 11 39.5175 8.7102 39.5175 5.50748C39.5175 2.2898 37.1229 0 33.7555 0C30.3882 0 27.9936 2.30476 27.9936 5.50748C27.9936 8.69524 30.3882 11 33.7555 11ZM33.7555 8.32109C32.1692 8.32109 30.9868 7.12381 30.9868 5.50748C30.9868 3.87619 32.1692 2.67891 33.7555 2.67891C35.3569 2.67891 36.5093 3.86122 36.5093 5.50748C36.5093 7.13878 35.3569 8.32109 33.7555 8.32109Z",fill:"#313237"})]})})}),m=(c(42),c(9)),h=c.n(m),_=(c(43),function(e){var t=e.to,c=e.text;return Object(l.jsx)(a.c,{className:function(e){var t=e.isActive;return h()("page-nav-link",{"page-nav-link--active":t})},to:t,children:c})}),O=function(){return Object(l.jsx)("nav",{className:"nav",children:Object(l.jsxs)("ul",{className:"nav__list",children:[Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(_,{to:"/",text:"home"})}),Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(_,{to:"/phones",text:"phones"})}),Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(_,{to:"/tablets",text:"tablets"})}),Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(_,{to:"/accessories",text:"accessories"})})]})})},x=(c(44),c.p+"static/media/cross.d99189a5.svg"),g=c.p+"static/media/search.eb670dd9.svg",f=function(e){var t=e.text,c=e.setQuery,s=Object(o.useState)(""),a=Object(n.a)(s,2),r=a[0],i=a[1];return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{className:"search__field",type:"text",placeholder:"Search in ".concat(t,"..."),value:r,onChange:function(e){i(e.target.value),c(e.target.value)}}),r?Object(l.jsx)("img",{src:x,alt:"cross icon",className:"search__icon",onClick:function(){i(""),c("")},"aria-hidden":"true","data-cy":"searchDelete"}):Object(l.jsx)("img",{src:g,alt:"search icon",className:"search__icon"})]})},v=(c(45),c.p+"static/media/favorites.18a4d0a4.svg"),N=function(){var e=Object(o.useContext)(j).favorites.length;return Object(l.jsxs)(a.b,{to:"/favorites",className:"favorites-icon",children:[Object(l.jsx)("img",{src:v,alt:"heart icon"}),!!e&&Object(l.jsx)("div",{className:"favorites-icon__counter",children:e})]})},y=(c(46),c.p+"static/media/shopping-bag.9d5d0d40.svg"),C=function(){var e=Object(o.useContext)(j).cartItems.length;return Object(l.jsxs)(a.b,{to:"/shoppingBag",className:"icon",children:[Object(l.jsx)("img",{src:y,alt:"shopping bag icon"}),!!e&&Object(l.jsx)("div",{className:"icon__counter",children:e})]})},w=function(e){var t=e.search,c=e.setQuery,s=e.isCartPageOpen;return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("div",{className:"header__top-action",children:[Object(l.jsxs)("div",{className:"header__links-wrapper",children:[Object(l.jsx)(p,{}),!s&&Object(l.jsx)(O,{})]}),Object(l.jsxs)("div",{className:"header__links-wrapper",children:[t&&c&&Object(l.jsx)(f,{text:t,setQuery:c}),!s&&Object(l.jsx)(N,{}),Object(l.jsx)(C,{})]})]})})};w.defaultProps={search:"",setQuery:void 0,isCartPageOpen:!1};c(47);var k=c.p+"static/media/banner-phones.b4eeda8b.png",S=c.p+"static/media/banner-tablets.a962057c.png",P=c.p+"static/media/banner-accessories.bdd2e0fc.png",I=c.p+"static/media/arrow-left.081ebe62.svg",B=c.p+"static/media/arrow-right.12643ae4.svg",E=function(){var e=Object(o.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(o.useRef)(null),r=[k,S,P];Object(o.useEffect)((function(){var e=setInterval((function(){c<r.length-1?s(c+1):s(0)}),5e3);return function(){return clearInterval(e)}}),[c]);var i=a.current?a.current.offsetWidth:0;return Object(l.jsx)("div",{className:"home-page-slider",children:Object(l.jsxs)("div",{className:"home-page-slider__content",children:[Object(l.jsxs)("div",{className:"grid",children:[Object(l.jsx)("button",{type:"button",className:"home-page-slider__button grid__item grid__item--1-1",onClick:function(){s(0!==c?c-1:0)},children:Object(l.jsx)("img",{src:I,alt:"arrow left"})}),Object(l.jsx)("div",{className:"home-page-slider__wrapper grid__item grid__item--2-23",children:Object(l.jsx)("div",{className:"home-page-slider__slides",style:{transform:"translateX(-".concat(c*i,"px)")},children:r.map((function(e){return Object(l.jsx)("div",{className:"home-page-slider__image-wrapper",ref:a,children:Object(l.jsx)("img",{src:e,alt:"phones",className:"home-page-slider__image"})},e)}))})}),Object(l.jsx)("button",{type:"button",className:"home-page-slider__button grid__item grid__item--24-24",onClick:function(){c!==r.length-1?s(c+1):s(0)},children:Object(l.jsx)("img",{src:B,alt:"arrow right"})})]}),Object(l.jsxs)("div",{className:"home-page-slider__radio-controls",children:[Object(l.jsx)("label",{className:h()("home-page-slider__radio-control",{"home-page-slider__radio-control--checked":0===c}),children:Object(l.jsx)("input",{id:"radio-1",type:"radio",className:"home-page-slider__radio-button",checked:0===c,onChange:function(){return s(0)}})}),Object(l.jsx)("label",{className:h()("home-page-slider__radio-control",{"home-page-slider__radio-control--checked":1===c}),children:Object(l.jsx)("input",{id:"radio-2",type:"radio",className:"home-page-slider__radio-button",checked:1===c,onChange:function(){return s(1)}})}),Object(l.jsx)("label",{className:h()("home-page-slider__radio-control",{"home-page-slider__radio-control--checked":2===c}),children:Object(l.jsx)("input",{id:"radio-3",type:"radio",className:"home-page-slider__radio-button",checked:2===c,onChange:function(){return s(2)}})})]})]})})},M=(c(48),c(49),c(50),c(51),function(e){var t=e.product,c=e.isBigButton,s=Object(o.useContext)(j),a=s.addProductToCart,r=(0,s.isInCart)(t);return Object(l.jsx)("button",{className:h()("cart-button",{"cart-button--active":r,"cart-button--big":c}),type:"button",onClick:function(){return a(t)},children:r?"Added to cart":"Add to cart"})});M.defaultProps={isBigButton:!1};c(52);var A=c.p+"static/media/favorites-red.e06f6852.svg",R=function(e){var t=e.product,c=e.isBigButton,s=Object(o.useContext)(j),a=s.addProductToFavorites,r=s.isInFavorites,i=Object(o.useMemo)((function(){return r(t)?A:v}),[r]);return Object(l.jsx)("button",{className:h()("favorite-button",{"favorite-button--big":c}),type:"button",onClick:function(){return a(t)},"data-cy":"addToFavorite",children:Object(l.jsx)("img",{src:i,alt:"heart icon"})})};R.defaultProps={isBigButton:!1};var L,T=function(e){var t=e.product,c=t.discount>0?t.price-t.price*t.discount/100:t.price;return Object(l.jsxs)("div",{className:"product-card","data-cy":"cardsContainer",children:[Object(l.jsxs)(a.b,{to:"/".concat(t.type,"s/").concat(t.id),className:"product-card__content",children:[Object(l.jsx)("img",{className:"product-card__photo",src:t.imageUrl,alt:t.name}),Object(l.jsx)("p",{className:"product-card__name",children:t.name}),Object(l.jsxs)("div",{className:"product-card__prices",children:[Object(l.jsx)("span",{className:"product-card__new-price",children:"$".concat(c)}),t.discount>0&&Object(l.jsx)("span",{className:"product-card__old-price",children:"$".concat(t.price)})]}),Object(l.jsxs)("div",{className:"product-card__characteristics",children:[Object(l.jsxs)("div",{className:"product-card__characteristic",children:[Object(l.jsx)("span",{className:"product-card__characteristic-name",children:"Screen"}),Object(l.jsx)("span",{className:"product-card__characteristic-value",children:t.screen})]}),Object(l.jsxs)("div",{className:"product-card__characteristic",children:[Object(l.jsx)("span",{className:"product-card__characteristic-name",children:"Capacity"}),Object(l.jsx)("span",{className:"product-card__characteristic-value",children:t.capacity})]}),Object(l.jsxs)("div",{className:"product-card__characteristic",children:[Object(l.jsx)("span",{className:"product-card__characteristic-name",children:"RAM"}),Object(l.jsx)("span",{className:"product-card__characteristic-value",children:t.ram})]})]})]}),Object(l.jsxs)("div",{className:"product-card__buttons-wrapper",children:[Object(l.jsx)(M,{product:t}),Object(l.jsx)(R,{product:t})]})]})},q=(c(53),function(e){var t=e.onClick,c=e.transform;return Object(l.jsx)("button",{type:"button",className:"button-left",onClick:t,disabled:!c,children:Object(l.jsx)("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.47136 0.528606C5.21101 0.268256 4.7889 0.268256 4.52855 0.528606L0.528555 4.52861C0.268205 4.78896 0.268205 5.21107 0.528555 5.47141L4.52855 9.47141C4.7889 9.73176 5.21101 9.73176 5.47136 9.47141C5.73171 9.21107 5.73171 8.78896 5.47136 8.52861L1.94277 5.00001L5.47136 1.47141C5.73171 1.21107 5.73171 0.788955 5.47136 0.528606Z",fill:c?"#313237":"#e2e6e9"})})})}),F=(c(54),function(e){var t=e.onClick,c=e.transform===288*-(e.productsNumber-4);return Object(l.jsx)("button",{type:"button",className:"button-right",onClick:t,disabled:c,children:Object(l.jsx)("svg",{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.528636 0.528606C0.788986 0.268256 1.2111 0.268256 1.47145 0.528606L5.47145 4.52861C5.73179 4.78896 5.73179 5.21107 5.47145 5.47141L1.47145 9.47141C1.2111 9.73176 0.788986 9.73176 0.528636 9.47141C0.268287 9.21107 0.268287 8.78896 0.528636 8.52861L4.05723 5.00001L0.528636 1.47141C0.268287 1.21107 0.268287 0.788955 0.528636 0.528606Z",fill:c?"#e2e6e9":"#313237"})})})}),H=function(e){var t=e.products,c=Object(o.useState)(0),s=Object(n.a)(c,2),a=s[0],r=s[1];return Object(l.jsxs)("div",{className:"products-slider",children:[Object(l.jsxs)("div",{className:"products-slider__buttons-wrapper",children:[Object(l.jsx)(q,{onClick:function(){0!==a&&r(a+288)},transform:a}),Object(l.jsx)(F,{onClick:function(){a!==288*-(t.length-4)&&r(a-288)},transform:a,productsNumber:t.length})]}),Object(l.jsx)("div",{className:"products-slider__slides",style:{transform:"translateX(".concat(a,"px)")},children:t.map((function(e){return Object(l.jsx)(T,{product:e},e.id)}))})]})},Q=function(e){var t=e.products;return Object(l.jsxs)("section",{className:"hot-prices page__section",children:[Object(l.jsx)("h2",{className:"hot-prices__title page__section-title",children:"Hot prices"}),Object(l.jsx)(H,{products:t})]})},Z=(c(55),function(e){var t=e.image,c=e.backgroundColor,s=e.title,r=e.text,i=e.link;return Object(l.jsx)("div",{className:"category",children:Object(l.jsxs)("div",{className:"category__content",children:[Object(l.jsx)("div",{className:"category__image-wrapper",style:{backgroundColor:c},children:Object(l.jsx)("img",{src:t,alt:"phones category",className:"category__image"})}),Object(l.jsx)(a.b,{to:i,className:"category__link","data-cy":"categoryLinksContainer",children:s}),Object(l.jsx)("p",{className:"category__text",children:r})]})})}),V=c.p+"static/media/category-phones.af93d992.png",D=c.p+"static/media/category-tablets.51782e18.png",J=c.p+"static/media/category-accessories.e47d6d6d.png";!function(e){e.phone="phone",e.tablet="tablet",e.accessory="accessory"}(L||(L={}));var $,W=function(e){var t=e.products,c=t.filter((function(e){return e.type===L.phone})).length,s=t.filter((function(e){return e.type===L.tablet})).length,a=t.filter((function(e){return e.type===L.accessory})).length;return Object(l.jsxs)("section",{className:"shop-by-category page__section",children:[Object(l.jsx)("h2",{className:"page__section-title",children:"Shop by category"}),Object(l.jsxs)("div",{className:"grid",children:[Object(l.jsx)("div",{className:"grid__item grid__item--1-8",children:Object(l.jsx)(Z,{image:V,backgroundColor:"#fcdbc1",title:"Mobile phones",text:"".concat(c," models"),link:"phones"})}),Object(l.jsx)("div",{className:"grid__item grid__item--9-16",children:Object(l.jsx)(Z,{image:D,backgroundColor:"#8d8d92",title:"Tablets",text:"".concat(s," models"),link:"tablets"})}),Object(l.jsx)("div",{className:"grid__item grid__item--17-24",children:Object(l.jsx)(Z,{image:J,backgroundColor:"#973d5f",title:"Accessories",text:"".concat(a," models"),link:"accessories"})})]})]})},U=(c(56),function(e){var t=e.products;return Object(l.jsxs)("section",{className:"brand-new page__section",children:[Object(l.jsx)("h2",{className:"brand-new__title page__section-title",children:"Brand new models"}),Object(l.jsx)(H,{products:t})]})}),Y=(c(57),c.p+"static/media/arrow-up.a61ad2d0.svg"),X=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)(p,{}),Object(l.jsx)("nav",{className:"footer__nav",children:Object(l.jsxs)("ul",{className:"footer__list",children:[Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{className:"footer__link",href:"https://github.com/OlhaArama/react_phone-catalog",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{className:"footer__link",href:"mailto:arama.o.f@gmail.com",target:"_blank",rel:"noreferrer",children:"Contacts"})}),Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{className:"footer__link",href:"https://github.com/OlhaArama/react_phone-catalog",target:"_blank",rel:"noreferrer",children:"Rights"})})]})}),Object(l.jsx)("button",{type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"footer__scroll-button",children:Object(l.jsx)("img",{src:Y,alt:"arrow up"})})]})},z=(c(58),function(){return Object(l.jsx)("p",{className:"error-message",children:"Something went wrong!"})}),G=function(e){var t=e.products,c=e.isError,s=Object(o.useMemo)((function(){return t.filter((function(e){return e.discount>0}))}),[t]),a=Object(o.useMemo)((function(){return t.filter((function(e){return!e.discount}))}),[t]);return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(w,{}),Object(l.jsx)("div",{className:"page__content",children:c?Object(l.jsx)(z,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(E,{}),Object(l.jsx)(Q,{products:s}),Object(l.jsx)(W,{products:t}),Object(l.jsx)(U,{products:a})]})}),Object(l.jsx)(X,{})]})};function K(e,t){return Object.entries(t).forEach((function(t){var c=Object(n.a)(t,2),s=c[0],a=c[1];null===a?e.delete(s):Array.isArray(a)?(e.delete(s),a.forEach((function(t){e.append(s,t)}))):e.set(s,a)})),e.toString()}!function(e){e.Name="name",e.Age="age",e.Price="price"}($||($={}));c(59);var ee=c.p+"static/media/home.e110292a.svg",te=function(e){var t=e.link,c=e.text,s=t?t[0].toUpperCase()+t.slice(1):"";return Object(l.jsxs)("div",{className:"breadcrumbs","data-cy":"breadCrumbs",children:[Object(l.jsx)(a.b,{to:"/",className:"breadcrumbs__item breadcrumbs__item--link",children:Object(l.jsx)("img",{src:ee,alt:"home icon"})}),Object(l.jsx)("img",{src:B,alt:"arrow right"}),t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.b,{to:"../../".concat(t,"s"),className:"breadcrumbs__item breadcrumbs__item--link",children:"".concat(s,"s")}),Object(l.jsx)("img",{src:B,alt:"arrow right"})]}),Object(l.jsx)("div",{className:"breadcrumbs__item",children:c})]})};te.defaultProps={link:""};var ce;c(60);!function(e){e.four="4",e.eight="8",e.sixteen="16",e.all="all"}(ce||(ce={}));var se=function(e){var t=e.total,c=Object(a.d)(),s=Object(n.a)(c,2),r=s[0],i=s[1],d=Object(o.useState)("Newest"),j=Object(n.a)(d,2),u=j[0],b=j[1],p=Object(o.useState)(ce.four),m=Object(n.a)(p,2),h=m[0],_=m[1],O=Object(o.useState)(!1),x=Object(n.a)(O,2),g=x[0],f=x[1],v=Object(o.useState)(!1),N=Object(n.a)(v,2),y=N[0],C=N[1],w=[ce.four,ce.eight,ce.sixteen,ce.all],k=function(){f((function(e){return!e}))},S=function(){C((function(e){return!e}))},P=function(e,t){i(K(r,{sort:e})),b(t),k()};return Object(l.jsx)("div",{className:"dropdowns",children:Object(l.jsxs)("div",{className:"dropdowns__content",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"dropdowns__text",children:"Sort by"}),Object(l.jsx)("button",{type:"button",onClick:k,className:"dropdowns__button",children:u}),g&&Object(l.jsxs)("ul",{className:"dropdowns__list",children:[Object(l.jsx)("li",{className:"dropdowns__item",onClick:function(){return P("age","Newest")},"aria-hidden":"true",children:"Newest"}),Object(l.jsx)("li",{className:"dropdowns__item",onClick:function(){return P("name","Alphabetically")},"aria-hidden":"true",children:"Alphabetically"}),Object(l.jsx)("li",{className:"dropdowns__item",onClick:function(){return P("price","Cheapest")},"aria-hidden":"true",children:"Cheapest"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"dropdowns__text",children:"Items on page"}),Object(l.jsx)("button",{type:"button",onClick:S,className:"dropdowns__button dropdowns__button--small",children:h}),y&&Object(l.jsx)("ul",{className:"dropdowns__list dropdowns__list--small",children:w.map((function(e){return Object(l.jsx)("li",{className:"dropdowns__item",onClick:function(){return function(e){i(K(r,{perPage:e!==ce.all?e:"".concat(t),page:"1"})),_(e),S()}(e)},"aria-hidden":"true",children:e},e)}))})]})]})})},ae=(c(61),function(e){var t=e.categoryName;return Object(l.jsx)("div",{className:"no-results",children:Object(l.jsx)("p",{className:"no-results__text",children:"".concat(t," not found")})})}),re=(c(62),function(){return Object(l.jsx)("p",{className:"no-search-results",children:"There are no products for your request."})}),ie=(c(26),function(e){var t=e.onChange,c=e.text;return Object(l.jsx)("button",{type:"button",className:"paginations__button",onClick:t,children:c})}),ne=function(e){var t=e.item,c=e.currentPage,s=e.setCurrentPage;return Object(l.jsx)("li",{className:"paginations__item",children:Object(l.jsx)("button",{type:"button",className:h()("paginations__button",{"paginations__button--active":t===c}),onClick:function(){return s(t)},children:t})})},oe=function(e){for(var t=e.total,c=e.perPage,s=e.currentPage,a=e.setCurrentPage,r=[],i=Math.ceil(t/c),n=1;n<=i;n+=1)r.push(n);return Object(l.jsx)("div",{className:"paginations","data-cy":"pagination",children:Object(l.jsxs)("ul",{className:"paginations__list",children:[Object(l.jsx)("li",{className:"paginations__item","data-cy":"paginationLeft",children:Object(l.jsx)(ie,{onChange:function(){1!==s&&a(s-1)},text:"<"})}),r.map((function(e){return Object(l.jsx)(ne,{item:e,currentPage:s,setCurrentPage:a},e)})),Object(l.jsx)("li",{className:"paginations__item","data-cy":"paginationRight",children:Object(l.jsx)(ie,{onChange:function(){s!==i&&a(s+1)},text:">"})})]})})},de=(c(63),function(e){var t=e.phones;return Object(l.jsx)("div",{className:"products-list","data-cy":"productList",children:Object(l.jsx)("div",{className:"products-list__content",children:t.map((function(e){return Object(l.jsx)(T,{product:e},e.id)}))})})}),le=function(e){var t=e.products,c=e.query,s=e.title,r=e.categoryName,d=t.length,j=Object(a.d)(),u=Object(n.a)(j,2),b=u[0],p=u[1],m=b.get("page")||"1",h=b.get("perPage")||"4",_=b.get("sort")||"",O=function(e){return e.discount>0?e.price-e.price*e.discount/100:e.price},x=Object(o.useMemo)((function(){return c?t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase().trim())})):Object(i.a)(t)}),[c,t]),g=Object(o.useMemo)((function(){return Object(i.a)(x).sort((function(e,t){switch(_){case $.Name:return e.name.localeCompare(t.name);case $.Age:return e.age-t.age;case $.Price:return O(e)-O(t);default:return 0}}))}),[t,_,x]),f=+m*+h,v=f-+h,N=g.slice(v,f);return Object(l.jsx)("section",{className:"page__section",children:t.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"page__links-wrapper",children:Object(l.jsx)(te,{text:r})}),Object(l.jsx)("h1",{className:"page__title",children:s}),Object(l.jsx)("h2",{className:"page__subtitle",children:"".concat(t.length," models")}),!!g.length&&Object(l.jsx)(se,{total:d}),Object(l.jsx)(de,{phones:N}),!g.length&&Object(l.jsx)(re,{}),d>+h&&!!g.length&&Object(l.jsx)(oe,{total:d,perPage:+h,currentPage:+m,setCurrentPage:function(e){p(K(b,{page:"".concat(e)}))}})]}):Object(l.jsx)(ae,{categoryName:r})})},je=function(e){var t=e.phones,c=e.isError,s=Object(o.useState)(""),a=Object(n.a)(s,2),r=a[0],i=a[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(w,{search:"phones",setQuery:i}),Object(l.jsx)("div",{className:"page__content",children:c?Object(l.jsx)(z,{}):Object(l.jsx)(le,{products:t,query:r,title:"Mobile phones",categoryName:"Phones"})}),Object(l.jsx)(X,{})]})},ue=function(e){var t=e.tablets,c=e.isError,s=Object(o.useState)(""),a=Object(n.a)(s,2),r=a[0],i=a[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(w,{search:"tablets",setQuery:i}),Object(l.jsx)("div",{className:"page__content",children:c?Object(l.jsx)(z,{}):Object(l.jsx)(le,{products:t,query:r,title:"Tablets",categoryName:"Tablets"})}),Object(l.jsx)(X,{})]})},be=function(e){var t=e.accessories,c=e.isError,s=Object(o.useState)(""),a=Object(n.a)(s,2),r=a[0],i=a[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(w,{search:"accessories",setQuery:i}),Object(l.jsx)("div",{className:"page__content",children:c?Object(l.jsx)(z,{}):Object(l.jsx)(le,{products:t,query:r,title:"Accessories",categoryName:"Accessories"})}),Object(l.jsx)(X,{})]})},pe=function(){return Object(l.jsx)("div",{className:"page",children:Object(l.jsx)("div",{className:"page__content",children:Object(l.jsx)("h1",{children:"Page not found"})})})},me=(c(64),function(e){var t=e.productDetails,c=e.selectedProduct,s=(null===c||void 0===c?void 0:c.discount)>0?c.price-c.price*c.discount/100:c.price,a=Object(o.useState)(null===t||void 0===t?void 0:t.images[0]),r=Object(n.a)(a,2),i=r[0],d=r[1];return Object(l.jsx)("div",{className:"product-details",children:Object(l.jsxs)("div",{className:"grid",children:[Object(l.jsx)("div",{className:"grid__item grid__item--1-2",children:null===t||void 0===t?void 0:t.images.map((function(e){return Object(l.jsx)("div",{className:"product-details__image-wrapper",onClick:function(){return d(e)},"aria-hidden":"true",children:Object(l.jsx)("img",{src:e,alt:t.name,className:"product-details__image"})},e)}))}),Object(l.jsx)("div",{className:"grid__item grid__item--4-11",children:Object(l.jsx)("div",{className:"product-details__image-wrapper--main",children:Object(l.jsx)("img",{src:i,alt:null===t||void 0===t?void 0:t.name,className:"product-details__image"})})}),Object(l.jsxs)("div",{className:"grid__item grid__item--14-20",children:[Object(l.jsxs)("div",{className:"product-details__prices",children:[Object(l.jsx)("span",{className:"product-details__new-price",children:"$".concat(s)}),c.discount>0&&Object(l.jsx)("span",{className:"product-details__old-price",children:"$".concat(c.price)})]}),Object(l.jsxs)("div",{className:"product-details__buttons-wrapper",children:[Object(l.jsx)(M,{product:c,isBigButton:!0}),Object(l.jsx)(R,{product:c,isBigButton:!0})]}),Object(l.jsxs)("div",{className:"product-details__characteristics",children:[Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__text",children:"Screen"}),Object(l.jsx)("span",{className:" product-details__characteristic-value product-details__text",children:c.screen})]}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__text",children:"Resolution"}),Object(l.jsx)("span",{className:" product-details__characteristic-value product-details__text",children:null===t||void 0===t?void 0:t.display.screenResolution})]}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__text",children:"Processor"}),Object(l.jsx)("span",{className:" product-details__characteristic-value product-details__text",children:"processor"})]}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__text",children:"RAM"}),Object(l.jsx)("span",{className:" product-details__characteristic-value product-details__text",children:null===t||void 0===t?void 0:t.storage.ram})]})]})]}),Object(l.jsx)("div",{className:"grid__item grid__item--23-24",children:Object(l.jsx)("div",{className:"product-details__text product-details__id",children:"ID: ".concat(c.id)})}),Object(l.jsxs)("div",{className:"grid__item grid__item--1-12","data-cy":"productDescription",children:[Object(l.jsx)("h2",{className:"product-details__description-title",children:"About"}),Object(l.jsx)("p",{className:"product-details__description-text",children:null===t||void 0===t?void 0:t.description})]}),Object(l.jsxs)("div",{className:"grid__item grid__item--14-24",children:[Object(l.jsx)("h2",{className:"product-details__description-title",children:"Tech specs"}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__description-text",children:"Screen"}),Object(l.jsx)("span",{className:" product-details__description-text product-details__description-text--primary",children:c.screen})]}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__description-text",children:"Resolution"}),Object(l.jsx)("span",{className:" product-details__description-text product-details__description-text--primary",children:null===t||void 0===t?void 0:t.display.screenResolution})]}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__description-text",children:"OS"}),Object(l.jsx)("span",{className:" product-details__description-text product-details__description-text--primary",children:null===t||void 0===t?void 0:t.android.os})]}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__description-text",children:"Processor"}),Object(l.jsx)("span",{className:" product-details__description-text product-details__description-text--primary",children:"processor"})]}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__description-text",children:"Weight"}),Object(l.jsx)("span",{className:" product-details__description-text product-details__description-text--primary",children:null===t||void 0===t?void 0:t.sizeAndWeight.weight})]}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__description-text",children:"Battery type"}),Object(l.jsx)("span",{className:" product-details__description-text product-details__description-text--primary",children:null===t||void 0===t?void 0:t.battery.type})]}),Object(l.jsxs)("div",{className:"product-details__characteristic",children:[Object(l.jsx)("span",{className:"product-details__description-text",children:"Cell"}),Object(l.jsx)("span",{className:" product-details__description-text product-details__description-text--primary",children:null===t||void 0===t?void 0:t.connectivity.cell})]})]})]})})}),he=(c(65),function(e){var t=e.selectedProduct,c=Object(o.useState)([]),s=Object(n.a)(c,2),a=s[0],r=s[1],i=Object(o.useState)(!1),d=Object(n.a)(i,2),j=d[0],u=d[1];Object(o.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){if(!e.ok)throw new Error;return e.json()})).then(r).catch((function(){u(!0)}))}),[]);var b=a.filter((function(e){return e.id!==t.id}));return Object(l.jsx)(l.Fragment,{children:!j&&Object(l.jsxs)("section",{className:"suggested-products page__section",children:[Object(l.jsx)("h2",{className:"page__section-title",children:"You may also like"}),Object(l.jsx)(H,{products:b})]})})}),_e=function(e){var t=e.products,c=Object(o.useState)(),s=Object(n.a)(c,2),r=s[0],i=s[1],d=Object(b.o)().productId,j=void 0===d?"":d,u=Object(o.useState)(""),p=Object(n.a)(u,2),m=p[0],h=p[1];Object(o.useEffect)((function(){fetch("".concat("https://mate-academy.github.io/react_phone-catalog/api/products","/").concat(j,".json")).then((function(e){if(!e.ok)throw new Error;return e.json()})).then(i).catch((function(){h("Something went wrong!")}))}),[j]);var _=t.find((function(e){return e.id===(null===r||void 0===r?void 0:r.id)}));return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(w,{}),Object(l.jsx)("div",{className:"page__content",children:m?Object(l.jsx)("p",{children:m}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"page__links-wrapper",children:Object(l.jsx)(te,{link:(null===_||void 0===_?void 0:_.type)||"",text:(null===_||void 0===_?void 0:_.name)||""})}),Object(l.jsx)(a.b,{to:"../",className:"page__link-back","data-cy":"backButton",children:"Back"}),Object(l.jsxs)("section",{className:"page__section",children:[Object(l.jsx)("h1",{className:"page__title page__title--margin-40",children:null===r||void 0===r?void 0:r.name}),_&&Object(l.jsx)(me,{productDetails:r,selectedProduct:_})]}),_&&Object(l.jsx)(he,{selectedProduct:_})]})}),Object(l.jsx)(X,{})]})},Oe=(c(66),function(){var e=Object(o.useState)(!1),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(o.useContext)(j).cartItems,r=a.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),i=a.map((function(e){return e.quantity*function(e){var t=a.find((function(t){return t.id===e.id}));return t?t.product.discount>0?t.product.price-t.product.price*t.product.discount/100:t.product.price:0}(e.product)})).reduce((function(e,t){return e+t}));return Object(l.jsxs)("div",{className:"total",children:[Object(l.jsx)("div",{className:"total__amount",children:"$".concat(i)}),Object(l.jsx)("p",{className:"total__text","data-cy":"productQauntity",children:"Total for ".concat(r," items")}),Object(l.jsx)("button",{type:"button",className:"total__button",onClick:function(){s(!0),setTimeout((function(){s(!1)}),3e3)},children:"Checkout"}),c&&Object(l.jsx)("p",{className:"total__message",children:"We are sorry, but this feature is not implemented yet"})]})}),xe=(c(67),function(e){var t=e.cartItem,c=Object(o.useContext)(j),s=c.deleteProductFromCart,a=c.increaseQuantity,r=c.decreaseQuantity,i=t.quantity,n=t.product,d=n.discount>0?n.price-n.price*n.discount/100:n.price,u=1===i;return Object(l.jsx)("div",{className:"cart-item",children:Object(l.jsxs)("div",{className:"cart-item__content",children:[Object(l.jsxs)("div",{className:"cart-item__part",children:[Object(l.jsx)("button",{type:"button",className:"cart-item__cross-button",onClick:function(){return s(n)},"data-cy":"cartDeleteButton",children:Object(l.jsx)("img",{src:x,alt:"cross icon"})}),Object(l.jsx)("div",{className:"cart-item__image-wrapper",children:Object(l.jsx)("img",{src:n.imageUrl,alt:n.name,className:"cart-item__image"})}),Object(l.jsx)("p",{className:"cart-item__text cart-item__text--name",children:n.name})]}),Object(l.jsxs)("div",{className:"cart-item__part",children:[Object(l.jsxs)("div",{className:"cart-item__buttons-wrapper",children:[Object(l.jsx)("button",{type:"button",className:"cart-item__button",onClick:function(){return r(n)},disabled:u,children:Object(l.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",className:h()("cart-item__icon",{"cart-item__icon--disabled":u}),children:Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.6665 7.99999C2.6665 7.63181 2.96498 7.33333 3.33317 7.33333H12.6665C13.0347 7.33333 13.3332 7.63181 13.3332 7.99999C13.3332 8.36818 13.0347 8.66666 12.6665 8.66666H3.33317C2.96498 8.66666 2.6665 8.36818 2.6665 7.99999Z"})})}),Object(l.jsx)("span",{className:"cart-item__text",children:i}),Object(l.jsx)("button",{type:"button",className:"cart-item__button",onClick:function(){return a(n)},children:Object(l.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",className:"cart-item__icon",children:Object(l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.6665 3.33334C8.6665 2.96515 8.36803 2.66667 7.99984 2.66667C7.63165 2.66667 7.33317 2.96515 7.33317 3.33334V7.33334H3.33317C2.96498 7.33334 2.6665 7.63182 2.6665 8.00001C2.6665 8.3682 2.96498 8.66667 3.33317 8.66667H7.33317V12.6667C7.33317 13.0349 7.63165 13.3333 7.99984 13.3333C8.36803 13.3333 8.6665 13.0349 8.6665 12.6667V8.66667H12.6665C13.0347 8.66667 13.3332 8.3682 13.3332 8.00001C13.3332 7.63182 13.0347 7.33334 12.6665 7.33334H8.6665V3.33334Z"})})})]}),Object(l.jsx)("div",{className:"cart-item__price",children:"$".concat(d)})]})]})})}),ge=function(){var e=Object(o.useContext)(j).cartItems;return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(w,{isCartPageOpen:!0}),Object(l.jsxs)("div",{className:"page__content",children:[Object(l.jsx)("h1",{className:"page__title page__title--margin-24",children:"Cart"}),e.length>0?Object(l.jsx)("section",{className:"page__section",children:Object(l.jsxs)("div",{className:"grid",children:[Object(l.jsx)("div",{className:"grid__item grid__item--1-16",children:e.map((function(e){return Object(l.jsx)(xe,{cartItem:e},e.id)}))}),Object(l.jsx)("div",{className:"grid__item grid__item--17-24",children:Object(l.jsx)(Oe,{})})]})}):Object(l.jsx)("p",{children:"Your cart is empty"})]}),Object(l.jsx)(X,{})]})},fe=function(){var e=Object(o.useContext)(j).favorites,t=e.length,c=Object(o.useState)(""),s=Object(n.a)(c,2),a=s[0],r=s[1],d=a?e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase().trim())})):Object(i.a)(e);return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(w,{search:"favourites",setQuery:r}),Object(l.jsxs)("div",{className:"page__content",children:[Object(l.jsx)("h1",{className:"page__title",children:"Favourites"}),Object(l.jsx)("h2",{className:"page__subtitle",children:"".concat(t," items")}),Object(l.jsx)("section",{className:"page__section",children:e.length>0?Object(l.jsx)("div",{className:"page__cards-list",children:d.map((function(e){return Object(l.jsx)(T,{product:e})}))}):Object(l.jsx)("p",{children:"Your favourites cart is empty"})})]}),Object(l.jsx)(X,{})]})},ve=function(){var e=Object(o.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!1),r=Object(n.a)(a,2),i=r[0],d=r[1];Object(o.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){if(!e.ok)throw new Error;return e.json()})).then(s).catch((function(){d(!0)}))}),[]);var j=c.filter((function(e){return e.type===L.phone})),u=c.filter((function(e){return e.type===L.tablet})),p=c.filter((function(e){return e.type===L.accessory}));return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(b.c,{children:[Object(l.jsxs)(b.a,{path:"/",children:[Object(l.jsx)(b.a,{index:!0,element:Object(l.jsx)(G,{products:c,isError:i})}),Object(l.jsx)(b.a,{path:":productId",element:Object(l.jsx)(_e,{products:c})})]}),Object(l.jsxs)(b.a,{path:"phones",children:[Object(l.jsx)(b.a,{index:!0,element:Object(l.jsx)(je,{phones:j,isError:i})}),Object(l.jsx)(b.a,{path:":productId",element:Object(l.jsx)(_e,{products:j})})]}),Object(l.jsxs)(b.a,{path:"tablets",children:[Object(l.jsx)(b.a,{index:!0,element:Object(l.jsx)(ue,{tablets:u,isError:i})}),Object(l.jsx)(b.a,{path:":productId",element:Object(l.jsx)(_e,{products:u})})]}),Object(l.jsxs)(b.a,{path:"accessories",children:[Object(l.jsx)(b.a,{index:!0,element:Object(l.jsx)(be,{accessories:p,isError:i})}),Object(l.jsx)(b.a,{path:":productId",element:Object(l.jsx)(_e,{products:p})})]}),Object(l.jsx)(b.a,{path:"favorites",element:Object(l.jsx)(fe,{})}),Object(l.jsx)(b.a,{path:"shoppingBag",element:Object(l.jsx)(ge,{})}),Object(l.jsx)(b.a,{path:"*",element:Object(l.jsx)(pe,{})})]})})},Ne=function(){var e=Object(b.k)().pathname;return Object(o.useEffect)((function(){document.documentElement.scrollTo({top:0,left:0})}),[e]),null};Object(s.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsxs)(u,{children:[Object(l.jsx)(Ne,{}),Object(l.jsx)(ve,{})]})}))}],[[68,1,2]]]);
//# sourceMappingURL=main.983a1a0e.chunk.js.map