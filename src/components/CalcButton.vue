<template>
  <button class="keyboard-key" :class="`keyboard-key--${color}`, { double }" @click="handleClick">{{ value }}</button>
</template>

<script>
import calcMixin from "@/mixins/calcMixin";

export default {
  name: "CalcButton",
  mixins: [calcMixin],
  props: {
    value: String
  },
  computed: {
    color() {
      return ['÷', '×', '-', '+', '='].includes(this.value) ? 'orange'
          : ['AC', '+/-', '%'].includes(this.value) ? 'gray' : 'white';
    },
    double() {
      return this.value == '0';
    }
  },
  methods: {
    handleClick() {
      const isNumeric = (str) => !isNaN(str) && !isNaN(parseFloat(str));
      return isNumeric(this.value) ? this.appendSymbol(this.value) : this.chooseOperator(this.value);
    },
    chooseOperator(value) {
      switch(value) {
        case 'AC':
          return this.clearDisplay();
        case '+/-':
          return this.changeSign();
        case '%':
          return this.convertPercent();
        case '.':
          return this.convertDecimal();
        default:
          return this.handleOperator(value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.keyboard-key {
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  margin: .5rem .5rem;
  width: 65.9px;
  min-width: 65.9px;
  padding: 1.24rem 0.91rem ;
  border-radius: 2rem;
  @extend .box-shadow;
  background-color: var(--background-calculator);
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
  &:active{
    @extend .pressed;
  }
  span{
    font-size: 1.7rem;
  }
  &--gray{
    color: var(--key-gray);
  }
  &--orange{
    color: var(--key-orange);
  }
  &--white{
    color: var(--key);
  }
  @include down-screen(mobile-small){
    width: 50px;
    min-width: 50px;
    font-size: 1.2rem;
  }
}
.double{
  width: 150px;
}
</style>