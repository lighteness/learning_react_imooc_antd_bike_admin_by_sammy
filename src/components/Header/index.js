import React from 'react'
import { Row,Col } from "antd"
import "./index.less"

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={userName:null,systTime:null}
    }
    render() {
        return(
            <div>Header</div>
        )
    }
}
export default Header