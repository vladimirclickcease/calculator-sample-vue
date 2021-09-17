import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters(['getCurrent', 'getPrevious', 'getOperator', 'getClickedOperator']),

        current: {
            get() { return this.getCurrent },
            set(value) {
                this.$store.commit('setCurrent', value)
                // this.$store.dispatch('setCurrent', value)
            }
        },
        previous: {
            get() { return this.getPrevious },
            set(value) { this.setPrevious(value) }
        },
        operator: {
            get() { return this.getOperator },
            set(value) { this.setOperator(value) }
        },
        clickedOperator: {
            get() { return this.getClickedOperator },
            set(value) { this.setClickedOperator(value) }
        }
    },
    methods: {
        ...mapMutations(['clearDisplay', 'setCurrent', 'setPrevious', 'setOperator', 'setClickedOperator']),
        // ...mapActions([''])
        appendSymbol(number) {
            if(this.clickedOperator) {
                this.clickedOperator = false;
                this.current = number;
            } else {
                this.current = this.current === '0' ? number : `${this.current}${number}`;
            }
        },
        convertDecimal() {
            if(this.clickedOperator) {
                this.current = '0.';
                this.clickedOperator = false;
            }
            if(this.current.indexOf('.') === -1) this.current += '0.';
        },
        changeSign() {
            this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`;
        },
        convertPercent() {
            this.current = `${parseFloat(this.current) / 100}`;
        },
        handleOperator(newOperator) {
            const numberValue = parseFloat(this.current)
            if(this.operator && this.clickedOperator) {
                this.operator = newOperator;
            }
            if(this.previous == null) {
                this.previous = numberValue;
            } else if (this.operator) {
                const result = this.calculate(this.previous, numberValue, this.operator);
                this.current = String(result);
                this.previous = result;
            }
            this.clickedOperator = true;
            this.operator = newOperator;
        },
        calculate (first, second, operator) {
            switch (operator) {
                case '+':
                    return first + second
                case '-':
                    return first - second
                case '×':
                    return first * second
                case '÷':
                    return first / second
                default:
                    return second
            }
        }
    }
}