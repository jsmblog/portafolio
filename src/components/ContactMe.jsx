import React from 'react'

const ContactMe = ({logoContactMe,whatsapp,llamada ,email,linkedin}) => {
  return (
    <div>
        <div className='contContactMe'>
            <div className='imgContactMe'><img src={logoContactMe} alt="" /></div>
            <div className='boxContactMe'>
                <h3>Contact Me</h3>
            </div>
            <div className='contIconLinks'>
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=593962915626" target='_blank'><img  width={30} src={whatsapp} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="tel:+593962915626"><img  width={30} src={llamada} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="mailto:jsmblog19@gmail.com Subject=Contact%20me%20already" > <img  width={30} src={email} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/joel-mera-32760923a" target='_blank'><img  width={30} src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
        </div>
        <div className='lastSms'>
            <h4>Made with love <span>♥</span> by joel</h4>
        </div>
    </div>
  )
}

export default ContactMe