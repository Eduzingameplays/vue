vue
<template>
    lista de imagens
    <div class="img-container">
      <img v-lazy="require('@/assets/cingchong.jpg')" alt="Imagem 2">
    </div>
    <link rel="preload" href="path/to/cingchong.jpg" as="image">
  </template>
  
  <script>
  export default {
    name: 'ImagensDiversas',
  };
  </script>
  
  <style scoped>
  .img-container {
    display: flex;
    gap: 10px; /* Espaço entre as imagens */
  }
  
  .img-container img {
    width: 30%; /* Define a largura das imagens */
  }
  </style>