export const resumeData = {
  zh: {
    language: "中文",
    name: "邹成",
    avatarUrl: "./avatar.jpg",
    avatarLink: "https://vue-color-avatar.vercel.app/",
    currentStatus: "正在看机会",
    expectedJob: "高级前端开发工程师",
    yearsOfExperience: "8 年工作经验",
    introduction: "",
    currentCity: "武汉",
    expectedCity: "",
    education: [
      {
        name: "燕山大学",
        degree: "硕士",
        dateRange: "2013/09 ~ 2016/06",
        major: "机械电子工程",
        duration: "3年",
      },
      {
        name: "武昌首义学院",
        degree: "本科",
        dateRange: "2009/09 ~ 2013/06",
        major: "机械与自动化",
        duration: "4年",
      },
    ],
    phoneNumber: "18986101373",
    magicCode: "7777",
    email: "775106512@qq.com",
    skillTags: [
      // "Vue.js",
      // "Next.js",
      // "Node.js",
      // "Git",
      // "SCSS",
      // "微信小程序",
      // "Figma",
      // "Chrome扩展",
      // "Electron",
    ],
    skills: [
      "熟练掌握 HTML、CSS、JavaScript 等 web 前端基础知识",
      "熟练掌握 Vue 前端框架，了解框架原理",
      "熟练使用 Uni-app 开发微信小程序",
      "了解 React 框架开发模式, 有 React Native (含 Expo)开发经验",
      "熟练使用 SVG、Canvas 等绘图技术",
      "掌握不同场景前端技术方案选型方法",
      "有一定 Web 性能优化 & Web 安全优化经验",
    ],
    workedCompanies: [
      {
        name: "武汉旷视金智科技",
        link: "",
        dateRange: "2020/12 ~ 2026/01",
        dateRangeYears: "5 年",
        jobTitle: "高级前端开发工程师",
        tags: [],
        projects: [
          {
            duties: [
              `带领 4 名初、中级前端工程师完成"越影"数据标注平台的开发`,
              `个人独立完成"玲珑 AIoH"智能门锁小程序 & H5 页面的开发`,
              `参与"盘古"安防部署管理平台开发`,
              // `参与前端监控项目"MegGuard"的开发`,
            ],
          },
        ],
      },
      {
        name: "中通天鸿",
        dateRange: "2019/04 ~ 2020/12",
        dateRangeYears: "1.5 年",
        jobTitle: "前端开发工程师",
        tags: [],
        projects: [
          {
            duties: ["负责 工单 & IM 系统的开发", "负责 CRM 管理后台的开发"],
          },
        ],
      },
      {
        name: "深圳微易通网络科技",
        dateRange: "2017/10 ~ 2019/04",
        dateRangeYears: "1.5 年",
        jobTitle: "前端开发工程师",
        tags: [],
        projects: [
          {
            duties: [
              `参与"金民门"黄金交易 App 的开发`,
              `负责 "Wecheetah" 管理后台的开发`,
            ],
          },
        ],
      },
    ],
    projects: [
      {
        title: "越影标注平台",
        description:
          "供标准员进行数据标注的工具平台，得到的标注数据集用于 AI 模型训练。",
        dateRange: "",
        duties: [
          "包含属性、矩形框、多边形、视频关键帧、图片分割等数据标注",
          "使用 Vue 框架 element 组件库构建基础平台，集成标注工具库到基础平台",
          "标注工具库基于 Tow.js、SVG、Canvas 等库、技术实现",
        ],
      },
      {
        title: "玲珑 AIoH 小程序",
        description:
          "供购买智能门锁的用户使用，包含蓝牙添加设备、WIFI 配网、实时音视频、远程开门、商城微信支付、陌生人报警等功能",
        duties: [
          "小程序使用 Uni-app 框架 uni-ui 组件库构建，",
          `实时音视频通过小程序内集成"声网 SDK"实现，通过"声网云信令"与门锁硬件通信实现开流、关流通知`,
          "与硬件工程师协商 BLE(蓝牙低功耗) 协议进行门锁设备属性获取、WIFI 配网等通信",
          "通过 WebSocket 实时监听开门请求，用户授权开门后，等待开门结果回执并作出响应",
          "为避免频繁发布审核，商城、活动等迭代频繁页面使用 Webview 嵌套 H5 页面(Vue3 + vant)实现",
        ],
      },
      {
        title: "工单 & IM 系统",
        description: "供客服使用的工单管理平台与 IM 客诉处理平台",
        duties: [
          "使用 React 框架 antd-design 组件库构建",
          "使用 WebSocket 实现 IM 通信",
          "通过 react-virtual 优化较大数据量消息渲染卡顿",
          "支持 DND(拖放) 创建动态工单表单模板，基于 react-dnd 实现",
        ],
      },
      {
        title: `"金名门" App`,
        description:
          "供 C 端客户购买黄金和其他商品的 App，参与了 Android 分组的开发工作",
        duties: [
          "使用 React Native 框架，antd-design-mobile-rn 组件库构建",
          "使用 react-native-maps 展示当前物流信息",
          "使用 WebSocket 实现黄金买卖、存储等推送",
        ],
      },
    ],
    certificates: {
      items: ["英语6级", "英语4级"],
    },
    languages: {
      items: ["汉语（母语）", "英语"],
    },
    links: {
      items: [{ title: "GitHub", href: "https://github.com/woshiqiang1" }],
    },
    footer: "",
  },
  en: {
    language: "English",
    name: "John Doe",
    avatarUrl: "./avatar.jpg",
    avatarLink: "https://vue-color-avatar.vercel.app/",
    currentStatus: "Open to Work",
    expectedJob: "Senior Front-end Developer",
    yearsOfExperience: "4 Years of Experience",
    introduction:
      "Front-end developer with more than 5 years of experience working with JavaScript, HTML/CSS to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.",
    currentCity: "Shanghai/Remote",
    expectedCity: "",
    education: [
      {
        name: "Jinghai University",
        degree: "Master",
        dateRange: "09/2018 ~ 06/2020",
        major: "Computer Science",
        duration: "2 Years",
      },
      {
        name: "Jinghai University",
        degree: "Bachelor",
        dateRange: "09/2014 ~ 06/2018",
        major: "Computer Science",
        duration: "4 Years",
      },
    ],
    phoneNumber: "+1-2223****",
    magicCode: "4455",
    email: "johndoe@gmail.com",
    skillTags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Next.js",
      "Node.js",
      "Git",
      "SCSS",
      "Figma",
      "Electron",
    ],
    workedCompanies: [
      {
        name: "GOOGOO",
        type: "contract",
        link: "https://www.google.com/",
        dateRange: "01/2021 ~ 01/2024",
        dateRangeYears: "3 Years",
        jobTitle: "Senior Front-end Developer",
        tags: ["Next.js", "Vue.js"],
        projects: [
          {
            duties: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "PDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            ],
          },
        ],
      },
      {
        name: "FUUFUU",
        type: "part-time/remote",
        dateRange: "01/2020 ~ 01/2021",
        dateRangeYears: "1 Year",
        jobTitle: "Front-end Developer",
        projects: [
          {
            duties: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "PDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        title:
          '<a class="content-link" href="https://google.com" target="_blank">Lorem ipsum</a>',
        description: "",
        duties: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "PDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
      },
      {
        title: "Lorem ipsum",
        description:
          "Enim neque volutpat ac tincidunt vitae semper quis lectus.",
        duties: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "PDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
      },
    ],
    certificates: { items: [] },
    languages: {
      items: ["Chinese (Native)", "English (Professional working proficiency)"],
    },
    selefAssessment: {
      items: [],
    },
    links: {
      items: [
        { title: "Blog", href: "https://google.com" },
        { title: "Portfolio", href: "https://google.com" },
        { title: "GitHub", href: "https://github.com" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com",
        },
      ],
    },
    footer: "",
  },
};

export const linksMap = {
  "Lorem ipsum": "https://en.wikipedia.org/wiki/Lorem_ipsum",
};
