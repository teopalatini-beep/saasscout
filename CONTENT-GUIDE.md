# SaaSScout — Content Guide

## Voice & Style Rules

### Tone
- Write like a knowledgeable friend, not a brand or journalist
- Use "you" and "your" — never "users" or "one" or "individuals"
- Be direct. Say "this tool sucks at X" not "this tool has room for improvement in X"
- Zero corporate language. No "leverage", "synergy", "empower", "streamline"
- Zero filler intros. No "In today's digital landscape...", "When it comes to..."

### Structure
- Short paragraphs: 1-3 sentences max
- Lead with the verdict. Never bury it at the bottom
- Every feature connects to an outcome, not a spec
  - Wrong: "Advanced real-time collaborative editing system"
  - Right: "Two people can edit the same doc without stepping on each other"
- At least ONE honest criticism per article. Pure praise = zero trust
- Zero emojis in body text. Category badges only.

### SEO
- Target keyword in: H1, first paragraph, one H2, meta description
- 2-3 related long-tail keywords in other H2s
- Meta title: under 60 characters
- Meta description: under 155 characters
- Internal links: link to 2-3 other SaaSScout articles naturally

### Affiliate Links
- Max 3 affiliate links per article (CTA spots below)
- Never disguise affiliate links — the About page discloses the relationship
- Link text = action-oriented: "Try X free" not "Click here"
- Placement:
  1. After the TL;DR / verdict box
  2. After the pricing section
  3. At the final verdict

---

## Article Formats

### FORMAT 1: Review (1,500-2,000 words)

**Filename:** `[tool-name]-review.mdx`

```yaml
---
title: "[Tool] Review 2026: [Honest Hook]"
description: "[What we tested, key finding, who it's for]. Under 155 chars."
pubDate: 'YYYY-MM-DD'
category: 'review'
tags: ['category', 'subcategory']
rating: 8          # 1-10
verdict: 'recommended'  # recommended | conditional | not-recommended
# heroImage: '../../assets/blog/tool-hero.png'    # add when available
# toolLogo: '../../assets/blog/tool-logo.png'     # add when available
---
```

**Outline:**

```
## TL;DR
- Rating: X/10
- Who it's for: [one sentence]
- Who should skip it: [one sentence]

## What is [Tool]
[2 sentences max. Assume reader knows the category.]

## Pricing
[Table: Plan | Price | Key limits]
[One line: "The plan most people should pick: X because Y"]

## What I Liked
[3-4 specific positives with examples]
[Each one: what the feature IS → what it DOES for you]

## What I Didn't Like
[2-3 genuine negatives]
[Be specific: "The X doesn't do Y" not "it could be better"]

## [Tool] vs The Competition
[Table: Feature | Tool | Competitor A | Competitor B]

## Who Should Use [Tool]
[Specific scenario where this tool wins]

## Who Should Skip It
[Specific scenario where another tool is better]

## Final Verdict
[3 sentences max. Clear recommendation.]
[Affiliate CTA link]

import ExternalResources...
<ExternalResources resources={[...]} />
```

**Title formulas:**
- "[Tool] Review 2026: Is It Worth $X/Month?"
- "[Tool] Review 2026: The [Adjective] Tool Nobody Talks About"
- "[Tool] Review: Honest Take After 30 Days"
- "[Tool] Review 2026: [Specific Claim]"

---

### FORMAT 2: Comparison (1,500-2,000 words)

**Filename:** `[tool-a]-vs-[tool-b].mdx`

```yaml
---
title: "[Tool A] vs [Tool B]: Which [Category] Tool Is Better in 2026?"
description: "Head-to-head comparison of [A] and [B]. [Key differentiator]. Under 155 chars."
pubDate: 'YYYY-MM-DD'
category: 'comparison'
tags: ['category', 'tool-a', 'tool-b']
---
```

**Outline:**

```
## The Short Answer
[3 sentences. Tool A wins for X. Tool B wins for Y. Pick A if Z, pick B if W.]

## What We're Comparing
[1 paragraph context. Why people compare these two.]

## Side-by-Side Overview
[BIG table: 8-10 features, price, free plan, best for]

## [Feature 1]: [Winner]
[2-3 paragraphs. Specific examples from both tools.]

## [Feature 2]: [Winner]
[Same structure]

## [Feature 3]: [Winner]
[Same structure]

## Pricing Reality Check
[Not just list price — calculate cost per month at actual usage]

## Who Should Pick [Tool A]
[Bullet points: specific situations]

## Who Should Pick [Tool B]
[Bullet points: specific situations]

## Our Pick
[Clear winner for SaaSScout's audience + why]
[Both affiliate CTAs]

import ExternalResources...
<ExternalResources resources={[...]} />
```

**Title formulas:**
- "[Tool A] vs [Tool B]: Which Is Better in 2026?"
- "[Tool A] vs [Tool B]: Which [Category] Tool Wins?"
- "[Tool A] vs [Tool B]: Honest Comparison After Testing Both"

---

### FORMAT 3: Listicle (2,000-2,500 words)

**Filename:** `best-[category]-tools.mdx`

```yaml
---
title: "X Best [Category] Tools for [Audience] in 2026"
description: "We tested [X] [category] tools. Here are the [X] that [specific outcome]. Under 155 chars."
pubDate: 'YYYY-MM-DD'
category: 'listicle'
tags: ['category', 'subcategory']
---
```

**Outline:**

```
## Our Top 3 Quick Picks
1. **[Tool]** — Best for [use case]. [Commission %].
2. **[Tool]** — Best for [use case].
3. **[Tool]** — Best for [use case].

## What We Tested
[1 paragraph: methodology. What we ran through each tool.]

## 1. [Tool Name]
**Best for:** [one line]
[2-3 paragraphs: what it does well, key limitation]
**Pricing:** [one line]
**The catch:** [one honest negative]

## 2. [Tool Name]
[Same structure]

...repeat for each tool...

## Bottom Line
[2-3 sentences. Clear recommendation per scenario.]

import ExternalResources...
<ExternalResources resources={[...]} />
```

**Title formulas:**
- "X Best [Category] Tools for [Audience] in 2026"
- "X Best Free [Category] Tools (Actually Tested)"
- "X Best [Category] Tools Under $50/Month"

**Rules:**
- Always odd numbers: 5, 7, 9 tools (odd numbers get more clicks)
- #1 pick = highest affiliate commission that is genuinely good
- Include at least 1 free option
- Include at least 1 budget option

---

### FORMAT 4: Guide (2,000-3,000 words)

**Filename:** `how-to-[action].mdx`

```yaml
---
title: "How to [Action] in 2026: A Complete Beginner Guide"
description: "Step-by-step guide to [action]. [Outcome]. No experience needed. Under 155 chars."
pubDate: 'YYYY-MM-DD'
category: 'guide'
tags: ['beginner', 'category']
---
```

**Outline:**

```
## Who This Guide Is For
[2 sentences. Skill level + what they'll achieve.]

## Step 1: [Action Verb]
[Explanation + specific instructions]
[Link to relevant SaaSScout review if a tool is involved]

## Step 2: [Action Verb]
[Same structure]

...repeat for each step (5-8 steps)...

## What to Expect
[Timeline: month 1, month 3, month 6]
[Honest about how long results take]

## Common Mistakes
[3-5 mistakes with why they happen and how to avoid]

import ExternalResources...
<ExternalResources resources={[...]} />
```

**Title formulas:**
- "How to [Action] in 2026: A Complete Beginner Guide"
- "How to [Action] Step by Step (No Experience Needed)"
- "[Action]: The Complete Guide for [Audience]"

---

### FORMAT 5: Tutorial (1,000-1,500 words)

**Filename:** `how-to-use-[tool].mdx`

```yaml
---
title: "How to Use [Tool]: Step by Step Tutorial"
description: "Complete tutorial for [Tool]. [What you'll build/achieve]. With screenshots. Under 155 chars."
pubDate: 'YYYY-MM-DD'
category: 'tutorial'
tags: ['tutorial', 'tool-name']
---
```

**Outline:**

```
## What You'll Build
[1 sentence. The specific outcome of following this tutorial.]

## Prerequisites
[What they need before starting: account, free trial, etc.]
[Affiliate link to sign up]

## Step 1: [Specific Action]
[Screenshot placeholder + instructions]

## Step 2: [Specific Action]
[Same structure]

...5-8 steps...

## Result
[What they should have now]

## Next Steps
[Link to review article + other tutorials]

import ExternalResources...
<ExternalResources resources={[...]} />
```

---

## Content Calendar — Articles 7-30

### Sprint 1 (May 16-22): Reach 10 articles

| # | Title | Type | Affiliate | Keywords |
|---|-------|------|-----------|----------|
| 7 | Moosend Review 2026: The Email Tool That Costs Almost Nothing | review | 40% recurring | moosend review, moosend pricing |
| 8 | 9 Best Dropshipping Tools for Beginners in 2026 | listicle | AutoDS 20%, Shopify $150 | best dropshipping tools, dropshipping software |
| 9 | ElevenLabs vs Murf AI: Which AI Voice Generator Wins? | comparison | ElevenLabs 22%, Murf 20% | elevenlabs vs murf, best ai voice generator |
| 10 | How to Use Jasper AI: Complete Beginner Tutorial | tutorial | Jasper 30% | how to use jasper ai, jasper ai tutorial |

### Sprint 2 (May 23-29): Affiliate links live

| # | Title | Type | Affiliate | Keywords |
|---|-------|------|-----------|----------|
| 11 | Writesonic Review 2026: The Budget AI Writer | review | 30% recurring | writesonic review, writesonic pricing |
| 12 | 7 Best Email Marketing Tools for Small Business in 2026 | listicle | Moosend 40%, Beehiiv 20% | best email marketing tools, email marketing software |

### Sprint 3 (May 30-Jun 5): Video launch

| # | Title | Type | Affiliate | Keywords |
|---|-------|------|-----------|----------|
| 13 | Notion Review 2026: Is It Really Free? | review | 50% for 12 months | notion review, notion pricing, is notion free |

### Sprint 4 (Jun 6-12): Domain + analytics

| # | Title | Type | Affiliate | Keywords |
|---|-------|------|-----------|----------|
| 14 | 5 Best AI Voice Generators in 2026 (We Tested Them All) | listicle | ElevenLabs, Murf, Speechify | best ai voice generator, ai text to speech |

### Sprint 5 (Jun 13-19): Weekly rhythm

| # | Title | Type | Affiliate | Keywords |
|---|-------|------|-----------|----------|
| 15 | Shopify Review 2026: Is It Still the Best E-commerce Platform? | review | $150 bounty | shopify review, shopify pricing 2026 |
| 16 | ConvertKit vs Beehiiv: Which Newsletter Platform Wins? | comparison | Beehiiv 20% | convertkit vs beehiiv, best newsletter platform |
| 17 | How to Pick the Right SaaS Tool for Your Business | guide | Internal links | how to choose saas tools, saas buying guide |

### Sprint 6 (Jun 20-26): Optimize

| # | Title | Type | Affiliate | Keywords |
|---|-------|------|-----------|----------|
| 18 | Pictory Review 2026: AI Video Editing for Non-Editors | review | 30% recurring | pictory review, pictory ai |
| 19 | 7 Best Landing Page Builders in 2026 | listicle | Unbounce 20%, Systeme.io 60% | best landing page builder |
| 20 | Jasper AI vs Writesonic vs Claude: Which AI Writer Should You Use? | comparison | Jasper 30%, Writesonic 30% | jasper vs writesonic, best ai writer |

### Month 2-3 Pipeline (Jul-Aug)

| # | Title | Type | Affiliate |
|---|-------|------|-----------|
| 21 | HubSpot CRM Review: Is the Free Plan Actually Good? | review | 30% recurring |
| 22 | 5 Best Free CRM Tools for Small Business | listicle | HubSpot 30% |
| 23 | Canva vs Figma for Non-Designers | comparison | Canva affiliate |
| 24 | How to Build a Sales Funnel with Systeme.io | tutorial | 60% recurring |
| 25 | Beehiiv Review: The Newsletter Platform Built for Growth | review | 20% recurring |
| 26 | 9 Best AI Tools for Content Creators in 2026 | listicle | Multiple |
| 27 | How to Start a Newsletter That Makes Money | guide | Beehiiv 20% |
| 28 | Spocket Review: Dropshipping Without AliExpress Wait Times | review | 30% recurring |
| 29 | Copy.ai vs Jasper AI: Which Is Better for Ads? | comparison | Jasper 30% |
| 30 | The Complete Guide to SaaS Affiliate Marketing | guide | Internal links |

---

## Internal Linking Strategy

Every article must link to 2-3 other SaaSScout articles:

- **Reviews** → link to the listicle that includes the tool + the comparison if one exists
- **Comparisons** → link to both individual reviews
- **Listicles** → link to individual reviews for top 3 picks
- **Guides** → link to relevant tool reviews and listicles
- **Tutorials** → link to the tool's review

Example: "Jasper AI Review" links to:
- "Best AI Writing Tools" (listicle that includes Jasper)
- "Jasper vs Writesonic vs Claude" (comparison)
- "How to Use Jasper AI" (tutorial)

---

## External Resources per Article Type

### For Reviews:
1. G2/Capterra verified reviews (review)
2. Official pricing page (official)
3. YouTube comparison video search (comparison)
4. Reddit community discussion (community)

### For Comparisons:
1. Both tools on Chrome Web Store or G2 (review)
2. YouTube head-to-head search (comparison)
3. Reddit thread comparing both (community)

### For Listicles:
1. G2 Grid for the category (review)
2. Industry roundup from Zapier/HubSpot/etc (comparison)
3. Reddit community discussion (community)

### For Guides:
1. Authoritative blog post (Ahrefs, HubSpot, etc) (tutorial)
2. YouTube walkthrough (tutorial)
3. Reddit beginner thread (community)
4. Official tool if one is central to the guide (official)

---

## Newsletter Content Plan (weekly on Sundays)

### Format:
```
Subject: [This week's best tool find / specific insight]

1. Tool of the Week — [name + 2 sentences + link to review]
2. Quick Tip — [one actionable tip in 3 sentences]
3. What I'm Testing — [tool you're evaluating this week]
4. From the Blog — [links to 2 new articles]
```

### Subject line rules:
- Under 50 characters
- Specific, not generic: "This $27 tool replaced 3 apps" not "Weekly SaaS Roundup"
- Numbers work: "5 AI tools under $20/month"
- Questions work: "Are you overpaying for email marketing?"

---

## Video Script Format (for hook.prompt)

### Content per video:
Each video promotes ONE article. The video is the ad for the article.

### Video calendar matches article calendar:
| Article published | Video published | Video topic |
|---|---|---|
| Monday-Tuesday | Wednesday-Thursday | Same tool/topic |

### Script structure (always the same):
1. **Hook** (0-3s): Frustration or provocative statement
2. **Problem** (4-12s): Show the painful way
3. **Solution** (13-25s): Show the tool in action
4. **CTA** (26-30s): "Full review — link in bio"

### Platform posting order:
1. TikTok (primary — best organic reach for new accounts)
2. YouTube Shorts (same video, reupload)
3. Instagram Reels (add in Sprint 5 when workflow is smooth)
