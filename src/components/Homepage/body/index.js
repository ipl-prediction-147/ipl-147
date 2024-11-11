import React, { useState } from 'react';
import './index.css';
import { Link } from "react-router-dom";
import cricketLogo from './images/5492.jpg';

const HomePage = () => {
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const [team1Name, setTeam1Name] = useState('');
    const [team2Name, setTeam2Name] = useState('');

    const selectTeam = (teamImg, teamName) => {
        if (!team1) {
            setTeam1(`${teamImg}.jpg`);
            setTeam1Name(teamName);
        } else if (!team2) {
            if (teamImg === team1) {
                alert("Please select a different team for prediction.");
            } else {
                console.log(`${teamImg}.jpg`)
                setTeam2(teamImg);
                setTeam2Name(teamName);
            }
        } else {
            alert("You have already selected two teams. Please reset to choose again.");
        }
    };

    const clearSelections = () => {
        setTeam1('');
        setTeam2('');
        setTeam1Name('');
        setTeam2Name('');
    };

    const makePrediction = () => {
        alert("Prediction feature coming soon!");
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid navbar-color">
                    <Link className="navbar-brand mr-5n" to="#">
                        <img src={cricketLogo} className="navbar-image" alt="Cricket Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link active" to="#">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">TEAMS</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="07venue.html">VENUE</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#about-us">ABOUT US</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="01login.html">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Scrolling Text */}
            <div className="scrolling-text margue-background-color">
                <marquee behavior="scroll" direction="left" scrollamount="10">
                    Welcome to IPL Prediction: Your Ultimate Destination for Cricket Enthusiasts! 
                </marquee>
            </div>

            {/* Team Selection */}
            <div className="container team-container bc">
                <h2 className="text-center mb-4">Select Two IPL Teams</h2>
                <div className="row">
                    {['csk', 'mi', 'rcb', 'kkr', 'srh', 'rr', 'dc', 'gt', 'lsg', 'pk'].map((team, index) => (
                        <div key={index} className="col-md-4">
                            <div className={`team ${team}`} onClick={() => selectTeam(`${team}`, team)}>
                                <div className="team-name textStyle">{team.toUpperCase()}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Selected Teams Display */}
            <div className="container text-center mt-4">
                <h4>Selected Teams:</h4>
                <div className="d-flex justify-content-center align-items-center">
                    <div className={`selected-team orange-glow ${team1Name}`}>
                        <div className="team-name">{team1Name}</div>
                    </div>
                    <div className="vs">VS</div>
                    <div className={`selected-team orange-glow ${team2Name}`}>
                        <div className="team-name">{team2Name}</div>
                    </div>
                </div>
                <button onClick={makePrediction} className="btn btn-primary mt-4" disabled={!team1 || !team2}>Make Prediction</button>
                <button onClick={clearSelections} className="btn btn-secondary mt-4" disabled={!team1 && !team2}>Clear</button>
            </div>
    {/* //////////////////////////////////////////////// */}
    <hr/>
            <div class="container1">
                <h1 className="text-center">IPL Prediction Form</h1>
                <form id="predictionForm" onsubmit="return validateForm(event)">
                    <div className="form-group">
                        <label for="battingTeam">Batting Team:</label>
                        <select id="battingTeam" name="battingTeam" className="form-control">
                            <option value="Select Team">Select Batting Team</option>
                            <option value="Chennai Super Kings">Chennai Super Kings</option>
                            <option value="Delhi Capitals">Delhi Capitals</option>
                            <option value="Gujarat Titans">Gujarat Titans</option>
                            <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                            <option value="Lucknow Super Giants">Lucknow Super Giants</option>
                            <option value="Mumbai Indians">Mumbai Indians</option>
                            <option value="Punjab Kings">Punjab Kings</option>
                            <option value="Rajasthan Royals">Rajasthan Royals</option>
                            <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                            <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="bowlingTeam">Bowling Team:</label>
                        <select id="bowlingTeam" name="bowlingTeam" className="form-control">
                            <option value="Select Team">Select Bowling Team</option>
                            <option value="Chennai Super Kings">Chennai Super Kings</option>
                            <option value="Delhi Capitals">Delhi Capitals</option>
                            <option value="Gujarat Titans">Gujarat Titans</option>
                            <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                            <option value="Lucknow Super Giants">Lucknow Super Giants</option>
                            <option value="Mumbai Indians">Mumbai Indians</option>
                            <option value="Punjab Kings">Punjab Kings</option>
                            <option value="Rajasthan Royals">Rajasthan Royals</option>
                            <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                            <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="venue">Venue:</label>
                        <select id="venue" name="venue" className="form-control">
                            <option value="Select Venue">Select Venue</option>
                            <option value="Rajiv Gandhi International Stadium, Uppal">Rajiv Gandhi International Stadium, Uppal</option>
                            <option value="M Chinnaswamy Stadium">M Chinnaswamy Stadium</option>
                            <option value="Wankhede Stadium">Wankhede Stadium</option>
                            <option value="Holkar Cricket Stadium">Holkar Cricket Stadium</option>
                            <option value="Eden Gardens">Eden Gardens</option>
                            <option value="Feroz Shah Kotla">Feroz Shah Kotla</option>
                            <option value="Punjab Cricket Association IS Bindra Stadium, Mohali">Punjab Cricket Association IS Bindra Stadium, Mohali</option>
                            <option value="Sawai Mansingh Stadium">Sawai Mansingh Stadium</option>
                            <option value="MA Chidambaram Stadium, Chepauk">MA Chidambaram Stadium, Chepauk</option>
                        </select>
                        <span id="errorText" className="error"></span>
                    </div>

                    <div className="form-group">
                        <label for="target">Target:</label>
                        <input type="number" id="target" name="target" min="0" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label for="overs">Overs:</label>
                        <input type="number" id="overs" name="overs" min="0" max="20" step="0.1" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label for="wickets">Wickets:</label>
                        <input type="number" id="wickets" name="wickets" min="0" max="10" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label for="secondInningsScore">Second Innings Present Score:</label>
                        <input type="number" id="secondInningsScore" name="secondInningsScore" min="0" className="form-control"/>
                    </div>

                    <div className="buttons">
                        <button type="submit" className="btn btn-primary">Submit Prediction</button>
                        <button type="button" onclick="clearForm()" className="btn btn-secondary">Clear All</button>
                    </div>
                </form>
            </div>
        <hr/>

    {/* //////////////////////////////////////////////// */}
         
            <footer className="footer" id="about-us">
                <div className="">
                    <div className="row">
                        <div className="footer-col"><h4 id="footer-name">Company</h4>
                            <ul>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">About Us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col"><h4 id="footer-name">Get Help</h4>
                            <ul>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col"><h4 id="footer-name">Online Predictions</h4>
                            <ul>
                                <li><Link to="#">Accurate</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col"><h4 id="footer-name">Follow Us</h4><div className="social-links">
                            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                            <Link to="#"><i className="fab fa-instagram"></i></Link>
                        </div></div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
