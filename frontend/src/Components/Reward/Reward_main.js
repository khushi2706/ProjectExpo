import React from 'react'
import tshirt from "../../Assets/Images/tshirt.jpg"
import laptopSleev from "../../Assets/Images/laptopSleev.jpg"
import keyChain from "../../Assets/Images/keyChain.jpg"
import bag from "../../Assets/Images/bag.jpg"
import book from "../../Assets/Images/book.jpg"
import Header from "../Common/Header"
function Reward_main() {
    return (
        <>
        <Header/>
        <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
            <img src={keyChain} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Project Expo Merchendise</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <h4 class="card-text">Point: 450</h4>
                <a href="#" class="btn btn-primary">Redeem</a>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={laptopSleev} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Project Expo Merchendise</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <h4 class="card-text">Point: 450</h4>
                <a href="#" class="btn btn-primary ">Redeem</a>
            </div>
            
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={book} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Project Expo Merchendise</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <h4 class="card-text">Point: 450</h4>
                <a href="#" class="btn btn-primary">Redeem</a>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={tshirt} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Project Expo Merchendise</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <h4 class="card-text">Point: 450</h4>
                <a href="#" class="btn btn-primary">Redeem</a>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={bag} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Project Expo Merchendise</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <h4 class="card-text">Point: 450</h4>
                <a href="#" class="btn btn-primary">Redeem</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default Reward_main
