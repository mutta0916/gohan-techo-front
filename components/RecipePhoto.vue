<template>
<div>
  <label>
    <img :src="avatar" alt="Avatar" class="image">
    <div>
      <input type="file" id="avatar_name" accept="image/jpeg, image/png" @change="onImageChange" />
    </div>
  </label>
  <p>{{ message }}</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      avatar: require('../assets/no_img.svg'),
      message: '↑画像クリックでアップロード',
      error: ''
    }
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    onImageChange (e) {
      const images = e.target.files || e.dataTransfer.files
      this.getBase64(images[0])
        .then(image => this.avatar = image)
        .catch(error => this.setError(error, '画像のアップロードに失敗しました。'))
    },
    upload () {
        if (this.avatar) {
        /* postで画像を送る処理をここに書く */
        this.message = 'アップロードしました' 
        this.error = ''
      } else {
        this.error = '画像がありません'
      }
    }
  }
}
</script>

<style scoped>

input {
  display: none;
}

img {
  height: 450px;
  width: 600px;
}

p {
  font-size: 20px;
  font-weight: bold;
}

</style>
}
