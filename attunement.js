var attunementBy = this.getField("AttunementBy").value;
var attunementReq = this.getField("AttunementDrop1").value;

var attunementEnchant1 = this.getField("Enchantment 1").value.split('--')[4];
var attunementEnchant2 = this.getField("Enchantment 2").value.split('--')[4];
var attunementEnchant3 = this.getField("Enchantment 3").value.split('--')[4];

var rarityDrop = this.getField("RarityDrop1").value;

var rarityEnchant1 = Number(this.getField("Enchantment 1").value.split('--')[3]);
var rarityEnchant2 = Number(this.getField("Enchantment 2").value.split('--')[3]);
var rarityEnchant3 = Number(this.getField("Enchantment 3").value.split('--')[3]);

var rarityValue = (isNaN(rarityEnchant1) ? 0 : rarityEnchant1) + (isNaN(rarityEnchant2) ? 0 : rarityEnchant2) + (isNaN(rarityEnchant3) ? 0 : rarityEnchant3)

// FORMAT 
if (attunementReq == "No Attunement") {
  event.value = ""
  this.getField("AttunementCommon").display = display.hidden
  this.getField("AttunementUncommon").display = display.hidden
  this.getField("AttunementRare").display = display.hidden
  this.getField("AttunementVeryRare").display = display.hidden
  this.getField("AttunementLegendary").display = display.hidden
  this.getField("AttunementArtifact").display = display.hidden
} else if ((attunementReq == "Auto" || attunementReq == "– Attunement –") && (attunementBy === "Auto Attunement By" || attunementBy === "– Attunement By –")) {
  if ((attunementEnchant1 === "false" || !attunementEnchant1) && (attunementEnchant2 === "false" || !attunementEnchant2) && (attunementEnchant3 === "false" || !attunementEnchant3)) {
    event.value = ""
    this.getField("AttunementCommon").display = display.hidden
    this.getField("AttunementUncommon").display = display.hidden
    this.getField("AttunementRare").display = display.hidden
    this.getField("AttunementVeryRare").display = display.hidden
    this.getField("AttunementLegendary").display = display.hidden
    this.getField("AttunementArtifact").display = display.hidden
  } else if ((attunementEnchant1 && attunementEnchant1 != "yes" && attunementEnchant1 != "false") || (attunementEnchant2 && attunementEnchant2 != "yes" && attunementEnchant2 != "false") || (attunementEnchant3 && attunementEnchant3 != "yes" && attunementEnchant3 != "false")) {
    if (attunementEnchant1 && attunementEnchant1 != "yes") {
      event.value = "Requires attunement by a " + attunementEnchant1
    } else if (attunementEnchant2 && attunementEnchant2 != "yes") {
      event.value = "Requires attunement by a " + attunementEnchant2
    } else if (attunementEnchant3 && attunementEnchant3 != "yes") {
      event.value = "Requires attunement by a " + attunementEnchant3
    }
    switch (rarityDrop) {
      case "Auto":
        if (2 <= rarityValue && rarityValue < 4) { //Uncommon
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.visible
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (4 <= rarityValue && rarityValue < 8) { // Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.visible
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.visible
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.visible
          this.getField("AttunementArtifact").display = display.hidden
        } else if (32 <= rarityValue) { //Artifact
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.visible
        } else { //Common
          this.getField("AttunementCommon").display = display.visible
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        }
        break;
      case "– Rarity –":
        if (2 <= rarityValue && rarityValue < 4) { //Uncommon
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.visible
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (4 <= rarityValue && rarityValue < 8) { // Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.visible
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.visible
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.visible
          this.getField("AttunementArtifact").display = display.hidden
        } else if (32 <= rarityValue) { //Artifact
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.visible
        } else { //Common
          this.getField("AttunementCommon").display = display.visible
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        }
        break;
      case "Common":
        this.getField("AttunementCommon").display = display.visible
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Uncommon":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.visible
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Rare":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.visible
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Very Rare":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.visible
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Legendary":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.visible
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Artifact":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.visible
        break;
    }
  } else if (attunementEnchant1 === "yes" || attunementEnchant2 === "yes" || attunementEnchant3 === "yes") {
    event.value = "Requires attunement"
    switch (rarityDrop) {
      case "Auto":
        if (2 <= rarityValue && rarityValue < 4) { //Uncommon
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.visible
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (4 <= rarityValue && rarityValue < 8) { // Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.visible
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.visible
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.visible
          this.getField("AttunementArtifact").display = display.hidden
        } else if (32 <= rarityValue) { //Artifact
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.visible
        } else { //Common
          this.getField("AttunementCommon").display = display.visible
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        }
        break;
      case "– Rarity –":
        if (2 <= rarityValue && rarityValue < 4) { //Uncommon
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.visible
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (4 <= rarityValue && rarityValue < 8) { // Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.visible
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.visible
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.visible
          this.getField("AttunementArtifact").display = display.hidden
        } else if (32 <= rarityValue) { //Artifact
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.visible
        } else { //Common
          this.getField("AttunementCommon").display = display.visible
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        }
        break;
      case "Common":
        this.getField("AttunementCommon").display = display.visible
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Uncommon":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.visible
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Rare":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.visible
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Very Rare":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.visible
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Legendary":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.visible
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Artifact":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.visible
        break;
    }
  }
} else if (attunementReq == "Requires Attunement" && (attunementBy === "Auto Attunement By" || attunementBy === "– Attunement By –")) {
  if ((attunementEnchant1 && attunementEnchant1 != "yes" && attunementEnchant1 != "false") || (attunementEnchant2 && attunementEnchant2 != "yes" && attunementEnchant2 != "false") || (attunementEnchant3 && attunementEnchant3 != "yes" && attunementEnchant3 != "false")) {
    if (attunementEnchant1 && attunementEnchant1 != "yes") {
      event.value = "Requires attunement by a " + attunementEnchant1
    } else if (attunementEnchant2 && attunementEnchant2 != "yes") {
      event.value = "Requires attunement by a " + attunementEnchant2
    } else if (attunementEnchant3 && attunementEnchant3 != "yes") {
      event.value = "Requires attunement by a " + attunementEnchant3
    }
    switch (rarityDrop) {
      case "Auto":
        if (2 <= rarityValue && rarityValue < 4) { //Uncommon
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.visible
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (4 <= rarityValue && rarityValue < 8) { // Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.visible
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.visible
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.visible
          this.getField("AttunementArtifact").display = display.hidden
        } else if (32 <= rarityValue) { //Artifact
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.visible
        } else { //Common
          this.getField("AttunementCommon").display = display.visible
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        }
        break;
      case "– Rarity –":
        if (2 <= rarityValue && rarityValue < 4) { //Uncommon
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.visible
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (4 <= rarityValue && rarityValue < 8) { // Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.visible
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.visible
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.visible
          this.getField("AttunementArtifact").display = display.hidden
        } else if (32 <= rarityValue) { //Artifact
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.visible
        } else { //Common
          this.getField("AttunementCommon").display = display.visible
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        }
        break;
      case "Common":
        this.getField("AttunementCommon").display = display.visible
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Uncommon":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.visible
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Rare":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.visible
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Very Rare":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.visible
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Legendary":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.visible
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Artifact":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.visible
        break;
    }
  } else {
    event.value = "Requires attunement"
    switch (rarityDrop) {
      case "Auto":
        if (2 <= rarityValue && rarityValue < 4) { //Uncommon
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.visible
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (4 <= rarityValue && rarityValue < 8) { // Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.visible
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.visible
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.visible
          this.getField("AttunementArtifact").display = display.hidden
        } else if (32 <= rarityValue) { //Artifact
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.visible
        } else { //Common
          this.getField("AttunementCommon").display = display.visible
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        }
        break;
      case "– Rarity –":
        if (2 <= rarityValue && rarityValue < 4) { //Uncommon
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.visible
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (4 <= rarityValue && rarityValue < 8) { // Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.visible
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.visible
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.visible
          this.getField("AttunementArtifact").display = display.hidden
        } else if (32 <= rarityValue) { //Artifact
          this.getField("AttunementCommon").display = display.hidden
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.visible
        } else { //Common
          this.getField("AttunementCommon").display = display.visible
          this.getField("AttunementUncommon").display = display.hidden
          this.getField("AttunementRare").display = display.hidden
          this.getField("AttunementVeryRare").display = display.hidden
          this.getField("AttunementLegendary").display = display.hidden
          this.getField("AttunementArtifact").display = display.hidden
        }
        break;
      case "Common":
        this.getField("AttunementCommon").display = display.visible
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Uncommon":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.visible
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Rare":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.visible
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Very Rare":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.visible
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Legendary":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.visible
        this.getField("AttunementArtifact").display = display.hidden
        break;
      case "Artifact":
        this.getField("AttunementCommon").display = display.hidden
        this.getField("AttunementUncommon").display = display.hidden
        this.getField("AttunementRare").display = display.hidden
        this.getField("AttunementVeryRare").display = display.hidden
        this.getField("AttunementLegendary").display = display.hidden
        this.getField("AttunementArtifact").display = display.visible
        break;
    }
  }
} else if (attunementBy != "Auto Attunement By" && attunementBy != "– Attunement By –") {
  event.value = "Requires attunement by a " + attunementBy
} 