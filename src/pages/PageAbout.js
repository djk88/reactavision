import React from 'react'
import team from '../image/team-first.png'
import ownIt from '../image/own-it.png'
import actWith from '../image/act-with-integrity.png'
import grow from '../image/grow-yourself.png'
import deliver from '../image/deliver-delight.png'
import about from '../image/background_about.jpg'
import tvdb from '../image/tmdb_logo.png'

export const PageAbout = () => {
    return (
        <div className="movie-page">
        <div className="container">
            <div className="about_banner">
                <div>
                <img src ={about} className="about_banner_img" alt='space background'></img>
                <div className='about_banner_text'>
                    <h1>Breakthrough Movie App </h1>
                    <p>This website is a movie Introduction service with over 45,000 movies, and featuring content from every major Hollywood studio. We give fans of film an easy way to discover new content that is completely free.</p>
                </div>
                </div>
            </div>
            <div className='about_values'>
                <h1>Our Values</h1>
                <p>We care deeply about our culture. The five values below serve as the guiding principles for everything we do.</p>
            </div>
            <div className='about_section'>
                <section>
                    <img src ={team} alt='communication'></img>
                    <h3>Team First</h3>
                    <p>We are most successful when we work together and perform as one team. We empower each other, prioritize team success, and trust our teammates to do the same.</p>
                </section>
                <section>
                    <img src ={ownIt} alt='holding hands'></img>
                    <h3>Own It</h3>
                    <p>We are all owners of the work that we do individually and as a team. We believe brilliant ideas can come from all corners of our organization, and encourage thought leadership from everyone.</p>
                </section>
                    <section>
                    <img src ={actWith} alt='scale'></img>
                    <h3>Act With Integrity</h3>
                    <p>We work with good people and do the right thing for the right reasons. We believe it’s important to treat our colleagues, teammates, stakeholders, and external partners with respect, empathy, and kindness.</p>
                </section>
                <section>
                    <img src ={grow} alt='stair with a fleg'></img>
                    <h3>Grow Yourself</h3>
                    <p>Everyone owns their career journey and professional development. When employees lean into their unique passions, interests, and skills at work, they grow their individual talents and team impact.</p>
                </section>
                <section>
                    <img src ={deliver} alt='a star with a hand'></img>
                    <h3>Deliver Delight</h3>
                    <p>We are customer-focused, curious, and passionate. We deliver delight in the form of an exceptional experience on all fronts – for our customers, partners, and employees – and we have fun doing it</p>
                </section>
            </div>
            <div className='TMDb_attri'>
                <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                <img src={tvdb} alt='TVDB Logo'></img>
            </div>
        </div>
    </div>
    );
}; 
