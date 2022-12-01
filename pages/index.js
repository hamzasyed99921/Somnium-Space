import Blockchain from '../Components/Elements/Blockchain'
import Community from '../Components/Elements/Community'
import Events from '../Components/Elements/Events'
import Hero from '../Components/Elements/Hero'
import Mechanics from '../Components/Elements/Mechanics'
import Partner from '../Components/Elements/Partner'
import Reality from '../Components/Elements/Reality'
import Token from '../Components/Elements/Token'
import Footer from '../Components/Layouts/Footer'
import Header from '../Components/Layouts/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero/>
      <Blockchain/>
      <Token/>
      <Reality/>
      <Mechanics/>
      <Partner/>
      <Events/>
      <Community/>
    </div>
  )
}
