// 加载模型数据
async function loadModels() {
    try {
        const response = await fetch('models/models.json');
        const data = await response.json();
        return data.models;
    } catch (error) {
        console.error('加载模型数据失败:', error);
        return [];
    }
}

// 渲染模型卡片
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
        
        const info = document.createElement('div');
        info.className = 'model-info';
        info.innerHTML = `<h2>${model.name}</h2>`;
        
        card.appendChild(iframe);
        card.appendChild(info);
        
        card.addEventListener('click', () => showModelDetail(model));
        
        container.appendChild(card);
    });
}

// 显示模型详情
async function showModelDetail(model) {
    const container = document.getElementById('modelDetailContainer');
    container.innerHTML = '';
    
    const detailDiv = document.createElement('div');
    detailDiv.className = 'model-detail active';
    
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.textContent = '返回列表';
    backButton.addEventListener('click', () => {
        detailDiv.classList.remove('active');
        document.getElementById('modelsContainer').style.display = 'flex';
    });
    
    const iframe = document.createElement('iframe');
    iframe.className = 'detail-frame';
    iframe.src = `${model.path}/${model.htmlFile}`;
    iframe.title = model.name;
    
    const content = document.createElement('div');
    content.className = 'detail-content';
    
    try {
        const response = await fetch(`${model.path}/explanation.md`);
        const markdown = await response.text();
        // 使用 marked.js 渲染 Markdown
        content.className = 'detail-content markdown-body';
        content.innerHTML = marked.parse(markdown);
    } catch (error) {
        console.error('加载说明文件失败:', error);
        content.innerHTML = '<p>无法加载说明文件</p>';
    }
    
    detailDiv.appendChild(backButton);
    detailDiv.appendChild(iframe);
    detailDiv.appendChild(content);
    
    container.appendChild(detailDiv);
    
    document.getElementById('modelsContainer').style.display = 'none';
}

// 初始化应用
async function initApp() {
    const models = await loadModels();
    renderModelCards(models);
}

// 页面加载完成后初始化应用
window.addEventListener('DOMContentLoaded', initApp);