<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="copyright" content="Transonline Web Technologies">
    <meta name="description" content="Your leading parner in software and web applications development in Kenya and Africa at large.">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/images/logo.png') }}"/>
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/font-awesome.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/fl-bigmug.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/materialdesignicons.css') }}">
    <title>Trans Online Web | Your digital transformation starts here</title>

    <style>
        .btn-to-top {
          width: 60px;
          height: 60px;
          padding: 10px 16px;
          border-radius: 50%;
          font-size: 22px;
          line-height: 22px;
        }
    </style>
</head>
<body>
<div class="preloader">
    <div class="preloader-body">
        <div class="cssload-container">
            <div class="cssload-speeding-wheel"></div>
        </div>
        <p>Loading...</p>
    </div>
</div>
<div class="page" id="app">
    <header class="section page-header">
        <!--RD Navbar-->
        <div class="rd-navbar-wrap  ">
            <nav class="rd-navbar rd-navbar-trnsparent rd-navbar-classic" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-lg-stick-up-offset="46px" data-xl-stick-up-offset="46px" data-xxl-stick-up-offset="46px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                <div class="rd-navbar-collapse-toggle rd-navbar-fixed-element-1" data-rd-navbar-toggle=".rd-navbar-collapse"><span></span></div>
                <div class="rd-navbar-aside-outer rd-navbar-aside-outer-transparent rd-navbar-collapse">
                    <div class="rd-navbar-aside d-flex justify-content-between flex-column flex-lg-row">
                        <ul class="list-inline list-inline-md">
                            <li>
                                <div class="unit unit-spacing-xs align-items-center">
                                    <div class="unit-body heading-5"><a class="text-third divider-right-1" href="#">+254748621900</a></div>
                                </div>
                            </li>
                            <li>
                                <div class="unit unit-spacing-xs align-items-center">
                                    <div class="unit-body small-text"><a class="text-gray-600" href="#"><span class="__cf_email__" data-cfemail="4632232b362a273223062b2928353223346825292b">info@twtechnologies.africa</span></a></div>
                                </div>
                            </li>
                        </ul>
                        <ul class="list-inline list-custom">
                            <li>
                                <div class="align-items-center"><a class="text-gray-300" href="#"><span class="icon mdi mdi-facebook icon-sm"></span></a></div>
                            </li>
                            <li>
                                <div class="align-items-center"><a class="text-gray-300" href="#"><span class="icon mdi mdi-instagram icon-xs"></span></a></div>
                            </li>
                            <li>
                                <div class="align-items-center"><a class="text-gray-300" href="#"><span class="icon mdi mdi-youtube-play icon-sm"></span></a></div>
                            </li>
                            <li>
                                <div class="align-items-center"><a class="text-gray-300" href="#"><span class="icon mdi mdi-twitter icon-sm"></span></a></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rd-navbar-main-outer">
                    <div class="rd-navbar-main">
                        <!--RD Navbar Panel-->
                        <div class="rd-navbar-panel">
                            <!--RD Navbar Toggle-->
                            <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                            <!--RD Navbar Brand-->
                            <div class="rd-navbar-brand">
                                <!--Brand--><a class="brand" href="/"><img class="brand-logo-dark" src="assets/images/fulllogo.png" alt="img"  /><img class="brand-logo-light img-responsive" src="assets/images/logo-inverse-160x40.png" alt="img"  /></a>
                            </div>
                        </div>
                        <div class="rd-navbar-main-element">
                            <div class="rd-navbar-nav-wrap">
                                <ul class="rd-navbar-nav">
                                    <li class="rd-nav-item active"><router-link class="rd-nav-link" to="/">Home</router-link>
                                    </li>
                                    <li class="rd-nav-item"><router-link class="rd-nav-link" to="/about">About</router-link>

                                        <ul class="rd-menu rd-navbar-dropdown">
                                            <li class="rd-dropdown-item"><router-link class="rd-dropdown-link" to="/about">About Us</router-link></li>
                                            <li class="rd-dropdown-item"><router-link class="rd-dropdown-link" to="/company">Company Profile</router-link></li>
                                            <li class="rd-dropdown-item"><router-link class="rd-dropdown-link" to="/team">Our Team</router-link></li>
                                            <li class="rd-dropdown-item"><router-link class="rd-dropdown-link" to="/careers">Careers</router-link></li>
                                            <li class="rd-dropdown-item"><router-link class="rd-dropdown-link" to="/referral">TW Technologies Referral Program</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="rd-nav-item"><router-link class="rd-nav-link" to="/services">Services</router-link>
                                        <ul class="rd-menu rd-navbar-dropdown">
                                            <li class="rd-dropdown-item"><router-link class="rd-dropdown-link" to="/services">Our Services</router-link></li>
                                            <li class="rd-dropdown-item"><router-link class="rd-dropdown-link" to="/portfolio">Our Work</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="rd-nav-item"><router-link class="rd-nav-link" to="/blog">Blog</router-link></li>
                                    <li class="rd-nav-item"><router-link class="rd-nav-link" to="/contact">Contacts</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <div>
        <router-view></router-view>
        <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-primary btn-to-top"><i class="fa fa-chevron-up"></i></button>
    </back-to-top>
    </div>
    
    <footer class="section footer-classic">
        <div class="container">
            <div class="row row-40">
                <div class="col-sm-6 col-lg-3 text-center text-sm-left wow fadeInUp" data-wow-delay=".04s"><a href="#"><img src="assets/images/fulllogosmall.png" alt="img" /></a>
                    <p class="font-weight-light text-gray-620 lh-1 box-3 offset-top-20"> <span class="font-weight-bold text-third">Transonline Web </span> is a  company specializing in providing software development, web design & development, graphic design, and a wide range of customized software services. We are a command of professionals, who like what we do.</p>
                </div>
                <div class="col-sm-6 col-lg-3 block-lg-4 text-center text-sm-left wow fadeInUp" data-wow-delay=".04s">
                    <h6 class="font-weight-regular text-third">Quick links</h6>
                    <ul class="offset-top-25">
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/">Home</router-link></li>
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/about">About</router-link></li>
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/services">Services</router-link></li>
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/blog">Blog</router-link></li>
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/contact">Contacts</router-link></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-lg-3 text-center text-sm-left wow fadeInUp" data-wow-delay=".04s">
                    <h6 class="font-weight-regular text-third">Our Services</h6>
                    <ul class="offset-top-25">
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/services">Software Development</router-link></li>
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/services">Web Development</router-link></li>
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/services">Web Design</router-link></li>
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/services">Internet Of Things</router-link></li>
                        <li><router-link class="font-weight-light text-gray-620 lh-2" to="/services">Virtual reality</router-link></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-lg-3 text-center text-sm-left wow fadeInUp" data-wow-delay=".04s">
                    <h6 class="font-weight-regular text-third">Latest news</h6>
                    
                    <h6><router-link class="font-weight-regular text-gray-650" to="blog">Check Our blog for the latest in the world of tech</router-link></h6>
                </div>
            </div>
            <div class="footer-classic-bottom">
                <p class="rights"><span>&copy;&nbsp; </span><span class="copyright-year"></span><span>&nbsp;</span><span>Trans Online Web</span><span>.&nbsp;</span><span>All Rights Reserved.</span></p>
                <p class="rights-2"><a href="privacy-policy.html">Privacy Policy</a></p>
            </div>
        </div>
    </footer>
</div>



<script src="{{ asset('js/app.js') }}" defer></script>
<script src="{{ asset('assets/js/script.js') }}" defer></script>
<script src="{{ asset('assets/js/PageTransition.js') }}" defer></script>
<script src="{{ asset('assets/js/Popper.js') }}" defer></script>
<script src="{{ asset('assets/js/WOW.js') }}" defer></script>
<script src="{{ asset('assets/js/TouchSwipe.js') }}" defer></script>
<script src="{{ asset('assets/js/Util.js') }}" defer></script>
<script src="{{ asset('assets/js/UIToTop.js') }}" defer></script>
<script src="{{ asset('assets/js/Swiper.js') }}" defer></script>
<script src="{{ asset('assets/js/ResizeEvent.js') }}" defer></script>
<script src="{{ asset('assets/js/Regula.js') }}" defer></script>
<script src="{{ asset('assets/js/RDInputLabel.js') }}" defer></script>
<script src="{{ asset('assets/js/RD-Navbar.js') }}" defer></script>
<script src="{{ asset('assets/js/ProgressCircle.js') }}" defer></script>
<script src="{{ asset('assets/js/Parallax.js') }}" defer></script>
<script src="{{ asset('assets/js/PageTransition.js') }}" defer></script>
<script src="{{ asset('assets/js/Owl-carousel.js') }}" defer></script>
<script src="{{ asset('assets/js/Mousewheel.js') }}" defer></script>
<script src="{{ asset('assets/js/Migrate.js') }}" defer></script>
<script src="{{ asset('assets/js/Lightgallery.js') }}" defer></script>
<script src="{{ asset('assets/js/Isotope.js') }}" defer></script>
<script src="{{ asset('assets/js/Form.js') }}" defer></script>
<script src="{{ asset('assets/js/Easing.js') }}" defer></script>
<script src="{{ asset('assets/js/Device.js') }}" defer></script>
<script src="{{ asset('assets/js/Cookie.js') }}" defer></script>
<script src="{{ asset('assets/js/Countdown.js') }}" defer></script>
<script src="{{ asset('assets/js/Counter.js') }}" defer></script>

{{--<a href="#" id="ui-to-top" class="ui-to-top fa fa-angle-up active"></a>--}}
</body>
</html>
