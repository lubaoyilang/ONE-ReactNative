__d(function(e,t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,a,l=t(12),i=babelHelpers.interopRequireDefault(l),u=t(38),c=t(460),s=babelHelpers.interopRequireDefault(c),p=(a=o=function(e){function t(){var e,n,r,o;babelHelpers.classCallCheck(this,t);for(var a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];return n=r=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r._renderLabel=function(e){var t=r.props,n=t.position,o=t.navigation,a=t.activeTintColor,l=t.inactiveTintColor,c=t.labelStyle,s=t.showLabel;if(s===!1)return null;var p=e.index,d=o.state.routes,f=[-1].concat(babelHelpers.toConsumableArray(d.map(function(e,t){return t}))),v=f.map(function(e){return e===p?a:l}),C=n.interpolate({inputRange:f,outputRange:v}),g=e.focused?a:l,h=r.props.getLabel(babelHelpers.extends({},e,{tintColor:g}));return"string"==typeof h?i.default.createElement(u.Animated.Text,{style:[b.label,{color:C},c]},h):"function"==typeof h?h(babelHelpers.extends({},e,{tintColor:g})):h},r._renderIcon=function(e){var t=r.props,n=t.position,o=t.navigation,a=t.activeTintColor,l=t.inactiveTintColor,u=t.renderIcon,c=t.showIcon;return c===!1?null:i.default.createElement(s.default,{position:n,navigation:o,activeTintColor:a,inactiveTintColor:l,renderIcon:u,scene:e,style:b.icon})},o=n,babelHelpers.possibleConstructorReturn(r,o)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.position,r=t.navigation,o=t.jumpToIndex,a=t.activeBackgroundColor,l=t.inactiveBackgroundColor,c=t.style,s=r.state.routes,p=[-1].concat(babelHelpers.toConsumableArray(s.map(function(e,t){return t})));return i.default.createElement(u.Animated.View,{style:[b.tabBar,c]},s.map(function(t,c){var s=c===r.state.index,d={route:t,index:c,focused:s},f=p.map(function(e){return e===c?a:l}),v=n.interpolate({inputRange:p,outputRange:f}),C=e.props.showIcon?"flex-end":"center";return i.default.createElement(u.TouchableWithoutFeedback,{key:t.key,onPress:function(){return o(c)}},i.default.createElement(u.Animated.View,{style:[b.tab,{backgroundColor:v,justifyContent:C}]},e._renderIcon(d),e._renderLabel(d)))}))}}]),t}(l.PureComponent),o.defaultProps={activeTintColor:"#3478f6",activeBackgroundColor:"transparent",inactiveTintColor:"#929292",inactiveBackgroundColor:"transparent",showLabel:!0,showIcon:!0},a);r.default=p;var b=u.StyleSheet.create({tabBar:{height:49,flexDirection:"row",borderTopWidth:u.StyleSheet.hairlineWidth,borderTopColor:"rgba(0, 0, 0, .2)",backgroundColor:"#f4f4f4"},tab:{flex:1,alignItems:"stretch",justifyContent:"flex-end"},icon:{flexGrow:1},label:{textAlign:"center",fontSize:10,marginBottom:1.5,backgroundColor:"transparent"}})},461);