import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Icon({ name, className = "" }) {
  const common = {
    className,
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    close: <svg {...common}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>,
    arrow: <svg {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
    mail: <svg {...common}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></svg>,
    phone: <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.16a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" /></svg>,
    download: <svg {...common}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M7 10l5 5 5-5" /><path d="M12 15V3" /></svg>,
    external: <svg {...common}><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>,
  };

  return icons[name] || icons.arrow;
}

const CONTACT = {
  name: "陈欢怡",
  email: "hyyy723@163.com",
  phone: "13629297168",
  target: "AI 产品经理 / AIGC 产品经理 / 大模型应用产品经理",
  status: "2026 届校招生",
};

const tags = ["产品设计", "用户场景", "数据分析", "原型验证", "项目落地", "智能应用"]; 

const skills = [
  { title: "AI 产品能力", items: ["RAG 知识库问答", "Prompt 设计与优化", "意图识别", "问题改写", "badcase 分析", "澄清追问", "人工兜底机制", "Agent / Workflow 编排"] },
  { title: "产品设计能力", items: ["用户场景分析", "需求拆解", "产品流程设计", "PRD 撰写", "原型设计", "用户体验优化", "MVP 验证"] },
  { title: "数据分析能力", items: ["SQL", "Python", "指标体系拆解", "数据清洗", "特征工程", "模型评估", "A/B Test 理解"] },
  { title: "AI 技术理解能力", items: ["深度学习基础", "PyTorch", "LoRA", "SFT", "DPO", "RAG", "多模态生成", "计算机视觉", "模型评估指标"] },
  { title: "工具落地能力", items: ["Figma", "Axure", "墨刀", "Coze Workflow", "Cursor", "Claude", "DeepSeek", "Llama-Factory", "LangChain", "Node.js / Express"] },
];

const projectCategories = ["全部", "AI 产品", "大模型应用", "Vibe Coding", "数据建模", "深度学习"];

const projects = [
  {
    id: "ootd",
    title: "个性化 AI 穿搭推荐助手",
    type: "AI 应用 / Vibe Coding / 微信小程序",
    time: "2026.03 - 2026.04",
    role: "产品设计 / 原型设计 / Vibe Coding / 工作流编排 / 前后端联调",
    tags: ["AI 产品", "大模型应用", "Vibe Coding"],
    tools: ["Figma", "Claude", "Cursor", "Coze Workflow", "Node.js", "微信小程序"],
    value: "从用户穿搭决策场景出发，结合实时天气与用户画像，生成个性化 OOTD 推荐，验证大模型 + 工作流编排在生活决策类 AI 应用中的产品化路径。",
    highlights: ["设计“信息采集 - 天气获取 - 穿搭建议生成 - 图片化展示”的核心链路", "完成首页、首次引导页、个人信息页和 OOTD 推荐弹窗等关键模块设计", "使用 Figma 垫图明确页面结构和交互逻辑，并用 Vibe Coding 快速生成可交互原型", "基于 Coze Workflow 搭建天气查询、穿搭建议生成、文生图 Prompt 生成与批量出图能力", "通过 Node.js / Express 封装 API，完成前后端联调，形成完整 Demo"],
    metrics: ["完成核心使用链路", "支持近 7 日天气展示", "支持 OOTD 推荐弹窗与图片轮播", "实现城市更新后天气自动刷新", "完成骨架屏加载体验"],
  },
  {
    id: "rag",
    title: "企业内部 AI 智能问答助手",
    type: "RAG / Prompt / 企业知识库问答",
    time: "2024.12 - 2025.02",
    role: "AI 应用开发实习生 / 产品设计 / Prompt 优化 / 效果评估",
    tags: ["AI 产品", "大模型应用"],
    tools: ["RAG", "LangChain", "LlamaIndex", "Prompt", "badcase", "QA 语料"],
    value: "面向广告运营团队，优化企业内部知识问答体验，支持业务问题高效解答，提升回答准确性、连贯性和可用性。",
    highlights: ["调研 LangChain、LlamaIndex 等 RAG 开源框架", "协助制定数据标注方案，明确语料来源、应用场景和标注格式", "使用大模型 + Prompt 挖掘 2000+ QA 对语料", "优化意图识别与问题改写两类 Prompt 模板", "收集并分类分析 100+ badcase", "参与设计澄清交互与人工兜底机制，将人工处理问题回流知识库，形成优化闭环"],
    metrics: ["2000+ QA 对语料", "100+ badcase 分析", "意图识别准确率 84%", "BLEU 得分 0.81", "上下文一致性率 75%"],
  },
  {
    id: "deepseek",
    title: "DeepSeek CV 领域专业微调",
    type: "大模型微调 / 个人项目",
    time: "2026.01 - 2026.02",
    role: "数据构建 / SFT-LoRA 训练 / DPO 数据构建 / 效果评估",
    tags: ["大模型应用", "深度学习"],
    tools: ["DeepSeek", "LoRA", "DPO", "Llama-Factory", "LangChain Agent", "MinerU"],
    value: "围绕 CV 专业问答场景，构建数据集并完成 SFT-LoRA 与 DPO 微调，提升模型在算法解析、实验方案设计和参数调优问题上的回答质量。",
    highlights: ["使用 MinerU 将 CV 专著、论文和实验案例报告转化为 md 文档", "基于 LangChain 构建数据提取 Agent，完成文本切分、问答对提取、检查增强和格式转换", "使用 Llama-Factory 基于 LoRA 算法完成有监督微调", "基于 LoRA 模型在验证试题上的回答构建 DPO 数据集", "强化正确答案的算法推导完整性、实验步骤规范性和专业表达"],
    metrics: ["微调后正确率高于原模型 9%", "回答完整率 94.15%", "CV 算法问题规范回答率 68.42%", "原模型规范回答率 53.2%"],
  },
  {
    id: "flight",
    title: "舰载机着舰轨迹预测系统研发",
    type: "企业委托课题 / 时序预测 / 数据建模",
    time: "2024.03 - 2024.10",
    role: "特征筛选 / GRU 建模 / 卡尔曼滤波修正 / 效果验证",
    tags: ["数据建模", "深度学习"],
    tools: ["LASSO", "GRU", "卡尔曼滤波", "多源传感器数据"],
    value: "针对舰载机着舰场景下物理模型精度不足与深度学习实时性难以兼顾的矛盾，设计兼顾高精度与低延迟的预测方案。",
    highlights: ["使用 LASSO 等正则化方法进行关键特征筛选", "构建 GRU 时序网络捕捉非线性动态特征", "引入卡尔曼滤波进行状态后验修正，抑制噪声与累计误差"],
    metrics: ["两型号实飞数据集验证", "预测误差 MAE < 0.5", "满足甲方精度要求"],
  },
  {
    id: "remote",
    title: "遥感图像全色锐化研究",
    type: "研究生毕业课题 / 深度学习 / 计算机视觉",
    time: "研究生毕业课题",
    role: "模型设计 / 网络改进 / 实验验证 / 指标评估",
    tags: ["深度学习", "数据建模"],
    tools: ["PyTorch", "注意力机制", "多尺度特征融合", "PSNR", "SSIM"],
    value: "围绕遥感图像融合中空间分辨率提升和光谱信息保持之间的矛盾，设计注意力机制与频域感知模块，提升遥感图像融合质量。",
    highlights: ["基于 PyTorch 搭建模型网络框架", "设计交叉注意力 + 动态加权上采样模块", "针对 MQ-Net 引入频域感知模块", "在多个数据集上开展定量、定性和消融实验"],
    metrics: ["多个基线模型性能提升", "使用 PSNR、SSIM 等指标评估", "验证模块在细节恢复和抑制光谱失真方面有效"],
  },
];

function Button({ children, onClick, variant = "primary", className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
        variant === "primary" && "bg-neutral-950 text-white hover:bg-neutral-800",
        variant === "secondary" && "border border-neutral-300 text-neutral-900 hover:border-neutral-950",
        variant === "text" && "text-neutral-600 hover:text-neutral-950",
        className
      )}
    >
      {children}
    </button>
  );
}

function Chip({ children }) {
  return <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">{children}</span>;
}

function SectionTitle({ label, title, desc }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-400">{label}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">{title}</h2>
      {desc && <p className="mt-3 max-w-2xl leading-7 text-neutral-600">{desc}</p>}
    </div>
  );
}

function Modal({ open, title, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/25 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-neutral-200 bg-[#fbfaf7] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
              <p className="text-sm font-medium text-neutral-500">{title}</p>
              <button type="button" onClick={onClose} className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950" aria-label="关闭">
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[76vh] overflow-y-auto px-6 py-7 md:px-8">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AboutContent() {
  return (
    <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
      <div>
        <SectionTitle label="About" title="关于我" desc="我是一名 2026 届校招生，具备产品设计、数据分析和智能应用项目实践经验。相比单纯罗列功能，我更关注从真实用户问题出发，拆解场景、设计流程，并通过原型和数据反馈验证方案是否可用。" />
        <div className="flex flex-wrap gap-2">
          {["产品设计", "用户场景拆解", "数据分析", "原型验证", "项目落地"].map((tag) => <Chip key={tag}>{tag}</Chip>)}
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-neutral-950">教育背景</h3>
          <div className="mt-4 space-y-4 text-sm leading-7 text-neutral-600">
            <p><span className="font-medium text-neutral-950">西北大学</span>｜硕士｜应用统计，方向深度学习<br />GPA 3.89/4，排名 1/64｜2023.09 - 2026.06</p>
            <p><span className="font-medium text-neutral-950">山西财经大学</span>｜本科｜经济统计学｜2018.09 - 2022.06</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-950">个人优势</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">
            <li><span className="font-medium text-neutral-950">数据能力：</span>熟练掌握 SQL、Python 进行数据处理与分析，擅长拆解业务指标体系，通过数据分析驱动产品迭代与优化。</li>
            <li><span className="font-medium text-neutral-950">AI 能力：</span>有 AIGC 和 AI 产品经验，熟悉大模型在知识库问答、RAG、多模态内容生成等场景中的应用，具备 Prompt 优化、效果评估、业务流程设计及落地推进经验。能够围绕实际业务需求，推动 AI 能力在产品中的接入、优化与应用闭环建设。</li>
            <li><span className="font-medium text-neutral-950">专业能力：</span>精通 Axure、墨刀等原型工具，能快速输出高保真产品原型；熟练掌握 Coze 等平台使用，通过低代码业务编排、Vibe Coding 快速实现 Demo 制作与方案验证；熟练运用 Visio、XMind 等软件，可规范输出 PRD、流程图等产品交付文档。</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-950">求职方向</h3>
          <div className="mt-4 flex flex-wrap gap-2">{["AI 产品经理", "AIGC 产品经理", "大模型应用产品经理", "Agent 产品", "数据产品经理"].map((item) => <Chip key={item}>{item}</Chip>)}</div>
        </div>
      </div>
    </div>
  );
}

function SkillsContent() {
  return (
    <div>
      <SectionTitle label="Skills" title="能力体系" />
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.title} className="border-t border-neutral-200 pt-5">
            <h3 className="text-lg font-semibold text-neutral-950">{skill.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{skill.items.map((item) => <Chip key={item}>{item}</Chip>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkContent() {
  const [category, setCategory] = useState("全部");
  const [selected, setSelected] = useState(null);
  const filteredProjects = useMemo(() => category === "全部" ? projects : projects.filter((project) => project.tags.includes(category)), [category]);

  if (selected) {
    return (
      <div>
        <button type="button" onClick={() => setSelected(null)} className="mb-8 text-sm text-neutral-500 hover:text-neutral-950">← 返回项目列表</button>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-400">{selected.time}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">{selected.title}</h2>
            <p className="mt-4 leading-7 text-neutral-600">{selected.value}</p>
            <p className="mt-5 text-sm text-neutral-500">我的角色：{selected.role}</p>
            <div className="mt-5 flex flex-wrap gap-2">{[...selected.tags, ...selected.tools].map((item) => <Chip key={item}>{item}</Chip>)}</div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-950">我的具体工作</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">{selected.highlights.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-950">项目成果</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">{selected.metrics.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle label="Work" title="项目作品" />
      <div className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map((item) => (
          <button key={item} type="button" onClick={() => setCategory(item)} className={cn("rounded-full px-3 py-1 text-sm transition", category === item ? "bg-neutral-950 text-white" : "border border-neutral-200 text-neutral-600 hover:border-neutral-950 hover:text-neutral-950")}>{item}</button>
        ))}
      </div>
      <div className="divide-y divide-neutral-200">
        {filteredProjects.map((project) => (
          <button key={project.id} type="button" onClick={() => setSelected(project)} className="group grid w-full gap-4 py-6 text-left transition md:grid-cols-[0.9fr_1.3fr_auto] md:items-start">
            <div>
              <p className="text-sm text-neutral-400">{project.time}</p>
              <h3 className="mt-1 text-xl font-semibold text-neutral-950 group-hover:underline">{project.title}</h3>
            </div>
            <p className="text-sm leading-7 text-neutral-600">{project.value}</p>
            <Icon name="arrow" className="hidden h-5 w-5 text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950 md:block" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ContactContent() {
  const [copied, setCopied] = useState("");
  const copyText = async (text, type) => {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else {
        const input = document.createElement("textarea");
        input.value = text;
        input.style.position = "absolute";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(type);
      setTimeout(() => setCopied(""), 1500);
    } catch {
      setCopied("");
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
      <div>
        <SectionTitle label="Contact" title="欢迎联系我" desc="如果你正在寻找一名具备 AI 产品实践、数据建模背景和快速 Demo 落地能力的校招生候选人，欢迎与我联系。" />
      </div>
      <div className="space-y-6 text-sm leading-7 text-neutral-600">
        <div>
          <p className="font-medium text-neutral-950">{CONTACT.name}｜{CONTACT.status}</p>
          <p>{CONTACT.target}</p>
        </div>
        <div className="space-y-3">
          <button type="button" onClick={() => copyText(CONTACT.email, "email")} className="flex items-center gap-3 text-neutral-700 hover:text-neutral-950">
            <Icon name="mail" className="h-4 w-4" /> {CONTACT.email} {copied === "email" ? "✓" : ""}
          </button>
          <button type="button" onClick={() => copyText(CONTACT.phone, "phone")} className="flex items-center gap-3 text-neutral-700 hover:text-neutral-950">
            <Icon name="phone" className="h-4 w-4" /> {CONTACT.phone} {copied === "phone" ? "✓" : ""}
          </button>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button><Icon name="download" className="h-4 w-4" /> 下载 PDF 简历</Button>
          <Button variant="secondary"><Icon name="external" className="h-4 w-4" /> 项目文档</Button>
          <Button variant="secondary"><Icon name="external" className="h-4 w-4" /> Demo 链接</Button>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioWebsite() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (key) => setActiveModal(key);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-neutral-950">
      <header className="mx-auto h-12 max-w-6xl px-5 py-7" />

      <main className="mx-auto flex min-h-[calc(100vh-150px)] max-w-6xl items-center px-5 py-16">
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-5xl">
          <p className="text-sm tracking-wide text-[#c96a2b]">AI 产品经理</p>
          <h1 className="mt-6 text-6xl font-semibold leading-none tracking-tight text-neutral-950 md:text-8xl">
            Chenhuanyi
          </h1>
          <p className="mt-10 max-w-5xl text-2xl leading-[1.45] text-neutral-700 md:text-4xl">
            正在把 AI 从“看起来很厉害”，变成“用起来真方便”
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-500">
            喜欢把 AI 技术里的“哇”，变成产品里的“好用”
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button onClick={() => openModal("about")}>About</Button>
            <Button variant="secondary" onClick={() => openModal("work")}>Work <Icon name="arrow" className="h-4 w-4" /></Button>
            <Button variant="text" onClick={() => openModal("skills")}>Skills</Button>
            <Button variant="text" onClick={() => openModal("contact")}>Contact</Button>
          </div>
        </motion.section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 pb-7 text-xs text-neutral-400">
        © 2026 Chenhuanyi
      </footer>

      <Modal open={activeModal === "about"} title="About" onClose={closeModal}><AboutContent /></Modal>
      <Modal open={activeModal === "skills"} title="Skills" onClose={closeModal}><SkillsContent /></Modal>
      <Modal open={activeModal === "work"} title="Work" onClose={closeModal}><WorkContent /></Modal>
      <Modal open={activeModal === "contact"} title="Contact" onClose={closeModal}><ContactContent /></Modal>
    </div>
  );
}
