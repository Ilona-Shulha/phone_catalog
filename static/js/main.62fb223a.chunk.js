(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],Array(38).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(30),i=c.n(r),o=c(7),l=c(8),d=c(28),u=c(4),j=c(3),b=s.a.createContext({cartContent:[],updateCartContent:function(){}}),_=s.a.createContext({likeProducts:[],updateLikeContent:function(){}}),h=c(9),m=c.n(h),O=function(e){var t=e.to,c=e.text;return Object(a.jsx)(o.c,{to:t,className:function(e){var t=e.isActive;return m()("Nav__Link",{"Nav__Link--Active":t})},children:c})},g=function(){return Object(a.jsx)("nav",{className:"nav Header__Nav",children:Object(a.jsxs)("ul",{className:"Nav__List",children:[Object(a.jsx)("li",{className:"Nav__Item",children:Object(a.jsx)(O,{to:"/phone_catalog/",text:"home"})}),Object(a.jsx)("li",{className:"Nav__Item",children:Object(a.jsx)(O,{to:"/phone_catalog/phones",text:"phones"})}),Object(a.jsx)("li",{className:"Nav__Item",children:Object(a.jsx)(O,{to:"/phone_catalog/tablets",text:"tablets"})}),Object(a.jsx)("li",{className:"Nav__Item",children:Object(a.jsx)(O,{to:"/phone_catalog/accessories",text:"accessories"})})]})})},p=(c(38),function(e){var t=e.pageCategory,c=Object(o.d)(),s=Object(u.a)(c,2),r=s[0],i=s[1],l=r.get("query")||"",d=Object(n.useState)(l),j=Object(u.a)(d,2),b=j[0],_=j[1],h=function(e){r.get("query")!==e&&(e?r.set("query",e):r.delete("query"),i(r))},m=Object(n.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];c=setTimeout.apply(void 0,[e,t].concat(n))}}(h,1e3),[t,r]);return Object(n.useEffect)((function(){""===l&&_("")}),[r]),Object(a.jsxs)("form",{action:"get",className:"Search",onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("input",{type:"input",className:"Search__Input",placeholder:"Search in ".concat(t,"..."),value:b,onChange:function(e){_(e.target.value),m(e.target.value)}}),Object(a.jsx)("button",{type:"button",className:"Search__Close","data-cy":"searchDelete",disabled:!b,onClick:function(){h(""),_("")},children:" "})]})}),x=(c(39),function(){var e=Object(n.useContext)(b),t=Object(n.useContext)(_),c=Object(j.l)().pathname,s=["phones","tablets","accessories","favorites"].find((function(e){return c.endsWith(e)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("header",{className:"Header",id:"Header",children:[Object(a.jsx)(o.b,{to:"/phone_catalog/",className:"Logo Header__Logo",children:Object(a.jsx)("img",{src:"img/logo.svg",alt:"our company"})}),Object(a.jsx)(g,{}),Object(a.jsxs)("div",{className:"ShopingNav Header__ShopingNav",children:[s&&Object(a.jsx)(p,{pageCategory:s}),Object(a.jsx)(o.c,{to:"/phone_catalog/favorites",className:function(e){var t=e.isActive;return m()("ShopingNav__Link","ShopingNav__Link--favorites",{"ShopingNav__Link--active":t})},children:Object(a.jsx)("div",{className:"ShopingNav__FavoritesQuantity",hidden:0===t.likeProducts.length,children:t.likeProducts.length})}),Object(a.jsx)(o.c,{to:"/phone_catalog/cart",className:function(e){var t=e.isActive;return m()("ShopingNav__Link","ShopingNav__Link--cart",{"ShopingNav__Link--active":t})},children:Object(a.jsx)("div",{className:"ShopingNav__ProductsQuantity",hidden:0===e.cartContent.length,children:e.cartContent.reduce((function(e,t){return e+t.quantity}),0)})})]})]}),Object(a.jsx)(j.a,{}),Object(a.jsxs)("footer",{className:"Footer",children:[Object(a.jsx)("a",{href:"#",className:"Logo Footer__Logo",children:Object(a.jsx)("img",{src:"img/logo.svg",alt:"our company"})}),Object(a.jsx)("div",{className:"Nav Footer__Nav",children:Object(a.jsxs)("ul",{className:"Nav__List",children:[Object(a.jsx)("li",{className:"Nav__Item",children:Object(a.jsx)("a",{href:"https://github.com/Ilona-Shulha",className:"Nav__Link",target:"_blank",rel:"nofollow noopener noreferrer",children:"github"})}),Object(a.jsx)("li",{className:"Nav__Item",children:Object(a.jsx)(o.b,{to:"/phone_catalog/",className:"Nav__Link",children:"contacts"})}),Object(a.jsx)("li",{className:"Nav__Item",children:Object(a.jsx)(o.b,{to:"/phone_catalog/",className:"Nav__Link",children:"rights"})})]})}),Object(a.jsx)("a",{href:"#Header",className:"Footer__ButtonTop",children:" "})]})]})}),f=function(e){var t=e.num,c=e.isActive;return Object(a.jsx)("img",{hidden:!c,src:"./img/app-top-slide-".concat(t,".jpg"),alt:"slide".concat(t),className:"AdSlider__SlideImg AdSlider__SlideImg--".concat(t)})},P=(c(40),function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([1,2,3]),i=Object(u.a)(r,1)[0],o=function(e){var t=e;e>i.length&&(t=i[0]),e<1&&(t=i.length),s(t)};return Object(a.jsxs)("section",{className:"AdSlider",children:[Object(a.jsxs)("div",{className:"AdSlider__Slider",children:[Object(a.jsx)("button",{type:"button",className:"AdSlider__Button AdSlider__Button--Prev",onClick:function(){return o(c-1)},children:" "}),Object(a.jsx)("ul",{className:"AdSlider__SlidesContainer",children:i.map((function(e){return Object(a.jsx)("li",{className:"AdSlider__Slide",children:Object(a.jsx)(f,{num:e,isActive:e===c})},e)}))}),Object(a.jsx)("button",{type:"button",className:"AdSlider__Button AdSlider__Button--Next",onClick:function(){return o(c+1)},children:" "})]}),Object(a.jsx)("ul",{className:"AdSlider__Bullets",children:i.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("button",{type:"button",onClick:function(){return o(e)},className:m()("AdSlider__Bullet","AdSlider__Bullet--".concat(e),{"AdSlider__Bullet--active":e===c})})},e)}))})]})}),N=function(e,t){return fetch("https://mate-academy.github.io/react_phone-catalog/api/".concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status,"-").concat(e.statusText));return e.json()}))},y=function(){return N("products.json")},v=c(10),C=c(29),S=(c(41),function(e){var t=e.screen,c=e.capacity,n=e.ram;return Object(a.jsxs)("div",{className:"AdditionalInfo",children:[Object(a.jsxs)("div",{className:"AdditionalInfo__Feature",children:[Object(a.jsx)("p",{className:"AdditionalInfo__FeatureKey",children:"Screen"}),Object(a.jsx)("p",{className:"AdditionalInfo__FeatureValue",children:t.split(" ").join('" ')})]}),Object(a.jsxs)("div",{className:"AdditionalInfo__Feature",children:[Object(a.jsx)("p",{className:"AdditionalInfo__FeatureKey",children:"Capacity"}),Object(a.jsx)("p",{className:"AdditionalInfo__FeatureValue",children:"".concat(c.slice(0,-2)," ").concat(c.slice(-2))})]}),Object(a.jsxs)("div",{className:"AdditionalInfo__Feature",children:[Object(a.jsx)("p",{className:"AdditionalInfo__FeatureKey AdditionalInfo__FeatureKey--uppercase",children:"ram"}),Object(a.jsx)("p",{className:"AdditionalInfo__FeatureValue",children:"".concat(n.slice(0,-2)," ").concat(n.slice(-2))})]})]})}),B=(c(42),function(e){var t=e.product,c=t.imageUrl,s=t.name,r=t.price,i=t.discount,l=t.screen,d=t.capacity,j=t.ram,h=t.type,O=t.id,g=Object(n.useState)(""),p=Object(u.a)(g,2),x=p[0],f=p[1],P=Object(n.useContext)(b),N=Object(n.useContext)(_);return Object(n.useEffect)((function(){switch(h){case"phone":f("phones");break;case"tablet":f("tablets");break;default:f("accessories")}}),[]),Object(a.jsxs)(o.b,{to:"/phone_catalog/".concat(x,"/").concat(O),className:"ProductCard","data-cy":"cardsContainer",children:[Object(a.jsxs)("div",{className:"ProductCard__MainInfo",children:[Object(a.jsx)("img",{src:"/phone_catalog/".concat(c),alt:s,className:"ProductCard__Img"}),Object(a.jsx)("p",{className:"ProductCard__Name",children:s}),Object(a.jsx)("span",{className:"ProductCard__CurrentPrice",children:"$".concat(r-r*(i/100))}),Object(a.jsx)("span",{className:"ProductCard__UnactualPrice",hidden:0===i,children:"$".concat(r)})]}),Object(a.jsx)(S,{screen:l,capacity:d,ram:j}),Object(a.jsxs)("div",{className:"ProductCard__CardButtons CardButtons",children:[Object(a.jsx)("button",{type:"button",className:m()("CardButtons__AddButton",{"CardButtons__AddButton--added":P.cartContent.some((function(e){return e.id===O}))}),onClick:function(e){e.preventDefault(),P.updateCartContent("add",{id:O,quantity:1,product:t})},children:P.cartContent.some((function(e){return e.id===O}))?"Added to cart":"Add to cart"}),Object(a.jsx)("button",{type:"button","data-cy":"addToFavorite",className:m()("CardButtons__LikeButton",{"CardButtons__LikeButton--active":N.likeProducts.some((function(e){return e.id===O}))}),onClick:function(e){e.preventDefault(),N.updateLikeContent(t)}})]})]})}),k=(c(43),c(44),c(45),function(e){var t=e.allProducts,c=e.title;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"ProductsSlider__SliderTop",children:[Object(a.jsx)("h2",{className:"ProductsSlider__SectionTitle",children:c}),Object(a.jsxs)("div",{className:"ProductsSlider__Buttons",children:[Object(a.jsx)("button",{type:"button",className:"ProductsSlider__ButtonPrev",children:" "}),Object(a.jsx)("button",{type:"button",className:"ProductsSlider__ButtonNext",children:" "})]})]}),Object(a.jsx)(C.a,{modules:[v.c,v.d,v.b,v.a],navigation:{nextEl:".ProductsSlider__ButtonNext",prevEl:".ProductsSlider__ButtonPrev"},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},slidesPerView:4,spaceBetween:16,grabCursor:!0,loop:!0,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!0},children:Object(a.jsx)(a.Fragment,{children:t.map((function(e){return Object(a.jsx)(C.b,{children:Object(a.jsx)(B,{product:e})},e.id)}))})})]})}),D=(c(46),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),i=Object(u.a)(r,2),l=i[0],d=i[1];return Object(n.useEffect)((function(){y().then((function(e){return e.filter((function(e){return e.discount>0})).sort((function(e,t){var c=e.price*(e.discount/100);return t.price*(t.discount/100)-c}))})).then((function(e){return s(e)})),y().then((function(e){return e.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}))})).then((function(e){return d(e)}))}),[]),Object(a.jsxs)("main",{className:"HomePage",children:[Object(a.jsx)("section",{className:"HomePage__HeaderSlider",children:Object(a.jsx)(P,{})}),Object(a.jsx)("section",{className:"HomePage__HotProducts",children:Object(a.jsx)(k,{allProducts:c,title:"Hot prices"})}),Object(a.jsxs)("section",{className:"HomePage__ShopByCategory ShopByCategory",children:[Object(a.jsx)("h2",{className:"ShopByCategory__SectionTitle",children:"Shop by category"}),Object(a.jsxs)("div",{className:"ShopByCategory__Categories","data-cy":"categoryLinksContainer",children:[Object(a.jsxs)(o.b,{className:"ShopByCategory__Category",to:"/phone_catalog/phones",children:[Object(a.jsx)("img",{src:"./img/category-phones.jpg",alt:"category-phones",className:"ShopByCategory__CategoryImg"}),Object(a.jsx)("h4",{className:"ShopByCategory__CategoryTitle",children:"Mobile phones"}),Object(a.jsx)("p",{className:"ShopByCategory__CategoryCount",children:"95 models"})]}),Object(a.jsxs)(o.b,{className:"ShopByCategory__Category",to:"/phone_catalog/tablets",children:[Object(a.jsx)("img",{src:"./img/category-tablets.jpg",alt:"category-tablets",className:"ShopByCategory__CategoryImg"}),Object(a.jsx)("h4",{className:"ShopByCategory__CategoryTitle",children:"Tablets"}),Object(a.jsx)("p",{className:"ShopByCategory__CategoryCount",children:"24 models"})]}),Object(a.jsxs)(o.b,{className:"ShopByCategory__Category",to:"/phone_catalog/accessories",children:[Object(a.jsx)("img",{src:"./img/category-accessories.jpg",alt:"category-accessories",className:"ShopByCategory__CategoryImg"}),Object(a.jsx)("h4",{className:"ShopByCategory__CategoryTitle",children:"Accessories"}),Object(a.jsx)("p",{className:"ShopByCategory__CategoryCount",children:"100 models"})]})]})]}),Object(a.jsx)("section",{className:"HomePage__NewProducts",children:Object(a.jsx)(k,{allProducts:l,title:"Brand new models"})})]})}),F=(c(47),function(){var e=Object(j.l)().pathname.split("/");return Object(a.jsxs)("ul",{className:"Breadcrumbs","data-cy":"breadCrumbs",children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/phone_catalog/",className:"Breadcrumbs__LinkHome",children:" "})}),e.slice(1).map((function(t,c){return Object(a.jsx)("li",{children:c===e.slice(1).length-1?Object(a.jsx)("p",{className:"Breadcrumbs__Item",children:t}):Object(a.jsx)(o.b,{to:"".concat(e.slice(0,c+2).join("/"),"/"),className:"Breadcrumbs__Item Breadcrumbs__Item--link",children:t})},t)}))]})}),A=(c(48),function(e){var t=e.products;return Object(a.jsx)("ul",{className:"ProductsList","data-cy":"productList",children:t.map((function(e){return Object(a.jsx)("li",{className:"ProductsList__Item",children:Object(a.jsx)(B,{product:e})},e.id)}))})}),I=(c(49),function(e){var t=e.productsCount,c=e.perPage,s=e.currentPage,r=Object(n.useState)([]),i=Object(u.a)(r,2),l=i[0],d=i[1],j=Object(o.d)(),b=Object(u.a)(j,1)[0];return Object(n.useEffect)((function(){for(var e=Math.ceil(t/c),a=[],n=1;n<=e;n+=1)a.push(n);d(a)}),[t,c]),Object(a.jsxs)("ul",{className:"Pagination","data-cy":"pagination",children:[Object(a.jsx)("li",{className:"Pagination__Item",children:Object(a.jsx)(o.b,{to:{search:b.toString().replace(/page=\w+/,"page=".concat(+s-1))},"data-cy":"paginationLeft",className:m()("Pagination__Button","Pagination__Button--prev",{"Pagination__Button--disabled":s<=1}),children:" "})}),l.map((function(e){return Object(a.jsx)("li",{className:"Pagination__Item Pagination__Item--num",children:Object(a.jsx)(o.b,{to:{search:b.toString().includes("page")?b.toString().replace(/page=\w+/,"page=".concat(e)):"".concat(b.toString(),"&page=").concat(e)},className:m()("Pagination__Button",{"Pagination__Button--active":+s===e}),children:e})},e)})),Object(a.jsx)("li",{className:"Pagination__Item",children:Object(a.jsx)(o.b,{to:{search:b.toString().includes("page")?b.toString().replace(/page=\w+/,"page=".concat(+s+1)):"".concat(b.toString(),"&page=").concat(+s+1)},className:m()("Pagination__Button","Pagination__Button--next",{"Pagination__Button--disabled":s>=l.length}),"data-cy":"paginationRight",children:" "})})]})}),L=(c(50),function(e){var t=e.category;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{className:"NoResults",children:"".concat(t," not found")})})}),T=(c(51),function(e){var t=e.products,c=t.length,n=Object(o.d)(),s=Object(u.a)(n,1)[0].get("query");return Object(a.jsx)("section",{className:"SearchResult",children:0===c?Object(a.jsx)("p",{className:"SearchResult__NoResults",children:'"'.concat(s,'" not found')}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"SearchResult__Counter",children:"".concat(c," results")}),Object(a.jsx)(A,{products:t})]})})}),w=c(31),q=c.n(w),H=(c(52),function(e){var t=e.isLoading;return Object(a.jsx)(q.a,{className:"BeatLoader",color:"#313237",loading:t,speedMultiplier:.1,size:150})}),M=(c(55),function(e){var t=e.productType,c=Object(n.useState)(),s=Object(u.a)(c,2),r=s[0],i=s[1],d=Object(n.useState)(1),b=Object(u.a)(d,2),_=b[0],h=b[1],m=Object(o.d)(),O=Object(u.a)(m,2),g=O[0],p=O[1],x=g.get("page")||"1",f=g.get("perPage")||"4",P=g.get("sort")||"age",N=g.get("query"),v=function(){switch(t){case"phones":y().then((function(e){return e.filter((function(e){return"phone"===e.type}))})).then((function(e){i(e),h(e.length)}));break;case"tablets":y().then((function(e){return e.filter((function(e){return"tablet"===e.type}))})).then((function(e){i(e),h(e.length)}));break;default:y().then((function(e){return e.filter((function(e){return"accessory"===e.type}))})).then((function(e){i(e),h(e.length)}))}};Object(n.useEffect)((function(){v()}),[t]);var C=function(e){Object.entries(e).forEach((function(e){var t=Object(u.a)(e,2),c=t[0],a=t[1];g.set(c,a),"perPage"===c&&x>Math.ceil(_/a)&&g.set("page","1")})),p(g)};return Object(a.jsx)("main",{className:"ProductsPage",children:N&&r?Object(a.jsx)(T,{products:Object(l.a)(r).sort((function(e,t){return"number"!==typeof e[P]?e[P].localeCompare(t[P]):e[P]-t[P]})).filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())}))}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F,{}),Object(a.jsx)("h2",{className:"ProductsPage__Title",children:"phones"===t?"mobile phones":"".concat(t)}),Object(a.jsx)(H,{isLoading:!r}),r&&0===_&&Object(a.jsx)(L,{category:t}),r&&_>0&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"ProductsPage__ProductCount",children:"".concat(_," models")}),Object(a.jsxs)("div",{className:"ProductsPage__ViewSelects",children:[Object(a.jsxs)("label",{htmlFor:"productsSelect",children:["Sort by",Object(a.jsxs)("select",{className:"ProductsPage__Select",name:"productsSelect",id:"productsSelect",value:P,onChange:function(e){C({sort:e.target.value})},children:[Object(a.jsx)("option",{value:"age",children:"Newest"}),Object(a.jsx)("option",{value:"name",children:"Alphabetically"}),Object(a.jsx)("option",{value:"price",children:"Cheapest"})]})]}),Object(a.jsxs)("label",{htmlFor:"onPageSelect",className:"ProductsPage__OnPageLabel",children:["Items on page",Object(a.jsxs)("select",{name:"onPageSelect",id:"onPageSelect",className:"ProductsPage__Select",value:f,onChange:function(e){C({perPage:e.target.value})},children:[Object(a.jsx)("option",{value:"4",children:"4"}),Object(a.jsx)("option",{value:"8",children:"8"}),Object(a.jsx)("option",{value:"16",children:"16"}),Object(a.jsx)("option",{value:"".concat(_),children:"all"})]})]})]}),Object(a.jsx)(j.d,{children:Object(a.jsx)(j.b,{index:!0,element:Object(a.jsx)(A,{products:Object(l.a)(r).sort((function(e,t){return"number"!==typeof e[P]?e[P].localeCompare(t[P]):e[P]-t[P]})).slice((x-1)*f,x*f)})})}),f<_&&Object(a.jsx)(I,{productsCount:_,perPage:f,getSearchWith:C,currentPage:x})]})]})})}),E=(c(56),function(){var e=Object(j.o)();return Object(a.jsx)("button",{type:"button",className:"BackButton",onClick:function(){return e(-1)},"data-cy":"backButton",children:"Back"})}),R=(c(57),function(){var e=Object(n.useContext)(b),t=function(e){return e.price-e.price*(e.discount/100)};return Object(a.jsxs)("main",{className:"CartPage",children:[Object(a.jsx)("div",{className:"CartPage__BackButton",children:Object(a.jsx)(E,{})}),Object(a.jsx)("h2",{className:"CartPage__SectionTitle",children:"Cart"}),e.cartContent.length>0?Object(a.jsxs)("div",{className:"CartPage__Content",children:[Object(a.jsx)("div",{className:"CartPage__Products",children:e.cartContent.map((function(c){return Object(a.jsxs)("div",{className:"CartPage__Product",children:[Object(a.jsx)("button",{type:"button","data-cy":"cartDeleteButton",className:"CartPage__DelAllProduct",onClick:function(){return e.updateCartContent("delAll",{id:c.id})},children:" "}),Object(a.jsx)("img",{src:"/".concat(c.product.imageUrl),alt:"",className:"CartPage__ProductImg"}),Object(a.jsx)("p",{className:"CartPage__ProductName",children:c.product.name}),Object(a.jsxs)("div",{className:"CartPage__Counter",children:[Object(a.jsx)("button",{type:"button",className:m()("CartPage__DelProduct",{"CartPage__DelProduct--disabled":1===c.quantity}),onClick:function(){return e.updateCartContent("del",{id:c.id})},children:" "}),Object(a.jsx)("span",{children:c.quantity}),Object(a.jsx)("button",{type:"button",className:"CartPage__AddProduct",onClick:function(){return e.updateCartContent("add",{id:c.id})},children:" "})]}),Object(a.jsx)("p",{className:"CartPage__Price",children:"$".concat(t(c.product))})]},c.id)}))}),Object(a.jsxs)("div",{className:"CartPage__ShopInfo",children:[Object(a.jsxs)("div",{className:"CartPage__Total",children:[Object(a.jsx)("p",{className:"CartPage__TotalPrice",children:"$".concat(e.cartContent.reduce((function(e,c){return e+t(c.product)*c.quantity}),0))}),Object(a.jsx)("p",{className:"CartPage__TotalAmount","data-cy":"productQauntity",children:"Total for ".concat(e.cartContent.reduce((function(e,t){return e+t.quantity}),0)," items")})]}),Object(a.jsx)("button",{type:"button",className:"CartPage__BuyButton",children:"Checkout"})]})]}):Object(a.jsx)("p",{children:"Your cart is empty"})]})}),V=(c(58),function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(),i=Object(u.a)(r,2),o=i[0],l=i[1],d=Object(n.useState)(0),h=Object(u.a)(d,2),O=h[0],g=h[1],p=Object(n.useState)([]),x=Object(u.a)(p,2),f=x[0],P=x[1],v=Object(n.useContext)(b),C=Object(n.useContext)(_),B=Object(j.m)("/phone_catalog/:productType/:id");return Object(n.useEffect)((function(){var e,t;(e=B.params.id,y().then((function(t){return t.find((function(t){return t.id===e}))}))).then((function(e){return l(e)})),y().then((function(e){for(var t=e,c=t.length-1;c>0;c-=1){var a=Math.floor(Math.random()*(c+1)),n=[t[a],t[c]];t[c]=n[0],t[a]=n[1]}return t})).then((function(e){return P(e)})),(t=B.params.id,N("products/".concat(t,".json"))).then((function(e){return s(e)})).catch((function(){return s("Product was not found")}))}),[]),Object(a.jsxs)("main",{className:"ProductDetailsPage",children:[Object(a.jsx)(F,{}),Object(a.jsx)("div",{className:"ProductDetailsPage__BackButton",children:Object(a.jsx)(E,{})}),Object(a.jsx)(H,{isLoading:!c}),Object(a.jsxs)(a.Fragment,{children:[c&&"string"===typeof c&&Object(a.jsx)("p",{className:"ProductDetailsPage__NotFound",children:"Product was not found"}),c&&"string"!==typeof c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"ProductDetailsPage__Title",children:c.name}),Object(a.jsxs)("section",{className:"ProductDetailsPage__ProductInfo",children:[Object(a.jsxs)("div",{className:"ProductDetailsPage__Imgs",children:[Object(a.jsx)("div",{className:"ProductDetailsPage__References",children:c.images.map((function(e,t){return Object(a.jsx)("button",{className:"ProductDetailsPage__Reference",type:"button",onClick:function(){return g(t)},children:Object(a.jsx)("img",{className:"ProductDetailsPage__ReferenceImg",src:"/".concat(e),alt:"Product reference"})},e)}))}),Object(a.jsx)("div",{className:"ProductDetailsPage__MainImgContainer",children:c.images.map((function(e,t){return Object(a.jsx)("img",{className:"ProductDetailsPage__MainImg",src:"/".concat(e),alt:"Product reference",hidden:t!==O},e)}))})]}),Object(a.jsxs)("div",{className:"ProductDetailsPage__MainInfo",children:[Object(a.jsxs)("p",{className:"ProductDetailsPage__Price",children:[Object(a.jsx)("span",{className:"ProductDetailsPage__CurrentPrice",children:"$".concat(o.price-o.price*(o.discount/100))}),Object(a.jsx)("span",{className:"ProductDetailsPage__UnactualPrice",hidden:0===o.discount,children:"$".concat(o.price)})]}),Object(a.jsxs)("div",{className:"ProductDetailsPage__CardButtons",children:[Object(a.jsx)("button",{type:"button",className:m()("ProductDetailsPage__AddButton",{"ProductDetailsPage__AddButton--added":v.cartContent.some((function(e){return e.id===o.id}))}),onClick:function(){v.updateCartContent("add",{id:o.id,quantity:1,product:o})},children:v.cartContent.some((function(e){return e.id===o.id}))?"Added to cart":"Add to cart"}),Object(a.jsx)("button",{type:"button",className:m()("ProductDetailsPage__LikeButton",{"ProductDetailsPage__LikeButton--active":C.likeProducts.some((function(e){return e.id===o.id}))}),onClick:function(){C.updateLikeContent(o)},children:" "})]}),Object(a.jsx)(S,{screen:o.screen,ram:o.ram,capacity:o.capacity})]}),Object(a.jsxs)("div",{className:"ProductDetailsPage__AboutDescription","data-cy":"productDescription",children:[Object(a.jsx)("h3",{className:"ProductDetailsPage__Sibtitle",children:"About"}),Object(a.jsx)("p",{className:"ProductDetailsPage__AboutInfo",children:c.description})]}),Object(a.jsxs)("div",{className:"ProductDetailsPage__AboutTech",children:[Object(a.jsx)("h3",{className:"ProductDetailsPage__Sibtitle",children:"Tech specs"}),Object(a.jsxs)("div",{className:"ProductDetailsPage__Specs",children:[Object(a.jsxs)("div",{className:"ProductDetailsPage__Feature",children:[Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureKey",children:"Screen"}),Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureValue",children:c.display.screenSize})]}),Object(a.jsxs)("div",{className:"ProductDetailsPage__Feature",children:[Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureKey",children:"Resolution"}),Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureValue",children:c.display.screenResolution})]}),Object(a.jsxs)("div",{className:"ProductDetailsPage__Feature",children:[Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureKey",children:"Processor"}),Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureValue",children:c.android.ui})]}),Object(a.jsxs)("div",{className:m()("ProductDetailsPage__Feature",{"ProductDetailsPage__Feature--disabled":!c.storage.ram}),children:[Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureKey",children:"ram"}),Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureValue",children:"".concat(c.storage.ram.slice(0,-2)," ").concat(c.storage.ram.slice(-2))})]}),Object(a.jsxs)("div",{className:m()("ProductDetailsPage__Feature",{"ProductDetailsPage__Feature--disabled":!c.storage.flash}),children:[Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureKey",children:"Built in memory"}),Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureValue",children:"".concat(c.storage.flash.slice(0,-2)," ").concat(c.storage.flash.slice(-2))})]}),Object(a.jsxs)("div",{className:m()("ProductDetailsPage__Feature",{"ProductDetailsPage__Feature--disabled":!c.camera.primary}),children:[Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureKey",children:"Camera"}),Object(a.jsx)("p",{className:"ProductDetailsPage__FeatureValue",children:c.camera.primary})]})]})]})]}),Object(a.jsx)("section",{className:"ProductDetailsPage__SuggestedProducts",children:Object(a.jsx)(k,{allProducts:f,title:"You may also like"})})]})]})]})}),K=(c(59),function(){var e=Object(n.useContext)(_),t=Object(o.d)(),c=Object(u.a)(t,1)[0].get("query");return Object(a.jsx)("main",{className:"Favorites",children:c&&e.likeProducts.length>0?Object(a.jsx)(T,{products:e.likeProducts.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}))}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F,{}),Object(a.jsx)("h2",{className:"Favorites__Title",children:"Favourites"}),Object(a.jsx)("p",{className:"Favorites__Count",children:"".concat(e.likeProducts.length," items")}),Object(a.jsx)(A,{products:e.likeProducts})]})})}),$=(c(60),function(e){var t=e.product;return Object(a.jsxs)("main",{className:"NotFoundPage",children:[Object(a.jsx)("h2",{className:"NotFoundPage__title",children:t?"".concat(t," was not found"):"Page not found"}),Object(a.jsx)(o.b,{to:"/phone_catalog/",className:"NotFoundPage__ToHomePage",children:"Home page"})]})}),J=(c(61),function(e,t){var c=localStorage.getItem(e)||"",a=Object(n.useState)(0===c.length?t:JSON.parse(c)),s=Object(u.a)(a,2),r=s[0],i=s[1];return[r,function(t){i(t),localStorage.setItem(e,JSON.stringify(t))}]}),U=function(){var e=J("cartContent",[]),t=Object(u.a)(e,2),c=t[0],n=t[1],s=J("likeProducts",[]),r=Object(u.a)(s,2),i=r[0],o=r[1];return Object(a.jsx)(b.Provider,{value:{cartContent:c,updateCartContent:function(e,t){switch(e){case"delAll":n(c.filter((function(e){return e.id!==t.id})));break;case"del":c.some((function(e){return e.id===t.id&&e.quantity>1}))?n(c.map((function(e){return e.id===t.id?{el:e,quantity:e.quantity-1}:e}))):c.some((function(e){return e.id===t.id}))&&n(c.filter((function(e){return e.id!==t.id})));break;case"add":c.some((function(e){return e.id===t.id}))?n(c.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}))):n([].concat(Object(l.a)(c),[t]));break;default:n(Object(l.a)(c))}}},children:Object(a.jsx)(_.Provider,{value:{likeProducts:i,updateLikeContent:function(e){i.some((function(t){return t.id===e.id}))?o(i.filter((function(t){return t.id!==e.id}))):o([].concat(Object(l.a)(i),[e]))}},children:Object(a.jsx)(j.d,{children:Object(a.jsxs)(j.b,{path:"/phone_catalog/",element:Object(a.jsx)(x,{}),children:[Object(a.jsx)(j.b,{index:!0,element:Object(a.jsx)(D,{})}),Object(a.jsx)(j.b,{path:"*",element:Object(a.jsx)($,{})}),Object(a.jsx)(j.b,{path:"cart",element:Object(a.jsx)(R,{})}),Object(a.jsx)(j.b,{path:"favorites",element:Object(a.jsx)(K,{})}),Object(a.jsx)(j.b,{path:"accessories/",element:Object(a.jsx)(M,{productType:"accessories"})}),Object(a.jsx)(j.b,{path:"tablets/*",element:Object(a.jsx)(M,{productType:"tablets"})}),Object(a.jsx)(j.b,{path:"phones/*",element:Object(a.jsx)(M,{productType:"phones"})}),Object(a.jsx)(j.b,{path:"phones/:id",element:Object(a.jsx)(V,{})}),Object(a.jsx)(j.b,{path:"tablets/:id",element:Object(a.jsx)(V,{})}),Object(a.jsx)(j.b,{path:"accessories/:id",element:Object(a.jsx)(V,{})}),Object(a.jsx)(j.b,{path:":productType/:id",element:Object(a.jsx)(V,{})})]})})})})};i.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}]),[[62,1,2]]]);
//# sourceMappingURL=main.62fb223a.chunk.js.map