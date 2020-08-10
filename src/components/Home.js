import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>หน้าหลัก</h1>
                <p>ยินดีต้อนรับสู่เว็บไซต์</p>
                 <Button> เข้าสู่ระบบ </Button>
            </div>
        )
    }
}
