import quotes from './bg-quotes.png'
import './styles.scss'

function Testimonials() {
    return (
        <article className='testimonials'>
            <img className='quotes' src={quotes} alt="Quotes" />
            <div className='card'>
                <p>
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.
                </p>
                <div className='profile'>
                    <img src='/assets/profile-1.jpg' alt='Profile 1' />
                    <div>
                        <h5>
                            Satish Patel
                        </h5>
                        <h6>
                            Founder & CEO, Huddle
                        </h6>
                    </div>
                </div>
            </div>
            <div className='card'>
                <p>
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.
                </p>
                <div className='profile'>
                    <img src='/assets/profile-2.jpg' alt='Profile 2' />
                    <div>
                        <h5>
                            Bruce McKenzie
                        </h5>
                        <h6>
                            Founder & CEO, Huddle
                        </h6>
                    </div>
                </div>
            </div>
            <div className='card'>
                <p>
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.
                </p>
                <div className='profile'>
                    <img src='/assets/profile-3.jpg' alt='Profile 3' />
                    <div>
                        <h5>
                            Iva Boyd
                        </h5>
                        <h6>
                            Founder & CEO, Huddle
                        </h6>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Testimonials