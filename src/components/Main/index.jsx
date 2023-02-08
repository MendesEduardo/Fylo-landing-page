import React from 'react'
import datas from '../../json/data.json'
import './styles.scss'

function Main() {
    return (
        <main className='main'>
            {datas.map((data) =>
                <div className='imageCard'>
                    <img src={data.images} alt={data.title} />
                    <h4>{data.title}</h4>
                    <p>
                        {data.description}
                    </p>
                </div>
            )}
        </main>
    )
}

export default Main