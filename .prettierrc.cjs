// Prettier 配置 - 代码风格格式化
module.exports = {
    // 指定每行代码的建议长度，超出换行
    printWidth: 360,
    // 指定每层缩进的空格数
    tabWidth: 4,
    // 是否使用制表符而不是空格缩进
    useTabs: false,
    // 是否在语句末尾添加分号
    semi: true,
    // 是否使用单引号而不是双引号
    singleQuote: true,
    // 是否要求对象的属性名称使用引号
    // as-needed - 仅在需要时在对象属性周围添加引号
    // consistent - 如果对象中至少有一个属性需要引号，则为所有属性添加引号
    // preserve - 保留用户在对象属性中使用的引号
    quoteProps: 'consistent',
    // 是否在 JSX 中使用单引号而不是双引号
    jsxSingleQuote: false,
    // 是否在多行逗号分隔的语法结构中，在最后一个元素后面添加逗号
    trailingComma: 'none',
    // 是否在单行对象的括号和内容之间保留一个空格
    bracketSpacing: true,
    // 是否将多行 HTML 元素的">"符号放在最后一行的末尾
    bracketSameLine: true,
    // 是否在箭头函数的唯一参数周围添加括号
    arrowParens: 'always',
    // 是否只格式化文件顶部有特殊标记 @format 的文件
    requirePragma: false,
    // 是否更改 Markdown 文本中的换行
    // preserve - 什么都不做，保持原样
    proseWrap: 'preserve',
    // 是否去除 HTML 元素中的多余空格
    htmlWhitespaceSensitivity: 'ignore',
    // 是否缩进 Vue 文件中 <script> 和 <style> 标签的内部代码
    vueIndentScriptAndStyle: false,
    // 换行符类型
    endOfLine: 'lf',
    // 是否格式化一些文件中被嵌入的代码片段
    embeddedLanguageFormatting: 'auto',
    // 是否在Html、Vue、JSX中强制每条属性占用一行
    singleAttributePerLine: false,
    // 例外规则
    overrides: [
        // 针对 YAML 文件使用 2 个空格缩进
        {
            files: '*.{yaml,yml}',
            options: {
                tabWidth: 2
            }
        }
    ]
};
