(this["webpackJsonphowler-mint-page"]=this["webpackJsonphowler-mint-page"]||[]).push([[0],{114:function(e,n){},121:function(e,n){},139:function(e,n){},175:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(75),c=t.n(o),i=t(13),s=t(27),l=t(10),d=t(177),u=t(78),w=t.n(u),p=t(9),h=t(28);var g=function(e){switch(console.log("getConfig",e),e){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:"hc.jeph.near",walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:"hc.jeph.testnet",walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}("testnet"),j=new h.keyStores.BrowserLocalStorageKeyStore;function b(){return(b=Object(s.a)(Object(i.a)().mark((function e(){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("initContract"),e.next=3,Object(h.connect)(Object(p.a)({keyStore:j,headers:{}},g));case 3:return n=e.sent,window.walletConnection=new h.WalletConnection(n,g.contractName.split(".")[0]),window.accountId=window.walletConnection.getAccountId(),e.next=8,new h.Contract(window.walletConnection.account(),g.contractName,{viewMethods:["get_saled_ids","get_saled_tokens","get_token_by_id","get_current_block"],changeMethods:["nft_mint","get_account_and_current_block"]});case 8:return window.contract=e.sent,e.abrupt("return",window.contract);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){window.walletConnection.signOut(),window.location.replace(window.location.origin+window.location.pathname)}function m(){window.walletConnection.requestSignIn(g.contractName)}var O=t(79),x=t.n(O),v=t(0),C=w.a.create({baseURL:"https://howler-api.juanenriqueenr4.repl.co/api/ids"});var S=function(){var e=function(e){var n=x.a.generateSync("".concat(e),{fontSize:24,fontFamily:"Arial"});return{contractId:window.contract.contractId,methodName:"nft_mint",args:{token_id:e,media:n},gas:"300000000000000",attachedDeposit:BigInt(1e22).toString()}},n=a.a.useState(!1),t=Object(l.a)(n,2),r=t[0],o=t[1],c=a.a.useState(""),u=Object(l.a)(c,2),w=(u[0],u[1],a.a.useState("")),p=Object(l.a)(w,2),h=(p[0],p[1],a.a.useState([])),g=Object(l.a)(h,2),j=(g[0],g[1],a.a.useState(!1)),b=Object(l.a)(j,2),O=b[0],S=(b[1],function(){var e=Object(s.a)(Object(i.a)().mark((function e(){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),console.log("minting"),e.next=4,C.get("/id?userId=".concat(window.accountId));case 4:n=e.sent.data.id,console.log(n),k(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),k=function(){var n=Object(s.a)(Object(i.a)().mark((function n(t){var r;return Object(i.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.contract.account.functionCall(e(t));case 2:if(r=n.sent,console.log(r),!O){n.next=7;break}return o(!1),n.abrupt("return");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.useEffect((function(){window.walletConnection.isSignedIn()?console.log("signed in"):window.walletConnection.isSignedIn()||console.log("not signed in")}),[]),window.walletConnection.isSignedIn()?Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("main",{children:[Object(v.jsx)("h2",{children:"Howler Carayas"}),Object(v.jsx)("hr",{}),Object(v.jsx)("p",{style:{textAlign:"center",marginTop:"2.5em"},children:"\xa1Bienvenido!"}),Object(v.jsx)(d.a,{variant:r?"outline-danger":"outline-success",disabled:r,onClick:S,children:"Mintear"}),Object(v.jsx)(d.a,{variant:"primary",onClick:f,children:"Cerrar Sesi\xf3n"})]})}):Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("main",{children:[Object(v.jsx)("h2",{children:"Howler Carayas"}),Object(v.jsx)("hr",{}),Object(v.jsx)("p",{style:{textAlign:"center",marginTop:"2.5em"},children:"Por favor inicia sesi\xf3n para mintear"}),Object(v.jsx)(d.a,{variant:"primary",onClick:m,children:"Iniciar Sesi\xf3n"})," "]})})},k=c.a.createRoot(document.getElementById("root"));window.nearInitPromise=function(){return b.apply(this,arguments)}().then((function(){console.log("window.nearInitPromise",window.nearInitPromise),k.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(S,{})}))})).catch((function(e){console.log(e)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.d16aaeec.chunk.js.map