import LoginButton from "../Components/login";
import './Landing.css'
import landing_image from './landing_image.png'

const Landing = () => {
    return (
        
    <div className="landing-background">
        <div className="masthead">
            <h1 className='sincerely'>Sincerely,</h1>
            <img src={landing_image} className='landing-image'>
            </img>
            <h2 className='landing-description'>
                Deliberate Interaction Through Travel.
            </h2>
        </div>
        <div className='landing-second'>
            <h2 className='joy-send-receive'>
                Experience the joy of <br></br> sending and receiving,
            </h2>
            <h2 className="landing-item-one">
                1
            </h2>
            <h2 className="landing-item-two">
                2
            </h2>
            <h2 className="landing-item-three">
                3
            </h2>
            <h2 className="landing-item-four">
                4
            </h2>
            <h2 className="landing-item-one-desc">
            Whenever you are on the road, find a postcard you’d like to digitally send to someone. If you are not a traveler, don’t worry as you will be the lucky ones receiving post cards from those traveled!
            </h2>
            <h2 className="landing-item-two-desc">
            Take a photo of the postcard, and upload it through the Post Office! We’ll help you make all the necessary preparations before we “mail” it off to a special address.
            </h2>
            <h2 className="landing-item-three-desc">
            Wait patiently as we deliver your postcard! Feel free to send more in the meantime! 
            </h2>
            <h2 className="landing-item-four-desc">
            Receivers! Get ready for a special moment opening your postcard! Get to know where it came from and what special message your sender has in store for you!
            </h2>
            
            <h1 className="with-a-catch">
                with a catch,
            </h1>

            <h2 className="whats-the-catch">
            As a receiver, you have one opportunity to respond to the sender of the postcard. It could range between a short thank you for the sentiments, or something more vulnerable you’ve been meaning to share. 
            </h2>
        </div>
        {/* <p>Edit <code>src/App.js</code> and save to reload. </p> */}
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Home</a> */}
        {/* <LoginButton/> */}
    </div>
    )
}

export default Landing;