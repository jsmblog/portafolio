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
                        <a href="#"><img  width={30} src={whatsapp} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#"><img  width={30} src={llamada} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#"> <img  width={30} src={email} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#"><img  width={30} src={linkedin} alt="" />
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