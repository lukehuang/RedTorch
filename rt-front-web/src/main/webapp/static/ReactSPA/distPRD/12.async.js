(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"5SSE":function(e,t,a){},N0Iu:function(e,t,a){"use strict";var l=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var u=l(a("bx4M"));a("+L6B");var n=l(a("2/Rp"));a("giR+");var c=l(a("fyUT")),d=l(a("pVnL")),o=l(a("lwsE")),i=l(a("W8MJ")),s=l(a("a1gu")),f=l(a("Nsbk")),m=l(a("7W2i"));a("5NDa");var p=l(a("5rEg"));a("OaEy");var E=l(a("2fM7"));a("7Kak");var h=l(a("9yH6"));a("y8nQ");var v,y,g,b=l(a("Vl3Y")),C=r(a("q1tI")),F=a("MuoO"),S=l(a("bylr")),I=b.default.Item,T=h.default.Group,A=h.default.Button,w=E.default.Option,D=p.default.Search,L={labelCol:{md:{span:24},lg:{span:8}},wrapperCol:{md:{span:24},lg:{span:16}}},N={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:4}}},k=(v=(0,F.connect)(function(e){var t=e.tick,a=e.operation,l=e.account,r=e.contract,u=e.basicTradeForm;return{tick:t,operation:a,account:l,contract:r,basicTradeForm:u}}),y=b.default.create(),v(g=y(g=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,s.default)(this,(0,f.default)(t).call(this,e)),a.handleSubscribe=function(e,t){var l=a.props,r=l.dispatch,u=l.form,n=l.account;u.validateFields(["fuzzySymbol"],function(e,a){if(t.preventDefault(),null==e||void 0===e.fuzzySymbol){var l=u.getFieldValue("rtAccountIDs");if(l.length>0)n.accounts.forEach(function(e){if(l.includes("ALL")||l.includes(e.rtAccountID)){var t={symbol:a.fuzzySymbol,exchange:u.getFieldValue("exchange"),productClass:u.getFieldValue("productClass"),currency:u.getFieldValue("currency"),gatewayID:e.gatewayID};r({type:"operation/subscribe",payload:t})}});else{var c={symbol:a.fuzzySymbol,exchange:u.getFieldValue("exchange"),productClass:u.getFieldValue("productClass"),currency:u.getFieldValue("currency")};r({type:"operation/subscribe",payload:c})}}})},a.handleSubmit=function(e){var t=a.props,l=t.dispatch,r=t.form,u=t.account;e.preventDefault(),r.validateFieldsAndScroll(function(e,t){if(!e){var a=r.getFieldValue("rtAccountIDs");u.accounts.forEach(function(e){if(a.includes("ALL")||a.includes(e.rtAccountID)){var u={symbol:t.fuzzySymbol,direction:r.getFieldValue("direction"),offset:r.getFieldValue("offset"),price:r.getFieldValue("price"),priceType:r.getFieldValue("priceType"),exchange:r.getFieldValue("exchange"),currency:r.getFieldValue("currency"),productClass:r.getFieldValue("productClass"),volume:r.getFieldValue("volume"),gatewayID:e.gatewayID,rtAccountID:e.rtAccountID};l({type:"operation/sendOrder",payload:u})}})}})},a.resetForm=function(){var e=a.props,t=e.form,l=e.dispatch;l({type:"basicTradeForm/reset",payload:{}}),t.resetFields()},a.cancelAllOrders=function(e){var t=a.props.dispatch;e.preventDefault(),t({type:"operation/cancelAllOrders",payload:{}})},a.handleFuzzySymbolChange=function(e){var t=a.props,l=t.dispatch,r=t.tick,u=t.form;l({type:"basicTradeForm/update",payload:{fuzzySymbol:e.target.value}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),u.resetFields(["price"])},a.handlePriceAutoCompleteChange=function(e){var t=a.props,l=t.dispatch,r=t.tick,u=t.form;l({type:"basicTradeForm/update",payload:{priceAutoComplete:e.target.value}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),u.resetFields(["price"])},a.handleDirectionChange=function(e){var t=a.props,l=t.dispatch,r=t.tick,u=t.form;l({type:"basicTradeForm/update",payload:{direction:e.target.value}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),u.resetFields(["price"])},a.handlePriceChange=function(e){var t=a.props,l=t.dispatch,r=t.tick,u=t.form;l({type:"basicTradeForm/update",payload:{price:e}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),u.resetFields(["price"])},a.handleExchangeChange=function(e){var t=a.props,l=t.dispatch,r=t.tick,u=t.form;l({type:"basicTradeForm/update",payload:{exchange:e}}),l({type:"basicTradeForm/updateTick",payload:r.ticks}),u.resetFields(["price"])},a.onWindowResize=function(){a.setState({cardHeight:(window.innerHeight-70>550?window.innerHeight-70:550)||550})},a.componentDidMount=function(){var e=a.props,t=e.dispatch,l=e.form;t({type:"account/fetchAccounts",payload:{}}),t({type:"basicTradeForm/fetchContracts",payload:{}}),t({type:"basicTradeForm/reset",payload:{}});var r=l;t({type:"basicTradeForm/update",payload:{form:r}}),window.addEventListener("resize",a.onWindowResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",a.onWindowResize)},a.state={cardHeight:(window.innerHeight-70>550?window.innerHeight-70:550)||550},a}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.submitting,l=t.account.accounts,r=t.form.getFieldDecorator,o=t.basicTradeForm,i=this.state.cardHeight,s=[];l.forEach(function(e){s.push(C.default.createElement(w,{key:e.rtAccountID,value:e.rtAccountID},"\u8d26\u6237:[".concat(e.accountID,"] \u5e01\u79cd:[").concat(e.currency,"] \u7f51\u5173:[").concat(e.gatewayDisplayName,"]")))});var f=!1;return"MANUAL"!==o.priceAutoComplete&&(f=!0),C.default.createElement(u.default,{bordered:!0,style:{height:i,overflowY:"auto"},gutter:0},C.default.createElement(b.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,gutter:0},C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:"\u4ee3\u7801"}),r("fuzzySymbol",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ee3\u7801",initialValue:o.fuzzySymbol}]})(C.default.createElement(D,{size:"small",placeholder:"\u652f\u6301\u6a21\u7cca\u67e5\u8be2",onChange:function(t){return e.handleFuzzySymbolChange(t)},onSearch:function(t,a){return e.handleSubscribe(t,a)},enterButton:!0}))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:"\u65b9\u5411"}),r("direction",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u65b9\u5411"}]})(C.default.createElement(T,{size:"small",onChange:this.handleDirectionChange,buttonStyle:"solid"},C.default.createElement(A,{value:"LONG"},"\u591a"),C.default.createElement(A,{value:"SHORT"},"\u7a7a")))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:"\u5f00\u5e73"}),r("offset",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u5e73"}]})(C.default.createElement(T,{size:"small",onChange:this.onChange,buttonStyle:"solid"},C.default.createElement(A,{value:"OPEN"},"\u5f00\u4ed3"),C.default.createElement(A,{value:"CLOSE"},"\u5e73\u4ed3"),C.default.createElement(A,{value:"CLOSETODAY"},"\u5e73\u4eca"),C.default.createElement(A,{value:"CLOSEYESTERDAY"},"\u5e73\u6628")))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:"\u62a5\u4ef7\u7c7b\u578b"}),r("priceType",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u62a5\u4ef7\u7c7b\u578b"}],initialValue:"LIMITPRICE"})(C.default.createElement(T,{size:"small",onChange:this.onChange,buttonStyle:"solid"},C.default.createElement(A,{value:"FAK"},"FAK"),C.default.createElement(A,{value:"FOK"},"FOK"),C.default.createElement(A,{value:"LIMITPRICE"},"\u9650\u4ef7"),C.default.createElement(A,{value:"MARKETPRICE"},"\u5e02\u4ef7")))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:"\u4ef7\u683c"}),r("price",{initialValue:o.price})(C.default.createElement(c.default,{size:"small",onChange:this.handlePriceChange,disabled:f,style:{width:"100%"},min:0,max:999999999,step:o.step}))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:"\u81ea\u52a8\u586b\u4ef7"}),r("priceAutoComplete",{initialValue:"MANUAL"})(C.default.createElement(T,{size:"small",buttonStyle:"solid",onChange:this.handlePriceAutoCompleteChange},C.default.createElement(A,{value:"MANUAL"},"\u624b\u52a8"),C.default.createElement(A,{value:"LASTPRICE"},"\u6700\u65b0"),C.default.createElement(A,{value:"ACTIVE"},"\u5bf9\u624b"),C.default.createElement(A,{value:"QUEUE"},"\u6392\u961f"),C.default.createElement(A,{value:"ADD2"},"\u8d852")))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:"\u6570\u91cf"}),r("volume",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6570\u91cf"}]})(C.default.createElement(c.default,{size:"small",style:{width:"100%"},min:0,max:999999999,step:1}))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:"\u8d26\u6237"}),r("rtAccountIDs",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d26\u6237"}],initialValue:[]})(C.default.createElement(E.default,{size:"small",mode:"multiple",showSearch:!0,dropdownMatchSelectWidth:!1,placeholder:"\u8bf7\u9009\u62e9\u8d26\u6237",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},C.default.createElement(w,{value:"ALL"},"\u6240\u6709\u8d26\u6237"),s))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},N),C.default.createElement(n.default,{size:"small",type:"danger",onDoubleClick:this.cancelAllOrders},"\u5168\u90e8\u64a4\u9500"),C.default.createElement(n.default,{htmlType:"reset",onClick:this.resetForm,style:{marginLeft:5}},"\u91cd\u7f6e"),C.default.createElement(n.default,{type:"primary",htmlType:"submit",loading:a,style:{marginLeft:5}},"\u53d1\u5355")),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:C.default.createElement("span",null,"\u4ea4\u6613\u6240",C.default.createElement("em",{className:S.default.optional},"\u53ef\u9009"))}),r("exchange")(C.default.createElement(E.default,{size:"small",onChange:this.handleExchangeChange,showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u4ea4\u6613\u6240",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},C.default.createElement(w,{value:"SEHK"},"SEHK \u6e2f\u4ea4\u6240"),C.default.createElement(w,{value:"HKFE"},"HKFE \u9999\u6e2f\u671f\u8d27\u4ea4\u6613\u6240"),C.default.createElement(w,{value:"IDEALPRO"},"IDEALPRO IB\u5916\u6c47ECN"),C.default.createElement(w,{value:"SSE"},"SSE \u4e0a\u4ea4\u6240"),C.default.createElement(w,{value:"SZSE"},"SZSE \u6df1\u4ea4\u6240"),C.default.createElement(w,{value:"CFFEX"},"CFFEX \u4e2d\u91d1\u6240"),C.default.createElement(w,{value:"SHFE"},"SHFE \u4e0a\u671f\u6240"),C.default.createElement(w,{value:"CZCE"},"CZCE \u90d1\u5546\u6240"),C.default.createElement(w,{value:"DCE"},"DCE \u5927\u5546\u6240"),C.default.createElement(w,{value:"SGE"},"SGE \u4e0a\u91d1\u6240"),C.default.createElement(w,{value:"INE"},"INE \u56fd\u9645\u80fd\u6e90\u4ea4\u6613\u4e2d\u5fc3"),C.default.createElement(w,{value:"SMART"},"SMART IB\u667a\u80fd\u8def\u7531"),C.default.createElement(w,{value:"NYMEX"},"NYMEX IB\u671f\u8d27"),C.default.createElement(w,{value:"GLOBEX"},"GLOBEX CME\u7535\u5b50\u4ea4\u6613\u5e73\u53f0"),C.default.createElement(w,{value:"CME"},"CME \u829d\u5546\u6240"),C.default.createElement(w,{value:"ICE"},"ICE \u6d32\u9645\u4ea4\u6613\u6240"),C.default.createElement(w,{value:"LME"},"LME \u4f26\u6566\u91d1\u5c5e\u4ea4\u6613\u6240"),C.default.createElement(w,{value:"OANDA"},"OANDA \u5916\u6c47\u505a\u5e02\u5546"),C.default.createElement(w,{value:"FXCM"},"FXCM \u5916\u6c47\u505a\u5e02\u5546")))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:C.default.createElement("span",null,"\u5e01\u79cd",C.default.createElement("em",{className:S.default.optional},"\u53ef\u9009"))}),r("currency")(C.default.createElement(E.default,{size:"small",showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u5e01\u79cd",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},C.default.createElement(w,{value:"USD"},"USD \u7f8e\u5143"),C.default.createElement(w,{value:"CNY"},"CNY \u4eba\u6c11\u5e01"),C.default.createElement(w,{value:"CNH"},"CNH \u79bb\u5cb8\u4eba\u6c11\u5e01"),C.default.createElement(w,{value:"HKD"},"HKD \u6e2f\u5e01"),C.default.createElement(w,{value:"JPY"},"JPY \u65e5\u5143"),C.default.createElement(w,{value:"EUR"},"EUR \u6b27\u5143"),C.default.createElement(w,{value:"GBP"},"GBP \u82f1\u9551"),C.default.createElement(w,{value:"DEM"},"DEM \u5fb7\u56fd\u9a6c\u514b"),C.default.createElement(w,{value:"CHF"},"CHF \u745e\u58eb\u6cd5\u90ce"),C.default.createElement(w,{value:"FRF"},"FRF \u6cd5\u56fd\u6cd5\u90ce"),C.default.createElement(w,{value:"CAD"},"CAD \u52a0\u62ff\u5927\u5143"),C.default.createElement(w,{value:"AUD"},"AUD \u6fb3\u5927\u5229\u4e9a\u5143"),C.default.createElement(w,{value:"ATS"},"ATS \u5965\u5730\u5229\u5148\u4ee4"),C.default.createElement(w,{value:"FIM"},"FIM \u82ac\u5170\u9a6c\u514b"),C.default.createElement(w,{value:"BEF"},"BEF \u6bd4\u5229\u65f6\u6cd5\u90ce"),C.default.createElement(w,{value:"IEP"},"IEP \u7231\u5c14\u5170\u9551"),C.default.createElement(w,{value:"ITL"},"ITL \u610f\u5927\u5229\u91cc\u62c9"),C.default.createElement(w,{value:"LUF"},"LUF \u5362\u68ee\u5821\u6cd5\u90ce"),C.default.createElement(w,{value:"NLG"},"NLG \u8377\u5170\u76fe"),C.default.createElement(w,{value:"PTE"},"PTE \u8461\u8404\u7259\u57c3\u65af\u5e93\u591a"),C.default.createElement(w,{value:"ESP"},"ESP \u897f\u73ed\u7259\u6bd4\u585e\u5854"),C.default.createElement(w,{value:"IDR"},"IDR \u5370\u5c3c\u76fe"),C.default.createElement(w,{value:"MYR"},"MYR \u9a6c\u6765\u897f\u4e9a\u6797\u5409\u7279"),C.default.createElement(w,{value:"NZD"},"NZD \u65b0\u897f\u5170\u5143"),C.default.createElement(w,{value:"PHP"},"PHP \u83f2\u5f8b\u5bbe\u6bd4\u7d22"),C.default.createElement(w,{value:"SUR"},"SUR \u4fc4\u7f57\u65af\u5362\u5e03"),C.default.createElement(w,{value:"SGD"},"SGD \u65b0\u52a0\u5761\u5143"),C.default.createElement(w,{value:"KRW"},"KRW \u97e9\u56fd\u5143"),C.default.createElement(w,{value:"THB"},"THB \u6cf0\u94e2")))),C.default.createElement(I,(0,d.default)({className:S.default.formItem},L,{label:C.default.createElement("span",null,"\u4ea7\u54c1\u7c7b\u578b",C.default.createElement("em",{className:S.default.optional},"\u53ef\u9009"))}),r("productClass")(C.default.createElement(E.default,{size:"small",showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u4ea7\u54c1\u7c7b\u578b",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},C.default.createElement(w,{value:"FUTURES"},"\u671f\u8d27"),C.default.createElement(w,{value:"FOREX"},"\u5916\u6c47"),C.default.createElement(w,{value:"EQUITY"},"\u80a1\u7968"),C.default.createElement(w,{value:"OPTION"},"\u671f\u6743"),C.default.createElement(w,{value:"SPOT"},"\u73b0\u8d27"))))))}}]),t}(C.PureComponent))||g)||g),z=k;t.default=z},TxHJ:function(e,t,a){"use strict";var l=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var u=r(a("BMrR"));a("jCWc");var n=r(a("kPKH")),c=r(a("lwsE")),d=r(a("W8MJ")),o=r(a("a1gu")),i=r(a("Nsbk")),s=r(a("7W2i"));a("Znn+");var f=r(a("ZTPi")),m=l(a("q1tI")),p=r(a("usdK")),E=r(a("v99g")),h=(r(a("5SSE")),r(a("N0Iu"))),v=f.default.TabPane,y=function(e){function t(){var e,a;(0,c.default)(this,t);for(var l=arguments.length,r=new Array(l),u=0;u<l;u++)r[u]=arguments[u];return a=(0,o.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(r))),a.onTabChange=function(e){var t=a.props.match;switch(e){case"tradeBoard":p.default.push("".concat(t.url,"/tradeBoard"));break;case"accounts":p.default.push("".concat(t.url,"/accounts"));break;case"positions":p.default.push("".concat(t.url,"/positions"));break;case"orders":p.default.push("".concat(t.url,"/orders"));break;case"transactions":p.default.push("".concat(t.url,"/transactions"));break;default:break}},a}return(0,s.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.listLoading,a=e.match,l=e.location,r=e.children;return m.default.createElement(E.default,null,m.default.createElement(u.default,{gutter:10},m.default.createElement(n.default,{xxl:5,lg:6,md:24},m.default.createElement(h.default,null)),m.default.createElement(n.default,{xxl:19,lg:18,md:24,style:{background:"#FFF"}},m.default.createElement(f.default,{defaultActiveKey:l.pathname.replace("".concat(a.path,"/"),""),onChange:this.onTabChange,animated:!1,loading:t,size:"small"},m.default.createElement(v,{tab:"\u4ea4\u6613",key:"tradeBoard"},r),m.default.createElement(v,{tab:"\u59d4\u6258",key:"orders"},r),m.default.createElement(v,{tab:"\u6210\u4ea4",key:"transactions"},r),m.default.createElement(v,{tab:"\u6301\u4ed3",key:"positions"},r),m.default.createElement(v,{tab:"\u8d26\u6237",key:"accounts"},r)))))}}]),t}(m.PureComponent),g=y;t.default=g},bylr:function(e,t,a){e.exports={card:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-card",formItem:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-formItem",optional:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-trade\\-basic\\-trade-form-optional"}}}]);