import { v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackData from './components/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import Post from './components/Post'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure, you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    return (
        
        <Router>
        <Header />
            <div className="container">
            <Routes>
            <Route exact path='/' element={<>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </>}>
            </Route>

            <Route path='/about' element={<AboutPage />}/>
            <Route path='/post/*' element={<Post />} />
            </Routes>
            <AboutIconLink />
            </div> 
        </Router>
    )
}

export default App