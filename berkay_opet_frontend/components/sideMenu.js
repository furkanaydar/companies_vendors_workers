import React, { Component } from 'React'
import { FaNetworkWired } from 'react-icons/fa'
import { MdDirectionsCar } from 'react-icons/md'
import { GoReport, GoSignIn, GoSignOut } from 'react-icons/go'
import {GiFuelTank} from 'react-icons/gi'
import Router from 'next/router'
class SideMenu extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (

            <div style={{ width:'24%',  marginRight: 12, padding:22, }}>
                <h1 style={{ borderBottom: '1px solid grey' }}>Otobil</h1>
                <div style={{ marginTop: 32, }}>
                    <div onClick={() => Router.push('/workers')} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.1)', marginTop: 32, padding: 12, fontSize: 22, cursor: 'pointer' }}>
                        <FaNetworkWired style={{ verticalAlign: 'middle', marginRight: 24, }}></FaNetworkWired>
                        <a>Çalışanlar</a>
                    </div>
                    <div onClick={() => Router.push('/automobiles')} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.1)', marginTop: 32, padding: 12, fontSize: 22, cursor: 'pointer' }}>
                        <MdDirectionsCar style={{ verticalAlign: 'middle', marginRight: 24, }}></MdDirectionsCar>
                        <a>Araçlar</a>
                    </div>
                    <div onClick={() => Router.push('/vendors')} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.1)', marginTop: 32, padding: 12, fontSize: 22, cursor: 'pointer' }}>
                        <GiFuelTank style={{ verticalAlign: 'middle', marginRight: 24, }}></GiFuelTank>
                        <a>Bayiler</a>
                    </div>
                    <div onClick={() => Router.push('/reports')} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.1)', marginTop: 32, padding: 12, fontSize: 22, cursor: 'pointer' }}>
                        <GoReport style={{ verticalAlign: 'middle', marginRight: 24, }}></GoReport>
                        <a>Raporlar</a>
                    </div>
                    <div onClick={() => Router.push('/corporateLogin')} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.1)', marginTop: 32, padding: 12, fontSize: 22, cursor: 'pointer' }}>
                        <GoSignIn style={{ verticalAlign: 'middle', marginRight: 24, }}></GoSignIn>
                        <a>Şirket Girişi Yap</a>
                    </div>
                    <div onClick={() => Router.push('/')} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.1)', marginTop: 32, padding: 12, fontSize: 22, cursor: 'pointer' }}>
                        <GoSignOut style={{ verticalAlign: 'middle', marginRight: 24, }}></GoSignOut>
                        <a>Çıkış Yap</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default SideMenu