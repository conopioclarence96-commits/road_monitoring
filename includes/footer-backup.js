// Backup Footer Script - Ensures footer always appears
(function() {
    'use strict';
    
    // Function to inject footer directly
    function injectFooter() {
        const container = document.getElementById('footer-container');
        if (!container || container.innerHTML.trim()) return;
        
        // Get current page name
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        const isIndexPage = page === 'index.html';
        
        // Create footer content
        const footerHTML = isIndexPage ? `
            <footer class="glass-card border-t border-white/25">
                <div class="px-[60px] py-[30px]">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                        <div>
                            <h3 class="text-[20px] font-semibold text-gray-800 mb-[15px]">About</h3>
                            <p class="text-[16px] text-gray-600">Comprehensive road infrastructure monitoring system serving our community with transparency and efficiency.</p>
                        </div>
                        <div>
                            <h3 class="text-[20px] font-semibold text-gray-800 mb-[15px]">Quick Links</h3>
                            <ul class="space-y-[10px]">
                                <li><a href="#" class="text-[16px] text-gray-600 hover:text-[#6384d2]">Report an Issue</a></li>
                                <li><a href="#" class="text-[16px] text-gray-600 hover:text-[#6384d2]">Current Projects</a></li>
                                <li><a href="#" class="text-[16px] text-gray-600 hover:text-[#6384d2]">Traffic Updates</a></li>
                                <li><a href="login.html" class="text-[16px] text-gray-600 hover:text-[#6384d2]">Staff Portal</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-[20px] font-semibold text-gray-800 mb-[15px]">Contact</h3>
                            <p class="text-[16px] text-gray-600">📞 (555) 123-4567</p>
                            <p class="text-[16px] text-gray-600">📧 roads@lgu.gov.ph</p>
                            <p class="text-[16px] text-gray-600">📍 City Hall, Main Street</p>
                        </div>
                    </div>
                    <div class="border-t border-gray-300 mt-[30px] pt-[20px] text-center">
                        <div class="flex justify-center gap-[30px] mb-[15px]">
                            <a href="privacy.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">Privacy Policy</a>
                            <a href="about.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">About</a>
                            <a href="help.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">Help</a>
                        </div>
                        <p class="text-[14px] text-gray-600">© 2025 LGU Road Infrastructure & Transportation Monitoring System. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        ` : `
            <footer class="glass-card border-t border-white/25">
                <div class="px-[60px] py-[30px]">
                    <div class="border-t border-gray-300 mt-[30px] pt-[20px] text-center">
                        <div class="flex justify-center gap-[30px] mb-[15px]">
                            <a href="privacy.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">Privacy Policy</a>
                            <a href="about.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">About</a>
                            <a href="help.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">Help</a>
                        </div>
                        <p class="text-[14px] text-gray-600">© 2025 LGU Road Infrastructure & Transportation Monitoring System. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
        
        // Inject footer
        container.innerHTML = footerHTML;
        console.log('Footer injected successfully for:', page);
    }
    
    // Try multiple times to ensure footer loads
    function tryInjectFooter() {
        injectFooter();
        if (!document.getElementById('footer-container').innerHTML.trim()) {
            setTimeout(tryInjectFooter, 50);
        }
    }
    
    // Start injection process
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInjectFooter);
    } else {
        tryInjectFooter();
    }
    
    // Final backup
    setTimeout(tryInjectFooter, 500);
})();
