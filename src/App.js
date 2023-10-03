import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import NotFound from "./Screens/NotFound";
import MoviesPage from "./Screens/Movies";
import SingleMovie from "./Screens/SingleMovie";
import WatchPage from "./Screens/WatchPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import Aos from "aos";
import Password from "./Screens/Dashboard/Password";
import FavoritesMovies from "./Screens/Dashboard/FavoritesMovies";
import MoviesList from "./Screens/Dashboard/Admin/MoviesList";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Categories from "./Screens/Dashboard/Admin/Categories";
import Users from "./Screens/Dashboard/Admin/Users";
import AddMovie from "./Screens/Dashboard/Admin/AddMovie";
import ScrollOnTop from "./ScrollOnTop";
import DrawerContext from './Context/DrawerContext';


function App() {
  Aos.init();
  return (
    <DrawerContext>
      <ScrollOnTop>
        <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
          <Route
            path="/movie/:id"
            element={<SingleMovie></SingleMovie>}
          ></Route>
          <Route path="/watch/:id" element={<WatchPage></WatchPage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/password" element={<Password></Password>}></Route>
          <Route
            path="/favorites"
            element={<FavoritesMovies></FavoritesMovies>}
          ></Route>
          <Route path="/movielist" element={<MoviesList></MoviesList>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/categories" element={<Categories></Categories>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="/addmovie" element={<AddMovie></AddMovie>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
}

export default App;
