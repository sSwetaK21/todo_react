import React, { useState, useEffect } from "react";
import axios from "axios"

import './covid.css'

export function Covid() {
    const [mydata, setData] = useState([]);
    // const [theme, setTheme] = useState("dark-theme");
    const [filter, setFilter] = useState([]);
    const [search, setSearchBar] = useState("");


    useEffect(() => {
        axios
            .get("https://data.covid19india.org/data.json")
            .then((response) => {
                console.log(response.data);
                setData([...response.data.statewise])
                setFilter([mydata, ...response.data.statewise])
            });
    }, [])


    useEffect(() => {
        const filterDataValue = mydata.filter((post) => {
            if (post.state) {
                return post.state.startsWith(search)
            }
        })
        setFilter(filterDataValue)
    }, [search])


    // const toggleClick = () => {
    //     // if(theme === "dark-theme"){
    //     //     setTheme("light-theme")
    //     // }else{
    //     //     setTheme("dark-theme")
    //     // }
    //     theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    //     console.log(theme)
    // }

    // useEffect(() => {
    //         document.body.className = theme;
    // }, [theme])

    // const toggleClick = () => {
    //     if ("dark") {
    //         document.body.style.backgroundColor = "black"
    //         document.body.title.classList.toggle("dark")
    //     } else {
    //         document.body.style.backgroundColor = "white"
    //     }
    // }

    let darkbtn = document.querySelector(".darkbtn")

   let  darkflag  = true

   const darkToggle = ()=>{
    if(darkflag){
        document.body.style.backgroundColor = "black";
        darkbtn.innerText = "Dark"

        darkflag = false
    } else{
        document.body.style.backgroundColor = "white";
        darkbtn.innerText = "Light"
        darkflag = true
    }
   }


    return (
        <>
            <section>
                <div>
                    <div className="title">
                        <h2 className="live">🔴Live</h2>
                        {/* <a href="/" className="btn dark" onClick={() => toggleClick()}>Dark</a> */}
                        {/* <a href="/" theme={theme === "dark" ? "dark-theme"  : "light-theme"}> Dark</a> */}

                        <button className="darkbtn "  onClick={darkToggle}>Dark</button>

                        <h2 className="covidTitle"> Covid Tracker</h2>
                        <input type="text" value={search} onChange={
                            (e) => setSearchBar(e.target.value)
                        } />
                        <button className="btnclick">Go</button>
                    </div>



                    <div className="container">

                        {/* ****************** another way ************** */}

                        {/* {
                        mydata.map((post) => {
                            // const {active, deaths,recovered } = post
                            return (
                                <>
                                    <div className="main">
                                        <div>
                                            <div>
                                                <p>active : {post.active}</p>

                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <p>deaths: {post.deaths}</p>

                                            </div>
                                        </div>
                                    </div>
                                </>


                            )
                        }

                        )
                    } */}

                        <div className="table-res">
                            <table className="table table_hover">
                                <thead className="thead dark">
                                    <tr>
                                        <th>State</th>
                                        <th>Active</th>
                                        <th>Recovered</th>
                                        <th>Deaths</th>
                                        <th>Updated</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        filter.map(
                                            (el, ind) => {
                                                return (
                                                    <tr key={ind}>
                                                        <td>{el.state}</td>
                                                        <td>{el.active}</td>
                                                        <td>{el.recovered}</td>
                                                        <td>{el.deaths}</td>
                                                        <td>{el.lastupdatedtime}</td>
                                                    </tr>
                                                )
                                            }
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}