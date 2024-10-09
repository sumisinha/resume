import React from 'react';
import {ReactComponent as InSvg} from '../img/icons/in.svg'
import {ReactComponent as GitSvg} from '../img/icons/git.svg'
import {ReactComponent as DownloadSvg} from '../img/icons/download.svg'

function Navbar(){
    const onButtonClick = () => {
        const pdfUrl = "Resume-sumi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed">
            <div className="container-fluid">
                <div className='mob-menu'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sumi-sinha-33270473/"><InSvg/></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/sumisinha"><GitSvg/></a>
                        </li>
                        <li className="nav-item">
                        <button className="nav-link" onClick={onButtonClick}><DownloadSvg/></button>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="/">
                <strong>Sumi Sinha</strong> / <small>Software Engineer </small>
                </a>
                <div className="text-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link " aria-current="page" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sumi-sinha-33270473/"><InSvg/></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/sumisinha"><GitSvg/></a>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link" onClick={onButtonClick}><DownloadSvg/></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
)
}

export default Navbar;