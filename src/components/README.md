# components 开发规范

> 每个组件建立一个对应的文件夹,如sample文件夹中存放的是sample.vue组件。其中约定组件说明如下

(1) 共用组件放到common中
(2) 具体业务组件放到自定义文件夹中,比如sample文件夹中存放的是Sample.vue组件
(3) 如果一个业务组件一个vue文件无法满足需求,则可以进行分割,可在自定义文件夹中再建一个文件夹如sample文件夹下的module,用于
分割Sample组件的Header和Footer。
(4) 组件css样式一律要scoped包裹,建议用class而非标签(如h1、button)来控制css样式。
(5) sample文件夹及其对应的vue组件是示例,非业务组件
(6) readme 文件存在于当前文件夹中仅为约束规范


> 命名规范

(1)文件夹统一小写,多个单词可以用横线分割,参见node_modules模块文件写法
(2)vue文件名统一采用驼峰命名
