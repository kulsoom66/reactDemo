import './Home.css'
import logo from './k.jpg'
export default function Home() {

    return (
        <>
            <div className="container custom">
                <h2>Welcome to my profile</h2>
                <div className="row">
                    <div className="col-auto">
                        <h1>It is Kulthoom, junior developer</h1>
                        <a className='btn btn-primary'>Create To do</a>
                    </div>
                    <div className="col-auto logo">
                        <img src={logo} alt='Logo for Kulthoom' />
                    </div>
                </div>
            </div>
        </>
    )

}