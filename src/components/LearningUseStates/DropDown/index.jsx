import React from 'react'
import data from '../../../data'
import SingleQuestion from './Questions'
import './index.css'

const DropDown = () => {
    return (
        <main>
            <div className='container'>
                <h3>FAQ</h3>
                <section className="info">
                    {data.map(item =>
                        <SingleQuestion
                            key={item.id}
                            info={item.info}
                            title={item.title}
                        />)
                    }
                </section>
            </div>
        </main>
    )
}

export default DropDown