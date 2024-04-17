<!DOCTYPE html>
<html lang="en">
<head>
    
        <!---META DETAILS-->
        <meta charset="UTF-8">
        <meta name="viewpoint" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="personal profile website"/>
        <meta name="keywords" content="life, profile, interests"/>
        <meta name="author" content="Welcome Kunene">

    <!--FONT AWESOME ICONS-->
    <script src="https://kit.fontawesome.com/c7abea2177.js" crossorigin="anonymous"></script>

    <!--CSS-->
    <link rel="stylesheet" href="assets/CSS/styling.css">

    <!--FAVICON-->
    <link rel="shortcut icon" href="assets/Images/Royalty Era Photography White Signature.png" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/Icons/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/Icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/Icons/favicon-16x16.png">
    <link rel="manifest" href="assets/Icons/site.webmanifest">

    <title>Home</title>
</head>
<body>
    <div class="container">

    <!--HEADER-->

        <nav id="header">
            <div class="nav-logo">
                <a href="#home" class="nav-name">Royalty
                <span>.</span></a>
            </div>
            <div class="nav-menu" id="myNavMenu">
                <ul class="nav_menu_list">
                    <li class="nav_list">
                        <a href="#home" class="nav-link active-link">Home</a>
                        <div class="circle"></div>
                    </li>
                    <li class="nav_list">
                        <a href="#about" class="nav-link">About</a>
                        <div class="circle"></div>
                    </li>
                    <li class="nav_list">
                        <a href="#projects" class="nav-link">Projects</a>
                        <div class="circle"></div>
                    </li>
                    <li class="nav_list">
                        <a href="#contact" class="nav-link">Contact</a>
                        <div class="circle"></div>
                    </li>
                </ul>
            </div>

            <!----DARK MODE TOGGLE-->

            <div class="dark-mode-toggle">
                <input type="checkbox" id="dark-mode-switch">
                <label for="dark-mode-switch"></label>
              </div>
            
            
            <div class="nav-menu-btn">
                <i class="fa-solid fa-bars" onclick="myMenuFunction()"></i>
            </div>
        </nav>

    <!----MAIN---->

        <main class="wrapper">
            <!----FEATURED BOX---->
            <section class="featured-box" id="home">
                <div class="featured-text">

                    <div class="featured-text-card">
                        <span>Tshepo Kunene</span>
                    </div>
                    <div class="featured-name">
                        <p>I'm a <span class="typedText"></span></p>
                    </div>
                    <div class="featured-text-info">
                        <p>I am an experienced visual artist with a passion for capturing memorable moments and creating timeless photographs. My love for photography extends beyond just taking pictures; it's about preserving fleeting moments and emotions in a way that resonates with viewers. Each photograph I create is a piece of art that tells a unique story, evoking feelings and memories that last a lifetime.</p>
                    </div>
                    <div class="featured-text-btn">
                        <button class="btn blue-btn" onclick="location.href ='#contact'">Hire Me</button>
                        <a class="btn" href="./assets/Pdfs/Royalty Era Bio.pdf" download="Royalty Era Bio" target="_blank">Download Bio <i class="fa-regular fa-file"></i></a>
                    </div>
                    <div class="social_icons">
                        <a href="https://www.instagram.com/royalty_era/" class="icon" target="_blank"><i class="fa-brands fa-instagram";></i></a>
                        <a href="https://www.facebook.com/RoyaltyEra/" class="icon" target="_blank"><i class="fa-brands fa-facebook-f";></i></a>
                        <a href="https://wa.me/message/OGX7B2IGQ2HVD1" class="icon" target="_blank"><i class="fa-brands fa-whatsapp";></i></a>
                    </div>
                </div>
                <div class="featured-image">
                    <div class="image">
                        <img src="assets/Images/Tshepo Kunene.jpg" alt="avatar">
                    </div>
                </div>
                <div class="scroll-icon-box">
                   <a href="#about" class="scroll-btn">
                        <p>Scroll Down </p>
                        <i class="fa-solid fa-caret-down"></i>
                   </a> 
                </div>

            </section>

            <!----ABOUT BOX---->

            <section class="section" id="about">
                <div class="top-header">
                    <h1>About Me</h1>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="about-info">
                            <h3>My introduction</h3>
                            <p>As a versatile visual artist, I express myself through various mediums, including photography, videography, and retouching. These tools allow me to delve into new ideas, cultures, and locations as I travel and meet diverse groups of people. Through my lens, I capture not just images but also the essence of my experiences, weaving together narratives that reflect the beauty and complexity of the world around me. My work is a reflection of my curiosity and passion for exploration, constantly pushing me to innovate and grow as an artist.</p>
                            <div class="about-btn">
                                <a class="btn" href="./assets/Pdfs/Royalty Era Portfolio.png" download="Royalty Era Portfolio" target="_blank">Download Portfolio <i class="fa-solid fa-file-arrow-down"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="skills-box">
                            <div class="skills-header">
                                <h3>Photography</h3>
                            </div>
                            <div class="skills-list">
                                <span class="skill-btn" onclick="window.location.href ='gallery.html#Portrait';">Portraits</span>
                                <span class="skill-btn" onclick="window.location.href ='gallery.html#Fashion';">Fashion</span>
                                <span class="skill-btn" onclick="window.location.href ='gallery.html#Events';">Events</span>
                                <span class="skill-btn" onclick="window.location.href ='gallery.html#Wedding';">Wedding</span>
                                <span class="skill-btn" onclick="window.location.href ='gallery.html#Lifestyle';">Lifestyle</span>
                                <span class="skill-btn" onclick="window.location.href ='gallery.html#Beauty';">Beauty</span>
                            </div>
                        </div>
                        <div class="skills-box">
                            <div class="skills-header">
                                <h3>Videography</h3>
                            </div>
                            <div class="skills-list">
                                <span>Wedding</span>
                                <span>Fashion</span>
                                <span>Events</span>
                                <span>Lifestyle</span>
                            </div>
                        </div>
                        <div class="skills-box">
                            <div class="skills-header">
                                <h3>Retouching</h3>
                            </div>
                            <div class="skills-list">
                                <span>Frequency Separation</span>
                                <span>Texture Reconstruction</span>
                                <span>Dodge and Burn</span>
                                <span>Color Grading</span>
                                <span>Lips</span>
                                <span>Eyes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!----PROJECT BOX---->

            <section class="section" id="projects">
                <div class="top-header">
                    <h1>Projects</h1>
                </div>
                <div class="project-container">
                    <div class="project-box" onclick="window.location.href ='gallery.html';">
                        <i class="fa-solid fa-award"></i>
                        <h3>Gallery</h3>
                        <label>Photography Services Offered</label>   
                    </div>
                    <div class="project-box" onclick="window.location.href ='clients.html';">
                        <i class="fa-solid fa-users"></i>
                        <h3>Clientele</h3>
                        <label>Happy Clients</label>
                    </div>
                    <div class="project-box" onclick="window.location.href ='experience.html';">
                        <i class="fa-solid fa-hourglass-half"></i>
                        <h3>Experience</h3>
                        <label>6+ Years in the field</label>   
                    </div>
                </div>
            </section>

            <!----CONTACT BOX---->

            <section class="section" id="contact">
                <div class="top-header">
                    <h1 class="form-heading">Get in touch</h1>
                    <span>Do you have a photography project in mind? Reach out to me here!</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="contact-info">
                            <h2>Contact Details</h2>
                            <p><i class="fa-solid fa-phone"></i> Phone: <a class="phone-number" href="tel:+27747948790">+2774 794 8730</a></p>
                            <p><i class="fa-regular fa-envelope"></i> Email: <a class="phone-number" href="mailto:royaltyeraenquiries@gmail.com">royaltyeraenquiries@gmail.com</a></p>
                        </div>
                    </div>

                    <!----CONTACT FORM---->
                    <div class="col container form-control">
                        <form class="contact-form" name="form" action = "sendmail.php" onsubmit="return validateForm()" method="post">
                            <div class="form-inputs">
                                <input type="text" autocomplete="off" name="name" class="contact-form-input" id="name" placeholder="Name">
                                <input type="email" autocomplete="off" name="email" class="contact-form-input" id="email" placeholder="Email">
                                <input type="text" autocomplete="off" name="subject" class="contact-form-input" id="subject" placeholder="Subject">
                            </div>
                            <div class="text-area">
                                <textarea class="contact-form-input contact-form-textarea" name="message" id="message" placeholder="Message"></textarea>
                            </div>
                            <div class="form-button">
                                <button type="submit" name="sendmail" class="form-submit-btn" onclick="openPopup()">Send</button>
                                <div class="popup" id="popup">
                                     <img src="./assets/Icons/Checkmark Icon.png" alt="">
                                     <h2>Thank You!</h2>
                                     <p>Your details have been successfully submitted.</p>
                                     <button type="button" onclick="closePopup()">OK</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </main>


    <!--FOOTER-->
    
    <footer>
        <div class="top-footer">
            <p>Tshepo Kunene .</p>
        </div>
        <div class="middle-footer">
            <ul class="footer-menu">
                <li class="footer_menu_list">
                    <a href="#home">Home</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#about">About</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#projects">Projects</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div class="footer-social-icons">
            <a href="https://www.instagram.com/royalty_era/" class="icon" target="_blank"><i class="fa-brands fa-instagram" style="color: #000000;"></i></a>
            <a href="https://www.facebook.com/RoyaltyEra/" class="icon" target="_blank"><i class="fa-brands fa-facebook-f" style="color: #000000;"></i></a>
            <a href="https://wa.me/message/OGX7B2IGQ2HVD1" class="icon" target="_blank"><i class="fa-brands fa-whatsapp" style="color: #000000;"></i></a>
        </div>
        <div class="bottom-footer">
            <p>Copyright &copy; <a href="#home" style="text-decoration: none;">Tshepo Kunene</a> - All rights reserved</p>
        </div>
    </footer>
    </div>

    <!---SENDING MESSAGE-->
    <script src="https://smtpjs.com/v3/smtp.js"></script>

    <!--TYPING JS LINK-->
    <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

    <!--SCROLL REVEAL JS LINK-->
    <script src="https://unpkg.com/scrollreveal"></script>

    <!--MAIN JS-->
    <script src="assets/js/main.js"></script>    
    
    <!-- CLIENTS -->
    <script src="/assets/js/clients.js"></script>

    <!--TOGGLE DARK MODE PATH-->
    <script src="/assets/js/dark-mode.js"></script>

</body>

</html>