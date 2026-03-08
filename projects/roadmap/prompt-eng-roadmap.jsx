import { useState } from "react";

const phases = [
  {
    id: 1,
    phase: "FOUNDATION",
    status: "IN PROGRESS",
    color: "#00FF94",
    darkColor: "#003D1F",
    timeline: "0–3 Months",
    icon: "◈",
    certs: [
      {
        name: "Vanderbilt University: Prompt Engineering Specialization",
        platform: "Coursera",
        cost: "~$49/mo",
        duration: "2–3 months",
        projects: [
          "ChatGPT prompt library for 5 industries",
          "AI-powered writing assistant system prompt",
          "Zero/few-shot task automation demos",
        ],
        skills: ["Zero-shot", "Few-shot", "Chain-of-thought", "Role prompting"],
        badge: "✓ ALREADY STARTED",
        link: "https://www.coursera.org/specializations/prompt-engineering",
        priority: "★★★★★",
      },
      {
        name: "Google: Prompt Design in Vertex AI",
        platform: "Google Cloud Skills Boost",
        cost: "Free",
        duration: "3–5 hours",
        projects: [
          "Vertex AI prompt gallery",
          "Multi-modal prompt experiments",
          "Google Cloud AI API integration demo",
        ],
        skills: ["Vertex AI", "PaLM API", "Gemini", "Multi-modal prompting"],
        badge: "FREE + BADGE",
        link: "https://www.cloudskillsboost.google",
        priority: "★★★★☆",
      },
    ],
  },
  {
    id: 2,
    phase: "TECHNICAL DEPTH",
    status: "NEXT UP",
    color: "#00C2FF",
    darkColor: "#001F33",
    timeline: "3–6 Months",
    icon: "⬡",
    certs: [
      {
        name: "DeepLearning.AI: ChatGPT Prompt Engineering for Developers",
        platform: "DeepLearning.AI",
        cost: "Free",
        duration: "1–2 weeks",
        projects: [
          "Customer service bot with system prompts",
          "Sentiment analysis pipeline",
          "Iterative prompt improvement framework",
        ],
        skills: ["OpenAI API", "Iterative prompting", "Output parsing", "Python"],
        badge: "FREE + CERTIFICATE",
        link: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
        priority: "★★★★★",
      },
      {
        name: "Microsoft: Azure AI Fundamentals (AI-900)",
        platform: "Microsoft Learn",
        cost: "$165 exam",
        duration: "4–6 weeks",
        projects: [
          "Azure OpenAI prompt flow dashboard",
          "Content safety filter system",
          "NLP pipeline with Azure Cognitive Services",
        ],
        skills: ["Azure OpenAI", "Responsible AI", "NLP concepts", "Enterprise AI"],
        badge: "OFFICIAL CERT",
        link: "https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/",
        priority: "★★★★★",
      },
      {
        name: "LangChain for LLM Application Development",
        platform: "DeepLearning.AI",
        cost: "Free",
        duration: "1–2 weeks",
        projects: [
          "RAG-powered document Q&A app",
          "Multi-step agent with tool use",
          "Memory-enabled chatbot",
        ],
        skills: ["LangChain", "RAG", "Agents", "Vector databases"],
        badge: "FREE + CERTIFICATE",
        link: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/",
        priority: "★★★★★",
      },
    ],
  },
  {
    id: 3,
    phase: "SPECIALIZATION",
    status: "BUILD ON",
    color: "#FF6B35",
    darkColor: "#2D1200",
    timeline: "6–9 Months",
    icon: "◆",
    certs: [
      {
        name: "AWS Certified AI Practitioner (AIF-C01)",
        platform: "AWS",
        cost: "$150 exam",
        duration: "6–8 weeks",
        projects: [
          "AWS Bedrock prompt engineering showcase",
          "SageMaker JumpStart fine-tuning demo",
          "Enterprise AI governance policy doc",
        ],
        skills: ["AWS Bedrock", "Claude on AWS", "SageMaker", "AI governance"],
        badge: "OFFICIAL CERT",
        link: "https://aws.amazon.com/certification/certified-ai-practitioner/",
        priority: "★★★★★",
      },
      {
        name: "Anthropic: Claude Prompt Engineering Course",
        platform: "Anthropic / Coursera",
        cost: "Free/~$49",
        duration: "2–4 weeks",
        projects: [
          "Constitutional AI prompt design",
          "Complex reasoning chain demos",
          "Enterprise system prompt templates",
        ],
        skills: ["Claude API", "Constitutional AI", "Advanced chaining", "Safety"],
        badge: "HIGH MARKET VALUE",
        link: "https://www.anthropic.com/",
        priority: "★★★★★",
      },
      {
        name: "DAIR.AI: Prompt Engineering Guide",
        platform: "Self-paced / GitHub",
        cost: "Free",
        duration: "2 weeks",
        projects: [
          "Technique comparison portfolio piece",
          "Jailbreak defense case study",
          "Published prompt engineering blog post",
        ],
        skills: ["ReAct", "Tree-of-Thought", "Active prompting", "Adversarial testing"],
        badge: "FREE + PORTFOLIO",
        link: "https://www.promptingguide.ai/",
        priority: "★★★★☆",
      },
    ],
  },
  {
    id: 4,
    phase: "MARKET READY",
    status: "CAPSTONE",
    color: "#FFD700",
    darkColor: "#2D2400",
    timeline: "9–12 Months",
    icon: "✦",
    certs: [
      {
        name: "IBM: AI Engineering Professional Certificate",
        platform: "Coursera",
        cost: "~$49/mo",
        duration: "3–4 months",
        projects: [
          "End-to-end LLM application deployment",
          "Fine-tuned model with custom prompts",
          "Capstone: Production AI solution",
        ],
        skills: ["MLOps", "Model fine-tuning", "AI APIs", "Production deployment"],
        badge: "PROFESSIONAL CERT",
        link: "https://www.coursera.org/professional-certificates/ai-engineer",
        priority: "★★★★★",
      },
      {
        name: "Build a Public Prompt Engineering Portfolio",
        platform: "GitHub + HuggingFace Spaces",
        cost: "Free",
        duration: "Ongoing",
        projects: [
          "10+ reusable prompt templates (GitHub repo)",
          "Live demo apps on HuggingFace Spaces",
          "Case studies: prompt vs. no-prompt comparisons",
          "Technical blog on Medium/Substack",
        ],
        skills: ["Portfolio curation", "Technical writing", "Open source", "Personal brand"],
        badge: "JOB-WINNING ASSET",
        link: "https://huggingface.co/spaces",
        priority: "★★★★★",
      },
    ],
  },
];

const portfolioTips = [
  { icon: "⬡", tip: "GitHub repo with 50+ documented prompt templates across industries" },
  { icon: "◈", tip: "Before/after prompt comparison showcasing measurable output quality gains" },
  { icon: "◆", tip: "Live HuggingFace Space or Streamlit app anyone can interact with" },
  { icon: "✦", tip: "Case study blog posts showing business problem → prompt solution" },
  { icon: "⬡", tip: "Benchmark results comparing GPT-4, Claude, Gemini on your prompts" },
  { icon: "◈", tip: "Adversarial prompt testing & safety documentation for enterprise roles" },
];

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(null);
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div style={{
      background: "#080B0F",
      minHeight: "100vh",
      fontFamily: "'Courier New', monospace",
      color: "#E8E8E8",
      padding: "0",
      overflowX: "hidden",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1A1A2E",
        padding: "40px 40px 30px",
        background: "linear-gradient(180deg, #0D1117 0%, #080B0F 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(0,255,148,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(0,194,255,0.04) 0%, transparent 60%)",
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <span style={{ color: "#00FF94", fontSize: "11px", letterSpacing: "4px", fontWeight: "bold" }}>CAREER ROADMAP</span>
            <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, #00FF94, transparent)" }} />
          </div>
          <h1 style={{
            fontSize: "clamp(24px, 4vw, 42px)",
            fontWeight: "900",
            margin: "0 0 8px",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            fontFamily: "'Georgia', serif",
          }}>
            AI Prompt Engineering<br />
            <span style={{ color: "#00FF94" }}>Certification Path</span>
          </h1>
          <p style={{ color: "#666", fontSize: "13px", margin: 0, letterSpacing: "1px" }}>
            IT SPECIALIST → PROMPT ENGINEER · 12-MONTH TRAJECTORY · PORTFOLIO-FIRST APPROACH
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "40px" }}>
        {phases.map((phase, pi) => (
          <div key={phase.id} style={{ marginBottom: "40px" }}>
            {/* Phase Header */}
            <div
              onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
              style={{
                display: "flex", alignItems: "center", gap: "16px",
                cursor: "pointer", marginBottom: "20px",
                padding: "16px 20px",
                border: `1px solid ${activePhase === phase.id ? phase.color : "#1A1A2E"}`,
                borderRadius: "4px",
                background: activePhase === phase.id ? phase.darkColor : "transparent",
                transition: "all 0.2s ease",
              }}
            >
              <span style={{ fontSize: "24px", color: phase.color }}>{phase.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "3px", color: phase.color, fontWeight: "bold" }}>
                    PHASE {phase.id}
                  </span>
                  <span style={{
                    fontSize: "10px", padding: "2px 8px", borderRadius: "2px",
                    background: phase.color + "22", color: phase.color, letterSpacing: "2px",
                  }}>
                    {phase.status}
                  </span>
                  <span style={{ fontSize: "10px", color: "#444", letterSpacing: "2px" }}>
                    {phase.timeline}
                  </span>
                </div>
                <h2 style={{ margin: "4px 0 0", fontSize: "18px", fontWeight: "900", letterSpacing: "2px", color: "#E8E8E8" }}>
                  {phase.phase}
                </h2>
              </div>
              <span style={{ color: "#444", fontSize: "18px", transition: "transform 0.2s", transform: activePhase === phase.id ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
            </div>

            {/* Certs Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "16px",
              paddingLeft: "20px",
            }}>
              {phase.certs.map((cert, ci) => {
                const certId = `${pi}-${ci}`;
                const isOpen = activeCert === certId;
                return (
                  <div
                    key={ci}
                    onClick={() => setActiveCert(isOpen ? null : certId)}
                    style={{
                      border: `1px solid ${isOpen ? phase.color : "#1A1A2E"}`,
                      borderRadius: "4px",
                      padding: "20px",
                      cursor: "pointer",
                      background: isOpen ? phase.darkColor : "#0D1117",
                      transition: "all 0.2s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Accent line */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, width: "3px", height: "100%",
                      background: phase.color,
                    }} />

                    <div style={{ paddingLeft: "8px" }}>
                      {/* Priority & Badge */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", gap: "8px" }}>
                        <span style={{ fontSize: "10px", color: phase.color, letterSpacing: "1px" }}>{cert.priority}</span>
                        <span style={{
                          fontSize: "9px", padding: "2px 6px", borderRadius: "2px",
                          background: phase.color + "33", color: phase.color,
                          letterSpacing: "1px", whiteSpace: "nowrap",
                        }}>{cert.badge}</span>
                      </div>

                      {/* Cert Name */}
                      <h3 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: "bold", lineHeight: 1.3, color: "#E8E8E8" }}>
                        {cert.name}
                      </h3>

                      {/* Meta */}
                      <div style={{ display: "flex", gap: "12px", fontSize: "11px", color: "#555", marginBottom: "12px", flexWrap: "wrap" }}>
                        <span>📍 {cert.platform}</span>
                        <span>💰 {cert.cost}</span>
                        <span>⏱ {cert.duration}</span>
                      </div>

                      {/* Skills tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: isOpen ? "16px" : "0" }}>
                        {cert.skills.map((s, i) => (
                          <span key={i} style={{
                            fontSize: "10px", padding: "2px 8px", borderRadius: "2px",
                            border: `1px solid ${phase.color}44`,
                            color: "#888", letterSpacing: "0.5px",
                          }}>{s}</span>
                        ))}
                      </div>

                      {/* Expanded: Projects */}
                      {isOpen && (
                        <div>
                          <div style={{ height: "1px", background: phase.color + "33", margin: "0 0 16px" }} />
                          <div style={{ fontSize: "10px", color: phase.color, letterSpacing: "2px", marginBottom: "10px" }}>
                            PORTFOLIO PROJECTS
                          </div>
                          {cert.projects.map((proj, i) => (
                            <div key={i} style={{
                              display: "flex", gap: "8px", marginBottom: "8px",
                              fontSize: "12px", color: "#AAA", lineHeight: 1.4,
                            }}>
                              <span style={{ color: phase.color, flexShrink: 0, marginTop: "2px" }}>▸</span>
                              {proj}
                            </div>
                          ))}
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            style={{
                              display: "inline-block",
                              marginTop: "12px",
                              fontSize: "11px",
                              color: phase.color,
                              textDecoration: "none",
                              letterSpacing: "1px",
                              border: `1px solid ${phase.color}`,
                              padding: "6px 14px",
                              borderRadius: "2px",
                            }}
                          >
                            VIEW COURSE →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connector line */}
            {pi < phases.length - 1 && (
              <div style={{ display: "flex", justifyContent: "center", margin: "20px 0 0" }}>
                <div style={{
                  width: "1px", height: "30px",
                  background: `linear-gradient(180deg, ${phase.color}88, ${phases[pi + 1].color}88)`,
                }} />
              </div>
            )}
          </div>
        ))}

        {/* Portfolio Tips Section */}
        <div style={{
          marginTop: "20px",
          border: "1px solid #1A1A2E",
          borderRadius: "4px",
          overflow: "hidden",
        }}>
          <div style={{
            padding: "16px 20px",
            background: "#0D1117",
            borderBottom: "1px solid #1A1A2E",
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{ color: "#FFD700", fontSize: "16px" }}>✦</span>
            <span style={{ fontSize: "11px", letterSpacing: "3px", color: "#FFD700", fontWeight: "bold" }}>
              PORTFOLIO POWER MOVES
            </span>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "0",
          }}>
            {portfolioTips.map((tip, i) => (
              <div key={i} style={{
                padding: "16px 20px",
                borderRight: i % 2 === 0 ? "1px solid #1A1A2E" : "none",
                borderBottom: "1px solid #1A1A2E",
                display: "flex", gap: "10px", alignItems: "flex-start",
              }}>
                <span style={{ color: "#FFD700", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>{tip.icon}</span>
                <span style={{ fontSize: "12px", color: "#888", lineHeight: 1.5 }}>{tip.tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Job Titles Footer */}
        <div style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #1A1A2E",
          borderRadius: "4px",
          background: "#0D1117",
        }}>
          <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#444", marginBottom: "12px" }}>
            TARGET ROLES AFTER COMPLETION
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              "AI Prompt Engineer", "LLM Application Developer", "AI Solutions Consultant",
              "Conversational AI Designer", "AI Product Specialist", "GenAI Engineer",
              "ML Ops Specialist", "AI Integration Architect",
            ].map((role, i) => {
              const colors = ["#00FF94", "#00C2FF", "#FF6B35", "#FFD700"];
              const c = colors[i % 4];
              return (
                <span key={i} style={{
                  fontSize: "11px", padding: "5px 12px",
                  border: `1px solid ${c}33`,
                  color: c, borderRadius: "2px",
                  letterSpacing: "0.5px",
                }}>{role}</span>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <div style={{ marginTop: "20px", fontSize: "11px", color: "#333", textAlign: "center", letterSpacing: "1px" }}>
          CLICK ANY PHASE OR CERT CARD TO EXPAND DETAILS · CLICK LINKS TO OPEN COURSES
        </div>
      </div>
    </div>
  );
}
