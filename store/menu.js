let menuAdmin = [];

const state = () => {
    return {
      menu : [
          {
            icon: 'HomeIcon',
            path: '/',
            title: 'หน้าแรก',
            id: 0,
          }
      ],
    }
  }
  
  const mutations = {
    setMenuToState(state,post) {
      state.menu = post.menuAdmin;
    },
  }
  
  const actions = {
    async setMenu (vuexContext, context) {
      if(context == true) {
        vuexContext.commit("setMenuToState", {
          menuAdmin
      })
    }
    
    menuAdmin = []
    }
  }
  
  const getters = {
    menu : state => state.menu,
    menuPermission: state => state.menuPermission
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };