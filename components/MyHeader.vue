<template>
  <header>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="/">ごはん手帳</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item href="/createRecipeApp">料理作成</b-nav-item>
        <b-nav-item href="/menuTablesApp">献立表</b-nav-item>
        <b-nav-item href="/recipeListApp">料理一覧表</b-nav-item>
        </b-navbar-nav>

           <!-- Right aligned nav items -->
           <b-navbar-nav class="ml-auto">
               <b-nav-item-dropdown right>
                   <!-- Using 'button-content' slot -->
                   <template #button-content>
                       <em>User</em>
                   </template>
                   <b-dropdown-item href="#">Profile</b-dropdown-item>
                   <b-dropdown-item href="#">Sign Out</b-dropdown-item>
               </b-nav-item-dropdown>
           </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </header>
</template>

<style>
</style>
