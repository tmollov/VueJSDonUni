<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="">DonUni</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li v-if="IsLogged" class="nav-item">
                        <a class="nav-link" href="/logout">Logout (CURRENT USERNAME)</a>
                    </li>
                    <li v-if="!IsLogged" class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'app-navigation',
  data: Data,
  props: {
      IsLogged:Boolean
  }
}

function Data() {
return {

};
}
</script>

<style scoped>

</style>