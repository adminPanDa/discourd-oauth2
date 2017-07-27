import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom'
import { Button, Image, Header, Label, Icon } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import { Scrollbars } from 'react-custom-scrollbars'
import Cookies from 'universal-cookie';
const cookie = new Cookies()

@observer
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isLogged: false}
    }

    componentWillMount(){
        if(cookie.get('logged')){
            window.location.assign('/home')
        }
        else{
            this.setState({isLogged: false})
        }
    }

    render() {
        return (
            <div style={{height: '100vh', width: '100vw', backgroundImage: 'url("https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif")', backgroundColor: 'teal', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
                <div style={{top: '40%', margin: '0 auto', position: 'relative', transform: 'translateY(-50%)', textShadow: '2px 2px #FF0000'}}>
                    <Header as='h1' icon textAlign='center'>
                        <Image src='https://discordapp.com/assets/28174a34e77bb5e5310ced9f95cb480b.png' size='medium'/>
                        <Header.Content>
                            <span style={{color: 'white'}}>Login with Discord</span>
                        </Header.Content>
                    </Header>
                    <div style={{textAlign: 'center'}}>
                        <Button size='massive' inverted onClick={event => window.location.assign('/login')}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}