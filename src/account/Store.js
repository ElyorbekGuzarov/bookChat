import Vuex from "vuex"
import Vue from "vue";
import VuexPersistence from "vuex-persist";

const vuexLocal=new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        login:false,
        userIdentity:null,
        authenticated:false
    },
    mutations: {
    authenticate(state){
        state.login=true;
    },
    authenticated(state,identity){
        console.log(state)

        state.userIdentity=identity;
        state.authenticated=true;
        state.login=false;

    },
    logout(state){
        console.log(state)

        state.userIdentity=null;
        state.authenticated=false;
        state.login=false;




    }
},
getters:{
    login:state=> state.login,
    account: state => state.userIdentity,
    authenticated:state => state.authenticated
},
    plugins:[vuexLocal.plugin]
});