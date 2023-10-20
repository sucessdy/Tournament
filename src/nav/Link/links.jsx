import React , {useState} from 'react'
import {motion} from "framer-motion"
import { menuSlide } from '../../utils/motion'

const navItems = [
    {name: "Home" , link: "./"},
    {name: "Contact" , link: "./"},
    {name: "About" , link: "./"},
    {name: "Service" , link: "./"}
]
export default function links() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname); 
  return (
<motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>  )
}
