# Plano de Desenvolvimento – Automatize Center (2 semanas)

## Objetivos
- Entregar onboarding guiado, melhorias de UX/Performance, e bases para IA/Analytics.
- Prover integrações iniciais (Intercom, Vimeo, Mailchimp stub) e estrutura para crescer.
- Garantir segurança básica (LGPD modal, logs) e documentação.

## Cronograma Resumido
### Semana 1
- Dia 1–2: Onboarding guiado (tour) e Intercom.
- Dia 3: Responsividade avançada + animações leves; performance <2s TTI.
- Dia 4: Vite dashboard base + drag‑and‑drop (react-beautiful-dnd) e persistência.
- Dia 5: Rascunho API IA (Express) + botão "Gerar com IA" com validação.

### Semana 2
- Dia 6: Analytics (Chart.js) + estrutura Node/Mongo + cache Redis (esqueleto).
- Dia 7: Templates multi‑canais (Mailchimp/Instagram – mocks e webhooks simulados).
- Dia 8: Segurança: modal LGPD/ISO, 2FA (esqueleto), logs auditáveis.
- Dia 9: Marketing: seção "Sucessos" + formulário de indicação (stub Firebase).
- Dia 10: A/B test (react-ab-test) + Typeform API + Airtable armazenamento.
- Demo: Preparar demo e checklist de qualidade (acessibilidade e compatibilidade).

## Branches e Fluxo de Git
- feature/ux-tour
- feature/responsive-perf
- feature/dashboard-dnd
- feature/ai-generate
- feature/analytics-charts
- feature/multichannel-templates
- feature/security-2fa-audit
- feature/affiliates-cases
- feature/ab-test-typeform
- feature/plans-freemium-addon

Fluxo:
1. Criar branch por categoria.
2. Abrir PR com descrição, critérios de aceitação e testes manuais.
3. Revisão + squash merge em `main`.

## UX/UI – Detalhes de Implementação
- Tour Interativo: usar Tippy.js (tooltips) acionado por "Experimentar agora"; persistir `tourCompleted` em `localStorage`; botão "Pular" e "Pausar".
- Vídeo curto: embed Vimeo no modal do tour (1–2 min).
- Intercom: inserir snippet com `APP_ID` via `<script>` condicional e permitir toggle em ambiente staging.
- Design Responsivo: manter CSS atual + adicionar animate.css para transições leves; revisar breakpoints 320–1920px; containers fluidos.
- Tema escuro: já há toggle; revisar contraste e tokens; garantir WCAG AA.
- Performance: budget (<2s TTI em 4G rápido), otimizar imagens SVG, pré‑conectar fontes, lazy para vídeos, minificar CSS/JS.

## Dashboard – Drag and Drop
- Base em `vite-project/` com React + `react-beautiful-dnd`.
- Widgets: "Conversas ativas", "Lembretes pendentes" (dados mock); persistir layout em `localStorage`.

## IA Generativa – Esqueleto
- Backend: `server/` (Express) com rota `POST /api/ai/generate`.
- Integração: OpenAI/Grok via `fetch` com `apiKey` em `process.env`.
- Validação: JSON Schema com `ajv` para formato das respostas do builder.
- Front: botão "Gerar com IA" chama a rota e renderiza blocos sugeridos.

## Analytics
- Front: Chart.js para métricas (conversão, ROI, funil) com dados mock.
- Back: MongoDB (coleções `events`, `metrics`) + cache Redis (
  TTL curto para queries quentes; invalidar em gravações).
- Notificações: Web Notifications API para alertas simples.

## Múltiplos Canais
- Mailchimp: mock de webhook + template JSON (modal com seleção de template).
- Instagram DMs: stub de webhook (documentar requisitos Meta API; usar mocks).
- Testes: simular 100 mensagens (script node com `faker`).

## Segurança, Conformidade e Escalabilidade
- Modal LGPD/ISO 27001 no footer (React Modal no Vite app), links para política.
- 2FA (Enterprise): esqueleto com `speakeasy` ou `otp.js` para TOTP.
- Logs auditáveis: middleware de logs em `.log` com timestamps e correlação `requestId`.
- Escalabilidade: documentar auto-scaling (AWS Auto Scaling) e alertas via WebSocket.
- Carga: arquivo `locustfile.py` com cenários; meta de >10k msgs/dia.

## Negócios e Marketing
- Seção "Sucessos": cards com vídeos YouTube e CTA.
- Programa de Afiliados: formulário de referral (stub Firebase) e geração de código.
- A/B Test: `react-ab-test` no Vite app; integração Typeform; gravação em Airtable.
- Planos: adicionar Freemium (100 msgs/mês) e add-on IA (R$29/mês) – refletir na UI.

## Critérios de Aceitação (principais)
- Tour: funciona, pausar/pular, persistência; vídeo carrega sob demanda.
- Responsividade: layouts consistentes 320–1920px; PageSpeed com TTI <2s.
- DnD: widgets reposicionáveis e persistentes; sem quebras.
- IA: requisição mock funcional e validação JSON Schema.
- Analytics: gráficos renderizam com dados mock; camada de cache documentada.
- Segurança: modal LGPD visível; logs criados por requisições; 2FA esqueleto testável.
- Marketing: seção e formulários funcionais com mocks; A/B test rodando.

## Acessibilidade e Compatibilidade
- WCAG 2.1 AA: foco visível, alternativas textuais, ARIA para elementos dinâmicos.
- Navegadores: Chrome, Firefox, Safari últimos dois releases.

## Entrega de Demo
- Roteiro de demo com casos de uso do tour, DnD e IA.
- Checklist de performance e acessibilidade anexo.
