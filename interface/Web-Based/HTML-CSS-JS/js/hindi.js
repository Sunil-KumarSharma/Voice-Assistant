// एप्लिकेशन स्टेट
const appState = {
    // UI स्टेट
    activeTab: 'chat',
    theme: 'dark',
    isFullscreen: false,

    // वॉइस स्टेट
    voiceState: 'idle',
    isListening: false,
    recognition: null,
    finalTranscript: '',
    interimTranscript: '',

    // चैट स्टेट
    chatMessages: [],

    // सर्च स्टेट
    searchResults: [],

    // प्रोजेक्ट्स डेटा
    projects: [],

    // सेटिंग्स
    language: 'en-US',
    autoPunctuation: true,
    noiseReduction: true
};

// DOM एलिमेंट्स
const elements = {
    // थीम और फुलस्क्रीन
    themeToggle: document.getElementById('themeToggle'),
    themeIcon: document.getElementById('themeIcon'),
    fullscreenToggle: document.getElementById('fullscreenToggle'),

    // लैंग्वेज स्विचर
    languageSwitcher: document.getElementById('languageSwitcher'),
    languageDropdown: document.getElementById('languageDropdown'),

    // टैब्स
    mainTabs: document.querySelectorAll('.main-tab'),
    tabContents: document.querySelectorAll('.tab-content'),

    // चैट
    chatHistory: document.getElementById('chatHistory'),
    chatInput: document.getElementById('chatInput'),
    sendMessage: document.getElementById('sendMessage'),
    clearChat: document.getElementById('clearChat'),
    exportChat: document.getElementById('exportChat'),

    // वॉइस कंट्रोल्स
    microphoneButton: document.getElementById('microphoneButton'),
    microphoneLabel: document.getElementById('microphoneLabel'),
    languageSelect: document.getElementById('languageSelect'),
    autoPunctuation: document.getElementById('autoPunctuation'),
    noiseReduction: document.getElementById('noiseReduction'),

    // सर्च
    searchInput: document.getElementById('searchInput'),
    searchButton: document.getElementById('searchButton'),
    voiceSearchButton: document.getElementById('voiceSearchButton'),
    clearSearch: document.getElementById('clearSearch'),
    searchResults: document.getElementById('searchResults'),

    // प्रोजेक्ट्स
    projectsGrid: document.getElementById('projectsGrid'),
    filterActive: document.getElementById('filterActive'),
    filterAll: document.getElementById('filterAll'),

    // हाउ इट वर्क्स
    explanationContent: document.getElementById('explanationContent'),
    viewCode: document.getElementById('viewCode'),

    // नेविगेशन
    learnButton: document.getElementById('learnButton')
};

// सैंपल प्रोजेक्ट्स डेटा
const sampleProjects = [
    {
        id: 1,
        title: 'वॉइस-इनेबल्ड ई-कॉमर्स सर्च',
        category: 'ई-कॉमर्स प्लेटफॉर्म',
        description: 'रियल-टाइम इन्वेंट्री इंटीग्रेशन के साथ नैचुरल लैंग्वेज वॉइस कमांड्स से एडवांस्ड प्रोडक्ट सर्च।',
        icon: 'fas fa-shopping-cart',
        tags: ['Search', 'E-commerce', 'Voice UI', 'Real-time'],
        status: 'development'
    },
    {
        id: 2,
        title: 'हेल्थकेयर पेशेंट पोर्टल',
        category: 'हेल्थकेयर एप्लिकेशन',
        description: 'अपॉइंटमेंट शेड्यूलिंग और मेडिकल रिकॉर्ड एक्सेस के लिए वॉइस-कंट्रोल्ड पेशेंट मैनेजमेंट सिस्टम।',
        icon: 'fas fa-heartbeat',
        tags: ['Healthcare', 'Voice Assistant', 'Medical', 'HIPAA'],
        status: 'development'
    },
    {
        id: 3,
        title: 'एजुकेशनल लर्निंग असिस्टेंट',
        category: 'एजुकेशन प्लेटफॉर्म',
        description: 'क्विज़, ट्यूटोरियल्स, और एजुकेशनल कंटेंट के लिए वॉइस इंटरैक्शन के साथ AI-पावर्ड लर्निंग प्लेटफॉर्म।',
        icon: 'fas fa-graduation-cap',
        tags: ['Education', 'Learning', 'Voice Interaction', 'AI'],
        status: 'development'
    },
    {
        id: 4,
        title: 'रियल एस्टेट वॉइस सर्च',
        category: 'रियल एस्टेट प्लेटफॉर्म',
        description: 'इंटेलिजेंट फिल्टरिंग और मैपिंग के साथ नैचुरल लैंग्वेज वॉइस क्वेरीज का उपयोग करके प्रॉपर्टी सर्च।',
        icon: 'fas fa-home',
        tags: ['Real Estate', 'Search', 'Voice Navigation', 'Maps'],
        status: 'development'
    },
    {
        id: 5,
        title: 'ट्रैवल बुकिंग असिस्टेंट',
        category: 'ट्रैवल एप्लिकेशन',
        description: 'फ्लाइट्स, होटल्स, और एक्टिविटीज के लिए कंवर्सेशनल AI के साथ वॉइस-इनेबल्ड ट्रैवल बुकिंग सिस्टम।',
        icon: 'fas fa-plane',
        tags: ['Travel', 'Booking', 'Conversational AI', 'Voice'],
        status: 'development'
    },
    {
        id: 6,
        title: 'न्यूज़ रीडर और समराइज़र',
        category: 'मीडिया एप्लिकेशन',
        description: 'वॉइस-कंट्रोल्ड न्यूज़ एग्रीगेटर जो आर्टिकल्स को जोर से पढ़ता है और AI-जनरेटेड समरी देता है।',
        icon: 'fas fa-newspaper',
        tags: ['Media', 'News', 'Voice Reader', 'AI Summary'],
        status: 'development'
    },
    {
        id: 7,
        title: 'फाइनेंशियल वॉइस असिस्टेंट',
        category: 'फाइनेंस एप्लिकेशन',
        description: 'रियल-टाइम मार्केट डेटा, ट्रांजैक्शन्स, और इन्वेस्टमेंट ट्रैकिंग के लिए वॉइस-कंट्रोल्ड फाइनेंशियल डैशबोर्ड।',
        icon: 'fas fa-chart-line',
        tags: ['Finance', 'Banking', 'Voice Assistant', 'Real-time'],
        status: 'development'
    },
    {
        id: 8,
        title: 'रेस्टोरेंट ऑर्डरिंग सिस्टम',
        category: 'फूड और बेवरेज',
        description: 'रियल-टाइम इन्वेंट्री और किचन इंटीग्रेशन के साथ वॉइस-इनेबल्ड रेस्टोरेंट मेनू और ऑर्डरिंग सिस्टम।',
        icon: 'fas fa-utensils',
        tags: ['Food', 'Ordering', 'Voice UI', 'Real-time'],
        status: 'development'
    },
    {
        id: 9,
        title: 'स्मार्ट होम कंट्रोलर',
        category: 'IoT एप्लिकेशन',
        description: 'होम ऑटोमेशन डिवाइसेज़ और IoT इकोसिस्टम्स के लिए वेब-बेस्ड वॉइस कंट्रोल सिस्टम।',
        icon: 'fas fa-home-alt',
        tags: ['IoT', 'Home Automation', 'Voice Control', 'Web'],
        status: 'development'
    },
    {
        id: 10,
        title: 'कस्टमर सपोर्ट बॉट',
        category: 'कस्टमर सर्विस',
        description: 'वॉइस इंटरैक्शन और सेंटिमेंट एनालिसिस के साथ 24/7 मल्टीलिंगुअल कस्टमर सपोर्ट चैटबॉट।',
        icon: 'fas fa-headset',
        tags: ['Support', 'AI', 'Voice Assistant', 'Multilingual'],
        status: 'development'
    }
];

// हाउ इट वर्क्स कंटेंट - आइकॉन्स और ग्राफिक्स के साथ अपडेटेड
const howItWorksContent = {
    architecture: {
        title: "सिस्टम आर्किटेक्चर",
        subtitle: "स्पीच-टू-टेक्स्ट प्लेटफॉर्म आर्किटेक्चर का हाई-लेवल ओवरव्यू",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">1</div>
                            <div>
                                <div class="step-title">क्लाइंट-साइड आर्किटेक्चर</div>
                                <div class="step-subtitle">Web Speech API इंटीग्रेशन के साथ मॉडर्न वेब ब्राउज़र</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>यह प्लेटफॉर्म रियल-टाइम स्पीच रिकग्निशन के लिए ब्राउज़र के बिल्ट-इन Web Speech API का उपयोग करता है। यह API प्रदान करता है:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-microphone"></i>
                                            </div>
                                            <div class="icon-step-label">ऑडियो कैप्चर</div>
                                            <div class="icon-step-tooltip">हार्डवेयर ऑप्टिमाइजेशन के साथ डायरेक्ट माइक्रोफोन एक्सेस</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-filter"></i>
                                            </div>
                                            <div class="icon-step-label">नॉइज़ फिल्टरिंग</div>
                                            <div class="icon-step-tooltip">एडवांस्ड नॉइज़ कैंसलेशन एल्गोरिद्म्स</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-wave-square"></i>
                                            </div>
                                            <div class="icon-step-label">ऑडियो प्रोसेसिंग</div>
                                            <div class="icon-step-tooltip">रियल-टाइम ऑडियो स्ट्रीम प्रोसेसिंग</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="architecture-diagram mt-6">
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-primary);">
                                            <i class="fas fa-globe"></i>
                                        </div>
                                        <div class="arch-label">वेब ब्राउज़र</div>
                                        <div class="arch-description">क्लाइंट-साइड इंटरफेस</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-success);">
                                            <i class="fas fa-code"></i>
                                        </div>
                                        <div class="arch-label">Web Speech API</div>
                                        <div class="arch-description">बिल्ट-इन रिकग्निशन</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-warning);">
                                            <i class="fas fa-microchip"></i>
                                        </div>
                                        <div class="arch-label">ऑडियो प्रोसेसिंग</div>
                                        <div class="arch-description">सिग्नल प्रोसेसिंग</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-error);">
                                            <i class="fas fa-brain"></i>
                                        </div>
                                        <div class="arch-label">ML मॉडल्स</div>
                                        <div class="arch-description">न्यूरल नेटवर्क्स</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-secondary);">
                                            <i class="fas fa-text-height"></i>
                                        </div>
                                        <div class="arch-label">टेक्स्ट आउटपुट</div>
                                        <div class="arch-description">फाइनल ट्रांसक्रिप्शन</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-info);">
                                            <i class="fas fa-robot"></i>
                                        </div>
                                        <div class="arch-label">AI इंटीग्रेशन</div>
                                        <div class="arch-description">नैचुरल लैंग्वेज प्रोसेसिंग</div>
                                    </div>
                                </div>
                            </div>
                            <div class="step-visual">
                                <div class="icon-flow-container">
                                    <div class="process-timeline">
                                        <div class="timeline-connector"></div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-user"></i>
                                            </div>
                                            <div class="icon-step-label">यूज़र इनपुट</div>
                                            <div class="icon-step-tooltip">यूज़र से वॉइस या टेक्स्ट इनपुट</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-microphone"></i>
                                            </div>
                                            <div class="icon-step-label">ऑडियो कैप्चर</div>
                                            <div class="icon-step-tooltip">माइक्रोफोन स्पीच कैप्चर करता है</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-cogs"></i>
                                            </div>
                                            <div class="icon-step-label">प्रोसेसिंग</div>
                                            <div class="icon-step-tooltip">ऑडियो प्रोसेसिंग और फीचर एक्सट्रैक्शन</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-brain"></i>
                                            </div>
                                            <div class="icon-step-label">रिकग्निशन</div>
                                            <div class="icon-step-tooltip">ML मॉडल्स ऑडियो को टेक्स्ट में कन्वर्ट करते हैं</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-comment-alt"></i>
                                            </div>
                                            <div class="icon-step-label">आउटपुट</div>
                                            <div class="icon-step-tooltip">टेक्स्ट आउटपुट एप्लिकेशन को डिलीवर होता है</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="code-block">
                            <div class="code-header">
                                <div class="code-language">JavaScript - स्पीच रिकग्निशन इनिशियलाइज़ेशन</div>
                                <button class="button button-sm button-secondary" onclick="copyCode('arch-code')">
                                    <i class="fas fa-copy"></i>
                                    कॉपी
                                </button>
                            </div>
                            <pre class="code-content" id="arch-code"><code>// Initialize Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Configuration
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.maxAlternatives = 1;

// Event Handlers
recognition.onstart = () => console.log('Recognition started');
recognition.onresult = (event) => processResults(event);
recognition.onerror = (event) => handleError(event);
recognition.onend = () => console.log('Recognition ended');</code></pre>
                        </div>
                    </div>
                `
    },
    recognition: {
        title: "स्पीच रिकग्निशन प्रोसेस",
        subtitle: "ऑडियो वेव्स को मशीन लर्निंग से टेक्स्ट में कैसे बदला जाता है",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">2</div>
                            <div>
                                <div class="step-title">एकॉस्टिक मॉडल प्रोसेसिंग</div>
                                <div class="step-subtitle">साउंड वेव्स को फोनेटिक रिप्रेजेंटेशन में कन्वर्ट करना</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>स्पीच रिकग्निशन प्रोसेस एक सोफिस्टिकेटेड पाइपलाइन फॉलो करता है:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-wave-square"></i>
                                            </div>
                                            <div class="icon-step-label">ऑडियो वेव</div>
                                            <div class="icon-step-tooltip">माइक्रोफोन द्वारा कैप्चर की गई एनालॉग साउंड वेव्स</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-digital-tachograph"></i>
                                            </div>
                                            <div class="icon-step-label">डिजिटाइज़ेशन</div>
                                            <div class="icon-step-tooltip">एनालॉग को डिजिटल सिग्नल्स में कन्वर्ट करना</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-filter"></i>
                                            </div>
                                            <div class="icon-step-label">प्री-प्रोसेसिंग</div>
                                            <div class="icon-step-tooltip">नॉइज़ रिडक्शन और नॉर्मलाइज़ेशन</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-info);">
                                                <i class="fas fa-chart-line"></i>
                                            </div>
                                            <div class="icon-step-label">फीचर एक्सट्रैक्शन</div>
                                            <div class="icon-step-tooltip">ऑडियो से MFCC फीचर्स निकालना</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-brain"></i>
                                            </div>
                                            <div class="icon-step-label">एकॉस्टिक मॉडल</div>
                                            <div class="icon-step-tooltip">डीप न्यूरल नेटवर्क प्रोसेसिंग</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-language"></i>
                                            </div>
                                            <div class="icon-step-label">लैंग्वेज मॉडल</div>
                                            <div class="icon-step-tooltip">कॉन्टेक्स्ट और ग्रामर एनालिसिस</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-success);">
                                                <i class="fas fa-text-height"></i>
                                            </div>
                                            <div class="icon-step-label">टेक्स्ट आउटपुट</div>
                                            <div class="icon-step-tooltip">फाइनल ट्रांसक्राइब्ड टेक्स्ट</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="step-visual">
                                <div class="icon-flow-container">
                                    <div class="process-timeline">
                                        <div class="timeline-connector"></div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-wave-square"></i>
                                            </div>
                                            <div class="icon-step-label">ऑडियो इनपुट</div>
                                            <div class="icon-step-tooltip">साउंड वेव्स कैप्चर होती हैं</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-microchip"></i>
                                            </div>
                                            <div class="icon-step-label">सिग्नल प्रोसेसिंग</div>
                                            <div class="icon-step-tooltip">डिजिटल सिग्नल प्रोसेसिंग</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-chart-bar"></i>
                                            </div>
                                            <div class="icon-step-label">फीचर एनालिसिस</div>
                                            <div class="icon-step-tooltip">स्पीच फीचर्स निकालना</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-network-wired"></i>
                                            </div>
                                            <div class="icon-step-label">न्यूरल नेटवर्क</div>
                                            <div class="icon-step-tooltip">डीप लर्निंग प्रोसेसिंग</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-file-alt"></i>
                                            </div>
                                            <div class="icon-step-label">टेक्स्ट आउटपुट</div>
                                            <div class="icon-step-tooltip">फाइनल ट्रांसक्रिप्शन रिजल्ट</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="code-block">
                            <div class="code-header">
                                <div class="code-language">JavaScript - ऑडियो प्रोसेसिंग</div>
                                <button class="button button-sm button-secondary" onclick="copyCode('recog-code')">
                                    <i class="fas fa-copy"></i>
                                    कॉपी
                                </button>
                            </div>
                            <pre class="code-content" id="recog-code"><code>// Audio stream processing
async function processAudioStream(stream) {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    
    // Create analyzer for frequency analysis
    const analyzer = audioContext.createAnalyser();
    analyzer.fftSize = 2048;
    source.connect(analyzer);
    
    // Process audio frames
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    function processFrame() {
        analyzer.getByteTimeDomainData(dataArray);
        // Apply noise reduction algorithms
        const cleanedAudio = applyNoiseReduction(dataArray);
        // Extract features for speech recognition
        const features = extractMFCC(cleanedAudio);
        return features;
    }
    
    // Continuously process audio
    setInterval(processFrame, 100);
}</code></pre>
                        </div>
                    </div>
                `
    },
    processing: {
        title: "ऑडियो प्रोसेसिंग पाइपलाइन",
        subtitle: "रियल-टाइम ऑडियो प्रोसेसिंग और फीचर एक्सट्रैक्शन",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">3</div>
                            <div>
                                <div class="step-title">सिग्नल प्रोसेसिंग पाइपलाइन</div>
                                <div class="step-subtitle">एनालॉग साउंड वेव्स से डिजिटल फीचर्स तक</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>ऑडियो प्रोसेसिंग पाइपलाइन रॉ माइक्रोफोन इनपुट को मशीन लर्निंग के लिए उपयुक्त फीचर्स में बदलती है:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-wave-square"></i>
                                            </div>
                                            <div class="icon-step-label">रॉ ऑडियो</div>
                                            <div class="icon-step-tooltip">अनप्रोसेस्ड ऑडियो सिग्नल</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-filter"></i>
                                            </div>
                                            <div class="icon-step-label">प्री-एम्फेसिस</div>
                                            <div class="icon-step-tooltip">हाई-फ्रीक्वेंसी बूस्टिंग</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-columns"></i>
                                            </div>
                                            <div class="icon-step-label">फ्रेमिंग</div>
                                            <div class="icon-step-tooltip">25ms फ्रेम्स में डिवाइड करना</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-info);">
                                                <i class="fas fa-window-restore"></i>
                                            </div>
                                            <div class="icon-step-label">विंडोइंग</div>
                                            <div class="icon-step-tooltip">Hamming window अप्लाई करना</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-chart-line"></i>
                                            </div>
                                            <div class="icon-step-label">FFT</div>
                                            <div class="icon-step-tooltip">Fast Fourier Transform</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-filter"></i>
                                            </div>
                                            <div class="icon-step-label">Mel Filter Bank</div>
                                            <div class="icon-step-tooltip">Mel-scale filters अप्लाई करना</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-success);">
                                                <i class="fas fa-chart-bar"></i>
                                            </div>
                                            <div class="icon-step-label">MFCC</div>
                                            <div class="icon-step-tooltip">Mel-frequency cepstral coefficients</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="step-visual">
                                <div class="architecture-diagram">
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-primary);">
                                            <i class="fas fa-microphone"></i>
                                        </div>
                                        <div class="arch-label">ऑडियो इनपुट</div>
                                        <div class="arch-description">ऑडियो सिग्नल कैप्चर</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-success);">
                                            <i class="fas fa-filter"></i>
                                        </div>
                                        <div class="arch-label">प्री-प्रोसेसिंग</div>
                                        <div class="arch-description">नॉइज़ रिडक्शन</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-warning);">
                                            <i class="fas fa-wave-square"></i>
                                        </div>
                                        <div class="arch-label">फीचर एक्सट्रैक्शन</div>
                                        <div class="arch-description">MFCC extraction</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-error);">
                                            <i class="fas fa-brain"></i>
                                        </div>
                                        <div class="arch-label">मॉडल प्रोसेसिंग</div>
                                        <div class="arch-description">न्यूरल नेटवर्क एनालिसिस</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-secondary);">
                                            <i class="fas fa-chart-bar"></i>
                                        </div>
                                        <div class="arch-label">कॉन्फिडेंस स्कोरिंग</div>
                                        <div class="arch-description">प्रॉबेबिलिटी कैलकुलेशन</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-info);">
                                            <i class="fas fa-check-circle"></i>
                                        </div>
                                        <div class="arch-label">आउटपुट जनरेशन</div>
                                        <div class="arch-description">फाइनल टेक्स्ट आउटपुट</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="code-block">
                            <div class="code-header">
                                <div class="code-language">JavaScript - फीचर एक्सट्रैक्शन</div>
                                <button class="button button-sm button-secondary" onclick="copyCode('process-code')">
                                    <i class="fas fa-copy"></i>
                                    कॉपी
                                </button>
                            </div>
                            <pre class="code-content" id="process-code"><code>// MFCC Feature Extraction
function extractMFCC(audioData) {
    // Step 1: Pre-emphasis
    const preEmphasized = applyPreEmphasis(audioData);
    
    // Step 2: Framing
    const frames = createFrames(preEmphasized, 25, 10);
    
    // Step 3: Windowing
    const windowedFrames = applyHammingWindow(frames);
    
    // Step 4: FFT
    const spectrumFrames = applyFFT(windowedFrames);
    
    // Step 5: Mel Filter Bank
    const melFilters = createMelFilterBank();
    const melSpectrum = applyMelFilterBank(spectrumFrames, melFilters);
    
    // Step 6: DCT for MFCC
    const mfcc = applyDCT(melSpectrum);
    
    return mfcc;
}</code></pre>
                        </div>
                    </div>
                `
    },
    integration: {
        title: "वेब इंटीग्रेशन",
        subtitle: "स्पीच-टू-टेक्स्ट वेब एप्लिकेशन्स के साथ कैसे इंटीग्रेट होता है",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">4</div>
                            <div>
                                <div class="step-title">वेब एप्लिकेशन इंटीग्रेशन</div>
                                <div class="step-subtitle">वेब प्लेटफॉर्म्स के साथ सीमलेस इंटीग्रेशन</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>स्पीच-टू-टेक्स्ट टेक्नोलॉजी वेब एप्लिकेशन्स के साथ अलग-अलग तरीकों से इंटीग्रेट होती है:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fab fa-js-square"></i>
                                            </div>
                                            <div class="icon-step-label">JavaScript API</div>
                                            <div class="icon-step-tooltip">Web Speech API इंटीग्रेशन</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-plug"></i>
                                            </div>
                                            <div class="icon-step-label">REST APIs</div>
                                            <div class="icon-step-tooltip">HTTP-बेस्ड स्पीच सर्विसेज़</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-cloud"></i>
                                            </div>
                                            <div class="icon-step-label">WebSocket</div>
                                            <div class="icon-step-tooltip">रियल-टाइम स्ट्रीमिंग</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-info);">
                                                <i class="fab fa-react"></i>
                                            </div>
                                            <div class="icon-step-label">React/Vue/Angular</div>
                                            <div class="icon-step-tooltip">फ्रेमवर्क इंटीग्रेशन</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-shield-alt"></i>
                                            </div>
                                            <div class="icon-step-label">सिक्योरिटी</div>
                                            <div class="icon-step-tooltip">HTTPS और एन्क्रिप्शन</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-mobile-alt"></i>
                                            </div>
                                            <div class="icon-step-label">रेस्पॉन्सिव डिज़ाइन</div>
                                            <div class="icon-step-tooltip">मोबाइल और डेस्कटॉप सपोर्ट</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="step-visual">
                                <div class="architecture-diagram">
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-primary);">
                                            <i class="fas fa-code"></i>
                                        </div>
                                        <div class="arch-label">फ्रंटएंड</div>
                                        <div class="arch-description">वेब इंटरफेस</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-success);">
                                            <i class="fas fa-exchange-alt"></i>
                                        </div>
                                        <div class="arch-label">API गेटवे</div>
                                        <div class="arch-description">रिक्वेस्ट रूटिंग</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-warning);">
                                            <i class="fas fa-server"></i>
                                        </div>
                                        <div class="arch-label">स्पीच सर्विस</div>
                                        <div class="arch-description">प्रोसेसिंग इंजन</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-error);">
                                            <i class="fas fa-database"></i>
                                        </div>
                                        <div class="arch-label">डेटाबेस</div>
                                        <div class="arch-description">यूज़र डेटा स्टोरेज</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-secondary);">
                                            <i class="fas fa-robot"></i>
                                        </div>
                                        <div class="arch-label">AI सर्विसेज़</div>
                                        <div class="arch-description">NLP प्रोसेसिंग</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-info);">
                                            <i class="fas fa-cloud-upload-alt"></i>
                                        </div>
                                        <div class="arch-label">क्लाउड स्टोरेज</div>
                                        <div class="arch-description">ऑडियो फाइल स्टोरेज</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
    },
    optimization: {
        title: "परफॉर्मेंस ऑप्टिमाइज़ेशन",
        subtitle: "लो-लेटेंसी, स्मूद UI, और स्टेबल रिकग्निशन सेशन के लिए प्रैक्टिकल टेक्नीक्स",
        content: `
        <div class="process-step">
            <div class="step-header">
                <div class="step-number">5</div>
                <div>
                    <div class="step-title">परफॉर्मेंस ऑप्टिमाइज़ेशन</div>
                    <div class="step-subtitle">रियल-टाइम वॉइस इंटरैक्शन में UI और रिकग्निशन दोनों को fast रखना</div>
                </div>
            </div>

            <div class="step-content">
                <div class="step-description">
                    <p>Speech-to-Text systems में परफॉर्मेंस issues अक्सर DOM को बार-बार update करने, heavy synchronous काम, और uncontrolled timers की वजह से आते हैं।</p>

                    <p class="mt-4">यह best practices implement करें:</p>
                    <ul class="mt-3">
                        <li>Interim results पर DOM updates throttle या debounce करें।</li>
                        <li>Waveform या animation के लिए requestAnimationFrame का उपयोग करें।</li>
                        <li>Large innerHTML re-render avoid करें, छोटे targeted updates करें।</li>
                        <li>SpeechRecognition को बार-बार start/stop मत करें, session stable रखें।</li>
                        <li>Heavy parsing, formatting, analytics को background-friendly pattern में करें।</li>
                    </ul>
                </div>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-language">JavaScript - Debounce UI updates</div>
                        <button class="button button-sm button-secondary" onclick="copyCode('opt-code')">
                            <i class="fas fa-copy"></i>
                            कॉपी
                        </button>
                    </div>
                    <pre class="code-content" id="opt-code"><code>function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

const renderInterim = debounce((text) => {
  elements.microphoneLabel.textContent = text ? \`"\${text}"\` : "सुनना शुरू करने के लिए क्लिक करें";
}, 80);</code></pre>
                </div>
            </div>
        </div>
    `
    },
    apis: {
        title: "API रेफरेंस",
        subtitle: "इस प्लेटफॉर्म में इस्तेमाल होने वाले core browser APIs",
        content: `
        <div class="process-step">
            <div class="step-header">
                <div class="step-number">6</div>
                <div>
                    <div class="step-title">API रेफरेंस</div>
                    <div class="step-subtitle">SpeechRecognition, Fullscreen, Clipboard, Storage</div>
                </div>
            </div>

            <div class="step-content">
                <div class="step-description">
                    <ul>
                        <li><strong>Web Speech API</strong>: SpeechRecognition या webkitSpeechRecognition</li>
                        <li><strong>Fullscreen API</strong>: documentElement.requestFullscreen, document.exitFullscreen</li>
                        <li><strong>Clipboard API</strong>: navigator.clipboard.writeText</li>
                        <li><strong>Web Storage</strong>: localStorage में theme, language, chat history</li>
                        <li><strong>MediaDevices</strong> (optional): navigator.mediaDevices.getUserMedia जब raw audio pipeline चाहिए</li>
                    </ul>
                </div>

                <div class="code-block">
                    <div class="code-header">
                        <div class="code-language">JavaScript - SpeechRecognition fallback</div>
                        <button class="button button-sm button-secondary" onclick="copyCode('api-code')">
                            <i class="fas fa-copy"></i>
                            कॉपी
                        </button>
                    </div>
                    <pre class="code-content" id="api-code"><code>const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  console.warn("SpeechRecognition is not supported in this browser.");
}</code></pre>
                </div>
            </div>
        </div>
    `
    }
};

// एप्लिकेशन इनिशियलाइज़ करें
function initApp() {
    console.log('VoiceFlow Platform इनिशियलाइज़ हो रहा है...');

    // थीम इनिशियलाइज़ करें
    initTheme();

    // स्पीच रिकग्निशन इनिशियलाइज़ करें
    initSpeechRecognition();

    // इवेंट लिस्नर्स इनिशियलाइज़ करें
    initEventListeners();

    // शुरुआती डेटा लोड करें
    loadInitialData();

    // प्रोजेक्ट्स लोड करें
    loadProjects();

    // हाउ इट वर्क्स कंटेंट लोड करें
    loadHowItWorksContent('architecture');

    console.log('एप्लिकेशन सफलतापूर्वक इनिशियलाइज़ हो गया');
}

// थीम इनिशियलाइज़ करें
function initTheme() {
    const savedTheme = localStorage.getItem('voiceflow-theme');
    if (savedTheme) {
        appState.theme = savedTheme;
    } else {
        appState.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme();
}

// थीम अप्लाई करें
function applyTheme() {
    document.documentElement.className = appState.theme;
    elements.themeIcon.className = appState.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('voiceflow-theme', appState.theme);
}

// थीम टॉगल करें
function toggleTheme() {
    appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    showNotification(`अब ${appState.theme} थीम एक्टिव है`, 'info');
}

// फुलस्क्रीन टॉगल करें
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Fullscreen एनेबल करने में एरर: ${err.message}`);
        });
        appState.isFullscreen = true;
        elements.fullscreenToggle.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            appState.isFullscreen = false;
            elements.fullscreenToggle.innerHTML = '<i class="fas fa-expand"></i>';
        }
    }
}

// लैंग्वेज स्विचर इनिशियलाइज़ करें
function initLanguageSwitcher() {
    // बाहर क्लिक करने पर ड्रॉपडाउन बंद करें
    document.addEventListener('click', (e) => {
        if (!elements.languageSwitcher.contains(e.target) && !elements.languageDropdown.contains(e.target)) {
            elements.languageDropdown.classList.remove('show');
        }
    });

    // ड्रॉपडाउन टॉगल करें
    elements.languageSwitcher.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.languageDropdown.classList.toggle('show');
    });

    // भाषा चयन हैंडल करें
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const url = option.getAttribute('href');
            if (url !== window.location.pathname.split('/').pop()) {
                window.location.href = url;
            } else {
                elements.languageDropdown.classList.remove('show');
            }
        });
    });
}

// स्पीच रिकग्निशन इनिशियलाइज़ करें
function initSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showNotification('आपके ब्राउज़र में स्पीच रिकग्निशन सपोर्ट नहीं है', 'error');
        elements.microphoneButton.disabled = true;
        elements.voiceSearchButton.disabled = true;
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    appState.recognition = new SpeechRecognition();

    // रिकग्निशन कॉन्फ़िगरेशन
    appState.recognition.continuous = true;
    appState.recognition.interimResults = true;
    appState.recognition.lang = appState.language;
    appState.recognition.maxAlternatives = 1;

    // इवेंट हैंडलर्स सेट करें
    appState.recognition.onstart = handleRecognitionStart;
    appState.recognition.onresult = handleRecognitionResult;
    appState.recognition.onerror = handleRecognitionError;
    appState.recognition.onend = handleRecognitionEnd;
}

// इवेंट लिस्नर्स इनिशियलाइज़ करें
function initEventListeners() {
    // थीम और फुलस्क्रीन
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.fullscreenToggle.addEventListener('click', toggleFullscreen);

    // लैंग्वेज स्विचर
    initLanguageSwitcher();

    // टैब स्विचिंग
    elements.mainTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // लर्न बटन
    elements.learnButton.addEventListener('click', () => {
        switchTab('how-it-works');
    });

    // चैट
    elements.sendMessage.addEventListener('click', sendChatMessage);
    elements.chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage();
        }
    });
    elements.clearChat.addEventListener('click', clearChat);
    elements.exportChat.addEventListener('click', exportChat);

    // वॉइस कंट्रोल्स
    elements.microphoneButton.addEventListener('click', toggleListening);
    elements.languageSelect.addEventListener('change', (e) => {
        appState.language = e.target.value;
        if (appState.recognition) {
            appState.recognition.lang = appState.language;
        }
        localStorage.setItem('voiceflow-language', appState.language);
    });
    elements.autoPunctuation.addEventListener('change', (e) => {
        appState.autoPunctuation = e.target.checked;
        localStorage.setItem('voiceflow-auto-punctuation', appState.autoPunctuation);
    });
    elements.noiseReduction.addEventListener('change', (e) => {
        appState.noiseReduction = e.target.checked;
        localStorage.setItem('voiceflow-noise-reduction', appState.noiseReduction);
    });

    // सर्च
    elements.searchButton.addEventListener('click', performSearch);
    elements.voiceSearchButton.addEventListener('click', startVoiceSearch);
    elements.clearSearch.addEventListener('click', clearSearch);
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // प्रोजेक्ट्स
    elements.filterActive.addEventListener('click', () => filterProjects('active'));
    elements.filterAll.addEventListener('click', () => filterProjects('all'));

    // हाउ इट वर्क्स
    document.querySelectorAll('[data-section]').forEach(button => {
        button.addEventListener('click', (e) => {
            const section = e.target.closest('button').getAttribute('data-section');
            loadHowItWorksContent(section);
        });
    });
    elements.viewCode.addEventListener('click', () => {
        window.open('https://github.com/Sunil-KumarSharma/Voice-Assistant', '_blank');
    });

    // फुलस्क्रीन चेंज लिस्नर
    document.addEventListener('fullscreenchange', () => {
        appState.isFullscreen = !!document.fullscreenElement;
        elements.fullscreenToggle.innerHTML = appState.isFullscreen ?
            '<i class="fas fa-compress"></i>' :
            '<i class="fas fa-expand"></i>';
    });
}

// शुरुआती डेटा लोड करें
function loadInitialData() {
    // localStorage से सेटिंग्स लोड करें
    const savedLanguage = localStorage.getItem('voiceflow-language');
    const savedAutoPunct = localStorage.getItem('voiceflow-auto-punctuation');
    const savedNoiseRed = localStorage.getItem('voiceflow-noise-reduction');

    if (savedLanguage) {
        appState.language = savedLanguage;
        elements.languageSelect.value = savedLanguage;
    }

    if (savedAutoPunct !== null) {
        appState.autoPunctuation = savedAutoPunct === 'true';
        elements.autoPunctuation.checked = appState.autoPunctuation;
    }

    if (savedNoiseRed !== null) {
        appState.noiseReduction = savedNoiseRed === 'true';
        elements.noiseReduction.checked = appState.noiseReduction;
    }

    // चैट हिस्ट्री लोड करें
    const savedChat = localStorage.getItem('voiceflow-chat');
    if (savedChat) {
        try {
            appState.chatMessages = JSON.parse(savedChat);
            renderChatMessages();
        } catch (e) {
            console.error('चैट हिस्ट्री लोड नहीं हो पाई:', e);
        }
    }
}

// प्रोजेक्ट्स लोड करें
function loadProjects() {
    appState.projects = sampleProjects;
    renderProjects();
}

// हाउ इट वर्क्स कंटेंट लोड करें
function loadHowItWorksContent(section) {
    const content = howItWorksContent[section];
    if (!content) {
        // सेक्शन नहीं मिला तो डिफ़ॉल्ट आर्किटेक्चर
        loadHowItWorksContent('architecture');
        return;
    }

    elements.explanationContent.innerHTML = content.content;

    // एक्टिव बटन अपडेट करें
    document.querySelectorAll('[data-section]').forEach(btn => {
        btn.classList.remove('button-primary');
        btn.classList.add('button-secondary');
    });
    const activeButton = document.querySelector(`[data-section="${section}"]`);
    if (activeButton) {
        activeButton.classList.remove('button-secondary');
        activeButton.classList.add('button-primary');
    }
}

// टैब स्विच करें
function switchTab(tabId) {
    // एक्टिव टैब अपडेट करें
    elements.mainTabs.forEach(tab => {
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // एक्टिव कंटेंट अपडेट करें
    elements.tabContents.forEach(content => {
        if (content.id === `${tabId}-tab`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    appState.activeTab = tabId;

    // हाउ इट वर्क्स टैब के लिए कंटेंट लोड करें
    if (tabId === 'how-it-works' && !elements.explanationContent.innerHTML) {
        loadHowItWorksContent('architecture');
    }
}

// रिकग्निशन स्टार्ट हैंडल करें
function handleRecognitionStart() {
    console.log('स्पीच रिकग्निशन शुरू हो गया');
    appState.isListening = true;
    updateVoiceState('listening');
    showNotification('सुन रहा हूँ... अब बोलिए', 'info');
}

// रिकग्निशन रिजल्ट हैंडल करें
function handleRecognitionResult(event) {
    let interim = '';
    let final = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
            final += transcript;
        } else {
            interim += transcript;
        }
    }

    // एक्टिव टैब के हिसाब से UI अपडेट
    if (appState.activeTab === 'chat') {
        if (final) {
            addChatMessage(final, 'user', 'voice');
            simulateAIResponse(final);
        }
    } else if (appState.activeTab === 'search') {
        if (final) {
            elements.searchInput.value = final;
            performSearch();
        }
    }

    // माइक्रोफोन लेबल अपडेट करें
    if (interim) {
        elements.microphoneLabel.textContent = `"${interim}"`;
    }
}

// रिकग्निशन एरर हैंडल करें
function handleRecognitionError(event) {
    console.error('स्पीच रिकग्निशन एरर:', event.error);
    let message = 'स्पीच रिकग्निशन एरर';

    switch (event.error) {
        case 'no-speech':
            message = 'कोई स्पीच डिटेक्ट नहीं हुई। कृपया थोड़ा तेज़ बोलकर फिर से कोशिश करें।';
            break;
        case 'audio-capture':
            message = 'कोई माइक्रोफोन नहीं मिला। कृपया अपना माइक्रोफोन चेक करें।';
            break;
        case 'not-allowed':
            message = 'माइक्रोफोन एक्सेस डिनाई हो गया। कृपया माइक्रोफोन एक्सेस की अनुमति दें।';
            break;
    }

    showNotification(message, 'error');
    updateVoiceState('error');
    appState.isListening = false;
}

// रिकग्निशन एंड हैंडल करें
function handleRecognitionEnd() {
    console.log('स्पीच रिकग्निशन बंद हो गया');
    appState.isListening = false;
    updateVoiceState('idle');
    elements.microphoneLabel.textContent = 'सुनना शुरू करने के लिए क्लिक करें';
}

// लिस्निंग टॉगल करें
function toggleListening() {
    if (!appState.recognition) {
        showNotification('स्पीच रिकग्निशन उपलब्ध नहीं है', 'error');
        return;
    }

    if (appState.isListening) {
        appState.recognition.stop();
    } else {
        // रिकग्निशन सेटिंग्स अपडेट करें
        appState.recognition.lang = appState.language;

        // रिकग्निशन स्टार्ट करें
        try {
            appState.recognition.start();
        } catch (error) {
            console.error('रिकग्निशन स्टार्ट करने में एरर:', error);
            showNotification('सुनना शुरू नहीं हो पाया। कृपया फिर से कोशिश करें।', 'error');
        }
    }
}

// वॉइस स्टेट अपडेट करें
function updateVoiceState(state) {
    appState.voiceState = state;
    elements.microphoneButton.className = `microphone-button ${state}`;

    // बटन आइकन अपडेट करें
    const icon = elements.microphoneButton.querySelector('.microphone-icon');
    if (state === 'listening') {
        icon.innerHTML = '<path d="M6 9v6m4-6v6m4-6v6m4-6v6M3 15h18"/>';
    } else {
        icon.innerHTML = '<path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>';
    }
}

// चैट मैसेज जोड़ें
function addChatMessage(text, role, source = 'text') {
    const message = {
        id: Date.now(),
        text,
        role,
        source,
        timestamp: new Date(),
        language: appState.language
    };

    appState.chatMessages.push(message);
    renderChatMessages();

    // localStorage में सेव करें
    localStorage.setItem('voiceflow-chat', JSON.stringify(appState.chatMessages));
}

// चैट मैसेज रेंडर करें
function renderChatMessages() {
    const messageList = elements.chatHistory.querySelector('.message-list');
    messageList.innerHTML = '';

    // कोई मैसेज नहीं है तो वेलकम मैसेज दिखाएँ
    if (appState.chatMessages.length === 0) {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'message message-system';
        welcomeMsg.innerHTML = `
                    <div class="message-content">
                        AI असिस्टेंट में आपका स्वागत है! मैं सवालों, विश्लेषण, और निर्णय सपोर्ट में आपकी मदद कर सकता हूँ।
                        माइक्रोफोन का उपयोग करके बोलें या नीचे अपना संदेश टाइप करें।
                    </div>
                    <div class="message-meta">
                        <span>सिस्टम</span>
                        <span>•</span>
                        <span>अभी</span>
                    </div>
                `;
        messageList.appendChild(welcomeMsg);
        return;
    }

    // सभी मैसेज रेंडर करें
    appState.chatMessages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${msg.role}`;

        const sourceIcon = msg.source === 'voice' ? '🎤' : '⌨️';
        const timeStr = msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.innerHTML = `
                    <div class="message-content">
                        ${msg.text}
                        <div class="message-meta">
                            <span>${timeStr}</span>
                            <span>•</span>
                            <span>${sourceIcon}</span>
                            <span>•</span>
                            <span>${msg.language}</span>
                        </div>
                    </div>
                `;

        messageList.appendChild(messageDiv);
    });

    // नीचे तक स्क्रॉल करें
    elements.chatHistory.scrollTop = elements.chatHistory.scrollHeight;
}

// चैट मैसेज भेजें
function sendChatMessage() {
    const text = elements.chatInput.value.trim();
    if (!text) return;

    // यूज़र मैसेज जोड़ें
    addChatMessage(text, 'user', 'text');

    // इनपुट क्लियर करें
    elements.chatInput.value = '';

    // AI रिस्पॉन्स सिम्युलेट करें
    simulateAIResponse(text);
}

// AI रिस्पॉन्स सिम्युलेट करें
function simulateAIResponse(userMessage) {
    // टाइपिंग इंडिकेटर दिखाएँ
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message message-assistant';
    typingIndicator.innerHTML = `
                <div class="message-content">
                    <div style="display: flex; gap: 4px; align-items: center;">
                        <div style="width: 8px; height: 8px; background-color: currentColor; border-radius: 50%; animation: pulse 1.4s ease-in-out infinite;"></div>
                        <div style="width: 8px; height: 8px; background-color: currentColor; border-radius: 50%; animation: pulse 1.4s ease-in-out infinite; animation-delay: -0.16s;"></div>
                        <div style="width: 8px; height: 8px; background-color: currentColor; border-radius: 50%; animation: pulse 1.4s ease-in-out infinite; animation-delay: -0.32s;"></div>
                    </div>
                </div>
            `;

    const messageList = elements.chatHistory.querySelector('.message-list');
    messageList.appendChild(typingIndicator);
    elements.chatHistory.scrollTop = elements.chatHistory.scrollHeight;

    // डिले के बाद रिस्पॉन्स जनरेट करें
    setTimeout(() => {
        typingIndicator.remove();

        // इंटेलिजेंट रिस्पॉन्स जनरेट करें
        const responses = generateAIResponse(userMessage);
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        addChatMessage(randomResponse, 'assistant', 'ai');
    }, 1000 + Math.random() * 1000);
}

// AI रिस्पॉन्स जनरेट करें
function generateAIResponse(query) {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('speech') || lowerQuery.includes('voice')) {
        return [
            `मैं समझ रहा हूँ कि आप स्पीच रिकग्निशन के बारे में पूछ रहे हैं। मौजूदा सिस्टम Web Speech API का उपयोग करता है और ${appState.language} लैंग्वेज मॉडल के साथ 96.2% एक्युरेसी हासिल करता है, रियल-टाइम प्रोसेसिंग के साथ।`,
            `"${query}" जैसी वॉइस क्वेरीज के लिए, सिस्टम ऑडियो को कई न्यूरल नेटवर्क लेयर्स से प्रोसेस करता है ताकि फोनेटिक फीचर्स निकाले जा सकें और हाई एक्युरेसी के साथ टेक्स्ट में कन्वर्ट किया जा सके।`,
            `इस प्लेटफॉर्म के पीछे की स्पीच-टू-टेक्स्ट टेक्नोलॉजी एडवांस्ड मशीन लर्निंग मॉडल्स का उपयोग करती है जो हजारों घंटों के मल्टीलिंगुअल स्पीच डेटा पर ट्रेन्ड हैं।`
        ];
    } else if (lowerQuery.includes('search') || lowerQuery.includes('find')) {
        return [
            `मैं "${query}" के बारे में जानकारी सर्च करने में आपकी मदद कर सकता हूँ। यह प्लेटफॉर्म कॉम्प्रिहेन्सिव रिजल्ट्स के लिए कई सर्च इंजिन्स और डेटाबेसेज़ के साथ इंटीग्रेट होता है।`,
            `"${query}" सर्च करने के लिए, आप Web-Based Search टैब का उपयोग कर सकते हैं, जो अलग-अलग वेब प्लेटफॉर्म्स पर टेक्स्ट और वॉइस, दोनों तरह की क्वेरीज सपोर्ट करता है।`,
            `सर्च फंक्शनैलिटी नैचुरल लैंग्वेज प्रोसेसिंग का उपयोग करके आपकी क्वेरी "${query}" को समझती है और कई सोर्सेज़ से रिलिवेंट रिजल्ट्स देती है।`
        ];
    } else {
        return [
            `मैं समझ रहा हूँ कि आप "${query}" के बारे में पूछ रहे हैं। मेरे एनालिसिस के आधार पर, यह रहा जो मुझे मिला...`,
            `"${query}" के बारे में आपके सवाल के लिए धन्यवाद। यह एक इंटरेस्टिंग टॉपिक है। मैं कुछ इनसाइट्स शेयर करता हूँ...`,
            `मैंने "${query}" से जुड़ी आपकी क्वेरी का एनालिसिस किया है। यह रहे कुछ की-पॉइंट्स जो आपको ध्यान में रखने चाहिए...`,
            `"${query}" के बारे में, मौजूदा जानकारी और एनालिसिस के आधार पर, आपको यह जानना चाहिए...`
        ];
    }
}

// चैट क्लियर करें
function clearChat() {
    if (appState.chatMessages.length === 0) return;

    if (confirm('क्या आप वाकई चैट हिस्ट्री क्लियर करना चाहते हैं?')) {
        appState.chatMessages = [];
        localStorage.removeItem('voiceflow-chat');
        renderChatMessages();
        showNotification('चैट हिस्ट्री क्लियर हो गई', 'info');
    }
}

// चैट एक्सपोर्ट करें
function exportChat() {
    if (appState.chatMessages.length === 0) {
        showNotification('एक्सपोर्ट करने के लिए कोई चैट हिस्ट्री नहीं है', 'info');
        return;
    }

    const exportData = {
        exportDate: new Date().toISOString(),
        totalMessages: appState.chatMessages.length,
        messages: appState.chatMessages
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileName = `voiceflow-chat-${new Date().toISOString().slice(0, 10)}.json`;

    const link = document.createElement('a');
    link.setAttribute('href', dataUri);
    link.setAttribute('download', exportFileName);
    link.click();

    showNotification('चैट हिस्ट्री सफलतापूर्वक एक्सपोर्ट हो गई', 'success');
}

// सर्च परफॉर्म करें
function performSearch() {
    const query = elements.searchInput.value.trim();
    if (!query) {
        showNotification('कृपया एक सर्च क्वेरी दर्ज करें', 'info');
        return;
    }

    // लोडिंग स्टेट दिखाएँ
    elements.searchResults.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: var(--space-8);">
                    <div class="empty-icon">
                        <i class="fas fa-spinner fa-spin"></i>
                    </div>
                    <div class="empty-title">"${query}" के लिए सर्च हो रही है</div>
                    <div class="empty-description">
                        वेब प्लेटफॉर्म्स और डेटाबेसेज़ में सर्च हो रही है...
                    </div>
                </div>
            `;

    // डिले के बाद सर्च रिजल्ट्स सिम्युलेट करें
    setTimeout(() => {
        generateSearchResults(query);
    }, 800 + Math.random() * 800);
}

// सर्च रिजल्ट्स जनरेट करें
function generateSearchResults(query) {
    const categories = ['Web Platform', 'API Documentation', 'Tutorial', 'Best Practices', 'Case Study', 'Research Paper'];
    const platforms = ['E-commerce', 'Healthcare', 'Education', 'Finance', 'Media', 'Travel'];

    const results = [];
    const resultCount = 6 + Math.floor(Math.random() * 4);

    for (let i = 0; i < resultCount; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const platform = platforms[Math.floor(Math.random() * platforms.length)];
        const relevance = 85 + Math.floor(Math.random() * 15);

        results.push({
            id: i + 1,
            title: `${category}: ${query} Implementation`,
            description: `${platform.toLowerCase()} प्लेटफॉर्म्स के लिए स्पीच-टू-टेक्स्ट टेक्नोलॉजी का उपयोग करके "${query}" का इम्प्लीमेंटेशन। इसमें इंटीग्रेशन गाइडलाइंस, API रेफरेंसेज़, और परफॉर्मेंस ऑप्टिमाइजेशन टेक्नीक्स शामिल हैं।`,
            category,
            platform,
            relevance,
            tags: ['Speech-to-Text', platform, 'Web Integration', 'API']
        });
    }

    renderSearchResults(results);
    showNotification(`"${query}" के लिए ${results.length} रिजल्ट्स मिले`, 'success');
}

// सर्च रिजल्ट्स रेंडर करें
function renderSearchResults(results) {
    elements.searchResults.innerHTML = '';

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'search-result';

        const icon = getPlatformIcon(result.platform);

        resultElement.innerHTML = `
                    <div class="result-header">
                        <div class="result-icon">
                            <i class="${icon}"></i>
                        </div>
                        <div>
                            <div class="result-title">${result.title}</div>
                            <div class="text-xs text-tertiary mt-1">
                                ${result.platform} • ${result.category} • ${result.relevance}% relevant
                            </div>
                        </div>
                    </div>
                    <div class="result-description">
                        ${result.description}
                    </div>
                    <div class="result-tags">
                        ${result.tags.map(tag => `<span class="result-tag">${tag}</span>`).join('')}
                    </div>
                `;

        elements.searchResults.appendChild(resultElement);
    });
}

// प्लेटफॉर्म आइकन निकालें
function getPlatformIcon(platform) {
    const icons = {
        'E-commerce': 'fas fa-shopping-cart',
        'Healthcare': 'fas fa-heartbeat',
        'Education': 'fas fa-graduation-cap',
        'Finance': 'fas fa-chart-line',
        'Media': 'fas fa-newspaper',
        'Travel': 'fas fa-plane'
    };
    return icons[platform] || 'fas fa-globe';
}

// वॉइस सर्च शुरू करें
function startVoiceSearch() {
    if (!appState.recognition) {
        showNotification('स्पीच रिकग्निशन उपलब्ध नहीं है', 'error');
        return;
    }

    switchTab('search');

    // रिकग्निशन सेटिंग्स अपडेट करें
    appState.recognition.lang = appState.language;

    // रिकग्निशन स्टार्ट करें
    try {
        appState.recognition.start();
        updateVoiceState('listening');
        showNotification('सर्च क्वेरी के लिए सुन रहा हूँ...', 'info');
    } catch (error) {
        console.error('वॉइस सर्च शुरू करने में एरर:', error);
        showNotification('वॉइस सर्च शुरू नहीं हो पाई', 'error');
    }
}

// सर्च क्लियर करें
function clearSearch() {
    elements.searchInput.value = '';
    elements.searchResults.innerHTML = '';
    showNotification('सर्च क्लियर हो गई', 'info');
}

// प्रोजेक्ट्स रेंडर करें
function renderProjects() {
    elements.projectsGrid.innerHTML = '';

    appState.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';

        const statusClass = project.status === 'active' ? 'status-active' : 'status-development';
        const statusText = project.status === 'active' ? 'Active' : 'In Development';

        projectElement.innerHTML = `
                    <div class="project-header">
                        <div class="project-icon">
                            <i class="${project.icon}"></i>
                        </div>
                        <div class="project-info">
                            <div class="project-title">${project.title}</div>
                            <div class="project-category">${project.category}</div>
                        </div>
                        <span class="project-status ${statusClass}">${statusText}</span>
                    </div>
                    <div class="project-description">
                        ${project.description}
                    </div>
                    <div class="project-footer">
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                        <button class="button button-sm button-secondary view-project" data-id="${project.id}">
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                    </div>
                `;

        elements.projectsGrid.appendChild(projectElement);
    });

    // व्यू बटन्स के लिए इवेंट लिस्नर जोड़ें
    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.closest('button').getAttribute('data-id');
            const project = appState.projects.find(p => p.id == projectId);
            if (project) {
                showNotification(`अब ${project.title} देखा जा रहा है`, 'info');
            }
        });
    });
}

// प्रोजेक्ट्स फ़िल्टर करें
function filterProjects(filter) {
    let filteredProjects = sampleProjects;

    if (filter === 'active') {
        filteredProjects = sampleProjects.filter(project => project.status === 'active');
    }

    appState.projects = filteredProjects;
    renderProjects();

    const count = filteredProjects.length;
    showNotification(`${count} ${filter} प्रोजेक्ट${count !== 1 ? 's' : ''} दिखाए जा रहे हैं`, 'info');
}

// कोड कॉपी करें
function copyCode(codeId) {
    const codeElement = document.getElementById(codeId);
    const codeText = codeElement.textContent;

    navigator.clipboard.writeText(codeText).then(() => {
        showNotification('कोड क्लिपबोर्ड में कॉपी हो गया', 'success');
    }).catch(err => {
        console.error('कोड कॉपी नहीं हो पाया:', err);
        showNotification('कोड कॉपी नहीं हो पाया', 'error');
    });
}

// नोटिफिकेशन दिखाएँ
function showNotification(message, type = 'info') {
    // नोटिफिकेशन एलिमेंट बनाएं
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--color-surface-primary);
                border: 1px solid var(--color-border-primary);
                border-radius: var(--radius-lg);
                padding: var(--space-3) var(--space-4);
                box-shadow: var(--shadow-xl);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: var(--space-3);
                transform: translateX(100%);
                opacity: 0;
                transition: all 0.3s ease;
                max-width: 350px;
            `;

    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-triangle'
    };

    notification.innerHTML = `
                <div style="color: var(--color-${type}); font-size: var(--text-lg);">
                    <i class="${icons[type]}"></i>
                </div>
                <div>
                    <div style="font-weight: 600; margin-bottom: var(--space-1); color: var(--color-text-primary);">
                        ${type.charAt(0).toUpperCase() + type.slice(1)}
                    </div>
                    <div style="color: var(--color-text-secondary); font-size: var(--text-sm);">
                        ${message}
                    </div>
                </div>
            `;

    document.body.appendChild(notification);

    // एनिमेशन इन
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 10);

    // 5 सेकंड के बाद ऑटो रिमूव
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 5000);

    // क्लिक करके डिसमिस
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    });
}

// DOM लोड होने पर इनिशियलाइज़ करें
document.addEventListener('DOMContentLoaded', initApp);
