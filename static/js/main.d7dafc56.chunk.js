(window["webpackJsonpdaniel-shema-24-09-19"]=window["webpackJsonpdaniel-shema-24-09-19"]||[]).push([[0],{132:function(e,t,a){e.exports=a(323)},137:function(e,t,a){},138:function(e,t,a){},144:function(e,t,a){},318:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var r=a(48),n=a(126),c=a(0),i=a.n(c),o=a(16),s=a.n(o),l=(a(137),a(138),a(3)),u=a(4),m=a(7),p=a(5),h=a(8),y=a(29),d=a(6),E=a(20),f=(a(144),a(72)),b=(a(298),a(36)),v=a.n(b),T=function(e){return"".concat("http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/").concat(e>9?e:"0"+e,"-s.png")},g=function(e){return(1.8*e+32).toFixed(1)},C=function(e){var t=new Date(1e3*e).getDay(),a=[];return a[0]="Sunday",a[1]="Monday",a[2]="Tuesday",a[3]="Wednesday",a[4]="Thursday",a[5]="Friday",a[6]="Saturday",a[t]},O="9MpqiOaZsD1p9P11PloCiFHszwVAkUcT",N=function(e){var t;e=void 0===(t=e)||0===t.length?"":encodeURIComponent(t.trim());var a="http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+O+"&q="+e;try{return console.log("requestLocationKey sent:",e),v.a.get(a).then((function(e){return e.data})).then((function(e){return e[0]}))}catch(r){console.log("requestLocationKey - Failed. Error: ",r)}},I=function(e){var t="http://dataservice.accuweather.com/currentconditions/v1/"+e+"?apikey="+O;try{return console.log("requestCurrentConditionsByKey sent: ",e),v.a.get(t).then((function(e){return e.data})).then((function(e){return e[0]}))}catch(a){console.log("requestCurrentConditionsByKey - Failed. Error: ",a)}},D=function(e){var t="http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+e+"?apikey="+O+"&metric=true";try{return console.log("requestNext5DaysForecast sent: ",e),v.a.get(t).then((function(e){return e.data})).then((function(e){return e.DailyForecasts}))}catch(a){console.log("requestNext5DaysForecast - Failed. Error: ",a)}},j=function(e){var t="http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+O+"&q="+e;try{return console.log("autoSearchQuery sent: ",e),v.a.get(t).then((function(e){return e.data}))}catch(a){console.log("autoSearchQuery - Failed. Error: ",a)}},x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n))))._handleSearch=function(e){a.props.dispatch({type:"SET_IS_LOADING",isLoading:!0}),j(e).then((function(e){return console.log("back from autoSearch: ",e),e})).then((function(e){a.props.dispatch({type:"ADD_SEARCH_OPTIONS",options:e,isLoading:!1}),a.props.dispatch({type:"SET_IS_LOADING",isLoading:!1})}))},a.handleSearchOptionSelection=function(e){a.props.dispatch({type:"UPDATE_CURRENT_CITY_INFO",City:e[0].LocalizedName,CityId:e[0].Key,OriginCountry:e[0].Country.LocalizedName}),I(e[0].Key).then((function(e){return a.props.dispatch({type:"UPDATE_CURRENT_CITY_CONDITIONS",WeatherText:e.WeatherText,WeatherIcon:e.WeatherIcon,Temperature:e.Temperature.Metric.Value,IsDayTime:e.IsDayTime}),e})).catch((function(e){return console.log("requestCurrentConditions error: ",e)})),D(e[0].Key).then((function(e){return a.props.dispatch({type:"UPDATE_CURRENTS_WEEK_ENTIRELY",DailyForecasts:e}),e})).catch((function(e){return console.log("request5DaysConditions error: ",e)})),a.typeahead.getInstance().clear()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isCelsius,r=t.isLightTheme,n=t.children;return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",id:"mainNav"},i.a.createElement("div",{className:"container"},i.a.createElement(y.b,{className:"navbar-brand js-scroll-trigger",to:"/"},"CastAWeather"),i.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",null),i.a.createElement("li",{className:"nav-item"},i.a.createElement(y.b,{className:"nav-link js-scroll-trigger",to:"/"},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(y.b,{className:"nav-link js-scroll-trigger",to:"/favorites"},"Favorites"))),i.a.createElement("div",{className:"toggle-group"},i.a.createElement("div",{className:"custom-control custom-switch"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"themeSwitch",onChange:function(){return e.props.dispatch({type:"TOGGLE_THEME"})},checked:!r}),i.a.createElement("label",{className:"custom-control-label text-white pr-2",htmlFor:"themeSwitch"},"Light / Dark Theme")),i.a.createElement("div",{className:"custom-control custom-switch"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"temperatureSwitch",onChange:function(){return e.props.dispatch({type:"TOGGLE_TEMP"})},checked:!a}),i.a.createElement("label",{className:"custom-control-label text-white pr-2",htmlFor:"temperatureSwitch"},"C / F"))),i.a.createElement(f.AsyncTypeahead,{id:"search",isLoading:this.props.isLoading,labelKey:"LocalizedName",minLength:3,onSearch:this._handleSearch,onChange:this.handleSearchOptionSelection,placeholder:"Search for a city...",renderMenuItemChildren:function(e,t){return i.a.createElement(f.Highlighter,{search:t.text},e[t.labelKey])},options:this.props.options,ref:function(t){return e.typeahead=t}})))),n)}}]),t}(i.a.Component),_=Object(E.e)(Object(d.b)((function(e){return{isCelsius:e.isCelsius,isLightTheme:e.isLightTheme,isLoading:e.isLoading,options:e.options}}))(x)),w=a(35),S=a(129),k=a(130),W=(a(318),a(19)),L=(a(319),a(320),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).setIndicatorColor=function(e){return e>=40?["thermometer-full","#d20025"]:e>=30?["thermometer-three-quarters","#d2ce0e"]:e>=20?["thermometer-half","#2ad20d"]:e>=15?["thermometer-quarter","#2428ec"]:["thermometer-empty","#248eec"]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.setIndicatorColor(this.props.temperature);return i.a.createElement(W.a,{className:"primary mb-2 ".concat(this.props.className),icon:e[0],color:e[1],size:this.props.isHeadline?"3x":"1x"})}}]),t}(i.a.Component)),R=function(e){return{type:"REMOVE_FAVORITE",CityId:e}},F=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.city,r=t.cityId,n=t.originCountry,c=t.isCelsius,o=t.weatherText,s=t.weatherIcon,l=t.temperature,u=t.IsDayTime;return i.a.createElement("header",{className:"masthead border-bottom ".concat(u?"day":"night")},i.a.createElement("div",{className:"d-flex justify-content-start pl-lg-5"},i.a.createElement("div",{className:"btn-group pt-3"},i.a.createElement("button",{type:"button",className:"btn btn-lg btn-outline-secondary",onClick:function(){e.props.dispatch(function(e,t,a,r,n,c){return{type:"ADD_FAVORITE",CityId:e,City:t,OriginCountry:a,Temperature:c,WeatherText:r,WeatherIcon:n}}(r,a,n,o,s,l))}},i.a.createElement(W.a,{icon:"star"})),i.a.createElement("button",{type:"button",className:"btn btn-lg btn-outline-secondary",onClick:function(){e.props.dispatch(R(r))}},i.a.createElement(W.a,{icon:"trash-alt"})))),i.a.createElement("div",{className:"container d-flex h-100 align-items-center"},i.a.createElement("div",{className:"mx-auto text-center"},i.a.createElement("h1",{className:"mx-auto my-0 text-uppercase text-white border city-info"},a),i.a.createElement("p",{className:"mx-auto my-0 text-white city-info"},n),i.a.createElement("img",{src:T(s),crossOrigin:"anonymous",alt:o}),i.a.createElement("h2",{className:"text-white mx-auto mt-2 mb-5 city-info"},c?l:g(l),"\xb0"),i.a.createElement(L,{temperature:l,color:"red",isHeadline:!0}),i.a.createElement("h2",{className:"text-white mx-auto mt-2 mb-5 city-info"},o))))}}]),t}(i.a.Component),A=Object(d.b)()(F),U=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.key,e.isCelsius),a=e.Date,r=e.EpochDate,n=e.Temperature;return i.a.createElement("div",{className:"col-md-2"},i.a.createElement("div",{className:"card mb-4 shadow-sm"},i.a.createElement("div",{className:"card-body text-center"},i.a.createElement("h6",{className:"text-uppercase m-2"},C(r)),i.a.createElement("h4",{className:"text-uppercase m-0"},t?"".concat(n.Minimum.Value,"\xb0\n                                 - ").concat(n.Maximum.Value,"\xb0"):"".concat(g(n.Minimum.Value),"\xb0\n                                 - ").concat(g(n.Maximum.Value),"\xb0")),i.a.createElement("div",{className:"d-flex justify-content-around"},i.a.createElement(L,{temperature:n.Minimum.Value}),i.a.createElement(L,{temperature:n.Maximum.Value})),i.a.createElement("div",{className:"d-flex justify-content-around"},i.a.createElement(W.a,{icon:"moon",style:{color:"#2e3ed9"}}),i.a.createElement(W.a,{icon:"sun",style:{color:"#d9d167"}})),i.a.createElement("hr",{className:"my-4"}),i.a.createElement("p",{className:"text-uppercase m-2 small"},function(e,t){var a=e.substring(0,e.indexOf("T"));return a=a.split("-").reverse().join("-")}(a)))))}}]),t}(i.a.Component),P=Object(d.b)()(U),M=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;D(this.props.cityId).then((function(t){return e.props.dispatch({type:"UPDATE_CURRENTS_WEEK_ENTIRELY",DailyForecasts:t}),t})).catch((function(e){return console.log("request5DaysConditions error: ",e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("h3",{className:"mx-auto my-4 pl-4 text-uppercase"},"The Next 5 Days:"),i.a.createElement("div",{className:"row justify-content-center"},this.props.DailyForecasts.map((function(t,a){return i.a.createElement(P,Object.assign({},t,{isCelsius:e.props.isCelsius,key:e.props.cityId+a}))}))))}}]),t}(i.a.Component),V=Object(d.b)((function(e){return{cityId:e.currentlyDisplayedCityId,isCelsius:e.isCelsius,DailyForecasts:e.currentlyDisplayedDailyForecasts}}))(M),q=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;N(this.props.city).then((function(t){return e.props.dispatch({type:"UPDATE_CURRENT_CITY_INFO",City:t.EnglishName,CityId:t.Key,OriginCountry:t.Country.EnglishName}),t.Key})).then((function(e){return I(e)})).then((function(t){return e.props.dispatch({type:"UPDATE_CURRENT_CITY_CONDITIONS",WeatherText:t.WeatherText,WeatherIcon:t.WeatherIcon,Temperature:t.Temperature.Metric.Value,IsDayTime:t.IsDayTime}),t})).catch((function(e){return console.log("requestCurrentConditions error: ",e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"jumbotron home"},i.a.createElement(A,this.props),i.a.createElement(V,this.props))}}]),t}(i.a.Component),K=Object(d.b)((function(e){return{TTL:e.TTL,isCelsius:e.isCelsius,city:e.currentlyDisplayedCity,cityId:e.currentlyDisplayedCityId,IsDayTime:e.IsDayTime,originCountry:e.currentlyDisplayedOriginCountry,weatherText:e.currentlyDisplayedWeatherText,weatherIcon:e.currentlyDisplayedWeatherIcon,temperature:e.currentlyDisplayedTemperature,DailyForecasts:e.currentlyDisplayedDailyForecasts}}))(q),G=(a(321),a(322),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isCelsius,r=t.CityId,n=t.City,c=t.OriginCountry,o=t.Temperature,s=t.WeatherText,l=t.WeatherIcon;return i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"card mb-4 shadow-sm"},i.a.createElement("div",{className:"card-body text-center"},i.a.createElement("img",{src:T(l),crossOrigin:"anonymous",alt:s}),i.a.createElement("h4",{className:"text-uppercase m-0"},n),i.a.createElement("p",{className:"mx-auto my-0"},c),i.a.createElement("hr",{className:"my-4"}),i.a.createElement(L,{temperature:o}),i.a.createElement("h5",{className:"temperature-content"},a?o:g(o),"\xb0"),i.a.createElement("div",{className:"small text-black-50"},s),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},i.a.createElement("div",{className:"btn-group"},i.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return e.props.dispatch(R(r))}},i.a.createElement(W.a,{icon:"trash-alt"})))))))}}]),t}(i.a.Component)),H=Object(d.b)()(G),Y=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("section",{className:"favorites-section py-4 bg-black"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},this.props.favorites.map((function(t,a){return i.a.createElement(H,Object.assign({},t,{isCelsius:e.props.isCelsius,isLightTheme:e.props.isLightTheme,key:a}))}))))))}}]),t}(i.a.Component),J=Object(d.b)((function(e){return{favorites:e.favorites,isCelsius:e.isCelsius,isLightTheme:e.isLightTheme}}))(Y);w.b.add(S.a,k.a);var z=function(){return i.a.createElement(y.a,null,i.a.createElement(_,null,i.a.createElement(E.a,{exact:!0,path:"/",component:K}),i.a.createElement(E.a,{path:"/favorites",component:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(47),X=a(131),Q=a.n(X);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee={isCelsius:!0,isLightTheme:!0,IsDayTime:!0,currentlyDisplayedCity:"Tel Aviv",currentlyDisplayedCityId:215854,currentlyDisplayedOriginCountry:"WhoTown",currentlyDisplayedWeatherText:"Sun Gone Nuclear",currentlyDisplayedWeatherIcon:"5",currentlyDisplayedTemperature:"5000",currentlyDisplayedDailyForecasts:[],TTL:"",isLoading:!1,options:[],favorites:[{City:"New JerTest",CityId:"159259",OriginCountry:"USA",Temperature:14,WeatherText:"Chilly",WeatherIcon:"11"},{City:"JakaTest",CityId:"158259",OriginCountry:"Jakika",Temperature:2500,WeatherText:"Hot!!",WeatherIcon:"2"},{City:"New YorkaTest",CityId:"119359",OriginCountry:"USA",Temperature:14,WeatherText:"Chilly",WeatherIcon:"11"},{City:"HaiJakaTest",CityId:"158559",OriginCountry:"Jakika",Temperature:2500,WeatherText:"Hot!!",WeatherIcon:"2"}]},te=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(Error("LocalStorage: loadState() Failed. Error: "+t))}}(),ae=Object(B.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TEMP":return $({},e,{isCelsius:!e.isCelsius});case"TOGGLE_THEME":return $({},e,{isLightTheme:!e.isLightTheme});case"SET_IS_LOADING":return $({},e,{isLoading:t.isLoading});case"ADD_SEARCH_OPTIONS":return $({},e,{options:[].concat(Object(r.a)(e.options),Object(r.a)(t.options))});case"ADD_FAVORITE":var a=e.favorites.find((function(e){return e.CityId===t.CityId}));return $({},e,void 0!==a?{favorites:e.favorites.map((function(e){return e.CityId===t.CityId?$({},e,{Temperature:t.Temperature,WeatherText:t.WeatherText,WeatherIcon:t.WeatherIcon}):e}))}:{favorites:[].concat(Object(r.a)(e.favorites),[{City:t.City,CityId:t.CityId,OriginCountry:t.OriginCountry,Temperature:t.Temperature,WeatherText:t.WeatherText,WeatherIcon:t.WeatherIcon}])});case"REMOVE_FAVORITE":return $({},e,{favorites:e.favorites.filter((function(e){return e.CityId!==t.CityId}))});case"UPDATE_CURRENT_CITY_INFO":return $({},e,{currentlyDisplayedCity:t.City,currentlyDisplayedCityId:t.CityId,currentlyDisplayedOriginCountry:t.OriginCountry});case"UPDATE_CURRENT_CITY_CONDITIONS":return $({},e,{currentlyDisplayedWeatherText:t.WeatherText,currentlyDisplayedWeatherIcon:t.WeatherIcon,currentlyDisplayedTemperature:t.Temperature,IsDayTime:t.IsDayTime});case"UPDATE_CURRENTS_WEEK_ENTIRELY":return $({},e,{currentlyDisplayedDailyForecasts:t.DailyForecasts});default:return e||[]}}),te,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());ae.subscribe(Q()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(Error("LocalStorage: saveState() Failed. Error: "+a))}}(ae.getState())}),1e3)),s.a.render(i.a.createElement(d.a,{store:ae},i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[132,1,2]]]);
//# sourceMappingURL=main.d7dafc56.chunk.js.map