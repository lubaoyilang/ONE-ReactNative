__d(function(e,t,o,n){function r(e,t){var o,n;return n=o=function(e){function o(){return babelHelpers.classCallCheck(this,o),babelHelpers.possibleConstructorReturn(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return babelHelpers.inherits(o,e),babelHelpers.createClass(o,[{key:"updateIconSources",value:function(e){var o=this;if(e.iconName&&t(e.iconName,e.iconSize,e.iconColor).then(function(e){return o.setState({icon:e})}),e.selectedIconName||e.selectedIconColor){var n=e.selectedIconName||e.iconName,r=e.selectedIconColor||e.iconColor;t(n,e.iconSize,r).then(function(e){return o.setState({selectedIcon:e})})}}},{key:"componentWillMount",value:function(){this.updateIconSources(this.props)}},{key:"componentWillReceiveProps",value:function(e){var t=Object.keys(o.propTypes);(0,i.default)((0,c.default)(e,t),(0,c.default)(this.props,t))||this.updateIconSources(e)}},{key:"render",value:function(){return u.default.createElement(d.TabBarIOS.Item,babelHelpers.extends({},this.props,this.state))}}]),o}(s.Component),o.propTypes={iconName:e.isRequired,selectedIconName:e,iconSize:f.default.number,iconColor:f.default.string,selectedIconColor:f.default.string},o.defaultProps={iconSize:30},n}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r;var l=t(618),i=babelHelpers.interopRequireDefault(l),a=t(610),c=babelHelpers.interopRequireDefault(a),s=t(12),u=babelHelpers.interopRequireDefault(s),p=t(377),f=babelHelpers.interopRequireDefault(p),d=t(478)},617);