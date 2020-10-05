textOnly = this.getField("TextOnly")
textDesc = this.getField("DescriptionTextOnly")

if (event.value === "With Image") {
  textOnly.display = display.hidden
  textDesc.display = display.hidden
} else if (event.value === "Text Only") {
  textOnly.display = display.visible
  textDesc.display = display.visible
}