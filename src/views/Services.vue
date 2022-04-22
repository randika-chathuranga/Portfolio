<template>
  <section class="portfolio">
                <h4 class="display-2 text-center">Portfolio</h4>
                <v-slide-group
                        class="pa-4"
                        active-class="success"
                        show-arrows
                >
                    <v-slide-item v-for="(slider,index) in sliders" :key="index">
                        <v-card height="250" width="250" class="mx-2">
                            <img height="100%" width="100%" :src="slider" alt="">
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </section>
</template>

<script>
export default {
  data: () => ({
    sliders:[
                'https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9-1520x800.png',
                'https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-ways-seo-web-design-go-together-5e2945dd5df37.png',
                'https://data.whicdn.com/images/350420216/original.jpg?t=1605047796',
                'https://1zylgb20pxi7mw2sdr8i4a14-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/projectleft.jpg',
                'https://cdn.dribbble.com/users/702789/screenshots/14012516/media/561a8b7e8cbe51c72c18f4ef0dc72676.png?compress=1&resize=400x300',
                'https://cdn.dribbble.com/users/2399102/screenshots/15522177/media/346d890482d929610d316938e7d48629.png?compress=1&resize=400x300',
            ]
  })
};
</script>
