import React, { Component } from 'react';

import './style.css';
import Block from './../Block';

import Web3 from 'web3';
import _ from 'lodash';
import {withRouter} from 'react-router';


import SplitterLayout from 'react-splitter-layout';



class App extends Component {

 render() {
	 
		console.log("hi");
    return (
      <SplitterLayout >
        <div id="home">
		<meta charSet="UTF-8" />
        <meta name="description" content />
        {/* Mobile Spe`cific Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Real Bit$ – Welcome to S K R Y P T O R Z</title>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//netdna.bootstrapcdn.com" />
        <link rel="dns-prefetch" href="//s.w.org" />
        <link rel="alternate" type="application/rss+xml" title="Welcome to S K R Y P T O R Z » Feed" href="http://www.skryptorz.com/feed/" />
        <link rel="alternate" type="application/rss+xml" title="Welcome to S K R Y P T O R Z » Comments Feed" href="http://www.skryptorz.com/comments/feed/" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 .07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n" }} />
        <link rel="stylesheet" id="give-styles-css" href="http://www.skryptorz.com/wp-content/plugins/give/templates/give.min.css?ver=2.0.6" type="text/css" media="all" />
        <link rel="stylesheet" id="rs-plugin-settings-css" href="http://www.skryptorz.com/wp-content/plugins/revslider/public/assets/css/settings.css?ver=5.4.3" type="text/css" media="all" />
        <style id="rs-plugin-settings-inline-css" type="text/css" dangerouslySetInnerHTML={{__html: "\n#rs-demo-id {}\n" }} />
        <link rel="stylesheet" id="tt-base-font982427352-css" href="//fonts.googleapis.com/css?family=Roboto%3A400%2C300%2C500%2C700%2C100&ver=4.9.5" type="text/css" media="all" />
        <link rel="stylesheet" id="tt-font-awesome.min.css-css" href="//netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css?ver=4.9.5" type="text/css" media="all" />
        <link rel="stylesheet" id="tt-bootstrap.css-css" href="http://www.skryptorz.com/wp-content/themes/materialism/css/bootstrap.css?ver=4.9.5" type="text/css" media="all" />
        <link rel="stylesheet" id="tt-icomoon.css-css" href="http://www.skryptorz.com/wp-content/themes/materialism/css/icomoon.css?ver=4.9.5" type="text/css" media="all" />
        <link rel="stylesheet" id="tt-main-style-css" href="http://www.skryptorz.com/wp-content/themes/materialism/css/screen.css?ver=4.9.5" type="text/css" media="all" />
        <style id="tt-main-style-inline-css" type="text/css" dangerouslySetInnerHTML={{__html: "\n.learn-more-section {\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n.news-item-cover.big, .news-item{\n  min-height: 353px;\n}\n" }} />
        <link rel="stylesheet" id="tt-theme-style-css" href="http://www.skryptorz.com/wp-content/themes/materialism/style.css?ver=4.9.5" type="text/css" media="all" />
        <link rel="stylesheet" id="js_composer_front-css" href="http://www.skryptorz.com/wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=5.1.1" type="text/css" media="all" />
        <link rel="https://api.w.org/" href="http://www.skryptorz.com/wp-json/" />
        <link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://www.skryptorz.com/xmlrpc.php?rsd" />
        <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://www.skryptorz.com/wp-includes/wlwmanifest.xml" /> 
        <meta name="generator" content="WordPress 4.9.5" />
        <link rel="canonical" href="http://www.skryptorz.com/realbits/" />
        <link rel="shortlink" href="http://www.skryptorz.com/?p=276" />
        <link rel="alternate" type="application/json+oembed" href="http://www.skryptorz.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skryptorz.com%2Frealbits%2F" />
        <link rel="alternate" type="text/xml+oembed" href="http://www.skryptorz.com/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skryptorz.com%2Frealbits%2F&format=xml" />
        <meta name="generator" content="Give v2.0.6" />
        {/* This code is added by WP Analytify (2.1.14) https://analytify.io/downloads/analytify-wordpress-plugin/ !*/}
        {/* This code is added by WP Analytify (2.1.14) !*/}		<style type="text/css" dangerouslySetInnerHTML={{__html: ".recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}" }} />
        <meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress." />
        {/*[if lte IE 9]><link rel="stylesheet" type="text/css" href="http://www.skryptorz.com/wp-content/plugins/js_composer/assets/css/vc_lte_ie9.min.css" media="screen"><![endif]*/}<meta name="generator" content="Powered by Slider Revolution 5.4.3 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
        <style type="text/css" data-type="vc_shortcodes-custom-css" dangerouslySetInnerHTML={{__html: ".vc_custom_1522722858358{margin-right: 20px !important;margin-left: 20px !important;}.vc_custom_1522722874782{margin-right: 20px !important;margin-left: 10px !important;}.vc_custom_1522722885257{margin-right: 20px !important;margin-left: 10px !important;}.vc_custom_1522722899525{margin-right: 20px !important;margin-left: 20px !important;}.vc_custom_1522722933249{margin-right: 10px !important;margin-left: 20px !important;}.vc_custom_1522722918140{margin-right: 10px !important;margin-left: 20px !important;}" }} /><noscript>&lt;style type="text/css"&gt; .wpb_animate_when_almost_visible {'{'} opacity: 1; {'}'}&lt;/style&gt;</noscript>	
        {/* Video Popup */}
        <div className="popup-wrapper video-popup">
          {/* Close Video Popup */}
          <span className="close-video-popup-toggle" />
          <div className="popup-inner-content">
            <div className="media-wrapper">
              <div className="responsive-media ratio16by9" />
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <header className="sticky">
            <form className="header-search-form" method="get" id="searchform" action="http://www.skryptorz.com/">
              <input className="input-line" placeholder="Search" defaultValue name="s" id="s" />
              <i className="icon-close-icon close-icon" />
            </form>
            <div className="container-fluid">
              <h1 className="hidden">Welcome to S K R Y P T O R Z</h1>
              <h2 className="hidden" />
              <a href="http://www.skryptorz.com/" className="logo-wrapper" style={{}}>
                <img src="http://www.skryptorz.com/wp-content/uploads/2018/04/skryptorz-s.png" alt="Welcome to S K R Y P T O R Z" />
              </a>				<nav className="main-nav">
                <ul id="menu-footer-menu" className><li id="menu-item-245" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-245"><a href="http://www.skryptorz.com/">Home</a></li>
                  <li id="menu-item-282" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-276 current_page_item menu-item-282"><a href="http://www.skryptorz.com/realbits/">Real Bit$</a></li>
                  <li id="menu-item-243" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243"><a href="http://www.skryptorz.com/cellery/">Cellery</a></li>
                  <li id="menu-item-242" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-242"><a href="http://www.skryptorz.com/rythu-mithra/">Rythu Mithra</a></li>
                </ul>				</nav>
              <div className="toggle-wrapper">
                <span className="mobile-toggle" />
                <div className="share-block">
                  <i className="icon-share icon-mobile-menu" />
                  <ul className="social-platforms clean-list">
                    <li><a href="https://facebook.com/" target="_blank">facebook</a></li>
                    <li><a href="https://twitter.com/" target="_blank">twitter</a></li>
                    <li><a href="https://plus.google.com/" target="_blank">google</a></li>
                  </ul>
                </div>
                <i className="search-toggle icon-search" />
              </div>
            </div>
          </header>
          <div className="content-wrapper">
            <section className="hero-section single" style={{background: 'url("http://www.skryptorz.com/wp-content/uploads/2018/01/pexels-photo-house-1660x620.jpeg") center center'}}>
              <div className="container">
                <div className="centered-content">
                  <h1 className="post-title">Real Bit$</h1>
                </div>
                <div className="single-share-block">
                  <span className="circle-btn share-btn" />
                  {/* Share Article */}
                  <ul className="clean-list social-platforms">
                    <li className="title">Share</li>
                    <li className="platform google-plus">							<a className="google-plus" onclick="window.open('https://plus.google.com/share?url=http%3A%2F%2Fwww.skryptorz.com%2Frealbits%2F','sharer','toolbar=0,status=0,width=548,height=325');" href="javascript: void(0)"><i className="fa fa-google-plus" /> Google+</a>
                    </li><li className="platform facebook">							<a onclick="window.open('http://www.facebook.com/sharer.php?s=100&t=&u=http%3A%2F%2Fwww.skryptorz.com%2Frealbits%2F','sharer','toolbar=0,status=0,width=548,height=325');" href="javascript: void(0)"><i className="fa fa-facebook" /> Facebook</a>
                    </li><li className="platform twitter">							<a className="twitter" onclick="window.open('http://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.skryptorz.com%2Frealbits%2F&text=','sharer','toolbar=0,status=0,width=548,height=325');" href="javascript: void(0)"><i className="fa fa-twitter" /> Twitter</a>
                    </li><li className="platform pinterest">							<a className="pinterest" onclick="window.open('https://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.skryptorz.com%2Frealbits%2F','sharer','toolbar=0,status=0,width=748,height=325');" href="javascript: void(0)"><i className="fa fa-pinterest" /> Pinterest</a>
                    </li></ul>
                  {/* Share Article End */}
                </div>
              </div>
            </section>
            <div className="vc_row wpb_row vc_row-fluid vc_custom_1522722858358 vc_column-gap-30"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner "><div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                        <h2 style={{textAlign: 'center'}}><strong>Real Estate Crowdfunding Platform Using Blockchain<br />
                          </strong></h2>
                        <p>Real Bit$ is a novel platform being designed to attract investors to invest in real estate using Crowdfunding. It is very similar to a REIT (Real Estate Investment Trust) but it uses Blockchain as the underlying platform for increased security, transparency, faster processing and trust between various stakeholders.</p>
                        <h2><strong>Yet Another Platform</strong></h2>
                        <p>You  might be thinking why there is a need for another Platform with the market already flooded with numerous Apps and Websites offering Real Estate investments. Also there are many Crowdfunding platforms already available like Kickstarter, Indiegogo, etc.</p>
                        <h2><strong>Millenials Don’t Invest In Real Estate</strong></h2>
                        <p>According to a recent survey, millenials don’t invest in Real Estate. They are more likely to invest in Crowdfunding campaigns where they think there is a social cause and also something of value in return.</p>
                        <h2><strong>Baby Boomers Invest In Real Estate Deals</strong></h2>
                        <p>Most of the baby boomers, Gen X, Gen Y have one or other form of investment in some kind of Real Estate. But the future generation of Millenials need to learn from the collective knowledge of the earlier generations and start investing in Real Estate. It’s time for the next generation to take the baton of the economic activity from the older generations and take it upon themselves as a future financial responsibility.</p>
                        <h2><strong>What’s Happening Around Us?</strong></h2>
                        <p>If you look at the recent news, a number of houses have been inundated with floods in Texas. A number of houses have been razed to the ground due to forest fires in California. A lot of people in Puerto Rico have lost their homes and have been left without Electricity and other essential utilities for a number of days.</p>
                        <h2><strong>Market Opportunity</strong></h2>
                        <p>This is a great time to turn disaster into a perfect opportunity by investing in re-building those communities devastated by natural calamities. We don’t just want to rebuild but we want to build energy-efficient, sustainable, near net zero, carbon neutral homes in these areas so that in the next few decades we can become self-reliant and more resilient apart from being more environmentally friendly.</p>
                        <h2><strong>Current Development Stage</strong></h2>
                        <p>The Real Bit$ platform prototype is similar to the one below where you will have individual campaigns. Each campaign is similar to any other Crowdfunding campaign except that the investment goes into ownership of a real estate property on offer.</p>
                        <p>We propose to offer energy-efficient housing, commercial real estate for Crowdfunding. For more details, keep checking back this page!!</p>
                        <h2><strong>Whitepaper</strong></h2>
                        <p>We have written an initial draft of Real Bit$ Technical Whitepaper which you can read here: <a href="http://www.skryptorz.com/wp-content/uploads/2018/02/Real-Bits-Whitepaper-v1.pdf"><strong>Real-Bit$-Whitepaper</strong></a></p>
                        <h2><strong>Explainer Video</strong></h2>
                        <p>We have also created a simple Explainer Video as an introduction for Real Bit$ platform.</p>
                      </div>
                    </div>
                    <div className="wpb_video_widget wpb_content_element vc_clearfix   vc_video-aspect-ratio-169 vc_video-el-width-100 vc_video-align-center">
                      <div className="wpb_wrapper">
                        <div className="wpb_video_wrapper"><iframe width={1170} height={658} src="https://www.youtube.com/embed/ByBgZucCcC4?feature=oembed" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen /></div>
                      </div>
                    </div>
                    <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                        <h2><strong>Prototype Preview</strong></h2>
                        <p>The next part is a preview of the prototype of our Real Bit$ platform which will be running using Blockchain as the back-end technology.</p>
                      </div>
                    </div>
                  </div></div></div></div><div className="vc_row wpb_row vc_row-fluid vc_custom_1522722874782"><div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner vc_custom_1522722933249"><div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <h2 className="wpb_heading wpb_singleimage_heading">Energy Star Apartment</h2>
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={300} height={179} src="http://www.skryptorz.com/wp-content/uploads/2018/01/pexels-photo-apartment-300x179.jpeg" className="vc_single_image-img attachment-medium" alt srcSet="http://www.skryptorz.com/wp-content/uploads/2018/01/pexels-photo-apartment-300x179.jpeg 300w, http://www.skryptorz.com/wp-content/uploads/2018/01/pexels-photo-apartment-768x458.jpeg 768w, http://www.skryptorz.com/wp-content/uploads/2018/01/pexels-photo-apartment-1024x611.jpeg 1024w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                      </figure>
                    </div>
                    <div className="vc_btn3-container vc_btn3-center">
                      <a className="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-rounded vc_btn3-style-modern vc_btn3-icon-left vc_btn3-color-grey" href="http://www.skryptorz.com/donations/energy-star/" title="Donate to Energy Star Apartment"><i className="vc_btn3-icon fa fa-credit-card-alt" /> Donate Now</a></div>
                  </div></div></div><div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner "><div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                        <p>This Energy Star Apartment is a dream come true for the Urban-dweller. This Apartment has been designed with Energy star rated appliances and eco-friendly materials. Invest Now!! Going soon!!</p>
                      </div>
                    </div>
                  </div></div></div></div><div className="vc_row wpb_row vc_row-fluid vc_custom_1522722885257"><div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner vc_custom_1522722918140"><div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <h2 className="wpb_heading wpb_singleimage_heading">Carbon Neutral Home</h2>
                      <figure className="wpb_wrapper vc_figure">
                        <a href="http://www.skryptorz.com/house.html" target="_self" className="vc_single_image-wrapper   vc_box_border_grey"><img width={300} height={205} src="http://www.skryptorz.com/wp-content/uploads/2018/01/pexels-photo-house-300x205.jpeg" className="vc_single_image-img attachment-medium" alt srcSet="http://www.skryptorz.com/wp-content/uploads/2018/01/pexels-photo-house-300x205.jpeg 300w, http://www.skryptorz.com/wp-content/uploads/2018/01/pexels-photo-house-768x524.jpeg 768w, http://www.skryptorz.com/wp-content/uploads/2018/01/pexels-photo-house-1024x698.jpeg 1024w" sizes="(max-width: 300px) 100vw, 300px" /></a>
                      </figure>
                    </div>
                    <div className="vc_btn3-container vc_btn3-center">
                      <a className="vc_general vc_btn3 vc_btn3-size-lg vc_btn3-shape-rounded vc_btn3-style-modern vc_btn3-icon-left vc_btn3-color-grey" href="http://www.skryptorz.com/donations/carbon-neutral/" title="Donate to Carbon Neutral Home"><i className="vc_btn3-icon fa fa-credit-card-alt" /> Donate Now</a></div>
                  </div></div></div><div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner "><div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                        <p>This Carbon-neutral home is the Dream house of many wannabe Green activists. This complies to the Internationally acclaimed Passive House standard and is almost carbon-neutral with amazing features. Invest in this house now!! Going soon!!</p>
                      </div>
                    </div>
                  </div></div></div></div><div className="vc_row wpb_row vc_row-fluid vc_custom_1522722899525"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner "><div className="wpb_wrapper">
                    <section id="Contact" className="contact-section form section ">
                      <span />
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <form method="POST" action="contact_form_send_message" data-parsley-validate className="tt-form contact-form">
                              <div className="col-md-24 column">{/* Start Column */}
                                {/* Start Element */}
                                <div className="section-title grad">
                                  <h2>Contact Form</h2>
                                </div>							{/* End Element */}
                                {/* Start Element */}
                                <div className="input-line required">
                                  <span className="label">Name</span>
                                  <input data-parsley-errors-container="#error-container" data-parsley-error-message="A name is required !" className="check-value" type="text" name="Name" data-parsley-required="true" />
                                  <span className="placeholder">Your Name<span>*</span></span>
                                  <span className="line-border" />
                                </div>							{/* End Element */}
                                {/* Start Element */}
                                <div className="input-line required">
                                  <span className="label">Phone</span>
                                  <input data-parsley-errors-container="#error-container" data-parsley-error-message="A name is required !" className="check-value" type="text" name="Phone" data-parsley-required="true" />
                                  <span className="placeholder">Your Number<span>*</span></span>
                                  <span className="line-border" />
                                </div>							{/* End Element */}
                                {/* Start Element */}
                                <div className="input-line required">
                                  <span className="label">Email</span>
                                  <input data-parsley-errors-container="#error-container" data-parsley-error-message="An E-mail is required" data-parsley-type="email" className="check-value" type="email" name="Email" data-parsley-required="true" />
                                  <span className="placeholder">Your Email ID<span>*</span></span>
                                  <span className="line-border" />
                                </div>							{/* End Element */}
                                {/* Start Element */}
                                <div className="input-line textarea required">
                                  <span className="label">Message</span>
                                  <textarea data-parsley-errors-container="#error-container" data-parsley-error-message="Insert a Message !" className="check-value" name="Message" data-parsley-required="true" defaultValue={""} />
                                  <span className="placeholder">Your Message To Us<span>*</span></span>
                                  <span className="line-border textarea" />
                                </div>							{/* End Element */}
                                {/* Start Element */}
                                <div className="input-line submit">
                                  <span className="label" />
                                  <input className="btn gradient big submit" type="submit" defaultValue="Submit" data-sending="Sending Message" data-sent="Message Successfully Sent" data-error="Unable to send message" />
                                </div>							{/* End Element */}
                              </div>{/* End Column */}
                              <div className="clean-list" id="error-container" />
                              <input type="hidden" name="id" defaultValue="Contact" />
                            </form>
                            <div className="clean-list" id="error-container" />			</div>
                        </div>
                      </div>
                    </section></div></div></div></div><div className="vc_row wpb_row vc_row-fluid" />
          </div>
          <footer>
            <div className="container">
              <ul id="menu-footer-menu-1" className="footer-menu clean-list"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-245"><a href="http://www.skryptorz.com/">Home</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-276 current_page_item menu-item-282"><a href="http://www.skryptorz.com/realbits/">Real Bit$</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243"><a href="http://www.skryptorz.com/cellery/">Cellery</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-242"><a href="http://www.skryptorz.com/rythu-mithra/">Rythu Mithra</a></li>
              </ul>				<ul className="social-links clean-list">
                <li><a href="https://facebook.com/" target="_blank"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://plus.google.com/" target="_blank"><i className="fa fa-google" /></a></li>
              </ul>
              <div className="col-md-12">
                <p className="copyright">Designed by <a href="http://teslathemes.com">Teslathemes</a>, Supported by <a href="https://wpmatic.io">WPMatic</a></p>
              </div>
            </div>
          </footer>
        </div>
        <link rel="stylesheet" id="font-awesome-css" href="http://www.skryptorz.com/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min.css?ver=5.1.1" type="text/css" media="all" />
     </div>
        <div id="block" >
		
		
		
		
		<h1> Block Details</h1>
 </div>
 
 

  
      </SplitterLayout>
    );
  }
 
}
	
	 



export default withRouter(App);