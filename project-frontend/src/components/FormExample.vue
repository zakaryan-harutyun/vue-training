<template>
    <div>
        <form action="" @submit.prevent="submitForm">
            <b-container class="mt-3">
                <b-row>
                    <b-col cols="3" class="form-group">
                        <label>
                            First name
                            <input type="text" class="form-control" name="first_name" placeholder="First name" v-model="register_data.first_name">
                        </label>
                    </b-col>
                    <b-col>
                        <span @click="spanClick">
                            Hello
                        </span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3" class="form-group">
                        <label>
                            Last name
                            <input type="text" class="form-control" name="last_name" placeholder="Last name" v-model="register_data.last_name">
                        </label>
                    </b-col>

                    <b-col cols="3" class="form-group">
                        <label>
                            Choose color
                            <input type="color" class="form-control" @change="colorChanged">
                        </label>
                    </b-col>

                    <b-col cols="3" class="form-group" ref="selected_colors">
                        <div>
                            {{ selected_colors.join(', ') }}
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3" class="form-group">
                        <label>
                            Email
                            <input type="email" class="form-control" name="email" placeholder="Email name" v-model="register_data.email">
                        </label>
                    </b-col>
                    <b-col cols="3" class="form-group">
                        <div class="w-50 h-50 border" ref="colored_div">

                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3" class="form-group">
                        <label>
                            Password
                            <input type="password" class="form-control" name="password" placeholder="******" v-model="register_data.password">
                        </label>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3" class="form-group">
                        <label>
                            Confirm password
                            <input type="password" class="form-control" name="password_confirmation" placeholder="******" v-model="register_data.password_confirmation">
                        </label>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3" class="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </b-col>
                </b-row>
            </b-container>
        </form>
        <b-container>
            <b-row>
                <b-col cols="12">
                    <div class="d-flex">
                        <input type="number" v-model="num_1">
                        <select name="" id="" v-model="math_operator">
                            <option value="" v-for="option in options" :value="option">{{option}}</option>
                        </select>
                        <input type="number" v-model="num_2">
                        <div>
                            {{ num_1 }}
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: ['+', '-', '/', '*'],
                num_1: null,
                num_2: null,
                math_operator: null,
                register_data: {
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'john@gmail.com'
                },
                selected_colors: []
            }
        },
        watch: {
            'register_data.email': function (new_val, old_val) {
                console.log("old -> ", old_val);
                console.log("new -> ", new_val);
            }
        },
        mounted() {
            // this.axios.get('https://reqres.in/api/users/2').then(res => {
            //     console.log(res)
            // }).catch((err)=> {
            //     console.log(err.response)
            // });
        },
        methods: {
            submitForm() {
                console.log(this.register_data);
            },
            spanClick(evt) {
                console.log(evt)
            },
            colorChanged(e) {
                this.selected_colors.push(e.target.value);
                if(this.selected_colors.length === 3) {
                    e.target.disabled = true;
                    let index = 0;
                    setInterval(() => {
                        this.$refs.colored_div.style.backgroundColor = this.selected_colors[index];
                        index ++;
                        if(index === 3) index = 0;
                    }, 500)
                }
            }
        },
        computed: {
            result() {
                let num_1 = +(this.num_1),
                    num_2 = +(this.num_2);

                if((num_1 || num_1 === 0) && num_2 || num_2 === 0) {
                    return num_1 + num_2
                }
                return ''
            }
        }
    }
</script>

<style scoped>

</style>
