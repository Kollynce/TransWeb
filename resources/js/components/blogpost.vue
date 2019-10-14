<template>
    <div>
        <section class="breadcrumbs-custom">
            <div class="container">
                <ul class="breadcrumbs-custom-path">
                    <li><a href="home">Home</a></li>
                    <li><a href="services">Blog</a></li>
                    <li class="active">Post</li>
                </ul>
            </div>
        </section>

        <section class="section section-sm bg-default">
            <div class="container">
                <div class="row row-50">
                    <div class="col-lg-9 col-xl-8">
                        <!-- Single Post-->
                        <article class="post-single">
                            <h3 class="post-single-title">Achieving Success as a Small Business Owner</h3>
                            <div class="post-single-meta">
                                <div class="badge">News</div>
                                <time class="post-single-time" datetime="2019">July 11, 2019 at 10:41 am</time>
                            </div>
                            <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ultricies.</p><img src="assets/images/blog-post-1-770x500.jpg" alt="img" width="770" height="500"/>
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat.</p>
                            <p>Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque.</p><img src="assets/images/blog-post-2-770x500.jpg" alt="img" width="770" height="500"/>
                            <p>Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit.</p>
                            <p>Erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.</p>
                            <div class="post-single-footer group-middle">
                                <h5>Share this post</h5>
                                <div>
                                    <div class="group group-middle"><a class="link-social-1 icon mdi mdi-facebook" href="#"></a><a class="link-social-1 icon mdi mdi-linkedin" href="#"></a><a class="link-social-1 icon mdi mdi-google" href="#"></a></div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="col-lg-3 col-xl-4">
                        <!-- Box Info-->
                        <article class="box-info">
                            <h3 class="box-info-title">Author</h3>
                            <div class="box-info-inner"><img class="box-info-avatar" src="assets/images/owl-carousel-image-3-270x320.jpg" alt="img" width="180" height="180"/>
                                <div class="box-info-main">
                                    <h5 class="box-info-caption">Jack Smith</h5>
                                    <p>Lorem ipsum dolor sit amet, civibus perfecto ei nec, pro ignota oporteat ullamcorpe.</p>
                                </div>
                            </div>
                        </article>
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
