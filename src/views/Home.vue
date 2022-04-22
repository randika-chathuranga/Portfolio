<template>
  <section class="intro-section" id="home">
                <v-row class="align-center px-10" style="height: 690px">
                    <v-col lg="6" cols="6" class="pa-6 font-weight-bold py-16">
                        <h2 class="display-3">Visual <span class="green--text">Design</span> & <span class="pink--text">Art</span>
                            Director</h2>
                        <v-subheader>Hi, I am Jack, focusing on creating emotional experiences.</v-subheader>
                        <br>
                        <br>
                        <v-btn large elevation="5" color="green" class="white--text mt-10 px-10 py-5">Hire Me</v-btn>
                        <v-btn large elevation="5" color="pink" class="white--text mt-10 ml-10 px-10 py-5">Contact
                        </v-btn>
                        <v-row class="mt-16">
                            <v-chip class="px-4 ma-3" color="primary">
                                <v-icon left size="20">mdi-facebook</v-icon>
                                Facebook
                            </v-chip>
                            <v-chip class="px-4 ma-3 white--text" color="#01ff56">
                                <v-icon left size="20">mdi-whatsapp</v-icon>
                                Linkedin
                            </v-chip>
                            <v-chip class="px-4 ma-3" color="info">
                                <v-icon left size="20">mdi-linkedin</v-icon>
                                Linkedin
                            </v-chip>
                            <v-chip class="px-4 ma-3" color="dark">
                                <v-icon left size="20">mdi-github</v-icon>
                                Linkedin
                            </v-chip>
                        </v-row>
                    </v-col>
                    <v-col lg="6" cols="6">
                        <v-img src="https://preview.colorlib.com/theme/jackco/assets/img/hero/xhero_right.png.pagespeed.ic.U76_mb-Zcf.webp"></v-img>
                    </v-col>
                </v-row>
            </section>
</template>

<script>
export default {
  name: "Home",
};
</script>