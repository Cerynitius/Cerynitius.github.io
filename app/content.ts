// ─────────────────────────────────────────────────────────────
// 所有站点内容都在这个文件里。改内容只需要改这里。
// All site content lives here. Edit this file only to change what the page says.
// ─────────────────────────────────────────────────────────────

export type Lang = "zh" | "en";
export type Bi = { zh: string; en: string };

export const OWNER = {
  name: "张睿修",
  nameEn: "Ruixiu Zhang",
  handle: "Cerynitius",
  art: "/athena.png",
  avatar: "/avatar.svg", // 换成真实头像 / replace with a real photo in public/
  siteRepo: "https://github.com/Cerynitius/Cerynitius.github.io",
  github: "https://github.com/Cerynitius",
  huggingface: "https://huggingface.co/Hippocrene",
  instagram: "https://www.instagram.com/cery.nitis/",
  instagramHandle: "cery.nitis",
  email: "ruixiu_zhang@outlook.com",
  wechat: "Zrx2028sdsz",
  location: { zh: "北京", en: "Beijing" } satisfies Bi,
};

export const ui = {
  zh: {
    nav: { about: "关于", research: "研究", projects: "项目", club: "炼丹社", contact: "联系" },
    langButton: "EN",
    langAria: "Switch to English",
    heroLabel: "CERYNITIUS — BEIJING, CN",
    heroTitle: ["Insight", "张睿修"],
    heroSub: "先看懂可解释性，再把推理压进一张卡。",
    heroText: "北京高中生。用操控向量把语言模型里的概念读出来，再用量化和单卡推理把它跑便宜。主理学生 AI 社团炼丹社。",
    heroButtons: { projects: "查看项目", contact: "联系我" },
    spec: {
      title: "SPEC SHEET",
      rows: [
        ["ROLE", "研究 / 工程"],
        ["FOCUS", "可解释性 · 多模态 · 3D 生成 · 推理优化"],
        ["SCHOOL", "SDSZ 国际部"],
        ["CLUB", "炼丹社 · 主理"],
        ["TRAIN", "PyTorch · Transformers · 原生 FP8 训练 · DPO · RAG"],
        ["SERVE", "vLLM · FreeToken 手搓适配 · Medusa · NVFP4 量化 · CUDA"],
        ["MODELS", "Qwen · GLM · DeepSeek · Llama"],
        ["AGENTS", "多智能体 · FSM · DAG 调度 · MCP · ComfyUI"],
        ["3D / MM", "3D Gaussian Splatting · 多模态 encoder 对齐"],
        ["WEB", "Next.js · Node.js · Django · FastAPI"],
        ["INFRA", "Proxmox / VFIO · Docker · Tailscale · Cloudflare Tunnel"],
        ["LANG", "Python · JavaScript · TypeScript"],
      ],
    },
    ticker: ["Interpretability", "Activation Steering", "Multimodal", "VLM", "3D Generation", "3D Gaussian Splatting", "World Models", "Inference Optimization", "vLLM", "Quantization"],
    aboutIndex: "01",
    aboutLabel: "ABOUT",
    aboutTitle: "想控制模型，不只是用它。",
    aboutTraits: "有工程能力 · 善于灵活变通 · 热爱挑战自我",
    aboutBlocks: [
      { label: "背景", text: "北京，高中生。跟随高校课题组做研究，做过算法实习，也给音乐公司做过歌词生成模型。" },
      { label: "社群", text: "发起并运营校内 AI 社团炼丹社，活跃成员 10+，持续做技术分享与协作。" },
      { label: "研究", text: "覆盖模型训练、Agent 系统、可解释性、多模态、3D 生成和表征分析。" },
      { label: "代码之外", text: "养近海原生系统，饲养过电鳐、猫鲨、鲷鱼、单棘鲀、石斑等。" },
    ],
    aboutClosing: "从独立开发到开源贡献，这些项目记录了我从应用层到研究层的完整路径。",
    stats: [
      { value: "96", unit: "GB", label: "自维护显存" },
      { value: "36.7", unit: "tok/s", label: "GLM-5.3-Flash · 单卡" },
      { value: "2", unit: "", label: "Hugging Face 模型" },
      { value: "3", unit: "", label: "运行中的服务" },
    ],
    researchIndex: "02",
    researchLabel: "RESEARCH",
    researchTitle: "研究方向",
    researchIntro: "四个方向：搞清楚模型内部发生了什么，让它看懂图像和 3D 世界，再用最少的算力把它跑起来。",
    projectsIndex: "03",
    projectsLabel: "PROJECTS",
    projectsTitle: "开源项目",
    viewRepo: "GitHub",
    viewModel: "Hugging Face",
    clubIndex: "04",
    clubLabel: "炼丹社 · Alchemy",
    clubTitle: ["学生社团，自己的显卡，", "免费给同学用。"],
    clubIntro: "炼丹社是 SDSZ 的学生 AI 社团。我们自己维护一张 RTX PRO 6000，算力有限，推理 API 内部邀请制使用。也做校园平台，接 AI 集成外包。",
    online: "ONLINE",
    inviteOnly: "INVITE ONLY",
    interviewLabel: "访谈 · 数字生命卡兹克",
    interviewTitle: "为让同学免费用AI，两个高中生……",
    interviewText: "两位 16 岁的高中生把自己的算力接入社团，只为让更多同学能免费用上 AI。",
    interviewDate: "2026.08.25 · BILIBILI",
    interviewCta: "观看视频",
    contactIndex: "05",
    contactLabel: "CONTACT",
    contactTitle: ["研究讨论、算力合作、", "项目合作，都欢迎。"],
    contactItems: { email: "EMAIL", github: "GITHUB", hf: "HUGGING FACE", instagram: "INSTAGRAM", wechat: "WECHAT", location: "LOCATION" },
    footerBuilt: "BUILT WITH NEXT.JS · DEPLOYED ON GITHUB PAGES",
    friendLinks: "FRIENDS",
    copyright: "© 2026 张睿修 · Cerynitius",
    backTop: "TOP ↑",
  },
  en: {
    nav: { about: "About", research: "Research", projects: "Projects", club: "Club", contact: "Contact" },
    langButton: "中",
    langAria: "切换到中文",
    heroLabel: "CERYNITIUS — BEIJING, CN",
    heroTitle: ["Insight", "Ruixiu Zhang"],
    heroSub: "Interpretability up front, inference on one card.",
    heroText: "Beijing high-schooler. I read concepts out of language models with steering vectors, then make them cheap to serve with quantization and single-GPU inference. I run our student AI club, Alchemy.",
    heroButtons: { projects: "Projects", contact: "Contact" },
    spec: {
      title: "SPEC SHEET",
      rows: [
        ["ROLE", "Research / Engineering"],
        ["FOCUS", "Interpretability · Multimodal · 3D Gen · Inference"],
        ["SCHOOL", "SDSZ International"],
        ["CLUB", "Alchemy · Lead"],
        ["TRAIN", "PyTorch · Transformers · native FP8 training · DPO · RAG"],
        ["SERVE", "vLLM · FreeToken hand-rolled support · Medusa · NVFP4 quant · CUDA"],
        ["MODELS", "Qwen · GLM · DeepSeek · Llama"],
        ["AGENTS", "Multi-agent · FSM · DAG scheduling · MCP · ComfyUI"],
        ["3D / MM", "3D Gaussian Splatting · Multimodal encoder alignment"],
        ["WEB", "Next.js · Node.js · Django · FastAPI"],
        ["INFRA", "Proxmox / VFIO · Docker · Tailscale · Cloudflare Tunnel"],
        ["LANG", "Python · JavaScript · TypeScript"],
      ],
    },
    ticker: ["Interpretability", "Activation Steering", "Multimodal", "VLM", "3D Generation", "3D Gaussian Splatting", "World Models", "Inference Optimization", "vLLM", "Quantization"],
    aboutIndex: "01",
    aboutLabel: "ABOUT",
    aboutTitle: "I want to control the model, not just use it.",
    aboutTraits: "ENGINEERING · ADAPTABLE · LIKES A HARD PROBLEM",
    aboutBlocks: [
      { label: "Background", text: "Beijing, high school. Research with a university lab group, an algorithm internship, and lyric generation models for a music company." },
      { label: "Community", text: "Founded and run Alchemy, the school AI club. 10+ active members, ongoing tech sharing and collaboration." },
      { label: "Research", text: "Model training, agent systems, interpretability, multimodal, 3D generation and representation analysis." },
      { label: "Off the keyboard", text: "A native coastal marine tank. Have kept electric rays, catsharks, sea bream, filefish and grouper." },
    ],
    aboutClosing: "From solo builds to open-source contributions, these projects trace a path from the application layer down to research.",
    stats: [
      { value: "96", unit: "GB", label: "VRAM, self-hosted" },
      { value: "36.7", unit: "tok/s", label: "GLM-5.3-Flash · one card" },
      { value: "2", unit: "", label: "Models on Hugging Face" },
      { value: "3", unit: "", label: "Running services" },
    ],
    researchIndex: "02",
    researchLabel: "RESEARCH",
    researchTitle: "Research",
    researchIntro: "Four directions: understand what happens inside a model, let it see images and 3D worlds, then run it with as little compute as possible.",
    projectsIndex: "03",
    projectsLabel: "PROJECTS",
    projectsTitle: "Open Source",
    viewRepo: "GitHub",
    viewModel: "Hugging Face",
    clubIndex: "04",
    clubLabel: "Alchemy",
    clubTitle: ["A student club. Our own GPU.", "Free for classmates."],
    clubIntro: "Alchemy is the student AI club at SDSZ. We run our own RTX PRO 6000. Compute is limited, so the inference API is internal and invite-only. We also build campus platforms and take on AI integration work.",
    online: "ONLINE",
    inviteOnly: "INVITE ONLY",
    interviewLabel: "INTERVIEW · 数字生命卡兹克",
    interviewTitle: "Two high-schoolers, free AI for their classmates",
    interviewText: "Two 16-year-olds plugged their own compute into a student club so more classmates could use AI for free.",
    interviewDate: "2026.08.25 · BILIBILI",
    interviewCta: "Watch",
    contactIndex: "05",
    contactLabel: "CONTACT",
    contactTitle: ["Research, compute,", "or a project. Say hi."],
    contactItems: { email: "EMAIL", github: "GITHUB", hf: "HUGGING FACE", instagram: "INSTAGRAM", wechat: "WECHAT", location: "LOCATION" },
    footerBuilt: "BUILT WITH NEXT.JS · DEPLOYED ON GITHUB PAGES",
    friendLinks: "FRIENDS",
    copyright: "© 2026 张睿修 · Cerynitius",
    backTop: "TOP ↑",
  },
} as const;

export type Research = { id: string; title: Bi; text: Bi; tags: string[]; status: Bi; href?: string };

export const research: Research[] = [
  {
    id: "01",
    title: { zh: "LLM 可解释性", en: "LLM Interpretability" },
    text: {
      zh: "用操控向量研究抽象方向和高维方向如何分离，以及如何解释它们所编码的概念。",
      en: "Using steering vectors to study how abstract and high-dimensional directions separate, and how to explain the concepts they encode.",
    },
    tags: ["Interpretability", "Activation Steering", "ITI"],
    status: { zh: "论文投稿中", en: "Paper under review" },
  },
  {
    id: "02",
    title: { zh: "多模态与动态特征扩展", en: "Multimodal and Dynamic Feature Expansion" },
    text: {
      zh: "以 Qwen2.5-VL-7B 为骨干做动态特征扩展（DFE），研究输入分辨率对 3D 凹凸拓扑细节识别的影响。",
      en: "Dynamic Feature Expansion (DFE) on a Qwen2.5-VL-7B backbone, studying how input resolution affects recognition of 3D relief and topological detail.",
    },
    tags: ["VLM", "Qwen2.5-VL", "Multimodal"],
    status: { zh: "进行中", en: "In progress" },
  },
  {
    id: "03",
    title: { zh: "3D 生成与世界模型", en: "3D Generation and World Models" },
    text: {
      zh: "基于 3D Gaussian Splatting 的程序化无限环境，对比流式视频世界模型与持久化 3DGS 架构，长期目标是开放世界游戏。",
      en: "Procedurally generated infinite environments on 3D Gaussian Splatting, comparing streaming video world models against persistent 3DGS, toward an open-world game.",
    },
    tags: ["3DGS", "World Models", "Procedural"],
    status: { zh: "进行中", en: "In progress" },
    href: "https://github.com/Cerynitius/endless-labyrinth",
  },
  {
    id: "04",
    title: { zh: "推理优化", en: "Inference Optimization" },
    text: {
      zh: "单张 RTX PRO 6000 上的大模型推理：offload 性能补丁、量化敏感性、vLLM 服务化。GLM-5.3-Flash 从 17.8 提到 36.7 tok/s。",
      en: "Large-model inference on a single RTX PRO 6000: offload performance patches, quantization sensitivity and vLLM serving. GLM-5.3-Flash from 17.8 to 36.7 tok/s.",
    },
    tags: ["vLLM", "Quantization", "Offload"],
    status: { zh: "持续", en: "Ongoing" },
    href: "https://github.com/Cerynitius/freetoken-ox-boost",
  },
  {
    id: "05",
    title: { zh: "循环 Transformer", en: "Recurrent Transformers" },
    text: {
      zh: "训练 51M 的序列循环 Transformer-XL 变体和 110M 的 Universal Transformer + ACT，研究深度循环与序列循环的权衡，以及外部记忆能否移动算力质量的 Pareto 前沿。",
      en: "Trained a 51M sequence-recurrent Transformer-XL variant and a 110M Universal Transformer with ACT. Depth versus sequence recurrence, and whether external memory can move the compute-quality Pareto frontier.",
    },
    tags: ["Universal Transformer", "ACT", "Memory"],
    status: { zh: "模型已发布", en: "Models released" },
    href: "https://huggingface.co/Hippocrene/recurrent-transformer-0.1b-e0.4b",
  },
];

export type Project = {
  id: string;
  slug: string;
  name: string;
  text: Bi;
  stack: string[];
  href: string;
  kind?: "repo" | "model";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "freetoken-ox-boost",
    name: "freetoken-ox-boost",
    text: {
      zh: "FreeToken v0.1.2 的 GLM-5.3-Flash 适配与 offload 性能补丁。单张 RTX PRO 6000 上 17.8 → 36.7 tok/s。",
      en: "GLM-5.3-Flash adaptation and offload performance patches for FreeToken v0.1.2. 17.8 → 36.7 tok/s on a single RTX PRO 6000.",
    },
    stack: ["Python", "vLLM", "CUDA", "Offload"],
    href: "https://github.com/Cerynitius/freetoken-ox-boost",
  },
  {
    id: "02",
    slug: "endless-labyrinth",
    name: "endless-labyrinth",
    text: {
      zh: "基于 3D Gaussian Splatting 的程序化无限环境 demo。长期目标是一个开放世界游戏。",
      en: "A procedurally generated infinite environment built on 3D Gaussian Splatting. Long-term goal: an open-world game.",
    },
    stack: ["3DGS", "World Model", "WebGL", "Procedural"],
    href: "https://github.com/Cerynitius/endless-labyrinth",
  },
  {
    id: "03",
    slug: "recurrent-transformer",
    name: "recurrent-transformer-0.1b",
    text: {
      zh: "110M 参数的 Universal Transformer + ACT 模型，发布在 Hugging Face。",
      en: "A 110M-parameter Universal Transformer with ACT, released on Hugging Face.",
    },
    stack: ["PyTorch", "ACT", "Hugging Face"],
    href: "https://huggingface.co/Hippocrene/recurrent-transformer-0.1b-e0.4b",
    kind: "model",
  },
  {
    id: "04",
    slug: "tree-of-thought",
    name: "Tree_Of_Thought",
    text: {
      zh: "Tree of Thoughts 推理范式的实现与实验。",
      en: "An implementation of, and experiments on, the Tree of Thoughts reasoning paradigm.",
    },
    stack: ["Python", "LLM", "Search"],
    href: "https://github.com/Cerynitius/Tree_Of_Thought",
  },
  {
    id: "05",
    slug: "agent-team",
    name: "agent_team",
    text: {
      zh: "目标是实现基本功能的简约 multi-agent team。",
      en: "A minimal multi-agent team aimed at getting the basics working.",
    },
    stack: ["Python", "Multi-agent", "Orchestration"],
    href: "https://github.com/Cerynitius/agent_team",
  },
  {
    id: "06",
    slug: "minillm",
    name: "MiniLLM-0.1B",
    text: {
      zh: "从零训练的 0.1B 参数小语言模型。",
      en: "A 0.1B-parameter language model trained from scratch.",
    },
    stack: ["PyTorch", "Pretraining", "Hugging Face"],
    href: "https://huggingface.co/Hippocrene/MiniLLM-0.1B",
    kind: "model",
  },
];

export type Service = { name: Bi; url: string; href?: string; text: Bi; tags: string[]; inviteOnly?: boolean };

export const interview = {
  href: "https://www.bilibili.com/video/BV12hhG6bEJw/",
  channel: "数字生命卡兹克",
};

export const services: Service[] = [
  {
    name: { zh: "炼丹社 FreeAPI", en: "Alchemy FreeAPI" },
    url: "internal",
    text: {
      zh: "免费的 GPU 推理 API。算力有限，内部邀请制使用。开放无限制版权重推理，赋能网安测试。",
      en: "A free GPU inference API. Compute is limited, so access is internal and invite-only. Serves unrestricted-weight inference to support cybersecurity testing.",
    },
    tags: ["vLLM", "OpenAI-compatible", "Invite only"],
    inviteOnly: true,
  },
  {
    name: { zh: "SDSZ 校园社区", en: "SDSZ Campus Community" },
    url: "sdsz.groovin.cn",
    href: "https://sdsz.groovin.cn",
    text: { zh: "面向 SDSZ 学生的校园社区平台。由 Alumin-Hydro 独立维护。", en: "A campus community platform for SDSZ students. Maintained solely by Alumin-Hydro." },
    tags: ["Next.js", "Prisma", "Community"],
  },
];

export const friendLinks = [
  { name: "Groovin", href: "https://groovin.cn" },
  { name: "Alumin-Hydro", href: "https://github.com/Alumin-Hydro" },
  { name: "水澄Mizu", href: "https://mizusumi.com" },
  { name: "ChromiteCr", href: "https://github.com/ChromiteCr" },
];
