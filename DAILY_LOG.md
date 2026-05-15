# 个人作品集网站开发日志

**日期**: 2026-05-05
**技术栈**: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

---

## 本次完成内容

### 1. 项目初始化
- [x] 创建 Next.js 项目结构
- [x] 配置 TypeScript
- [x] 配置 Tailwind CSS
- [x] 安装依赖（framer-motion, lucide-react）

### 2. 核心组件开发

#### 首屏 Hero 模块
- 大写 "FUYAOYAO" 字母背景装饰
- Canvas 粒子效果实现
- 粒子支持鼠标左右滑动交互，有边界限制
- 入场动画（淡入 + 上移）

#### 项目作品展示模块（重点）
- 左侧固定目录导航：项目产品 / 用户调研 / 竞品分析 / 投标管理
- 中心区域网格展示项目缩略图
- 点击分类切换内容（带动画过渡）
- 点击项目弹出模态框（参考 BIG 事务所风格）
  - 左侧：项目类型、时间、面积、简介
  - 中间：项目大图
  - 右侧：担任角色、工作内容、项目成果

#### 其他模块
- [x] Header：固定导航栏，毛玻璃效果，移动端菜单
- [x] About：个人简介、头像、技能标签
- [x] Experience：工作经历时间线
- [x] Awards：奖励荣誉卡片展示
- [x] Outdoor：户外活动图库（悬停显示详情）
- [x] Contact：联系方式（邮箱/GitHub/LinkedIn/电话/位置）
- [x] Footer：页脚版权信息

### 3. 数据配置
- 创建 `data/profile.ts` 集中管理所有个人数据
- 定义 TypeScript 类型接口
- 方便后续修改内容

---

## 文件清单

### 配置文件
- `package.json` - 项目依赖
- `tsconfig.json` - TypeScript 配置
- `next.config.js` - Next.js 配置
- `tailwind.config.ts` - Tailwind CSS 配置
- `postcss.config.mjs` - PostCSS 配置
- `next-env.d.ts` - Next.js 类型声明

### 应用文件
- `app/layout.tsx` - 根布局
- `app/page.tsx` - 首页（组装所有模块）
- `app/globals.css` - 全局样式

### 组件文件（components/）
| 组件 | 功能 |
|------|------|
| Header.tsx | 导航栏，平滑滚动，响应式菜单 |
| Hero.tsx | 首屏，FUYAOYAO 背景 + CTA 按钮 |
| ParticleBackground.tsx | Canvas 粒子动画效果 |
| About.tsx | 个人简介、头像、技能标签 |
| Projects.tsx | 项目展示，左侧目录 + 中心网格 |
| ProjectModal.tsx | 项目详情弹窗，三栏布局 |
| Experience.tsx | 工作经历时间线 |
| Awards.tsx | 奖励荣誉卡片 |
| Outdoor.tsx | 户外活动图库 |
| Contact.tsx | 联系方式，深色背景 |
| Footer.tsx | 页脚 |

### 数据文件
- `data/profile.ts` - 所有个人数据配置

### 文档文件
- `PROJECT_GUIDE.md` - 详细项目文档和修改指南
- `DAILY_LOG.md` - 本文件，开发日志

---

## 后续修改指南

### 修改个人内容
编辑 `data/profile.ts`，填写你的真实信息：
- 姓名、职位、简介
- 项目作品（图片放在 `public/projects/`）
- 工作经历
- 奖励荣誉
- 联系方式

### 修改样式
- 配色：`tailwind.config.ts` 中的 `colors`
- 字体：`app/layout.tsx` 中的 Google Fonts
- 间距：各组件中的 Tailwind 类名

### 添加新模块
1. 在 `components/` 创建组件
2. 在 `app/page.tsx` 导入并放置
3. 在 `data/profile.ts` 添加数据
4. 在 `Header.tsx` 的 `navItems` 添加导航

---

## 启动命令

```bash
cd C:\Users\ULTRA\Desktop\portfolio
npm run dev
```

访问 http://localhost:3000

---

## 版本记录

### Hero 组件版本

#### V1
**文件**: `components/Hero_v1.tsx`
**特征**:
- FUYAOYAO 背景文字置于页面底部
- 字体竖向拉长 1.2 倍，中灰色，两侧留白
- 圆形视频区域（右侧）
- 文字内容位于视频左侧
- 整体向下偏移 2 行
- 无粒子效果

#### V2
**文件**: `components/Hero_v2.tsx`
**特征**:
- FUYAOYAO 背景文字：浅灰色，字号 `calc(100vw / 6.5)`
- 字母贴着页面最下边缘，左右顶着页面两侧
- 圆形视频区域：居中
- 文字内容位于视频右侧
- 文字字体小一号

#### V3 (当前)
**文件**: `components/Hero_v3.tsx`
**特征**:
- FUYAOYAO 背景文字：浅灰色，字号 `calc(100vw / 6.5)`
- 字母贴着页面最下边缘，左右顶着页面两侧
- 圆形视频区域：居中
- 文字内容位于视频右侧
- 文字字体小一号

### Projects 组件版本

#### V1
**文件**: `components/Projects_v1.tsx`, `components/ProjectModal_v1.tsx`, `components/ProjectSidebar_v1.tsx`
**特征**:
- 左侧分类导航（22% 宽度）：建筑项目、市场调研、科研成果
- 深灰色小字，无装饰，悬停/点击变黑，当前项黑点标记
- 右侧列表布局：左侧黑色方块（w-2 h-2）+ 项目名称 + 地点
- 右侧缩略图（320/380px），与文字顶部对齐
- 8 个示例项目，竖向排列，鼠标滚轮滚动
- 点击缩略图全屏放大：左侧项目信息，中间大图，右侧详细介绍

#### V2
**文件**: `components/Projects_v2.tsx`, `components/ProjectModal_v2.tsx`, `components/ProjectSidebar_v2.tsx`
**特征**:
- 基于 V1 的列表布局和三栏模态框
- ProjectModal 中间区域支持鼠标拖拽/滑动切换图片
- 新增左右箭头按钮和底部圆点指示器
- 图片数据结构从单张改为多张数组 `images: string[]`
- 项目 1（长丰文化艺术中心）：5 张图片轮播
- 项目 2（水华路09-01社区服务中心）：4 张图片轮播

#### V3
**文件**: `components/Projects_v3.tsx`, `components/ProjectModal_v3.tsx`, `components/ProjectSidebar_v3.tsx`
**特征**:
- 左侧分类导航 sticky 固定，滚动时锁定在视口顶部
- 分类顺序调整为：建筑项目、科研成果、市场调研
- 8 个真实建筑项目（ID 1-4, 9-12），全部支持多图轮播
- 4 个真实科研成果项目（ID 13-16）：1 个专利 + 3 个论文
- 科研成果列表标注显示 `type`（实用新型专利 / 论文）
- 市场调研新增视频项目（ID 17），缩略图自动播放
- 视频项目支持内联放大：点击后以缩略图 2.5 倍宽度平滑放大，点击 backdrop 恢复
- 删除所有示例项目（古城历史街区、山地度假村、BIM研究、微气候研究、城市更新策略、老旧小区调研）

#### V4 (当前)
**文件**: `components/Projects_v4.tsx`
**特征**:
- 右侧项目列表区域添加固定高度 `max-h-[calc(100vh-16rem)]` + `overflow-y-auto`
- 切换分类时自动平滑滚动到列表顶部，解决分类切换后内容"消失"问题
- 隐藏滚动条视觉（`scrollbar-hide`）
- 项目列表不再随整页无限延伸，在固定视口范围内滚动

### About 组件版本

#### V1 (当前)
**文件**: `components/About_v1.tsx`
**特征**:
- 整体放大，占满标准视口高度（`min-h-screen flex items-center`）
- 左侧栏：圆形头像 + 个人信息 + 联系我按钮
- 右侧大卡片：核心能力矩阵（标签胶囊）+ 软件技能（3×3图标网格）+ 四段能力描述
- 各分区独立白色卡片，带阴影
- 头像使用 `object-top` 确保头部完整显示

### Contact 组件版本

#### V1 (当前)
**文件**: `components/Contact_v1.tsx`
**特征**:
- 深色背景 `bg-gray-900`，保留原始卡片式布局风格
- 左侧 2×2 联系信息卡片：电话、邮箱、小红书、微信，带 `border border-gray-700` 边框
- 右侧微信二维码图片，尺寸 `w-44 h-44`
- 数据驱动，联系信息集中管理于 `data/profile.ts`

### Awards 组件版本

#### V1
**文件**: `components/Awards_v1.tsx`
**特征**:
- 标题"个人荣誉"
- 水平 4 列布置（桌面端），2×2 网格（移动端）
- 4 个真实荣誉奖状，图片完整显示（`object-contain`）
- 去掉卡片背景、圆角、阴影，无装饰样式
- 图片宽度 240px

#### V2 (当前)
**文件**: `components/Awards_v2.tsx`
**特征**:
- 奖状图片边框按图片实际比例添加（非固定 `aspect-[3/4]`）
- 文字部分自动分割为两行：第一行奖项活动/机构名称，第二行具体奖项等级
- 分割逻辑：包含"—"的按"—"分割，其他按最后一个空格分割

---

## 备注

- 所有图片存放在 `public/images/` 和 `public/projects/`
- 响应式设计已适配手机、平板、桌面
- 动画效果使用 Framer Motion
- 粒子效果使用原生 Canvas API
