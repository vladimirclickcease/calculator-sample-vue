<template>
  <div class="calculator">
    <div class="calculator__container">
      <div class="display">
        <input class="display-numbers" id="display" :value="current||'0'" disabled="disabled"/>
      </div>
      <div class="keyboard">
        <div class="keyboard-row" v-for="row in button_rows">
          <template v-for="item in row">
            <calc-button :value="item" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import calcMixin from "@/mixins/calcMixin";
import CalcButton from "@/components/CalcButton";

export default {
  name: "Calculator",
  components: { CalcButton },
  mixins: [calcMixin],
  data() {
    return {
      button_rows: [
          ['AC', '+/-', '%', '÷'],
          ['7', '8', '9', '×'],
          ['4', '5', '6', '-'],
          ['1', '2', '3', '+'],
          ['0', '.', '=']
      ]
    }
  },
  methods: {
    test(){
      console.log(this.previous)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.calculator{
  margin: 2rem 0;
  &__container{
    width: 100%;
    padding: 1rem;
    border-radius: 36px;
    background: var(--background-calculator);
    @include screen(mobile-big){
      width: 375px;
      display: block;
      margin: 0 auto;
    }
    .display{
      padding: 2rem 1rem;
      display: flex;
      justify-content: flex-end;
      &-numbers{
        font-size: 4rem;
        color: var(--key);
        text-align: right;
        width: 100%;
      }
    }
    .keyboard{
      &-row {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: space-around;
      }
    }
  }
}
</style>