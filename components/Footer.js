import React from "react";


const Footer = (props) => {
    const { company, email } = props;

    return (
        <div>



        <div className="container-fluid">
            <hr />
        </div>    
        <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center col-md-10 ">
                        <ul class=" text-center">
                            <li class="list-inline-item">
                                <a href="https://web.facebook.com/peem27">
                                    <img src="/static/Icons/logo-facebook.svg" alt="" width="35" height="35" title="..." />
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">
                                     <img src="/static/Icons/logo-github.svg" alt="" width="35" height="35" title="..." />
                                </a>          
                            </li>
                            <li class="list-inline-item">
                                <a href="https://line.me/ti/p/_F2Vdy5C4k">
                                    <img src="/static/Icons/icons8-line.svg" alt="" width="35" height="35" title="..." />
                                </a>
                            </li>
                        </ul>
                    </div>   
                </div>  
                 <div className="text-center text-uppercase">
                        <span className="text-danger"> Powered By {company}</span>| <span className="text-muted">Contact By Email: {email}</span>
                </div>     
        </div>
        </div>
    )
}

export default Footer; 