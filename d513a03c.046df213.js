(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{441:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),i=(n(0),n(504)),r={id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},s={id:"version-4.x/tab-based-navigation",isDocsHomePage:!1,title:"Tab navigation",description:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header).",source:"@site/versioned_docs/version-4.x/tab-based-navigation.md",permalink:"/docs/4.x/tab-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/tab-based-navigation.md",version:"4.x",sidebar_label:"Tab navigation",sidebar:"version-4.x-docs",previous:{title:"Limitations",permalink:"/docs/4.x/limitations"},next:{title:"Drawer navigation",permalink:"/docs/4.x/drawer-based-navigation"},latestVersionMainDocPermalink:"/docs/getting-started"},c=[{value:"Minimal example of tab-based navigation",id:"minimal-example-of-tab-based-navigation",children:[]},{value:"Customizing the appearance",id:"customizing-the-appearance",children:[]},{value:"Add badges to icons",id:"add-badges-to-icons",children:[]},{value:"Jumping between tabs",id:"jumping-between-tabs",children:[]},{value:"A stack navigator for each tab",id:"a-stack-navigator-for-each-tab",children:[]},{value:"Why do we need a TabNavigator instead of TabBarIOS or some other component?",id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",children:[]},{value:"A tab navigator contains a stack and you want to hide the tab bar on specific screens",id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header)."),Object(i.b)("p",null,"This guide covers ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/bottom-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createBottomTabNavigator")),". You may also use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/material-bottom-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createMaterialBottomTabNavigator"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/material-top-tab-navigator"}),Object(i.b)("inlineCode",{parentName:"a"},"createMaterialTopTabNavigator"))," to add tabs to your application."),Object(i.b)("h2",{id:"minimal-example-of-tab-based-navigation"},"Minimal example of tab-based navigation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { Text, View } from 'react-native';\nimport { createAppContainer } from 'react-navigation';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n      </View>\n    );\n  }\n}\n\nconst TabNavigator = createBottomTabNavigator({\n  Home: HomeScreen,\n  Settings: SettingsScreen,\n});\n\nexport default createAppContainer(TabNavigator);\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/basic-tabs-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("h2",{id:"customizing-the-appearance"},"Customizing the appearance"),Object(i.b)("p",null,"This is similar to how you would customize a stack navigator ","\u2014"," there are some properties that are set when you initialize the tab navigator and others that can be customized per-screen in ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// You can import Ionicons from @expo/vector-icons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\nimport { createAppContainer } from 'react-navigation';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nexport default createBottomTabNavigator(\n  {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n  {\n    defaultNavigationOptions: ({ navigation }) => ({\n      tabBarIcon: ({ focused, horizontal, tintColor }) => {\n        const { routeName } = navigation.state;\n        let IconComponent = Ionicons;\n        let iconName;\n        if (routeName === 'Home') {\n          iconName = focused\n            ? 'ios-information-circle'\n            : 'ios-information-circle-outline';\n          // Sometimes we want to add badges to some icons.\n          // You can check the implementation below.\n          IconComponent = HomeIconWithBadge;\n        } else if (routeName === 'Settings') {\n          iconName = focused ? 'ios-list-box' : 'ios-list';\n        }\n\n        // You can return any component that you like here!\n        return <IconComponent name={iconName} size={25} color={tintColor} />;\n      },\n    }),\n    tabBarOptions: {\n      activeTintColor: 'tomato',\n      inactiveTintColor: 'gray',\n    },\n  }\n);\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/tabs-with-icons-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("p",null,"Let's dissect this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabBarIcon")," is a property on ",Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions"),", so we know we can use it on our screen components, but in this case chose to put it in the ",Object(i.b)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," configuration in order to centralize the icon configuration for convenience."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabBarIcon")," is a function that is given the ",Object(i.b)("inlineCode",{parentName:"li"},"focused")," state, ",Object(i.b)("inlineCode",{parentName:"li"},"tintColor"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"horizontal")," param, which is a boolean. If you take a peek further down in the configuration you will see ",Object(i.b)("inlineCode",{parentName:"li"},"tabBarOptions")," and ",Object(i.b)("inlineCode",{parentName:"li"},"activeTintColor")," and ",Object(i.b)("inlineCode",{parentName:"li"},"inactiveTintColor"),". These default to the iOS platform defaults, but you can change them here. The ",Object(i.b)("inlineCode",{parentName:"li"},"tintColor")," that is passed through to the ",Object(i.b)("inlineCode",{parentName:"li"},"tabBarIcon")," is either the active or inactive one, depending on the ",Object(i.b)("inlineCode",{parentName:"li"},"focused")," state (focused is active). The orientation state ",Object(i.b)("inlineCode",{parentName:"li"},"horizontal")," is ",Object(i.b)("inlineCode",{parentName:"li"},"true")," when the device is in landscape, otherwise is ",Object(i.b)("inlineCode",{parentName:"li"},"false")," for portrait."),Object(i.b)("li",{parentName:"ul"},"Read the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/4.x/bottom-tab-navigator"}),"full API reference")," for further information on ",Object(i.b)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," configuration options.")),Object(i.b)("h2",{id:"add-badges-to-icons"},"Add badges to icons"),Object(i.b)("p",null,"Sometimes we want to add badges to some icons. A common way is to use an extra view container and style the badge element with absolute positioning."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export default class IconWithBadge extends React.Component {\n  render() {\n    const { name, badgeCount, color, size } = this.props;\n    return (\n      <View style={{ width: 24, height: 24, margin: 5 }}>\n        <Ionicons name={name} size={size} color={color} />\n        {badgeCount > 0 && (\n          <View\n            style={{\n              // If you're using react-native < 0.57 overflow outside of parent\n              // will not work on Android, see https://git.io/fhLJ8\n              position: 'absolute',\n              right: -6,\n              top: -3,\n              backgroundColor: 'red',\n              borderRadius: 6,\n              width: 12,\n              height: 12,\n              justifyContent: 'center',\n              alignItems: 'center',\n            }}\n          >\n            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>\n              {badgeCount}\n            </Text>\n          </View>\n        )}\n      </View>\n    );\n  }\n}\n")),Object(i.b)("p",null,"From UI perspective this component is ready to use, but you still need to find some way to pass down the badge count properly from somewhere else, like using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React Context"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mobx.js.org/"}),"MobX")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/vendor/emitter/EventEmitter.js"}),"event emitters"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const HomeIconWithBadge = props => {\n  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.\n  return <IconWithBadge {...props} badgeCount={3} />;\n};\nexport default HomeIconWithBadge;\n")),Object(i.b)("h2",{id:"jumping-between-tabs"},"Jumping between tabs"),Object(i.b)("p",null,"Switching from one tab to another has a familiar API ","\u2014"," ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.navigation.navigate"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Button, Text, View } from 'react-native';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n        <Button\n          title=\"Go to Settings\"\n          onPress={() => this.props.navigation.navigate('Settings')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n      </View>\n    );\n  }\n}\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/jumping-between-tabs-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("h2",{id:"a-stack-navigator-for-each-tab"},"A stack navigator for each tab"),Object(i.b)("p",null,"Usually tabs don't just display one screen ","\u2014"," for example, on your Twitter feed, you can tap on a tweet and it brings you to a new screen within that tab with all of the replies. You can think of this as there being separate navigation stacks within each tab, and that's exactly how we will model it in React Navigation."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createAppContainer } from 'react-navigation';\nimport { createStackNavigator } from 'react-navigation-stack';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nclass DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Details!</Text>\n      </View>\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        {/* other code from before here */}\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        {/* other code from before here */}\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nconst HomeStack = createStackNavigator({\n  Home: HomeScreen,\n  Details: DetailsScreen,\n});\n\nconst SettingsStack = createStackNavigator({\n  Settings: SettingsScreen,\n  Details: DetailsScreen,\n});\n\nexport default createAppContainer(\n  createBottomTabNavigator(\n    {\n      Home: HomeStack,\n      Settings: SettingsStack,\n    },\n    {\n      /* Other configuration remains unchanged */\n    }\n  )\n);\n")),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/stacks-in-tabs-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("h2",{id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component"},"Why do we need a TabNavigator instead of TabBarIOS or some other component?"),Object(i.b)("p",null,"It's common to attempt to use a standalone tab bar component without integrating it into the navigation library you use in your app. In some cases, this works fine! You should be warned, however, that you may run into some frustrating unanticipated issues when doing this."),Object(i.b)("p",null,"For example, React Navigation's ",Object(i.b)("inlineCode",{parentName:"p"},"TabNavigator"),' takes care of handling the Android back button for you, while standalone components typically do not. Additionally, it is more difficult for you (as the developer) to perform actions such as "jump to this tab and then go to this screen" if you need to call into two distinct APIs for it. Lastly, mobile user interfaces have numerous small design details that require that certain components are aware of the layout or presence of other components ',"\u2014"," for example, if you have a translucent tab bar, content should scroll underneath it and the scroll view should have an inset on the bottom equal to the height of the tab bar so you can see all of the content. Double tapping the tab bar should make the active navigation stack pop to the top of the stack, and doing it again should scroll the active scroll view in that stack scroll to the top. While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."),Object(i.b)("h2",{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"},"A tab navigator contains a stack and you want to hide the tab bar on specific screens"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"navigation-options-resolution.html#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"}),"See the documentation here")))}b.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(u,s(s({ref:t},l),{},{components:n})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);