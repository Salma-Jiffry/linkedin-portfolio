import React, { useState } from 'react';
import { MdOutlineAttachEmail } from "react-icons/md";
import Modal from './Model'; 

const cv_url ='https://Salma-Jiffry.github.io/linkedin-portfolio/Salma_resume.pdf';

const AboutPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDownloadClick = () => {
        setShowModal(true);
    }

    const handleConfirm = () => {
        setShowModal(false);
        const aTag = document.createElement("a");
        aTag.href = cv_url;
        aTag.setAttribute("download", "Salma_resume.pdf");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <div className='aboutme' id='2'>
            <h1>So, who am I?</h1>
            <div className='aboutme-box'>
                <p className='aboutpara'>
                    I am Salma Jiffry, an undergraduate IT student, also a dedicated Full Stack Software Developer with a passion for creating dynamic, responsive, and user-friendly web applications. With a strong foundation in both front-end and back-end, I excel at building seamless digital experiences from concept to deployment. I specialize in Object-Oriented Programming (OOP), website development, and software development, excelling in creating efficient and impactful applications.
                </p>
                <p className='aboutpara'>
                    I am committed to continuous learning and staying updated with industry trends to ensure the best outcomes for the team and the company.
                </p>
                <p className='aboutpara'>
                    <span className='highlight-text'>Let's connect, collaborate, and create something extraordinary.</span>
                </p>
            </div>
            <div className='contact-info'>
                <ul className="contact-info-list">
                    <li className="contact-item">
                        <a href="#6">
                            <MdOutlineAttachEmail /> salma.jiffry.13@gmail.com
                        </a>
                    </li>
                </ul>
                <button onClick={handleDownloadClick}>Download Resume</button>
            </div>
            <Modal
                show={showModal}
                onClose={handleClose}
                onConfirm={handleConfirm}
                message="Do you want to download my resume?"
            />
        </div>
    );
}

export default AboutPage;