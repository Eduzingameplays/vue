<template>
  <div class="container">
    <h1>Bololo haha</h1>
  </div>
  <div class="container">
    <div class="content">
      <h2>nois da risada</h2>
      <p>bota pra acelerar</p>
    </div>
    <div class="sidebar">
      <h3>cabelo da tony country</h3>
      <p>pra mostrar que é de vilão </p>
    </div>
    <div class="image-section">
      <img src="img/binladen1.jpg">
      <img src="img/binladen2.jpg">
      <img src="img/blue2.PNG">
    </div>
    <div class="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/oowBXzfcl90?si=AtAahTcL3b0TW0qv"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
  <table>
    <tr>
      <th>cabelo da tony country</th>
      <th>pra mostrar que é de vilão</th>
      <th>lad mal e lado bem</th>
    </tr>
    <tr>
      <td>nois e bom </td>
      <td>mas não é bombom</td>
      <td>no toque da horntera</td>
    </tr>
    <tr>
      <td>entre becos e vielas</td>
      <td>meia preta</td>
      <td>e meia branca</td>
    </tr>
    <tr>
      <td>que nois joga na canela</td>
      <td>os irmãos tão de ak</td>
      <td>encima da cb1000</td>
    </tr>
    <tr>
      <td>recaldado fecha o olho</td>
      <td>vai pra </td>
      <td> ratinhoooo</td>
    </tr>
  </table>
  <footer>
    <p>&copy; bololololololololololo</p>
  </footer>

</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>


<style scoped>
.container {
  text-align: center;
  margin-top: 50px;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
  }

  nav {
    background-color: #444;
    padding: 10px 0;
    text-align: center;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    padding: 0 10px;
  }

  nav a:hover {
    background-color: #555;
  }

  .container {
    width: 80%;
    margin: auto;
    overflow: hidden;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .content {
    flex: 1;
    margin-right: 10px;
  }

  .sidebar {
    flex: 1;
    background-color: #ddd;
    padding: 10px;
    margin-left: 10px;
  }

  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #333;
    color: #fff;
  }

  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    clear: both;
  }

  .image-section {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .image-section img {
    width: calc(33.33% - 10px);
    margin-bottom: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  .video-container {
    width: 100%;
    margin-top: 20px;
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .sidebar {
      margin-top: 20px;
      margin-left: 0;
    }

    .image-section img {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
