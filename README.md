<div align="center">

<!-- ══════════════════════ BANNER ══════════════════════ -->

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:0a3d6b,100:00d4ff&height=200&section=header&text=Anas%20Khan&fontSize=70&fontColor=ffffff&fontAlignY=38&desc=Full%20Stack%20Engineer%20%C2%B7%20Java%20%C2%B7%20Spring%20Boot%20%C2%B7%20React%20%C2%B7%20AI%20Systems&descAlignY=58&descSize=18&descColor=a0c4d8&animation=fadeIn"/>

<!-- ══════════════════════ TYPING ══════════════════════ -->

<br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&pause=1000&color=00D4FF&center=true&vCenter=true&width=750&lines=Java+%7C+Spring+Boot+%7C+React.js+%7C+Node.js;Financial-Grade+Distributed+Systems+%F0%9F%8F%A6;RAG+Pipelines+%7C+Vector+DBs+%7C+LLM+Integration+%F0%9F%A4%96;250%2B+DSA+Problems+%7C+AWS+%7C+Production+SaaS+%F0%9F%9A%80;Final+Year+CS+%40+GGITS+Jabalpur+%F0%9F%87%AE%F0%9F%87%B3" alt="Typing SVG" />

<br/><br/>

<!-- ══════════════════════ BADGES ══════════════════════ -->

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anas-khan-47485224a)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:annaasskhan6@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/Anas_2604)
[![Portfolio](https://img.shields.io/badge/Portfolio-00D4FF?style=for-the-badge&logo=vercel&logoColor=black)](https://portfolio-website-sage-eta-55.vercel.app/)

<br/>

![Profile Views](https://komarev.com/ghpvc/?username=Anas2604-web&style=flat-square&color=00D4FF&label=Profile+Views)

</div>

---

<div align="center">

## 👨‍💻 About Me

</div>

```java
public class AnasKhan extends FullStackEngineer {

    String   name          = "Anas Khan";
    String   location      = "Jabalpur, Madhya Pradesh 🇮🇳";
    String   education     = "B.Tech CS @ GGITS (2022–2026)";
    String   email         = "annaasskhan6@gmail.com";
    int      dsaProblems   = 250;   // LeetCode — and counting
    boolean  openToWork    = true;

    String[] expertise     = {
        "Java + Spring Boot — financial-grade backends",
        "React.js — production SaaS frontends",
        "AI/RAG pipelines — vector DBs + LLMs",
        "AWS EC2 — real deployments, real users"
    };

    String motto = "Code. Build. Ship. Learn. Repeat. 🚀";
}
```

---

## 🛠️ Tech Stack

### Languages
<p align="center">
<img src="https://skillicons.dev/icons?i=java,js,ts,cpp,python&theme=dark" />
</p>

### Frontend
<p align="center">
<img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,html,css,redux&theme=dark" />
</p>

### Backend & Databases
<p align="center">
<img src="https://skillicons.dev/icons?i=spring,nodejs,express,mongodb,postgres,supabase&theme=dark" />
</p>

### Cloud, DevOps & Tools
<p align="center">
<img src="https://skillicons.dev/icons?i=aws,docker,nginx,git,github,postman,vercel,linux&theme=dark" />
</p>

### AI / ML
<p align="center">
<img src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white"/>
<img src="https://img.shields.io/badge/Qdrant-DC244C?style=for-the-badge&logo=qdrant&logoColor=white"/>
<img src="https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white"/>
<img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black"/>
<img src="https://img.shields.io/badge/Vector%20DBs-6C63FF?style=for-the-badge&logo=databricks&logoColor=white"/>
</p>

---

## 🚀 Featured Projects

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

[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web)

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

[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web)
[![Live](https://img.shields.io/badge/Live_Demo-00D4FF?style=for-the-badge&logo=vercel&logoColor=black)](http://devconnectweb.xyz)

---

### 🤖 Agentic RAG — LLM Knowledge Retrieval

> **Next.js · LangChain · Qdrant · Ollama · HuggingFace · Vector Embeddings**

Ask questions. Get answers grounded in **your documents** — not hallucinations.

```
Question → 768D embedding → Qdrant HNSW search
         → top-k chunks retrieved → LLM generates answer
         → cited response with source chunks
```

- Full pipeline: ingestion → embeddings → vector storage → retrieval → generation
- Hybrid ReAct agent + fallback RAG for multi-provider LLM compatibility  
- 100+ chunks per multi-document query
- Citation-aware `/api/upload` and `/api/ask` REST endpoints

[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web)

---

### 🧮 VectorDB-Java — Vector Database from Scratch

> **Java 17 · Javalin · HNSW · KD-Tree · Brute Force · Ollama**

Built a **production-grade vector database engine in pure Java** — every algorithm from scratch, no shortcuts.

| Algorithm | Complexity | Method |
|-----------|-----------|--------|
| **HNSW** | O(log N) approx | Multilayer small-world graph — same as Pinecone, Chroma, Weaviate |
| **KD-Tree** | O(log N) exact | Binary space partitioning with axis-aligned pruning |
| **Brute Force** | O(N·d) exact | Max-heap baseline for correctness benchmarking |

Full REST API + live benchmark mode + PCA scatter plot + RAG pipeline via Ollama.

[![GitHub](https://img.shields.io/badge/View_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anas2604-web)

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
[![Portfolio](https://img.shields.io/badge/Portfolio-00D4FF?style=for-the-badge&logo=vercel&logoColor=black)](https://portfolio-website-sage-eta-55.vercel.app/)

<br/>

> 💼 Open to: **Full Stack · Backend · Java + Spring Boot · AI/ML roles**
> 📍 Based in Jabalpur · Available May 2026 · Responds within 24h

<br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,50:0a3d6b,100:0d1117&height=120&section=footer"/>

</div>
