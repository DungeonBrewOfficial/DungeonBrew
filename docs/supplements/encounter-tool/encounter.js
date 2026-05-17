/* Encounter Builder — DungeonBrew Logic */

// ═══════════════════════════════════════════════════════
// ENCOUNTER PATTERN DEFINITIONS
// ═══════════════════════════════════════════════════════
const encounterPatterns = [
  {
    id: "blank_slate",
    name: "— Select a Pattern (or Blank Slate) —",
    description: "Start with a completely empty encounter form. Clears pattern-specific fields and resets hints.",
    pre_populated_fields: { playerObjectives: "", oppositionObjectives: "", encounterType: "" },
    specific_prompts: {}
  },
  {
    id: "escort_protect",
    name: "Escort / Protect",
    description: "Players must guide or defend a target (NPC, item, information) to a specific location or for a set duration, facing opposition.",
    pre_populated_fields: {
      encounterType: "Escort, Protection, Defense",
      playerObjectives: "Safely escort the [TARGET/ITEM] to [DESTINATION] OR Protect the [TARGET/ITEM] for [DURATION/EVENT].",
      oppositionObjectives: "Prevent the [TARGET/ITEM] from reaching [DESTINATION] OR Capture/Destroy/Steal the [TARGET/ITEM]."
    },
    specific_prompts: {
      decisionPointsHint: "What choices can players make regarding the route, pace, defensive formations, or use of resources for the escort/protection?",
      interactiveElementsHint: "What environmental features could offer protection, create hazards, or be used strategically by either side during the escort?",
      endConditionsHint: "Besides reaching the destination/surviving the duration, what other ways might the escort conclude (e.g., target captured, all threats neutralized, a negotiated settlement)? Consider partial successes."
    }
  },
  {
    id: "chase_race",
    name: "Chase / Race",
    description: "Players are pursuing a fleeing target, being pursued themselves, or racing against an opponent to a common objective or location.",
    pre_populated_fields: {
      encounterType: "Chase, Pursuit, Race",
      playerObjectives: "Catch the [QUARRY] OR Escape from the [PURSUER] OR Reach [FINISH_LINE/OBJECTIVE] before the opposition.",
      oppositionObjectives: "Evade capture OR Catch the [TARGETS] OR Reach [FINISH_LINE/OBJECTIVE] first."
    },
    specific_prompts: {
      environmentDescriptionHint: "Describe distinct 'scenes' or segments of the chase. What are the key locations, terrains, and transitions? How does the environment change?",
      interactiveElementsHint: "What obstacles must be overcome by participants? Are there opportunities to gain/lose ground, create shortcuts, or hinder opponents using the environment?",
      consequencesHint: "What are the stakes? What happens if the quarry escapes or is caught? What if the players win/lose the race? Are there consequences for how the chase is conducted (e.g., collateral damage)?"
    }
  },
  {
    id: "defense_holdout",
    name: "Defense / Holdout",
    description: "Players must defend a static location, object, or group of NPCs against waves of attackers or a sustained assault for a specific duration or until a condition is met.",
    pre_populated_fields: {
      encounterType: "Defense, Holdout, Siege",
      playerObjectives: "Defend [LOCATION/TARGET] for [DURATION/NUMBER OF WAVES] OR Repel all attackers OR Survive until [RELIEF_ARRIVES/OBJECTIVE_COMPLETED].",
      oppositionObjectives: "Breach the defenses and capture/destroy [LOCATION/TARGET] OR Overwhelm the defenders."
    },
    specific_prompts: {
      environmentDescriptionHint: "Describe the defensible location. What are its strengths and weaknesses? Where are the chokepoints, entryways, and vulnerable areas?",
      interactiveElementsHint: "What fortifications exist or can be made? Are there traps, barricades, or environmental hazards that can be used by defenders or attackers?",
      npcMotivationHint: "If there are attackers, what are their waves or phases? Do they have special units or tactics? What is the motivation of the attackers beyond just destruction?"
    }
  },
  {
    id: "exploration_investigation",
    name: "Exploration / Investigation",
    description: "Players explore a new area to uncover information, find a specific item/person, or solve a mystery. Emphasis on discovery, puzzles, and information gathering.",
    pre_populated_fields: {
      encounterType: "Exploration, Investigation, Discovery, Puzzle",
      playerObjectives: "Discover the [SECRET/TRUTH/LOCATION] OR Find [ITEM/PERSON/CLUE] OR Map out the [AREA] OR Solve the [MYSTERY/PUZZLE].",
      oppositionObjectives: "Protect the [SECRET] OR Prevent access to [AREA/INFORMATION] OR Misdirect/Deceive the investigators."
    },
    specific_prompts: {
      hooksHint: "How do players learn about this place or mystery? What clues or rumors draw them in? Is there a specific question they are trying to answer?",
      decisionPointsHint: "What paths can they explore? What clues require interpretation? Are there red herrings? What tools or skills are key to uncovering information?",
      interactiveElementsHint: "What objects, texts, mechanisms, or environmental features hold clues or require interaction to progress? Are there puzzles to solve or hidden details to find?"
    }
  },
  {
    id: "negotiation_interrogation",
    name: "Negotiation / Interrogation",
    description: "Players engage in a social encounter to gain information, make a deal, persuade, or intimidate NPCs.",
    pre_populated_fields: {
      encounterType: "Social, Negotiation, Interrogation, Parley, Diplomacy",
      playerObjectives: "Gain [SPECIFIC INFORMATION/ITEM/CONCESSION] from [NPC/GROUP] OR Persuade [NPC/GROUP] to [TAKE A SPECIFIC ACTION/CHANGE STANCE].",
      oppositionObjectives: "Withhold [INFORMATION/ITEM/CONCESSION] OR Maintain current [STANCE/PLAN] OR Deceive/Mislead the PCs OR Gain a concession from the PCs."
    },
    specific_prompts: {
      npcMotivationHint: "What are the NPC's core desires, fears, loyalties, and secrets? What leverage do they have, or what leverage can the PCs discover/use? What is their initial disposition towards the PCs?",
      decisionPointsHint: "What are the key arguments, questions, or points of contention? Are there social skill checks, offers, threats, or emotional appeals involved? What are the NPC's potential breaking points?",
      consequencesHint: "What happens if negotiations succeed or fail? Does a failed negotiation lead to another type of encounter (e.g., combat, chase)? Are there long-term reputational repercussions?"
    }
  },
  {
    id: "infiltration_assassination",
    name: "Infiltration / Assassination",
    description: "Players must stealthily enter a guarded location to achieve an objective (steal, gather intel, sabotage, or eliminate a target) and possibly escape.",
    pre_populated_fields: {
      encounterType: "Infiltration, Stealth, Assassination, Sabotage, Heist",
      playerObjectives: "Infiltrate [LOCATION] undetected. Achieve [PRIMARY_OBJECTIVE]. Escape [LOCATION] (optional: without raising alarm).",
      oppositionObjectives: "Prevent unauthorized access to [LOCATION]. Protect [TARGET/ASSET]. Detect and neutralize intruders."
    },
    specific_prompts: {
      environmentDescriptionHint: "Detail the layers of security: patrols, static guards, observation points, alarms, locks, magical wards. What are the blind spots or less-guarded routes?",
      interactiveElementsHint: "What elements aid or hinder infiltration (e.g., shadows, noise-making debris, alarm triggers, disguise opportunities, secret passages, guard schedules)?",
      decisionPointsHint: "What are the critical choices during infiltration (e.g., timing, route, distraction vs. avoidance, lethal vs. non-lethal takedowns, when/if to break stealth)?",
      consequencesHint: "What happens if detected early, mid-mission, or during escape? What are the consequences of achieving the objective but being caught vs. failing but escaping?"
    }
  },
  {
    id: "puzzle_obstacle_course",
    name: "Puzzle / Obstacle Course",
    description: "Players must overcome a series of interconnected puzzles, environmental challenges, or skill-based tests to progress or achieve a goal.",
    pre_populated_fields: {
      encounterType: "Puzzle, Obstacle Course, Skill Challenge, Trap Gauntlet",
      playerObjectives: "Navigate the [CHALLENGE_AREA/GAUNTLET]. Solve the [CENTRAL_PUZZLE/SERIES_OF_PUZZLES]. Reach the [END_POINT/REWARD].",
      oppositionObjectives: "(Often passive) The environment/puzzles themselves act as opposition. OR: A guardian/entity tests the players."
    },
    specific_prompts: {
      environmentDescriptionHint: "Describe the layout of the course/puzzle area. How do different sections connect? What is the theme or nature of the challenges (e.g., ancient, magical, technological)?",
      interactiveElementsHint: "Detail the specific puzzle mechanisms, traps, levers, pressure plates, riddles, clues, or physical obstacles. How do they interact? Are there red herrings?",
      decisionPointsHint: "What skills or knowledge are required for each challenge? Are there multiple solutions or approaches? What are the consequences of incorrect attempts?",
      victoryPathsHint: "Beyond simply completing it, are there ways to complete it faster, more elegantly, or with bonus rewards/discoveries?"
    }
  },
  {
    id: "gauntlet_escape",
    name: "Gauntlet / Escape",
    description: "Players must fight or navigate their way through a series of hostile encounters or hazardous zones to escape a dangerous location or reach safety, often under pressure.",
    pre_populated_fields: {
      encounterType: "Gauntlet, Escape, Running Battle, Hazardous Journey",
      playerObjectives: "Escape from [DANGEROUS_LOCATION/PRISON]. Reach [SAFE_POINT/EXTRACTION_ZONE]. Survive the onslaught.",
      oppositionObjectives: "Prevent escape. Recapture or eliminate the targets. Wear down the players' resources."
    },
    specific_prompts: {
      environmentDescriptionHint: "Describe the series of zones or areas players must pass through. How do they differ? Are there chokepoints, open areas, or places to briefly rest/hide?",
      interactiveElementsHint: "What hazards, traps, or environmental features exist in each zone? Are there limited resources (e.g., cover, healing items) players might find or fight over?",
      npcMotivationHint: "What types of enemies or challenges are present in each stage of the gauntlet? Do they escalate in difficulty or change tactics? Is there a persistent pursuer?",
      endConditionsHint: "What defines a successful escape? Is it just reaching a point, or must certain conditions be met (e.g., with a specific item, with a certain number of survivors)?"
    }
  }
];

// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
const originalHints = {};
let lastConfirmedPatternId = "blank_slate";

// ═══════════════════════════════════════════════════════
// TOAST MESSAGES
// ═══════════════════════════════════════════════════════
function showMessage(message, type = 'info') {
  const container = document.getElementById('appMessages');
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = `eb-toast eb-toast--${type}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 600);
  }, 3000);
}

// ═══════════════════════════════════════════════════════
// DYNAMIC LIST MANAGEMENT
// ═══════════════════════════════════════════════════════
function renderListItem(containerId, itemText) {
  const container = document.getElementById(containerId);
  if (!container) { showMessage(`List container '${containerId}' not found.`, 'error'); return; }

  const item = document.createElement('div');
  item.className = 'eb-list-item';

  const span = document.createElement('span');
  span.textContent = itemText;
  item.appendChild(span);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'eb-remove-btn';
  removeBtn.textContent = 'Remove';
  removeBtn.type = 'button';
  removeBtn.onclick = () => container.removeChild(item);
  item.appendChild(removeBtn);

  container.appendChild(item);
}

function addListItemFromInput(containerId, inputId) {
  const input = document.getElementById(inputId);
  const text = input.value.trim();
  if (!text) { showMessage("Please enter text for the item.", "error"); return; }
  renderListItem(containerId, text);
  input.value = '';
}

// ═══════════════════════════════════════════════════════
// PATTERN SYSTEM
// ═══════════════════════════════════════════════════════
function populatePatternSelector() {
  const selector = document.getElementById('encounterPatternSelect');
  selector.innerHTML = '';
  encounterPatterns.forEach(pattern => {
    const option = document.createElement('option');
    option.value = pattern.id;
    option.textContent = pattern.name;
    selector.appendChild(option);
  });
  selector.value = lastConfirmedPatternId;
  selector.addEventListener('change', handlePatternSelection);
}

function storeOriginalHints() {
  document.querySelectorAll('.eb-hint[id]').forEach(el => {
    if (el.id) originalHints[el.id] = el.textContent;
  });
}

function applyPatternLogic(pattern) {
  if (!pattern) return;

  // Update description
  document.getElementById('patternDescriptionDisplay').textContent = pattern.description;

  // Reset all hints
  for (const hintId in originalHints) {
    const el = document.getElementById(hintId);
    if (el) el.textContent = originalHints[hintId];
  }

  // Clear pre-populated fields from blank_slate
  const blankSlate = encounterPatterns.find(p => p.id === "blank_slate");
  if (blankSlate && blankSlate.pre_populated_fields) {
    for (const fieldId in blankSlate.pre_populated_fields) {
      const el = document.getElementById(fieldId);
      if (el) el.value = "";
    }
  }

  // Apply pattern's pre-populated fields
  if (pattern.pre_populated_fields) {
    for (const fieldId in pattern.pre_populated_fields) {
      const el = document.getElementById(fieldId);
      if (el) el.value = pattern.pre_populated_fields[fieldId];
    }
  }

  // Apply pattern's specific prompts (hint overrides)
  if (pattern.specific_prompts) {
    for (const hintId in pattern.specific_prompts) {
      const el = document.getElementById(hintId);
      if (el) el.textContent = pattern.specific_prompts[hintId];
    }
  }
}

function handlePatternSelection(event) {
  const newId = event.target.value;
  const pattern = encounterPatterns.find(p => p.id === newId);
  if (!pattern) {
    event.target.value = lastConfirmedPatternId;
    return;
  }
  applyPatternLogic(pattern);
  lastConfirmedPatternId = newId;
}

// ═══════════════════════════════════════════════════════
// SAVE / LOAD / PRINT
// ═══════════════════════════════════════════════════════
function getFormData() {
  const form = document.getElementById('encounterForm');
  const data = { selectedPatternId: document.getElementById('encounterPatternSelect').value };

  const fields = [
    "seed", "dramaticQuestion", "encounterType", "primaryConflict",
    "conflictOpposition", "npcMotivation", "victoryPaths", "playerObjectives",
    "oppositionObjectives", "consequences", "environmentDescription",
    "atmosphereMood", "emotionalIntensity", "endConditions",
    "narrativeLinks", "largerSituation", "leftHooks"
  ];

  fields.forEach(name => {
    const el = form.elements[name];
    if (el) data[name] = el.value;
  });

  function getListItems(containerId) {
    const items = [];
    const container = document.getElementById(containerId);
    if (container) container.querySelectorAll('.eb-list-item span').forEach(span => items.push(span.textContent));
    return items;
  }

  data.hooksList = getListItems('hooksListContainer');
  data.decisionPoints = getListItems('decisionPointsContainer');
  data.interactiveElements = getListItems('interactiveElementsContainer');

  return data;
}

function downloadEncounterData() {
  const data = getFormData();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);

  const seed = document.getElementById('seed').value.trim();
  const filename = seed
    ? seed.toLowerCase().replace(/[^a-z0-9]+/g, '_').slice(0, 40) + '_encounter.json'
    : 'encounter.json';
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
  showMessage('Encounter saved!', 'success');
}

function loadEncounterFromFile() {
  const fileInput = document.getElementById('uploadFile');
  const file = fileInput.files[0];
  if (!file) { showMessage('Please select a JSON file.', 'error'); return; }
  if (file.type !== "application/json" && !file.name.endsWith('.json')) {
    showMessage('Invalid file type. Please upload a .json file.', 'error');
    fileInput.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const data = JSON.parse(event.target.result);
      populateFormWithData(data);
    } catch (e) {
      showMessage('Error parsing JSON: ' + e.message, 'error');
    }
  };
  reader.onerror = () => showMessage('Error reading file.', 'error');
  reader.readAsText(file);
  fileInput.value = '';
}

function populateFormWithData(data) {
  const form = document.getElementById('encounterForm');

  // Clear dynamic lists
  document.getElementById('hooksListContainer').innerHTML = '';
  document.getElementById('decisionPointsContainer').innerHTML = '';
  document.getElementById('interactiveElementsContainer').innerHTML = '';

  // Apply pattern
  let pattern = encounterPatterns.find(p => p.id === "blank_slate");
  if (data.selectedPatternId) {
    const found = encounterPatterns.find(p => p.id === data.selectedPatternId);
    if (found) pattern = found;
    document.getElementById('encounterPatternSelect').value = data.selectedPatternId;
    lastConfirmedPatternId = data.selectedPatternId;
  } else {
    document.getElementById('encounterPatternSelect').value = "blank_slate";
    lastConfirmedPatternId = "blank_slate";
  }
  applyPatternLogic(pattern);

  // Populate fields
  for (const key in data) {
    if (key === 'selectedPatternId') continue;
    if (key === 'hooksList' && Array.isArray(data[key])) {
      data[key].forEach(text => renderListItem('hooksListContainer', text));
    } else if (key === 'decisionPoints' && Array.isArray(data[key])) {
      data[key].forEach(text => renderListItem('decisionPointsContainer', text));
    } else if (key === 'interactiveElements' && Array.isArray(data[key])) {
      data[key].forEach(text => renderListItem('interactiveElementsContainer', text));
    } else {
      const el = form.elements[key];
      if (el) el.value = data[key];
    }
  }
  showMessage('Encounter loaded!', 'success');
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  storeOriginalHints();
  populatePatternSelector();

  const initial = encounterPatterns.find(p => p.id === lastConfirmedPatternId);
  if (initial) {
    document.getElementById('patternDescriptionDisplay').textContent = initial.description;
    applyPatternLogic(initial);
  }
});
