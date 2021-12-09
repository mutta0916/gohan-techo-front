import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      recipes: [
        { name: '豚キムチ', genre: '和食', type: ['主菜'], servings: '2', memo: '＠＠＠＠＠＠＠＠＠１＠＠＠＠＠＠＠＠＠２＠＠＠＠＠＠＠＠＠３＠＠＠＠＠＠＠＠＠４＠＠＠＠＠＠＠＠＠５' },
        { name: 'カレーライス', genre: '和食', type: ['主食', '主菜'], servings: '3', memo: 'すごくおいしかった！' },
        { name: '肉うどん', genre: '和食', type: ['主食', '主菜'], servings: '1', memo: 'お肉大盛！' },
        { name: '焼肉', genre: '和食', type: ['主菜'], servings: '2', memo: 'カルビ多め' },
        { name: 'チキンのトマト煮', genre: '洋食', type: ['主菜'], servings: '3', memo: '鶏むね肉固くなりがち' },
        { name: '常夜鍋', genre: '和食', type: ['主菜'], servings: '2', memo: 'ほうれん草たっぷり' },
        { name: 'サラダチキン', genre: '洋食', type: ['主菜'], servings: '4', memo: 'ダイエットにはこれ' },
        { name: '豚肉と白菜のくたくた煮', genre: '和食', type: ['主菜'], servings: '2', memo: 'くったり白菜はうまい' },
        { name: 'キムチ鍋', genre: '和食', type: ['主菜'], servings: '4', memo: 'がっつり食べたいときに' },
        { name: 'カルボナーラ', genre: '洋食', type: ['主菜'], servings: '4', memo: 'これぞデブ飯！' }
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
