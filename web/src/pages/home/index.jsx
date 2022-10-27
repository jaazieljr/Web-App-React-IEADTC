import {Link} from 'react-router-dom'
import {Header} from '../../components/Header'
const Home = () => {
    return(<>
    <Header></Header>
    <h1>Home</h1>
    <Link to = '/Mensagens'>Mensagens</Link>
    <Link to = '/Contato'>Contato</Link>
    <Link to = '/Login'>Obreiros</Link>
   
   </>)
}


export {Home}