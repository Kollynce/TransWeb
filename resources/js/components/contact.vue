<template>
    <div>
        <!-- Breadcrumbs-->
        <section class="breadcrumbs-custom">
            <div class="container">
                <ul class="breadcrumbs-custom-path">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="active">Contact</li>
                </ul>
            </div>
        </section>

        <section class="section section-md bg-gray-100 divider-top-1 offset-top-60-3">
            <div class="container">
                <div class="row row-50">
                    <div class="col-lg-6 text-center text-lg-left">
                        <h2 class="font-weight-sbold wow fadeIn" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeIn;">Get in touch</h2>
                        <h6 class="font-weight-light wow fadeIn" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;">Please feel free to contact us using form below.</h6>
                        <!--RD Mailform-->
                        <form class="rd-form rd-mailform rd-mailform-custom offset-top-0 offset-top-36" data-form-output="form-output-global" data-form-type="contact" novalidate="novalidate" @submit.prevent="mail" @keydown="form.onKeydown($event)">
                            <div class="form-wrap form-wrap-2">
                                <input v-model="form.name" class="form-input form-control" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Your name" type="text" name="name">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-wrap form-wrap-2">
                                <input v-model="form.email" class="form-input form-control" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Your email" type="email" name="email">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                            <div class="form-wrap form-wrap-2">
                                <input v-model="form.phone"  class="form-input form-control" :class="{ 'is-invalid': form.errors.has('phone') }" placeholder="Your Phone" type="text" name="phone">
                                <has-error :form="form" field="phone"></has-error>
                            </div>
                            <div class="form-wrap form-wrap-2">
                                <textarea v-model="form.message" class="form-input form-control" :class="{ 'is-invalid': form.errors.has('message') }" placeholder="Your message" name="message"></textarea>
                                <has-error :form="form" field="message"></has-error>
                            </div>
                            <button class="button button-block button-primary" type="submit">Send Message</button>
                        </form>
                        <ul class="list-custom-2 offset-top-36">
                            <li><span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0C3.56364 0 0 3.56364 0 8C0 12.4364 3.56364 16 8 16C12.4364 16 16 12.4364 16 8C16 3.56364 12.4364 0 8 0ZM12.6182 5.49091L6.8 11.5273C6.72727 11.6 6.65455 11.6364 6.54545 11.6364C6.43636 11.6364 6.32727 11.6 6.29091 11.5273L3.45455 8.47273L3.38182 8.4C3.30909 8.32727 3.27273 8.21818 3.27273 8.14545C3.27273 8.07273 3.30909 7.96364 3.38182 7.89091L3.89091 7.38182C4.03636 7.23636 4.25455 7.23636 4.4 7.38182L4.43636 7.41818L6.43636 9.56364C6.50909 9.63636 6.61818 9.63636 6.69091 9.56364L11.5636 4.50909H11.6C11.7455 4.36364 11.9636 4.36364 12.1091 4.50909L12.6182 5.01818C12.7636 5.12727 12.7636 5.34545 12.6182 5.49091Z" fill="#4173F2"></path>
                        </svg></span><span class="text-third">Your data is always secure.</span></li>
                        </ul>
                    </div>
                    <div class="col-lg-6 block-lg-3 text-center text-lg-left">
                        <h2 class="font-weight-sbold wow fadeIn" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeIn;">Contact Information</h2>
                        <h5 class="font-weight-sbold ls-1">Address</h5>
                        <h6 class="font-weight-light text-gray-650">Nairobi,Kenya 46499-00100</h6>
                        <h5 class="font-weight-sbold ls-1 offset-top-36">Phones</h5>
                        <h6 class="font-weight-light text-gray-650">Mobile:&nbsp;<a href="tel:#">+254748621900</a></h6>
                        <h5 class="font-weight-sbold ls-1 offset-top-36">E-mail</h5>
                        <h6 class="font-weight-light text-gray-650"><a href="#"><span class="__cf_email__">email: &nbsp;info@twtechnologies.africa</span></a></h6>
                        <ul class="list-inline list-custom-2 offset-top-40">
                            <li>
                                <div class="align-items-center"><a class="text-gray-300" href="https://www.facebook.com/TechnologiesTw/"><span class="icon mdi mdi-facebook" style="font-size: 22px;"></span></a></div>
                            </li>
                            <li>
                                <div class="align-items-center"><a class="text-gray-300" href="https://www.instagram.com/transonlineweb.ke/"><span class="icon mdi mdi-instagram" style="font-size: 22px;"></span></a></div>
                            </li>
                            <li>
                                <div class="align-items-center"><a class="text-gray-300" href="https://twitter.com/TwTechnologies"><span class="icon mdi mdi-twitter-box" style="font-size: 22px;"></span></a></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-lg bg-gray-100 divider-top-1">
                <div class="container">
                    <div class="row row-40">
                        <div class="col-lg-6 text-center text-lg-left">
                            <div class="box-video"><img class="box-video-image" src="../../../public/assets/images/FAQ.jpg" alt="img"><a class="box-video-play" href="https://youtu.be/7dTve2Hsl_0" data-lightgallery="item"></a>
                            </div>
                        </div>
                        <div class="col-lg-6 block-lg-3 text-center text-lg-left">
                            <h2 class="font-weight-sbold wow fadeIn" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeIn;">Frequently asked Questions</h2>
                            <h6 class="font-weight-light wow fadeIn" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;">Find answers to all your questions.</h6>
                            <!--Bootstrap collapse-->
                            <div class="card-group-custom card-group-custom-2 card-group-corporate" id="accordion1" role="tablist" aria-multiselectable="false">
                                <!--Bootstrap card-->
                                <article class="card card-custom card-corporate card-corporate-2">
                                    <div class="card-header" role="tab">
                                        <div class="card-title"><a id="accordion1-card-head-ryynysgu" data-toggle="collapse" data-parent="#accordion1" href="#accordion1-card-body-lwsjgqhv" aria-controls="accordion1-card-body-lwsjgqhv" aria-expanded="false" role="button" class="collapsed">What are the advantages of purchasing a website template?
                                            <div class="card-arrow"></div></a></div>
                                    </div>
                                    <div class="collapse" id="accordion1-card-body-lwsjgqhv" aria-labelledby="accordion1-card-head-ryynysgu" data-parent="#accordion1" role="tabpanel" style="">
                                        <div class="card-body">
                                            <p class="font-weight-light text-gray-770">The major advantage is price: You get a high quality design for just $20-$70. You don’t have to hire a web designer or web design studio. Second advantage is time frame: It usually takes 5-15 days for a good designer to produce a web page of such quality.</p>
                                        </div>
                                    </div>
                                </article>
                                <!--Bootstrap card-->
                                <article class="card card-custom card-corporate card-corporate-2">
                                    <div class="card-header" role="tab">
                                        <div class="card-title"><a class="collapsed" id="accordion1-card-head-onljnady" data-toggle="collapse" data-parent="#accordion1" href="#accordion1-card-body-ouimrpjb" aria-controls="accordion1-card-body-ouimrpjb" aria-expanded="false" role="button">In what formats are your templates available?
                                            <div class="card-arrow"></div></a></div>
                                    </div>
                                    <div class="collapse" id="accordion1-card-body-ouimrpjb" aria-labelledby="accordion1-card-head-onljnady" data-parent="#accordion1" role="tabpanel">
                                        <div class="card-body">
                                            <p class="font-weight-light text-gray-770">Website templates are available in Photoshop and HTML formats. Fonts are included with the Photoshop file. In most templates, HTML is compatible with Adobe® Dreamweaver® and Microsoft® FrontPage®.</p>
                                        </div>
                                    </div>
                                </article>
                                <!--Bootstrap card-->
                                <article class="card card-custom card-corporate card-corporate-2">
                                    <div class="card-header" role="tab">
                                        <div class="card-title"><a class="collapsed" id="accordion1-card-head-pqqkpaqc" data-toggle="collapse" data-parent="#accordion1" href="#accordion1-card-body-bevbmxjj" aria-controls="accordion1-card-body-bevbmxjj" aria-expanded="false" role="button">How can I pay for my order?
                                            <div class="card-arrow"></div></a></div>
                                    </div>
                                    <div class="collapse" id="accordion1-card-body-bevbmxjj" aria-labelledby="accordion1-card-head-pqqkpaqc" data-parent="#accordion1" role="tabpanel">
                                        <div class="card-body">
                                            <p class="font-weight-light text-gray-770">We accept Visa, MasterCard, and American Express credit and debit cards for your convenience.</p>
                                        </div>
                                    </div>
                                </article>
                                <!--Bootstrap card-->
                                <article class="card card-custom card-corporate card-corporate-2">
                                    <div class="card-header" role="tab">
                                        <div class="card-title"><a class="collapsed" id="accordion1-card-head-sweygofl" data-toggle="collapse" data-parent="#accordion1" href="#accordion1-card-body-bekdlkyi" aria-controls="accordion1-card-body-bekdlkyi" aria-expanded="false" role="button">Can I return an item?
                                            <div class="card-arrow"></div></a></div>
                                    </div>
                                    <div class="collapse" id="accordion1-card-body-bekdlkyi" aria-labelledby="accordion1-card-head-sweygofl" data-parent="#accordion1" role="tabpanel">
                                        <div class="card-body">
                                            <p class="font-weight-light text-gray-770">Please contact our administrators for more information on returning products purchased on our website.</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: new Form({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                })
            }
        },
        methods: {
            mail(){
                //console.log('submited');
                this.form.post('api/contact')
                .then(()=>{
                    Swal.fire({
                      position: 'center',
                      type: 'success',
                      title: 'Message sent successfully',
                      showConfirmButton: false,
                      timer: 1500
                    })
                    this.form.reset();
                })
                .catch(()=>{
                        
                });
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
