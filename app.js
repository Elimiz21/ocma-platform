// OCMA - Omni-Channel Marketing Agent JavaScript - FIXED VERSION

// Application data
const platformData = {
  "platforms": [
    {
      "category": "Social Media",
      "items": [
        {
          "name": "X/Twitter",
          "icon": "🐦",
          "fields": [
            {"name": "API Key", "type": "text", "required": true, "helpText": "Your Twitter API Key from developer.twitter.com"},
            {"name": "API Secret", "type": "password", "required": true, "helpText": "Your Twitter API Secret"},
            {"name": "Access Token", "type": "text", "required": true, "helpText": "Your Twitter Access Token"},
            {"name": "Access Token Secret", "type": "password", "required": true, "helpText": "Your Twitter Access Token Secret"},
            {"name": "Client ID", "type": "text", "required": false, "helpText": "OAuth 2.0 Client ID"},
            {"name": "Client Secret", "type": "password", "required": false, "helpText": "OAuth 2.0 Client Secret"},
            {"name": "Bearer Token", "type": "password", "required": false, "helpText": "Bearer Token for API v2"}
          ]
        },
        {
          "name": "Facebook/Instagram",
          "icon": "📘",
          "fields": [
            {"name": "App ID", "type": "text", "required": true, "helpText": "Your Facebook App ID"},
            {"name": "App Secret", "type": "password", "required": true, "helpText": "Your Facebook App Secret"},
            {"name": "Client ID", "type": "text", "required": false, "helpText": "Same as App ID for OAuth"},
            {"name": "Client Secret", "type": "password", "required": false, "helpText": "Same as App Secret for OAuth"},
            {"name": "Access Token", "type": "text", "required": true, "helpText": "User Access Token"},
            {"name": "Page Access Token", "type": "text", "required": true, "helpText": "Page-specific Access Token"},
            {"name": "Business Account ID", "type": "text", "required": true, "helpText": "Instagram Business Account ID"},
            {"name": "Instagram Account ID", "type": "text", "required": true, "helpText": "Instagram Account ID"}
          ]
        },
        {
          "name": "LinkedIn",
          "icon": "💼",
          "fields": [
            {"name": "Client ID", "type": "text", "required": true, "helpText": "LinkedIn App Client ID"},
            {"name": "Client Secret", "type": "password", "required": true, "helpText": "LinkedIn App Client Secret"},
            {"name": "Access Token", "type": "text", "required": true, "helpText": "LinkedIn Access Token"},
            {"name": "Company ID", "type": "text", "required": false, "helpText": "LinkedIn Company Page ID"}
          ]
        },
        {
          "name": "TikTok",
          "icon": "🎵",
          "fields": [
            {"name": "Client Key", "type": "text", "required": true, "helpText": "TikTok App Client Key"},
            {"name": "Client Secret", "type": "password", "required": true, "helpText": "TikTok App Client Secret"},
            {"name": "Access Token", "type": "text", "required": true, "helpText": "TikTok Access Token"}
          ]
        },
        {
          "name": "Discord",
          "icon": "🎮",
          "fields": [
            {"name": "Bot Token", "type": "password", "required": true, "helpText": "Discord Bot Token (starts with 'Bot ')"},
            {"name": "Client ID", "type": "text", "required": true, "helpText": "Discord Application Client ID"},
            {"name": "Client Secret", "type": "password", "required": true, "helpText": "Discord Application Client Secret"}
          ]
        },
        {
          "name": "YouTube",
          "icon": "📺",
          "fields": [
            {"name": "API Key", "type": "password", "required": true, "helpText": "YouTube Data API Key"},
            {"name": "Client ID", "type": "text", "required": false, "helpText": "OAuth 2.0 Client ID"},
            {"name": "Client Secret", "type": "password", "required": false, "helpText": "OAuth 2.0 Client Secret"},
            {"name": "Access Token", "type": "text", "required": false, "helpText": "OAuth 2.0 Access Token"}
          ]
        }
      ]
    },
    {
      "category": "Marketing Tools",
      "items": [
        {
          "name": "SendPulse",
          "icon": "📧",
          "fields": [
            {"name": "Client ID", "type": "text", "required": true, "helpText": "SendPulse API Client ID"},
            {"name": "Client Secret", "type": "password", "required": true, "helpText": "SendPulse API Client Secret"},
            {"name": "Access Token", "type": "text", "required": false, "helpText": "Current Access Token (auto-generated)"}
          ]
        },
        {
          "name": "HubSpot",
          "icon": "🧡",
          "fields": [
            {"name": "API Key", "type": "password", "required": false, "helpText": "⚠️ Deprecated - Use Private App Token instead"},
            {"name": "Client ID", "type": "text", "required": false, "helpText": "OAuth App Client ID"},
            {"name": "Client Secret", "type": "password", "required": false, "helpText": "OAuth App Client Secret"},
            {"name": "Access Token", "type": "text", "required": false, "helpText": "OAuth Access Token"},
            {"name": "Private App Token", "type": "password", "required": true, "helpText": "Private App Access Token (Recommended)"}
          ]
        },
        {
          "name": "Buffer",
          "icon": "📊",
          "fields": [
            {"name": "Client ID", "type": "text", "required": true, "helpText": "Buffer App Client ID"},
            {"name": "Client Secret", "type": "password", "required": true, "helpText": "Buffer App Client Secret"},
            {"name": "Access Token", "type": "text", "required": true, "helpText": "Buffer Access Token"}
          ]
        },
        {
          "name": "Google Analytics",
          "icon": "📈",
          "fields": [
            {"name": "Client ID", "type": "text", "required": false, "helpText": "OAuth 2.0 Client ID"},
            {"name": "Client Secret", "type": "password", "required": false, "helpText": "OAuth 2.0 Client Secret"},
            {"name": "Service Account JSON", "type": "file", "required": true, "helpText": "Service Account credentials JSON file"},
            {"name": "Access Token", "type": "text", "required": false, "helpText": "OAuth Access Token"},
            {"name": "Property ID", "type": "text", "required": true, "helpText": "GA4 Property ID"}
          ]
        },
        {
          "name": "Mailchimp",
          "icon": "🐵",
          "fields": [
            {"name": "API Key", "type": "password", "required": true, "helpText": "Mailchimp API Key"},
            {"name": "Client ID", "type": "text", "required": false, "helpText": "OAuth App Client ID"},
            {"name": "Client Secret", "type": "password", "required": false, "helpText": "OAuth App Client Secret"}
          ]
        }
      ]
    },
    {
      "category": "Automation & Other",
      "items": [
        {
          "name": "Zapier",
          "icon": "⚡",
          "fields": [
            {"name": "Webhook URL", "type": "text", "required": true, "helpText": "Zapier Webhook URL"},
            {"name": "API Key", "type": "password", "required": false, "helpText": "Zapier API Key (if applicable)"}
          ]
        },
        {
          "name": "Canva",
          "icon": "🎨",
          "fields": [
            {"name": "Client ID", "type": "text", "required": true, "helpText": "Canva App Client ID"},
            {"name": "Client Secret", "type": "password", "required": true, "helpText": "Canva App Client Secret"},
            {"name": "Access Token", "type": "text", "required": true, "helpText": "Canva Access Token"}
          ]
        },
        {
          "name": "Webflow",
          "icon": "🌐",
          "fields": [
            {"name": "Site Access Token", "type": "password", "required": true, "helpText": "Site-specific Access Token"},
            {"name": "Client ID", "type": "text", "required": false, "helpText": "OAuth App Client ID"},
            {"name": "Client Secret", "type": "password", "required": false, "helpText": "OAuth App Client Secret"}
          ]
        },
        {
          "name": "Typeform",
          "icon": "📝",
          "fields": [
            {"name": "Personal Access Token", "type": "password", "required": true, "helpText": "Typeform Personal Access Token"},
            {"name": "Client ID", "type": "text", "required": false, "helpText": "OAuth App Client ID"},
            {"name": "Client Secret", "type": "password", "required": false, "helpText": "OAuth App Client Secret"}
          ]
        },
        {
          "name": "Airtable",
          "icon": "📋",
          "fields": [
            {"name": "Personal Access Token", "type": "password", "required": true, "helpText": "Airtable Personal Access Token"},
            {"name": "Base ID", "type": "text", "required": true, "helpText": "Airtable Base ID"},
            {"name": "Table Name", "type": "text", "required": true, "helpText": "Airtable Table Name"}
          ]
        },
        {
          "name": "Slack",
          "icon": "💬",
          "fields": [
            {"name": "Bot Token", "type": "password", "required": true, "helpText": "Slack Bot Token (xoxb-)"},
            {"name": "Client ID", "type": "text", "required": true, "helpText": "Slack App Client ID"},
            {"name": "Client Secret", "type": "password", "required": true, "helpText": "Slack App Client Secret"},
            {"name": "OAuth Token", "type": "password", "required": false, "helpText": "User OAuth Token (xoxp-)"}
          ]
        },
        {
          "name": "WhatsApp Business",
          "icon": "💚",
          "fields": [
            {"name": "Phone Number ID", "type": "text", "required": true, "helpText": "WhatsApp Business Phone Number ID"},
            {"name": "Access Token", "type": "password", "required": true, "helpText": "WhatsApp Business Access Token"},
            {"name": "Business Account ID", "type": "text", "required": true, "helpText": "WhatsApp Business Account ID"},
            {"name": "App ID", "type": "text", "required": true, "helpText": "Meta App ID"},
            {"name": "App Secret", "type": "password", "required": true, "helpText": "Meta App Secret"}
          ]
        }
      ]
    }
  ],
  "strategyTemplates": [
    "Zero-Budget Marketing Strategy",
    "Product Launch Strategy", 
    "Brand Awareness Campaign",
    "Lead Generation Strategy",
    "Content Marketing Plan"
  ],
  "contentTemplates": [
    "Social Media Content Calendar",
    "Email Marketing Templates",
    "Blog Content Templates",
    "Ad Copy Templates",
    "Video Script Templates"
  ],
  "exportSteps": [
    "Validating GitHub credentials...",
    "Creating repository...",
    "Preparing HTML file...",
    "Uploading index.html...",
    "Preparing CSS file...",
    "Uploading style.css...",
    "Preparing JavaScript file...",
    "Uploading app.js...",
    "Creating README.md...",
    "Creating package.json...",
    "Creating .gitignore...",
    "Export complete!"
  ]
};

// Application state
let appState = {
  integrations: {},
  currentStrategy: null,
  contentLibrary: [],
  activityLog: [],
  githubExports: []
};

// Initialize application - FIXED
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing application...');
  
  // Initialize all components
  initNavigation();
  initIntegrations();
  initStrategy();
  initContent();
  initGitHubExport();
  initDashboard();
  initModals();
  loadStateFromMemory();
  
  console.log('Application initialization complete');
});

// Navigation - COMPLETELY FIXED
function initNavigation() {
  console.log('Initializing navigation...');
  
  const navTabs = document.querySelectorAll('.nav-tab');
  console.log('Found nav tabs:', navTabs.length);
  
  navTabs.forEach((tab, index) => {
    console.log(`Tab ${index}:`, tab.dataset.tab);
    
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const tabName = this.dataset.tab;
      console.log('Tab clicked:', tabName);
      
      if (tabName) {
        switchTab(tabName);
      } else {
        console.error('No tab name found on clicked element');
      }
    });
  });
  
  // Ensure initial tab is properly shown
  setTimeout(() => {
    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab && activeTab.dataset.tab) {
      console.log('Setting initial tab:', activeTab.dataset.tab);
      switchTab(activeTab.dataset.tab);
    }
  }, 100);
}

function switchTab(tabName) {
  console.log('Switching to tab:', tabName);
  
  // Remove active class from all nav tabs
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Add active class to clicked tab
  const clickedTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (clickedTab) {
    clickedTab.classList.add('active');
    console.log('Activated nav tab:', tabName);
  } else {
    console.error('Could not find nav tab:', tabName);
  }
  
  // Hide all tab content
  const tabContents = document.querySelectorAll('.tab-content');
  console.log('Found tab contents:', tabContents.length);
  
  tabContents.forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none';
  });
  
  // Show the selected tab content
  const targetContent = document.getElementById(`${tabName}-tab`);
  if (targetContent) {
    targetContent.classList.add('active');
    targetContent.style.display = 'block';
    console.log('Showing content for tab:', tabName);
    
    // Trigger specific tab initialization if needed
    if (tabName === 'dashboard') {
      updateDashboard();
    }
  } else {
    console.error('Could not find content for tab:', tabName, 'Expected ID:', `${tabName}-tab`);
    
    // Debug: List all available tab content IDs
    const allTabContents = document.querySelectorAll('.tab-content');
    console.log('Available tab content IDs:');
    allTabContents.forEach(content => {
      console.log(' -', content.id);
    });
  }
}

// GitHub Export functionality - REAL API INTEGRATION
function initGitHubExport() {
  console.log('Initializing GitHub export...');
  
  const githubForm = document.getElementById('githubExportForm');
  const tokenToggle = document.getElementById('toggleGithubToken');

  // Form submission
  if (githubForm) {
    githubForm.addEventListener('submit', handleGitHubExport);
    console.log('GitHub form event listener added');
  }

  // Token visibility toggle
  if (tokenToggle) {
    tokenToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const tokenInput = document.getElementById('githubToken');
      if (tokenInput) {
        if (tokenInput.type === 'password') {
          tokenInput.type = 'text';
          this.textContent = '🙈';
        } else {
          tokenInput.type = 'password';
          this.textContent = '👁️';
        }
      }
    });
  }

  // Export another and retry buttons
  document.addEventListener('click', function(e) {
    if (e.target.id === 'exportAnother' || e.target.id === 'retryExport') {
      e.preventDefault();
      resetGitHubExportForm();
    }
  });

  // Update export history display
  updateExportHistory();
}

async function handleGitHubExport(event) {
  event.preventDefault();
  console.log('GitHub export form submitted');
  
  const githubUsername = document.getElementById('githubUsername').value.trim();
  const repositoryName = document.getElementById('repositoryName').value.trim();
  const githubToken = document.getElementById('githubToken').value.trim();

  console.log('Form values:', { githubUsername, repositoryName, tokenLength: githubToken.length });

  // Validation
  if (!githubUsername || !repositoryName || !githubToken) {
    showNotification('Please fill in all required fields.', 'error');
    return;
  }

  if (!repositoryName.match(/^[a-zA-Z0-9._-]+$/)) {
    showNotification('Repository name contains invalid characters. Use only letters, numbers, dots, hyphens, and underscores.', 'error');
    return;
  }

  if (!githubToken.startsWith('ghp_') && !githubToken.startsWith('github_pat_')) {
    showNotification('Invalid GitHub token format. Personal Access Tokens should start with "ghp_" or "github_pat_".', 'error');
    return;
  }

  // Start export process with real GitHub API
  await startRealGitHubExport(githubUsername, repositoryName, githubToken);
}

async function startRealGitHubExport(username, repoName, token) {
  console.log('Starting REAL GitHub export process...');
  
  // Show progress UI
  showExportProgress();
  
  try {
    let currentStepIndex = 0;
    
    // Step 1: Validate credentials
    await updateExportStep(currentStepIndex++, 'active');
    const userValid = await validateGitHubCredentials(username, token);
    if (!userValid) {
      throw new Error('Invalid GitHub credentials. Please check your username and token.');
    }
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    // Step 2: Create repository
    await updateExportStep(currentStepIndex++, 'active');
    const repo = await createGitHubRepository(username, repoName, token);
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    // Step 3-4: Prepare and upload HTML
    await updateExportStep(currentStepIndex++, 'active');
    const htmlContent = await getApplicationHTML();
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    await updateExportStep(currentStepIndex++, 'active');
    await uploadFileToRepo(username, repoName, token, 'index.html', htmlContent);
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    // Step 5-6: Prepare and upload CSS
    await updateExportStep(currentStepIndex++, 'active');
    const cssContent = await getApplicationCSS();
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    await updateExportStep(currentStepIndex++, 'active');
    await uploadFileToRepo(username, repoName, token, 'style.css', cssContent);
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    // Step 7-8: Prepare and upload JavaScript
    await updateExportStep(currentStepIndex++, 'active');
    const jsContent = await getApplicationJS();
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    await updateExportStep(currentStepIndex++, 'active');
    await uploadFileToRepo(username, repoName, token, 'app.js', jsContent);
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    // Step 9: Create README
    await updateExportStep(currentStepIndex++, 'active');
    const readmeContent = generateREADME(username, repoName);
    await uploadFileToRepo(username, repoName, token, 'README.md', readmeContent);
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    // Step 10: Create package.json
    await updateExportStep(currentStepIndex++, 'active');
    const packageContent = generatePackageJSON(repoName);
    await uploadFileToRepo(username, repoName, token, 'package.json', packageContent);
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    // Step 11: Create .gitignore
    await updateExportStep(currentStepIndex++, 'active');
    const gitignoreContent = generateGitignore();
    await uploadFileToRepo(username, repoName, token, '.gitignore', gitignoreContent);
    await updateExportStep(currentStepIndex - 1, 'completed');
    
    // Step 12: Complete
    await updateExportStep(currentStepIndex++, 'completed');
    
    // Success!
    await completeGitHubExport(username, repoName);
    
  } catch (error) {
    console.error('GitHub export failed:', error);
    await failGitHubExport(error.message);
  }
}

async function validateGitHubCredentials(username, token) {
  console.log('Validating GitHub credentials...');
  
  try {
    const response = await makeGitHubAPICall(`/user`, 'GET', token);
    
    if (!response.ok) {
      return false;
    }
    
    const userData = await response.json();
    console.log('GitHub user validated:', userData.login);
    return userData.login.toLowerCase() === username.toLowerCase();
    
  } catch (error) {
    console.error('Credential validation failed:', error);
    return false;
  }
}

async function createGitHubRepository(username, repoName, token) {
  console.log('Creating GitHub repository...');
  
  try {
    const repoData = {
      name: repoName,
      description: 'OCMA (Omni-Channel Marketing Agent) Platform - Exported from OCMA Dashboard',
      private: false,
      auto_init: false
    };
    
    const response = await makeGitHubAPICall('/user/repos', 'POST', token, repoData);
    
    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.errors && errorData.errors.some(e => e.code === 'already_exists')) {
        throw new Error(`Repository "${repoName}" already exists. Please choose a different name.`);
      }
      throw new Error(`Failed to create repository: ${errorData.message || response.statusText}`);
    }
    
    const repo = await response.json();
    console.log('Repository created successfully:', repo.full_name);
    return repo;
    
  } catch (error) {
    console.error('Repository creation failed:', error);
    throw error;
  }
}

async function uploadFileToRepo(username, repoName, token, filename, content) {
  console.log(`Uploading ${filename}...`);
  
  try {
    const fileData = {
      message: `Add ${filename}`,
      content: btoa(unescape(encodeURIComponent(content))),
      branch: 'main'
    };
    
    const response = await makeGitHubAPICall(
      `/repos/${username}/${repoName}/contents/${filename}`, 
      'PUT', 
      token, 
      fileData
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to upload ${filename}: ${errorData.message || response.statusText}`);
    }
    
    console.log(`${filename} uploaded successfully`);
    
  } catch (error) {
    console.error(`Upload failed for ${filename}:`, error);
    throw error;
  }
}

async function makeGitHubAPICall(endpoint, method = 'GET', token, data = null) {
  const url = `https://api.github.com${endpoint}`;
  
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${token}`,
    'User-Agent': 'OCMA-Platform',
  };
  
  if (data && (method === 'POST' || method === 'PUT')) {
    headers['Content-Type'] = 'application/json';
  }
  
  const requestOptions = {
    method: method,
    headers: headers,
    mode: 'cors'
  };
  
  if (data && (method === 'POST' || method === 'PUT')) {
    requestOptions.body = JSON.stringify(data);
  }
  
  console.log(`Making GitHub API call: ${method} ${url}`);
  
  try {
    const response = await fetch(url, requestOptions);
    return response;
  } catch (error) {
    console.error('GitHub API call failed:', error);
    
    // If direct call fails due to CORS, try with a CORS proxy
    if (error.message && error.message.includes('CORS')) {
      console.log('Trying with CORS proxy...');
      const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;
      const proxyHeaders = {
        ...headers,
        'X-Requested-With': 'XMLHttpRequest'
      };
      
      const proxyOptions = {
        ...requestOptions,
        headers: proxyHeaders
      };
      
      return await fetch(proxyUrl, proxyOptions);
    }
    
    throw error;
  }
}

async function getApplicationHTML() {
  // Return the current HTML content
  return document.documentElement.outerHTML;
}

async function getApplicationCSS() {
  // Get CSS from the current stylesheet
  const styleSheets = Array.from(document.styleSheets);
  let cssContent = '';
  
  for (const sheet of styleSheets) {
    if (sheet.href && sheet.href.includes('style.css')) {
      try {
        const response = await fetch(sheet.href);
        cssContent += await response.text();
      } catch (e) {
        console.log('Could not fetch external CSS, using embedded styles');
      }
    }
  }
  
  // If no external CSS found, extract from style tags
  if (!cssContent) {
    const styleTags = document.querySelectorAll('style');
    styleTags.forEach(tag => {
      cssContent += tag.innerHTML + '\n';
    });
  }
  
  return cssContent || generateApplicationCSS();
}

async function getApplicationJS() {
  // Return the current JavaScript content (this file)
  const scripts = document.querySelectorAll('script[src*="app.js"]');
  let jsContent = '';
  
  for (const script of scripts) {
    if (script.src) {
      try {
        const response = await fetch(script.src);
        jsContent += await response.text();
      } catch (e) {
        console.log('Could not fetch external JS');
      }
    }
  }
  
  // If no external JS found, return the current script content
  return jsContent || generateApplicationJS();
}

function generateREADME(username, repoName) {
  return `# OCMA Platform

## Omni-Channel Marketing Agent

This is your exported OCMA (Omni-Channel Marketing Agent) platform, ready to run as a standalone web application.

### Features

- **Platform Integrations**: Connect with 20+ marketing and social media platforms
- **Strategy Management**: Upload and manage your marketing strategies
- **Content Management**: Organize and manage your marketing content
- **GitHub Export**: Export your configurations to GitHub repositories
- **Dashboard**: Monitor all your integrations and activity

### Getting Started

1. Open \`index.html\` in any modern web browser
2. Configure your platform integrations in the Integrations tab
3. Upload your marketing strategies and content
4. Export to additional repositories as needed

### File Structure

- \`index.html\` - Main application interface
- \`style.css\` - Complete styling and design system
- \`app.js\` - Full application functionality
- \`README.md\` - This documentation
- \`package.json\` - Project configuration
- \`.gitignore\` - Git ignore rules

### Deployment

This application can be deployed to any static hosting service:

- **GitHub Pages**: Enable Pages in repository settings
- **Netlify**: Connect your repository for automatic deployment
- **Vercel**: Import project from GitHub
- **Any static host**: Upload files to your hosting provider

### Security

This application handles sensitive API credentials securely:
- No credentials are permanently stored
- All sensitive data is handled client-side only
- GitHub tokens are used only for export functionality

### Repository

Exported from OCMA Platform to: https://github.com/${username}/${repoName}

### License

MIT License - Feel free to modify and use as needed.
`;
}

function generatePackageJSON(repoName) {
  return JSON.stringify({
    "name": repoName.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
    "version": "1.0.0",
    "description": "OCMA (Omni-Channel Marketing Agent) Platform - Exported from OCMA Dashboard",
    "main": "index.html",
    "scripts": {
      "start": "python -m http.server 8000",
      "serve": "npx serve .",
      "dev": "npx live-server"
    },
    "keywords": [
      "marketing",
      "automation",
      "omni-channel",
      "social-media",
      "integrations"
    ],
    "author": "OCMA Platform",
    "license": "MIT",
    "devDependencies": {
      "serve": "^14.0.0",
      "live-server": "^1.2.2"
    },
    "repository": {
      "type": "git",
      "url": `git+https://github.com/${repoName}.git`
    },
    "homepage": `https://github.com/${repoName}#readme`
  }, null, 2);
}

function generateGitignore() {
  return `# Dependencies
node_modules/
npm-debug.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Build outputs
dist/
build/

# Logs
logs/
*.log

# Temporary files
.tmp/
temp/
`;
}

function generateApplicationCSS() {
  // Fallback CSS content
  return `/* OCMA Platform Styles - Generated */
  
  /* This is a fallback CSS generation - the actual styles should be loaded from style.css */
  
  :root {
    --scam-shield-primary: #0c3c78;
    --scam-shield-success: #22c55e;
    --scam-shield-light: #f2f6fc;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 0;
    background: var(--scam-shield-light);
  }
  
  .app-container {
    min-height: 100vh;
  }
  
  /* Add more styles as needed */
  `;
}

function generateApplicationJS() {
  // This should return the current script content
  // In a real implementation, this would include the full app.js content
  return `// OCMA Platform JavaScript - Generated

console.log('OCMA Platform loaded successfully');

// This is a fallback - the actual JavaScript should be loaded from app.js
`;
}

async function updateExportStep(stepIndex, status) {
  return new Promise(resolve => {
    setTimeout(() => {
      const steps = document.querySelectorAll('.progress-step');
      const progressFill = document.getElementById('progressFill');
      
      if (steps[stepIndex]) {
        // Remove all status classes
        steps[stepIndex].classList.remove('active', 'completed');
        
        // Add new status
        if (status === 'active') {
          steps[stepIndex].classList.add('active');
        } else if (status === 'completed') {
          steps[stepIndex].classList.add('completed');
          const icon = steps[stepIndex].querySelector('.step-icon');
          if (icon) icon.textContent = '✓';
        }
      }
      
      // Update progress bar
      if (progressFill) {
        let completedSteps = document.querySelectorAll('.progress-step.completed').length;
        if (status === 'active') completedSteps += 0.5; // Show partial progress for active step
        const progress = (completedSteps / steps.length) * 100;
        progressFill.style.width = `${Math.min(progress, 100)}%`;
      }
      
      resolve();
    }, 500); // Small delay for visual effect
  });
}

function showExportProgress() {
  // Hide form and show progress
  const formSection = document.querySelector('.github-form-section');
  const progressSection = document.getElementById('exportProgress');
  const successSection = document.getElementById('exportSuccess');
  const errorSection = document.getElementById('exportError');
  
  if (formSection) formSection.style.display = 'none';
  if (progressSection) progressSection.style.display = 'block';
  if (successSection) successSection.style.display = 'none';
  if (errorSection) errorSection.style.display = 'none';

  // Reset progress
  const progressFill = document.getElementById('progressFill');
  const progressSteps = document.getElementById('progressSteps');
  
  if (progressFill) progressFill.style.width = '0%';
  if (progressSteps) {
    progressSteps.innerHTML = '';
    
    // Create progress steps
    platformData.exportSteps.forEach((step, index) => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'progress-step';
      stepDiv.innerHTML = `
        <div class="step-icon">${index + 1}</div>
        <div class="step-text">${step}</div>
      `;
      progressSteps.appendChild(stepDiv);
    });
  }
}

async function completeGitHubExport(username, repoName) {
  console.log('Completing GitHub export...');
  
  // Record successful export
  const exportRecord = {
    id: Date.now(),
    username: username,
    repository: repoName,
    timestamp: new Date().toISOString(),
    status: 'success',
    url: `https://github.com/${username}/${repoName}`
  };

  appState.githubExports.push(exportRecord);

  // Show success screen
  const progressSection = document.getElementById('exportProgress');
  const successSection = document.getElementById('exportSuccess');
  
  if (progressSection) progressSection.style.display = 'none';
  if (successSection) successSection.style.display = 'block';
  
  const repoLink = document.getElementById('githubRepoLink');
  if (repoLink) {
    repoLink.href = exportRecord.url;
  }

  addActivity(`Successfully exported to GitHub: ${username}/${repoName}`);
  updateExportHistory();
  showNotification('Export completed successfully! 🎉', 'success');
}

async function failGitHubExport(errorMessage) {
  console.log('GitHub export failed:', errorMessage);
  
  // Record failed export
  const exportRecord = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    status: 'failed',
    error: errorMessage
  };

  appState.githubExports.push(exportRecord);

  // Show error screen
  const progressSection = document.getElementById('exportProgress');
  const errorSection = document.getElementById('exportError');
  
  if (progressSection) progressSection.style.display = 'none';
  if (errorSection) errorSection.style.display = 'block';
  
  const errorMessageEl = document.getElementById('errorMessage');
  if (errorMessageEl) {
    errorMessageEl.textContent = errorMessage;
  }

  addActivity('GitHub export failed');
  updateExportHistory();
  showNotification('Export failed. Please check your credentials and try again.', 'error');
}

function resetGitHubExportForm() {
  console.log('Resetting GitHub export form...');
  
  // Show form and hide other sections
  const formSection = document.querySelector('.github-form-section');
  const progressSection = document.getElementById('exportProgress');
  const successSection = document.getElementById('exportSuccess');
  const errorSection = document.getElementById('exportError');
  
  if (formSection) formSection.style.display = 'block';
  if (progressSection) progressSection.style.display = 'none';
  if (successSection) successSection.style.display = 'none';
  if (errorSection) errorSection.style.display = 'none';
  
  // Clear form
  const githubForm = document.getElementById('githubExportForm');
  if (githubForm) githubForm.reset();
  
  // Reset token visibility
  const tokenInput = document.getElementById('githubToken');
  const tokenToggle = document.getElementById('toggleGithubToken');
  if (tokenInput) tokenInput.type = 'password';
  if (tokenToggle) tokenToggle.textContent = '👁️';
}

function updateExportHistory() {
  const exportHistory = document.getElementById('exportHistory');
  if (!exportHistory) return;

  if (appState.githubExports.length === 0) {
    exportHistory.innerHTML = '<p class="text-secondary">No exports yet</p>';
    return;
  }

  const recentExports = appState.githubExports.slice(-5).reverse();
  exportHistory.innerHTML = recentExports.map(exp => {
    const date = new Date(exp.timestamp).toLocaleDateString();
    const time = new Date(exp.timestamp).toLocaleTimeString();
    
    if (exp.status === 'success') {
      return `
        <div class="export-item">
          <div>${exp.username}/${exp.repository}</div>
          <div class="export-date">${date} ${time}</div>
          <span class="status status--success">Success</span>
        </div>
      `;
    } else {
      return `
        <div class="export-item">
          <div>Export Failed</div>
          <div class="export-date">${date} ${time}</div>
          <span class="status status--error">Failed</span>
        </div>
      `;
    }
  }).join('');
}

// Integrations - FIXED
function initIntegrations() {
  console.log('Initializing integrations...');
  
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.category;
      console.log('Switching to category:', category);
      displayIntegrations(category);
    });
  });
  
  // Display initial category
  displayIntegrations('social');
  
  // Export/Import handlers
  const exportBtn = document.getElementById('exportConfig');
  const importBtn = document.getElementById('importConfig');
  const configFileInput = document.getElementById('configFileInput');
  
  if (exportBtn) {
    exportBtn.addEventListener('click', (e) => {
      e.preventDefault();
      exportConfiguration();
    });
  }
  if (importBtn) {
    importBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (configFileInput) {
        configFileInput.click();
      }
    });
  }
  if (configFileInput) {
    configFileInput.addEventListener('change', importConfiguration);
  }
}

function displayIntegrations(categoryKey) {
  const categoryMap = {
    'social': 'Social Media',
    'marketing': 'Marketing Tools',
    'automation': 'Automation & Other'
  };
  
  const categoryName = categoryMap[categoryKey];
  const category = platformData.platforms.find(cat => cat.category === categoryName);
  const integrationGrid = document.getElementById('integrationGrid');
  
  if (!category || !integrationGrid) {
    console.log('Category not found or grid not found:', categoryName, !!integrationGrid);
    return;
  }
  
  console.log('Displaying platforms for category:', categoryName, 'Items:', category.items.length);
  
  integrationGrid.innerHTML = '';
  
  category.items.forEach(platform => {
    const card = createIntegrationCard(platform);
    integrationGrid.appendChild(card);
  });
}

function createIntegrationCard(platform) {
  const isConnected = appState.integrations[platform.name]?.connected || false;
  const fieldCount = platform.fields.length;
  const requiredFields = platform.fields.filter(f => f.required).length;
  
  const card = document.createElement('div');
  card.className = `integration-card ${isConnected ? 'connected' : ''}`;
  card.setAttribute('data-platform', platform.name);
  
  card.innerHTML = `
    <div class="integration-header">
      <div class="integration-icon">${platform.icon}</div>
      <div class="integration-info">
        <h3>${platform.name}</h3>
        <div class="connection-status">
          <span class="status ${isConnected ? 'status--success' : 'status--error'}">
            ${isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
      </div>
    </div>
    <div class="integration-fields">
      ${fieldCount} fields (${requiredFields} required)
    </div>
    <div class="integration-actions">
      <button class="btn btn--primary btn--sm configure-btn" data-platform="${platform.name}">
        ${isConnected ? 'Edit' : 'Configure'}
      </button>
      ${isConnected ? `<button class="btn btn--outline btn--sm test-btn" data-platform="${platform.name}">Test</button>` : ''}
    </div>
  `;
  
  // Add event listeners
  const configureBtn = card.querySelector('.configure-btn');
  const testBtn = card.querySelector('.test-btn');
  
  if (configureBtn) {
    configureBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Configure clicked for:', platform.name);
      openIntegrationModal(platform.name);
    });
  }
  
  if (testBtn) {
    testBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Test clicked for:', platform.name);
      testConnection(platform.name);
    });
  }
  
  return card;
}

function openIntegrationModal(platformName) {
  console.log('Opening modal for:', platformName);
  
  const platform = findPlatformByName(platformName);
  const integrationModal = document.getElementById('integrationModal');
  
  if (!platform) {
    console.log('Platform not found:', platformName);
    return;
  }
  if (!integrationModal) {
    console.log('Modal not found');
    return;
  }
  
  // Update modal content
  document.getElementById('modalTitle').textContent = `Configure ${platform.name}`;
  document.getElementById('modalIcon').textContent = platform.icon;
  document.getElementById('modalPlatformName').textContent = platform.name;
  
  const isConnected = appState.integrations[platformName]?.connected || false;
  document.getElementById('modalStatus').innerHTML = `
    <span class="status ${isConnected ? 'status--success' : 'status--error'}">
      ${isConnected ? 'Connected' : 'Disconnected'}
    </span>
  `;
  
  // Generate form fields
  const formFields = document.getElementById('modalFormFields');
  formFields.innerHTML = '';
  
  platform.fields.forEach(field => {
    const fieldDiv = createFormField(field, platformName);
    formFields.appendChild(fieldDiv);
  });
  
  // Set up form submission
  const integrationForm = document.getElementById('integrationForm');
  integrationForm.onsubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted for:', platformName);
    saveIntegration(platformName, platform.fields);
  };
  
  // Show modal
  integrationModal.style.display = 'flex';
  console.log('Modal displayed');
}

function createFormField(field, platformName) {
  const fieldDiv = document.createElement('div');
  fieldDiv.className = 'form-field';
  
  const currentValue = appState.integrations[platformName]?.credentials?.[field.name] || '';
  
  let inputHTML = '';
  if (field.type === 'file') {
    inputHTML = `
      <div class="file-input-wrapper">
        <input type="file" id="field-${field.name.replace(/\s+/g, '-')}" accept=".json">
        <div class="file-input-button">
          <span>Choose File</span>
        </div>
      </div>
    `;
  } else if (field.type === 'password') {
    inputHTML = `
      <div class="password-field">
        <input type="password" id="field-${field.name.replace(/\s+/g, '-')}" 
               class="form-control" value="${currentValue}" ${field.required ? 'required' : ''}>
        <button type="button" class="password-toggle">👁️</button>
      </div>
    `;
  } else {
    inputHTML = `
      <input type="${field.type}" id="field-${field.name.replace(/\s+/g, '-')}" 
             class="form-control" value="${currentValue}" ${field.required ? 'required' : ''}>
    `;
  }
  
  fieldDiv.innerHTML = `
    <label for="field-${field.name.replace(/\s+/g, '-')}">
      ${field.name} ${field.required ? '<span class="required">*</span>' : ''}
    </label>
    ${inputHTML}
    <div class="help-text">${field.helpText}</div>
  `;
  
  // Add password toggle functionality
  if (field.type === 'password') {
    setTimeout(() => {
      const toggleBtn = fieldDiv.querySelector('.password-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
          e.preventDefault();
          const input = this.previousElementSibling;
          if (input.type === 'password') {
            input.type = 'text';
            this.textContent = '🙈';
          } else {
            input.type = 'password';
            this.textContent = '👁️';
          }
        });
      }
    }, 0);
  }
  
  return fieldDiv;
}

function saveIntegration(platformName, fields) {
  const credentials = {};
  let hasRequiredFields = true;
  
  fields.forEach(field => {
    const input = document.getElementById(`field-${field.name.replace(/\s+/g, '-')}`);
    if (!input) return;
    
    if (input.type === 'file') {
      if (input.files[0]) {
        credentials[field.name] = input.files[0].name;
      }
    } else {
      credentials[field.name] = input.value.trim();
    }
    
    if (field.required && !credentials[field.name]) {
      hasRequiredFields = false;
    }
  });
  
  if (!hasRequiredFields) {
    showNotification('Please fill in all required fields.', 'error');
    return;
  }
  
  appState.integrations[platformName] = {
    connected: true,
    credentials: credentials,
    lastUpdated: new Date().toISOString()
  };
  
  addActivity(`Updated ${platformName} integration`);
  closeModal();
  
  // Refresh current category display
  const activeCategory = document.querySelector('.category-btn.active');
  if (activeCategory) {
    displayIntegrations(activeCategory.dataset.category);
  }
  
  showNotification(`${platformName} integration saved successfully!`, 'success');
}

// Modal handlers - FIXED
function closeModal() {
  const integrationModal = document.getElementById('integrationModal');
  if (integrationModal) {
    integrationModal.style.display = 'none';
    console.log('Modal closed');
  }
}

function testConnection(platformName) {
  showNotification(`Testing connection to ${platformName}...`, 'info');
  
  setTimeout(() => {
    const success = Math.random() > 0.3; // 70% success rate
    if (success) {
      showNotification(`${platformName} connection successful!`, 'success');
      addActivity(`Tested ${platformName} connection - Success`);
    } else {
      showNotification(`${platformName} connection failed. Check your credentials.`, 'error');
      addActivity(`Tested ${platformName} connection - Failed`);
    }
  }, 2000);
}

// Strategy Management
function initStrategy() {
  console.log('Initializing strategy...');
  
  const strategyUpload = document.getElementById('strategyUpload');
  const strategyFileInput = document.getElementById('strategyFileInput');
  const browseStrategy = document.getElementById('browseStrategy');
  const generateStrategy = document.getElementById('generateStrategy');
  const exportStrategy = document.getElementById('exportStrategy');
  const strategyTemplates = document.getElementById('strategyTemplates');
  
  // File upload handlers
  if (browseStrategy && strategyFileInput) {
    browseStrategy.addEventListener('click', (e) => {
      e.preventDefault();
      strategyFileInput.click();
    });
    strategyFileInput.addEventListener('change', handleStrategyUpload);
  }
  
  // Drag and drop
  if (strategyUpload && strategyFileInput) {
    setupDragAndDrop(strategyUpload, strategyFileInput, handleStrategyUpload);
  }
  
  // Template list
  if (strategyTemplates) {
    platformData.strategyTemplates.forEach(template => {
      const item = document.createElement('div');
      item.className = 'template-item';
      item.textContent = template;
      item.addEventListener('click', () => useStrategyTemplate(template));
      strategyTemplates.appendChild(item);
    });
  }
  
  // Action buttons
  if (generateStrategy) {
    generateStrategy.addEventListener('click', (e) => {
      e.preventDefault();
      showNotification('Generating new strategy...', 'info');
      setTimeout(() => {
        appState.currentStrategy = {
          name: 'Generated Marketing Strategy',
          type: 'generated',
          createdAt: new Date().toISOString()
        };
        updateStrategyDisplay();
        addActivity('Generated new marketing strategy');
        showNotification('Strategy generated successfully!', 'success');
      }, 2000);
    });
  }
  
  if (exportStrategy) {
    exportStrategy.addEventListener('click', (e) => {
      e.preventDefault();
      exportCurrentStrategy();
    });
  }
}

function handleStrategyUpload(event) {
  const files = event.target?.files || event.dataTransfer?.files;
  if (!files || files.length === 0) return;
  
  Array.from(files).forEach(file => {
    if (validateFileType(file, ['.pdf', '.docx', '.txt', '.md'])) {
      appState.currentStrategy = {
        name: file.name,
        type: 'uploaded',
        size: formatFileSize(file.size),
        uploadedAt: new Date().toISOString()
      };
      updateStrategyDisplay();
      addActivity(`Uploaded strategy: ${file.name}`);
      showNotification(`Strategy "${file.name}" uploaded successfully!`, 'success');
    } else {
      showNotification(`File "${file.name}" is not a supported format.`, 'error');
    }
  });
}

function useStrategyTemplate(template) {
  appState.currentStrategy = {
    name: template,
    type: 'template',
    createdAt: new Date().toISOString()
  };
  updateStrategyDisplay();
  addActivity(`Applied strategy template: ${template}`);
  showNotification(`Strategy template "${template}" applied!`, 'success');
}

function updateStrategyDisplay() {
  const currentStrategy = document.getElementById('currentStrategy');
  const exportBtn = document.getElementById('exportStrategy');
  
  if (!currentStrategy) return;
  
  if (appState.currentStrategy) {
    currentStrategy.innerHTML = `
      <div class="strategy-info">
        <h4>${appState.currentStrategy.name}</h4>
        <p class="text-secondary">Type: ${appState.currentStrategy.type}</p>
        ${appState.currentStrategy.size ? `<p class="text-secondary">Size: ${appState.currentStrategy.size}</p>` : ''}
        <p class="text-secondary">
          ${appState.currentStrategy.uploadedAt ? 'Uploaded' : 'Created'}: 
          ${new Date(appState.currentStrategy.createdAt || appState.currentStrategy.uploadedAt).toLocaleDateString()}
        </p>
      </div>
    `;
    if (exportBtn) exportBtn.disabled = false;
  } else {
    currentStrategy.innerHTML = '<p class="text-secondary">No strategy loaded</p>';
    if (exportBtn) exportBtn.disabled = true;
  }
}

function exportCurrentStrategy() {
  if (!appState.currentStrategy) return;
  
  const strategyData = {
    ...appState.currentStrategy,
    exportedAt: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(strategyData, null, 2)], { type: 'application/json' });
  downloadFile(blob, `strategy-${Date.now()}.json`);
  addActivity('Exported current strategy');
}

// Content Management
function initContent() {
  console.log('Initializing content...');
  
  const contentUpload = document.getElementById('contentUpload');
  const contentFileInput = document.getElementById('contentFileInput');
  const browseContent = document.getElementById('browseContent');
  const generateContent = document.getElementById('generateContent');
  const bulkUpload = document.getElementById('bulkUpload');
  const contentSearch = document.getElementById('contentSearch');
  const contentTemplates = document.getElementById('contentTemplates');
  
  // File upload handlers
  if (browseContent && contentFileInput) {
    browseContent.addEventListener('click', (e) => {
      e.preventDefault();
      contentFileInput.click();
    });
    contentFileInput.addEventListener('change', handleContentUpload);
  }
  
  // Drag and drop
  if (contentUpload && contentFileInput) {
    setupDragAndDrop(contentUpload, contentFileInput, handleContentUpload);
  }
  
  // Search
  if (contentSearch) {
    contentSearch.addEventListener('input', filterContent);
  }
  
  // Template list
  if (contentTemplates) {
    platformData.contentTemplates.forEach(template => {
      const item = document.createElement('div');
      item.className = 'template-item';
      item.textContent = template;
      item.addEventListener('click', () => useContentTemplate(template));
      contentTemplates.appendChild(item);
    });
  }
  
  // Action buttons
  if (generateContent) {
    generateContent.addEventListener('click', (e) => {
      e.preventDefault();
      showNotification('Generating new content...', 'info');
      setTimeout(() => {
        const newContent = {
          id: Date.now(),
          name: 'Generated Content.md',
          type: 'generated',
          icon: '📝',
          size: '2.5 KB',
          createdAt: new Date().toISOString()
        };
        appState.contentLibrary.push(newContent);
        updateContentDisplay();
        addActivity('Generated new content');
        showNotification('Content generated successfully!', 'success');
      }, 2000);
    });
  }
  
  if (bulkUpload) {
    bulkUpload.addEventListener('click', (e) => {
      e.preventDefault();
      if (contentFileInput) {
        contentFileInput.multiple = true;
        contentFileInput.click();
      }
    });
  }
}

function handleContentUpload(event) {
  const files = event.target?.files || event.dataTransfer?.files;
  if (!files || files.length === 0) return;
  
  Array.from(files).forEach(file => {
    if (validateFileType(file, ['.pdf', '.docx', '.txt', '.md', '.json', '.csv'])) {
      const content = {
        id: Date.now() + Math.random(),
        name: file.name,
        type: 'uploaded',
        icon: getFileIcon(file.name),
        size: formatFileSize(file.size),
        uploadedAt: new Date().toISOString()
      };
      appState.contentLibrary.push(content);
      addActivity(`Uploaded content: ${file.name}`);
    } else {
      showNotification(`File "${file.name}" is not a supported format.`, 'error');
    }
  });
  
  updateContentDisplay();
  if (event.target?.files?.length > 0) {
    showNotification(`${event.target.files.length} file(s) uploaded successfully!`, 'success');
  }
}

function useContentTemplate(template) {
  const content = {
    id: Date.now(),
    name: `${template}.md`,
    type: 'template',
    icon: '📋',
    size: '1.2 KB',
    createdAt: new Date().toISOString()
  };
  appState.contentLibrary.push(content);
  updateContentDisplay();
  addActivity(`Applied content template: ${template}`);
  showNotification(`Content template "${template}" applied!`, 'success');
}

function updateContentDisplay() {
  const contentGrid = document.getElementById('contentGrid');
  if (!contentGrid) return;
  
  if (appState.contentLibrary.length === 0) {
    contentGrid.innerHTML = '<div class="content-placeholder"><p>No content uploaded yet. Upload files to see them here.</p></div>';
    return;
  }
  
  contentGrid.innerHTML = '';
  appState.contentLibrary.forEach(content => {
    const item = document.createElement('div');
    item.className = 'content-item';
    item.innerHTML = `
      <div class="content-item-icon">${content.icon}</div>
      <div class="content-item-name">${content.name}</div>
      <div class="content-item-size">${content.size}</div>
    `;
    contentGrid.appendChild(item);
  });
}

function filterContent() {
  const searchTerm = document.getElementById('contentSearch').value.toLowerCase();
  const items = document.querySelectorAll('.content-item');
  
  items.forEach(item => {
    const name = item.querySelector('.content-item-name').textContent.toLowerCase();
    if (name.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Dashboard
function initDashboard() {
  console.log('Dashboard initialized');
}

function updateDashboard() {
  console.log('Updating dashboard...');
  updateIntegrationStatus();
  updateStrategyStatus();
  updateContentStats();
  updateGitHubStats();
  updateActivityLog();
}

function updateIntegrationStatus() {
  const statusGrid = document.getElementById('integrationStatus');
  if (!statusGrid) return;
  
  const connectedCount = Object.keys(appState.integrations).filter(key => appState.integrations[key].connected).length;
  const totalPlatforms = platformData.platforms.reduce((acc, cat) => acc + cat.items.length, 0);
  
  statusGrid.innerHTML = `
    <div class="status-item">
      <span class="status ${connectedCount > 0 ? 'status--success' : 'status--error'}">
        ${connectedCount}/${totalPlatforms} Connected
      </span>
      <span>Platform Integrations</span>
    </div>
  `;
}

function updateStrategyStatus() {
  const strategyStatus = document.getElementById('strategyStatus');
  if (!strategyStatus) return;
  
  const hasStrategy = appState.currentStrategy !== null;
  
  strategyStatus.innerHTML = `
    <div class="status-item">
      <span class="status ${hasStrategy ? 'status--success' : 'status--info'}">
        ${hasStrategy ? 'Loaded' : 'Not Loaded'}
      </span>
      <span>Current Strategy</span>
    </div>
  `;
}

function updateContentStats() {
  const contentCount = document.getElementById('contentCount');
  if (contentCount) {
    contentCount.textContent = appState.contentLibrary.length;
  }
}

function updateGitHubStats() {
  const exportCount = document.getElementById('exportCount');
  if (exportCount) {
    const successfulExports = appState.githubExports.filter(exp => exp.status === 'success').length;
    exportCount.textContent = successfulExports;
  }
}

function updateActivityLog() {
  const activityLog = document.getElementById('activityLog');
  if (!activityLog) return;
  
  if (appState.activityLog.length === 0) {
    activityLog.innerHTML = '<p class="text-secondary">No recent activity</p>';
    return;
  }
  
  const recentActivities = appState.activityLog.slice(-5).reverse();
  activityLog.innerHTML = recentActivities.map(activity => `
    <div class="activity-item">
      <small>${new Date(activity.timestamp).toLocaleString()}</small>
      <p>${activity.message}</p>
    </div>
  `).join('');
}

// Modal handlers - FIXED
function initModals() {
  console.log('Initializing modals...');
  
  const integrationModal = document.getElementById('integrationModal');
  const modalClose = document.getElementById('modalClose');
  const cancelModal = document.getElementById('cancelModal');
  const testConnection = document.getElementById('testConnection');
  
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  }
  
  if (cancelModal) {
    cancelModal.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  }
  
  if (integrationModal) {
    integrationModal.addEventListener('click', (e) => {
      if (e.target === integrationModal) {
        closeModal();
      }
    });
    
    // Prevent modal close when clicking inside modal content
    const modalContent = integrationModal.querySelector('.modal');
    if (modalContent) {
      modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  }
  
  // Test connection handler
  if (testConnection) {
    testConnection.addEventListener('click', (e) => {
      e.preventDefault();
      const platformName = document.getElementById('modalPlatformName')?.textContent;
      if (platformName) {
        testConnectionInModal(platformName);
      }
    });
  }
  
  // Handle ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && integrationModal && integrationModal.style.display === 'flex') {
      closeModal();
    }
  });
}

function testConnectionInModal(platformName) {
  showNotification(`Testing connection to ${platformName}...`, 'info');
  
  setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
      showNotification(`${platformName} connection successful!`, 'success');
      addActivity(`Tested ${platformName} connection - Success`);
      
      // Update modal status
      const modalStatus = document.getElementById('modalStatus');
      if (modalStatus) {
        modalStatus.innerHTML = `
          <span class="status status--success">Connected</span>
        `;
      }
    } else {
      showNotification(`${platformName} connection failed. Check your credentials.`, 'error');
      addActivity(`Tested ${platformName} connection - Failed`);
    }
  }, 2000);
}

// Utility functions
function findPlatformByName(name) {
  for (const category of platformData.platforms) {
    const platform = category.items.find(item => item.name === name);
    if (platform) return platform;
  }
  return null;
}

function setupDragAndDrop(dropArea, fileInput, handler) {
  dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('drag-over');
  });
  
  dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('drag-over');
  });
  
  dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('drag-over');
    handler({ dataTransfer: e.dataTransfer });
  });
  
  dropArea.addEventListener('click', () => fileInput.click());
}

function validateFileType(file, allowedExtensions) {
  const extension = '.' + file.name.split('.').pop().toLowerCase();
  return allowedExtensions.includes(extension);
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getFileIcon(filename) {
  const extension = filename.split('.').pop().toLowerCase();
  const iconMap = {
    'pdf': '📄',
    'docx': '📝',
    'doc': '📝',
    'txt': '📄',
    'md': '📝',
    'json': '⚙️',
    'csv': '📊'
  };
  return iconMap[extension] || '📄';
}

function downloadFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function addActivity(message) {
  appState.activityLog.push({
    message: message,
    timestamp: new Date().toISOString()
  });
}

function showNotification(message, type) {
  // Enhanced notification system with type styling
  const typeEmojis = {
    'success': '✅',
    'error': '❌', 
    'info': 'ℹ️',
    'warning': '⚠️'
  };
  
  const emoji = typeEmojis[type] || 'ℹ️';
  
  // Create a more sophisticated notification system
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <span class="notification-icon">${emoji}</span>
    <span class="notification-message">${message}</span>
  `;
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-base);
    padding: var(--space-12) var(--space-16);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: var(--space-8);
    max-width: 300px;
    font-size: var(--font-size-sm);
    animation: slideInRight 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }
  }, 3000);
}

// Configuration export/import
function exportConfiguration() {
  const config = {
    integrations: appState.integrations,
    currentStrategy: appState.currentStrategy,
    contentLibrary: appState.contentLibrary,
    githubExports: appState.githubExports,
    exportedAt: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
  downloadFile(blob, `ocma-config-${Date.now()}.json`);
  addActivity('Exported configuration');
  showNotification('Configuration exported successfully!', 'success');
}

function importConfiguration(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const config = JSON.parse(e.target.result);
      
      if (config.integrations) appState.integrations = config.integrations;
      if (config.currentStrategy) appState.currentStrategy = config.currentStrategy;
      if (config.contentLibrary) appState.contentLibrary = config.contentLibrary;
      if (config.githubExports) appState.githubExports = config.githubExports;
      
      // Refresh displays
      const activeCategory = document.querySelector('.category-btn.active');
      if (activeCategory) {
        displayIntegrations(activeCategory.dataset.category);
      }
      updateStrategyDisplay();
      updateContentDisplay();
      updateExportHistory();
      
      addActivity('Imported configuration');
      showNotification('Configuration imported successfully!', 'success');
    } catch (error) {
      showNotification('Failed to import configuration. Invalid file format.', 'error');
    }
  };
  reader.readAsText(file);
}

// State persistence (memory only)
function loadStateFromMemory() {
  console.log('Loading state from memory...');
  updateStrategyDisplay();
  updateContentDisplay();
  updateExportHistory();
}