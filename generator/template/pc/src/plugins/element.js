//完整组件列表地址 https://github.com/ElemeFE/element/blob/master/components.json
/* element组件 */
import { Button,Loading,Container,Header,Aside,Footer,Menu,
    Submenu,MenuItem,MenuItemGroup,Table, TableColumn,main,
    Row, Col,Pagination,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Message,
    Form,
    FormItem,
    Input,
} from 'element-ui'

const Element = {
    install(Vue){
        Vue.use(Button)
        .use(Loading)
        .use(Container)
        .use(Header)
        .use(Aside)
        .use(Footer)
        .use(Menu)
        .use(Submenu)
        .use(MenuItem)
        .use(MenuItemGroup)
        .use(Table)
        .use(TableColumn)
        .use(main)
        .use(Dropdown)
        .use(DropdownMenu)
        .use(DropdownItem)
        .use(Row)
        .use(Col)
        .use(Pagination)
        .use(Form)
        .use(FormItem)
        .use(Input)


        // 将组建挂载到Vue实例的原型对下
        Vue.prototype.$Message = Message;
    }
}
export default Element