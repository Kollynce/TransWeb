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
                              <p class="box-icon-classic-text">Search engine optimization (SEO) is the process of helping your customers connect with your business online.</p><router-link class="button button-icon button-icon-right text-primary button-lg" to="software"><span>Learn More</span><span class="arrow">
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                  <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                </svg>
                                </span></router-link>
                          </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><a class="box-icon-classic-svg" href="single-service.html">
                                <div id="svg-size" >
                                    <img src="assets/images/computer.svg" alt="">
                                </div>
                            </a>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><a href="single-service.html">Web Development</a></h5>
                                <p class="box-icon-classic-text">Our Email Marketing solutions will help you engage subscribers, nurture leads, and send beautiful, responsive emails.</p><a class="button button-icon button-icon-right text-primary button-lg" href="single-service.html"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></a>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><a class="box-icon-classic-svg" href="single-service.html">
                                <div id="svg-size" >
                                    <img src="assets/images/computer-graphic.svg" alt="">
                                </div>
                            </a>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><a href="single-service.html">Wed Design</a></h5>
                                <p class="box-icon-classic-text">Take advantage of online advertising to improve your internet marketing efforts with our AdWords campaigns.</p><a class="button button-icon button-icon-right text-primary button-lg" href="single-service.html"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></a>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><a class="box-icon-classic-svg" href="single-service.html">
                                <div id="svg-size" >
                                    <img src="assets/images/web.svg" alt="">
                                </div>
                            </a>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><a href="single-service.html">Web Portals</a></h5>
                                <p class="box-icon-classic-text">Take advantage of online advertising to improve your internet marketing efforts with our AdWords campaigns.</p><a class="button button-icon button-icon-right text-primary button-lg" href="single-service.html"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></a>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><a class="box-icon-classic-svg" href="single-service.html">
                                <div id="svg-size" >
                                    <img src="assets/images/iot.svg" alt="">
                                </div>
                            </a>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><a href="single-service.html">Internet of Things</a></h5>
                                <p class="box-icon-classic-text">Take advantage of online advertising to improve your internet marketing efforts with our AdWords campaigns.</p><a class="button button-icon button-icon-right text-primary button-lg" href="single-service.html"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></a>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><a class="box-icon-classic-svg" href="single-service.html">
                                <div id="svg-size" >
                                    <img src="assets/images/eye.svg" alt="">
                                </div>
                            </a>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><a href="single-service.html">Virtual Raelity</a></h5>
                                <p class="box-icon-classic-text">Take advantage of online advertising to improve your internet marketing efforts with our AdWords campaigns.</p><a class="button button-icon button-icon-right text-primary button-lg" href="single-service.html"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></a>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><a class="box-icon-classic-svg" href="single-service.html">
                                <div id="svg-size" >
                                    <img src="assets/images/ai.svg" alt="">
                                </div>
                            </a>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><a href="single-service.html">Artificial Inteligence</a></h5>
                                <p class="box-icon-classic-text">Take advantage of online advertising to improve your internet marketing efforts with our AdWords campaigns.</p><a class="button button-icon button-icon-right text-primary button-lg" href="single-service.html"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></a>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><a class="box-icon-classic-svg" href="single-service.html">
                                <div id="svg-size" >
                                    <img src="assets/images/database.svg" alt="">
                                </div>
                            </a>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><a href="single-service.html">Big Data</a></h5>
                                <p class="box-icon-classic-text">Take advantage of online advertising to improve your internet marketing efforts with our AdWords campaigns.</p><a class="button button-icon button-icon-right text-primary button-lg" href="single-service.html"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></a>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <article class="box-icon-classic">
                            <div class="unit-left"><a class="box-icon-classic-svg" href="single-service.html">
                                <div id="svg-size" >
                                    <img src="assets/images/solution.svg" alt="">
                                </div>
                            </a>
                            </div>
                            <div class="unit-body">
                                <h5 class="box-icon-classic-title"><a href="single-service.html">Programming Solutions</a></h5>
                                <p class="box-icon-classic-text">Take advantage of online advertising to improve your internet marketing efforts with our AdWords campaigns.</p><a class="button button-icon button-icon-right text-primary button-lg" href="single-service.html"><span>Learn More</span><span class="arrow">
                                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none"  >
                                    <path d="M7.29111 0.146484C7.48168 -0.048828 7.79084 -0.048828 7.98142 0.146484L10.8571 3.09173C10.9196 3.15582 10.9617 3.23296 10.9832 3.31457C11.0026 3.38842 11.0052 3.466 10.991 3.54082C10.9736 3.63671 10.9295 3.72845 10.8571 3.8026L7.98142 6.85356C7.79084 7.04881 7.48168 7.04881 7.29111 6.85356C7.10042 6.65825 7.10042 6.34172 7.29111 6.14641L9.42663 3.85357H0.488175C0.218583 3.85357 1.7879e-06 3.62969 1.7879e-06 3.35357C1.7879e-06 3.07745 0.218583 2.85357 0.488175 2.85357H9.24368L7.29111 0.853575C7.10042 0.658324 7.10042 0.341735 7.29111 0.146484Z" fill="#3B6D93"></path>
                                  </svg></span></a>
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
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
