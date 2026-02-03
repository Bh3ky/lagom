# Code Review Protocol (AI-Assisted)

## Purpose

This document defines the **mandatory rules and methodology** for reviewing code
that was written or assisted by AI.

The reviewing agent must treat this repository as **production-grade software**.

This protocol applies to:
- New features
- Refactors
- Bug fixes
- Configuration changes
- Infrastructure and tooling
- Any code written with AI assistance

---

## Core Review Principles

### 1. Official Documentation Is the Source of Truth

All feedback MUST be grounded in:
- Official language documentation (e.g. Python, TypeScript, Go)
- Official framework docs (e.g. React, FastAPI, Next.js)
- Official library or SDK docs
- Recognized standards (RFCs, W3C, OWASP)

❌ Do NOT rely on:
- Blog posts
- Medium articles
- StackOverflow answers without verification
- Personal preferences or stylistic opinions

If a recommendation is made, the agent MUST:
- Cite the relevant official documentation (by name)
- Explain *why* it applies here

---

### 2. No Assumptions About Intent

The agent must NOT assume:
- Performance requirements
- Scale expectations
- Security posture
- Architectural direction

If intent is unclear:
- Ask a precise clarifying question
- Or explicitly state uncertainty in the review

---

### 3. Efficiency First (But Not Premature Optimization)

The agent must evaluate:
- Algorithmic complexity
- Unnecessary re-renders / recomputations
- Redundant allocations
- Blocking operations
- Over-fetching or over-processing

Rules:
- Flag **obvious inefficiencies**
- Avoid speculative optimizations
- Prefer simple, readable, efficient solutions

If an optimization is suggested:
- Explain the tradeoff
- Explain when it matters
- Explain when it does *not*

---

### 4. Security Is Non-Negotiable

The agent MUST actively check for:
- Injection risks (SQL, command, template, JSON)
- Unsafe deserialization
- Improper authentication or authorization
- Insecure defaults
- Secrets in code
- Missing input validation
- Client/server trust boundary violations

Use established guidance:
- OWASP Top 10
- Official security guides for the framework/language

If a risk exists:
- Classify severity (Low / Medium / High)
- Explain exploit scenario
- Propose a safe mitigation

---

### 5. Safety & Correctness Over Cleverness

The agent must prioritize:
- Predictable behavior
- Explicit error handling
- Safe defaults
- Defensive programming where appropriate

Avoid praising:
- Clever hacks
- Obscure language features
- Overly compact logic

Code should be understandable by a **competent human engineer**, not just an AI.

---

## Review Workflow (Mandatory)

The agent MUST follow this sequence:

### Step 1: Understand the Code’s Role
- What problem does this code solve?
- Where does it run (client, server, edge, worker)?
- Who calls it?
- What are the inputs and outputs?

This understanding must be stated explicitly.

---

### Step 2: Validate Against Official Docs
For each major construct:
- APIs
- Hooks
- Framework features
- Language features

Confirm:
- Correct usage
- Supported patterns
- No deprecated behavior

If something is unconventional but valid, say so.

---

### Step 3: Evaluate Correctness
Check for:
- Logical errors
- Edge cases
- Race conditions
- State inconsistencies
- Error paths that are unhandled

If behavior depends on assumptions, state them clearly.

---

### Step 4: Efficiency Review
Evaluate:
- Time complexity
- Space usage
- Rendering behavior (frontend)
- I/O patterns (backend)

Flag:
- Avoidable loops
- Duplicate work
- Inefficient state management

---

### Step 5: Security Review
Explicitly assess:
- Input trust boundaries
- Output encoding
- Auth checks
- Secrets handling
- Dependency risks

This step MUST NOT be skipped.

---

### Step 6: Maintainability Review
Check for:
- Readability
- Naming clarity
- Logical structure
- Testability
- Coupling and cohesion

Avoid suggesting refactors unless:
- They clearly improve safety, correctness, or clarity
- The benefit outweighs the cost

---

## How Feedback Must Be Written

### Structure Every Review Like This:

1. **Summary**
   - Overall assessment
   - Major risks (if any)

2. **What’s Correct**
   - Explicitly call out correct usage
   - Reinforce good patterns

3. **Issues Found**
   For each issue:
   - Description
   - Severity
   - Why it matters
   - Reference to official documentation
   - Suggested fix (conceptual or concrete)

4. **Optional Improvements**
   - Clearly marked as optional
   - No pressure to implement

---

## What the Agent Must NOT Do

The reviewing agent must NOT:
- Rewrite large portions of code
- Introduce new libraries
- Enforce personal style preferences
- Suggest architectural changes unless required
- Overwhelm with nitpicks
- “Praise sandwich” without substance

---

## Handling AI-Generated Code Specifically

When reviewing AI-assisted code, the agent MUST:
- Be extra strict about correctness
- Verify that APIs are used as intended
- Watch for hallucinated functions or options
- Check for subtle security flaws
- Check for unnecessary abstraction

AI-written code must earn trust through validation, not confidence.

---

## When to Escalate

The agent must STOP and flag for human attention if:
- Security implications are unclear
- Requirements are ambiguous
- Fixes require design decisions
- Behavior impacts data integrity

---

## Final Rule

If the agent cannot clearly explain:
- What the code does
- Why it is correct
- Why it is safe
- Why it is efficient enough

Then the code review is **incomplete**.

Understanding is mandatory. Confidence is optional.
