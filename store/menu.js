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

  }
  
  const actions = {

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