import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Login from './../Login';
import img1 from './img/img1.jpg';
import logo from './img/logo.png';
import Building1 from './img/project/Building1.jpg';
import Building4 from './img/project/Building4.jpeg';
import Building5 from './img/project/Building5.jpeg';


class IndexPage extends Component {
	render() {
		return (
			<div>
				<nav id="menu" className="navbar navbar-default navbar-fixed-top">
					<div className="container">
						{/* Brand and toggle get grouped for better mobile display */}
						<img src={logo} alt="logo" style={{ height: 100, width: 100, position: 'absolute', top: '-14px', left: 12 }} />
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
							<a className="navbar-brand page-scroll" href="#page-top">Real Bits</a> </div>
						{/* Collect the nav links, forms, and other content for toggling */}
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li className="headerTitle">
									<a className="page-scroll" href="../RealBits/project.html">Projects</a>
								</li>
								<li className="headerTitle"><a href="#" className="page-scroll">Blog</a></li>
								<li className="headerTitle"><a href="#" className="page-scroll">Team</a></li>
								<li className="headerTitle"><Link to="/login">Login</Link></li>
							</ul>
						</div>
						{/* /.navbar-collapse */}
					</div>
				</nav>
				{/*SLIDE*/}
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
					{/* Indicators */}
					<ol className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to={0} className="active" />
						<li data-target="#myCarousel" data-slide-to={1} />
						<li data-target="#myCarousel" data-slide-to={2} />
					</ol>
					{/* Wrapper for slides */}
					<div className="carousel-inner">
						<div className="item active">
							<header id="header">
								<div className="intro">
									<div className="overlay">
										<div className="container">
											<div className="row">
												<div className="intro-text">
													<h1>Real Bits</h1>
													<p>Invest in Real Estate without hassle of home ownership</p>
													<a href="#about" style={{ color: 'white !important' }} className="btn btn-custom btn-lg page-scroll">Learn about Real Estate</a> </div>
											</div>
										</div>
									</div>
								</div>
							</header>
						</div>
						<div className="item">
							<header id="header">
								<div className="intro2">
									<div className="overlay">
										<div className="container">
											<div className="row">
												<div className="intro-text">
													<h1>Real Bits</h1>
													<p>Invest in Campaigns</p>
													<a href="#about" style={{ color: 'white !important' }} className="btn btn-custom btn-lg page-scroll">Invest Now</a> </div>
											</div>
										</div>
									</div>
								</div>
							</header>
						</div>
						<div className="item">
							<header id="header">
								<div className="intro3">
									<div className="overlay">
										<div className="container">
											<div className="row">
												<div className="intro-text">
													<h1>Real Bits</h1>
													<p>Start Now with as little as $500</p>
													<a href="#about" style={{ color: 'white !important' }} className="btn btn-custom btn-lg page-scroll">Start Now</a> </div>
											</div>
										</div>
									</div>
								</div>
							</header>
						</div>
					</div>
				</div>
				{/* Left and right controls */}
				<a className="left carousel-control" href="#myCarousel" data-slide="prev">
					<span className="glyphicon glyphicon-chevron-left" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="right carousel-control" href="#myCarousel" data-slide="next">
					<span className="glyphicon glyphicon-chevron-right" />
					<span className="sr-only">Next</span>
				</a>
				{/* About Section */}
				<div id="about">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-md-6 ">
								<div className="about-img"><img src={img1} className="img-responsive" alt /></div>
							</div>
							<div className="col-xs-12 col-md-6">
								<div className="about-text">
									<h2>Our Motto</h2><br /><br />
									<p className="textual" style={{ fontColor: 'black', color: 'black', fontSize: 24 }}>Turn Small Change Into Real Change. Hassle Free Real EState Investment Total Transparenty, Risk Free and High Results</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Team Section */}
				<div id="team" className="text-center">
					<div className="overlay">
						<div className="container">
							<div className="col-md-10 col-md-offset-1 section-title">
								<h2>CHANGE IS SIMPLE</h2>
								<br />
								<h4>Pick your project and Start investing some dollars now</h4>
								<hr />
							</div>
							<div id="row">
								<div className="col-md-4 team">
									<div className="thumbnail">
										<div className="team-img">
											<div className="hovercontainer">
												<img style={{ width: 280, height: 280 }} src={Building1} alt="Avatar" className="hoverimage" />
												<div className="hovermiddle">
													<div className="hovertext">
														<img src={logo} alt="Avatar" className="hoverimage" style={{ width: '100%' }} />
													</div>
												</div>
											</div>
											{/*                <img style="width:280px;height:280px;" src="img/project/Building1.jpg" alt="...">*/}
										</div>
										<div className="caption">
											<h3>Closed</h3>
										</div>
									</div>
								</div>
								<div className="col-md-4 team">
									<div className="thumbnail">
										<div className="team-img">
											<div className="hovercontainer">
												<img style={{ width: 280, height: 280 }} src={Building4} alt="Avatar" className="hoverimage" />
												<div className="hovermiddle">
													<div className="hovertext">
														<img src={logo} alt="Avatar" className="hoverimage" style={{ width: '100%' }} />
													</div>
												</div>
											</div>
										</div>
										<div className="caption">
											<h3>Upcoming</h3>
										</div>
									</div>
								</div>
								<div className="col-md-4 team">
									<div className="thumbnail">
										<div className="team-img">
											<div className="hovercontainer">
												<img style={{ width: 280, height: 280 }} src={Building5} alt="Avatar" className="hoverimage" />
												<div className="hovermiddle">
													<div className="hovertext">
														<img src={logo} alt="Avatar" className="hoverimage" style={{ width: '100%' }} />
													</div>
												</div>
											</div>
										</div>
										<div className="caption">
											<h3>Current</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div><br />
				<div className="about" style={{ alignText: 'center' }}>
					<div className="container">
						<div className="row" style={{ alignText: 'center', textAlign: 'center' }}>
							<p style={{ fontStyle: 'bold', textAlign: 'center', padding: 0, margin: 0 }}>
								<span style={{ fontStyle: 'bold' }}>We are compliant with the following regulatory authorities :</span>
							</p>
						</div>
					</div>
				</div><br />
				<div id="one">
					<ul>
						<li>SEC</li>
						<li>FERA</li>
						<li>CRISIL</li>
						<li>RBI</li>
						<li>TSREDA</li>
					</ul>
				</div>
				<div id="two">
					<ul>
						<li>FINRA</li>
						<li>RERA</li>
						<li>CIBIL</li>
						<li>SEBI</li>
						<li>NHB Residex</li>
					</ul>
				</div>
				{/*footer*/}
				<div id="footer">
					<div className="container text-center">
						<div className="col-md-4">
							<h3>Contact Info</h3>
							<div className="contact-item">
								<p>Phone: +91-9885278897</p>
								<p>Email: saisrikiran.mudigonda@gmail.com</p>
							</div>
						</div>
					</div>
					<div className="container-fluid text-center copyrights">
						<div className="col-md-8 col-md-offset-2">
							<div className="social">
								<ul>
									<li><a href="#"><i className="fa fa-facebook" /></a></li>
									<li><a href="#"><i className="fa fa-twitter" /></a></li>
									<li><a href="#"><i className="fa fa-google-plus" /></a></li>
								</ul>
							</div>
							<p>� 2018 RealBits. All rights reserved. Designed by RealBits Team</p>
						</div>
					</div>
				</div>
			</div>

		);

	}
}
export default IndexPage;


