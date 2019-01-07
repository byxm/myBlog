module.exports={
    "extends": "eslint:recommended",
    "ecmaFeatures":{
        "jsx":true,
        "modules":true
    },
    "env":{
        "browser":true,
        "node":true,
        "es6":true
    },
    "parser":"babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,                               //默认ecmascript版本到2016
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules":{
        "strict":0,
        "valid-jsdoc":2,
        "no-console":0,
        "no-debugger":0,
        "array-callback-return":1,                      //有返回值的数组迭代方法需要有return关键字
        "react/jsx-uses-react":2,
        "react/jsx-uses-vars":2,                        //不能出现未使用的var定的组件
        "react/react-in-jsx-scope":2,
        "react/button-has-type": ["error", {            //button元素type类型指定
            "button": true,
            "submit": true,
            "reset": true
          }],
        "react/destructuring-assignment": ["warn", "always"],     //组件属性获取使用解构赋值
        "react/forbid-component-props": ["warn", { "forbid": ["className"] }],  //禁止自定义组件使用JSX的默认属性
        "react/no-access-state-in-setstate":2,            //禁止在setState函数中使用this.state
        "react/no-array-index-key":2,                     //禁止迭代生成的虚拟DOM中使用index作为key
        "react/no-children-prop":2,                       //禁止使用children作为prop
        "react/no-direct-mutation-state":2,               //禁止直接更改this.state,除了在ES6构造函数中可以直接使用  
        "react/no-find-dom-node":2,                       //禁止使用findDOMNode查找DOM元素节点  
        "react/no-unused-state":2,                        //查找有没有定义但是没有使用的state属性  
        "react/no-will-update-set-state":2,               //禁止在willMountUpdate里面使用setState  
        "react/prefer-es6-class":2,                       //强制使用es6 class来定义组件
        "react/prefer-stateless-function":1,              //无状态组件应该要写成一个无状态函数  
        "react/require-render-return":2,                  //render函数里面必须有return返回值  
        "react/jsx-no-bind":["warn", {                    //警告不能再虚拟DOM里面直接使用bind  
            "ignoreDOMComponents": false,
            "ignoreRefs": false
          }]
    },
    "plugins":[
        "react",
        "eslint-plugin-react"
    ]

}