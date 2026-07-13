import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewDonor = () => {
    const[data,changeData]=useState([])

        const fetchData=()=>{

            axios.get("https://host-demo-app.onrender.com/api/donors").then(
                (response)=>{
                    changeData(response.data)
                }
            ).catch()
        }

        useEffect(
            ()=>{fetchData()},[]
        )

  return (
    <div>
        <NavBar/>
       
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                      {data.map(
                        (value,index) =>
                        {
                            return(
                                 <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="card">
                                {/* <img src={value.image} height={400} alt="..."/> */}
                                <div class="card-body">
                                 
                                    <p class="card-text">{value.donor_name}</p>
                                    <p class="card-text">{value.age}</p>
                                    <p class="card-text">{value.gender}</p>
                                    <p class="card-text">{value.blood_group}</p>
                                    <p class="card-text">{value.phone}</p>
                                    <p class="card-text">{value.email}</p>
                                    <p class="card-text">{value.city}</p>
                                    <p class="card-text">{value.weight_kg}</p>
                                    <p class="card-text">{value.last_donation_date}</p>
                                  
                                    
                                    <a href="#" className="btn btn-primary">Add</a>
                                </div>
                                </div>
                        </div>
                            )
                        }
                      )}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
  
}

export default ViewDonor