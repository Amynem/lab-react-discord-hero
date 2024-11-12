
import './App.css'
import Button from './components/button/button';
import Header from './components/header/header';
import Paragraph from './components/paragraph/paragraph';
import Title from './components/title/title';
import Image from './components/image/image';

function App() {
  return (
   <>
      <div className='background'>
        <div> 
         <Header
          img="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png"
          link="#"
          menu="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png"
         />
        </div>
        <h1>
          <Title text="IMAGINE A PLACE..."></Title>
        </h1>
        <p>
          <Paragraph text="…where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk everyday and hangout more often."></Paragraph>
        </p>

       <div className='ButtonImageGroup'>
          <div className='Buttons'> 
            <Button type="light" text="Download for Mac"/> 
            <Button type="dark" text="Open Discord in your browser"/> 
          </div>
         <Image img="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png"></Image>
       </div>
      </div>
    </>
  )
}

export default App
