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

var report = window.open ("https://" + window.location.host + "/game.php?screen=place&mode=sim","report");
report.onload = function() { fillReport(report); };

function fillReport(report) {
  // Attacker
  fillReportByUnit(report, SPEARMAN, "Atk");
  fillReportByUnit(report, SWORDSMAN, "Atk");
  fillReportByUnit(report, AXEMAN, "Atk");
  fillReportByUnit(report, ACHER, "Atk");
  fillReportByUnit(report, SCOUT, "Atk");
  fillReportByUnit(report, LIGHT_CAVALRY, "Atk");
  fillReportByUnit(report, MOUNTED_ARCHER, "Atk");
  fillReportByUnit(report, HEAVY_CAVALRY, "Atk");
  fillReportByUnit(report, RAM, "Atk");
  fillReportByUnit(report, CATAPULT, "Atk");
  fillReportByUnit(report, PALADIN, "Atk");
  fillReportByUnit(report, NOBLE, "Atk");
  
  // Defender
  fillReportByUnit(report, SPEARMAN, "Def");
  fillReportByUnit(report, SWORDSMAN, "Def");
  fillReportByUnit(report, AXEMAN, "Def");
  fillReportByUnit(report, ACHER, "Def");
  fillReportByUnit(report, SCOUT, "Def");
  fillReportByUnit(report, LIGHT_CAVALRY, "Def");
  fillReportByUnit(report, MOUNTED_ARCHER, "Def");
  fillReportByUnit(report, HEAVY_CAVALRY, "Def");
  fillReportByUnit(report, RAM, "Def");
  fillReportByUnit(report, CATAPULT, "Def");
  fillReportByUnit(report, PALADIN, "Def");
  fillReportByUnit(report, NOBLE, "Def");
  fillReportByUnit(report, MILITIA, "Def");
  
  // Defender wall
  report.document.getElementsByName("def_wall")[0].value = getWallLvl();
  
  // Religion
  report.document.getElementsByName("belief_att")[0].checked =
    ($("#attack_info_att").find('td:contains("The troops were religious.")').length === 1);
  report.document.getElementsByName("belief_def")[0].checked =
    ($("#attack_info_def").find('td:contains("The troops were religious.")').length === 1);
}

function getWallLvl () {
  return $("#attack_spy_buildings_right>tbody>tr").find('td:contains(Wall)').parent().children()[1].innerHTML;
}

function fillReportByUnit(report, type, side) {
  if (side === "Atk")
    report.document.getElementsByName("att_"+type)[0].value = getTroopCount(type, "Atk");
  else
    report.document.getElementsByName("def_"+type)[0].value = getTroopCount(type, "Def");
}

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
      return $(id)[0].innerHTML - $(id)[1].innerHTML;
    
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
