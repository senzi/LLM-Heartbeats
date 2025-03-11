// Load model data
async function loadModels() {
    try {
        const response = await fetch('models/models.json');
        const data = await response.json();
        return data.models;
    } catch (error) {
        console.error('Failed to load model data:', error);
        return [];
    }
}

// Render model cards
function renderModelCards(models) {
    const container = document.getElementById('modelsContainer');
    container.innerHTML = '';
    
    models.forEach(model => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.dataset.modelName = model.name;
        
        const iframe = document.createElement('iframe');
        iframe.className = 'model-frame';
        iframe.src = `${model.path}/${model.htmlFile}`;
        iframe.title = model.name;
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        
        const info = document.createElement('div');
        info.className = 'model-info';
        info.innerHTML = `<h2>${model.name}</h2>`;
        
        card.appendChild(iframe);
        card.appendChild(info);
        
        card.addEventListener('click', () => showModelDetail(model));
        
        container.appendChild(card);
    });
}

// Show model detail
async function showModelDetail(model) {
    const container = document.getElementById('modelDetailContainer');
    container.innerHTML = '';
    
    const detailDiv = document.createElement('div');
    detailDiv.className = 'model-detail active';
    
    // Create header with model name and back button
    const detailHeader = document.createElement('div');
    detailHeader.className = 'detail-header';
    
    const modelTitle = document.createElement('h2');
    modelTitle.className = 'model-title';
    modelTitle.textContent = model.name;
    
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg> Back to Gallery';
    backButton.addEventListener('click', () => {
        detailDiv.classList.remove('active');
        document.getElementById('modelsContainer').style.display = 'flex';
        container.style.display = 'none';
    });
    
    detailHeader.appendChild(backButton);
    detailHeader.appendChild(modelTitle);
    
    // Create visualization section
    const visualizationSection = document.createElement('div');
    visualizationSection.className = 'visualization-section';
    
    const iframe = document.createElement('iframe');
    iframe.className = 'detail-frame';
    iframe.src = `${model.path}/${model.htmlFile}`;
    iframe.title = model.name;
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    
    visualizationSection.appendChild(iframe);
    
    // Create explanation section
    const explanationSection = document.createElement('div');
    explanationSection.className = 'explanation-section';
    
    const explanationTitle = document.createElement('h3');
    explanationTitle.className = 'explanation-title';
    explanationTitle.textContent = 'Model Explanation';
    
    const content = document.createElement('div');
    content.className = 'detail-content';
    
    try {
        const response = await fetch(`${model.path}/explanation.md`);
        const markdown = await response.text();
        // Render Markdown using marked.js
        content.className = 'detail-content markdown-body';
        content.innerHTML = marked.parse(markdown);
    } catch (error) {
        console.error('Failed to load explanation file:', error);
        content.innerHTML = '<p>Unable to load explanation file</p>';
    }
    
    explanationSection.appendChild(explanationTitle);
    explanationSection.appendChild(content);
    
    // Add all sections to the detail div
    detailDiv.appendChild(detailHeader);
    detailDiv.appendChild(visualizationSection);
    detailDiv.appendChild(explanationSection);
    
    container.appendChild(detailDiv);
    container.style.display = 'block';
    
    document.getElementById('modelsContainer').style.display = 'none';
}

// Initialize the application
async function initApp() {
    const models = await loadModels();
    renderModelCards(models);
}

// Initialize the application when the DOM content is loaded
window.addEventListener('DOMContentLoaded', initApp);