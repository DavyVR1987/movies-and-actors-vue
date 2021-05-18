<template>
  <div class="nav-container mb-3">
    <nav class="navbar navbar-expand-md navbar-dark bg-secondary">
      <div class="container">
        <div class="navbar-brand logo">
          <img src="../assets/images/Logo.jpg" height="50"/>
        </div>
        <div class="navbar-nav">
          <ul class="navbar-nav mr-auto">            
            <li class="nav-item"><router-link to="/">Movie list</router-link></li>
            <li class="nav-item"><router-link to="/actors">Actors</router-link></li>
          </ul>
        </div>
        <!--<div class="navbar-nav ml-auto">
          <div *ngIf="(authService.isAuthenticated$ | async)">
            <span *ngIf="(authService.user$ | async) as user">
              <fa-icon [icon]="faUser"></fa-icon> Welcome {{user.name}}
              <app-logout-button></app-logout-button>
            </span>
          </div>
        </div>-->
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
ul {
  list-style: none;
}

ul li {
  display: inline-flex;
  margin-left: 1rem;            
}
li a {
  color: white;
}
    
</style>