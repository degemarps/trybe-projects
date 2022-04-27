(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo_frontendOnlineStore.74f2e4ab.svg"},25:function(e,t,a){e.exports=a(45)},30:function(e,t,a){},31:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(21),o=a.n(c),i=(a(30),a(3)),s=a(4),l=a(6),u=a(5),d=a(12),p=a(1),m=a(7),h=(a(31),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={products:[]},e.getProducts=e.getProducts.bind(Object(m.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"getProducts",value:function(){var e=JSON.parse(localStorage.getItem("productsAdded"));e&&this.setState({products:e})}},{key:"render",value:function(){var e=this.state.products,t=e.map((function(e){var t=e.name,a=e.id,r=e.thumb,c=e.quantity;return n.a.createElement("div",{className:"product-card"},n.a.createElement("li",{key:a},n.a.createElement("h3",{"data-testid":"shopping-cart-product-name"},t),n.a.createElement("div",{className:"product-quantity"},n.a.createElement("img",{src:r,alt:t}),n.a.createElement("span",{"data-testid":"shopping-cart-product-quantity"},"Quantidade:"," ".concat(c)))))})),a=n.a.createElement("h3",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio");return n.a.createElement("section",{className:"list-products-container"},e.length>0?n.a.createElement("ul",{className:"list-products"},t):a,n.a.createElement(d.b,{to:"/checkout"},n.a.createElement("button",{"data-testid":"checkout-products",type:"button",className:"button-shopping"},"Realizar Compra")))}}]),a}(n.a.Component)),b=a(8),f=a.n(b),v=a(13);function E(){return g.apply(this,arguments)}function g(){return(g=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.mercadolibre.com/sites/MLB/categories",e.prev=1,e.next=4,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function y(e,t){return O.apply(this,arguments)}function O(){return(O=Object(v.a)(f.a.mark((function e(t,a){var r,n,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=15;break}return e.prev=1,e.next=4,fetch("https://api.mercadolibre.com/sites/MLB/search?q=".concat(a));case 4:return r=e.sent,console.log(a),e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",e.t0);case 15:return e.prev=15,e.next=18,fetch("https://api.mercadolibre.com/sites/MLB/search?q=".concat(t));case 18:return c=e.sent,e.next=21,c.json();case 21:return o=e.sent,e.abrupt("return",o);case 25:return e.prev=25,e.t1=e.catch(15),e.abrupt("return",e.t1);case 28:case"end":return e.stop()}}),e,null,[[1,12],[15,25]])})))).apply(this,arguments)}a(41);var k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={categorieList:[]},e.getCategoriesFromApi=e.getCategoriesFromApi.bind(Object(m.a)(e)),e.onHandlerRadio=e.onHandlerRadio.bind(Object(m.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getCategoriesFromApi()}},{key:"onHandlerRadio",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var a,r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.id,e.next=3,y("",a);case 3:r=e.sent,0!==(n=r.results).length&&this.props.history.push({pathname:"/productsFromCategorie",state:n});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCategoriesFromApi",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,E();case 3:e.t1=e.sent,e.t2={categorieList:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.categorieList;return n.a.createElement("section",{className:"categories categories-style"},n.a.createElement("h2",null," Categorias de Produtos "),t.map((function(t){return n.a.createElement("label",{"data-testid":"category",key:t.name,htmlFor:t.id},n.a.createElement("input",{id:t.id,type:"radio",name:"categoria",onChange:e.onHandlerRadio}),t.name)})))}}]),a}(n.a.Component),j=Object(p.f)(k),x=a(24),N=a.n(x),C=(a(42),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={inputText:""},e.onHandleInput=e.onHandleInput.bind(Object(m.a)(e)),e.getProductsFromInput=e.getProductsFromInput.bind(Object(m.a)(e)),e}return Object(s.a)(a,[{key:"onHandleInput",value:function(e){this.setState({inputText:e.target.value})}},{key:"getProductsFromInput",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,a,r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.inputText,a=this.props.history,e.next=4,y("",t);case 4:r=e.sent,n=r.results,a.push({pathname:"/productsFromSearch",state:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.inputText;return n.a.createElement("header",null,n.a.createElement("div",{className:"section-header"},n.a.createElement(d.b,{to:"/"},n.a.createElement("img",{className:"site-logo",src:N.a,alt:"logo"})),n.a.createElement("div",{className:"search-box-style"},n.a.createElement("input",{onChange:this.onHandleInput,value:e,type:"text","data-testid":"query-input",placeholder:"Pesquisar..."}),n.a.createElement("button",{onClick:this.getProductsFromInput,type:"button","data-testid":"query-button",className:"material-icons"},"search")),n.a.createElement("div",{className:"sign-in"},n.a.createElement("span",{className:"material-icons icon-user"},"manage_accounts"),n.a.createElement("span",null,"Entre",n.a.createElement("br",null),"ou Cadastre-se")),n.a.createElement("div",null,n.a.createElement(d.b,{"data-testid":"shopping-cart-button",to:"/cart"},n.a.createElement("button",{className:"cart-button material-icons",type:"button"},"shopping_cart")))))}}]),a}(n.a.Component)),I=Object(p.f)(C),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("section",null,n.a.createElement("h3",{"data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria."))}}]),a}(n.a.Component),P=a(15),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleClickAddToCart=function(){var t=e.state,a=t.productId,r={name:t.productTitle,thumb:t.productThumb,Price:t.productPrice,id:a,quantity:1},n=JSON.parse(localStorage.getItem("productsAdded"));if(n){if(e.setState({existProduct:!0}),n.forEach((function(e,t){e.id===r.id&&(n[t].quantity+=1,localStorage.setItem("productsAdded",JSON.stringify(n)))})),!e.state.existProduct){console.log("veio aqui");var c=JSON.parse(localStorage.getItem("productsAdded"));localStorage.setItem("productsAdded",JSON.stringify([].concat(Object(P.a)(c),[r])))}}else{localStorage.setItem("productsAdded",JSON.stringify([]));var o=JSON.parse(localStorage.getItem("productsAdded"));localStorage.setItem("productsAdded",JSON.stringify([].concat(Object(P.a)(o),[r]))),e.setState({existProduct:!0})}},e.state={existProduct:!1,productId:"",productTitle:"",productThumb:"",productPrice:0,productAttr:[]},e.handleClickAddToCart=e.handleClickAddToCart.bind(Object(m.a)(e)),e.saveInformations=e.saveInformations.bind(Object(m.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.saveInformations()}},{key:"saveInformations",value:function(){var e=this.props.location;this.setState({productId:e.productInfo.idProduct,productTitle:e.productInfo.titleProduct,productThumb:e.productInfo.thumbProduct,productPrice:e.productInfo.priceProduct,productAttr:e.productInfo.attrProduct})}},{key:"render",value:function(){var e=this.state,t=e.productTitle,a=e.productThumb,r=e.productPrice,c=e.productAttr;return n.a.createElement("section",null,n.a.createElement("p",{"data-testid":"product-detail-name"},t),n.a.createElement("p",null,"`R$ $",r,"`"),n.a.createElement("img",{src:a,alt:"product-name"}),n.a.createElement("section",null,n.a.createElement("p",null,"Especifica\xe7\xf5es T\xe9cnicas"),c&&c.map((function(e){return n.a.createElement("div",{key:e.id},n.a.createElement("span",null,"".concat(e.name,":").concat(e.value_name)))}))),n.a.createElement("button",{type:"button","data-testid":"product-detail-add-to-cart",className:"card-button",onClick:this.handleClickAddToCart},"Comprar"))}}]),a}(n.a.Component),F=(a(20),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleClickAddToCart=function(){var t=e.state,a=t.productId,r={name:t.productTitle,thumb:t.productThumb,price:t.productPrice,id:a,quantity:1},n=JSON.parse(localStorage.getItem("productsAdded"));if(n){if(e.setState({existProduct:!0}),n.forEach((function(e,t){e.id===r.id&&(n[t].quantity+=1,localStorage.setItem("productsAdded",JSON.stringify(n)))})),!e.state.existProduct){console.log("veio aqui");var c=JSON.parse(localStorage.getItem("productsAdded"));localStorage.setItem("productsAdded",JSON.stringify([].concat(Object(P.a)(c),[r])))}}else{localStorage.setItem("productsAdded",JSON.stringify([]));var o=JSON.parse(localStorage.getItem("productsAdded"));localStorage.setItem("productsAdded",JSON.stringify([].concat(Object(P.a)(o),[r]))),e.setState({existProduct:!0})}},e.state={existProduct:!1,productId:"",productTitle:"",productThumb:"",productPrice:0},e.handleClickAddToCart=e.handleClickAddToCart.bind(Object(m.a)(e)),e.saveInformations=e.saveInformations.bind(Object(m.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.saveInformations()}},{key:"saveInformations",value:function(){var e=this.props,t=e.id,a=e.title,r=e.thumbnail,n=e.price;this.setState({productId:t,productTitle:a,productThumb:r,productPrice:n})}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,r=e.thumbnail,c=e.price,o=e.attributes,i=n.a.createElement("span",null," \xe0 vista"),s=c.toFixed(2).replace(".",","),l=.15*c+c;l=l.toFixed(2).replace(".",",");var u=(.15*c+c)/10;return u=u.toFixed(2).replace(".",","),n.a.createElement("div",{"data-testid":"product",key:t},n.a.createElement("div",{className:"card"},n.a.createElement(d.b,{to:{pathname:"/productDetail/".concat(t),productInfo:{idProduct:t,titleProduct:a,thumbProduct:r,priceProduct:c,attrProduct:o}},style:{textDecoration:"none",color:"black"},"data-testid":"product-detail-link"},n.a.createElement("img",{className:"card-img",src:r,alt:""}),n.a.createElement("div",null,n.a.createElement("span",{className:"card-title"},a),n.a.createElement("span",{className:"card-price"},"R$ ".concat(s),i),n.a.createElement("span",{className:"card-price-credit"},"ou R$ ".concat(l)),n.a.createElement("span",{className:"card-price-credit"},"10x de R$ ".concat(u," sem juros")))),n.a.createElement("button",{id:t,type:"button","data-testid":"product-add-to-cart",className:"card-button",onClick:this.handleClickAddToCart},"+ Adicionar ao Carrinho")))}}]),a}(n.a.Component)),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.location;return n.a.createElement("section",{className:"list_products"},e.state.map((function(e){return n.a.createElement(F,{key:e.id,id:e.id,title:e.title,thumbnail:e.thumbnail,price:e.price,attributes:e.attributes})})))}}]),a}(n.a.Component),q=(a(43),a(44),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).recoverCartProducts=function(){return JSON.parse(localStorage.getItem("productsAdded"))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.recoverCartProducts(),t=[0],a=e.map((function(e){var a=e.id,r=e.name,c=e.thumb,o=e.quantity,i=o*e.price;return t.push(i),n.a.createElement("li",{className:"product",key:a},n.a.createElement("div",{className:"infos-products"},n.a.createElement("img",{src:c,alt:r}),n.a.createElement("span",null,r),n.a.createElement("div",{className:"divisor-name-price"}),n.a.createElement("span",null,o),n.a.createElement("div",{className:"divisor-name-price"}),n.a.createElement("span",{className:"price"},"R$ ".concat(i.toFixed(2).replace(".",","))),n.a.createElement("span",null,"ID do produto: ".concat(a))))})),r=t.reduce((function(e,t){return t+e}));return n.a.createElement("section",{className:"checkout-page"},n.a.createElement("div",{className:"check-products"},n.a.createElement("h3",null,"Revise seus Produtos"),n.a.createElement("ul",{className:"products-list"},a,n.a.createElement("span",{className:"totalCost"},"Valor Total: R$ ",r.toFixed(2).replace(".",",")),n.a.createElement("div",{className:"more-info"},n.a.createElement("p",null,"Vendido com seguran\xe7a e confian\xe7a pela"),n.a.createElement("span",null," Frontend Online Store ! ")),n.a.createElement("div",{className:"divisor-items-checkout"}))),n.a.createElement("div",{className:"buyer-infos"},n.a.createElement("h3",null,"Informa\xe7\xf5es do Comprador"),n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"name"},n.a.createElement("input",{type:"text",style:{width:"250px"},name:"name","data-testid":"checkout-fullname",placeholder:"Nome Completo"})),n.a.createElement("label",{htmlFor:"email"},n.a.createElement("input",{type:"email",style:{width:"300px"},name:"email","data-testid":"checkout-email",placeholder:"Email v\xe1lido"})),n.a.createElement("label",{htmlFor:"CPF"},n.a.createElement("input",{type:"text",maxLength:"11",name:"CPF","data-testid":"checkout-cpf",placeholder:"CPF v\xe1lido (sem pontos ou virgulas)"})),n.a.createElement("label",{htmlFor:"phone"},n.a.createElement("input",{type:"text",name:"phone",maxLength:"13",minLength:"11","data-testid":"checkout-phone",placeholder:"Telefone/Celular"})),n.a.createElement("label",{htmlFor:"cep"},n.a.createElement("input",{type:"text",name:"cep",maxLength:"13",minLength:"11","data-testid":"checkout-cep",placeholder:"CEP"})),n.a.createElement("label",{htmlFor:"address"},n.a.createElement("input",{type:"text",style:{width:"600px"},name:"address",maxLength:"13",minLength:"11","data-testid":"checkout-address",placeholder:"Endere\xe7o"})),n.a.createElement("label",{htmlFor:"news-req"},n.a.createElement("input",{className:"check",type:"checkbox",name:"news-req","data-testid":"checkout-news-req"}),"Deseja receber promo\xe7\xf5es e atualiza\xe7\xf5es de produtos?"),n.a.createElement("label",{htmlFor:"pol-req"},n.a.createElement("input",{className:"check",type:"checkbox",name:"pol-req","data-testid":"checkout-pol-req"}),"Concordo e afirmo que li a politica de uso de dados"))),n.a.createElement("button",{type:"button"}," Finalizar Compra "))}}]),a}(n.a.Component)),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(I,null),n.a.createElement("main",null,n.a.createElement(j,null),n.a.createElement("section",{className:"main-page main-content"},n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/",component:S}),n.a.createElement(p.a,{path:"/cart",component:h}),n.a.createElement(p.a,{path:"/productsFromSearch",component:T}),n.a.createElement(p.a,{path:"/productsFromCategorie",component:T}),n.a.createElement(p.a,{exact:!0,path:"/ProductDetail/:id",component:A}),n.a.createElement(p.a,{exact:!0,path:"/checkout",component:q})))))}}]),a}(n.a.Component);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5c53bc6b.chunk.js.map