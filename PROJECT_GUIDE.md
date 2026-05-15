# 个人作品集网站 - 项目文档

## 项目概述

基于 Next.js 14 + TypeScript + Tailwind CSS 构建的个人作品集网站。

**核心特色**：
- Hero 首屏："FUYAOYAO" 粒子效果背景，支持鼠标交互
- 项目展示：左侧目录 + 中心展示区，参考 BIG 事务所风格
- 响应式设计，支持多设备访问

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 14.2+ | React 全栈框架 |
| TypeScript | 5.0+ | 类型安全 |
| Tailwind CSS | 3.4+ | 原子化 CSS |
| Framer Motion | 11.0+ | 动画效果 |
| Lucide React | 0.344+ | 图标库 |

---

## 项目结构

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 全局布局
│   ├── page.tsx           # 首页（组装所有模块）
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Header.tsx         # 导航栏（固定顶部，毛玻璃效果）
│   ├── Hero.tsx           # 首屏（FUYAOYAO + 粒子背景）
│   ├── ParticleBackground.tsx  # 粒子效果 Canvas 实现
│   ├── About.tsx          # 关于我
│   ├── Projects.tsx       # 项目作品（左侧目录+中心展示）
│   ├── ProjectModal.tsx   # 项目详情放大模态框
│   ├── Experience.tsx     # 工作经历（时间线设计）
│   ├── Awards.tsx         # 奖励展示
│   ├── Outdoor.tsx        # 户外活动（图库）
│   ├── Contact.tsx        # 联系方式
│   └── Footer.tsx         # 页脚
├── data/
│   └── profile.ts         # 所有个人数据配置
├── public/
│   ├── images/            # 图片资源
│   └── projects/          # 项目截图
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.mjs
└── next-env.d.ts
```

---

## 核心功能说明

### 1. 粒子背景效果 (ParticleBackground.tsx)

**功能**：
- 80 个粒子在画布上浮动
- 粒子围绕中心点分布，最大半径为屏幕最小边的 40%
- 支持鼠标移动交互：粒子会响应鼠标位置产生排斥效果
- 左右滑动时粒子会在边界内移动
- 粒子会自动回归原位

**修改要点**：
- 调整 `particleCount` 改变粒子数量
- 修改 `maxRadius` 改变粒子分布范围
- 调整 `force` 系数改变鼠标交互强度
- 修改颜色值改变粒子外观

### 2. 项目展示 (Projects.tsx + ProjectModal.tsx)

**功能**：
- 左侧固定目录：项目产品 / 用户调研 / 竞品分析 / 投标管理
- 点击分类切换中心展示区的项目
- 点击项目卡片弹出模态框
- 模态框左侧：项目类型、时间、面积、简介
- 模态框右侧：个人角色和贡献

**修改要点**：
- 在 `data/profile.ts` 中添加/修改项目数据
- 修改 `categories` 数组改变分类
- 调整网格布局在 `grid-cols-3` 处

### 3. 导航栏 (Header.tsx)

**功能**：
- 固定顶部，滚动后显示毛玻璃背景
- 平滑滚动到各模块
- 移动端汉堡菜单

**修改要点**：
- 修改 `navItems` 数组调整导航项
- 调整 `glass-effect` 类改变背景效果

---

## 数据配置指南

所有个人内容都在 `data/profile.ts` 中配置：

### 基本信息
```typescript
name: '你的姓名',           // 中文名
nameEn: 'FUYAOYAO',        // 英文名（Hero背景显示）
title: '产品经理 / UX设计师',  // 职位
subtitle: '专注于用户体验和产品创新',  // 副标题
```

### 关于我
```typescript
about: {
  description: '个人简介文本',
  avatar: '/images/avatar.jpg',  // 头像路径
  skills: ['技能1', '技能2', ...]  // 技能标签
}
```

### 项目作品
```typescript
projects: {
  categories: [
    { id: 'product', name: '项目产品' },
    // 添加更多分类...
  ],
  items: [
    {
      id: 1,
      category: 'product',      // 对应分类 id
      title: '项目名称',
      image: '/projects/project1.jpg',
      type: '项目类型',
      time: '2024年',
      area: '涉及领域',
      brief: '项目简介',
      role: '担任角色',
      contribution: '具体贡献'
    }
  ]
}
```

### 工作经历
```typescript
experience: [
  {
    company: '公司名称',
    position: '职位',
    period: '2022 - 至今',
    responsibilities: ['职责1', '职责2']
  }
]
```

### 奖励荣誉
```typescript
awards: [
  {
    title: '奖项名称',
    date: '2024年',
    description: '奖项描述',
    image: '/images/award1.jpg'
  }
]
```

### 户外活动
```typescript
outdoor: [
  {
    title: '活动名称',
    image: '/images/outdoor1.jpg',
    description: '活动描述'
  }
]
```

### 联系方式
```typescript
contact: {
  email: 'your.email@example.com',
  github: 'https://github.com/...',
  linkedin: 'https://linkedin.com/in/...',
  phone: '+86 138 0000 0000',
  location: '城市，中国'
}
```

---

## 常用修改操作

### 修改配色方案

编辑 `tailwind.config.ts`：
```typescript
colors: {
  primary: '#1a1a1a',    // 主色调
  accent: '#4a4a4a',     // 强调色
}
```

### 修改字体

编辑 `app/layout.tsx`，更换 Google Fonts：
```typescript
import { Inter } from 'next/font/google'
// 改为其他字体，如：import { Noto_Sans_SC } from 'next/font/google'
```

### 添加新模块

1. 在 `components/` 创建新组件
2. 在 `app/page.tsx` 中导入并添加
3. 在 `data/profile.ts` 中添加对应数据
4. 在 `components/Header.tsx` 的 `navItems` 中添加导航项

### 修改粒子效果参数

编辑 `components/ParticleBackground.tsx`：
```typescript
const particleCount = 80;        // 粒子数量
const maxRadius = ...;           // 分布半径
const maxDist = 150;             // 鼠标交互范围
```

### 调整响应式断点

Tailwind 默认断点：
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

在组件中使用：`className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"`

---

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
# 访问 http://localhost:3000

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

---

## 部署指南

### 部署到 Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动构建部署

### 静态导出

编辑 `next.config.js`：
```javascript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
}
```

运行 `npm run build` 生成静态文件。

---

## 文件清单

| 文件路径 | 说明 | 修改频率 |
|---------|------|---------|
| `data/profile.ts` | 个人数据配置 | 高 |
| `components/Header.tsx` | 导航栏 | 中 |
| `components/Hero.tsx` | 首屏 | 中 |
| `components/Projects.tsx` | 项目展示 | 低 |
| `components/ProjectModal.tsx` | 项目模态框 | 低 |
| `app/globals.css` | 全局样式 | 中 |
| `tailwind.config.ts` | Tailwind 配置 | 低 |

---

## 注意事项

1. **图片路径**：将图片放在 `public/images/` 或 `public/projects/` 下，引用时使用 `/images/xxx.jpg`
2. **TypeScript 类型**：修改 `data/profile.ts` 时注意保持类型一致
3. **动画性能**：粒子效果在移动设备上可能消耗较多资源，可考虑在移动端简化
4. **SEO**：在 `app/layout.tsx` 的 `metadata` 中配置网站标题和描述

---

## 后续优化建议

- [ ] 添加深色模式支持
- [ ] 添加页面加载动画
- [ ] 优化移动端粒子效果性能
- [ ] 添加项目筛选和搜索功能
- [ ] 添加博客/文章模块
- [ ] 添加多语言支持
- [ ] 集成 CMS 方便内容管理
