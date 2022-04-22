<template>
   <section class="contact-us pt-10">
                <v-img class="pt-10" gradient="to bottom, rgb(166 199 156), rgb(227 227 227 / 86%)" src="https://img.freepik.com/free-photo/contact-us_36325-2135.jpg?size=626&ext=jpg">
                    <v-container>
                        <h4 class="display-1 text-center mb-5">
                            I’m a designer, based in San Francisco. Currently a freelancer. You can see my hobbies on @Jack-Co and some photos on me too.
                        </h4>
                        <v-divider />
                        <br>
                        <v-row>
                            <v-col cols="12" lg="6">
                                <v-card-title>DROP A LINE</v-card-title>
                                <v-form>
                                    <v-text-field label="Your Name" />
                                    <v-text-field label="Email" />
                                    <v-text-field label="Subject" />
                                    <v-textarea label="Message" />
                                    <v-btn large color="green" class="white--text">Send Message</v-btn>
                                </v-form>
                            </v-col>
                            <v-col cols="12" lg="3" offset="2">
                                <v-card-title>CONTACT ME</v-card-title>
                                <v-card-text>
                                    4657 Franklin Avenue, ARCH CAPE <br>
                                    +361-883-3218 <br>
                                    hello@jac-co.com <br>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn large elevation="5" color="pink" class="white--text mt-10 px-10 py-5">Download
                                        Resume
                                        <v-icon>mdi-download</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-footer class="mt-4">
                        <v-col
                                class="text-center"
                                cols="12"
                        >
                            <strong>Copyright ©{{ new Date().getFullYear() }} All rights reserved | This is made by
                                <a href="" class="green--text">Web Burden</a>
                            </strong>
                        </v-col>
                    </v-footer>
                </v-img>
            </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>
