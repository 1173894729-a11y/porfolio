export const profile: Profile = {
  name: '你的姓名',
  nameEn: 'FUYAOYAO',
  title: '产品经理 / UX设计师',
  subtitle: '专注于用户体验和产品创新',

  about: {
    avatar: '/images/avatar.jpg',
    birthInfo: '1994.04/辽宁',
    education: '武汉科技大学/建筑学',
    certifications: ['一级注册建筑师', '中级职称', '建筑信息模型技术员'],
    coreCapabilities: [
      '项目管理', '产品研发', '痛点挖掘',
      '政府征询', '规范及政策研究', '招投标管理',
      '协同工作管理', '搭建行动框架',
      '自我驱动力', '超强执行力', '总结方法论',
      '英语六级'
    ],
    softwareSkills: [
      { name: 'Xmind', sub: '思维导图', icon: '/images/xmind.jpg' },
      { name: 'Claude Code', sub: 'AI agent', icon: '/images/claude code.jpg' },
      { name: 'make', sub: '工作流', icon: '/images/make.jpg' },
      { name: 'SPSS', sub: '数据分析', icon: '/images/spss.jpg' },
      { name: 'Sketchup', sub: '三维建模', icon: '/images/sketch up.jpg' },
      { name: 'CAD', sub: '二维技术图纸', icon: '/images/cad.jpg' },
      { name: 'Revit', sub: '数字化建模', icon: '/images/revit.jpg' },
      { name: 'Photoshop', sub: '图像处理', icon: '/images/ps.jpg' },
      { name: 'PPT', sub: '文本', icon: '/images/ppt.jpg' },
    ],
    capabilityTexts: [
      {
        title: '行业洞察与决策分析',
        content: '拥有 10 年甲级设计院一线经验，参与近百个项目，深刻理解 B 端客户（甲方/政府）的决策链条、招投标流程及工程痛点。'
      },
      {
        title: '复杂系统统筹能力',
        content: '擅长横向拉通跨专业协同，具备从技术冲突识别到方案闭环落地的全过程管理素质，能够精准对齐管理与执行诉求。'
      },
      {
        title: '技术方案与价值传递',
        content: '主导近百个项目投标述标，擅长将高深技术（如零能耗、BIM）转化为客户可感知的商业价值与技术优势。'
      },
      {
        title: '数字化工具应用创新',
        content: '熟练应用 BIM 正向设计、AI 工作流（Midjourney/扣子）及工程逻辑建模，具备将传统工业工艺流程数字化、可视化的潜力。'
      }
    ]
  },

  projects: {
    categories: [
      { id: 'architecture', name: '建筑项目' },
      { id: 'scientific', name: '科研成果' },
      { id: 'research', name: '市场调研' },
    ],
    items: [
      {
        id: 1,
        category: 'architecture',
        title: '长丰文化艺术中心片区城市更新',
        images: [
          '/projects/project1.jpg',
          '/projects/hefei_2.jpg',
          '/projects/hefei_3.jpg',
          '/projects/hefei_4.jpg',
          '/projects/hefei_5.jpg',
        ],
        location: '安徽合肥',
        type: '城市更新—工业园区改造',
        scale: '占地约1.8万㎡',
        year: '2025年',
        role: '设计主持人',
        brief: '原海螺水泥厂改造项目',
        description:
          '项目位于安徽合肥市，项目拟以场地内遗留的海螺水泥厂厂房及储存罐合为基础，挖掘工业遗产文化内涵，植入当前新兴的商业业态，打造集休闲、艺术、生活、娱乐、餐饮为一体的特色化商业街区。\n\n项目包括三个油罐，四个单体建筑，一个厂房，一个车站顶棚及与儿童乐园衔接区域，配套完善项目区室外供配电、给排水、绿化景观等室外工程。\n\n项目中担任设计总主持人，统筹项目全周期设计管理。精准对接业主与政府方，深度挖掘并界定真实需求；通过技术及关键节点综合评估，协调各专业高效配合；同步对接施工单位，动态平衡现场工况与业主预期，实现技术条件的严格把控与设计决策的持续优化。',
      },
      {
        id: 2,
        category: 'architecture',
        title: '水华路09-01社区服务中心项目',
        images: [
          '/projects/lingang_1.jpg',
          '/projects/lingang_2.jpg',
          '/projects/lingang_3.jpg',
          '/projects/lingang_4.jpg',
        ],
        location: '上海市临港新片区',
        type: '社区综合服务中心',
        scale: '约1.6万㎡',
        year: '2023年',
        role: '专业负责人',
        brief: '15分钟社区生活圈示范性民生工程',
        description:
          '项目位于上海市临港新片区，是打造15分钟社区生活圈，优化区域公共服务水平的示范性民生工程。打造一座社区行政、社区文化、社区体育设施综合设置。\n\n本项目设计阶段涵盖全过程全专业（项目建议书、可研、方案、施工图），建筑功能包涵社区学校、社区事务受理大厅、剧场、游泳池、篮球馆、图书馆、青少年活动中心、卫生服务站、老年人日间照料设施、社区食堂、地下车库等。项目亮点：绿建三星级、BIM正向设计。\n\n本人在项目中作为建筑专负，辅助业主以开发角度以全新的视角对内部专项和外部专项进行设计和管理，对综合复杂单体进行整体把控，包括成本、进度、以及设计质量等。预判控运营后置产生的风险点，在前期设计阶段进行规避以及预留条件；对接交通管理、卫生管理、水电燃气接口等政府部门，保障项目合规推进。',
      },
      {
        id: 3,
        category: 'architecture',
        title: '镇江官塘S3地块项目',
        images: [
          '/projects/zhenjiang_1.jpg',
          '/projects/zhenjiang_2.jpg',
          '/projects/zhenjiang_3.jpg',
          '/projects/zhenjiang_4.jpg',
        ],
        location: '江苏省镇江市',
        type: '住宅/商办/幼儿园',
        scale: '约19万㎡',
        year: '2024年',
        role: '专业负责人',
        brief: '官塘片区产城融合焕新工程',
        description:
          '项目位于江苏省镇江市，毗邻官塘桥遗址，是官塘片区全面焕新产城融合的重要项目工程，通过文化赋能盘活场地资源，为区域注入新的生机与活力。针对地块内长期存在的"烂尾"工程，以技术改造为突破口，成功实现了老旧场地的焕活再生。\n\n最终有力推动了项目的实质性落地，为片区历史文脉的延续与现代功能的导入奠定了坚实基础。\n\n本人作为项目的专业负责人，负责完成方案深化和施工图设计。通过向政府及业主开展多轮深入细致的专项汇报，逐步在政策导向、经济平衡与技术可行性之间建立闭环。解决项目推进中的"卡脖子"难题，对接外部多项专项，统筹内部专业完成全套施工图，实现技术统筹力与项目决策。',
      },
      {
        id: 4,
        category: 'architecture',
        title: '天合光能上海国际总部',
        images: [
          '/projects/tianhe_1.jpg',
          '/projects/tianhe_2.jpg',
          '/projects/tianhe_3.jpg',
          '/projects/tianhe_4.jpg',
          '/projects/tianhe_5.jpg',
        ],
        location: '上海市闵行区虹桥商务区',
        type: '办公产业园',
        scale: '约12.7万㎡',
        year: '2023年',
        role: '方案设计师',
        brief: '光伏产业交流共享基地',
        description:
          '项目位于上海市闵行区虹桥商务区，立足"双碳"战略和国内国际双循环的新发展格局，致力于打造光伏产业交流的共享基地、引领光伏行业的风向标。本项目共由6栋单体总成，建筑使用功能为商业+办公。项目亮点：超低能耗园区、三星级 、LEED金、BIPV、光储直柔技术。\n\n在投标过程中，我通过优化核心筒布局，增加货值2千多万，助力项目成功中标。在设计过程中，致力于超低能耗建筑技术落位，实现BIPV技术与系统的深度融合，攻克技术难题。同时考虑成本与工期之间的平衡，持续推动项目高效有序落地。',
      },
      {
        id: 17,
        category: 'research',
        title: '市场调研、竞品分析',
        images: ['/projects/market_video.mp4'],
        location: '—',
        type: '视频',
        scale: '—',
        year: '—',
        role: '—',
        brief: '市场调研与竞品分析视频',
        description:
          '本视频展示了市场调研与竞品分析的工作成果，涵盖市场需求洞察、竞品对标分析、用户痛点挖掘等核心内容，为产品决策和战略定位提供数据支撑。',
      },
      {
        id: 9,
        category: 'architecture',
        title: '长三角G60科创之眼项目',
        images: [
          '/projects/g60_1.jpg',
          '/projects/g60_2.jpg',
          '/projects/g60_3.jpg',
          '/projects/g60_4.jpg',
          '/projects/g60_5.jpg',
        ],
        location: '上海市松江区',
        type: '办公产业园',
        scale: '约8.19万㎡',
        year: '2022年',
        role: '主要设计人',
        brief: 'G60科创走廊首发项目',
        description:
          '项目位于上海市松江区，为G60科创走廊首发项目。作为落实长三角一体化高质量发展国家战略的重要平台。总建筑面积约19万平米，由两个地块、共17栋单体总成，建筑使用功能为商业+办公。项目特点：项目规模大、设计总包、超低能耗、钢结构、PC装配式、绿色三星、BIM等。\n\n项目中本人角色为主要设计人，主要解决技术难点攻克与设计优化，独立设计创意旋转楼梯"平台隐蔽"处理，并协调结构专业落地；创新"成品风道"材料构造，实现技术与造型的统一处理；立足于人体行为学，优化复杂核心筒的空间布局。',
      },
      {
        id: 10,
        category: 'architecture',
        title: '上坤樾山08-6/8地块项目',
        images: [
          '/projects/shangkun_1.jpg',
          '/projects/shangkun_2.jpg',
          '/projects/shangkun_3.jpg',
          '/projects/shangkun_4.png',
          '/projects/shangkun_5.jpg',
        ],
        location: '上海松江区',
        type: '商业办公/酒店',
        scale: '约16.44万㎡',
        year: '2021年',
        role: '专业负责人',
        brief: '樾山国际生态城滨水连廊',
        description:
          '项目位于上海松江区，从规划、配套、生态上规划升级，以"一核两带两轴两栖"为主要内容规划再升级，构建樾山国际生态城滨水连廊蓝带和生态漫步绿轴。一核两带两轴两栖、创业孵化器、总部集群、城市滨水生活中心、商业街，产城融合，科创产业新引擎，长三角地区热门置业地，打造24h国际社区生活圈。\n\n本人担任该专业负责人，在设总统筹下深度协同业主，统筹幕墙、景观、泛光照明、古建等专项团队，确保多专业需求在施工图体系中精准落位。既是设总与业主之间的核心执行支点，也是各专项协同推进的技术枢纽，主导解决关键复杂问题，在强约束条件下保障了项目的高质量、高效率交付。',
      },
      {
        id: 11,
        category: 'architecture',
        title: '融创国宾壹号项目（西园）',
        images: [
          '/projects/xiyuan_1.jpg',
          '/projects/xiyuan_2.jpg',
          '/projects/xiyuan_3.jpg',
        ],
        location: '成都市金牛区',
        type: '住宅',
        scale: '约16.44万㎡',
        year: '2019年',
        role: '方案设计师',
        brief: '多层高端居住社区',
        description:
          '项目位于成都市金牛区，项目为多层住宅的高端居住社区。每个住宅单元在朝向上充分利用小区景观和周边景观资源，结合平面的合理规划、立面的创新设计，力图将本项目打造成为该地区高品质风情的建筑群。\n\n本人在项目中负责方案设计，在建筑设计的整体风格上，将文化线索贯穿于建筑风格及建筑表现形式的表达之中，适当融入了传统建筑符号，丰富了项目的建筑内涵。建筑风格与周边片区建筑风格相呼应，并寻求新的突破，外立面采用现代中式建筑的典型元素营造，主要强调对称等形体，轻盈的屋顶与色彩变化，立面简洁大气。',
      },
      {
        id: 12,
        category: 'architecture',
        title: '中华村文化创意中心',
        images: [
          '/projects/zhonghua_1.png',
          '/projects/zhonghua_2.png',
          '/projects/zhonghua_3.png',
          '/projects/zhonghua_4.png',
        ],
        location: '上海金山区廊下镇',
        type: '文化建筑',
        scale: '约16.44万㎡',
        year: '2022年',
        role: '专业负责人',
        brief: 'IAIA至尊奖BEST OF BEST',
        description:
          '中华村文化创意中心为乡村振兴示范村项目，位于上海金山区廊下镇，项目基地原址为中华村小学旧址，改造前是"老旧危"项目。项目的设计旨在用现代的设计手法为村镇中打造一处公共活动空间，注入新的活力，同时部分延续老建筑的历史痕迹。项目于2023年获得IAIA"至尊奖BEST OF BEST"。\n\n本人担任专业负责人，全面负责施工图设计及多专业统筹协调工作，以方案效果的高度实现为核心目标，组织各专业紧密协作，确保设计意图精准落地。系统性解决关键技术难题设计研发重要节点。以对方案效果的高度责任感，最终实现了方案效果、建筑功能与施工可行性的高度统一。',
      },
      {
        id: 13,
        category: 'scientific',
        title: '一种绿色低碳风管与外墙风口的安装结构',
        images: ['/projects/research_1.jpg'],
        location: '中国',
        type: '实用新型专利',
        scale: '—',
        year: '—',
        role: '发明人',
        brief: '绿色低碳风管安装结构',
        description:
          '本专利提出了一种绿色低碳风管与外墙风口的安装结构，旨在优化建筑通风系统的能效表现，降低运行能耗，提升室内环境品质。',
      },
      {
        id: 14,
        category: 'scientific',
        title: '实现零能耗办公建筑设计技术措施的工程实践',
        images: ['/projects/research_2.jpg'],
        location: '中国',
        type: '论文',
        scale: '期刊论文',
        year: '—',
        role: '作者',
        brief: '零能耗办公建筑技术实践',
        description:
          '本文总结了零能耗办公建筑在设计阶段的关键技术措施，结合工程实践分析了超低能耗、可再生能源利用等策略的应用效果。',
      },
      {
        id: 15,
        category: 'scientific',
        title: '城市更新背景下"停滞工程"焕新生——镇江官塘S3项目建筑工程实践',
        images: ['/projects/research_3.jpg'],
        location: '中国',
        type: '论文',
        scale: '期刊论文',
        year: '—',
        role: '作者',
        brief: '城市更新停滞工程焕新实践',
        description:
          '本文以镇江官塘S3地块项目为例，探讨了在城市更新背景下，如何通过技术改造手段使长期停滞的工程焕发新生，实现老旧场地的活化再生。',
      },
      {
        id: 16,
        category: 'scientific',
        title: '超低能耗建筑外立面百叶与风管排(取)风口连接方式的研究与设计',
        images: ['/projects/research_4.jpg'],
        location: '中国',
        type: '论文',
        scale: '期刊论文',
        year: '—',
        role: '作者',
        brief: '超低能耗建筑风口连接设计',
        description:
          '本文针对超低能耗建筑外立面百叶与风管排(取)风口的连接方式进行深入研究，提出了优化设计方案，以提升建筑气密性和热工性能。',
      },
    ],
  },

  experience: [
    {
      period: '2021.3 - 2026.3',
      company: '上海中森建筑与工程设计顾问有限公司',
      position: '副主任建筑师',
      responsibilities: [
        '项目前期政府部门各专项征询，配合业主对政府报批报建流程',
        '对接业主，梳理业主需求，制定项目节点计划；对接施工单位，对现场的不预期情况进行技术指导，保障交付质量',
        '主导大型公共建筑设计落地，涵盖产业办公园、商业综合体、社区服务中心、超高层酒店等项目类型，协调结构、机电、方案和总图等各内部专业问题以及外部人防、幕墙、景观、超低能耗等外部专项需求落位，进行技术决策',
        '担任科研课题负责人，形成"工程实践→学术成果"的良性循环',
      ],
    },
    {
      period: '2020.9 - 2021.3',
      company: '上海华东发展城建设计（集团）有限公司',
      position: '施工图设计师',
      responsibilities: [
        '施工图单体负责人，对接单体范围内的专项需求并统筹落位',
      ],
    },
    {
      period: '2018.10 - 2020.4',
      company: '上海森括建筑设计有限公司',
      position: '方案设计师',
      responsibilities: [
        '前端决策：主导强排设计，基于竞品分析与市场研判优化户型配比，从源头提升项目溢价能力',
        '方案落地：统筹方案设计全流程，以用户视角驱动总图与户型迭代，平衡规划指标、成本控制与视觉呈现',
      ],
    },
    {
      period: '2016.12 - 2018.7',
      company: '沈阳绿萌建筑设计有限公司',
      position: '方案设计师',
      responsibilities: [
        '方案设计师，主要的工作以头脑风暴的灵感创意为主，绘制古建乡土，参与文旅古镇的整体规划',
      ],
    },
    {
      period: '2015.7 - 2016.2',
      company: '中国建筑标准院海南分院',
      position: '建筑设计师',
      responsibilities: [],
    },
    {
      period: '2015.6',
      company: '武汉科技大学',
      position: '毕业',
      responsibilities: ['建筑学学士'],
    },
  ],

  awards: [
    {
      title: '第二届上海勘察设计协会巾帼建功标兵 —优秀女建筑师(新锐)',
      date: '2025年',
      description: '第二届上海勘察设计协会巾帼建功标兵 —优秀女建筑师(新锐)',
      image: '/awards/award_4.jpg',
    },
    {
      title: '上海市2025"数建杯"数字城市职业技能大赛 第一名（建筑工程）',
      date: '2025年',
      description: '上海市2025"数建杯"数字城市职业技能大赛 第一名（建筑工程）',
      image: '/awards/award_3.jpg',
    },
    {
      title: '2025年上海市"数建杯"BIM正向设计大赛 第二名',
      date: '2025年',
      description: '2025年上海市"数建杯"BIM正向设计大赛 —第二名（团队排名第五）',
      image: '/awards/award_1.jpg',
    },
    {
      title: '2025浦东新区BIM/CIM技术应用创新技能竞赛 第一名',
      date: '2025年',
      description: '2025年第八届浦东新区BIM/CIM技术应用创新技能竞赛2025BIM建模赛 建筑工程—第一名',
      image: '/awards/award_2.jpg',
    },
  ],

  contact: {
    email: '1173894729@qq.com',
    phone: '+86 13514250631',
    xiaohongshu: 'https://xhslink.com/m/4sGnGTzZSfb',
    wechat: 'F_yyaoo',
    wechatQr: '/images/微信图片_20260515142920_74_15.jpg',
  },
}

export type ProjectCategory = 'architecture' | 'research' | 'scientific'

export interface Project {
  id: number
  category: ProjectCategory
  title: string
  images: string[]
  location: string
  type: string
  scale: string
  year: string
  role: string
  brief: string
  description: string
}

interface Profile {
  name: string
  nameEn: string
  title: string
  subtitle: string
  about: {
    avatar: string
    birthInfo: string
    education: string
    certifications: string[]
    coreCapabilities: string[]
    softwareSkills: { name: string; sub: string; icon: string }[]
    capabilityTexts: { title: string; content: string }[]
  }
  projects: {
    categories: { id: ProjectCategory; name: string }[]
    items: Project[]
  }
  experience: {
    company: string
    position: string
    period: string
    responsibilities: string[]
  }[]
  awards: {
    title: string
    date: string
    description: string
    image: string
  }[]
  contact: {
    email: string
    phone: string
    xiaohongshu: string
    wechat: string
    wechatQr: string
  }
}
