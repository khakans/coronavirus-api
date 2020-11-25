import React, {Component} from "react"

class Header extends Component{
    render(){
        return(
        <div className="Header">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="#">COVID19 - API</a>
            </nav>
        </div>
        );
    }
}

export default Header