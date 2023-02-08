import React from 'react'
import Button from '../Button';
import './styles.scss'

function GetEarly() {
    return (
        <section className='getEarly'>
            <div className='cardValidation'>
                <h2>
                    Get early access today
                </h2>
                <p>
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                    questions, our support team would be happy to help you.
                </p>
                <div className='acesso'>
                    <input type='text' placeholder='email@example.com' />
                    <Button>
                        Get Started For Free
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default GetEarly