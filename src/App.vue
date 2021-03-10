<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Cars' }">Cars</router-link> |
    <router-link :to="{ name: 'Houses' }">Houses</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: "Akaya Telivigala", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#bg {
  height: 100vh;
  background-image: url("https://64.media.tumblr.com/1a5e90248b2e5092a38d33af5a04c15c/c9bd19b6606e8b1e-f4/s400x600/66ef4ec8f3291e27d47788c95919fb735c31b251.gifv");
  background-size: cover;
  color: white;
}

#nav {
  padding: 30px;
  font-size: 2em;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.card {
  background-color: black;
  color: white;
}
</style>
