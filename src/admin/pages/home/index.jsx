import React from "react"
import { Link } from "react-router-dom"
import { Button, Menu, Dropdown, Icon } from "antd"

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

class Home extends React.Component {

    render () {
        return (
            <div>
                <h1>Hello from Admin</h1>
                <Link to={"/admin/test"}>Admin Test</Link>
                <br />
                <Button type="primary">点我</Button>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        Hover me <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        )
    }
}


export default Home
