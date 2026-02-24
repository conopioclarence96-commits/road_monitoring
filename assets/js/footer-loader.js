// Footer Loader Script
function loadFooter(footerType = 'simple') {
    // Check if we're running on a server or local file
    const isLocalFile = window.location.protocol === 'file:';
    
    if (isLocalFile) {
        // For local files, use inline footer content
        loadFooterInline(footerType);
    } else {
        // For server, use fetch to load external files
        const footerPath = footerType === 'full' 
            ? '../includes/footer.html' 
            : '../includes/footer-simple.html';
        
        fetch(footerPath)
            .then(response => response.text())
            .then(html => {
                const footerContainer = document.getElementById('footer-container');
                if (footerContainer) {
                    footerContainer.innerHTML = html;
                }
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                loadFooterInline(footerType);
            });
    }
}

function loadFooterInline(footerType) {
    // Inline footer content for local file access
    const footerContent = footerType === 'full' ? `
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
                            <li><a href="../pages/login.html" class="text-[16px] text-gray-600 hover:text-[#6384d2]">Staff Portal</a></li>
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
                        <a href="../pages/privacy.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">Privacy Policy</a>
                        <a href="../pages/about.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">About</a>
                        <a href="../pages/help.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">Help</a>
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
                        <a href="../pages/privacy.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">Privacy Policy</a>
                        <a href="../pages/about.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">About</a>
                        <a href="../pages/help.html" class="text-[14px] text-gray-600 hover:text-[#6384d2]">Help</a>
                    </div>
                    <p class="text-[14px] text-gray-600">© 2025 LGU Road Infrastructure & Transportation Monitoring System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerContent;
    }
}

// Auto-load footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Try to load footer immediately
    loadFooterForCurrentPage();
    
    // Also try again after a short delay to ensure DOM is fully loaded
    setTimeout(loadFooterForCurrentPage, 100);
});

function loadFooterForCurrentPage() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer && !footerContainer.innerHTML.trim()) {
        // Determine footer type based on page
        const currentPage = window.location.pathname.split('/').pop();
        const fileName = currentPage || 'index.html'; // Default to index if no filename
        
        // Use full footer for index page, simple for others
        const footerType = fileName === 'index.html' ? 'full' : 'simple';
        
        console.log('Loading footer for:', fileName, 'Type:', footerType);
        loadFooter(footerType);
    }
}

// Also try loading when window is fully loaded (backup method)
window.addEventListener('load', function() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer && !footerContainer.innerHTML.trim()) {
        console.log('Backup footer load triggered');
        loadFooterForCurrentPage();
    }
});
