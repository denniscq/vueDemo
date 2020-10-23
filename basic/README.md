1. 创建项目
    npm install -g @vue/cli
    vue create projectname
    npm run serve
2. 属性
    自定义属性props => 在props中声明的属性
    原生属性attrs => 没有声明的属性默认自动挂到组件的根元素上，设置inheritAttrs为false可以关闭自动挂载
    特殊属性class/style => 挂载到组件根元素上，支持字符串/对象/数组等多种语法
3. 事件
    普通事件 => @click,@input,@change,@xxx等事件，通过this.$emit('xxx')触发
    修饰符事件 => @input.trim,@click.stop,@submit.prevent等，一般用于原生html元素，自定义组件需要自行开发支持
4. 插槽
    v-slot:插槽名="返回值"
5. 生命周期
    创建阶段
        初始化(事件和生命周期), beforeCreate, 属性/监听器配置的响应化处理， created, 模板编译到render, beforeMount, 创建虚拟dom, 挂载真实dom, render, mounted, 正常操作
    更新阶段
        数据变化/强制刷新, beforeUpdate, 移除已经添加的事件监听器, render 生成虚拟dom， 挂载真实dom
    销毁阶段
        beforeDestroy, 移除已经添加的事件监听器, destroyed
6. 函数式组件
    functional: true
    无状态, 无实例, 没有this上下文, 无生命周期
7. 计算属性
    减少模板中的计算逻辑/数据缓存/依赖响应式数据
8. 指令
    14种内置指令
9. template VS JSX
    根据官方说明, 我们可以把组件区分为两类, 一类是偏视图表现的, 一类是偏逻辑的, 在偏视图的时候推荐用template, 在偏逻辑的时候推荐使用JSX或render函数.
    template => 学习成本低, 大量内置指令简化开发, 组件作用域CSS, 但灵活性低.
    JSX => 灵活/灵活/灵活
10. Vuex核心概念
    State => this.$store.state.xxx 取值 
    Getter => this.$store.getters.xxx 取值
    Mutation => this.$store.commit("xxx") 赋值
    Action => this.$store.dispatch("xxx") 赋值
    Moulde => 模块化

        