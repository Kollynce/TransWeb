<template>
    <div>
        <!-- Breadcrumbs-->
        <section class="breadcrumbs-custom">
            <div class="container">
                <ul class="breadcrumbs-custom-path">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="active">Services</li>
                </ul>
            </div>
        </section>
        <!-- list of our servises -->
        <section class="section section-md bg-default">
            <h2 class="font-weight-sbold text-center wow fadeIn" data-wow-delay=".3s">Our Services</h2>
            <h6 class="font-weight-light text-center box-1 text-gray-670 wow fadeIn" data-wow-delay=".4s">We provide various <span class="font-weight-bold">services</span> to help our clients handle different issues.</h6>
            <div class="container pt-5">
                <div class="row row-50">
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                          <div class="unit-left">
                              <router-link class="box-icon-classic-svg" to="software">
                                  <div id="svg-size" >
                                      <img src="assets/images/software.svg" alt="">
                                  </div>
                              </router-link>
                          </div>
                          <div class="unit-body">
                              <h5 class="box-icon-classic-title"><router-link to="software">Software Development</router-link></h5>
                              <p class="box-icon-classic-text">As a software development company we develop are unique applications, addressing the specific business needs of our clients. We have developed a reputation for providing high quality, cost-effective custom applications for several ranges of businesses.</p><router-link class="button button-icon button-icon-right text-primary button-lg" to="software"><span>Learn More</span><span class="arrow">
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                  <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                </svg>
                                </span></router-link>
                          </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><router-link class="box-icon-classic-svg" to="Web-Design">
                                <div id="svg-size" >
                                    <img src="assets/images/computer.svg" alt="">
                                </div>
                            </router-link>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><router-link to="Web-Design">Web Design & Development</router-link></h5>
                                <p class="box-icon-classic-text">We offer customer oriented web design and development services following the latest trends and technologies in the industry. We have achieved a reputation in serving diverse industries by working on intricate and elaborate website portals which are dynamic and operative.</p><router-link class="button button-icon button-icon-right text-primary button-lg" to="Web-Design"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></router-link>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><router-link class="box-icon-classic-svg" to="Mobile-App-Development">
                                <div id="svg-size" >
                                    <img src="assets/images/computer-graphic.svg" alt="">
                                </div>
                            </router-link>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><router-link to="Mobile-App-Development">Mobile Application Development</router-link></h5>
                                <p class="box-icon-classic-text">Numbers of smart phone users have greatly increased in the recent past and thus the need of a mobile app for business growth. TW Technologies delivers custom mobile application development solutions that are secure, scaleable and runs on any platform</p><router-link class="button button-icon button-icon-right text-primary button-lg" to="Mobile-App-Development"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></router-link>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><router-link class="box-icon-classic-svg" to="Web-Portals">
                                <div id="svg-size" >
                                    <img src="assets/images/web.svg" alt="">
                                </div>
                            </router-link>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><router-link to="Web-Portals">Web Portals</router-link></h5>
                                <p class="box-icon-classic-text">We design media-rich, mobile-friendly web portal solutions that help clients transform their business to the next level. <br> We ensure user satisfaction in B2B and B2C web portals. <br> Great experience in UI design, web portal development, and testing has been building up competencies to become the right partner for your web portal project.</p><router-link class="button button-icon button-icon-right text-primary button-lg" to="Web-Portals"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></router-link>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><router-link class="box-icon-classic-svg" to="Internet-of-Things">
                                <div id="svg-size" >
                                    <img src="assets/images/iot.svg" alt="">
                                </div>
                            </router-link>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><router-link to="Internet-of-Things">Internet of Things</router-link></h5>
                                <p class="box-icon-classic-text">TW Technologies offers strong technical expertise, ingenuity and innovative approaches to solving your business problems. Our deep understanding of all aspects of the development process enable us to work on IoT projects of any complexity. <br> We deliver flexible strategies, blended with high-security in order to manage new & diverse IoT devices.</p><router-link class="button button-icon button-icon-right text-primary button-lg" to="Internet-of-Things"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></router-link>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><router-link class="box-icon-classic-svg" to="Web-App-Development">
                                <div id="svg-size" >
                                    <img src="assets/images/eye.svg" alt="">
                                </div>
                            </router-link>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><router-link to="Web-App-Development">Web Application Development</router-link></h5>
                                <p class="box-icon-classic-text">A ‘Web Application Development’ is a business system or application delivered over the Web. Web applications utilise the interactive nature of websites to provide customised and interactive technologies; they deliver a more sophisticated & interactive experience than normal websites. We have been developing Web-based applications for many years and has the skills required to successfully deliver your online system.</p><router-link class="button button-icon button-icon-right text-primary button-lg" to="Web-App-Development"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></router-link>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><router-link class="box-icon-classic-svg" to="Artificial-Intelligence">
                                <div id="svg-size" >
                                    <img src="assets/images/ai.svg" alt="">
                                </div>
                            </router-link>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><router-link to="Artificial-Intelligence">Artificial Inteligence</router-link></h5>
                                <p class="box-icon-classic-text">Use of AI solutions accelerates your company’s digital transformation. When applied properly an AI system can reduce operational cost, improve efficiency and much more. TW Technologies builds custom solutions that provide operational and financial benefits. We use custom machine learning models and other AI-based software solutions to automate the operations across all departments: sales, finance, marketing, human resources, customer service, production, or any other.</p><router-link class="button button-icon button-icon-right text-primary button-lg" to="Artificial-Intelligence"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></router-link>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><router-link class="box-icon-classic-svg" to="Big-Data">
                                <div id="svg-size" >
                                    <img src="assets/images/database.svg" alt="">
                                </div>
                            </router-link>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><router-link to="Big-Data">Big Data</router-link></h5>
                                <p class="box-icon-classic-text">At TW Technologies we provide means to analyze data sets and draw conclusions about them which help organizations make informed business decisions. big data analytics offers various business benefits, including: More effective marketing, Better customer service, Improved operational efficiency & Competitive advantages over rivals.
                                We offer a comprehensive data analytics services to convert our customers’ historical and real-time, traditional and big data into actionable insights.</p><router-link class="button button-icon button-icon-right text-primary button-lg" to="Big-Data"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></router-link>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><router-link class="box-icon-classic-svg" to="Search-Engine-Optimization">
                                <div id="svg-size" >
                                    <img src="assets/images/solution.svg" alt="">
                                </div>
                            </router-link>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><router-link to="Search-Engine-Optimization">Search Engine Optimization</router-link></h5>
                                <p class="box-icon-classic-text">You want to get higher ranking, quality traffic and measurable results?
                                Search engine optimization is crucial to the success of the company.
                                For most websites, traffic that comes from search engines (i.e. ‘natural’ traffic) accounts for a large portion of their total traffic. At TW Technologies we understand how search engines work which is the first step of the process of improving a site’s search rankings. We always strive to remain updated with all SEO strategies so that your website is always ranked well with search engines. </p><router-link class="button button-icon button-icon-right text-primary button-lg" to="Search-Engine-Optimization"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></router-link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <!-- Technologies We Use  -->
        <section class="section-xl bg-gray-100">
          <h2 class="font-weight-sbold text-center wow fadeIn" data-wow-delay=".3s">Technologies We Use</h2>
            <h6 class="font-weight-light text-center box-1 text-gray-670 wow fadeIn" data-wow-delay=".4s">These are the <span class="font-weight-bold">Technologies </span> that we use.</h6>
            <div class="container pt-4">
                <div class="row row-50">
                    <div class="col-lg-5">
                        <div class="box-nina">
                            <h5 class="font-weight-sbold ls-1">Frontend</h5>
                            <h6 class="font-weight-light text-gray-650">HTML, CSS, JavaScript, Angular, React, Vue</h6>
                        </div>
                        <div class="box-nina">
                            <h5 class="font-weight-sbold ls-1">Backend</h5>
                            <h6 class="font-weight-light text-gray-650">PHP, Node.js, Laravel, Python, Django, Java, C#</h6>
                        </div>
                        <div class="box-nina">
                            <h5 class="font-weight-sbold ls-1">Mobile</h5>
                            <h6 class="font-weight-light text-gray-650">Kotline, Java, Flutter, Swift, Objective C</h6>
                        </div>
                        <div class="box-nina">
                            <h5 class="font-weight-sbold ls-1">Database</h5>
                            <h6 class="font-weight-light text-gray-650">MySQL, PostgreSQL, Microsoft SQL Server, SQLite, MongoDB, Redis, MariaDB, Oracle, Firebase</h6>
                        </div>
                        <div class="box-nina">
                            <h5 class="font-weight-sbold ls-1">Big Data</h5>
                            <h6 class="font-weight-light text-gray-650">Apache Hadoop, Apache Spark, Apache Cassandra, Apache Kafka, Apache Zookeeper, Amazon RedShift, Amazon DynamoDB, NoSQL Databases</h6>
                        </div>
                        <div class="box-nina mt-5">
                            <h5 class="font-weight-sbold ls-1">DevOps</h5>
                            <h6 class="font-weight-light text-gray-650">Docker, Kubernetes, Ansible, Chef, Puppet, Jenkins, GitLab CI/CD.</h6>
                        </div>
                      <div class="box-nina mt-5">
                            <h5 class="font-weight-sbold ls-1">CMS</h5>
                            <h6 class="font-weight-light text-gray-650">Pimcore, WordPress, SharePoint, Salesforce</h6>
                        </div>
                       
                    </div>
                    <div class="col-lg-7 text-center text-lg-left">
                      <img src="/images/band.jpg" class="pt-5" alt="img" width="670" height="510">
                      <img src="/images/code.jpg" class="pt-5" alt="img" width="670" height="510">
                    </div>
                </div>
            </div>
        </section>

          <!-- call to action -->
        <section class="section overflow-hidden bg-image" style="background-image: url(assets/images/bg-image-1-1920x476.jpg)">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 offset-top-70 text-center text-lg-center">
                            <h2 class="font-weight-sbold wow fadeIn" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeIn;">Schedule a free Consultation</h2>

                            <div class="group-btn text-center text-lg-center wow fadeIn" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeIn;"><a class="button button-primary button-lg"  href="/contact">Click Here!</a></div>
                        </div>
                    </div>
                </div>
        </section>
         <!-- call to action -->



    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>