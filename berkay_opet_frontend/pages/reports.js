import React, { Component } from 'React'
import { FaNetworkWired } from 'react-icons/fa'
import { MdDirectionsCar } from 'react-icons/md'
import { GoReport } from 'react-icons/go'
import Router from 'next/router'
import SideMenu from '../components/sideMenu'
class ReportsPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', fontFamily: 'Rubik, sans-serif' }}>
                    <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"
                    />
                    <SideMenu></SideMenu>
                    <div style={{ padding: 48, flexGrow: 5, }}>
                        <div>
                            <h1 style={{ borderBottom: '1px solid grey' }}>Raporlar</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ReportsPage