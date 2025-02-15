import Vue from "vue";
// import "element-ui/lib/theme-chalk/index.css";
import {
    Button,
    RadioButton,
    RadioGroup,
    Radio,
    Checkbox,
    Dialog,
    Input,
    Select,
    Option,
    OptionGroup,
    Tabs,
    TabPane,
    Tag,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Card,
    Collapse,
    CollapseItem,
    Container,
    Aside,
    Main,
    Divider,
    Image,
    Message,
    MessageBox,
    Menu,
    MenuItem,
    MenuItemGroup,
    Breadcrumb,
    BreadcrumbItem,
    Loading,
    Drawer,
    Timeline,
    TimelineItem,
    Switch,
    InputNumber,
    Rate,
} from "element-ui";
  
Vue.use(Rate);
Vue.use(InputNumber);
Vue.use(Switch);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Drawer);
Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Divider);
Vue.use(Image);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;