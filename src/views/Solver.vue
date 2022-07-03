<script>
import nerdamer from 'nerdamer/all.min';

export default {
  data: () => ({
    equations: ['', ''],
  }),
  methods: {
    addEquation() {
      this.equations = [...this.equations, ''];
    },
    removeEquation() {
      this.equations = this.equations.filter(
        (equation, index) => index < this.equations.length - 1
      );
    },
  },
  mounted() {
    if (this.$refs.passwordField) {
      this.$refs.passwordField[0].focus();
    }
  },
  computed: {
    solution() {
      try {
        const equations = this.equations.filter(Boolean);
        let solutions = nerdamer.solveEquations(equations);

        if (
          equations.length <= 1 &&
          solutions.some((solution) => !Array.isArray(solution))
        ) {
          solutions = [solutions];
        }
        console.log(solutions);
        return (
          solutions
            .map(([variable, value]) => `${variable} = ${value}`)
            .join(', ') || 'Unlösbar'
        );
      } catch (e) {
        console.debug(e);
      }
      return 'Unlösbar';
    },
  },
};
</script>

<template>
  <article class="solver">
    <section class="headline">
      <h1>
        <span>Gleichungs</span>
        <span>Systeme</span>
      </h1>
    </section>

    <div class="content">
      <section class="fieldarea">
        <div
          class="field"
          :class="{ filled: equation.length > 0 }"
          contenteditable="true"
          @input="equations[index] = $event.target.innerText"
          ref="passwordField"
          v-for="(equation, index) in equations"
          :key="index"
        />
      </section>

      <div class="buttons">
        <button class="button button--add" @click="addEquation">
          + Gleichung hinzufügen
        </button>
        <button class="button button--remove" @click="removeEquation">
          - Gleichung entfernen
        </button>
      </div>

      <p class="solution">{{ solution }}</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.headline {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 96px;

  h1 {
    font-size: 96px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    color: rgba(#ffffff, 0.8);
    text-align: center;

    span {
      display: block;
      transform: translateX(-15%);

      &:last-child {
        transform: translateX(15%);
      }
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 2;
}

.fieldarea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 0 16px;
  border-left: 2px solid #ccc;
  border-right: 2px solid #ccc;

  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 16px 48px;
    background-color: #060615;
    border-radius: 16px;
    border: none;
    font-family: 'Roboto Mono', Poppins, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0.05em;
    line-break: anywhere;
    text-align: center;
    color: #ffffff;
    user-select: all;
    border: 1px solid #333;
    outline: none;
    min-width: 328px;
    margin: 8px 0;

    &.filled {
      &::before {
        opacity: 0;
      }
    }

    &::before {
      content: 'Gleichung eingeben';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      color: rgba(#ffffff, 0.3);
      pointer-events: none;
      transition: opacity 130ms ease;
    }
  }
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
}

.button {
  background-color: rgba(255, 255, 255, 0.08);
  font-family: Poppins, Arial, sans-serif;
  font-size: 1rem;
  color: #fff;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 130ms ease;
  margin-right: 1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  &:last-child {
    margin-right: 0;
  }

  &.button--add {
    background-color: rgba(180, 255, 180, 0.08);

    &:hover {
      background-color: rgba(180, 255, 180, 0.12);
    }
  }

  &.button--remove {
    background-color: rgba(255, 180, 180, 0.08);

    &:hover {
      background-color: rgba(255, 180, 180, 0.12);
    }
  }
}

.solution {
  font-size: 2rem;
  margin-bottom: 4rem;
}
</style>
