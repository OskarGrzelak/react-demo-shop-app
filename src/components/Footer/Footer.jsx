import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import { ReactComponent as FacebookIcon } from '../../images/icon-facebook.svg'
import { ReactComponent as InstagramIcon } from '../../images/icon-instagram.svg'
import { ReactComponent as TwitterIcon } from '../../images/icon-twitter.svg'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Flex>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
          </Link>
          <ul className={classes.social}>
            <li>
              <Link to="/">
                <FacebookIcon className={classes['social-icon']} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <InstagramIcon className={classes['social-icon']} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <TwitterIcon className={classes['social-icon']} />
              </Link>
            </li>
          </ul>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer
