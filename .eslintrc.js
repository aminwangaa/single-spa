module.exports = {
    // root: true, // 是否是根配置
    extends: "airbnb",
    parserOptions: { // 解析器的选项 AST语法树解析
        sourceType: "module",
        ecmaVersion: 2015
    },
    env: { // 指定运行环境
        browser: true, // window document
        node: true // require process
    },
    parser: "babel-eslint", // 源代码转成语法树
    rules: {
        "linebreak-style": [0 ,"error", "windows"],
        "jsx-quotes": ["error", "prefer-double"],
        semi: ["error", "never"],
        quotes: ["error", "double"],
        "no-console": 0,
        "indent": ["error", 2],
        "react/jsx-filename-extension": ["warn", {extensions: [".js", ".jsx"]}],
        "no-restricted-globals": ["error", "event", "fdescribe"],
        "no-param-reassign": ["error", { "props": false }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        eqeqeq: 0,
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "import/prefer-default-export": 0
    },
}

