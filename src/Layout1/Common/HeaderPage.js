import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SideNav from './SideNav';
import Api from '../Service/Api';
import Loading from './Loading';
import data from '../../JsonFiles/Sample.json'
import axios from 'axios'

class HeaderPage extends Component {
    constructor(props){
        super(props);
        this.state={
            onSideNavEnable:false,
            loadingEnable:true
        };
        this._api= new Api();
        const dat=data;
        let val =dat.filter(f=>f.ArrayList.filter(f1=>f1.list1=="Test1"));
        //console.log(val);
    }
    JsonData=()=>{
      
    };
    servicecall=(data,error)=>{
        console.log('data');
        console.log(data);
        this.setState({loadingEnable:false});
    };
    service=async()=>{
       
        await axios({
            method: 'post',
            url: `https://jsonplaceholder.typicode.com/posts`,
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(response=>JSON.stringify(response))
          .then(json=>{console.log(json); });
        
    };
    componentDidMount(){
        this.setState({loadingEnable:true});
        this.service();
        //Api.NewService(this.servicecall);
        // axios.all(`http://dummy.restapiexample.com/api/v1/employees`)
        //     .then(res=>console.log(res.data,null))
        //     .catch(er=>null);
        
        //this.setState({loadingEnable:false});

    }
   
    render() {
        return (
            <>
            
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand" onClick={()=>{this.props.onSideNavEnable(this.props.sideNavEnable?false:true)}} ><Link to='/contact'>My Portal</Link></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <span className="nav-link" href="#"><Link to='/'>Home</Link> <span className="sr-only">(current)</span></span>
                        </li>
                        <li className="nav-item">
                        <Link to='/contact'> <a className="nav-link" href="#">Contact</a></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                  </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav> */}
            <div>
            <SideNav/>
            {/* { this.state.loadingEnable && <Loading/> } */}
            </div>
            </>
        );
    }
}

export default HeaderPage;