const app = new Vue({
	el: '.calculator',
	data: {
		bill: null,
		percentage: 0,
		customPercentage: null,
		persons: null,
		activeOption: null,
		totalTip: 0,
		tipPerPerson: 0,
	},
	computed: {
		computedTip() {
			let edited = (this.bill / 100) * this.percentage;
			if(isNaN(this.bill)) {
				return 0;
			} else return parseFloat(edited.toFixed(2));
		},
		tip() {
			if (this.percentage == null || this.percentage == undefined) {
				this.percentage = 0;
			}

			if (this.persons == NaN || this.persons == undefined) {
				this.persons == 0
			}
			let theTip = (this.bill / 100) * this.percentage;
			return parseFloat(theTip.toFixed(2));
		},
		personalTot() {
			let totalPerPerson = (this.bill / this.persons) + this.tip;
			if (isNaN(totalPerPerson) || totalPerPerson == null || totalPerPerson == undefined || totalPerPerson == Infinity) {
				return 0.00;
			} else {
				return parseFloat(totalPerPerson.toFixed(2));
			}
			
		},
		peopleInvalid() {
			if (isNaN(this.persons) || this.persons == 0 || this.persons == null || this.persons == undefined) {
				return true;
			}
			return false;
		},
	},
	methods: {
		setCustomPercentage() {
			this.percentage = this.customPercentage;
		},
		letPercentage(value) {
			if (this.percentage != parseInt(value)) {
				this.percentage = parseInt(value);
			} else this.percentage = 0;
		},
		setActiveOption(id) {
			if(this.activeOption != parseInt(id)) {
				this.activeOption = parseInt(id);
			} else this.activeOption = null;
		},
		reset() {
		this.bill = null;
		this.percentage = 0;
		this.customPercentage = null;
		this.persons = null;
		this.activeOption = null;
		},
	},
});
