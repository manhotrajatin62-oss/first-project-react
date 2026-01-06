import Copyright from "./components/Copyright"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"
import Courses_List from "./pages/Courses_List"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Testimonials from "./pages/Testimonials"

const App = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>

    <main>
      <Home/>
      <Courses/>
      <Courses_List/>
      <Testimonials/>
      <Contact/>
    </main>

    <footer>
      <Footer/>
      <Copyright/>
    </footer>
    </>
  )
}

export default App