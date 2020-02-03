import React, { Component } from 'React'
import { FaNetworkWired, FaPlusSquare } from 'react-icons/fa'
import { MdDirectionsCar } from 'react-icons/md'
import { GoReport } from 'react-icons/go'
import Router from 'next/router'
import SideMenu from '../components/sideMenu'
import Table from 'react-bootstrap/Table'
class VendorsPage extends Component {
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
                            <h1 style={{ borderBottom: '1px solid grey' }}>Bayiler</h1>
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

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>05333135252</td>
                                    <td style={{ textDecoration: 'underline' }}>3</td>

                                </tr>

                            </tbody>
                        </Table>
                        <div style={{marginTop:32,}}>
                            <a>
                                <FaPlusSquare style={{fontSize:22, verticalAlign:'middle', marginRight:12, }}></FaPlusSquare> Yeni Bayi Tanımla
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VendorsPage