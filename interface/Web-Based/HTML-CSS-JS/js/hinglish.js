// Application State
const appState = {
    // UI State
    activeTab: 'chat',
    theme: 'dark',
    isFullscreen: false,

    // Voice State
    voiceState: 'idle',
    isListening: false,
    recognition: null,
    finalTranscript: '',
    interimTranscript: '',

    // Chat State
    chatMessages: [],

    // Search State
    searchResults: [],

    // Projects Data
    projects: [],

    // Settings
    language: 'en-US',
    autoPunctuation: true,
    noiseReduction: true
};

// DOM Elements
const elements = {
    // Theme & Fullscreen
    themeToggle: document.getElementById('themeToggle'),
    themeIcon: document.getElementById('themeIcon'),
    fullscreenToggle: document.getElementById('fullscreenToggle'),

    // Language Switcher
    languageSwitcher: document.getElementById('languageSwitcher'),
    languageDropdown: document.getElementById('languageDropdown'),

    // Tabs
    mainTabs: document.querySelectorAll('.main-tab'),
    tabContents: document.querySelectorAll('.tab-content'),

    // Chat
    chatHistory: document.getElementById('chatHistory'),
    chatInput: document.getElementById('chatInput'),
    sendMessage: document.getElementById('sendMessage'),
    clearChat: document.getElementById('clearChat'),
    exportChat: document.getElementById('exportChat'),

    // Voice Controls
    microphoneButton: document.getElementById('microphoneButton'),
    microphoneLabel: document.getElementById('microphoneLabel'),
    languageSelect: document.getElementById('languageSelect'),
    autoPunctuation: document.getElementById('autoPunctuation'),
    noiseReduction: document.getElementById('noiseReduction'),

    // Search
    searchInput: document.getElementById('searchInput'),
    searchButton: document.getElementById('searchButton'),
    voiceSearchButton: document.getElementById('voiceSearchButton'),
    clearSearch: document.getElementById('clearSearch'),
    searchResults: document.getElementById('searchResults'),

    // Projects
    projectsGrid: document.getElementById('projectsGrid'),
    filterActive: document.getElementById('filterActive'),
    filterAll: document.getElementById('filterAll'),

    // How It Works
    explanationContent: document.getElementById('explanationContent'),
    viewCode: document.getElementById('viewCode'),

    // Navigation
    learnButton: document.getElementById('learnButton')
};

// Sample Projects Data
const sampleProjects = [
    {
        id: 1,
        title: 'Voice-Enabled E-commerce Search',
        category: 'E-commerce Platform',
        description: 'Natural language voice commands ke through advanced product search, real-time inventory integration ke saath.',
        icon: 'fas fa-shopping-cart',
        tags: ['Search', 'E-commerce', 'Voice UI', 'Real-time'],
        status: 'development'
    },
    {
        id: 2,
        title: 'Healthcare Patient Portal',
        category: 'Healthcare Application',
        description: 'Appointment scheduling aur medical record access ke liye voice-controlled patient management system.',
        icon: 'fas fa-heartbeat',
        tags: ['Healthcare', 'Voice Assistant', 'Medical', 'HIPAA'],
        status: 'development'
    },
    {
        id: 3,
        title: 'Educational Learning Assistant',
        category: 'Education Platform',
        description: 'Quizzes, tutorials aur educational content ke liye voice interaction ke saath AI-powered learning platform.',
        icon: 'fas fa-graduation-cap',
        tags: ['Education', 'Learning', 'Voice Interaction', 'AI'],
        status: 'development'
    },
    {
        id: 4,
        title: 'Real Estate Voice Search',
        category: 'Real Estate Platform',
        description: 'Natural language voice queries se property search, intelligent filtering aur mapping ke saath.',
        icon: 'fas fa-home',
        tags: ['Real Estate', 'Search', 'Voice Navigation', 'Maps'],
        status: 'development'
    },
    {
        id: 5,
        title: 'Travel Booking Assistant',
        category: 'Travel Application',
        description: 'Flights, hotels aur activities ke liye voice-enabled travel booking system, conversational AI ke saath.',
        icon: 'fas fa-plane',
        tags: ['Travel', 'Booking', 'Conversational AI', 'Voice'],
        status: 'development'
    },
    {
        id: 6,
        title: 'News Reader & Summarizer',
        category: 'Media Application',
        description: 'Voice-controlled news aggregator jo articles ko aloud read karta hai aur AI-generated summaries provide karta hai.',
        icon: 'fas fa-newspaper',
        tags: ['Media', 'News', 'Voice Reader', 'AI Summary'],
        status: 'development'
    },
    {
        id: 7,
        title: 'Financial Voice Assistant',
        category: 'Finance Application',
        description: 'Real-time market data, transactions aur investment tracking ke liye voice-controlled financial dashboard.',
        icon: 'fas fa-chart-line',
        tags: ['Finance', 'Banking', 'Voice Assistant', 'Real-time'],
        status: 'development'
    },
    {
        id: 8,
        title: 'Restaurant Ordering System',
        category: 'Food & Beverage',
        description: 'Restaurant menu aur ordering ke liye voice-enabled system, real-time inventory aur kitchen integration ke saath.',
        icon: 'fas fa-utensils',
        tags: ['Food', 'Ordering', 'Voice UI', 'Real-time'],
        status: 'development'
    },
    {
        id: 9,
        title: 'Smart Home Controller',
        category: 'IoT Application',
        description: 'Home automation devices aur IoT ecosystems ke liye web-based voice control system.',
        icon: 'fas fa-home-alt',
        tags: ['IoT', 'Home Automation', 'Voice Control', 'Web'],
        status: 'development'
    },
    {
        id: 10,
        title: 'Customer Support Bot',
        category: 'Customer Service',
        description: '24/7 multilingual customer support chatbot, voice interaction aur sentiment analysis ke saath.',
        icon: 'fas fa-headset',
        tags: ['Support', 'AI', 'Voice Assistant', 'Multilingual'],
        status: 'development'
    }
];

// How It Works Content - UPDATED with icons and graphics
const howItWorksContent = {
    architecture: {
        title: "System Architecture",
        subtitle: "Speech-to-text platform architecture ka high-level overview",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">1</div>
                            <div>
                                <div class="step-title">Client-Side Architecture</div>
                                <div class="step-subtitle">Modern web browser with Web Speech API integration</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>Yeh platform browser ke built-in Web Speech API ko use karta hai real-time speech recognition ke liye. Yeh API provide karta hai:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-microphone"></i>
                                            </div>
                                            <div class="icon-step-label">Audio Capture</div>
                                            <div class="icon-step-tooltip">Direct microphone access, hardware optimization ke saath</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-filter"></i>
                                            </div>
                                            <div class="icon-step-label">Noise Filtering</div>
                                            <div class="icon-step-tooltip">Advanced noise cancellation algorithms</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-wave-square"></i>
                                            </div>
                                            <div class="icon-step-label">Audio Processing</div>
                                            <div class="icon-step-tooltip">Real-time audio stream processing</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="architecture-diagram mt-6">
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-primary);">
                                            <i class="fas fa-globe"></i>
                                        </div>
                                        <div class="arch-label">Web Browser</div>
                                        <div class="arch-description">Client-side interface</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-success);">
                                            <i class="fas fa-code"></i>
                                        </div>
                                        <div class="arch-label">Web Speech API</div>
                                        <div class="arch-description">Built-in recognition</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-warning);">
                                            <i class="fas fa-microchip"></i>
                                        </div>
                                        <div class="arch-label">Audio Processing</div>
                                        <div class="arch-description">Signal processing</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-error);">
                                            <i class="fas fa-brain"></i>
                                        </div>
                                        <div class="arch-label">ML Models</div>
                                        <div class="arch-description">Neural networks</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-secondary);">
                                            <i class="fas fa-text-height"></i>
                                        </div>
                                        <div class="arch-label">Text Output</div>
                                        <div class="arch-description">Final transcription</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-info);">
                                            <i class="fas fa-robot"></i>
                                        </div>
                                        <div class="arch-label">AI Integration</div>
                                        <div class="arch-description">Natural language processing</div>
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
                                            <div class="icon-step-label">User Input</div>
                                            <div class="icon-step-tooltip">User se voice ya text input</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-microphone"></i>
                                            </div>
                                            <div class="icon-step-label">Audio Capture</div>
                                            <div class="icon-step-tooltip">Microphone speech capture karta hai</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-cogs"></i>
                                            </div>
                                            <div class="icon-step-label">Processing</div>
                                            <div class="icon-step-tooltip">Audio processing aur feature extraction</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-brain"></i>
                                            </div>
                                            <div class="icon-step-label">Recognition</div>
                                            <div class="icon-step-tooltip">ML models audio ko text me convert karte hain</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-comment-alt"></i>
                                            </div>
                                            <div class="icon-step-label">Output</div>
                                            <div class="icon-step-tooltip">Text output app ko deliver hota hai</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="code-block">
                            <div class="code-header">
                                <div class="code-language">JavaScript - Speech Recognition Initialization</div>
                                <button class="button button-sm button-secondary" onclick="copyCode('arch-code')">
                                    <i class="fas fa-copy"></i>
                                    Copy
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
        title: "Speech Recognition Process",
        subtitle: "Machine learning se audio waves ko text me convert kaise hota hai",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">2</div>
                            <div>
                                <div class="step-title">Acoustic Model Processing</div>
                                <div class="step-subtitle">Sound waves ko phonetic representations me convert karna</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>Speech recognition ek sophisticated pipeline follow karta hai:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-wave-square"></i>
                                            </div>
                                            <div class="icon-step-label">Audio Wave</div>
                                            <div class="icon-step-tooltip">Microphone se captured analog sound waves</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-digital-tachograph"></i>
                                            </div>
                                            <div class="icon-step-label">Digitization</div>
                                            <div class="icon-step-tooltip">Analog ko digital signals me convert karna</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-filter"></i>
                                            </div>
                                            <div class="icon-step-label">Pre-processing</div>
                                            <div class="icon-step-tooltip">Noise reduction aur normalization</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-info);">
                                                <i class="fas fa-chart-line"></i>
                                            </div>
                                            <div class="icon-step-label">Feature Extraction</div>
                                            <div class="icon-step-tooltip">Audio se MFCC features extract karna</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-brain"></i>
                                            </div>
                                            <div class="icon-step-label">Acoustic Model</div>
                                            <div class="icon-step-tooltip">Deep neural network processing</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-language"></i>
                                            </div>
                                            <div class="icon-step-label">Language Model</div>
                                            <div class="icon-step-tooltip">Context aur grammar analysis</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-success);">
                                                <i class="fas fa-text-height"></i>
                                            </div>
                                            <div class="icon-step-label">Text Output</div>
                                            <div class="icon-step-tooltip">Final transcribed text</div>
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
                                            <div class="icon-step-label">Audio Input</div>
                                            <div class="icon-step-tooltip">Sound waves capture hoti hain</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-microchip"></i>
                                            </div>
                                            <div class="icon-step-label">Signal Processing</div>
                                            <div class="icon-step-tooltip">Digital signal processing</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-chart-bar"></i>
                                            </div>
                                            <div class="icon-step-label">Feature Analysis</div>
                                            <div class="icon-step-tooltip">Speech features extract hote hain</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-network-wired"></i>
                                            </div>
                                            <div class="icon-step-label">Neural Network</div>
                                            <div class="icon-step-tooltip">Deep learning processing</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-file-alt"></i>
                                            </div>
                                            <div class="icon-step-label">Text Output</div>
                                            <div class="icon-step-tooltip">Final transcription result</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="code-block">
                            <div class="code-header">
                                <div class="code-language">JavaScript - Audio Processing</div>
                                <button class="button button-sm button-secondary" onclick="copyCode('recog-code')">
                                    <i class="fas fa-copy"></i>
                                    Copy
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
        title: "Audio Processing Pipeline",
        subtitle: "Real-time audio processing aur feature extraction",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">3</div>
                            <div>
                                <div class="step-title">Signal Processing Pipeline</div>
                                <div class="step-subtitle">Analog sound waves se digital features tak</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>Audio processing pipeline raw microphone input ko machine learning ke liye suitable features me transform karti hai:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-wave-square"></i>
                                            </div>
                                            <div class="icon-step-label">Raw Audio</div>
                                            <div class="icon-step-tooltip">Unprocessed audio signal</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-filter"></i>
                                            </div>
                                            <div class="icon-step-label">Pre-emphasis</div>
                                            <div class="icon-step-tooltip">High-frequency boosting</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-columns"></i>
                                            </div>
                                            <div class="icon-step-label">Framing</div>
                                            <div class="icon-step-tooltip">25ms frames me divide karna</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-info);">
                                                <i class="fas fa-window-restore"></i>
                                            </div>
                                            <div class="icon-step-label">Windowing</div>
                                            <div class="icon-step-tooltip">Hamming window apply karna</div>
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
                                            <div class="icon-step-tooltip">Mel-scale filters apply karna</div>
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
                                        <div class="arch-label">Audio Input</div>
                                        <div class="arch-description">Audio signal capture</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-success);">
                                            <i class="fas fa-filter"></i>
                                        </div>
                                        <div class="arch-label">Pre-processing</div>
                                        <div class="arch-description">Noise reduction</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-warning);">
                                            <i class="fas fa-wave-square"></i>
                                        </div>
                                        <div class="arch-label">Feature Extraction</div>
                                        <div class="arch-description">MFCC extraction</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-error);">
                                            <i class="fas fa-brain"></i>
                                        </div>
                                        <div class="arch-label">Model Processing</div>
                                        <div class="arch-description">Neural network analysis</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-secondary);">
                                            <i class="fas fa-chart-bar"></i>
                                        </div>
                                        <div class="arch-label">Confidence Scoring</div>
                                        <div class="arch-description">Probability calculation</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-info);">
                                            <i class="fas fa-check-circle"></i>
                                        </div>
                                        <div class="arch-label">Output Generation</div>
                                        <div class="arch-description">Final text output</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="code-block">
                            <div class="code-header">
                                <div class="code-language">JavaScript - Feature Extraction</div>
                                <button class="button button-sm button-secondary" onclick="copyCode('process-code')">
                                    <i class="fas fa-copy"></i>
                                    Copy
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
        title: "Web Integration",
        subtitle: "Speech-to-text ka web applications ke saath integration",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">4</div>
                            <div>
                                <div class="step-title">Web Application Integration</div>
                                <div class="step-subtitle">Web platforms ke saath seamless integration</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>Speech-to-text technology web applications ke saath multiple methods se integrate hoti hai:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fab fa-js-square"></i>
                                            </div>
                                            <div class="icon-step-label">JavaScript API</div>
                                            <div class="icon-step-tooltip">Web Speech API integration</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-plug"></i>
                                            </div>
                                            <div class="icon-step-label">REST APIs</div>
                                            <div class="icon-step-tooltip">HTTP-based speech services</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-cloud"></i>
                                            </div>
                                            <div class="icon-step-label">WebSocket</div>
                                            <div class="icon-step-tooltip">Real-time streaming</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-info);">
                                                <i class="fab fa-react"></i>
                                            </div>
                                            <div class="icon-step-label">React/Vue/Angular</div>
                                            <div class="icon-step-tooltip">Framework integration</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-shield-alt"></i>
                                            </div>
                                            <div class="icon-step-label">Security</div>
                                            <div class="icon-step-tooltip">HTTPS aur encryption</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-mobile-alt"></i>
                                            </div>
                                            <div class="icon-step-label">Responsive Design</div>
                                            <div class="icon-step-tooltip">Mobile aur desktop support</div>
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
                                        <div class="arch-label">Frontend</div>
                                        <div class="arch-description">Web interface</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-success);">
                                            <i class="fas fa-exchange-alt"></i>
                                        </div>
                                        <div class="arch-label">API Gateway</div>
                                        <div class="arch-description">Request routing</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-warning);">
                                            <i class="fas fa-server"></i>
                                        </div>
                                        <div class="arch-label">Speech Service</div>
                                        <div class="arch-description">Processing engine</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--gradient-error);">
                                            <i class="fas fa-database"></i>
                                        </div>
                                        <div class="arch-label">Database</div>
                                        <div class="arch-description">User data storage</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-secondary);">
                                            <i class="fas fa-robot"></i>
                                        </div>
                                        <div class="arch-label">AI Services</div>
                                        <div class="arch-description">NLP processing</div>
                                    </div>
                                    <div class="arch-node">
                                        <div class="arch-icon" style="background: var(--color-info);">
                                            <i class="fas fa-cloud-upload-alt"></i>
                                        </div>
                                        <div class="arch-label">Cloud Storage</div>
                                        <div class="arch-description">Audio file storage</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
    }
};

// Initialize Application
function initApp() {
    console.log('VoiceFlow Platform initialize ho raha hai...');

    // Theme initialize
    initTheme();

    // Speech recognition initialize
    initSpeechRecognition();

    // Event listeners initialize
    initEventListeners();

    // Initial data load
    loadInitialData();

    // Projects load
    loadProjects();

    // How It Works content load
    loadHowItWorksContent('architecture');

    console.log('Application successfully initialize ho gaya');
}

// Initialize Theme
function initTheme() {
    const savedTheme = localStorage.getItem('voiceflow-theme');
    if (savedTheme) {
        appState.theme = savedTheme;
    } else {
        appState.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme();
}

// Apply Theme
function applyTheme() {
    document.documentElement.className = appState.theme;
    elements.themeIcon.className = appState.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('voiceflow-theme', appState.theme);
}

// Toggle Theme
function toggleTheme() {
    appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    showNotification(`Theme switch ho gaya: ${appState.theme}`, 'info');
}

// Toggle Fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Fullscreen enable karne me error: ${err.message}`);
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

// Initialize Language Switcher
function initLanguageSwitcher() {
    // Outside click pe dropdown close
    document.addEventListener('click', (e) => {
        if (!elements.languageSwitcher.contains(e.target) && !elements.languageDropdown.contains(e.target)) {
            elements.languageDropdown.classList.remove('show');
        }
    });

    // Dropdown toggle
    elements.languageSwitcher.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.languageDropdown.classList.toggle('show');
    });

    // Language selection handle
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

// Initialize Speech Recognition
function initSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showNotification('Aapke browser me speech recognition support nahi karta', 'error');
        elements.microphoneButton.disabled = true;
        elements.voiceSearchButton.disabled = true;
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    appState.recognition = new SpeechRecognition();

    // Recognition configure
    appState.recognition.continuous = true;
    appState.recognition.interimResults = true;
    appState.recognition.lang = appState.language;
    appState.recognition.maxAlternatives = 1;

    // Event handlers set
    appState.recognition.onstart = handleRecognitionStart;
    appState.recognition.onresult = handleRecognitionResult;
    appState.recognition.onerror = handleRecognitionError;
    appState.recognition.onend = handleRecognitionEnd;
}

// Initialize Event Listeners
function initEventListeners() {
    // Theme & Fullscreen
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.fullscreenToggle.addEventListener('click', toggleFullscreen);

    // Language Switcher
    initLanguageSwitcher();

    // Tab Switching
    elements.mainTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Learn Button
    elements.learnButton.addEventListener('click', () => {
        switchTab('how-it-works');
    });

    // Chat
    elements.sendMessage.addEventListener('click', sendChatMessage);
    elements.chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage();
        }
    });
    elements.clearChat.addEventListener('click', clearChat);
    elements.exportChat.addEventListener('click', exportChat);

    // Voice Controls
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

    // Search
    elements.searchButton.addEventListener('click', performSearch);
    elements.voiceSearchButton.addEventListener('click', startVoiceSearch);
    elements.clearSearch.addEventListener('click', clearSearch);
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Projects
    elements.filterActive.addEventListener('click', () => filterProjects('active'));
    elements.filterAll.addEventListener('click', () => filterProjects('all'));

    // How It Works
    document.querySelectorAll('[data-section]').forEach(button => {
        button.addEventListener('click', (e) => {
            const section = e.target.closest('button').getAttribute('data-section');
            loadHowItWorksContent(section);
        });
    });
    elements.viewCode.addEventListener('click', () => {
        window.open('https://github.com/Sunil-KumarSharma/Voice-Assistant', '_blank');
    });

    // Fullscreen change listener
    document.addEventListener('fullscreenchange', () => {
        appState.isFullscreen = !!document.fullscreenElement;
        elements.fullscreenToggle.innerHTML = appState.isFullscreen ?
            '<i class="fas fa-compress"></i>' :
            '<i class="fas fa-expand"></i>';
    });
}

// Load Initial Data
function loadInitialData() {
    // localStorage se settings load
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

    // Chat history load
    const savedChat = localStorage.getItem('voiceflow-chat');
    if (savedChat) {
        try {
            appState.chatMessages = JSON.parse(savedChat);
            renderChatMessages();
        } catch (e) {
            console.error('Chat history load nahi ho payi:', e);
        }
    }
}

// Load Projects
function loadProjects() {
    appState.projects = sampleProjects;
    renderProjects();
}

// Load How It Works Content
function loadHowItWorksContent(section) {
    const content = howItWorksContent[section];
    if (!content) {
        // Agar section na mile, default architecture
        loadHowItWorksContent('architecture');
        return;
    }

    elements.explanationContent.innerHTML = content.content;

    // Active button update
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

// Switch Tab
function switchTab(tabId) {
    // Active tab update
    elements.mainTabs.forEach(tab => {
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Active content update
    elements.tabContents.forEach(content => {
        if (content.id === `${tabId}-tab`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    appState.activeTab = tabId;

    // How It Works tab ke liye content load
    if (tabId === 'how-it-works' && !elements.explanationContent.innerHTML) {
        loadHowItWorksContent('architecture');
    }
}

// Handle Recognition Start
function handleRecognitionStart() {
    console.log('Speech recognition start ho gaya');
    appState.isListening = true;
    updateVoiceState('listening');
    showNotification('Listening... abhi boliyen', 'info');
}

// Handle Recognition Result
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

    // Active tab ke hisaab se UI update
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

    // Microphone label update
    if (interim) {
        elements.microphoneLabel.textContent = `"${interim}"`;
    }
}

// Handle Recognition Error
function handleRecognitionError(event) {
    console.error('Speech recognition error:', event.error);
    let message = 'Speech recognition me error aaya';

    switch (event.error) {
        case 'no-speech':
            message = 'Speech detect nahi hui. Thoda loud bolkar try kariye.';
            break;
        case 'audio-capture':
            message = 'Microphone nahi mila. Microphone check kariye.';
            break;
        case 'not-allowed':
            message = 'Microphone access deny ho gaya. Please microphone allow kariye.';
            break;
    }

    showNotification(message, 'error');
    updateVoiceState('error');
    appState.isListening = false;
}

// Handle Recognition End
function handleRecognitionEnd() {
    console.log('Speech recognition end ho gaya');
    appState.isListening = false;
    updateVoiceState('idle');
    elements.microphoneLabel.textContent = 'Listening start karne ke liye click kariye';
}

// Toggle Listening
function toggleListening() {
    if (!appState.recognition) {
        showNotification('Speech recognition available nahi hai', 'error');
        return;
    }

    if (appState.isListening) {
        appState.recognition.stop();
    } else {
        // Recognition settings update
        appState.recognition.lang = appState.language;

        // Recognition start
        try {
            appState.recognition.start();
        } catch (error) {
            console.error('Recognition start karne me error:', error);
            showNotification('Listening start nahi ho paya. Please dubara try kariye.', 'error');
        }
    }
}

// Update Voice State
function updateVoiceState(state) {
    appState.voiceState = state;
    elements.microphoneButton.className = `microphone-button ${state}`;

    // Button icon update
    const icon = elements.microphoneButton.querySelector('.microphone-icon');
    if (state === 'listening') {
        icon.innerHTML = '<path d="M6 9v6m4-6v6m4-6v6m4-6v6M3 15h18"/>';
    } else {
        icon.innerHTML = '<path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>';
    }
}

// Add Chat Message
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

    // localStorage me save
    localStorage.setItem('voiceflow-chat', JSON.stringify(appState.chatMessages));
}

// Render Chat Messages
function renderChatMessages() {
    const messageList = elements.chatHistory.querySelector('.message-list');
    messageList.innerHTML = '';

    // Agar messages nahi hain to welcome message
    if (appState.chatMessages.length === 0) {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'message message-system';
        welcomeMsg.innerHTML = `
                    <div class="message-content">
                        AI Assistant me aapka welcome hai! Main questions, analysis, aur decision support me help kar sakta hoon.
                        Microphone se boliyen ya niche message type kariye.
                    </div>
                    <div class="message-meta">
                        <span>System</span>
                        <span>•</span>
                        <span>Abhi</span>
                    </div>
                `;
        messageList.appendChild(welcomeMsg);
        return;
    }

    // Sab messages render
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

    // Bottom scroll
    elements.chatHistory.scrollTop = elements.chatHistory.scrollHeight;
}

// Send Chat Message
function sendChatMessage() {
    const text = elements.chatInput.value.trim();
    if (!text) return;

    // User message add
    addChatMessage(text, 'user', 'text');

    // Input clear
    elements.chatInput.value = '';

    // AI response simulate
    simulateAIResponse(text);
}

// Simulate AI Response
function simulateAIResponse(userMessage) {
    // Typing indicator show
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

    // Delay ke baad response generate
    setTimeout(() => {
        typingIndicator.remove();

        const responses = generateAIResponse(userMessage);
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        addChatMessage(randomResponse, 'assistant', 'ai');
    }, 1000 + Math.random() * 1000);
}

// Generate AI Response
function generateAIResponse(query) {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('speech') || lowerQuery.includes('voice')) {
        return [
            `Mujhe samajh aa gaya ki aap speech recognition ke baare me puch rahe hain. Current system Web Speech API use karta hai ${appState.language} language model ke saath, aur 96.2% accuracy achieve karta hai real-time processing me.`,
            `Aapka voice query "${query}" multi-layer neural networks se process hota hai, jahan phonetic features extract hote hain aur high accuracy ke saath text me convert hota hai.`,
            `Is platform ke peeche speech-to-text technology advanced machine learning models use karti hai, jo multilingual speech data ke thousands of hours par train hoti hai.`
        ];
    } else if (lowerQuery.includes('search') || lowerQuery.includes('find')) {
        return [
            `Main aapko "${query}" ke baare me information search karne me help kar sakta hoon. Platform multiple search engines aur databases ke saath integrate hota hai for better coverage.`,
            `"${query}" search karne ke liye Web-Based Search tab use kariye. Yeh text aur voice dono queries support karta hai across different web platforms.`,
            `Search functionality natural language processing use karke aapki query "${query}" ko samajhti hai aur multiple sources se relevant results provide karti hai.`
        ];
    } else {
        return [
            `Maine aapki query "${query}" samajh li. Analysis ke basis par yeh points important hain...`,
            `"${query}" par aapka question valid hai. Main aapko kuch practical insights deta hoon...`,
            `Maine "${query}" ko analyze kiya. In key points ko consider kariye...`,
            `"${query}" ke regarding, current context aur analysis ke basis par yeh aapko pata hona chahiye...`
        ];
    }
}

// Clear Chat
function clearChat() {
    if (appState.chatMessages.length === 0) return;

    if (confirm('Kya aap sure hain ki aap chat history clear karna chahte hain?')) {
        appState.chatMessages = [];
        localStorage.removeItem('voiceflow-chat');
        renderChatMessages();
        showNotification('Chat history clear ho gayi', 'info');
    }
}

// Export Chat
function exportChat() {
    if (appState.chatMessages.length === 0) {
        showNotification('Export ke liye chat history available nahi hai', 'info');
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

    showNotification('Chat history successfully export ho gayi', 'success');
}

// Perform Search
function performSearch() {
    const query = elements.searchInput.value.trim();
    if (!query) {
        showNotification('Please search query enter kariye', 'info');
        return;
    }

    // Loading state show
    elements.searchResults.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: var(--space-8);">
                    <div class="empty-icon">
                        <i class="fas fa-spinner fa-spin"></i>
                    </div>
                    <div class="empty-title">"${query}" ke liye search chal rahi hai</div>
                    <div class="empty-description">
                        Web platforms aur databases me search ho rahi hai...
                    </div>
                </div>
            `;

    // Delay ke baad results simulate
    setTimeout(() => {
        generateSearchResults(query);
    }, 800 + Math.random() * 800);
}

// Generate Search Results
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
            description: `"${query}" ka implementation ${platform.toLowerCase()} platforms ke liye speech-to-text technology ke through. Isme integration guidelines, API references, aur performance optimization techniques included hain.`,
            category,
            platform,
            relevance,
            tags: ['Speech-to-Text', platform, 'Web Integration', 'API']
        });
    }

    renderSearchResults(results);
    showNotification(`"${query}" ke liye ${results.length} results mil gaye`, 'success');
}

// Render Search Results
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

// Get Platform Icon
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

// Start Voice Search
function startVoiceSearch() {
    if (!appState.recognition) {
        showNotification('Speech recognition available nahi hai', 'error');
        return;
    }

    switchTab('search');

    // Recognition settings update
    appState.recognition.lang = appState.language;

    // Recognition start
    try {
        appState.recognition.start();
        updateVoiceState('listening');
        showNotification('Search query ke liye listening...', 'info');
    } catch (error) {
        console.error('Voice search start karne me error:', error);
        showNotification('Voice search start nahi ho paya', 'error');
    }
}

// Clear Search
function clearSearch() {
    elements.searchInput.value = '';
    elements.searchResults.innerHTML = '';
    showNotification('Search clear ho gaya', 'info');
}

// Render Projects
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

    // View buttons par event listeners
    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.closest('button').getAttribute('data-id');
            const project = appState.projects.find(p => p.id == projectId);
            if (project) {
                showNotification(`Viewing ${project.title}`, 'info');
            }
        });
    });
}

// Filter Projects
function filterProjects(filter) {
    let filteredProjects = sampleProjects;

    if (filter === 'active') {
        filteredProjects = sampleProjects.filter(project => project.status === 'active');
    }

    appState.projects = filteredProjects;
    renderProjects();

    const count = filteredProjects.length;
    showNotification(`${count} ${filter} project${count !== 1 ? 's' : ''} show ho rahe hain`, 'info');
}

// Copy Code
function copyCode(codeId) {
    const codeElement = document.getElementById(codeId);
    const codeText = codeElement.textContent;

    navigator.clipboard.writeText(codeText).then(() => {
        showNotification('Code clipboard me copy ho gaya', 'success');
    }).catch(err => {
        console.error('Code copy fail:', err);
        showNotification('Code copy nahi ho paya', 'error');
    });
}

// Show Notification
function showNotification(message, type = 'info') {
    // Notification element create
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

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 10);

    // Auto remove after 5 sec
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
