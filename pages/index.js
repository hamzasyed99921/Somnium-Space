import Hero from '../Components/Elements/Hero'
import Header from '../Components/Layouts/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Hero/>
    </div>
  )
}
