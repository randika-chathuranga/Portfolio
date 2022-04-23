<template>
    <section class="experiance py-6">
                <v-img class="pa-10" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                       src="https://designshack.net/wp-content/uploads/Home-office.jpg">
                    <v-container>
                        <h4 class="display-2 text-center">Experience</h4>
                        <v-timeline>
                            <v-timeline-item v-for="(exper,index) in experience" :key="index"
                                             :color="index % 2 === 0 ?'pink':'green'">
                                <v-card class="rounded-xl">
                                    <v-card-title :color="index % 2 === 0 ?'pink':'green'">
                                        {{exper.title}}
                                    </v-card-title>
                                    <v-card-text>
                                        <b>{{exper.date}}</b><br>
                                        <b>@{{exper.institute}}</b><br>
                                        {{exper.decription}}
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-container>
                </v-img>

            </section>
</template>

<script>
export default {
  data: () => ({    
            experience: [
                {
                    title: 'User Experience Designer',
                    date: 'March 2020 - Present',
                    institute: 'Code X',
                    decription: 'I have the ability to create an amazing Dashboard/Admin UI UX for your website or to re-create your existing web/app into a modernized one'
                },
                {
                    title: 'Web Developer',
                    date: 'January 2019 - Present',
                    institute: 'Code X',
                    decription: 'I am Randika, A Professional Frontend  Developer providing reliable web services for a custom website since 2019.'
                },
                {
                    title: 'Illustration Artist',
                    date: 'September 2018 - Present',
                    institute: 'Code X',
                    decription: 'I will draw or paint what you need. I can design it from scratch but if you already have an idea, thats cool too.'
                },
                {
                    title: 'Graphic Designer',
                    date: 'March 2018 - Present',
                    institute: 'Code X',
                    decription: 'I am an expert in Photoshop and I can do pretty much everything with images. Labels, banners, logos, packaging, vector designs, flyers, business cards.'
                },
            ],
            
        }),
}
</script>