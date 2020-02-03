import React, { Component } from 'React'
import { FaRegUserCircle, FaTrash, FaNetworkWired, FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import {AiOutlineUserAdd, AiOutlineDelete} from 'react-icons/ai'
import { MdDirectionsCar } from 'react-icons/md'
import { GoReport } from 'react-icons/go'
import Router from 'next/router'
import SideMenu from '../components/sideMenu'
import Table from 'react-bootstrap/Table'
class AutomobilesPage extends Component {
    constructor() {
        super();
        this.state = {
            addVehicleDisplay: false
        }
        this.handleAddVehicleDisplay = this.handleAddVehicleDisplay.bind(this)
    }
    handleAddVehicleDisplay() {
        let currentDisplay = this.state.addVehicleDisplay
        this.setState({
            addVehicleDisplay: !currentDisplay
        })
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', fontFamily: 'Rubik, sans-serif' }}>
                    <style jsx>{`
                        .addVehicleButton {
                            cursor: pointer;
                        }
                        .addVehicleButton:hover {
                            text-decoration: underline;
                        }
                    `}</style>
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
                            <h1 style={{ borderBottom: '1px solid grey' }}>Araçlar</h1>
                        </div>
                        <Table style={{ marginTop: 32, textAlign: 'center' }} striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Plaka</th>
                                    <th>Model</th>
                                    <th>Tanımlı Kullanıcılar</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td style={{ textDecoration: 'underline' }}>3</td>
                                    <td style={{fontSize:20}}>
                                        <AiOutlineDelete  style={{marginRight:12}}></AiOutlineDelete>
                                        <AiOutlineUserAdd></AiOutlineUserAdd>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td style={{ textDecoration: 'underline' }}>3</td>
                                    <td style={{fontSize:20}}>
                                        <AiOutlineDelete  style={{marginRight:12}}></AiOutlineDelete>
                                        <AiOutlineUserAdd></AiOutlineUserAdd>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                        <div className='addVehicleButton' 
                        onClick={this.handleAddVehicleDisplay} style={{padding:6, marginTop:32,}}>
                            <a>
                                {
                                    !this.state.addVehicleDisplay ?
                                    <FaPlusSquare style={{fontSize:22, verticalAlign:'middle', marginRight:12, }}></FaPlusSquare> 
                                    :
                                    <FaMinusSquare style={{fontSize:22, verticalAlign:'middle', marginRight:12, }}></FaMinusSquare> 
                                }
                                Yeni Araç Tanımla
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutomobilesPage