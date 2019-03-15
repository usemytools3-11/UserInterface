class DeveloperBanner {
  constructor(element) {
    this.element = element;
    this.expandButton = this.element.querySelector('.expand-button');
    this.textBox = this.element.querySelector('.expand-content');
    this.allTextBoxes = Array.from(document.querySelectorAll('.expand-content'));
    this.allOtherTextBoxes = this.allTextBoxes.filter(textBox => textBox !== this.textBox);
    this.callExpandBanner = this.expandBanner.bind(this);
    this.allTextBoxes = document.querySelectorAll('.expand-content');

    window.addEventListener("load", () => {
      if(window.innerWidth <= 720) {
        this.hideAll();
        this.expandButton.addEventListener('click', this.callExpandBanner);
      }
    
    })
    window.addEventListener("resize", () => {
      if(window.innerWidth <= 720) {
        this.hideAll();
        this.expandButton.addEventListener("click", this.callExpandBanner);
      }
      else {
        this.showAll();
        this.expandButton.removeEventListener("click", this.callExpandBanner);
      }
    })
  }

  expandBanner() {
    this.hideAll();
    this.textBox.classList.toggle('temporary-hide');
  }

  hideAll() {
    this.allOtherTextBoxes.forEach((textBox) => {
      textBox.classList.add('temporary-hide');
    });
  }

  showAll() {
    this.allTextBoxes.forEach((textBox) => {
      textBox.classList.remove('temporary-hide');
    }); 
  }
}



let developers = document.querySelectorAll('.developer-banner').forEach( developer => {
  new DeveloperBanner(developer);
});
