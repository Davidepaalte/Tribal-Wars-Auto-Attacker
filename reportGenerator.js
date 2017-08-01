const SPEARMAN = "spear";
const SWORDSMAN = "sword";
const AXEMAN = "axe";
const ACHER = "archer";
const SCOUT = "spy";
const LIGHT_CAVALRY = "light";
const MOUNTED_ARCHER = "marcher";
const HEAVY_CAVALRY = "heavy";
const RAM = "ram";
const CATAPULT = "catapult";
const PALADIN = "knight";
const NOBLE = "snob";
const MILITIA = "militia";

function getTroopCount(type, side, aliveTroops = true) {  
  switch (type) {
    case "spear":
      return getTroopCountByID(".unit-item.unit-item-spear", side, aliveTroops);
    case "sword":
      return getTroopCountByID(".unit-item.unit-item-sword", side, aliveTroops);
    case "axe":
      return getTroopCountByID(".unit-item.unit-item-axe", side, aliveTroops);
    case "archer":
      return getTroopCountByID(".unit-item.unit-item-archer", side, aliveTroops);
    case "spy":
      return getTroopCountByID(".unit-item.unit-item-spy", side, aliveTroops);
    case "light":
      return getTroopCountByID(".unit-item.unit-item-light", side, aliveTroops);
    case "marcher":
      return getTroopCountByID(".unit-item.unit-item-marcher", side, aliveTroops);
    case "heavy":
      return getTroopCountByID(".unit-item.unit-item-heavy", side, aliveTroops);
    case "ram":
      return getTroopCountByID(".unit-item.unit-item-ram", side, aliveTroops);
    case "catapult":
      return getTroopCountByID(".unit-item.unit-item-catapult", side, aliveTroops);
    case "knight":
      return getTroopCountByID(".unit-item.unit-item-knight", side, aliveTroops);
    case "snob":
      return getTroopCountByID(".unit-item.unit-item-snob", side, aliveTroops);
    case "militia":
      return getTroopCountByID(".unit-item.unit-item-militia", side, aliveTroops);
    default:
      console.log("unit type not recognized");
  }
}

function getTroopCountByID(id, side, aliveTroops = true) {
  if (id === ".unit-item.unit-item-militia") {
    if (aliveTroops)
      return $(id)[0].innerHTML - return $(id)[1].innerHTML;
    
    return $(id)[0].innerHTML;
  }

  if (!aliveTroops) {
    if (side === "Atk")
      return $(id)[0].innerHTML;
    
    return $(id)[2].innerHTML;
  }
  else {
    if (side === "Atk")
      return $(id)[0].innerHTML - $(id)[1].innerHTML;
    
    return $(id)[2].innerHTML - $(id)[3].innerHTML;
  }
}
