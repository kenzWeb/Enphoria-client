import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Outlet, useNavigation } from 'react-router-dom'
import { Loader } from '@/shared/ui/Other'

export const MainLayout = () => {
  const navigation = useNavigation()

  return (
    <>
      <Header />
      {navigation.state === "loading" && <Loader />}
      <Outlet />
      <Footer />
    </>
  )
}
