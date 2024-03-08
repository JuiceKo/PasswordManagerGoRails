import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values ={
    content: String
  }
  connect() {
    console.log(this.contentValue)
  }

  copy() {
    navigator.clipboard.writeText(this.contentValue).then(
        () => {
          /* clipboard succesfully set */
        },
        () => {
          alert("Failed to copy to clipboard")
        }
    );
  }
}
