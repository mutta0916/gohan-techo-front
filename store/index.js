import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      recipes: [
        { name: '豚キムチ', servings: '2', memo: '＠＠＠＠＠＠＠＠＠１＠＠＠＠＠＠＠＠＠２＠＠＠＠＠＠＠＠＠３＠＠＠＠＠＠＠＠＠４＠＠＠＠＠＠＠＠＠５' },
        { name: 'カレーライス', servings: '3', memo: 'すごくおいしかった！' },
        { name: '肉うどん', servings: '1', memo: 'お肉大盛！' },
        { name: '焼肉', servings: '2', memo: 'カルビ多め' },
        { name: 'チキンのトマト煮', servings: '3', memo: '鶏むね肉固くなりがち' },
        { name: '常夜鍋', servings: '2', memo: 'ほうれん草たっぷり' },
        { name: 'サラダチキン', servings: '4', memo: 'ダイエットにはこれ' },
        { name: '豚肉と白菜のくたくた煮', servings: '2', memo: 'くったり白菜はうまい' },
        { name: 'キムチ鍋', servings: '4', memo: 'がっつり食べたいときに' },
        { name: 'カルボナーラ', servings: '4', memo: 'これぞデブ飯！' }
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
