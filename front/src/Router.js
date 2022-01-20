import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "routes/Home"
import Players from "routes/Players"
import PlayerDetail from "routes/PlayerDetail"
import Profile from "routes/Profile"
import NotFound from "routes/NotFound"
import SignUp from "routes/SignUp"
import Bookmark from "routes/Bookmark"
import Talk from "routes/Talk"
import Login from "routes/Login"

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/players/:id" element={<PlayerDetail />} />
          <Route path="/players" element={<Players />} />
          <Route path="/" exact element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter