document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.querySelectorAll('.category');
    const projectsContainer = document.getElementById('projectsContainer');
    const projectCards = document.querySelectorAll('.project-card');
    
    // 当前选中的分类
    let currentCategory = 'all';
    
    // 项目数据JSON
    const projectsData = [
        {
            title: '个人博客',
            description: '日常技术笔记',
            image: 'https://picsum.photos/id/180/800/600',
            tags: ['next.js', 'react'],
            link: 'https://blog.mocaii.cn/',
            category: 'web',
        },
        // {
        //     title: '在线计算器',
        //     description: '一个功能强大的在线科学计算器，支持高级数学函数和单位转换',
        //     image: 'https://picsum.photos/id/96/800/600',
        //     tags: ['HTML5', 'CSS3', 'JavaScript'],
        //     link: 'https://example.com/calculator',
        //     category: 'tool',
        // },
        // {
        //     title: '天气预报应用',
        //     description: '一个响应式的天气预报Web应用，提供实时天气数据和未来7天预报',
        //     image: 'https://picsum.photos/id/160/800/600',
        //     tags: ['React', 'API'],
        //     link: 'https://example.com/weather',
        //     category: 'mobile',
        // },
        // {
        //     title: '电子商务平台',
        //     description: '一个完整的电子商务解决方案，包括产品展示、购物车和支付系统',
        //     image: 'https://picsum.photos/id/26/800/600',
        //     tags: ['React', 'Node.js', 'MongoDB'],
        //     link: 'https://example.com/ecommerce',
        //     category: 'web',
        // },
        {
            title: '提示词收藏夹',
            description: '一个用于存储和组织日常使用提示词的网站',
            image: 'https://picsum.photos/id/42/800/600',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            link: 'https://mocaii.github.io/prompt-collection/',
            category: 'tool',
        },
        // {
        //     title: '摄影作品集',
        //     description: '展示我的摄影作品的响应式网站，包括图片库和滤镜功能',
        //     image: 'https://picsum.photos/id/106/800/600',
        //     tags: ['HTML5', 'CSS Grid', 'JavaScript'],
        //     link: 'https://example.com/photography',
        //     category: 'other',
        // },
    ];
    
    // 初始化动画
    animateCards();
    
    // 搜索功能
    searchInput.addEventListener('input', filterProjects);
    
    // 分类按钮点击事件
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // 给当前点击的按钮添加active类
            this.classList.add('active');
            
            // 更新当前分类
            currentCategory = this.getAttribute('data-category');
            
            // 过滤项目
            filterProjects();
        });
    });
    
    // 渲染项目卡片组件
    function renderProjects(data) {
        projectsContainer.innerHTML = '';
        data.forEach(projectData => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-category', projectData.category);
            card.innerHTML = `
                <div class="project-image">
                    <img src="${projectData.image}" alt="${projectData.title}">
                </div>
                <div class="project-info">
                    <h3>${projectData.title}</h3>
                    <p>${projectData.description}</p>
                    <div class="project-tags">
                        ${projectData.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <a href="${projectData.link}" class="project-link" target="_blank">访问网站 <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }
    
    // 过滤项目的函数
    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase();
        let visibleCount = 0;
        // 过滤数据
        const filtered = projectsData.filter(project => {
            const cardCategory = project.category;
            const cardTitle = project.title.toLowerCase();
            const cardDescription = project.description.toLowerCase();
            const matchesSearch = cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm);
            const matchesCategory = currentCategory === 'all' || cardCategory === currentCategory;
            return matchesSearch && matchesCategory;
        });
        renderProjects(filtered);
        // 动画
        animateCards();
        // 检查无结果
        checkEmptyResults(filtered.length);
    }
    
    // 检查是否没有搜索结果
    function checkEmptyResults(count) {
        // 如果没有可见的卡片，显示"无结果"消息
        if (count === 0) {
            let noResultsMessage = document.querySelector('.no-results');
            if (!noResultsMessage) {
                noResultsMessage = document.createElement('div');
                noResultsMessage.className = 'no-results';
                noResultsMessage.innerHTML = '<i class="fas fa-search" style="font-size: 2rem; margin-bottom: 16px; opacity: 0.3;"></i><p>没有找到匹配的项目</p>';
                projectsContainer.appendChild(noResultsMessage);
                setTimeout(() => {
                    noResultsMessage.style.opacity = '1';
                }, 100);
            }
        } else {
            const noResultsMessage = document.querySelector('.no-results');
            if (noResultsMessage) {
                noResultsMessage.remove();
            }
        }
    }
    
    // 动画函数适配新结构
    function animateCards() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // 添加新项目的函数
    window.addProject = function(projectData) {
        // 创建新的项目卡片
        const newCard = document.createElement('div');
        newCard.className = 'project-card';
        newCard.setAttribute('data-category', projectData.category);
        newCard.style.opacity = '0';
        newCard.style.transform = 'translateY(20px)';
        newCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // 设置卡片内容
        newCard.innerHTML = `
            <div class="project-image">
                <img src="${projectData.image}" alt="${projectData.title}">
            </div>
            <div class="project-info">
                <h3>${projectData.title}</h3>
                <p>${projectData.description}</p>
                <div class="project-tags">
                    ${projectData.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <a href="${projectData.link}" class="project-link" target="_blank">访问网站</a>
            </div>
        `;
        
        // 添加到容器
        projectsContainer.appendChild(newCard);
        
        // 添加动画效果
        setTimeout(() => {
            newCard.style.opacity = '1';
            newCard.style.transform = 'translateY(0)';
        }, 100);
        
        // 更新项目卡片集合
        projectCards = document.querySelectorAll('.project-card');
        
        // 重新过滤项目
        filterProjects();
    };
    
    // 初始化渲染
    renderProjects(projectsData);
    filterProjects();
});
