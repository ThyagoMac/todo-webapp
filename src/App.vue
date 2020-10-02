<template>
  <div id="app">

    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/Kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
          pipipi imagem cool
        </section>
      </header>
      <router-view class="pt-2"/>
    </div>

  </div>
</template>
