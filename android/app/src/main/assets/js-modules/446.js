__d(function(e,a,t,o){Object.defineProperty(o,"__esModule",{value:!0});var n=a(12),i=babelHelpers.interopRequireDefault(n),l=a(38),r=a(418),b=babelHelpers.interopRequireDefault(r),s=a(413),p=babelHelpers.interopRequireDefault(s),u=a(447),d=babelHelpers.interopRequireDefault(u),f=a(448),m=babelHelpers.interopRequireDefault(f),B=a(459),T=babelHelpers.interopRequireDefault(B),E=a(461),H=babelHelpers.interopRequireDefault(E),D=a(445),O=babelHelpers.interopRequireDefault(D),P=function e(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=babelHelpers.extends({},e.Presets.Default,t),n=o.tabBarComponent,l=o.tabBarPosition,r=o.tabBarOptions,s=o.swipeEnabled,u=o.animationEnabled,f=o.lazy,B=babelHelpers.objectWithoutProperties(o,["tabBarComponent","tabBarPosition","tabBarOptions","swipeEnabled","animationEnabled","lazy"]),T=(0,d.default)(a,B),E=(0,b.default)(T,a,t,O.default.STACK)(function(e){return i.default.createElement(m.default,babelHelpers.extends({},e,{tabBarComponent:n,tabBarPosition:l,tabBarOptions:r,swipeEnabled:s,animationEnabled:u,lazy:f}))});return(0,p.default)(E,B.containerOptions)},q={iOSBottomTabs:{tabBarComponent:H.default,tabBarPosition:"bottom",swipeEnabled:!1,animationEnabled:!1,lazy:!1},AndroidTopTabs:{tabBarComponent:T.default,tabBarPosition:"top",swipeEnabled:!0,animationEnabled:!0,lazy:!1}};P.Presets={iOSBottomTabs:q.iOSBottomTabs,AndroidTopTabs:q.AndroidTopTabs,Default:"ios"===l.Platform.OS?q.iOSBottomTabs:q.AndroidTopTabs},o.default=P},446);