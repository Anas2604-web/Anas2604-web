<div align="center">

<!-- ══════════════════════ BANNER ══════════════════════ -->

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:0a3d6b,100:00d4ff&height=200&section=header&text=Anas%20Khan&fontSize=70&fontColor=ffffff&fontAlignY=38&desc=AI%20Engineer%20%C2%B7%20Full%20Stack%20Developer%20%C2%B7%20Agentic%20RAG%20Systems&descAlignY=58&descSize=18&descColor=a0c4d8&animation=fadeIn"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&pause=1000&color=00D4FF&center=true&vCenter=true&width=750&lines=Agentic+RAG+%7C+LangGraph+%7C+Vector+DBs+%F0%9F%A4%96;Java+%7C+Spring+Boot+%7C+Python+%7C+FastAPI;React.js+%7C+Next.js+%7C+Node.js+%F0%9F%9A%80;250%2B+DSA+Problems+%7C+Production+SaaS+on+AWS;Final+Year+CS+%40+GGITS+Jabalpur+%F0%9F%87%AE%F0%9F%87%B3" alt="Typing SVG" />

<br/><br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anas-khan-47485224a)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:annaasskhan6@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/Anas_2604)
[![AskAnas](https://img.shields.io/badge/Talk_to_my_AI_Agent-00D4FF?style=for-the-badge&logo=vercel&logoColor=black)](https://askanas.vercel.app)

<br/>

![Profile Views](https://komarev.com/ghpvc/?username=Anas2604-web&style=flat-square&color=00D4FF&label=Profile+Views)

</div>

---

<div align="center">

## 👨‍💻 About Me

</div>

```python
class AnasKhan:
    def __init__(self):
        self.name = "Anas Khan"
        self.location = "Jabalpur, Madhya Pradesh, India 🇮🇳"
        self.education = "B.Tech CS @ GGITS (2022–2026)"
        self.dsa_problems = 250  # LeetCode, and counting
        self.open_to_work = True

        self.focus = [
            "Agentic RAG systems — LangGraph ReAct agents, vector retrieval",
            "Full stack SaaS — Java Spring Boot / Node.js + React/Next.js",
            "Production infra — AWS EC2, Docker, real deployments, real users",
        ]

    def motto(self):
        return "Build agentic systems that ship, not notebooks that don't. 🚀"
```

> 🤖 **Don't just read about my work — ask my AI agent about it.**
> [**askanas.vercel.app**](https://askanas.vercel.app) is a live LangGraph agent, grounded in my real project docs via Qdrant, with LLM-as-judge guardrails and full LangSmith tracing. Ask it anything — "what's his best project," "why fastembed over PyTorch," "is he ready for an AI engineer role." It answers honestly, cites its sources, and refuses to make things up.

---

## 🛠️ Tech Stack

### AI / Agentic Systems
<p align="center">
<img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white"/>
<img src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white"/>
<img src="https://img.shields.io/badge/Qdrant-DC244C?style=for-the-badge&logo=qdrant&logoColor=white"/>
<img src="https://img.shields.io/badge/Pinecone-000000?style=for-the-badge&logo=pinecone&logoColor=white"/>
<img src="https://img.shields.io/badge/Groq-F55036?style=for-the-badge&logo=groq&logoColor=white"/>
<img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black"/>
<img src="https://img.shields.io/badge/LangSmith-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white"/>
</p>

### Languages
<p align="center">
<img src="https://skillicons.dev/icons?i=python,java,js,ts,cpp&theme=dark" />
</p>

### Frontend
<p align="center">
<img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,html,css,redux&theme=dark" />
</p>

### Backend & Databases
<p align="center">
<img src="https://skillicons.dev/icons?i=fastapi,spring,nodejs,express,mongodb,postgres,redis&theme=dark" />
</p>

### Cloud, DevOps & Tools
<p align="center">
<img src="https://skillicons.dev/icons?i=aws,docker,nginx,git,github,postman,vercel,linux&theme=dark" />
</p>

---

## 🚀 Featured Projects

---

### 🤖 AskAnas — Live AI Agent Portfolio

> **FastAPI · LangGraph ReAct Agents · Qdrant Cloud · Groq · Next.js 14 · LangSmith · PostHog**

An AI agent that replaces a static resume — recruiters talk to it instead of reading a PDF. Not a wrapped chatbot: a full agentic RAG pipeline with production-grade guardrails and observability.

```
Question → LLM-as-judge input guardrail (blocks injection, off-topic, PII-extraction)
         → LangGraph ReAct agent decides: semantic search or deterministic listing?
         → Qdrant Cloud retrieval → cited, grounded answer
         → streamed token-by-token via SSE → output guardrail screens for drift
         → every step traced live in LangSmith
```

| What | How |
|------|-----|
| 🧠 Real agentic reasoning | LangGraph ReAct agent routes between semantic retrieval and deterministic tools — provably not a single LLM call, verifiable via live LangSmith traces |
| 🛡️ LLM-as-judge guardrails | Input + output screening for prompt injection, off-topic drift, and info leaks — fails open, not closed, so a judge hiccup never blocks real users |
| 📊 Real eval numbers | 15-query LLM-as-judge eval suite — **4.4/5 groundedness, 4.6/5 context relevance** — after catching and fixing a retrieval-mismatch bug in the eval harness itself |
| 🔭 Full observability | Every request traced in LangSmith (tool calls, retrieval, latency, cost); real engagement tracked in PostHog |
| 🚀 Deployed | Vercel (frontend) + Render (backend) + Qdrant Cloud, with scheduled uptime monitoring |

[![Live](https://img.shields.io/badge/Talk_to_it_Live-00D4FF?style=for-the-badge&logo=vercel&logoColor=black)](https://askanas.vercel.app)
[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web)

---

### 🧭 RepoMind — Agentic RAG for Codebase Q&A

> **FastAPI · LangGraph ReAct Agents · Qdrant · fastembed · Next.js · Clerk**

Paste a GitHub repo URL, ask questions in plain English — get answers with exact file/line citations, not guesses.

```
Question → ReAct agent decides: search codebase or read full file?
         → Qdrant vector search → citations attached
         → streamed answer via SSE
```

| What | How |
|------|-----|
| 🧠 Agentic reasoning | LangGraph ReAct agent — decides *when* and *how* to search, not a fixed pipeline |
| 📉 Memory fix | Replaced sentence-transformers/PyTorch with **fastembed** — cut footprint ~96% (1.2GB → 50MB), solved OOM crash on free-tier hosting |
| 📍 Grounded answers | Every response cites exact file path + line numbers |
| 🚀 Deployed | Backend (Render) + Frontend (Vercel), independently scaled |

[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web/repomind)
[![Live](https://img.shields.io/badge/Live_Demo-00D4FF?style=for-the-badge&logo=vercel&logoColor=black)](https://repomind-nu.vercel.app)

---

### 📄 DevDocs AI — Multi-Tenant B2B RAG SaaS

> **Java · Spring Boot · Next.js · Pinecone · Redis · Groq · AWS EC2**

Companies upload their OpenAPI spec, get an AI chatbot for their developer portal — fully isolated per tenant.

| What | How |
|------|-----|
| 🏢 Multi-tenant isolation | 4 layers: JWT claims, ThreadLocal, SQL row filtering, Pinecone namespace isolation |
| 🎯 Hallucination control | Confidence-threshold filtering + Cohere cross-encoder reranking before answer generation |
| 💰 Cost optimization | Redis caching (SHA-256 query hashing) — cut LLM cost **~65%** |
| ⚡ Streaming | SSE-streamed LLM responses, production Nginx + CI/CD on AWS EC2 |

[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web/devdocs-ai)
[![Live](https://img.shields.io/badge/Live_Demo-00D4FF?style=for-the-badge&logo=vercel&logoColor=black)](https://devdocsai.online)

---

### 🧠 AgenticRAG — Agentic Document Intelligence Platform

> **Next.js · LangGraph · LangChain · Qdrant · MongoDB · Groq · NextAuth.js**

An agent that doesn't just retrieve once — it decides when to search again, rephrase, or switch retrieval strategy.

- Full reasoning trace panel — see every tool call the agent makes, with chunk-level citations
- 3 retrieval tools (semantic search, query rewriter, metadata-filtered search)
- Sub-5s response times, multi-session history via MongoDB + NextAuth.js

[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web/RAG)

---

### 🏦 UPI Offline Mesh — Distributed Payment System

> **Java · Spring Boot · RSA+AES Cryptography · Idempotency · Distributed Systems**

**The problem:** How do you send a UPI payment with zero internet — basement, concert, flood zone, anywhere?

**The solution:** Encrypt the payment on the sender's phone → broadcast hop-by-hop through strangers' Bluetooth mesh → when *any* phone gets internet, it silently uploads → exactly-once settlement on the backend.

| What | How |
|------|-----|
| 🔐 Tamper-proof transmission | Hybrid RSA-OAEP + AES-256-GCM — one flipped bit breaks GCM tag |
| ⚛️ Exactly-once settlement | SHA-256 hash + `ConcurrentHashMap.putIfAbsent` (≈ Redis SETNX) |
| 🧪 Proven under concurrency | 3 threads deliver same packet simultaneously → 1 `SETTLED`, 2 `DUPLICATE_DROPPED` |
| 📋 ACID transactions | Spring `@Transactional` + `@Version` optimistic locking |
| 🛡️ Replay attack prevention | Signed nonce + 24h freshness window inside encrypted payload |

[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web/upi-offline-mesh)

---

### 🌐 DevConnect — Production SaaS Platform

> **React.js · Node.js · Express · MongoDB · AWS EC2 · Socket.io · Razorpay**

A full-stack developer networking platform — **live on AWS, real users, real payments.**

| Metric | Result |
|--------|--------|
| ⚡ Backend throughput | **+45%** via MongoDB compound indexing |
| 📨 Daily load | **1,000+ requests/day** with rate limiting & pagination |
| 🔒 Auth | JWT + RBAC via HTTP-only cookies |
| 💬 Real-time | Socket.io event-driven room messaging |
| 💳 Payments | Razorpay webhooks with server-side verification |
| 🚀 Infrastructure | AWS EC2 + Nginx + PM2 + SSL/TLS |

[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web/DevConnect)
[![Live](https://img.shields.io/badge/Live_Demo-00D4FF?style=for-the-badge&logo=vercel&logoColor=black)](http://devconnectweb.xyz)

---

## 🏆 Achievements

```
🥇  NPTEL Java Programming          — IIT nationally recognised certification
🎖️  Cisco C++ Programming           — Certified
🌟  Hacktoberfest SuperContributor  — 6 PRs merged into open-source repositories
👕  Official T-shirt earned          — + 🌳 DigitalOcean planted a tree in my name
🔥  250+ DSA problems on LeetCode   — 140+ day streak maintained
⭐  Appreciated by JS Mastery        — Adrian Hajdin, for advanced GSAP project
🚀  Production systems               — Real users, real AWS, real payments
🤖  Shipped a live agentic AI system — guardrails, evals, and tracing, not just a demo
```

---

## 📊 GitHub Stats

<div align="center">

<img height="165" src="https://github-readme-stats.vercel.app/api?username=Anas2604-web&show_icons=true&theme=github_dark&hide_border=true&icon_color=00D4FF&title_color=00D4FF&text_color=C9D1D9&bg_color=0D1117" />
&nbsp;
<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anas2604-web&layout=compact&theme=github_dark&hide_border=true&title_color=00D4FF&text_color=C9D1D9&bg_color=0D1117&langs_count=6" />

<br/><br/>

[![GitHub Streak](https://streak-stats.demolab.com?user=Anas2604-web&theme=dark&hide_border=true&ring=00D4FF&fire=00D4FF&currStreakLabel=00D4FF&background=0D1117)](https://git.io/streak-stats)

</div>

---

## 🏆 Trophies

<div align="center">
<img src="https://github-profile-trophy.vercel.app/?username=Anas2604-web&theme=darkhub&no-frame=true&no-bg=true&margin-w=8&column=7" />
</div>

---

## 🐍 Contribution Graph

<div align="center">
<img src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake-dark.svg" alt="GitHub Snake Dark"/>
</div>

---

## 🎖️ Holopin Badges

<div align="center">
<a href="https://holopin.io/@anas2604web">
<img src="https://holopin.me/anas2604web" width="750" alt="Holopin Badges"/>
</a>

**🏆 Hacktoberfest SuperContributor 2025** — 6 PRs merged · Official T-shirt · 🌳 Tree planted in my name by DigitalOcean
</div>

---

## 🔗 Let's Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anas-khan-47485224a)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:annaasskhan6@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/Anas_2604)
[![AskAnas](https://img.shields.io/badge/Talk_to_my_AI_Agent-00D4FF?style=for-the-badge&logo=vercel&logoColor=black)](https://askanas.vercel.app)

<br/>

> 💼 Open to: **AI Engineer · Full Stack Developer · Backend (Java/Python)**
> 📍 Based in Jabalpur, open to relocation · Responds within 24h

<br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,50:0a3d6b,100:0d1117&height=120&section=footer"/>

</div>
