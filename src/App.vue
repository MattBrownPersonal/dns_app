<script setup lang="ts">
import MainHeaderComponent from './components/MainHeaderComponent.vue';
import CardsComponent from './components/CardsComponent.vue';
import LogoComponent from './components/LogoComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import ProblemSolversComponent from './components/ProblemSolversComponent.vue';
import ExpertsComponent from './components/ExpertsComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="flex w-screen main_header">
    <MainHeaderComponent />
  </div>
  <div class="w-full flex justify-center px-8 cards_container">
    <CardsComponent />
  </div>
  <div class="w-full flex flex-col items-center px-8 logo_container text-black">
    <LogoComponent />
  </div>
  <div class="flex">
    <HeroComponent />
  </div>
  <div class="h-96">
    <JumbotronComponent />
  </div>
  <div class="jumbotron_bottom"></div>
  <div class="problem_solvers_container">
    <ProblemSolversComponent />
  </div>
  <div class="flex flex-col items-center text-center justify-center text-black">
    <ExpertsComponent />
  </div>
  <div class="h-[672px] bg-cover bg-center flex prodhero"></div>
  <div class="h-[914px] bg-pink contact_us_grid_container pt-24">
    <FooterComponent />
  </div>
</template>
