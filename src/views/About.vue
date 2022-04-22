<template>
      <section class="about-me" id="about">
                <v-img class="pa-10" height="400" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                       src="https://designshack.net/wp-content/uploads/Home-office.jpg">
                    <v-row justify="center" class="align-center">
                        <v-col lg="6" cols="6">
                            <v-card class="text-center pa-6 rounded-lg" color="#e1e0e0c9" elevation="6">
                                <v-card-subtitle class="green--text">ABOUT MYSELF</v-card-subtitle>
                                <h2 class="display-1 font-weight-regular">
                                    I’m a Creative director based on New York, who loves clean, simple & unique design.
                                    I also enjoy crafting..
                                </h2>
                                <v-btn large elevation="5" color="pink" class="white--text mt-10 px-10 py-5">Download
                                    Resume
                                    <v-icon>mdi-download</v-icon>
                                </v-btn>
                            </v-card>
                        </v-col>
                        <v-col lg="6" cols="6">
                            <v-card class="pa-6 rounded-lg" color="#e1e0e0c9" elevation="6">
                                <div class="py-1" v-for="(item,index) in items" :key="index">
                                    <label>{{ item.title }}</label>
                                    <v-progress-linear
                                            :color="item.color"
                                            height="10"
                                            :value="item.value"
                                    ></v-progress-linear>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-img>
            </section>
</template>

<script>
export default {
   data: () => ({
            drawer: null,
            items: [
                {title: 'HTML', value: 100, color: 'light-blue'},
                {title: 'CSS', value: 100, color: 'deep-orange'},
                {title: 'Javascript', value: 70, color: 'light-green'},
                {title: 'Vuejs', value: 80, color: 'blue'},
                {title: 'Vuetify', value: 90, color: 'black'},
                {title: 'PHP', value: 100, color: 'red'},
            ]
        }),
}
</script>