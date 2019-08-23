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
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
