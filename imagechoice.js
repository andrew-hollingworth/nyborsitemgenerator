textOnly = this.getField("TextOnly")
textDesc = this.getField("DescriptionTextOnly")
withImage = this.getField("ImageCard")
imageDesc = this.getField("Description WithImage")

if (event.value === "With Image") {
  textOnly.display = display.hidden
  textDesc.display = display.hidden
  withImage.display = display.visible
  imageDesc.display = display.visible
} else if (event.value === "Text Only") {
  textOnly.display = display.visible
  textDesc.display = display.visible
  withImage.display = display.hidden
  imageDesc.display = display.hidden
}