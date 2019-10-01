<template>
    <div>
        <!-- Breadcrumbs-->
        <section class="breadcrumbs-custom">
            <div class="container">
                <ul class="breadcrumbs-custom-path">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="active">Portfolio</li>
                </ul>
            </div>
        </section>
        <section class="section section-md bg-default">
            <h2 class="font-weight-sbold text-center wow fadeIn" data-wow-delay=".3s">Our Work</h2>
            <h6 class="font-weight-light text-center box-1 text-gray-670 wow fadeIn pb-3" data-wow-delay=".4s">These are some of our works</h6>
             <div class="container">
                 <div class="row row-50">
                     <div class="col-sm-6 col-lg-4 text-center text-sm-left wow fadeInRight" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;"><router-link class="overlay-img" to="/portfolio/baza"><img src="assets/images/baza.png" alt="img" width="370" height="360"></router-link>
                         <!-- <h5 class="font-weight-sbold ls-1 pt-2"><a href="blog-post.html">Baza - Bursary Application System</a></h5> -->
                         <h5 class="font-weight-sbold ls-1 pt-2"><router-link class="rd-nav-link" to="/portfolio/baza">Baza - Bursary Application System</router-link></h5>
                     </div>
                     <div class="col-sm-6 col-lg-4 text-center text-sm-left wow fadeInRight" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;"><router-link class="overlay-img" to="/portfolio/research-expert"><img src="assets/images/research.png" alt="img" width="370" height="260"></router-link>
                        <h5 class="font-weight-sbold ls-1 pt-2"><router-link class="rd-nav-link" to="/portfolio/research-expert">My Research Expert</router-link></h5>
                     </div>
                     <div class="col-sm-6 col-lg-4 text-center text-sm-left wow fadeInRight" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;"><router-link class="overlay-img" to="/portfolio/keja-digital"><img src="assets/images/keja.jpg" alt="img" width="370" height="260"></router-link>
                        <h5 class="font-weight-sbold ls-1 pt-2"><router-link class="rd-nav-link" to="/portfolio/keja-digital">Keja Digital</router-link></h5>
                     </div>
                     <div class="col-sm-6 col-lg-4 text-center text-sm-left wow fadeInRight" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;"><a class="overlay-img" href="blog-post.html"><img src="assets/images/news-image-03-370x260.jpg" alt="img" width="370" height="260"></a>
                         <h5 class="font-weight-sbold ls-1 pt-2"><a href="blog-post.html">Why Business Planning is Important</a></h5>
                     </div>
                     <div class="col-sm-6 col-lg-4 text-center text-sm-left wow fadeInRight" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;"><a class="overlay-img" href="blog-post.html"><img src="assets/images/news-image-03-370x260.jpg" alt="img" width="370" height="260"></a>
                         <h5 class="font-weight-sbold ls-1 pt-2"><a href="blog-post.html">Why Business Planning is Important</a></h5>
                     </div>
                     <div class="col-sm-6 col-lg-4 text-center text-sm-left wow fadeInRight" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;"><a class="overlay-img" href="blog-post.html"><img src="assets/images/news-image-03-370x260.jpg" alt="img" width="370" height="260"></a>
                         <h5 class="font-weight-sbold ls-1 pt-2"><a href="blog-post.html">Why Business Planning is Important</a></h5>
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
