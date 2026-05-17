/* Thieves' Guild Creation Form — Logic */

// --- Structure Type Descriptions ---
const structureTypeDescriptions = {
  "Rigid Hierarchy (Authoritarian)": `
    <strong>Rigid Hierarchy (Authoritarian)</strong>
    <ul>
      <li>Strong central authority and strict discipline within several divisions.</li>
      <li>Guild Master holds absolute power; orders flow downward without question.</li>
    </ul>
  `,
  "Devolved Hierarchy (Franchising)": `
    <strong>Devolved Hierarchy (Franchising)</strong>
    <ul>
      <li>Regional structures, each with its own hierarchy and degree of autonomy.</li>
      <li>Satellite guilds operate semi-independently but answer to a central authority.</li>
    </ul>
  `,
  "Hierarchical Conglomerate (Alliance)": `
    <strong>Hierarchical Conglomerate (Alliance)</strong>
    <ul>
      <li>Loose or umbrella association of otherwise separate organized criminal groups.</li>
      <li>Each group retains its own master; cooperation is negotiated, not mandated.</li>
    </ul>
  `,
  "Core Criminal Group (Democracy)": `
    <strong>Core Criminal Group (Democracy)</strong>
    <ul>
      <li>Horizontal structure of core individuals who describe themselves as working for the same organization.</li>
      <li>Decisions made collectively; no single leader holds final authority.</li>
    </ul>
  `,
  "Organized Criminal Network (Socialism)": `
    <strong>Organized Criminal Network (Socialism)</strong>
    <ul>
      <li>Individuals engage in criminal activity in shifting alliances, not necessarily affiliated with any criminal group.</li>
      <li>Members associate based on skills needed for specific jobs rather than permanent loyalty.</li>
    </ul>
  `
};

// --- Structure Model Descriptions ---
const structureModelDescriptions = {
  "Hierarchical Model": `
    <strong>Hierarchical Model</strong>
    <ul>
      <li>Structured with graded ranks of authority from the leader to the rank-and-file members.</li>
      <li>Leaders oversee the activities of the members.</li>
      <li>Pyramid models are possible and might have religious affiliations or cultish properties.</li>
    </ul>
  `,
  "Cultural Model": `
    <strong>Cultural Model</strong>
    <ul>
      <li>Cultural ties bind the group together rather than hierarchical structure.</li>
      <li>Almost impossible for outsiders to gain access and even harder to gain rank or authority.</li>
      <li>Can be regional, national, or racial.</li>
    </ul>
  `,
  "Enterprise Model": `
    <strong>Enterprise Model</strong>
    <ul>
      <li>Organized crime and legitimate business involve similar activities on different ends of legality.</li>
      <li>The model is based on profit and supply and demand.</li>
      <li>Structure can vary widely between a rigid hierarchy and a criminal network.</li>
    </ul>
  `
};

// --- Dropdown Handlers ---
function updateStructureInfo() {
  const val = document.getElementById('structureType').value;
  document.getElementById('structureTypeInfo').innerHTML = structureTypeDescriptions[val] || '';
}

function updateModelInfo() {
  const val = document.getElementById('structureModel').value;
  document.getElementById('structureModelInfo').innerHTML = structureModelDescriptions[val] || '';
}

// --- Save Form Data ---
function saveFormData() {
  const form = document.getElementById('guildForm');
  const data = {};

  // Collect all text/number/textarea/select inputs
  form.querySelectorAll('input[type="text"], input[type="number"], textarea, select').forEach(el => {
    if (el.id) data[el.id] = el.value;
  });

  // Collect all checkboxes
  form.querySelectorAll('input[type="checkbox"]').forEach(el => {
    if (el.id) data[el.id] = el.checked;
  });

  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);

  // Use guild name for filename if available
  const guildName = form.querySelector('#guildName').value.trim();
  const filename = guildName
    ? guildName.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '_guild.json'
    : 'thieves_guild.json';
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

// --- Load Form Data ---
function loadFormData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      const form = document.getElementById('guildForm');

      Object.keys(data).forEach(key => {
        const el = document.getElementById(key);
        if (!el) return;

        if (el.type === 'checkbox') {
          el.checked = !!data[key];
        } else {
          el.value = data[key];
        }
      });

      // Trigger dropdown updates
      updateStructureInfo();
      updateModelInfo();
    } catch (err) {
      alert('Error loading file. Please ensure it is a valid guild JSON file.');
    }
  };
  reader.readAsText(file);

  // Reset file input so same file can be loaded again
  event.target.value = '';
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', function() {
  updateStructureInfo();
  updateModelInfo();

  // Wire up the hidden file input
  document.getElementById('uploadFile').addEventListener('change', loadFormData);
});
