<template>
  <div>
    <MyHeader />
    <Nuxt />
    <MyFooter />
  </div>
</template>

<style>
html, body {
  font-family: 'Kosugi Maru', sans-serif;
  font-size: 17px;
  color: #575a63;
  background: #f5eae4;
}

input[type="text"],
input[type="number"] {
  box-sizing: border-box;
  border-bottom: 1px dotted;
  border-right:none;
  border-left:none;
  border-top:none;
  background-color: transparent;
}

input:focus {
  outline: none;
}

input[type="submit"]{
  width: 100px;
  height: 30px;
  background-color: #f3d2c1;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
}

input[type="submit"]:hover {
  opacity: 0.5;
}

</style>
