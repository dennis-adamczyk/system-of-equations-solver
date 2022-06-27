<script setup>
import facesImg from '@/assets/faces.png?url';
</script>

<template>
  <article class="about">
    <img :src="facesImg" class="faces" />
    <div class="person">
      <p class="name">Kevin Kaulich</p>
      <p class="matrnr">30469</p>
    </div>
    <div class="person">
      <p class="name">Marlon Just</p>
      <p class="matrnr">30545</p>
    </div>
    <div class="person">
      <p class="name">Dennis Adamczyk</p>
      <p class="matrnr">30545</p>
    </div>
    <p class="headline">Projekt von Studenten der Hochschule Rhein-Waal</p>
  </article>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 80vh;

  .faces {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: auto;
    mix-blend-mode: soft-light;
  }

  .person {
    flex-grow: 1;
    position: relative;
    margin-top: 25%;

    .name {
      font-size: 32px;
      font-weight: 600;
      text-align: center;
    }

    .matrnr {
      position: absolute;
      bottom: 15%;
      left: 60%;
      transform: translate(-50%, 50%);
      font-size: 148px;
      line-height: normal;
      mix-blend-mode: soft-light;
      opacity: 0.3;
      z-index: -1;
    }

    // &:nth-child(2) {
    //   margin-left: 10%;

    //   .matrnr {
    //     left: auto;
    //     right: 35%;
    //     transform: translate(50%, 50%);
    //   }
    // }
  }

  .headline {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    text-transform: uppercase;
    color: rgba(#ffffff, 0.5);
  }
}
</style>
