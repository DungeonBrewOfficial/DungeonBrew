/* ============================================================
   NPC Builder – DungeonBrew
   All logic, data, and event wiring
   ============================================================ */

// ── Data Definitions ───────────────────────────────────────────
const motivationDefinitions = {
    minor: {
        concise: "Short-term objectives; immediate needs or tasks. Quickly resolved.",
        full: "These represent short-term objectives for your NPC, such as ensuring a timely delivery of goods or resolving a recent squabble with a neighbor. They are immediate concerns or tasks that demand the NPC’s attention. These motivations may be resolved relatively quickly, either through the NPC’s own efforts or with the help of the PCs. Once fulfilled, minor motivations give way to new challenges or opportunities, in the same way they do in our own lives. Short term goals often represent the needs of the NPC."
    },
    moderate: {
        concise: "Mid-range goals; require sustained effort and resources. May involve multiple steps or obstacles.",
        full: "These are mid-range objectives that your NPC aims to achieve, such as establishing a successful trade partnership with a neighboring town or securing a political alliance to bolster their influence. These motivations typically require more sustained effort and resources to accomplish compared to minor motivations. They may involve multiple steps or require the NPC to overcome significant obstacles along the way. As a result, these motivations can allow for PCs to be involved with the NPC for longer periods of time as they work through the various obstacles to help the NPC achieve their goal. Once achieved, moderate motivations can lead to new opportunities or challenges for the NPC to pursue, which may be as simple as moving on to the next trade partnership but could involve dealing with the persistent threat of bandits along their trade routes."
    },
    major: {
        concise: "Long-term aspirations; core driving forces shaping an NPC’s life. Profound consequences.",
        full: "Major Motivations: These are long-term aspirations or core driving forces behind your NPC’s actions and decisions. Examples include seeking revenge against a sworn enemy who wronged them in the past or striving to ascend to a position of power and authority within their community or organization. Major motivations often shape the NPC’s entire life trajectory and can drive them to undertake bold and ambitious endeavors. Achieving or failing to achieve a major motivation can have profound consequences not only for the NPC but also for the world around them. Major motivations are slow to accomplish and slow to replace but can endear PCs to them for life."
    }
};

const speechDefinitions = {
    speed: {
        _main: "Overall pace of the NPC’s speech.",
        fast: {
            _main: "Speaks faster than average.",
            nervous: "Always anxious or tense, trying to speak as quickly as possible before they are interrupted.",
            excitement: "Unable to contain their enthusiasm, talking over themselves because they speak faster than they think.",
            urgent: "Everything is important and must be conveyed before it is too late because everything is always in crisis.",
            impatient: "Unwilling to take the time to properly engage in conversations because there is something else they would rather be doing.",
            fast_talker: "Trying to pull one over by confusing their conversation partners because they don’t want anyone else to take the time to hear what they have to say."
        },
        slow: {
            _main: "Speaks slower than average.",
            thoughtful: "Deliberate and careful in their speech, taking the time to consider each word because being correct is more important than being quick.",
            calm: "Tranquil and relaxing in their communications with no urgency for what is coming because taking another moment will change nothing.",
            authoritative: "Measured and commanding because they know that no one will interrupt them.",
            weary: "Always tired, slow to communicate because of their perpetual exhaustion.",
            uncertain: "Vague or unsure of what their own thoughts are because they don’t know what you want to hear or they have never thought about the subject themselves."
        }
    },
    volume: {
        _main: "Overall loudness of the NPC’s speech.",
        loud: {
            _main: "Speaks louder than average.",
            confident: "Project their voice with certainty because they know they are right or that no one will challenge them.",
            commanding: "Know that the best way to be heard over the rabble is to rise above it. Literally. Because they are loud.",
            excitable: "Has a difficult time reigning in their volume due to excitability or impulsiveness.",
            angry: "In a perpetual rage that results in always being loud and acts as a challenge to anyone who might try to interrupt them.",
            attention_seeker: "Wants to be the center of attention and habitually draws attention to themselves."
        },
        soft: {
            _main: "Speaks softer than average.",
            shy: "Uncertain and hesitant in their interactions, seeming to lack conviction and can be bullied into almost anything.",
            enigmatic: "Prone to secrecy and confidence, habitually avoiding attention because the only people who hear them are those they want to hear them.",
            serene: "Gentle and soothing tone from someone who does not need to project in order to be heard or be confident.",
            respectful: "Deferential or polite to show respect to others because their actions reflect their bearing more than their volume.",
            muttering: "Constantly chattering to themselves, but impossible to hear because their words are usually for themselves."
        }
    },
    tone: {
        _main: "The emotional quality or character of the NPC’s voice.",
        cheerful: "Always sounds upbeat and positive, even when the situation doesn’t warrant it.",
        sarcastic: "Caustic, biting edge to speech, often with exaggerated intonation to emphasize the insincerity.",
        monotone: "Speaks in a flat, unvarying pitch, that makes them seem disinterested or robotic, but can also convey a level of unflappable calmness.",
        sincere: "Speaks with genuine emotion, often heartfelt, that makes them seem honest, trustworthy, and relatable.",
        hostile: "Aggressive and confrontational, often with a sharp edge that can make even neutral statements sound like threats."
    },
    emphasis: {
        _main: "How the NPC stresses words or phrases.",
        key_words: "Places stress on important words within a sentence to draw attention to them, which can change the meaning of a statement significantly based on what is emphasized.",
        repetition: "Repeats key phrases or words to ensure they are noticed and remembered because they think they are clever, are absentminded, or are trying to use doublespeak.",
        pitch_variation: "Uses changes in pitch to emphasize certain parts of their speech. Rising and falling tones can make their speech more engaging and highlight specific points.",
        volume_shifts: "Alternates between speaking loudly and softly to maintain interest, underscore certain points, or to confuse the listener.",
        dramatic_pauses: "Pauses at strategic points to let the significance of their words sink in or to convey authority."
    },
    pauses: {
        _main: "The use of hesitations or breaks in speech.",
        stumbling: "Pausing because they are tripping over their own words due to talking too fast, forgetting what they are going to say, or just forgetting words.",
        awkward: "Pauses at odd times, suggesting discomfort, social anxiety or that they are uneasy or unsure of themselves.",
        calculated: "Pauses deliberately to control the flow of conversation to manipulate the listener’s perceptions, sometimes in order to lie.",
        uncertain: "Often hesitates, using filler words like “um” and “uh.”",
        thoughtful: "Hesitates as they carefully consider their words, suggesting a deep thinker who values precision in communication."
    },
    vocabulary: {
        _main: "The type of words the NPC tends to use.",
        general: "No specific vocabulary type, uses common language or custom entries.",
        technical_jargon: "Characters can use terms specific to their profession or expertise to set themselves apart.",
        slang: "Using informal language or slang can indicate a character’s background or social standing.",
        regional_terms: "Incorporating regional vocabulary can give characters a sense of place within the fantasy world."
    },
    metaphors: {
        _main: "Figurative language the NPC uses.",
        general: "No specific metaphor type, uses common language or custom entries.",
        common: "Metaphors, in general, can add personality to a character. Having simple metaphors that a character is fond of are usually easy enough to find and jot down for future use.",
        cultural: "Metaphors that come from a character’s cultural background.",
        professional: "Sometimes giving a character their own personal metaphors can help make that character unique as they try to articulate their viewpoint on the world through their experiences."
    },
    speech_patterns: {
        _main: "Characteristic ways the NPC forms sentences or phrases.",
        repetition: "Repeating words or phrases because the character is obsessive, nervous, or excited. (e.g., Gloating: ‘Well, well, well...’; Insecure: ‘Sorry, sorry...’; Exasperation: ‘It isn’t right! I thought we had this…listen, it isn’t right.’)",
        phrasal_verbs: "Slang verbs (e.g., Noble: ‘Proceed’ not ‘go on’; Rural: ‘Looked after’ not ‘cared for’; Educated: ‘Encountered’ not ‘run into’).",
        varied_sentence_structure: "Length and/or complexity. Short & direct (e.g., ‘We work hard. We live simple.’) vs. long & elaborate (e.g., ‘Our community has always been one of diligence...’)."
    }
};

// ── State ──────────────────────────────────────────────────────
let currentNPC = {
    name: '',
    description: '',
    motivations: { minor: [], moderate: [], major: [] },
    speechProfile: {
        speed: null, speedType: null,
        volume: null, volumeType: null,
        tone: null, emphasis: null, pauses: null,
        vocabularyCategory: null, vocabularyExamples: '',
        metaphorsCategory: null, metaphorsExamples: '',
        speechPatterns: [], speechPatternsExamples: ''
    }
};
let editingMotivationId = null;

// ── DOM Ready ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // DOM references
    const npcNameInput = document.getElementById('npcName');
    const npcDescriptionInput = document.getElementById('npcDescription');
    const motivationTextInput = document.getElementById('motivationText');
    const motivationLevelSelect = document.getElementById('motivationLevel');
    const motivationLevelDescription = document.getElementById('motivationLevelDescription');
    const addOrUpdateMotivationBtn = document.getElementById('addOrUpdateMotivationBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const motivationFormTitle = document.getElementById('motivationFormTitle');

    const speedFastRadio = document.getElementById('speedFast');
    const speedSlowRadio = document.getElementById('speedSlow');
    const speedFastTypeContainer = document.getElementById('speedFastTypeContainer');
    const speedFastTypeSelect = document.getElementById('speedFastType');
    const speedFastTypeDescription = document.getElementById('speedFastTypeDescription');
    const speedSlowTypeContainer = document.getElementById('speedSlowTypeContainer');
    const speedSlowTypeSelect = document.getElementById('speedSlowType');
    const speedSlowTypeDescription = document.getElementById('speedSlowTypeDescription');

    const volumeLoudRadio = document.getElementById('volumeLoud');
    const volumeSoftRadio = document.getElementById('volumeSoft');
    const volumeLoudTypeContainer = document.getElementById('volumeLoudTypeContainer');
    const volumeLoudTypeSelect = document.getElementById('volumeLoudType');
    const volumeLoudTypeDescription = document.getElementById('volumeLoudTypeDescription');
    const volumeSoftTypeContainer = document.getElementById('volumeSoftTypeContainer');
    const volumeSoftTypeSelect = document.getElementById('volumeSoftType');
    const volumeSoftTypeDescription = document.getElementById('volumeSoftTypeDescription');

    const speechToneSelect = document.getElementById('speechTone');
    const speechToneDescription = document.getElementById('speechToneDescription');
    const speechEmphasisSelect = document.getElementById('speechEmphasis');
    const speechEmphasisDescription = document.getElementById('speechEmphasisDescription');
    const speechPausesSelect = document.getElementById('speechPauses');
    const speechPausesDescription = document.getElementById('speechPausesDescription');
    const speechVocabularyCategorySelect = document.getElementById('speechVocabularyCategory');
    const speechVocabularyCategoryDescription = document.getElementById('speechVocabularyCategoryDescription');
    const speechVocabularyExamplesTextarea = document.getElementById('speechVocabularyExamples');
    const speechMetaphorsCategorySelect = document.getElementById('speechMetaphorsCategory');
    const speechMetaphorsCategoryDescription = document.getElementById('speechMetaphorsCategoryDescription');
    const speechMetaphorsExamplesTextarea = document.getElementById('speechMetaphorsExamples');
    const speechPatternsCheckboxesContainer = document.getElementById('speechPatternsCheckboxes');
    const speechPatternsExamplesTextarea = document.getElementById('speechPatternsExamples');

    const outputNpcName = document.getElementById('outputNpcName');
    const outputNpcDescription = document.getElementById('outputNpcDescription');
    const speechProfileDisplayContainer = document.getElementById('speechProfileDisplayContainer');
    const minorMotivationsList = document.getElementById('minorMotivationsList');
    const moderateMotivationsList = document.getElementById('moderateMotivationsList');
    const majorMotivationsList = document.getElementById('majorMotivationsList');
    const messageBox = document.getElementById('messageBox');
    const customTooltipElement = document.getElementById('customTooltip');

    const downloadNpcBtn = document.getElementById('downloadNpcBtn');
    const uploadNpcFile = document.getElementById('uploadNpcFile');
    const loadNpcBtn = document.getElementById('loadNpcBtn');
    const printNpcBtn = document.getElementById('printNpcBtn');

    // ── Utility Functions ──────────────────────────────────────
    function generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function formatKey(key) {
        return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    function showMessage(message, type = 'info', duration = 3000) {
        const div = document.createElement('div');
        div.className = `npc-toast npc-toast-${type}`;
        div.textContent = message;
        messageBox.appendChild(div);
        setTimeout(() => {
            div.style.opacity = '0';
            setTimeout(() => div.remove(), 500);
        }, duration);
    }

    // ── Tooltip System ─────────────────────────────────────────
    function showCustomTooltip(event, text) {
        if (!text) return;
        customTooltipElement.innerHTML = text;
        customTooltipElement.style.display = 'block';
        positionTooltip(event);
    }

    function hideCustomTooltip() {
        customTooltipElement.style.display = 'none';
    }

    function positionTooltip(event) {
        let x = event.pageX + 15;
        let y = event.pageY + 15;
        const sw = window.innerWidth;
        const sh = window.innerHeight;
        const rect = customTooltipElement.getBoundingClientRect();
        if (x + rect.width > sw - 10) x = event.pageX - rect.width - 15;
        if (y + rect.height > sh - 10) y = event.pageY - rect.height - 15;
        if (x < 10) x = 10;
        if (y < 10) y = 10;
        customTooltipElement.style.left = `${x}px`;
        customTooltipElement.style.top = `${y}px`;
    }

    function getDefinitionFromKey(keyString) {
        if (!keyString) return null;
        const keys = keyString.split('.');
        let current = speechDefinitions;
        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key];
            } else {
                return null;
            }
        }
        return (typeof current === 'object' && current._main) ? current._main : current;
    }

    // ── Populate Selects & Checkboxes ──────────────────────────
    function populateSelectWithOptions(selectElement, optionsObject) {
        Object.keys(optionsObject).forEach(key => {
            if (key === '_main') return;
            const option = document.createElement('option');
            option.value = key;
            option.textContent = formatKey(key);
            const definition = (typeof optionsObject[key] === 'object' && optionsObject[key]._main)
                ? optionsObject[key]._main : optionsObject[key];
            option.setAttribute('data-definition', definition || '');
            selectElement.appendChild(option);
        });
    }

    function populateCheckboxes(containerElement, optionsObject, groupName, definitionBaseKey) {
        containerElement.innerHTML = '';
        Object.keys(optionsObject).forEach(key => {
            if (key === '_main') return;
            const wrapper = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `speechPattern-${key}`;
            checkbox.name = groupName;
            checkbox.value = key;
            const label = document.createElement('label');
            label.htmlFor = `speechPattern-${key}`;
            label.textContent = formatKey(key);
            label.setAttribute('data-tooltip-key', `${definitionBaseKey}.${key}`);
            label.classList.add('npc-tooltip-label');
            wrapper.appendChild(checkbox);
            wrapper.appendChild(label);
            containerElement.appendChild(wrapper);
        });
    }

    // ── Display Updates ────────────────────────────────────────
    function updateNpcDetailsDisplay() {
        outputNpcName.textContent = currentNPC.name || 'NPC Name Will Appear Here';
        outputNpcDescription.textContent = currentNPC.description || 'NPC description will appear here.';
    }

    function updateSpeechProfileDisplay() {
        const profile = currentNPC.speechProfile;
        let parts = [];
        if (profile.speed) {
            let t = `<strong>Speed:</strong> ${formatKey(profile.speed)}`;
            if (profile.speedType) t += ` (${formatKey(profile.speedType)})`;
            parts.push(t);
        }
        if (profile.volume) {
            let t = `<strong>Volume:</strong> ${formatKey(profile.volume)}`;
            if (profile.volumeType) t += ` (${formatKey(profile.volumeType)})`;
            parts.push(t);
        }
        if (profile.tone) parts.push(`<strong>Tone:</strong> ${formatKey(profile.tone)}`);
        if (profile.emphasis) parts.push(`<strong>Emphasis:</strong> ${formatKey(profile.emphasis)}`);
        if (profile.pauses) parts.push(`<strong>Pauses:</strong> ${formatKey(profile.pauses)}`);
        if (profile.vocabularyCategory || profile.vocabularyExamples) {
            let t = '<strong>Vocabulary';
            if (profile.vocabularyCategory) t += ` (${formatKey(profile.vocabularyCategory)})`;
            t += `:</strong> ${profile.vocabularyExamples || 'N/A'}`;
            parts.push(t);
        }
        if (profile.metaphorsCategory || profile.metaphorsExamples) {
            let t = '<strong>Metaphors';
            if (profile.metaphorsCategory) t += ` (${formatKey(profile.metaphorsCategory)})`;
            t += `:</strong> ${profile.metaphorsExamples || 'N/A'}`;
            parts.push(t);
        }
        if (profile.speechPatterns && profile.speechPatterns.length > 0) {
            parts.push(`<strong>Speech Patterns:</strong> ${profile.speechPatterns.map(formatKey).join(', ')}`);
        }
        if (profile.speechPatternsExamples) {
            parts.push(`<strong>Pattern Examples:</strong> ${profile.speechPatternsExamples}`);
        }
        if (parts.length > 0) {
            speechProfileDisplayContainer.innerHTML = parts.join('<br>');
        } else {
            speechProfileDisplayContainer.innerHTML = '<p class="npc-empty-msg">Speech profile details will appear here once selected.</p>';
        }
    }

    function updateSelectedOptionDefinition(selectElement, descriptionElement, definitionsSource) {
        const val = selectElement.value;
        let text = '';
        if (val && definitionsSource && definitionsSource[val]) {
            text = (typeof definitionsSource[val] === 'object' && definitionsSource[val]._main)
                ? definitionsSource[val]._main : definitionsSource[val];
        }
        descriptionElement.textContent = text;
        if (text) {
            descriptionElement.setAttribute('data-tooltip-definition', text);
        } else {
            descriptionElement.removeAttribute('data-tooltip-definition');
        }
    }

    function updateMotivationLevelDescription() {
        const level = motivationLevelSelect.value;
        if (motivationDefinitions[level]) {
            motivationLevelDescription.textContent = motivationDefinitions[level].concise;
            motivationLevelDescription.setAttribute('data-tooltip-definition-concise', motivationDefinitions[level].concise);
            motivationLevelDescription.setAttribute('data-tooltip-definition-full', motivationDefinitions[level].full);
        } else {
            motivationLevelDescription.textContent = '';
            motivationLevelDescription.removeAttribute('data-tooltip-definition-concise');
            motivationLevelDescription.removeAttribute('data-tooltip-definition-full');
        }
    }

    // ── Motivations CRUD ───────────────────────────────────────
    function renderMotivations() {
        const lists = { minor: minorMotivationsList, moderate: moderateMotivationsList, major: majorMotivationsList };
        for (const level in lists) {
            const ul = lists[level];
            ul.innerHTML = '';
            if (currentNPC.motivations[level].length === 0) {
                ul.innerHTML = `<li class="npc-list-item"><span class="npc-empty-msg">No ${level} motivations added yet.</span></li>`;
            } else {
                currentNPC.motivations[level].forEach(mot => {
                    const li = document.createElement('li');
                    li.className = 'npc-list-item';
                    li.dataset.id = mot.id;
                    li.dataset.level = level;

                    const textSpan = document.createElement('span');
                    textSpan.className = 'npc-motivation-text';
                    textSpan.textContent = mot.text;
                    li.appendChild(textSpan);

                    const actions = document.createElement('div');
                    actions.className = 'npc-list-item-actions';

                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.className = 'npc-action-btn npc-action-btn-edit';
                    editBtn.onclick = () => startEditMotivation(mot.id, level, mot.text);
                    actions.appendChild(editBtn);

                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.className = 'npc-action-btn npc-action-btn-delete';
                    deleteBtn.onclick = () => deleteMotivation(mot.id, level);
                    actions.appendChild(deleteBtn);

                    li.appendChild(actions);
                    ul.appendChild(li);
                });
            }
        }
    }

    function addOrUpdateMotivation() {
        const text = motivationTextInput.value.trim();
        const level = motivationLevelSelect.value;
        if (!text) { showMessage('Motivation text cannot be empty.', 'error'); motivationTextInput.focus(); return; }

        if (editingMotivationId) {
            let found = false;
            for (const currentLevel in currentNPC.motivations) {
                const index = currentNPC.motivations[currentLevel].findIndex(m => m.id === editingMotivationId);
                if (index !== -1) {
                    if (currentLevel === level) {
                        currentNPC.motivations[currentLevel][index].text = text;
                    } else {
                        currentNPC.motivations[currentLevel].splice(index, 1);
                        currentNPC.motivations[level].push({ id: editingMotivationId, text: text });
                    }
                    found = true;
                    break;
                }
            }
            if (found) showMessage('Motivation updated successfully!', 'success');
            else showMessage('Error updating motivation. ID not found.', 'error');
            resetMotivationForm();
        } else {
            const newMotivation = { id: generateId(), text: text };
            currentNPC.motivations[level].push(newMotivation);
            showMessage(`Added as ${level} motivation.`, 'success');
            motivationTextInput.value = '';
        }
        renderMotivations();
        motivationTextInput.focus();
    }

    function startEditMotivation(id, level, currentText) {
        editingMotivationId = id;
        motivationTextInput.value = currentText;
        motivationLevelSelect.value = level;
        updateMotivationLevelDescription();
        motivationFormTitle.textContent = 'Edit Motivation';
        addOrUpdateMotivationBtn.textContent = 'Update';
        addOrUpdateMotivationBtn.className = 'npc-btn npc-btn-add';
        cancelEditBtn.classList.remove('npc-hidden');
        motivationTextInput.focus();
    }

    function resetMotivationForm() {
        editingMotivationId = null;
        motivationTextInput.value = '';
        motivationLevelSelect.value = 'minor';
        updateMotivationLevelDescription();
        motivationFormTitle.textContent = 'Add Motivation';
        addOrUpdateMotivationBtn.textContent = 'Add';
        addOrUpdateMotivationBtn.className = 'npc-btn npc-btn-add';
        cancelEditBtn.classList.add('npc-hidden');
    }

    function deleteMotivation(id, level) {
        const index = currentNPC.motivations[level].findIndex(m => m.id === id);
        if (index > -1) {
            currentNPC.motivations[level].splice(index, 1);
            renderMotivations();
            showMessage('Motivation deleted.', 'info');
        } else {
            showMessage('Error deleting motivation.', 'error');
        }
        if (editingMotivationId === id) resetMotivationForm();
    }

    // ── Speech Profile Handlers ────────────────────────────────
    function handleSpeedChange() {
        currentNPC.speechProfile.speedType = null;
        speedFastTypeSelect.value = '';
        speedSlowTypeSelect.value = '';
        updateSelectedOptionDefinition(speedFastTypeSelect, speedFastTypeDescription, speechDefinitions.speed.fast);
        updateSelectedOptionDefinition(speedSlowTypeSelect, speedSlowTypeDescription, speechDefinitions.speed.slow);
        if (speedFastRadio.checked) {
            currentNPC.speechProfile.speed = 'fast';
            speedFastTypeContainer.classList.remove('npc-hidden');
            speedSlowTypeContainer.classList.add('npc-hidden');
        } else if (speedSlowRadio.checked) {
            currentNPC.speechProfile.speed = 'slow';
            speedSlowTypeContainer.classList.remove('npc-hidden');
            speedFastTypeContainer.classList.add('npc-hidden');
        } else {
            currentNPC.speechProfile.speed = null;
            speedFastTypeContainer.classList.add('npc-hidden');
            speedSlowTypeContainer.classList.add('npc-hidden');
        }
        updateSpeechProfileDisplay();
    }

    function handleVolumeChange() {
        currentNPC.speechProfile.volumeType = null;
        volumeLoudTypeSelect.value = '';
        volumeSoftTypeSelect.value = '';
        updateSelectedOptionDefinition(volumeLoudTypeSelect, volumeLoudTypeDescription, speechDefinitions.volume.loud);
        updateSelectedOptionDefinition(volumeSoftTypeSelect, volumeSoftTypeDescription, speechDefinitions.volume.soft);
        if (volumeLoudRadio.checked) {
            currentNPC.speechProfile.volume = 'loud';
            volumeLoudTypeContainer.classList.remove('npc-hidden');
            volumeSoftTypeContainer.classList.add('npc-hidden');
        } else if (volumeSoftRadio.checked) {
            currentNPC.speechProfile.volume = 'soft';
            volumeSoftTypeContainer.classList.remove('npc-hidden');
            volumeLoudTypeContainer.classList.add('npc-hidden');
        } else {
            currentNPC.speechProfile.volume = null;
            volumeLoudTypeContainer.classList.add('npc-hidden');
            volumeSoftTypeContainer.classList.add('npc-hidden');
        }
        updateSpeechProfileDisplay();
    }

    function updateSpeechProfileFromInput(key, value, selectElement, descriptionElement, definitionSource) {
        if (value === '' && ['speedType','volumeType','tone','emphasis','pauses','vocabularyCategory','metaphorsCategory'].includes(key)) {
            currentNPC.speechProfile[key] = null;
        } else {
            currentNPC.speechProfile[key] = value;
        }
        if (selectElement && descriptionElement && definitionSource) {
            updateSelectedOptionDefinition(selectElement, descriptionElement, definitionSource);
        }
        updateSpeechProfileDisplay();
    }

    function updateSpeechPatternCheckboxes() {
        const selected = [];
        speechPatternsCheckboxesContainer.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
            selected.push(cb.value);
        });
        currentNPC.speechProfile.speechPatterns = selected;
        updateSpeechProfileDisplay();
    }

    // ── Save / Load / Print ────────────────────────────────────
    function downloadNPCData() {
        const json = JSON.stringify(currentNPC, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const filename = (currentNPC.name || 'untitled_npc').replace(/\s+/g, '_').toLowerCase();
        a.download = `${filename}.json`;
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showMessage('NPC data downloaded!', 'success');
    }

    function loadNPCFromFile() {
        const file = uploadNpcFile.files[0];
        if (!file) { showMessage('Please select a JSON file to upload.', 'error'); return; }
        if (file.type !== 'application/json') { showMessage('Invalid file type. Please upload a .json file.', 'error'); uploadNpcFile.value = ''; return; }

        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const data = JSON.parse(event.target.result);

                currentNPC.name = data.name || '';
                currentNPC.description = data.description || '';
                currentNPC.motivations = data.motivations || { minor: [], moderate: [], major: [] };
                currentNPC.speechProfile = data.speechProfile || {
                    speed: null, speedType: null, volume: null, volumeType: null,
                    tone: null, emphasis: null, pauses: null,
                    vocabularyCategory: null, vocabularyExamples: '',
                    metaphorsCategory: null, metaphorsExamples: '',
                    speechPatterns: [], speechPatternsExamples: ''
                };

                // Populate form fields
                npcNameInput.value = currentNPC.name;
                npcDescriptionInput.value = currentNPC.description;

                // Speed
                if (currentNPC.speechProfile.speed === 'fast') speedFastRadio.checked = true;
                else if (currentNPC.speechProfile.speed === 'slow') speedSlowRadio.checked = true;
                else { speedFastRadio.checked = false; speedSlowRadio.checked = false; }
                handleSpeedChange();
                if (currentNPC.speechProfile.speedType) {
                    if (currentNPC.speechProfile.speed === 'fast') speedFastTypeSelect.value = currentNPC.speechProfile.speedType;
                    if (currentNPC.speechProfile.speed === 'slow') speedSlowTypeSelect.value = currentNPC.speechProfile.speedType;
                }

                // Volume
                if (currentNPC.speechProfile.volume === 'loud') volumeLoudRadio.checked = true;
                else if (currentNPC.speechProfile.volume === 'soft') volumeSoftRadio.checked = true;
                else { volumeLoudRadio.checked = false; volumeSoftRadio.checked = false; }
                handleVolumeChange();
                if (currentNPC.speechProfile.volumeType) {
                    if (currentNPC.speechProfile.volume === 'loud') volumeLoudTypeSelect.value = currentNPC.speechProfile.volumeType;
                    if (currentNPC.speechProfile.volume === 'soft') volumeSoftTypeSelect.value = currentNPC.speechProfile.volumeType;
                }

                // Selects
                speechToneSelect.value = currentNPC.speechProfile.tone || '';
                speechEmphasisSelect.value = currentNPC.speechProfile.emphasis || '';
                speechPausesSelect.value = currentNPC.speechProfile.pauses || '';
                speechVocabularyCategorySelect.value = currentNPC.speechProfile.vocabularyCategory || '';
                speechVocabularyExamplesTextarea.value = currentNPC.speechProfile.vocabularyExamples || '';
                speechMetaphorsCategorySelect.value = currentNPC.speechProfile.metaphorsCategory || '';
                speechMetaphorsExamplesTextarea.value = currentNPC.speechProfile.metaphorsExamples || '';

                // Speech patterns checkboxes
                speechPatternsCheckboxesContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
                if (currentNPC.speechProfile.speechPatterns && Array.isArray(currentNPC.speechProfile.speechPatterns)) {
                    currentNPC.speechProfile.speechPatterns.forEach(key => {
                        const cb = document.getElementById(`speechPattern-${key}`);
                        if (cb) cb.checked = true;
                    });
                }
                speechPatternsExamplesTextarea.value = currentNPC.speechProfile.speechPatternsExamples || '';

                // Update all descriptions
                updateSelectedOptionDefinition(speedFastTypeSelect, speedFastTypeDescription, speechDefinitions.speed.fast);
                updateSelectedOptionDefinition(speedSlowTypeSelect, speedSlowTypeDescription, speechDefinitions.speed.slow);
                updateSelectedOptionDefinition(volumeLoudTypeSelect, volumeLoudTypeDescription, speechDefinitions.volume.loud);
                updateSelectedOptionDefinition(volumeSoftTypeSelect, volumeSoftTypeDescription, speechDefinitions.volume.soft);
                updateSelectedOptionDefinition(speechToneSelect, speechToneDescription, speechDefinitions.tone);
                updateSelectedOptionDefinition(speechEmphasisSelect, speechEmphasisDescription, speechDefinitions.emphasis);
                updateSelectedOptionDefinition(speechPausesSelect, speechPausesDescription, speechDefinitions.pauses);
                updateSelectedOptionDefinition(speechVocabularyCategorySelect, speechVocabularyCategoryDescription, speechDefinitions.vocabulary);
                updateSelectedOptionDefinition(speechMetaphorsCategorySelect, speechMetaphorsCategoryDescription, speechDefinitions.metaphors);

                updateNpcDetailsDisplay();
                renderMotivations();
                updateSpeechProfileDisplay();
                showMessage('NPC data loaded successfully!', 'success');
            } catch (e) {
                showMessage('Error parsing JSON file: ' + e.message, 'error');
            }
        };
        reader.onerror = function() { showMessage('Error reading file.', 'error'); };
        reader.readAsText(file);
        uploadNpcFile.value = '';
    }

    // ── Event Listeners ────────────────────────────────────────
    npcNameInput.addEventListener('input', () => { currentNPC.name = npcNameInput.value; updateNpcDetailsDisplay(); });
    npcDescriptionInput.addEventListener('input', () => { currentNPC.description = npcDescriptionInput.value; updateNpcDetailsDisplay(); });
    addOrUpdateMotivationBtn.addEventListener('click', addOrUpdateMotivation);
    cancelEditBtn.addEventListener('click', () => { resetMotivationForm(); showMessage('Edit cancelled.', 'info'); });
    motivationLevelSelect.addEventListener('change', updateMotivationLevelDescription);

    speedFastRadio.addEventListener('change', handleSpeedChange);
    speedSlowRadio.addEventListener('change', handleSpeedChange);
    speedFastTypeSelect.addEventListener('change', (e) => updateSpeechProfileFromInput('speedType', e.target.value, speedFastTypeSelect, speedFastTypeDescription, speechDefinitions.speed.fast));
    speedSlowTypeSelect.addEventListener('change', (e) => updateSpeechProfileFromInput('speedType', e.target.value, speedSlowTypeSelect, speedSlowTypeDescription, speechDefinitions.speed.slow));

    volumeLoudRadio.addEventListener('change', handleVolumeChange);
    volumeSoftRadio.addEventListener('change', handleVolumeChange);
    volumeLoudTypeSelect.addEventListener('change', (e) => updateSpeechProfileFromInput('volumeType', e.target.value, volumeLoudTypeSelect, volumeLoudTypeDescription, speechDefinitions.volume.loud));
    volumeSoftTypeSelect.addEventListener('change', (e) => updateSpeechProfileFromInput('volumeType', e.target.value, volumeSoftTypeSelect, volumeSoftTypeDescription, speechDefinitions.volume.soft));

    speechToneSelect.addEventListener('change', (e) => updateSpeechProfileFromInput('tone', e.target.value, speechToneSelect, speechToneDescription, speechDefinitions.tone));
    speechEmphasisSelect.addEventListener('change', (e) => updateSpeechProfileFromInput('emphasis', e.target.value, speechEmphasisSelect, speechEmphasisDescription, speechDefinitions.emphasis));
    speechPausesSelect.addEventListener('change', (e) => updateSpeechProfileFromInput('pauses', e.target.value, speechPausesSelect, speechPausesDescription, speechDefinitions.pauses));

    speechVocabularyCategorySelect.addEventListener('change', (e) => updateSpeechProfileFromInput('vocabularyCategory', e.target.value, speechVocabularyCategorySelect, speechVocabularyCategoryDescription, speechDefinitions.vocabulary));
    speechVocabularyExamplesTextarea.addEventListener('input', (e) => updateSpeechProfileFromInput('vocabularyExamples', e.target.value));
    speechMetaphorsCategorySelect.addEventListener('change', (e) => updateSpeechProfileFromInput('metaphorsCategory', e.target.value, speechMetaphorsCategorySelect, speechMetaphorsCategoryDescription, speechDefinitions.metaphors));
    speechMetaphorsExamplesTextarea.addEventListener('input', (e) => updateSpeechProfileFromInput('metaphorsExamples', e.target.value));

    speechPatternsCheckboxesContainer.addEventListener('change', updateSpeechPatternCheckboxes);
    speechPatternsExamplesTextarea.addEventListener('input', (e) => updateSpeechProfileFromInput('speechPatternsExamples', e.target.value));

    downloadNpcBtn.addEventListener('click', downloadNPCData);
    loadNpcBtn.addEventListener('click', loadNPCFromFile);
    printNpcBtn.addEventListener('click', () => window.print());

    // ── Tooltip Event Delegation ───────────────────────────────
    document.body.addEventListener('mouseover', (event) => {
        const target = event.target;
        let tooltipText = null;
        if (target.matches('option') && target.hasAttribute('data-definition')) {
            tooltipText = target.getAttribute('data-definition');
        } else if (target.hasAttribute('data-tooltip-key')) {
            tooltipText = getDefinitionFromKey(target.getAttribute('data-tooltip-key'));
        } else if (target.id === 'motivationLevelDescription') {
            tooltipText = target.getAttribute('data-tooltip-definition-full');
        } else if (target.classList.contains('npc-option-desc') && target.hasAttribute('data-tooltip-definition')) {
            tooltipText = target.getAttribute('data-tooltip-definition');
        }
        if (tooltipText) showCustomTooltip(event, tooltipText);
    });
    document.body.addEventListener('mouseout', hideCustomTooltip);
    document.body.addEventListener('mousemove', (event) => {
        if (customTooltipElement.style.display === 'block') positionTooltip(event);
    });

    // ── Initialization ─────────────────────────────────────────
    populateSelectWithOptions(speedFastTypeSelect, speechDefinitions.speed.fast);
    populateSelectWithOptions(speedSlowTypeSelect, speechDefinitions.speed.slow);
    populateSelectWithOptions(volumeLoudTypeSelect, speechDefinitions.volume.loud);
    populateSelectWithOptions(volumeSoftTypeSelect, speechDefinitions.volume.soft);
    populateSelectWithOptions(speechToneSelect, speechDefinitions.tone);
    populateSelectWithOptions(speechEmphasisSelect, speechDefinitions.emphasis);
    populateSelectWithOptions(speechPausesSelect, speechDefinitions.pauses);
    populateSelectWithOptions(speechVocabularyCategorySelect, speechDefinitions.vocabulary);
    populateSelectWithOptions(speechMetaphorsCategorySelect, speechDefinitions.metaphors);
    populateCheckboxes(speechPatternsCheckboxesContainer, speechDefinitions.speech_patterns, 'speechPattern', 'speech_patterns');

    updateNpcDetailsDisplay();
    renderMotivations();
    updateMotivationLevelDescription();
    updateSpeechProfileDisplay();

    updateSelectedOptionDefinition(speedFastTypeSelect, speedFastTypeDescription, speechDefinitions.speed.fast);
    updateSelectedOptionDefinition(speedSlowTypeSelect, speedSlowTypeDescription, speechDefinitions.speed.slow);
    updateSelectedOptionDefinition(volumeLoudTypeSelect, volumeLoudTypeDescription, speechDefinitions.volume.loud);
    updateSelectedOptionDefinition(volumeSoftTypeSelect, volumeSoftTypeDescription, speechDefinitions.volume.soft);
    updateSelectedOptionDefinition(speechToneSelect, speechToneDescription, speechDefinitions.tone);
    updateSelectedOptionDefinition(speechEmphasisSelect, speechEmphasisDescription, speechDefinitions.emphasis);
    updateSelectedOptionDefinition(speechPausesSelect, speechPausesDescription, speechDefinitions.pauses);
    updateSelectedOptionDefinition(speechVocabularyCategorySelect, speechVocabularyCategoryDescription, speechDefinitions.vocabulary);
    updateSelectedOptionDefinition(speechMetaphorsCategorySelect, speechMetaphorsCategoryDescription, speechDefinitions.metaphors);
});
