# 我的项目导航

这是一个简单而美观的个人项目导航网站，用于展示和整理你开发的各种网站和项目。

## 功能特点

- 响应式设计，适配各种设备
- 项目分类筛选功能
- 搜索功能
- 美观的卡片式布局
- 简单易用的界面

## 文件结构

```
my-projects-nav/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式表
├── js/
│   └── script.js       # JavaScript功能
└── images/             # 项目图片目录
```

## 如何添加新项目

### 方法1：直接编辑HTML

在`index.html`文件中，找到`<div class="projects-grid" id="projectsContainer">`部分，按照以下模板添加新的项目卡片：

```html
<div class="project-card" data-category="分类名称">
    <div class="project-image">
        <img src="images/项目图片.jpg" alt="项目名称">
    </div>
    <div class="project-info">
        <h3>项目名称</h3>
        <p>项目描述</p>
        <div class="project-tags">
            <span>标签1</span>
            <span>标签2</span>
        </div>
        <a href="https://项目链接.com" class="project-link" target="_blank">访问网站</a>
    </div>
</div>
```

### 方法2：使用JavaScript添加

你也可以通过JavaScript动态添加项目。在浏览器控制台中执行以下代码：

```javascript
window.addProject({
    title: "项目名称",
    description: "项目描述",
    category: "web", // 可选值: web, mobile, tool, other
    image: "images/项目图片.jpg",
    tags: ["标签1", "标签2"],
    link: "https://项目链接.com"
});
```

## 自定义

### 添加新分类

1. 在`index.html`中找到分类按钮部分：

```html
<div class="categories">
    <button class="category active" data-category="all">全部</button>
    <!-- 在这里添加新的分类按钮 -->
    <button class="category" data-category="新分类">新分类名称</button>
</div>
```

2. 确保在添加项目时使用相应的分类名称作为`data-category`属性值。

### 修改样式

你可以通过编辑`css/style.css`文件来自定义网站的外观。主要的样式部分包括：

- 全局样式
- 头部样式
- 搜索框样式
- 分类按钮样式
- 项目卡片样式
- 响应式设计

## 使用提示

- 为获得最佳效果，建议使用尺寸相近的项目图片
- 项目描述保持简短精炼
- 使用有代表性的标签来描述项目技术栈
- 定期更新项目链接，确保它们仍然有效

## 浏览器兼容性

该项目兼容所有现代浏览器，包括：

- Chrome
- Firefox
- Safari
- Edge

## 许可

此项目仅供个人使用。
