import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom'
import { Button, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import { Scrollbars } from 'react-custom-scrollbars'
import Cookies from 'universal-cookie';
import JWT from 'jwt-decode'
import axios from 'axios'

const cookie = new Cookies()
const BASE_URL = "http://localhost:3001/"
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            avatar: '',
            servers: []
        }
    }

    componentWillMount(){
        if(!cookie.get('logged')){
            window.location.assign('/')
        }
        else{         
            axios({
                method: 'get',
                url: `${BASE_URL}userinfo`
            })
            .then((res)=>{
                let r = res.data
                console.log(res.data)
                this.setState({
                    username: r.user.username,
                    id: r.user.id,
                    avatar: r.user.avatar,
                    servers: r.guilds
                })
                setTimeout(function(){
                    odometer.innerHTML = r.guilds.length;
                }, 1000);
            })
            .catch(err=>console.log(err))       
        }
    }

    logout = () =>{
        cookie.remove('logged')
        window.location.assign('/')
    }

    render() {
        return (
            <div className='container'>
                <div id='hub'>
                    <div id='prof'>
                        <h1 className="tlt">Hi {this.state.username}!</h1>
                        <Image src={`https://cdn.discordapp.com/avatars/${this.state.id}/${this.state.avatar}`} size='small'/>
                        <br/>
                        <span>Total Servers</span>
                        <br/>
                        <div id="odometer" className="odometer">0</div>
                        <br/>
                        <br/>
                        <Button color='blue' onClick={this.logout}>Logout</Button>
                    </div>
                    <div id='right-pan'>
                        <h2>List of Connected Servers</h2>
                        <Scrollbars 
                            universal
                            autoHeight
                            autoHeightMin={50}
                            autoHeightMax={400}
                        >
                            <Button.Group color='blue' vertical fluid>
                            {
                                this.state.servers.map((obj, i)=>{
                                return(
                                    <Button key={i}  onClick={()=>window.open(`https://discordapp.com/channels/${obj.id}`)}>
                                        <Image src={`https://cdn.discordapp.com/icons/${obj.id}/${obj.icon}`} size='mini'/>
                                        {`- ${obj.name}`}
                                    </Button>
                                )
                                })
                            }
                            </Button.Group>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        )
    }
}
