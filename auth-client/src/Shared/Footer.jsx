import React from 'react'
import Logo from '../assets/react.svg'

const Footer = () => {
    return (
        <footer className="footer bg-red-200/30 text-base p-10">
            <aside>
                <img src={Logo} alt="" />
            </aside>
            <nav>
                <h6 className="footer-title text-[#f54748] text-xl">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#f54748] text-xl">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#f54748] text-xl">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}

export default Footer
