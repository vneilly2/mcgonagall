!function(e){function t(t){for(var l,o,i=t[0],u=t[1],c=t[2],f=0,s=[];f<i.length;f++)o=i[f],a[o]&&s.push(a[o][0]),a[o]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);for(d&&d(t);s.length;)s.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],l=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(l=!1)}l&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var l={},a={0:0},r=[];function o(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=l,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=u;r.push([265,1]),n()}({122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=s(n(5)),r=n(1),o=s(r),i=n(78),u=s(n(494)),c=s(n(496)),d=s(n(497)),f=s(n(498));function s(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=function(e){var t=e.mobile;return o.default.createElement(i.Container,{text:!0},o.default.createElement(i.Image,{src:"https://www.ppt-backgrounds.net/uploads/food-template-presentation.jpg",style:{position:"absolute",height:"auto",width:t?"99%":"104%",top:t?"79px":"84px",right:t?"2px":"0px",maxWidth:"2000px",maxHeight:"639px"}}),o.default.createElement(i.Header,{as:"h1",content:"BudgetLife",style:{fontFamily:"cursive",color:"white",position:"relative",fontSize:t?"3em":"8em",fontWeight:"normal",marginBottom:0,marginTop:"1.5em"}}),o.default.createElement(i.Header,{as:"h2",content:"Save money. Eat Healthier.",style:{color:"white",position:"relative",fontSize:t?"1.0em":"1.7em",fontWeight:"normal",marginTop:t?"1.0em":"1.5em"}}),o.default.createElement(i.Button,{href:"#",primary:!0,size:"huge",inverted:!0,color:"green",animated:!0},o.default.createElement(i.Button.Content,{visible:!0},"Get Started"),o.default.createElement(i.Button.Content,{hidden:!0},o.default.createElement(i.Icon,{name:"right arrow"}))))};E.propTypes={mobile:a.default.bool};var b=function(e){function t(e){m(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.hideFixedMenu=n.hideFixedMenu.bind(n),n.showFixedMenu=n.showFixedMenu.bind(n),n.handleGoogleClick=n.handleGoogleClick.bind(n),n.handleFacebookClick=n.handleFacebookClick.bind(n),n}return h(t,r.Component),l(t,[{key:"handleGoogleClick",value:function(){alert("google button clicked")}},{key:"handleFacebookClick",value:function(){alert("facebook button clicked")}},{key:"hideFixedMenu",value:function(){this.setState({fixed:!1})}},{key:"showFixedMenu",value:function(){this.setState({fixed:!0})}},{key:"render",value:function(){var e=this.props.children,t=this.state.fixed;return o.default.createElement(i.Responsive,{minWidth:i.Responsive.onlyTablet.minWidth},o.default.createElement(i.Visibility,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},o.default.createElement(i.Segment,{textAlign:"center",style:{minHeight:700,padding:"1em 0em"},vertical:!0},o.default.createElement(i.Menu,{fixed:t?"top":null,pointing:!t,secondary:!t,size:"large"},o.default.createElement(i.Container,null,o.default.createElement(i.Menu.Item,null,o.default.createElement(i.Image,{size:"mini",src:"https://image.flaticon.com/icons/svg/424/424067.svg"})),o.default.createElement(i.Menu.Item,{href:"#",as:"a",active:!0},"Home"),o.default.createElement(i.Menu.Item,{href:"#",as:"a"},"About"),o.default.createElement(i.Menu.Item,{href:"#",as:"a"},"Features"),o.default.createElement(i.Menu.Item,{position:"right"},o.default.createElement(u.default,{fluid:!0}),o.default.createElement(d.default,{fbHandler:this.handleFacebookClick,googleHandler:this.handleGoogleClick}),o.default.createElement(c.default,null)))),o.default.createElement(E,null))),e)}}]),t}();b.propTypes={children:a.default.node};var y=function(e){function t(e){m(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.handlePusherClick=n.handlePusherClick.bind(n),n.handleToggle=n.handleToggle.bind(n),n.handleGoogleClick=n.handleGoogleClick.bind(n),n.handleFacebookClick=n.handleFacebookClick.bind(n),n}return h(t,r.Component),l(t,[{key:"handlePusherClick",value:function(){this.state.sidebarOpened&&this.setState({sidebarOpened:!1})}},{key:"handleToggle",value:function(){this.setState({sidebarOpened:!this.state.sidebarOpened})}},{key:"handleGoogleClick",value:function(){alert("google button clicked")}},{key:"handleFacebookClick",value:function(){alert("facebook button clicked")}},{key:"render",value:function(){var e=this.props.children,t=this.state.sidebarOpened;return o.default.createElement(i.Responsive,{maxWidth:i.Responsive.onlyMobile.maxWidth},o.default.createElement(i.Sidebar.Pushable,null,o.default.createElement(i.Sidebar,{as:i.Menu,animation:"uncover",inverted:!0,vertical:!0,visible:t},o.default.createElement(i.Menu.Item,null,o.default.createElement(i.Image,{size:"mini",src:"https://image.flaticon.com/icons/svg/424/424067.svg"})),o.default.createElement(i.Menu.Item,{href:"#",as:"a",active:!0},"Home"),o.default.createElement(i.Menu.Item,{href:"#",as:"a"},"Our Mission"),o.default.createElement(i.Menu.Item,{href:"#",as:"a"},"Features"),o.default.createElement(i.Menu.Item,{href:"#",as:"a"},"Benefits")),o.default.createElement(i.Sidebar.Pusher,{dimmed:t,onClick:this.handlePusherClick,style:{minHeight:"100vh"}},o.default.createElement(i.Segment,{textAlign:"center",style:{minHeight:350,padding:"1em 0em"},vertical:!0},o.default.createElement(i.Container,null,o.default.createElement(i.Menu,{pointing:!0,secondary:!0,size:"large"},o.default.createElement(i.Menu.Item,{onClick:this.handleToggle},o.default.createElement(i.Icon,{name:"sidebar"})),o.default.createElement(i.Menu.Item,{position:"right"},o.default.createElement(u.default,{size:"mini",fluid:!0}),o.default.createElement(d.default,{fbHandler:this.handleFacebookClick,googleHandler:this.handleGoogleClick}),o.default.createElement(c.default,null)))),o.default.createElement(E,{mobile:!0})),e)))}}]),t}();y.propTypes={children:a.default.node};var g=function(e){var t=e.children;return o.default.createElement("div",null,o.default.createElement(b,null,t),o.default.createElement(y,null,t))};g.propTypes={children:a.default.node};t.default=function(){return o.default.createElement(g,null,o.default.createElement(i.Divider,{section:!0}),o.default.createElement(i.Segment,{style:{padding:"0em 8em"},vertical:!0},o.default.createElement(i.Grid,{celled:"internally",columns:"equal",stackable:!0},o.default.createElement(i.Grid.Row,null,o.default.createElement(i.Grid.Column,{width:12},o.default.createElement(f.default,null))))),o.default.createElement(i.Segment,{style:{padding:"8em 0em"},vertical:!0},o.default.createElement(i.Grid,{container:!0,stackable:!0,verticalAlign:"middle"},o.default.createElement(i.Grid.Row,null,o.default.createElement(i.Grid.Column,{width:8},o.default.createElement(i.Header,{as:"h3",style:{fontSize:"2em"}},"Healthier, Informed, Affordable meal prep."),o.default.createElement("p",{style:{fontSize:"1.33em"}},"Some Description...."),o.default.createElement(i.Header,{as:"h3",style:{fontSize:"2em"}},"Easy to use on the go!..."),o.default.createElement("p",{style:{fontSize:"1.33em"}},"paragraph description...")),o.default.createElement(i.Grid.Column,{floated:"right",width:6},o.default.createElement(i.Image,{bordered:!0,rounded:!0,size:"large",src:""}))),o.default.createElement(i.Grid.Row,null,o.default.createElement(i.Grid.Column,{textAlign:"center"},o.default.createElement(i.Button,{color:"green",href:"#",size:"huge"},"Check Them Out"))))),o.default.createElement(i.Segment,{style:{padding:"0em"},vertical:!0},o.default.createElement(i.Grid,{celled:"internally",columns:"equal",stackable:!0},o.default.createElement(i.Grid.Row,{textAlign:"center"},o.default.createElement(i.Grid.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},o.default.createElement(i.Header,{as:"h3",style:{fontSize:"2em"}},'"What a Company"'),o.default.createElement("p",{style:{fontSize:"1.33em"}},"That is what they all say about us (We can maybe put a comment stream here)")),o.default.createElement(i.Grid.Column,{style:{paddingBottom:"5em",paddingTop:"5em"}},o.default.createElement(i.Header,{as:"h3",style:{fontSize:"2em"}},'"Fake user comment here."'),o.default.createElement("p",{style:{fontSize:"1.33em"}},o.default.createElement("b",null,"Nan")," Fake user name and picture"))))),o.default.createElement(i.Segment,{style:{padding:"8em 0em"},vertical:!0},o.default.createElement(i.Container,{text:!0},o.default.createElement(i.Header,{as:"h3",style:{fontSize:"2em"}},"List of Features"),o.default.createElement("p",{style:{fontSize:"1.33em"}},"- Allergens ",o.default.createElement("br",null),"- Recipes ",o.default.createElement("br",null),"- Prices ",o.default.createElement("br",null),"Short description..."),o.default.createElement(i.Button,{color:"green",href:"#",as:"a",size:"large"},"Read More"),o.default.createElement(i.Divider,{as:"h4",className:"header",horizontal:!0,style:{margin:"3em 0em",textTransform:"uppercase"}},o.default.createElement("a",{href:"#"},"Case Studies")),o.default.createElement(i.Header,{as:"h3",style:{fontSize:"2em"}},"Did We Tell You About Our Bananas?"),o.default.createElement("p",{style:{fontSize:"1.33em"}},"Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."),o.default.createElement(i.Button,{color:"green",href:"#",as:"a",size:"large"},"I'm Still Quite Interested"))),o.default.createElement(i.Segment,{inverted:!0,vertical:!0,style:{padding:"5em 0em"}},o.default.createElement(i.Container,null,o.default.createElement(i.Grid,{divided:!0,inverted:!0,stackable:!0},o.default.createElement(i.Grid.Row,null,o.default.createElement(i.Grid.Column,{width:3},o.default.createElement(i.Header,{inverted:!0,as:"h4",content:"About"}),o.default.createElement(i.List,{link:!0,inverted:!0},o.default.createElement(i.List.Item,{href:"#",as:"a"},"Sitemap"),o.default.createElement(i.List.Item,{href:"#",as:"a"},"Contact Us"),o.default.createElement(i.List.Item,{href:"#",as:"a"},"Team hours"))),o.default.createElement(i.Grid.Column,{width:3},o.default.createElement(i.Header,{inverted:!0,as:"h4",content:"Services"}),o.default.createElement(i.List,{link:!0,inverted:!0},o.default.createElement(i.List.Item,{href:"#",as:"a"},"Feature List"),o.default.createElement(i.List.Item,{href:"#",as:"a"},"Membership"),o.default.createElement(i.List.Item,{href:"#",as:"a"},"Renown recipes"))),o.default.createElement(i.Grid.Column,{width:7},o.default.createElement(i.Header,{as:"h4",inverted:!0},"Footer Header"),o.default.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users.")))))))}},265:function(e,t,n){"use strict";var l=o(n(1)),a=o(n(80)),r=o(n(122));function o(e){return e&&e.__esModule?e:{default:e}}a.default.render(l.default.createElement(function(){return l.default.createElement("div",null,l.default.createElement(r.default,null))},null),document.getElementById("index"))},494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),r=c(n(495)),o=n(1),i=c(o),u=n(78);function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isLoading:!1,results:[],value:""},e.resetComponent=e.resetComponent.bind(e),e.handleResultSelect=e.handleResultSelect.bind(e),e.handleSearchChange=e.handleSearchChange.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"componentWillMount",value:function(){this.resetComponent()}},{key:"resetComponent",value:function(){this.setState({isLoading:!1,results:[],value:""})}},{key:"handleResultSelect",value:function(e,t){var n=t.result;this.setState({value:n.title})}},{key:"handleSearchChange",value:function(e,t){var n=this,l=t.value;this.setState({isLoading:!0,value:l}),setTimeout(function(){if(n.state.value.length<1)return n.resetComponent();var e=new RegExp(r.default.escapeRegExp(n.state.value),"i");n.setState({isLoading:!1,results:r.default.filter({value:l},function(t){return e.test(t.title)})})},300)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.value,a=e.results;return i.default.createElement(u.Grid,null,i.default.createElement(u.Grid.Column,{width:6},i.default.createElement(u.Search,l({loading:t,onResultSelect:this.handleResultSelect,onSearchChange:r.default.debounce(this.handleSearchChange,500,{leading:!0}),results:a,value:n},this.props))))}}]),t}();t.default=d},496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=n(1),r=i(a),o=n(78);i(n(122));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1},n.handleRef=n.handleRef.bind(n),n.open=n.open.bind(n),n.close=n.close.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),l(t,[{key:"handleRef",value:function(e){this.ref=e}},{key:"open",value:function(){var e=this;this.setState({open:!0},function(){return e.ref.focus()})}},{key:"close",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.state;t.open,t.dimmer;return r.default.createElement("div",null,r.default.createElement(o.Button,{color:"green",inverted:!0,primary:!0,content:"Sign Up",onClick:this.open,style:{marginLeft:"0.5em"}}),r.default.createElement(o.Modal,{open:this.state.open,onClose:this.close},r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Modal.Description,null,r.default.createElement(o.Header,null,"Sign Up"))),r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Button,{color:"facebook",onClick:function(){e.props.fbHandler()}},r.default.createElement(o.Icon,{name:"facebook"})," Facebook"),r.default.createElement(o.Button,{color:"google plus",onClick:function(){e.props.googleHandler()}},r.default.createElement(o.Icon,{name:"google plus"})," Google Plus")),r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Form,null,r.default.createElement("div",{className:"two fields"},r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"First Name"),r.default.createElement("input",{placeholder:"First Name",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"Last Name"),r.default.createElement("input",{placeholder:"Last Name",ref:this.handleRef}))),r.default.createElement("div",{className:"two fields"},r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"Email"),r.default.createElement("input",{placeholder:"Email",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"Username"),r.default.createElement("input",{placeholder:"Username",ref:this.handleRef}))),r.default.createElement("div",{className:"two fields"},r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"Password"),r.default.createElement("input",{placeholder:"Password",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"COnmfirm Password"),r.default.createElement("input",{placeholder:"Confirm Password",ref:this.handleRef}))),r.default.createElement(o.Form.Field,null,r.default.createElement(o.Checkbox,{label:"I agree to the Terms and Conditions"})),r.default.createElement(o.Button,{type:"submit"},"Submit")))))}}]),t}();t.default=u},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=n(1),r=i(a),o=n(78);i(n(122));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1},n.handleRef=n.handleRef.bind(n),n.open=n.open.bind(n),n.close=n.close.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),l(t,[{key:"handleRef",value:function(e){this.ref=e}},{key:"open",value:function(){var e=this;this.setState({open:!0},function(){return e.ref.focus()})}},{key:"close",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.state;t.open,t.dimmer;return r.default.createElement("div",null,r.default.createElement(o.Button,{color:"green",inverted:!0,primary:!0,content:"Log In",onClick:this.open,style:{marginLeft:"0.5em"}}),r.default.createElement(o.Modal,{open:this.state.open,onClose:this.close},r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Modal.Description,null,r.default.createElement(o.Header,null,"Log In"))),r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Button,{color:"facebook",onClick:function(){e.props.fbHandler()}},r.default.createElement(o.Icon,{name:"facebook"})," Facebook"),r.default.createElement("a",{href:"auth/google"},r.default.createElement(o.Button,{color:"google plus"},r.default.createElement(o.Icon,{name:"google plus"})," Google Plus")," ")),r.default.createElement(o.Modal.Content,null,r.default.createElement(o.Form,null,r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"username"),r.default.createElement("input",{placeholder:"username",ref:this.handleRef})),r.default.createElement(o.Form.Field,null,r.default.createElement("label",null,"password"),r.default.createElement("input",{placeholder:"password",ref:this.handleRef})),r.default.createElement(o.Button,{type:"submit",color:"green",content:"Submit"})))))}}]),t}();t.default=u},498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=n(1),r=i(a),o=(i(n(5)),n(78));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={cuisine:["African","American","British","Cajun","Caribbean","Chinese","Eastern European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],calorieRange:["under 400 Cal.","401 - 600","601 - 800","801 - 1000","1001 - 1200","1201 - 1400","1401 - 1600","1601 - 1800","1801 - 2000","2001 - 2200","2201 - 2400"]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),l(t,[{key:"render",value:function(){return r.default.createElement("div",{className:"call-to-action"},r.default.createElement("form",{className:"ui form"},r.default.createElement("h3",null,"Filter recipes by cuisine, diet and "),r.default.createElement("div",{className:"three fields"},r.default.createElement("div",{className:"six wide field"},r.default.createElement("select",{className:"ui fluid search selection dropdown"},r.default.createElement("option",null,"Select Cuisine"),this.state.cuisine.map(function(e){return r.default.createElement("option",{key:e,value:e},e)}))),r.default.createElement("div",{className:"six wide field"},r.default.createElement("select",{className:"ui fluid search selection dropdown"},r.default.createElement("option",null,"Select Diet Type"),r.default.createElement("option",null,"Ketogenic"),r.default.createElement("option",null,"Paleo"),r.default.createElement("option",null,"Primal"),r.default.createElement("option",null,"Vegan"),r.default.createElement("option",null,"Vegetarian (Lacto and Ovo)"),r.default.createElement("option",null,"Whole 30"))),r.default.createElement("div",{className:"four wide field"},r.default.createElement(o.Button,{color:"green",size:"medium",animated:!0,content:"retrieve recipes        "})))),r.default.createElement("div",null,r.default.createElement("form",{className:"ui form"},r.default.createElement("h3",null,"Select daily/weekly meal plans by total daily calories"),r.default.createElement("div",{className:"three fields"},r.default.createElement("div",{className:"six wide field"},r.default.createElement("select",{className:"ui fluid search selection dropdown"},r.default.createElement("option",null,"Meal Plan by Calories"),this.state.calorieRange.map(function(e){return r.default.createElement("option",{key:e,value:e},e)}),"}) }")),r.default.createElement("div",{className:"six wide field"},r.default.createElement("select",{className:"ui fluid search selection dropdown"},r.default.createElement("option",null,"Plan Type"),r.default.createElement("option",null,"Daily"),r.default.createElement("option",null,"Weekly"))),r.default.createElement("div",{className:"four wide field"},r.default.createElement(o.Button,{color:"green",size:"medium",animated:!0,content:"retrieve meal plan        "}))))),r.default.createElement("div",null,r.default.createElement("form",{className:"ui form"},r.default.createElement("h3",null,"Select meals by ingredient(s).  Use commas to separete multiple items"),r.default.createElement("div",{className:"three fields"},r.default.createElement("div",{className:"twelve wide field"},r.default.createElement(o.Input,{fluid:!0,placeholder:"Ingredients..."})),r.default.createElement("div",{className:"four wide field"},r.default.createElement(o.Button,{color:"green",size:"medium",animated:!0,content:"retrieve recipes         "}))))))}}]),t}();t.default=u}});