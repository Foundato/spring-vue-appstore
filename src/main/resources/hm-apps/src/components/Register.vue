<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-card elvation="12" style="margin: 15Px">
                <v-card-text>
                    <v-form
                            ref="form"
                            lazy-validation>

                        <v-text-field
                                v-model="user.name"
                                label="Name"
                                prepend-icon="person"
                                type="text"
                                required
                        ></v-text-field>

                        <v-text-field
                                v-model="user.email"
                                label="Email"
                                prepend-icon="email"
                                type="text"
                                required
                        ></v-text-field>

                        <v-text-field
                                v-model="user.password"
                                label="password"
                                type="password"
                                prepend-icon="lock"
                                required
                        ></v-text-field>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <router-link :to="{name: 'home'}" tag="button">
                                <v-btn
                                        color="success"
                                        @click="submit"
                                > submit
                                </v-btn>
                            </router-link>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from "axios"
    import {mapMutations} from 'vuex'
    import router from "../router"

    // Set base url of axios from index.html property
    const node = document.querySelector(`meta[property=BACKEND_URL]`)
    axios.defaults.baseURL = node.content;

    export default {
        name: "Register",
        data() {
            return {
                user: {
                    name: "",
                    password: "",
                    email: ""
                }
            }
        },
        methods: {
            ...mapMutations([
                'setUser',
            ]),
            submit: function () {
                axios.post(`/api/users`, {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password
                }).then(res => {
                    router.push({name: 'userlogin'})
                }).catch(() => Promise.reject('Fehler beim Registrieren!'))
            },
        }
    }
</script>

<style scoped>

</style>
