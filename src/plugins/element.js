import Vue from 'vue';
import { Button } from 'element-ui';
import { Form, FormItem } from 'element-ui';
import { Input } from 'element-ui';
import { Message } from 'element-ui';
import { Container, Header, Aside, Main } from 'element-ui';
import { Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui';
import { Breadcrumb, BreadcrumbItem, Card, Row, Col, Table, TableColumn, Switch, Tooltip, Pagination,
    Dialog, MessageBox, Tag, Tree, Select, Option } from 'element-ui';
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 将弹框组件全局挂在到VUe原形实例
Vue.prototype.$message = Message
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
// 导航栏
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
// 用户管理
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
