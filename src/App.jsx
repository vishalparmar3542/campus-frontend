
import './App.css'
import Header from './components/Header' 
import Products from './components/Products'
import FilterProducts from './components/FilterProducts'
import Register from './components/Register'

import LoginPage from './components/LoginPage'


// Filename - App.js

import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";




class App extends Component {
    render() {
        return (
          <>
            <Router>
                <div className="App">
                    
                    <Routes>
                        <Route
                            path="/"
                            
                            element={<LoginPage />}
                        >
                          
                        </Route>
                        <Route
                            path="/Products"
                            element={<>
                              <Header/>
                            <Products/>
                            </>
                          }
                        >
                          </Route>
                          <Route
                            path="/FilterProducts"
                            element={<>
                              <Header/>
                            <FilterProducts />
                            </>
                          }
                        ></Route>
                        
                        <Route
                            path="/Register"
                            element={<Register />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
            </>
        );
    }
}

export default App;

