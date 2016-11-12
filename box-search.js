(function (){
  'use strict';

  class BoxSearch extends Polymer.Element {
    static get is () { return 'box-search'; }

    static get config () {
      return {
        properties: {},
        observers: [],
      }
    }

	showClearButt (){
		this.$.clearButt.style.opacity = "1";
		this.$.clearButt.style.right = "5px";
	}

	hideClearButt (){
		this.$.clearButt.style.opacity = "0";
		this.$.clearButt.style.right = "-50px";
	}

	clearInput (){
		this.$.boxsearch.value = "";
		this.$.clearButt.style.opacity = "0";

	}
  }

  customElements.define(BoxSearch.is, BoxSearch);
})();
