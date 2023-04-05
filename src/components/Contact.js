import React from "react";
import styled from 'styled-components';


const Contact = () => {
    return (
        <div className="container-contact">
            
        <article>
        <h2 className="tertiary-header">
            About Me
        </h2>
        <p className="paragraph">
            I started my journey as a developer out of curiosity, completing an introduction to
            Web Development course on Udemy. After this course, a hobby quickly became a passion for me.
            I have recently graduated from the Professional Software Development course
            at <a href="https://codeclan.com/" className="codeclan-link">CodeClan</a> in Glasgow.
        </p>
        <p className="paragraph">
            I am currently looking for my first developer role, please reach out to me at the links below
            if you would like to chat!
        </p>

        {/* <div className="headshot-container"><img src={headshot} alt="" className="headshot"></img></div> */}
    </article>
                <a
                href="https://www.linkedin.com/in/james-blaney-657076261/"
                className="contact-links">
                    LINKED IN
                </a>
                <a
                href="https://github.com/JBlaney93"
                className="contact-links">
                    GIT HUB
                </a>
                <a
                href="mailto:james@blaney.dev"
                className="contact-links">
                    JAMES@BLANEY.DEV
                </a>
            </div>
    )
}

export default Contact;