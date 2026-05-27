import type { Skill } from "../types";

export const skillCategories: { label: string; key: Skill["category"] }[] = [
  { label: "Languages", key: "language" },
  { label: "Frameworks", key: "framework" },
  { label: "Tools", key: "tool" },
  { label: "Platforms", key: "platform" },
  { label: "Cyber Security", key: "cybersec" },
];

export const skills: Skill[] = [
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Go", category: "language" },
  { name: "Rust", category: "language" },
  { name: "C", category: "language" },
  { name: "SQL", category: "language" },
  { name: "Bash", category: "language" },
  { name: "Vue.js", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Vite", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Bun", category: "tool" },
  { name: "VS Code", category: "tool" },
  { name: "Linux", category: "platform" },
  { name: "Cloudflare", category: "platform" },
  { name: "GitHub Actions", category: "platform" },
  { name: "Burp Suite", category: "cybersec" },
  { name: "Wireshark", category: "cybersec" },
  { name: "Metasploit", category: "cybersec" },
  { name: "Nmap", category: "cybersec" },
  { name: "OWASP Top 10", category: "cybersec" },
  { name: "Penetration Testing", category: "cybersec" },
];
