// 创建暗黑紫色科技感背景
document.addEventListener('DOMContentLoaded', function() {
    // 创建SVG背景
    createTechBackground();
    
    // 创建粒子效果
    createParticles();
    
    // 创建数字雨效果
    createDigitalRain();
    
    // 创建星空背景
    createStars();
});

// 创建SVG技术背景
function createTechBackground() {
    const techBg = document.createElement('div');
    techBg.className = 'tech-background';
    
    // 创建SVG元素
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 1000 1000');
    svg.setAttribute('preserveAspectRatio', 'none');
    
    // 添加网格线
    for (let i = 0; i < 20; i++) {
        // 水平线
        const hLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        hLine.setAttribute('x1', '0');
        hLine.setAttribute('y1', i * 50);
        hLine.setAttribute('x2', '1000');
        hLine.setAttribute('y2', i * 50);
        hLine.setAttribute('stroke', '#7b2cbf');
        hLine.setAttribute('stroke-width', '1');
        hLine.setAttribute('stroke-opacity', '0.3');
        svg.appendChild(hLine);
        
        // 垂直线
        const vLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        vLine.setAttribute('x1', i * 50);
        vLine.setAttribute('y1', '0');
        vLine.setAttribute('x2', i * 50);
        vLine.setAttribute('y2', '1000');
        vLine.setAttribute('stroke', '#7b2cbf');
        vLine.setAttribute('stroke-width', '1');
        vLine.setAttribute('stroke-opacity', '0.3');
        svg.appendChild(vLine);
    }
    
    // 添加圆形
    for (let i = 0; i < 15; i++) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const x = Math.random() * 1000;
        const y = Math.random() * 1000;
        const radius = Math.random() * 30 + 10;
        
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', '#7b2cbf');
        circle.setAttribute('stroke-width', '1');
        circle.setAttribute('stroke-opacity', '0.3');
        
        // 添加动画
        const animateRadius = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animateRadius.setAttribute('attributeName', 'r');
        animateRadius.setAttribute('values', `${radius};${radius * 1.5};${radius}`);
        animateRadius.setAttribute('dur', `${Math.random() * 5 + 5}s`);
        animateRadius.setAttribute('repeatCount', 'indefinite');
        circle.appendChild(animateRadius);
        
        const animateOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animateOpacity.setAttribute('attributeName', 'stroke-opacity');
        animateOpacity.setAttribute('values', '0.3;0.6;0.3');
        animateOpacity.setAttribute('dur', `${Math.random() * 3 + 3}s`);
        animateOpacity.setAttribute('repeatCount', 'indefinite');
        circle.appendChild(animateOpacity);
        
        svg.appendChild(circle);
    }
    
    // 添加连接线
    for (let i = 0; i < 10; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        const x1 = Math.random() * 1000;
        const y1 = Math.random() * 1000;
        const x2 = Math.random() * 1000;
        const y2 = Math.random() * 1000;
        
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#7b2cbf');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('stroke-opacity', '0.2');
        line.setAttribute('stroke-dasharray', '5,5');
        
        // 添加动画
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'stroke-dashoffset');
        animate.setAttribute('values', '0;100');
        animate.setAttribute('dur', `${Math.random() * 10 + 10}s`);
        animate.setAttribute('repeatCount', 'indefinite');
        line.appendChild(animate);
        
        svg.appendChild(line);
    }
    
    // 添加多边形
    for (let i = 0; i < 5; i++) {
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const points = [];
        const centerX = Math.random() * 1000;
        const centerY = Math.random() * 1000;
        const radius = Math.random() * 50 + 30;
        const sides = Math.floor(Math.random() * 3) + 3; // 3到5边
        
        for (let j = 0; j < sides; j++) {
            const angle = (j / sides) * Math.PI * 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            points.push(`${x},${y}`);
        }
        
        polygon.setAttribute('points', points.join(' '));
        polygon.setAttribute('fill', 'none');
        polygon.setAttribute('stroke', '#7b2cbf');
        polygon.setAttribute('stroke-width', '1');
        polygon.setAttribute('stroke-opacity', '0.2');
        
        // 添加旋转动画
        const animateTransform = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        animateTransform.setAttribute('attributeName', 'transform');
        animateTransform.setAttribute('type', 'rotate');
        animateTransform.setAttribute('from', `0 ${centerX} ${centerY}`);
        animateTransform.setAttribute('to', `360 ${centerX} ${centerY}`);
        animateTransform.setAttribute('dur', `${Math.random() * 30 + 30}s`);
        animateTransform.setAttribute('repeatCount', 'indefinite');
        polygon.appendChild(animateTransform);
        
        svg.appendChild(polygon);
    }
    
    techBg.appendChild(svg);
    document.body.prepend(techBg);
}

// 创建浮动粒子
function createParticles() {
    const particles = document.createElement('div');
    particles.className = 'particles';
    
    // 创建多个粒子
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        
        // 随机位置和大小
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particles.appendChild(particle);
    }
    
    // 添加到header
    const header = document.querySelector('header');
    header.appendChild(particles);
}

// 创建数字雨效果
function createDigitalRain() {
    const digitalRain = document.createElement('div');
    digitalRain.className = 'digital-rain';
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 设置canvas大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 数字雨字符
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // 每列的当前位置
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
    }
    
    // 绘制数字雨
    function draw() {
        // 半透明黑色背景，形成拖尾效果
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#9d4edd';
        ctx.font = `${fontSize}px monospace`;
        
        // 每列都有字符下落
        for (let i = 0; i < drops.length; i++) {
            // 随机字符
            const text = chars[Math.floor(Math.random() * chars.length)];
            
            // x = i * fontSize, y = drops[i] * fontSize
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // 字符到达底部或随机位置后，重新回到顶部
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // 递增y坐标
            drops[i]++;
        }
    }
    
    // 每50毫秒更新一次
    setInterval(draw, 50);
    
    digitalRain.appendChild(canvas);
    document.body.appendChild(digitalRain);
}

// 创建星空背景
function createStars() {
    const stars = document.createElement('div');
    stars.className = 'stars';
    
    // 创建多个星星
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // 随机位置和大小
        const size = Math.random() * 2 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        
        // 随机颜色（偏紫色）
        const hue = Math.random() * 60 + 240; // 240-300 范围的色相（紫色范围）
        const saturation = Math.random() * 30 + 70; // 70-100% 饱和度
        const lightness = Math.random() * 20 + 80; // 80-100% 亮度
        star.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        star.style.boxShadow = `0 0 ${size + 2}px hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        stars.appendChild(star);
    }
    
    document.body.appendChild(stars);
    
    // 添加一些更大的星星作为点缀
    for (let i = 0; i < 20; i++) {
        const bigStar = document.createElement('div');
        bigStar.className = 'star';
        
        const size = Math.random() * 3 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 4 + 3;
        
        bigStar.style.width = `${size}px`;
        bigStar.style.height = `${size}px`;
        bigStar.style.left = `${posX}%`;
        bigStar.style.top = `${posY}%`;
        bigStar.style.animationDelay = `${delay}s`;
        bigStar.style.animationDuration = `${duration}s`;
        
        // 紫色系
        bigStar.style.backgroundColor = '#9d4edd';
        bigStar.style.boxShadow = `0 0 ${size + 5}px #9d4edd`;
        
        stars.appendChild(bigStar);
    }
}
