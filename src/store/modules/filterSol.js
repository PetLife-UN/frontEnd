export default ({
    namespaced: true,
    state: {
        filter:{},
    },
    mutations: {
        ADD_PET(state){
            state.msgVisible = true;
        },
        EXIT_MSG(state){
            state.msgVisible = false;
        },
    },
    actions: {
        addPet({ commit }){
            commit("ADD_PET");
        },
        exitMsg({ commit }){
            commit("EXIT_MSG");
        },
    },
});