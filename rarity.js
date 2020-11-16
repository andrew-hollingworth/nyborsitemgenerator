var rarityDrop = this.getField("RarityDrop1").value;
var imageChoice = this.getField("ImageChoice").value;

var rarityEnchant1 = Number(this.getField("Enchantment 1").value.split('--')[3])
var rarityEnchant2 = Number(this.getField("Enchantment 2").value.split('--')[3])
var rarityEnchant3 = Number(this.getField("Enchantment 3").value.split('--')[3])

var rarityValue = (isNaN(rarityEnchant1) ? 0 : rarityEnchant1) + (isNaN(rarityEnchant2) ? 0 : rarityEnchant2) + (isNaN(rarityEnchant3) ? 0 : rarityEnchant3)

// FORMAT 
if (imageChoice == "Text Only") {
  this.getField("Common WithImage").display = display.hidden
  this.getField("Uncommon WithImage").display = display.hidden
  this.getField("Rare WithImage").display = display.hidden
  this.getField("VeryRare WithImage").display = display.hidden
  this.getField("Legendary WithImage").display = display.hidden
  this.getField("Artifact WithImage").display = display.hidden
  switch (event.value) {
    case "Auto":
      if (2 <= rarityValue && rarityValue < 4) { //Uncommon
        this.getField("Uncommon TextOnly").display = display.visible
        this.getField("Rare TextOnly").display = display.hidden
        this.getField("VeryRare TextOnly").display = display.hidden
        this.getField("Legendary TextOnly").display = display.hidden
        this.getField("Artifact TextOnly").display = display.hidden
      } else if (4 <= rarityValue && rarityValue < 8) { // Rare
        this.getField("Uncommon TextOnly").display = display.hidden
        this.getField("Rare TextOnly").display = display.visible
        this.getField("VeryRare TextOnly").display = display.hidden
        this.getField("Legendary TextOnly").display = display.hidden
        this.getField("Artifact TextOnly").display = display.hidden
      } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
        this.getField("Uncommon TextOnly").display = display.hidden
        this.getField("Rare TextOnly").display = display.hidden
        this.getField("VeryRare TextOnly").display = display.visible
        this.getField("Legendary TextOnly").display = display.hidden
        this.getField("Artifact TextOnly").display = display.hidden
      } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
        this.getField("Uncommon TextOnly").display = display.hidden
        this.getField("Rare TextOnly").display = display.hidden
        this.getField("VeryRare TextOnly").display = display.hidden
        this.getField("Legendary TextOnly").display = display.visible
        this.getField("Artifact TextOnly").display = display.hidden
      } else if (32 <= rarityValue) { //Artifact
        this.getField("Uncommon TextOnly").display = display.hidden
        this.getField("Rare TextOnly").display = display.hidden
        this.getField("VeryRare TextOnly").display = display.hidden
        this.getField("Legendary TextOnly").display = display.hidden
        this.getField("Artifact TextOnly").display = display.visible
      } else { //Common
        this.getField("Uncommon TextOnly").display = display.hidden
        this.getField("Rare TextOnly").display = display.hidden
        this.getField("VeryRare TextOnly").display = display.hidden
        this.getField("Legendary TextOnly").display = display.hidden
        this.getField("Artifact TextOnly").display = display.hidden
      }
      break;
    case "Common":
      this.getField("Uncommon TextOnly").display = display.hidden
      this.getField("Rare TextOnly").display = display.hidden
      this.getField("VeryRare TextOnly").display = display.hidden
      this.getField("Legendary TextOnly").display = display.hidden
      this.getField("Artifact TextOnly").display = display.hidden
      break;
    case "Uncommon":
      this.getField("Uncommon TextOnly").display = display.visible
      this.getField("Rare TextOnly").display = display.hidden
      this.getField("VeryRare TextOnly").display = display.hidden
      this.getField("Legendary TextOnly").display = display.hidden
      this.getField("Artifact TextOnly").display = display.hidden
      break;
    case "Rare":
      this.getField("Uncommon TextOnly").display = display.hidden
      this.getField("Rare TextOnly").display = display.visible
      this.getField("VeryRare TextOnly").display = display.hidden
      this.getField("Legendary TextOnly").display = display.hidden
      this.getField("Artifact TextOnly").display = display.hidden
      break;
    case "Very Rare":
      this.getField("Uncommon TextOnly").display = display.hidden
      this.getField("Rare TextOnly").display = display.hidden
      this.getField("VeryRare TextOnly").display = display.visible
      this.getField("Legendary TextOnly").display = display.hidden
      this.getField("Artifact TextOnly").display = display.hidden
      break;
    case "Legendary":
      this.getField("Uncommon TextOnly").display = display.hidden
      this.getField("Rare TextOnly").display = display.hidden
      this.getField("VeryRare TextOnly").display = display.hidden
      this.getField("Legendary TextOnly").display = display.visible
      this.getField("Artifact TextOnly").display = display.hidden
      break;
    case "Artifact":
      this.getField("Uncommon TextOnly").display = display.hidden
      this.getField("Rare TextOnly").display = display.hidden
      this.getField("VeryRare TextOnly").display = display.hidden
      this.getField("Legendary TextOnly").display = display.hidden
      this.getField("Artifact TextOnly").display = display.visible
      break;
  }
} else if (imageChoice == "With Image") {
  this.getField("Uncommon TextOnly").display = display.hidden
  this.getField("Rare TextOnly").display = display.hidden
  this.getField("VeryRare TextOnly").display = display.hidden
  this.getField("Legendary TextOnly").display = display.hidden
  this.getField("Artifact TextOnly").display = display.hidden
  switch (event.value) {
    case "Auto":
      if (2 <= rarityValue && rarityValue < 4) { //Uncommon
        this.getField("Common WithImage").display = display.hidden
        this.getField("Uncommon WithImage").display = display.visible
        this.getField("Rare WithImage").display = display.hidden
        this.getField("VeryRare WithImage").display = display.hidden
        this.getField("Legendary WithImage").display = display.hidden
        this.getField("Artifact WithImage").display = display.hidden
      } else if (4 <= rarityValue && rarityValue < 8) { // Rare
        this.getField("Common WithImage").display = display.hidden
        this.getField("Uncommon WithImage").display = display.hidden
        this.getField("Rare WithImage").display = display.visible
        this.getField("VeryRare WithImage").display = display.hidden
        this.getField("Legendary WithImage").display = display.hidden
        this.getField("Artifact WithImage").display = display.hidden
      } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
        this.getField("Common WithImage").display = display.hidden
        this.getField("Uncommon WithImage").display = display.hidden
        this.getField("Rare WithImage").display = display.hidden
        this.getField("VeryRare WithImage").display = display.visible
        this.getField("Legendary WithImage").display = display.hidden
        this.getField("Artifact WithImage").display = display.hidden
      } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
        this.getField("Common WithImage").display = display.hidden
        this.getField("Uncommon WithImage").display = display.hidden
        this.getField("Rare WithImage").display = display.hidden
        this.getField("VeryRare WithImage").display = display.hidden
        this.getField("Legendary WithImage").display = display.visible
        this.getField("Artifact WithImage").display = display.hidden
      } else if (32 <= rarityValue) { //Artifact
        this.getField("Common WithImage").display = display.hidden
        this.getField("Uncommon WithImage").display = display.hidden
        this.getField("Rare WithImage").display = display.hidden
        this.getField("VeryRare WithImage").display = display.hidden
        this.getField("Legendary WithImage").display = display.hidden
        this.getField("Artifact WithImage").display = display.visible
      } else { //Common
        this.getField("Common WithImage").display = display.visible
        this.getField("Uncommon WithImage").display = display.hidden
        this.getField("Rare WithImage").display = display.hidden
        this.getField("VeryRare WithImage").display = display.hidden
        this.getField("Legendary WithImage").display = display.hidden
        this.getField("Artifact WithImage").display = display.hidden
      }
      break;
    case "Common":
      this.getField("Common WithImage").display = display.visible
      this.getField("Uncommon WithImage").display = display.hidden
      this.getField("Rare WithImage").display = display.hidden
      this.getField("VeryRare WithImage").display = display.hidden
      this.getField("Legendary WithImage").display = display.hidden
      this.getField("Artifact WithImage").display = display.hidden
      break;
    case "Uncommon":
      this.getField("Common WithImage").display = display.hidden
      this.getField("Uncommon WithImage").display = display.visible
      this.getField("Rare WithImage").display = display.hidden
      this.getField("VeryRare WithImage").display = display.hidden
      this.getField("Legendary WithImage").display = display.hidden
      this.getField("Artifact WithImage").display = display.hidden
      break;
    case "Rare":
      this.getField("Common WithImage").display = display.hidden
      this.getField("Uncommon WithImage").display = display.hidden
      this.getField("Rare WithImage").display = display.visible
      this.getField("VeryRare WithImage").display = display.hidden
      this.getField("Legendary WithImage").display = display.hidden
      this.getField("Artifact WithImage").display = display.hidden
      break;
    case "Very Rare":
      this.getField("Common WithImage").display = display.hidden
      this.getField("Uncommon WithImage").display = display.hidden
      this.getField("Rare WithImage").display = display.hidden
      this.getField("VeryRare WithImage").display = display.visible
      this.getField("Legendary WithImage").display = display.hidden
      this.getField("Artifact WithImage").display = display.hidden
      break;
    case "Legendary":
      this.getField("Common WithImage").display = display.hidden
      this.getField("Uncommon WithImage").display = display.hidden
      this.getField("Rare WithImage").display = display.hidden
      this.getField("VeryRare WithImage").display = display.hidden
      this.getField("Legendary WithImage").display = display.visible
      this.getField("Artifact WithImage").display = display.hidden
      break;
    case "Artifact":
      this.getField("Common WithImage").display = display.hidden
      this.getField("Uncommon WithImage").display = display.hidden
      this.getField("Rare WithImage").display = display.hidden
      this.getField("VeryRare WithImage").display = display.hidden
      this.getField("Legendary WithImage").display = display.hidden
      this.getField("Artifact WithImage").display = display.visible
      break;
  }
}
