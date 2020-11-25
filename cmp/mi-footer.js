class MiFooter extends HTMLElement {​​

  connectedCallback() {​​

    this.innerHTML = /* html */

      `Copyright &copy; Flores Mateos Juan Miguel`;

 }​​}​​

customElements.define("mi-footer", MiFooter);
