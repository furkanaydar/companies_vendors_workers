import React, { Component } from 'React'
import { FaNetworkWired, FaPlusSquare, FaMinusSquare, FaTrash } from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'
import { MdDirectionsCar } from 'react-icons/md'
import { GoReport } from 'react-icons/go'
import Router from 'next/router'
import SideMenu from '../components/sideMenu'
import Table from 'react-bootstrap/Table'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class WorkersPage extends Component {
    constructor() {
        super();
        this.state = {
            addUserDisplay: false
        }
        this.handleAddUserDisplay = this.handleAddUserDisplay.bind(this)
    }

    handleAddUserDisplay() {
        let currentDisplay = this.state.addUserDisplay
        this.setState({
            addUserDisplay: !currentDisplay
        })
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', fontFamily: 'Rubik, sans-serif' }}>
                    <style jsx>{`
                        .addWorkerButton {
                            cursor: pointer;
                        }
                        .addWorkerButton:hover {
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
                            <h1 style={{ borderBottom: '1px solid grey' }}>Çalışanlar</h1>
                        </div>
                        <Table style={{ marginTop: 32, textAlign: 'center' }} striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>İsim</th>
                                    <th>Soyisim</th>
                                    <th>Kullanıcı Adı</th>
                                    <th>Telefon</th>
                                    <th>Tanımlı Araçlar</th>
                                    <th>İşlemler</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>05333135252</td>
                                    <td style={{ textDecoration: 'underline' }}>3</td>
                                    <td style={{fontSize:20}}>
                                        <AiOutlineDelete  style={{marginRight:12}}></AiOutlineDelete>
                                        <MdDirectionsCar></MdDirectionsCar>
                                    </td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>05333135252</td>
                                    <td style={{ textDecoration: 'underline' }}>3</td>
                                    <td style={{fontSize:20}}>
                                        <AiOutlineDelete style={{marginRight:12}}></AiOutlineDelete>
                                        <MdDirectionsCar></MdDirectionsCar>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                        <div className='addWorkerButton' 
                        onClick={this.handleAddUserDisplay} style={{padding:6, marginTop:32,}}>
                            <a>
                                {
                                    !this.state.addUserDisplay ?
                                    <FaPlusSquare style={{fontSize:22, verticalAlign:'middle', marginRight:12, }}></FaPlusSquare> 
                                    :
                                    <FaMinusSquare style={{fontSize:22, verticalAlign:'middle', marginRight:12, }}></FaMinusSquare> 
                                }
                                Yeni Çalışan Tanımla
                            </a>
                        </div>
                        {
                            this.state.addUserDisplay ?
                            <div style={{marginTop:20, borderTop: '1px solid rgba(0, 0, 0, 0.1)'}}>
                                <Form style={{marginTop:32,}}>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>Çalışan İsmi</Form.Label>
                                    <Form.Control />

                                </Form.Group>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Çalışan Soyismi</Form.Label>
                                    <Form.Control />

                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Çalışan Şifresi</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group controlId="formPhoneNumber">
                                    <Form.Label>Çalışan Telefon Numarası</Form.Label>
                                    <Form.Control />

                                </Form.Group>
    
                                <Button variant="primary" type="submit">
                                    Kaydet
                                </Button>
                            </Form>
                            </div>
                            :
                            null 
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkersPage