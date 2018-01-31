import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
function UserInfo(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}
*/
class UserDetail extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "red"}}>
                <p>Name: {this.props.name}</p>
                <p>Email: {this.props.email}</p>
            </div>
        );
    }
}

class OtherInfo extends React.Component {
    render() {
        return (
            <div className="OtherInfo">
                <p>Other Information: {this.props.otherInformation}</p>
            </div>
        );
    }
}
class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <UserDetail name={this.props.name} email={this.props.email}/>
                <OtherInfo otherInformation={this.props.otherInformation}/>
            </div>
        );
    }
}



const element = <div>
        <UserInfo name="Anna" email="anna123@gmail.com" otherInformation="She like to work at home"/>
        <UserInfo name="Anna" email="anna123@gmail.com" otherInformation="She like to work at home"/>
    </div>

ReactDOM.render(
    element,
    document.getElementById('root')
);
