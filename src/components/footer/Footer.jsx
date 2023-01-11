import './footer.css';

export const Footer = () => {

    return (
        <footer className='footer'>
            <div className='footerDetails'>
                <a href='https://github.com/AlexBrown4020/mern-project' className='creatorDetails'>Github</a>
                <a href='https://www.linkedin.com/in/alex-brown-2a6b7820a/' className='creatorDetails'>LinkedIn</a>
            </div>
            <div className='footerDetails'>
                <p className='creatorDetails'>Author: Alex Brown</p>
                <p className='creatorDetails'>Updated: 10th Jan 2023</p>
            </div>
        </footer>
    )
}