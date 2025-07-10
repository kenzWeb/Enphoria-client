import {AppProvider} from '@/app/providers'
import ReactDOM from 'react-dom/client'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import './styles/base.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(<AppProvider />)
