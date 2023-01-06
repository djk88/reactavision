import React from 'react'
import team from '../image/team-first.png'

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
                <img src ={team}></img>
                <h3>Own It</h3>
                <p>We are all owners of the work that we do individually and as a team. We believe brilliant ideas can come from all corners of our organization, and encourage thought leadership from everyone at Tubi.</p>
                </section>
                <section>
                <img src ={team}></img>
                <h3>Own It</h3>
                <p>We are all owners of the work that we do individually and as a team. We believe brilliant ideas can come from all corners of our organization, and encourage thought leadership from everyone at Tubi.</p>
                </section>
                <section>
                <img src ={team}></img>
                <h3>Own It</h3>
                <p>We are all owners of the work that we do individually and as a team. We believe brilliant ideas can come from all corners of our organization, and encourage thought leadership from everyone at Tubi.</p>
                </section>
                <section>
                <img src ={team}></img>
                <h3>Own It</h3>
                <p>We are all owners of the work that we do individually and as a team. We believe brilliant ideas can come from all corners of our organization, and encourage thought leadership from everyone at Tubi.</p>
                </section>
            </div>
        </div>
    </div>
    );
}; 
