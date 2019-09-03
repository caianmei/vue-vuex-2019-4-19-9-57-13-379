import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        checkBoxs: [],        
        ischeck:[],
        active:[],
        activeIndex:[],
        complete:[],
        completeIndex:[]
    },
    getters: {
        getCheckBoxs: function (state) {
            return state.checkBoxs
        },
        getActive:function(state){
            for (let i = 0; i < state.activeIndex.length; i++) {
                state.active.push(state.checkBoxs[state.activeIndex[i]]) ;                
            }
            return state.active
        },
        getComplete:function(state){
            for (let i = 0; i < state.completeIndex.length; i++) {
                state.complete.push(state.checkBoxs[state.completeIndex[i]]) ;                
            }
            return state.complete
        }
    },
    mutations: {
        add: function (state, value) {
            state.checkBoxs.push(value);
            state.activeIndex.push( state.checkBoxs.length -1);
            state.ischeck.push(false)
        },
        check: function (state,param) {
            if (param.ischeck) {
                state.completeIndex.push(param.index);
                let oldActiveIndex = state.activeIndex;
                state.activeIndex = [];
                oldActiveIndex.forEach(element => {
                    window.console.log(element)
                    if (element != param.index) {
                        state.activeIndex.push(element);
                    }
                });
                state.ischeck[param.index] = param.ischeck
            } else {
                state.activeIndex.push(param.index);
                let oldCompleteIndex = state.completeIndex;
                state.completeIndex = [];
                oldCompleteIndex.forEach(element => {
                    window.console.log(element)
                    if (element != param.index) {
                        state.completeIndex.push(element);
                    }
                });
                state.ischeck[param.index] = param.ischeck;
            }           
        }
    }

})

export default store