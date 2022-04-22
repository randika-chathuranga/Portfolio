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
                    institute: 'Web Burden',
                    decription: 'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.'
                },
                {
                    title: 'UI Designer',
                    date: 'March 2020 - Present',
                    institute: 'Web Burden',
                    decription: 'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.'
                },
                {
                    title: 'Illustration Artiest',
                    date: 'March 2020 - Present',
                    institute: 'Web Burden',
                    decription: 'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.'
                },
                {
                    title: 'Graphic Designer',
                    date: 'March 2020 - Present',
                    institute: 'Web Burden',
                    decription: 'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.'
                },
            ],
            
        }),
}
</script>