// Portal - FAST Application Bootstrap
// This file is loaded dynamically by FAST.html loader

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function initApp() {
        const appContainer = document.getElementById('appContainer');
        
        if (!appContainer) {
            console.error('App container not found');
            return;
        }
        
        // Create main app UI
        appContainer.innerHTML = `
            <div style="background: white; border-radius: 15px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); padding: 40px; max-width: 1200px; margin: 0 auto; min-height: calc(100vh - 40px);">
                <header style="background: linear-gradient(135deg, hsl(219, 58%, 28%) 0%, #2a5298 100%); color: white; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                    <!-- Logo Container - Update logo URLs to point to your hosted logos -->
                    <div style="display: flex; align-items: center; justify-content: center; gap: 20px; margin-bottom: 15px; flex-wrap: wrap;">
                        <img src="${window.__FAST_DATA_URLS__?.portalLogo || 'portal-logo.png'}" alt="Portal Logo" style="max-height: 80px; height: auto; width: auto; object-fit: contain;" onerror="this.style.display='none'" id="appPortalLogo">
                        <img src="${window.__FAST_DATA_URLS__?.fastLogo || 'fast-logo.png'}" alt="FAST Logo" style="max-height: 80px; height: auto; width: auto; object-fit: contain;" onerror="this.style.display='none'" id="appFastLogo">
                    </div>
                    <h1 style="margin: 0; font-size: 2em;" id="appTitle">Portal - FAST</h1>
                    <div style="margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                        <span style="opacity: 0.9;">Police Workflow Tool</span>
                        <button id="checkUpdatesBtn" style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px;">
                            Check for Updates
                        </button>
                    </div>
                </header>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="margin: 0 0 10px 0; color: #333;">Application Status</h2>
                    <p style="margin: 5px 0; color: #666;">
                        <strong>Version:</strong> <span id="versionDisplay">${window.__FAST_VERSION__ || 'Unknown'}</span>
                    </p>
                    <p style="margin: 5px 0; color: #666;">
                        <strong>Status:</strong> <span style="color: #28a745;">✓ Loaded Successfully</span>
                    </p>
                </div>
                
                <main style="padding: 20px 0;">
                    <div style="background: white; border: 1px solid #e9ecef; border-radius: 8px; padding: 30px; text-align: center;">
                        <h2 style="color: #667eea; margin-bottom: 20px;">Application Ready</h2>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
                            Your Portal - FAST application has been loaded successfully.
                        </p>
                        <p style="color: #999; font-size: 0.9em;">
                            Replace this content with your actual application logic.
                        </p>
                    </div>
                </main>
                
                <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center; color: #999; font-size: 0.9em;">
                    <p>Portal - FAST v${window.__FAST_VERSION__ || 'Unknown'}</p>
                </footer>
            </div>
        `;
        
        // Add event listener for check updates button
        const checkUpdatesBtn = document.getElementById('checkUpdatesBtn');
        if (checkUpdatesBtn && window.checkForUpdates) {
            checkUpdatesBtn.addEventListener('click', window.checkForUpdates);
        }
        
        // Log version info
        console.log('Portal - FAST loaded');
        console.log('Version:', window.__FAST_VERSION__);
        console.log('Data URLs:', window.__FAST_DATA_URLS__);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();

