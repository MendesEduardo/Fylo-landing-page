import imgProductive from './illustration-stay-productive.png';
import iarrow from './icon-arrow.svg';
import './styles.scss';

function StayProductive() {
    return (
        <section className='stayProductive'>
            <div>
                <img className='imageStay' src={imgProductive} alt="Stay Productive" />
            </div>
            <div className='stayText'>
                <h2>
                    Stay productive, wherever you are
                </h2>
                <p>
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.
                </p>
                <p>
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.
                </p>
                <button className='seeFylo'>
                    See how Fylo works
                    <img src={iarrow} alt='icon Arrow' />
                </button>
            </div>
        </section>
    )
}

export default StayProductive