import React, {FC} from 'react';
import "./Footer.css";

const Footer: FC = () => {
    return (
        <footer className="page-footer p-5 text-Black">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="footer-left">
                        <h3>Hao's Perfume Shop</h3>
                        <p> Phone: 0564847296</p>
                        <p>Mail: nguyendoduchao@gmail.com</p>
                        <p>The shop will be open from 08:00 to 20:00, both holidays and weekends</p>
                    </div>
                    <div className="footer-right">
                        <h3>Social networks</h3>
                        <a href="">
                            <i className="fab fa-linkedin fa-2x mr-3" style={{color: "Black"}}></i>
                        </a>
                        <a href="#"><i className="fab fa-facebook-f fa-2x mr-3" style={{color: "Black"}}></i></a>
                        <a href="#"><i className="fab fa-twitter fa-2x mr-3" style={{color: "Black"}}></i></a>
                        <a href="#"><i className="fab fa-google fa-2x mr-3" style={{color: "Black"}}></i></a>
                        <a href="#"><i className="fab fa-instagram fa-2x mr-3" style={{color: "Black"}}></i></a>
                    </div>
                </div>
                <div className="mx-auto" style={{width: "200px"}}>
                    <p><b>©Developed by DucHao</b></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer
