import React, { Component } from 'React'
import { FaNetworkWired } from 'react-icons/fa'
import { MdDirectionsCar } from 'react-icons/md'
import { GoReport } from 'react-icons/go'
import Router from 'next/router'
import SideMenu from '../components/sideMenu'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class CorporateLogin extends Component {
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
                    <div style={{ padding: 48, flexGrow: 4, }}>
                        <div>
                            <h1 style={{ borderBottom: '1px solid grey' }}>Şirket Girişi</h1>
                            <Form style={{marginTop:32,}}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Adresi</Form.Label>
                                    <Form.Control type="email" placeholder="Şirket sorumlusu email..." />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Şifre</Form.Label>
                                    <Form.Control type="password" placeholder="Şirket sorumlusu şifre..." />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Giriş Yap
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CorporateLogin