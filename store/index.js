import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      recipes: [
        { id: 1, name: '豚キムチ', genre: '和食', type: '主菜', servings: '2', memo: '＠＠＠＠＠＠＠＠＠１＠＠＠＠＠＠＠＠＠２＠＠＠＠＠＠＠＠＠３＠＠＠＠＠＠＠＠＠４＠＠＠＠＠＠＠＠＠５' },
        { id: 2, name: 'カレーライス', genre: '和食', type: '丼', servings: '3', memo: 'すごくおいしかった！' },
        { id: 3, name: '肉うどん', genre: '和食', type: '麺', servings: '1', memo: 'お肉大盛！' },
        { id: 4, name: '焼肉', genre: '和食', type: '主菜', servings: '2', memo: 'カルビ多め' },
        { id: 5, name: 'チキンのトマト煮', genre: '洋食', type: '主菜', servings: '3', memo: '鶏むね肉固くなりがち' },
        { id: 6, name: '常夜鍋', genre: '和食', type: '主菜', servings: '2', memo: 'ほうれん草たっぷり' },
        { id: 7, name: 'サラダチキン', genre: '洋食', type: '主菜', servings: '4', memo: 'ダイエットにはこれ' },
        { id: 8, name: '豚肉と白菜のくたくた煮', genre: '和食', type: '主菜', servings: '2', memo: 'くったり白菜はうまい' },
        { id: 9, name: 'キムチ鍋', genre: '和食', type: '主菜', servings: '4', memo: 'がっつり食べたいときに' },
        { id: 10, name: 'カルボナーラ', genre: '洋食', type: '主菜', servings: '4', memo: 'これぞデブ飯！' },
        { id: 11, name: '@@@@@@@@@1@@@@@@@@@2@@@@@@@@@3@@@@@@@@@4@@@@@@@@@5', genre: '洋食', type: '主菜', servings: '4', memo: 'これぞデブ飯！' }
      ]
    }),
    mutations: {
      insert (state, obj) {
        state.recipes.unshift({
          name: obj.name,
          memo: '登録テストです。おいしいごはんを食べたいです！(^^)/'
        })
      },
      remove (state, obj) {
        for (let i = 0; i < state.recipes.length; i++) {
          const ob = state.recipes[i]
          if (ob.name === obj.name && ob.memo === obj.memo) {
            state.recipes.splice(i, 1)
            return
          }
        }
      }
    }
  })
}

export default createStore
