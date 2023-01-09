import React from 'react'
import team from '../image/team-first.png'
import ownIt from '../image/own-it.png'
import actWith from '../image/act-with-integrity.png'
import grow from '../image/grow-yourself.png'
import deliver from '../image/deliver-delight.png'

export const PageAbout = () => {
    return (
        <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">About Page</h1>
            </div>
            <div>
                <p>Breakthrough Movie App </p>
                <p>This website is a movie Introduction service with over 45,000 movies, and featuring content from every major Hollywood studio. We give fans of film an easy way to discover new content that is completely free.</p>
            
                <h1>Our Values</h1>
                <p>We care deeply about our culture. The five values below serve as the guiding principles for everything we do.</p>
            </div>
            <div>
                <section>
                <img src ={team}></img>
                <h3>Team First</h3>
                <p>We are most successful when we work together and perform as one team. We empower each other, prioritize team success, and trust our teammates to do the same.</p>
                </section>
                <section>
                <img src ={ownIt}></img>
                <h3>Own It</h3>
                <p>We are all owners of the work that we do individually and as a team. We believe brilliant ideas can come from all corners of our organization, and encourage thought leadership from everyone at Tubi.</p>
                </section>
                <section>
                <img src ={actWith}></img>
                <h3>Act With Integrity</h3>
                <p>We work with good people and do the right thing for the right reasons. We believe it’s important to treat our colleagues, teammates, stakeholders, and external partners with respect, empathy, and kindness.</p>
                </section>
                <section>
                <img src ={grow}></img>
                <h3>Grow Yourself</h3>
                <p>Everyone owns their career journey and professional development at Tubi. When employees lean into their unique passions, interests, and skills at work, they grow their individual talents and team impact.</p>
                </section>
                <section>
                <img src ={deliver}></img>
                <h3>Deliver Delight</h3>
                <p>We are customer-focused, curious, and passionate. We deliver delight in the form of an exceptional experience on all fronts – for our customers, partners, and employees – and we have fun doing it</p>
                </section>
            </div>
        </div>
    </div>
    );
}; 
