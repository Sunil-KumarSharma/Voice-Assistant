
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
        description: 'Advanced product search using natural language voice commands with real-time inventory integration.',
        icon: 'fas fa-shopping-cart',
        tags: ['Search', 'E-commerce', 'Voice UI', 'Real-time'],
        status: 'development'
    },
    {
        id: 2,
        title: 'Healthcare Patient Portal',
        category: 'Healthcare Application',
        description: 'Voice-controlled patient management system for appointment scheduling and medical record access.',
        icon: 'fas fa-heartbeat',
        tags: ['Healthcare', 'Voice Assistant', 'Medical', 'HIPAA'],
        status: 'development'
    },
    {
        id: 3,
        title: 'Educational Learning Assistant',
        category: 'Education Platform',
        description: 'AI-powered learning platform with voice interaction for quizzes, tutorials, and educational content.',
        icon: 'fas fa-graduation-cap',
        tags: ['Education', 'Learning', 'Voice Interaction', 'AI'],
        status: 'development'
    },
    {
        id: 4,
        title: 'Real Estate Voice Search',
        category: 'Real Estate Platform',
        description: 'Property search using natural language voice queries with intelligent filtering and mapping.',
        icon: 'fas fa-home',
        tags: ['Real Estate', 'Search', 'Voice Navigation', 'Maps'],
        status: 'development'
    },
    {
        id: 5,
        title: 'Travel Booking Assistant',
        category: 'Travel Application',
        description: 'Voice-enabled travel booking system for flights, hotels, and activities with conversational AI.',
        icon: 'fas fa-plane',
        tags: ['Travel', 'Booking', 'Conversational AI', 'Voice'],
        status: 'development'
    },
    {
        id: 6,
        title: 'News Reader & Summarizer',
        category: 'Media Application',
        description: 'Voice-controlled news aggregator that reads articles aloud and provides AI-generated summaries.',
        icon: 'fas fa-newspaper',
        tags: ['Media', 'News', 'Voice Reader', 'AI Summary'],
        status: 'development'
    },
    {
        id: 7,
        title: 'Financial Voice Assistant',
        category: 'Finance Application',
        description: 'Voice-controlled financial dashboard for real-time market data, transactions, and investment tracking.',
        icon: 'fas fa-chart-line',
        tags: ['Finance', 'Banking', 'Voice Assistant', 'Real-time'],
        status: 'development'
    },
    {
        id: 8,
        title: 'Restaurant Ordering System',
        category: 'Food & Beverage',
        description: 'Voice-enabled restaurant menu and ordering system with real-time inventory and kitchen integration.',
        icon: 'fas fa-utensils',
        tags: ['Food', 'Ordering', 'Voice UI', 'Real-time'],
        status: 'development'
    },
    {
        id: 9,
        title: 'Smart Home Controller',
        category: 'IoT Application',
        description: 'Web-based voice control system for home automation devices and IoT ecosystems.',
        icon: 'fas fa-home-alt',
        tags: ['IoT', 'Home Automation', 'Voice Control', 'Web'],
        status: 'development'
    },
    {
        id: 10,
        title: 'Customer Support Bot',
        category: 'Customer Service',
        description: '24/7 multilingual customer support chatbot with voice interaction and sentiment analysis.',
        icon: 'fas fa-headset',
        tags: ['Support', 'AI', 'Voice Assistant', 'Multilingual'],
        status: 'development'
    }
];

// How It Works Content - UPDATED with icons and graphics
const howItWorksContent = {
    architecture: {
        title: "System Architecture",
        subtitle: "High-level overview of the speech-to-text platform architecture",
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
                                <p>The platform leverages the browser's built-in Web Speech API for real-time speech recognition. This API provides:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-microphone"></i>
                                            </div>
                                            <div class="icon-step-label">Audio Capture</div>
                                            <div class="icon-step-tooltip">Direct microphone access with hardware optimization</div>
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
                                            <div class="icon-step-tooltip">Voice or text input from user</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-microphone"></i>
                                            </div>
                                            <div class="icon-step-label">Audio Capture</div>
                                            <div class="icon-step-tooltip">Microphone captures speech</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-cogs"></i>
                                            </div>
                                            <div class="icon-step-label">Processing</div>
                                            <div class="icon-step-tooltip">Audio processing and feature extraction</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-error);">
                                                <i class="fas fa-brain"></i>
                                            </div>
                                            <div class="icon-step-label">Recognition</div>
                                            <div class="icon-step-tooltip">ML models convert audio to text</div>
                                        </div>
                                        <div class="timeline-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-comment-alt"></i>
                                            </div>
                                            <div class="icon-step-label">Output</div>
                                            <div class="icon-step-tooltip">Text output delivered to application</div>
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
        subtitle: "How audio waves are converted to text using machine learning",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">2</div>
                            <div>
                                <div class="step-title">Acoustic Model Processing</div>
                                <div class="step-subtitle">Converting sound waves to phonetic representations</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>The speech recognition process follows a sophisticated pipeline:</p>
                                <div class="icon-flow-container mt-4">
                                    <div class="icon-flow-row">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-primary);">
                                                <i class="fas fa-wave-square"></i>
                                            </div>
                                            <div class="icon-step-label">Audio Wave</div>
                                            <div class="icon-step-tooltip">Analog sound waves captured by microphone</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-success);">
                                                <i class="fas fa-digital-tachograph"></i>
                                            </div>
                                            <div class="icon-step-label">Digitization</div>
                                            <div class="icon-step-tooltip">Convert analog to digital signals</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--gradient-warning);">
                                                <i class="fas fa-filter"></i>
                                            </div>
                                            <div class="icon-step-label">Pre-processing</div>
                                            <div class="icon-step-tooltip">Noise reduction and normalization</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-info);">
                                                <i class="fas fa-chart-line"></i>
                                            </div>
                                            <div class="icon-step-label">Feature Extraction</div>
                                            <div class="icon-step-tooltip">Extract MFCC features from audio</div>
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
                                            <div class="icon-step-tooltip">Context and grammar analysis</div>
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
                                            <div class="icon-step-tooltip">Sound waves captured</div>
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
                                            <div class="icon-step-tooltip">Extract speech features</div>
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
        subtitle: "Real-time audio processing and feature extraction",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">3</div>
                            <div>
                                <div class="step-title">Signal Processing Pipeline</div>
                                <div class="step-subtitle">From analog sound waves to digital features</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>The audio processing pipeline transforms raw microphone input into features suitable for machine learning:</p>
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
                                            <div class="icon-step-tooltip">Divide into 25ms frames</div>
                                        </div>
                                    </div>
                                    <div class="icon-flow-row mt-4">
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-info);">
                                                <i class="fas fa-window-restore"></i>
                                            </div>
                                            <div class="icon-step-label">Windowing</div>
                                            <div class="icon-step-tooltip">Apply Hamming window</div>
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
                                            <div class="icon-step-tooltip">Apply Mel-scale filters</div>
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
                                        <div class="arch-description">Capture audio signal</div>
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
        subtitle: "How speech-to-text integrates with web applications",
        content: `
                    <div class="process-step">
                        <div class="step-header">
                            <div class="step-number">4</div>
                            <div>
                                <div class="step-title">Web Application Integration</div>
                                <div class="step-subtitle">Seamless integration with web platforms</div>
                            </div>
                        </div>
                        <div class="step-content">
                            <div class="step-description">
                                <p>Speech-to-text technology integrates with web applications through various methods:</p>
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
                                            <div class="icon-step-tooltip">HTTPS and encryption</div>
                                        </div>
                                        <div class="flow-arrow">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                        <div class="icon-step">
                                            <div class="icon-step-circle" style="background: var(--color-secondary);">
                                                <i class="fas fa-mobile-alt"></i>
                                            </div>
                                            <div class="icon-step-label">Responsive Design</div>
                                            <div class="icon-step-tooltip">Mobile and desktop support</div>
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
    },
     optimization: {
    title: "Performance Optimization",
    subtitle: "Practical techniques to keep speech recognition fast and the UI responsive",
    content: `
      <div class="process-step">
        <div class="step-header">
          <div class="step-number">5</div>
          <div>
            <div class="step-title">Performance Optimization</div>
            <div class="step-subtitle">Low latency, smooth UI, and stable recognition sessions</div>
          </div>
        </div>

        <div class="step-content">
          <div class="step-description">
            <p>In real-time speech-to-text, performance problems usually come from frequent DOM updates, heavy synchronous work in event handlers, and uncontrolled rendering loops.</p>

            <p class="mt-4">Key improvements you should apply:</p>
            <ul class="mt-3">
              <li>Batch UI updates. Avoid updating the DOM on every interim speech event if not needed.</li>
              <li>Use requestAnimationFrame for waveform or animation, not setInterval.</li>
              <li>Debounce expensive operations like formatting, analytics aggregation, and large list renders.</li>
              <li>Keep SpeechRecognition sessions stable. Do not start the recognizer repeatedly in short bursts.</li>
              <li>Keep HTML injection minimal. Prefer small updates over full innerHTML replacements.</li>
            </ul>
          </div>

          <div class="code-block">
            <div class="code-header">
              <div class="code-language">JavaScript - Debounce interim rendering</div>
              <button class="button button-sm button-secondary" onclick="copyCode('opt-code')">
                <i class="fas fa-copy"></i>
                Copy
              </button>
            </div>
            <pre class="code-content" id="opt-code"><code>// Debounce UI updates from interim speech results
function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

const renderInterim = debounce((text) => {
  elements.microphoneLabel.textContent = text ? \`"\${text}"\` : "Click to start listening";
}, 80);</code></pre>
          </div>
        </div>
      </div>
    `
  },

  apis: {
    title: "API Reference",
    subtitle: "Core browser APIs used by the platform",
    content: `
      <div class="process-step">
        <div class="step-header">
          <div class="step-number">6</div>
          <div>
            <div class="step-title">API Reference</div>
            <div class="step-subtitle">Web Speech API, Media Devices, Clipboard, Fullscreen</div>
          </div>
        </div>

        <div class="step-content">
          <div class="step-description">
            <ul>
              <li><strong>SpeechRecognition</strong>: speech-to-text (webkitSpeechRecognition fallback)</li>
              <li><strong>navigator.mediaDevices.getUserMedia</strong>: microphone stream (if you add raw audio pipeline)</li>
              <li><strong>Fullscreen API</strong>: immersive mode for training labs</li>
              <li><strong>Clipboard API</strong>: copy code blocks</li>
              <li><strong>LocalStorage</strong>: UI preferences and chat history</li>
            </ul>
          </div>
        </div>
      </div>
    `
  }

};

// Initialize Application
function initApp() {
    console.log('Initializing VoiceFlow Platform...');

    // Initialize theme
    initTheme();

    // Initialize speech recognition
    initSpeechRecognition();

    // Initialize event listeners
    initEventListeners();

    // Load initial data
    loadInitialData();

    // Load projects
    loadProjects();

    // Load How It Works content
    loadHowItWorksContent('architecture');

    console.log('Application initialized successfully');
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
    showNotification(`Switched to ${appState.theme} theme`, 'info');
}

// Toggle Fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
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
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.languageSwitcher.contains(e.target) && !elements.languageDropdown.contains(e.target)) {
            elements.languageDropdown.classList.remove('show');
        }
    });

    // Toggle dropdown
    elements.languageSwitcher.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.languageDropdown.classList.toggle('show');
    });

    // Handle language selection
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
        showNotification('Speech recognition is not supported in your browser', 'error');
        elements.microphoneButton.disabled = true;
        elements.voiceSearchButton.disabled = true;
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    appState.recognition = new SpeechRecognition();

    // Configure recognition
    appState.recognition.continuous = true;
    appState.recognition.interimResults = true;
    appState.recognition.lang = appState.language;
    appState.recognition.maxAlternatives = 1;

    // Set up event handlers
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
        window.open('https://github.com/voiceflow-platform', '_blank');
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
    // Load settings from localStorage
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

    // Load chat history
    const savedChat = localStorage.getItem('voiceflow-chat');
    if (savedChat) {
        try {
            appState.chatMessages = JSON.parse(savedChat);
            renderChatMessages();
        } catch (e) {
            console.error('Failed to load chat history:', e);
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
        // Default to architecture if section not found
        loadHowItWorksContent('architecture');
        return;
    }

    elements.explanationContent.innerHTML = content.content;

    // Update active button
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
    // Update active tab
    elements.mainTabs.forEach(tab => {
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update active content
    elements.tabContents.forEach(content => {
        if (content.id === `${tabId}-tab`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    appState.activeTab = tabId;

    // Load content for How It Works tab
    if (tabId === 'how-it-works' && !elements.explanationContent.innerHTML) {
        loadHowItWorksContent('architecture');
    }
}

// Handle Recognition Start
function handleRecognitionStart() {
    console.log('Speech recognition started');
    appState.isListening = true;
    updateVoiceState('listening');
    showNotification('Listening... Speak now', 'info');
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

    // Update UI based on active tab
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

    // Update microphone label
    if (interim) {
        elements.microphoneLabel.textContent = `"${interim}"`;
    }
}

// Handle Recognition Error
function handleRecognitionError(event) {
    console.error('Speech recognition error:', event.error);
    let message = 'Speech recognition error';

    switch (event.error) {
        case 'no-speech':
            message = 'No speech detected. Please try speaking louder.';
            break;
        case 'audio-capture':
            message = 'No microphone found. Please check your microphone.';
            break;
        case 'not-allowed':
            message = 'Microphone access denied. Please allow microphone access.';
            break;
    }

    showNotification(message, 'error');
    updateVoiceState('error');
    appState.isListening = false;
}

// Handle Recognition End
function handleRecognitionEnd() {
    console.log('Speech recognition ended');
    appState.isListening = false;
    updateVoiceState('idle');
    elements.microphoneLabel.textContent = 'Click to start listening';
}

// Toggle Listening
function toggleListening() {
    if (!appState.recognition) {
        showNotification('Speech recognition not available', 'error');
        return;
    }

    if (appState.isListening) {
        appState.recognition.stop();
    } else {
        // Update recognition settings
        appState.recognition.lang = appState.language;

        // Start recognition
        try {
            appState.recognition.start();
        } catch (error) {
            console.error('Error starting recognition:', error);
            showNotification('Failed to start listening. Please try again.', 'error');
        }
    }
}

// Update Voice State
function updateVoiceState(state) {
    appState.voiceState = state;
    elements.microphoneButton.className = `microphone-button ${state}`;

    // Update button icon
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

    // Save to localStorage
    localStorage.setItem('voiceflow-chat', JSON.stringify(appState.chatMessages));
}

// Render Chat Messages
function renderChatMessages() {
    const messageList = elements.chatHistory.querySelector('.message-list');
    messageList.innerHTML = '';

    // Add welcome message if no messages
    if (appState.chatMessages.length === 0) {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'message message-system';
        welcomeMsg.innerHTML = `
                    <div class="message-content">
                        Welcome to the AI Assistant! I can help you with questions, analysis, and decision support. 
                        Use the microphone to speak or type your message below.
                    </div>
                    <div class="message-meta">
                        <span>System</span>
                        <span>•</span>
                        <span>Just now</span>
                    </div>
                `;
        messageList.appendChild(welcomeMsg);
        return;
    }

    // Render all messages
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

    // Scroll to bottom
    elements.chatHistory.scrollTop = elements.chatHistory.scrollHeight;
}

// Send Chat Message
function sendChatMessage() {
    const text = elements.chatInput.value.trim();
    if (!text) return;

    // Add user message
    addChatMessage(text, 'user', 'text');

    // Clear input
    elements.chatInput.value = '';

    // Simulate AI response
    simulateAIResponse(text);
}

// Simulate AI Response
function simulateAIResponse(userMessage) {
    // Show typing indicator
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

    // Generate response after delay
    setTimeout(() => {
        typingIndicator.remove();

        // Generate intelligent response
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
            `I understand you're asking about speech recognition. The current system uses Web Speech API with ${appState.language} language model, achieving 96.2% accuracy with real-time processing.`,
            `For voice queries like "${query}", the system processes audio through multiple neural network layers to extract phonetic features and convert them to text with high accuracy.`,
            `The speech-to-text technology behind this platform uses advanced machine learning models trained on thousands of hours of multilingual speech data.`
        ];
    } else if (lowerQuery.includes('search') || lowerQuery.includes('find')) {
        return [
            `I can help you search for information about "${query}". The platform integrates with multiple search engines and databases for comprehensive results.`,
            `For searching "${query}", you can use the Web-Based Search tab which supports both text and voice queries across various web platforms.`,
            `The search functionality uses natural language processing to understand your query "${query}" and provide relevant results from multiple sources.`
        ];
    } else {
        return [
            `I understand you're asking about "${query}". Based on my analysis, here's what I found...`,
            `Thank you for your question about "${query}". This is an interesting topic. Let me provide some insights...`,
            `I've analyzed your query regarding "${query}". Here are the key points to consider...`,
            `Regarding "${query}", based on current information and analysis, here's what you should know...`
        ];
    }
}

// Clear Chat
function clearChat() {
    if (appState.chatMessages.length === 0) return;

    if (confirm('Are you sure you want to clear the chat history?')) {
        appState.chatMessages = [];
        localStorage.removeItem('voiceflow-chat');
        renderChatMessages();
        showNotification('Chat history cleared', 'info');
    }
}

// Export Chat
function exportChat() {
    if (appState.chatMessages.length === 0) {
        showNotification('No chat history to export', 'info');
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

    showNotification('Chat history exported successfully', 'success');
}

// Perform Search
function performSearch() {
    const query = elements.searchInput.value.trim();
    if (!query) {
        showNotification('Please enter a search query', 'info');
        return;
    }

    // Show loading state
    elements.searchResults.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: var(--space-8);">
                    <div class="empty-icon">
                        <i class="fas fa-spinner fa-spin"></i>
                    </div>
                    <div class="empty-title">Searching for "${query}"</div>
                    <div class="empty-description">
                        Searching across web platforms and databases...
                    </div>
                </div>
            `;

    // Simulate search results after delay
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
            description: `Implementation of "${query}" for ${platform.toLowerCase()} platforms using speech-to-text technology. Includes integration guidelines, API references, and performance optimization techniques.`,
            category,
            platform,
            relevance,
            tags: ['Speech-to-Text', platform, 'Web Integration', 'API']
        });
    }

    renderSearchResults(results);
    showNotification(`Found ${results.length} results for "${query}"`, 'success');
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
        showNotification('Speech recognition not available', 'error');
        return;
    }

    switchTab('search');

    // Update recognition settings
    appState.recognition.lang = appState.language;

    // Start recognition
    try {
        appState.recognition.start();
        updateVoiceState('listening');
        showNotification('Listening for search query...', 'info');
    } catch (error) {
        console.error('Error starting voice search:', error);
        showNotification('Failed to start voice search', 'error');
    }
}

// Clear Search
function clearSearch() {
    elements.searchInput.value = '';
    elements.searchResults.innerHTML = '';
    showNotification('Search cleared', 'info');
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

    // Add event listeners to view buttons
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
    showNotification(`Showing ${count} ${filter} project${count !== 1 ? 's' : ''}`, 'info');
}

// Copy Code
function copyCode(codeId) {
    const codeElement = document.getElementById(codeId);
    const codeText = codeElement.textContent;

    navigator.clipboard.writeText(codeText).then(() => {
        showNotification('Code copied to clipboard', 'success');
    }).catch(err => {
        console.error('Failed to copy code:', err);
        showNotification('Failed to copy code', 'error');
    });
}

// Show Notification
function showNotification(message, type = 'info') {
    // Create notification element
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

    // Auto remove after 5 seconds
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